---
title: How Asynchronous Programming Works in Rust – Futures and Async/Await
  Explained with Examples
date: 2024-10-21T03:41:51.177Z
author: Oduah Chigozie
authorURL: https://www.freecodecamp.org/news/author/GhoulKingR/
originalURL: https://www.freecodecamp.org/news/how-asynchronous-programming-works-in-rust/
posteditor: ""
proofreader: ""
---

If you're familiar with languages like JavaScript and Python, you may have heard about asynchronous programming. And perhaps you're wondering how it works in Rust.

<!-- more -->

In this article, I'll give you a simple overview of how asynchronous programming works in Rust. You'll learn about futures as well as `async`/`.await`.

This article isn't a beginner's guide to Rust or asynchronous programming, so you'll need to have some experience with programming in Rust and familiarity with asynchronous programming to get the most out of this guide.

With that said, let's begin!

## When Should You Use Asynchronous Programming?

Asynchronous tasks work like a more integrated version of threads. You can use them in a lot of the same scenarios where you can use multiple threads. The benefits async programming provides over multiple threads is that multi-threaded applications have a larger overhead to work on multiple tasks compared to asynchronous applications.

But this doesn’t make asynchronous applications better than multithreaded applications. Multi-threaded programs can run multiple computing-intensive tasks simultaneously – and multiple times faster than if you ran all the tasks in a single thread.

With asynchronous coding, trying to run multiple computing-intensive applications simultaneously will be much slower than just running every task on a single thread.

Asynchronous programming is very good for building applications that make many network requests or many IO operations like file reading and writing.

I can’t cover every case when you’ll want to use asynchronous techniques. But I can say that it’s most beneficial for tasks that have a lot of idle time (for example, waiting for a server to respond to a network request).

During the idle time of an asynchronous task, instead of blocking the thread, the event handler works on other tasks in the program until the asynchronous task is ready to make progress.

## Overview of Asynchronous Rust – Futures

The basics of asynchronous Rust are Futures. Futures are similar to promises in JavaScript. They are Rust's way of saying "hey, I'm going to give you the result later, but just hold on to this (the future instance) to keep track of if the result is ready."

Futures are traits, with a `poll` state that is either `Poll::Pending` to signify that the future is in the process of executing its task, or `Poll::Ready` to signify that the future is done with its task.

Futures are lazy. They run when you `.await` them (we'll look into how to `.await` them in the next section). `.await`ing a future pauses the execution of an asynchronous thread, and begins running its task. At this point the result of the `poll` method is `Poll::Pending`. When the future is done with its task, `poll`'s state will become `Poll::Ready`, and the future will allow it's thread to proceed.

If you want to get more into the technical details about Futures, you can check out [the documentation][1].

## async/.await in Rust

`async` and `.await` are the primary ways you'll be working with asynchronous code in Rust. `async` is a keyword for declaring asynchronous functions. Within those functions, the `.await` keyword pauses its execution until the result of the future is ready.

Let's take a look at an example:

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

Any asynchronous function declared with `async fn` wraps its return value in a future. On the third line of `secondFunc`, we `.await` the future from `add(a, b)` to get its result before proceeding to return it.

## How to Work with Asynchronous Operations in `main`

Rust doesn’t allow you to `async fn` main functions. Running asynchronous operations from a non-asynchronous function may lead to some operations not fully concluding before the main thread is exited.

In this section, we’ll look at two ways solve this issue. The two ways to do this are with `futures` and `tokio`. Let's look at both.

### `tokio`

`tokio` is a platform that provides tools and APIs for performing asynchronous applications. `tokio` also allows you to easily declare an asynchronous main function, which will help with the issue I described earlier.

To install `tokio` in your project, add this line to its `Cargo.toml`:

```
[dependencies]
tokio = { version = "1", features = ["full"] }
```

After adding the line, you can write your `main` functions like this:

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

### The `futures` library

`futures` is a library that provides methods for working with asynchronous Rust. For our use case, `futures` provides `futures::executor::block_on()`. This method works similar to `.await` in asynchronous functions. It blocks the main thread, until the result of future is ready. `futures::executor::block_on()` also returns the result of the completed future.

To install `futures` in your project, add this line to its `Cargo.toml`:

```
[dependencies]
futures = "0.3"
```

After installing the library, you can do something like this:

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

First, we import the `block_on` method on the first line and use the method to block the main thread until the result of the `add(a, b)` function was ready. We also didn’t have to make the `main` function asynchronous like we did with `tokio`.

## Conclusion

Asynchronous programming allows you to run operations in parallel and with less overhead and complexity compared to traditional multi-threading. In Rust, it allows you to build I/O and network applications more efficiently.

While this article should help you become familiar with the basics asynchronous programming in Rust, it’s still just an overview. There are some cases where you'll need to use other constructs in Rust like Pinning, Arcs, and so on.

If you have any questions or thoughts, feel free to reach out to me. Thanks for reading!

[1]: https://rust-lang.github.io/async-book/02_execution/01_chapter.html