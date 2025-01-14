---
title: Key Golang Concepts You Should Learn as a Beginner Go Developer
date: 2025-01-14T13:26:21.875Z
author: Temitope Oyedele
authorURL: https://www.freecodecamp.org/news/author/Koded001/
originalURL: https://www.freecodecamp.org/news/key-golang-concepts-for-beginner-go-devs/
posteditor: ""
proofreader: ""
---

Learning new programming concepts can be hard. So you'll need a guide or a roadmap to help you navigate through the process.

<!-- more -->

Learning Golang is no exception. And as a beginner, you'll need to work diligently to learn the fundamental building blocks of the language. These key introductory concepts are important as they help you lay the groundwork for more complex development.

In this article, we will explore the main parts of Go that every beginner should learn to build a strong foundation in the language. So if you’re just starting out, this guide will help you solidify your knowledge and start building projects that’ll make you more confident coding in Golang.

## Table of Contents

-   [Variables and Datatypes][1]
    
-   [Control Structures][2]
    
    -   [1\. If/Else Statements][3]
        
    -   [2\. Switch Statements][4]
        
    -   [3\. For Loops][5]
        
-   [Functions][6]
    
-   [Pointers][7]
    
-   [Error Handling][8]
    
-   [Goroutines and Concurrency][9]
    
-   [Structs and Inheritance][10]
    
-   [Go Standard Library][11]
    
    -   [Accessing and Using a Package from the Standard Library][12]
-   [Testing in Go][13]
    
-   [That’s a Wrap!][14]
    

## Variables and Datatypes

Variables in Go are used to store and manage data within a program. They act as containers that hold values of specific types. Variables allow you to retrieve and manipulate stored information.

Below is an example of using variables in Go:

```
package main

import "fmt"

func main(){
 // Variables
    var age int = 30
    var name string = "John"
    salary := 50000.50 // Short variable declaration(only to be used inside a function
  fmt.Println(age)
  fmt.Println(name)
   fmt.Println(salary)
}
```

To learn more about variables, you can check out [my tutorial on them here][15].

On the other hand, data types define the kind of data a variable can hold. Since Go is a statically typed language, it requires you to specify the data type of each variable.

Some of the main data types in Go include:

-   **Boolean**: Represents a true or false value. It's used for logical decisions in the program.
    
-   **Number**: Includes integer types (like `int`, `int32`, `int64`) and floating-point types (like `float32`, `float64`) to store whole numbers and decimal values.
    
-   **String**: Represents a sequence of characters (text). It’s used to store words, phrases, or any text-based data.
    
-   **Array**: A collection of fixed-size elements of the same type. Arrays allow you to store multiple values in a single variable.
    
-   **Slice**: Similar to arrays, but with a dynamic size. Slices are more commonly used in Go since they offer greater flexibility.
    
-   **Map**: A collection of key-value pairs. Maps are used when you want to associate values with specific keys for fast lookup.
    
-   **Struct**: A way to group related data together. Structs allow you to define custom data types with multiple fields, each of a different type.
    
-   **Pointer**: Holds the memory address of another variable, allowing for more efficient memory manipulation in certain cases.
    

Below is an example showing how some of these data types work:

```
package main

import "fmt"

func main() {

    // Data Types
    var isEmployed bool = true // boolean
    var count int = 42 // integer
    var greeting string = "Hello, Go!" // string

    // Struct
    type Rectangle struct {
        width  float64
        height float64
    }
    rect := Rectangle{width: 10.5, height: 5.2}

    fmt.Println("Is Employed:", isEmployed)
    fmt.Println("Count:", count)
    fmt.Println("Greeting:", greeting)
    fmt.Println("Numbers:", numbers)
    fmt.Printf("Rectangle: width = %.2f, height = %.2f\n", rect.width, rect.height)

}
```

In this example, we demonstrate the usage of several data types:

1.  `bool`: The `isEmployed` variable is declared as a `bool` and assigned the value `true`.
    
2.  `int`: The `count` variable is declared as an `int` and assigned the value `42`.
    
3.  `string`: The `greeting` variable is declared as a `string` and assigned the value `"Hello, Go!"`.
    
4.  `struct`: We define a new data type called `Rectangle` that has two fields: `width` and `height`, both of which are `float64`. We then create a new instance of `Rectangle` and assign values to its fields.
    

Variables and data types form the basis of programming in Go. These concepts are essential building blocks that you'll use in almost every program you write. They allow you to store, manipulate, and organize data effectively.

With a strong command of variables and data types, you'll also be better equipped to tackle more advanced Go concepts and write robust, efficient code as you progress in your learning journey.

## Control Structures

In Go, control structures are simply constructs that control the flow of execution in a program. They allow you to perform different actions based on conditions or repeatedly execute a block of code.

Some of the main control structures in Go include:

### 1\. If/Else Statements

The [if/else][16] statement in Go executes a block of code based on a condition. If the condition returns true, the code inside the `if` block is performed. If the condition returns false, the `else` block (if any) is executed.

For example:

```
package main

import "fmt"

func main() {
    x := 10
    if x > 5 {
        fmt.Println("x is greater than 5")
    } else {
        fmt.Println("x is 5 or less")
    }
}
```

In the code above, if x is greater than 5, the first block is executed. Otherwise, the `else` block runs.

### 2\. Switch Statements

The [switch statement][17] is a multi-directional branch that allows you to execute different blocks of code depending on the value of an expression. It’s easier to read than multiple if/else statements.

For example:

```
package main

import "fmt"

func main() {
    day := "Monday"
    switch day {
    case "Monday":
        fmt.Println("Start of the week")
    case "Friday":
        fmt.Println("Almost weekend")
    default:
        fmt.Println("It's another day")
    }
}
```

In the code above, the output will be "Start of the week" because the `day` variable matches the `Monday` case.

### 3\. For Loops

Go only has one looping construct, the [for loop][18]. It can be used in various forms: traditional loops, range-based loops (to iterate over slices, maps, and so on), and infinite loops.

Below is an example of a traditional loop:

```
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
}
```

In the code above, the loop prints the numbers 0 through 4.

The range based loop provides a simplified way for iteration on slices, maps, and others. It makes it easier to access each element directly without needing to manually handle index or length checks. The loop automatically provides both the index and the value during each iteration, improving readability and reducing the chance of off-by-one errors or other indexing issues.

Below is an example of a range-based loop:

```
package main

import "fmt"

func main() {
    nums := []int{1, 2, 3, 4}
    for i, num := range nums {
        fmt.Println(i, num)
    }
}
```

In the code above, the `for` loop is used to iterate over the `nums` slice. The `range` keyword returns both the index and the value of each element in the slice. This makes it easy to process all elements of a slice without needing a counter variable.

## Functions

A [function][19] in Go is a block of code that performs a specific task. Functions help you organize code by allowing you to construct reusable code logic, which is easier to maintain and understand.

Below is an example of a function that adds two numbers:

```
package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(2, 3)
    fmt.Println("Result:", result)
}
```

Here, we have a simple function called `add` that takes two integer parameters (`a` and `b`) and returns their sum, which is also an integer type. The function is then called inside the `main` function which prints the result.

Functions are the foundation of Go programs, and understanding their structure and capabilities is critical.

## Pointers

In Go, a [pointer][20] is a variable that stores the memory address of another variable. A pointer "points to" the region in memory where the actual value is stored rather than retaining the value itself.

Pointers are useful when you need to pass references to large structures or when you want to modify a variable's value from inside a function. They are also critical for memory management.

Below is a basic example that illustrates how pointers work in Go:

```
package main

import "fmt"

func main() {
    var num int = 10

    var ptr *int = &num

    fmt.Println("Value of num:", num)      
    fmt.Println("Pointer address:", ptr)   
    fmt.Println("Value at pointer:", *ptr)

    *ptr = 20
    fmt.Println("Updated value of num:", num) 
}
```

In the example above, we first declare a variable `num` and assign it the value of 10. We then create a pointer `ptr` that stores the memory address of `num` (using `&num`) and then print it out to see it. To access the stored pointer value, we use the `*ptr`. We then modify the value of `num` through the pointer by setting `*ptr` to 20, which directly changes `num` to 20.

This demonstrates how pointers allow you to access and modify variables via their memory addresses, which is useful for more efficient memory handling and function parameter passing in Go.

To get a better understanding of what pointers are, you can [check out my article on them here][21].

## Error Handling

In order to write robust and build reliable applications, you’ll need to learn about [error handling][22]. Compared to other programming languages, Go takes a unique approach to error handling, encouraging you to handle problems explicitly and immediately rather than relying on exceptions.

In Go, errors are treated as values, which means they are returned from functions just like any other value and must be handled by the developer. This approach helps to promote clarity and also ensures that potential issues are dealt with at the point where they occur.

Below is some example code to illustrate basic error handling in Go:

```
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}
```

In the code above, we have a `divide` function that takes two numbers and returns both a result and an error. If the second number is zero, an error is returned because division by zero is not allowed.

We also have a `main` function where we call divide and check if an error occurred by examining the `err` value. If an error is present, we handle it by printing an error message. Otherwise, we print the result.

This approach to error handling in Go ensures that errors are caught and dealt with right away, making the program more reliable and easier to troubleshoot.

## Goroutines and Concurrency

[Goroutines][23] and concurrency are concepts that let your code efficiently execute multiple tasks in parallel.

A goroutine is a function that runs concurrently with other functions. Goroutines are incredibly lightweight, with a small memory footprint, allowing you to run thousands (or even millions) of goroutines simultaneously without overwhelming system resources.

Concurrency, on the other hand, refers to a program's capacity to handle numerous tasks at the same time. It does not necessarily imply that the tasks are executing concurrently (which is parallelism) but rather that they are making progress independently.

Let’s look at an example code to illustrate these concepts:

```
package main

import (
    "fmt"
    "time"
)

func printNumbers() {
    for i := 1; i <= 5; i++ {
        fmt.Println(i)
        time.Sleep(1 * time.Second)
    }
}

func printLetters() {
    for i := 'A'; i <= 'E'; i++ {
        fmt.Printf("%c\n", i)
        time.Sleep(1 * time.Second)
    }
}

func main() {

    go printNumbers()  // This runs concurrently
    go printLetters()  // This runs concurrently

    // Wait for goroutines to finish
    time.Sleep(6 * time.Second)
    fmt.Println("All tasks completed.")
}
```

In the code above, we create two functions, `printNumbers` and `printLetters`. One prints numbers from 1 to 5, and the other prints letters from 'A' to 'E'. We launch these functions as **goroutines** by adding the `go` keyword before calling them in the `main` function.

**Goroutines** are lightweight threads that allow functions to run concurrently. This means both `printNumbers()` and `printLetters()` can execute at the same time without waiting for each other to complete. The key concept here is **concurrency**, where multiple tasks (like printing numbers and letters) make progress independently, even though they don't necessarily run in parallel on separate cores.

In this case, both goroutines sleep for one second between prints, but because they are running concurrently, the numbers and letters can be printed almost simultaneously without blocking each other’s execution.

To ensure the program doesn’t exit before the goroutines complete their work, we add a `time.Sleep(6 * time.Second)` in the `main` function. This gives enough time for both goroutines to finish printing before the program terminates.

This example illustrates Go's powerful concurrency model through goroutines, enabling efficient multitasking without the complexity of traditional threading.

To dive deeper into goroutines and concurrency, [**Destiny Erhabor**][24] did a fine job in explaining what they are in [his article here][25].

## Structs and Inheritance

In Go, a `struct` is a composite data type that organizes variables (fields) into a single type. These fields can include a variety of data types, making structs suitable for describing complex data structures. Structs in Go function similarly to classes in other programming languages but without the methods of inheritance.

Let’s start with an example of a struct:

```
type Person struct {
    Name string
    Age  int
}
```

In this example, `Person` is a struct with two fields: `Name` which is a `string` and `Age` which is an `int`. You can create an instance of this struct like so:

```
p := Person{Name: "Alice", Age: 30}
fmt.Println(p.Name)  // Output: Alice
```

Go does not have traditional **inheritance** like some object-oriented languages where one class inherits fields and methods from another. Instead, Go uses **composition**, which allows you to embed one `struct` inside another.

Here’s an example code of struct composition:

```
type Employee struct {
    Person
    Position string
}

e := Employee{
    Person:   Person{Name: "Bob", Age: 25},
    Position: "Developer",
}

fmt.Println(e.Name)     // Output: Bob
fmt.Println(e.Position) // Output: Developer
```

In the code above, the `Employee` struct embeds the `Person` struct, and the fields of `Person` can be accessed directly like `e.Name`. This mimics some of the behavior you’d expect from inheritance in other languages, but it’s done through composition.

While Go lacks inheritance, it achieves polymorphism through **interfaces**. An **interface** is a type that specifies a set of method signatures. A type is said to implement an interface if it provides the methods declared by that interface.

What makes Go unique is that it uses **implicit implementation**, meaning that a type does not need to explicitly declare that it implements an interface – it just has to match the method signatures.

Let’s see an example:

```
type Speaker interface {
    Speak() string
}

type Person struct {
    Name string
}

func (p Person) Speak() string {
    return "Hi, my name is " + p.Name
}

func saySomething(s Speaker) {
    fmt.Println(s.Speak())
}

func main() {
    p := Person{Name: "Alice"}
    saySomething(p)  // Output: Hi, my name is Alice
}
```

In this example, `Person` implements the `Speaker` interface by defining a `Speak` method. The function `saySomething` takes any type that implements the `Speaker` interface, demonstrating **polymorphism**. Go’s interfaces provide a flexible way to design code that is **clean and extensible** without needing to rely on traditional inheritance.

## Go Standard Library

It’s important to become familiar with Go's standard library. It contains a comprehensive collection of packaged libraries that provide you with a wide range of functionalities for tasks like file handling, network communication, string manipulation, data structures, cryptography, testing, and more. This allows you to perform common programming tasks without the need to install external packages.

### Accessing and Using a Package from the Standard Library

To access a package from the standard library, you simply import it into your Go file using the `import` statement. Then, you can use the package's functions directly.

Some of the packages you can import from the standard library include:

-   `fmt` for formatted I/O
    
-   `net/http` for building web servers
    
-   `io` for I/O operations
    
-   `strings` for string manipulation
    
-   `time` for date and time operations
    

For example, let’s look at the `fmt` package, which is used for formatted input and output. Here's a basic example of how to use the `fmt` package to print formatted output:

```
package main

import "fmt"

func main() {
    name := "Alice"
    age := 30
    fmt.Printf("Hello, my name is %s and I am %d years old.\n", name, age)
}
```

In this example:

-   The `import "fmt"` line allows us to access the `fmt` package from the standard library.
    
-   We use `fmt.Printf` to format and print a string that includes a name (`%s` for strings) and an age (`%d` for integers).
    

Each package in the standard library is well-documented, with plenty of examples, so it’s a good idea to explore the official Go documentation to better understand how to use these packages in your projects. You can find the documentation for the Go standard library [here][26].

## Testing in Go

Testing is a first-class citizen in Go. This means that Go treats testing as a core, integral part of the development process.

Go’s testing framework is built around the `testing` package, which provides the tools necessary to write tests. You write your tests in separate files, which are automatically detected and executed by the Go tool.

To write a test, you need to add the suffix `_test.go`. For example, if your main code file is `math`, the tests for that file would go into `math_test.go`.

Let’s see how to write a simple test. Let’s say we have a simple function in `math.go`:

```

package math

func Add(a, b int) int {
    return a + b
}
```

To test the `Add` function, you need to create a test file called `math_test.go`:

```

package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5
    if result != expected {
        t.Errorf("Add(2, 3) = %d; want %d", result, expected)
    }
}
```

In the test above:

-   The `TestAdd` function is defined to test the `Add` function.
    
-   The `t.Errorf` is used to report an error if the result doesn't match the expected value.
    

To run the test, you use this command in your terminal:

```
go test
```

You can also get more verbose output by adding the `-v` flag like so:

```
go test -v
```

This is just the basics, as there are other types of tests, such as table-driven tests and benchmarking.

## That’s a Wrap!

In this article, we took a look at nine key concepts to learn as a beginner getting started with Golang.

And keep in mind that this isn’t everything you’ll need to know when you’re learning Go – these are just what I consider to be the most important basics. And they should help you get your foot in the door of the world of Go.

If you think I missed a key concept, I’d love it if you’d share it with me so I can update the article. Thank you!

[1]: #heading-variables-and-datatypes
[2]: #heading-control-structures
[3]: #heading-1-ifelse-statements
[4]: #heading-2-switch-statements
[5]: #heading-3-for-loops
[6]: #heading-functions
[7]: #heading-pointers
[8]: #heading-error-handling
[9]: #heading-goroutines-and-concurrency
[10]: #heading-structs-and-inheritance
[11]: #heading-go-standard-library
[12]: #heading-accessing-and-using-a-package-from-the-standard-library
[13]: #heading-testing-in-go
[14]: #heading-thats-a-wrap
[15]: https://www.freecodecamp.org/news/variables-and-constants-in-go/
[16]: https://go.dev/tour/flowcontrol/7
[17]: https://go.dev/tour/flowcontrol/9
[18]: https://go.dev/tour/flowcontrol/1
[19]: https://go.dev/tour/basics/4
[20]: https://go.dev/tour/moretypes/1
[21]: https://dev.to/oyedeletemitope/understanding-pointers-in-go-1fa6
[22]: https://go.dev/blog/error-handling-and-go
[23]: https://go.dev/tour/concurrency/1
[24]: https://www.freecodecamp.org/news/author/CaesarSage/
[25]: https://www.freecodecamp.org/news/how-to-handle-concurrency-in-go/
[26]: https://pkg.go.dev/std