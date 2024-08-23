---
title: Hello World in Java – Example Program
date: 2024-08-23T18:04:17.069Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/hello-world-in-java-example-program/
posteditor: ""
proofreader: ""
---

When you're learning a new programming language, you'll often see the first program called a "Hello World" program. It's used in most cases as a simple program for beginners.

<!-- more -->

I will assume that you're either reading this article as a beginner to the Java programming language or you're here to remember the good old Hello World program. Either way, it is going to be simple and straight to the point.

This article won't only include the hello world program in Java, we'll also talk about some terminologies you should know as a beginner learning to use Java.

To follow along, you'd need an integrated development environment (IDE). This is where you write and compile your code. You can install one on your PC or you can use any online IDE if you don't want to go through with the installation process.

## Hello World Program in Java

In this section, we'll create a simple Hello World program. We'll then break it down so you'd understand how it works.

Here's the code:

```
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
```

The code in the example above will print "Hello World!" in the console. This is commented out in the code. We'll talk about comments shortly.

Let's break down the code.

### Classes in Java

Classes act as the building blocks for the overall application in Java. You can have separate classes for different functionalities.

Classes can also have attributes and methods that define what the class is about and what it does.

An example would be a Human class. It can have attributes like hair color, height, and so on. It can have methods like run, eat, and sleep.

In our Hello World program, we have a class called `HelloWorld`. As a convention, always start the name of your classes with an uppercase letter.

To create a class, you use the `class` keyword, followed by the name of the class. Here's an example using our Hello World program:

```
class HelloWorld {

}
```

### The `main` Method in Java

Every Java program must have a `main` method. When the Java compiler starts executing our code, it starts from the `main` method.

Here's what the `main` method looks like:

```
public static void main(String[] args) {

    }
```

In order to keep this article simple, we won't discuss other keywords found above like `public`, `static`, and `void`.

### The `System.out.println()` Statement

We use the `System.out.println()` statement to print information to the console. The statement takes an argument. Arguments are written between the parentheses.

Here's the syntax:

```
System.out.println(Argument)
```

In our case, we passed in "Hello World!" as an argument. You'll notice that the text is surrounded by quotation marks. This tells the compiler that the argument is a `string`. Strings in programming are just a collection of characters – the same way we'd write regular text, but they must be in quotes.

Here's what our code looks like:

```
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
```

When we run this code, "Hello World" will be printed.

It won't be printed inside the code block above. I used `// Hello World!` as a way to show you the output of the code. That part of the code will not be executed by the compiler because it is a comment.

We use two forward slashes (`//`) to start a single line comment in Java.

## Conclusion

In this article, we talked about the Hello World program in Java.

We started by creating the program and then breaking it down to understand every line of code used to create the program.

We talked about classes, the `main` method, the `System.out.println()` statement, strings, and comments in Java.

Happy coding!