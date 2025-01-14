---
title: How to Build a Real-Time Notification System with Go and Kafka
date: 2025-01-14T14:15:01.235Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafka/
posteditor: ""
proofreader: ""
---

By Hermann Rösch

<!-- more -->

These days, applications need to have instant data access and processing capabilities. Whether it's updating real-time stock trades for financial institutions or navigating through live traffic data, the ability to process and react to data in real time is crucial.

In this tutorial, you’ll delve into the mechanics of **Kafka** and then integrate it with **Go** to develop a real-time notification system.

In order to understand this article fully, you should have prior knowledge of [**Goroutines**][1], the [**Gin**][2] framework, and containerization tools like [**Docker**][3].

## Table of Contents

1.  [What is Kafka?][4]
2.  [How to Set Up the Project Workspace][5]
3.  [How to Create the User and Notification Models][6]
4.  [How to Set Up the Kafka Producer][7]
5.  [How to Set Up the Kafka Consumer][8]
6.  [Let's Test the Real-Time Notification System][9]
7.  [Wrapping Up][10]

## What is Kafka? 🤔

[Kafka][11] is a distributed event streaming platform. Initially developed by LinkedIn, Kafka was subsequently contributed to the Apache Software Foundation and made open-source. This transition marked its role as a key participant in real-time data streaming.

More than a simple communication tool, Kafka is an “event broker” — a system that controls and handles events or messages between various applications or services. It can handle massive daily event volumes as a distributed event streaming platform, guaranteeing that data is seamlessly transported and analyzed in real time.

Apart from its fundamental role as an event broker, Kafka offers durability, scalability, and fault-tolerance features. It also helps ensure that large-scale data streams are managed efficiently and reliably with very low latency.

### Kafka’s core components ⚙️

Now that you’ve been acquainted with Kafka, let’s dive into the main elements that make up its architecture:

#### Events

An event records the fact that “something happened”. It can be thought of as a message or a piece of data representing a change or an action. In the context of our real-time notification system, you could consider an event as follows:

-   Event key: `“1”` (representing the user **ID** for **Emma**)
-   Event value: `“Bruno started following you.”`

#### Brokers

A Kafka broker is a server that runs the Kafka software and stores data. While large-scale production setups often involve multiple brokers across several machines, you’ll use a single broker setup for this tutorial.

#### Topics

Topics in Kafka are similar to folders in a filesystem. They represent categories under which data or events are stored. For instance, an example topic name could be `"notifications"`.

#### Producers

Producers are entities that publish (write) or send messages to Kafka, such as a Go program or a service. When a producer has an event to send, it chooses a topic to address the event to.

#### Consumers

Consumers read and process events or messages from Kafka. After producers send messages to topics, consumers can subscribe to one or more topics to receive the messages.

#### Partitions

Each topic in Kafka can be further divided into partitions. Think of partitions as segments within a topic that enable Kafka to manage data more efficiently, especially in setups with multiple brokers.

You’ll stick with a basic configuration without delving into multiple partitions, but you should understand their role in larger Kafka deployments.

#### Consumer groups

While individual consumers handle messages from specific partitions, consumer groups manage coordination across multiple consumers.

A consumer group consists of multiple consumers collaboratively processing messages from different partitions of a topic. This ensures that each message from a partition is processed by just one consumer in the group, allowing for efficient and scalable consumption.

Think of it as a team of consumers working together, with each member responsible for messages from specific partitions, ensuring no message is overlooked.

#### Replicas

Replication ensures data safety. In larger Kafka deployments, storing multiple data replicas is common to help recover from unexpected failures.

You won’t be using replicas in this tutorial, but it’s beneficial to understand their significance in ensuring data durability in Kafka.

#### KRaft

[KRaft][12] is Kafka’s own consensus protocol introduced to eliminate the need for [ZooKeeper][13]. In short, KRaft manages metadata directly within Kafka, providing scalability, simplicity, and improved failover, among other benefits.

To tie all these components together, here’s a visual representation of Kafka’s core architecture, illustrating a broker, topics, partitions, and consumer groups:

![Image](https://www.freecodecamp.org/news/content/images/2023/08/Kafka_Architecture_Transparent_V2.png) _Visualizing Kafka’s event streaming Architecture_

## How to Set Up the Project Workspace 👨‍💻👩‍💻

Enough theory for now! Let’s get our hands dirty with the actual project.

Assuming that you have Docker and Go installed on your machine, let’s create a directory for the project named `kafka-notify`_._ Then, you will pull [**Bitnami’s Kafka Docker image**][14] for the Kafka setup, providing a hassle-free installation:

```
mkdir kafka-notify && cd kafka-notify

curl -sSL \
https://raw.githubusercontent.com/bitnami/containers/main/bitnami/kafka/docker-compose.yml > docker-compose.yml
```

Before starting the Kafka broker, there’s a slight modification required in the docker-compose.yml file. Find the following string:

```
KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://:9092
```

And replace it with:

```
KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092
```

The above change ensures Kafka advertises its listener on `localhost`, which allows our local Go application to connect seamlessly. Now, you can start the Kafka broker via the following Docker command:

```
docker-compose up -d
```

Next, you’ll need to create a few directories to organize the project files. The `cmd/producer` and `cmd/consumer` directories will contain the main application files, and the `pkg/models` directory will store the model declarations:

```
mkdir -p cmd/producer cmd/consumer pkg/models
```

The last step is to initialize Go modules and install external packages. You’ll be using `sarama` to establish a connection with the Kafka broker and `gin` to handle the API endpoints for the notification system:

```
go mod init kafka-notify
go get github.com/IBM/sarama github.com/gin-gonic/gin
```

## How to Create the User and Notification Models

With the workspace set up, the first step is to create the `User` and `Notification` structs. Move to the `pkg/models` directory, then create a new file named `models.go` and declare these structs within it:

```
package models

type User struct {
    ID   int    `json:"id"`
    Name string `json:"name"`
}

type Notification struct {
    From    User   `json:"from"`
    To      User   `json:"to"`
    Message string `json:"message"`
}
```

## How to Set Up the Kafka Producer 📤

The next step is to write the code for the producer. You’ll create a simple Gin web API where a user can send a notification to another user via an HTTP POST request. This request will then “produce” (send) a message to a Kafka topic named `"notifications"`.

Let’s navigate to the `cmd/producer` directory and create a new file named `producer.go`. Within it, you’ll set up the producer logic:

```
package main

import (
    "encoding/json"
    "errors"
    "fmt"
    "log"
    "net/http"
    "strconv"

    "kafka-notify/pkg/models"

    "github.com/IBM/sarama"
    "github.com/gin-gonic/gin"
)

const (
    ProducerPort       = ":8080"
    KafkaServerAddress = "localhost:9092"
    KafkaTopic         = "notifications"
)

// ============== HELPER FUNCTIONS ==============
var ErrUserNotFoundInProducer = errors.New("user not found")

func findUserByID(id int, users []models.User) (models.User, error) {
    for _, user := range users {
        if user.ID == id {
            return user, nil
        }
    }
    return models.User{}, ErrUserNotFoundInProducer
}

func getIDFromRequest(formValue string, ctx *gin.Context) (int, error) {
    id, err := strconv.Atoi(ctx.PostForm(formValue))
    if err != nil {
        return 0, fmt.Errorf(
            "failed to parse ID from form value %s: %w", formValue, err)
    }
    return id, nil
}

// ============== KAFKA RELATED FUNCTIONS ==============
func sendKafkaMessage(producer sarama.SyncProducer,
    users []models.User, ctx *gin.Context, fromID, toID int) error {
    message := ctx.PostForm("message")

    fromUser, err := findUserByID(fromID, users)
    if err != nil {
        return err
    }

    toUser, err := findUserByID(toID, users)
    if err != nil {
        return err
    }

    notification := models.Notification{
        From: fromUser,
        To:   toUser, Message: message,
    }

    notificationJSON, err := json.Marshal(notification)
    if err != nil {
        return fmt.Errorf("failed to marshal notification: %w", err)
    }

    msg := &sarama.ProducerMessage{
        Topic: KafkaTopic,
        Key:   sarama.StringEncoder(strconv.Itoa(toUser.ID)),
        Value: sarama.StringEncoder(notificationJSON),
    }

    _, _, err = producer.SendMessage(msg)
    return err
}

func sendMessageHandler(producer sarama.SyncProducer,
    users []models.User) gin.HandlerFunc {
    return func(ctx *gin.Context) {
        fromID, err := getIDFromRequest("fromID", ctx)
        if err != nil {
            ctx.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
            return
        }

        toID, err := getIDFromRequest("toID", ctx)
        if err != nil {
            ctx.JSON(http.StatusBadRequest, gin.H{"message": err.Error()})
            return
        }

        err = sendKafkaMessage(producer, users, ctx, fromID, toID)
        if errors.Is(err, ErrUserNotFoundInProducer) {
            ctx.JSON(http.StatusNotFound, gin.H{"message": "User not found"})
            return
        }
        if err != nil {
            ctx.JSON(http.StatusInternalServerError, gin.H{
                "message": err.Error(),
            })
            return
        }

        ctx.JSON(http.StatusOK, gin.H{
            "message": "Notification sent successfully!",
        })
    }
}

func setupProducer() (sarama.SyncProducer, error) {
    config := sarama.NewConfig()
    config.Producer.Return.Successes = true
    producer, err := sarama.NewSyncProducer([]string{KafkaServerAddress},
        config)
    if err != nil {
        return nil, fmt.Errorf("failed to setup producer: %w", err)
    }
    return producer, nil
}

func main() {
    users := []models.User{
        {ID: 1, Name: "Emma"},
        {ID: 2, Name: "Bruno"},
        {ID: 3, Name: "Rick"},
        {ID: 4, Name: "Lena"},
    }

    producer, err := setupProducer()
    if err != nil {
        log.Fatalf("failed to initialize producer: %v", err)
    }
    defer producer.Close()

    gin.SetMode(gin.ReleaseMode)
    router := gin.Default()
    router.POST("/send", sendMessageHandler(producer, users))

    fmt.Printf("Kafka PRODUCER 📨 started at http://localhost%s\n",
        ProducerPort)

    if err := router.Run(ProducerPort); err != nil {
        log.Printf("failed to run the server: %v", err)
    }
}
```

Let’s break down the Kafka-related components within `producer.go`:

Within the `**setupProducer()**` function:

-   `config := sarama.NewConfig()`: Initializes a new default configuration for Kafka. Think of it as setting up the parameters before connecting to the broker.
-   `config.Producer.Return.Successes = true`: Ensures that the producer receives an acknowledgment once the message is successfully stored in the `"notifications"` topic.
-   `producer, err := sarama.NewSyncProducer(…)`: Initializes a synchronous Kafka producer that connects to the Kafka broker running at `localhost:9092`.

Inside the `**sendKafkaMessage()**` function:

-   This function starts by retrieving the `message` from the context and then attempts to find both the sender and the recipient using their IDs.
-   `notification := models.Notification{…}`: Initializes a `Notification` struct that encapsulates information about the sender, the recipient, and the actual message.
-   `msg := &sarama.ProducerMessage{…}`: Constructs a `ProducerMessage` for the `"notifications"` topic, setting the recipient’s ID as the `Key` and the message content, which is the serialized form of the `Notification` as the `Value`.
-   `producer.SendMessage(msg)`: Sends the constructed message to the `"notifications"` topic.

In the `**sendMessageHandler()**` function:

-   This function serves as an endpoint handler for the `/send` POST request. It processes the incoming request to ensure valid sender and recipient IDs are provided.
-   After fetching the IDs, it invokes the `sendKafkaMessage()` function to send the Kafka message. Depending on the result, it dispatches appropriate HTTP responses: a `404 Not Found` for nonexistent users, a `400 Bad Request` for invalid IDs, and a `500 Internal Server Error` for other failures, along with a specific error message.

Finally, within the `**main()**` function:

-   You initialize a Kafka producer via the `setupProducer()` function.
-   Then, you create a Gin `router` via `gin.Default()`, setting up a web server. Next, you define a POST endpoint `/send` to handle notifications. This endpoint expects the sender and recipient’s IDs and the message content.
-   The notification is processed upon receiving a POST request via the `sendMessageHandler()` function, and an appropriate HTTP response is dispatched.

The above setup provides a simple way to simulate users sending notifications to each other and showcases how these notifications are produced to the `"notifications"` topic.

## How to Set Up the Kafka Consumer 📥

After creating the producer, the next step is to set up a consumer that listens to the `"notifications"` topic and provides an endpoint to list notifications for a specific user.

Let’s move to the `cmd/consumer` directory and create a new file named `consumer.go`. Within it, you’ll set up the consumer logic and the Gin-based API:

```
package main

import (
    "context"
    "encoding/json"
    "errors"
    "fmt"
    "log"
    "net/http"
    "sync"

    "kafka-notify/pkg/models"

    "github.com/IBM/sarama"
    "github.com/gin-gonic/gin"
)

const (
    ConsumerGroup      = "notifications-group"
    ConsumerTopic      = "notifications"
    ConsumerPort       = ":8081"
    KafkaServerAddress = "localhost:9092"
)

// ============== HELPER FUNCTIONS ==============
var ErrNoMessagesFound = errors.New("no messages found")

func getUserIDFromRequest(ctx *gin.Context) (string, error) {
    userID := ctx.Param("userID")
    if userID == "" {
        return "", ErrNoMessagesFound
    }
    return userID, nil
}

// ====== NOTIFICATION STORAGE ======
type UserNotifications map[string][]models.Notification

type NotificationStore struct {
    data UserNotifications
    mu   sync.RWMutex
}

func (ns *NotificationStore) Add(userID string,
    notification models.Notification) {
    ns.mu.Lock()
    defer ns.mu.Unlock()
    ns.data[userID] = append(ns.data[userID], notification)
}

func (ns *NotificationStore) Get(userID string) []models.Notification {
    ns.mu.RLock()
    defer ns.mu.RUnlock()
    return ns.data[userID]
}

// ============== KAFKA RELATED FUNCTIONS ==============
type Consumer struct {
    store *NotificationStore
}

func (*Consumer) Setup(sarama.ConsumerGroupSession) error   { return nil }
func (*Consumer) Cleanup(sarama.ConsumerGroupSession) error { return nil }

func (consumer *Consumer) ConsumeClaim(
    sess sarama.ConsumerGroupSession, claim sarama.ConsumerGroupClaim) error {
    for msg := range claim.Messages() {
        userID := string(msg.Key)
        var notification models.Notification
        err := json.Unmarshal(msg.Value, &notification)
        if err != nil {
            log.Printf("failed to unmarshal notification: %v", err)
            continue
        }
        consumer.store.Add(userID, notification)
        sess.MarkMessage(msg, "")
    }
    return nil
}

func initializeConsumerGroup() (sarama.ConsumerGroup, error) {
    config := sarama.NewConfig()

    consumerGroup, err := sarama.NewConsumerGroup(
        []string{KafkaServerAddress}, ConsumerGroup, config)
    if err != nil {
        return nil, fmt.Errorf("failed to initialize consumer group: %w", err)
    }

    return consumerGroup, nil
}

func setupConsumerGroup(ctx context.Context, store *NotificationStore) {
    consumerGroup, err := initializeConsumerGroup()
    if err != nil {
        log.Printf("initialization error: %v", err)
    }
    defer consumerGroup.Close()

    consumer := &Consumer{
        store: store,
    }

    for {
        err = consumerGroup.Consume(ctx, []string{ConsumerTopic}, consumer)
        if err != nil {
            log.Printf("error from consumer: %v", err)
        }
        if ctx.Err() != nil {
            return
        }
    }
}

func handleNotifications(ctx *gin.Context, store *NotificationStore) {
    userID, err := getUserIDFromRequest(ctx)
    if err != nil {
        ctx.JSON(http.StatusNotFound, gin.H{"message": err.Error()})
        return
    }

    notes := store.Get(userID)
    if len(notes) == 0 {
        ctx.JSON(http.StatusOK,
            gin.H{
                "message":       "No notifications found for user",
                "notifications": []models.Notification{},
            })
        return
    }

    ctx.JSON(http.StatusOK, gin.H{"notifications": notes})
}

func main() {
    store := &NotificationStore{
        data: make(UserNotifications),
    }

    ctx, cancel := context.WithCancel(context.Background())
    go setupConsumerGroup(ctx, store)
    defer cancel()

    gin.SetMode(gin.ReleaseMode)
    router := gin.Default()
    router.GET("/notifications/:userID", func(ctx *gin.Context) {
        handleNotifications(ctx, store)
    })

    fmt.Printf("Kafka CONSUMER (Group: %s) 👥📥 "+
        "started at http://localhost%s\n", ConsumerGroup, ConsumerPort)

    if err := router.Run(ConsumerPort); err != nil {
        log.Printf("failed to run the server: %v", err)
    }
}
```

Let’s examine the Kafka-related operations within `consumer.go`:

Within the `**initializeConsumerGroup()**` function:

-   `config := sarama.NewConfig()`: Initializes a new default configuration for Kafka.
-   `consumerGroup, err := sarama.NewConsumerGroup(…)`: Creates a new Kafka consumer group that connects to the broker running on `localhost:9092`. The group name is `"notifications-group"`.

Inside the `**Consumer**` struct and its methods:

-   The `Consumer` struct has a `store` field, which is a reference to the `NotificationStore` to keep track of the received notifications.
-   `Setup()` and `Cleanup()` methods are required to satisfy the `sarama.ConsumerGroupHandler` interface. While they will NOT be used in this tutorial, they can serve potential roles for initialization and cleanup during message consumption but act as placeholders here.
-   In the `ConsumeClaim()` method: The consumer listens for new messages on the topic. For each message, it fetches the `userID` (the `Key` of the message), un-marshals the message into a `Notification` struct, and adds the notification to the `NotificationStore`.

In the `**setupConsumerGroup()**` function:

-   This function sets up the Kafka consumer group, listens for incoming messages, and processes them using the `Consumer` struct methods.
-   It runs a `for` loop indefinitely, consuming messages from the `“notifications”` topic and processing any errors that arise.

The `**handleNotifications()**` function:

-   Initially, it attempts to retrieve the `userID` from the request. If it doesn’t exist, it returns a `404 Not Found` status.
-   Then, it fetches the notifications for the provided user ID from the `NotificationStore`. Depending on whether the user has notifications, it responds with a `200 OK` status and either an empty notifications slice or sends back the current notifications.

Lastly, within the `**main()**` function:

-   `store := &NotificationStore{…}`: Creates an instance of `NotificationStore` to hold the notifications
-   `ctx, cancel := context.WithCancel(context.Background())`: Sets up a cancellable context that can be used to stop the consumer group.
-   `go setupConsumerGroup(ctx, store)`: Starts the consumer group in a separate Goroutine, allowing it to operate concurrently without blocking the main thread.
-   The last step is to create a Gin `router` and define a GET endpoint `/notifications/:userID` that will fetch the notifications for a specific user via the `handleNotifications()` function when accessed.

This setup provides a straightforward way to consume messages from the `"notifications"` topic and present them to users through a web endpoint.

## Let's Test the Real-Time Notification System👨‍🔬🖥️👩‍🔬

Now that the producer and consumer are ready, it’s time to see the system in action.

### 1\. Start the producer

Open up a terminal, move into the `kafka-notify` directory, and run the producer with the following command:

```
go run cmd/producer/producer.go
```

### 2\. Start the consumer

Open up a second terminal window, navigate to the `kafka-notify` directory, and start the consumer by running:

```
go run cmd/consumer/consumer.go
```

### 3\. Sending notifications

With both producer and consumer running, you can simulate sending notifications. Open up a third terminal and use the below `curl` commands to send notifications:

**User 1 (Emma) receives a notification from User 2 (Bruno):**

```
curl -X POST http://localhost:8080/send \
-d "fromID=2&toID=1&message=Bruno started following you."
```

**User 2 (Bruno) receives a notification from User 1 (Emma):**

```
curl -X POST http://localhost:8080/send \
-d "fromID=1&toID=2&message=Emma mentioned you in a comment: 'Great seeing you yesterday, @Bruno!'"
```

**User 1 (Emma) receives a notification from User 4 (Lena):**

```
curl -X POST http://localhost:8080/send \
-d "fromID=4&toID=1&message=Lena liked your post: 'My weekend getaway!'"
```

### 4\. Retrieving notifications

Finally, you can fetch the notifications of a specific user. You can use the below `curl` commands to fetch notifications:

**Retrieving notifications for User 1 (Emma):**

```
curl http://localhost:8081/notifications/1
```

**Output:**

```
{"notifications": [{"from": {"id": 2, "name": "Bruno"}, "to": {"id": 1, "name": "Emma"}, "message": "Bruno started following you."}]}
{"notifications": [{"from": {"id": 4, "name": "Lena"}, "to": {"id": 1, "name": "Emma"}, "message": "Lena liked your post: 'My weekend getaway!'"}]}
```

In the above output, you see a `JSON` response listing all the notifications for **Emma**. As you send more notifications, they accumulate, and you can fetch them using the consumer’s API.

## Wrapping up 📝

In this tutorial, you’ve learned how to set up a basic real-time notification system using Kafka in Go.

By simulating the process of users sending and fetching notifications, you’ve gained hands-on experience with Kafka components. This is a foundational step in understanding how Kafka can be integrated into Go applications for various real-time data processing tasks.

You can access the entire codebase for this project in the following GitHub repository: [https://github.com/gutyoh/kafka-notify][15]

If you found this article helpful and want to expand your knowledge on Golang 🐿️, Docker 🐳, and Gin 🍸, consider checking out the **[Introduction to Go track][16]**, which covers basic Golang concepts.

Registered users can also check the **[Go Developer][17]** and **[Introduction to Docker][18]** tracks on Hyperskill. I've been actively involved as an expert in curating these tracks, ensuring they deliver top-notch educational content.

Before concluding, I owe a big thank you to my dear friend **Anton Illarionov**. His expertise in integrating Go with Kafka inspired the idea for this article. You can explore his projects on [GitHub][19].

Let me know if you have any questions or feedback regarding this article.

Thank you for reading, and keep on coding!

[1]: https://go.dev/tour/concurrency/1#:~:text=A%20goroutine%20is%20a%20lightweight,happens%20in%20the%20new%20goroutine.
[2]: https://gin-gonic.com/docs/introduction/
[3]: https://www.docker.com/
[4]: #heading-what-is-kafka
[5]: #heading-how-to-set-up-the-project-workspace
[6]: #heading-how-to-create-the-user-and-notification-models
[7]: #heading-how-to-set-up-the-kafka-producer
[8]: #heading-how-to-set-up-the-kafka-consumer
[9]: #heading-lets-test-the-real-time-notification-system
[10]: #heading-wrapping-up
[11]: https://kafka.apache.org/intro
[12]: https://developer.confluent.io/learn/kraft/
[13]: https://kafka.apache.org/documentation/#zk_depr
[14]: https://hub.docker.com/r/bitnami/kafka/
[15]: https://github.com/gutyoh/kafka-notify
[16]: https://hyperskill.org/tracks/25?category=12&utm_source=fc_hs&utm_medium=social&utm_campaign=hermann
[17]: https://hyperskill.org/tracks/43?category=20&utm_source=fc_hs&utm_medium=social&utm_campaign=hermann
[18]: https://hyperskill.org/tracks/64?category=20&utm_source=fc_hs&utm_medium=social&utm_campaign=hermann
[19]: https://github.com/ant1k9