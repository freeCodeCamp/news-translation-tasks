---
title: Cannot use import statement outside a module [React TypeScript Error Solved]
date: 2024-08-27T14:10:46.341Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/cannot-use-import-statement-outside-a-module-react-typescript-error-solved/
posteditor: ""
proofreader: ""
---

When building a web application, you may encounter the `SyntaxError: Cannot use import statement outside a module` error.

<!-- more -->

This error might be raised when using either JavaScript or TypeScript in the back-end. So you could be working on the client side with React, Vue, and so on, and still run into this error.

You can also encounter this error when working with JavaScript on the client side.

In this article, you'll learn how to fix the `SyntaxError: Cannot use import statement outside a module` error when using TypeScript or JavaScript with [Node][1].

You'll also learn how to fix the error when working with JavaScript on the client side.

## How to Fix the TypeScript `SyntaxError: Cannot use import statement outside a module` Error

In this section, we'll work with a basic Node server using Express.

Note that if you're using the latest version of TypeScript for your Node app, the **tsconfig.json** file has default rules that prevent the `SyntaxError: Cannot use import statement outside a module` error from being raised.

So you're most likely not going to encounter the `SyntaxError: Cannot use import statement outside a module` error if you:

-   Install the latest version of TypeScript, and are using the default **tsconfig.json** file that is generated when you run `tsc init` with the latest version.
-   Setup TypeScript correctly for Node and install the necessary packages.

But let's assume you're not using the latest **tsconfig.json** file configurations.

Here's an Express server that listens on port 3000 and logs "Hello World!" to the console:

```
import express from "express"

const app = express()

app.listen("3000", (): void => {
    console.log("Hello World!")
    // SyntaxError: Cannot use import statement outside a module
})
```

The code above looks as though it should run perfectly but the `SyntaxError: Cannot use import statement outside a module` is raised.

This is happening because we used the `import` keyword to import a module: `import express from "express"`.

To fix this, head over to the **tsconfig.json** file and scroll to the modules section.

You should see a particular rule like this under the modules section:

```
/* Modules */
"module": "esnext"
```

To fix the problem, change the value "esnext" to "commonjs".

That is:

```
/* Modules */
"module": "commonjs"
```

## How to Fix the JavaScript `SyntaxError: Cannot use import statement outside a module` Error

Fixing the `SyntaxError: Cannot use import statement outside a module` error when using vanilla JS is a bit different from TypeScript.

Here's our server:

```
import express from "express";

const app = express();

app.listen(3000, () => {
    console.log("Hello World!");
    // SyntaxError: Cannot use import statement outside a module
});
```

We're getting the `SyntaxError: Cannot use import statement outside a module` error for the same reason — we used the `import` keyword to import a module.

To fix this, go to the **package.json** file and add `"type": "module",`. That is:

```
{
  "name": "js",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

Now you can use the `import` keyword without getting an error.

To fix this error when working with JavaScript on the client side (without any frameworks), simply add the attribute `type="module"` to the script tag of the file you want to import as a module. That is:

```
<script type="module" src="./add.js"></script>
```

## Summary

In this article, we talked about the `SyntaxError: Cannot use import statement outside a module` error in TypeScript and JavaScript.

This error mainly occurs when you use the `import` keyword to import a module in Node.js. Or when you omit the `type="module"` attribute in a `script` tag.

We saw code examples that raised the error and how to fix them when working with TypeScript and JavaScript.

Happy coding!

[1]: https://www.freecodecamp.org/news/node-js-server-side-javascript-what-is-node-used-for/