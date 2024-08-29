---
title: How to Create a Professional Chat API Solution with Sockets in NodeJS
  [Beginner level]
date: 2024-08-29T00:48:19.396Z
author: Adeel Imran
authorURL: https://www.freecodecamp.org/news/author/adeel/
originalURL: https://www.freecodecamp.org/news/create-a-professional-node-express/
posteditor: ""
proofreader: ""
---

Have you ever wondered how chat applications work behind the scenes? Well, today I am going to walk you through how to make a REST + Sockets-based application built on top of [NodeJS][1]/[ExpressJS][2] using [MongoDB][3].

<!-- more -->

I have been working on the content for this article for over a week now – I really hope it helps someone out there.

## Prerequisites

-   Set up Mongodb on your machine \[[Installation guide written here][4]\]
-   For windows users, you can find the installation guide \[[here][5]\]
-   For macOS users, you can find the installation guide \[[here][6]\]\[[To the point installation that I wrote][7]\]
-   For Linux users, you can find the installation guide \[[here][8]\]
-   Install Node/NPM on your machine \[[Installation link here][9]\] (I am using Node version v12.18.0)

## Topics we'll cover

### General

-   Create an express server
-   How to do API validations
-   Create basic skeleton for the entire application
-   Setting up MongoDB (installation, setup in express)
-   Creating users API + Database (Create a user, Get a user by id, Get all users, Delete a user by id)
-   Understanding what a middleware is
-   JWT (JSON web tokens) authentication (decode/encode) - Login middleware
-   Web socket class that handles events when a user disconnects, adds its identity, joins a chat room, wants to mute a chat room
-   Discussing chat room & chat message database model

### For the API

-   Initiate a chat between users
-   Create a message in chat room
-   See conversation for a chat room by its id
-   Mark an entire conversation as read (similar to Whatsapp)
-   Get recent conversation from all chats (similar to Facebook messenger)

### Bonus  - API    

-   Delete a chat room by id along with all its associated messages
-   Delete a message by id

Before we begin, I wanted to touch on some basics in the following videos.

### Understanding the basics of ExpressJS

What are routes? Controllers? How do we allow for CORS (cross origin resource sharing)? How do we allow enduser to send data in JSON format in API request?

I talk about all this and more (including REST conventions) in this video:

<iframe width="480" height="270" src="https://www.youtube.com/embed/t7-yuYFVG1Y?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid0"></iframe>

Also, here's a [GitHub link to the entire source code of this video][10] \[Chapter 0\]

Do have a look at the README.md for "Chapter 0" source code. It has all the relevant learning links I mention in the video along with an amazing half hour tutorial on postman.

### Adding API validation to your API end-point

In the below video, you'll learn how to write your own custom validation using a library called "make-validation":

<iframe width="480" height="270" src="https://www.youtube.com/embed/t-KGXLM0YlE?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid1"></iframe>

Here's the [GitHub link to the entire source code of this video][11] \[Chapter 0\].

And here's the **make-validation** library link \[G[itHub][12]\]\[[npm][13]\]\[[example][14]\].

The entire source code of this tutorial can be found **[here][15]**. If you have any feedback, please just reach out to me on [http://twitter.com/adeelibr][16]. If you like this tutorial kindly leave a star on the [**github repository**][17]**.**

Let's begin now that you know the basics of ExpressJS and how to validate a user response.

## Getting started

Create a folder called `chat-app`:

```
mkdir chat-app;
cd chat-app;
```

Next initialize a new npm project in your project root folder by typing the following:

```
npm init -y
```

and install the following packages:

```
npm i cors @withvoid/make-validation express jsonwebtoken mongoose morgan socket.io uuid --save;
npm i nodemon --save-dev;
```

And in your `package.json` `scripts` section add the following 2 scripts:

```
"scripts": {
	"start": "nodemon server/index.js",
	"start:server": "node server/index.js"
},
```

Your `package.json` now should look something like this:

```
{
  "name": "chapter-1-chat",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "start": "nodemon server/index.js",
    "start:server": "node server/index.js"
  },
  "dependencies": {
    "@withvoid/make-validation": "1.0.5",
    "cors": "2.8.5",
    "express": "4.16.1",
    "jsonwebtoken": "8.5.1",
    "mongoose": "5.9.18",
    "morgan": "1.9.1",
    "socket.io": "2.3.0",
    "uuid": "8.1.0"
  },
  "devDependencies": {
    "nodemon": "2.0.4"
  }
}
```

Awesome!

Now in your project's root folder create a new folder called `server`:

```
cd chat-app;
mkdir server;
cd server;
```

Inside your `server` folder create a file called `index.js` and add the following content to it:

```
import http from "http";
import express from "express";
import logger from "morgan";
import cors from "cors";
// routes
import indexRouter from "./routes/index.js";
import userRouter from "./routes/user.js";
import chatRoomRouter from "./routes/chatRoom.js";
import deleteRouter from "./routes/delete.js";
// middlewares
import { decode } from './middlewares/jwt.js'

const app = express();

/** Get port from environment and store in Express. */
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", decode, chatRoomRouter);
app.use("/delete", deleteRouter);

/** catch 404 and forward to error handler */
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'API endpoint doesnt exist'
  })
});

/** Create HTTP server. */
const server = http.createServer(app);
/** Listen on provided port, on all network interfaces. */
server.listen(port);
/** Event listener for HTTP server "listening" event. */
server.on("listening", () => {
  console.log(`Listening on port:: http://localhost:${port}/`)
});
```

Let's add the routes for `indexRouter` `userRouter` `chatRoomRouter` & `deleteRouter`.

In your project's root folder create a folder called `routes`. Inside the `routes` folder add the following files:

-   `index.js`
-   `user.js`
-   `chatRoom.js`
-   `delete.js`

Let's add content for `routes/index.js` first:

```
import express from 'express';
// controllers
import users from '../controllers/user.js';
// middlewares
import { encode } from '../middlewares/jwt.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => { });

export default router;
```

Let's add content for `routes/user.js` next:

```
import express from 'express';
// controllers
import user from '../controllers/user.js';

const router = express.Router();

router
  .get('/', user.onGetAllUsers)
  .post('/', user.onCreateUser)
  .get('/:id', user.onGetUserById)
  .delete('/:id', user.onDeleteUserById)

export default router;
```

And now let's add content for `routes/chatRoom.js`:

```
import express from 'express';
// controllers
import chatRoom from '../controllers/chatRoom.js';

const router = express.Router();

router
  .get('/', chatRoom.getRecentConversation)
  .get('/:roomId', chatRoom.getConversationByRoomId)
  .post('/initiate', chatRoom.initiate)
  .post('/:roomId/message', chatRoom.postMessage)
  .put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)

export default router;
```

Finally, let's add content for `routes/delete.js`:

```
import express from 'express';
// controllers
import deleteController from '../controllers/delete.js';

const router = express.Router();

router
  .delete('/room/:roomId', deleteController.deleteRoomById)
  .delete('/message/:messageId', deleteController.deleteMessageById)

export default router;
```

Awesome now that our routes are in place let's add the controllers for each route.

Create a new folder called `controllers`. Inside that folder create the following files:

-   `` `user.js` ``
-   `chatRoom.js`
-   `delete.js`

Let's start of with `controllers/user.js`:

```
export default {
  onGetAllUsers: async (req, res) => { },
  onGetUserById: async (req, res) => { },
  onCreateUser: async (req, res) => { },
  onDeleteUserById: async (req, res) => { },
}
```

Next let's add content in `controllers/chatRoom.js`:

```
export default {
  initiate: async (req, res) => { },
  postMessage: async (req, res) => { },
  getRecentConversation: async (req, res) => { },
  getConversationByRoomId: async (req, res) => { },
  markConversationReadByRoomId: async (req, res) => { },
}
```

And finally let's add content for `controllers/delete.js`:

```
export default {
  deleteRoomById: async (req, res) => {},
  deleteMessageById: async (req, res) => {},
}
```

So far we have added empty controllers for each route, so they don't do much yet. We'll add functionality in a bit.

Just one more thing – let's add a new folder called `middlewares` and inside that folder create a file called `jwt.js`. Then add the following content to it:

```
import jwt from 'jsonwebtoken';

export const decode = (req, res, next) => {}

export const encode = async (req, res, next) => {}
```

I will talk about what this file does in a bit, so for now let's just ignore it.

![0f2621f3fad63457842f817f81df58ec](https://www.freecodecamp.org/news/content/images/2020/06/0f2621f3fad63457842f817f81df58ec.gif)

We are done with our basic boilerplate of the code base

We have ended up doing the following:

-   Created an Express server that listens on port 3000
-   Added cross-origin-resource (CORS) to our `server.js`
-   Added a logger to our `server.js`
-   And also added route handlers with empty controllers.

Nothing fancy so far that I haven't covered in the videos above.

## Let's setup MongoDB in our application

Before we add MongoDB to our code base, make sure it is installed in your machine by running one of the following:

-   For Windows users installation guide \[[here][18]\]
-   For macOS users installation guide \[[here][19]\]\[[To the point installation that I wrote][20]\]
-   For Linux users installation guide \[[here][21]\]

If you are having issues installing MongoDB, just let me know at [https://twitter.com/adeelibr][22] and I'll write a custom guide for you or make an installation video guide. :)

I am using [Robo3T][23] as my MongoDB GUI.

Now you should have your MongoDB instance running and [Robo3T][24] installed. (You can use any GUI client that you like for this. I like [Robo3T][25] a lot so I'm using it. Also, it's open source.)

Here is a small video I found on YouTube that gives a 6 minute intro to [Robo3T][26]:

<iframe width="480" height="270" src="https://www.youtube.com/embed/DKZr1Urs7sA?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid2"></iframe>

Once your MongoDB instance is up and running let's begin integrating MongoDB in our code as well.

In your root folder create a new folder called `config`. Inside that folder create a file called `index.js` and add the following content:

```
const config = {
  db: {
    url: 'localhost:27017',
    name: 'chatdb'
  }
}

export default config
```

Usually the default port that `MongoDB` instances will run on is `27017`.

Here we set info about our database URL (which is in `db`) and the `name` of database which is `chatdb` (you can call this whatever you want).

Next create a new file called `config/mongo.js` and add the following content:

```
import mongoose from 'mongoose'
import config from './index.js'

const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
```

Next import `config/mongo.js` in your `server/index.js` file like this:

```
.
.
// mongo connection
import "./config/mongo.js";
// routes
import indexRouter from "./routes/index.js";
```

If you get lost at any time, the entire source code for this tutorial is right [**here**][27]**.**

Let's discuss what we are doing here step by step:

We first import our `config.js` file in `config/mongo.js`. Next we pass in the value to our `CONNECTION_URL` like this:

```
const CONNECTION_URL = `mongodb://${config.db.url}/${config.db.name}`
```

Then using the `CONNECTION_URL` we form a Mongo connection, by doing this:

```
mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

This tells `mongoose` to make a connection with the database with our Node/Express application.

The options we are giving Mongo here are:

-   `useNewUrlParser`: MongoDB driver has deprecated their current [connection string][28] parser. `useNewUrlParser: true` tells mongoose to use the new parser by Mongo. (If it's set to true, we have to provide a database port in the `CONNECTION_URL`.)
-   `useUnifiedTopology`: False by default. Set to `true` to opt in to using [MongoDB driver's new connection management engine][29]. You should set this option to `true`, except for the unlikely case that it prevents you from maintaining a stable connection.

Next we simply add `mongoose` event handlers like this:

```
mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
```

-   `connected` will be called once the database connection is established
-   `disconnected` will be called when your Mongo connection is disabled
-   `error` is called if there is an error connecting to your Mongo database
-   `reconnected` event is called when the database loses connection and then makes an attempt to successfully reconnect.

Once you have this in place, simply go in your `server/index.js` file and import `config/mongo.js`. And that is it. Now when you start up your server by typing this:

```
npm start;
```

You should see something like this:

![Screenshot-2020-06-15-at-19.42.53](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-19.42.53.png)

Logs when you start your server

If you see this you have successfully added Mongo to your application.

Congratulations!

If you got stuck here for some reason, let me know at [twitter.com/adeelibr][30] and I will try to sort it out for you. :)

## Let's setup our first API section for users/

The setup of our API for `users/` will have no authentication token for this tutorial, because my main focus is to teach you about the Chat application here.

### User Modal Scheme

Let's create our first model (database scheme) for the `user` collection.

Create a new folder called `models`. Inside that folder create a file called `User.js` and add the following content:

```
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export default mongoose.model("User", userSchema);
```

Let's break this down into pieces:

```
export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};
```

We are basically going to have 2 types of users, `consumer` and `support`. I have written it this way because I want to programmatically ensure API and DB validation, which I will talk about later.

Next we create a schema on how a single `document` (object/item/entry/row) will look inside our `user` collection (a collection is equivalent to a MySQL table). We define it like this:

```
const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
    collection: "users",
  }
);
```

Here we are telling `mongoose` that for a single document in our `users` collection we want the structure to be like this:

```
{
	id: String // will get random string by default thanks to uuidv4
    	firstName: String,
    	lastName: String,
    	type: String // this can be of 2 types consumer/support
}
```

In the second part of the schema we have something like this:

```
{
    timestamps: true,
    collection: "users",
}
```

Setting `timestamps` to `true` will add 2 things to my schema: a `createdAt` and a `updatedAt` date value. Every time when we create a new entry the `createdAt` will be updated automatically and `updatedAt` will update once we update an entry in the database using mongoose. Both of these are done automatically by `mongoose`.

The second part is `collection`. This shows what my collection name will be inside my database. I am assigning it the name of `users`.

And then finally we'll export the object like this:

```
export default mongoose.model("User", userSchema);
```

So `mongoose.model` takes in 2 parameters here.

-   The name of the model, which is `User` here
-   The schema associated with that model, which is `userSchema` in this case

Note: Based on the name of the model, which is `User` in this case, we don't add `collection` key in the schema section. It will take this `User` name and append an `s` to it and create a collection by its name, which becomes `user`.

Great, now we have our first model.

If you've gotten stuck anywhere, just have a look at the [source code][31].

### Create a new user API \[POST request\]

Next let's write our first controller for this route: `.post('/', user.onCreateUser)`.

Go inside `controllers/user.js` and import 2 things at the top:

```
// utils
import makeValidation from '@withvoid/make-validation';
// models
import UserModel, { USER_TYPES } from '../models/User.js';
```

Here we are importing the validation library that I talked about in the video at the very top. We are also importing our user modal along with the `USER_TYPES` from the same file.

This is what `USER_TYPES` represents:

```
export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};
```

Next find the controller `onCreateUser` and add the following content to it:

```
onCreateUser: async (req, res) => {
    try {
      const validation = makeValidation(types => ({
        payload: req.body,
        checks: {
          firstName: { type: types.string },
          lastName: { type: types.string },
          type: { type: types.enum, options: { enum: USER_TYPES } },
        }
      }));
      if (!validation.success) return res.status(400).json(validation);

      const { firstName, lastName, type } = req.body;
      const user = await UserModel.createUser(firstName, lastName, type);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  },
```

Let's divide this into 2 sections.

First we validate the user response by doing this:

```
const validation = makeValidation(types => ({
  payload: req.body,
  checks: {
    firstName: { type: types.string },
    lastName: { type: types.string },
    type: { type: types.enum, options: { enum: USER_TYPES } },
  }
}));
if (!validation.success) return res.status(400).json({ ...validation });
```

Please make sure that you have seen the video (above) on `validate an API request in Node using custom validation or by using make-validation library`.

Here we are using the `[make-validation][32]` library (that I ended up making while writing this tutorial). I talk about it's usage in the video at the start of this tutorial.

All we are doing here is passing `req.body` to `payload`. Then in the checks we're adding an object where against each `key` we are telling what are the requirements for each type, for example:

```
firstName: { type: types.string },
```

Here we are telling it that `firstName` is of type string. If the user forgets to add this value while hitting the API, or if the type is not string, it will throw an error.

The `validation` variable will return an object with 3 things: `{success: boolean, message: string, errors: object}`.

If `validation.success` is false we simply return everything from the validation and give it to the user with a status code of `400`.

Once our validation is in place and we know that the data we are getting are valid, then we do the following:

```
const { firstName, lastName, type } = req.body;
const user = await UserModel.createUser(firstName, lastName, type);
return res.status(200).json({ success: true, user });
```

Then we destruct `firstName, lastName, type` from `req.body` and pass those values to our `UserModel.createUser`. If everything goes right, it simply returns `success: true` with the new `user` created along with a status `200`.

If anywhere in this process anything goes wrong, it throws an error and goes to the catch block:

```
catch (error) {
  return res.status(500).json({ success: false, error: error })
}
```

There we simply return an error message along with the HTTP status `500`.

The only thing we are missing here is the `UserModel.createUser()` method.

So let's go back into our `models/User.js` file and add it:

```
userSchema.statics.createUser = async function (
	firstName, 
    	lastName, 
    	type
) {
  try {
    const user = await this.create({ firstName, lastName, type });
    return user;
  } catch (error) {
    throw error;
  }
}


export default mongoose.model("User", userSchema);
```

So all we are doing here is adding a static method to our `userSchema` called `createUser` that takes in 3 parameters: `firstName, lastName, type`.

Next we use this:

```
const user = await this.create({ firstName, lastName, type });
```

Here the `this` part is very important, since we are writing a static method on `userSchema`. Writing `this` will ensure that we are using performing operations on the `userSchema` object

One thing to note here is that `userSchema.statics.createUser = async function (firstName, lastName, type) => {}` won't work. If you use an `=>` arrow function the `this` context will be lost and it won't work.

If you want to learn more about `static` methods in mongoose, see this very short but helpful doc example [here][33].

Now that we have everything set up, let's start our terminal by running the following command in the project's root folder:

```
npm start;
```

Go into postman, set up a `POST` request on this API `http://localhost:3000/users`, and add the following body to the API:

```
{
	firstName: 'John'
    	lastName: 'Doe',
    	type: 'consumer'
}
```

Like this:

![Screenshot-2020-06-15-at-21.37.15](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-21.37.15.png)

You can also get the **entire postman API** collection from [**here**][34] so that you don't have to write the APIs again and again.

Awesome – we just ended up creating our first API. Let's create a couple more user APIs before we move to the chat part because there is no chat without users (unless we have robots, but robots are users as well ?).

### Get a user by its ID API \[GET request\]

Next we need to write an API that gets us a user by its ID. So for our route `.get('/:id', user.onGetUserById)` let's write down its controller.

Go to `controllers/user.js` and for the method `onGetUserById` write this:

```
onGetUserById: async (req, res) => {
  try {
    const user = await UserModel.getUserById(req.params.id);
    return res.status(200).json({ success: true, user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Cool, this looks straightforward. Let's add `UserModel.getUserById()` in our `models/User.js` file.

Add this method below the last `static` method you wrote:

```
userSchema.statics.getUserById = async function (id) {
  try {
    const user = await this.findOne({ _id: id });
    if (!user) throw ({ error: 'No user with this id found' });
    return user;
  } catch (error) {
    throw error;
  }
}
```

We pass in an `id` parameter and we wrap our function in `try/catch`. This is very important when you are using `async/await`. The lines to focus on here are these 2:

```
const user = await this.findOne({ _id: id });
if (!user) throw ({ error: 'No user with this id found' });
```

We use `mongoose`'s  `findOne` method to find an entry by `id`. We know that only one item exists in the collection by this `id` because the `id` is unique. If no user is found we simply throw an error with the message `No user with this id found`.

And that is it! Let's start up our server:

```
npm start;
```

Open up postman and create a `GET` request `http://localhost:3000/users/:id`.

Note: I am using the ID of the last user we just created.

![Screenshot-2020-06-15-at-22.01.16](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-22.01.16.png)

Nicely done! Good job.

Two more API's to go for our user section.

### Get all users API \[GET request\]

For our router in `.get('/', user.onGetAllUsers)` let's add information to its controller.

Go to `controllers/user.js` and add code in the `onGetAllUsers()` method:

```
onGetAllUsers: async (req, res) => {
  try {
    const users = await UserModel.getUsers();
    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Next let's create the static method for `getUsers()` in the `models/User.js` file. Below the last static method you wrote in that file, type:

```
userSchema.statics.getUsers = async function () {
  try {
    const users = await this.find();
    return users;
  } catch (error) {
    throw error;
  }
}
```

We use the `mongoose` method called `await this.find();` to get all the records for our `users` collection and return it.

Note: I am not handling pagination in our users API because that's not the main focus here. I'll talk about pagination once we move towards our chat APIs.

Let's start our server:

```
npm start;
```

Open up postman and create a `GET` request for this route `http://localhost:3000/users`:

![Screenshot-2020-06-15-at-22.12.13](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-22.12.13.png)

I went ahead and ended up creating a couple more users. ?

### Delete a user by ID API \[DELETE request\] (More of a bonus section, you can skip this if you want)

Let's create our final route to delete a user by their ID. For the route `.delete('/:id', user.onDeleteUserById)` go to its controller in `controllers/user.js` and write this code in the `onDeleteUserById()` method:

```
onDeleteUserById: async (req, res) => {
  try {
    const user = await UserModel.deleteByUserById(req.params.id);
    return res.status(200).json({ 
      success: true, 
      message: `Deleted a count of ${user.deletedCount} user.` 
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Let's add the static method `deleteByUserById` in `models/User.js`:

```
userSchema.statics.deleteByUserById = async function (id) {
  try {
    const result = await this.remove({ _id: id });
    return result;
  } catch (error) {
    throw error;
  }
}
```

We pass in the `id` here as a parameter and then use the `mongoose` method called `this.remove` to delete a record item from a specific collection. In this case, it's the `users` collection.

Let's start up our server:

```
npm start;
```

Go to postman and create a new `DELETE` route:

![Screenshot-2020-06-15-at-22.24.51](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-22.24.51.png)

With this we'll conclude our USER API section.

Next we will cover how to authenticate routes with an authentication token. This is the last thing I want to touch on before moving on to the chat section – because all of the chat APIs will be authenticated.

### What are middlewares in ExpressJS?

How can we write them? By adding JWT middleware in your application:

<iframe width="480" height="270" src="https://www.youtube.com/embed/G8Z6yeV0ytc?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid3"></iframe>

And here's the [GitHub link to the entire source code of this video][35] \[Chapter 0\].

And again, all the relevant info can be found in the READ.ME.

Coming back to our code base, let's create a JWT middleware to authenticate our routes. Go to `middlewares/jwt.js` and add the following:

```
import jwt from 'jsonwebtoken';
// models
import UserModel from '../models/User.js';

const SECRET_KEY = 'some-secret-key';

export const encode = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.getUserById(userId);
    const payload = {
      userId: user._id,
      userType: user.type,
    };
    const authToken = jwt.sign(payload, SECRET_KEY);
    console.log('Auth', authToken);
    req.authToken = authToken;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: error.error });
  }
}

export const decode = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.userId = decoded.userId;
    req.userType = decoded.type;
    return next();
  } catch (error) {

    return res.status(401).json({ success: false, message: error.message });
  }
}
```

Let's discuss the `encode` method first:

```
export const encode = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UserModel.getUserById(userId);
    const payload = {
      userId: user._id,
      userType: user.type,
    };
    const authToken = jwt.sign(payload, SECRET_KEY);
    console.log('Auth', authToken);
    req.authToken = authToken;
    next();
  } catch (error) {
    return res.status(400).json({ 
    	success: false, message: error.error 
    });
  }
}
```

Let's go through it step by step.

We get the `userId` from our `req.params`. If you remember from the video earlier, `req.params` is the `/:<identifier>` defined in our routes section.

Next we use the `const user = await UserModel.getUserById(userId);` method we just created recently to get user information. If it exists, that is – otherwise this line will throw an error and it will directly go to the `catch` block where we will return the user with a `400` response and and an error message.

But if we get a response from the `getUserById` method we then make a payload:

```
const payload = {
      userId: user._id,
      userType: user.type,
};
```

Next we sign that payload in JWT using the following:

```
const authToken = jwt.sign(payload, SECRET_KEY);
```

Once we have the JWT signed we then do this:

```
req.authToken = authToken;
next();
```

Set it to our `req.authToken` and then forward this information as `next()`.

Next let's talk about the `decode` method:

```
export const decode = (req, res, next) => {
  if (!req.headers['authorization']) {
    return res.status(400).json({ success: false, message: 'No access token provided' });
  }
  const accessToken = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(accessToken, SECRET_KEY);
    req.userId = decoded.userId;
    req.userType = decoded.type;
    return next();
  } catch (error) {

    return res.status(401).json({ success: false, message: error.message });
  }
}
```

Let's break this down:

```
if (!req.headers['authorization']) {
  return res.status(400).json({ 
  	success: false, 
    	message: 'No access token provided' 
  });
}
```

First we check if the `authorization` header is present or not. If not we simply return an error message to user.

Then we do this:

```
const accessToken = req.headers.authorization.split(' ')[1];
```

It's being `split(' ')` by space and then we are getting the second index of the array by accessing its `[1]` index because the convention is `authorization: Bearer <auth-token>`. Want to read more on this? Check out this nice [thread on quora][36].

Then we try to decode our token:

```
try {
  const decoded = jwt.verify(accessToken, SECRET_KEY);
  req.userId = decoded.userId;
  req.userType = decoded.type;
  return next();
} catch (error) {
  return res.status(401).json({ 
  	success: false, message: error.message 
  });
}
```

If this is not successful `jwt.verify(accessToken, SECRET_KEY)` will simply throw an error and our code will go in the `catch` block immediately. If it is successful, then we can decode it. We get `userId` and `type` from the token and save it as `req.userId, req.userType` and simply hit `next()`.

Now, moving forward, every route that goes through this `decode` middleware will have the current user's `id & it's type`.

This was it for the middleware section. Let's create a `login` route so that we can ask a user for their information and give a token in return (because moving forward they'll need a token to access the rest of chat APIs).

### Creating a login route \[POST request\]

Go to your `routes/index.js` file and paste the following content:

```
import express from 'express';
// middlewares
import { encode } from '../middlewares/jwt.js';

const router = express.Router();

router
  .post('/login/:userId', encode, (req, res, next) => {
    return res
      .status(200)
      .json({
        success: true,
        authorization: req.authToken,
      });
  });

export default router;
```

So all we are doing is adding the `encode` middleware to our `http://localhost:3000/login/:<user-id>` \[POST\] route. If everything goes smoothly the user will get an `authorization` token.

Note: I am not adding a login/signup flow, but I still wanted to touch on JWT/middleware in this tutorial.

Usually authentication is done in a similar way. The only addition here is that the user doesn't provide their ID. They provide their username, password (which we verify in the database), and if everything checks out we give them an authorization token.

If you got stuck anywhere up to this point, just write to me at [twitter.com/adeelibr][37], so that way I can improve the content. You can also write to me if you would like to learn something else.

As a reminder, the entire source code is available [here][38]. You don't have to code along with this tutorial, but if you do the concepts will stick better.

Let's just check our `/login` route now.

Start your server:

```
npm start;
```

Let's run postman. Create a new POST request `http://localhost:3000/login/<user-id>`:

![Screenshot-2020-06-15-at-23.03.15](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-23.03.15.png)

When the user ID is correct

![Screenshot-2020-06-15-at-23.03.32](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-15-at-23.03.32.png)

When the user ID is invalid

With this we are done with our login flow as well.

This was a lot. But now we can focus only on our chat routes.

## Create a web socket class

This web socket class will handle events when a user disconnects, joins a chat room, or wants to mute a chat room.

So let's create a web-socket class that will manage sockets for us. Create a new folder called `utils`. Inside that folder create a file called `WebSockets.js` and add the following content:

```
class WebSockets {
  users = [];
  connection(client) {
    // event fired when the chat room is disconnected
    client.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== client.id);
    });
    // add identity of user mapped to the socket id
    client.on("identity", (userId) => {
      this.users.push({
        socketId: client.id,
        userId: userId,
      });
    });
    // subscribe person to chat & other user as well
    client.on("subscribe", (room, otherUserId = "") => {
      this.subscribeOtherUser(room, otherUserId);
      client.join(room);
    });
    // mute a chat room
    client.on("unsubscribe", (room) => {
      client.leave(room);
    });
  }

  subscribeOtherUser(room, otherUserId) {
    const userSockets = this.users.filter(
      (user) => user.userId === otherUserId
    );
    userSockets.map((userInfo) => {
      const socketConn = global.io.sockets.connected(userInfo.socketId);
      if (socketConn) {
        socketConn.join(room);
      }
    });
  }
}

export default new WebSockets();
```

The WebSockets class has three major things here:

-   users array
-   connection method
-   subscribing members of a chat room to it. `subscribeOtherUser`

Let's break this down.

We have a class:

```
class WebSockets {

}

export default new WebSocket();
```

We create a class and export an instance of that class.

Inside the class we have an empty `users` array. This array will hold a list of all the active users that are online using our application.

Next we have a `connection` method, the core of this class:

```
connection(client) {
  // event fired when the chat room is disconnected
  client.on("disconnect", () => {
    this.users = this.users.filter((user) => user.socketId !== client.id);
  });
  // add identity of user mapped to the socket id
  client.on("identity", (userId) => {
    this.users.push({
      socketId: client.id,
      userId: userId,
    });
  });
  // subscribe person to chat & other user as well
  client.on("subscribe", (room, otherUserId = "") => {
    this.subscribeOtherUser(room, otherUserId);
    client.join(room);
  });
  // mute a chat room
  client.on("unsubscribe", (room) => {
    client.leave(room);
  });
}
```

The `connection` method takes in a parameter called `client` (client here will be our server instance, I will talk more about this in a bit).

We take the param `client` and add some event to it

-   client.on('disconnect') // when a user connection is lost this method will be called
-   client.on('identity') // when user logs in from the front end they will make a connection with our server by giving their identity
-   client.on('subscribe') // when a user joins a chat room this method is called
-   client.on('unsubscribe') // when a user leaves or wants to mute a chat room

Let's talk about `disconnect`:

```
client.on("disconnect", () => {
  this.users = this.users.filter((user) => user.socketId !== client.id);
});
```

As soon as the connection is disconnected, we run a filter on users array. Where we find `user.id === client.id` we remove it from our sockets array. ( `client` here is coming from the function param.)

Let's talk about `identity`:

```
client.on("identity", (userId) => {
  this.users.push({
    socketId: client.id,
    userId: userId,
  });
});
```

When a user logs in through he front end application web/android/ios they will make a socket connection with our backend app and call this identity method. They'll also send their own user id.

We will take that user id and the client id (the user's own unique socket id that socket.io creates when they make a connection with our BE).

Next we have `unsubscribe`:

```
client.on("unsubscribe", (room) => {
  client.leave(room);
});
```

The user passes in the `room` id and we just tell `client.leave()` to remove the current user calling this method from a particular chat room.

Next we have subscribe:

```
client.on("subscribe", (room, otherUserId = "") => {
  this.subscribeOtherUser(room, otherUserId);
  client.join(room);
});
```

When a user joins a chat room, they will tell us about the room they want to join along with the other person who is part of that chat room.

Note: We will see later that when we initiate a chat room we get all the users associated with that room in the API response.

**In my opinion**: Another thing we could have done here was when the user sends in the room number, we can make a DB query to see all the members of the chat room and make them join if they are online at the moment (that is, in our users list).

The `subscribeOtherUser` method is defined like this:

```
subscribeOtherUser(room, otherUserId) {
  const userSockets = this.users.filter(
    (user) => user.userId === otherUserId
  );
  userSockets.map((userInfo) => {
    const socketConn = global.io.sockets.connected(userInfo.socketId);
    if (socketConn) {
      socketConn.join(room);
    }
  });
}
```

We pass in  `room` and `otherUserId` as params to this function.

Using the `otherUserId` we filter on our `this.users` array and all the results that match are stored in `userSockets` array.

You might be thinking – how can one user have multiple presences in the user array? Well, think of a scenario where the same user is logged in from both their web application and mobile phone. It will create multiple socket connections for the same user.

Next we map on `userSockets`. For each item in this array we pass it into this method:  `const socketConn = global.io.sockets.connected(userInfo.socketId)`

I will talk more about this `global.io.sockets.connected` in a bit. But what this initially does is it takes in `userInfo.socketId` and if it exists in our socket connection, it will return the connection, otherwise `null`.

Next we simply see if `socketConn` is available. If so, we take that `socketConn` and make this connection join the `room` passed in the function:

```
if (socketConn) {
	socketConn.join(room);
}
```

And this is it for our WebSockets class.

Let's import this file in our `server/index.js` file:

```
import socketio from "socket.io";
// mongo connection
import "./config/mongo.js";
// socket configuration
import WebSockets from "./utils/WebSockets.js";
```

So just import `socket.io` and import `WebSockets` somewhere at the top.

Next where we are creating our server add the content below this:

```
/** Create HTTP server. */
const server = http.createServer(app);
/** Create socket connection */
global.io = socketio.listen(server);
global.io.on('connection', WebSockets.connection)
```

The `server` was created and we do two things:

-   assign `global.io` to `socketio.listen(server)` (As soon as a port starts listening on the `server`, sockets starts listening for events happening on that port as well.)
-   then we assign `global.io.on('connection', WebSockets.connection)` method. Every time someone from the front end makes a socket connection, the `connection` method will be called which will invoke our `Websockets` class and inside that class the `connection` method.

`global.io` is equivalent to `windows` object in browser. But since we don't have `windows` in NodeJS we use `global.io`. Whatever we put in `global.io` is available in the entire application.

This is the same `global.io` we used in the `WebSockets` class inside the `subscribeOtherUser` method.

If you got lost here is the [entire source code of this chat application][39]. Also free to drop me a message with your feedback and I will try to improve the content of this tutorial.

## Discussing chat room & chat message database model

Before starting off with Chat, I think it is really important to discuss the database model on which we will create our chat application. Have a look at the below video:

<iframe width="480" height="270" src="https://www.youtube.com/embed/GAt-XjGvMxM?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid4"></iframe>

Now that you have a clear idea about what our chat structure will be like, let's start off by making our chat room model.

Go inside your `models` folder and create the following `ChatRoom.js`. Add the following content to it:

```
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export const CHAT_ROOM_TYPES = {
  CONSUMER_TO_CONSUMER: "consumer-to-consumer",
  CONSUMER_TO_SUPPORT: "consumer-to-support",
};

const chatRoomSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    userIds: Array,
    type: String,
    chatInitiator: String,
  },
  {
    timestamps: true,
    collection: "chatrooms",
  }
);

chatRoomSchema.statics.initiateChat = async function (
	userIds, type, chatInitiator
) {
  try {
    const availableRoom = await this.findOne({
      userIds: {
        $size: userIds.length,
        $all: [...userIds],
      },
      type,
    });
    if (availableRoom) {
      return {
        isNew: false,
        message: 'retrieving an old chat room',
        chatRoomId: availableRoom._doc._id,
        type: availableRoom._doc.type,
      };
    }

    const newRoom = await this.create({ userIds, type, chatInitiator });
    return {
      isNew: true,
      message: 'creating a new chatroom',
      chatRoomId: newRoom._doc._id,
      type: newRoom._doc.type,
    };
  } catch (error) {
    console.log('error on start chat method', error);
    throw error;
  }
}

export default mongoose.model("ChatRoom", chatRoomSchema);
```

We have three things going on here:

-   We have a const for `CHAT_ROOM_TYPES` which has only two types
-   We define our ChatRoom schema
-   We add a static method to initiate chat

## Chat related APIs

### Initiate a chat between users (/room/initiate \[POST request\])

Let's discuss our static method defined in `models/ChatRoom.js` called `initiateChat`:

```
chatRoomSchema.statics.initiateChat = async function (userIds, type, chatInitiator) {
  try {
    const availableRoom = await this.findOne({
      userIds: {
        $size: userIds.length,
        $all: [...userIds],
      },
      type,
    });
    if (availableRoom) {
      return {
        isNew: false,
        message: 'retrieving an old chat room',
        chatRoomId: availableRoom._doc._id,
        type: availableRoom._doc.type,
      };
    }

    const newRoom = await this.create({ userIds, type, chatInitiator });
    return {
      isNew: true,
      message: 'creating a new chatroom',
      chatRoomId: newRoom._doc._id,
      type: newRoom._doc.type,
    };
  } catch (error) {
    console.log('error on start chat method', error);
    throw error;
  }
}
```

This function takes in three parameters:

-   userIds (array of users)
-   type (type of chatroom)
-   chatInitiator (the user who created the chat room)

Next we are doing two things here: either returning an existing chatroom document or creating a new one.

Let's break this one down:

```
const availableRoom = await this.findOne({
  userIds: {
    $size: userIds.length,
    $all: [...userIds],
  },
  type,
});
if (availableRoom) {
  return {
    isNew: false,
    message: 'retrieving an old chat room',
    chatRoomId: availableRoom._doc._id,
    type: availableRoom._doc.type,
  };
}
```

First using the `this.findOne()` API in mongoose, we find all the chatrooms where the following criteria is met:

```
userIds: { $size: userIds.length, $all: [...userIds] },
type: type,
```

You can read more on the $size operator [here][40], and more on the $all operator [here][41].

We're checking to find a chatroom document where an item exists in our chatrooms collection where

1.  the `userIds` are the same as the one we are passing to this function (irrespective of the user ids order), and
2.  the length of the `userIds` is the same as that my `userIds.length` that we are passing through the function.

Also we're checking that the chat room type should be the same.

If something like this is found, we simply return the existing chatroom.

Otherwise we create a new chat room and return it by doing this:

```
const newRoom = await this.create({ userIds, type, chatInitiator });
return {
  isNew: true,
  message: 'creating a new chatroom',
  chatRoomId: newRoom._doc._id,
  type: newRoom._doc.type,
};
```

Create a new room and return the response.

We also have an `isNew` key where, if it's retrieving an old chatroom, we set it to `false` otherwise `true`.

Next for your route created in `routes/chatRoom.js` called `post('/initiate', chatRoom.initiate)` go to its appropriate controller in `controllers/chatRoom.js` and add the following in the `initiate` method:

```
initiate: async (req, res) => {
  try {
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        userIds: { 
          type: types.array, 
          options: { unique: true, empty: false, stringOnly: true } 
        },
        type: { type: types.enum, options: { enum: CHAT_ROOM_TYPES } },
      }
    }));
    if (!validation.success) return res.status(400).json({ ...validation });

    const { userIds, type } = req.body;
    const { userId: chatInitiator } = req;
    const allUserIds = [...userIds, chatInitiator];
    const chatRoom = await ChatRoomModel.initiateChat(allUserIds, type, chatInitiator);
    return res.status(200).json({ success: true, chatRoom });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

We are using the `[make-validation][42]` library here to validate the user's request. For the initiate API, we expect the user to send an array of `users` and also define the type of the `chat-room` that is being created.

Once the validation passes, then:

```
const { userIds, type } = req.body;
const { userId: chatInitiator } = req;
const allUserIds = [...userIds, chatInitiator];
const chatRoom = await ChatRoomModel.initiateChat(allUserIds, type, chatInitiator);
return res.status(200).json({ success: true, chatRoom });
```

One thing to notice here is `userIds, type` is coming from `req.body` while `userId` that is being aliased as `chatInitiatorId` is coming from `req` thanks to our `decode` middleware.

If you remember, we attached `app.use("/room", decode, chatRoomRouter);` in our `server/index.js` file. This means this route `/room/initiate` is authenticated. So `const { userId: chatInitiator } = req;` is the id of the current user logged in.

We simply call our `initiateChat` method from `ChatRoomModel` and pass it `allUserIds, type, chatInitiator`. Whatever result comes we simply pass it to the user.

Let's run this and see if it works (here is a video of me doing it):

<iframe width="459" height="344" src="https://www.youtube.com/embed/vWzmTrNoNJs?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid5"></iframe>

### Create a message in chat room (/:roomId/message) \[POST request\]

Let's create a message for the chat room we just created with `pikachu`.

But before we create a message we need to create a model for our `chatmessages`. So let's do that first. In your `models` folder create a new file called `ChatMessage.js` and add the following content to it:

```
import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const MESSAGE_TYPES = {
  TYPE_TEXT: "text",
};

const readByRecipientSchema = new mongoose.Schema(
  {
    _id: false,
    readByUserId: String,
    readAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: false,
  }
);

const chatMessageSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    chatRoomId: String,
    message: mongoose.Schema.Types.Mixed,
    type: {
      type: String,
      default: () => MESSAGE_TYPES.TYPE_TEXT,
    },
    postedByUser: String,
    readByRecipients: [readByRecipientSchema],
  },
  {
    timestamps: true,
    collection: "chatmessages",
  }
);

chatMessageSchema.statics.createPostInChatRoom = async function (chatRoomId, message, postedByUser) {
  try {
    const post = await this.create({
      chatRoomId,
      message,
      postedByUser,
      readByRecipients: { readByUserId: postedByUser }
    });
    const aggregate = await this.aggregate([
      // get post where _id = post._id
      { $match: { _id: post._id } },
      // do a join on another table called users, and 
      // get me a user whose _id = postedByUser
      {
        $lookup: {
          from: 'users',
          localField: 'postedByUser',
          foreignField: '_id',
          as: 'postedByUser',
        }
      },
      { $unwind: '$postedByUser' },
      // do a join on another table called chatrooms, and 
      // get me a chatroom whose _id = chatRoomId
      {
        $lookup: {
          from: 'chatrooms',
          localField: 'chatRoomId',
          foreignField: '_id',
          as: 'chatRoomInfo',
        }
      },
      { $unwind: '$chatRoomInfo' },
      { $unwind: '$chatRoomInfo.userIds' },
      // do a join on another table called users, and 
      // get me a user whose _id = userIds
      {
        $lookup: {
          from: 'users',
          localField: 'chatRoomInfo.userIds',
          foreignField: '_id',
          as: 'chatRoomInfo.userProfile',
        }
      },
      { $unwind: '$chatRoomInfo.userProfile' },
      // group data
      {
        $group: {
          _id: '$chatRoomInfo._id',
          postId: { $last: '$_id' },
          chatRoomId: { $last: '$chatRoomInfo._id' },
          message: { $last: '$message' },
          type: { $last: '$type' },
          postedByUser: { $last: '$postedByUser' },
          readByRecipients: { $last: '$readByRecipients' },
          chatRoomInfo: { $addToSet: '$chatRoomInfo.userProfile' },
          createdAt: { $last: '$createdAt' },
          updatedAt: { $last: '$updatedAt' },
        }
      }
    ]);
    return aggregate[0];
  } catch (error) {
    throw error;
  }
}

export default mongoose.model("ChatMessage", chatMessageSchema);
```

There are a couple of things happening here:

-   We have a `MESSAGE_TYPES` object which has only one type called `text`
-   We are defining our schema for `chatmessage` and `readByRecipient`
-   Then we are writing our static method for `createPostInChatRoom`

I know this is a lot of content, but just bear with me. Let's just write the controller for the route that creates this message.

For the route defined in our `routes/chatRoom.js` API called `.post('/:roomId/message', chatRoom.postMessage)` let's go to its controller in `controllers/chatRoom.js` and define it:

```
postMessage: async (req, res) => {
  try {
    const { roomId } = req.params;
    const validation = makeValidation(types => ({
      payload: req.body,
      checks: {
        messageText: { type: types.string },
      }
    }));
    if (!validation.success) return res.status(400).json({ ...validation });

    const messagePayload = {
      messageText: req.body.messageText,
    };
    const currentLoggedUser = req.userId;
    const post = await ChatMessageModel.createPostInChatRoom(roomId, messagePayload, currentLoggedUser);
    global.io.sockets.in(roomId).emit('new message', { message: post });
    return res.status(200).json({ success: true, post });
  } catch (error) {
    return res.status(500).json({ success: false, error: error })
  }
},
```

Cool, let's discuss what we are doing here:

<iframe width="459" height="344" src="https://www.youtube.com/embed/z1C0Sl2wmJU?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid6"></iframe>

Operators discussed in this video are:

-   [$match][43]
-   [$last][44]
-   [$addToSet][45]
-   [$lookup][46]
-   [$unwind][47]
-   [$group][48]

### See conversation for a chat room by it's id \[Get request\]

Now that we have

-   Created a chat room
-   Are able to add messages in that chat room

Let's see the entire conversation for that chat as well (with pagination).

For your route `.get('/:roomId', chatRoom.getConversationByRoomId)` in `routes/chatRoom.js` open its controller in the file `controllers/chatRoom.js` and add the following content to the chat room:

```
getConversationByRoomId: async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
    if (!room) {
      return res.status(400).json({
        success: false,
        message: 'No room exists for this id',
      })
    }
    const users = await UserModel.getUserByIds(room.userIds);
    const options = {
      page: parseInt(req.query.page) || 0,
      limit: parseInt(req.query.limit) || 10,
    };
    const conversation = await ChatMessageModel.getConversationByRoomId(roomId, options);
    return res.status(200).json({
      success: true,
      conversation,
      users,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error });
  }
},
```

Next let's create a new static method in our `ChatRoomModel` file called `getChatRoomByRoomId` in `models/ChatRoom.js`:

```
chatRoomSchema.statics.getChatRoomByRoomId = async function (roomId) {
  try {
    const room = await this.findOne({ _id: roomId });
    return room;
  } catch (error) {
    throw error;
  }
}
```

Very straightforward – we are getting the room by roomId here.

Next in our `UserModel`, create a static method called `getUserByIds` in the file `models/User.js`:

```
userSchema.statics.getUserByIds = async function (ids) {
  try {
    const users = await this.find({ _id: { $in: ids } });
    return users;
  } catch (error) {
    throw error;
  }
}
```

The operator used here is [$in][49] – I'll talk about this in a bit.

And then at last, go to your `ChatMessage` model in `models/ChatMessage.js` and write a new static method called `getConversationByRoomId`:

```
chatMessageSchema.statics.getConversationByRoomId = async function (chatRoomId, options = {}) {
  try {
    return this.aggregate([
      { $match: { chatRoomId } },
      { $sort: { createdAt: -1 } },
      // do a join on another table called users, and 
      // get me a user whose _id = postedByUser
      {
        $lookup: {
          from: 'users',
          localField: 'postedByUser',
          foreignField: '_id',
          as: 'postedByUser',
        }
      },
      { $unwind: "$postedByUser" },
      // apply pagination
      { $skip: options.page * options.limit },
      { $limit: options.limit },
      { $sort: { createdAt: 1 } },
    ]);
  } catch (error) {
    throw error;
  }
}
```

Let's discuss all that we have done so far:

<iframe width="459" height="344" src="https://www.youtube.com/embed/cnwOMrVMv0c?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid7"></iframe>

**[All the source code is available here][50].**

### Mark an entire conversation as read (feature similar to WhatsApp)

Once the other person is logged in and they view a conversation for a room id, we need to mark that conversation as read from their side.

To do this, in your `routes/chatRoom.js` for the route

```
put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)
```

go to its appropriate controller in `controllers/chatRoom.js` and add the following content in the `markConversationReadByRoomId` controller.

```
markConversationReadByRoomId: async (req, res) => {
  try {
    const { roomId } = req.params;
    const room = await ChatRoomModel.getChatRoomByRoomId(roomId)
    if (!room) {
      return res.status(400).json({
        success: false,
        message: 'No room exists for this id',
      })
    }

    const currentLoggedUser = req.userId;
    const result = await ChatMessageModel.markMessageRead(roomId, currentLoggedUser);
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error });
  }
},
```

All we are doing here is first checking if the room exists or not. If it does, we proceed further. We take in the `req.user.id` as `currentLoggedUser` and pass it to the following function:

```
ChatMessageModel.markMessageRead(roomId, currentLoggedUser);
```

Which in our `ChatMessage` model is defined like this:

```
chatMessageSchema.statics.markMessageRead = async function (chatRoomId, currentUserOnlineId) {
  try {
    return this.updateMany(
      {
        chatRoomId,
        'readByRecipients.readByUserId': { $ne: currentUserOnlineId }
      },
      {
        $addToSet: {
          readByRecipients: { readByUserId: currentUserOnlineId }
        }
      },
      {
        multi: true
      }
    );
  } catch (error) {
    throw error;
  }
}
```

A possible use case is that the user might not have read the last 15 messages once they open up a specific room conversation. They should all be marked as read. So we're using the `this.updateMany` function by mongoose.

The query itself is defined in 2 steps:

-   Find
-   Update

And there can be multiple statements be updated.

To find a section, do this:

```
{
  chatRoomId,
  'readByRecipients.readByUserId': { $ne: currentUserOnlineId }
},
```

This says I want to find all the message posts in the `chatmessages` collection where `chatRoomId` matches and `readByRecipients` array does not. The `userId` that I am passing to this function is `currentUserOnlineId`.

Once it has all those documents where the criteria matches, it's then time to update them:

```
{
  $addToSet: {
    readByRecipients: { readByUserId: currentUserOnlineId }
  }
},
```

`$addToSet` will just push a new entry to the `readByRecipients` array. This is like `Array.push` but for mongo.

Next we want to tell `mongoose` to not just update the first record it finds, but also to update all the records where the condition matches. So doing this:

```
{
  multi: true
}
```

And that is all – we return the data as is.

Let's run this API.

Start up the server:

```
npm start;
```

Open your postman and create a new `PUT` request to test this route `ocalhost:3000/room/<room=id-here>/mark-read`:

![Screenshot-2020-06-16-at-23.20.53](https://www.freecodecamp.org/news/content/images/2020/06/Screenshot-2020-06-16-at-23.20.53.png)

### Bonus Section

-   How to delete a chat room and all its related messages
-   How to delete a message by its message id

<iframe width="459" height="344" src="https://www.youtube.com/embed/GHhOIg5ZDa4?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" name="fitvid8"></iframe>

And we are done! Wow that was a lot of learning today.

You can find the source code of this tutorial [here][51].

Reach out to me on twitter with your feedback – I would love to hear if you have any suggestions for improvements: [twitter.com/adeelibr][52]

If you liked to this article, please do give the [github repository][53] a star and subscribe to my [youtube channel][54].

[1]: https://nodejs.org/
[2]: http://expressjs.com/
[3]: https://www.mongodb.com/
[4]: https://github.com/adeelibr/node-playground/blob/master/chapter-1-chat/guidelines/installing-mongo.md
[5]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#procedure
[6]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-homebrew
[7]: https://github.com/adeelibr/node-playground/blob/master/chapter-1-chat/guidelines/installing-mongo.md
[8]: https://docs.mongodb.com/manual/administration/install-on-linux/
[9]: https://nodejs.org/en/download/
[10]: https://github.com/adeelibr/node-playground/tree/master/chapter-0-basic
[11]: https://github.com/adeelibr/node-playground/tree/master/chapter-0-basic
[12]: https://github.com/withvoid/make-validation
[13]: https://www.npmjs.com/package/@withvoid/make-validation
[14]: https://github.com/withvoid/make-validation/tree/master/example
[15]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[16]: http://twitter.com/adeelibr
[17]: https://github.com/adeelibr/node-playground
[18]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#procedure
[19]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-homebrew
[20]: https://github.com/adeelibr/node-playground/blob/master/chapter-1-chat/guidelines/installing-mongo.md
[21]: https://docs.mongodb.com/manual/administration/install-on-linux/
[22]: https://twitter.com/adeelibr
[23]: https://robomongo.org/
[24]: https://robomongo.org/
[25]: https://robomongo.org/
[26]: https://robomongo.org/
[27]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[28]: https://docs.mongodb.com/manual/reference/connection-string/
[29]: https://mongoosejs.com/docs/deprecations.html#useunifiedtopology
[30]: https://twitter.com/adeelibr
[31]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[32]: https://www.npmjs.com/package/@withvoid/make-validation
[33]: https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
[34]: https://www.getpostman.com/collections/c28b12148c3d980fc39d
[35]: https://github.com/adeelibr/node-playground/tree/master/chapter-0-basic
[36]: https://www.quora.com/Why-is-Bearer-required-before-the-token-in-Authorization-header-in-a-HTTP-request
[37]: https://twitter.com/adeelibr
[38]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[39]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[40]: https://docs.mongodb.com/manual/reference/operator/query/size/
[41]: https://docs.mongodb.com/manual/reference/operator/query/all/
[42]: https://www.npmjs.com/package/@withvoid/make-validation
[43]: https://docs.mongodb.com/manual/reference/operator/aggregation/match/
[44]: https://docs.mongodb.com/manual/reference/operator/aggregation/last/
[45]: https://docs.mongodb.com/manual/reference/operator/update/addToSet/
[46]: https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/
[47]: https://docs.mongodb.com/manual/reference/operator/aggregation/unwind/
[48]: https://docs.mongodb.com/manual/reference/operator/aggregation/group/
[49]: https://docs.mongodb.com/manual/reference/operator/query/in/
[50]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[51]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[52]: https://twitter.com/adeelibr
[53]: https://github.com/adeelibr/node-playground/tree/master/chapter-1-chat
[54]: https://www.youtube.com/channel/UCGHFI8lm4QzUzFH5nnzqkjA