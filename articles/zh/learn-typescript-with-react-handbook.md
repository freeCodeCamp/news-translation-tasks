---
title: Learn TypeScript – A Handbook for Developers
date: 2025-03-07T04:51:19.827Z
author: oghenekparobo Stephen
authorURL: https://www.freecodecamp.org/news/author/Xtephen/
originalURL: https://www.freecodecamp.org/news/learn-typescript-with-react-handbook/
posteditor: ""
proofreader: ""
---

This handbook will teach you the basics of TypeScript, including what it is, why it is useful, and the key features it offers.

<!-- more -->

TypeScript was created by Anders Hejlsberg, a prominent software engineer at Microsoft who’s also known for his work on C# and Delphi. TypeScript was designed to enhance JavaScript by adding static types, making it easier to build and maintain large-scale applications.

We’ll start by using Vite to integrate TypeScript with a React project. Then you’ll learn about key concepts like type annotations, type inference, and how to handle objects and arrays.

After that, we’ll explore advanced topics such as union and any types, readonly properties, functions with specific parameter and return types, generics for flexible and reusable code, and the distinctive roles of type aliases and interfaces.

I’ll provide detailed examples and explanations throughout the handbook to give you a comprehensive understanding of how TypeScript's features can improve JavaScript development.

### Prerequisites

I assume you are already familiar with the fundamentals of JavaScript and React. So in this handbook, I won’t be going into in-depth explanations of certain concepts, such as the file structure when scaffolding projects.

## Table of Contents

1.  [What is TypeScript?][1]
    
2.  [Setting Up the Project][2]
    
3.  [Type Annotations and Type Inference][3]
    
    -   [Commonly Used Type Annotations][4]
        
    -   [Type Inference][5]
        
4.  [The Union and Any Types][6]
    
    -   [Be Careful When Using any in TypeScript][7]
        
    -   [Using unknown as a Safer Alternative to any in TypeScript][8]
        
5.  [Objects in TypeScript][9]
    
    -   [The Problem of Mutability][10]
        
    -   [Readonly on Object Properties][11]
        
    -   [Readonly Arrays][12]
        
6.  [Function Params And Function Returns][13]
    
    -   [The Risks of Using any][14]
        
    -   [Use Explicit Types for Parameters and Return Values][15]
        
    -   [Using unknown as a Safer Alternative to any in TypeScript][16]
        
    -   [Handling Optional, Default in TypeScript][17]
        
7.  [Rest Parameters][18]
    
8.  [Objects as Parameters in TypeScript][19]
    
9.  [Type Aliases in TypeScript][20]
    
    -   [What is an Intersection Type in TypeScript?][21]
10.  [Interfaces in TypeScript][22]
    
11.  [Tuples and Enums][23]
    
12.  [Type Assertion, Type Unknown, and Type Never in TypeScript][24]
    
13.  [Generics in TypeScript][25]
    
14.  [Conclusion][26]
    

## What is TypeScript?

Before diving into what TypeScript is, it's important to understand why it was created. JavaScript is a **loosely typed language**, meaning variables are defined and their types are determined at runtime. This flexibility can lead to unexpected behavior, especially in larger projects.

For example, you might accidentally assign a value of the wrong type to a variable, resulting in errors that you only discover when the code is executed.

Here’s an example of JavaScript that demonstrates this issue:

```
let userName = "Alice";
userName = 42; // No error during assignment, but this might break the code later.

function greetUser(name) {
  console.log("Hello, " + name.toUpperCase()); // Error at runtime if `name` is not a string.
}

greetUser(userName); // Throws an error because `userName` is a number, not a string.
```

This error can be challenging to debug, as it only surfaces at runtime, making large projects harder to maintain and more prone to bugs.

This is where TypeScript comes into the picture. TypeScript is a programming language that builds on JavaScript by adding **static typing**. Static typing means you can explicitly specify the types of variables, function arguments, return values, and more. Unlike **dynamic typing**, where types are determined at runtime, static typing allows TypeScript to catch type-related errors early during development, improving code quality and reducing bugs.

For example, here’s the same code written in TypeScript:

```
let userName: string = "Alice";
// userName = 42; // Error: Type 'number' is not assignable to type 'string'.

function greetUser(name: string): void {
  console.log("Hello, " + name.toUpperCase());
}

greetUser(userName); // Works perfectly since `userName` is correctly typed.
```

## Setting Up the Project

We will be using [Vite][27] to set up our TypeScript project. Vite is a modern build tool designed to offer a faster and leaner development experience for web projects.

To get started, run the following command to create a new Vite project with TypeScript support:

```
npm create vite@latest
```

Then enter a name for your project (you may choose any name you prefer). Follow the instructions carefully in the subsequent steps

![creating a project with npm create vite@latest](https://cdn.hashnode.com/res/hashnode/image/upload/v1736769678848/93e22821-6044-4b06-b5ba-86cd3f01ca98.png)

Select your project template by choosing ‘React’ from the available options. We will be using React with TypeScript for this project's development.

![project template when you run, create vite@latest](https://cdn.hashnode.com/res/hashnode/image/upload/v1736769912180/e94dc70c-32e2-4f9f-89cc-d70d35e3a86e.png)

When prompted for a variant selection, choose 'TypeScript' from the available options.

![variant selection of typescript, in create vite@latest template](https://cdn.hashnode.com/res/hashnode/image/upload/v1736770059262/d605726e-8d4f-4e73-8fb7-3854ce0b4e72.png)

After completing these steps, you will be prompted to navigate to your project directory and run `npm install`. You can use any code editor of your choice. For this example, I will be using VS Code.

![e3f81f8b-19b7-4fb6-a439-2f24e3f55df5](https://cdn.hashnode.com/res/hashnode/image/upload/v1736771043869/e3f81f8b-19b7-4fb6-a439-2f24e3f55df5.png)

![overview of your project in vscode and running npm install to install project dependencies](https://cdn.hashnode.com/res/hashnode/image/upload/v1736771426441/4c524149-4557-40bf-b50a-79400c6c3c91.png)

After running `npm install`, run `npm run dev` to start the project on the local server. Once that’s up and running, we are ready to dive into learning TypeScript concepts.

![our landing page after running npm run dev in our project](https://cdn.hashnode.com/res/hashnode/image/upload/v1736772238962/36f9523c-d316-43e3-ae05-e1ebfa9398f1.png)

But first, let's create our first TypeScript file, `test.ts` (you can choose to use `.ts` or `.tsx`). Create the `test.ts` file inside the `src` folder of your project, and add the following code to log a test message:

`test.ts`

```
console.log('Testing our first TypeScript file');
```

To view this in the console, import the `test.ts` file into the `main.tsx` file located in the `src` folder.

![highlighting the main.tsx and test.tsx file](https://cdn.hashnode.com/res/hashnode/image/upload/v1736773745661/8492e586-7bc0-44a8-ac54-fb576119cdea.png)

`main.tsx`

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./test.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

To view the log in the console, make sure to import the `test.ts` file into the `main.tsx` file located in the `src` folder. After that, check the console of your project running on the local server, and you should see the logged message displayed there.

**Voilà!**

![our result in console.log](https://cdn.hashnode.com/res/hashnode/image/upload/v1736774231199/9a270631-0639-40e0-84de-513143b4478d.png)

Now let’s get down to the real business of learning TypeScript.

## Type Annotations and Type Inference

### What are Type Annotations?

Type annotations in TypeScript enable you to explicitly specify the type of a variable. This ensures that the variable is assigned only values of the specified type, enhancing type safety and making your code easier to maintain.

To define a type annotation in TypeScript, you simply append a colon `:` followed by the desired type after the variable name. This allows you to specify the type that a variable will hold, adding a layer of clarity and precision to your code. For instance, let’s specify a variable of type `string` in our `test.ts` file, ensuring that only a string value is assigned:

`test.ts`

```
let name: string = 'Stephen';
```

In this example, we have declared a variable `name` and specified that its type must be `string`. TypeScript will now ensure that only a string value can be assigned to `name`.

**📄 Note:** All code snippets are in a file called `test.ts` for demonstration purposes. You can rename the file or copy the snippets into your TypeScript project as needed. I don’t follow consistent file naming in this article.

### Commonly Used Type Annotations

Here are some of the most commonly used type annotations in TypeScript:

-   `string`: Represents text values.
    
-   `number`: Represents numeric values (both integers and floating-point numbers).
    
-   `boolean`: Represents a value that is either `true` or `false`.
    
-   `any`: A fallback type that allows any value to be assigned to a variable, disabling type checking.
    
-   `void`: Typically used for functions that do not return a value.
    
-   `null` and `undefined`: Used to represent the absence of a value.
    

Once you define a variable with a type annotation, TypeScript ensures that it can only hold values of that specified type. You can also access the methods associated with that type. For example, if you declare a string variable, TypeScript provides access to all string methods, such as `.toUpperCase()`.

`test.ts`

```
let name: string = 'Stephen';  // Type is explicitly set as string
name = 'John';  // This is fine, as it's still a string

// Accessing string method
console.log(name.toUpperCase());  // Output: JOHN
```

Here, the variable `name` is re-assigned to a new string value, `'John'`. Since the type is still `string`, you can use string methods like `.toUpperCase()` without any issues.

You can also define arrays with type annotations. This ensures that the array only contains elements of a specific type. For example, if you define an array of numbers, TypeScript will allow you to use array methods that are specific to numbers.

`test.ts`

```
let numbers: number[] = [1, 2, 3];  // Type is explicitly set as an array of numbers
numbers.push(4);  // This is fine, as 4 is a number

// Accessing array method
console.log(numbers.length);  // Output: 4
```

In this case, `numbers` is an array of numbers. You can safely use array methods like `.push()` and `.length`, which are valid for number arrays.

If you try to reassign a variable to a value of an incompatible type, TypeScript will catch the error immediately during development, before the code is even run.

For instance:

`test.ts`

```
let name: string = 'Stephen';
name = 2;  // Error: Type '2' is not assignable to type 'string'
```

Here, you're trying to assign a number (`2`) to a variable that was previously declared as a string. TypeScript throws an error immediately, indicating that a number cannot be assigned to a string variable.

Similarly, for an array:

`test.ts`

```
let numbers: number[] = [1, 2, 3];
numbers = 'Hello';  // Error: Type 'string' is not assignable to type 'number[]'
```

Here, you're trying to assign a string (`'Hello'`) to a variable that was previously declared as an array of numbers. TypeScript catches this error and highlights the mismatch.

Experiment with different types to see how TypeScript enforces type safety. For example, try using boolean, number, or other types in your arrays and variables.

Now that you've seen how type annotations work with strings and arrays, it's time to experiment with other types. TypeScript allows you to define arrays and variables with various types, ensuring type safety across your code. Try creating arrays with other data types such as `boolean`, `number`.

#### Example: Boolean Array

`test.ts`

```
let booleanArray: Array<boolean> = [true, false, true];

// Accessing array method
console.log(booleanArray.length);  // Output: 3
```

In this example, the array `booleanArray` is explicitly declared to hold only `boolean` values. Try adding `string` or `number` elements to see how TypeScript catches type errors.

#### Example: Number Array

`test.ts`

```
let numberArray: Array<number> = [1, 2, 3];

// Accessing array method
console.log(numberArray[0] * 2);  // Output: 2
```

Feel free to play around with these examples and observe how TypeScript provides strong type safety and catches errors in real time. The more you explore, the better you'll understand how to leverage TypeScript's type system to write cleaner and more reliable code.

### What is Type Inference?

Type inference in TypeScript is a powerful feature that allows the TypeScript compiler to automatically determine the type of a variable based on the value assigned to it. TypeScript is designed to be smart enough to infer types in many cases, reducing the need for explicit type annotations. This enhances code conciseness while maintaining the benefits of type safety.

With type inference, TypeScript can predict the type of a variable by analyzing the value assigned to it, ensuring that you don’t need to specify the type manually, yet still receive all the advantages of type checking.

##### **Example 1**: Inferred String Type

`test.ts`

```
let message = "Hello, TypeScript!";  // TypeScript infers 'message' as a string
console.log(message.toUpperCase());  // Output: HELLO, TYPESCRIPT!
```

In this example, TypeScript automatically infers the type of `message` as a `string` because the assigned value is a string.

##### **Example 2**: Inferred Number Type

`test.ts`

```
let count = 42;  // TypeScript infers 'count' as a number
console.log(count + 8);  // Output: 50
```

Here, TypeScript infers the type of `count` as a `number` based on the value `42`, and you can perform arithmetic operations on it without type errors.

##### **Example 3:** Inferred Array Type

`test.ts`

```
let numbers = [1, 2, 3];  // TypeScript infers 'numbers' as an array of numbers (number[])
console.log(numbers.length);  // Output: 3
```

In this case, TypeScript infers that `numbers` is an array of type `number[]` because the array contains numbers.

#### **Incorrect Examples:**

##### **Example 4**: Mismatched Type Assignment

`test.ts`

```
let count = 42;  // TypeScript infers 'count' as a number
count = "Not a number";  // Error: Type 'string' is not assignable to type 'number'
```

Even though TypeScript inferred that `count` is a number, attempting to assign a `string` to it results in an error. TypeScript catches this as a type mismatch because `count` was initially inferred as a `number`.

##### **Example 5:** Inferred Array Type with Mixed Types

`test.ts`

```
let mixedArray = [1, "apple", true];  // TypeScript infers 'mixedArray' as (string | number | boolean)[]
console.log(mixedArray[0].toFixed(2));  // Error: Property 'toFixed' does not exist on type 'string | boolean'.
```

In this example, TypeScript infers `mixedArray` as an array containing multiple types (`string | number | boolean`). While this is allowed, accessing methods like `.toFixed()` on elements may result in errors because not all array elements support that method (for example, `boolean` and `string` do not have `.toFixed()`).

##### **Example 6**: Inferred Type with Incorrect Operation

`test.ts`

```
let price = 99.99;  // TypeScript infers 'price' as a number
price = "Free";  // Error: Type 'string' is not assignable to type 'number'
```

Here, TypeScript infers that `price` is a `number`, but trying to reassign it to a `string` leads to a type error, ensuring that the variable maintains its inferred type.

## The Union and Any Types

In earlier examples, we used mixed types. Now, let’s properly define these concepts and expand on them with various examples:

### **What are Union Types?**

Union types allow variables or parameters to hold multiple specific types, offering flexibility while maintaining type safety. You define a union type using the pipe (`|`) symbol.

**Simple Union Type:**

`test.ts`

```
let value: string | number;

value = "Hello";  // ✅ Correct
console.log(value.toUpperCase());  // Output: HELLO

value = 42;  // ✅ Correct
console.log(value + 8);  // Output: 50

value = true;  // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.
```

In this example, `value` can either be a string or a number. Any other type of assignment results in a type error.

**Union Type in Function Parameters:**

`test.ts`

```
function printId(id: string | number): void {
  console.log(`Your ID is: ${id}`);
}

printId(12345);      // ✅ Correct
printId("abc123");   // ✅ Correct
printId(true);       // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.
```

Here, the `id` **the** parameter can only accept a `string` or `number`, ensuring type safety while providing flexibility.

**Custom Union Type:**

You can create custom types using the `type` keyword for better readability and reusability.

`test.ts`

```
type ID = string | number;

function getUser(id: ID): void {
  console.log(`Fetching user with ID: ${id}`);
}

getUser(12345);      // ✅ Correct
getUser("abc123");   // ✅ Correct
getUser(true);       // ❌ Error: Type 'boolean' is not assignable to type 'string | number'.
```

### **What is the** `any` Type?

The `any` type is the most flexible type in TypeScript. It allows a variable to hold any type of value, disabling type-checking for that variable.

The `any` type sacrifices type safety for maximum flexibility. This is useful in scenarios where you are unsure about the type or you’re working with dynamic data.

##### **Example 1**: Array of any Type

`test.ts`

```
let mixedArray: any[] = [1, "apple", true];

console.log(mixedArray[0]);  // Output: 1
console.log(mixedArray[1].toUpperCase());  // Output: APPLE
console.log(mixedArray[2]);  // Output: true
```

Here, the `mixedArray` can hold elements of any type without triggering type errors.

#### **When to Use Union vs.** `any`

-   **Union Types**: Use union types when the possible values are known or constrained to a few specific types. It provides type safety and avoids runtime errors.
    
-   `any` **Type**: Use `any` as a last resort when the type is unknown or dynamic.
    

Just remember that overusing `any` can negate the benefits of TypeScript’s type system. By carefully choosing between union types and `any`, you can write TypeScript code that is both flexible and type-safe.

### **Be Careful When Using** `any` in TypeScript

The `any` type in TypeScript is a powerful yet risky feature. While this flexibility can sometimes be useful, it often leads to unintended behaviors or errors that TypeScript cannot catch at compile time.

Let’s explore an example to understand the potential pitfalls.

Here’s a function that demonstrates the risks:

```
function combineValues(value: any) {
  let anotherValue: number = 10;

  return value + anotherValue;
}

const result = combineValues(5); // No error here.
const anotherResult = result;

// Attempting to call a method on `anotherResult`
anotherResult.someUndefinedMethod(); // No compile-time error!
```

What happened here?

First, we didn’t have any type checking with `any`. The parameter `value` is of type `any`, meaning it can hold any value: a string, number, object, and so on. TypeScript skips enforcing type checks on `value`.

Second, the return value assumes `any`. Since `value` is `any`, the return type of `combineValues` is also inferred as `any`.

Third, there’s no error when calling an undefined method. After the function is called, `anotherResult` is also treated as `any`. TypeScript allows calling any method (even non-existent ones) on a variable of type `any` without throwing errors. In this case, `someUndefinedMethod` doesn’t exist, but TypeScript won’t warn you.

#### **The Risks of Using** `any`

1.  **Loss of type safety**: You lose the benefits of TypeScript’s type system, like compile-time error checking. Potential runtime errors can go unnoticed during development.
    
2.  **Accidental behavior**: The function could accept unexpected inputs (e.g., strings, arrays, or objects), leading to incorrect results or crashes.
    
3.  **Debugging complexity**: Since the type is not enforced, debugging issues caused by incorrect types becomes more challenging.
    

### **How to Fix This**

#### **Use Explicit Types for Parameters and Return Values**

Here’s an improved version with proper type annotations:

```
function combineValues(value: number): number {
  let anotherValue: number = 10;

  return value + anotherValue;
}

const result = combineValues(5);
// result.someUndefinedMethod(); // Error: Property 'someUndefinedMethod' does not exist on type 'number'.
```

1.  **Parameter type**: The function now explicitly expects a `number` for the `value` parameter.
    
2.  **Return type**: The return type is declared as `number`, ensuring that only numbers are returned.
    

This ensures that TypeScript will throw errors if you try to pass invalid types or call methods that don’t exist on the return value.

#### **Key Takeaways**

-   The `any` type disables TypeScript’s type checking, making your code vulnerable to runtime errors.
    
-   Avoid using `any` whenever possible. Instead, use explicit types or stricter alternatives like `unknown` (if the type cannot be determined upfront).
    
-   Explicit types enhance code clarity, maintainability, and reliability by leveraging TypeScript’s compile-time checks.
    

If you’re tempted to use `any` because the type isn’t clear, consider refactoring your code or using `unknown` combined with type guards for better safety.

### **Using** `unknown` as a Safer Alternative to `any` in TypeScript

The `unknown` type in TypeScript is a stricter and safer alternative to `any`. While both `any` and `unknown` can hold values of any type, `unknown` requires you to perform type checks before using the value. This ensures greater type safety while still offering flexibility.

```
function processValue(input: unknown): string {
  if (typeof input === 'string') {
    return `The value is a string: ${input}`;
  } else if (typeof input === 'number') {
    return `The value is a number: ${input}`;
  } else {
    return 'The value is of an unknown type';
  }
}

console.log(processValue('Hello, TypeScript!')); // The value is a string: Hello, TypeScript!
console.log(processValue(42)); // The value is a number: 42
console.log(processValue(true)); // The value is of an unknown type
```

Using `unknown` instead of any has a few benefits:

1.  **Type-safe handling**: Unlike `any`, `unknown` forces you to check the type of the value before using it. This prevents runtime errors caused by invalid operations on unexpected types.
    
2.  **Explicit type narrowing**: TypeScript requires you to narrow `unknown` to a specific type (e.g., `string`, `number`) using type guards (`typeof`, `instanceof`, etc.) before you can access its properties or methods.
    
3.  **Enhanced code clarity**: By using `unknown`, you signal to other developers that the type is deliberately uncertain and must be checked before use.
    

### **Key Differences:** `any` vs. `unknown`

| **Feature** | `any` | `unknown` |
| --- | --- | --- |
| Type checking | No type checking | Requires type checks before usage |
| Flexibility | Can be used directly | Must narrow the type first |
| Common use case | Quick fixes (discouraged) | Safely handling uncertain types |

So to summarize, use `unknown` over `any` whenever you deal with values of uncertain types. It helps maintain type safety and reduces the risk of errors. And try to avoid `any` unless necessary, as it bypasses TypeScript’s safety features.

## Objects in TypeScript

In TypeScript, objects are collections of properties where each property has a name (key) and a value. TypeScript allows us to define types for these properties, ensuring that objects conform to a specific structure.

`test.ts`

```
let car = { car: 'Toyota', brand: 2024 };
console.log(car);
```

This works fine because TypeScript infers the types for `car` and `brand` automatically based on the values provided.

### **Explicit Object Types**

When we want to define the shape of an object explicitly, we can use inline type annotations. This makes it clear what type each property should have. For example:

`test.ts`

```
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025 };
console.log(carOne);
```

This ensures that `carOne` always has a `car` property of type `string` and a `brand` property of type `number`.

Let’s say we want to add a `color` property to `carOne`:

`test.ts`

```
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025, color: 'Black' };
```

The code above will show a redline because `color` is not part of the defined type `{ car: string; brand: number }`. The error will look something like this:

![8a3d48dd-3ae0-4769-9e13-fa1f6ca37331](https://cdn.hashnode.com/res/hashnode/image/upload/v1736933755272/8a3d48dd-3ae0-4769-9e13-fa1f6ca37331.png)

> Type '{ car: string; brand: number; color: string; }' is not assignable to type '{ car: string; brand: number; }'. Object literal may only specify known properties, and 'color' does not exist in type '{ car: string; brand: number; }'.

Similarly, if you try to change the type of `brand` to a `string`:

`test.ts`

```
carOne.brand = "2026";
```

You’ll get another error:

> Type 'string' is not assignable to type 'number'.

Having to write the full object type each time can get repetitive, especially for objects with many properties or when the same structure is used in multiple places. But don’t worry – I’ll soon introduce **type aliases**, which make defining and reusing object types much simpler. You’ll see how to use type aliases to simplify object types and make your code cleaner. After that, we’ll explore how to apply these concepts in React.

For now, focus on understanding the basics and how TypeScript enforces structure. It’s like peeking under the hood to see how TypeScript works behind the scenes.

### **Objects and Arrays**

In TypeScript, we often deal with arrays of objects, where each object has a specific structure. TypeScript helps ensure that every object in the array conforms to the expected type.

Imagine you are managing a grocery store, and you want to keep track of your vegetables. Here’s how you might start:

```
let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

let vegetables: { name: string; price: number }[] = [tomato, potato, carrot];
```

When TypeScript checks this code, it throws an error because `carrot` doesn’t have a `price` property. The expected type for each item in the `vegetables` array is `{ name: string; price: number }`. Since `carrot` is missing the `price`, TypeScript flags it as an error.

> Type '{ name: string; }' is not assignable to type '{ name: string; price: number; }'. Property 'price' is missing in type '{ name: string; }' but required in type '{ name: string; price: number; }'.

If the `price` is not always known or applicable (for example, maybe the carrot's price is still being negotiated), you can make the `price` property optional. You can do this by adding a `?` after the property name:

```
let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
```

Now, TypeScript knows that the `price` property is optional. This means objects in the `vegetables` array can either include `price` or omit it without causing errors.

When a property is optional, TypeScript allows it to be either:

1.  Present with the specified type.
    
2.  Absent altogether.
    

This flexibility eliminates the error for objects like `carrot`, which lack the `price` property.

### **The** `readonly` Modifier

In TypeScript, the `readonly` modifier is a great way to ensure that certain properties or entire objects remain immutable. This is particularly useful when you want to prevent accidental changes to your data.

Let’s continue with our vegetable store example and see how `readonly` works.

#### **The Problem of Mutability**

Imagine we have this setup:

```
let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
```

If someone accidentally tries to change the `name` of the `tomato` object or remove the `carrot` object from the `vegetables` array, TypeScript won’t complain:

```
vegetables[0].name = 'Cucumber'; // No error, but this could be unintended!
vegetables.pop(); // Removes the last vegetable, no warning.
```

We can use `readonly` to make these objects and arrays immutable, ensuring their original state cannot be altered.

### **Readonly on Object Properties**

To make the properties of each vegetable immutable, you can do the following:

```
let vegetables: { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];
```

Now, if you try to change the `name` or `price` of any vegetable, TypeScript throws an error:

```
typescriptCopy codevegetables[0].name = 'Cucumber'; // Error: Cannot assign to 'name' because it is a read-only
```

### **Readonly Arrays**

You can also make the entire `vegetables` array immutable by declaring it as `readonly`:

```
let vegetables: readonly { name: string; price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];
```

This prevents operations that modify the array itself, such as `push`, `pop`, or `splice`:

```
vegetables.push({ name: 'Onion', price: 3 }); // Error: Property 'push' does not exist on type 'readonly { name: string; price?: number; }[]'.
vegetables.pop(); // Error: Property 'pop' does not exist on type 'readonly { name: string; price?: number; }[]'.
```

### **When to Use** `readonly`

1.  **Immutable data**: Use `readonly` when you want to enforce immutability for objects or arrays, especially in contexts where data should remain constant (e.g., configurations, initial states, constants).
    
2.  **Prevent bugs**: Protect your data from accidental changes caused by other parts of the code.
    

### **Complete Example**

Here’s an updated example with `readonly` in action:

```
let vegetables: readonly { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];

// Attempting to modify data
vegetables[0].name = 'Cucumber'; // Error: Cannot assign to 'name' because it is a read-only property.
vegetables.pop(); // Error: Property 'pop' does not exist on type 'readonly { readonly name: string; readonly price?: number; }[]'.

console.log(vegetables);
```

Here’s what you should know about readonly, summarized:

-   `readonly` on properties ensures individual fields of objects cannot be changed.
    
-   `readonly` on arrays makes the array itself immutable, preventing operations like `push` and `pop`.
    
-   Combining both provides full immutability for objects within an array.
    

By using `readonly`, you create safer, more predictable code, reducing bugs caused by unintended mutations.

## Function Params and Function Returns

Functions in TypeScript allow you to define both the **parameters** and the **return types** explicitly. This ensures that the function behaves as expected and avoids runtime errors. Let's break this down with a simple example.

### **Inferred Return Type**

```
function arithmeticOp(price: number) {
  return price * 9;
}

const FP = arithmeticOp(2); // The result is 18.
```

1.  The parameter `price` is explicitly defined as a `number`.
    
2.  The return type is not explicitly stated, but TypeScript **infers** it to be a `number` because the function returns `price * 9`, which is a numeric operation.
    

TypeScript is smart enough to infer the return type of the function based on the return statement. In this case, it correctly infers that `arithmeticOp` returns a `number`.

### **Explicit Return Type**

```
function arithmeticOp(price: number): number {
  return price * 9;
}

const FP = arithmeticOp(2); // The result is still 18.
```

1.  The function explicitly declares the return type as `number` using the syntax `functionName(parameters): returnType`.
    
2.  This doesn’t change the result but makes the function declaration clearer.
    

So why should you use explicit return types? Well, first of all it improves code readability and ensures that future changes don’t accidentally alter the return type. And second, it serves as documentation for other developers.

### **Return Type Mismatch**

```
function arithmeticOp(price: number): number {
  if (hasDiscount) {
    return 'discount'; // Error here!
  }
  return price * 9;
}

const FP = arithmeticOp(2);
```

In the code above, the return type is explicitly declared as `number`. But the function attempts to return a `string` (`'discount'`) in certain cases. This causes TypeScript to throw an error:

> Type 'string' is not assignable to type 'number'.

This happens because TypeScript enforces the declared return type. If you say a function returns a `number`, it **must always** return a `number`, regardless of the logic inside the function.

If you want the function to return multiple types (for example, `number` or `string`), use a **union type**:

```
function arithmeticOp(price: number): number | string {
  if (hasDiscount) {
    return 'discount'; // Now valid!
  }
  return price * 9;
}

const FP = arithmeticOp(2);
```

The return type `number | string` tells TypeScript that the function can return either a `number` or a `string`. This resolves the type mismatch error.

#### Key Takeaways:

1.  TypeScript **infers** return types when they are not explicitly defined but encourages explicit return types for clarity and maintainability.
    
2.  The declared return type ensures the function only returns values of the specified type.
    
3.  Type mismatches, like returning a `string` from a function expected to return a `number`, result in TypeScript errors.
    
4.  Union types (`type1 | type2`) allow functions to return multiple types when needed.
    

### **Handling Optional, Default in TypeScript**

When working with TypeScript functions, specifying parameter behavior is crucial for flexibility and preventing runtime errors. Let's explore how to handle optional and default parameters effectively with practical examples.

### Example 1: Understanding the Problem with Missing Arguments

Consider the following function:

```
function calculateFinalScore(baseScore: number, deductions: number): number {
  return baseScore - deductions;
}

let scoreWithDeductions = calculateFinalScore(50, 10);
let scoreWithoutDeductions = calculateFinalScore(50); // Error
```

The first call to `calculateFinalScore` works perfectly. But the second call throws a TypeScript error:

```
⚠ Error (TS2554) | Expected 2 arguments, but got 1.
Tutorial.ts(7, 47): An argument for 'deductions' was not provided.
```

This happens because TypeScript expects both `baseScore` and `deductions` to be provided, as they are both required parameters. If the `deductions` value is omitted, TypeScript will not allow the function call.

### Example 2: Fixing the Issue with Default Parameters

To resolve this issue, we can define a default value for the `deductions` parameter. Default parameters provide a fallback value if no argument is passed.

```
function calculateFinalScore(baseScore: number, deductions: number = 0): number {
  return baseScore - deductions;
}

let scoreWithDeductions = calculateFinalScore(50, 10); // 40
let scoreWithoutDeductions = calculateFinalScore(50);  // 50
```

In this updated example:

-   The `deductions` parameter defaults to `0` if it is not explicitly provided.
    
-   Both calls now work without errors.
    

### Why This Solution Works

By defining `deductions` as a default parameter, TypeScript ensures that the function has all the arguments it needs to execute, even if some are omitted in the call. This approach increases the flexibility of the function while maintaining type safety.

Use default parameters when a value is required for the function to work but can safely have a fallback value if omitted. This approach improves code clarity and reduces the likelihood of runtime errors.

## Rest Parameters

Rest parameters in TypeScript let you handle multiple arguments without knowing how many you’ll get in advance. You can pass as many arguments as you want—TypeScript will handle them. They’re perfect for situations where the number of inputs isn’t fixed.

To use rest parameters, you write three dots (`...`) before the parameter name, which gathers all the extra arguments into an array.

Let’s say you want to combine multiple words into a single sentence:

```
function joinWords(...words: string[]): string {
  return words.join(" ");
}

let sentence = joinWords("TypeScript", "makes", "coding", "fun");
console.log(sentence); // "TypeScript makes coding fun"
```

-   `...words` collects all the arguments into an array (`["TypeScript", "makes", "coding", "fun"]`).
    
-   The `join` method combines them into a single string, separated by spaces.
    

### Rest Parameters with Numbers

Now, suppose you want to add multiple numbers:

```
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

let total = sumNumbers(10, 20, 30);
console.log(total); // 60
```

-   `...numbers` gathers all the numbers into an array (`[10, 20, 30]`).
    
-   The `reduce` method adds them together to get the total.
    

We can also use rest parameters to merge multiple arrays into one:

```
function mergeArrays(...arrays: number[][]): number[] {
  return arrays.flat();
}

let combined = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

-   `...arrays` collects each argument as an array into an array of arrays (`[[1, 2], [3, 4], [5, 6]]`).
    
-   The `flat` method combines them into one array.
    

Rest parameters must always come last in the parameter list. For example:

```
function example(a: string, ...others: number[]): void {
  console.log(a, others);
}
```

This ensures all remaining arguments go into the rest parameter.

## Objects as Parameters in TypeScript

In TypeScript, functions can accept objects as parameters. This is particularly useful when dealing with multiple related values.

### Using Objects with Specific Properties

Here's a function that takes an object with an `id` property and returns a new object:

```
function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
  return { id, isActive: id % 2 === 0 };
}

const firstEmployee = createEmployee({ id: 1 });
console.log(firstEmployee); // { id: 1, isActive: false }

const secondEmployee = createEmployee({ id: 2 });
console.log(secondEmployee); // { id: 2, isActive: true }
```

The function `createEmployee`:

-   Takes an object with a single property, `id`, as a parameter.
    
-   Returns a new object with two properties: `id` and `isActive`.
    

The `isActive` property is determined by checking if the `id` is even (`id % 2 === 0`).

**Destructuring** is used in the parameter:

-   `{ id }` extracts the `id` property from the input object directly.

### Accepting More Complex Objects

Now, let’s look at a function that takes an object with multiple properties:

```
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course, ${student.name}!`);
}

const newStudent = { id: 1, name: "John" };
createStudent(newStudent); // "Welcome to the course, John!"
```

The function `createStudent`:

-   Accepts an object with two properties: `id` and `name`.
    
-   Logs a welcome message using the `name` property.
    

The `newStudent` object matches the structure expected by the function, so it’s passed directly.

### Why Use Objects as Parameters?

First of all, functions with objects as parameters are easier to read, especially when dealing with multiple related values. Also, using destructuring you can extract only the needed properties from an object, making the code more concise. And finally, objects can be reused across functions without creating new ones every time.

### Excess Property Checks in TypeScript

In TypeScript, excess property checks help ensure that objects passed to functions only contain properties defined in the function’s parameter type. If there are extra properties, TypeScript will raise an error. Let's see how this works with simple examples.

#### 1\. Extra Property Error

Here’s a function that accepts an object with `id` and `name`, but no extra properties:

```
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome, ${student.name}!`);
}

const newStudent = { id: 1, name: "John", age: 20 }; // Extra property 'age'

createStudent(newStudent); // Error: 'age' is not expected
```

TypeScript gives an error because the `age` property is not part of the expected object structure.

#### 2\. Fixing the Error

To avoid the error, just remove any extra properties:

```
const validStudent = { id: 1, name: "John" };
createStudent(validStudent); // This works fine
```

This works because the object only has the expected properties: `id` and `name`.

#### 3\. Using Type Assertion (Not Recommended)

If you really need to pass an object with extra properties, you can use **type assertion** to tell TypeScript to ignore the extra properties:

```
const studentWithExtras = { id: 1, name: "John", age: 20 };
createStudent(studentWithExtras as { id: number; name: string }); // Bypasses the error
```

While this works, it’s better to match the expected structure instead of using type assertion.

-   TypeScript expects objects to match the exact shape of the parameter type.
    
-   Excess properties cause errors to ensure the structure is correct.
    
-   Fix the object or use type assertion (carefully) if you need extra properties.
    

Excess property checks help keep your code safe and ensure only the right data is passed to functions.

## Type Aliases in TypeScript

A **type alias** in TypeScript is essentially a **short name** or an **alternative name** for an existing type. It allows you to define a simpler or more readable name for a type that may be complex or used repeatedly in your code.

This doesn't create a new type, but instead gives an existing type a new identifier. The functionality of the code doesn't change when using a type alias – it simply makes your code more readable and reusable.

Here’s an example before using a type alias:

```
// Without type alias
function getUserInfo(user: UserInfo) {
  console.log(`User Info: 
    Name: ${user.name}, 
    Age: ${user.age}, 
    Address: ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

Now, let’s use a type alias for the function parameters to make the code more readable:

```
// Using type alias
type UserInfo = { name: string, age: number, address: string };

function getUserInfo(user: UserInfo) {
  console.log(`User Info: 
    Name: ${user.name}, 
    Age: ${user.age}, 
    Address: ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

In the example above:

-   Before the type alias, we define the parameters separately within the function.
    
-   After defining a type alias (`UserInfo`), we use it in the function parameter to make the function signature simpler and more readable.
    

This **doesn’t change the functionality** of the code. It just makes it easier to work with by using the alias. The alias acts as a reusable reference to a complex type, and if the shape of the `UserInfo` changes, we only need to update it in one place, making the code easier to maintain.

### How to Use Type Aliases

A type alias allows you to define a new name for a type. This new name can represent a primitive type, an object structure, or even a union of types. The main benefit is to make your code more readable, reusable, and prevent mistakes.

You define a type alias using the `type` keyword followed by a name and the structure of the type.

```
ttype TypeName = TypeStructure;
```

For example, let’s create a type alias for a User object:

```
type User = {
  name: string;
  age: number;
```

This means `User` is a type that expects an object with two properties:

-   `name` should be a string.
    
-   `age` should be a number.
    

### Why Use Type Aliases?

There are several reasons to use type aliases in your code. First of all, a type alias explicitly defines the structure of an object, so anyone reading the code knows exactly what to expect. Second, you can reuse the `User` type anywhere in your code without repeating the structure. And finally, TypeScript will check that any object assigned to the `User` type has the required properties with the correct types.

#### with Type Alias:

```
type User = {
  name: string;
  age: number;
};

function getUserDetails(user: User): string {
  return `${user.name} (${user.age} years old)`;
}

const user: User = { name: "Alice", age: 30 };
console.log(getUserDetails(user)); // "Alice (30 years old)"
```

In this example, we defined the `User` type alias to specify that `user` objects must have a `name` of type `string` and `age` of type `number`.

TypeScript will catch errors if you attempt to assign an object that does not match this structure, like this:

```
// This will result in a TypeScript error:
const invalidUser: User = { name: "Alice" }; // Missing 'age' property
```

### What is an **Intersection Type** in TypeScript?

An **Intersection Type** is a powerful feature in TypeScript that allows you to combine multiple types into one. When you create an intersection, the resulting type must have **all the properties** from each of the types you intersect.

You can combine any number of types, and the resulting type must satisfy every condition of all the original types.

#### Syntax of Intersection Type

To define an intersection type, you use the `&` operator to combine two or more types.

```
type TypeA & TypeB;
```

#### Example of an Intersection Type

Imagine you want to extend the `User` type to include the user’s address. Instead of modifying the original `User` type, you can use an **intersection type** to combine `User` and `Address`.

```
type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address; // Intersection of User and Address
```

Now, `UserWithAddress` will require both the properties from `User` and the properties from `Address`.

#### Example with a Function

Here’s how you can use this in a function:

```
type User = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address;

function getUserDetails(user: UserWithAddress): string {
  return `${user.name} (${user.age} years old), lives in ${user.city}, ${user.country}`;
}

const user: UserWithAddress = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA"
};

console.log(getUserDetails(user));
// Output: "Alice (30 years old), lives in New York, USA"
```

In this case:

-   `UserWithAddress` is an intersection type, which means the `user` object must have both the properties of `User` and `Address`.
    
-   TypeScript checks that both `name` and `age` (from `User`), as well as `city` and `country` (from `Address`), are present in the object.
    

If we missed any of these properties, TypeScript would show an error.

```
// This will result in a TypeScript error:
const incompleteUser: UserWithAddress = {
  name: "Alice",
  age: 30,
  city: "New York"
}; // Missing 'country'
```

### Why Use **Intersection Types**?

Intersection types are useful in several scenarios. First, they let you extend existing types without modifying them, making the code more modular and flexible. They’re also useful when you need to merge multiple different structures into one, such as combining a `User` with an `Address` or `OrderDetails`. And you can easily see all the required properties that an object must have when you use intersection types.

### Type Aliases vs Intersection Types:

| Feature | Type Alias | Intersection Type |
| --- | --- | --- |
| **Definition** | Defines a single type. | Combines multiple types into one. |
| **Use case** | Create reusable types for objects or primitives. | Combine multiple types, requiring all properties. |
| **Combining Types** | Not used for combining types. | Used to combine multiple types. |
| **Example** | `type User = { name: string, age: number };` | `type UserWithAddress = User & Address;` |

### When to Use Each One

-   Use type aliases when you want to define a **single type** for an object, function, or other data structure. They help with clarity, reuse, and type safety.
    
-   Use intersection types when you want to **combine multiple types** into one. It’s ideal for scenarios where an object needs to fulfill multiple contracts at once, such as when combining different types or extending the functionality of an existing type.
    

By leveraging Type Alias and Intersection Types in TypeScript, your code becomes easier to understand, safer, and more maintainable. These features provide structure to your data, helping to catch bugs earlier.

## Interfaces in TypeScript

In TypeScript, an **interface** is a way to define the structure of an object, describing its properties and their types. Interfaces are used to enforce type-checking in your code, ensuring that objects adhere to a specific structure. Similar to type aliases, interfaces make your code more readable, reusable, and maintainable.

### What is an Interface?

An interface is a blueprint for an object, defining what properties and methods it should have. Interfaces can be used to define custom types for objects, functions, or classes.

Here’s a basic example:

```
interface User {
  name: string;
  age: number;
  address: string;
}

function getUserInfo(user: User): string {
  return `${user.name} (${user.age} years old) lives at ${user.address}`;
}

const user: User = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

console.log(getUserInfo(user)); // Output: Alice (30 years old) lives at 123 Main St
```

In this example:

-   The `User` interface defines the shape of the object.
    
-   Any object of type `User` must have `name`, `age`, and `address` properties with the specified types.
    
-   The `getUserInfo` function ensures the `user` parameter adheres to the `User` interface.
    

### Similarities Between Interfaces and Type Aliases

-   Both interfaces and type aliases can define the structure of objects.
    
-   Both can be extended, though the syntax differs.
    
-   Both improve code readability and reusability.
    
-   In most cases, you can use interfaces or type aliases interchangeably to define object types.
    

Example with a type alias:

```
type User = {
  name: string;
  age: number;
  address: string;
};

const user: User = {
  name: "Bob",
  age: 25,
  address: "456 Elm St",
};
```

Both the `type` and `interface` achieve the same result in this scenario.

### Differences Between Interfaces and Type Aliases

Let’s also summarize their key differences:

| Feature | Interface | Type Alias |
| --- | --- | --- |
| **Syntax** | Uses `interface` keyword. | Uses `type` keyword. |
| **Extensibility** | Can be extended using `extends`. | Can be extended using intersection (`&`). |
| **Declaration Merging** | Supports merging across multiple declarations. | Does not support declaration merging. |
| **Union Types** | Cannot define union types. | Can define union types. |

### Extending with Interfaces and Type Aliases

**Extending Interfaces:**

```
interface Address {
  city: string;
  country: string;
}

interface User extends Address {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

**Using Type Alias for Intersection:**

```
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
} & Address;

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

Both approaches result in the same outcome, but the syntax is different.

### Advanced Concepts with Interfaces

**1\. Optional Properties:**

Interfaces can define properties as optional using the `?` symbol:

```
interface User {
  name: string;
  age?: number; // Optional
}

const user1: User = { name: "Alice" };
const user2: User = { name: "Bob", age: 25 };
```

**2\. Readonly Properties:**

Use the `readonly` modifier to make properties immutable:

```
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```

**3\. Function Types:**

Interfaces can define function signatures:

```
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
```

**4\. Index Signatures:**

Interfaces can define dynamic property names:

```
interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  hello: "world",
  name: "Alice",
};
```

**5\. Extending Multiple Interfaces:**

An interface can extend multiple interfaces:

```
interface A {
  propA: string;
}

interface B {
  propB: number;
}

interface C extends A, B {
  propC: boolean;
}

const obj: C = {
  propA: "Hello",
  propB: 42,
  propC: true,
};
```

### When to Use Interfaces vs. Type Aliases

-   Use **interfaces** when you need to define object shapes, especially if you plan to extend them. Also use interfaces if you need declaration merging, as type aliases don’t support it.
    
-   Use **type aliases** for more complex types, such as unions or intersections
    

## Tuples and Enums

A **tuple** in TypeScript is a special type of array that has a fixed number of elements, where each element can have a different type. Tuples ensure that the order and types of values remain consistent.

```
// A tuple with a string and a number
let user: [string, number] = ["Alice", 25];

console.log(user[0]); // Output: Alice
console.log(user[1]); // Output: 25
```

In this example, the tuple `user` contains a string (name) and a number (age). The order and types must be followed as defined.

#### **Tuple with Optional Elements:**

```
let person: [string, number, boolean?] = ["Bob", 30];

console.log(person); // Output: ["Bob", 30]
```

Here, the third element (boolean) is optional.

#### **Tuple with Read-Only Property:**

```
const coordinates: readonly [number, number] = [10, 20];

// coordinates[0] = 50; // Error: Cannot assign to '0' because it is a read-only tuple
```

The `readonly` keyword prevents modifying tuple values.

### **Enums**

An **enum** in TypeScript is a way to define a set of named constants. Enums make code more readable and help manage a fixed set of values.

#### **Numeric Enums (Default):**

```
enum Status {
  Pending,   // 0
  InProgress, // 1
  Completed,  // 2
}

console.log(Status.Pending);   // Output: 0
console.log(Status.Completed); // Output: 2
```

By default, TypeScript assigns numeric values starting from `0`.

#### **Custom Number Values in Enums:**

```
enum OrderStatus {
  Pending = 1,
  Shipped = 5,
  Delivered = 10,
}

console.log(OrderStatus.Shipped); // Output: 5
```

Here, custom values are assigned to each status.

#### **String Enums:**

```
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up); // Output: "UP"
```

String enums store fixed text values instead of numbers.

#### **Using Enums in a Function:**

```
function getStatusText(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "Order is pending.";
    case Status.InProgress:
      return "Order is in progress.";
    case Status.Completed:
      return "Order is completed.";
    default:
      return "Unknown status.";
  }
}

console.log(getStatusText(Status.InProgress)); // Output: "Order is in progress."
```

This function takes an enum value and returns a message based on the status.

Tuples define fixed-length arrays with different data types, while enums provide named constants for better readability, making your code more structured and type-safe.

## **Type Assertion, Type Unknown, and Type Never in TypeScript**

### **Type Assertion**

Type assertion tells TypeScript to treat a value as a specific type. It does not change the value but helps the compiler understand the type.

```
let value: unknown = "Hello, TypeScript!";

// Using type assertion to treat 'value' as a string
let strLength: number = (value as string).length;

console.log(strLength); // Output: 18
```

Here, `value` is initially `unknown`, but type assertion (`as string`) allows treating it as a string.

And here’s an alternative way to write type assertion:

```
let num = <number>(10);
console.log(num); // Output: 10
```

The `<number>` syntax also performs type assertion.

### **Type Unknown**

Let’s briefly revisit the `unknown` type now. Remember that it’s a safer alternative to `any` and can hold any value – but TypeScript requires type checking before using it.

```
let data: unknown;

data = "Hello";
data = 42;
data = true;

// Type checking before using the value
if (typeof data === "string") {
  console.log(data.toUpperCase()); // Works only if data is a string
}
```

Since `data` is `unknown`, TypeScript does not allow direct operations without checking its type first.

### **Type Never**

The `never` type represents values that never occur. It is often used for functions that never return or always throw an error.

```
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong!"); // This function never returns
```

Here, `throwError` does not return anything because it always throws an error.

#### **Example of Type Never in a Switch Case:**

```
type Status = "success" | "failure";

function checkStatus(status: Status): void {
  switch (status) {
    case "success":
      console.log("Operation was successful.");
      break;
    case "failure":
      console.log("Operation failed.");
      break;
    default:
      const unexpected: never = status; // Ensures all cases are handled
  }
}
```

This ensures that all possible values of `Status` are handled, preventing unexpected behavior.

Here’s a quick comparison of these different approaches:

| **Feature** | **Description** |
| --- | --- |
| **Type Assertion** | Tells TypeScript to treat a value as a specific type. |
| **Unknown Type** | Allows storing any value but requires type checking before use. |
| **Never Type** | Represents values that never occur, used for functions that never return. |

## Generics in TypeScript

Generics allow writing flexible, reusable, and type-safe code. Instead of specifying a fixed type, generics let a function, class, or interface work with multiple types while maintaining type safety.

### **Basic Generics**

A generic function works with any type while keeping type safety.

```
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // Output: "Hello"
console.log(identity<number>(42));      // Output: 42
```

Here, `<T>` is a **generic type parameter**, allowing `identity` to work with any type.

### **Generics with Arrays**

Generics help enforce type safety in arrays.

Here’s an example of reversing an array with generics:

```
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));  // Output: [3, 2, 1]
console.log(reverseArray<string>(["A", "B", "C"])); // Output: ["C", "B", "A"]
```

This ensures that the function always returns the same type of array it receives.

### **Generics with Interfaces**

Generics can be used in interfaces to define flexible object structures.

```
interface StorageBox<T> {
  content: T;
}

let numberBox: StorageBox<number> = { content: 100 };
let stringBox: StorageBox<string> = { content: "TypeScript" };

console.log(numberBox.content); // Output: 100
console.log(stringBox.content); // Output: "TypeScript"
```

Here, `StorageBox<T>` allows storing different types while ensuring consistency.

### **Generics with Classes**

Generics also work in classes, making them more reusable.

Here’s an example of a generic queue class:

```
lass Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

let numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(numberQueue.dequeue()); // Output: 10

let stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log(stringQueue.dequeue()); // Output: "Hello"
```

This class works with any type while maintaining type safety.

### **Generics with Multiple Type Parameters**

A function or class can accept more than one generic type.

Here’s an example of a function that swaps two values:

```
function swap<T, U>(first: T, second: U): [U, T] {
  return [second, first];
}

console.log(swap<string, number>("Age", 25)); // Output: [25, "Age"]
console.log(swap<boolean, string>(true, "Yes")); // Output: ["Yes", true]
```

Here, `<T, U>` allows the function to work with different types at the same time.

### **Generics with Constraints**

Sometimes, a generic type should follow certain rules. **Constraints** ensure that a type has specific properties.

Here’s an example of ensuring that a type has a `length` property:

```
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello"));   // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3
```

Here, `T extends { length: number }` ensures that `T` has a `length` property.

### **Advanced: Generics with the** `keyof` **Operator**

The `keyof` operator can be used to ensure valid property names.

Here’s an example of getting a property value by name:

```
typescriptCopyEditfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let user = { name: "Alice", age: 30 };

console.log(getProperty(user, "name")); // Output: "Alice"
console.log(getProperty(user, "age"));  // Output: 30
```

Here, `K extends keyof T` ensures that `key` is a valid property of `T`.

## Conclusion

In this handbook, you got an in-depth overview of how you can use TypeScript basics in React. We discussed important concepts like type annotations, type inference, and managing objects and arrays, showing how TypeScript improves code stability and maintenance.

We also covered some advanced topics such as union and any types, readonly properties, and the use of generics, type aliases, and interfaces. I hope the examples helped you understand how TypeScript can enhance your JavaScript development, making TS a valuable tool for building robust, large-scale applications.

[1]: heading-what-is-typescript
[2]: #heading-setting-up-the-project
[3]: heading-type-annotations-and-type-inference
[4]: heading-commonly-used-type-annotations
[5]: heading-type-inference
[6]: #heading-the-union-and-any-types
[7]: heading-be-careful-when-using-any-in-typescript
[8]: #heading-unknown-as-a-safer-alternative-to-any-in-typescript
[9]: #heading-objects-in-typescript
[10]: heading-the-problem-of-mutability
[11]: heading-readonly-on-object-properties
[12]: heading-readonly-arrays
[13]: heading-function-params-and-function-returns
[14]: heading-the-risks-of-using-any
[15]: heading-use-explicit-types-for-parameters-and-return-values
[16]: heading-using-unknown-as-a-safer-alternative-to-any-in-typescript
[17]: heading-handling-optional-default-in-typescript
[18]: heading-rest-parameters
[19]: heading-objects-as-parameters-in-typescript
[20]: #heading-type-aliases-in-typescript
[21]: heading-what-is-an-intersection-type-in-typescript
[22]: heading-interfaces-in-typescript
[23]: heading-tuples-and-enums
[24]: heading-type-assertion-type-unknown-and-type-never-in-typescript
[25]: #heading-generics-in-typescript
[26]: heading-conclusion
[27]: https://vite.dev/guide/