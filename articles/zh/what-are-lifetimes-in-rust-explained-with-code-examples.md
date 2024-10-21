---
title: Rust 中的生命周期是什么？通过代码示例解释
date: 2024-10-21T03:39:49.933Z
author: Oduah Chigozie
authorURL: https://www.freecodecamp.org/news/author/GhoulKingR/
originalURL: https://www.freecodecamp.org/news/what-are-lifetimes-in-rust-explained-with-code-examples/
posteditor: ""
proofreader: ""
---

生命周期是 Rust 中的基本机制。在任何具有一定复杂性的 Rust 项目中，您很可能需要处理生命周期。

<!-- more -->

即使它们对 Rust 项目很重要，但生命周期可能让人不易理解。所以我创建了这个指南，以提供更多关于它们是什么以及何时使用它们的清晰解释。

### 本教程的前提条件

要充分利用本教程，您需要：

- 至少具备 Rust 的初级水平：本教程不帮助学习如何用 Rust 编程。它仅帮助理解 Rust 中的生命周期及其工作原理。
  
- 熟悉泛型：Rust 中的泛型工作方式与流行的编程语言相同。了解任何语言中泛型的工作方式会有所帮助。
  
- 了解借用检查器的工作原理不是像上面两个一样必需，但会有所帮助。了解生命周期的工作原理亦有助于理解借用检查器的工作。

## 那么，Rust 中的生命周期是什么？

为让 Rust 的 [借用检查器][1] 保证代码的安全性，它需要知道程序中所有数据在执行期间的存活时间。在某些情况下，这就变得困难了，在这些情况下就需要使用显式生命周期注解。

Rust 中的生命周期是用来确保代码中发生的所有借用都是有效的机制。变量的生命周期是指它在程序执行过程中存活的时间，从初始化开始到程序中被销毁结束。

借用检查器在很多情况下可以检测变量的生命周期。但在它无法做到的情况下，您需要用显式生命周期注解来协助它。

显式生命周期注解的语法是一个单引号加上一组用于标识的字符（例如，`'static`，`'a`），如下所示：

```
max<'a>
```

生命周期注解表示 `max` 的生命周期最长应与 `'a` 一样长。

使用多个生命周期遵循相同的语法：

```
max<'a, 'b>
```

在这种情况下，生命周期注解表示 `max` 的生命周期最长应与 `'a` 和 `'b` 一样长。

显式生命周期注解的处理方式类似于泛型。让我们来看一个例子：

```
fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    // 返回两个字符串中最长的一个
}
```

在这个例子中，生命周期注解表示 `max` 的生命周期最长应与 `s1` 或 `s2` 的生命周期一样长。它还表明 `max` 返回一个与 `s1` 一样长的引用。

Rust 项目中有很多需要显式生命周期注解的情况，在接下来的几节中，我们将逐一介绍。

## 函数中的生命周期注解

一个函数只有在从它的任何参数返回引用时才需要显式生命周期注解。让我们举个例子：

```
fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}
```

如果您移除生命周期注解，您将收到一个 LSP（语言服务器协议）警告，让您加入生命周期注解。如果您忽略 LSP 的警告信息并编译代码，您将收到相同的信息作为编译器错误。例如：

```
fn max(s1: &str, s2: &str) -> &str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}

/**
 * 输出 ->
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

对于更多关于此错误的信息，请尝试 `rustc --explain E0106`.
error: 无法编译 `lifetime-test` (bin "lifetime-test") 由于之前的 1 个错误
 ***********************
 */
```

另一方面，如果一个函数没有在其参数中返回引用，则不需要显式生命周期。例如：

```
fn print_longest(s1: &str, s2: &str) {
    if s1.len() > s2.len() {
        println!("{s1} is longer than {s2}")
    } else {
        println!("{s2} is longer than {s1}")
    }
}
```

一个返回不同值的函数也不需要显式生命周期注解：

```
fn join_strs(s1: &str, s2: &str) -> String {
    let mut joint_string = String::from(s1);
    joint_string.push_str(s2);
    return joint_string;
}
```

只有当函数返回一个来自其参数之一的借用引用时，您才需要指定生命周期。

结构体在其字段包含引用时需要明确的生命周期注解。这会让借用检查器确保结构体字段中的引用的生命周期比结构体长。例如：

```
struct Strs<'a, 'b> {
    x: &'a str,
    y: &'b str,
}
```

没有生命周期注解的话，你会遇到和上一节类似的 LSP 和编译器错误信息：

```
struct OtherStruct {
    x: &str,
    y: &str,
}

/**
* 输出 ->
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

## 方法中的生命周期注解

方法中的生命周期注解可以在独立方法、`impl` 块或 trait 中进行。让我们来看看每一种情况：

### 独立方法：

在独立方法上注解生命周期与在函数中注解生命周期是一样的：

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

### `impl` 块

如果关联的结构体在其定义中有生命周期注解，那么 `impl` 块也需要显式的生命周期注解。下面是带有显式生命周期注解的 `impl` 块的写法：

```
struct Struct<'a> {
}

impl<'a> Struct<'a> {
}
```

这样任何在 `impl` 块中编写的方法都可以从 `Struct` 返回一个引用。例如：

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

在 traits 中的生命周期注解依赖于 trait 所定义的方法。

让我们看一个例子。trait 定义中的方法可以像独立方法一样使用显式生命周期注解，并且 trait 本身不需要显式生命周期注解。例如：

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

如果 trait 方法需要从其关联的结构体获取引用，trait 的定义就需要显式生命周期注解。例如：

```
trait Max<'a> {
    fn max(self: &Self) -> &'a str;
}
```

可以这样实现：

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

## 枚举中的生命周期注解

与结构体类似，如果枚举中的字段有引用，则枚举也需要显式的生命周期注解。例如：

```
enum Either<'a> {
    Str(String),
    Ref(&'a String),
}
```

## `'static` 生命周期

在许多 Rust 项目中，你可能会遇到生命周期是 `'static` 的变量。在本节中，我们将简要概述什么是 `'static` 生命周期，它如何工作，以及它常见的使用场景。

`'static` 是 Rust 中一个保留的生命周期名称。它表示引用指向的数据从初始化一直活到程序结束。这和静态变量有些不同，静态变量直接存储在程序的二进制文件中。然而，所有静态变量都有一个 `'static` 生命周期。

具有 `'static` 生命周期的变量可以在运行时创建。但它们不能被释放，只能被强制转换为较短的生命周期。例如：

```
// 生命周期注解 'a 是两个参数 s1 和 s2 中较短的生命周期
fn max<'a>(s1: &'a str, s2: &'a str) -> &'a str {
    if s1.len() > s2.len() {
        s1
    } else {
        s2
    }
}

fn main() {
    let first = "First string"; // 较长的生命周期

    {
        let second = "Second string"; // 较短的生命周期

        // 在 max 函数中，first 的生命周期被强制转换为 second 的生命周期
        println!("The biggest of {} and {} is {}", first, second, max(first, second));
    };
}
```

字符串字面量是一个具有 `'static` 生命周期的值的例子。它们也存储在程序的二进制文件中，可以在运行时创建。

Rust 允许你使用 `static` 关键字声明静态变量，语法如下：

静态变量可以在任何作用域中声明，包括全局作用域。这意味着你可以将静态变量用作全局变量。例如：

```
static FIRST_NAME: &'static str = "John";
static LAST_NAME: &'static str = "Doe";

fn main() {
    println!("First name: {}", FIRST_NAME);
    println!("Last name: {}", LAST_NAME);
}
```

静态变量也可以是可变的或不可变的。但处理可变静态变量只能在`unsafe`块中进行，因为它们是不安全的。

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

## 总结

Rust 中的生命周期帮助借用检查器确保所有借用的引用都是有效的。借用检查器可以在许多情况下检测到变量的生命周期，但在无法检测的情况下，你需要通过显式生命周期注解来辅助它。

显式生命周期注解就是你在许多 Rust 项目中看到的那些 `'a`，`'b` 和 `'static`。你只需要在处理引用的结构体（结构体、枚举、特性和实现）中以及在接收和返回引用的函数或方法中使用它们。

在本指南中，你学习了显式生命周期注解并看到了一些如何使用它们的示例。希望它为你在这个主题上提供了一些清晰的理解，并帮助你更好地理解生命周期。

感谢阅读！

[1]: https://doc.rust-lang.org/rust-by-example/scope/borrow.html

