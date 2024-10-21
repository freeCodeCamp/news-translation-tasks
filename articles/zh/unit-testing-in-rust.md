---
title: Rust 中单元测试的工作原理
date: 2024-10-21T03:47:54.716Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/unit-testing-in-rust/
posteditor: ""
proofreader: ""
---

作者：Menard Maranan

<!-- more -->

测试是软件开发中至关重要的一部分。测试代码可以确保开发的软件按预期工作，并减少其对攻击者的脆弱性。

软件测试是一个非常广泛的话题。这就是为什么在软件行业中有专门负责 QA 和测试的专业人员。这些专业人员通常被称为 QA 工程师。

虽然 QA 是一个独立的领域，但这并不意味着开发人员完全不进行测试。

开发人员进行的最常见的测试是**单元测试**。单元测试是一种测试类型，您可以测试小的代码单元（如函数）——因此被称为单元测试。通常通过将预期行为与实际行为进行比较来实现。

单元测试是开发流程中不可或缺的一部分，有些公司的整个开发文化都围绕所谓的[**测试驱动开发**（或 TDD）][1]展开。

在 TDD 中，开发人员首先编写测试用例（根据功能需求，通常称为**用户故事**），然后编写满足这些用例的代码。TDD 在需求非常具体的项目中最为出色。

您可以在不同的编程语言中以不同的方式实现单元测试。但其核心，单元测试只是关于比较代码的预期行为和实际行为。

因此，无论在特定语言中如何实现，当您使用任何其他语言时，同样的原则通常适用。

在本教程中，您将学习 Rust 编程语言中的单元测试。话虽如此，您应该至少了解 [Rust 的编程基础][2]，虽然您不需要高级知识。

本文将涉及：

- Rust 中单元测试的工作原理
- 如何在 Rust 中编写单元测试
- 如何测试函数
- 为什么失败的测试很有用
- 如何处理预期的错误行为，以便测试不会失败

综上所述，让我们继续学习 Rust 的单元测试！

# Rust 中单元测试的工作原理

Rust 以代码安全性为核心构建。Rust 严格的类型注释规则有助于在开发阶段早期消除大量错误。但它仍然不是万无一失的。

像任何其他语言一样，业务逻辑由您负责，您必须帮助 Rust 理解代码中什么是可接受的，什么不是。

是的，这就是我们进行测试的原因。

您不需要安装测试套件即可开始在 Rust 中进行测试，因为它对测试有内置支持。

首先，在本地机器上创建一个新的 cargo 项目（注意 `--lib` 标志），并在您选择的文本编辑器或 IDE 中打开它。在本教程中，我将使用 VS 代码。

```
cargo new --lib rust_unit_testing
code rust_unit_testing
```

然后，打开 `src/lib.rs` 文件。这是我们在本教程中将花费最多时间的地方。

![Image](https://www.freecodecamp.org/news/content/images/2022/07/1-2.JPG) _Rust 库项目的 src/lib.rs 文件_

在 Rust 中新创建的库项目中，您会注意到 `lib.rs` 文件默认情况下已经被预填了一个示例测试代码。

其主要目的是为您提供编写测试的模板。我们将剖析此简单测试的每个部分并理解 Rust 中的基本测试概念。

首先，让我们了解这些测试代码行在做什么。在此示例中，您将看到在 `lib.rs` 中定义的测试模块，其中一个测试检查 2 + 2 是否等于 4。

如果您还不了解 Rust 中的模块和属性的概念，那没关系，您现在可以忽略它们。

但只是为了给您一个概念，Rust 中的测试是写在 `tests` 模块（`mod tests` 部分表示这是测试模块）中，任何写在此模块中的内容都告诉 cargo 仅在测试期间运行它们（这就是 `#[cfg(test)]` 属性暗示的内容）。

Rust 中的测试本质上只是一个被标记为测试的函数。从上面的示例中，您会注意到 `it_works` 函数上方的 `#[test]` 属性。这只是告诉 cargo 该函数是一个测试，应在测试期间调用。

在 `it_works` 测试函数中，它检查从 2 + 2 得到的 `result` 值是否等于 4。它使用 `assert_eq!` 宏执行检查。`assert_eq!` 宏比较传递给它的左右值的相等性（`==`）。

在大多数编程语言中，有一个规则是传递给断言的左值应该是预期值，而实际值应该在右边。在 Rust 中，没有严格的规则，您可以将预期和实际结果传递给任意一侧。

现在，尝试使用以下命令运行您的测试：

```
cargo test
```

以下是上面示例的结果：

![Image](https://www.freecodecamp.org/news/content/images/2022/07/2-1.JPG) _cargo test - 结果_

报告的第一行显示 `running 1 test`，因为我们只有一个测试函数 `tests::it_works`。在被测试的函数旁边，你会看到 `ok` 消息，表示测试通过。

你还可以在下面看到结果的摘要：

-   1 个通过
-   0 个失败
-   0 个忽略
-   0 个测量
-   0 个过滤掉
-   结果状态为 `test result: ok`

这里的 `1 passed` 计数器表示通过测试的一个测试函数（`tests::it_works`），而 `failed` 计数器显示我们有多少测试失败。其他计数器的含义相同。

你还会看到 **文档测试** 的结果。由于这里没有任何文档测试，你会看到 `running 0 tests`。你可以暂时忽略这一点，只关注单元测试。但如果你想了解更多，你可以参考 [Rust 的官方文档][3]。

## 如何在 Rust 中编写测试

编写测试时，你通常需要经过以下三个步骤：

1.  模拟测试案例所需的数据或状态。这意味着提供代码所需的模拟或示例数据（如有必要），和/或设置测试案例运行所需的状态或环境。
2.  运行需要测试的代码（传递必要的模拟数据）。例如，调用你想测试的函数。
3.  检查你正在测试的代码的实际行为是否与预期行为相匹配。例如，传递参数 `x` 给一个函数，断言返回值是否与期望的返回值一致。或者检查某段代码给定某个参数时是否引发 `panic!`，这可能就是预期行为。

在 Rust 中，单元测试是编写在被测试代码的同一个文件中。测试函数通常会放在名为 `tests` 的模块中（这是约定俗成的命名方式）。

### 如何在 Rust 中测试函数

我们现在开始在 Rust 中测试函数。

首先，我们需要一个简单的函数进行测试。但是首先，先移除 `it_works` 测试函数，因为我们不再需要它。然后，在 `tests` 模块之上撰写此 `adder` 函数：

```
// src/lib.rs

pub fn adder(x: i32, y: i32) -> i32 {
    x + y
}

#[cfg(test)]
mod tests {
// ...
```

上面的 `adder` 函数是一个简单的公共函数，它只是将两个数字相加并返回和。为了测试它是否如预期工作，我们来为这个函数编写一个单元测试。

从我们之前讨论的编写单元测试的三个步骤中，前两个步骤是：

-   设置要测试代码所需的数据
-   运行代码。

因此，回到 `tests` 模块中，首先需要将 `adder` 函数引入其作用域中（使用 `use` 关键字）。然后，撰写一个使用 `#[test]` 属性标注的名为 `it_adds` 的函数。

```
// src/lib.rs

pub fn adder (x: i32, y: i32) -> i32 {
    x + y
}

#[cfg(test)]
mod tests {
    // 将父作用域中的所有内容引入此作用域
    use super::*;

    #[test]
    fn it_adds() {
    }
}
```

`it_adds` 测试函数内部是我们要编写测试的地方。因此，在其内部声明一个名为 `sum` 的变量，然后调用 `adder` 函数并传递 4 和 5 作为其参数（即我们的模拟数据）。

```
// src/lib.rs

// --省略--

    #[test]
    fn it_adds() {
        let sum = adder(4, 5);
    }
}
```

最后，编写单元测试的第三步是检查代码实际行为与预期行为是否一致。

因此，在这里，我们断言 `adder` 函数返回的 `sum` 值是否等于 `9`（这是我们的预期返回值），通过使用 `assert_eq!` 宏来实现。

```
// src/lib.rs

// --省略--

    #[test]
    fn it_adds() {
        let sum = adder(4, 5);
        assert_eq!(sum, 9);
    }
}
```

这是我们在 `lib.rs` 文件中代码和测试的最终版本：

```
// src/lib.rs

pub fn adder(x: i32, y: i32) -> i32 {
    x + y
}

#[cfg(test)]
mod tests {
    // 将父作用域中的所有内容引入此作用域
    use super::*;

    #[test]
    fn it_adds() {
        let sum = adder(4, 5);
        assert_eq!(sum, 9);
    }
}
```

正如你之前了解的，你可以使用以下命令运行此测试：

```
cargo test
```

如果一切正常，我们应该看到 `test result: ok`，表明我们的测试通过了。

![Image](https://www.freecodecamp.org/news/content/images/2022/07/3.JPG)

你可以在 `tests` 模块中为 `adder` 函数添加更多测试（例如，添加负数的测试）。或者更好的是，创建你自己的函数并为其编写一个或多个测试。

此外，Rust 中还有更多内置的断言宏可以使用，除了 `assert_eq!` 宏。比如，用于断言不等值(`!=`)的 `assert_ne!` 宏，以及只断言你正在测试的代码是否返回 `true` 值的 `assert!` 宏。

如果你需要更多的断言宏（例如，支持 `>`、`<`、`>=`、`<=` 的比较断言），你可以安装外部库，比如这个：[claim][4]。你可以在此处查看 [claim 的文档][5] 以获取更多信息。

## 为什么失败的测试是有用的

到目前为止，我们的测试总是得到通过的结果。

回到 `lib.rs` 文件，通过将 `adder` 函数中的 `+` 操作符替换为 `-` 来修改该函数。

```
// src/lib.rs

pub fn adder(x: i32, y: i32) -> i32 {
    // 将操作符从 '+' 改为 '-'
    x - y
}

// --snip--
```

现在再次使用 `cargo test` 运行测试。正如预期的那样，您应该会看到如下的测试失败结果：

![Image](https://www.freecodecamp.org/news/content/images/2022/07/4.JPG) _由 cargo 导致的测试失败_

首先，请注意测试函数 `tests::it_adds` 的状态显示了一个非常显眼的红色 `FAILED`。这就是 cargo 测试失败时的表现。

在此之下，您会看到“failures”报告，其中列出了失败的测试及其失败的原因。

从我们的例子中，`tests::it_adds` 测试失败，根据报告，传入 `assert_eq!` 宏的左值和右值不相等 (`==`)。

这是因为左值是 `-1` 而右值是 `9`。请记住，在我们的 `assert_eq!` 断言中，我们传入的左值是 `adder(4, 5)` 的返回值存储在 `sum` 变量中。

由于操作符是错误的，`adder` 函数执行了 `4 - 5`，而不是期望的 `4 + 5`。这就是为什么我们获得了 `-1` 而不是预期值 `9`。Cargo 发现了这个问题，因此报告了测试失败。

在失败测试报告的下方是其摘要（有点类似），仍然在“failures”类别下，只是列出了失败测试函数的名称。

最后，整个测试的汇总：

-   状态是：`test result: FAILED`
-   0 通过
-   1 失败
-   0 忽略
-   0 测量
-   0 过滤掉

这次，我们的 `failed` 计数器是 `1`（指的是我们的失败测试函数）而 `passed` 是 `0`。

## 如何处理预期错误

从前一节中，您了解到错误会导致测试失败。

但如果您期望测试的代码会失败呢？（比如给它一个无效参数）如果它出现错误，cargo 会将其标记为测试失败，即使您实际上是期望它会失败。

您可以期望失败的行为吗？

简答是：可以的！

为了演示这一点，让我们回到 `lib.rs` 文件并修改我们的 `adder` 函数。这次，让我们为其设置一个规则，只接受个位数整数（正数、零和负数）–否则，它应该触发 'panic'。为了提高可读性，我们将 `adder` 函数重命名为 `single_digit_adder`。

```
// src/lib.rs

// 修改之前的 `adder` 函数
// 并将其改为 `single_digit_adder`
pub fn single_digit_adder(x: i8, y: i8) -> i8 {
    fn is_single_digit(x: i8) -> bool {
        x < 10 && x > -10
    }

    if !(is_single_digit(x)) || !(is_single_digit(y)) {
        panic!("只允许个位数整数！");
    } else {
        x + y
    }
}

#[cfg(test)]
mod tests {
// --snip--
```

由于我们期望 `single_digit_adder` 函数在收到非个位数整数时触发 'panic'，因此需要在测试中专门指定这一行为。

为此，我们需要向某个测试函数添加另一个属性：`#[should_panic]`。

回到 `tests` 模块，首先通过将 `adder` 函数调用重命名为 `single_digit_adder` 来编辑 `it_adds` 测试函数。

然后，创建一个名为 `it_should_only_accept_single_digits` 的新测试函数，并添加 `#[test]` 和 `#[should_panic]` 属性。

在这个新的测试函数中，调用 `single_digit_adder` 函数，并传递一个无效参数（`11`）作为例子。

```
// src/lib.rs

pub fn single_digit_adder(x: i8, y: i8) -> i8 {
    // ...
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_adds() {
        let sum = single_digit_adder(2, 3);
        assert_eq!(sum, 5);
    }

    // 我们的新测试函数，在传入无效参数时期望 `panic!`
    #[test]
    #[should_panic]
    fn it_should_only_accept_single_digits() {
        single_digit_adder(11, 4);
    }
}
```

在 `it_should_only_accept_single_digits` 测试函数中不需要任何断言宏，因为我们只需让 `single_digit_adder` 触发 'panic'。因此，简单地调用该函数就足够了。

通过给予一个无效的参数（`11`，这不是一个个位数），我们期望它会触发 'panic'。`#[should_panic]` 属性将预期 `it_should_only_accept_single_digits` 测试函数内部会出现某种程度的崩溃。如果没有捕获到任何崩溃，该测试将失败。只有当 `single_digit_adder` 触发崩溃时，它才会通过。

所以为了测试它是否真的有效，先尝试注释掉 `#[should_panic]` 属性，然后运行 `cargo test`。您应该能够看到它失败。

![Image](https://www.freecodecamp.org/news/content/images/2022/07/6.JPG)

现在，取消注释 `#[should_panic]` 属性并重新运行测试。您的测试应该会全部通过：

![Image](https://www.freecodecamp.org/news/content/images/2022/07/5.JPG) _测试用例预期并实际捕获到失败行为的输出_

请注意，在测试 `tests::it_should_only_accept_single_digits` 上标有 `should panic`，并且它通过了测试。这意味着此测试函数如预期般捕获到了一个崩溃。

```markdown
# 结论

在本文中，您了解了单元测试是什么以及它在软件开发过程中的重要性。您还通过简单的三个步骤流程学习了如何编写单元测试，并在 Rust 编程语言中实际进行测试。

我们讨论了 Rust 中测试模块的结构以及如何构建测试函数，然后编写了一个简单的 Rust 程序及其一些测试用例。我们还讨论了测试失败以及如何处理代码单元中预期的失败行为。

测试是软件开发过程中重要的一部分。对代码进行测试有助于确保软件按预期工作。作为开发人员，测试代码以确保您发布的软件质量，以及避免那些恼人的错误到达最终用户是很重要的！

[1]: https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/
[2]: https://www.freecodecamp.org/news/rust-in-replit/
[3]: https://doc.rust-lang.org/rust-by-example/testing/doc_testing.html
[4]: https://crates.io/crates/claim
[5]: https://docs.rs/claim/latest/claim/
```

