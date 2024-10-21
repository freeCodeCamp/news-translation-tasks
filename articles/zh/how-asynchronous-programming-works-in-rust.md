---
title: Rust 中异步编程的工作原理 – 用例子解释 Futures 和 Async/Await
date: 2024-10-21T03:41:51.177Z
author: Oduah Chigozie
authorURL: https://www.freecodecamp.org/news/author/GhoulKingR/
originalURL: https://www.freecodecamp.org/news/how-asynchronous-programming-works-in-rust/
posteditor: ""
proofreader: ""
---

如果你熟悉 JavaScript 和 Python 等语言，你可能已经听说过异步编程。也许你想知道它在 Rust 中是如何工作的。

<!-- more -->

在本文中，我将简单概述异步编程在 Rust 中的工作原理。你将了解 Futures 以及 `async`/`.await`。

本文不是 Rust 或异步编程的入门指南，因此你需要对 Rust 编程和异步编程有一定的经验，才能充分利用本指南。

说到这里，我们开始吧！

## 什么时候应该使用异步编程？

异步任务就像线程的更集成版本。你可以在许多情况下使用它们，就像使用多个线程一样。异步编程提供的好处是，与多线程应用程序相比，异步应用程序在处理多任务时的开销更小。

但这并不意味着异步应用程序优于多线程应用程序。多线程程序可以同时运行多个计算密集型任务，这比在单个线程上运行所有任务要快得多。

使用异步编码，尝试同时运行多个计算密集型应用程序会比在单个线程上运行每个任务慢得多。

异步编程非常适合构建进行许多网络请求或许多 IO 操作（如文件读写）的应用程序。

我无法涵盖你想要使用异步技术的每一个情况。但我可以说，它对具有大量空闲时间的任务（例如，等待服务器响应网络请求）最有利。

在异步任务的空闲时间内，事件处理程序不会阻塞线程，而是在程序中处理其他任务，直到异步任务准备好继续。

## 异步 Rust 概览 – Futures

异步 Rust 的基础是 Futures。Futures 类似于 JavaScript 中的 promises。它们是 Rust 的方式，用来表示“嘿，我稍后会给你结果，但请先保留这个（future 实例）来跟踪结果是否准备好了。”

Futures 是特征值，具有一个 `poll` 状态，要么是 `Poll::Pending`，表示 future 正在执行其任务，要么是 `Poll::Ready`，表示 future 已完成其任务。

Futures 是惰性的。当你 `.await` 它们时（我们将在下一部分讨论如何 `.await` 它们）才会运行。`.await` 一个 future 会暂停异步线程的执行，并开始运行其任务。此时，`poll` 方法的结果是 `Poll::Pending`。当 future 完成其任务时，`poll` 的状态将变为 `Poll::Ready`，并且 future 将允许线程继续。

如果你想深入了解 Futures 的技术细节，可以查看[文档][1]。

## Rust 中的 async/.await

`async` 和 `.await` 是你在 Rust 中处理异步代码的主要方式。`async` 是用于声明异步函数的关键字。在这些函数中，`.await` 关键字会暂停其执行，直到 future 的结果准备好。

让我们看看一个例子：

```
async fn add(a: u8, b: u8) -> u8 {
    a + b
}

async fn secondFunc() -> u8 {
    let a = 10;
    let b = 20;
    let result = add(a, b).await;
    return result;
}
```

任何使用 `async fn` 声明的异步函数都会将其返回值包装在一个 future 中。在 `secondFunc` 的第三行，我们 `.await` `add(a, b)` 的 future 以获取其结果，然后再返回它。

## 如何在 `main` 中处理异步操作

Rust 不允许你为主函数使用 `async fn`。从非异步函数运行异步操作可能会导致某些操作在主线程退出之前未完全完成。

在本节中，我们将探讨解决这个问题的两种方法。这两种方法是使用 `futures` 和 `tokio`。让我们分别来看看。

### `tokio`

`tokio` 是一个平台，它提供了用于执行异步应用程序的工具和 API。`tokio` 还允许你轻松地声明异步主函数，这将有助于解决我之前描述的问题。

要在项目中安装 `tokio`，请在其 `Cargo.toml` 中添加这一行：

```
[dependencies]
tokio = { version = "1", features = ["full"] }
```

添加该行后，你可以像这样编写你的 `main` 函数：

```
async fn add(a: u8, b: u8) -> u8 {
    a + b
}

#[tokio::main]
async fn main() {
    let a = 10;
    let b = 20;
    let result = add(a, b).await;
    println!("{result}");
}
```

### `futures` 库

`futures` 是一个提供用于处理异步 Rust 的方法的库。对于我们的用例，`futures` 提供了 `futures::executor::block_on()`。这种方法类似于异步函数中的 `.await`。它会阻塞主线程，直到 future 的结果准备好。`futures::executor::block_on()` 还返回已完成的 future 的结果。

[1]: https://docs.rs/futures/latest/futures/


```
[dependencies]
futures = "0.3"
```

在安装该库后，您可以进行如下操作：

```
use futures::executor::block_on;

async fn add(a: u8, b: u8) -> u8 {
    a + b
}

fn main() {
    let a = 10;
    let b = 20;
    let result = block_on(add(a, b));
    println!("{result}"); 
}
```

首先，我们在第一行引入了 `block_on` 方法，并使用该方法阻塞主线程，直到 `add(a, b)` 函数的结果准备好为止。我们也不需要像使用 `tokio` 那样将 `main` 函数设为异步。

## 结论

异步编程允许您以较少的开销和复杂性并行运行操作，相较于传统的多线程。在 Rust 中，它允许您更高效地构建 I/O 和网络应用。

虽然本文应能帮助您熟悉 Rust 异步编程的基础知识，但这仍然只是一个概述。有些情况下，您需要使用 Rust 中的其他结构，比如 Pinning、Arcs 等。

如果您有任何问题或想法，请随时联系我们。感谢阅读！

[1]: https://rust-lang.github.io/async-book/02_execution/01_chapter.html


