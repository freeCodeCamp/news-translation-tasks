---
title: 过程宏在 Rust 中的应用 – 初学者手册
date: 2024-08-19T12:09:28.479Z
author: Anshul Sanghi
authorURL: https://www.freecodecamp.org/news/author/anshulsanghi/
originalURL: https://www.freecodecamp.org/news/procedural-macros-in-rust/
posteditor: ""
proofreader: ""
---

在这本手册中，你将了解 Rust 中的过程宏及其用途。你还会学习如何通过假想和实际的例子编写自己的过程宏。

<!-- more -->

本指南假定你已经熟悉 Rust 及其基本概念，如数据类型、迭代器和 traits。如果你需要建立或复习 Rust 的基础知识，请[查看这个互动课程][1]。

你不需要具备宏的前置知识，因为这篇文章会从头开始进行讲解。

## 目录

1.  [Rust 中的宏是什么？][2]
    1.  [Rust 中的宏类型][3]
    2.  [过程宏的类型][4]
2.  [先决条件][5]
    1.  [有用的依赖项][6]
3.  [如何编写一个简单的 Derive 宏][7]
    1.  [`IntoStringHashMap` Derive 宏][8]
    2.  [如何声明一个 Derive 宏][9]
    3.  [如何解析宏输入][10]
    4.  [如何确保宏针对的是结构体][11]
    5.  [如何构建输出代码][12]
    6.  [如何使用你的 Derive 宏][13]
    7.  [如何改进我们的实现][14]
4.  [更复杂的 Derive 宏][15]
    1.  [`DeriveCustomModel` 宏][16]
    2.  [如何将实现与声明分离][17]
    3.  [如何解析 Derive 宏参数][18]
    4.  [如何实现 `DeriveCustomModel`][19]
    5.  [如何生成每个自定义模型][20]
    6.  [如何使用你的 `DeriveCustomModal` 宏][21]
5.  [一个简单的属性宏][22]
    1.  [`log_duration` 属性][23]
    2.  [如何声明一个属性宏][24]
    3.  [如何实现 `log_duration` 属性宏][25]
    4.  [如何使用你的 `log_duration` 宏][26]
6.  [更复杂的属性宏][27]
    1.  [`cached_fn` 属性][28]
    2.  [如何实现 `cached_fn` 属性宏][29]
    3.  [`cached_fn` 属性参数][30]
    4.  [如何使用 `cached_fn` 宏][31]
7.  [一个简单的函数式宏][32]
    1.  [`constant_string` 宏][33]
    2.  [如何声明一个函数式宏][34]
    3.  [如何实现 `constant_string` 宏][35]
    4.  [如何使用 `constant_string` 宏][36]
8.  [更复杂的函数式宏][37]
    1.  [`hash_mapify` 宏][38]
    2.  [如何实现 `hash_mapify` 宏][39]
    3.  [如何解析 `hash_mapify` 的输入][40]
    4.  [如何生成输出代码][41]
    5.  [如何将自定义数据类型转换为输出标记][42]
    6.  [如何使用 `hash_mapify` 宏][43]
9.  [编写宏之外][44]
    1.  [有用的库/工具][45]
10.  [宏的缺点][46]
    1.  [调试（或缺乏调试）][47]
    2.  [编译时间成本][48]
    3.  [缺乏自动补全和代码检查][49]
    4.  [我们该在何处止步？][50]
11.  [总结][51]
    1.  [喜欢我的作品吗？][52]

## **Rust 中的宏是什么？**

宏是 Rust 编程语言的重要组成部分。当你开始学习这门语言时，很快就会遇到它们。

在最简单的形式下，Rust 中的宏允许你在编译时执行一些代码。实际上，Rust 几乎允许你随心所欲地编写和使用宏。此功能最常见的用例是编写代码来生成其他代码。

宏是一种扩展编译器功能的方法，超越了标准支持的功能。无论是基于现有代码生成代码，还是以某种形式转换现有代码，宏都是你的首选工具。

官方的 Rust 书这样描述它：

> _宏_ 这个术语指的是 Rust 中的一系列功能。
> 
> 从根本上说，宏是一种编写代码来编写其他代码的方法，这被称为 _元编程_。
> 
> 元编程对于减少必须编写和维护的代码量非常有用，这也是函数的作用之一。然而，宏具有一些函数所没有的额外能力。

使用宏，你还可以动态添加一些编译时需要添加的内容，这在函数中是不可能的，因为函数是在运行时调用的。例如，实现类型上的 _Traits_，需要在编译时实现。

宏的另一个优势是它们非常灵活，因为它们可以接收动态数量的参数或输入，而函数则不行。

宏确实有其自己特定的语法，无论是编写还是使用它们，我们将在接下来的章节中详细探讨这一点。

一些宏使用的示例非常有助于传达它们的强大之处：

-   **SQLx** 项目使用宏在编译时验证所有 SQL 查询和语句（只要你使用提供的宏创建它们），通过实际在运行的数据库实例中执行它们（是的，在编译时）。
-   **typed\_html** 使用宏实现了一个完整的 HTML 解析器，并在编译时进行验证，同时使用了熟悉的 JSX 语法。

在 Rust 中，有两种不同类型的宏：声明性宏和过程宏。

### 声明性宏

声明性宏基于语法解析工作。虽然官方文档将它们定义为允许编写语法扩展的宏，但我认为把它们看作是编译器中 `match` 关键字的高级版本更直观。

你可以定义一个或多个匹配模式，它们的主体应返回你希望宏生成的 Rust 代码。

我们在本文中不会讨论它们，但如果你想了解更多，[这里][53] 是一个不错的起点。

### 过程宏

这些宏在其最基本的使用场景中，在编译时执行你希望的任何 Rust 代码。唯一的要求是它们应将 Rust 代码作为输入，并返回 Rust 代码作为输出。

编写这些宏不涉及特殊的语法解析（除非你想这样做），所以对我个人来说，它们更容易理解和编写。

过程宏进一步分为三类：派生宏、属性宏和函数式宏。

### 过程宏的类型

#### 派生宏

总体来说，派生宏应用于 Rust 中的数据类型。它们是一种扩展类型声明的方法，允许自动为其 "派生" 功能。

你可以使用它们从一个类型生成 "派生" 类型，或者作为一种方式为目标数据类型自动实现方法。看下面的示例之后，这应该会更有意义。

打印非原始数据类型，如结构体、枚举甚至错误（它们只是结构体，假设它们不是），用于调试的目的，是任何语言都非常常见的功能，不仅仅是 Rust。在 Rust 中，只有原始类型具有在 "调试" 上下文中打印的能力。

如果你考虑到 Rust 中的一切都是 Traits（即使是基本操作如加法和等式），这就有意义了。你希望能够调试打印自定义数据类型，但 Rust 无法说 "请将这个 trait 应用于现有代码中的每一个数据类型上"。

这就是 `Debug` 派生宏的用武之地。有一种标准的方法来调试打印 Rust 内部类型的数据结构。`Debug` 宏允许你自动为自定义类型实现 `Debug` trait，同时遵循与内部数据类型实现相同的规则和样式指南。

```
// 派生宏示例

/// 为数据类型派生方法的示例
#[derive(Debug)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}
```

`Debug` 派生宏会生成如下代码（展示性的，不完全准确）：

```
impl core::fmt::Debug for User {
    fn fmt(&self, f: &mut core::fmt::Formatter) -> core::fmt::Result {
        f.debug_struct(
            "User"
        )
        .field("username", &self.username)
        .field("first_name", &self.first_name)
        .field("last_name", &self.last_name)
        .finish()
    }
}
```

正如你可能能看出来，没有人愿意一遍遍地为他们所有的自定义结构体和枚举编写这段代码。这个简单的宏让你感受到了 Rust 中宏的强大，以及为什么它们是语言本身的重要组成部分。

在实际编译过程中，同样的代码会给出如下结果：

```
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}

impl core::fmt::Debug for User {
    fn fmt(&self, f: &mut core::fmt::Formatter) -> ::core::fmt::Result {
        f.debug_struct(
            "User"
        )
        .field("username", &self.username)
        .field("first_name", &self.first_name)
        .field("last_name", &self.last_name)
        .finish()
    }
}
```

请注意，原始类型声明在输出代码中保留。这是派生宏与其他宏之间的主要区别之一。派生宏保留输入类型而不做修改。它们只向输出中添加附加代码。另一方面，所有其他宏的行为则不相同。它们仅在宏自身的输出中包含目标时才保留目标。

#### 属性宏

属性宏除了数据类型外，通常还应用于代码块，如函数、impl 块、内联块等。它们通常用于以某种方式转换目标代码，或使用附加信息注释它。

这些宏最常见的用例是修改函数以添加额外的功能或逻辑。例如，你可以轻松编写一个属性宏：

- 记录所有输入和输出参数
- 记录函数的总运行时间
- 统计函数调用次数
- 向任何结构体添加预定义的附加字段

等等。

以上我提到的所有这些内容，以及更多内容，结合起来形成了 Rust 中由 `tracing` crate 提供的非常流行且有用的 `instrumentation` 宏。当然，我在这里进行了大幅简化，但作为示例已经足够。

这是使用宏注解函数附加附加信息的一个示例。它告诉编译器如果这个函数调用的返回值没有被使用，就会警告用户。`Result`类型默认已经被注解了`#[must_use]`，这就是为什么当你不使用`Result`类型的返回值时会看到警告`Unused Result<...> that must be used`。

属性宏也是Rust中[条件编译][54]的驱动力。

#### 功能性宏

功能性宏是伪装成函数的宏。这些是限制最少的过程宏，因为只要它们输出的代码在使用上下文中是有效的，它们几乎可以在任何地方使用。

这些宏与另外两种不同，并不是"应用"到某些东西上，而是像调用函数一样被调用。作为参数，你可以传入任何你想传的东西，只要你的宏能解析它。这包括从没有参数到有效的Rust代码再到只有你宏能理解的乱七八糟的内容。

某种意义上，它们是声明式宏的过程版本。如果你需要执行Rust代码并且能够解析自定义语法，功能性宏是你的首选工具。如果你在其他宏不能使用的地方需要类似宏的功能，它们也非常有用。

在对宏的基本信息进行了这么长时间的描述之后，终于可以深入实际编写过程宏了。

## 先决条件

编写自己的过程宏有一定的规则，你需要遵循这些规则。这些规则适用于所有三种类型的过程宏。它们是：

-   过程宏只能添加到在`Cargo.toml`中标记为`proc-macro`的项目中
-   标记为这样的项目不能导出除了过程宏之外的任何东西。
-   宏本身必须在`lib.rs`文件中声明。

让我们从以下代码开始设置我们的项目：

```
cargo new --bin my-app
cd my-app
cargo new --lib my-app-macros;
```

这将创建一个根项目，以及一个子项目来存放我们的宏。你需要在这两个项目的`Cargo.toml`文件中进行一些更改。

首先，`my-app-macros`的`Cargo.toml`文件应该包含以下内容（注意，你需要声明一个包含`proc-macro`属性的lib部分）：

```
# my-app/my-app-macros/Cargo.toml

[package]
name = "my-app-macros"
version = "0.1.0"
edition = "2021"

[lib]
name = "my_app_macros"
path = "src/lib.rs"
proc-macro = true

[dependencies]
```

接下来，`my-app`的`Cargo.toml`文件应该包含以下内容：

```
# my-app/Cargo.toml

workspace = { members = ["my-app-macros"] }

[package]
name = "my-app"
version = "0.1.0"
edition = "2021"
resolver = "2"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
my-app-macros = { path = "./my-app-macros" }
```

你需要将依赖解析器版本设置为“2”，并将你的宏项目添加为`my-app`项目的依赖。

### 有用的依赖项

从编译器的角度来看，宏是这样工作的：

-   它们将一个标记流作为输入（也可以作为宏本身的参数）。
-   它们返回一个标记流作为输出。

这就是编译器所知道的全部！正如你将会看到的，这对编译器来说已经足够了。

不过，这确实带来了一个问题。你需要能够以一种正确理解这些“标记流”的方式进行解析，无论它们是Rust代码还是自定义语法，能够修改它们，并输出它们。手动完成此任务并不容易，并且出于本教程的目的，它是错误范围之外的。

然而，我们可以依赖许多开发人员撰写的优秀开源作品来简化这个问题。你需要添加一些依赖项来帮助解决这个问题：

-   `syn` — Rust的语法解析器。这有助于你将输入的标记流解析为Rust AST。AST是一个你在尝试编写自己的解释器或编译器时经常遇到的概念，但对于宏的工作，基本的理解是必不可少的。毕竟，宏在某种意义上只是你为编译器编写的扩展。如果你对了解更多关于AST的信息感兴趣，可以[查看这个非常有帮助的介绍][55]。
-   `quote` — 这是一个极大的概括，quote是一个帮助我们执行`syn`反向操作的crate。它帮助我们将Rust源代码转换为可以从宏输出的标记流。
-   `proc-macro2` — 标准库提供了一个`proc-macro` crate，但它提供的类型不能存在于过程宏之外。`proc-macro2`是一个标准库的包装器，使所有的内部类型在宏的上下文之外也能使用。这允许`syn`和`quote`不仅用于过程宏，还可以在普通Rust代码中使用，如果你有这样的需求的话。而且，如果我们想要单元测试我们的宏或其扩展，这将被广泛使用。
-   `darling`——它有助于解析和处理宏的参数，否则由于需要从语法树中手动解析它，这将是一个繁琐的过程。`darling`为我们提供了类似`serde`的能力，可以将输入参数树自动解析为我们的参数结构体。它还帮助我们处理无效参数、必需参数等错误。

让我们快速将这些依赖项添加到我们的项目中并开始编写宏：

```
// my-app-macros

cargo add syn quote proc-macro2 darling
```

## 如何编写一个简单的 Derive 宏

在本节中，你将学习如何编写一个 `Derive` 宏。到现在为止，你应该已经了解了不同类型的宏及其含义，因为我们在前面的部分中已经讨论过它们。

### `IntoStringHashMap` Derive 宏

假设你有一个应用程序，你需要能够将结构体转换为使用 `String` 类型作为键和值的哈希映射。这意味着它应该适用于所有字段都可以使用 `Into` 特性转换为 `String` 类型的任何结构体。

### 如何声明一个 Derive 宏

你通过创建一个函数并使用属性宏注解该函数来声明宏，这些属性宏告诉编译器将该函数视为宏声明。由于你的 `lib.rs` 现在是空的，你还需要将 `proc-macro2` 声明为外部 crate:

```
// my-app-macros/src/lib.rs
extern crate proc_macro;

use proc_macro::TokenStream;

#[proc_macro_derive(IntoStringHashMap)]
pub fn derive_into_hash_map(item: TokenStream) -> TokenStream {
    todo!()
}
```

我们在这里所做的只是将我们的宏声明为具有标识符 `IntoStringHashMap` 的 derive 宏。注意，这里的函数名称并不重要。重要的是传递给 `proc_macro_derive` 属性宏的标识符。

让我们立即看看你如何使用它——我们稍后会回来完成实现：

```
// my-app/src/main.rs

use my_app_macros::IntoStringHashMap;

#[derive(IntoStringHashMap)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
    age: u32,
}

fn main() {

}
```

你可以像使用任何其他 derive 宏一样使用你的宏，使用你为它声明的标识符（在本例中是 `IntoStringHashMap`）。

如果你在此阶段尝试编译代码，你应该会看到以下编译错误：

```
   Compiling my-app v0.1.0 

error: proc-macro derive panicked
 --> src/main.rs:3:10
  |
3 | #[derive(IntoHashMap)]
  |          ^^^^^^^^^^^
  |
  = help: message: not yet implemented

error: could not compile `my-app` (bin "my-app") due to 1 previous error
```

这清楚地证明了我们的宏在编译阶段被执行了，因为，如果你不熟悉 `todo!()` 宏，它会在执行时因 `help: message: not yet implemented` 而恐慌。

这意味着我们的宏声明和其用法都有效。我们现在可以继续实际实现这个宏了。

### 如何解析宏的输入

首先，你使用 `syn` 将输入令牌流解析为 `DeriveInput`，这是任何可以使用 derive 宏的目标的表示：

```
let input = syn::parse_macro_input!(item as syn::DeriveInput);
```

`syn` 为我们提供了 `parse_macro_input` 宏，它使用一种自定义语法作为其参数。你为它提供输入变量的名称，`as` 关键字，以及 `syn` 中的数据类型，它应该将输入令牌流解析为（在我们的例子中是 `DeriveInput`）。

如果你查看 `DeriveInput` 的源代码，你会看到它给了我们以下信息：

-   `attrs`：应用到此类型的属性，无论是我们声明的其他属性宏还是内置的，例如 `must_use`。
-   `vis`：此类型声明的可见性说明符。
-   `ident`：类型的标识符（名称）。
-   `generics`：此类型采用的泛型参数的信息，包括生命周期。
-   `data`：一个枚举，描述目标是结构体、枚举还是联合体，并向我们提供这些信息。

这些字段名称及其类型（除了 `data` 字段）在 `syn` 支持的目标中相当标准，如函数、枚举等。

如果进一步查看 `Data` 枚举的声明，特别是 `DataStruct`，你会看到它为你提供了一个名为 `fields` 的字段。这是此结构体所有字段的集合，你可以用它来遍历它们。这正是我们构建哈希映射所需要的！

这个宏的完整实现如下：

```
// my-app/my-app-macros/lib.rs

extern crate proc_macro2;

use proc_macro::TokenStream;
use quote::quote;
use syn::Data;

#[proc_macro_derive(IntoHashMap)]
pub fn into_hash_map(item: TokenStream) -> TokenStream {
    let input = syn::parse_macro_input!(item as syn::DeriveInput);

    let struct_identifier = &input.ident;

    match &input.data {
        Data::Struct(syn::DataStruct { fields, .. }) => {
            let mut implementation = quote!{
                let mut hash_map = std::collections::HashMap::<String, String>::new();
            };

            for field in fields {
                let identifier = field.ident.as_ref().unwrap();
                implementation.extend(quote!{
                    hash_map.insert(stringify!(#identifier).to_string(), String::from(value.#identifier));
                });
            }

            quote! {
                #[automatically_derived]
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    fn from(value: #struct_identifier) -> Self {
                        #implementation

                        hash_map
                    }
                }
            }
        }
        _ => unimplemented!()
    }.into()
}
```

这里发生了很多事情，让我们分解一下:

### 如何确保宏的目标是 `struct`

`let struct_identifier = &input.ident;`：你将结构体标识符存储在一个单独的变量中，这样你以后就可以轻松使用它。

```
match &input.data {
    Data::struct(syn::DataStruct { fields, .. }) => { ... },
    _ => unimplemented!()
}
```

你在 `DeriveInput` 的解析数据字段上进行匹配。如果它是 `DataStruct` 类型（一个 Rust 结构体），则继续，否则恐慌，因为宏尚未为其他类型实现。

### 如何构建输出代码

让我们看看当你确实有 `DataStruct` 时，匹配分支的实现：

```
let mut implementation = quote!{
    let mut hash_map = std::collections::HashMap::<String, String>::new();
};
```

在这里，你使用 `quote` 创建了一个新的 `TokenStream`。这个 `TokenStream` 与标准库提供的不同，所以不要与之混淆。它需要是可变的，因为我们很快会向这个 `TokenStream` 添加更多代码。

`TokenStream` 基本上是 AST 的逆表示。你将实际的 Rust 代码提供给 `quote` 宏，它会给我们之前称之为的“令牌流”。

这个 `TokenStream` 要么可以转换为宏的输出类型，要么可以使用 `quote` 提供的方法进行操作，例如 `extend`。

继续，

```
for field in fields {
    let identifier = field.ident.as_ref().unwrap();
    implementation.extend(quote!{
        hash_map.insert(
            stringify!(#identifier).to_string(),
            String::from(value.#identifier)
        );
    });
}
```

你遍历所有字段。在每次迭代中，你首先创建一个变量 `identifier` 来保存字段的名称以便以后使用。然后你使用 `extend` 方法在我们之前创建的 `TokenStream` 上添加额外的代码。

`extend` 方法只需要另一个 `TokenStream`，这可以很容易地使用 `quote` 宏生成。对于扩展，你只需要编写代码将一个新条目插入将在宏输出中创建的 `hash_map`。

让我们仔细看看：

```
hash_map.insert(
    stringify!(#identifier).to_string(),
    String::from(value.#identifier)
);
```

你知道，insert 方法需要一个键和值。你已告知编译器，键和值都是 `String` 类型。`stringify` 是标准库中的一个内置宏，可将任何 `Ident` 类型转换为其 `&str` 等效项。你在这里使用它将字段标识符转换为实际的 `&str`。然后你调用 `to_string()` 方法将其转换为 `String` 类型。

但是 `#identifier` 代表什么？

`quote` 为你提供了在 `TokenStream` 中使用任何在其外部声明的变量的能力，使用 `#` 前缀。可以将其视为 format 参数中的 `{}`。此情况下，`#identifier` 简单地替换为我们在 `extend` 调用之外声明的字段标识符。因此，你实际上是直接在字段标识符上调用 `stringify!()` 宏。

同样，你可以使用熟悉的 `struct_variable.field_name` 语法来访问字段的值，但使用标识符变量代替字段名称。这就是你在 insert 语句中传递该值时所做的：`String::from(value.#identifier)`。

如果你仔细看代码，你会意识到 `value` 从何而来，但如果不是，它只是 trait 实现方法在进一步声明其输入参数时使用的。

一旦你使用 for 循环为结构体中的每个字段构建了实现，你就有了一个 `TokenStream`，代表性的包含以下代码：

```
let mut hash_map = std::collections::HashMap::<String, String>::new();
hash_map.insert("username".to_string(), String::from(value.username));
hash_map.insert("first_name".to_string(), String::from(value.first_name));
hash_map.insert("last_name".to_string(), String::from(value.last_name));
```

继续生成我们的宏的输出，你有：

```
hash_map
        }
    }
}
```

这里，你首先使用 `quote` 创建另一个 `TokenStream`。你在这个代码块中编写你的 `From` 特性实现。

接下来的这一行再次使用我们刚刚看到的带 `#` 前缀的语法，声明特性实现应该基于结构体的标识符用于你的目标结构体。在这种情况下，如果你将派生宏应用于 `User` 结构体，这个标识符将被替换为 `User`。

```
impl From<#struct_identifier> for std::collections::HashMap<String, String> {}
```

最后，你有实际的方法体：

```
fn from(value: #struct_identifier) -> Self {
    #implementation

    hash_map
}
```

如你所见，你可以使用相同的 `#` 语法轻松地将一个 `TokenStream` 嵌套到另一个 `TokenStream` 中，这种语法允许你在 `quote` 宏中使用外部变量。

在这里，你声明你的哈希映射实现应插入函数的前几行。然后你简单地返回同一个 `hash_map`。这完成了你的特性实现。

作为最后一步，你在 `match` 块的返回类型上调用 `.into()`，它返回 `quote` 宏调用的输出。这将 `quote` 使用的 `TokenStream` 类型转换为标准库使用的 `TokenStream` 类型，并由编译器预期从宏返回。

如果我逐行分解时理解起来比较困难，你可以查看下面的完整但带注释的代码：

```
// 告诉编译器这个函数是一个派生宏，而派生的标识符是 `IntoHashMap`。
#[proc_macro_derive(IntoHashMap)]
// 声明一个函数，该函数接收一个输入 `TokenStream` 并输出 `TokenStream`。
pub fn into_hash_map(item: TokenStream) -> TokenStream {
    // 将输入的 token stream 解析为 `syn` crate 提供的 `DeriveInput` 类型。
    let input = syn::parse_macro_input!(item as syn::DeriveInput);

    // 将结构体标识符（名称）存储到一个变量中，以便你可以将其插入到输出代码中。
    let struct_identifier = &input.ident;

    // 对应用了派生宏的目标类型进行匹配
    match &input.data {
        // 匹配目标是一个结构体，并从它的信息中解构 `fields` 字段。
        Data::Struct(syn::DataStruct { fields, .. }) => {
            // 声明一个新的 quote 块，它将保存你的哈希映射实现的代码。
            // 这个块将既创建一个新的哈希映射，也将用结构体中的所有字段填充它。
            let mut implementation = quote!{
                // 这是你希望在输出中看到的代码。在这种情况下，你希望创建一个新的哈希映射。
                let mut hash_map = std::collections::HashMap::<String, String>::new();
            };

            // 遍历目标结构体的所有字段
            for field in fields {
                // 创建一个变量来存储字段的标识符（名称），以备后用
                let identifier = field.ident.as_ref().unwrap();
                // 扩展你的 `implementation` 块，以便在输出中包含用当前字段的信息填充创建的哈希映射。
                implementation.extend(quote!{
                    // 使用 `stringify!` 宏将字段标识符转换为字符串。这将作为你新哈希映射条目的键。
                    // 对于这个键的值，我们使用 `value.#identifier` 访问结构体中的字段值，
                    // 其中 `#identifier` 在输出代码中替换为实际的字段名。
                    hash_map.insert(stringify!(#identifier).to_string(), String::from(value.#identifier));
                });
            }

            // 创建最终输出块
            quote! {
                // 实现 `From` 特性，以允许将你的目标结构体标识为 `struct_identifier` 转换为 
                // 键和值均为 `String` 的 HashMap。
                // 就像先前一样，`#struct_identifier` 在输出代码中被替换为目标结构体的实际名称。
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    // 只是 `From` 特性要求你实现的一个方法。
                    // 输入值的类型再次为 `#struct_identifier`，在输出代码中被替换为目标结构体的名称。
                    fn from(value: #struct_identifier) -> Self {
                        // 使用 `quote!` 将你创建的 `implementation` 块包含在这个方法体中。
                        // `quote` 允许你自由嵌套其他的 `quote` 块。
                        #implementation

                        // 返回 hash_map。
                        hash_map
                    }
                }
            }
        }
        // 如果目标类型是任何其他类型，则 panic。
        _ => unimplemented!()
        // 将 `quote` 使用的 `TokenStream` 类型转换为标准库和编译器使用的 `TokenStream` 类型。
    }.into()
}
```

**是时候享受你劳动的成果了。**

### 如何使用你的 Derive 宏

回到你的 `my-app/main.rs` 文件中，让我们调试打印一下你使用宏创建的哈希图。你的 `main.rs` 应该看起来像这样：

```
// my-app/src/main.rs

use std::collections::HashMap;
use my_app_macros::IntoHashMap;

#[derive(IntoHashMap)]
pub struct User {
    username: String,
    first_name: String,
    last_name: String,
}

fn main() {
    let user = User {
        username: "username".to_string(),
        first_name: "First".to_string(),
        last_name: "Last".to_string(),
    };

    let hash_map = HashMap::<String, String>::from(user);

    dbg!(hash_map);
}
```

如果你使用 `cargo run` 运行这个程序，你应该会在终端上看到以下输出：

```
[src/main.rs:20:5] hash_map = {
    "last_name": "Last",
    "first_name": "First",
    "username": "username",
}
```

就是这样！

### 如何改进我们的实现

在原始实现中，我有意跳过了一种更好地使用迭代器和 `quote` 的方式，因为它需要我们学习更多 `quote` 特有的语法。

让我们看看使用这种方式会是怎样的，然后再深入了解它的工作原理：

```
let input = syn::parse_macro_input!(item as syn::DeriveInput);
    let struct_identifier = &input.ident;

    match &input.data {
        Data::Struct(syn::DataStruct { fields, .. }) => {
            let field_identifiers = fields.iter().map(|item| item.ident.as_ref().unwrap()).collect::<Vec<_>>();

            quote! {
                impl From<#struct_identifier> for std::collections::HashMap<String, String> {
                    fn from(value: #struct_identifier) -> Self {
                        let mut hash_map = std::collections::HashMap::<String, String>::new();

                        #(
                            hash_map.insert(stringify!(#field_identifiers).to_string(), String::from(value.#field_identifiers));
                        )*

                        hash_map
                    }
                }
            }
        }
        _ => unimplemented!()
    }.into()
```

这看起来更加简洁易懂！让我们看看使这一切成为可能的特殊语法 – 特别是以下这一行：

```
#(
    hash_map.insert(stringify!(#field_identifiers).to_string(), String::from(value.#field_identifiers));
)*
```

我们来分解一下。首先，将整个代码块包裹在 `#()*` 中，代码将放在括号内。这种语法允许你在括号内使用任何迭代器，并且它会为迭代器中的每个项目重复该代码块，同时在每次迭代中用正确的项目替换变量。

在这种情况下，你首先创建一个 `field_identifiers` 迭代器，这是目标结构体中所有字段标识符的集合。然后你编写 `hash_map` 插入语句，同时直接将迭代器用作单个项目。`#()*` 包装器将其转换为预期的多行输出，每行对应迭代器中的一个项目。

## 更复杂的 Derive 宏

现在你已经熟悉如何编写简单的 Derive 宏，是时候进一步创建一个在实际场景中更有用的宏了，特别是当你处理数据库模型时。

### `DeriveCustomModel` 宏

你将要构建一个 Derive 宏，帮助你从原始结构体生成派生结构体。在处理数据库时，你会经常需要这个，尤其是当你只想加载部分数据时。

例如，如果你有一个包含所有用户信息的 `User` 结构体，但你只想从数据库加载用户的姓名信息，你就需要一个只包含这些字段的结构体 – 除非你想让所有字段都成为 Option 类型，但这不是一个好主意。

我们还需要添加 `From` trait 的实现，以便能够自动从 `User` 结构体转换为派生结构体。我们的宏还需要能够从同一个目标结构体派生多个模型。

让我们先在 `lib.rs` 中声明它：

```
// lib.rs

#[proc_macro_derive(DeriveCustomModel, attributes(custom_model))]
pub fn derive_custom_model(item: TokenStream) -> TokenStream {
    todo!()
}
```

大部分语法你应该已经从我们之前的例子中熟悉了。唯一的增加部分是我们现在还在 `proc_macro_derive` 调用中定义了 `attributes(custom_model)`，这基本上告诉编译器将任何以 `#[custom_model]` 开头的属性视为此 Derive 宏在该目标上的参数。

例如，一旦你定义了这个，你可以在目标结构体上应用 `#[custom_model(name = "SomeName")]`，以定义派生结构体应具有的名称 "SomeName"。你需要自己解析并处理它，当然 – 这个定义只是告诉编译器将其传递给你的宏实现，而不要将其视为未知属性。

我们还需要创建一个新文件来包含此宏的实现细节。宏规则规定它需要在 `lib.rs` 中**定义**，我们已经做到了。实现本身可以放在项目中的任何地方。

```
touch src/custom_model.rs
```

### 如何将实现与声明分离

定义一个实现 `DeriveCustomModel` 宏的函数。我们还将立即添加所有的导入，以避免后续的混淆：

```
// custom_model.rs

use syn::{
    parse_macro_input, Data::Struct, DataStruct, DeriveInput, Field, Fields, Ident, Path,
};
use darling::util::PathList;
use darling::{FromAttributes, FromDeriveInput, FromMeta};
use proc_macro::TokenStream;
use quote::{quote, ToTokens};

pub(crate) fn derive_custom_model_impl(input: TokenStream) -> TokenStream {
    // 将输入的 token 流解析为 `DeriveInput`
    let original_struct = parse_macro_input!(input as DeriveInput);

    // 从输入中解构出 data 和 ident 字段
    let DeriveInput { data, ident, .. } = original_struct.clone();
}
```

这只是一个 Rust 函数，所以这里没有特殊的规则。你可以像调用常规 Rust 函数那样从声明中调用它。

```
#[proc_macro_derive(DeriveCustomModel, attributes(custom_model))]
pub fn derive_custom_model(item: TokenStream) -> TokenStream {
    custom_model::custom_model_impl(item)
}
```

### 如何解析派生宏参数

要解析我们的派生宏的参数（通常是通过应用于目标或其字段的属性提供的参数），我们将依赖 `darling` crate，使其像定义数据类型一样简单。

```
// custom_model.rs

// 为此结构派生 `FromDeriveInput`，该宏由 darling 提供，
// 能够自动添加将参数 token 解析到给定结构中的功能。
#[derive(FromDeriveInput, Clone)]
// 我们告诉 darling，我们正在查找使用 `custom_model` 
// 属性定义的参数，并且我们只支持命名结构。
#[darling(attributes(custom_model), supports(struct_named))]
struct CustomModelArgs {
    // 指定生成派生模型的参数。
    // 通过为每个模型重复此属性，可以生成多个模型。
    #[darling(default, multiple, rename = "model")]
    pub models: Vec<CustomModel>,
}
```

我们告诉 `darling`，对于结构的参数，我们应该期待一个 `model` 参数列表，每个参数将为一个派生模型定义参数。这使我们可以使用宏从单个输入结构生成多个派生结构。

接下来，让我们定义每个模型的参数：

```
// custom_model.rs

// 为此结构派生 `FromMeta`，该宏由 darling 提供，
// 能够自动添加将元数据解析到给定结构中的功能。
#[derive(FromMeta, Clone)]
struct CustomModel {
    // 生成模型的名称。
    name: String,
    // 逗号分隔的字段标识符列表，
    // 这些字段将包含在生成的模型中。
    fields: PathList,
    // 额外的派生列表，用于
    // 对生成的结构应用，例如 `Eq` 或 `Hash`。
    #[darling(default)]
    extra_derives: PathList,
}
```

在这个结构中，我们有两个必需的参数：`name` 和 `fields`，以及一个可选的参数 `extra_derives`。由于在它上面有 `#[darling(default)]` 注解，它是可选的。

### 如何实现 `DeriveCustomModel`

现在我们已经定义了所有的数据类型，让我们开始解析——这就像调用我们的参数结构上的一个方法一样简单！完整的函数实现看起来应该像这样：

```
// custom_model.rs

pub(crate) fn derive_custom_model_impl(input: TokenStream) -> TokenStream {
    // 将输入的 token 流解析为 `DeriveInput`
    let original_struct = parse_macro_input!(input as DeriveInput);

    // 从输入中解构出 data 和 ident 字段
    let DeriveInput { data, ident, .. } = original_struct.clone();

    if let Struct(data_struct) = data {
        // 从这个数据结构中提取字段
        let DataStruct { fields, .. } = data_struct;

        // `darling` 在结构上提供了这个方法，
        // 以方便地解析参数，并且还能为我们处理错误。
        let args = match CustomModelArgs::from_derive_input(&original_struct) {
            Ok(v) => v,
            Err(e) => {
                // 如果 darling 返回了一个错误，则生成一个
                // token 流，从而使编译器在正确的位置显示错误。
                return TokenStream::from(e.write_errors());
            }
        };

        // 从解析的参数中解构 `models` 字段。
        let CustomModelArgs { models } = args;

        // 创建一个新的输出
        let mut output = quote!();

        // 如果没有定义模型但使用了宏，则恐慌。
        if models.is_empty() {
            panic!(
                "请使用 `model` 属性至少指定1个模型"
            )
        }

        // 迭代所有定义的模型
        for model in models {
            // 根据目标结构的字段和 `model` 参数生成自定义模型。
            let generated_model = generate_custom_model(&fields, &model);

            // 扩展输出以包含生成的模型
            output.extend(quote!(#generated_model));
        }

        // 将输出转换为 TokenStream 并返回
        output.into()
    } else {
        // 如果目标不是命名结构，则恐慌
        panic!("DeriveCustomModel 只能用于命名结构")
    }
}
```

生成每个模型的 token 的代码已被抽取到我们称之为 `generate_custom_model` 的另一个函数中。我们也来实现这个函数：

### 如何生成每个自定义模型


```rust
fn generate_custom_model(fields: &Fields, model: &CustomModel) -> proc_macro2::TokenStream {
    let CustomModel {
        name,
        fields: target_fields,
        extra_derives,
    } = model;

    // Create new fields output
    let mut new_fields = quote!();

    // Iterate over all fields in the source struct
    for Field {
        // The identifier for this field
        ident,
        // Any attributes applied to this field
        attrs,
        // The visibility specifier for this field
        vis,
        // The colon token `:`
        colon_token,
        // The type of this field
        ty,
        ..
    } in fields
    {
        // Make sure that field has an identifier, panic otherwise
        let Some(ident) = ident else {
            panic!("Failed to get struct field identifier")
        };

        // Try to convert field identifier to `Path` which is a type provided
        // by `syn`. We do this because `darling`'s PathList type is just a
        // collection of this type with additional methods on it.
        let path = match Path::from_string(&ident.clone().to_string()) {
            Ok(path) => path,
            Err(error) => panic!("Failed to convert field identifier to path: {error:?}"),
        };

        // If the list of target fields doesn't contain this field,
        // skip to the next field
        if !target_fields.contains(&path) {
            continue;
        }

        // If it does contain it, reconstruct the field declaration
        // and add it in `new_fields` output so that we can use it
        // in the output struct.
        new_fields.extend(quote! {
            #(#attrs)*
            #vis #ident #colon_token #ty,
        });
    }

    // Create a new identifier for output struct
    // from the name provided.
    let struct_ident = match Ident::from_string(name) {
        Ok(ident) => ident,
        Err(error) => panic!("{error:?}"),
    };

    // Create a TokenStream to hold the extra derive declarations
    // on new struct.
    let mut extra_derives_output = quote!();

    // If extra_derives is not empty,
    if !extra_derives.is_empty() {
        // This syntax is a bit compact, but you should already
        // know everything you need to understand it by now.
        extra_derives_output.extend(quote! {
            #(#extra_derives,)*
        })
    }

    // Construct the final struct by combining all the
    // TokenStreams generated so far.
    quote! {
        #[derive(#extra_derives_output)]
        pub struct #struct_ident {
            #new_fields
        }
    }
}
```

### 如何使用 `DeriveCustomModel` 宏

回到你的 `my-app/main.rs`，让我们调试打印用你实现的宏创建的新结构体的哈希映射。你的 `main.rs` 应该如下所示：

```rust
// my-app/src/main.rs

use macros::{DeriveCustomModel, IntoStringHashMap};
use std::collections::HashMap;

#[derive(DeriveCustomModel)]
#[custom_model(model(
    name = "UserName",
    fields(first_name, last_name),
    extra_derives(IntoStringHashMap)
))]
#[custom_model(model(name = "UserInfo", fields(username, age), extra_derives(Debug)))]
pub struct User2 {
    username: String,
    first_name: String,
    last_name: String,
    age: u32,
}

fn main() {
    let user_name = UserName {
        first_name: "first_name".to_string(),
        last_name: "last_name".to_string(),
    };
    let hash_map = HashMap::<String, String>::from(user_name);

    dbg!(hash_map);

    let user_info = UserInfo {
        username: "username".to_string(),
        age: 27,
    };

    dbg!(user_info);
}
```

如你所见，`extra_derives` 对我们已经很有用了，因为我们需要为新模型派生 `Debug` 和 `IntoStringHashMap`。

如果你使用 `cargo run` 运行它，你应该在终端中看到以下输出：

```
[src/main.rs:32:5] hash_map = {
    "last_name": "last_name",
    "first_name": "first_name",
}
[src/main.rs:39:5] user_info = UserInfo {
    username: "username",
    age: 27,
}
```

我们将在这里结束派生宏的部分。

## 一个简单的属性宏

在本节中，你将学习如何编写一个**属性**宏。

### `log_duration` 属性

你将编写一个简单的属性宏，它可以应用于任何函数（或方法），并在每次调用函数时记录函数的总运行时间。

### 如何声明属性宏

通过创建一个函数并使用 `proc_macro_attribute` 宏注解该函数来声明属性宏，该宏告诉编译器将该函数视为宏声明。让我们看看它是什么样的：

```rust
// my-app-macros/src/lib.rs

#[proc_macro_attribute]
pub fn log_duration(args: TokenStream, item: TokenStream) -> TokenStream {
    log_duration_impl(args, item)
}
```

对于这些宏，函数名称非常重要，因为它也成为宏的名称。如你所见，它们接受两个不同的参数。第一个是传递给属性宏的参数，第二个是属性宏的目标。

让我们也实现 `log_duration_impl`。创建一个新的文件 `log_duration.rs`：

```rust
```

### 如何实现 `log_duration` 属性宏

我将首先为您提供完整的实现，然后我会分解一些我之前没有使用的部分：

```
// my-app-macros/src/log_duration.rs

use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, ItemFn};

pub(crate) fn log_duration_impl(_args: TokenStream, input: TokenStream) -> TokenStream {
    // 将输入解析为 `ItemFn`，这是 `syn` 提供的一种表示函数的类型。
    let input = parse_macro_input!(input as ItemFn);

    let ItemFn {
        // 函数签名
        sig,
        // 该函数的可见性说明符
        vis,
        // 函数体
        block,
        // 应用于此函数的其他属性
        attrs,
    } = input;

    // 提取函数体中的语句
    let statements = block.stmts;

    // 存储用于日志记录的函数标识符
    let function_identifier = sig.ident.clone();

    // 使用解析的输入重新构建函数作为输出
    quote!(
        // 重新应用此函数上的所有其他属性。
        // 编译器不会在此列表中包含我们当前正在处理的宏。
        #(#attrs)*
        // 重新构建函数声明
        #vis #sig {
            // 在函数开始时，创建一个 `Instant` 实例
            let __start = std::time::Instant::now();

            // 创建一个新的块，其主体是函数的主体。
            // 将此块的返回值存储为一个变量，以便我们之后可以从父函数中返回它。
            let __result = {
                #(#statements)*
            };

            // 记录此函数的持续时间信息
            println!("{} 耗时 {}μs", stringify!(#function_identifier), __start.elapsed().as_micros());

            // 返回结果（如果有的话）
            return __result;
        }
    )
    .into()
}
```

你之前可能没见过的唯一事情是 `sig` 和 `block` 字段，它们是通过将输入解析为 `ItemFn` 获得的。`sig` 包含函数的整个签名，而 `block` 包含函数的整个主体。这就是为什么，通过使用下面的代码，我们可以基本上重新构建未修改的函数：

```
// 在宏中重新构建未修改的函数的示例代码

#vis #sig #block
```

在这个例子中，你需要修改函数体，这就是为什么你要创建一个新的块来封装原始函数块。

### 如何使用你的 `log_duration` 宏

回到 `main.rs`，使用属性宏比你想象的要简单：

```
// main.rs

#[log_duration]
#[must_use]
fn function_to_benchmark() -> u16 {
    let mut counter = 0;
    for _ in 0..u16::MAX {
        counter += 1;
    }

    counter
}

fn main() {
    println!("{}", function_to_benchmark());
}
```

当你运行这个程序时，你应该得到以下输出：

```
function_to_benchmark 耗时 498μs
65535
```

我们现在准备好转向更复杂的用例。

## 一个更复杂的属性宏

### `cached_fn` 属性

你将编写一个属性宏，它将允许你为任何函数添加缓存功能。对于这个示例，我们假设我们的函数总是具有 `String` 参数，并且也返回一个 `String` 值。

有些人可能更熟悉它作为“记忆化”函数。

此外，你需要允许这个宏的用户告诉宏它如何基于函数参数生成一个动态键。

为了帮助我们实现缓存部分，以免被分散注意力，我们将使用一个名为 `cacache` 的依赖项。`cacache` 是一个 Rust 库，用于管理本地键和内容缓存。它通过将缓存写入磁盘来工作。

让我们通过直接编辑 `my-app` 的 `Cargo.toml` 文件来添加它到项目中：

```
// Cargo.toml

workspace = { members = ["my-app-macros"] }

[package]
name = "my-app"
version = "0.1.0"
edition = "2021"
resolver = "2"

# 更多键及其定义请参见 https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
# 新依赖项
cacache = { version = "13.0.0", default-features = false, features = ["mmap"] }
macros = { path = "./macros" }
```

### 如何实现 `cached_fn` 属性宏

让我们从 `lib.rs` 中声明这个宏开始：

```
// my-app-macros/src/lib.rs

#[proc_macro_attribute]
pub fn cached_fn(args: TokenStream, item: TokenStream) -> TokenStream {
    cached_fn_impl(args, item)
}
```

创建一个新的文件 `cached_fn.rs` 来存储实现：

```
touch my-app-macros/src/cached_fn.rs
```

让我们在实现之前定义下我们的参数应该是什么样子的：

### `cached_fn` 属性参数

```
// my-app-macros/src/cached_fn.rs

#[derive(FromMeta)]
struct CachedParams {
    // 接受我们应该用来计算键的任意表达式。
    // 这可以是一个常量字符串，或者是基于函数参数的一些计算。
    keygen: Option<Expr>,
}
```

唯一的参数是一个可选的 `keygen`，其类型为 `Expr`。`Expr` 表示任何有效的 [Rust 表达式][57]，因此它可以非常动态。在这个例子中，你将传递一个基于目标函数的参数生成键的表达式。

```
// my-app-macros/src/cached_fn.rs

pub fn cached_fn_impl(args: TokenStream, item: TokenStream) -> TokenStream {
    // 将参数令牌解析为 NestedMeta 项的列表
    let attr_args = match NestedMeta::parse_meta_list(args.into()) {
        Ok(v) => v,
        Err(e) => {
            // 如果有错误，将错误写入输出令牌流
            return proc_macro::TokenStream::from(Error::from(e).write_errors());
        }
    };

    // 将嵌套的元列表解析为我们的 `CachedParams` 结构体
    let CachedParams { keygen } = match CachedParams::from_list(&attr_args) {
        Ok(params) => params,
        Err(error) => {
            // 如果有错误，将错误写入输出令牌流
            return proc_macro::TokenStream::from(Error::from(error).write_errors());
        }
    };

    // 将输入目标项目解析为一个函数
    let ItemFn {
        // 函数签名
        sig,
        // 函数的可见性说明符
        vis,
        // 函数块或主体
        block,
        // 其他应用于此函数的属性
        attrs,
    } = parse_macro_input!(item as ItemFn);

    // 根据给定的参数（或缺少参数）生成我们的键语句
    let key_statement = if let Some(keygen) = keygen {
        // 如果用户指定了 `keygen`，则将其用作获取缓存键的表达式。
        quote! {
            let __cache_key = #keygen;
        }
    } else {
        // 如果没有提供 `keygen`，则使用函数名称作为缓存键。
        let fn_name = sig.ident.clone().to_string();
        quote! {
            let __cache_key = #fn_name;
        }
    };

    // 使用解析的输入重新构造函数作为输出
    quote!(
        // 将原始函数的其他属性应用于生成的函数
        #(#attrs)*
        #vis #sig {
            // 在函数主体的第一件事中包含我们生成的 key_statement
            #key_statement

            // 尝试从缓存中读取值
            match cacache::read_sync("./__cache", __cache_key.clone()) {
                // 如果值存在，将其解析为字符串并返回
                Ok(value) => {
                    println!("Data is fetched from cached");
                    from_utf8(&value).unwrap().to_string()
                },
                Err(_) => {
                    println!("Data is not fetched from cached");
                    // 将原始函数块的输出保存到变量中。
                    let output = #block;

                    // 将输出值以字节形式写入缓存
                    cacache::write_sync("./__cache", __cache_key, output.as_bytes()).unwrap();

                    // 返回原始输出
                    output
                }
            }
        }
    )
    .into()
}
```

好了，事实证明你已经看过了我们在这一节中使用的所有内容。

唯一新的东西是使用 `cacache` 依赖项，但这也相当简单。你只需提供要存储缓存数据的位置作为 `read_sync` 和 `write_sync` 函数的第一个参数。

我们还添加了一些日志记录来帮助我们验证宏是否按预期工作。

### 如何使用 `cached_fn` 宏

要将任何函数变为记忆化或缓存的，我们只需使用 `cached_fn` 属性对其进行注释：

```
// src/main.rs

#[cached_fn(keygen = "format!(\"{first_name} {last_name}\")")]
fn test_cache(first_name: String, last_name: String) -> String {
    format!("{first_name} {last_name}")
}

fn main() {
    test_cache("John".to_string(), "Appleseed".to_string());
    test_cache("John".to_string(), "Appleseed".to_string());
    test_cache("John".to_string(), "Doe".to_string());
}
```

如果运行这个，你应该会看到以下输出：

```
Data is not fetched from cached
Data is fetched from cached
Data is not fetched from cached
```

这清楚地表明，如果函数对相同的参数调用多次，则从缓存中返回数据。但如果参数不同，则不会返回为不同参数集缓存的值。

我们为此做了很多不适用于现实世界的假设。因此，这只是为了学习目的，但描绘了一个真实世界的用例。

例如，我编写了属性宏来使用 `redis` 缓存 HTTP 处理函数，以用于生产服务器。它们的实现与此非常相似，但包含许多特性以适应特定用例。

## 一个简单的函数式宏

现在终于可以再次享受一些 _乐趣_ 了。我们将从简单的开始，但第二个示例将包含解析自定义语法。_有趣_，对吧？

免责声明：如果你熟悉声明式宏（使用 `macro_rules!` 语法），你可能会意识到以下示例可以轻松地使用该语法编写，并且不需要过程宏。如果你还想保持简单，写出不能作为声明式宏编写的过程宏示例是非常困难的，这就是选择这些示例的原因，尽管如此。
```

我们将构建一个非常简单的宏，它将一个字符串字面量（类型为`&str`）作为输入，并为其创建一个全局公共常量（变量名称与值相同）。基本上，我们的宏将生成以下内容：

```
pub const STRING_LITERAL: &str = "STRING_LITERAL";
```

### 如何声明一个类函数的宏

你可以通过创建一个函数并使用`proc_macro`宏注解该函数来声明类函数的宏。它告诉编译器将该函数视为宏声明。让我们看看这是什么样子的：

```
// my-app-macros/src/lib.rs

#[proc_macro]
pub fn constant_string(item: TokenStream) -> TokenStream {
    constant_string_impl(item)
}
```

对于这些宏，函数名称非常重要，因为它也成为宏的名称。如你所见，这些宏只接受一个参数，即你传递给宏的内容。它可以是任何东西，甚至是无效的Rust代码的自定义语法。

### 如何实现`constant_string`宏

对于实现，让我们创建一个新的文件`constant_string.rs`：

```
touch my-app-macros/src/constant_string.rs
```

实现非常简单：

```
use darling::FromMeta;
use proc_macro::TokenStream;
use quote::quote;
use syn::{parse_macro_input, Ident, LitStr};

pub fn constant_string_impl(item: TokenStream) -> TokenStream {
    // 将输入解析为字符串字面量
    let constant_value = parse_macro_input!(item as LitStr);

    // 从传递的字符串值创建一个新的`Ident`（标识符）。
    // 这将成为常量变量的名称。
    let constant_value_name = Ident::from_string(&constant_value.value()).unwrap();

    // 生成声明常量变量的代码。
    quote!(pub const #constant_value_name: &str = #constant_value;).into()
}
```

我们所做的只是将输入解析为字符串字面量。如果你传递的内容不是字符串字面量，它将抛出一个错误。然后我们获取字符串，创建一个标识符，并生成输出代码。简短且简单。

### 如何使用`constant_string`宏

使用此宏也非常简单：

```
// src/main.rs

constant_string!("SOME_CONSTANT_STRING_VALUE");
```

上面的代码将展开为：

```
pub const SOME_CONSTANT_STRING_VALUE: &str = "SOME_CONSTANT_STRING_VALUE";
```

## 更复杂的类函数宏

顾名思义，类函数宏可以类似于调用函数的方式使用。你还可以在任何可以调用函数的地方使用它们，以及其他地方。

### `hash_mapify`宏

进入有趣的部分：你现在将编写的宏将允许你通过简单地传递一组键值对来生成一个`HashMap`。例如：

```
let variable = "Some variable";

hash_mapify!(
    &str,
    key = "value",
    key2 = "value2",
    key3 = "value3",
    key4 = variable
);
```

如你所见，我们希望第一个参数是值的类型，后续参数是键值对。我们需要自己解析所有这些内容。

为了简化处理，因为这个过程很容易变得复杂，我们只支持字符串、整数、浮点数和布尔值等基本类型。因此，我们不支持创建非字符串键或具有枚举和结构体值的`hash_map`。

### 如何实现`hash_mapify`宏

我们将像往常一样开始声明宏：

```
// my-app-macros/src/lib.rs

#[proc_macro]
pub fn hash_mapify(item: TokenStream) -> TokenStream {
    hash_mapify_impl(item)
}
```

接下来，你需要定义一个数据结构来保存输入数据。在这种情况下，你需要知道传递的值类型，以及一组键值对。

我们将实现部分提取到一个单独的文件，在那里你还将实现数据类型和解析逻辑。

创建新文件`hash_mapify.rs`并声明保存输入数据的数据类型：

```
touch my-app-macros/src/hash_mapify.rs
```

### 如何解析`hash_mapify`的输入

```
// my-app-macros/src/hash_mapify.rs

use proc_macro::TokenStream;
use quote::{quote, ToTokens};
use syn::parse::{Parse, ParseStream};
use syn::{parse_macro_input, Lit, LitStr, Token, Type};

pub struct ParsedMapEntry(String, proc_macro2::TokenStream);

pub struct ParsedMap {
    value_type: Type,
    entries: Vec<ParsedMapEntry>,
}
```

你直接以`TokenStream`类型保存值，因为你需要同时支持字面值和变量，这两者在此上下文中只有一个共同类型`TokenStream`。

你可能还注意到，我们将`value_type`保存为`Type`，这是`syn` crate提供的一种类型，它是Rust值可能具有的类型的枚举。这真是满满的干货！

你不需要处理每个枚举变体，因为这种类型也可以直接转换为`TokenStream`。你很快就会更好地理解这意味着什么。

下一步，你需要为之前声明的`ParsedMap`实现`syn::parse::Parse` trait，以便可以从传递给宏的`TokenStream`中计算它。

```
// my-app-macros/src/hash_mapify.rs
```

```markdown
`input`（在这种情况下类型为`ParsedStream`）的工作方式类似于迭代器。你需要使用其上的方法`parse`解析出输入的标记，这也会将流推进到下一个标记的开头。

例如，如果你有一个表示`[a, b, c]`的标记流，当你从这个流中解析出`[`时，该流将被变异为仅包含`a, b, c]`。这非常类似于迭代器，一旦你从中取出一个值，迭代器就会前进一个位置，只保留剩余的项。

在你解析任何内容之前，你需要检查输入是否为空，如果为空，则会触发恐慌：

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // 检查输入是否为空（没有传递任何参数）。如果
        // 为空，则触发恐慌，因为我们无法继续进行。
        if input.is_empty() {
            panic!("至少需要为一个空的hashmap指定一个类型");
        }

        // ...
    }
}
```

由于我们预计传递给宏的第一个参数是我们的hashmap中值的类型，让我们从标记流中解析出来：

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // 由于第一个参数应该是`Type`类型，你可以尝试
        // 从输入中解析出`Type`，否则返回一个错误。
        let ty = input.parse::<Type>()?;

        // ...
    }
}
```

`Parse`接受一个表示要解析内容的单一类型参数。

如果第一个参数无法解析为有效类型，将返回一个错误。请注意，这不会验证你传递的类型是否实际存在，它只会验证第一个参数中的标记是否适合类型定义，仅此而已。

这意味着如果你传递`SomeRandomType`，而`SomeRandomType`实际上并没有定义，解析仍然会成功。只有在编译时扩展宏时，才会失败。

接下来，我们还希望用户使用`,`来分隔参数。让我们将其解析为类型之后的下一个标记：

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // 下一步解析`,`标记，你期望它被用来分隔参数。
        input.parse::<Token![,]>()?;

        // ...
    }
}
```

你可能会注意到，当为`parse`方法提供类型参数时，使用了`Token!`宏。这是`syn`提供的一个宏，用于轻松转换内置类型，比如关键字（`type`，`async`，`fn`等），标点符号（`,`，`.`，`;`等）以及分隔符（`{`，`[`，`(` 等）。此宏接受一个参数，即需要类型的关键字/标点符号/分隔符字面量。

官方文档将其定义为：

> 一个类型宏，扩展为给定标记的Rust类型表示。

现在你有了值的类型以及第一个分隔符（逗号），是时候开始解析键值对了。所有的键值对都遵循相同的结构`key = value`，并由逗号分隔。

请注意，空白不是重点，因为它完全在标记化过程中处理，不是你需要处理的内容。

由于你不知道传递了多少键值对，你需要某些方法来告诉你什么时候解析完成：

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // 循环直到输入为空（没有剩余的内容
        // 可以解析）。
        while !input.is_empty() {
            // ..
        }

        // ...
    }
}
```

如我之前所述，标记是从流中取出并在每次你解析某些内容时前进。这意味着当所有标记都解析完毕时，流将为空。我们在这里利用这一事实来确定何时跳出循环。

每个键值对的解析方式类似于你解析类型参数的方式：

```rust
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        // ...

        // 循环直到输入为空（没有剩余的内容
        // 可以解析）。
        while !input.is_empty() {
            // 尝试将键解析为标识符
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // 如果它不是标识符，则尝试将其解析为
                // 字符串字面量
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // 如果它既不是标识符也不是字符串字面量，
                // 则它不是有效的键，因此触发适当的错误恐慌。
            } else {
                panic!("键必须是字符串字面量或标识符！");
            };

            // 解析`=`号，它应该是键之后的下一个标记。
            input.parse::<Token![=]>()?;
```

```
// 将解析的键值对推送到我们的列表中
entries.push(ParsedMapEntry(key, value));

// 检查下一个 token 是否是逗号，不提前推进流
if input.peek(Token![,]) {
    // 如果是的话，先将其解析，然后在继续解析下一个键值对之前
    // 推进流
    input.parse::<Token![,]>()?;
}

// ...
}
}
```

这里唯一新增的是最后对 `peek` 方法的调用。这是一个特殊的方法，如果传递给 `peek` 的 token 是流中的下一个 token，则返回布尔值，否则返回 false。

正如名字所示，这只执行检查，所以它不会将该 token 从流中取出或以任何形式推进流。

一旦所有解析完成，只需作为之前声明的 `ParsedMap` 结构体的一部分返回信息。如果如下的完整实现更便于你阅读，可以参考：

```
// my-app-macros/src/hash_mapify.rs

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let mut entries = Vec::<ParsedMapEntry>::new();

        // 检查输入是否为空（没有传递参数）。如果不是，则
        // 抛出异常，因为我们无法继续。
        if input.is_empty() {
            panic!("至少必须为空的 hashmap 指定一个类型");
        }

        // 因为第一个参数应该是 `Type` 类型，尝试
        // 从输入中解析 `Type`，否则返回错误。
        let ty = input.parse::<Type>()?;

        // 接下来，解析 `,` token，你期望用它来
        // 分隔参数。
        input.parse::<Token![,]>()?;

        // 循环直到输入为空（没有剩下的东西可解析）。
        while !input.is_empty() {
            // 尝试解析键为标识符
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // 如果不是标识符，尝试解析为
                // 字符串字面量
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // 如果既不是标识符也不是字符串字面量，
                // 则不是有效的键，抛出适当错误。
            } else {
                panic!("键必须是字符串字面量或标识符！");
            };

            // 解析 `=` 符号，它应该是
            // 键后的下一个 token。
            input.parse::<Token![=]>()?;

            // 接下来，尝试将值解析为标识符。如果是，
            // 表示它是一个变量，所以我们应直接将其转换为 token 流。
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // 如果输入不是标识符，尝试将其解析为
                // 字面量值，如 `"string"` 对于字符串， `42`
                // 对于数字，`false` 对于布尔值等。
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // 如果输入既不是标识符也不是字面量值，
                // 则抛出适当的错误。
                panic!("值必须是字面量或标识符！");
            };

            // 将解析的键值对推入我们的列表。
            entries.push(ParsedMapEntry(key, value));

            // 检查下一个 token 是否为逗号，不推进流
            if input.peek(Token![,]) {
                // 如果是，则将其解析出来并推进流
                // 之后再解析下一个键值对。
                input.parse::<Token![,]>()?;
            }
        }

        Ok(ParsedMap {
            value_type: ty,
            entries,
        })
    }
}
```

### 如何生成输出代码

现在你终于可以编写实际的宏实现了，这会是相当直接的：

```
// my-app-macros/src/hash_mapify.rs

pub fn hash_mapify_impl(item: TokenStream) -> TokenStream {
    // 将输入 token 流解析为我们定义的 `ParsedMap`。
    // 这会使用我们之前实现的解析 trait 的逻辑。
    let input = parse_macro_input!(item as ParsedMap);

    let key_value_pairs = input.entries;
    let ty = input.value_type;

    // 在代码块内生成输出的 hashmap 以避免与现有变量冲突。
    // 从块中返回 hashmap。
    quote!({
        // 创建一个新的 hashmap，其键类型为 `String`，值类型为
        // 从宏输入参数中解析的 `#ty`。
        let mut hash_map = std::collections::HashMap::<String, #ty>::new();

        // 将所有键值对插入 hashmap。
        #(
            hash_map.insert(#key_value_pairs);
        )*

        // 返回生成的 hashmap
        hash_map
    })
    .into()
}
```

```
#(hash_map.insert(#key_value_pairs);)*
```

这是使用列表的正确语法，但底层类型 `ParsedMapEntry` 是自定义类型。`syn` 和 `quote` 都不知道如何将其转换为 token 流。因此，我们无法使用此语法。

但是，如果我们尝试手动编写实现，在其中遍历自己，在每个循环中生成单独的 token 流，并扩展现有的 token 流，将会非常繁琐。是否有更好的解决方案呢？确实有：`ToTokens` trait。

### 如何将自定义数据类型转换为输出 Tokens

这个 trait 可以为我们的任何自定义类型实现，并定义类型在转换为 token 流时的样子。

```
// my-app-macros/src/hash_mapify.rs

impl ToTokens for ParsedMapEntry {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let key = self.0.clone();
        let value = self.1.clone();

        tokens.extend(quote!(String::from(#key), #value));
    }
}
```

作为实现的一部分，你需要修改 `tokens` 参数并扩展它，以包含我们希望类型生成的 token 流。我用来实现这一点的语法现在应该都很熟悉了。

一旦完成了这一点，`quote` 现在可以轻松地将有问题的代码转换为 token 流。因此，这个：`#(hash_map.insert(#key_value_pairs);)*` 现在将直接工作。

像往常一样，如果这样更容易理解，这里是完整的实现：

```
// my-app-macros/src/hash_mapify.rs

use proc_macro::TokenStream;
use quote::{quote, ToTokens};
use syn::parse::{Parse, ParseStream};
use syn::{parse_macro_input, Lit, LitStr, Token, Type};

pub struct ParsedMapEntry(String, proc_macro2::TokenStream);

pub struct ParsedMap {
    value_type: Type,
    entries: Vec<ParsedMapEntry>,
}

impl ToTokens for ParsedMapEntry {
    fn to_tokens(&self, tokens: &mut proc_macro2::TokenStream) {
        let key = self.0.clone();
        let value = self.1.clone();

        tokens.extend(quote!(String::from(#key), #value));
    }
}

impl Parse for ParsedMap {
    fn parse(input: ParseStream) -> syn::Result<Self> {
        let mut entries = Vec::<ParsedMapEntry>::new();

        // 检查输入是否为空（没有参数传递）。如果不是，则
        // 报错，因为我们无法继续下去。
        if input.is_empty() {
            panic!("至少要为一个空的 hashmap 指定一个类型");
        }

        // 由于第一个参数应该是 `Type` 类型，所以你需要
        // 从输入中解析出 `Type`，否则返回错误。
        let ty = input.parse::<Type>()?;

        // 解析 `,` token，你期望它用于分隔参数。
        input.parse::<Token![,]>()?;

        // 循环，直到输入为空（没有其他东西
        // 可以解析）。
        while !input.is_empty() {
            // 尝试解析键作为标识符
            let key = if let Ok(key) = input.parse::<syn::Ident>() {
                key.to_string()
                // 如果不是标识符，尝试解析它作为
                // 字符串字面量
            } else if let Ok(key) = input.parse::<LitStr>() {
                key.value()
                // 如果既不是标识符也不是字符串字面量，
                // 则它不是有效的键，所以报错。
            } else {
                panic!("键必须是字符串字面量或标识符！");
            };

            // 解析 `=` 符号，它应该是
            // 键之后的下一个 token。
            input.parse::<Token![=]>()?;

            // 接下来，尝试解析值作为标识符。如果是，则
            // 说明它是一个变量，所以我们应该直接转换为 token
            // 流。
            let value = if let Ok(value) = input.parse::<syn::Ident>() {
                value.to_token_stream()
                // 如果输入不是标识符，尝试解析它作为
                // 字面值，比如 `"string"` 对于字符串，`42`
                // 对于数字，`false` 对于布尔值等。
            } else if let Ok(value) = input.parse::<Lit>() {
                value.to_token_stream()
            } else {
                // 如果输入既不是标识符，也不是字面值，
                // 则报错。
                panic!("值必须是字面量或标识符！");
            };

            // 将解析出的键值对添加到我们的列表中。
            entries.push(ParsedMapEntry(key, value));

            // 检查下一个 token 是否是逗号，而不推进流
            if input.peek(Token![,]) {
                // 如果是，则解析出它并推进流，然后
                // 继续处理下一个键值对
                input.parse::<Token![,]>()?;
            }
        }

        Ok(ParsedMap {
            value_type: ty,
            entries,
        })
    }
}

pub fn hash_mapify_impl(item: TokenStream) -> TokenStream {
    // 解析输入 token 流为我们定义的 `ParsedMap`。
    // 这将使用我们之前实现的解析 trait 逻辑。
    let input = parse_macro_input!(item as ParsedMap);
```

```
// 在代码块中生成输出的哈希映射，这样我们就不会影射任何现有的变量。返回代码块中的哈希映射。
quote!({
    // 用 `String` 作为键类型，并使用从宏输入参数中解析的 `#ty` 作为值类型来创建一个新的哈希映射。
    let mut hash_map = std::collections::HashMap::<String, #ty>::new();

    // 将所有键值对插入哈希映射。
    #(
        hash_map.insert(#key_value_pairs);
    )*

    // 返回生成的哈希映射
    hash_map
})
.into()
}
```

### 如何使用 `hash_mapify` 宏

我们可以通过编写一个简单的用例来验证我们的宏是否有效：

```
// src/main.rs

fn main() {
    test_hashmap();
}

fn test_hashmap() {
    let some_variable = "Some variable value";

    let hash_map = hash_mapify!(
        &str,
        "first_key" = "first_value",
        "second_variable" = some_variable,
        some_key = "value for variable key",
    );

    let number_hash_map =
        hash_mapify!(usize, "first_key" = 1, "second_variable" = 2, some_key = 3,);

    dbg!(hash_map);
    dbg!(number_hash_map);
}
```

如果你运行这段代码，你应该会看到以下输出：

```
[src/main.rs:62:5] hash_map = {
    "first_key": "first_value",
    "some_key": "value for variable key",
    "second_variable": "Some variable value",
}
[src/main.rs:63:5] number_hash_map = {
    "second_variable": 2,
    "first_key": 1,
    "some_key": 3,
}
```

这正是我们希望看到的结果。

现在我们已经涵盖了所有三种类型的过程宏，我们将在此处结束示例。

## 编写宏之外

既然你已经学会了如何编写基本的派生宏，我想花点时间快速介绍一些在处理宏时很有帮助的工具和技术。我还会指出一些为什么以及何时避免使用它们的缺点。

### 有用的 Crates/工具

[**cargo-expand**][58]

这是一个 CLI 工具，可以为项目中的任何文件生成宏扩展代码。另一个由 [David Tolnay][59] 发起的伟大项目。不过，使用这个工具需要 Rust 的 nightly 工具链。别担心——这只需要工具本身工作。你不需要让你的项目使用 nightly 工具链。你的项目可以继续使用稳定版。

安装 nightly 工具链：

```
rustup toolchain install nightly
```

安装 `cargo-expand`：

```
cargo install cargo-expand
```

现在已经完成了，你可以看到 main 中代码的实际扩展。只需在 `my-app` 项目目录中运行以下命令：

```
cargo expand
```

它将在终端输出中输出扩展代码。你会看到一些不熟悉的东西，比如 `dbg!` 宏的扩展，但你可以忽略这些。

**[trybuild][60] 和 [macrotest][61]**

如果你想单元测试你的过程宏的扩展形式或断言任何预期的编译错误，这两个 crates 非常有用。

## 宏的缺点

### 调试（或缺乏 thereof）

你不能在由宏生成的代码的任何行中设置断点。在错误的栈追踪中，你也无法到达它。这使得调试生成的代码变得非常困难。

在我的通常工作流程中，我要么将日志记录添加到生成的代码中，要么如果这还不够，我会暂时用 `cargo expand` 给我的代码替换掉宏的用法来调试，进行更改，然后基于此更新宏代码。

可能还有更好的方法，如果你知道任何方法，我将不胜感激。

### 编译时成本

宏扩展需要编译器运行和处理的非零成本，然后检查它生成的代码是否有效。当涉及递归宏时，这变得更加昂贵。

作为一个非常粗略的估算，每个宏扩展为项目的编译时间增加 10 毫秒。如果你感兴趣，我鼓励你阅读这篇关于编译器如何内部处理宏的[入门介绍][62]。

### 缺乏自动完成和代码检查

目前，作为宏输出部分编写的代码未完全由任何 IDE 支持，也未由 rust-analyzer 支持。因此，在大多数情况下，你是在不依赖于自动完成、自动建议等功能的情况下编写代码。

### 我们何时画线？

鉴于宏的无限潜力，很容易在使用它们时迷失。重要的是要记住所有的缺点，并相应地做出决定，确保你不会沉溺于提前的抽象。

作为一般规则，我个人避免使用宏来实现任何“业务逻辑”，也不尝试编写宏来生成需要反复调试的代码。或者是需要进行微小变更以进行性能测试和改进的代码。

## 结束

这是一段很长的旅程！但我希望任何具有基本 Rust 知识和经验的人都能跟上，并在此之后能够在自己的项目中编写宏。
```

你可以在[https://github.com/anshulsanghi-blog/macros-handbook][63] 仓库中找到本文中所提到的所有代码。

另外，如果你有任何问题或对本主题有任何意见，欢迎**[联系我][64]**。

### **喜欢我的作品吗？**

考虑请我喝杯咖啡来支持我的工作吧！

[☕请我喝杯咖啡][65]

下次再见，祝你编程愉快，天空晴朗！

[1]: https://www.freecodecamp.org/news/rust-in-replit/
[2]: #heading-what-are-macros-in-rust
[3]: #heading-types-of-macros-in-rust
[4]: #heading-types-of-procedural-macros
[5]: #heading-prerequisites
[6]: #heading-helpful-dependencies
[7]: #heading-how-to-write-a-simple-derive-macro
[8]: #heading-the-intostringhashmap-derive-macro
[9]: #heading-how-to-declare-a-derive-macro
[10]: #how-to-parse-macro-input
[11]: #how-to-ensure-a-struct-target-for-macro
[12]: #heading-how-to-build-the-output-code
[13]: #heading-how-to-use-your-derive-macro
[14]: #heading-how-to-improve-our-implementation
[15]: #heading-a-more-elaborate-derive-macro
[16]: #heading-the-derivecustommodel-macro
[17]: #how-to-separate-implementation-from-declaration
[18]: #heading-how-to-parse-derive-macro-arguments
[19]: #heading-how-to-implement-derivecustommodel
[20]: #heading-how-to-generate-each-custom-model
[21]: #how-to-use-your-derivecustommodal-macro
[22]: #heading-a-simple-attribute-macro
[23]: #heading-the-logduration-attribute
[24]: #heading-how-to-declare-an-attribute-macro
[25]: #heading-how-to-implement-the-logduration-attribute-macro
[26]: #how-to-use-your-log-duration-macro
[27]: #heading-a-more-elaborate-attribute-macro
[28]: #heading-the-cachedfn-attribute
[29]: #heading-how-to-implement-the-cachedfn-attribute-macro
[30]: #heading-cachedfn-attribute-arguments
[31]: #heading-how-to-use-the-cachedfn-macro
[32]: #heading-a-simple-function-like-macro
[33]: #heading-the-constantstring-macro
[34]: #heading-how-to-declare-a-function-like-macro
[35]: #heading-how-to-implement-the-constantstring-macro
[36]: #heading-how-to-use-the-constantstring-macro
[37]: #heading-a-more-elaborate-function-like-macro
[38]: #heading-the-hashmapify-macro
[39]: #heading-how-to-implement-the-hashmapify-macro
[40]: #how-to-parse-hash-mapifys-input
[41]: #how-to-generate-output-code
[42]: #heading-how-to-convert-custom-data-types-to-output-tokens
[43]: #heading-how-to-use-the-hashmapify-macro
[44]: #heading-beyond-writing-macros
[45]: #heading-helpful-cratestools
[46]: #heading-downsides-of-macros
[47]: #heading-debugging-or-lack-thereof
[48]: #heading-compile-time-costs
[49]: #heading-lack-of-auto-complete-and-code-checks
[50]: #heading-where-do-we-draw-the-line
[51]: #heading-wrapping-up
[52]: #heading-enjoying-my-work
[53]: https://doc.rust-lang.org/reference/macros-by-example.html
[54]: https://doc.rust-lang.org/reference/conditional-compilation.html
[55]: https://dev.to/balapriya/abstract-syntax-tree-ast-explained-in-plain-english-1h38
[56]: https://crates.io/users/dtolnay
[57]: https://doc.rust-lang.org/reference/expressions.html
[58]: https://github.com/dtolnay/cargo-expand
[59]: https://crates.io/users/dtolnay
[60]: https://docs.rs/trybuild/latest/trybuild/#
[61]: https://docs.rs/macrotest/latest/macrotest/#
[62]: https://rustc-dev-guide.rust-lang.org/macro-expansion.html
[63]: https://github.com/anshulsanghi-blog/macros-handbook
[64]: mailto:contact@anshulsanghi.tech
[65]: https://buymeacoffee.com/anshulsanghi

