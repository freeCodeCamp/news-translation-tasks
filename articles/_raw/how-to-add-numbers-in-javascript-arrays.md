---
title: JS Sum of an Array – How to Add the Numbers in a JavaScript Array
date: 2024-10-18T10:44:57.122Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
posteditor: ""
proofreader: ""
---

An array in JavaScript is an object that allows you to store an ordered collection of multiple values under a single variable name and manipulate those values in numerous ways.

<!-- more -->

In this article, you will learn how to calculate the sum of all the numbers in a given array using a few different approaches.

Specifically, I will show you how to find the sum of all numbers in an array by using:

-   A `for` loop
-   The `forEach()` method
-   The `reduce()` method

Let's get started!

## How to Calculate the Sum of an Array Using A `for` Loop in JavaScript

One of the simplest ways of calculating the sum of all numbers in an array is using a `for` loop. It performs an iteration `n` number of times.

Let's look at the following example:

```
// create an array
let myNums = [1, 2, 3, 4, 5];

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) // 15
```

In the example above, I first created an array named `myNums` that stores five values.

I then declared a variable named `sum` and initialized it with a value of `0` – this variable will store the result from the calculations in the `for` loop.

Next, I used the `for` loop to iterate over all the elements until the end of the `myNums` array.

I also reassigned the value of the `sum` variable using the addition assignment operator by adding its current value and the current array element.

To learn more about the `for` loop in JavaScript, give [this article][1] a read.

## How to Calculate the Sum of an Array Using the `forEach()` Method in JavaScript

Another way to calculate the sum of an array is using JavaScript's built-in `forEach()` method. It iterates over an array and calls a function for each item.

Let's look at the following example:

```
// create an array
const myNums = [1,2,3,4,5];

// create a variable for the sum and initialize it
let sum = 0;

// calculate sum using forEach() method
myNums.forEach( num => {
  sum += num;
})

console.log(sum) // 15
```

In the example above, I created an array `myNums`. I also declared a variable named `sum` and initialized it with a value of `0`.

Then, I used the `forEach()` method to iterate over each item in the array.

On each iteration, I reassigned the value of the `sum` variable by adding its current value and the value of the current array element in each iteration.

To learn more about the `forEach()` function, give [this article][2] a read.

## How to Calculate the Sum of an Array Using the `reduce()` Method in JavaScript

Another way of calculating the sum of an array is using the `reduce()` method, which got introduced with ES6.

The `reduce()` method reduces all elements in an array into a single value.

Let's look at the following example:

```
// create an array
const myNums = [1,2,3,4,5];

// use reduce() method to find the sum
var sum = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum) // 15
```

The `reduce()` method takes a user-defined callback function as its first required argument. The function gets called on each element in the array.

The callback function accepts the following two required parameters:

-   The `accumulator`, which is the variable that stores the last returned value from the previous function call.
-   The `currentValue`, which represents the current array item.

The second argument to the `reduce()` method is the `initialValue`, which is `0`. The `initialValue` represents the initial value of the `accumulator`.

To learn more about the `reduce()` method, give [this article][3] a read.

## Conclusion

And there you have it! You have learned three ways to calculate the sum of an array in JavaScript.

To learn more about JavaScript, check out [this Full JavaScript Course for Beginners][4].

Thanks for reading, and happy coding!

[1]: https://www.freecodecamp.org/news/javascript-for-loops/
[2]: https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/
[3]: https://www.freecodecamp.org/news/reduce-f47a7da511a9/
[4]: https://www.freecodecamp.org/news/full-javascript-course-for-beginners/