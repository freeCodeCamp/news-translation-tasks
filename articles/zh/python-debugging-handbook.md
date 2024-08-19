---
title: 常见代码错误消息
date: 2024-08-19T13:34:29.374Z
author: Samyak Jain
authorURL: https://www.freecodecamp.org/news/author/samyak/
originalURL: https://www.freecodecamp.org/news/python-debugging-handbook/
posteditor: ""
proofreader: ""
---

编程是一门艺术，Bug 是创作过程中的不可避免的一部分。每个开发者在代码中都会遇到错误 —— 事实上没有例外。

<!-- more -->

因此，理解如何有效地调试是一项能为你节省时间和降低挫折的关键技能。

在本教程中，我们将深入探讨调试 Python 代码的基础知识。我们将探讨常见的错误信息，利用社区资源，并运用打印语句来识别并解决问题。主要目标是识别和修复代码中的错误，而成功调试的关键在于系统化的方法。

## 目录

1.  **[常见代码错误消息][1]**

-   [SyntaxError: invalid syntax][2]
-   [IndentationError: unexpected indent][3]
-   [NameError: name 'variable' is not defined][4]
-   [AttributeError: 'module' object has no attribute 'attribute\_name'][5]
-   [FileNotFoundError: \[Errno 2\] No such file or directory: 'filename'][6]
-   [IndexError: list index out of range][7]
-   [ImportError: No module named 'module\_name'][8]
-   [TypeError][9]
-   [ValueError][10]

2\.  **[如何调试 Python 代码][11]**

3\.   [**基础调试** **技术**][12]

-   [打印语句][13]
-   [日志记录][14]
-   [异常处理][15]
-   [断言][16]

4.   [**高级调试技术**][17]

-   [单元测试][18]
-   [交互式调试器 (PDB)][19]
-   [远程调试][20]

5\.  [**性能调试**][21]

-   [代码静态分析和分析工具][22]
-   [性能剖析][23]

6\.  **[IDE 调试功能][24]**

7.   **[一些高效调试的额外提示][25]**

8.   **[如何搜索 Bug 和错误的解决方案][26]**

-   [有效搜索策略][27]
-   [利用网络资源][28]

# 常见代码错误消息

在深入调试之前，让我们先来看一些常见的错误信息及其含义：

_如果你已经熟悉常见代码错误消息，可以跳过这一部分，直接进入[调试技术][29]。_

## 1\. SyntaxError: invalid syntax

当 Python 解释器遇到不符合正确语法规则的代码时，会出现此错误。它可能是缺少括号、冒号位置错误或其他语法相关问题。

要修复这些类型的错误，请检查是否有缺失的语法元素，并确保引号、括号和方括号正确配对。

## 2\. IndentationError: unexpected indent

Python 依赖缩进来定义代码块。当缩进不一致或不正确时会出现此错误。

为避免这些错误，请使用所需的空格或制表符确保正确且一致的缩进。

## 3\. NameError: name 'variable' is not defined

这种类型的错误通常是尝试使用尚未定义的变量或函数引起的。

请检查变量或函数名称是否有拼写错误，并确保它们在使用之前已定义。

## 4\. AttributeError: 'module' object has no attribute 'attribute\_name'

当试图访问模块或对象中不存在的属性或方法时，可能会出现此类错误。

要修复此错误，请审查代码并确认调用的属性或方法是正确且可用的。

## 5\. FileNotFoundError: \[Errno 2\] No such file or directory: 'filename'

当试图访问不存在的文件时，会出现此错误。

你应该检查文件路径，并确保文件存在于指定位置。

## 6\. IndexError: list index out of range

当你试图访问序列（如列表或字符串）中不存在的索引时会发生这种类型的错误。同样的原因，这个错误也可能出现在字符串和元组中。

要修复此错误，请确保使用的索引在序列的有效范围内。

## 7\. ImportError: No module named 'module\_name'

如果你试图导入一个未安装或无法访问的模块，会出现此错误。

为避免这种情况，请使用包管理器（如 pip）安装所需模块，或检查模块名称是否有拼写错误。

## 8\. TypeError:

这是 Python 中一种常见的异常，发生在将一个操作或函数应用于不合适类型的对象时。以下是一些常见的 `TypeError` 类型：

1.  `TypeError: unsupported operand type(s) for +: 'type1' and 'type2'`**:**  当尝试对两个类型不兼容的对象执行操作时，会出现此错误。例如，试图将一个字符串和一个整数相加，或将一个列表乘以一个字符串。
2.  `TypeError: function_name() takes X positional arguments but Y were given`**:** 在调用一个函数时，提供的参数数量不正确时会出现此错误。它表明该函数期待特定数量的参数，但实际提供的数量不同。
3.  `TypeError: 'int' object is not callable`:  当你试图将一个不是函数的对象当作函数来调用时，会出现此错误。例如，试图调用一个整数。

这种类型的错误发生在函数接收到一个正确类型的参数但值不合适时。

1.  `ValueError: invalid literal for int() with base X: 'non-numeric'`： 当尝试使用 `int()` 将字符串转换为整数时发生，但字符串不是指定基数（X）中整数的有效表示。例如，尝试将包含字母的字符串或格式无效的字符串转换为整数。
2.  `ValueError: could not convert string to float: 'non-numeric'`：当尝试使用 `float()` 将字符串转换为浮点数时发生，但字符串不是数字的有效表示。类似于第一种情况，它通常涉及非数字字符或格式不正确。
3.  `ValueError: invalid literal for int() with base 10: 'non-numeric'`：类似于第一种情况，这个错误在尝试使用 `int()` 将字符串转换为整数时发生，但字符串不是基数10中有效的数字表示。这是第一种类型的更一般形式，其中基数明确设置为10。
4.  `ValueError: unhashable type: 'mutable_type'`：当尝试使用可变类型（例如，列表、字典）作为字典的键或集合的元素时发生此错误。字典和集合需要键和元素是可哈希（不可变）类型。要解决此问题，可以将可变类型转换为不可变类型或考虑支持可变元素的不同数据结构。

理解这些常见错误为有效调试提供了基础。

# 如何调试 Python 代码

既然你了解了一些常见的错误类型，让我们来探索各种可以帮助你高效调试 Python 代码的技术和工具。

## 基础调试技术：

### 打印语句

当你编写代码时，尤其是在复杂的程序中，了解代码的执行方式以及程序不同点变量的值是至关重要的。打印语句允许你在代码中插入消息，这些消息会在程序运行时打印到控制台或终端。

通过将打印语句战略性地放置在代码的不同部分，你可以创建一个显示代码不同部分执行顺序的日志。这可以帮助你了解控制流程并找出程序可能偏离预期的地方。

这里有一个例子：

```python
def my_function(x, y):
    print("Entering my_function")
    print(f'x: {x}, y: {y}')
    result = x + y
    print(f'Result: {result}')
    print("Exiting my_function")
    return result
```

虽然 `print` 语句在初步开发阶段通常是最快和最简单的方式来窥探程序的执行流程，但它们可能难以管理，并且不适合用于生产代码中，因此 Logging 提供了一种结构化的记录信息的方法。

### 日志记录

日志记录就像在程序运行时写笔记。与其将内容打印到屏幕上，不如将其写入日志中。这有助于你跟踪程序的操作，尤其是在出现问题时。

你可以配置日志记录以控制日志消息的详细程度，并指定日志的去向。可以是控制台、文件或其他目的地。

#### 日志级别：

-   **DEBUG：** 详细信息，对开发人员在调试时有用。
-   **INFO：** 关于程序发生了什么的常规信息。
-   **WARNING：** 指出发生了意外情况，但程序仍然可以继续。
-   **ERROR：** 发生了错误，程序无法按计划进行。
-   **CRITICAL：** 非常严重的错误，可能导致程序崩溃。

这是一个日志记录的例子：

```python
import logging

logging.basicConfig(level=logging.Info)

def example_function(x, y):
    logging.debug(f"Input values: x={x}, y={y}")
    result = x + y
    logging.debug(f"Result: {result}")
    return result

result = example_function(3, 7)

# Logging an error message
if result > 10:
    logging.error("Result exceeds the expected maximum.")
```

-   **`level=logging.INFO`** 设置根记录器的级别为 `INFO`。这意味着将捕获严重性为 `INFO` 及以上的日志消息，而较低严重性的消息（如 `DEBUG`）将被忽略。它将日志记录到名为 `example.log` 的文件中。
-   在 `example_function` 内部，使用 `logging.debug()` 记录输入值和结果的信息。这些消息将在日志级别设置为 `DEBUG` 或更低时显示。
-   如果结果超过预期的最大值（在此情况下为10），使用 `logging.error()` 记录错误消息。
-   可以将日志配置为将消息同时写入控制台和名为 `example.log` 的文件。`format` 参数可用于自定义日志消息的外观，包括时间戳、日志级别和实际日志消息。

```python
# Optional
logging.basicConfig(
    filename='example.log',
    format='%(asctime)s - %(levelname)s - %(message)s',
    level=logging.DEBUG
)

# 这个格式将在每条日志消息中包括时间戳、模块名和日志级别。
```

**注意**：在大型应用程序中，通常直接使用记录器而不是根记录器。这种方法允许对应用程序不同部分的日志记录进行更细粒度的控制。你可以在这里阅读更多关于日志记录和记录器的信息。

要了解更多关于 Python 中日志记录和记录器的信息，请查看这篇博客：[https://www.samyakinfo.tech/blog/logging-in-python][30]

### 异常处理

用 try-except 语句将可疑的代码块包裹起来以捕获和处理异常。这防止你的程序突然崩溃，允许你优雅地处理错误并记录相关信息。

`try-except` 语句是一种在 Python 中处理异常的方式。以下是一个基本结构：

```python
try:
    result = x / y
except ExceptionType as e:
    print(f"An exception of type {type(e).__name__} occurred: {e}")
    # Additional handling logic, if needed
```

-   **`try` 块：** 包含可能引发异常的代码。
-   **`except` 块：** 包含当 `try` 块中的代码引发指定类型异常时执行的代码。
-   **异常类型：** 指定要捕获的异常类型。你可以捕获特定的异常或更一般的 `Exception` 类型以捕获任何异常。
-   **`as e:`：** 将异常对象分配给变量 `e`，允许你访问异常的相关信息。

# 例子
safe_divide(10, 2)
safe_divide(5, 0)
```

在这个例子中，`safe_divide` 函数尝试执行一个除法操作。如果发生 `ZeroDivisionError`（除以零），它将在第一个 `except` 块中被捕获。如果发生任何其他类型的异常，它将在第二个 `except` 块中被捕获。无论是否发生异常，`finally` 块总是会执行。

### 断言

断言是添加到代码中的语句，用于检查某个条件是否成立。如果条件为假，则表示程序中存在错误或意外情况。

在 Python 中，可以使用 `assert` 关键字来创建断言。其语法如下：

```python
assert condition, "可选的错误消息"

# 带有可选错误消息的断言示例
x = 10
y = 0
assert y != 0, "除数 (y) 不应该为零"

# 处理 AssertionError
try:
    assert x > 0, "x 应大于零"
except AssertionError as e:
    print(f"断言失败：{e}")
```

在这个例子中，`assert y != 0` 检查除数 (`y`) 是否不等于零。如果等于零，断言将失败，并且程序将抛出带有指定错误消息的 `AssertionError`。

#### 使用断言时的注意事项：

- 断言通常用于开发和调试期间。在生产环境中，你可以选择禁用断言以提高性能。要禁用断言，可以使用 `-O`（例如，`python -O script.py`）命令行选项或 `PYTHONOPTIMIZE` 环境变量。`-O`（优化）标志将关闭断言语句。
- 断言不适用于用户或外部系统的输入验证。它们更适用于捕捉代码中的逻辑错误。
- 断言应为简单易查且易理解的条件。避免使用复杂的表达式或有副作用的语句。

## 高级调试技术:

### 单元测试

单元测试是一种软件测试方法，其中程序的各个组件或函数在隔离的环境中进行测试，以确保它们正常运行。在 Python 中，单元通常指的是函数、方法或类。

1. 单元测试有助于在开发过程的早期捕捉错误，防止它们演变成更复杂的问题。
2. 单元测试专注于隔离的特定函数或方法。这使得在发生错误时可以准确定位错误的来源。
3. 随着代码的发展，单元测试充当了安全网，确保新的更改不会无意中破坏现有的功能。

### 如何使用 `unittest`

`unittest` 是 Python 内置的测试框架，受到了 Java 的 JUnit 的启发。它提供了测试发现机制和各种断言方法来验证预期行为。

让我们从一个简单的示例开始。假设我们有一个将两个数字相加的函数：

```Python
# my_module.py

def add_numbers(a, b):
    return a + b
```

现在，我们可以创建一个相应的测试文件：

```Python
# test_my_module.py
import unittest
from my_module import add_numbers

class TestAddNumbers(unittest.TestCase):
    def test_add_numbers(self):
        result = add_numbers(2, 3)
        self.assertEqual(result, 5)

if __name__ == '__main__':
    unittest.main()
```

要运行测试，请在终端中执行以下命令：

```
python -m unittest test_my_module.py
```

### 如何使用 `pytest`

`pytest` 是一个第三方测试框架，提供了更简洁的语法和额外的功能，如强大的夹具和广泛的插件支持。

使用与之前相同的例子，`pytest` 测试可能如下所示：

```Python
# test_my_module.py

from my_module import add_numbers

def test_add_numbers():
    result = add_numbers(2, 3)
    assert result == 5
```

要运行测试，只需执行：

```
pytest test_my_module.py
```

### 如何使用交互式调试器（PDB）

Python 配备了一个内置调试器，名为 PDB（Python Debugger）。它允许你暂停 Python 代码的执行，检查变量，并逐行跳过代码，以查找和修复问题。

虽然 `print` 语句和日志记录对基本调试很有用，但 PDB 通过允许你实时干预和分析代码，将调试提升到一个新的水平。

在你的 Python 脚本中，你可以通过导入 `pdb` 模块来开始。这个模块提供了调试 Python 代码的功能。`import pdb`

```python
import pdb

def example_function(x, y):
    pdb.set_trace()
    result = x + y
    return result
```

#### 设置断点

要在代码的特定点开始调试，你可以插入 `pdb.set_trace()` 语句。此行充当断点，指示调试器暂停程序的执行。

```python
def some_function():
    pdb.set_trace()  # 这一行设置了一个断点
    print("Hello, World!")
```

当程序在执行过程中到达这一行时，它将暂停，调试器将被激活。

#### 启动调试器：

有两种方法来启动调试器：

**a.** **使用 `break` 命令：**

在 Python 3.7 及更高版本中，`pdb` 引入了 `pdb.breakpoint()` 函数，作为一种更方便和标准化的方式来设置断点，并解决 `pdb.set_trace()` 方法的一些潜在问题。

```python
import pdb

def some_function():
    # 在第4行设置断点
    pdb.breakpoint()
    print("Hello, World!")

some_function()
```

**b.** **使用 `-m pdb` 选项运行脚本:**

或者，你可以使用 `-m pdb` 选项运行你的 Python 脚本，这会自动启动调试器。例如:

```
python -m pdb your_script.py
```

#### 进入调试模式:

当代码碰到断点（无论是用 `pdb.set_trace()` 还是 `pdb.breakpoint()` 设置的），它会进入交互式调试模式。这时会出现 `(Pdb)` 提示符。

![Screenshot-2024-01-18-212824-1](https://www.freecodecamp.org/news/content/images/2024/01/Screenshot-2024-01-18-212824-1.png)

终端交互式调试模式的截图

#### 基本命令:

现在，你可以与调试器交互，并使用各种命令来检查变量、逐步执行代码、发现和修复问题。

pdb 调试器中的一些常用命令包括:

-   `n` (next): 继续执行，直到到达当前函数中的下一行。如果当前行包含函数调用，则不会进入被调用的函数。
-   `c` (continue): 继续执行，直到下一个断点被遇到。
-   `s` (step): 执行当前行的代码，并在下一行最早可能的位置（无论是在被调用的函数中还是当前函数中的下一行）停住。
-   `q` (quit): 退出调试器并终止程序。
-   **`break` (或 `b`):** `break [file:]line_number` 或 `break [function_name]`                  在指定的行号或函数设置断点。当程序执行到断点时，它会暂停，允许你检查变量并逐步执行代码。

通过策略性地放置断点并使用这些命令，你可以有效地调试 Python 代码，从系统的角度发现问题的来源。

<table style="
    box-sizing: border-box;
    margin: 25px auto;
    padding: 0px;
    border: 0px;
    font-size: 17px;
    vertical-align: baseline;
    border-collapse: collapse;
    border-spacing: 0px;
    overflow-x: auto;
    display: inherit;
    color: rgb(39, 50, 57);
    font-family: Nunito, sans-serif;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-weight: 400;
    letter-spacing: 0.162px;
    orphans: 2;
    text-align: justify;
    text-transform: none;
    widows: 2;
    word-spacing: 0px;
    -webkit-text-stroke-width: 0px;
    white-space: normal;
    background-color: rgb(255, 255, 255);
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
  "><tbody style="
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      border: 0px;
      font-size: 17px;
      vertical-align: baseline;
    "><tr style="
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        border: 0.3px solid rgb(223, 223, 223);
        font-size: 17px;
        vertical-align: baseline;
        background-color: var(--gfg-body-color);
      "><td style="
          box-sizing: border-box;
          margin: 0px;
          padding: 14px 10px;
          border: 0.3px solid rgb(223, 223, 223);
          font-size: 12.5pt;
          vertical-align: middle;
          width: 120px;
          font-weight: 400;
          text-align: center;
        "><strong style="
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            border: 0px;
            font-size: var(--font-secondary);
            vertical-align: baseline;
          ">命令</strong></td><td style="
          box-sizing: border-box;
          margin: 0px;
          padding: 14px 10px;
          border: 0.3px solid rgb(223, 223, 223);
          font-size: 12.5pt;
          vertical-align: middle;
          font-weight: 400;
          text-align: center;
        "><strong style="
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            border: 0px;
            font-size: var(--font-secondary);
            vertical-align: baseline;
          ">功能</strong></td></tr><tr style="
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
      border: 0.3px solid rgb(223, 223, 223);
      font-size: 17px;
      vertical-align: baseline;
      background-color: var(--gfg-body-color);
    "><td style="
        box-sizing: border-box;
        margin: 0px;
        padding: 14px 10px;
        border: 0.3px solid rgb(223, 223, 223);
        font-size: 12.5pt;
        vertical-align: middle;
        font-weight: 400;
        text-align: center;
      ">list (或 l)</td><td style="
        box-sizing: border-box;
        margin: 0px;
        padding: 14px 10px;
        border: 0.3px solid rgb(223, 223, 223);
        font-size: 12.5pt;
        vertical-align: middle;
        font-weight: 400;
        text-align: center;
      "><strong>list 或 list [first[, last]]:</strong> 显示当前行附近的源代码。可选地，你可以指定显示的行范围。</td></tr><tr style="
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    border: 0.3px solid rgb(223, 223, 223);
    font-size: 17px;
    vertical-align: baseline;
    background-color: var(--gfg-body-color);
  "><td style="
      box-sizing: border-box;
      margin: 0px;
      padding: 14px 10px;
      border: 0.3px solid rgb(223, 223, 223);
      font-size: 12.5pt;
      vertical-align: middle;
      font-weight: 400;
      text-align: center;
    ">print (或 p)</td><td style="
      box-sizing: border-box;
      margin: 0px;
      padding: 14px 10px;
      border: 0.3px solid rgb(223, 223, 223);
      font-size: 12.5pt;
      vertical-align: middle;
      font-weight: 400;
      text-align: center;
    "><b>print 表达式:</b> 计算并打印指定表达式的值。这对于检查变量非常有用。</td></tr><tr style="
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  border: 0.3px solid rgb(223, 223, 223);
  font-size: 17px;
  vertical-align: baseline;
  background-color: var(--gfg-body-color);
"><td style="
    box-sizing: border-box;
    margin: 0px;
    padding: 14px 10px;
    border: 0.3px solid rgb(223, 223, 223);
    font-size: 12.5pt;
    vertical-align: middle;
    font-weight: 400;
    text-align: center;
  ">break (或 b)</td><td style="
    box-sizing: border-box;
    margin: 0px;
    padding: 14px 10px;
    border: 0.3px solid rgb(223, 223, 223);
    font-size: 12.5pt;
    vertical-align: middle;
    font-weight: 400;
    text-align: center;
  "><b>[file:]line_number 或 break [function_name]:</b> 在指定的行号或函数设置断点。当程序执行到断点时，它会暂停，允许你检查变量并逐步执行代码。</td></tr><tr style="
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        border: 0.3px solid rgb(223, 223, 223);
        font-size: 17px;
        vertical-align: baseline;
      "><td style="
          box-sizing: border-box;
          margin: 0px;
          padding: 14px 10px;
          border: 0.3px solid rgb(223, 223, 223);
          font-size: 12.5pt;
          vertical-align: middle;
          font-weight: 400;
          text-align: center;
        ">help</td><td style="
          box-sizing: border-box;
          margin: 0px;
          padding: 14px 10px;
          border: 0.3px solid rgb(223, 223, 223);
          font-size: 12.5pt;
          vertical-align: middle;
          font-weight: 400;
          text-align: center;
        ">显示命令列表或提供关于特定命令或主题的信息(例如，help breakpoints)</td></tr><tr style="
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
        border: 0.3px solid rgb(223, 223, 223);
        font-size: 17px;
        vertical-align: baseline;
        background-color: var(--gfg-body-color);
      "><td style="
          box-sizing: border-box;
          margin: 0px;
          padding: 14px 10px;
          border: 0.3px solid rgb(223, 223, 223);
          font-size: 12.5pt;
          vertical-align: middle;
          font-weight: 400;
          text-align: center;
        ">where</td><td style="
          box-sizing: border-box;
          margin: 0px;
          padding: 14px 10px;
          border: 0.3px solid rgb(223, 223, 223);
          font-size: 12.5pt;
          vertical-align: middle;
          font-weight: 400;
          text-align: center;
        ">显示到目前为止代码执行的函数调用堆栈回溯。每行的回溯通常包含函数名、文件名以及函数调用的行号。</td></tr></tbody></table>
```

考虑使用第三方调试工具和扩展，例如 `pdbpp`、`pudb` 和 `ipdb`，这些工具增强了内置 PDB 调试器的功能。

`pdbpp` 提供了额外的功能，如语法高亮、标签补全和更好的导航能力。

`ipdb` 是一个基于 IPython 的调试器，将 IPython 的强大功能集成到调试体验中。它提供了交互且用户友好的调试界面。支持 IPython 的魔术命令，使执行复杂的调试任务变得更容易。

`pudb` 是一个全屏的、基于控制台的视觉调试器，提供语法高亮和交互、美观的调试体验。它包括一个带有代码浏览器的可视化界面，方便你在代码中导航。

要使用这些工具中的任意一个，只需将 `pdb` 替换为你想使用的调试器。例如，将代码中的 `import pdb; pdb.set_trace()` 替换为 `import pdbpp; pdbpp.set_trace()`。

### 远程调试

远程调试指调试在与开发环境不同的系统或服务器上运行的代码。这通常用于应用程序部署在远程服务器、云端或不同设备上时。

你将本地的集成开发环境（IDE）连接到代码运行的远程环境。

这有两种方法：

-   **支持远程调试的 IDE：**流行的集成开发环境（IDEs）如 PyCharm、Visual Studio Code 等提供内置的远程调试支持。
-   **pdb 或 pydevd 库：**Python 内置的 `pdb` 模块可用于基本调试。或者，你可以使用强大的远程调试器 `pydevd`。

远程断点、逐行执行、变量检查和其他调试功能与本地调试类似。

## IDE 的调试功能

大多数 Python 集成开发环境（IDE），如 PyCharm、Visual Studio Code 和 Jupyter Notebooks，都具有强大的调试功能。这些功能包括可视化断点、变量检查和逐步执行。利用这些功能来简化你的调试过程。

### 可视化断点：

断点是标记，在特定代码行暂停 Python 程序的执行，使你可以检查变量、评估表达式并理解程序在该点的流程。

-   **PyCharm：**只需点击行号旁边的左边距即可设置断点。
-   **Visual Studio Code：**点击左边距，或者使用快捷键 `F9`。
-   **IDLE：**可以在需要的位置添加 `import pdb; pdb.set_trace()` 行。

![image-101](https://www.freecodecamp.org/news/content/images/2024/01/image-101.png)

PyCharm 中断点（红点）的快照

设置断点后，以调试模式运行程序即可在该点暂停执行。

### 逐步执行代码：

击中断点后，可以逐行执行代码以理解其行为。常见的三种选项是：

-   **进入（F7）：**移动到下一行代码并在适用时进入函数调用。
-   **跳过（F8）：**执行当前行代码并停在下一行，跳过函数调用。
-   **跳出（Shift + F8）：**完成当前函数的执行并停在调用该函数的位置。

![image-119](https://www.freecodecamp.org/news/content/images/2024/01/image-119.png)

逐步执行代码选项

IDE 中的调试器允许你逐步执行代码，包括进入函数、跳过行和跳出函数。这种细粒度控制帮助你追踪程序流程并找出问题的确切位置。

Jupyter Notebooks 支持此功能，通过 `%debug` 等魔术命令实现交互式调试单元。

### 调用栈探索：

IDE 通常提供调用栈，显示导致代码当前点的函数调用层次结构。这对理解程序执行流程特别有价值，尤其在处理复杂应用程序时。

例如，PyCharm 在调试器工具窗口中显示调用栈。

### 变量检查：

检查变量对于理解数据在程序执行过程中的变化至关重要。IDE 提供了变量面板，使你可以查看变量的当前状态，便于识别错误。只需悬停在变量上或检查变量标签即可看到其当前值。

-   **PyCharm：**在调试过程中使用专用的“变量”面板。
-   **Visual Studio Code：**在“监视”和“变量”面板中提供变量检查。
-   **IDLE：**在调试过程中可以在交互式控制台输入变量名。

检查变量对于理解数据在程序执行过程中的变化至关重要。

### 条件断点：

除了标准断点外，一些 IDE 允许你设置带有条件的断点。这样调试器只在满足特定条件时暂停。这在你想调查代码中特定情形或条件时非常有帮助。

![hitCount--1-](https://www.freecodecamp.org/news/content/images/2024/01/hitCount--1-.gif)

一张快照，展示了在 PyCharm 中对 Python 代码设置条件断点的过程

### 监视表达式：

监视表达式允许您在程序运行时持续监控特定变量或表达式。当您希望持续关注某些值而不需要在每个断点手动检查时，这个功能非常有用。

-   **PyCharm:** 将表达式添加到“Watches”面板，以便在调试过程中监控它们。
-   **Visual Studio Code:** 使用“Watch”面板添加表达式以进行持续监控。
-   **IDLE:** 在断点处，在交互控制台输入表达式以观察其值。

通过使用监视表达式，您可以跟踪特定变量或表达式的变化，并在运行时识别模式或意外更改。

IDE 提供的更多调试工具包括：

-   VSCode 的“Python Profiler”和 PyCharm 内置的分析器作为 **分析工具（Profiling Tools）**。
-   PyCharm 的“Code With Me”以及 VSCode 的“Live Share”等扩展用于 **协同调试（Collaborative Debugging）**。

## 性能调试：

### 代码静态检查器和分析器

代码静态检查器和静态分析器是通过分析源代码来帮助识别潜在问题的工具，而无需执行代码。它们可以捕捉常见的编程错误、执行编码标准，并提供有价值的改进建议。

在这里，我们将讨论几个这样的工具——PyLint 和 mypy——以便您了解如何安装它们以及它们的工作方式。

#### 如何安装 PyLint：

```
pip install pylint
```

使用以下命令在您的 Python 脚本或模块上运行 `pylint`：

```
pylint your_script.py
```

当您运行 PyLint 时，它将生成一个详细的报告，其中包含有关潜在问题、编码规范违规和其他见解的信息。输出包括代码的评分以及改进建议的消息。

PyLint 可以根据您的项目具体需求进行定制。您可以创建一个配置文件（通常命名为 `.pylintrc`）来定义您的偏好。这个文件可以放置在项目的根目录中。例如：

```
[MASTER]
enable = all

[MESSAGES CONTROL]
disable = missing-docstring
```

在这个例子中，我们启用了所有检查，除了缺少文档字符串的检查。您可以根据您的编码风格和项目要求调整配置。

#### 如何安装 mypy：

```
pip install mypy
```

使用以下命令在您的 Python 脚本或模块上运行 `mypy`：

```
mypy your_script.py
```

Mypy 将检查代码中的类型相关问题并提供有关潜在类型不匹配和类型注解违规的反馈。

当您在 Python 代码中使用类型注解时，mypy 非常有用。它检查您指定的类型是否与变量、函数和代码中其他元素的实际使用情况相匹配。

我们来讨论其他一些代码格式化工具。

### flake8

flake8 结合了三个主要工具：

1.  **PyFlakes:** 这个工具执行静态代码分析，以在不执行代码的情况下发现 Python 代码中的错误。
2.  **pycodestyle:** 原名 pep8，这个工具根据 PEP 8 中概述的风格指南检查代码，并提供编码规范违规的反馈。
3.  **McCabe:** 这个复杂性检查器识别出可能难以理解或维护的复杂代码块。

#### 如何安装 flake8：

```
pip install flake8
```

类似于 PyLint，您可以通过在终端执行以下命令在您的 Python 代码上运行 flake8：

```
flake8 your_file.py 
#将 your_file.py 替换为实际的 Python 文件名。
```

与 PyLint 类似，flake8 可以配置以适应您的项目要求。您可以在项目根目录中创建一个配置文件（通常命名为 `.flake8`）。例如：

```
[flake8]
max-line-length = 88
extend-ignore = E203, W503
```

在这个例子中，我们将最大行长度设置为 88 个字符，并扩展了忽略错误的列表。

### Black

Black 是一个有主见的代码格式化工具，它自动决定格式以保持代码一致和可读。

Black 有一套格式化规则，并持续应用它们。这消除了开发团队在代码风格上的争论。

您可以使用以下命令安装 Black：

```
pip install black
```

以下是如何使用它：

```
black your_file.py
```

Black 补充了 PyLint 和 flake8 等传统的静态检查器。您可以将这些工具结合起来使用，以确保代码质量和一致的格式。

许多流行的编辑器，如 Visual Studio Code、Atom 和 Sublime Text 具有扩展或插件，允许您在编辑代码时直接在编辑器中使用这些代码静态检查器和分析器的结果。

### 分析

分析涉及分析您的代码性能，以识别瓶颈和可以优化的区域。Python 提供了内置工具和外部库用于分析，帮助开发人员深入了解代码的执行时间和资源使用情况。

-   **识别性能问题：** 分析允许您确定代码中最消耗时间和资源的部分，以便进行优化。
-   **优化代码：** 一旦识别出瓶颈，开发人员可以专注于优化特定功能或代码块，以提高整体性能。
-   **内存使用分析：** 分析工具还可以帮助分析内存消耗，帮助检测内存泄漏和低效的内存使用。

#### **1**. cProfile:****

`cProfile` 是一个内置模块，它提供了确定性的 Python 程序剖析。它记录了每个函数执行所需的时间，使得识别性能瓶颈更加容易。

**示例:**

```Python
import cProfile

def example_function():
    # 你的代码在这里

if __name__ == "__main__":
    cProfile.run('example_function()')
```

这将输出一个详细的函数调用报告，包括它们的执行时间以及在每个函数中花费的总时间百分比。

#### **2**. profile:****

`profile` 模块与 `cProfile` 类似，但它是用纯 Python 实现的。它可以提供更详细的函数调用分析，并可用于需要更细粒度剖析的情况。

```Python
import profile

def example_function():
    # 你的代码在这里

if __name__ == "__main__":
    profile.run('example_function()')
```

`cProfile` 和 `profile` 产生类似的输出，但前者一般因其较低的开销而被偏好。

### 如何可视化剖析结果:

虽然内置模块提供文字报告，可视化结果能更易于理解和分析。一款受欢迎的工具是 `snakeviz`。

#### **安装 snakeviz:**

```
pip install snakeviz
```

#### **使用 snakeviz:**

```Python
import cProfile
import snakeviz

def example_function():
    # 你的代码在这里

if __name__ == "__main__":
    cProfile.run('example_function()', 'profile_results')
    snakeviz.view('profile_results')
```

这将打开一个浏览器窗口，显示一个交互式剖析结果的可视化。

### 高级剖析技术:

虽然内置的剖析工具提供了有价值的见解，更高级的技术和外部库可以提供额外的信息。

#### **行级剖析:**

行级剖析让你看到在函数中的每一行代码所花费的时间。`line_profiler` 模块通常用于此目的。

#### 安装 line_profiler:

```
pip install line_profiler
```

#### 使用 line_profiler:

```Python
from line_profiler import LineProfiler

def example_function():
    # 你的代码在这里

if __name__ == "__main__":
    profiler = LineProfiler()
    profiler.add_function(example_function)

    profiler.run('example_function()')

    # 显示结果
    profiler.print_stats()
```

这将显示一个详细的报告，显示在 `example_function` 中每一行花费的时间。

#### 内存剖析:

理解内存使用对于优化代码至关重要。`memory_profiler` 模块有助于剖析内存消耗。

#### 安装 memory_profiler:

```
pip install memory-profiler
```

#### 使用 memory_profiler:

```Python
from memory_profiler import profile

@profile
def example_function():
    # 你的代码在这里

if __name__ == "__main__":
    example_function()
```

执行时，这将显示 `example_function` 执行过程中每行内存使用情况的分析。

理解内存使用对于优化代码至关重要。`memory_profiler` 模块有助于剖析内存消耗。

虽然这些技术涵盖了广泛的调试场景，但最有效的调试通常涉及这些方法的组合。此外，理解具体的上下文和所处理问题的类型将指导你选择最适当的技术。

# 一些提高调试效率的附加提示:

-   **版本控制和 Git Bisect:** 利用版本控制系统提供的功能（如 Git Bisect）追踪变更，并在需要时恢复到工作版本。如果错误最近才被引入，并且你有版本控制（如 Git），使用 git bisect 可以帮助你识别引入问题的确切提交。
-   **文档和代码注释**: 编写良好的文档和注释可以帮助理解特定函数或代码块的目的，从而使调试对你和可能会工作的其他人来说更加直接。
-   **分解复杂问题**: 将大的代码块分解成易于测试的小函数，以简化调试和维护。
-   **休息**: 离开一会儿，然后以新视角回来，通常能够揭示之前不明显的解决方案。
-   **橡皮鸭调试**: 这就像为你的代码做心理辅导，只不过辅导员是一只橡皮鸭。想象一下，你遇到了一个棘手的编码问题。与其向人寻求帮助，不如对橡皮鸭说话。是的，一只真正的橡皮鸭！你向鸭子解释你的代码，一行一行地，好像它什么都懂。虽然鸭子很粗鲁，不会回复，但神奇的事情发生了。通过大声说出你的问题，你开始自己看到解决方案。

# 如何搜索错误和错误的解决方案

## **1\.** **有效的搜索策略:**

-   **理解错误信息:** 先理解错误信息或错误描述。识别可用于搜索的关键术语和错误代码。
-   **包含上下文细节:** 例如操作系统、软件版本号、使用的库或框架。错误和解决方案可能因不同版本而异。
-   **引号:** 使用引号搜索精确短语。这在搜索特定错误信息或代码片段时很有用。
-   **使用描述性关键词:** 使用与错误相关的具体和描述性的关键词。在搜索中包括编程语言、框架和相关技术。尽可能包含代码片段或示例在搜索查询中，可缩小到包括实际实现的结果。

-   ****GitHub 仓库:**** 搜索 GitHub 仓库中的类似问题。许多项目都有问题跟踪器，用户可以在其中讨论问题和解决方案。
-   ****文档和手册:**** 查阅您使用的技术的官方文档和手册。有时，答案可能在官方文档中找到。
-   ****特定网站搜索:**** 使用 "site:" 运算符在特定网站或域内进行搜索。当在特定的论坛、文档或博客中寻找解决方案时，这非常有用。
-   一些有用的论坛/网站包括：Stack Overflow、GitHub discussions、Reddit 和其他开发者社区。这些平台通常会有关于常见错误及其解决方案的讨论。

这些是您可以找到问题解决方案的方法。即使您未找到问题的精确匹配，类似的问题也可能提供潜在解决方案的见解。

如果您完全找不到解决方案，考虑在相关论坛或社区中发布您的问题。其他人可能也遇到过类似的问题，并可以提供帮助。

解决错误可能需要一些耐心。坚持并尝试不同的搜索查询，尤其是如果问题很复杂。

# 结论

在这本调试手册中，我们探讨了常见的错误信息，学习了有效的搜索策略，并发现了打印语句的实用功能。

调试是软件开发过程的一个重要组成部分。它是一种耐心、坚持和解决问题的艺术。通过结合使用打印语句、日志记录、内置调试工具和第三方工具，您可以有效地识别并解决 Python 代码中的问题。

培养良好的调试习惯并利用可用的工具，不仅能为您节省时间，还能提高程序的整体质量和可靠性。

[1]: #common-code-error-messages
[2]: #1-syntaxerror-invalid-syntax
[3]: #2-indentationerror-unexpected-indent
[4]: #3-nameerror-name-variable-is-not-defined
[5]: #4-attributeerror-module-object-has-no-attribute-attribute_name-
[6]: #5-filenotfounderror-errno-2-no-such-file-or-directory-filename-
[7]: #6-indexerror-list-index-out-of-range
[8]: #7-importerror-no-module-named-module_name-
[9]: #8-typeerror-
[10]: #9-valueerror-
[11]: #how-to-debug-python-code
[12]: #foundational-debugging-techniques-
[13]: #print-statements
[14]: #logging
[15]: #exception-handling
[16]: #assertions
[17]: #advanced-debugging-techniques-
[18]: #unit-testing
[19]: #how-to-use-the-interactive-debugger-pdb-
[20]: #remote-debugging
[21]: #performance-debugging--1
[22]: #code-linters-and-analyzers
[23]: #profiling
[24]: #ide-features-for-debugging
[25]: #some-additional-tips-for-efficient-debugging-
[26]: #how-to-search-for-solutions-to-bugs-and-errors
[27]: #1-effective-search-strategies-
[28]: #2-leveraging-web-resources-
[29]: #how-to-debug-python-code
[30]: https://www.samyakinfo.tech/blog/logging-in-python

