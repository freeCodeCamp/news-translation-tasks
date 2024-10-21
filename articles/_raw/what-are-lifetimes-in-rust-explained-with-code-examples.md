---
title: What are Lifetimes in Rust? Explained with Code Examples
date: 2024-10-21T03:39:49.933Z
author: Oduah Chigozie
authorURL: https://www.freecodecamp.org/news/author/GhoulKingR/
originalURL: https://www.freecodecamp.org/news/what-are-lifetimes-in-rust-explained-with-code-examples/
posteditor: ""
proofreader: ""
---

Lifetimes are fundamental mechanisms in Rust. There's a very high chance you'll need to work with lifetimes in any Rust project that has any sort of complexity.

<!-- more -->

Even though they are important to Rust projects, lifetimes can be quite tricky to wrap your head around. So I created this guide to provide more clarity on what they are and when you should use them.

### Prerequisites for this Tutorial

To get the most out of this tutorial, you'll need the following:

-   At least beginner-level familiarity with Rust: This tutorial doesn't help with learning how to code in Rust. It only helps with understanding lifetimes in Rust and how they work
    
-   Familiarity with generics: Generics in Rust work identically to how they do in popular programming languages. Knowledge of how generics work in any language would be helpful.
    
-   Knowing how the borrow checker works isn't as much a requirement as the last two above, but it would be helpful. Knowledge of how lifetimes work also helps in understanding how the borrow checker works.
    

## So, What are Lifetimes in Rust?

For Rust's [borrow checker][1] to ensure safety throughout your code, it needs to know how long all the data in the program will live during its execution. This becomes difficult to do in certain situations, and those situations are where you need to use explicit lifetime annotations.

Lifetimes in Rust are mechanisms for ensuring that all borrows that occur within your code are valid. A variable's lifetime is how long it lives within the program's execution, starting from when it's initialized and ending when it's destroyed in the program.

The borrow checker can detect the lifetimes of variables in many cases. But in cases where it can't, you have to assist it with explicit lifetime annotations.

The syntax for explicit lifetime annotations is a single quote followed by a set of characters for identification (for example, `'static`, `'a`) as in:

```
max<'a>
```

The lifetime annotation indicates that `max` should live at most as long as `'a`.

Using multiple lifetimes follows the same syntax:

```
max<'a, 'b>
```

In this case, the lifetime annotations indicate that `max` should live at most as long as `'a` and `'b`.

Explicit lifetime annotations are handled similarly to how generics are. Let's take a look at an example:

```
fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    // return the longest string out of the two
}
```

In the example, the lifetime annotations indicate that `max` should live at most as long as the lifetimes of `s1` or `s2`. It also indicates that `max` returns a reference that lives as long as `s1`.

A Rust project has many cases that would require explicit lifetime annotations, and in the next few sections, we'll go over each of them.

## Lifetime Annotations in Functions

A function only needs an explicit lifetime annotation when it returns a reference from any of its arguments. Let's take an example:

```
fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}
```

If you remove the lifetime annotations, you'll get an LSP (Language Server Protocol) warning to include the lifetime annotations. If you ignore LSP's warning message and compile the code, you'll get the same message as a compiler error. For example:

```
fn max(s1: &str, s2: &str) -> &str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}

/**
 * Output ->
 *
error[E0106]: missing lifetime specifier
  --> src/main.rs:44:31
   |
44 | fn max(s1: &str, s2: &str) -> &str {
   |            ----      ----     ^ expected named lifetime parameter
   |
   = help: this function's return type contains a borrowed value, but the signature does not say whether it is borrowed from `s1` or `s2`
help: consider introducing a named lifetime parameter
   |
44 | fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
   |       ++++      ++           ++          ++

For more information about this error, try `rustc --explain E0106`.
error: could not compile `lifetime-test` (bin "lifetime-test") due to 1 previous error
 ***********************
 */
```

On the other hand, a function doesn't need explicit lifetimes if it isn't returning a reference in its arguments. For example:

```
fn print_longest(s1: &str, s2: &str) {
    if s1.len() > s2.len() {
        println!("{s1} is longer than {s2}")
    } else {
        println!("{s2} is longer than {s1}")
    }
}
```

A function returning a different value doesn't need explicit lifetime annotations either:

```
fn join_strs(s1: &str, s2: &str) -> String {
    let mut joint_string = String::from(s1);
    joint_string.push_str(s2);
    return joint_string;
}
```

You only need to specify lifetimes if a function returns a reference from one of its arguments that is a borrowed reference.

## Lifetime Annotations in Structs

Structs require explicit lifetime annotations when any of their fields are references. This allows the borrow checker to ensure that the references in the struct's fields live longer than the struct. For example:

```
struct Strs<'a, 'b> {
    x: &'a str,
    y: &'b str,
}
```

Without the lifetime annotations, you'll get a similar LSP and compiler error message to the one in the previous section:

```
struct OtherStruct {
    x: &str,
    y: &str,
}

/**
* Output ->
**********************
error[E0106]: missing lifetime specifier
 --> src/main.rs:7:8
  |
7 |     x: &str,
  |        ^ expected named lifetime parameter
  |
help: consider introducing a named lifetime parameter
  |
6 ~ struct OtherStruct<'a> {
7 ~     x: &'a str,
  |

error[E0106]: missing lifetime specifier
 --> src/main.rs:8:8
  |
8 |     y: &str,
  |        ^ expected named lifetime parameter
  |
help: consider introducing a named lifetime parameter
  |
6 ~ struct OtherStruct<'a> {
7 |     x: &str,
8 ~     y: &'a str,
  |

For more information about this error, try `rustc --explain E0106`.
error: could not compile `lifetime-test` (bin "lifetime-test") due to 2 previous errors
**********************
*/
```

## Lifetime Annotations in Methods

Lifetime annotations concerning methods can be done as annotations to standalone methods, `impl` blocks, or traits. Let's look at each of them:

### Standalone Methods:

Annotating lifetimes on standalone methods is identical to annotating lifetimes in functions:

```
impl Struct {
    fn max<'a>(self: &Self, s1: &'a str, s2: &'a str) -> &'a str {
        if s1.len() > s2.len() {
            s1
        } else {
            s2
        }
    }
}
```

### `impl` Blocks

Writing explicit lifetime annotations for `impl` blocks is required if the struct it is associated with has lifetime annotations in its definition. This is the syntax for writing `impl` blocks with explicit lifetime annotations:

```
struct Struct<'a> {
}

impl<'a> Struct<'a> {
}
```

This allows any method you write in the `impl` block to return a reference from `Struct`. For example:

```
struct Strs<'a> {
    x: &'a str,
    y: &'a str,
}

impl<'a> Strs<'a> {
    fn max(self: &Self) -> &'a str {
        if self.y.len() > self.x.len() {
            self.y
        } else {
            self.x
        }
    }
}
```

### Traits

Lifetime annotations in traits are dependent on the methods that the trait defines.

Let's look at one example. A method inside a trait definition can use explicit lifetime annotations as a standalone method, and the trait definition won't require explicit lifetime annotations. Like so:

```
trait Max {
    fn longest_str<'a>(s1: &'a str, s2: &'a str) -> &'a str;
}

impl<'a> Max for Struct<'a> {
    fn longest_str(s1: &'a str, s2: &'a str) {
        if s1.len() > s2.len() {
            s1
        } else {
            s2
        }
    }
}
```

If a trait method requires references from the struct its associated with, the trait's definition would require explicit lifetime annotations. For example:

```
trait Max<'a> {
    fn max(self: &Self) -> &'a str;
}
```

Which can be implemented this way:

```
struct Strs<'a> {
    x: &'a str,
    y: &'a str,
}

trait Max<'a> {
    fn max(self: &Self) -> &'a str;
}

impl<'a> Max<'a> for Strs<'a> {
    fn max(self: &Self) -> &'a str {
        if self.y.len() > self.x.len() {
            self.y
        } else {
            self.x
        }
    }
}
```

## Lifetime Annotations in Enums

Similar to structs, enums need explicit lifetime annotations if any of their fields are references. For example:

```
enum Either<'a> {
    Str(String),
    Ref(&'a String),
}
```

## The `'static` Lifetime

In many Rust projects, you'll likely have encountered variables that are `'static` in lifetimes. In this section, we'll go over a brief overview of what a `'static` lifetime is, how it works, and where it is commonly used.

`'static` is a reserved lifetime name in Rust. It signifies that the data that a reference points to lives from where it is initialized to the end of the program. This differs slightly from static variables, which are stored directly in the program's binary file. However, all static variables have a `'static` lifetime.

Variables with `'static` lifetimes can be created at runtime. But they can't be dropped, only coerced into shorter lifetimes. For example:

```
// The lifetime annotation 'a is the shorter lifetime of the
// two arguments s1 and s2
fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}

fn main() {
    let first = "First string"; // Longer lifetime

    {
        let second = "Second string"; // Shorter lifetime

        // In the max function, the lifetime of first is
        // coerced into the lifetime of second
        println!("The biggest of {} and {} is {}", first, second, max(first, second));
    };
}
```

String literals are examples of values with `'static` lifetimes. They are also stored in the program's binary file and can be created at runtime.

Rust allows you to declare static variables with the `static` keyword, using this syntax:

```
static IDENTIFIER: &'static str = "value";
```

Static variables can be declared in any scope, including the global scope. This means that you can use static variables as global variables. For example:

```
static FIRST_NAME: &'static str = "John";
static LAST_NAME: &'static str = "Doe";

fn main() {
    println!("First name: {}", FIRST_NAME);
    println!("Last name: {}", LAST_NAME);
}
```

Static variables can also be mutable or immutable. But working with mutable static variables is only allowed in `unsafe` blocks because they're unsafe.

```
static mut FIRST_NAME: &'static str = "John";
static LAST_NAME: &'static str = "Doe";

fn main() {
    unsafe {
        println!("First name: {}", FIRST_NAME);
    }
    println!("Last name: {}", LAST_NAME);
    unsafe {
        FIRST_NAME = "Jane";
        println!("First name changed to: {}", FIRST_NAME);
    }
}
```

## Summary

Lifetimes in Rust help the borrow checker ensure that all borrowed references are valid. The borrow checker can detect the lifetimes of variables in many cases, but in cases where it can't you have to assist it with explicit lifetime annotations.

Explicit lifetime annotations are those `'a`, `'b`, and `'static` things you see in many Rust projects. You only need to use them in structures (structs, enums, traits, and impls) that deal with references, and in functions or methods that receive and return references.

In this guide, you learned about explicit lifetime annotations and saw some examples of how to use them. I it gave you some clarity on the topic, and helped you understand lifetimes better.

Thanks for reading!

[1]: https://doc.rust-lang.org/rust-by-example/scope/borrow.html