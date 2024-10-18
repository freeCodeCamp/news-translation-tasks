---
title: find() vs filter() in JavaScript – Differences Explained with Examples
date: 2024-10-18T10:48:45.208Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/find-vs-filter-javascript/
posteditor: ""
proofreader: ""
---

By Aman Kalra

<!-- more -->

A common interview question that JavaScript developers often get asked is to explain the difference between the find() and filter() methods.

In this tutorial today, I'll walk you through what these methods are and when you should use them.

## What is the `filter()` method?

This method returns all the elements of the array that satisfy the condition specified in the callback function.

Let's see with an example how it actually works:

```
const x = [1, 2, 3, 4, 5];

const y = x.filter(el => el*2 === 2);

console.log("y is: ", y); // y is: [1]
```

If you check out the output of the above example, the **value of y is** **an array of 1 element** that satisfies the condition. This is because the filter() method iterates over all elements of the array and then returns a filtered array which satisfy the condition specified.

## What is the `find()` method?

This method returns first element of the array that satisfies the condition specified in the callback function.

Let's see with an example how it actually works:

```
const x = [1, 2, 3, 4, 5];

const y = x.find(el => el*2 === 2);

console.log("y is: ", y); // y is: 1
```

Now, if you see the output of the above example, the **value of y is 1**. This is because the find() method searches for first element in the array that satisfies the condition specified.

The main differences between above examples is:

1.  `filter()` returns an array containing the element that satisfies the condition, but `find()` returns the element itself that satisfies the condition.
2.  In `filter()`, whole array is iterated despite the fact that the element being searched for is present at the beginning. But in `find()`, as soon as the element that satisfies the condition is found, it gets returned.

## Use Cases for `find()` and `filter()`

When you have a use case where more than 1 element is expected to be returned and you want to perform operation on all elements, then you can use the **filter()** method. But if you expect only a single element to be returned from the array, then you can use **find()** and avoid extra iterations.

Let's look at examples of both use cases:

### 1\. filter() use case example

```
const x = [1, 2, 3, 4, 5];

const y = x.filter(el => el%2 === 0);

console.log("y is: ", y); // y is: [2, 4]
```

In above example, `**filter()**` makes more sense as you would want to iterate over all elements of the array to find the elements that are divisible by 2.

### 2\. find() use case example

```
const emp = [
    {
        name: "Ram",
        empID: 101
    },
    {
        name: "Sham",
        empID: 102
    },
    {
        name: "Mohan",
        empID: 103
    }
];

const res = emp.find(el => el.empID === 102);

console.log("res is: ", res); // res is: {name: 'Sham', empID: 102}
```

In above example, `**find()**` makes more sense as there is just 1 employee who has `102` as the `empID` so, `find()` helps to avoid iterating over the 3rd object in the array.

### **Thanks for reading!**

If you found this article useful, do share it with your friends and colleagues.