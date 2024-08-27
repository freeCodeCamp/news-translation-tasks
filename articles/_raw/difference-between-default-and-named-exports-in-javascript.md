---
title: What's the Difference Between Default and Named Exports in JavaScript?
date: 2024-08-27T13:29:01.694Z
author: Yazdun Fadali
authorURL: https://www.freecodecamp.org/news/author/yazdun/
originalURL: https://www.freecodecamp.org/news/difference-between-default-and-named-exports-in-javascript/
posteditor: ""
proofreader: ""
---

JavaScript is one of the most popular programming languages among web developers. And it offers multiple ways to organize and share code between different files.

<!-- more -->

When working with modules, you might come across two common ways of exporting: Default exports and Named exports.

Understanding the difference between these two methods is essential for effectively managing your codebase and making it more maintainable.

In this article, we will explore the differences between Default and Named exports in JavaScript. We'll highlight their use cases and best practices to help you choose the right approach for your projects.

## Table of Contents

-   [What you will learn][1]
-   [Getting started][2]
-   [What are JavaScript modules][3]?
-   [What exactly is the export keyword in JavaScript][4]?
-   [What is the default export in JavaScript][5]?
-   [What is the named export in JavaScript][6]?
-   [How to create a simple app using JavaScript modules][7]
-   [Conclusion][8]

## What you will learn

In this tutorial, you'll first learn about JavaScript modules and how they make coding better and easier to manage. You'll explore default exports and named exports, understanding when to use each.

To put everything into practice, you'll create a simple color flipper app that ties all the concepts together, making your learning experience practical.

I've also created a video tutorial based on this article. You can watch it [here on YouTube][9].

Here is the [Live Demo][10] of what we'll be creating:

![There is a button in the middle of the screen, you can click on this button and change the background color of the body element](https://www.freecodecamp.org/news/content/images/2023/08/ezgif-5-d38eb39cfc--1-.gif)

Color flipper app

## Getting Started

To get started with this tutorial, I've already prepared you a boilerplate project which contains all the required dependencies. This eliminates the need to set up your project from scratch.

Simply clone the [starter boilerplate][11] from the GitHub repository and then follow along with the tutorial. This way, you can focus on learning and implementing the concepts without getting caught up in setup details.

GitHub Source code (please give it a star if you enjoy the tutorial ⭐️ ):

-   Starter Boilerplate: [View on GitHub][12]
-   Final Version: [View on GitHub][13]

Once you have set up the starter boilerplate and successfully run it on your local machine, you can move on to the next section.

## What Are JavaScript Modules?

Imagine you have a big, complex project in JavaScript, with many different files and functions. It can get messy and difficult to manage all that code!

Well, JavaScript modules are like little containers that help you to organize your code better and make it easier to use and maintain.

Think of a module as a separate box where you can put related code. Inside this box, you can have variables, functions, or even classes that work together to perform specific tasks. These modules act as small, self-contained units that can be easily reused in different parts of your project.

One of the essential features of JavaScript modules is that they allow you to decide what parts of the code you want to share with other parts of the project. You can choose to export certain functions or data from a module, making them accessible to other parts of your codebase.

On the flip side, you can also import code from other modules when you need to use their functionality. It's like borrowing tools from a friend's toolbox when you need to fix something.

JavaScript modules help us:

1.  **Organize Code**: Modules let you group related code together in separate files, making your project more organized and manageable.
2.  **Encapsulate Code**: Each module acts as a self-contained unit, so you can hide certain parts of the code and only expose what you want others to use.
3.  **Reusability**: You can easily reuse modules in different parts of our project, reducing code duplication and promoting a more efficient development process.
4.  **Dependency Management**: Modules help you handle dependencies between different parts of the project, making it easier to keep track of how everything fits together.

To understand this concept better, let's create a fun and simple game. We'll make a JavaScript class for a virtual pet. This pet will have a name and species, and you can interact with it by playing with it and feeding it:

```javascript
// 📂 Pet.js

export class VirtualPet {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.energy = 100;
  }

  // Play with the pet
  play() {
    this.energy -= 10;
    this._checkStats();
  }

  // Feed the pet
  feed() {
    this.energy += 20;
    this._checkStats();
  }

  // Private method to check and limit the stats
  _checkStats() {
    if (this.energy > 100) {
      this.energy = 100;
    }

    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  // Get the pet's status
  getStatus() {
    return `${this.name} the ${this.species} - Energy: ${this.energy}`;
  }
}
```

The `export` keyword is a fundamental part of this module system, allowing you to expose specific parts of your code to be used in other files.

By using `export`, you can make your `VirtualPet` class available to other parts of your application or even in entirely separate files.

This enables you to encapsulate the pet's behavior within its own module, promoting code modularity and preventing unwanted access to internal functionalities.

Now, you can import the `VirtualPet` class from the `pet.js` module using the `import` statement into an another file:

```javascript
// 📂 Play.js

import { VirtualPet } from './pet.js';

const myPet = new VirtualPet("Fido", "Dog");

console.log(myPet.getStatus()); // Fido the Dog - Energy: 100

myPet.play();
console.log(myPet.getStatus()); // Fido the Dog - Energy: 90

myPet.feed();
console.log(myPet.getStatus()); // Fido the Dog - Energy: 100
```

Great job! You've successfully created a virtual pet using JavaScript modules. 🎉

In this section, you learned about JavaScript modules and how the `export` keyword helps you to organize and share code effectively. In the next section, you will learn more about different methods of exporting and importing JavaScript modules across various files

## What Exactly is the `export` Keyword in JavaScript?

In JavaScript, the `export` statement is used in modules to expose variables, functions, or classes so that they can be accessed and used in other parts of the application or in separate files.

By using the `export`, you make certain parts of your code accessible outside the module. This enables you to reuse and promote a modular and organized code structure.

In JavaScript, there are two main ways to export values: default exports, used for a single value per file, and named exports, allowing multiple exports per file.

## What is the Default Export in JavaScript?

In JavaScript, a default export is a way to share a single value, function, or class as the main thing from a file with other parts of your code.

When you have a file that needs to be used in other parts of your application, you can mark one item in that file as the default export using the `export default` syntax.

This means that when you import from that file in another part of your code, you don't need to use curly braces `{}` around the import statement. Instead, you can give it any name you want during the import, making it more convenient to use.

```js
// 📂 math.js
const add = (a, b) => a + b;
export default add;

// 📂 main.js
import myAddFunction from './math.js';
const result = myAddFunction(5, 10); // This will call the add function from math.js and store the result in the 'result' variable.
```

## What is the Named Export in JavaScript?

Named exports in JavaScript allow you to export multiple functions, variables, or classes from a single file as separate entities. Instead of exporting everything as a single unit, you can specifically name and export each part individually.

This gives you more control over what parts of the code you want to share with other modules. When importing these named exports into other files, you have to use the exact names that were used during the export, ensuring that you can access and use the specific functionalities you need from the source file.

```javascript
// 📂 math.js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// 📂 main.js
import { add, subtract } from './math.js';

const result1 = add(5, 3); // result1 will be 8
const result2 = subtract(10, 4); // result2 will be 6
```

In JavaScript, a file can have only one default export, but it can have multiple named exports as needed.

Let's take a look at the differences between named exports and default exports:

### Named Exports vs Default Exports:

A few characteristics of named exports are the following:

-   When you use named exports, you can export multiple values, functions, or classes from a single file, giving each of them a specific name.
-   You need to wrap the items you want to export in curly braces `{}` when importing them in another file, and you must use the exact names used during the export.
-   Named exports are great when you want to share multiple things from a file and give them distinct names to use in other parts of your code.
-   A file can have as many named exports as you like.

A few characteristics of default exports are the following:

-   Default exports are useful when you want to export only one main thing from a file. It is like marking that one thing as the most important to share.
-   When importing a default export in another file, you can give it any name you want during the import, and you don't need to use curly braces `{}`.
-   A file can have only one default export.

### How to Combine Named and Default Exports:

It's important to note that a file can have both named and default exports together.

This means you can export one main thing using `export default`, while also exporting multiple additional values using `export`.

This flexibility allows you to organize and share different parts of your code efficiently, making it easier for other parts of your application to access and use the exported functionalities.

## How to Create a Simple App using JavaScript Modules

In this final section, you'll create a cool color flipper app using JavaScript modules. You'll learn how to split your code into separate files, making it reusable across your app and organizing it effectively. Let's dive in and have fun building this app together.

If you haven't done so already, please refer to the [Getting Started][14] section to set up the boilerplate project before continuing. This will allow you to progress through the tutorial.

![image-24](https://www.freecodecamp.org/news/content/images/2023/08/image-24.png)

Once you run the boilerplate project, you will be able to see the following page in your browser

Now let's start coding. First open up `./main.js` and you will be able to see the following code:

```javascript
//📂./main.js

import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <button id="flipper" type="button">Start Flipping</button>
  </div>
`;
```

This code includes a CSS file and sets the content of the element with the ID "app" to a div containing a button with the ID "flipper" and the text "Start Flipping".

Next, you will add JavaScript logic to implement the functionality that changes the background color of the app when the "Start Flipping" button is clicked.

To change the background color, you can use an array of colors, which is already prepared for you inside `./colors.js`. All you have to do is export this array so that you can use it in other JavaScript modules within your app:

```javascript
//📂./colors.js

const colors = [
  "#007bff",
  "#f1c40f",
  "#27ae60",
  "#e74c3c",
  "#8e44ad",
  "#3498db",
  "#f39c12",
];

export default colors;
```

Once you add `export default colors` to this file, you will be able to access this variable in other modules by importing it.

Now, let's import these `colors` into `./utils.js` and proceed to implement a function that will handle changing the background color of your app:

```javascript
//📂./utils.js

import colorsData from "./colors";

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorsData.length);
  return colorsData[randomIndex];
}
```

Let's break down the code step by step:

1.  `import colorsData from "./colors"`: This line imports the data from the `./colors` file into our current file. The data from `./colors` is assigned to a variable called `colorsData`, which we can now use in this file.
2.  `export function getRandomColor() { ... }`: This line defines a function called `getRandomColor()`. The function calculates a random index from the `colorsData` array and returns the color at that index.

Now, let's talk about how `export default` works:

In the `./colors` file, there is a `default export` of the `colors` array. When using `export default`, we can directly import the exported value without needing to use curly braces `{}` around it when importing.

For example, if you were to import multiple values from the `./colors` file, you would use curly braces `{}`. But since there is only one default export in the `./colors` file, you can directly import it without the need for curly braces.

Additionally, you can choose any name you want when importing a default export. In this case, you named it `colorsData`, but you could have used any other name, and it would still work the same way.

For the next step, let's import the `getRandomColor` function you've just created into the `./main.js` file and use it to change the background color of your app:

```javascript
//📂./main.js

import "./style.css";
import { getRandomColor } from "./utils";

document.querySelector("#app").innerHTML = `
  <div>
    <button id="flipper" type="button">Start Flipping</button>
  </div>
`;

document.querySelector("#flipper").addEventListener("click", () => {
  const body = document.body;
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});
```

In this code, you used named import to access the `getRandomColor` function from the `./utils` file. The `import { getRandomColor } from "./utils"` statement allows you to specifically import the `getRandomColor` function by its exact name from the `./utils` module.

Once you import the `getRandomColor` function, you can directly use it in your code without any prefix or modification. For example, you call `getRandomColor()` without needing to specify the module it comes from. This makes the code cleaner and more straightforward.

Using named import, you can choose precisely which functions, variables, or constants you want to import from a module. This makes it easy to access only the specific parts of the code you need in your current file. It also helps keep your code organized and allows for better control over which functionalities you use from different module.

Note that with named imports, the name has to match on both sides.

Great job so far! Here is the current result:

![This is a preview of the color flipper app, there is a button at the center of the screen and once you click it, it changes the background color of the document's body](https://www.freecodecamp.org/news/content/images/2023/08/ezgif-1-6b91c14ad7.gif)

Color flipper app

Now, let's create another utility function that will change the button's text to display the current color hex value:

```javascript
//📂./utils.js

import colorsData from "./colors";

export function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorsData.length);
  return colorsData[randomIndex];
}

export function changeButtonText(text, element) {
  const button = document.querySelector(element);
  button.innerText = text;
}
```

`changeButtonText` will allow you to change the text displayed on a button. You can call this function with two parameters: the `text` you want to display on the button, and the `element` that represents the button's selector. Once called, the function will update the button's text with the specified `text`.

Let's add this to the `./main.js` and see how it works in action:

```javascript
//📂./main.js

import "./style.css";
import { getRandomColor, changeButtonText } from "./utils";

document.querySelector("#app").innerHTML = `
  <div>
    <button id="flipper" type="button">Start Flipping</button>
  </div>
`;

document.querySelector("#flipper").addEventListener("click", () => {
  const body = document.body;
  const randomColor = getRandomColor();
  changeButtonText(`Current Color is ${randomColor}`, "#flipper");
  body.style.backgroundColor = randomColor;
});
```

You imported the `changeButtonText` function using named import from the `./utils` file. The function takes two arguments: the text we want to display on the button and the selector of the button we want to update. It dynamically changes the button's text to show the specified text with the current color value.

Here is the final result:

![There is a button in the middle of the screen, you can click on this button and change the background color of the body element](https://www.freecodecamp.org/news/content/images/2023/08/ezgif-5-d38eb39cfc--1-.gif)

Final result

That's it – congratulations on building your color flipper app using JavaScript modules! 🎉

The modular approach helps you organize and reuse code efficiently, making your app functional and easy to maintain. Well done!

## Conclusion

In conclusion, JavaScript exports offer powerful tools for managing code organization and sharing functionalities between different parts of our applications.

We explored the differences between named exports, allowing multiple entities to be exported from a file with specific names, and default exports, marking one primary entity as the main export. Both mechanisms are essential in promoting modularity and code reusability.

By understanding these export techniques, you can create more organized and efficient code structures, resulting in better scalability in your JavaScript projects.

Thanks for reading this till the end! You can follow me on [Twitter][15] where I share more useful tips on web development. Happy coding!

[1]: #what-you-will-learn
[2]: #getting-started
[3]: #what-are-javascript-modules
[4]: #what-exactly-is-the-export-keyword-in-javascript
[5]: #what-is-the-default-export-in-javascript
[6]: #what-is-the-named-export-in-javascript
[7]: https://www.freecodecamp.org/news/p/a393357b-0fad-4f0d-8f01-d2a3e1d62854/how-to-create-a-simple-app-using-javascript-modules
[8]: https://www.freecodecamp.org/news/p/a393357b-0fad-4f0d-8f01-d2a3e1d62854/conclusion
[9]: https://youtu.be/YHRXgUeF1dA
[10]: https://fcc-javascript-modules.netlify.app/
[11]: https://github.com/Yazdun/fcc-javascript-modules/tree/starter
[12]: https://github.com/Yazdun/fcc-javascript-modules/tree/starter
[13]: https://github.com/Yazdun/fcc-javascript-modules
[14]: #getting-started
[15]: https://twitter.com/Yazdun