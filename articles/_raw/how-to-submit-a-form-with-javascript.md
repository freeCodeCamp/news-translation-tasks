---
title: How to Submit a Form with JavaScript – JS Submit Button Example
date: 2024-08-21T09:11:22.921Z
author: Joel Olawanle
authorURL: https://www.freecodecamp.org/news/author/joel-olawanle/
originalURL: https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/
posteditor: ""
proofreader: ""
---

When building applications and websites on the internet, you’ll sometimes need your users to supply information by filling out a form.

<!-- more -->

But then you might wonder – how do you get this data from the form? Well, you can do this with JavaScript.

In this article, you will learn how to create a form and get data from it when the form is submitted with JavaScript.

This article won't cover how to input data into a database – it will only cover how to submit a form. But you should know that once you have this data, you can send it to the database of your choice, use it to manipulate information, and much more.

To submit a form using JavaScript, you must first create the form and add distinctive, specific attributes to the input fields. You will use these attributes to retrieve the data when the user submits and then calls a function to handle validations (possibly if any data is submitted).

## How to Create the HTML Form

To get started, let's create a basic HTML form with two fields: username and password. We'll also add a button that will be used to submit the form and trigger a JavaScript action.

```js
<form action="">
  <h1>Login</h1>
  <input type="text" class="form-control" placeholder="Enter your Username...">
  <input type="password" class="form-control" placeholder="Enter your Password...">
  <button type="submit">Submit</button>
</form>
```

To get this form’s data via JavaScript, you’ll need to attach specific attributes to the form input field and the form itself. These attributes can be an `id`, a `class`, or even with the `name` tag. This will help get the data in JavaScript using their document methods.

For example, if you use an `id` attribute on your input field, you can access the input field data and other values using the document method `getElementByID('idName')`:

```js
// HTML
<input type="text" id="username" class="form-control" placeholder="Enter your Username...">

// JS
let myUsername = document.getElementById('username');
console.log(myUsername);
```

If you use a `class` attribute, you'll use `getElementsByClassName(className)`, which returns an array of all elements with the `className`. If it is only one element, you can use the index number `0` to access its data:

```js
// HTML
<input type="text" class="username" class="form-control" placeholder="Enter your Username...">

// JS
let myUsername = document.getElementsByClassName('username');
console.log(myUsername[0]);
```

If you use the `name` attribute, you'll use `getElementsByName(name)`. This is similar to how the class attribute works since it also returns an array which you can loop through or access with its index number:

```js
// HTML
<input type="text" name="username" class="form-control" placeholder="Enter your Username...">

// JS
let myUsername = document.getElementsByName('username');
console.log(myUsername[0]);
```

> Note: This will not return the input value but the input element itself.

## How to Submit a Form with JavaScript

The first step is to attach your preferred attribute to the form, which you can use to track when the form is submitted. This can be an `id`, `class` or `name` attribute, but for this article, I will use `id` for the form and input fields:

```js
<form action="" id="loginForm">
  <h1>Login</h1>
  <input type="text" id="username" class="form-control" placeholder="Enter your Username...">
  <input type="password" id="password" class="form-control" placeholder="Enter your Password...">
  <button type="submit">Submit</button>
</form>
```

At this point, you can now handle form submission with JavaScript. You first get the form with your preferred attribute, which can be an id, and store it in a variable:

```js
let loginForm = document.getElementById("loginForm");
```

Then you can attach the `addEventListener` to the form variable and listen for a submit event. This event listener allows you to attach a callback function which gets triggered once the form is submitted:

```js
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // handle submit
});
```

At this point, you can now get the form data and handle any operation you wish. For this article, let’s first validate the data by checking if the input is empty before performing any operation:

```js
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    // throw error
  } else {
    // perform operation with form input
  }
});
```

This is the entire JavaScript code:

```js
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    alert("Ensure you input a value in both fields!");
  } else {
    // perform operation with form input
    alert("This form has been successfully submitted!");
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});
```

See the Pen [Form Submission JS][1] by Olawanle Joel ([@olawanlejoel][2]) on [CodePen][3].

## Conclusion

In this article, you have learned how to submit a form with JavaScript and how it works with the various DOM methods.

There are other ways you can do this, but this is a straightforward way to handle submission in JavaScript.

You can access over 150 of my articles by [visiting my website][4]. You can also use the search field to see if I've written a specific article.

[1]: https://codepen.io/olawanlejoel/pen/xxzvdqQ
[2]: https://codepen.io/olawanlejoel
[3]: https://codepen.io
[4]: https://joelolawanle.com/contents