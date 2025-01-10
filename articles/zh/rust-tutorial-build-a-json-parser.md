---
title: Rust 教程 – 通过构建 JSON 解析器学习高级迭代器和模式匹配
date: 2024-10-21T03:43:46.843Z
author: Anshul Sanghi
authorURL: https://www.freecodecamp.org/news/author/anshulsanghi/
originalURL: https://www.freecodecamp.org/news/rust-tutorial-build-a-json-parser/
posteditor: hezean
proofreader: ""
---

迭代器和模式匹配是 Rust 中使用最频繁的两个语言特性。如果你写过任何现实世界的应用程序，无论大小，你很可能已经使用过这些特性，无论你是否意识到。

<!-- more -->

在本教程中，我旨在通过编写一个大量使用这些特性的 JSON 解析器，帮助你理解它们实际上是如何工作的 —— 它们的多种常见用法，以及它们的强大之处。

## 免责声明

本教程的目标是创建一个在实际开发中广泛使用匹配模式和迭代器的库，而不是编写一个高效或与 JSON 标准完全兼容的 JSON 解析器。

如果你对 JSON 非常熟悉，你会注意到代码中缺少很多东西，最大的缺陷是在遇到无效标记时的错误处理，以及向用户提供反馈或帮助说明 JSON 中的问题。

此外，作为例子，该程序也未处理字符串文本中的转义字符和序列。大多数情况下，代码假定你有一个有效的 JSON。

## 前提条件

虽然本教程适用于任何经验水平的 Rust 程序员，但对基本迭代器和 Rust 中的模式匹配有一定经验或理解会对你理解本教程有帮助。

本教程也假设你已经熟悉 Rust 的基础概念，例如 `traits`、`structs`、`enums`、`for` 循环、`impl` 块等。教程会介绍 `iterator` 和 `match`，所以不需要熟悉这些也能从中受益。

## 目录

1.  [Rust 中的迭代器是什么？][1]
    1.  [如何在 Rust 中实现迭代器][2]
    2.  [Rust 中的可预览迭代器是什么？][3]
2.  [Rust 中的 match 语句是什么？][4]
    1.  [如何在 Rust 的 match 语句中使用迭代器][5]
    2.  [Rust 中的 match 卫语句是什么？][6]
    3.  [Rust 中的绑定是什么？][7]
3.  [如何构建一个 JSON 解析器 – 第一步：Reader][8]
    1.  [什么是 UTF-8 字节编码？][9]
    2.  [如何读取数据][10]
    3.  [如何为 JsonReader 实现迭代器][11]
4.  [如何构建一个 JSON 解析器 – 第二步：准备中间数据类型][12]
    1.  [值类型][13]
    2.  [如何添加有用的转换方法][14]
5.  [如何构建一个 JSON 解析器 – 第三步：分词][15]
    1.  [如何定义预期的有效 token][16]
    2.  [如何实现分词器结构体][17]
    3.  [如何对字符迭代器进行分词][18]
    4.  [如何解析字符串 token][19]
    5.  [如何解析数字 token][20]
    6.  [如何解析布尔值 token][21]
    7.  [如何解析 null 字面量][22]
    8.  [如何解析分隔符][23]
    9.  [如何解析终止字符][24]
6.  [如何构建一个 JSON 解析器 – 第四步：将 token 转换为值][25]
    1.  [如何解析基本数据类型][26]
    2.  [如何解析数组][27]
    3.  [如何解析对象][28]
7.  [如何使用我们的 JSON 解析器][29]
8.  [总结][30]

<h2 id="heading-what-are-iterators-in-rust">Rust 中的迭代器是什么？</h2>

迭代器不是新概念，也不是 Rust 独有的。它既是一种模式，同时在大多数编程语言中实现为一种用于处理列表（如数组或向量）或集合（如哈希Map）的对象，允许你遍历这些数据类型和处理其中的个别条目。

在 Rust 中，迭代器是一个非常强大的功能。官方的 Rust 书籍描述它为：

> 迭代器模式允许你依次对一个项目序列执行某些任务。迭代器负责迭代每个项目的逻辑以及确定序列何时结束。使用迭代器时，你不必自己重新实现该逻辑。
> 
> 在 Rust 中，迭代器是_惰性_的，意味着在你调用使用它的方法来消耗它之前，它们不会产生任何效果。

迭代器是一个对象，它帮助我们方便地依次访问集合（如数组或向量）的元素，而不暴露其实现细节。

<h3 id="heading-how-to-implement-iterators-in-rust">如何在 Rust 中实现迭代器</h3>

迭代器在 Rust 中是通过一系列 trait 实现的，其中最基本的是 `Iterator` trait。它在标准库中的所有集合上都有实现，也可以为自定义类型实现。

> 它要求实现一个简单的方法： `next()`。该方法返回一个 `Option<T>`，其中 `T` 是迭代器所针对的元素类型。当 `next()` 被调用时（在大多数情况下，这种调用是隐式的，你一般会使用更高级的方法），迭代器为序列中的下一个元素生成 `Some(value)`，或在迭代完成时生成 `None`。在大多数情况下，值是 `Some` 还是 `None` 同样是隐式的。

例如，任何实现了 `Iterator` trait 的对象，都可以直接在 `for` 循环中使用，循环会隐式地处理 `next` 方法的调用以及处理值是 `Some` 还是 `None`。`None` 值会触发循环结束。这对于内置类型如数组、切片、向量和哈希map同样适用。

作为示例，让我们为一个简单的自定义类型实现 Iterator trait。你需要在类型中存储迭代器的当前状态。你还可以存储任何需要的附加信息。在这里，我们只需要知道迭代结束时的最大值：

```rust
use std::iter::Iterator;

struct CustomType {
    current: usize,
    max: usize,
}

impl CustomType {
    fn new(max: usize) -> Self {
        Self {
            current: 0,
            max,
        }
    }
}

impl Iterator for CustomType {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        if self.current >= self.max {
            None
        } else {
            self.current += 1;
            Some(self.current)
        }
    }
}

fn main() {
    let custom = CustomType::new(10);

    for item in custom {
        println!("当前项：{item}");
    }
}
```

```
# 输出

当前项：1
当前项：2
当前项：3
当前项：4
当前项：5
当前项：6
当前项：7
当前项：8
当前项：9
当前项：10
```

Rust 的迭代器是懒加载的，这意味着如果你不使用一个迭代器，它不会做任何计算。也就是说，只有在你真正需要获取下一个值并使用时，它才会去计算下一个值是什么。

这也意味着如果你有一连串的操作，比如 `map` 和 `filter`，每个项目会先经过整个管道，然后才会处理下一个项目。这不同于许多其他支持 `map` 和 `filter` 作为方法的语言，后者会先对所有操作进行整个 `map` 处理，然后再执行 `filter`。

如果仔细考虑一下，相较于其他实现，迭代器使我们能够以更简单的方式编写并行处理管道。

由于 `Iterator` 只是一个 trait，它允许迭代器通过各种适配器方法进行链式连接和转换成其他迭代器（可以是标准库中的，也可以是自己实现的）。

<h3 id="heading-what-are-peekable-iterators-in-rust">Rust 中的可预览的迭代器是什么？</h3>

很多时候，你需要知道下一个元素是什么，以决定如何操作，而不实际修改迭代器状态以移动到下一个元素。这在解析 token 的过程中特别必要，比如我们在本教程后面将要做的那样。

这就是 `Peekable` 结构体的用武之地。你可以通过调用 `peekable` 方法将任意迭代器转换成可预览的迭代器。

让我们看一下之前的例子，看看 Peekable 实际是如何工作的：

```rust
use std::iter::Iterator;

struct CustomType {
    current: usize,
    max: usize,
}

impl CustomType {
    fn new(max: usize) -> Self {
        Self {
            current: 0,
            max,
        }
    }
}

impl Iterator for CustomType {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        if self.current >= self.max {
            None
        } else {
            self.current += 1;
            Some(self.current)
        }
    }
}

fn main() {
    let mut custom = CustomType::new(2).peekable();

    let first = custom.peek();
    println!("{first:?}");

    let second = custom.next();
    println!("{second:?}");

    let third = custom.next();
    println!("{third:?}");

    let fourth = custom.next();
    println!("{fourth:?}");
}
```

```
# 输出

Some(1)
Some(1)
Some(2)
None
```

我还想向你展示如何在没有 for 循环的情况下手动使用迭代器，这就是为什么你会看到对 `next` 方法的调用，以及它返回 `Option` 而不是直接返回值。

另外注意 `first` 和 `second` 变量都是 `Some(1)`。这是因为我们第一次调用 `peek` 它返回了第一个元素，但没有修改迭代器的状态。

<h2 id="heading-what-is-the-match-statement-in-rust">Rust 中的 match 语句是什么？</h2>

`match` 语句是 Rust 中一种模式匹配的语法，它允许你以简洁的语法有条件地根据复杂条件运行代码。你可以把它看作其他语言中的 `switch` 语句，但功能更强大。

一个非常简单的 `match` 语句的例子是：

```rust
let value = true;

match value {
    true => {
        println!("值是 true")
    },
    false => {
        println!("值是 false")
    }
}
```

上面定义的各种条件，也就是 `true` 和 `false`，被称为分支。每个分支可以有一个匹配，或多个用竖线 `|` 运算符分隔匹配，或范围。它们还可以为每个分支指定 `guards` 和 `binding`。让我们看看这些分别是什么意思：

```rust
// 每个分支多个条件

let value = "some_string";

match value {
    "some_string1" | "some_string2" | "some_string3" => {
        println!("不好的匹配");
    }
    "some_string" => {
        println!("好的匹配");
    }
    _ => {
        println!("未匹配");
    }
}
```

注意上面例子中的 `_` 分支。`match` 语句要求你覆盖所有可能的情况。在第一个例子中，由于值是一个布尔值，只有两个可能的值，`true` 和 `false`。因此在第一个例子中，我们已经覆盖了所有可能的值。

但是在第二个例子中，我们匹配的值是一个字符串（更确切地说是 `&str`）。字符串可以是任何值。对于这个例子，写一个能覆盖所有可能情况的 `match` 语句是不可能的。好在 Rust 有一个特殊的匹配符 `_` 可以匹配任何值。

如果你对 JavaScript 或 C（或许多其他具有传统 `switch` 语法的语言）比较熟悉，`_` 相当于 `switch` 中的 `default` 情况，但你不必使用 `_`，你也可以将其绑定到一个变量并以不同方式处理。我们很快会看看要如何做到这一点。

<h3 id="heading-how-to-use-iterators-in-match-statements-in-rust">如何在 Rust 的 match 语句中使用迭代器</h3>

一个 match 语句允许你使用迭代器作为分支。当匹配的值是迭代器中的某个值时，就会产生一个成功的匹配。例如，假设你在匹配一个 `char` 类型是否是一个数字。你可以编写一个包含所有数字字符的简单字符迭代器，并将其用作分支：

```rust
let value: char = '5';

match value {
    '0'..='9' => {
        println!("字符是一个数字");
    }
    _ => {
        println!("字符不是数字");
    }
}
```

上述示例将打印 "字符是一个数字"。如果你不熟悉 `..=` 语法，这是一种简写，用于创建一个范围内的迭代器。在上例中，迭代器从 `'0'` 字符开始，到 `'9'` 字符结束，包括之间的所有字符。

你也可以使用 `1..5` 来创建一个范围在 1 到 5 之间但不包括 5 的迭代器，使其包含 `1, 2, 3, 4`。

此外，你可以使用一个保存了迭代器的变量作为值，这意味着迭代器不需要在内联中创建：

```rust
let list = vec!["1, 2", "3, 4"].iter();
let value = "3, 4";

match value {
    list => {
        println!("匹配");
    }
    _ => {
        println!("未匹配");
    }
}
```

注意，上述示例在 vec 上调用 `.iter()`，以在 `list` 变量中存储迭代器而不是向量。匹配分支不能有方法调用，因此必须在 match 语句之外将值转换为迭代器。

<h3 id="heading-what-are-match-guards-in-rust">Rust 中的 match 卫语句是什么？</h3>

match 语句中的卫语句（guard）是使得某个分支被视为成功匹配需要满足的附加条件。例如，如果你想匹配一组数字，还要判断它们是奇数还是偶数，卫语句就非常有用。

这个语法也非常直观，形式是 `<pattern> if <condition> => {}`。

```rust
let value: u8 = 5;

match value {
    0..=9 if value % 2 == 0 => {
        println!("值是偶数");
    }
    0..=9 if value % 2 == 1 => {
        println!("值是奇数");
    }
    _ => {
        println!("无效的值");
    }
}
```

上述代码将打印 "值是奇数"。

<h3 id="heading-what-is-binding-in-rust">Rust 中的绑定是什么？</h3>

绑定允许你在某个分支中将值存储在可以使用的变量中。它基本上是将匹配值中的某些部分赋值给变量。

#### 模式绑定

一个非常简单的例子是将捕获所有的模式绑定到一个变量，而不是用 `_` 忽略其值。

```rust
let value: u8 = 5;

match value {
    0..=9 if value % 2 == 0 => {
        println!("值是偶数");
    }
    0..=9 if value % 2 == 1 => {
        println!("值是奇数");
    }
    other_value => {
        println!("无效的值：{other_value}");
    }
}
```

请注意在这个例子中，如果 match 没有匹配到前面的任何模式，将会被最后一个模式捕获，其中，使用变量 `other_value` 绑定了 `value` 的值。然后我们可以在该分支的逻辑中使用这个变量。这里我们只是将其打印出来。

一些其他的绑定例子有：

```rust
let value: Option<i32> = Some(43);

match value {
    Some(matched_value) => println!("值是 {matched_value}"),
    None => println!("值为空")
}
```

在此示例中，我们在 `Some` 模式中绑定了值以存储选项的内部值，并在我们的逻辑中使用它。

```rust
pub struct Person {
    name: String,
    age: u32,
}

let value: Option<Person> = Some(Person {
    name: "Name".to_string(),
    age: 23,
});

match value {
    Some(Person { name: person_name, age }) => {
        println!("{person_name} 的年龄是 {age} 岁");
    },
    None => {
        println!("值为空");
    }
}
```

我们在这个例子中看到两种不同类型的绑定。第一种是通过解构为结构体字段赋予不同的名称（`name` 字段），第二种是使用与字段名称相同的名称（`age` 字段）。

#### `@` 绑定

Rust 官方文档描述为：

> 运算符 @ 允许我们在测试值以匹配模式的同时创建一个保存该值的变量。

在我们针对一组值或者针对迭代器进行模式匹配的例子中，我们可以使用这种语法将匹配到的值绑定到一个变量，以便在该分支中使用它：

```rust
let value: u8 = 5;

match value {
    digit @ 0..=9 => {
        println!("匹配到的值是 {digit}");
    }
    _ => {
        println!("无效的值");
    }
}
```

这里我们将迭代器中匹配的值绑定到变量 `digit`，然后在分支中使用它来读取实际值。

<h2 id="heading-how-to-build-a-json-parser-stage-1-reader">如何构建一个 JSON 解析器 – 第一步：Reader</h2>

在解析传入的 JSON 数据之前，我们需要能够以有助于解析的方式读取它。为了能够对传入的 JSON 进行标记，我们需要对每个字符逐个分析，并根据它们是表示字面值、分隔符还是无效值，决定如何处理它们以及后续字符。

这是迭代器与 Rust 的 match 语法结合使用的一个非常好的案例。

我们的读取器需要保存两个数据。一个缓冲读取器，用于遍历输入；一个字符缓冲器，用于保存当前正在解析的字符。

此时，你可能会问为什么我们需要在读取器中保存字符缓冲器，原因是 JSON 是 UTF-8 编码的。

<h3 id="heading-what-is-the-utf-8-byte-encoding">什么是 UTF-8 字节编码？</h3>

一个 UTF-8 字符可以长为 1 到 4 个字节。我们需要能够解析所有有效字符，因为 JSON 规范支持这些字符。这意味着 JSON 字符可以是 1 个字节、2 个字节、3 个字节或 4 个字节长。

对于每次迭代，我们需要一次读取 4 个字节，确定这 4 个字节包含多少个字符（例如，这 4 个字节可以包含 4 个 1 字节的字符），完成对它们的迭代，然后继续读取下一个 4 个字节并重复该过程。为了存储这段中间信息，我们需要字符缓冲区。

也可能我们在当前的 4 个字节中只有部分字符。例如，如果你考虑 2 个 1 字节字符，后跟 1 个 3 字节字符，如 `23€`，第一个 4 个字节将包含 2 个有效字符和下一个有效字符的一部分。你也需要能够处理这种情况，这将涉及重置迭代器。

可以以一种不需要分配内存的方式处理这种情况，并且出于性能原因实际上这样做更好。但我将留给你作为读者来思考如何在这种情况下实现它，因为这不是本文的重点。

我希望现在你已经清楚了为什么迭代器是这里最合适的工具。

<h3 id="heading-how-to-read-the-data">如何读取数据</h3>

我们将支持两种不同的读取器。一种是直接从缓冲读取器（通常是从文件创建的）读取，另一种是从字节迭代器读取。

这些将相当直接。要从文件读取，你需要在底层文件数据上创建一个缓冲光标：

```rust
let file = File::create("dummy.json").unwrap();
let reader = BufReader::new(file);
```

让我们从实现 JSON Reader 结构体及其上的方法开始：

```rust
// src/reader.rs

use std::collections::VecDeque;
use std::io::{BufReader, Cursor, Read, Seek};
use std::str::from_utf8;

/// 处理要解析的输入数据读取并提供按字符迭代数据的结构体。
pub struct JsonReader<T>
where
    T: Read + Seek,
{
    /// 输入数据的引用，可以是实现了 [`Read`] 的任何内容
    reader: BufReader<T>,

    /// 一个字符缓冲区，保存供迭代器使用的字符队列。
    ///
    /// 这是必要的，因为 UTF-8 可以是 1-4 个字节长。
    /// 因此，读取器总是一次读取 4 个字节。然后，我们迭代“字符”，无论它们是 1 个字节长还是 4 个字节长。
    ///
    /// 使用 [`VecDeque`] 而不是普通向量，因为字符需要从缓冲区的开始处读取。
    character_buffer: VecDeque<char>,
}

impl<T> JsonReader<T>
where
    T: Read + Seek,
{
    /// 创建一个新的 [`JsonReader`] 来从文件读取
    ///
    /// # 示例
    ///
    /// ```
    /// use std::fs::File;
    /// use std::io::BufReader;
    /// use json_parser::reader::JsonReader;
    ///
    /// let file = File::create("dummy.json").unwrap();
    /// let reader = BufReader::new(file);
    ///
    /// let json_reader = JsonReader::new(reader);
    /// ```
    pub fn new(reader: BufReader<T>) -> Self {
        JsonReader {
            reader,
            character_buffer: VecDeque::with_capacity(4),
        }
    }

    /// 创建一个新的 [`JsonReader`] 从给定的字节流读取
    ///
    /// # 示例
    ///
    /// ```
    /// use std::io::{BufReader, Cursor};
    /// use json_parser::reader::JsonReader;
    ///
    /// let input_json_string = r#"{"key1":"value1","key2":"value2"}"#;
    ///
    /// let json_reader = JsonReader::<Cursor<&'static [u8]>>::from_bytes(input_json_string.as_bytes());
    /// ```
    #[must_use]
    pub fn from_bytes(bytes: &[u8]) -> JsonReader<Cursor<&[u8]>> {
        JsonReader {
            reader: BufReader::new(Cursor::new(bytes)),
            character_buffer: VecDeque::with_capacity(4),
        }
    }
}
```

<h3 id="heading-how-to-implement-the-iterator-for-jsonreader">如何为 <code>JsonReader</code> 实现迭代器</h3>

接下来，你需要在这个 `JsonReader` 上实现 `Iterator` trait，以便于解析。

首先，如果字符缓冲区不为空，你可以从迭代器中返回缓冲区中的第一个字符：

```rust
if !self.character_buffer.is_empty() {
    return self.character_buffer.pop_front();
}
```

如果它为空，你需要创建一个新的缓冲区并从读取器中读取到该缓冲区：

```rust
let mut utf8_buffer = [0, 0, 0, 0];
let _ = self.reader.read(&mut utf8_buffer);
```

在这里，你创建了一个大小为 4 的新数组，并将从读取器中读取 4 个字节到其中。

接下来，你需要将其解析为 UTF-8。Rust 为你提供了一个 `from_utf8` 函数，它将尝试将给定字节解析为 UTF-8。如果有效，它返回一个包含解析字符的字符串。

如果无效，返回的错误信息中会包含无效字节的数量，你可以用来回溯读取器以仅保留有效字符，并从失败点尝试下一个 4 个字符。

如果这不太容易理解，查看代码会让事情变得清晰：

```rust
match from_utf8(&utf8_buffer) {
    Ok(string) => {
        self.character_buffer = string.chars().collect();
        self.character_buffer.pop_front()
    }
    Err(error) => {
        // 读取有效字节，并回溯缓冲读取器以便下次迭代时可以重新读取剩余字节。

        let valid_bytes = error.valid_up_to();
        let string = from_utf8(&utf8_buffer[..valid_bytes]).unwrap();

        let remaining_bytes = 4 - valid_bytes;

        let _ = self.reader.seek_relative(-(remaining_bytes as i64));

        // 将有效字符收集到字符缓冲区
        self.character_buffer = string.chars().collect();
    }
}
```

以下是 `Iterator` trait 的完整实现：

```rust
// src/reader.rs

impl<T> Iterator for JsonReader<T>
where
    T: Read + Seek,
{
    type Item = char;

    #[allow(clippy::cast_possible_wrap)]
    fn next(&mut self) -> Option<Self::Item> {
        if !self.character_buffer.is_empty() {
            return self.character_buffer.pop_front();
        }

        let mut utf8_buffer = [0, 0, 0, 0];
        let _ = self.reader.read(&mut utf8_buffer);

        match from_utf8(&utf8_buffer) {
            Ok(string) => {
                self.character_buffer = string.chars().collect();
                self.character_buffer.pop_front()
            }
            Err(error) => {
                // 读取有效字节，并重置缓冲读取器
                // 以便在下一次迭代中可以再次读取剩余字节。

                let valid_bytes = error.valid_up_to();
                let string = from_utf8(&utf8_buffer[..valid_bytes]).unwrap();

                let remaining_bytes = 4 - valid_bytes;

                let _ = self.reader.seek_relative(-(remaining_bytes as i64));

                // 收集有效字符到 character_buffer 中
                self.character_buffer = string.chars().collect();

                // 从 character_buffer 中返回第一个字符
                self.character_buffer.pop_front()
            }
        }
    }
}
```

这就是你需要做的读取输入数据以便进行解析的所有操作。现在，是时候进入处理的下一个阶段了。

<h2 id="heading-how-to-build-a-json-parser-stage-2-prepare-intermediate-data-types">如何构建一个 JSON 解析器 – 第二步：准备中间数据类型</h2>

这实际上不算是解析管道中的一个阶段，但它是接下来的步骤的前提条件。我们需要定义可以与 JSON 所支持的所有可能类型相匹配的 Rust 类型。

JSON 支持以下数据类型：

-   字符串
-   数字
-   布尔值
-   数组
-   对象
-   空值

数字可以进一步分为整数或浮点数。尽管你可以使用 `f64` 作为所有 JSON 数字的 Rust 类型，但在实际操作中，如果你尝试使用它，代码中将到处都是类型转换，这会使其不可行。

所以在本教程中，我们将确实区分这一点并记录下来。

<h3 id="heading-the-value-type">值类型</h3>

枚举是存储这种状态的理想方式，其中每个变体需要有一些标识符作为元数据（在本例中是 JSON 值的类型），并可附加一些数据。你将把 JSON 中该类型的实际值附加到这些变体的数据中。

```rust
// src/value.rs

use std::collections::HashMap;

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum Number {
    I64(i64),
    F64(f64),
}

#[derive(Debug, PartialEq, Clone)]
pub enum Value {
    String(String),
    Number(Number),
    Boolean(bool),
    Array(Vec<Value>),
    Object(HashMap<String, Value>),
    Null,
}
```

前几个变体非常简单，你定义了变体，且其持有的数据是相应的 Rust 类型。最后一个变体更简单，表示 `null` 值，不需要存储其他数据。

而 `Array` 和 `Object` 变体则稍微有趣一点，因为它们递归地存储枚举本身。这说得通，因为 JSON 中的数组可以有任何 JSON 规范支持的值类型。而 JSON 中的对象总是拥有字符串键以及支持的任意 JSON 值，包括其他对象。

<h3 id="heading-how-to-add-helpful-conversion-methods">如何添加有用的转换方法</h3>

你还将需要一种方法将枚举类型转换为基本类型，并在基础数据不是你所期望的情况下抛出错误。这基本上是样板代码，所以我将在不做进一步解释的情况下将它们组合在一起：

```rust
// src/value.rs

impl TryFrom<&Value> for String {
    type Error = ();

    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::String(value) => Ok(value.clone()),
            _ => Err(()),
        }
    }
}

impl TryFrom<&Value> for i64 {
    type Error = ();

    #[allow(clippy::cast_possible_truncation)]
    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::Number(value) => match value {
                Number::I64(value) => Ok(*value),
                Number::F64(value) => Ok(*value as i64),
            },
            _ => Err(()),
        }
    }
}

impl TryFrom<&Value> for f64 {
    type Error = ();

    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::Number(value) => match value {
                Number::F64(value) => Ok(*value),
                Number::I64(value) => Ok(*value as f64),
            },
            _ => Err(()),
        }
    }
}

impl TryFrom<&Value> for bool {
    type Error = ();

    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::Boolean(value) => Ok(*value),
            _ => Err(()),
        }
    }
}

impl<'a> TryFrom<&'a Value> for &'a Vec<Value> {
    type Error = ();

    fn try_from(value: &'a Value) -> Result<Self, ()> {
        match value {
            Value::Array(value) => Ok(value),
            _ => Err(()),
        }
    }
}

#[allow(clippy::implicit_hasher)]
impl<'a> TryFrom<&'a Value> for &'a HashMap<String, Value> {
    type Error = ();

    fn try_from(value: &'a Value) -> Result<Self, ()> {
        match value {
            Value::Object(value) => Ok(value),
            _ => Err(()),
        }
    }
}
```

<h2 id="heading-how-to-build-a-json-parser-stage-3-tokenization">如何构建一个 JSON 解析器 – 第三步：分词</h2>

下一步是对输入数据进行分词。

分词是将大块的输入拆分为更小、更易处理，并可独立地进行分析的单元。这也使得你更容易处理这些单元而不是字节流，并且它们有助于将传入数据表示为标准格式，并允许将 token 映射到输出值类型。

解析器将递归处理所有标记，直到没有要处理的内容，一旦完成，给我们解析后的数据。

<h3 id="heading-how-to-define-expected-valid-tokens">如何定义预期的有效 token</h3>

这里与我们上面介绍的值类型会有一些重复，但这是预料之中的，因为任何字面值的标记表示将是其自身。在这种情况下，没有办法将其更小的拆分。

同样地，枚举是这里合适的数据类型，因为我们需要元数据（作为标记类型），并可选择其关联的数据。

表示字面值的标记可以这样定义：

```rust
// src/token.rs

use std::io::{Read, Seek};
use std::iter::Peekable;
use crate::reader::JsonReader;

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum Number {
    I64(i64),
    F64(f64),
}

#[derive(Debug, Clone, PartialEq)]
pub enum Token {
    String(String),
    Number(Number),
    Boolean(bool),
    Null,
}
```

除此之外，我们在 JSON 中还有许多其他标记，它们构成了 JSON 格式的“语法”。这些是：

-   花括号（`{` 或 `}`）分别表示对象的开始和结束。
-   方括号（`[` 或 `]`）分别表示数组的开始和结束。
-   冒号（`:`）用于分隔对象内的键值对。
-   逗号（`,`）用于分隔值。
-   引号（`"`）表示字符串字面值的开始/结束。

所有这些都不需要与任何数据关联，所以它们将在枚举中作为单元变体。将这些添加进去，完整的枚举将是：

```rust
// src/token.rs

use std::io::{Read, Seek};
use std::iter::Peekable;
use crate::reader::JsonReader;
use crate::value::Number;

#[derive(Debug, Clone, PartialEq)]
pub enum Token {
    CurlyOpen,
    CurlyClose,
    Quotes,
    Colon,
    String(String),
    Number(Number),
    ArrayOpen,
    ArrayClose,
    Comma,
    Boolean(bool),
    Null,
}
```

<h3 id="heading-how-to-implement-the-tokenizer-struct">如何实现分词器结构体</h3>

你将需要一个 `JsonTokenizer` 结构体来进行分词，同时负责保持分词过程的状态：

```rust
// src/token.rs

pub struct JsonTokenizer<T>
    where
        T: Read + Seek,
{
    tokens: Vec<Token>,
    iterator: Peekable<JsonReader<T>>,
}

impl<T> JsonTokenizer<T>
where
    T: Read + Seek,
{
    pub fn new(reader: File) -> JsonTokenizer<File> {
        let json_reader = JsonReader::<File>::new(BufReader::new(reader));

        JsonTokenizer {
            iterator: json_reader.peekable(),
            tokens: vec![],
        }
    }

    pub fn from_bytes<'a>(input: &'a [u8]) -> JsonTokenizer<Cursor<&'a [u8]>> {
        let json_reader = JsonReader::<Cursor<&'a [u8]>>::from_bytes(input);

        JsonTokenizer {
            iterator: json_reader.peekable(),
            tokens: Vec::with_capacity(input.len()),
        }
    }
}
```

在这种情况下，我们使其对输入来源进行泛化。类型 T 需要实现 `Read` 和 `Seek` trait，其原因将在稍后解释。

迭代器还需要是 `Peekable` 的，这意味着我们应该能够在不改变迭代器本身的状态下读取迭代器中的下一个项。

<h3 id="heading-how-to-tokenize-an-iterator-of-characters">如何对字符迭代器进行分词</h3>

一旦定义了所有预期的 token，你需要获取字符迭代器并将其转换为 token 列表，其中每个条目是上一节中定义的 `Token` 枚举的一种。

我们将通过编写一个检测传入字符的框架函数开始，如果遇到无效标记则抛出 panic：

```rust
// src/token.rs

impl<T> JsonTokenizer<T> where
    T: Read + Seek, {
    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // 解析其他所有标记
                // ...
                character => {
                    if character.is_ascii_whitespace() {
                        continue;
                    }

                    panic!("Unexpected character: ;{character};")
                }
            }
        }

        Ok(&self.tokens)
    }
}
```

这里有两个值得注意的地方，我们从简单的开始。如果你的匹配块没有遇到任何已知字符（你将很快实现这一点），你需要一个“兜底”条件来匹配任何字符。

在这里，我们将忽略任何空白字符并在遇到时继续到下一次迭代。如果该字符不是空白字符，那么这里你需要抛出 panic（或返回错误）。

接下来值得注意的是 `self.iterator.peek()`。为了便于解析分隔符、字面值等不同类型的标记，迭代器在读出下一个字符时不应该推进。这样才能根据下一个字符有条件地推进迭代器。

你还需要将某些标记集的解析委托给不同的函数，这些函数将有自己的逻辑来推进迭代器。

一个很好的例子是解析 `null` 字面值。如果匹配遇到一个 `n` 字符且不在字符串、对象、数字等中，则需要确保接下来的三个字符分别是 `u`、`l`、`l`，以形成字面值 `null`，然后将迭代器前进四个，以便下一个循环在 `null` 字符之后而不是中间开始解析。

<h3 id="heading-how-to-parse-string-tokens">如何解析字符串 token</h3>

我们将从解析字符串开始。让我们停顿一下，逐步思考需要发生什么：

- 检查匹配是否遇到 `"` 字符。如果是，将 `Token::Quote` 推入输出标记列表。
- 推进迭代器，因此下一个步骤从 `"` 字符之后开始。
- 解析所有字符作为字符串的一部分，直到遇到另一个 `"` 字符，它表示字符串值的结束。
- 将迭代器向前推进解析为字符串的字符数，以及额外再推进一次，以跳过表示字符串结尾的 `"` 字符。
- 将解析值的 `Token::String` 推入输出标记列表。
- 将 `Token::Quote` 推入输出标记列表。

希望这不会太令人困惑。但代码应该可以帮助你更好地理解它：

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                '"' => {
                    // 将打开的引号推入输出标记列表。
                    self.tokens.push(Token::Quotes);

                    // 跳过引号标记，因为我们已经将其添加到标记列表中。
                    let _ = self.iterator.next();

                    // 将解析字符串值委托给一个单独的函数。
                    // 该函数还应妥善处理迭代器的推进。
                    let string = self.parse_string();

                    // 将解析的字符串推入输出标记列表。
                    self.tokens.push(Token::String(string));

                    // 将关闭的引号推入输出标记列表。
                    self.tokens.push(Token::Quotes);
                }
                // ...
            }
        }

        Ok(&self.tokens)
    }

    fn parse_string(&mut self) -> String {
        // 创建新的向量来保存解析的字符。
        let mut string_characters = Vec::<char>::new();

        // 通过引用获取每一个字符，这样它们不会从迭代器中移动出去，
        // 不这么做将要求你将迭代器移动到这个函数中。
        for character in self.iterator.by_ref() {
            // 如果碰到关闭的 `"`, 则跳出循环，因为字符串已结束。
            if character == '"' {
                break;
            }

            // 继续压入矢量以构建字符串。
            string_characters.push(character);
        }

        // 从字符迭代器创建字符串并返回。
        String::from_iter(string_characters)
    }
}
```

如前所述，我们在本教程中不会讨论处理转义字符，因为它们对于学习此主题没有太大帮助，但如果你感兴趣，可以在实现的基础上添加这部分内容作为一个很好的练习。

这就完成了字符串解析，我们可以继续解析一个更有趣的值类型了。

<h3 id="heading-how-to-parse-number-tokens">如何解析数字 token</h3>

JSON 规范中的数字有很多变化。它们可以为正或为负，可以是整数或小数。它们还可以表示为科学计数法（例如负指数 `3.7e-5` 或正指数 `3.7e5`）。我们需要解析所有这些变体。

一如既往，我们将从简单的部分开始。如果我们遇到任何可能是数字中的有效字符，则需要委托解析到一个 `parse_number` 函数。但是，任何有效数字只能以一个数字或负号开头。数字不能以小数字符或科学计数法字符开头，这使得我们更加轻松。

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                '-' | '0'..='9' => {
                    let number = self.parse_number()?;
                    self.tokens.push(Token::Number(number));
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }

    // ...
}
```

接下来，我们将实现 `parse_number` 方法：

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    fn parse_number(&mut self) -> Result<Number, ()> {
        // 储存解析的数字字符。
        let mut number_characters = Vec::<char>::new();

        // 存储正在解析的数字是否包含“. ”字符，使其成为小数。
        let mut is_decimal = false;

        // 存储在 'e' 或 'E' 符号之后的字符以表示指数值。
        let mut epsilon_characters = Vec::<char>::new();

        // 存储正在解析的数字是否属于 epsilon 字符集合。
        let mut is_epsilon_characters = false;

        while let Some(character) = self.iterator.peek() {
            match character {
                // 匹配表示数字为负的负号
                '-' => {
                    if is_epsilon_characters {
                        // 如果正在解析 epsilon 字符，将其放入 epsilon 字符集合。
                        epsilon_characters.push('-');
                    } else {
                        // 否则，将其放入正常字符集合。
                        number_characters.push('-');
                    }

                    // 推进迭代器
                    let _ = self.iterator.next();
                }
                // 匹配正号，可以被视为冗余并忽略，因为正号是默认值。
                '+' => {
                    // 推进迭代器
                    let _ = self.iterator.next();
                }
                // 匹配 0 到 9 之间的任意数字，并存储在 `digit` 变量中。
                digit @ '0'..='9' => {
                    if is_epsilon_characters {
                        // 如果正在解析 epsilon 字符，将其放入 epsilon 字符集合。
                        epsilon_characters.push(*digit);
                    } else {
                        // 否则，将其放入正常字符集合。
                        number_characters.push(*digit);
                    }
                    // 推进迭代器
                    let _ = self.iterator.next();
                }
                // 匹配表示小数部分开始的小数点。
                '.' => {
                    // 将小数点字符放入数字字符集合。
                    number_characters.push('.');

                    // 设置当前数字为小数状态。
                    is_decimal = true;

                    // 推进迭代器
                    let _ = self.iterator.next();
                }
                // 匹配表示数字文本值结束的任意字符。可以是分隔键值对的逗号，
                // 闭合对象字符，闭合数组字符，或分隔键与值的 `:`。
                '}' | ',' | ']' | ':' => {
                    break;
                }
                // 匹配 epsilon 字符，表示这个数字是科学计数法。
                'e' | 'E' => {
                    // 若已在解析指数数字，则产生错误，因为这意味着有两个 epsilon 字符是无效的。
                    if is_epsilon_characters {
                        panic!("解析数字时遇到无效字符：{character}。遇到双重 epsilon 字符");
                    }

                    // 设置当前数字为科学计数法状态。
                    is_epsilon_characters = true;

                    // 推进迭代器
                    let _ = self.iterator.next();
                }
                // 若遇到其他字符则产生错误。
                other => {
                    if !other.is_ascii_whitespace() {
                        panic!("解析数字时遇到无效字符：{character}")
                    } else {
                        self.iterator.next();
                    }
                },
            }
        }

        if is_epsilon_characters {
            // 如果数字是指数型，执行计算以将其转换为 Rust 中的浮点数。

            // 以浮点数解析基数。
            let base: f64 = String::from_iter(number_characters).parse().unwrap();

            // 以浮点数解析指数。
            let exponential: f64 = String::from_iter(epsilon_characters).parse().unwrap();

            // 返回最终计算出的十进制数字。
            Ok(Number::F64(base * 10_f64.powf(exponential)))
        } else if is_decimal {
            // 如果数字是小数，在 Rust 中将其解析为浮点数。
            Ok(Number::F64(
                String::from_iter(number_characters).parse::<f64>().unwrap(),
            ))
        } else {
            // 在 Rust 中将数字解析为整数。
            Ok(Number::I64(
                String::from_iter(number_characters).parse::<i64>().unwrap(),
            ))
        }
    }
}
```

建议你仔细阅读代码和注释以理解此函数。您应该不会遇到任何未曾涵盖或假设读者已知的语法。

<h3 id="heading-how-to-parse-boolean-tokens">如何解析布尔值 token</h3>

解析布尔值是到目前为止我们看到的最简单的一个。我们需要做的就是匹配首个字符为 `t` 或 `f`，然后检查接下来的几个字符以确保它们组成了字面值 `true` 或 `false`。

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                // 匹配 `t` 字符，表示布尔字面量的开始。
                't' => {
                    // 推进迭代器
                    let _ = self.iterator.next();

                    // 断言下一字符是 `r`，同时推进迭代器
                    assert_eq!(Some('r'), self.iterator.next());
                    // 断言下一字符是 `u`，同时推进迭代器
                    assert_eq!(Some('u'), self.iterator.next());
                    // 断言下一字符是 `e`，同时推进迭代器
                    assert_eq!(Some('e'), self.iterator.next());

                    // 将字面值推入标记列表中。
                    self.tokens.push(Token::Boolean(true));
                }
                'f' => {
                    // 推进迭代器
                    let _ = self.iterator.next();

                    // 断言下一字符是 `a`，同时推进迭代器
                    assert_eq!(Some('a'), self.iterator.next());
                    // 断言下一字符是 `l`，同时推进迭代器
                    assert_eq!(Some('l'), self.iterator.next());
                    // 断言下一字符是 `s`，同时推进迭代器
                    assert_eq!(Some('s'), self.iterator.next());
                    // 断言下一字符是 `e`，同时推进迭代器
                    assert_eq!(Some('e'), self.iterator.next());

                    // 将字面值推入标记列表中。
                    self.tokens.push(Token::Boolean(false));
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

<h3 id="heading-how-to-parse-null-literal">如何解析 null 字面量</h3>

这与我们在前一步解析布尔值非常相似：

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                'n' => {
                    // 推进迭代器
                    let _ = self.iterator.next();

                    // 断言下一字符是 `u`，同时推进迭代器
                    assert_eq!(Some('u'), self.iterator.next());
                    // 断言下一字符是 `l`，同时推进迭代器
                    assert_eq!(Some('l'), self.iterator.next());
                    // 断言下一字符是 `l`，同时推进迭代器
                    assert_eq!(Some('l'), self.iterator.next());

                    // 将空字面值推入输出标记列表。
                    self.tokens.push(Token::Null);
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

<h3 id="heading-how-to-parse-delimiters">如何解析分隔符</h3>

解析分隔符非常简单。你需要做的就是匹配它们，然后将相应的标记推入输出标记列表：

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                '{' => {
                    self.tokens.push(Token::CurlyOpen);
                    let _ = self.iterator.next();
                }
                '}' => {
                    self.tokens.push(Token::CurlyClose);
                    let _ = self.iterator.next();
                }
                '[' => {
                    self.tokens.push(Token::ArrayOpen);
                    let _ = self.iterator.next();
                }
                ']' => {
                    self.tokens.push(Token::ArrayClose);
                    let _ = self.iterator.next();
                }
                ',' => {
                    self.tokens.push(Token::Comma);
                    let _ = self.iterator.next();
                }
                ':' => {
                    self.tokens.push(Token::Colon);
                    let _ = self.iterator.next();
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

<h3 id="heading-how-to-parse-a-terminating-character">如何解析终止字符</h3>

输入有时可能包含 `\0` 作为最后一个字符，以指示输入已结束。在处理文件时，这更常被称为 EOF（文件结尾）。它也被称为“转义序列”或“空字符”。

如果遇到这种情况，我们需要处理它并跳出解析循环：

```rust
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                '\0' => break,
                other => {
                    if !other.is_ascii_whitespace() {
                        panic!("Unexpected token encountered: {other}")
                    } else {
                        self.iterator.next();
                    }
                },

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

<h2 id="heading-how-to-build-a-json-parser-stage-4-from-tokens-to-value">如何构建一个 JSON 解析器 – 第四步：将 token 转换为值</h2>

现在你已经拥有了所有的标记，是时候进入该过程的最后阶段，将标记转换为你可以在 Rust 代码中使用的真实值。

首先创建一个单元结构体，它可以用作解析器。在这个阶段，我们不需要在整个过程中保存任何状态：

```rust
// src/parser.rs

use std::collections::HashMap;
use std::fs::File;
use std::io::{BufReader, Cursor};
use std::iter::Peekable;
use std::slice::Iter;
use crate::token::{JsonTokenizer, Token};
use crate::value::Value;

/// 作为解析 JSON 的入口点的主解析器。
pub struct JsonParser;
```

我们还将使用这个作为解析器的公共接口。所以让我们首先实现这些方法：

```rust
// src/parser.rs

impl JsonParser {
    /// 创建一个新的 [`JsonParser`] 用于从字节解析 JSON。
    pub fn parse_from_bytes<'a>(input: &'a [u8]) -> Result<Value, ()> {
        let mut json_tokenizer = JsonTokenizer::<BufReader<Cursor<&[u8]>>>::from_bytes(input);
        let tokens = json_tokenizer.tokenize_json()?;

        Ok(Self::tokens_to_value(tokens))
    }

    /// 创建一个新的 [`JsonParser`] 用于从文件解析 JSON。
    pub fn parse(reader: File) -> Result<Value, ()> {
        let mut json_tokenizer = JsonTokenizer::<BufReader<File>>::new(reader);
        let tokens = json_tokenizer.tokenize_json()?;

        Ok(Self::tokens_to_value(tokens))
    }
}
```

话不多说，首先你需要实现这些公共方法调用的 `tokens_to_value` 方法。

<h3 id="heading-how-to-parse-primitives">如何解析基本数据类型</h3>

该方法将负责将标记迭代器作为输入，并输出你之前定义的 `Value` 类型。这也很简单，因为对象/数组解析被委托给单独的方法，我们稍后会详细介绍。

```rust
// src/parser.rs

impl JsonParser {
    // ...

    fn tokens_to_value(tokens: &[Token]) -> Value {
        // 创建一个对标记进行预览的迭代器
        let mut iterator = tokens.iter().peekable();

        // 初始化最终值为 null。
        let mut value = Value::Null;

        // 当迭代器中有 token 时循环。
        // 注意在这种情况下你不需要手动推进迭代器，
        // 这就是为什么你可以直接调用 `iterator.next()`。
        while let Some(token) = iterator.next() {
            match token {
                Token::CurlyOpen => {
                    value = Value::Object(Self::process_object(&mut iterator));
                }
                Token::String(string) => {
                    value = Value::String(string.clone());
                }
                Token::Number(number) => {
                    value = Value::Number(*number);
                }
                Token::ArrayOpen => {
                    value = Value::Array(Self::process_array(&mut iterator));
                }
                Token::Boolean(boolean) => value = Value::Boolean(*boolean),
                Token::Null => value = Value::Null,
                // 忽略所有分隔符，因为当你遇到它们时不需要显式处理任何操作。
                Token::Comma
                | Token::CurlyClose
                | Token::Quotes
                | Token::Colon
                | Token::ArrayClose => {}
            }
        }

        value
    }
}
```

<h3 id="heading-how-to-parse-arrays">如何解析数组</h3>

解析数组几乎和我们上面看到的解析逻辑一样简单。因为数组只是其他 JSON 值的集合，所以解析它们并不像对象那样涉及很多逻辑。

```rust
// src/parser.rs

impl JsonParser {
    fn process_array(iterator: &mut Peekable<Iter<Token>>) -> Vec<Value> {
        // 初始化一个 JSON Value 类型的向量，用于保存当前正在解析的数组值。
        let mut internal_value = Vec::<Value>::new();

        // 迭代所有提供的 token。
        while let Some(token) = iterator.next() {
            match token {
                Token::CurlyOpen => {
                    internal_value.push(Value::Object(Self::process_object(iterator)));
                }
                Token::String(string) => internal_value.push(Value::String(string.clone())),
                Token::Number(number) => internal_value.push(Value::Number(*number)),
                Token::ArrayOpen => {
                    internal_value.push(Value::Array(Self::process_array(iterator)));
                }
                // 如果数组关闭则跳出循环。由于 process_array 的递归性质，
                // 我们无需显式检查关闭标记是否与打开标记匹配。
                Token::ArrayClose => {
                    break;
                }
                Token::Boolean(boolean) => internal_value.push(Value::Boolean(*boolean)),
                Token::Null => internal_value.push(Value::Null),
                // 忽略分隔符
                Token::Comma | Token::CurlyClose | Token::Quotes | Token::Colon => {}
            }
        }

        internal_value
    }
}
```

<h3 id="heading-how-to-parse-objects">如何解析对象</h3>

解析对象比前面的值类型要复杂一些，因为对象带有它们自己的语法。但这应该没什么能让你感到意外的，因此我鼓励你阅读以下代码和注释以了解其工作原理。

```rust
impl JsonParser {
    fn process_object(iterator: &mut Peekable<Iter<Token>>) -> HashMap<String, Value> {
        // 表示正在解析的项是键还是值。第一个元素应始终是键，因此初始化为 true。
        let mut is_key = true;

        // 当前解析值对应的键。
        let mut current_key: Option<&str> = None;

        // 已解析对象的当前状态。
        let mut value = HashMap::<String, Value>::new();

        while let Some(token) = iterator.next() {
            match token {
                // 如果是嵌套对象，则递归解析并存储在哈希映射中与当前键关联。
                Token::CurlyOpen => {
                    if let Some(current_key) = current_key {
                        value.insert(
                            current_key.to_string(),
                            Value::Object(Self::process_object(iterator)),
                        );
                    }
                }
                // 如果遇到此标记，则中断循环，因为它表示正在解析的对象的结束。
                Token::CurlyClose => {
                    break;
                }
                Token::Quotes | Token::ArrayClose => {}
                // 如果标记是冒号，则说明是键值对的分隔符。因此，从这个点开始解析的项目将不再是键。
                Token::Colon => {
                    is_key = false;
                }
                Token::String(string) => {
                    if is_key {
                        // 如果当前正在解析的是键，则将值设为当前键。
                        current_key = Some(string);
                    } else if let Some(key) = current_key {
                        // 如果进程已经为当前项目设置了键，则解析字符串为值，并在完成后将 current_key 设为 None
                        // 以准备下一个键值对。
                        value.insert(key.to_string(), Value::String(string.clone()));
                        // 将 current_key 设为 None 以准备下一个键值对。
                        current_key = None;
                    }
                }
                Token::Number(number) => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Number(*number));
                        // 将 current_key 设为 None 以准备下一个键值对。
                        current_key = None;
                    }
                }
                Token::ArrayOpen => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Array(Self::process_array(iterator)));
                        // 将 current_key 设为 None 以准备下一个键值对。
                        current_key = None;
                    }
                }
                // 如果标记是逗号，则是 JSON 中多个键值对之间的分隔符。因此，从这个点开始解析的项目将是键。
                Token::Comma => is_key = true,
                Token::Boolean(boolean) => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Boolean(*boolean));
                        // 将 current_key 设为 None 以准备下一个键值对。
                        current_key = None;
                    }
                }
                Token::Null => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Null);
                        // 将 current_key 设为 None 以准备下一个键值对。
                        current_key = None;
                    }
                }
            }
        }

        value
    }
}
```

到此为止，你应该已经有一切可以开始解析有效的 JSON 文件到 Rust 中了。

<h2 id="heading-how-to-use-the-json-parser">如何使用我们的 JSON 解析器</h2>

让我们在项目中创建一个新的示例来运行我们的 JSON 解析器：

```shell
mkdir examples; touch examples/json.rs
```

你还需要在 `Cargo.toml` 文件中将其注册为一个示例：

```toml
[package]
name = "json-parser"
version = "0.1.0"
edition = "2021"

[dependencies]

[[example]]
path = "examples/json.rs"
name = "json"
```

现在让我们编写代码来运行这个示例。我们首先将一个示例 JSON 文件复制到项目的根目录中，你可以在[这里][31]找到。

```rust
// examples/json.rs

use std::fs::File;
use json_parser::parser::JsonParser;

fn main() {
    let file = File::open("test.json").unwrap();
    let parser = JsonParser::parse(file).unwrap();

    dbg!(parser);
}
```

使用以下命令运行此代码，你应该会看到与下面相同的输出：

```shell
cargo run --example json --release
```

```
[examples/json.rs:8:5] parser = Object(
    {
        "pairs": Array(
            [
                Object(
                    {
                        "x1": Number(
                            F64(
                                41.844453001935875,
                            ),
                        ),
                        "y0": Number(
                            F64(
                                -33.78221816487377,
                            ),
                        ),
                        "y1": Number(
                            F64(
                                -78.10213222087448,
                            ),
                        ),
                        "x0": Number(
                            F64(
                                95.26235434764715,
                            ),
                        ),
                    },
                ),
                Object(
                    {
                        "x0": Number(
                            F64(
                                115.42029308864215,
                            ),
                        ),
                        "y0": Number(
                            F64(
                                1.2002187300000001e-5,
                            ),
                        ),
                        "x1": Number(
                            F64(
                                83.39640643072113,
                            ),
                        ),
                        "y1": Number(
                            F64(
                                28.643090267505812,
                            ),
                        ),
                    },
                ),
                Object(
                    {
                        "isWorking": Boolean(
                            true,
                        ),
                        "sample": String(
                            "string sample",
                        ),
                        "nullable": Null,
                        "isNotWorking": Boolean(
                            false,
                        ),
                    },
                ),
            ],
        ),
        "utf8": Object(
            {
                "key2": String(
                    "value2",
                ),
                "key1": String(
                    "ࠄࠀࠆࠄࠀࠁࠃ",
                ),
            },
        ),
    },
)
```

<h2 id="heading-wrapping-up">总结</h2>

我希望您已经看到了一些有趣的方法，可以利用今天所学来优化您项目中的现有 Rust 代码，以及您编写的任何涉及这些的未来代码。

您可以在[这个仓库][32]中找到我们在本文中查看的所有代码的完整内容。

此外，如果您对此主题有任何问题或意见，请随时**[联系我][33]**。

### 享受我的作品吗？

可以考虑请我喝咖啡来支持我的工作！

[☕请我喝咖啡][34]。

下次再见，祝编码愉快，并祝您晴空万里！

[1]: #heading-what-are-iterators-in-rust
[2]: #heading-how-to-implement-iterators-in-rust
[3]: #heading-what-are-peekable-iterators-in-rust
[4]: #heading-what-is-the-match-statement-in-rust
[5]: #heading-how-to-use-iterators-in-match-statements-in-rust
[6]: #heading-what-are-match-guards-in-rust
[7]: #heading-what-is-binding-in-rust
[8]: #heading-how-to-build-a-json-parser-stage-1-reader
[9]: #heading-what-is-the-utf-8-byte-encoding
[10]: #heading-how-to-read-the-data
[11]: #heading-how-to-implement-the-iterator-for-jsonreader
[12]: #heading-how-to-build-a-json-parser-stage-2-prepare-intermediate-data-types
[13]: #heading-the-value-type
[14]: #heading-how-to-add-helpful-conversion-methods
[15]: #heading-how-to-build-a-json-parser-stage-3-tokenization
[16]: #heading-how-to-define-expected-valid-tokens
[17]: #heading-how-to-implement-the-tokenizer-struct
[18]: #heading-how-to-tokenize-an-iterator-of-characters
[19]: #heading-how-to-parse-string-tokens
[20]: #heading-how-to-parse-number-tokens
[21]: #heading-how-to-parse-boolean-tokens
[22]: #heading-how-to-parse-null-literal
[23]: #heading-how-to-parse-delimiters
[24]: #heading-how-to-parse-a-terminating-character
[25]: #heading-how-to-build-a-json-parser-stage-4-from-tokens-to-value
[26]: #heading-how-to-parse-primitives
[27]: #heading-how-to-parse-arrays
[28]: #heading-how-to-parse-objects
[29]: #heading-how-to-use-the-json-parser
[30]: #heading-wrapping-up
[31]: https://raw.githubusercontent.com/anshulsanghi-blog/json-parser/master/test.json
[32]: https://github.com/anshulsanghi-blog/json-parser
[33]: mailto:contact@anshulsanghi.tech
[34]: https://buymeacoffee.com/anshulsanghi
