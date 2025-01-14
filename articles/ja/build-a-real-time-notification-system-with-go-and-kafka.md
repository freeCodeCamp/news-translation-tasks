--- 
title: Go と Kafka でリアルタイム通知システムを構築する方法 
date: 2025-01-14T14:15:01.235Z 
authorURL: "" 
originalURL: https://www.freecodecamp.org/news/build-a-real-time-notification-system-with-go-and-kafka/ 
posteditor: "" 
proofreader: "" 
--- 
 
文：Hermann Rösch 
 
<!-- more --> 
 
現代のアプリケーションには即時のデータアクセスと処理能力が求められています。金融機関のリアルタイムな株式取引更新や、ライブの交通データのナビゲーションなど、データをリアルタイムで処理し反応する能力は非常に重要です。 
 
このチュートリアルでは、**Kafka** の仕組みを学び、それを **Go** と統合することでリアルタイム通知システムを開発します。 
 
この記事を十分に理解するためには、[**Goroutines**][1]、[**Gin**][2] フレームワーク、および [**Docker**][3] などのコンテナ化ツールに関する事前知識が必要です。 
 
## 目次 
 
1.  [Kafka とは?][4] 
2.  [プロジェクトワークスペースのセットアップ方法][5] 
3.  [ユーザーと通知モデルの作成方法][6] 
4.  [Kafka プロデューサーのセットアップ方法][7] 
5.  [Kafka コンシューマーのセットアップ方法][8] 
6.  [リアルタイム通知システムをテストしてみよう][9] 
7.  [まとめ][10] 
 
## Kafka とは? 🤔 
 
[Kafka][11] は分散イベントストリーミングプラットフォームです。元々 LinkedIn によって開発され、その後 Apache Software Foundation に寄贈されてオープンソース化されました。この移行により、Kafka はリアルタイムデータストリーミングの重要な役割を担うようになりました。 
 
Kafka は単なる通信ツール以上で、イベントやメッセージをアプリケーションやサービス間で管理し制御する「イベントブローカー」です。分散イベントストリーミングプラットフォームとして、毎日の膨大なイベント量を処理する能力を持ち、データをシームレスにリアルタイムで輸送し分析することを保証します。 
 
イベントブローカーとしての基本的な役割に加えて、Kafka は耐久性、スケーラビリティ、フォールトトレランスの機能を提供します。また、大規模なデータストリームを低遅延で効率的に管理するための助けにもなります。 
 
### Kafka の主要コンポーネント ⚙️ 
 
Kafka について基本的な知識を得たところで、そのアーキテクチャを構成する主な要素を詳しく見ていきましょう。 
 
#### イベント 
 
イベントとは「何かが起こった」事実を記録するものです。メッセージやデータの一部であり、変化やアクションを表現します。我々のリアルタイム通知システムのコンテキストでは、イベントを以下のように考えることができます。 
 
-   イベントキー: `“1”` （ユーザー **Emma** の **ID** を表す） 
-   イベント値: `“Bruno があなたをフォローし始めました。”` 
 
#### ブローカー 
 
Kafka ブローカーは Kafka ソフトウェアを実行し、データを保存するサーバーです。大規模な生産設定では、複数のマシンに複数のブローカーを配置することが一般的ですが、このチュートリアルでは単一ブローカーのセットアップを使用します。 
 
#### トピック 
 
Kafka のトピックはファイルシステムのフォルダに似ています。データやイベントが保存されるカテゴリーを表します。たとえば、トピック名の例として `"notifications"` が考えられます。 
 
#### プロデューサー 
 
プロデューサーは、Kafka にメッセージを発行（書き込む）または送信するエンティティです。Go プログラムやサービスとしての役割を果たすことがあります。プロデューサーが送信するイベントを持つとき、それが送信されるトピックを選択します。 
 
#### コンシューマー 
 
コンシューマーは Kafka からイベントやメッセージを読み取り処理します。プロデューサーがメッセージをトピックに送信した後、コンシューマーは1つ以上のトピックを購読してメッセージを受信します。 
 
#### パーティション 
 
Kafka の各トピックはさらにパーティションに分けることができます。パーティションはトピック内のセグメントと考えることができ、特に複数のブローカーが関与するセットアップでデータを効率的に管理します。 
 
複数のパーティションに深入りすることなく、基本的な構成に留まりますが、大規模な Kafka デプロイメントにおけるパーティションの役割を理解しておくことは重要です。 
 
#### コンシューマーグループ 
 
個別のコンシューマーが特定のパーティションからメッセージを処理する一方で、コンシューマーグループは複数のコンシューマー間で調整を行います。 
 
コンシューマーグループは、トピックの異なるパーティションからメッセージを共同で処理する複数のコンシューマーで構成されます。これにより、パーティションごとのメッセージがグループ内の1人のコンシューマーによって処理され、効率的かつスケーラブルな消費が実現します。 
 
これは、特定のパーティションのメッセージを各メンバーが担当し、チームで協力して働くコンシューマーと考えることができます。これにより、メッセージが見落とされることはありません。 
 
#### レプリカ 
 
レプリカはデータの安全性を確保します。大規模な Kafka のデプロイメントでは、予期しない障害からの復旧を支援するために複数のデータレプリカを保存することが一般的です。 
 
このチュートリアルではレプリカを使用しませんが、Kafka におけるデータ耐久性の重要性を理解することは有益です。 
 
#### KRaft 
 
[KRaft][12] は [ZooKeeper][13] の必要性を排除するために導入された Kafka 独自の合意プロトコルです。簡単に言えば、KRaft はメタデータを直接 Kafka 内で管理し、スケーラビリティ、シンプルさ、改善されたフェイルオーバーなど、さまざまな利点を提供します。 
 
これらのコンポーネントをまとめると、Kafka の基本的なアーキテクチャを視覚化したものとして、ブローカー、トピック、パーティション、コンシューマーグループを示します。 
 
![Image](https://www.freecodecamp.org/news/content/images/2023/08/Kafka_Architecture_Transparent_V2.png) _Kafka のイベントストリーミングアーキテクチャの視覚化_ 
 
# 実践に移ろう！プロジェクトを開始するためのステップバイステップガイド 
 
これまでの理論はさておき、ここからは実際に手を動かしてプロジェクトを進めていきましょう。Docker と Go をマシンにインストール済みであることを前提に、`kafka-notify` というプロジェクト用のディレクトリを作成します。そして、Kafka のセットアップを簡単に行うために、[**Bitnami の Kafka Docker イメージ**][14] を取得します。 
 
```  
mkdir kafka-notify && cd kafka-notify 
 
curl -sSL \ 
https://raw.githubusercontent.com/bitnami/containers/main/bitnami/kafka/docker-compose.yml > docker-compose.yml 
``` 
 
Kafka ブローカーを起動する前に、docker-compose.yml ファイルに少し手を加えましょう。以下の文字列を見つけてください： 
 
``` 
KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://:9092 
``` 
 
これを次のように変更します： 
 
``` 
KAFKA_CFG_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 
``` 
 
この変更により、Kafka は `localhost` 上のリスナーをアドバタイズし、ローカルの Go アプリケーションがスムーズに接続できるようになります。次に、以下の Docker コマンドを使って Kafka ブローカーを起動します： 
 
``` 
docker-compose up -d 
``` 
 
次に、プロジェクトファイルを整理するためのいくつかのディレクトリを作成します。`cmd/producer` と `cmd/consumer` のディレクトリにはメインのアプリケーションファイルを、`pkg/models` ディレクトリにはモデルの宣言を格納します。 
 
``` 
mkdir -p cmd/producer cmd/consumer pkg/models 
``` 
 
最後に、Go モジュールを初期化し、外部パッケージをインストールします。Kafka ブローカーとの接続には `sarama` を、通知システム用の API エンドポイントの処理には `gin` を使用します。 
 
``` 
go mod init kafka-notify 
go get github.com/IBM/sarama github.com/gin-gonic/gin 
``` 
 
## ユーザーと通知モデルの作成方法 
 
作業スペースが整ったら、最初のステップとして `User` と `Notification` の構造体を作成します。`pkg/models` ディレクトリに移動し、新しいファイル `models.go` を作成して、これらの構造体を宣言します。 
 
```go 
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
 
## Kafka プロデューサーのセットアップ方法 📤 
 
次のステップは、プロデューサー用のコードを記述することです。ここでは、あるユーザーから別のユーザーに通知を送信するための簡単な Gin ウェブ API を作成します。この HTTP POST リクエストは `"notifications"` という名前の Kafka トピックにメッセージを「プロデュース（送信）」します。 
 
`cmd/producer` ディレクトリに移動し、新しいファイル `producer.go` を作成して、プロデューサーのロジックを設定します。 
 
```go 
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
 
// ============== ヘルパー関数 ============== 
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
 
// ============== Kafka 関連関数 ============== 
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
``` 
 
```markdown 
プロデューサー関連の Kafka コンポーネントを `producer.go` で解説します： 
 
`**setupProducer()**` 関数内: 
 
- `config := sarama.NewConfig()`: Kafka のデフォルト設定を初期化します。ブローカー接続前の準備と考えてください。 
- `config.Producer.Return.Successes = true`: メッセージが `"notifications"` トピックに正常に保存された際にプロデューサーが確認応答を受け取ることを保証します。 
- `producer, err := sarama.NewSyncProducer(…)`: `localhost:9092` で稼働中の Kafka ブローカーに接続する同期 Kafka プロデューサーを初期化します。 
 
`**sendKafkaMessage()**` 関数内: 
 
- この関数は最初に `context` から `message` を取得し、次に送信者と受信者の両方をその ID を使って探します。 
- `notification := models.Notification{…}`: 送信者、受信者、実際のメッセージの情報をカプセル化した `Notification` 構造体を初期化します。 
- `msg := &sarama.ProducerMessage{…}`: `"notifications"` トピック向けの `ProducerMessage` を構築し、受信者の ID を `Key` に、メッセージ内容（`Notification` のシリアライズ形）を `Value` に設定します。 
- `producer.SendMessage(msg)`: 構築したメッセージを `"notifications"` トピックへ送信します。 
 
`**sendMessageHandler()**` 関数内: 
 
- この関数は `/send` POST リクエストのエンドポイントハンドラーとして機能します。有効な送信者および受信者 ID が提供されていることを確認します。 
- ID を取得した後、`sendKafkaMessage()` 関数を呼び出して Kafka メッセージを送信します。結果に応じて、存在しないユーザーに対する `404 Not Found`、無効な ID に対する `400 Bad Request`、その他の失敗に対する `500 Internal Server Error` などの適切な HTTP レスポンスを返します。 
 
最後に、`**main()**` 関数内: 
 
- `setupProducer()` 関数を使用して Kafka プロデューサーを初期化します。 
- 次に、Gin の `router` を `gin.Default()` で作成し、Web サーバーをセットアップします。そして、通知を処理するための POST エンドポイント `/send` を定義します。このエンドポイントは、送信者と受信者の ID 及びメッセージ内容を想定しています。 
- POST リクエストの受信時に `sendMessageHandler()` 関数を通じて通知を処理し、適切な HTTP レスポンスを返します。 
 
上記のセットアップは、ユーザーが互いに通知を送信することをシミュレートし、これらの通知を `"notifications"` トピックに生成する方法を示します。 
 
## Kafka コンシューマー 📥 のセットアップ方法 
 
プロデューサーを作成した後は、`"notifications"` トピックをリスニングし、特定のユーザー向けに通知をリストするエンドポイントを提供するコンシューマーを設定します。 
 
`cmd/consumer` ディレクトリに移動し、`consumer.go` という新しいファイルを作成します。そこには、コンシューマーロジックと Gin ベースの API を設定します： 
 
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
``` 
 
 
```markdown 
`consumer.go` における Kafka 関連の操作を詳しく見ていきましょう。 
 
`**initializeConsumerGroup()**` 関数内: 
 
- `config := sarama.NewConfig()`: Kafka 用の標準的な新しい設定を初期化します。 
- `consumerGroup, err := sarama.NewConsumerGroup(…)`: `"notifications-group"` という名前の新しい Kafka コンシューマグループを作成し、`localhost:9092` で稼働しているブローカーに接続します。 
 
`**Consumer**` 構造体とそのメソッド内: 
 
- `Consumer` 構造体には、受信した通知を追跡するための `NotificationStore` への参照である `store` フィールドがあります。 
- `Setup()` および `Cleanup()` メソッドは、`sarama.ConsumerGroupHandler` インターフェースを満たすために必要です。これらはこのチュートリアルでは使用されませんが、メッセージ消費中の初期化やクリーンアップの役割を持つ可能性がありますが、ここではプレースホルダとして機能します。 
- `ConsumeClaim()` メソッド内: コンシューマはトピックで新しいメッセージをリッスンします。それぞれのメッセージに対して、`userID`（メッセージの `Key`）を取得し、メッセージを `Notification` 構造体に展開し、`NotificationStore` に通知を追加します。 
 
`**setupConsumerGroup()**` 関数内: 
 
- この関数は Kafka コンシューマグループを設定し、受信メッセージをリッスンし、それを `Consumer` 構造体のメソッドで処理します。 
- 永久ループを実行し、`"notifications"` トピックからメッセージを消費し、発生するエラーを処理します。 
 
`**handleNotifications()**` 関数内: 
 
- 最初に、リクエストから `userID` を取得しようとします。存在しない場合、`404 Not Found` ステータスを返します。 
- その後、特定のユーザー ID の通知を `NotificationStore` から取得します。ユーザーに通知があるかどうかに基づいて、`200 OK` ステータスと空の通知リストまたは現在の通知を返します。 
 
最後に、`**main()**` 関数内: 
 
- `store := &NotificationStore{…}`: 通知を保持するための `NotificationStore` のインスタンスを作成します。 
- `ctx, cancel := context.WithCancel(context.Background())`: コンシューマグループを停止するのに使用できる中止可能なコンテキストを設定します。 
- `go setupConsumerGroup(ctx, store)`: 別の Goroutine でコンシューマグループを開始し、メインスレッドをブロックせずに並行して操作できるようにします。 
- 最後のステップは Gin `router` を作成し、特定のユーザーの通知を `handleNotifications()` 関数を介して取得する GET エンドポイント `/notifications/:userID` を定義することです。 
``` 
 
このように、`consumer.go` では Kafka を利用したメッセージ受信のフローを効果的に構築しています。特に、`Consumer` 構造体とそのメソッドにより、受信した通知をサーバ内で管理しやすくなっています。また、Gin フレームワークを使用することで、通知を簡単に Web API として提供することが可能です。 
 
## リアルタイム通知システムをテストしよう👨‍🔬🖥️👩‍🔬 
 
プロデューサーとコンシューマーの準備が整ったので、実際にシステムを試してみましょう。 
 
### 1\. プロデューサーを起動する 
 
まずはターミナルを開き、`kafka-notify` ディレクトリに移動して以下のコマンドでプロデューサーを実行します。 
 
``` 
go run cmd/producer/producer.go 
``` 
 
### 2\. コンシューマーを起動する 
 
次に、ターミナルをもう一つ開いて、再び `kafka-notify` ディレクトリに移動し、以下のコマンドでコンシューマーをスタートします。 
 
``` 
go run cmd/consumer/consumer.go 
``` 
 
### 3\. 通知を送信する 
 
プロデューサーとコンシューマーを両方実行した状態で、通知送信をシミュレートしましょう。さらにもう一つターミナルを開き、以下の `curl` コマンドを使用して通知を送信します。 
 
**ユーザー 1 (Emma) がユーザー 2 (Bruno) から通知を受け取る:** 
 
``` 
curl -X POST http://localhost:8080/send \ 
-d "fromID=2&toID=1&message=Bruno started following you." 
``` 
 
**ユーザー 2 (Bruno) がユーザー 1 (Emma) から通知を受け取る:** 
 
``` 
curl -X POST http://localhost:8080/send \ 
-d "fromID=1&toID=2&message=Emma mentioned you in a comment: 'Great seeing you yesterday, @Bruno!'" 
``` 
 
**ユーザー 1 (Emma) がユーザー 4 (Lena) から通知を受け取る:** 
 
``` 
curl -X POST http://localhost:8080/send \ 
-d "fromID=4&toID=1&message=Lena liked your post: 'My weekend getaway!'" 
``` 
 
### 4\. 通知を取得する 
 
最後に、特定のユーザーの通知を取得することができます。以下の `curl` コマンドを使用して通知を取得します。 
 
**ユーザー 1 (Emma) の通知を取得する:** 
 
``` 
curl http://localhost:8081/notifications/1 
``` 
 
**出力:** 
 
``` 
{"notifications": [{"from": {"id": 2, "name": "Bruno"}, "to": {"id": 1, "name": "Emma"}, "message": "Bruno started following you."}]} 
{"notifications": [{"from": {"id": 4, "name": "Lena"}, "to": {"id": 1, "name": "Emma"}, "message": "Lena liked your post: 'My weekend getaway!'"}]} 
``` 
 
この出力では、**Emma** の全ての通知が `JSON` 形式で表示されます。通知が増えると、それらは蓄積され、コンシューマーの API を使用して取得することができます。 
 
## まとめ 📝 
 
このチュートリアルでは、Go 言語で Kafka を使用して基本的なリアルタイム通知システムを設定する方法を学びました。 
 
ユーザーの通知送信と取得のプロセスをシミュレートすることで、Kafka コンポーネントを実際に手を動かして体験しました。これは、Go アプリケーションでさまざまなリアルタイムデータ処理タスクに Kafka を統合するための基礎的なステップです。 
 
このプロジェクトの全コードベースは以下の GitHub リポジトリから利用できます：[https://github.com/gutyoh/kafka-notify][15] 
 
この記事が参考になり、Golang 🐿️、Docker 🐳、および Gin 🍸 についてもっと学びたい場合は、基本的な Golang の概念をカバーしている **[Introduction to Go track][16]** をチェックしてみてください。 
 
登録ユーザーは、Hyperskill 上の **[Go Developer][17]** および **[Introduction to Docker][18]** トラックも確認できます。これらのトラックは質の高い教育コンテンツを提供することを目指して、私が専門家として積極的に関わりながらキュレーションしています。 
 
最後に、私の親友 **Anton Illarionov** に大きな感謝を。彼の Go と Kafka の統合に関する専門知識が、この記事のアイデアをインスパイアしました。彼のプロジェクトは [GitHub][19] で見ることができます。 
 
この記事に関して質問やフィードバックがあればお知らせください。 
 
読んでいただきありがとうございます、引き続きコーディングを楽しんでください！ 
 
 