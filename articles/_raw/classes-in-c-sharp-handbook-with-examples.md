---
title: The C# Class Handbook – Types of Classes with Code Examples
date: 2025-07-17T02:15:02.960Z
author: Isaiah Clifford Opoku
authorURL: https://www.freecodecamp.org/news/author/Clifftech/
originalURL: https://www.freecodecamp.org/news/classes-in-c-sharp-handbook-with-examples/
posteditor: ""
proofreader: ""
---

Classes are the fundamental building blocks of object-oriented programming in C#. They allow you to create reusable and modular code by grouping related data and functions.

<!-- more -->

Different types of classes serve various purposes. For instance, organizing your logic to make your code easier to navigate is helpful when building an application.

You can group or separate your code into classes, and through inheritance, you can utilize different classes as needed. Classes help encapsulate your code, enabling you to reuse your logic in other application parts. Classes have many functionalities, and we will explore some of them in detail.

In this guide, we'll explore various types of classes in C# and how you can use them to create efficient and maintainable code.

## **Prerequisites**

Before we proceed, you should have the following:

1.  **Basic knowledge of C#**: you should understand C# syntax and basic programming constructs like variables, loops, and conditionals.
    
2.  **Familiarity with Object-Oriented Programming (OOP) concepts**: you should know how to work with classes, objects, inheritance, polymorphism, encapsulation, and abstraction.
    
3.  **Familiarity with access modifiers**: you should understand public, private, internal, and protected access modifiers.
    
4.  **Experience with C# IDE/Environment**: you should be able to write and run C# programs using an IDE like Visual Studio.
    

If you want to learn more about C#, you can check out my YouTube channel: [CliffTech][1].

## Table of Contents

-   [Static Classes in C Sharp][2]
    
-   [Sealed Classes in C Sharp][3]
    
-   [Concrete Classes in C Sharp][4]
    
-   [Abstract Classes in C Sharp][5]
    
-   [Singleton Classes in C Sharp][6]
    
-   [Generic Classes in C Sharp][7]
    
-   [Internal Classes in C Sharp][8]
    
-   [Nested Classes in C Sharp][9]
    
-   [Partial Classes in C Sharp][10]
    
-   [Conclusion][11]
    

The first type of class we’ll discuss is the Static Class. Let’s dive in.

## Static Classes in C Sharp

Static classes are a special type of class in C# designed to provide a collection of related utility methods and properties that do not rely on instance data.

Static classes in C# are a unique type of class designed to house a collection of related utility methods and properties that don't depend on instance data.

Unlike regular classes, static classes cannot be instantiated, and they exclusively contain static members. This characteristic means they cannot be inherited, making them perfect for organizing stateless methods that don't require the features of object-oriented programming.

In essence, when we refer to stateless grouping, it implies that there's no need to create an instance to call a static method – you can simply use the class or method name directly. This approach provides a clear and efficient way to manage utility functions, enhancing code organization and accessibility.

### Example of a Static Class in C

Here's an example of a static class in C#:

```
namespace StaticClasses
{
// Define a static class
    public static class MathUtils
    {
        // Static method to add two numbers
        public static int Add(int a, int b)
        {
            return a + b;
        }

        // Static method to subtract two numbers
        public static int Subtract(int a, int b)
        {
            return a - b;
        }

       // Static method to multiply two numbers
        public static int Multiply(int a, int b)
        {
            return a * b;
        }
    }
}
```

In this example:

-   The `MathUtils` class is defined as `static`, meaning it cannot be instantiated.
    
-   It contains three static methods: `Add`, `Subtract`, and `Multiply`.
    
-   These methods can be called directly on the `MathUtils` class without creating an instance.
    

Before you can use this, you need to call it in your `Program.cs`. When you create any C# application, the entry point is `Program.cs`. You’ll need to go there and make sure to call these classes so that you can execute them. This is what we will be doing for the rest of the section.

### How to Use Static Methods in `Program.cs`

Now you can use the static methods defined in the `MathUtils` class as follows:

```

 // program.cs
namespace StaticClasses
{
    class Program
    {
        static void Main(string[] args)
        {
             // Call static methods from the MathUtils class
            int sum = MathUtils.Add(5, 3);
            // Call the static method Subtract from the MathUtils class
            int difference = MathUtils.Subtract(5, 3);

            // Call the static method Multiply from the MathUtils class
            int product = MathUtils.Multiply(5, 3);

            // Display the results of the sum method
            Console.WriteLine($"Sum: {sum}"); // Output: 8
            // Display the results of the difference method
            Console.WriteLine($"Difference: {difference}"); // Output: 2
            // Display the results of the product method
            Console.WriteLine($"Product: {product}");  // Output: 15
        }
    }
}
```

### When to Use Statice Classes vs Methods

To decide when to use static classes or methods in C#, consider the following guidelines:

1.  **Use Static Classes when:**
    
    -   You need a collection of utility or helper methods that do not require any instance data.
        
    -   The methods and properties are stateless and can be accessed globally without creating an object.
        
    -   You want to group related functions that are not tied to a specific object state.
        
    -   You need to ensure that the class cannot be instantiated or inherited.
        
2.  **Use Static Methods when:**
    
    -   You have a class that is mostly instance-based, but you need a few methods that do not depend on instance data.
        
    -   The method performs a task that is independent of any object state and can be executed without an instance.
        
    -   You want to provide a utility function within a class that can be accessed without creating an object of that class.
        

By using static classes and methods appropriately, you can enhance code organization, improve performance by avoiding unnecessary object creation, and ensure that certain functionalities are easily accessible throughout your application.

### Key Points to Remember About Static Classes in C

-   **Cannot be Instantiated**: You cannot create objects from a static class.
    
-   **Only static members**: Static classes can only have static members. They do not support instance methods or fields.
    
-   **Sealed by default**: Static classes are automatically sealed, so they cannot be inherited.
    
-   **Utility and helper methods**: Static classes are usually used to group related utility or helper methods that don't need an object state.
    

Static classes help organize and access utility methods and properties clearly and simply, making them important for creating efficient and maintainable code.

## Sealed Classes in C Sharp

Sealed classes are a special type of class in C# that cannot be inherited. You can use them to prevent other classes from deriving from them, which can be useful for creating immutable types or ensuring that a class's behavior remains unchanged.

By sealing a class, you ensure that it cannot be modified or extended, making it useful for scenarios where you want to provide a specific implementation without allowing further alterations.

### Example of a Sealed Class in C

Here's an example of a sealed class in C#:

```
namespace SealedClasses
{

    // Define an abstract class
    public abstract class Shape
    {
        // Abstract method to calculate the area
        public abstract double CalculateArea();
    }

     // Define a sealed class
    public sealed class Rectangle : Shape
    {

        //  Properties
        public double Width { get; }
        public double Height { get; }

        // Constructor
        public Rectangle(double width, double height)
        {
            Width = width;
            Height = height;
        }

       // Implement the CalculateArea method
        public override double CalculateArea()
        {
            return Width * Height;
        }
    }
}
```

In this example:

-   The `Shape` class is an abstract base class with an abstract method `CalculateArea()`.
    
-   The `Rectangle` class inherits from `Shape` and provides an implementation for `CalculateArea()`.
    
-   The `Rectangle` class is sealed, which means it cannot be inherited from. This ensures that the class's implementation cannot be modified or extended.
    

### How to Use the Sealed Rectangle Class in the Program.cs

Here's how you can use the `Rectangle` class in a `Program.cs` file:

```
namespace SealedClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            Rectangle rectangle = new Rectangle(5, 3);
            double area = rectangle.CalculateArea();

            Console.WriteLine($"Area of the rectangle: {area}"); // Output: Area of the rectangle: 15
        }
    }
}
```

In this example, the `Rectangle` class is sealed to ensure that its behavior cannot be changed through inheritance. This guarantees that the `Rectangle` class's implementation of `CalculateArea()` stays the same, which helps maintain consistent behavior.

### When to Use Sealed Classes

Sealed classes are particularly useful in the following contexts:

1.  **Framework development**: When developing frameworks or libraries, you might use sealed classes to lock down certain classes that are not intended to be extended by users. This helps maintain control over the framework's behavior and ensures that users cannot introduce bugs or inconsistencies by extending these classes.
    
2.  **Preventing inheritance**: If a class is designed to be a specific implementation with no need for further customization or extension, sealing it prevents other developers from creating subclasses that might alter its intended functionality.
    
3.  **Finalizing class design**: When a class has reached a point where its design is considered complete and no further changes or extensions are anticipated, sealing it can signal to other developers that the class should be used as-is.
    
4.  **Avoiding overriding**: In scenarios where overriding methods could lead to incorrect behavior or security issues, sealing the class ensures that its methods cannot be overridden, preserving the original logic and functionality.
    

### Key Points to Remember About Sealed Classes

-   **No inheritance**: Sealed classes cannot be inherited, ensuring their behavior stays the same.
    
-   **Prevent modification**: They prevent further inheritance, avoiding accidental changes or extensions.
    
-   **Immutable and specific**: Sealed classes are useful for creating immutable classes or when you need a specific, unchangeable implementation.
    

### Sealed Classes vs. Static Classes

You might wonder why we need sealed classes if static classes are already sealed. The key differences are:

-   **Static Classes** are sealed and cannot be instantiated. They are used for grouping static methods and properties.
    
-   **Sealed Classes** can be instantiated but cannot be inherited. This allows for creating objects that are protected from further subclassing.
    

Sealed classes offer flexibility in creating classes that can be used directly without the risk of modification through inheritance.

## Concrete Classes in C Sharp

Concrete classes are essential in `object-oriented programming` in C#. They are fully implemented classes that you can use to create objects directly.

Unlike `abstract classes` or `interfaces`, concrete classes have complete implementations of all their methods and properties, making them versatile and fundamental to most C# applications.

A concrete class is not abstract. It includes full implementations of all its members—methods, properties, fields, and so on—and can be used to create objects. These classes represent real-world entities or concepts in your application, encapsulating both data (stored in fields or properties) and behavior (defined by methods).

### Example: Defining a Concrete Class in C

Here's a simple example of a concrete class in C#:

```


// Define a concrete class
public class Animal
{
    public void Speak()
    {
        Console.WriteLine("The animal makes a sound.");
    }
}

// Define a derived class that inherits from the Animal class
public class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("The dog barks.");
    }
}
```

In this example, the `Animal` class is a concrete class with a method `Speak` that represents a generic sound made by any animal. The `Dog` class inherits from `Animal` and adds a `Bark` method to represent a sound specific to dogs. Both `Animal` and `Dog` are concrete classes because they can be instantiated and used to create objects.

### How to Instantiate and Use Concrete Classes

Here's how you can use the `Dog` class in a `Program.cs` file:

```

// program.cs
class Program
{
    static void Main(string[] args)
    {
        // Create an instance of the Dog class
        Dog myDog = new Dog();

        // Call the inherited method
        myDog.Speak(); // Output: The animal makes a sound.

        // Call the method defined in the Dog class
        myDog.Bark();  // Output: The dog barks.
    }
}
```

In this example, we create an instance of the `Dog` class called `myDog`. We first call the `Speak` method, which is inherited from the `Animal` class, and then the `Bark` method from the `Dog` class. This shows how concrete classes can include both inherited and unique behaviors.

### Real-World Example: Concrete Class for a Product

To illustrate the practical application of concrete classes, consider the following example of a `Product` class:

```
// Define a concrete class for a product
public class Product
{
    // Data properties
    public string Name { get; set; }
    public decimal Price { get; set; }

    // Method to display product information
    public void DisplayInfo()
    {
        Console.WriteLine($"Product: {Name}, Price: {Price:C}");
    }
}
```

This `Product` class is a concrete class with properties `Name` and `Price` to store information about a product. The `DisplayInfo` method provides a way to display the product’s details.

#### How to Use the `Product` Class

Here's how you can use the `Product` class:

```
class Program
{
    static void Main(string[] args)
    {
        // Create an instance of the Product class
        Product product = new Product
        {
            Name = "Laptop",
            Price = 1299.99m
        };

        // Display product information
        product.DisplayInfo(); // Output: Product: Laptop, Price: $1,299.99
    }
}
```

In this scenario, the `Product` class is used to create a `product` object. The `DisplayInfo` method is called to show the product's name and price. This demonstrates how concrete classes are used to model and work with real-world data.

### Key Points to Remember About Concrete Classes

-   **Instantiable**: Concrete classes can be instantiated, allowing you to create objects that represent specific entities or concepts in your application.
    
-   **Complete implementation**: Concrete classes provide full implementations of all methods and properties, unlike abstract classes or interfaces.
    
-   **Common use**: They are the most common type of class in C#, used to define objects with specific behavior and data.
    

Concrete classes are essential for C# development, enabling you to define and work with objects that model real-world entities within your applications. Understanding how to effectively use concrete classes is crucial for building robust, object-oriented software.

## Abstract Classes in C Sharp

In C#, abstract classes are a powerful feature that allow you to define a blueprint for other classes without providing complete implementations. They serve as base classes that cannot be instantiated directly but can be inherited by other classes that will provide specific implementations for the abstract methods defined within them. This design helps enforce consistency across related classes while allowing flexibility in how certain behaviors are implemented.

### What Does "Instantiated" Mean?

Before exploring abstract classes, let's clarify what it means to instantiate a class. Instantiation is the process of creating an object from a class. When you use the `new` keyword in C#, you are creating an instance (or object) of that class.

But abstract classes cannot be instantiated directly. They must be inherited by a non-abstract (concrete) class that provides implementations for the abstract methods.

### Understanding Abstract Classes and Abstract Methods

**Abstract classes** are classes you can't create objects from directly. They act as templates for other classes. They can have both complete methods and methods without a body (abstract methods). Abstract classes help set up a common interface and shared behavior for related classes.

**Abstract methods**, on the other hand, are methods in an abstract class that don't have a body. Any non-abstract class that inherits from the abstract class must provide a body for these methods. This ensures all subclasses have a consistent interface.

### Real-World Example: Bank Account Management

Let's explore a real-world example to illustrate the concept of abstract classes and abstract methods in C#.

```
using System;

// define an abstract class
namespace AbstractClasses
{
    // Abstract class
    public abstract class BankAccount
    {
        // Properties
        public string AccountNumber { get; private set; }
        public decimal Balance { get; protected set; }

        // Constructor
        public BankAccount(string accountNumber, decimal initialBalance)
        {
            AccountNumber = accountNumber;
            Balance = initialBalance;
        }

        // Abstract methods
        public abstract void Deposit(decimal amount);
        public abstract void Withdraw(decimal amount);
        public abstract void DisplayAccountInfo();
    }

    // Derived class: SavingsAccount
    public class SavingsAccount : BankAccount
    {
        private decimal interestRate;

        public SavingsAccount(string accountNumber, decimal initialBalance, decimal interestRate)
            : base(accountNumber, initialBalance)
        {
            this.interestRate = interestRate;
        }

        // Implementing abstract methods
        public override void Deposit(decimal amount)
        {
            Balance += amount;
            Console.WriteLine($"Deposited {amount} to Savings Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void Withdraw(decimal amount)
        {
            if (amount > Balance)
            {
                throw new InvalidOperationException("Insufficient funds.");
            }
            Balance -= amount;
            Console.WriteLine($"Withdrew {amount} from Savings Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void DisplayAccountInfo()
        {
            Console.WriteLine($"Savings Account {AccountNumber} - Balance: {Balance}, Interest Rate: {interestRate}%");
        }
    }

    // Derived class: CheckingAccount
    public class CheckingAccount : BankAccount
    {
        private decimal overdraftLimit;

        public CheckingAccount(string accountNumber, decimal initialBalance, decimal overdraftLimit)
            : base(accountNumber, initialBalance)
        {
            this.overdraftLimit = overdraftLimit;
        }

        // Implementing abstract methods
        public override void Deposit(decimal amount)
        {
            Balance += amount;
            Console.WriteLine($"Deposited {amount} to Checking Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void Withdraw(decimal amount)
        {
            if (amount > Balance + overdraftLimit)
            {
                throw new InvalidOperationException("Overdraft limit exceeded.");
            }
            Balance -= amount;
            Console.WriteLine($"Withdrew {amount} from Checking Account {AccountNumber}. New Balance: {Balance}");
        }

        public override void DisplayAccountInfo()
        {
            Console.WriteLine($"Checking Account {AccountNumber} - Balance: {Balance}, Overdraft Limit: {overdraftLimit}");
        }
    }
}
```

In this example, the `BankAccount` class is an abstract class that defines a common interface for different types of bank accounts. It includes abstract methods like `Deposit`, `Withdraw`, and `DisplayAccountInfo`, which must be implemented by any class that inherits from `BankAccount`.

The `SavingsAccount` and `CheckingAccount` classes inherit from `BankAccount` and provide specific implementations for these abstract methods. This design enforces that every type of bank account must implement deposit, withdrawal, and display functions, while still allowing each account type to implement these functions in a way that makes sense for that specific type.

### How to Use Abstract Classes in a Program

Let's see how we can use the `SavingsAccount` and `CheckingAccount` classes in a `Program.cs` file.

```
namespace AbstractClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create a savings account
            BankAccount savings = new SavingsAccount("SA123", 1000, 1.5m);
            // Create a checking account
            BankAccount checking = new CheckingAccount("CA123", 500, 200);

            // Deposit and withdraw from the savings account
            savings.DisplayAccountInfo();

           // Deposit and withdraw from the checking account
            savings.Deposit(200);

            savings.Withdraw(100);
            // Display the updated account information
            savings.DisplayAccountInfo();

            checking.DisplayAccountInfo();

             // Deposit and withdraw from the checking account
            checking.Deposit(300);

            checking.Withdraw(600);

            // Display the updated account information
            checking.DisplayAccountInfo();

            try
            {
                checking.Withdraw(200);
            }
            catch (InvalidOperationException ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
            }

            checking.DisplayAccountInfo();
        }
    }
}
```

This program will produce the following output:

```
Savings Account SA123 - Balance: 1000, Interest Rate: 1.5%
Deposited 200 to Savings Account SA123. New Balance: 1200
Withdrew 100 from Savings Account SA123. New Balance: 1100
Savings Account SA123 - Balance: 1100, Interest Rate: 1.5%
Checking Account CA123 - Balance: 500, Overdraft Limit: 200
Deposited 300 to Checking Account CA123. New Balance: 800
Withdrew 600 from Checking Account CA123. New Balance: 200
Checking Account CA123 - Balance: 200, Overdraft Limit: 200
Withdrew 200 from Checking Account CA123. New Balance: 0
Checking Account CA123 - Balance: 0, Overdraft Limit: 200
```

In this example, the `SavingsAccount` and `CheckingAccount` objects are created, and the abstract methods `Deposit`, `Withdraw`, and `DisplayAccountInfo` are called. The abstract class `BankAccount` ensures that both account types have these methods, while the derived classes provide the specific functionality.

### Key Points to Remember About Abstract Classes

-   **Cannot be instantiated**: You can't create an instance of an abstract class directly. A subclass must inherit it and provide the implementations for the abstract methods.
    
-   **Contain abstract methods**: Abstract methods in an abstract class have no body. Any non-abstract class that inherits from the abstract class must implement these methods.
    
-   **Define common interfaces**: Abstract classes set a common interface for related classes, ensuring they are consistent while allowing different implementations.
    

Abstract classes are important in C#. They help enforce a structure across related classes but still allow for specific details. By using abstract classes, you can make your code more organized, easier to maintain, and extend.

## Singleton Classes in C Sharp

Singleton classes are a design pattern that restricts the instantiation of a class to one single instance. This is particularly useful when you need a single, shared resource across your application, such as a configuration manager, logging service, or database connection.

### Why Use Singleton Classes in C#?

Imagine you have a class responsible for managing a database connection. You don’t want multiple instances of this class running around, potentially causing issues with resource management or inconsistent data. A Singleton class ensures that only one instance is created and provides a global point of access to it.

### Example: Defining a Singleton Class

Let’s now see how you can implement a Singleton class in C#:

```
// Define a singleton class
public class Singleton
{
    private static Singleton instance;
    private static readonly object lockObject = new object();

    // Private constructor prevents instantiation from outside the class
    private Singleton()
    {
    }

    // Public property to access the single instance of the class
    public static Singleton Instance
    {
        get
        {
            // Ensure thread safety
            lock (lockObject)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
            }
            return instance;
        }
    }

    // Example method to demonstrate the singleton instance
    public void PrintMessage()
    {
        Console.WriteLine("Hello, I am a singleton class.");
    }
}
```

In this example, the `Singleton` class is defined with a private constructor, which prevents other classes from creating new instances. The static property `Instance` returns the single instance of the class, creating it if it doesn't already exist. The `lockObject` ensures that the class is thread-safe, meaning that even in a multi-threaded environment, only one instance will be created.

The `PrintMessage` method is just a simple example to show that the Singleton instance can be used like any other class instance.

### How to Use the Singleton Class in `Program.cs`

Now let’s see how you can use this Singleton class in your application:

```
class Program
{
    static void Main(string[] args)
    {
        // Retrieve the single instance of the Singleton class
        Singleton singleton1 = Singleton.Instance;
        singleton1.PrintMessage(); // Output: Hello, I am a singleton class.

        // Retrieve the instance again
        Singleton singleton2 = Singleton.Instance;

        // Check if both instances are the same
        Console.WriteLine(singleton1 == singleton2); // Output: True
    }
}
```

In this example, we retrieve the Singleton instance twice. Because the class is a Singleton, both `singleton1` and `singleton2` refer to the same instance. The `==` operator confirms this by returning `true`.

### How to Extend the Singleton Example

You can expand the Singleton pattern to handle more complex scenarios. For example, you could initialize the Singleton instance with configuration data:

```
public class ConfigurationManager
{
    private static ConfigurationManager instance;
    private readonly Dictionary<string, string> settings = new Dictionary<string, string>();

    private ConfigurationManager()
    {
        // Simulate loading settings from a configuration file
        settings["AppName"] = "MyApplication";
        settings["Version"] = "1.0.0";
    }

    public static ConfigurationManager Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new ConfigurationManager();
            }
            return instance;
        }
    }

    public string GetSetting(string key)
    {
        return settings.ContainsKey(key) ? settings[key] : null;
    }
}
```

Here, `ConfigurationManager` is a Singleton class that loads and manages application settings. The `GetSetting` method allows you to retrieve specific configuration values, ensuring that all parts of your application use the same settings.

### Key Points to Remember About Singleton Classes

-   **Single instance**: Singleton classes ensure that only one instance of the class exists in the application.
    
-   **Global access**: Singleton provides a global point of access to the instance, making it easy to use across different parts of your application.
    
-   **Thread safety**: In multi-threaded environments, ensure your Singleton is thread-safe to avoid creating multiple instances.
    
-   **Use cases**: Common use cases for Singleton include managing configurations, logging services, and database connections.
    

Singleton classes are a fundamental design pattern in software engineering, offering a simple yet powerful way to manage shared resources. Understanding and correctly implementing Singletons can help you write more efficient and maintainable code.

## Generic Classes in C Sharp

Generic classes in C# provide a powerful way to create reusable and type-safe code. By using generic classes, you can design a single class that works with any data type, eliminating the need for type-specific implementations. This makes your code more flexible and reduces redundancy.

### Why Use Generic Classes?

Imagine you need to implement a stack that stores integers. Later, you might need another stack to store strings.

Instead of writing two separate classes, you can write one generic stack class that can handle both data types—and any others you might need. Generic classes help you avoid code duplication and make your codebase easier to maintain.

### Example: Defining a Generic Class

Let’s take a look at a simple implementation of a generic stack class:

```
// Define a generic class
public class Stack<T>
{
    private List<T> items = new List<T>();

    public void Push(T item)
    {
        items.Add(item);
    }

    public T Pop()
    {
        if (items.Count == 0)
        {
            throw new InvalidOperationException("The stack is empty.");
        }
        T item = items[items.Count - 1];
        items.RemoveAt(items.Count - 1);
        return item;
    }

    public T Peek()
    {
        if (items.Count == 0)
        {
            throw new InvalidOperationException("The stack is empty.");
        }
        return items[items.Count - 1];
    }

    public bool IsEmpty()
    {
        return items.Count == 0;
    }
}
```

In this example, the `Stack<T>` class is defined with a type parameter `T`. This type parameter is a placeholder that represents the type of data the stack will store. The class includes methods like `Push` to add an item to the stack, `Pop` to remove and return the top item, `Peek` to view the top item without removing it, and `IsEmpty` to check if the stack is empty.

Because `Stack<T>` is generic, you can use it with any data type, whether it's `int`, `string`, or even a custom class.

### How to Use the Stack Class in `Program.cs`

Let’s see how this generic `Stack` class can be used in a program:

```
class Program
{
    static void Main(string[] args)
    {
        // Stack for integers
        Stack<int> intStack = new Stack<int>();
        intStack.Push(10);
        intStack.Push(20);
        Console.WriteLine(intStack.Pop()); // Output: 20
        Console.WriteLine(intStack.Peek()); // Output: 10

        // Stack for strings
        Stack<string> stringStack = new Stack<string>();
        stringStack.Push("Hello");
        stringStack.Push("World");
        Console.WriteLine(stringStack.Pop()); // Output: World
        Console.WriteLine(stringStack.Peek()); // Output: Hello
    }
}
```

In this example, we create two instances of the `Stack` class: one that stores integers and another that stores strings. The flexibility of generics allows us to use the same class to work with different data types, making our code more reusable and concise.

### How to Extend the Generic Class

Let’s take it a step further and extend our `Stack` class to include a method that returns all items as an array:

```
public T[] ToArray()
{
    return items.ToArray();
}
```

Now, you can easily convert the stack’s items into an array:

```
int[] intArray = intStack.ToArray();
string[] stringArray = stringStack.ToArray();
```

This extension further showcases the power of generics, allowing the same method to work with different data types seamlessly.

### Key Points to Remember About Generic Classes

-   **Flexibility**: Generic classes can handle any data type, making them adaptable and reusable.
    
-   **Type safety**: Using type parameters ensures that your code is type-safe, catching errors during compile-time instead of runtime.
    
-   **Code reuse**: Generics remove the need to duplicate code for different data types, resulting in cleaner and easier-to-maintain code.
    
-   **Type parameters**: Generic classes use type parameters as placeholders for the actual data types you will use when creating an instance of the class.
    

Generic classes are crucial in C# for building flexible, reusable, and type-safe code. By learning and using generics, you can create more reliable and maintainable applications.

## Internal Classes in C Sharp

Internal classes in C# are a powerful way to encapsulate implementation details within an assembly. By using the `internal` access modifier, you can restrict access to certain classes, ensuring they are only accessible within the same assembly.

This is particularly useful for hiding complex logic or utility classes that are not intended to be exposed to the public API of your library or application.

### Why Use Internal Classes?

In a large application, you may have classes that should only be used internally by your code and not by external consumers. For example, helper classes, utility functions, or components of a larger system that do not need to be exposed outside the assembly can be marked as `internal`. This ensures that your public API remains clean and focused while still allowing full functionality within the assembly.

### Example: Defining an Internal Class

Let’s consider a scenario where you have a library that processes orders. You might have a class that handles the complex logic of calculating discounts, but you don't want this class to be accessible to users of your library. Instead, you only expose the main `OrderProcessor` class, keeping the discount logic hidden with an internal class.

```
// Define a public class that uses an internal class
public class OrderProcessor
{
    public void ProcessOrder(int orderId)
    {
        // Internal class is used here
        DiscountCalculator calculator = new DiscountCalculator();
        decimal discount = calculator.CalculateDiscount(orderId);
        Console.WriteLine($"Order {orderId} processed with a discount of {discount:C}");
    }

    // Internal class that handles discount calculations
    internal class DiscountCalculator
    {
        public decimal CalculateDiscount(int orderId)
        {
            // Complex discount calculation logic
            return orderId * 0.05m;
        }
    }
}
```

In this example, the `DiscountCalculator` class is marked as `internal`, meaning it’s only accessible within the assembly. The `OrderProcessor` class, which is `public`, uses this internal class to process orders. External users of the library can call `ProcessOrder` without needing to know about or interact with the `DiscountCalculator` class.

### How to Use the Internal Class in `Program.cs`

Now, let's see how this works in practice:

```
class Program
{
    static void Main(string[] args)
    {
        OrderProcessor processor = new OrderProcessor();
        processor.ProcessOrder(12345); // Output: Order 12345 processed with a discount of $617.25
    }
}
```

In this example, the `ProcessOrder` method is publicly accessible, but the internal workings of discount calculation remain hidden, providing a clean and secure API.

### Key Points to Remember About Internal Classes

-   **Limited access**: Internal classes can only be accessed within the same assembly, which helps keep your public API simple and focused.
    
-   **Encapsulation**: They are used to hide implementation details, like helper functions or complex logic, that shouldn't be publicly visible.
    
-   **Visibility control**: The `internal` access modifier lets you control which classes and members are visible, ensuring only the necessary parts of your code are accessible to other assemblies.
    

Internal classes are important for managing complex applications, allowing you to control what parts of your code can be accessed from outside your assembly. By hiding details and limiting access, you can keep your codebase clean, easy to maintain, and secure.

## Nested Classes in C Sharp

Nested classes in C# are defined within another class. This structure is useful for grouping related classes together and encapsulating the implementation details. Nested classes can be either static or non-static, and they have direct access to the private members of their enclosing class.

### Why Use Nested Classes?

Nested classes are particularly useful when a class is closely tied to the logic of another class and isn’t meant to be used independently. They allow you to encapsulate helper classes, hide them from other parts of the program, and keep related code together. This can lead to a cleaner, more organized codebase.

### Example: Defining a Nested Class

Let’s consider a scenario where we have a class that represents a `Car` and another class that represents a `Engine`. Since the `Engine` class is closely related to the `Car` class and doesn’t make much sense on its own, we can define it as a nested class within `Car`.

```
// Define a class with a nested class
public class Car
{
    // Define private fields
    private string model;
    private Engine carEngine;

   // Constructor
    public Car(string model)
    {
        this.model = model;
        carEngine = new Engine();
    }


    // Method to start the car
    public void StartCar()
    {
        carEngine.StartEngine();
        Console.WriteLine($"{model} is starting...");
    }

    // Nested class
    public class Engine
    {
        public void StartEngine()
        {
            Console.WriteLine("Engine started.");
        }
    }
}
```

In this example, the `Car` class has a private field `model` and a method `StartCar` that starts the car. The `Engine` class is nested within the `Car` class and contains a `StartEngine` method. By nesting `Engine` inside `Car`, we express the close relationship between the two.

### How to Use the Nested Class in `Program.cs`

Let’s see how we can use the `Car` class and its nested `Engine` class in a program:

```
class Program
{
    static void Main(string[] args)
    {
        Car myCar = new Car("Toyota");
        myCar.StartCar(); // Output: Engine started. Toyota is starting...

        // Although you can create an instance of the nested class separately, it usually makes sense to use it through the outer class
        Car.Engine engine = new Car.Engine();
        engine.StartEngine(); // Output: Engine started.
    }
}
```

In this example, we create an instance of the `Car` class and call the `StartCar` method, which internally calls the `StartEngine` method of the nested `Engine` class. While it's possible to instantiate the nested class separately, it’s more common to access it through the outer class, emphasizing the relationship between the two.

### Key Points to Remember About Nested Classes

-   **Encapsulation**: Nested classes keep details hidden that shouldn't be seen outside the main class.
    
-   **Access to private members**: Nested classes can access private parts of the main class, making them good for helper classes that need to work with the main class's internal parts.
    
-   **Organization**: Use nested classes to keep related classes together, which makes the code cleaner and more organized.
    
-   **Static or non-static**: Nested classes can be static or non-static. Static nested classes can't access the instance parts of the main class directly, but non-static nested classes can.
    

Nested classes are a useful way to organize your code, especially for complex objects with closely related parts. Keeping related classes together makes your code easier to manage and maintain.

## Partial Classes in C Sharp

Partial classes in C# allow you to split a class definition across multiple files. This feature is particularly useful in large projects, where it can be beneficial to break a complex class into smaller, more manageable sections.

By using the `partial` keyword, you can organize your code better, especially when working with generated code or collaborating in a team environment.

### Why Use Partial Classes?

Imagine you’re working on a large application where a single class contains hundreds of lines of code. This can become difficult to manage and maintain. By using partial classes, you can divide the class into logical parts, each residing in a separate file. This not only makes the code more readable but also allows multiple developers to work on different parts of the class simultaneously without causing merge conflicts.

### Example: Defining a Partial Class in C

Let’s say we have a class that handles various operations for an employee management system. Instead of putting all methods in one file, we can split them across multiple files using partial classes.

**File 1:** `PartialClass_Methods1.cs`

```
// Define a partial class
public partial class EmployeeOperations
{
    public void AddEmployee(string name)
    {
        Console.WriteLine($"Employee {name} added.");
    }
}
```

**File 2:** `PartialClass_Methods2.cs`

```
// Define the other part of the partial class
public partial class EmployeeOperations
{
    public void RemoveEmployee(string name)
    {
        Console.WriteLine($"Employee {name} removed.");
    }
}
```

In these examples, the `EmployeeOperations` class is split into two files, each containing a part of the class. The first file handles adding employees, while the second file handles removing them.

### How to Use the Partial Class in `Program.cs`

Now, let’s use the `EmployeeOperations` class in our `Program.cs` file:

```
class Program
{
    static void Main(string[] args)
    {
        EmployeeOperations operations = new EmployeeOperations();

        operations.AddEmployee("John Doe");    // Output: Employee John Doe added.
        operations.RemoveEmployee("John Doe"); // Output: Employee John Doe removed.
    }
}
```

In this example, the `EmployeeOperations` class, although defined in multiple files, behaves like a single class. The methods `AddEmployee` and `RemoveEmployee` are seamlessly combined, providing a clean and organized way to manage operations.

### Key Points to Remember About Partial Classes

-   **Code organization**: Partial classes help keep large classes organized by splitting them into smaller, focused sections.
    
-   **Team collaboration**: Multiple developers can work on different parts of the same class without interfering with each other’s code.
    
-   **Generated code**: Often used with auto-generated code, where part of the class is generated by a tool, and the rest is written manually.
    

Partial classes are a powerful feature in C# that allows for better code management, especially in large-scale applications. By breaking down a class into logical components, you can maintain clean, readable, and maintainable code.

## Conclusion

Classes are the building blocks of object-oriented programming in C#. By understanding the different types of classes—abstract, static, sealed, concrete, and singleton—you can create well-structured, maintainable, and efficient code.

Whether you’re designing utility classes, defining abstract interfaces, or encapsulating complex logic, classes play a crucial role in shaping your application’s architecture.

[1]: https://www.youtube.com/@CliffTech
[2]: #heading-static-classes-in-c-sharp
[3]: #heading-sealed-classes-in-c-sharp
[4]: #heading-concrete-classes-in-c-sharp
[5]: #heading-abstract-classes-in-c-sharp
[6]: #heading-singleton-classes-in-c-sharp
[7]: #heading-generic-classes-in-c-sharp
[8]: #heading-internal-classes-in-c-sharp
[9]: #heading-nested-classes-in-c-sharp
[10]: #heading-partial-classes-in-c-sharp
[11]: #heading-conclusion