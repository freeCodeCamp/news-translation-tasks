---
title: "The Clean Code Handbook: How to Write Better Code for Agile Software
  Development"
date: 2025-02-06T14:19:33.888Z
author: Programming with Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/the-clean-code-handbook/
posteditor: ""
proofreader: ""
---

Building scalable software applications requires writing clean code that’s so simple that any dev can understand it.

<!-- more -->

In this article, I’ll explain and demonstrate what clean code is. Then I’ll share my favorite clean code patterns for building modern Agile applications.

I won’t use complex jargon. I’ll hit you with simple, clear JavaScript examples that focus on the core concepts. Straight to the point, no nonsense – that’s how I roll.

Let’s get started.

## Table of Contents

1.  [The Cost of Bad Code][1]
    
2.  [Clean Coder vs. Messy Coder][2]
    
3.  [AI Can’t Save You If Your Code is a Mess 🗑️][3]
    
4.  [12 Clean Code Design Patterns for Building Agile Applications ⚖️][4]
    
    -   [🌿 Use Names That Mean Something][5]
        
    -   [🔨 Keep Functions Laser-Focused (SRP)][6]
        
    -   [🚪 Use Comments Thoughtfully][7]
        
    -   [⚡ Best Practices for Writing Good Comments][8]
        
    -   [🧩 Make Your Code Readable][9]
        
    -   [🏌️ Test Everything You Write][10]
        
    -   [💉 Use Dependency Injection][11]
        
    -   [📂 Clean Project Structures][12]
        
    -   [🤹‍♂️ Be Consistent with Formatting][13]
        
    -   [✋ Stop Hardcoding Values][14]
        
    -   [🤏 Keep Functions Short][15]
        
    -   [⛺ Follow the Boy Scout Rule][16]
        
    -   [🏟️ Follow the Open/Closed Principle][17]
        
5.  [Modern Best Practices to Help You Write Clean Code: A Summary 🥷][18]
    
6.  [Automated Tools for Maintaining Clean Code ⚓][19]
    
    -   [1️⃣ Static Analysis][20]
        
    -   [2️⃣ Automated Code Formatting][21]
        
    -   [3️⃣ Continuous Integration (CI) Testing][22]
        
    -   [4️⃣ CI/CD pipelines][23]
        
7.  [The Role of Documentation in Agile Software Development 🚣][24]
    
8.  [Conclusion 🏁][25]
    
9.  [Frequently Asked Questions About Clean Code 🧯][26]
    

![Image of agile software development meme](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xh3j6ccn1hc3euc3lfyl.png)

In Agile, where change is the only constant, clean code is your armor. It makes you adaptable, swift, and, most importantly, in control.

Here’s the truth: writing clean code is not optional if you want to survive in the software development industry. Fortunately, we human beings are able to master clean code with some effort and practice.

## The Cost of Bad Code

![Image of cost of messy code vs clean code graph by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdai6npb55j71sguj6kl.png)

To explain this stack bar graph, in the initial development phase, bad code is **slightly** more costly to change than clean code.

But as we move into the maintenance and refactoring phases, the gap widens significantly, with bad code costing nearly twice as much as clean code.

By the legacy phase, bad code reaches 100% cost – now it’s extremely expensive to update, while clean code remains more manageable at 45%.

As of now, the most recent analysis on the cost of poor software quality in the U.S. is the 2022 report by the Consortium for Information and Software Quality ([cisq.org][27]). This report estimates that poor software quality cost the U.S. economy at least $2.41 trillion in 2022, with technical debt accounting for about $1.52 trillion of this amount.

You can [read more about that here][28].

Recent discussions continue to highlight the significant impact of technical debt on software quality and business performance.

For instance, [a 2024 survey][29] indicated that for more than 50% of companies, technical debt accounts for greater than a quarter of their total IT budget. And this can really hinder innovation if it’s not addressed.

As you can see, there’s no doubt that bad code is a costly problem in software development.

## **Clean Coder vs. Messy Coder**

Here’s a graph that shows the journey of **two types** of coders:

![Image of clean code vs bad code graph chart](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c6ubf77uwipf4gtucw8q.png)

-   **⚠️ The Messy Coder (Red line):** Starts fast but crashes hard. The more lines they write, the more trouble they make.
    
-   **⚡ The Clean Coder (Blue line):** Starts slow but stays consistent. Growth doesn’t stop — it accelerates.
    

🫵 Now, you decide which line you want to follow.

## AI Can’t Save You If Your Code is a Mess 🗑️

When you get stuck writing code, you might turn to AI. But let me tell you something: AI can’t save you if your code is a mess.

It’s like building a house on sand. Sure, it stands for a while, but one strong gust of wind or big wave, and it collapses.

Remember: AI is just a tool. If you don’t know how to write clean, scalable applications, you're setting yourself up for failure.

If you can’t maintain the code you write, you’re in trouble.

I’ve seen it over and over again: developers who know five programming languages. They can build apps, websites, software. They know algorithms and data structures like the back of their hand.

But when faced with a large project or someone else’s messy code, they crumble.

They’re like an aerospace engineer who designs and builds their own planes but doesn’t know how to fly them. They crash into their own code.

This was me...once upon a time. I’d write thousands of lines of code, only to realize I couldn’t even understand what I wrote last week. It was chaos for me.

But then it hit me — every developer struggles with this. It wasn't about how much I knew. It was about how I organized and structured what I knew. In other words, it was about knowing the art of programming itself.

I decided to escape this trap. After five months of intense work — four to five hours a day writing, designing, and researching — I created something I wish I had when I started programming. A book that’s a complete beginner’s guide: **Clean Code Zero to One.**

![cover image of clean code zero to one: from messy code to masterpiece](https://cdn.hashnode.com/res/hashnode/image/upload/v1737731329839/c4c862d9-7fdc-460a-ae2e-18b19468b6ec.png)

If you want to learn more about the book, I give you all the details at the end of this tutorial. So read on to learn more about writing clean code.

## 12 Clean Code Design Patterns for Building Agile Applications ⚖️

If your code doesn’t follow these modern clean code design patterns, you could be creating a ticking time bomb. These patterns are your tools. Master them and enjoy the success of your projects. Let me show you one by one.

### **🌿 Use Names That Mean Something**

Naming your variables or functions b or x is not helpful. Call them what they are so they’re easier to understand. Here’s an example of both a bad and good variable name:

```
// Weak and vague
let b = 5;

// Strong and clear
let numberOfUsers = 5;
```

People who write unclear names don’t want to own their mistakes. Don’t be that person.

![Comic showing a bad vs a good variable name, by Shahan](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165724746/37b2edc3-3c68-47a8-ab6f-f131a2239a01.png)

### **🔨 Keep Functions Laser-Focused (SRP)**

A function should do **one thing**—and do it perfectly. This is called the Single Responsibility Principle (**SRP**).

Good code is like a hammer. It hits one nail, not ten. For example, if you are hiring someone to do everything in your company — finance, sales, marketing, janitorial work, and so on — they’ll likely fail miserably because they can’t focus one one thing. The same goes for your classes in code.

🚧 When a class or function does more than one thing, it becomes a tangled mess. Debugging it feels like solving a puzzle upside down. If your class handles both user input and database operations, for example, it’s not multitasking — it’s madness. Break it up. One method, one job.

**🔥 My Rule:** Your code works for you. Keep it sharp, focused, and controllable, or it’s going to control you. Here is how to make that happen:

```
// Clean: One job, one focus
function calculateTotal(a, b) {
    return a + b;
}

function logTotal(user, total) {
    console.log(`User: ${user}, Total: ${total}`);
}

// Messy: Trying to do EVERYTHING
function calculateAndLogTotal(a, b, user) {
    let total = a + b;
    console.log(`User: ${user}, Total: ${total}`);
}
```

🪧 When you mix tasks, you mix in confusion. As simple as that.

### **🚪 Use Comments Thoughtfully**

There is a great saying among professional developers:

> “ Code speaks for itself. ”

You don’t explain what a door does every time someone walks into a room, do you? Your code should work the same way.

Comments aren’t bad, but if your code can’t stand on its own, then you may have a problem.

🪧 A good comment should tell “why” not “how or what”. If a developer doesn’t understand “how” something works, then they likely aren’t going to understand “why” either.

Here are some short examples of good comments vs bad comments. I’ll also show you a real-world project for writing clean comments.

**Example 1: Bad Comment 👎**

```
// Multiply the price by the quantity to calculate the total
const total = price * quantity;
```

This is a **bad comment** because it simply repeats what the code already says. The code `price * quantity` is self-explanatory, so the comment doesn’t add anything useful.

**Good Comment: 👍**

If the code is clear and simple, **you don’t need a comment.**

```
const total = price * quantity;
```

![Image illustrating unnecessary comment vs "silent comment", by Shahan](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165891398/6a942ad7-5b09-4990-9c7f-95358dafcbf3.png)

**Example 2: Bad Comment 👎**

```
// Check if the user logged in
function isUserLoggedIn(session) {
    return !!session.user;
}
```

This comment is bad because it doesn’t explain why the `isUserLoggin()` exists. It just explains what happens. But we already know that this is an auth function. This comment is a waste of time.

**Good Example 👍**

```
// The user is authenticated before accessing protected resources
function isUserLoggedIn(session) {
    return !!session.user;
}
```

This is a **good comment** because it explains **why** the code exists. It tells us that the function checks if the user is authenticated before allowing access to sensitive parts of the app. It focuses on the bigger picture.

![Before: "Check if the user is logged in". After: "The user is authenticated before accessing protected resources." By Shahan.](https://cdn.hashnode.com/res/hashnode/image/upload/v1736166143011/b3ddae3d-41cf-4534-8f1a-af710579922c.png)

### **⚡ Best Practices for Writing Good Comments**

1.  **Explain the “Why,” not the “What”:**  
    Write comments to explain the purpose or context of the code, not what the code is doing.
    
2.  **Avoid obvious comments:**  
    Don’t write comments for things the code already makes clear.
    
3.  **Keep them short and precise:**  
    Write concise comments that are easy to read and directly explain the purpose.
    
4.  **Update comments regularly:**  
    Outdated comments can mislead developers, so always update them when the code changes.
    

**Real-World Example (with Good Comments) 🛒**

Let’s implement these practices into a real-world project: a large e-commerce application. One function calculates shipping costs based on the order details. Here's the full code, I will explain each comment below:

```
// Shipping rules:
// - Free shipping for orders over $100
// - Standard shipping ($10) for orders below $100
// - Additional $5 for international orders

function calculateShipping(order) {
    let shippingCost = 0;

    // Check if the order qualifies for free shipping
    if (order.total >= 100) {
        shippingCost = 0; // Free shipping
    } else {
        shippingCost = 10; // Standard shipping cost
    }

    // Add additional cost for international orders
    if (order.isInternational) {
        shippingCost += 5;
    }

    return shippingCost;
}

// Example usage
const order1 = { total: 120, isInternational: false };
const order2 = { total: 80, isInternational: true };

console.log(calculateShipping(order1)); // Output: 0
console.log(calculateShipping(order2)); // Output: 15
```

At the start of the function, we include a comment explaining the rules for shipping costs. This gives the reader an overview of the logic without needing to read the full code.

```
// Shipping rules:
// - Free shipping for orders over $100
// - Standard shipping ($10) for orders below $100
// - Additional $5 for international orders
```

Then, the first condition checks if the order total is greater than or equal to $100. A comment here clarifies **why** free shipping is applied.

```
// Check if the order qualifies for free shipping
if (order.total >= 100) {
    shippingCost = 0; // Free shipping
}
```

The second condition applies an additional charge for international shipping. The comment explains **why** the extra cost is added.

```
// Add additional cost for international orders
if (order.isInternational) {
    shippingCost += 5;
}
```

**Why are these comments good?**

Imagine you’re working in a team of 20 developers. Someone reads the `calculateShipping` function six months later. Without these comments, they might waste time guessing why international orders have an extra fee. Good comments clarify the why and save hours of frustration.

### **🧩 Make Your Code Readable**

If someone reading your code feels like they’re solving a riddle, you’ve already become a troublemaker. Here is the proof:

```
// Clean: Reads like a story
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// Messy: Feels like chaos
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
```

If your code is messy and hard to read, it will confuse others—and even yourself later! Imagine coming back to your own code after six months and feeling like you’re reading a foreign language. Readable code saves time, reduces bugs, and makes everyone’s life easier.

**🍵 Why is Readability Important?**

1.  **For yourself:** When you revisit your code after weeks or months, clean code helps you pick up where you left off without wasting time figuring out what you did.
    
2.  **For your team:** If someone else reads your code, they shouldn’t have to solve a puzzle. Clean code makes teamwork smoother and prevents miscommunication.
    
3.  **Fewer bugs:** Clear code is easier to debug because you can quickly spot mistakes.
    

**🧙‍♂️ How to Write Readable Code**

Let’s build a simple program to manage books in a library. We’ll make it clean and readable and then I will break down this code below:

```
// A class to represent a book
class Book {
    constructor(title, author, isAvailable) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is not available.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`You returned "${this.title}".`);
    }
}

// A function to display available books
function displayAvailableBooks(books) {
    console.log("Available books:");
    books.forEach((book) => {
        if (book.isAvailable) {
            console.log(`- ${book.title} by ${book.author}`);
        }
    });
}

// Example usage
const book1 = new Book("The Clean Coder", "Robert Martin", true);
const book2 = new Book("You Don’t Know JS", "Kyle Simpson", false);
const book3 = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);

const library = [book1, book2, book3];

displayAvailableBooks(library); // Show available books
book1.borrow(); // Borrow a book
displayAvailableBooks(library); // Show available books again
book1.returnBook(); // Return the book
displayAvailableBooks(library); // Final list
```

We created a `Book` class to represent each book. It has properties like `title`, `author`, and `isAvailable` to track its status.

-   The `borrow` method checks if the book is available. If yes, it marks it as unavailable and prints a message.
    
-   The `returnBook` method makes the book available again.
    
-   The `displayAvailableBooks` function loops through the library and prints only the books that are available.
    
-   We create three books (`book1`, `book2`, `book3`) and store them in a `library` array.
    
-   We borrow and return books, showing how the list of available books changes.
    

As you can see, readable code is not just about style. It saves time, prevents bugs, and preserves your code as useful for years to come.

### **🏌️ Test Everything You Write**

If you don’t take the time to write tests, you shouldn’t be surprised if your code breaks. If you do want to write tests, follow this unit testing strategy to catch problems ahead.

**What Is Unit Testing?**

Concretely, unit testing checks individual parts of your code (like functions or classes) to ensure they work correctly. Just like checking each brick of your house for soundness before building the walls.

Let me give you an example of how unit testing works:

```
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// Test it (Unit Test)
const calculator = new Calculator();
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
```

Here’s what’s going on in this code:

First, we create the calculator class:

```
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
```

The `Calculator` class has two methods: `add` and `subtract`.

-   `add(a, b)` takes two numbers and returns their sum.
    
-   `subtract(a, b)` takes two numbers and returns their difference.
    

Next, we set up the tests:

```
const calculator = new Calculator();
```

Here, we’re creating an instance of the `Calculator` class to test its methods.

Then we write test cases:

```
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
```

`console.assert(condition, message)` checks if the condition is `true`. If it’s `false`, the message ("Addition failed" or "Subtraction failed") is displayed in the console.

-   **First test**: `calculator.add(2, 3) === 5`
    
    -   Calls the `add` method with `2` and `3`.
        
    -   Checks if the result is `5`.
        
-   **Second test**: `calculator.subtract(5, 3) === 2`
    
    -   Calls the `subtract` method with `5` and `3`.
        
    -   Checks if the result is `2`.
        

So what happens if something breaks? It’s pretty simple to solve any issues that arise here. In this case, if the `add` or `subtract` method doesn’t work correctly, the test will fail. For example:

```
console.assert(calculator.add(2, 3) === 6, "Addition failed");
```

-   The condition `calculator.add(2, 3) === 6` is `false`.
    
-   The console will display: `"Addition failed"`.
    

**Real-World Example: Testing a Login System 👥**

Let’s test a simple login system to see how unit testing works in a real-world scenario.

```
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}

// Test the Auth class
const auth = new Auth();
console.assert(auth.login("admin", "et5t45#@") === true, "Login failed for valid credentials");
console.assert(auth.login("user", "wrongpassword") === false, "Login succeeded for invalid credentials");
```

First, create the `Auth` class:

```
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}
```

The `login` method checks if the username is `"admin"` and the password is `"1234"`. If both match, it returns `true` – otherwise, `false`.

Next, set up the tests:

```
const auth = new Auth();
```

Create an instance of the `Auth` class. Then write the test cases:

```
console.assert(auth.login("admin", "1234") === true, "Login failed for valid credentials");
console.assert(auth.login("user", "wrongpassword") === false, "Login succeeded for invalid credentials");
```

-   **First test**: Checks if valid credentials (`"admin"`, `"1234"`) succeed. If not, `"Login failed for valid credentials"` is displayed.
    
-   **Second test**: Checks if invalid credentials (`"user"`, `"wrongpassword"`) fail. If not, `"Login succeeded for invalid credentials"` is displayed.
    

**🌱 Why testing results in clean code:**

1.  You naturally write smaller, more focused functions to make your code testable
    
2.  Tests verify that your code behaves as expected under different conditions.
    
3.  With tests in place, you can confidently update your code, knowing the tests will catch any mistakes.
    

### **💉 Use Dependency Injection**

Hardcoding dependencies is like tattooing someone’s name on your forehead — it’s permanent, can be abrasive, and locks you in.

So, what does Dependency Injection do? It lets you manage your code's relationships by passing dependencies as arguments. It’s flexible, adaptable, and maintainable.

To demonstrate how it works, here I’m using the Nodemailer dependency for sending emails to users:

```
// Dependency: Sending emails with Nodemailer
const nodemailer = require('nodemailer');
function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({ /* config */ });
    return transporter.sendMail({ from: "programmingwithshahan@gmail.com", to, subject, text: message });
}
```

⚠️ To save yourself from risk, make sure to avoid **hardcoding** dependencies. Use abstraction or configuration files for secure maintenance.

This is just one example. As a developer, you may use hundreds of libraries or dependencies.

I’m not saying you shouldn’t rely on dependencies/libraries at all, as nowadays it is hard to avoid them. But you should be very careful before installing them in your coding projects.

You should check the security, performance, quality, or functionality of an organization's software systems. Because they sometimes contain risks that can ruin your entire project.

🚧 Always control your tools, don't let them control you.

### **📂 Clean Project Structures**

A well-organized project is the difference between a **trash heap** and a high-end **boutique**.

Here is how each folder should be organized:

![Image of clean code project structure by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xwyg9iqqcybz21lsgxz.png)

If your codebase looks like a junk drawer, you’ve already caused trouble for your future self.

Let’s go through the clean project structure you can see above to better understand it:

**1.** `myProjet/src`

This is the main container for your entire application. Everything your app needs is stored inside this folder. It has subfolders to keep things tidy and managed in one place.

**2.** `components`

This is where you keep all the reusable pieces of your app. You can use these components in multiple places without building them again.

**3.** `services`

This is the "brain" of your app. It handles all the work behind the scenes for both the frontend and backend. `emailService.js`, `userService.js` and `productService.js` are some of the example files for your `services` folder.

**4.** `utils`

This contains all the small, handy tools you need to make your application run smoothly and make your life easier. For example, `formatedate.js`, `validateEmail.js` and `generateId.js` are some of the common utils files to make reusable pieces of components for your entire project.

#### **5.** `tests`

Conventionally, test files are typically located **outside** the `src` folder, at the project root level. This keeps your production code (`src`) separate from your test code (`tests`), making it cleaner and easier to manage. Have a look:

```
myProject/
├── src/              # Production code
│   ├── components/
│   ├── services/
│   └── utils/
├── tests/            # Test files
│   ├── components/
│   ├── services/
│   └── utils/
├── package.json      # Project configuration
└── README.md         # Documentation
```

Some developers may prefer creating one testing file inside the `test` folder to test everything in one place. Unfortunately, it may feel clean at first, but as your project grows, you’ll have to find and search for specific code blocks. It’s ugly and can produce unexpected testing results. So breaking them into multiple testing files inside the `tests` folder is highly recommended.

**Real-world example 📧**

So let me create a clean, durable project structure for you to apply in any future projects you might work on. Needless to say, clean project structure is the foundation of building a maintainable project.

From our previous email sending application example, we will write a clean project structure for this app. We want to build an application that sends emails to users. Your clean project structure for this app should look like this:

![Image of email app clean code project structure by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6v6rlc5qiplgxz1h4dps.png)

As you can see, I packed every subfolder and file inside the `src` folder which is the main container of our application. Inside the `src` folder, we created `components`, `services`, `utiles`. Finally, we have a manageable `test` folder outside the `src` folder to test each component independently. This test folder has nothing to do with our production code that is located inside the `src` folder.

### **🤹‍♂️ Be Consistent with Formatting**

Don’t write code like you’re 10 different people. Be consistent with your formatting.

Use tools like [Prettier][30] or [ESLint][31] to enforce a consistent style. If every file looks different, you’re creating chaos that no one wants to fix.

I would say that consistency in formatting is one of the most important aspects of writing clean code.

Have a look...

![Image of consistent formatting snippets from clean code zero to one book](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/46zu4k5nnrkcdesgqrye.png)

```
// Always use 2 spaces for indentation
function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Dimensions must be positive numbers.");
  }
  return width * height;
}

// Add meaningful whitespace for readability
const rectangle = {
  width: 10,
  height: 20,
};

// Clear separation of logic
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`Area: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

Let’s examine some of the aspects of this code that make it clean:

#### 1️⃣ Consistent Indentation

Why 2 or 4 spaces? It’s clean, minimal, and universally accepted in many JavaScript style guides. It doesn’t overwhelm the eyes, and the code structure stands out clearly. When you mix inconsistent indentation (2 spaces here, 4 spaces there), you confuse people—and confused people make mistakes.

#### 2️⃣ Meaningful Whitespace: Giving Code Room to Breathe

That extra line break between the rectangle definition and the `try` block is like a pause in a sentence — it gives the reader time to process.

#### 3️⃣ Clear Separation of Logic: Modular Thinking

```
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`Area: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

Look at how the logic is divided into clear sections:

-   First, the calculation (`calculateArea` function).
    
-   Then, the output (`console.log`).
    
-   Finally, error handling (`catch` block).
    

Each task has its own space and purpose.

#### 4️⃣ Readable Error Handling

When you throw errors or log messages, you format them cleanly. No vague or cryptic messages here. A developer seeing this will immediately know the problem.

```
throw new Error("Dimensions must be positive numbers.");
```

**🐦‍⬛ General tips for consistent formatting:**

-   Use 2 or 4 spaces for indentation consistently throughout your codebase. Avoid tabs to maintain uniformity across different editors.
    
-   Keep lines to a maximum of 100-120 characters to prevent horizontal scrolling and improve readability.
    
-   Group related logic together and separate blocks of code with blank lines to highlight their purpose.
    
-   Finally, avoid over-aligning code. Instead, let indentation naturally guide the flow of logic.
    

### **✋ Stop Hardcoding Values**

Hardcoding values is a lazy way to code. Here is the proof:

```
// Bad: Hardcoded and rigid
function createUser() {
    const maxUsers = 100;
    if (currentUsers >= maxUsers) throw "Too many users!";
}

// Clean: Dynamic and flexible
const MAX_USERS = 100;
function createUser() {
    if (currentUsers >= MAX_USERS) throw "Too many users!";
}
```

You see, changing this variable won’t surprise you in the future. You know exactly where to find it to change uncertain values.

Its best to store your fixed values in the global configuration (config) file.

🪧 So, avoid hardcoding values at all costs. Hardcoding is the shortcut that may drive your future self (or others) crazy.

### **🤏 Keep Functions Short**

If your function is longer than 20 lines, it’s probably trying to do too much_._

Short functions are sharp functions. They hit their mark every time.

Long, bloated functions are messy and hard to read, but short functions are clear and focused. Here is how your large functions should break down:

```
function updateCart(cart, item) {
    addItemToCart(cart, item);
    let total = calculateTotal(cart);
    logTransaction(item, total);
    return total;
}

function addItemToCart(cart, item) {
    cart.items.push(item);
}
```

Let me explain this code so you understand why breaking down large functions is a winning strategy.

1.  **The Main Function:** `updateCart()` calls smaller helper functions to handle specific tasks like:
    
    -   Adds the item to the cart.
        
    -   Calculates the total price.
        
    -   Logs the details of the transaction.
        
    -   Finally, it returns the total price.
        

Instead of one long block of code that tries to do everything, it delegates tasks to helper functions.

2.  **Helper Function:** `addItemToCart()` This function **only** handles adding the item to the cart. if you need to change how items are added (for example, checking for duplicates). You could just edit this small function instead of digging through a giant block of code in `updateCart`. That’s how you write clean code functions that’s a joy to read and easy to maintain.

**What Happens If Functions Are Too Long? 💤**

Let’s say you didn’t break down the `updateCart` function. Here’s what it might look like:

```
function updateCart(cart, item) {
    cart.items.push(item);
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        total += cart.items[i].price;
    }
    console.log(`Added ${item.name}. Total is now $${total}.`);
    return total;
}
```

What are the problems here?

-   It’s trying to do everything.
    
-   It’s hard to read, especially if it grows bigger.
    
-   If something breaks, you’ll waste time figuring out which part is the problem.
    

Now the choice is yours: stick with the messy all-in-one approach or practice the clean one function one job mindset.

### **⛺ Follow the Boy Scout Rule**

> Always leave your campsite cleaner than you found it.

Let me break it down for you. You don’t just use something and leave it worse than before. That’s inconsiderate behavior. Real professionals leave things better than they found them.

In coding terms, every time you touch the codebase, **make it better.** Clean it up, refactor messy parts, and improve readability. If you don’t, you’re just piling on garbage that will eventually collapse on your head.

Here is an example. Instead of improving it, we’re just adding more layers of complexity:

```
// Original code: Hard to read, poorly named variables
function calc(a, b) {
  let x = a + b;
  let y = x * 0.2;
  return y;
}

// We're adding to it but not cleaning it up
function calcDiscount(a, b, discountRate) {
  let total = calc(a, b);
  let final = total - discountRate;
  return final;
}
```

After: it gets better every time. Here’s how a disciplined coder works — they improve as they go:

```
// Improved code: Clear names, refactored for clarity
function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function calculateDiscountedTotal(price, quantity, discountRate) {
  const subtotal = calculateSubtotal(price, quantity);
  const discount = subtotal * discountRate;
  return subtotal - discount;
}
```

Now, anyone can tell what’s happening at a glance. Because we’ve broken down the code into smaller, more focused functions. Thus, adding new features won’t break existing functionality. 🏕️

### **🏟️ Follow the Open/Closed Principle**

This design principle suggests your code should be designed to allow extensions without changing the existing foundation.

You want to add features _—_ not rip it apart every time you upgrade_._ Modifying old code to fit new requirements is exactly like trying to rebuild your house every time you buy new furniture. It’s not sustainable.

Let’s see how you can build smarter, scalable code that lets you add features without breaking everything else.

#### Before: Violating the principle

You’ve got a class to handle payments — simple enough. At first, it just handles credit cards.

But then your boss shows up and says, _“Hey, now we need PayPal support.”_

And because you didn’t bother learning clean code, your code looks like a spaghetti monster straight out of a legacy enterprise system from 1995. Here’s the masterpiece you’ve crafted:

```
class PaymentProcessor {
  processPayment(paymentType, amount) {
    if (paymentType === "creditCard") {
      console.log(`Processing credit card payment of $${amount}`);
    } else if (paymentType === "paypal") {
      console.log(`Processing PayPal payment of $${amount}`);
    } else {
      throw new Error("Unsupported payment type");
    }
  }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment("creditCard", 100);
paymentProcessor.processPayment("paypal", 200);
```

Alas! Every new payment type (like Apple Pay, Google Pay, and so on) requires modifying the `processPayment` method. Needless to say, you risk breaking existing functionality while adding new features. If you had learned this principle, you might not be in this mess.

Don’t worry: I’ll help you to fix this. First, we need to refactor the code. Instead of modifying the existing class, we’ll extend its functionality using [polymorphism][32]:

```
javascriptCopy code// Base class
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("processPayment() must be implemented");
  }
}

// Credit card payment
class CreditCardPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

// PayPal payment
class PayPalPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// Adding a new payment type? Just extend the class!
class ApplePayPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing Apple Pay payment of $${amount}`);
  }
}

// Usage
const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new ApplePayPayment(),
];

payments.forEach((payment) => payment.processPayment(100));
```

Now, adding new payment methods doesn’t require changing the existing `PaymentProcessor` class. You just created a new subclass. So the original code remains untouched, meaning there’s no risk of breaking existing features.

Each payment type has its own class, and adding PayPal payment support, for example, doesn’t break the code. Now you can reply to your boss: _“Of course, I will add this feature in 5 minutes.”_ Your promotion is waiting for you to accept it.

I share even more tips in my book [Clean Code Zero to One][33].

## Modern Best Practices to Help You Write Clean Code: A Summary 🥷

Now let me show you the best practices and summarise our 12 Clean Code design principles to help you write clean code for agile application development.

### 🔎 Common Code Smells and How to Fix Them

-   💊 Duplication: If you're copying code, you’re creating more work for yourself. Extract it into a function, and do it right.
    
-   🛤️ Long methods: If your method needs a scroll bar, it's doing too much. Break it down, keep it focused.
    
-   👑 King objects: No class should be doing everything. Simplify responsibilities, or your codebase will become messy.
    

### 💬 Effective Commenting Practices

-   💭 When to comment: Only comment if the code isn't clear. If it is, comments are just clutter.
    
-   🫗 Clarity: Comments should tell why, not what. If your code needs explaining, it might be too complex.
    
-   🌴 Avoid redundancy: Don't comment what's obvious. If your function is addNumbers, don't comment it does that.
    

### 🧼 Refactoring Techniques for Clean Code

-   🏭 Extract methods: Big methods? Break them down. It's not just about cleanliness –– it's about control.
    
-   🫕Rename variables: If your variable names don’t shout their purpose, change and improve them. Precision in naming is precision in thought.
    
-   🍃 Simplify conditionals: If your conditionals look like algebra, simplify them. If a == true, just write if(a).
    

### 🧪 Testing and Clean Code

-   🧙 Unit tests: Test every piece of code like you're interrogating a suspect. No stone unturned.
    
-   🏇TDD (Test Driven Development): Write tests first. It's not just about catching bugs, it's about knowing exactly what your code should do before you write it.
    
-   🧽 Clean tests: Your tests should be as clean as your code. If they're messy, they’re not going to be helpful.
    

### 🐛 Error Handling and Clean Code

-   ⁉️ Exceptions: Use them. They're not just for errors, they're also for keeping your code clean from error clutter.
    
-   🖍️ Fail fast: If something's wrong, stop right there. Don't let errors add up. Deal with them immediately.
    
-   🚨 Logging: Log like you're documenting a crime scene. Clear, precise, and only what's necessary.
    

### 🌱 Code Reviews and Clean Code

-   🚢 Process: Have a system. No cowboy coding. Review, critique, improve.
    
-   🔪 Tools: Use tools that make reviews easy. They're not just for catching mistakes, they're also for teaching discipline.
    
-   🧦 Culture: Cultivate a culture where feedback is gold. Help your team learn how to handle and receive critiques.
    

## Automated Tools for Maintaining Clean Code ⚓

Tools and automation techniques can be really helpful in writing clean code. If you’re not using the right tools and automating things to save yourself time, you’re missing out.

You think you can "eyeball" your way through code quality? Guess again. Without automation, this is what happens:

1.  👎 You miss obvious mistakes because you're "too busy."
    
2.  🤕 Your code looks different in every file, making collaboration a headache.
    
3.  🪦 Deployment breaks because you skipped a critical test.
    

Successful developers use the right tools to automate code and get things done. Here are four strategies for maintaining clean code using modern tools.

### **1️⃣ Static Analysis**

Static analysis is actually a code inspector that reads through your code and points out potential issues early on. The best part? It works **before** runtime, catching errors that could otherwise lead to crashes, downtime, or embarrassing bugs.

#### **How does it work?**

1.  **Syntax checking**: It looks at your code to analyze everything written in the correct syntax. If you misspell a variable or forget a closing bracket, it’ll call you out instantly.
    
2.  **Code quality rules**: Tools like ESLint enforce rules like consistent indentation, avoiding unused variables, and sticking to best practices.
    
3.  **Error prevention**: It identifies logic errors, such as using variables that haven’t been defined, or making comparisons that don’t make sense.
    

Here’s how static analysis works in action:

#### 🚨 Before static analysis:

```
let sum = (a, b) => { return a + b; }
console.log(sume(2, 3)); // Typo, unnoticed until runtime
```

-   **Problem**: The typo in `sume` will only cause an error when the code runs, and that could lead to frustrating debugging sessions or worse — breaking the app in production.

#### 🚑 After static analysis (using ESLint):

```
codeError: 'sume' is not defined.
```

-   **Solution**: [ESLint][34] immediately flags the typo before you even run the code. The error is caught early, saving you time and headaches.

### **2️⃣ Automated Code Formatting**

Before Formatting:

```
function calculate ( x , y ){ return x+ y;}
console.log( calculate (2,3 ) )
```

-   **Problem**: Inconsistent spacing and formatting make the code harder to read.

#### After using Prettier:

```
function calculate(x, y) {
  return x + y;
}
console.log(calculate(2, 3));
```

-   **Solution**: Clean, consistent, and professional formatting is applied automatically. No more nitpicking over spaces or alignment.

Pretty basic stuff though. I covered this in case you write code in notepad or something where IDE is not provided (for example, a job interview).

### **3️⃣ Continuous Integration (CI) Testing**

CI testing make sure every new change to your code is verified automatically. It’s like a safety net that catches bugs introduced during development. CI tools run your tests every time you push code, so nothing breaks after deployment.

#### **How Does CI Testing Work?**

1.  **Triggers on change**: Each time code is committed, the CI tool (like [GitHub Actions][35], [Jenkins][36]) runs automated tests.
    
2.  **Feedback**: It gives you instant feedback if something fails.
    
3.  **Prevents broken code**: Commits only clean, and the working code gets merged into the main branch.
    

### **4️⃣ CI/CD pipelines**

We also use CI/CD pipelines as a continuous process that includes code building, testing, and deployment, while CI testing is a part of that process that focuses on automating the testing of code changes.

**Differece between CI/CD pipelines vs CI testing:**

-   **CI/CD pipelines:** A CI/CD pipeline combines code building, testing, and deployment into a single process. This process make sure that all changes to the main branch code are releasable to production. CI/CD pipelines can reduce deployment time, decrease costs, and improve team collaboration.
    
-   **CI testing:** CI testing is the process of automatically testing code changes that are integrated into a central repository. CI testing focuses on making sure the codebase is stable and that integration issues are resolved. CI testing help developer build software that is stable, bug-free, and meets functional requirements
    

🚧 This is what CI testing CI/CD pipelines concepts are really about. Not as complex as it seems. So let me elaborate more on CI testing with GitHub Actions, as we usually run tests through automated tools nowadays.

### **⚡ Continuous Integration (CI) Testing with GitHub Actions**

As I said earlier, CI tools run automated tests every time you push code or open a pull request. This guarantees that only working, bug-free code gets merged into the main branch.

#### How to Set Up CI Testing with GitHub Actions

**Step 1: Create Your Repository**

Set up a GitHub repository for your project. Then, push your code to GitHub using the following commands:

```
git init
git add .
git commit -m "Initial commit for CI Testing"
git branch -M main
git remote add origin https://github.com/codewithshahan/codewithshahan.git
git push -u origin main
```

Or you can create a new repo from your GitHub account without using the command. Just login to your GItHub account and visit dashboard. Here you will find a “New” button to create a brand new repo:

![image of creating a new repo on github by Shahan](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618697327/dcef8be8-0d08-45d7-8000-34c4c65df425.png)

**Step 2: Add a GitHub Actions Workflow**

Navigate to your repository’s **Actions** tab. To do this, first, you have to visit your repo on Github (you will find the link after creating your repo). In this case, I created a new repo called “codewithshahan”. Here, look for the **Actions** tab on the right side of the navigation bar.

![Image of github actions navigation tab by shahan](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618879398/7c5aa37a-72be-4701-a8f8-9ea9e05c0d5d.png)

After navigating the Actions tab, scroll down a little and you will find the **continuous integration** section:

![Image of CI (Continuous Integration) testing on Github Actions Page by Shahan](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619002674/60003e57-f2b2-48f1-bef8-9bde39149faf.png)

Choose a setup workflow yourself. I will use Node.js for this project.

After clicking the configure button, a `node.js.yml` file will be created automatically, and you can adjust the code depending on your goals.

![Image of GitHub workflow snippet for automated testing by Shahan](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619475568/74da6d46-c105-42c8-8662-fc72e9410bda.png)

I won’t go into detail about how should modify your `.yml` file. It depends on your project goals and personal preference. Also, it is a whole different broader topic and as this article has already become quite long, so I’ll explain it in a future article. For now, just stick with this foundational knowledge.

This CI Testing workflow is best for modern application development. Your app remains stable while incorporating key features including testing (e,g. Dark Mode), Building and deploying applications directly within your GitHub repository. This way, you can push your code confidently, knowing your code is always clean and ready for production.

## The Role of Documentation in Agile Software Development 🚣

If you want your code to be top-notch, you need to understand how to write good documentation. If you think documentation is just about scribbling down how the code works, you’re wrong. It's about explaining **why** it works, not just how it works. That’s where most people miss the mark.

### 1\. 🚡 Create **Useful Docs (Explain Why, Not Just How)**

When you write documentation, you're not just throwing down some instructions for how to use the code. You're telling the next person (or even yourself in the future) why this piece of code exists in the first place. That’s the difference between good and bad documentation.

Bad docs leave people scratching their heads. They’re too vague, too simple, and they don’t answer the big questions. If your documentation is unclear, that likely means your thinking is unclear. You’re basically saying, _"I don’t care if you understand this, it works, just use it."_ That’s not helpful.

Great documentation answers the tough questions:

-   ✅ Why did you choose this approach over another?
    
-   ✅ Why does this function exist? What problem does it solve?
    
-   ✅ Why did you write this code the way you did?
    

If your docs are just regurgitating how to use the code, you’re not being as helpful as you can be. Start thinking deeper and explaining the reasoning behind everything.

### 2\. ⏳ **Keep the Docs Updated (Outdated Docs Are Worse Than No Docs)**

Outdated documentation is the worst. In fact, it can be worse than having no docs at all. When you leave documentation that’s out of sync with the code, you’re doing your future self — or whoever has to deal with it next — a huge disservice.

Every time your code changes, your documentation needs to change too. It has to reflect the current state of things. Don’t mislead future developers (or yourself) by leaving outdated info that will only confuse them and waste their time. If something is no longer relevant, delete it. Outdated documentation is the equivalent of a cluttered mind — it holds you back.

Make it a habit to check and update your documentation regularly. The minute a line of code changes, so should your documentation. Period.

### 3\. 🚆 **Integrate Comments (Good Comments in Code Are Part of Documentation)**

Here’s the deal — comments in your code should **integrate** with your documentation. Good comments aren’t just a crutch for developers who can’t explain their code elsewhere. They should improve your docs, not replace them.

Comments are supplements to your documentation. You write clean, understandable code that needs minimal explanation, but when something isn’t crystal clear, throw in a comment. Remember the rule for comments in your code: explain the **why**, not the **how**. It’s the same here. Don’t repeat yourself. Let your code do the talking. Comments should complement the bigger picture of your documentation, not act as a band-aid for sloppy code.

🪧 Great code should be self-explanatory. Fix the code, then add comments for clarification if necessary. Keep comments clean, short, and to the point.

If you want to write clean, efficient, and maintainable code, documentation is key. Stop thinking of docs as an afterthought or something you do to fill space. It’s an extension of your code — your way of communicating clearly and effectively. It’s your roadmap for future developers, and it’s a reflection of your thought process.

## Conclusion 🏁

Clean code isn't a nice-to-have –– it's a must-have for those who aim to lead. It's about control, efficiency, and improvement over time in the long run. And ultimately, it’ll help you succeed in the game of agile software development.

🪧 If you want to truly master your craftsmanship, write clean code, and let the efficiency speak for itself.

## Frequently Asked Questions About Clean Code 🧯

1.  **What is clean code?** It's code that doesn't make you want to throw your laptop out the window.
    
2.  **Why is clean code important in Agile?** Because Agile is about speed and change, and you can't be quick with a mess.
    
3.  **What are code smells?** Signs that you're about to lose control of your codebase.
    
4.  **How can I improve commenting?** Only comment on what's necessary, and make sure each comment adds value, not noise.
    

Thank you for being with me. You can visit my [Twitter account][37] or [my website][38] to read more posts about clean code and Agile application development. Until next time… keep improving your codebase.

If you’re serious about mastering clean code and taking your programming career to the next level, then my book is for you: [**Clean Code Zero to One**][39]. This book is your full guide from zero to one in clean code, from messy code to masterpiece. I am offering a 50% discount using the code "earlybird" — only for the first 50 copies. Plus, there’s a 30-day money-back guarantee — no risk, all reward.

[1]: #heading-the-cost-of-bad-code
[2]: #heading-clean-coder-vs-messy-coder
[3]: #heading-ai-cant-save-you-if-your-code-is-a-mess
[4]: #heading-12-clean-code-design-patterns-for-building-agile-applications
[5]: #heading-use-names-that-mean-something
[6]: #heading-keep-functions-laser-focused-srp
[7]: #heading-use-comments-thoughtfully
[8]: #heading-best-practices-for-writing-good-comments
[9]: #heading-make-your-code-readable
[10]: #heading-test-everything-you-write
[11]: #heading-use-dependency-injection
[12]: #heading-clean-project-structures
[13]: #heading-be-consistent-with-formatting
[14]: #heading-stop-hardcoding-values
[15]: #heading-keep-functions-short
[16]: #heading-follow-the-boy-scout-rule
[17]: #heading-follow-the-openclosed-principle
[18]: #heading-modern-best-practices-to-help-you-write-clean-code-a-summary
[19]: #heading-automated-tools-for-maintaining-clean-code
[20]: #heading-1-static-analysis
[21]: #heading-2-automated-code-formatting
[22]: #heading-3-continuous-integration-ci-testing
[23]: #heading-4-cicd-pipelines
[24]: #heading-the-role-of-documentation-in-agile-software-development
[25]: #heading-conclusion
[26]: #heading-frequently-asked-questions-about-clean-code
[27]: http://cisq.org
[28]: https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/
[29]: https://vfunction.com/blog/how-to-manage-technical-debt
[30]: https://prettier.io/
[31]: https://eslint.org/
[32]: https://stackify.com/oop-concept-polymorphism/
[33]: https://codewithshahan.gumroad.com/l/cleancode-zero-to-one
[34]: https://eslint.org/
[35]: https://github.com/features/actions
[36]: https://www.jenkins.io/
[37]: https://x.com/shahancd
[38]: https://www.codewithshahan.com
[39]: https://codewithshahan.gumroad.com/l/cleancode-zero-to-one