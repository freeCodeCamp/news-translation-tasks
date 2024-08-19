---
title: "第一章：Arduino 入门"
date: 2024-08-19T12:40:10.556Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/the-arduino-handbook
posteditor: ""
proofreader: ""
---

Arduino 是一个开源平台，它结合了硬件和软件，用于设计和构建电子项目。

<!-- more -->

Arduino 可以应用在各种项目中，例如：

-   家庭自动化
-   物联网 (IoT)
-   音频和音乐
-   自动化和远程控制系统
-   农业中的自动化
-   电子原型
-   可穿戴设备等等

Arduino 的硬件部分包括 Arduino 板、输入和输出设备（包括数字和模拟引脚、传感器和执行器）、扩展板、面包板、跳线等。这些组件可以组合在一起，创造出动态和互动的项目。

软件部分由用于编写、调试、编译和上传代码到 Arduino 板的开发工具组成。大多数软件工具可以在 Arduino IDE（集成开发环境）中找到。

本手册将帮助你了解 Arduino 的工作原理。你将学习 Arduino 板、构成板的组件以及如何将设备连接到它们。

我们将讨论输入和输出外围设备，这些设备有助于微控制器（Arduino 板的核心）处理来自物理环境的信息，并基于编程逻辑发送输出。

你将学习 Arduino IDE，如何使用 Arduino 编程语言编码，以及如何使用传感器、执行器和其他组件在学习中构建项目。

你还将学习串行通信，这有助于 Arduino 板与其他计算机通信。

本手册是为初学者（学生、艺术家、爱好者、程序员）编写的。

## 前提条件

虽然有帮助，但使用本手册不需要事先的编程知识。你将从头开始学习 Arduino 编程基础。这也可以作为你编程的入门课程。

为了使其对初学者友好，我们不会讨论一些电子学方面的内容，如电流和电压、电阻、电路（串联和并联）以及 STEM（科学、技术、工程、数学）领域学生的基本电子/电气法则和要求。

无论你是否了解这些概念，你都可以使用本手册学习 Arduino。

如果你知道如何使用面包板和电阻，那这就是你需要跟随的所有电子知识。

总之，本手册适合所有人。成为 Arduino 制作者无须工程学位！

## 目录：

-   [前提条件][1]
-   [Chapter 1: Getting Started with Arduino][2]
-   [Chapter 2: Basics of Arduino Programming][3]
-   [Chapter 3: How to use Digital Pins in Arduino][4]
-   [Chapter 4: How to use Analog Pins in Arduino][5]
-   [Chapter 5: How to use Sensors and Actuators in Arduino][6]
-   [Chapter 6: How to use the Serial Monitor in Arduino][7]
-   [Chapter 7: How to use Displays in Arduino][8]

# 第一章：Arduino 入门

Arduino 开发和设计过程包括硬件和软件。因此，了解它们如何协同工作对于构建你旅程的正确基础很重要。

在本章中，你将了解构成 Arduino Uno 板的不同组件。你还将学习如何安装 Arduino IDE 并设置开发环境。

在编写本手册时，新的 Uno 板已经发布 — Arduino Uno R4。本手册将使用 Uno R3 板，但你可以使用其中任意一块板跟随学习。R4 板有两个变体 — Arduino Uno R4 WiFi 和 Arduino Uno R4 Minima — 拥有你可以 [在此阅读][9] 的很酷的额外功能。

## Arduino Uno R3 板的组件

有很多类型的 Arduino 板，如 Arduino Nano、Arduino Uno、Arduino Mega、Arduino Leonardo 等等。

这些板具有一些共同特点 — 它们都有数字和输出引脚、可编程，且都有一个微控制器。

但也存在一些差异。每个板在大小和形状上有所不同，而与其他板相比，往往会有更多或更少的组件。

作为初学者，你会遇到的常见板是 Nano、Uno 和 Mega。最常用的是 Uno 板，我们将在本手册中使用它。

以下是你将在 Uno R3 板上找到的一些组件：

-   电源端口
-   USB 接口
-   微控制器 (ATmega328)
-   模拟引脚
-   数字引脚
-   复位按钮
-   TX 和 RX 指示灯

![Image](https://www.freecodecamp.org/news/content/images/2023/10/UnoR3.png) _Arduino Uno R3 板 (https://store.arduino.cc/products/arduino-uno-rev3)_

随着手册的进展，你将使用大多数上述列出的组件。

## 如何安装和设置 Arduino IDE

你可以使用 Arduino IDE 来编程 Arduino 板。也就是说，你在 IDE 中编写代码，然后将其上传到板上。

您可以在[Arduino 软件下载页面][10]上下载最新版本的 Arduino IDE。您可以为不同的操作系统下载 IDE——Windows、MacOS 和 Linux。

上述操作系统的安装过程类似。以下是在 Windows 机器上安装的方法：

### 步骤 #1 - 下载 Arduino IDE

第一个步骤是从 [Arduino 软件下载页面][11] 下载 IDE。您应该会看到如下图所示的页面部分：

![图片](https://www.freecodecamp.org/news/content/images/2023/10/arduino-download-page-options.PNG)

上图右侧为特定操作系统提供的不同下载选项。确保您下载适合您操作系统的选项。

我将使用 Windows 的 ZIP 文件选项。如果您决定下载安装程序，可以在点击安装文件后按照安装步骤进行操作。

### 步骤 #2 - 解压下载的文件

继续解压下载的文件。这将使您能够访问运行 Arduino IDE 所需的所有资源。

解压文件后，您应该会看到如下文件：

![图片](https://www.freecodecamp.org/news/content/images/2023/10/arduino-ide-unzipped.PNG) _图片展示了您应该看到的文件_

要启动 Arduino IDE，请点击标有“Arduino IDE”的文件。

### 步骤 #3 - Arduino IDE 概览

现在您已经下载并安装了 Arduino IDE，下一部分是熟悉开发环境。在下一节中，您将学习如何使用 IDE 将代码上传到 Arduino Uno 板。

在此之前，让我们看看您在 Arduino IDE 中会找到的一些选项。在 IDE 的左上角，有五个选项——文件、编辑、草图、工具、帮助：

![图片](https://www.freecodecamp.org/news/content/images/2023/10/ide.png) _显示这些选项（文件、编辑、草图、工具、帮助）的屏幕截图_

“文件”选项允许您执行不同的操作，例如创建新的草图（我们将在下一节中讨论草图），打开现有的草图，Arduino 初学者练习示例、键盘快捷键、保存选项等。

“编辑”选项为您提供文本格式化选项，例如复制、粘贴、剪切、注释/取消注释代码、字体大小选项、文本搜索选项等。

您可以使用“草图”选项来验证和编译代码、上传代码到 Arduino 板、优化代码和添加库。

您可以使用“工具”选项来管理库、格式化代码、访问串行监视器和绘图仪、选择 Arduino 板和端口上传代码、选择处理器等。

“帮助”选项提供排除故障的资源、IDE 更新信息、“入门”指南等。

接下来，让我们看看 IDE 中的一些其他部分和功能，这些部分和功能对您会有帮助。下图来自 [Arduino 文档][12]，完美地突出了它们：

![图片](https://www.freecodecamp.org/news/content/images/2023/10/arduino-ide-icons.png) _[https://docs.arduino.cc/software/ide-v2/tutorials/getting-started-ide-v2][13]_

- **验证/上传**：您可以使用这些选项来编译和上传代码到 Arduino 板。如果代码未按预期编译，您将收到错误消息。
- **选择板和端口**：您可以使用此选项选择端口和端口号来上传代码。当前版本的 Arduino IDE 会自动检测板和端口。
- **草图本**：这使您可以访问计算机中创建的所有草图。您还可以访问保存在 Arduino 云中的草图（主要用于创建物联网项目）。
- **板管理器**：Arduino IDE 支持不同的板。随着您进程的发展，您将使用不同的板，其中一些可能不受 IDE 支持。板管理器选项卡使您可以安装和管理使用这些板所需的软件包。
- **库管理器**：您可以使用库来扩展代码中的某些功能。通过库管理器，您可以安装许多有助于简化开发过程的库。
- **调试**：此功能用于 Arduino 程序的实时测试和调试。
- **搜索**：您可以使用搜索工具在代码中查找特定关键字。
- **打开串行监视器**：您可以使用串行监视器与 Arduino 板通信、调试和测试代码、可视化板上的数据、与用户输入交互等。我们将在不同的章节中深入研究串行监视器。
- **打开串行绘图仪**：串行绘图仪主要用于数值数据的实时可视化。

## 什么是 Arduino 草图？

我们在上一节中多次提到“草图”一词，但它是什么？草图是用 Arduino 编程语言编写的程序。它是指为 Arduino 项目编写的代码文件的另一种方式。

Arduino 编程语言是基于 C/C++ 语言构建的，因此两者共享相似的语法和结构。您可能会遇到将 Arduino 代码称为“嵌入式 C”或“嵌入式 C++”的资源。

要将代码上传到 Arduino 板，需要硬件和软件。硬件是板子，在本例中是 Uno 板，软件是 IDE 中的 Arduino 草图。

以下是步骤：

### 步骤 #1 – 连接 Arduino 板

使用 USB 数据线将 Arduino 板连接到计算机。没有此步骤，你无法继续。

### 步骤 #2 – 创建草图

现在是启动 IDE 并编写一些代码的时候了。

这里是一个使 LED 闪烁的代码示例：

```
int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  digitalWrite(ledPin, HIGH);
  delay(1000);
  digitalWrite(ledPin, LOW);
  delay(1000);
}
```

如果你不理解代码，不要担心 —— 我们将在继续学习过程中解释一切。

### 步骤 #3 – 选择板子和端口

你可以从 IDE 中选择上传代码的板子。以下是显示该操作的图片：

![图片](https://www.freecodecamp.org/news/content/images/2023/10/port.png)

### 步骤 #4 – 验证代码

你可以使用验证按钮编译代码并检查错误。如果存在错误，你将获得一条错误消息以显示可能的原因。

![图片](https://www.freecodecamp.org/news/content/images/2023/10/verify.png) _显示验证按钮的图片_

### 步骤 #5 – 上传代码

你可以使用上传按钮（验证按钮后的按钮）上传代码。

如果代码中没有错误，这些步骤将帮助你将代码上传到板子。如果你已经上传了上面的代码，你应该会看到 Uno 板上的内置 LED（根据设计连接到引脚 13）在闪烁。

在下一章中，你将学习 Arduino 编程语言的基础知识。

# 第2章：Arduino 编程基础

在我们深入创建自己的草图和 tinkering 之前，你必须了解使这些板子按预期工作的逻辑。为此，你需要了解如何使用 Arduino 编程语言进行编码。

如上章所述，Arduino 语言是建立在 C/C++ 之上的。你将首先学习编程基础知识。这将为涉及编写代码的其他每一章做好准备。

本章是为初学者创建的。如果你从未编写过代码，那么这可以作为你的起点。这并不意味着你将学习如何使用 C 或 C++ 进行编码。你将学习如何编写类似于这些语言语法的 Arduino 代码。

本章结束时，你应该能够理解并编写 Arduino 代码。

## Arduino 中的变量和数据类型

变量和数据类型用于大多数编程语言中以存储和操作数据。你可以将变量视为容器或存储单位。顾名思义，数据类型是存储在变量中的数据类型。

在 Arduino 编程中，在使用变量之前必须指定变量的数据类型，也就是说：

```
dataType variableName = variableValue
```

Arduino 中有不同类型的数据类型，我们将讨论每种数据类型以及代码示例。

### `int` 数据类型在 Arduino 中

`int` 数据类型用于存储整数值。Uno 板具有 16 位整数容量，因此可以存储范围在 -32,768 到 32,767 之间的值。

```
int redLED = 6;
```

在上面的代码中，我们创建了一个名为 `redLED` 的整数变量，值为 6。

`int` 数据类型还可以存储负整数：

```
int redLED = -6;
```

### `long` 数据类型在 Arduino 中

`long` 数据类型类似于 `int`，但具有更大的整数值范围。它具有 32 位整数限制，范围在 -2,147,483,648 到 2,147,483,647 之间。

```
long largeNumber = 6000;
```

### `float` 数据类型在 Arduino 中

`float` 数据类型用于存储带小数的数字。Float 变量可以存储高达 3.4028235E+38 的值，最低可达 -3.4028235E+38。

```
float num = 10.5;
```

虽然 `float` 数据类型主要用于小数，但它也可以接受整数（没有小数的整数）。但它将始终返回浮点值。因此，如果你在 `float` 中存储 10，它将返回 10.00。

### `String` 数据类型在 Arduino 中

你可以使用 `String` 数据类型来存储和操作文本。在构建项目时，你偶尔会使用字符串来显示文本形式的信息。

以下是代码示例：

```
String greeting = "Hello World!";
```

字符串的值用双引号括起来，如上面的代码所示。

请注意，声明字符串时，“S”应始终大写。

### `char` 数据类型在 Arduino 中

`char` 数据类型存储单个字符。

下面是一个示例：

```
char alphabet = 'A';
```

这与 `String` 数据类型不同，后者可以存储多个字符。

`char` 和 `String` 之间有两个主要区别：

- `char` 使用单引号（'A'），而 `string` 使用双引号（"Arduino"）。
- `char` 存储单个字符，而 `string` 存储多个字符。

`char` 还可以接受与字母 [ASCII][14] 值等效的整数值：

在上面的代码中，我们用值为 65 初始化了一个 `char` 变量。当在串行监视器上打印时（我们将在 [第 6 章：如何在 Arduino 中使用串行监视器][15] 中讨论串行监视器），返回的将是 A。

返回 A 是因为 65 的 ASCII 字符是 A。

### Arduino 中的 `bool` 和 `boolean` 数据类型

你可以使用 `bool` 和 `boolean` 来存储/表示布尔值 `true` 或 `false`。

```
bool roomIsCold = false;
```

布尔值主要用于逻辑和比较运算符，以及条件语句（你将在本章后面学习这些），以在 Arduino 程序中操控和控制不同的结果。

### Arduino 中的 `byte` 数据类型

`byte` 数据类型有一个 8 位无符号整数范围，从 0 到 255。无符号意味它不能存储负值。

```
byte sensorValue = 200;
```

`byte` 数据类型不是唯一可以是无符号的数据类型。你还可以使用 `unsigned int`、`unsigned long` 和 `unsigned char` 数据类型，它们都有各自的正整数范围。

## Arduino 中的运算符

运算符是可以用来对操作数进行某些操作的符号或字符。操作数简单来说就是任何运算符作用的值。

Arduino 中有不同种类的运算符，如：

### 算术运算符

算术运算符用于执行诸如加法、减法、除法、乘法等数学运算。以下是一些你应该知道的算术运算符：

#### 加法(+) 运算符

加法运算符，由 `+` 符号表示，将两个操作数相加：

```
int a = 5;
int b = 10;

// 我们在下面使用加法运算符将 a 和 b 相加
int c = a + b;

Serial.print(c);
// 15
```

#### 减法(−) 运算符

减法运算符将一个操作数的值从另一个操作数中减去。它由 `−` 符号表示：

```
int a = 5;
int b = 10;

// 我们在下面使用减法运算符从 a 中减去 b
int c = b - a;

Serial.print(c);
// 5
```

#### 乘法(＊) 运算符

你可以使用乘法运算符（`＊`）来将两个操作数相乘：

```
int a = 5;
int b = 10;

// 我们在下面使用乘法运算符将 a 乘以 b
int c = a * b;

Serial.print(c);
// 50
```

#### 除法(/) 运算符

除法运算符将一个操作数除以另一个操作数：

```
int a = 5;
int b = 10;

// 我们在下面使用除法运算符将 b 除以 a
int c = b / a;

Serial.print(c);
// 2
```

#### 取模(%) 运算符

取模运算符返回两个操作数相除的余数：

```
int a = 5;
int b = 10;

// 我们在下面使用除法运算符将 b 除以 a
int c = b % a;

Serial.print(c);
// 0
```

#### 自增(++) 运算符

自增运算符将变量的值增加 1：

```
int num = 5;
num++;

Serial.print(num);
// 6
```

#### 自减(−−) 运算符

自减运算符将变量的值减少 1：

```
int num = 5;
num--;

Serial.print(num);
// 4
```

### 赋值运算符

赋值运算符主要用于给变量赋值。你也可以使用它们来更新变量的值。

赋值（`=`）运算符用于分配和更新变量。`=` 运算符不应与 "等于" 混淆——它们不是同一个。我们将在比较运算符部分谈论等于（`==`）运算符。

以下是一个展示如何使用赋值运算符的示例：

```
int age = 1;
```

在上面的代码中，我们创建了一个名为 `age` 的变量，然后使用 `=` 运算符给它赋值 1。

但这不是使用 `=` 运算符赋值或更新变量值的唯一方法。你还可以使用复合赋值运算符。

#### 复合赋值运算符

复合赋值运算符让你合并算术运算符和 `=` 运算符。这种方法提供了一种更简短的编码方式。以下是一个示例：

```
int x = 5;
x += 5;

Serial.print(x)
// 10
```

在上面的代码中，我们创建了一个 `x` 变量，并给它赋值 5。但在第二行，你会看到我们结合了算术加法（`+`）运算符和 `=` 运算符来给 `x` 赋值：

```
x += 5;
```

上面的代码与以下代码相同：

```
x = x + 5;
```

所以复合运算符将两个运算符结合起来，让你用更短的方式完成相同的事情。任一种方法都没有问题。

以下是其他复合运算符的示例：

```
int a = 10;
a -= 5; // 相当于 a = a - 5 (a 变成 5)

int b = 10;
b *= 5; // 相当于 b = b * 5 (b 变成 50)

int c = 10;
c /= 5; // 相当于 c = c / 5 (c 变成 2)

int d = 10;
d %= 5; // 相当于 d = d % 3 (d 变成 0)
```

### 比较运算符

你可以使用比较运算符来比较两个值/操作数。比较运算符返回 `true` (1) 或 `false` (0)，具体取决于操作数之间的关系。

比较运算符可以帮助你根据其返回值做出决策。当我们开始构建项目时，你会经常看到它们。

以下是你偶尔会遇到的比较运算符：

该运算符比较两个变量的值。如果值相同，则返回 `true`。如果值不同，则返回 `false`。下面是一个例子：

```
int x = 10;
int y = 5; 

Serial.print(x == y)
// 返回 0
```

上面代码中 `x == y` 的返回值是 0（`false`），因为两个变量不相同。记住，只有当两个变量的值相同时，`==` 运算符返回 1（`true`）。

#### 不等于 (!=) 运算符

不等于运算符检查两个值是否不同。它的作用和 `==` 运算符相反。这意味着如果两个值不相同，则返回 1（`true`），如果值相同，则返回 0（`false`）。

下面是一个例子：

```
int x = 10;
int y = 5; 

Serial.print(x != y)
// 返回 1
```

#### 大于 (>) 运算符

大于 (`>`) 运算符检查左操作数是否大于右操作数。如果左操作数更大，则返回 1。如果左操作数更小，则返回 0。

```
int x = 10;
int y = 5; 

Serial.print(x > y)
// 返回 1
```

#### 小于 (<) 运算符

小于 (`<`) 运算符检查左操作数是否小于右操作数。如果左操作数更小，则返回 1。如果左操作数更大，则返回 0。

```
int x = 10;
int y = 5; 

Serial.print(x < y)
// 返回 0
```

#### 大于等于 (>=) 运算符

就像名称所示，`>=` 运算符检查左操作数是否大于或等于右操作数。如果左操作数大于或等于右操作数，则返回 1，如果不是，则返回 0。

“或”意味着两种情况之一满足即可。如果左操作数不大于右操作数但等于右操作数，仍然会返回 1。

```
int x = 10;
int y = 5; 

Serial.print(x >= y)
// 返回 1
```

#### 小于等于 (<=) 运算符

`<=` 运算符检查左操作数是否小于或等于右操作数。如果左操作数小于或等于右操作数，则返回 1，如果既不小于也不等于右操作数，则返回 0。

```
int x = 10;
int y = 5; 

Serial.print(x <= y)
// 返回 0
```

逻辑运算符

逻辑运算符在大多数编程语言中用于评估和确定变量之间的关系。

以下是 Arduino 编程中应掌握的三种逻辑运算符：

#### 逻辑与 (`&&`) 运算符

逻辑与 (`&&`) 运算符在两个语句都为真时返回 1。

```
int x = 10;

Serial.print((x > 5) && (x > 3));
// 返回 1
```

上面的表达式 — `(x > 5) && (x > 3)` — 返回 1，因为两个语句都为真。也就是说，`x > 3` 和 `x > 3`。如果其中一个或两个语句为假，则返回值为 0。

#### 逻辑或 (`||`) 运算符

逻辑或 (`||`) 运算符在其中一个或两个语句为真时返回 1。

```
int x = 10;

Serial.print((x > 5) && (x > 15));
// 返回 1
```

上面的代码返回 1 尽管有一个语句是假的。这是因为 `||` 运算符在其中一个或两个语句为真时返回 1。

#### 逻辑非 (`!`) 运算符

非 (`!`) 运算符否定或反转其操作数的值。如果操作数为真，则返回假；如果操作数为假，则返回真。

下面是一个例子：

```
int x = 10;

Serial.print(!(x > 5));
// 返回 0
```

上面的代码返回 0，但为什么呢？`x > 5` 为真，所以预期的结果应为 1。

我们得到 0 是因为 `!` 运算符将操作数的返回值从 1 反转为 0。

## Arduino 中的条件语句

你可以使用条件语句来做出决策或基于特定条件执行代码。你可以结合条件语句和逻辑（如上一节中的运算符）来控制代码的执行方式。

让我们看看一些条件语句及其使用方法：

### `if` 语句

`if` 语句用于在条件为 `true` 时执行代码。语法如下所示：

```
if (condition) {
    // 如果条件为 true 执行的代码
}
```

在上面的语法中，`condition` 表示一个特定的逻辑。如果条件为 `true`，则大括号内的代码将被执行。下面是一个例子：

```
int x = 5;
if (x < 10) {
  Serial.print("x is less than 10");
}

// x is less than 10
```

在上面的代码中，我们给出了一个条件 — `x < 10` — 和大括号内的一段代码，该代码打印 "x is less than 10"。大括号内的代码仅在条件为真时运行。

这就像是在说 "如果 x 小于 10 则打印 'x is less than 10' 到串行监视器"。由于 x 小于 10，条件评估为 `true`，我们得到了打印的消息。

但如果条件为 `false`，该怎么办？大括号内的代码将不会运行，因此我们需要一种不同的逻辑来处理这种情况。我们可以使用 `else` 语句来实现。

### `else` 语句

`else` 语句用于在条件为 `false` 时执行代码。

```
int score = 20;
if (score > 50 ) {
  Serial.print("You passed the exam!");
} else {
  Serial.print("You have to rewrite the exam!");
}
```

在上面的代码中，给定的条件是 `false`。因此，将执行 `else` 语句的代码，因为 `score` 变量不大于 50。

记住：只有当条件为 `false` 时，才会运行 `else` 语句的代码。如果条件为 `true`，则会执行 `if` 语句的代码。

### `else if` 语句

你可以使用 `else if` 语句定义多个要检查的条件。语法如下：

```
if (condition1) {
    // 当条件1为真时执行的代码
} else if (condition2){
    // 当条件2为真时执行的代码
} else {
    // 当条件1和条件2都为假时执行的代码
}
```

在上面的语法中，有两个条件（你可以创建多个条件）。如果 `condition1` 为 `true`，则会执行条件1的大括号里的代码。

如果 `condition1` 为 `false`，那么将评估 `condition2`。如果 `condition2` 为 `true`，则会执行其代码块。

如果 `condition1` 和 `condition2` 都为 `false`，则会执行 `else` 语句的代码。

```
int score = 80;
if (score > 50 ) {
  Serial.print("You passed the exam!");
} else if (score < 50) {
  Serial.print("You have to rewrite the exam!");
} else {
  Serial.print("No records for your exam score found!");
}

// 你通过了考试！
```

### `switch-case` 语句

在上一节中，我们了解了如何使用 `else if` 语句创建多个条件。如果你有很多条件，代码可能会变得难以阅读。我们可以使用 `switch` 语句清理它并使代码更具可读性。

语法如下：

```
switch (expression) {
    case 1:
        // 当表达式等于 case 1 时执行的代码
        break;
    case 2:
        // 当表达式等于 case 2 时执行的代码
        break;
     case 3:
        // 当表达式等于 case 3 时执行的代码
        break;
    default:
        // 当表达式不匹配任何 case 时执行的代码
        break;
}
```

让我们分解语法：

- `expression` 与每个 `case` 的值进行比较。
- 当某个 `case` 与 `expression` 匹配时，将执行该 `case` 的代码。
- `break` 关键字在找到与 `expression` 匹配的内容后停止 `switch` 语句的迭代。
- 如果没有任何 `case` 与 `expression` 匹配，则执行 `default` 关键字的代码。

这里有一个例子：

```
int day = 2;

switch (day) {
  case 1:
    Serial.print("Monday");
    break;
  case 2:
    Serial.print("Tuesday");
    break;
  case 3:
    Serial.print("Wednesday");
    break;
  case 4:
    Serial.print("Thursday");
    break;
  case 5:
    Serial.print("Friday");
    break;
  case 6:
    Serial.print("Saturday");
    break;
  case 7:
    Serial.print("Sunday");
    break;
  default:
    Serial.print("Number out of range");
  }

//  Tuesday
```

上面的代码打印出 "Tuesday"，因为 `expression` 的值为 2，与 `case 2` 匹配。

## Arduino 中的循环

你可以使用循环反复执行代码，直到满足某个条件。你还可以使用循环遍历数据集合，并对集合中的所有元素执行代码。

在 Arduino 中，你可以使用不同类型的循环，如 `for 循环`、`while 循环` 和 `do-while 循环`。让我们来看看它们的语法以及一些实际例子：

### `for` 循环

你可以使用 `for 循环` 迭代一个集合或执行代码，直到满足某个条件。它通常用于你知道循环要运行的次数。

语法如下：

```
for (initialization; condition; increment/decrement) {
   // 要执行的代码
}
```

在上面的语法中有三个重要的关键字：

- **initialization** 表示一个初始变量（通常是一个整数），它指定循环的起点。
- **condition** 用于控制循环预期运行的次数。当条件为 `false` 时，循环停止。
- **increment/decrement** 在每次迭代后增加/减少初始变量的值。

这里有一个例子来帮助你理解这些关键字：

```
for (int i = 0; i < 11; i++){
  Serial.println(i);
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

在上面的循环中，我们创建了一个初始变量 `1`，其值为 0。

条件为 `i < 11`，意味着只要 `i` 小于 11，循环就会继续运行。

使用增量操作符 `i++`，我们在每次循环运行后将 `i` 的值增加 1。

最后，我们在每次迭代时打印 `i` 的值。在串行监视器上，你会看到从 0 到 10 的数字打印出来。这是因为在 10 之后，`i` 不再小于 11（给定的条件），所以循环终止。

### `while` 循环

`while` 循环的工作原理与 `for` 循环相同 —— 只要给定条件为 `true`，它就会执行代码。但它通常用于循环次数未知的情况。

语法如下：

```
while (condition) {
    // 要执行的代码
}
```

```
while (i < 11) {
  Serial.println(i);
  i++;
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

### `do-while` 循环

`do-while` 循环与 `while` 循环相似，但它会先执行其代码块，然后再检查给定条件的有效性。也就是说，在循环开始时，即使条件为 `false`，大括号中的代码也会先执行一次。之后，它会开始像普通循环一样检查条件是否为 `true` 或 `false`。

总而言之，`do-while` 循环的代码至少会运行一次，无论给定的条件是什么。下面是一个示例：

```
do {
  // 将要执行的代码块
}
while (condition);
```

以下是代码示例：

```
int i = 0;

do {
  Serial.println(i);
  i++;
} while ( i < 11);

// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
```

## Arduino 中的数组

你可以在 Arduino 中使用数组来在一个变量中存储多个相同数据类型的变量。存储在数组中的每个元素都可以使用其索引号进行访问。

### 数组声明

声明一个数组就是创建一个数组。你可以使用下面的语法在 Arduino 中创建数组：

```
dataType arrayName[arraySize]
```

在上述语法中：

-   `dataType` 代表将存储在数组中的数据类型。例如，如果数据类型是 `int`，那么数组中只能存储整数。
-   `arrayName` 表示数组的名称。
-   `arraySize` 表示数组中可以存储的元素数量。

这是一个数组声明的代码示例：

```
int ages[4];
```

在上述代码中，我们创建了一个名为 `ages` 的数组。该数组只能存储四个 `int` 数据类型的元素。

### 数组初始化

初始化一个数组意味着给数组赋值。在上一节中，我们创建了一个名为 `ages` 的数组。现在，让我们给它赋值一些元素：

```
int ages[4] = {2, 4, 6, 8};
```

你可以从上面的示例中看到，数组中只有四个元素——2、4、6、8。分配第五个元素会导致错误，因为我们指定数组只能包含四个整数元素：`int ages[4];`。

你可以使用其索引号访问数组中的元素。索引从零 (0) 开始——所以第一个元素的索引为 0，第二个元素的索引为 1，第三个元素的索引为 2，以此类推。

```
int ages[4] = {2, 4, 6, 8};

Serial.print(ages[0]);
// 2
```

如上所示，我们使用数组名称和方括号中的元素索引来访问第一个元素：`ages[0]`。

你还可以使用其索引赋值或重新赋值给特定元素：

```
ages[0] = 10;
```

请注意，你可以同时声明和初始化数组。我只是将它们分到不同的部分来帮助你理解每个术语的含义。

## Arduino 中的函数

在上一章中，我们讨论了 Arduino 中的一些内置函数，这些函数可用于执行与 Arduino 硬件和软件组件相关的各种任务。我们所做的就是编写函数名称并在必要时传入参数，然后我们得到了期望的结果。

例如，`digitalWrite()` 函数使用两个参数（引脚编号和要发送到引脚的值）将值写入数字引脚。在内部，一些代码逻辑处理了该操作。

假设发送值到数字引脚所需的逻辑达到一百行代码。如果没有函数，每次你想要发送值到数字引脚时都必须编写那一百行代码。

函数可以防止你重新造轮子。它们还可以帮助你将代码分解为更小、更可读和更易管理的部分。

就像内置函数可以重复使用以执行特定任务一样，你也可以创建自己的函数以实现特定功能，这就是你将在本章中学习的内容。

### 如何在 Arduino 中声明函数

Arduino 中的函数主要包括四个部分：

-   函数返回的数据类型。
-   函数的名称。
-   函数参数（可选）。
-   函数体。

其样子如下：

```
dataType functionName(optionalParameters) {
    // 函数体
}
```

所以从上面的语法来看，`dataType` 是函数返回的数据类型。它可以是 `int`、`String` 等。没有 `return` 语句的函数使用 `void` 类型作为其数据类型。

`functionName` 是给函数的名称。该名称用于调用函数以执行函数体中定义的逻辑。你可能会看到与函数相关的词如“调用”、“触发”和“执行”出现。它们都意味着相同的事情——执行函数的逻辑。

`optionalParameters` 是你在创建函数时定义的变量。它们使函数可以接受可以在函数体内使用的外部数据。函数参数连同其数据类型一起定义。当我们看一些示例时，你会理解这一点。

函数体是所有逻辑所在的地方。函数被调用时所做的一切都写在函数体内。


### 如何用 `void` 类型声明函数

在上一章中，我们讨论了 `void Setup()` 和 `void loop()` 函数。它们是你将在每个 Arduino 程序中使用的两个内置函数。这些函数使用 `void` 关键字定义，因为它们不返回任何值。

以下是使用 `void` 类型的函数的语法：

```
void functionName(optionalParameters) {
    // 代码逻辑
}
```

在上述语法中，`functionName` 表示函数的名称。我们可以使用该名称来调用函数，以执行函数中定义的代码。

`optionalParameters` 用来将外部数据传递给函数，而当函数被调用时运行的代码逻辑则写在花括号之间。

这是一个例子：

```
// 函数声明
void printName(String userName) {
  Serial.println("Hello " + userName);
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  printName("Ihechikara"); // 函数调用
  delay(1000);
}
```

在上面的代码中，我们创建了一个名为 `printName` 的函数，它接受一个名为 `userName` 的字符串参数。函数的任务是打印 "Hello " 以及参数的值。

在 `void loop()` 中，我们调用了函数并传递了一个参数：`printName("Ihechikara")`。在串行监视器中，你将看到 "Hello Ihechikara" 被打印出来。

要调用一个函数，你所要做的就是写下带括号的函数名称：`printName()`。记得在需要时传递参数：`printName("Ihechikara")`。

使用错误数据类型的参数将导致错误。例如，我们在示例中定义了一个字符串参数。使用整数会引发错误，因为函数期望的是字符串。

### 如何声明一个带返回数据类型的函数

在本节中，我将使用 `int` 数据类型向你展示不使用 `void` 类型声明的函数是如何使用的。这里的逻辑与使用 `return` 语句的其他函数相同。

```
// 函数声明
int addNums(int a, int b) {

  int result = a + b;
  return result;
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(addNums(2, 10)); // 函数调用
  delay(1000);
}
```

在上面的代码中，我们用 `int` 类型声明了一个函数：`int addNums(int a, int b) {...}`。这意味着该函数预计返回一个整数值。

函数的逻辑是将两个参数（`a` 和 `b`）的值相加并返回它们的和。我们使用 `return` 语句返回参数的和。

我们现在可以说 `addNums` 函数的任务是返回两个给定参数的和。当我们在 `void loop()` 中使用该函数时可以看出这一点：

```
Serial.println(addNums(2, 10));
```

我们调用了带两个参数的函数并在串行监视器中打印出它们的和。

### 你应该了解的关于 `return` 语句的事项

在前两节中，我们看到了如何以两种不同的方式使用函数——使用 `return` 语句的函数和不使用它的函数。

但是如果在 `void` 函数中使用 `return` 语句会怎么样呢？这会破坏代码吗？答案是否定的。我会解释原因。

`return` 关键字的主要用途是从函数中返回一个值，然后终止函数。考虑以下示例：

```
int addNums(int a, int b) {

  int result = a + b;
  Serial.println(result);
  return result;

  // 这部分将被忽略
  Serial.println("Hello World");
}
```

上面的函数接受两个参数——a 和 b——并返回它们的和。你会注意到我们在 `return` 语句后打印了 "Hello World"。在 `return` 语句后面的代码部分将不会被执行，因为函数在看到 `return` 语句时就终止/停止其操作。

所以你应该始终记住，任何在 `return` 语句后面出现的代码都会被忽略。

你可以在 `void` 函数中使用 `return` 语句，但习惯上不会这样做。我们只是使用 `void` 关键字来定义不需要 `return` 语句的函数。

## Arduino 程序中常用的内置函数

在本节中，我们将讨论一些编写或阅读 Arduino 代码时常见的内置函数。我们将在本手册的后续章节中大多会使用它们。

我们将从 Arduino 程序的两个主要部分——`setup()` 和 `loop()` 函数开始。

### Arduino 中的 `setup()` 和 `loop()` 函数

你可以使用 `setup()` 函数来配置模拟和数字引脚，初始化变量以及执行其他设置功能。`setup()` 函数在板子通电或重置时执行一次。

`loop()` 函数则是连续运行的。这个程序部分是你编写所有代码逻辑的地方。你可以使用 `loop()` 函数为 Arduino 板上的不同组件和传感器提供指令。

```
void setup() {
  // 将你的设置代码放在这里，这些代码将运行一次：

}

void loop() {
  // 将你的主要代码放在这里，这些代码将重复运行：

}
```

### Arduino 中的 `pinMode()` 函数

#### 语法

```
pinMode(pin, mode)
```

-   `pin` 表示 Arduino 板上的引脚编号。
-   `mode` 表示 `pin` 的配置，可以是 INPUT, OUTPUT 或 INPUT\_PULLUP。

### Arduino 中的 `digitalRead()` 函数

你可以使用 `digitalRead()` 函数读取数字引脚的状态。它返回 0 (`LOW`) 或 1 (`HIGH`)。

#### 语法

```
digitalRead(pin)
```

在上面的代码中，`pin` 表示 Arduino 板上的引脚编号。

### Arduino 中的 `digitalWrite()` 函数

`digitalWrite()` 函数将值（`HIGH` 或 `LOW`）分配或写入数字引脚。

#### 语法

```
digitalWrite(pin, value)
```

-   `pin` 表示 Arduino 板上的引脚编号。
-   `value` 表示要分配给 `pin` 的值，可以是 `HIGH` 或 `LOW`。

### Arduino 中的 `analogRead()` 函数

`analogRead()` 函数从模拟引脚读取值，并返回一个范围在 0 到 1023 之间的值。

#### 语法

```
analogRead(pin)
```

在上面的代码中，`pin` 表示 Arduino 板上的引脚编号。

### Arduino 中的 `analogWrite()` 函数

此函数将模拟值写入或分配给引脚。

#### 语法

```
analogWrite(pin, value)
```

-   `pin` 表示 Arduino 板上的引脚编号。
-   `value` 表示要分配给 `pin` 的值，范围从 0 到 255。

## Arduino 中的串行函数

串行通信使 Arduino 板能够使用内置的串行监视器与计算机及其他设备通信。以下是一些常用的函数：

### `Serial.begin()`

`Serial.begin()` 函数初始化串行通信。当你使用串行监视器时，这是你首先使用的函数。该函数需要一个波特率作为参数。

在这种情况下，波特率表示串行通信中数据传输的速度或速率。

以下是语法：

```
Serial.begin(baudRate)
```

### `Serial.print()` 和 `Serial.println()`

你可以使用 `print()` 和 `println()` 函数将数据打印到串行监视器。

```
print(val)
println(val)
```

在上面的代码中，`val` 表示要打印的值。

我们将在 [第 6 章：如何使用 Arduino 中的串行监视器][16] 讨论更多关于串行通信的内容。

### Arduino 中的 `delay()` 函数

你可以使用 `delay()` 函数暂停 Arduino 程序指定的时间。语法如下：

```
delay(ms)
```

在上面的代码中，`ms` 表示以毫秒为单位的指定时间。

# 第 3 章：如何在 Arduino 中使用数字引脚

数字引脚用于发送和接收两种状态的数字信号 — `HIGH` 和 `LOW`。Arduino 板上的数字引脚可以配置为输入或输出引脚。

这些状态也可以用数字表示（1 表示 `HIGH`，0 表示 `LOW`），或用伏特（V）表示（5V 表示 `HIGH`，0V 表示 `LOW`）。

不同的 Arduino 板引脚数目和排列方式不同，但它们的用途相同。因此，如果你理解了本章中的使用方法，那么在其他板上使用它们也不会有问题。

Uno 板有 14 个数字引脚，编号从 0 到 13。尽管每个引脚都可以配置为数字输入或输出引脚，但其中一些具有额外的功能：

-   引脚 0 (RX) 和 1 (TX) 使 Arduino 板能够进行串行通信。RX 接收，而 TX 发送。
-   带有波浪符号 (~) 的引脚支持 PWM（脉冲宽度调制）信号。这意味着你可以像使用模拟引脚那样使用这些引脚（接收模拟值）。
-   引脚 2 和 3 可用于基于中断的功能。

## 如何将数字引脚配置为输入或输出引脚

当将数字引脚配置为输入引脚时，它作为接收组件信息的点。通过这种方式，你可以从传感器、电子组件等获取数据。

你可以使用 `pinMode()` 函数将引脚配置为输入或输出引脚。注意，Uno 板上的引脚默认设置为输入，因此如果你在使用之前没有指定，它们将用作输入引脚。

在本节中，你将学习如何将数字引脚用作输入和输出引脚。你将首先单独学习它们，然后学习如何结合输入和输出信号来构建一个小项目。

我们将从输入开始。

### 数字引脚作为输入

发送到输入引脚的信息或信号可以使用 `digitalRead()` 函数读取。在本节中，你将学习如何使用不同的内置函数配置和读取数字输入引脚的信号。

我们将使用以下硬件组件：

-   Arduino Uno。
-   面包板。
-   按钮。
-   跳线。

以下是连接的电路图：

![图片](https://www.freecodecamp.org/news/content/images/2023/10/circuit-diagram-digital-input-pushbtn.png) _配置图 – 输入_

以下是代码：

```
int pushBtn = 7;
int push_btn_state;

void setup(){
  pinMode(pushBtn, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop(){
  push_btn_state = digitalRead(pushBtn);
  Serial.println(push_btn_state);
  delay(1000);
}
```

让我们拆解一下代码。

```
int pushBtn = 7;
int push_btn_state;
```

`pushBtn` 被赋值为 7。我们用这个值表示 Arduino 板上的 7 号针脚。我们声明了 `push_btn_state` 变量但没有给它赋值，因为我们稍后会用它来存储按钮的值。

在我们的 `setup()` 函数中，我们使用 `pinMode()` 函数将按钮配置为输入引脚：

```
pinMode(pushBtn, INPUT_PULLUP);
```

该函数接受两个参数——表示 7 号针脚的 `pushBtn` 变量和设置针脚为带上拉电阻输入的 `INPUT_PULLUP`。

我们还使用 `Serial.begin(9600)` 初始化了串口监视器。

到此，我们已经配置了 Arduino 软件和硬件以将 7 号针脚识别为输入针脚。

接下来，我们使用 `digitalRead()` 函数读取从 7 号针脚传来的信号。还记得我们创建的 `push_btn_state` 变量吗？我们在这存储信号：

```
push_btn_state = digitalRead(pushBtn);
```

之后，我们使用 `Serial.println(push_btn_state);` 将从 7 号针脚读取的值打印到串口监视器上。

当你打开串口监视器时，你会看到数字 1 被反复打印。这是使用上拉电阻按键的初始状态。当你按下按钮时，值会变为 0。当你释放按钮时，值又变为 1。

0 表示 `LOW`，1 表示 `HIGH`。通过这个示例，你应该了解了如何配置、读取和显示来自输入针脚的信号。

### 数字针脚作为输出

输出针脚的主要用途是发送信号。由于我们在处理数字输出，我们可以发送 `HIGH` (5V) 或 `LOW` (0V) 信号。我们可以使用 `digitalWrite()` 函数对数字针脚进行此操作。

在本节中，我们将使用 LED（发光二极管）演示如何配置和发送信号到组件。

我们将使用以下组件：

- Arduino Uno
- 红色 LED
- 1k 欧姆电阻
- 跳线
- 面包板

这是电路图：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/circuit-diagram-digital-output-led.png) _配置图 – 输出_

```
int RedLED = 8;

void setup(){
  pinMode(RedLED, OUTPUT);
}

void loop(){
  digitalWrite(RedLED, HIGH);
  delay(1000);
  digitalWrite(RedLED, LOW);
  delay(1000);
}
```

在以上代码中，我们将连接到 Uno 板 8 号针脚的红色 LED 配置为输出针脚，使用 `pinMode()` 函数。

然后我们使用 `digitalWrite()` 函数向针脚发送信号：

```
  digitalWrite(RedLED, HIGH);
  delay(1000);
  digitalWrite(RedLED, LOW);
  delay(1000);
```

通过 `HIGH` 参数，我们向针脚发送 5V，这让 LED 亮起。通过 `LOW`，我们发送 0V 让 LED 灭掉。于是 LED 会以 1000 毫秒的延迟亮灭交替。这个例子通常被称为 "BLINK" 例子。

## 数字 I/O 项目

现在我们已经理解了如何使用 Arduino 发送和接收数字信号，让我们将两者结合起来构建一个互动项目。

这个想法是使用按钮控制 LED。当你按下按钮时，LED 熄灭，而当你松开按钮时，LED 重新亮起。

我们将结合前面示例中使用的组件：

- Arduino Uno
- 红色 LED
- 1k 欧姆电阻
- 按钮
- 跳线
- 面包板

![digital-IO-project](https://www.freecodecamp.org/news/content/images/2023/10/digital-IO-project.png) _配置图 – 输入和输出项目_

这是代码：

```
int pushBtn = 7;
int push_btn_state;
int RedLED = 8;

void setup(){
  pinMode(pushBtn, INPUT_PULLUP);
  pinMode(RedLED, OUTPUT);
}

void loop(){
  push_btn_state = digitalRead(pushBtn);

  if (push_btn_state == 1) {
    digitalWrite(RedLED, HIGH);
  } else {
    digitalWrite(RedLED, LOW);
  }
}
```

以下是上述代码的剖析：

首先，我们将按钮连接到 7 号针脚，将红色 LED 连接到 8 号针脚。

然后我们配置两个针脚——7 号针脚为输入，8 号针脚为输出。

接下来，我们使用 `digitalRead()` 函数读取按钮的值并将其存储在名为 `push_btn_state` 的变量中。

使用 `if` 语句，我们检查按钮的状态。当 `push_btn_state` 未被按下时，它的值为 1（`HIGH`）。我们使用 `digitalWrite()` 向 LED 发送 5V。

当 `push_btn_state` 被按下时，它的值为 0，我们向 LED 发送 0V，使其熄灭。

# 第四章：如何使用 Arduino 的模拟针脚

模拟针脚可用于从不同的传感器和组件接收和发送电压值。与处于 0（`LOW`）和 1（`HIGH`）两种状态的数字信号不同，模拟值有一个从 0 到 1023 的更广泛的值范围。

Uno 板有六个模拟针脚——A0、A1、A2、A3、A4 和 A5。这些针脚默认是输入针脚。

类似于数字针脚，有内置函数用于接收和发送模拟电压信号。你可以使用 `analogRead()` 函数读取/接收来自针脚的模拟值，而 `analogWrite()` 函数可以用于写入特定针脚。
```

你可以通过 Arduino 板上的 (~) 符号找到 PWM 数字引脚。在 Uno 板上，有引脚 3、5、6、9、10 和 11。

在本节的项目中，你将学习如何使用电位器调节 LED 的亮度。我们将使用电位器作为输入组件，并将其电压发送到 LED 以增加/减少 LED 的亮度。

以下是我们将使用的组件：

-   Arduino Uno.
-   黄色 LED.
-   电位器.
-   1k 欧姆电阻.
-   跳线.
-   面包板.

这是电路图：

![图像](https://www.freecodecamp.org/news/content/images/2023/10/analog-IO.png) _连接图_

这是电路的代码：

```
int potentiometer = A0;
int pot_value = 0;
float pot_in_PWM;
int yelowLED = 6;

void setup(){
  pinMode(potentiometer, INPUT);
  pinMode(yelowLED, OUTPUT);
}

void loop(){
  pot_value = analogRead(potentiometer);
  pot_in_PWM = pot_value * (255.0 / 1023.0);

  analogWrite(yelowLED, pot_in_PWM);
}
```

在上面的代码中，我们将电位器（连接到模拟引脚 A0）设置为输入组件。将黄色 LED（连接到数字引脚 6）设置为输出组件。LED 连接到一个 PWM 引脚，因为我们将向它发送模拟值。

使用 `analogRead()` 函数，我们获取了电位器的值并将其存储在名为 `pot_value` 的变量中。电位器返回的值范围从 0 到 1023。

然后我们将电位器返回的值转换为 0 到 255 的范围，对应于 PWM 值。这是因为 `analogWrite()` 函数发送的是在该范围内（0 到 255）的 PWM 值。新的值范围存储在一个名为 `pot_in_PWM` 的变量中。

最后，我们使用 `analogWrite()` 函数将 PWM 值发送到 LED: `analogWrite(yelowLED, pot_in_PWM)`。

当你验证并将代码上传到你的 Arduino 板时，你就可以通过旋转电位器的旋钮来控制 LED 的亮度。

# 第 5 章：如何在 Arduino 中使用传感器和执行器

传感器和执行器在使用 Arduino 开发项目中扮演着重要角色。它们帮助微控制器获取物理环境的变化信息，并基于这些信息做出决策。

本章的目标是帮助你理解传感器和执行器之间的区别，以及如何使用它们。当然，有大量的传感器和执行器，但我们将只重点讲述其中的一些。在本章结束时，你应该能够自己探索其他传感器。

我们首先会讨论什么是传感器、传感器的类型以及如何使用代码操作它们。接下来我们会对执行器进行类似的讲解，并以一个同时使用传感器和执行器的项目示例作为结束。

让我们开始吧！

## 什么是 Arduino 中的传感器？

传感器是一种监听或检测环境变化的设备。传感器将它们检测到的物理环境中的信息转换为电信号，然后发送到微控制器（电路板的“大脑”）。

你可以将传感器比作人的感觉器官——我们用它们来收集环境信息。人体中的每个感觉器官（如眼睛和耳朵）都有一个特定的功能和操作模式，这些模式不同于其他器官。

同样地，Arduino 中的传感器也有其特定的功能和使用场景。例如，我们有可以测量和检测温度、运动、湿度等的传感器。

### Arduino 中传感器的类型

以下是一些常见的，在使用 Arduino 时会遇到的传感器：

-   **温度传感器**：测量环境的温度和湿度。
-   **光敏电阻（LDR）**：测量/检测光强度。
-   **超声波传感器**：测量物体与传感器的距离。
-   **运动传感器**：一般通过感测红外能量/辐射的变化来检测运动。
-   **土壤湿度传感器**：测量土壤的湿度水平。
-   **水传感器**：测量水位/检测水，等等。

还有其他可以与 Arduino 一起使用的传感器，但我们将只关注两种：光敏电阻（LDR）和超声波传感器。

通过本节中的示例，你将能够自行探索其他传感器的工作原理。

### 如何在 Arduino 中使用光敏电阻（LDR）

光敏电阻（LDR），也被称为光敏电阻，是一种根据光照强度变化其电阻的电子元件。

基本上，你可以使用该传感器来感测光。你可以用它做一些很酷的事情，比如创建一个在黑暗时自动打开电灯的照明系统，或者一个追踪和监测阳光的气象站，等等。

一个 LDR 通常看起来像这样：

![图像](https://www.freecodecamp.org/news/content/images/2023/10/ldr.png) _LDR 图示_

这是电路连接图：

![图像](https://www.freecodecamp.org/news/content/images/2023/10/ldr-circuit.png) _连接图_

在上述电路中，LDR 的一腿连接到 5V（伏特）。另一腿连接到一个 1K 欧姆电阻——电阻的一端连接到地（GND），而另一端连接到模拟引脚（在我们的电路中为 A1）。

```
int ldrPin = A1;
int ldrValue;

void setup() {
  pinMode(ldrPin, INPUT);
  Serial.begin(9600); 
}

void loop() {
  ldrValue = analogRead(ldrPin);
  Serial.println(ldrValue);
  delay(1000); 
}
```

在上面的代码中，我们创建了一个名为 `ldrPin` 的变量，值为 `A1`。这表示在电路中连接了一个 LDR 的一条腿到模拟引脚。这个引脚将帮助我们了解传感器的值。

接着我们创建了一个 `ldrValue` 变量，用于存储传感器的值。

在 `setup()` 函数中，我们将 LDR 设置为 INPUT 引脚。我们还初始化了串行监视器。

接下来，我们使用 `analogRead` 函数读取 LDR 的值，并将该值存储在 `ldrValue` 变量中：

```
ldrValue = analogRead(ldrPin);
```

最后，我们将读取到的值打印到串行监视器，并延迟 1000 毫秒（一秒）。

此时，如果增加 LDR 的光照，值会增加。如果减少光照或覆盖传感器以阻挡光线，值就会减少或变为零。

## 如何在 Arduino 中使用超声波传感器

超声波传感器通常用于测量物体的距离。你可以在许多应用中使用这种传感器，例如：

-   家庭自动化（当检测到物体/人的存在时，你可以执行某些动作，例如在黑暗的房间中打开灯）。
-   自动门。
-   安全系统。
-   距离测量，等等。

就像其他传感器一样，也有各种类型。在这个例子中，我们将使用 HC-SR04 超声波传感器。别担心，工作原理是相同的。所以如果你明白如何使用这个，你也可以配置和使用你遇到的其他类型的超声波传感器。

下面是电路图的示意图：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/ultra-sensor.png) _配置图（来自 https://howtomechatronics.com/tutorials/arduino/ultrasonic-sensor-hc-sr04/）_

传感器有四个引脚 —— VCC、Trig、Echo 和 GND。

-   VCC 引脚连接到 Uno 板上的 5V
-   Trig 引脚连接到数字引脚 9
-   Echo 引脚连接到数字引脚 10
-   GND 引脚连接到 Uno 板上的 GND

Trig 引脚用于“触发”超声波传感器，而 Echo 引脚用于根据超声波/信号从物体反射回来的时间来测量物体的距离。

以下是一个代码示例：

```
int trigPin = 9; 
int echoPin = 10;  

long duration, distance;

void setup() {
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  distance = (duration / 2) * 0.0343;

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  delay(1000);
}
```

在上面的代码中，trig 引脚表示数字引脚 9，echo 引脚表示数字引脚 10。

我们声明了两个变量 —— duration 和 distance —— 用于存储它们各自的值。

我们通过向触发引脚发送 `HIGH` 信号 10 微秒来触发传感器。没有这个，传感器可能无法工作：

```
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
```

我们使用 `pulseIn(echoPin, HIGH)` 函数测量并存储超声波脉冲/信号的持续时间，并将其存储在 `duration` 变量中。

然后我们将持续时间转换为厘米，并将其存储在 `distance` 变量中。

最后，我们通过串行监视器打印距离值，并延迟 1000 毫秒。

此时，你可以将物体放置在靠近或远离传感器的位置，并在串行监视器中看到物体距离的变化。

## 什么是 Arduino 的执行器？

Arduino 中的执行器是将电信号转换为物理/机械运动的组件。

这里列出了一些执行器：

-   LED（发光二极管）：用作光/视觉指示器。
-   蜂鸣器：用于发出声音。
-   继电器模块：用于控制高电压设备。
-   LCD（液晶显示屏）：用作文字、图像、传感器数据等的视觉显示。我们将专门用一章来讲解显示器。
-   伺服电机：用于控制角度或旋转运动（例如机械臂的运动）。

在这一节中，我们将重点介绍蜂鸣器和 LED。

### 如何在 Arduino 中使用 LED

LED 通常是你在 Arduino 中学习的第一个组件。它们易于连接和使用。

下面是一个 LED 的样子：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/redLED.png)

下面是电路连接：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/led-circuit.png)

在上面的电路中，LED 的较长引脚（阳极或正极）连接到数字引脚 7。

较短的引脚（阴极）连接到地。

下面是代码：

```
int redLED = 7;

void setup() {
  pinMode(redLED, OUTPUT);
}

void loop() {
  digitalWrite(redLED, HIGH);
  delay(1000);
  digitalWrite(redLED, LOW);
  delay(1000);
}
```

### 如何在 Arduino 中使用蜂鸣器

你可以使用蜂鸣器来产生声音。一般来说有两种类型的蜂鸣器：有源蜂鸣器和无源蜂鸣器。

有源蜂鸣器通常在供电时会产生预定义的声音，该声音无法修改。有源蜂鸣器内部有一个电路触发声音的产生。

无源蜂鸣器在产生声音方面更灵活一些，因为它们依赖于外部信号。这意味着你可以决定蜂鸣器发出的声音频率（或频率范围）。

蜂鸣器可以用于不同的应用场景，例如：

-   报警系统。
-   家用电器的声音指示器。
-   门铃。
-   通信设备用于指示信号通信的开始/结束，等等。

我们将使用无源蜂鸣器，因为它更具灵活性。它的外观如下：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/buzzer.png)

蜂鸣器有正极和负极。正极连接到数字引脚，负极连接到接地。

这里是电路图：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/buzzer-circuit.png)

在本例中，我们将使用蜂鸣器来发出 DO、RE、MI、FA、SOL、LA、TI 七个音符的声音。

这是代码：

```
int buzzerPin = 7;

int notes[] = {262, 294, 330, 349, 392, 440, 494};

int noteDurations[] = {400, 400, 400, 400, 400, 400, 400};

void setup() {
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  for (int i = 0; i < 8; i++) {
    tone(buzzerPin, notes[i], noteDurations[i]);
    delay(noteDurations[i] + 50);
    noTone(buzzerPin);
  }

  delay(1000);
}
```

在上面的代码中，我们使用 `buzzerPin` 变量表示 Uno 板上的 7 号引脚。

然后我们创建了一个名为 `notes[]` 的数组，存储每个音符的相应频率，以及另一个名为 `noteDurations[]` 的数组，存储蜂鸣器产生每个音符的持续时间。

在 `void loop()` 函数中，我们循环播放每个音符，使用 `tone()` 函数。该函数有三个参数——连接到蜂鸣器的引脚、频率和持续时间。

我们使用 `noTone()` 函数来停止产生声音。最后，我们添加了一个 1000 毫秒的延迟，这是在最后一个音符播放之后从头开始播放音符所需的时间。

如果你按步骤跟着做，那么你就应该能够通过蜂鸣器播放出 DO、RE、MI、FA、SOL、LA、TI 七个音符。

## Arduino 传感器和执行器示例

现在你已经了解了传感器和执行器是什么以及如何使用它们，让我们结合它们在一个项目中使用。

在许多嵌入式系统中，传感器和执行器一起工作来完成特定任务/功能。其工作原理如下：

-   传感器检测/感知环境变化，并向微控制器发送信号以通知检测到的变化。
-   微控制器处理来自传感器的信号。根据现有逻辑（在代码中定义），它将信号发送给执行器。
-   执行器将来自微控制器的信号转换为物理/机械运动。

让我们通过一个示例来演示这些。这个想法是，在黑暗环境中打开 LED 并在有足够光线时关闭它。

传感器将是 LDR 传感器，微控制器将是 Arduino Uno 板/软件，执行器将是 LED。

这里是电路图：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/ldr-led-circuit.png)

这是代码：

```
int redLED = 7;

int ldrPin = A1;
int ldrValue;

void setup() {
  pinMode(ldrPin, INPUT);
  pinMode(redLED, OUTPUT);
  Serial.begin(9600); 
}

void loop() {
  ldrValue = analogRead(ldrPin);

  if (ldrValue > 200) {
    digitalWrite(redLED, LOW);
  } else if (ldrValue < 200) {
    digitalWrite(redLED, HIGH);
  }

  Serial.println(ldrValue);
  delay(1000); 
}
```

像往常一样，我们创建了表示连接到 LED 和 LDR 的 Arduino 引脚的变量。然后在 `setup()` 函数中将 LDR 设置为输入，将 LED 设置为输出。

我们使用 `analogRead()` 函数读取 LDR 的值，并将其存储在 `ldrValue` 变量中。

接下来，我们使用 `if` 语句来检查 LDR 的值。

如果值大于 200，我们关闭 LED。如果值小于 200，我们打开 LED。

# 第六章：如何在 Arduino 中使用串行监视器

串行监视器是每个 Arduino 制作者的有用工具。你可以用它来做各种任务，比如：

-   调试和测试代码/组件。
-   Arduino 板与计算机之间的串行通信。
-   显示传感器和组件的数据和读数。

在这一章中，你将学习如何使用 Arduino IDE 初始化和使用串行监视器。你将学习不同的内置函数，这些函数可用于在 Arduino 板与计算机之间发送和接收数据。

最后，你将构建一个项目，使用从串行监视器发送的值来控制连接到 Arduino 板的特定 LED。

你可以使用 `Serial.begin()` 函数初始化串口监视器。这个函数接收波特率作为参数。语法如下：

```
Serial.begin(baudRate)
```

波特率是 Arduino 板与计算机或其他通过串口监视器与 Arduino 板通信的设备之间的数据传输速度。

最常用的波特率是 9600，但你也会看到利用 115200、57600 和 38400 等不同波特率的资源。无论你在 `Serial.begin()` 函数中指定哪种波特率，都应始终与串口监视器窗口中的波特率匹配。

例如，我们可以在 IDE 中使用 `Serial.begin()` 函数来初始化串口监视器，如下所示：

```
void setup() {
  Serial.begin(9600);

}

void loop() {
  // 这里放置你的主代码，它将重复运行：

}
```

在上述代码中，我们使用 `Serial.begin()` 函数在 `setup()` 函数中以波特率 9600 初始化了串口监视器。

此时，什么都没有发生。你可以通过打开串口监视器窗口来验证波特率是否匹配。一旦打开，你应该能在 IDE 底部看到串口监视器。你会在窗口内看到串口监视器的波特率，通常写成 "9600 baud"。

![Image](https://www.freecodecamp.org/news/content/images/2023/10/baud-rate.PNG) _显示波特率的图片_

如果你使用的是较旧版本的 IDE，串口监视器可能会作为一个单独的窗口弹出。功能还是一样的。

现在我们已经初始化了串口监视器，接下来看看如何通过它发送和接收数据。

## 如何使用串口监视器发送数据

你可以使用 Arduino 中预留用于串口通信的不同内置函数。我们不会讨论所有的内置串口函数，只会看看一些你经常使用或遇到的函数。你可以在[这里][17]查看更多函数。

### `print()` 和 `println()` 函数

`print()` 和 `println()` 函数都可以将数据打印到串口监视器。它们的区别在于 `print()` 在同一行打印数据，而 `println()` 会在每行打印数据。

这里有一些例子：

```
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Hello"); 
  delay(1000);
}
```

在上述代码中，我们使用 `print()` 函数以 1000 毫秒的延迟反复打印 "Hello" 到串口监视器。以下是串口监视器中的输出：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/print.PNG)

这是另一个使用 `println()` 函数的例子：

```
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Hi");
  delay(1000);
}
```

以下是串口监视器中的输出：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/println.PNG)

## 如何使用串口监视器接收数据

我们将在本节讨论四个函数 — `available()`, `readString()`, `parseInt()` 和 `parseFloat()`。你可以在[这里][18]阅读其他串口函数。

### `available()` 函数

`Serial.available()` 函数检查串口中的字符数量。它主要用于仅在串口监视器中有数据时运行代码。

这里是一个代码示例：

```
int userInput;

void setup(){
  Serial.begin(9600);
}

void loop(){
  if (Serial.available() > 0) {
    userInput = Serial.parseInt();

    Serial.println(userInput);
  }

}
```

在上述代码中，`if` 语句中的代码块不会运行，直到串口监视器中的字符数量大于 0。

当你初始化串口监视器时，可读的字符数量为零，因为还没有数据可用。`Serial.available()` 函数会检查并返回串口监视器中可用的字符数。因此，它用于创建仅在有数据时执行代码的逻辑。

### `readString()` 函数

你可以使用 `readString()` 函数读取串口监视器中的字符。它返回一个字符串对象，所以你在串口监视器中输入的任何值/字符在使用 `readString()` 函数时都会被视为字符串值。

```
String userInput;

void setup(){
  Serial.begin(9600);
}

void loop(){
  if (Serial.available() > 0) {
    userInput = Serial.readString();

    Serial.println(userInput);
  }

}
```

### `parseInt()` 函数

`parseInt()` 函数从传入的串行数据中返回有效的整数值。非整数值将返回为 0。

```
int userInput;

void setup(){
  Serial.begin(9600);
}

void loop(){
  if (Serial.available() > 0) {
    userInput = Serial.parseInt();

    Serial.println(userInput);
  }

}
```

### `parseFloat()` 函数

`parseFloat()` 函数从传入的串行数据中返回有效的浮点数。

```
float userInput;

void setup(){
  Serial.begin(9600);
}

void loop(){
  if (Serial.available() > 0) {
    userInput = Serial.parseFloat();

    Serial.println(userInput);
  }

}
```

## 串口监视器项目

在这一节中，你将构建一个使用串口监视器中的字符串值来打开 LED 的项目。我们将使用前几节讨论的一些串口函数。

![Image](https://www.freecodecamp.org/news/content/images/2023/10/serial-communication-project.png)

在上面的电路图中，我们有三个LED灯。红色LED连接到引脚6，蓝色LED连接到引脚5，黄色LED连接到引脚4。

以下是代码：

```
int redLED = 6;
int blueLED = 5;
int yellowLED = 4;

String userInput;

void setup(){
  pinMode(redLED, OUTPUT);
  pinMode(blueLED, OUTPUT);
  pinMode(yellowLED, OUTPUT);
  Serial.begin(9600);

  Serial.println("Choose an LED to turn on from the list below:");
  Serial.println("red");
  Serial.println("blue");
  Serial.println("yellow");
}

void loop(){

  if (Serial.available() > 0) {

    userInput = Serial.readString();

    if (userInput == "red") {
      digitalWrite(redLED, HIGH);
      digitalWrite(blueLED, LOW);
      digitalWrite(yellowLED, LOW);
    } 

    if (userInput == "blue") {
      digitalWrite(redLED, LOW);
      digitalWrite(blueLED, HIGH);
      digitalWrite(yellowLED, LOW);
    }

    if (userInput == "yellow") {
      digitalWrite(redLED, LOW);
      digitalWrite(blueLED, LOW);
      digitalWrite(yellowLED, HIGH);
    }

  }

}
```

让我们分解一下上述代码。

就像电路图中的连接，我们初始化了三个LED，并指定了它们各自的引脚号。我们还创建了一个名为`userInput`的字符串变量，用于存储来自串口监视器的数据：

```
int redLED = 6;
int blueLED = 5;
int yellowLED = 4;
```

然后，我们使用`pinMode()`函数将三个LED配置为输出引脚：

```
pinMode(redLED, OUTPUT);
pinMode(blueLED, OUTPUT);
pinMode(yellowLED, OUTPUT);
```

我们以9600的波特率初始化了串口监视器，并打印了一些字符串，提示用户在串口监视器中使用的预期值：

```
Serial.begin(9600);

Serial.println("Choose an LED to turn on from the list below:");
Serial.println("red");
Serial.println("blue");
Serial.println("yellow");
```

此时，你将在串口监视器中看到如下输出：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/project-output.PNG)

使用`Serial.available()`函数，我们在运行`if`语句中的代码之前检查串行数据的可用性：

```
if (Serial.available() > 0) {
    ...
}
```

接下来的步骤是读取并返回传入的数据作为字符串值，并将数据存储在`userInput`变量中。我们使用`readString()`函数完成了这一步：

```
userInput = Serial.readString();
```

最后，我们使用`if`语句来检查用户通过串口监视器输入/发送的LED颜色值，然后打开/关闭相应的LED：

```
if (userInput == "red") {
  digitalWrite(redLED, HIGH);
  digitalWrite(blueLED, LOW);
  digitalWrite(yellowLED, LOW);
} 

if (userInput == "blue") {
  digitalWrite(redLED, LOW);
  digitalWrite(blueLED, HIGH);
  digitalWrite(yellowLED, LOW);
}

if (userInput == "yellow") {
  digitalWrite(redLED, LOW);
  digitalWrite(blueLED, LOW);
  digitalWrite(yellowLED, HIGH);
}
```

如果你通过串口监视器输入并发送红色（red），红色的LED将会亮起，而其他LED则会熄灭。同样的逻辑适用于发送蓝色（blue）或黄色（yellow）。

# 第七章：如何在 Arduino 中使用显示屏

你可以在 Arduino 中使用显示组件以不同格式（例如文本、图像）直观地表示数据。

显示屏为显示数据提供了串口监视器之外的另一种选择。你可以用它们来显示传感器值、给用户的指示、用户输入等等。

在使用 Arduino 构建时有各种类型的显示组件，但我们将聚焦于LCD（液晶显示屏）。

更具体地说，我们将使用 16 x 2 LCD（HD44780）。它看起来是这样的：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/lcd-component.png)

从上图可以看出，有十六个引脚并且它们有不同的值。我们将使用其中的大部分引脚与 Uno 板连接，使我们能够使用和控制该组件。

通常情况下，有两种连接 LCD 的方法——使用内置库或第三方库。

使用内置的`LiquidCrystal`库，你将使用LCD组件上的大约12个引脚。而使用第三方库如`LiquidCrystal_I2C`，你只需要使用2个引脚。

我们将使用第一种方法——这将帮助你理解这些引脚的工作原理。现在我们来谈谈这些引脚。

## LCD 上的引脚是用来做什么的？

这些引脚控制LCD上的内存管理、数据传输和供电功能。让我们详细谈谈它们：

-   第一个引脚是 GND 引脚，即LCD的接地引脚。它连接到Arduino板上的GND。在一些LCD模块上，可能标记为 VSS。
-   VCC 是电源引脚，连接到Arduino板的5V。在一些LCD模块上，可能标记为 VDD。
-   V0 引脚用于调整LCD的对比度。它连接到一个电位器。调节电位器可以改变显示数据的对比度。
-   RS （寄存器选择）引脚可以用来控制 LCD 的内存。它通常连接到一个数字引脚。
-   RW （读/写）引脚控制是否将数据写入或读取LCD。它通常连接到地（GND），这将LCD设置为写模式——这使你能够发送和显示数据。
-   E （使能）引脚“使能”微控制器（在我们的例子中是 Uno 板）与 LCD 之间的数据传输。它通常连接到一个数字引脚。
-   D0 到 D7（也可以标记为 DB0 到 DB7）是数据引脚。用于以比特方式向 LCD 发送数据。在大多数情况下，使用 D4 到 D7 引脚。主要区别在于使用 D0 到 D3 引脚时数据是4位传输，而使用 D4 到 D7 引脚时数据是8位传输。它们通常连接到数字引脚。
-   LED 引脚用于控制LCD的背光。在一些 LCD 模块上，它们可能标记为 BLA 和 BLK 或 A 和 K。第一个 LED 引脚通过一个电阻器连接到 5V，而第二个 LED 引脚连接到地（GND）。

在上一节中，我们讨论了 LCD 引脚的含义。在这一节中，您将看到一个将其连接到电路中的实际示例，并编写代码在 LCD 上显示数据。

我们将使用以下组件：

-   Arduino Uno。
-   16 x 2 LCD。
-   电位器。
-   跳线。
-   电阻。
-   面包板。

以下是电路图：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/lcd.png)

在上述电路中，我们将 LCD 与 Uno 板进行了以下连接：

-   LCD 的 GND 引脚连接到 Uno 板上的 GND。
-   LCD 的 VCC 引脚连接到 Uno 板上的 5V。
-   V0 引脚连接到电位器。
-   RS 引脚连接到 Uno 板上的数字引脚 4。
-   RW 引脚连接到 Uno 板上的 GND。
-   LCD 的 D4 引脚连接到 Uno 板上的数字引脚 6。
-   LCD 的 D5 引脚连接到 Uno 板上的数字引脚 7。
-   LCD 的 D6 引脚连接到 Uno 板上的数字引脚 8。
-   LCD 的 D7 引脚连接到 Uno 板上的数字引脚 9。
-   第一个 LED 引脚连接到 5V。
-   第二个 LED 引脚连接到 GND。

对于电位器，将其一条外腿（左边或右边均可）连接到 5V，另一条外腿连接到 GND。然后，电位器的中间腿连接到 LCD 的 V0 引脚。这将使您能够调节 LCD 的对比度。

接下来，我们将编写一些代码！

```
#include <LiquidCrystal.h>

LiquidCrystal lcd(4, 5, 6, 7, 8, 9);

void setup() {
  lcd.begin(16, 2);
  lcd.print("freeCodeCamp!");
}

void loop() {

}
```

在上面的代码中，我们首先包含/导入了内置的 `LiquidCrystal` 库，该库可用于使用 Arduino 代码与 LCD 交互：`#include <LiquidCrystal.h>`。

然后我们使用所需的引脚号初始化 `lcd` 对象：`LiquidCrystal lcd(4, 5, 6, 7, 8, 9)`。第一个数字表示 RS 引脚。第二个数字表示 E 引脚。最后四个数字表示数据引脚（D4 到 D7）。

接下来，我们使用 `lcd.begin()` 函数初始化列数和行数：`lcd.begin(16, 2)`。我们有 16 列和 2 行。

`lcd.print` 函数将数据打印到 LCD。如果您已正确连接所有线缆，您应该会在 LCD 上看到 "freeCodeCamp"。

在接下来的示例中，我们将处理用户输入和传感器数据，并看看其他 `lcd` 函数。

## 示例 #2 – 如何在 Arduino 中显示用户输入到 LCD 上

在这个示例中，我们将使用串行监视器接受来自用户的输入，并在 LCD 屏幕上显示输入和欢迎消息。

我们将使用与前一个示例相同的电路。以下是代码：

```
#include <LiquidCrystal.h>
LiquidCrystal lcd(4, 5, 6, 7, 8, 9);

String userInput;

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);

  lcd.print("Input name");

  lcd.setCursor(0, 1);
}

void loop() {
  if (Serial.available() > 0) {

    userInput = Serial.readString();
    lcd.print("Welcome " + userInput);
  }
}
```

在上面的代码中，我们创建了一个名为 `userInput` 的字符串变量，用于存储用户输入的值。

然后我们初始化串行监视器——`Serial.begin(9600);`

接下来，我们使用 `lcd.begin` 函数设置 LCD 的行数和列数。

使用 `lcd.print` 函数，我们在 LCD 屏幕上打印 "Input name"。

接着是 `lcd.setCursor(0, 1)` 函数，它有两个参数——0 和 1。0 表示左边的第一列，而 1 表示第二行。因此，光标将被设置在 LCD 的第二行。

我们将光标设置在第二行，因为第一行已经有一些文本（"Input name"），所以在这种情况下，将消息打印到下一行更为理想。在这个示例之后，我会向您展示另一种方法。

在 `void loop()` 函数中，我们使用 `Serial.readString()` 函数读取用户输入的值，并将其存储在 `userInput` 变量中。

最后，我们在 LCD 上打印欢迎消息和用户名。这将打印在第二行，因为我们将光标设置在那里。

尝试修改代码并查看更改 `lcd.setCursor()` 函数的参数时会发生什么。这将帮助您更好地理解它。

### 示例 #2 替代方法

在同一行显示用户消息的替代方法是使用显示初始消息的同一行。我们可以清除 LCD 第一行上写的内容，并显示不同的值。

方法如下：

```
#include <LiquidCrystal.h>
LiquidCrystal lcd(4, 5, 6, 7, 8, 9);

String userInput;

void setup() {
  Serial.begin(9600);
  lcd.begin(16, 2);

  lcd.print("Input name");
}

void loop() {
  if (Serial.available() > 0) {
    lcd.clear();
    userInput = Serial.readString();
    lcd.print("Welcome " + userInput);
  }
}
```

在这个示例中，我们使用了 `lcd.clear()` 函数清除初始请求消息，并显示/打印对用户的欢迎消息。其余逻辑是相同的。

## 示例 #3 – 在 Arduino 中使用 LCD 显示传感器数据

在这个示例中，我们将在 LCD 屏幕上显示传感器的数据。我们将使用温度传感器。这里的逻辑是检测房间的温度并在 LCD 屏幕上显示变化的值。

我们将使用以下组件：

-   Arduino Uno
-   16 x 2 LCD
-   光敏电阻 (LDR)
-   电位器
-   跳线
-   电阻
-   面包板

这里是电路图：

![Image](https://www.freecodecamp.org/news/content/images/2023/10/lcd-ldr.png)

电路图与前面的示例几乎相同，只是我们添加了一个 LDR 来测量光的强度。使用 LDR，我们将读取、存储和显示光强度的值在 LCD 上。

这是代码：

```
#include <LiquidCrystal.h>
LiquidCrystal lcd(4, 5, 6, 7, 8, 9);

int ldrPin = A1;
int ldrValue;

void setup() {
  pinMode(ldrPin, INPUT);
  lcd.begin(16, 2);
}

void loop() {
  ldrValue = analogRead(ldrPin);

  lcd.clear();
  lcd.setCursor(0, 0);
  lcd.print("LDR value:");

  lcd.setCursor(0, 1);
  lcd.print(ldrValue);

  delay(1000);
}
```

让我们分解一下代码。

我们首先包含了内置的 `LiquidCrystal` 库，并初始化了与 LCD 配合使用的相关引脚（如果你不明白连接和初始化的工作原理，请参考第一个示例）。

然后我们创建了两个变量：`ldrPin` 表示连接到 LDR 的模拟引脚，`ldrValue` 用于存储 LDR 的读数。

在 `void setup()` 中，我们将 LDR 配置为输入引脚，并设置了 LCD 的列和行。

接下来，我们使用 `analogRead` 函数读取 LDR 的值，并将该值存储在 `ldrValue` 变量中。

使用 `lcd.clear()` 函数，我们在每次读取后清除显示。这有助于使读取结果更准确。如果你去掉这个函数，一些值可能仍然会显示在屏幕上，使你的结果看起来不准确（我花了大约三十分钟才搞清楚这个问题 😂）。

之后，我们在 LCD 的第一行和第一列设置光标位置：`lcd.setCursor(0, 0)`，并显示一条信息（“LDR value:”）。

使用 `lcd.setCursor(0, 1)` 函数，我们将光标移到第二行，并使用 `lcd.print(ldrValue)` 在 LCD 上打印/显示 LDR 的值。

最后，我们增加了 1000 毫秒的延迟。

现在你可以看到环境中的光强度值显示在 LCD 上。

你可以使用手电筒来增加或减少 LDR 上的光照，然后观察 LCD 上显示的值变化，非常酷！

# 结论

恭喜！我们已经到达本手册的末尾。你现在有足够的知识来进行更大的项目。

这应该是你的下一个目标——将这些概念应用到对你和你周围的人有帮助的项目中。你可以创造任何东西。你可以先看一些视频，看看别人构建了哪些项目，然后你可以想出自己的项目。

本手册涵盖了 Arduino 的必要部分（硬件和软件），这些都是你作为初学者开始你的旅程所需的。

提高和保持所学内容的最佳方法是实践和构建。

玩得开心！

[1]: #heading-prerequisites
[2]: #heading-chapter-1-getting-started-with-arduino
[3]: #heading-chapter-2-basics-of-arduino-programming
[4]: #heading-chapter-3-how-to-use-digital-pins-in-arduino
[5]: #heading-chapter-4-how-to-use-analog-pins-in-arduino
[6]: #heading-chapter-5-how-to-use-sensors-and-actuators-in-arduino
[7]: #heading-chapter-6-how-to-use-the-serial-monitor-in-arduino-2
[8]: #heading-chapter-7-how-to-use-displays-in-arduino
[9]: https://blog.arduino.cc/2023/06/26/uno-r4-the-new-dimension-of-making/?_gl=1*18ccx2k*_ga*MTkzMTc3MDUxNC4xNjc5NjU4Mzkz*_ga_NEXN8H46L5*MTY4Nzk0Njg3Mi40LjEuMTY4Nzk0ODE3MS4wLjAuMA..
[10]: https://www.arduino.cc/en/software
[11]: https://www.arduino.cc/en/software
[12]: https://docs.arduino.cc/software/ide-v2/tutorials/getting-started-ide-v2
[13]: https://docs.arduino.cc/software/ide-v2/tutorials/getting-started-ide-v2
[14]: https://www.asciitable.com/
[15]: #heading-chapter-6-how-to-use-the-serial-monitor-in-arduino-2
[16]: #heading-chapter-6-how-to-use-the-serial-monitor-in-arduino-2
[17]: https://www.arduino.cc/reference/en/language/functions/communication/serial/
[18]: https://www.arduino.cc/reference/en/language/functions/communication/serial/

