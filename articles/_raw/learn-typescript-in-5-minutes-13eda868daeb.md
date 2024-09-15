---
title: Learn TypeScript in 5 minutes - A tutorial for beginners
date: 2024-09-15T04:04:14.343Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/learn-typescript-in-5-minutes-13eda868daeb/
posteditor: ""
proofreader: ""
---

By Per Harald Borgen

<!-- more -->

![Image](https://www.freecodecamp.org/news/content/images/2019/06/Screenshot-2019-06-06-at-07.58.51.png) \_[Click here to check out the free Scrimba course on TypeScript][1]\_

TypeScript is a typed superset of JavaScript, aimed at making the language more scalable and reliable.

It’s open-source and has been maintained by Microsoft since they created it in 2012. However, TypeScript got its initial breakthrough as the core programming language in Angular 2. It’s been continuing to grow ever since, also in the React and Vue communities.

In this tutorial, you’ll learn the basics of TypeScript with the help of practical examples.

**We are also about to launch a free 22-part TypeScript course on Scrimba.** [**Leave your email here if you want early access!**][2]

Let’s get started.

### Installing TypeScript

Before we start coding, we need to install TypeScript on our computer. We’ll use `npm` for this, so just open the terminal and type the following command:

```
npm install -g typescript
```

Once it is installed, we can verify it by running the command `tsc -v` which will display the version of the TypeScript installed.

### Writing some code

Let’s create our first TypeScript file and write some code inside it. Open up your favourite IDE or Text Editor and create a file with the name of `first.ts` — For TypeScript files, we use the extension`.ts`

For now, we’re just going to write a few lines of plain old JavaScript, as all JavaScript code also is valid TypeScript code:

```
let a = 5;  
let b = 5;  
let c = a + b;

console.log(c);
```

The next step is to compile our TypeScript into plain JavaScript, as browsers want `.js` files to read.

### Compiling TypeScript

To compile, we’ll run the command of `tsc filename.ts`, which creates a JavaScript file with the same filename but a different extension, and which we eventually can pass on to our browsers.

So open up the terminal at the location of the file and run the following command:

```
tsc first.ts
```

**Tip**: If you want to compile all the TypeScript files inside any folder, use the command: `tsc *.ts`

### Data types

TypeScript — as its name suggests — is the typed version of JavaScript. This means we can specify types to different variables at the time of declaration. They will always hold the same type of data in that scope.

Typing is a very useful feature to ensure reliability and scalability. Type checking helps to ensure our code works as expected. Also, it helps in hunting down bugs and errors and properly documenting our code.

The syntax to assign a type to any variable is to write the name of the variable followed by a `:` sign, and then the name of the type followed by a `=` sign and the value of the variable.

There are three different types in TypeScript: the `any` type, the `Built-in` types, and the `User-defined` types. Let’s have a look at each of them.

#### any type

The `any` data type is the superset of all the data types in TypeScript. Giving any variable the type of `any` is equivalent to opting out of type checking for a variable.

```
let myVariable: any = 'This is a string'
```

#### Built-in types

These are the types which are built in TypeScript. They include `number`, `string`, `boolean`, `void`, `null` and `undefined`.

```
let num: number = 5;  
let name: string = 'Alex';  
let isPresent: boolean = true;
```

#### User-defined types

The `User-defined` types include `enum`, `class`, `interface`, `array`, and `tuple`. We will discuss some of these later in this article.

### Object-oriented programming

TypeScript supports all the features of object-oriented programming, such as classes and interfaces. This capability is a huge boost to JavaScript — it has always been struggling with its OOP functionality, especially since developers started using it for large scale applications.

#### Class

In object-oriented programming, a class is the template of objects. A class defines how an object would look like in terms of that object’s features and functionalities. A class also encapsulates data for the object.

TypeScript has built-in support for classes, which were unsupported by ES5 and earlier versions. This means we can use the `class` keyword to easily declare one.

```
class Car {

// fields  
  model: String;  
  doors: Number;  
  isElectric: Boolean;

constructor(model: String, doors: Number, isElectric: Boolean) {  
    this.model = model;  
    this.doors = doors;  
    this.isElectric = isElectric;  
  }

displayMake(): void {  
    console.log(`This car is ${this.model}`);  
  }

}
```

In the above example, we have declared a `Car` class, along with some of its properties, which we’re initializing in the `constructor`. We also have a method which would display some message using its property.

Let’s see how we can create a new instance of this class:

```
const Prius = new Car('Prius', 4, true);  
Prius.displayMake(); // This car is Prius
```

To create an object of a class, we use the keyword of `new` and call the constructor of the class and pass it the properties. Now this object `Prius` has its own properties of `model`, `doors`, and `isElectric`. The object also can call the method of `displayMake`, which would have access to the properties of `Prius`.

#### Interface

The concept of interfaces is another powerful feature of TypeScript, which allows you to define the structure of variables. An interface is like a syntactical contract to which an object should conform.

Interfaces are best described through an actual example. So, suppose we have an object of `Car`:

```
const Car = {  
  model: 'Prius',  
  make: 'Toyota',  
  display() => { console.log('hi'); }  
}
```

If we look at the object above and try to extract its signature, it would be:

```
{  
  model: String,  
  make: String,  
  display(): void  
}
```

If we want to reuse this signature, we can declare it in the form of an interface. To create an interface, we use the keyword `interface`.

```
interface ICar {  
  model: String,  
  make: String,  
  display(): void  
}

const Car: ICar = {  
  model: 'Prius',  
  make: 'Toyota',  
  display() => { console.log('hi'); }  
}
```

Here, we’ve declared an interface called `ICar` , and created an object `Car`. `Car` is now binding to the `ICar` interface, ensuring that the `Car` object defines all the properties which are in the interface.

### Conclusion

So I hope this gave you a quick glimpse into how TypeScript can make your JavaScript more stable and less prone to bugs.

TypeScript is gaining a lot of momentum in the world of web development. There’s also an increasing amount of React developers who are adopting it. TypeScript is definitely something any front-end developer in 2018 should be aware of.

Happy coding :)

---

Thanks for reading! My name is Per Borgen, I'm the co-founder of [Scrimba][3] – the easiest way to learn to code. You should check out our [responsive web design bootcamp][4] if want to learn to build modern website on a professional level.

![Image](https://www.freecodecamp.org/news/content/images/2019/08/bootcamp-banner.png) \_[Click here to get to the advanced bootcamp.][5]\_

[1]: https://scrimba.com/p/gintrototypescript?utm_source=freecodecamp.org&utm_medium=referral&utm_campaign=gintrototypescript_5_minute_article
[2]: http://eepurl.com/dyqJAj
[3]: https://scrimba.com?utm_source=freecodecamp.org&utm_medium=referral&utm_campaign=gintrototypescript_5_minute_article
[4]: https://scrimba.com/g/gresponsive?utm_source=freecodecamp.org&utm_medium=referral&utm_campaign=gintrototypescript_5_minute_article
[5]: https://scrimba.com/g/gresponsive?utm_source=freecodecamp.org&utm_medium=referral&utm_campaign=gintrototypescript_5_minute_article