---
title: ... in JavaScript – the Three Dots Operator in JS
date: 2024-10-18T11:44:14.429Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/three-dots-operator-in-javascript/
posteditor: ""
proofreader: ""
---

By Joel Olawanle

<!-- more -->

The three dots operator in JavaScript is one of the significant updates that was shipped with ES6.

This operator (`...`) helps you achieve many things that previously required many lines of code, unfamiliar syntax, and more.

In this short article, you will learn what the three dots operator means and what it does. We will go through some examples to show possible use cases, and we'll look at how you used to perform these operations. This way you'll see what the three dots offer you as a JavaScript developer.

The three dots operator has two different meanings in JavaScript. The syntax is very similar, but you use each one in different contexts. These two different uses of the `...` are the spread and rest operators.

## How to Use the Spread Operator in JavaScript

In JavaScript, you use the spread operator to expand an iterable inside a specified receiver, as its name suggests.

This recipient could be anything, such as an object, an array, and so on. And the iterable can be anything we can loop through, including a string, an array, an object, and so on.

### Spread operator syntax:

```
const newArray = ['firstItem', ...oldArray];
```

Let's now look at various instances in which we can use the spread operator.

### How to Copy an Array With the Spread Operator

When we want to copy the elements of a particular array into a new array without affecting the original array, we can use the spread operator.

Here's an example:

```
let studentNames = ["Daniel", "Jane", "Joe"];

let names = [...studentNames];

console.log(names); // ["Daniel","Jane","Joe"]
```

This saves us the time we would use to write a loop statement:

```
let studentNames = ["Daniel", "Jane", "Joe"];

let names = [];

studentNames.map((name) => {
    names.push(name);
});

console.log(names); // ["Daniel","Jane","Joe"]
```

### How to Copy an Object With the Spread Operator

As we did with arrays, you can also use an object as a receiver for the spread operator.

```
let user = { name: "John Doe", age: 10 };

let copiedUser = { ...user };
console.log(copiedUser); // { name: "John Doe", age: 10 }
```

Whereas an old way of doing this would have been to use the `Object.assign()` method this way:

```
let user = { name: "John Doe", age: 10 };

let copiedUser = Object.assign({}, user);
console.log(copiedUser); // { name: "John Doe", age: 10 }
```

### How to Concatenate or Merge Arrays With the Spread Operator

When we have two or more arrays that we want to merge into a new array, we can easily do this with the spread operator. It lets us copy elements from an array:

```
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];

let allNames = [...maleNames, ...femaleNames];

console.log(allNames); // ["Daniel","Peter","Joe","Sandra","Lucy","Jane"]
```

It's also important to know that we can use the same approach for as many arrays as we have. We can also add individual elements within the array:

```
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];
let otherNames = ["Bill", "Jill"];

let moreNames = [...otherNames, ...femaleNames, ...maleNames];
let names = [...moreNames, "Ben", "Fred"];
```

This saves us the stress of using a complicated syntax like the `concat()` method:

```
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];
let otherNames = ["Bill", "Jill"];

let allNames = femaleNames.concat(maleNames);
let moreNames = femaleNames.concat(maleNames, otherNames);
```

### How to Concatenate or Merge Objects With the Spread Operator

We can also concatenate objects similarly to how we did arrays with the spread operator:

```
let userName = { name: "John Doe" };
let userSex = { sex: "Male" };

let user = { ...userName, ...userSex };

console.log(user); // { name: "John Doe", sex: "Male" }
```

**Note:** In a situation where one key has another property, the last property overrides the first instance:

```
let userName = { name: "John Doe" };
let userSex = { sex: "Female", name: "Jane Doe" };

let user = { ...userName, ...userSex }; // { name: "Jane Doe", sex: "Female" }
```

### How to Retrieve Unique Elements With the Set Method

One significant situation when you'll use the spread operator is when you are trying to retrieve unique elements from one array into another.

For example, suppose we have an array of fruits in which we repeated some fruits, and we want to pull these fruits into a new array and avoid repetition. We can use the `set()` method alongside the spread operator to list them in a new array:

```
let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];

let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits); // ["Mango","Apple","Banana"]
```

### How to Pass Array Elements in Function Calls With the Spread Operator

When you have a function that takes in a number and you have these numbers as elements of an array:

```
let scores = [12, 33, 6]

const addAll = (a, b, c) => {
    console.log(a + b + c);
};
```

You can use the spread operator to pass these elements into the function call as arguments using the spread operator:

```
let scores = [12, 33, 6]

const addAll = (a, b, c) => {
    console.log(a + b + c);
};

addAll(...scores); // 51
```

An old method of doing this would have been to use the `apply()` method:

```
let scores = [12, 33, 6]

const addAll = (a, b, c) => {
    console.log(a + b + c);
};

addAll.apply(null, scores); // 51
```

### How to Split Strings Into Characters Using the Spread Operator

Suppose we have a string. We can make use of the spread operator to split it into characters:

```
let myString = "freeCodeCamp";

const splitString = [...myString];

console.log(splitString); // ["f","r","e","e","C","o","d","e","C","a","m","p"]
```

This is similar to the `split()` method:

```
let myString = "freeCodeCamp";

const splitString = myString.split('');

console.log(splitString); // ["f","r","e","e","C","o","d","e","C","a","m","p"]
```

## How to Use the Rest Operator in JavaScript

On the other hand, the rest operator allows you to combine any number of arguments into an array and then do whatever you like with them. It uses an array to represent an infinite number of arguments.

### Syntax of the rest operator

```
const func = (first, ...rest) => {};
```

A perfect example to illustrate this would be if we have a list of numbers, and we want to use the first number as the multiplier. We then want to put the multiplied value of the remaining numbers in an array:

```
const multiplyArgs = (multiplier, ...otherArgs) => {
    return otherArgs.map((number) => {
    return number * multiplier;
    });
};

let multipiedArray = multiplyArgs(6, 5, 7, 9);

console.log(multipiedArray); // [30,42,54]
```

Here is a good representation of the rest operator and what its value looks like:

```
const multiplyArgs = (multiplier, ...otherArgs) => {
    console.log(multiplier); // 6
    console.log(otherArgs); // [5,7,9]
};

multiplyArgs(6, 5, 7, 9);
```

**Note:** The Rest parameter must be the last formal parameter.

```
const multiplyArgs = (multiplier, ...otherArgs, lastNumber) => {
    console.log(lastNumber); // Uncaught SyntaxError: Rest parameter must be last formal parameter
};

multiplyArgs(6, 5, 7, 9);
```

## Difference Between the Spread and Rest Operators in JavaScript

At this point, you might be confused as both methods seem pretty similar. But the JS team did an excellent job with the naming, as it defines what each use of `...` does.

We use the spread operator to spread array values or iterables into maybe an array or object.

While we use the Rest operator to gather the remaining elements passed into a function as an array.

```
const myFunction = (name1, ...rest) => { // used rest operator here
    console.log(name1);
    console.log(rest);
};

let names = ["John", "Jane", "John", "Joe", "Joel"];
myFunction(...names); // used spread operator here
```

## Wrapping Up

In this article, you learned what the three dots operator means in JavaScript. You've also seen the various instances when you can use the three dots operator along with its two different meanings/use cases.

Have fun coding!

You can access over 200 of my articles by [visiting my website][1]. You can also use the search field to see if I've written a specific article.

[1]: https://joelolawanle.com/contents