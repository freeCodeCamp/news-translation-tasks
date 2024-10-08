---
title: How to make a Promise out of a Callback function in JavaScript
date: 2024-10-08T13:16:33.296Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-make-a-promise-out-of-a-callback-function-in-javascript-d8ec35d1f981/
posteditor: ""
proofreader: ""
---

By Adham El Banhawy

<!-- more -->

Back-end developers run into challenges all the time while building applications or testing code. As a developer who is fairly new and getting acquainted with those challenges, I have never run into a challenge or inconvenience more frequently — or more memorable — than with **callback functions.**

I am not going to delve too deeply into the details of callback and its pros and cons or alternatives like promises and async/await. For a more vivid explanation, you can check out [this article][1] which explains them thoroughly.

### **Callback Hell**

Callbacks are a useful feature of JavaScript’s that enables it make asynchronous calls. They are functions that are usually passed on as a second parameter to another function that is fetching data or doing an I/O operation that takes time to complete.

For example, try making an API call using the `request` module or connecting to a MongoDB database. But what if both calls depend on each other? What if the data you’re fetching is the MongoDB URL that you need to connect to?

You’d have to nest these calls inside each other:

```
request.get(url, function(error, response, mongoUrl) {

  if(error) throw new Error("Error while fetching fetching data");

  MongoClient.connect(mongoUrl, function(error, client) {

    if(error) throw new Error("MongoDB connection error");

    console.log("Connected successfully to server");    
    const db = client.db("dbName");
    // Do some application logic
    client.close();

  });

});
```

Okay…so where’s the problem? Well, for one thing, the readability of the code suffers from this technique.

It may seem OK at first when the codebase is small. But this doesn’t scale well, especially if you go more layers deeper into the nested callbacks.

You will end up with a lot of closing brackets and curly braces that will confuse you and other developers no matter how neatly formatted your code is. There is a website called [callbackhell][2] that addresses this specific issue.

I hear some of you, including my naïve past self, telling me wrap it in an `async` function then `await` the callback function. This just doesn’t work.

If there is any code block after the the function that uses callbacks, that code block will execute and **will NOT** **wait** for the callback.

Here’s that mistake that I did before:

```
var request = require('request');

// WRONG

async function(){

  let joke;
  let url = "https://api.chucknorris.io/jokes/random"

  await request.get(url, function(error, response, data) {

    if(error) throw new Error("Error while fetching fetching data");

    let content = JSON.parse(data);
    joke = content.value;

  });

  console.log(joke); // undefined

};

// Wrong

async function(){

  let joke;
  let url = "https://api.chucknorris.io/jokes/random"

  request.get(url, await function(error, response, data) {

    if(error) throw new Error("Error while fetching fetching data");

    let content = JSON.parse(data);
    joke = content.value;

  });

  console.log(joke); // undefined

};
```

Some more experienced devs might say “Just use a different library that uses promises to do the same thing, like [axios][3], or just use [fetch][4]”_._ Sure I can in that scenario, but that’s just running away from the problem.

Besides, this is just an example. Sometimes you can be locked into using a library that doesn’t support promises with no alternatives. Like using software development kits (SDKs) to communicate with platforms like Amazon Web Services (AWS), Twitter, or Facebook.

Sometimes, even using a callback to do a very simple call with a quick I/O or CRUD operation is fine, and no other logic depends on its results. But you might be constrained by the runtime environment like in a [Lambda function][5] which would kill all process once the main thread finishes, regardless of any asynchronous calls that did not complete.

### Solution 1 (easy): Use Node’s “util” module

The solution is surprisingly simple. Even if you’re a little uncomfortable with the idea of promises in JavaScript, you will love how you can solve this issue using them.

As pointed out by Erop and Robin in the comments, Nodejs version 8 and above now support turning callback functions into promises using the built-in **util** module.

```
const request = require('request');

const util = require('util');

const url = "https://api.chucknorris.io/jokes/random";

// Use the util to promisify the request method

const getChuckNorrisFact = util.promisify(request);

// Use the new method to call the API in a modern then/catch pattern

getChuckNorrisFact(url).then(data => {

   let content = JSON.parse(data.body);

   console.log('Joke: ', content.value);

}).catch(err => console.log('error: ', err))
```

The above code solves the problem neatly using the [**util.promisify**][6] method available from nodejs core library.

All you have to do is use the callback function as an argument to util.promisify, and store it an a variable. In my case, that’s _getChuckNorrisFact_.  
Then you use that variable as a function that you can use like a promise with the **.then()** and the **.catch()** methods.

### Solution 2 (involved): Turn the Callback into a Promise

Sometimes, using the request and util libraries is just not possible, whether it’s because of a legacy environment/code base or doing the requests from the client-side browser, you have to wrap a promise around your callback function.

Let’s take the Chuck Norris example above, and turn that into a promise.

```
var request = require('request');
let url = "https://api.chucknorris.io/jokes/random";

// A function that returns a promise to resolve into the data //fetched from the API or an error
let getChuckNorrisFact = (url) => {
  return new Promise(
    (resolve, reject) => {
      request.get(url, function(error, response, data){
        if (error) reject(error);

let content = JSON.parse(data);
        let fact = content.value;
        resolve(fact);
      })
   }
 );
};

getChuckNorrisFact(url).then(
   fact => console.log(fact) // actually outputs a string
).catch(
   error => console.(error)
);
```

![Image](https://cdn-media-1.freecodecamp.org/images/ZXNYPRkv4mC2cHoq-4PIdoAx0WK-DyuUybzA) _works like magic_

In the code above, I put the callback-based `request` function inside a Promise wrapper `Promise( (resolve, reject) => { //callback function})`. This wrapper allows us to call the `getChuckNorrisFact` function like a promise with the `**.then()**`and `.catch()` methods. When the `_getChuckNorrisFact_` is called, it executes the request to the API and **waits** for either a `resolve()` or a `reject()` statement to execute. In the callback function, you simply pass the retrieved data into the resolve or reject methods.

Once the data (in this case, an awesome Chuck Norris fact) is fetched and passed to the resolver, the `getChuckNorrisFact` executes the `then()` method. This will return the result that you can **use inside a function inside the `then()`** to do your desired logic — in this case displaying it to the console.

You can read more about it in the [MDN Web Docs.][7]

[1]: https://medium.com/codebuddies/getting-to-know-asynchronous-javascript-callbacks-promises-and-async-await-17e0673281ee
[2]: http://callbackhell.com/
[3]: https://www.npmjs.com/package/axios
[4]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[5]: https://docs.aws.amazon.com/lambda/latest/dg/lambda-introduction-function.html
[6]: https://nodejs.org/docs/latest-v8.x/api/util.html#util_util_promisify_original
[7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API