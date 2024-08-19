---
title: The JavaScript Interview Prep Handbook – Essential Topics to Know + Code
  Examples
date: 2024-08-19T08:41:41.590Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/kunal-nalawade-25/
originalURL: https://www.freecodecamp.org/news/js-interview-prep-handbook/
posteditor: ""
proofreader: ""
---

JavaScript is a widely used language in web development and powers interactive features of virtually every website out there. JavaScript makes it possible to create dynamic web pages and is very versatile.

<!-- more -->

JavaScript remains one of the most in-demand programming languages in 2024. Many companies are looking for proficiency in JavaScript, and one of its frameworks like Angular and React. If you are an aspiring web developer, understanding what these companies look for in interviews is the key to unlocking great opportunities.

In this handbook, I'll delve into several essential JavaScript concepts that you must prepare before going to an interview. Equipped with the fundamentals and the following concepts, you'll position yourself as an impressive candidate in the web development landscape.

## Table of Contents

-   [How to Use `var`, `let`, and `const` Keywords.][1]
-   [What is Hoisting?][2]
-   [How Do Closures Work?][3]
-   [How to Implement Debouncing.][4]
-   [How to Implement Throttling.][5]
-   [What is Currying?][6]
-   [What is the Difference between `==` and `===`?][7]
-   [How Does the `this` Keyword Work?][8]
-   [How to Use the `call`, `apply` and `bind` Methods.][9]
-   [What are Prototypes and Prototypal Inheritance?][10]
-   [‌How to Use the Spread Operator.][11]
-   [How Does Array and Object Destructuring Work?][12]
-   [What are Promises?][13]
-   [How to Use the `async` and `await` Keywords.][14]
-   [What is an Event Loop?][15]
-   [How Event Propagation Works – Bubbling and Capturing.][16]
-   [What are Generator Functions?][17]
-   [How to Implement Polyfills for `Array.map()`, `Array.reduce()`, and `Array.filter()`][18]
-   [Additional Thoughts][19]

## How to Use `var`, `let`, and `const` Keywords

In JavaScript, you can declare a variable in three ways: using `var`, `let` and `const`. It's essential to understand the difference between these three.

A `var` variable has global and function level scope. If the variable is declared globally, it can be accessed anywhere and if declared inside a function, it can be accessed anywhere within the function.

```javascript
var a=5
function fun() {
    var b=4
}

console.log(a) // 5
console.log(b) // throws ReferenceError
```

A `let` variable has block level scope. This variable, if declared inside a block, cannot be accessed outside it. For example:              

```javascript
var a = 5;
if (a > 1) {
    var b = 6;
    let c = 7;
}
console.log(a); // prints 5
console.log(b); // prints 6
console.log(c); // throws ReferenceError
```

Here, variables `a` and `b` have global scope, so they can be accessed anywhere. Variable `c` cannot be accessed outside the `if` block since `let` only has block level scope.

`const` is used to declare a constant. Once a variable is declared with `const`, it cannot be modified.              

```javascript
const x = 5;
x = 6; // Throws an error
```

However, you can modify properties of an object, or elements of an array.

```javascript
const obj = { name: 'kunal', age: 21 };
obj.name = 'alex';
console.log(obj); // { name: 'alex', age: 21 }

const arr = [1, 2, 3];
arr[1] = 4;
console.log(arr); // [ 1, 4, 3 ]
```

## What is Hoisting?

Hoisting refers to JavaScript's default behavior that moves all variables and function declarations to the top. This means you can use them before they are declared.

```javascript
x=5 
console.log(x) // prints 5 
var x               
```

In the code above, JavaScript has moved the variable declaration to the top of the code block. That is: it is similar to declaring `x` at the first line.

In the case of functions, the declarations are also moved to top:

```javascript
function foo() {
    console.log("foo called");
}

foo(); // foo called
```

However, this does not work with `let` and `const`.

```javascript
x = 5; // throws ReferenceError
let x;

fiz(); // throws ReferenceError
const fiz = () => { console.log("fiz called") };
```

## How Do Closures Work?

Closures are an important concept in JavaScript. When you have a function inside another function, the inner function has access to all the variables of the outer function.

But when this inner function is returned by the outer function, the inner function can be called anywhere outside the outer function and it can still access those variables.

```javascript
function fun() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
}

const innerFun = fun();
innerFun(); // prints 1
innerFun(); // prints 2
innerFun(); // prints 3
```

Here, `fun()` declares and initializes a variable `count`. Then, it returns an inner function that increments `count` before printing it. Now, when you call `innerFun()` anywhere outside the `fun()` method, it can still access `count` and increment it.

This is the concept of closures. You can understand more about closures in the following post by [Matías Hernández][20].

[

How to Use Closures in JavaScript – A Beginner’s Guide

Closures are a confusing JavaScript concept to learn, because it’s hard to seehow they’re actually used. Unlike other concepts such as functions, variables, and objects, you don’talways use closures conscientiously and directly. You don’t say: Oh! Here I willuse a closure as a solution. But at…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Matías HernándezfreeCodeCamp.org

![English-Header-4](https://www.freecodecamp.org/news/content/images/2021/01/English-Header-4.png)

][21]

## How to Implement Debouncing

Debouncing is a technique that delays a function call by few seconds and ensures that there is always a delay between function call and execution.

When you call a function, it gets executed after a delay. However, if you call the function again within that delay, the previous call is cancelled and a new timer is started. The same process repeats for each subsequent function call.

Let's see how to implement it:

```javascript
function debounce(func, delay) {
    let timeout = null;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            timeout = null;
        }, delay);
    };
}
```

Debouncing takes a function and a delay as parameters, and returns a new, debounced function. When you call the debounced function, it will execute after `delay` milliseconds. If the function is called within that time, it cancels the previous call and waits for `delay` again.

Let's test this behavior:

```javascript
function fun(a, b) {
    console.log(`This is a function with arguments ${a} and ${b}`);
}

const debouncedFun = debounce(fun, 500);
debouncedFun(2, 3);
debouncedFun(2, 3);
debouncedFun(2, 3); // This is a function with arguments 2 and 3
```

The first two calls do not execute, while the third one does, after 500ms. Debouncing uses the concept of closures, so it's important to understand them first.

Debouncing has plenty of applications, with the most popular one being the auto-complete functionality in search bars. I have explained debouncing in detail in the following post:

[

Debouncing in JavaScript – Explained by Building Auto-Complete Functionality in React

Hi readers, I hope you are doing great! I am back with another tutorial on webdevelopment. If you are someone who enjoys developing web apps with JavaScriptand React, then this post is for you. When you roll out a new app into production, you want to make sure that it’suser friendly. A website’s…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Kunal NalawadefreeCodeCamp.org

![photo-1550063873-ab792950096b](https://www.freecodecamp.org/news/content/images/2024/02/photo-1550063873-ab792950096b.jpeg)

][22]

## How to Implement Throttling

Throttling is a technique that limits the rate at which a function is called. A throttled function executes for the first time and can only be called again after a certain delay. If it is called within the delay, nothing happens.

Let's see how to implement it:

```javascript
function throttle(func, delay) {
    let timeout = null;
    return (...args) => {
        if (!timeout) {
            func(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    };
}
```

`throttle()` takes a function and a delay as parameters, and returns a throttled function. When you call the throttled function, it executes the first time and starts a timeout with `delay`. Within this time, no matter how many times you call the throttled function, it won't execute.

Let's test this behavior:

```javascript
function fun(a, b) {
    console.log(`This is a function with arguments ${a} and ${b}`);
}

const throttledFun = throttle(fun, 500);

throttledFun(2, 3); // This is a function with arguments 2 and 3
throttledFun(2, 3);

setTimeout(() => {
    throttledFun(2, 3);
}, 300);

setTimeout(() => {
    throttledFun(2, 3); // This is a function with arguments 2 and 3
}, 600);
```

Here, the first call executes immediately, and for the next 500ms, no function call will execute. The last one executes since it is called after 500ms.

Throttling also uses the concept of closures. I have explained throttling in detail in my post, so check it out:

[

What is Throttling in JavaScript? Explained with a Simple React Use Case

Welcome back, fellow developers! Today, we are once again delving intoJavaScript and Web Development and learning about throttling. As a developer, making your website user-friendly is important. This goes a longway toward the product’s success, and a key part of the user experience is thewebsi…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Kunal NalawadefreeCodeCamp.org

![throttling-image](https://www.freecodecamp.org/news/content/images/2024/04/throttling-image.jpeg)

][23]

## What is Currying?

Currying is a technique where a function with multiple arguments is transformed into a sequence of functions, with each function taking a single argument and returning another function. For example, consider the function below:

```javascript
function add(a, b, c) {
    return a + b + c;
}
```

With currying, the above function can be written as:

```javascript
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
```

Here, each function inside `curryAdd` takes one argument and returns another function till all arguments are collected. `curryAdd` is also known as a [higher-order function][24].

Currying allows you to reuse partial implementations of a function. In case you do not have all the arguments available, you can fix some arguments of the function initially and return a reusable function.

```javascript
// Reusable function
const addTwo = curryAdd(2);
console.log(addTwo); // prints the function

// Calling final result
const result1 = addTwo(5)(10);
console.log(result1); // 17

const result2 = addTwo(3)(5);
console.log(result2); // 10
```

`addTwo` is a reusable function that can be used later, when additional arguments become available.

Thus, currying enhances code modularity and flexibility with partial function application. It also allows you to create functions that are tailored to specific needs as seen in the example above.

Currying simplifies complex functions by breaking them down into simpler, more manageable parts. This leads to cleaner and readable code.

## What is the Difference between `==` and `===`?

This is really simple, yet a very commonly asked in interviews.

```javascript
let a = 1;
let b = "1";

console.log(a == b); // true
console.log(a === b); // false
```

-   `==` compares only the value of `a` and `b`,
-   `===` compares both value and data type of `a` and `b`

## How Does the `this` Keyword Work?

The `this` keyword is the object that you are currently referencing. Its value is set to the context in which you are using it. When referenced globally, `this` refers to the [window][25] object.

```javascript
console.log(this) // prints window {}
```

`this` can be used to access properties of an object.

```javascript
const obj = {
    name: 'kunal',
    age: 21,
    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

obj.getInfo();
```

Refer to the [docs][26] to learn more about the `this` keyword.

## How to Use the `call`, `apply` and `bind` Methods

When you use `this` inside a function, its value is set to the object on which the function is called. Let's take an example:

```javascript
function getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
```

`call`, `apply` and `bind` are used to set the value of the `this` keyword inside a method.

### `call`

To call `getInfo()` function on an object, use the `call` function. Let's create two objects and call `getInfo()` on these objects.

```javascript
const ob1 = { name: 'alex', age: 25 };
const ob2 = { name: 'marcus', age: 23 };

getInfo.call(ob1); // Name: alex, Age: 25
getInfo.call(ob2); // Name: marcus, Age: 23
```

`call` sets the value of the `this` keyword inside a function.

### `apply`

The `apply` method is similar to `call`, but it differs in the way you pass arguments. Consider a function with arguments:              

```javascript
function getInfo(a, b) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Args: ${a} and ${b}`);
}

const obj = {
    name: 'alex',
    age: 25
};

getInfo.call(obj, 2, 3);
getInfo.apply(obj, [2, 3]);
```

### `bind`

`bind` is used to create a new function that has its `this` keyword set to one object. Let's use the above `getInfo` function as example.

```javascript
const obj = {
    name: 'alex',
    age: 25
};

const objGetInfo = getInfo.bind(obj, 2, 3);
objGetInfo();
```

When `bind` is called on `getInfo()` function, it returns a new function that is bound to `obj`. Now, every time you call the `objGetInfo()` function, `this` keyword refers to `obj`.

All three methods are similar. That is, they set the value of `this` keyword. However, a key difference in `bind` is that it returns a new function, whereas `call` and `apply` simply just call the function.

## What are Prototypes and Prototypal Inheritance?

Inheritance is a concept in object oriented programming that allows an object to inherit properties and methods from another object. However, inheritance works differently in JavaScript.

In JavaScript, every object has a property that links to another object called a prototype. The prototype itself is an object that can have its own prototype, thus forming a prototype chain. This chain ends when we reach a prototype equal to `null`.

Prototype allows you to inherit methods and properties from another object. When a property does not exist on an object, JavaScript searches its prototype and so on till it reaches the end of the prototype chain.

Let's understand with an example.

```javascript
let animal = {
    eats: true,
    walk() {
        console.log("Animal is walking");
    }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;
rabbit.walk(); // Animal is walking
```

`Object.create` creates a new object `rabbit` with its prototype set to `animal`.  You can also set additional properties of the new object.

Also, the `walk()` method does not exist on `rabbit`, so it searches the object's prototype `animal`. This means the `rabbit` object has inherited the properties and methods of the `animal` object.

You can also use the ES6 `Object.setPrototypeOf` method on any object.

```javascript
const dog = {
    bark() {
        console.log("Dog barking");
    }
};

Object.setPrototypeOf(dog, animal);
console.log(dog.eats); // true
dog.walk(); // Animal is walking
```

You can also use a function as a constructor and set its prototype using the `prototype` property.

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(`${this.name} is walking`);
};

const dog = new Animal("Dog");
console.log(dog); // Animal { name: 'Dog' }
dog.walk(); // Dog is walking
```

You can learn more about prototypes and inheritance in JavaScript in the following post by [Germán Cocca][27].

[

JavaScript Prototypes and Inheritance – and Why They Say Everything in JS is an Object

Hi everyone! In this short article we’re going to talk about prototypalinheritance in JavaScript, and what are the implications of it. Table of Contents \* Intro \* How to access a prototype’s properties and methods in JavaScript \* The prototype chain \* A prototype-based language \* Javascript c…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Germán CoccafreeCodeCamp.org

![pexels-maor-attias-5192478](https://www.freecodecamp.org/news/content/images/2022/04/pexels-maor-attias-5192478.jpg)

][28]

## ‌How to Use the Spread Operator

The spread operator is used to spread out contents of an array or object into individual elements or collect a bunch of elements into a single object. It has following use cases:

Spread operator can be used to copy an array into a new one:

```javascript
const arr1 = [2, 4, 5];
const arr2 = [...arr1];

console.log(arr1); // [2, 4, 5]
console.log(arr2); // [2, 4, 5]
console.log(arr1 == arr2); // false
```

`arr1` and `arr2` are completely different objects as shown with the equality operator.

You can also reuse fields from one object while creating a new object:

```javascript
const obj1 = { name: 'kunal', age: 23 };
const obj2 = { ...obj1, gender: 'male', city: 'Mumbai' };

console.log(obj2); // { name: 'kunal', age: 23, gender: 'male', city: 'Mumbai' }
```

You can collect multiple arguments passed to a function into an array.

```javascript
function fun1(...args) {
    console.log(args);
}

fun1(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
```

Or you can pass elements of an array as individual arguments to a function.

```javascript
function fun2(a, b) {
    console.log(`${a} and ${b}`);
}

const numbers = [1, 2];
fun2(...numbers);
```

## How Does Array and Object Destructuring Work?

Similar to the spread operator, you can spread out elements of an array or an object into individual variables.

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

This is the same for objects:        

```javascript
const obj = { name: 'kunal', age: 22, gender: 'male' };
const {name, age, gender} = obj;

console.log(name); // kunal
console.log(age); // 22
console.log(gender); // male
```

## What are Promises?

Promises are a very important concept in JavaScript, almost certain to be asked in interviews. Promises are used for asynchronous operations in JavaScript like timeouts or API calls.

Promises use a [Promise][29] object that exists in one of three states: pending, fulfilled (resolved), and rejected. When an asynchronous operation ends, a promise can either be resolved (successful) or rejected (failure).

Let's take a simple example:

```javascript
function asyncOperation() {
    return new Promise((resolve, reject) => {
        const x = 1 + Math.random() * 10;
        if (x < 5) 
            resolve("Successful");
        else 
            reject("Error");
    });
}
```

The above function returns a promise that performs an asynchronous operation.

-   If the operation is successful, the `resolve` method is called to indicate that the promise has been fulfilled.
-   If the operation fails, the `reject` method is called to indicate that the promise has been rejected.

In this example, these methods are called at random. To handle this promise in your code, use the `then` and `catch` methods.

```javascript
asyncOperation()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
```

-   The `then` method takes a callback function that executes if the promise was resolved. It takes a response object as an argument that is equal to the object you pass in the `resolve` method.
-   The `catch` method takes a callback function that executes if the promise was rejected and takes an error object as argument that is passed in the `reject` method.

The above code prints "Successful" and "Error" at random.

Apart from the basics, the Promise object also contains useful methods that work with multiple promises: `[Promise.all()][30]`, `[Promise.any()][31]`, `[Promise.race()][32]`.

Read the following tutorial to learn about promises in detail:

[

JavaScript Promise Tutorial – How to Resolve or Reject Promises in JS

Promises are important building blocks for asynchronous operations inJavaScript. You may think that promises are not so easy to understand, learn,and work with. And trust me, you are not alone! Promises are challenging for many web developers, even after spending yearsworking with them. In thi…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)TAPAS ADHIKARYfreeCodeCamp.org

![cover-1](https://www.freecodecamp.org/news/content/images/2020/11/cover-1.png)

][33]

## How to Use the `async` and `await` Keywords

`await` keyword pauses execution of a function till a promise has been resolved or rejected. `await` can only be used inside an `async` function. Let's take an example:

```javascript
function dataPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data retrieved"), 500);
    });
}

async function fetchData() {
    try {
        const res = await dataPromise();
        console.log(res); // Data retrieved (after 500ms)
    } catch(err) {
        console.log(err);
    }
}

fetchData();
```

When `dataPromise()` is called, the execution of the function pauses for 500ms. The execution continues after the promise has resolved. To handle errors, surround the code with a `try-catch` block.

The `await` keyword also makes it easier to work with multiple promises that run one after the other.

```javascript
function promise1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promise 1 resolved"), 500);
    });
}

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promise 2 resolved"), 300);
    });
}

async function fetchData() {
    try {
        const res1 = await promise1();
        console.log(res1); // Promise 1 resolved (after 500ms)
        const res2 = await promise2();
        console.log(res2); // Promise 2 resolved (after 300ms)
    } catch(err) {
        console.log(err);
    }
}

fetchData();
```

`async` and `await` makes it easier to work with promises and also makes your code cleaner and readable by removing nesting in the code.

## What is an Event Loop?

Event loop explains the mechanism behind asynchronous operations and event handling. This is a crucial concept in JavaScript that explains its runtime model and thus, one of the most commonly asked question in interviews.

Instead of providing a brief explanation, I think you should learn it in detail and understand it fully. Read the [MDN Docs][34] to understand event loop in detail, with the help of diagram.

If you prefer videos, you can also watch the following video by Philip Roberts:

<iframe width="356" height="200" src="https://www.youtube.com/embed/8aGhZQkoFbQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="What the heck is the event loop anyway? | Philip Roberts | JSConf EU" name="fitvid0"></iframe>

## How Event Propagation Works – Bubbling and Capturing

Event propagation takes place when an event is captured and handled by the target element and all its ancestors. Take the following example:

```html
<body>
    <div id="box"> <button id="button">Click Me</button> </div>
    <script src="script.js"></script>
</body>
```

When you click the button, you have also clicked the `div` element as well the `body`. The event is propagated throughout the DOM tree. Let's add handlers to all the above elements:

```javascript
document.body.addEventListener("click", () => {
    console.log("Body clicked");
});

document.getElementById("box").addEventListener("click", () => {
    console.log("div clicked");
});

document.getElementById("button").addEventListener("click", () => {
    console.log("Button clicked");
});
```

Event propagation occurs in two ways:

### Event Bubbling

When the button is clicked, the event handler of the button is called first. Then, the event bubbles up the DOM tree and the event handlers of parents are called sequentially from the immediate parent to the highest ancestor. That is: the `div` and `body` elements respectively.

![image-52](https://www.freecodecamp.org/news/content/images/2024/05/image-52.png)

Event Bubbling

### ‌Event Capturing

This works similar to event bubbling, but in reverse. The event is first captured by the root element, then travels down the DOM tree to the target element.

The event handlers are called in sequence starting from the root element, down to the target element. This can be achieved by passing `true` as the third parameter in the `addEventListener()` function.‌

```javascript
document.body.addEventListener("click", () => {
    console.log("Body clicked");
}, true);
```

![image-53](https://www.freecodecamp.org/news/content/images/2024/05/image-53.png)

Event Capturing

However, this looks counter-productive. After all, the user only wants to click the button, they have no idea of the DOM tree structure. So, to prevent this behaviour, we can use the `stopPropagation()` method.

```javascript
document.getElementById("button").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button clicked");
});
```

c

![image-54](https://www.freecodecamp.org/news/content/images/2024/05/image-54.png)

Stopped propagation

## What are Generator Functions?

Generator functions are special type of functions that can pause their execution and resume it later. They also return a value each time they pause execution.

Generator functions can be used to return a sequence of values in an iterative manner as opposed to normal functions that return only once.

Following is a basic example of a generator function:

```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
}
```

A generator function is declared with `function*` and the `yield` keyword is used to pause execution and return a value. The above syntax creates a [GeneratorFunction][35] object.

```javascript
const gen = generatorFunction()
```

‌This object uses an [iterator][36] to execute a generator function. The iterator provides a `next()` method that executes the function's body till the next yield statement and returns an object containing the yielded value and a `done` property (Boolean), which indicates if the generator function has reached its end.

Let's call the generator function:

```javascript
console.log(gen.next().value); // 1
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

‌Here, the first call to `next()` yields 1 and the second one yields 2. The last one yields nothing and sets the `done` flag to true as there are no more `yield` statements.

You can also loop over a generator function using `for` loop:

```javascript
for(value of generatorFunction()) {
  console.log(value)
}
```

In this way, you can control the execution of a generator function by entering and exiting a function at any time.

## How to Implement Polyfills for `Array.map()`, `Array.reduce()`, and `Array.filter()`

JavaScript has evolved a lot since its inception. Several methods and constructs have been added to JavaScript that didn't exist before. Most modern browsers use the latest versions of JavaScript.

However, there are several applications still running on older browsers that use older versions of JavaScript . Array methods like `map`, `reduce` and `filter` may not be available. Therefore, you may have to provide polyfills for these methods.

Polyfills are pieces of code that provide modern functionality to older browsers that don't support it. This ensures that your code runs seemlessly on different browsers and versions.

Most companies have websites that still cater to users and systems running old browsers. So, knowing how to write polyfills for frequently used methods is important.

In our case, we are going to write polyfills for `Array.map`, `Array.reduce` and `Array.filter` methods. This means we are going to write our own implementations instead of using the default ones.

### `Array.map`

This method takes a callback function as a parameter, executes it on each array element and returns a new, modified array.

The callback function takes three arguments: the array element, index and the array itself. The last two arguments are optional.

```javascript
Array.prototype.map = function(callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
```

‌The logic is simple. Call the function for each element of the array and append each value to the new array. The `this` keyword is the object on which you are calling the function, in this case, the array.

### `Array.filter`

This method also takes a callback function as a parameter. The callback function runs a condition on each array element and returns a Boolean value. The `filter` method returns a new, filtered array containing elements that satisfy the condition.

This callback function takes three arguments: the array element, index and the array itself. The last two arguments are optional.

```javascript
Array.prototype.filter = function(callback) {
  var filteredArr = [];
  for (var i = 0; i < this.length; i++) {
    var condition = callback(this[i], i, this);
    if (condition) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};
```

Here, use the Boolean value returned by the callback function to add elements to the new array.

### `Array.reduce`

This method takes a callback function and an initial value as parameters and reduces the array to a single value. This is done by executing the function on the accumulator and current value and storing the result into the accumulator.

The callback function takes four arguments: the accumulator, current element, index and array itself. The last two arguments are optional.

```javascript
Array.prototype.reduce = function(callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};
```

Initially, set the accumulator to the initial value. Execute the callback function for each array element and store the result in accumulator. If the accumulator is undefined, then set it to the element itself.

Let's test these methods:

```javascript
const arr = [1, 2, 3];
console.log(arr.map(ele => ele * 2)); // [ 2, 4, 6 ]
console.log(arr.filter(ele => ele < 2)); // [ 1 ]
console.log(arr.reduce((total, ele) => total + ele, 0)); // 6
```

**Note:** Before adding a polyfill for any property, always check if the property exists on the object's prototype, or you might override the existing behaviour. For example:

```javascript
if (!Array.prototype.map)
```

## Additional Thoughts

Before we wrap up, I would like to share a few additional thoughts. Cracking a JavaScript interview isn't just about memorizing concepts. Make sure you dive deep into each topic and understand it thoroughly, including its applications.

Additionally, don't underestimate the importance of soft skills like communication. Conveying your thoughts clearly to the interviewer is as important as knowing your stuff.

When you're asked questions about any of the above concepts, start by briefly explaining the concept and then use an example for a more detailed explanation.

Explaining with examples is crucial for answering any interview question. It makes it easier for interviewers to understand your thought process. In this post, I've also followed a similar pattern while explaining each concept.

Lastly, keep revisiting this handbook throughout your interview preparation. Feel free to use it as a cheat sheet. If you are an experienced developer, this handbook will also help you revisit and reinforce these concepts.

## Conclusion

Interviews can be quite scary and unpredictable. While there is a high demand for JavaScript skills, the competition is equally intense. Building a strong foundation is crucial for successful interview preparation.

In this handbook, I have outlined several important topics to prepare for your next JavaScript interview and provided detailed explanations for each concept. While this is not an exhaustive list, it covers several critical concepts. If you think I've missed any important topics, please let me know.

If you are unable to understand the content or find the explanation unsatisfactory, comment your thoughts below. New ideas are always appreciated! Feel free to connect with me on Twitter.

Good luck with your interviews !!!

---

![Kunal Nalawade](https://www.freecodecamp.org/news/content/images/size/w60/2023/01/prof.jpeg)

Read [more posts][37].

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][38]

[1]: #how-to-use-var-let-and-const-keywords
[2]: #what-is-hoisting
[3]: #how-do-closures-work
[4]: #how-to-implement-debouncing
[5]: #how-to-implement-throttling
[6]: #what-is-currying
[7]: #what-is-the-difference-between-and-
[8]: #how-does-the-this-keyword-work
[9]: #how-to-use-the-call-apply-and-bind-methods
[10]: #what-are-prototypes-and-prototypal-inheritance
[11]: #-how-to-use-the-spread-operator
[12]: #how-does-array-and-object-destructuring-work
[13]: #what-are-promises
[14]: #how-to-use-the-async-and-await-keywords
[15]: #what-is-an-event-loop
[16]: #how-event-propagation-works-bubbling-and-capturing
[17]: #what-are-generator-functions
[18]: #how-to-implement-polyfills-for-array-map-array-reduce-and-array-filter-
[19]: #additional-thoughts
[20]: https://www.freecodecamp.org/news/author/matias-hernandez/
[21]: https://www.freecodecamp.org/news/closures-in-javascript/
[22]: https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
[23]: https://www.freecodecamp.org/news/throttling-in-javascript/
[24]: https://www.freecodecamp.org/news/higher-order-functions-explained/
[25]: https://developer.mozilla.org/en-US/docs/Web/API/Window
[26]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[27]: https://www.freecodecamp.org/news/author/gercocca/
[28]: https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/
[29]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[30]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
[31]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
[32]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
[33]: https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
[34]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
[35]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
[36]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol
[37]: /news/author/kunal-nalawade-25/
[38]: https://www.freecodecamp.org/learn/