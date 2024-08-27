---
title: JavaScript Capitalize First Letter – How to Uppercase the First Letter in
  a Word with JS
date: 2024-08-27T06:06:07.982Z
author: Dillion Megida
authorURL: https://www.freecodecamp.org/news/author/dillionmegida/
originalURL: https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
posteditor: ""
proofreader: ""
---

When you're coding, there are many ways to capitalize the first letter of a word. You can use CSS as well as some JavaScript methods.

<!-- more -->

In this article, I will show you one approach to achieve this.

To capitalize the first letter of a word with JS, you need to understand three string methods: **charAt**, **slice**, and **toUpperCase**.

## The `charAt` JavaScript string method

You use this method to retrieve the character at a specified position in a string. Using this method, we can retrieve the first letter in a word:

```js
const word = "freecodecamp"

const firstLetter = word.charAt(0)
// f
```

## The `slice` JavaScript string method

You use this method to cut out a substring from an entire string. We will use this method to cut out the remaining part of a word (excluding the first letter):

```js
const word = "freecodecamp"

const remainingLetters = word.substring(1)
// reecodecamp
```

## The `toUpperCase` JavaScript string method

`toUpperCase` is a string method that returns the uppercased version of a specified string. We will use this to capitalize the first letter:

```js
const firstLetter = "f"

const firstLetterCap = firstLetter.toUpperCase()
// F
```

## How to capitalize the first letter of a word in JavaScript

Using the three string methods above, we will get the first character of the word, capitalize it, then concatenate it with the remaining sliced part.

This approach will result in a new word that has the first letter capitalized.

Here's the code for it:

```js
const word = "freecodecamp"

const firstLetter = word.charAt(0)

const firstLetterCap = firstLetter.toUpperCase()

const remainingLetters = word.slice(1)

const capitalizedWord = firstLetterCap + remainingLetters
// Freecodecamp
// F is capitalized
```

The short version for the code above is:

```js
const word = "freecodecamp"

const capitalized =
  word.charAt(0).toUpperCase()
  + word.slice(1)
  
// Freecodecamp
// F is capitalized
```

Thank you for reading, and happy coding!