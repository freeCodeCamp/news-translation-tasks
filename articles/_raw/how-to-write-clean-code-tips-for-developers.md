---
title: How to Write Clean Code – Tips for Developers with Examples
date: 2024-11-26T13:00:58.161Z
author: Programming with Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/how-to-write-clean-code-tips-for-developers/
posteditor: ""
proofreader: ""
---

Imagine a messy room with clothes, books, and other items scattered everywhere. Finding something in that room would be tough, right?

<!-- more -->

Now, think about writing messy code – it’s just as confusing, if not more!

On the other hand, clean code is like an organized room: you can easily find what you need, understand what’s happening, and get things done faster.

Let’s have a look at this graph. It shows two different ways of writing code and how they affect the time it takes to add more lines:

![3fa8f5a1-0af4-4ffd-aa3a-bb70001b026d](https://cdn.hashnode.com/res/hashnode/image/upload/v1730728342241/3fa8f5a1-0af4-4ffd-aa3a-bb70001b026d.png)

1.  ⚠️ **Quick & Dirty Code** (Red line): This is when you write code quickly without planning or organizing it well. At first, it may seem faster, but as more lines are added, it becomes harder to understand and fix. So, over time, it takes longer and longer to add each new line.
    
2.  **⚡ Thoughtful & Clean Code** (Blue line): This is when you write code carefully, making it easy to understand and change. At first, it might take a bit longer, but over time, it remains easy to work with. This way, adding new lines doesn't become more difficult.
    

In simple terms, writing clean code might seem slower at the beginning, but in the long run, it saves a lot of time and makes work easier. It also leads to more reliable software and better products.

Writing clean code is a habit that professional developers cultivate, showing dedication to quality and a strong work ethic. And in this article, I’ll walk you through some best practices for keeping your code clean.

### What we’ll cover:

1.  [Use Meaningful Names][1]
    
2.  [Follow the Single Responsibility Principle (SRP)][2]
    
3.  [Avoid Unnecessary Comments][3]
    
4.  [Make Your Code Readable][4]
    
5.  [Write Unit Tests][5]
    
6.  [Be Careful with Dependencies][6]
    
7.  [Organize Your Project][7]
    
8.  [Use Consistent Formatting][8]
    
9.  [Avoid Hardcoding Values][9]
    
10.  [Limit Function Length][10]
    
11.  [Conclusion][11]
    

## 10 Essential Tips for Writing Clean Code

To help you get started on your clean code journey, here are 10 practical tips to keep your code readable, organized, and efficient.

### 1\. Use Meaningful Names

When naming variables, functions, and classes, pick names that clearly describe their purpose.

Instead of calling a variable `b`, try `numberOfUsers`. This way, anyone reading your code can easily understand its purpose without needing additional comments. A meaningful name eliminates guesswork and avoids confusion.

**Example**:

```
// Good
let numberOfUsers = 5; // Clear and easy to understand

// Bad
let b = 5; // Vague and unclear
```

**💡 Naming Tips**

-   **Variables**: Use nouns that describe the data, like `userAge` or `totalAmount`.
    
-   **Functions**: Use action words, like `calculateTotal()` or `fetchUserData()`.
    
-   **Classes**: Use singular nouns, like `User` or `Order`, to represent what they are.
    

```
// Variable: Describes the data it holds
let userAge = 25;

// Function: Uses an action word to describe what it does
function calculateTotal(price, quantity) {
    return price * quantity;
}

// Class: Singular noun representing a type of object
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### 2\. Follow the Single Responsibility Principle (SRP)

The **Single Responsibility Principle** means that each function or method should have **one specific job.**

This keeps your functions short and focused which makes them easier to read, test, and maintain.

Imagine a toolbox where each tool has a unique purpose—clean code functions should work the same way.

![77666f78-7ec9-4a5c-af4f-253e6de4acac](https://cdn.hashnode.com/res/hashnode/image/upload/v1730728643183/77666f78-7ec9-4a5c-af4f-253e6de4acac.jpeg)

For instance, if you have a function called `calculateTotal`, it should only handle calculating the total. If you add extra tasks, it can lead to confusing code that’s hard to maintain.

Here's an example to show why it's important to keep functions focused:

Let’s say you want to calculate a total and return an object with extra information, like who calculated it and when. Instead of adding these directly into `calculateTotal`, we can use a second function.

1.  **Good Example (Separate Tasks)**
    
    ```
     // This function only calculates the total
     function calculateTotal(a, b) {
         return a + b;
     }
    
     // This function creates an object with extra details
     function createCalculationRecord(a, b, user) {
         let sum = calculateTotal(a, b); // Calls the calculate function
         return {
             user: user,
             total: sum,
             timestamp: new Date()
         };
     }
    
     let record = createCalculationRecord(5, 10, "Shahan");
     console.log(record);
    ```
    
    **👍 Why this is good**: Each function has a clear, focused task. `calculateTotal` only does the math, while `createCalculationRecord` adds the extra details. If you want to change how the total is calculated, you only update `calculateTotal`, and if you want to change the record format, you only update `createCalculationRecord`.
    
2.  **Bad Example (Mixed Tasks in One Function)**
    
    ```
     // This function calculates the total and creates an object in one step
     function calculateTotalAndReturnRecord(a, b, user) {
         let sum = a + b;
         return {
             user: user,
             total: sum,
             timestamp: new Date()
         };
     }
    
     let record = calculateTotalAndReturnRecord(5, 10, "Shahan");
     console.log(record);
    ```
    
    **👎 Why this is bad**: The function name `calculateTotalAndReturnRecord` shows that it’s trying to do multiple things. If you want to use just the calculation, you can’t reuse this function without the record part. It’s also harder to update and test each task separately.
    

### 3\. Avoid Unnecessary Comments

Good code should be self-explanatory without needing excessive comments. Focus on writing code that’s clear and understandable on its own.

Comments are helpful when explaining complex logic or a unique approach, but too many comments can clutter your code and make it hard to follow.

**💬 When to Use Comments**:

-   To clarify why something is done in a particular way.
    
-   When working with complex algorithms or calculations.
    
-   To add notes about potential limitations.
    

**Example**:

```
// Clear name, no comment needed
let userAge = 25;

// Unclear name, comment needed
let a; // age of the user
```

### 4\. Make Your Code Readable

Readable code uses **indentation**, **line breaks**, and **spaces** to keep everything neat and organized.

Think of it like writing a story: paragraphs make reading easier by breaking up large chunks of text. In coding, line breaks serve the same purpose.

**Example**:

```
// Good Code
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// Bad Code
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
```

In VS Code, **Prettier** and **Black** are popular formatters that automatically apply clean code styling for multiple languages.

**PyCharm** and **IntelliJ** have powerful built-in formatters with customizable rules, supporting PEP 8 for Python and other standard guides. These tools ensure consistent, readable code across projects with minimal manual effort.

### 5\. Write Unit Tests

Unit tests help make sure each part of your code works as expected.

By testing small, individual parts (like functions), you can catch bugs early and prevent them from spreading to other parts of the code.

Concretely, unit tests are actually mini quality checks for each part of your code to ensure they’re working as intended.

**🍎 Real-world Example:**

Let’s look at how to test a complex JavaScript object with multiple methods, using a `Calculator` class as an example.

This approach will help you see why it’s important to keep each method focused on one task and ensure each one works correctly through unit testing.

Here is the `Calculator` class that includes methods for basic arithmetic operations: addition, subtraction, multiplication, and division.

```
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
}
```

As you can see, each method performs one specific operation. The `divide` method has additional logic to handle division by zero, which would otherwise cause an error.

Now, we’ll write unit tests to confirm that each method behaves as expected. 🔬

**🧪 Writing Unit Tests for Each Method**

To test our `Calculator` class, we can write unit tests that cover normal cases as well as edge cases. Here’s how we would set up tests for each method:

```
// Initialize the Calculator instance
const calculator = new Calculator();

// Test add method
console.assert(calculator.add(2, 3) === 5, 'Test failed: 2 + 3 should be 5');
console.assert(calculator.add(-1, 1) === 0, 'Test failed: -1 + 1 should be 0');

// Test subtract method
console.assert(calculator.subtract(5, 3) === 2, 'Test failed: 5 - 3 should be 2');
console.assert(calculator.subtract(0, 0) === 0, 'Test failed: 0 - 0 should be 0');

// Test multiply method
console.assert(calculator.multiply(2, 3) === 6, 'Test failed: 2 * 3 should be 6');
console.assert(calculator.multiply(-1, 2) === -2, 'Test failed: -1 * 2 should be -2');

// Test divide method
console.assert(calculator.divide(6, 3) === 2, 'Test failed: 6 / 3 should be 2');
try {
    calculator.divide(1, 0);
    console.assert(false, 'Test failed: Division by zero should throw an error');
} catch (e) {
    console.assert(e.message === "Cannot divide by zero", 'Test failed: Incorrect error message for division by zero');
}
```

**🫧 Explanation of the tests:**

1.  **Addition** (`add` method): We test that `add(2, 3)` returns `5`, and `add(-1, 1)` returns `0`. If these tests pass, we know that the addition logic is working correctly.
    
2.  **Subtraction** (`subtract` method): We verify that `subtract(5, 3)` returns `2`, and `subtract(0, 0)` returns `0`. These checks confirm that subtraction is accurate.
    
3.  **Multiplication** (`multiply` method): We test the multiplication function with both positive and negative values, ensuring that `multiply(2, 3)` returns `6`, and `multiply(-1, 2)` returns `-2`.
    
4.  **Division** (`divide` method): We verify that dividing `6` by `3` returns `2`. For division by zero, we use a `try...catch` block to confirm that an error is thrown with the correct message. This test make sure the method handles errors properly.
    

You can see that if any method fails, the test will produce a clear error message, allowing us to quickly identify and fix the issue. Testing methods individually helps us catch bugs early and maintain reliable, clean code as the project grows.

### 6\. Be Careful with Dependencies

Dependencies are pieces of software that your code relies on. 🔌

Imagine you’re building a web app that sends emails. Instead of writing the email-sending code yourself, you use an external library like [**Nodemailer**][12]. Here, Nodemailer is a **dependency**—your app relies on it to handle the email-sending functionality.

**Example:**

```
const nodemailer = require('nodemailer');

function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: message
    };

    return transporter.sendMail(mailOptions);
}
```

In this code, `nodemailer` is imported and used to create a transporter for sending emails. Without it, you’d need to build all the email functionality from scratch, which would be complex and time-consuming. By using Nodemailer as a dependency, your app can send emails easily.

Even though dependencies are useful, you should try to avoid over-dependence on external software or libraries. Use dependencies only when they simplify your work or add important functionality.

Managing dependencies effectively is key to writing clean code. Here are some tips:

-   **Limit Dependencies**: Only include libraries or modules that are essential for your project.
    
-   **Keep Versions Updated**: Use updated versions of libraries to avoid security risks.
    
-   **Separate Logic**: Write core functions yourself whenever possible. This way, if you ever need to remove a dependency, it won’t break your code.
    

Let me give you an example with our previous Nodemailer code to implement the concept of separating logic in your code.

You can create a wrapper function that abstracts away the details of email sending. This way, you can change the underlying email service or remove the dependency on Nodemailer without affecting the rest of your code.

Here's how you can structure your code to accomplish this:

```
const nodemailer = require('nodemailer');

// Core function to send email
function sendEmail(to, subject, message) {
    const transporter = createTransporter();
    const mailOptions = createMailOptions(to, subject, message);
    return transporter.sendMail(mailOptions);
}

// Function to create the transporter
function createTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
}

// Function to create mail options
function createMailOptions(to, subject, message) {
    return {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: message
    };
}

// Example usage
sendEmail('recipient@example.com', 'Test Subject', 'Hello, this is a test email.')
    .then(() => {
        console.log('Email sent successfully!');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
```

**🗝️ Key points:**

1.  **Core Functions**: The `sendEmail`, `createTransporter`, and `createMailOptions` functions are separate, allowing you to modify one without affecting the others.
    
2.  **Easy Modifications**: If you want to switch to another email service in the future, you can simply modify the `createTransporter` function.
    
3.  **Maintainability**: This structure makes your code more maintainable and easier to understand.
    

### 7\. Organize Your Project

A well-organized project structure is as important as the code itself.

Think of this like organizing your workspace—you need designated places for everything so that you can find them easily. For coding projects, create folders for specific parts, like `components`, `utils`, and `services`.

**📂 How to Organize Your Project**

To set up a clean and organized project, you should categorize different parts of your code into designated folders. Here’s a simple example of what a well-organized project structure might look like:

```
myProject
├── src
│   ├── components
│   ├── services
│   ├── utils
└── tests
```

#### Breakdown of the project structure:

1.  **myProject**: This is the root folder of your project. It contains everything related to your application.
    
2.  **src (Source)**: This folder holds all the source code for your project. It’s where you’ll spend most of your time coding.
    
3.  **components**: This subfolder contains reusable UI components. For example, if you're building a web app, you might have individual files for buttons, headers, or forms here. Each component can be in its own file to keep things modular.
    
    -   Example structure within `components`:

```
    components
    ├── Button.js
    ├── Header.js
    └── Form.js
```

4.  **services**: This folder includes functions that perform specific tasks or handle business logic. For example, if you're sending emails, you could have a file here with all the email-related functions.
    
    -   Example structure within `services`:

```
    services
    ├── emailService.js
    ├── userService.js
    └── productService.js
```

5.  **utils (Utilities)**: Here, you place helper functions that can be used across your project. These might include functions for formatting dates, validating inputs, or any other common tasks that don't belong to specific components or services.
    
    -   Example structure within `utils`:

```
    utils
    ├── formatDate.js
    ├── validateEmail.js
    └── generateId.js
```

6.  **tests**: This folder is dedicated to your testing files. Keeping your tests organized helps ensure that as you build new features, you can easily test them without digging through your codebase.
    
    -   Example structure within `tests`:

```
    tests
    ├── emailService.test.js
    ├── userService.test.js
    └── component.test.js
```

**📨 Real-World Example: Working with Nodemailer**

Let's say you are building an application that sends emails to users. You might structure your project like this:

```
myEmailApp
├── src
│   ├── components
│   │   ├── EmailForm.js
│   │   └── SuccessMessage.js
│   ├── services
│   │   └── emailService.js
│   ├── utils
│   │   └── validateEmail.js
└── tests
    ├── emailService.test.js
    └── EmailForm.test.js
```

-   **EmailForm.js**: This component handles the user interface for sending an email, like the input fields for the recipient, subject, and message.
    
-   **SuccessMessage.js**: This component displays a success message once the email has been sent.
    
-   **emailService.js**: This service contains the logic for sending emails using Nodemailer, keeping your code modular and clean.
    
-   **validateEmail.js**: A utility function that checks if an email address is formatted correctly.
    
-   **tests**: Here, you would write tests to ensure your email service and components are functioning as expected.
    

**🍱 Benefits of a Well-Organized Project**

1.  **Ease of Navigation**: Anyone looking at your project can quickly understand where to find specific parts of the code.
    
2.  **Better Collaboration**: If you’re working with others, a clear structure helps everyone know where to contribute without stepping on each other’s toes.
    
3.  **Scalability**: As your project grows, maintaining a clear structure helps manage the complexity and keeps your codebase clean.
    
4.  **Improved Maintenance**: When you need to update or fix something, you can find the relevant files quickly, which saves time and reduces errors.
    

### **8\. Use Consistent Formatting**

Consistency in formatting improves readability.

Establish a pattern for how you write your code, such as using two spaces for indentation or always including a line break before comments.

Following consistent formatting makes your code look clean and well-organized.

**🛠️ Tools for Formatting**

-   [**Prettier**][13]: Automatically formats code based on a set of rules. [Here’s a tutorial][14] that explains how to set up and use Prettier in VSCode.
    
-   [**ESLint**][15]: Helps enforce coding standards by highlighting issues. [Here’s a tutorial][16] that includes a helpful and in-depth section on setting up ESLint for your projects.
    

### 9\. Avoid Hardcoding Values

Hardcoding is directly embedding data values in code, like setting a user ID as `123` instead of using a variable.

Avoiding hardcoded values allows you to reuse code without making constant changes. Store values in variables, constants, or configuration files instead.

Here’s a scenario where hardcoding can lead to issues:

```
// Bad: Hardcoding user limit
function createUser(name) {
    let numberOfUsers = 100; // Hardcoded value
    if (numberOfUsers >= 100) {
        return 'User limit reached.';
    }
    // Code to create the user
    return 'User created.';
}
```

In this example, `numberOfUsers` is hardcoded to `100`. If you want to change the user limit, you have to find and modify this value in the code. If it appears in multiple places, this task becomes cumbersome and error-prone.

#### **🏗️ Improved Example Using Constants**

Now, let’s refactor this code to use a constant instead:

```
// Good: Using a constant
const MAX_USERS = 100; // Store the limit in a constant

function createUser(name) {
    let numberOfUsers = getCurrentUserCount(); // Get the current count from a function or database
    if (numberOfUsers >= MAX_USERS) {
        return 'User limit reached.';
    }
    // Code to create the user
    return 'User created.';
}

// Example function to get current user count
function getCurrentUserCount() {
    // Simulate fetching the current count, e.g., from a database
    return 90; // Example count
}
```

**🥣 Breakdown of the improved example:**

1.  **Using Constants**: The `MAX_USERS` constant is defined at the top. This way, if you ever need to change the maximum number of users, you only have to update it in one place.
    
2.  **Dynamic Values**: The `getCurrentUserCount()` function dynamically retrieves the current user count from a database or any other source. This approach prevents hardcoding the count and allows for easy changes.
    
3.  **Maintainability**: By storing values in constants, your code becomes more maintainable. If the business requirement changes and you need to increase the user limit to `150`, you can simply change `MAX_USERS` from `100` to `150`, and the change will reflect throughout your application.
    
4.  **Clarity**: Using descriptive names for your constants (like `MAX_USERS`) improves the readability of your code. Anyone looking at your code can quickly understand what this value represents.
    

**🤐 When to Use Configuration Files**

In larger applications, you might also consider using configuration files (like JSON, YAML, or environment variables) to store values that may change between environments (development, staging, production).

For instance in your **config.json** file you can hardcode `maxUsers` as follows (keep in mind that in config.json, its recommended to use camelCase as it follows consistent formatting):

```
{
    "maxUsers": 100,
    "emailService": {
        "service": "gmail",
        "user": "your-email@gmail.com",
        "pass": "your-email-password"
    }
}
```

**🪴 Using Configuration in Your Code:**

```
const config = require('./config.json');

function createUser(name) {
    let numberOfUsers = getCurrentUserCount(); 
    if (numberOfUsers >= config.maxUsers) {
        return 'User limit reached.';
    }
    // Code to create the user
    return 'User created.';
}
```

### 10\. Limit Function Length

Long functions are harder to understand and maintain.

There’s no strict rule, but in general, functions should ideally be no more than 20-30 lines. If a function has multiple responsibilities or contains many steps, that’s a good indication it might be too long. Breaking down these functions into smaller "helper" functions can make them more manageable and understandable.

Here’s what a long, complex function might look like:

```
function updateCart(cart, item, discountCode) {
    // Add the item to the cart
    cart.items.push(item);

    // Calculate the new total
    let total = 0;
    cart.items.forEach(cartItem => {
        total += cartItem.price * cartItem.quantity;
    });

    // Apply discount if available
    if (discountCode) {
        total = applyDiscount(total, discountCode);
    }

    // Log the transaction
    console.log(`Item added: ${item.name}, New total: $${total}`);

    return total;
}
```

⚠️ **This function does multiple things:**

1.  Adds an item to the cart.
    
2.  Calculates the total price.
    
3.  Applies a discount if there’s a code.
    
4.  Logs the transaction.
    

While this function might look manageable now, it can quickly grow if more tasks are added, making it harder to debug and maintain.

Let’s break this long function into smaller, single-purpose functions:

```
function updateCart(cart, item, discountCode) {
    addItemToCart(cart, item);
    let total = calculateTotal(cart);

    if (discountCode) {
        total = applyDiscount(total, discountCode);
    }

    logTransaction(item, total);
    return total;
}

function addItemToCart(cart, item) {
    cart.items.push(item);
}

function calculateTotal(cart) {
    return cart.items.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
}

function logTransaction(item, total) {
    console.log(`Item added: ${item.name}, New total: $${total}`);
}
```

#### 🧩 Let me explain:

1.  `addItemToCart`: This function is now responsible only for adding an item to the cart. It’s simple, with a clear purpose.
    
2.  `calculateTotal`: This function calculates the total price of all items in the cart. It’s easier to read and understand, and if you need to update the way totals are calculated, you only have to modify this function.
    
3.  `logTransaction`: Handles the responsibility of logging details. If you ever need to change what gets logged (for example, adding a timestamp), you can do so in this function without touching the rest of the code.
    
4.  `updateCart`: The main function now reads more like a summary of the actions being taken: add an item, calculate the total, apply discounts, and log the result. It’s easier to follow and understand at a glance.
    

**📒 Let’s summarize limiting function length:**

1.  **🎯 Focus on One Task**: Each function should ideally perform just one task. If a function seems to be doing multiple tasks, consider breaking it up.
    
2.  **🩼 Use Helper Functions**: Helper functions are small, focused functions that assist a main function by performing a specific task. In the example above, `addItemToCart`, `calculateTotal`, and `logTransaction` are helper functions.
    
3.  **🪦 Descriptive Names**: Name your functions based on their tasks (for example, `addItemToCart`), which helps make the code self-explanatory.
    

## Best Practices for Clean Code

Now that we’ve covered some important tips, let’s look at some overarching principles that make up the philosophy behind clean code:

1.  **🎏 Simplicity**: Always aim to make your code as simple as possible.
    
2.  **🧂 Consistency**: Keep your code uniform in style and structure.
    
3.  **🌾 Clarity**: Your code should clearly communicate what it does.
    
4.  **⛽ Efficiency**: Write code that’s optimized for performance without sacrificing readability.
    

These principles make coding less about writing and more about designing solutions. Writing clean code is a skill that grows with practice, so keep learning and improving over time.

**🔌 A Note on Dependencies**

Instead of hardcoding dependencies directly into your code, use package managers like [**npm**][17] (for JavaScript) or **pip** (for Python) to manage them. This way, you can easily update or remove them when needed.

## Conclusion 🏁

Writing clean code is like building a strong foundation for a house. It keeps everything in order, making it easy to add new features or fix issues as your project grows.

With these tips, you can start developing habits that will make your code more readable, maintainable, and enjoyable to work on.

### Recommended Next Steps 📘

For a structured guide to becoming a backend developer in six months, you can check out my [backend developer roadmap][18]. It’s designed to help beginners stay on track with weekly goals, covering the essential skills, tools, and technologies. This roadmap can keep you motivated and make learning more manageable.

**You can follow me on** [**𝕏**][19] **for instant updates.**

Hope to see you next time!

[1]: #heading-1-use-meaningful-names
[2]: #heading-2-follow-the-single-responsibility-principle-srp
[3]: #heading-3-avoid-unnecessary-comments
[4]: #heading-4-make-your-code-readable
[5]: #heading-5-write-unit-tests
[6]: #heading-6-be-careful-with-dependencies
[7]: #heading-7-organize-your-project
[8]: #heading-8-use-consistent-formatting
[9]: #heading-9-avoid-hardcoding-values
[10]: #heading-10-limit-function-length
[11]: #heading-conclusion
[12]: https://nodemailer.com/
[13]: https://prettier.io/
[14]: https://www.freecodecamp.org/news/how-to-use-prettier-in-visual-studio-code/
[15]: https://eslint.org/
[16]: https://www.freecodecamp.org/news/how-to-set-up-eslint-prettier-stylelint-and-lint-staged-in-nextjs/#heading-set-up-eslint
[17]: https://www.npmjs.com/
[18]: https://codewithshahan.gumroad.com/l/pcela
[19]: https://x.com/shahancd