---
title: JavaScript 类手册 – 类字段和 super 关键字完整指南
date: 2024-08-19T08:57:10.891Z
author: Oluwatobi Sofela
authorURL: https://www.freecodecamp.org/news/author/oluwatobiss/
originalURL: https://www.freecodecamp.org/news/javascript-class-handbook/
posteditor: ""
proofreader: ""
---

类允许你将数据私有化，同时为用户提供间接访问它的方法。这是一种防止直接访问构造函数数据的优秀方法。

<!-- more -->

本手册旨在向你展示 JavaScript 中类的工作原理。我们还将讨论类字段和 `super` 关键字。

## 内容目录

1.  [什么是 JavaScript 类？][1]
2.  [为什么在 JavaScript 中使用类？][2]
3.  [JavaScript 类的语法][3]
    -   [什么是 `class` 关键字？][4]
    -   [什么是类名？][5]
    -   [什么是代码块？][6]
    -   [什么是类体？][7]
4.  [什么是 JavaScript 类字段？][8]
    -   [如何在 JavaScript 中创建类字段][9]
    -   [如何创建具有计算名称的类字段][10]
    -   [如何创建常规类字段方法][11]
    -   [如何创建简写类字段方法][12]
    -   [常规与简写类字段方法：有什么区别？][13]
    -   [什么是 JavaScript 类中的用户定义原型方法？][14]
    -   [什么是 JavaScript 类中的 `constructor` 方法？][15]
    -   [类字段的类型][16]
    -   [什么是 JavaScript 类中的公共类字段？][17]
    -   [什么是 JavaScript 类中的私有类字段？][18]
    -   [什么是 JavaScript 类中的静态类字段？][19]
5.  [JavaScript 类的类型][20]
    -   [什么是 JavaScript 类声明？][21]
    -   [什么是 JavaScript 类表达式？][22]
    -   [什么是 JavaScript 中的派生类？][23]
6.  [JavaScript 中的 `super` 关键字是什么？][24]
    -   [如何用作函数调用器使用 `super` 关键字][25]
    -   [如何用作属性访问器使用 `super` 关键字][26]
    -   [`super` 与 `this` 关键字：有什么区别？][27]
7.  [JavaScript 类的组件][28]
8.  [JavaScript 类如何帮助封装？][29]
9.  [关于 JavaScript 类的重要事项][30]
    -   [1\. 在访问类之前声明类][31]
    -   [2\. 类是函数][32]
    -   [3\. 类是严格的][33]
    -   [4\. 在类的 `constructor` 方法中避免使用 `return` 关键字][34]
    -   [5\. 类的评估从 `extends` 子句开始到其值][35]
10.  [概述][36]

所以，让我们从基础开始。

## 什么是 JavaScript 类？

JavaScript 类是一个 [对象构造器][37]，用于通过 [`new` 关键字][38] 创建一个新的对象实例。

这是一个例子：

```
// 定义一个 JavaScript 类：
class Name {}

// 从 Name 类创建一个对象实例：
const yourName = new Name();

// 检查 yourName 的内容：
yourName;

// 上述调用将返回一个空对象：
{ }
```

[**试着编辑它**][39]

上面的代码片段使用 `new` 关键字从 `class` 构造器创建了一个新的对象实例。

**注意：** 调用 JavaScript 类需要使用 `new` 关键字。否则，浏览器将抛出一个 `TypeError`。

## 为什么在 JavaScript 中使用类？

类提供了一种创建对象模板的方法，这些对象通过公共方法访问私有数据。

换句话说，类帮助你 [封装][40] 数据，同时提供用户间接访问实例内部工作方式的方法。这使你能够提供一个独立于对象内部实现的干净友好的界面。

例如，[`Date`][41] 是一个 JavaScript 类，它允许你通过其公共方法（如 `getDate()`、`setDate()` 和 `getFullYear()`）访问其日期数据。

## JavaScript 类的语法

```
class NameOfClass {
  // 类体
}
```

一个类由四个组件组成：

1.  一个 `class` 关键字
2.  类的名字
3.  一个代码块（`{...}`）
4.  类体

让我们讨论每个组件。

### 什么是 `class` 关键字？

我们使用 `class` 关键字向浏览器声明一段特定的代码是 JavaScript 类，而不是数学或其他通用类。

### 什么是类名？

类名允许你为类创建一个标识符，你可以用它来引用类。

**注意：** 开发人员通常使用大写字母开始类名。这种约定有助于将构造函数与其他函数区分开来。

### 什么是代码块？

代码块是一对大括号（`{...}`），用于将多条语句组合在一起。

这是一个例子：

```
{
  var bestColor = "White";
}
```

上面的代码片段中的代码块包含了一条 [JavaScript 语句][42]。

这是另一个例子：

```
if (new Date().getHours() < 18) {
  const hourNow = new Date().getHours();
  const minutesNow = new Date().getMinutes();
  const secondsNow = new Date().getSeconds();
  console.log(`Check your plans now. The time is ${hourNow}:${minutesNow}:${secondsNow}.`);
}
```

`if` 条件的代码块将四个 JavaScript 语句组合在一起。

```
class Time {
  hourNow = new Date().getHours();
  minutesNow = new Date().getMinutes();
  secondsNow = new Date().getSeconds();
}

if (new Date().getHours() < 18) {
   const currentTime = new Time();
   console.log(`Check your plans now. The time is ${currentTime.hourNow}:${currentTime.minutesNow}:${currentTime.secondsNow}.`);
}
```

`Time` 类的代码块将三个 JavaScript 语句分组，而 `if` 条件的代码块将两个语句分组。

注意以下几点：

-   `hourNow`、`minutesNow` 和 `secondsNow` 是类字段（属性）。
-   上面的代码片段使用 `new` 关键字从 `Time` 类构造了一个新对象。因此，`currentTime` 对象是 `Time` 构造类的一个实例。

### 什么是类主体？

类主体是您放置一系列语句的地方。

语法如下：

```
class NameOfClass {
  // 类的主体
}
```

**注意：** 类的主体只包含类字段。但究竟什么是类字段呢？让我们找出答案。

## 什么是 JavaScript 类字段？

类字段是直接在类主体内定义的属性——不在类的任何[方法][43]内。

### 如何在 JavaScript 中创建类字段

您可以使用等号（`=`）而不是冒号（`:`）为属性分配值来创建类字段。

这是一个例子：

```
// 定义一个 JavaScript 类：
class Name {
  // 创建两个类字段：
  firstName = "Oluwatobi";
  lastName = "Sofela";
}

// 创建一个新的对象实例：
const fullName = new Name();

console.log(fullName.firstName + " " + fullName.lastName);
```

[**试着编辑它**][44]

上面的代码片段中的 `Name` 类有两个类字段（`firstName` 和 `lastName`）。

注意以下几点：

-   如果您不提供任何值，JavaScript 类字段默认值为 `undefined`。
-   类字段类似于常规对象属性[properties][45]，其名称可以被计算[compute][46]。让我们讨论如何实现这一点。

### 如何创建具有计算名称的类字段

您可以通过将表达式放在方括号中来计算（求值）类字段的名称，如下所示：

```
// 使用一个数字初始化 num 变量：
let num = 0;

// 给 enSuites 变量分配一个字符串值：
const enSuites = "East";

// 定义一个 Room 类并计算它的每个类字段的名称：
class Room {
  [enSuites + ++num] = num;
  [enSuites + ++num] = num;
  [enSuites + ++num] = num;
}

// 创建一个 ensuiteRooms 对象实例：
const ensuiteRooms = new Room();

// 查看 ensuiteRooms 的内容：
console.log(ensuiteRooms);

// 上面的调用将返回：
{East1: 1, East2: 2, East3: 3}
```

[**试着编辑它**][47]

我们在上面的代码片段中使用了 `[enSuites + ++num]` 语法来计算类字段的名称。

换句话说，JavaScript 计算了 `enSuites + ++num` 表达式，并将结果用作每个类字段的名称。

**注意：** 您也可以将类字段定义为常规 JavaScript 方法。让我们现在详细讨论这一点。

### 如何创建常规类字段方法

您可以通过使用等号（`=`）将函数分配给一个属性来创建一个常规类字段方法。

这是一个例子：

```
// 定义一个 JavaScript 类：
class Time {
  // 创建两个常规类字段方法：
  hourNow = function() {
    return new Date().getHours();
  }
  minutesNow = function() {
    return new Date().getMinutes();
  }
}

// 创建一个新的对象实例：
const currentTime = new Time();

console.log(`The time is ${currentTime.hourNow()}:${currentTime.minutesNow()}.`);
```

[**试着编辑它**][48]

上面代码片段中的 `hourNow` 和 `minutesNow` 方法是类字段方法，因为它们是包含常规 JavaScript 函数的属性。

JavaScript 允许您使用简写语法来缩短类的方法。让我们看看如何实现这一点。

### 如何创建简写类字段方法

简写类字段方法是在类主体内定义 JavaScript 方法的一种简洁方式。

这是一个例子：

```
// 定义一个 JavaScript 类：
class Time {
  // 创建两个简写类字段方法：
  hourNow() {
    return new Date().getHours();
  }
  minutesNow() {
    return new Date().getMinutes();
  }
}

// 创建一个新的对象实例：
const currentTime = new Time();

console.log(`The time is ${currentTime.hourNow()}:${currentTime.minutesNow()}.`);
```

[**试着编辑它**][49]

尽管您可以在类主体内互换使用常规方法和简写方法，但您应该了解两种语法之间的重要区别。让我们现在讨论一下。

### 常规方法与简写方法的区别是什么？

常规方法和简写方法之间的主要区别是：

-   常规方法是[实例属性][50]，而简写方法是[原型属性][51]。

换句话说，JavaScript 以不同的方式处理常规方法和简写方法，如下所示：

-   **常规方法：** JavaScript 将方法添加到使用 `new` 关键字构造的[对象实例][52]中。因此，常规方法是对象实例的属性。
-   **简写方法：** JavaScript 将方法添加到类的[`prototype` 属性][53]中。因此，简写方法是对象实例的原型属性。
```

```
// 定义一个 JavaScript 类:
class Time {
  // 创建一个常规方法:
  hourNow = function() {
    return new Date().getHours();
  }
  // 创建一个简写方法:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// 创建一个新的对象实例:
const currentTime = new Time();

// 检查 currentTime 的内容:
console.log(currentTime);

// 上面的调用将返回:
{ hourNow: hourNow() }
```

[**尝试编辑**][54]

`currentTime` 对象实例仅包含 `hourNow` 属性，因为常规方法是实例属性，`new` 关键字将其分配给从其构造类构造的对象。

另一方面，简写方法是原型方法，JavaScript 将其添加到你定义的类的 `prototype` 属性。

因此，你可以通过其类的[原型继承][55]访问 `minuteNow` 方法，如下所示:

```
// 定义一个 JavaScript 类:
class Time {
  // 创建一个常规方法:
  hourNow = function() {
    return new Date().getHours();
  }
  // 创建一个简写方法:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// 检查 Time 的原型内容:
console.log(Time.prototype);

// 上面的调用将返回:
{...}:
  constructor: class Time {}
  minutesNow: function minutesNow()
  [[Prototype]]: Object {...}
```

[**尝试编辑**][56]

你可以看到 `Time` 的 `prototype` 属性包含 `minutesNow` 方法，所有对象实例将自动继承该方法。

下面是一个示例:

```
// 定义一个 JavaScript 类:
class Time {
  // 创建一个简写方法:
  minutesNow() {
    return new Date().getMinutes();
  }
}

// 从 Time 类创建一个对象实例:
const currentTime = new Time();

// 检查 currentTime 的内容:
console.log(currentTime);

// 上面的调用将返回一个空对象:
{ }

// 调用 currentTime 的 minutesNow 方法:
console.log(currentTime.minutesNow());
```

[**尝试编辑**][57]

`currentTime.minutesNow()` 代码返回了一个有效值，因为 `currentTime` 继承了其构造函数的 `prototype` 属性中的 `minuteNow()` 方法。

**注意:** JavaScript 类有两种类型的原型方法:

- 用户定义的方法
- 构造函数方法

现在让我们讨论这两种类型。

### 什么是 JavaScript 类中的用户定义原型方法？

用户定义的原型方法是你自己在 JavaScript 类体内创建的简写方法。

下面是一个示例:

```
// 定义一个 JavaScript 类:
class Name {
  // 创建一个简写方法:
  firstName(name) {
    return name;
  }
}

// 从 Name 类创建一个对象实例:
const myName = new Name().firstName("Oluwatobi");

// 将 myName 的内容记录到控制台:
console.log(myName);

// 上面的调用将返回:
"Oluwatobi"
```

[**尝试编辑**][58]

`firstName()` 方法是用户定义的方法，因为我们在 `Name` 类的体内自己创建了它。

## 什么是 JavaScript 类中的构造函数方法？

`constructor()` 是每个 JavaScript 类内置的默认原型方法。

创建 `constructor` 方法是可选的。不过，如果你没有创建一个，JavaScript 会自动添加一个空的。

`constructor` 方法会自动接收你传递给类的[参数][59]。因此，它是定义依赖于[类调用者][60]参数的类字段的理想位置。

下面是一个示例:

```
// 定义一个 JavaScript 类:
class Name {
  // 使用内置构造函数方法:
  constructor(name) {
    this.name = name;
  }
}

// 从 Name 类创建一个对象实例:
const myName = new Name("Oluwatobi");

// 将 myName 的内容记录到控制台:
console.log(myName);

// 上面的调用将返回:
{ name: "Oluwatobi" }
```

[**尝试编辑**][61]

上面的 `Name` 类有一个代码块中带有一个[实例属性][62]的 `constructor` 方法。

**提示:** `constructor()` 方法的 `this` 关键字指的是类的对象实例。

JavaScript 在任何其他用户定义的方法之前执行 `constructor` 方法。因此，它是定义你想要在类体中的其他方法之前运行的任何代码的最佳位置。例如，考虑下面的代码:

```
// 定义一个 JavaScript 类:
class CarColor {
  // 使用内置构造函数方法:
  constructor(color) {
    this.carColor = `${color} car`;
  }
  // 创建一个简写方法:
  revealColor() {
    console.log(`I have a ${this.carColor}`);
  }
}

// 从 CarColor 类创建一个对象实例:
const myCarColor = new CarColor("white");

// 调用 myCarColor 的 revealColor 原型方法:
myCarColor.revealColor();

// 上面的调用将返回:
"I have a white car"
```

[**尝试编辑**][63]

上面的代码段在创建 `myCarColor` 对象实例时自动调用 `constructor` 方法。

因此，计算机在执行 `myCarColor.revealColor()` 代码之前处理 `constructor` 的语句。

请注意以下事项:

- 你只能使用[JavaScript 方法简写][64]技术来定义 `constructor`。否则，浏览器会抛出 `Uncaught SyntaxError`。
- 一个类只能有一个 `constructor` 方法。否则，浏览器会抛出 `Uncaught SyntaxError`。
```

## 类字段的类型

类字段的三种类型是：

- 公共类字段
- 私有类字段
- 静态类字段

让我们讨论每种类型。

### 什么是 JavaScript 类中的公共类字段？

公共类字段是对象实例可以访问的属性。

**提示：** 尽管您可以定义多个具有相同名称的公共类字段，但最后一个字段将覆盖之前的字段。

#### 示例：如何创建公共类字段

```javascript
// 定义一个 JavaScript 类：
class Name {
  // 创建两个公共类字段：
  myName = "Oluwatobi";
  updateMyName(name) {
    this.myName = name;
  }
}

// 创建一个新的对象实例：
const author = new Name();

// 检查 myName 的当前值：
author.myName;

// 上述调用将返回：
"Oluwatobi"

// 使用 author 变量的属性修改 myName 的值：
author.myName = "Sofela";

// 检查 myName 的当前值：
author.myName;

// 上述调用将返回：
"Sofela"

// 使用 author 变量的方法更新 myName 的值：
author.updateMyName("CodeSweetly");

// 检查 myName 的当前值：
author.myName;

// 上述调用将返回：
"CodeSweetly"
```

[**尝试编辑它**][65]

上面的代码片段中的 `Name` 类包含公共类字段，因为您可以使用类的对象实例来访问和修改这两个属性。

如果您定义多个同名的公共类字段，则最后一个字段将覆盖之前的字段。

#### 示例：最后一个公共类字段会覆盖之前的同名字段

```javascript
// 定义一个 JavaScript 类：
class Name {
  // 创建三个公共类字段：
  myName = "Oluwatobi";
  myName = "Sofela";
  myName = "CodeSweetly";
}

// 创建一个新的对象实例：
const author = new Name();

// 检查 myName 的当前值：
author.myName;

// 上述调用将返回：
"CodeSweetly"
```

[**尝试编辑它**][66]

上面的代码片段返回了 `"CodeSweetly"`，因为最后一个 `myName` 公共类字段覆盖了之前声明的字段。

### 什么是 JavaScript 类中的私有类字段？

私有类字段是只能在类内部访问和修改的属性。

您可以在类字段前加上井号 (`#`) 符号使其成为私有属性。

**提示：** 私有类字段名称必须是唯一的。您不能在同一个类中重新声明私有字段，否则浏览器将抛出 `Uncaught SyntaxError`。

#### 示例：如何创建私有类字段

```javascript
// 定义一个 JavaScript 类：
class Name {
  // 创建一个私有类字段：
  #myName = "Oluwatobi";
}

// 创建一个新的对象实例：
const author = new Name();

// 检查 myName 的当前值：
author.myName;

// 上述调用将返回：
undefined
```

[**尝试编辑它**][67]

上面的代码片段返回了 `undefined`，因为 `myName` 是一个私有类字段，只能在类内部读取和修改。

因此，您需要使用内部代码来访问 `myName`。

#### 示例：如何访问私有类字段

```javascript
// 定义一个 JavaScript 类：
class Name {
  // 创建一个私有类字段：
  #myName = "Oluwatobi";

  // 创建一个公共类字段：
  fullName = `${this.#myName} Sofela`;

  // 创建另一个公共类字段：
  showMyName() {
    return this.#myName;
  }
}

// 创建一个新的对象实例：
const author = new Name();

// 检查 fullName 的当前值：
author.fullName;

// 上述调用将返回：
"Oluwatobi Sofela"

// 检查 myName 的当前值：
author.showMyName();

// 上述调用将返回：
"Oluwatobi"
```

[**尝试编辑它**][68]

**注意：**

- `constructor()` 方法只能是公开的。如果您将其定义为私有类字段，浏览器将抛出 `Uncaught SyntaxError`。
- 您不能在类外创建私有类字段。例如，编写 `author.#wifeName = "Sarah"` 会抛出 `Uncaught SyntaxError`。
- 私有类字段使 JavaScript 类中的数据封装成为可能。

### 什么是 JavaScript 类中的静态类字段？

静态类字段是只能直接从类自身访问和修改的属性。

换句话说，JavaScript 将静态字段解释为类自身的属性，而不是 [实例][69] 或 [原型][70] 属性。

因此，类的实例或 `prototype` 对象不能访问静态类字段。

**提示：**

- 尽管您可以定义多个具有相同名称的静态类字段，但最后一个字段将覆盖之前的字段。
- JavaScript 不会将静态字段添加到 `prototype` 属性中。它们仍留在类的主体中作为它自己的属性。因此，它们非常适合您希望避免在类的实例对象中复制的属性。

我们在类字段前加上 `static` 关键字使其成为静态属性。

#### 示例：如何创建静态类字段

```javascript
// 定义一个 JavaScript 类：
class Name {
  // 创建一个静态类字段：
  static myName = "Oluwatobi";
}

// 创建一个新的对象实例：
const author = new Name();

// 检查 myName 的当前值：
author.myName;

// 上述调用将返回：
undefined
```

[**尝试编辑它**][71]

上面的代码片段返回了 `undefined`，因为 `myName` 是一个静态类字段，只能通过类自身读取和修改，而不是通过其实例。

换句话说，您需要在类自身上调用 `myName` 才能读取或修改它。

#### 示例：如何访问静态类字段

```
// 检查 myName 的当前值：
Name.myName;

// 上面的调用将返回：
"Oluwatobi"
```

[**试着编辑它**][72]

假设你定义了多个具有相同名称的静态类字段。在这种情况下，最后一个属性将覆盖之前的属性。

#### 示例：最后一个静态类字段覆盖之前具有相同名称的字段

```
// 定义一个 JavaScript 类：
class Name {
  // 创建静态类字段：
  static myName = "Oluwatobi";
  static myName = "Sofela";
  static myName = "CodeSweetly";
}

// 检查 myName 的当前值：
Name.myName;

// 上面的调用将返回：
"CodeSweetly"
```

[**试着编辑它**][73]

上面的代码段返回了 `"CodeSweetly"`，因为最后一个 `myName` 静态类字段覆盖了之前声明的字段。

现在我们已经了解了 JavaScript 类的组成部分，我们可以讨论它的类型。

## JavaScript 类的类型

JavaScript 类有三种类型：

-   类声明
-   类表达式
-   派生类

让我们来讨论每种类型。

### 什么是 JavaScript 类声明？

类声明是指创建一个类而不将其赋值给一个[变量][74]。

我们有时也称类声明为“类定义”或“类语句”。

这是一个示例：

```
class Numbers {}
```

上面的类是一个类声明，因为我们在没有存储到变量中的情况下定义了它。

### 什么是 JavaScript 类表达式？

类表达式是指创建一个类并将其赋值给一个变量。

这是一个示例：

```
const myClassExpr = class Numbers {};
```

上面的类是一个命名类表达式，我们将其赋值给了变量 `myClassExpr`。

**注意：**你只能在类的主体内使用类表达式的名称。换句话说，JavaScript 允许你在类的主体内互换使用 `myClassExpr` 和 `Numbers`。然而，只有 `myClassExpr` 可以在类外调用。否则，浏览器将抛出 `ReferenceError`。

你也可以将上面的代码段写成匿名类表达式，如下所示：

```
const myClassExpr = class {};
```

上面的类是一个赋值给了变量 `myClassExpr` 的匿名函数表达式。

**提示：**

-   匿名类是没有名称的类。
-   命名类是有名称的类。

现在让我们讨论派生类。

### 什么是 JavaScript 的派生类？

派生类是继承现有类的[公共][75]和[静态][76]特性的类。

换句话说，派生类是父类的子类。

**重要提示：** 派生类_不能_访问其父类的[私有特性][77]。

#### 派生类的语法

我们使用 `extends` 关键字来创建派生类。

**提示：** JavaScript 中的 `extends` 关键字使一个类成为另一个构造函数的子类。换句话说，`extends` 关键字将一个构造函数（类或函数）分配为指定类的[原型][78]。

语法如下：

```
class DerivedClass extends BaseClass {
  // 派生类的主体
}
```

-   派生类有时称为子类。
-   基类有时称为父类。
-   你可以扩展任何符合以下条件的构造函数（类或函数）：
    -   你可以使用 `new` 关键字从中创建一个对象实例。
    -   它有一个 [`prototype`][79] 属性。
    -   它的 `prototype` 属性值是一个[对象][80]或 `null`。

一旦你将子类扩展到父类，派生类将继承其基类的所有公共和静态类字段。

#### 示例：如何在派生类中使用基类的特性

```
// 创建一个新类：
class Name {
  // 创建一个公共类字段：
  myName = "Oluwatobi";
}

// 创建一个派生类：
class Bio extends Name { }

// 创建一个新的对象实例：
const myBio = new Bio();

// 检查 myBio 的当前值：
myBio;

// 上面的调用将返回：
{ myName: "Oluwatobi" }
```

[**试着编辑它**][81]

`Bio` 类继承了父类的属性，因为我们使用 `extends` 关键字将 `Name` 类分配为派生类的原型。

**注意：**派生类的类字段将覆盖其父类中具有相同名称的属性。例如，考虑以下代码：

```
// 创建一个新类：
class Name {
  myName = "Oluwatobi";
}

// 创建一个派生类：
class Bio extends Name {
  myName = "Sofela";
}

// 创建一个新的对象实例：
const myBio = new Bio();

// 检查 myBio 的当前值：
myBio;

// 上面的调用将返回：
{ myName: "Sofela" }
```

[**试着编辑它**][82]

JavaScript 还允许你使用 `super` 关键字从派生类访问父类的静态或原型类字段。现在让我们详细讨论一下。

## 什么是 JavaScript 中的 `super` 关键字？

`super` 关键字在父类或对象字面量中搜索指定的静态或原型属性。

例如，考虑以下代码段：

```
// 创建一个新类：
class Name {
  constructor() {
    console.log("Oluwatobi 是我的名字");
  }
}

// 创建一个子类：
class Bio extends Name {
  constructor() {
    // 使用 super 访问父类的构造函数：
    super();
  }
}
```

```md
// 上述代码将返回：
"Oluwatobi 是我的名字。"
{}
```

[**试试编辑它**][83]

上面的代码片段中的 `super()` 函数调用告诉计算机在父类的原型链中找到一个 `constructor`。

你可以使用 `super` 关键字作为“函数调用器”或“属性访问器”。让我们来讨论一下如何使用。

### 如何将 `super` 关键字用作函数调用器

`super()` 函数调用器会查找并调用父类的 `constructor()` 方法。

换句话说，`super()` 允许你从派生类的 `constructor` 访问父类的 `constructor`。

#### `super` 关键字作为函数调用器的语法

```
super(argument1, …, argumentN);
```

**注意：** `super()` 函数调用器只在派生类的 `constructor()` 方法中有效。

#### 示例：如何使用 `super()` 函数调用器

```js
// 创建一个新类：
class Name {
  constructor(name) {
    this.name = name;
  }
}

// 创建一个派生类：
class Bio extends Name {
  constructor(firstName) {
    // 使用 super 访问父类的构造函数：
    super(firstName);
  }
}

// 创建一个新的对象实例：
const myBio = new Bio("Oluwatobi");

// 检查 myBio 的当前值：
myBio;

// 上述调用将返回：
{ name: "Oluwatobi" }
```

[**试试编辑它**][84]

上面的代码片段中的 `super()` 函数调用告诉计算机查找并调用父类的 `constructor()`。

换句话说，`super()` 函数调用会在 `Name` 的原型链中搜索 `constructor`。

**注意以下事项：**

-   调用 `super()` 允许 JavaScript 使用父类的 `constructor` 来初始化 `this`。所以，`super()` 函数调用类似于编写 `this = new ParentClass()`。
-   在使用 [关键字][85] `this` 之前，JavaScript 要求你调用 `super()`。否则，浏览器将抛出 `ReferenceError`。换句话说，派生类的 `constructor` 不能访问未初始化的关键字 `this`。

#### 示例：如果在派生类的 `constructor` 中在调用 `super` 之前访问 `this` 会发生什么？

```js
// 创建一个新类：
class Name {
  constructor(name) {
    this.name = name;
  }
}

// 创建一个派生类：
class Bio extends Name {
  constructor(firstName) {
    this.lastName = "Sofela"; // 在 super 之前使用关键字 this 将导致浏览器抛出 ReferenceError:
    super(firstName);
  }
}

// 创建一个新的对象实例：
const myBio = new Bio("Oluwatobi");
```

[**试试编辑它**][86]

上面的代码片段会抛出 `Uncaught ReferenceError`，因为派生类的 `constructor` 不能在 `super()` 函数调用器之前访问关键字 `this`。

#### 示例：如果在派生类的 `constructor` 中仅使用 `this` 关键字会发生什么？

```js
// 创建一个新类：
class Name {
  createName() {
    return "Sofela";
  }
}

// 创建一个派生类：
class Bio extends Name {
  constructor() {
    this.firstName = "Oluwatobi"; // 在 super 之前使用关键字 this 将导致浏览器抛出 ReferenceError:
  }
}

// 创建一个新的对象实例：
const myBio = new Bio();
```

[**试试编辑它**][87]

上面的代码片段会抛出 `Uncaught ReferenceError`，因为派生类的 `constructor` 不能在 `super()` 函数调用器之前访问关键字 `this`。

现在我们知道如何将 `super` 关键字用作函数调用器，让我们讨论如何将其用作属性访问器。

### 如何将 `super` 关键字用作属性访问器

你可以在你的 JavaScript 类和对象字面量中将 `super` 关键字用作属性访问器。

-   **类使用：** `super` 关键字在类的父类中搜索指定的静态或原型类字段。换句话说，`super` 允许你从子类访问父类的静态或原型属性。
-   **对象字面量使用：** `super` 关键字在对象的父对象中搜索指定的原型属性。换句话说，`super` 允许你从子对象访问父对象的原型属性。

#### `super` 关键字作为点符号属性访问器的语法

```
super.parentClassOrObjectProperty;
```

#### 示例：使用 `super` 关键字的点符号访问父类的静态字段

```js
// 创建一个新类：
class Name {
  // 创建一个静态类字段：
  static myName = "Oluwatobi";
}

// 创建一个派生类：
class Bio extends Name {
  // 从父类的静态类字段创建一个静态属性：
  static firstName = super.myName;
}

// 检查 firstName 的当前值：
Bio.firstName;

// 上述调用将返回：
"Oluwatobi"
```

[**试试编辑它**][88]

我们在上面的代码片段中使用 `super` 关键字访问父类的静态类字段。

**注意：** 在 `firstName` 语句前加上 `static` 关键字使 `super` 在父类中查找一个 `myName` [静态属性][89]。

假设你忽略了 `static` 关键字。在这种情况下，`super` 将在父类中搜索一个 `myName` [原型属性][90]。

#### 示例：使用 `super` 关键字的点符号访问父类的原型字段

```js
// 创建一个新类：
class Time {
  // 创建一个原型方法：
  hourNow() {
    return new Date().getHours();
  }

  // 创建第二个原型方法：
  minutesNow() {
    return new Date().getMinutes();
  }
}

// 创建一个派生类：
class Moment extends Time {
  // 使用父类的原型方法创建一个实例属性：
  currentMoment = `The time is ${super.hourNow()}:${super.minutesNow()}.`
}

// 创建一个新的对象实例：
const momentNow = new Moment();
```

[**试着编辑它**][91]

我们在上面的代码片段中使用了 `super` 关键词来访问父类的原型类字段。

#### 示例：使用 `super` 关键词的点符号访问父对象的原型属性

```
// 创建一个新对象：
const website = {
  // 创建一个方法：
  showName() {
    return "CodeSweetly";
  }
}

// 创建另一个对象：
const company = {
  // 创建一个方法：
  showCompany() {
    return super.showName();
  }
}

// 将公司的 dunder proto 改为 website 对象：
Object.setPrototypeOf(company, website);

// 调用 showCompany 方法：
company.showCompany()

// 上面的调用将返回：
"CodeSweetly"
```

[**试着编辑它**][92]

我们在上面的代码片段中使用了 `super` 关键词来访问父对象的 `showName()` 方法。

**注意：** `Object.setPrototypeOf()` 代码将公司的 [`[[Prototype]]` 属性][93] 更改为 website 对象。因此，`company` 对象的[原型链][94] 将如下所示：

```
{ showCompany: showCompany() } ---> { showName: showName() } ---> Object.prototype ---> null
```

你也可以使用 `super` 关键词作为括号符号属性访问器来搜索父类或对象字面量中的指定静态或原型属性。

#### `super` 关键词作为括号符号属性访问器的语法

```
super[表达式];
```

#### 示例：使用 `super` 关键词的括号符号来访问父类的静态字段

```
// 创建一个新类：
class Name {
  // 创建一个静态类字段：
  static myName = "Oluwatobi";
}

// 创建一个派生类：
class Bio extends Name {
  // 创建一个静态属性，从父类的静态类字段中获取：
  static firstName = super["myName"];
}

// 检查 firstName 的当前值：
Bio.firstName;

// 上面的调用将返回：
"Oluwatobi"
```

[**试着编辑它**][95]

我们在上面的代码片段中使用了 `super` 关键词来访问父类的静态类字段。

**注意：** `super` 不能访问父类的实例类字段，因为 JavaScript 在对象实例上设置实例属性，而不是类本身或其原型链上。（`super` 仅搜索父类的静态或原型属性。）

#### 示例：使用 `super` 关键词来访问父类的实例字段

```
// 创建一个新类：
class Name {
  // 创建一个实例类字段：
  myName = "Oluwatobi";
}

// 创建一个派生类：
class Bio extends Name {
  // 创建一个实例属性，从父类的实例类字段中获取：
  firstName = super.myName;
}

// 创建一个新对象实例：
const myBio = new Bio();

// 检查 myBio 的当前值：
myBio;

// 上面的调用将返回：
{ myName: "Oluwatobi", firstName: undefined }
```

[**试着编辑它**][96]

`firstName` 属性的值是 `undefined`，因为 `super` 无法在父类上找到一个原型 `myName` 字段。

**注意：** 关键词 `super` 和 `[this](https://codesweetly.com/javascript-this-keyword)` 允许你在对象的原型链中搜索指定的属性。但它们的工作方式不同。让我们现在讨论它们的不同之处。

### `super` 和 `this` 关键词：有什么区别？

`super` 和 `this` 关键词的区别如下：

- `super` 搜索父类的原型链中的指定原型属性。
- `this` 从类的对象实例的自身属性开始到其原型链中搜索指定的原型属性。

换句话说，`super` 从父类的 `prototype` 属性开始搜索。但 `this` 从对象实例的局部范围到其原型链中搜索。

例如，考虑以下代码：

```
// 创建一个新类：
class ParentClass {
  // 创建一个原型方法：
  showId() {
    return "I am a parent.";
  }
}

// 创建一个派生类：
class ChildClass extends ParentClass {
  // 创建一个原型方法：
  showId() {
    return "I am a child.";
  }
  // 创建另一个原型方法：
  getId() {
    console.log(super.showId());
    console.log(this.showId());
  }
}

// 创建一个新对象实例：
const instanceObject = new ChildClass();

// 调用 instanceObject 的 getId() 方法：
instanceObject.getId();

// 上面的调用将返回：
"I am a parent."
"I am a child."
```

[**试着编辑它**][97]

以下是 `super` 和 `this` 进行搜索的方式：

|   | super | this |
|---|---|---|
| 1. | 在 `ParentClass` 的原型链中，从 `ParentClass.prototype` 开始查找 `showId()`。_找到了。_ | 在 `instanceObject` 的自身属性中查找 `showId()` 。_没找到。_ |
| 2. | （假设 `showId()` 不在 `ParentClass.prototype` 中。在这种情况下，`super` 将继续在 `Object.prototype` 中搜索。）| 在 `instanceObject` 的原型链中，从 `ChildClass.prototype` 开始查找 `showId()` 。_找到了。_ |
| 3. |  | （假设 `showId()` 不在 `ChildClass.prototype` 中。在这种情况下，`this` 将继续在 `ParentClass.prototype` 中搜索。） |
| 4. |  | （假设 `showId()` 不在 `ChildClass.prototype` 和 `ParentClass.prototype` 中。在这种情况下，`this` 将继续在 `Object.prototype` 中搜索。） |



现在我们知道如何使用三种类型的 JavaScript 类，让我们来看看完整的一部分的主要组件。

## JavaScript 类的组件

JavaScript 类的主要特性如下：

1.  一个 `class` 关键字
2.  类的名称
3.  `extends` 子句
4.  一个代码块 (`{...}`)
5.  类的主体
6.  一个 `constructor` 方法
7.  `super()` 函数调用
8.  `super` 属性访问器
9.  实例类字段
10. 原型类字段
11. 私有类字段
12. 静态类字段
13. 静态初始化块

让我们看看这些特性在类声明中的表现。

```
class ChildClass extends ParentClass {
  constructor(parameter) {
    super(parameter);
  }
  instanceClassField = "值可以是任何有效的 JavaScript 数据类型";
  prototypalClassField() {
    // prototypalClassField的主体
  }
  #privateClassField = "值可以是任何有效的 JavaScript 数据类型";
  static classField = "值可以是任何有效的 JavaScript 数据类型";
  static classFieldWithSuperValue = super.parentProperty;
  static #privateClassField = "值可以是任何有效的 JavaScript 数据类型";
  static {
    // 静态初始化块的主体
  }
}
```

上述代码片段的构造函数等价代码如下：

```
function ChildClass() {
  this.instanceClassField = "值可以是任何有效的 JavaScript 数据类型";
}

Object.setPrototypeOf(ChildClass, ParentClass);

ChildClass.prototype.prototypalClassField = function () {
  // prototypalClassField的主体
}

ChildClass.staticClassField = "值可以是任何有效的 JavaScript 数据类型";

ChildClass.staticClassFieldWithSuperValue = Object.getPrototypeOf(ChildClass).parentProperty;

(function () {
  // 静态初始化块的主体
})();
```

**注意：** 你目前不能在构造函数中创建私有字段。它们是 JavaScript 在类中引入的最新特性之一。

## JavaScript 类如何有助于封装？

类可以让你阻止外部代码与内部类字段交互。相反，外部代码将使用公共方法来操作类的内部实现。

例如，考虑以下代码：

```
// 创建一个新类：
class Name {
  // 创建一个私有类字段数据：
  #myName = "Oluwatobi";

  // 创建一个公开可用的方法：
  showMyName() {
    return this.#myName;
  }

  // 再创建一个公开可用的方法：
  updateMyName(value) {
    this.#myName = value;
  }
}

// 创建一个新对象实例：
const bio = new Name();

// 检查实例的数据值：
bio.myName;

// 上述调用将返回：
undefined
```

[**尝试编辑它**][98]

上述代码片段封装了 `Name` 的数据，因为它将 `myName` 定义为一个私有特性，并提供两个公共方法让用户读取和更新类的内部实现。

因此，`bio` 实例对象对类的内部数据一无所知，无法直接与之交互。

每当用户需要访问封装的数据时，他们将像这样使用公开的方法：

```
// 检查实例的数据值：
bio.showMyName();

// 上述调用将返回：
"Oluwatobi"

// 更新实例的数据值：
bio.updateMyName("Sofela");

// 检查实例的数据值：
bio.showMyName();

// 上述调用将返回：
"Sofela"
```

[**尝试编辑它**][100]

封装你的数据是保持类干净的极好方法。它可以防止小的内部重构导致用户代码崩溃。

例如，考虑以下代码：

```
// 创建一个新类：
class Name {
  // 创建一个公共类字段数据：
  myName = "Oluwatobi";
}

// 创建一个新对象实例：
const bio = new Name();

// 检查实例的数据值：
bio.myName;

// 上述调用将返回：
"Oluwatobi"

// 更新实例的数据值：
bio.myName = "Sofela";

// 检查实例的数据值：
bio.myName;

// 上述调用将返回：
"Sofela"
```

由于上述代码片段没有封装类的数据，重构类字段的名称会导致用户代码崩溃。

以下是一个例子：

```
class Name {
  // 将数据的名称从 myName 更新为 myFirstName：
  myFirstName = "Oluwatobi";
}

// 创建一个新对象实例：
const bio = new Name();

// 检查实例的数据值：
bio.myName;

// 上述调用将返回：
undefined
```

上述代码片段返回 `undefined`，因为重构类的内部实现破坏了用户的 `bio.myName` 代码。为了使应用程序正常工作，用户必须更新代码中的每个实例（对于大型项目而言，这可能很繁琐）。

然而，封装可以防止这种重构破坏用户代码。

以下是一个例子：

```
class Name {
  // 将数据的名称从 myName 更新为 myFirstName：
  #myFirstName = "Oluwatobi";

  // 创建一个公开可用的方法：
  showMyName() {
    return this.#myFirstName;
  }

  // 再创建一个公开可用的方法：
  updateMyName(value) {
    this.#myFirstName = value;
  }
}

// 创建一个新对象实例：
const bio = new Name();
```


```
// 上述调用将返回：
"Oluwatobi"

// 更新实例的数据值：
bio.updateMyName("Sofela");

// 检查实例的数据值：
bio.showMyName();

// 上述调用将返回：
"Sofela"
```

你可以看到，重构类的内部实现并没有破坏用户的代码。这就是封装的美妙之处！

封装允许你提供一个独立于类底层数据的接口。因此，当你改变内部实现时，可以最大程度地减少用户代码发生崩溃的可能性。

## 关于 JavaScript 类的要点

以下是使用 JavaScript 类时需要记住的五个关键信息。

### 1\. 在访问之前声明类

类类似于构造函数，但具有与 `const` 和 `let` 变量相同的[暂时性死区（temporal dead zone）][101]行为。

换句话说，JavaScript 不会[提升（hoist）][102]类声明。因此，你必须先声明类然后才能访问它。否则，计算机会抛出 `Uncaught ReferenceError`。

这是一个例子：

```
// 从 Name 类创建一个对象实例：
const name = new Name();

// 定义 Name 类：
class Name {}
```

[**试着编辑它**][103]

上述代码片段会抛出 `Uncaught ReferenceError`，因为 JavaScript 不会提升类。因此，在定义之前调用 `Name()` 是无效的。

### 2\. 类是函数

类的 `typeof` 是函数，因为在底层，`class` 关键字会创建一个新的[函数][104]。

例如，考虑以下代码：

```
// 定义一个 JavaScript 类：
class Bio {
  // 定义两个实例类字段：
  firstName = "Oluwatobi";
  lastName = "Sofela";
  // 创建一个原型方法：
  showBio() {
    return `${ firstName } ${ lastName } runs CodeSweetly.`;
  }
}

// 创建一个新对象实例：
const aboutMe = new Bio();

// 检查 Bio 类的数据类型：
typeof Bio;

// 上述调用将返回：
"function"
```

[**试着编辑它**][105]

计算机按以下步骤处理上述代码片段：

1. 创建一个名为 `Bio` 的新函数。
2. 将类的实例属性添加到新创建的函数的 `this` 关键字中。
3. 将类的原型属性添加到新创建的函数的 `prototype` 属性中。

### 3\. 类是严格模式的

JavaScript 在严格模式下执行类。因此，当你使用类时，请遵循严格的语法规则。否则，你的代码会抛出错误——其中一些可能是难以调试的静默错误。

### 4\. 避免在类的 `constructor` 方法中使用 `return` 关键字

假设你的类的 `constructor` 返回一个[非原始值][106]。在这种情况下，JavaScript 会忽略所有 `this` 关键字的值，并将非原始值分配给 `new` 关键字表达式。

换句话说，`constructor` 的 [`return` 对象会覆盖][107]其 `this` 关键字。

例如，考虑以下代码：

```
// 创建一个新类：
class Name {
  constructor() {
    this.firstName = "Oluwatobi";
    this.lastName = "Sofela";
    return { companyName: "CodeSweetly" };
  }
}

// 创建一个新对象实例：
const myName = new Name();

// 检查 myName 的当前值：
myName;

// 上述调用将返回：
{ companyName: "CodeSweetly" }

// 检查 firstName 的当前值：
myName.firstName;

// 上述调用将返回：
undefined

// 检查 lastName 的当前值：
myName.lastName;

// 上述调用将返回：
undefined
```

[**试着编辑它**][108]

因为你使用 `return` 操作符生成了一个对象，`new` 关键字表达式只返回了 `{ companyName: "CodeSweetly" }`，JavaScript 忽略了 `constructor` 方法中的 `this` 关键字。

### 5\. 类的评估从 `extends` 子句到其值开始

JavaScript 按照以下顺序评估你的类：

#### 1\. `extends` 子句

如果你声明了 `extends` 子句，计算机将首先评估它。

**注意：**如果 `extends` 子句未评估为构造函数或 `null`，浏览器将抛出 `TypeError`。

#### 2\. 提取类的 `constructor`

JavaScript 提取类的 `constructor`。

**注意：**假设你没有定义 `constructor` 方法。在这种情况下，计算机将使用默认的构造函数。

#### 3\. 解析类的属性名

计算机按照声明顺序分析类的类字段名（不是它们的值）。

#### 4\. 解析类的方法和属性访问器

JavaScript 按照声明顺序通过以下操作分析类的方法和属性访问器：

- 将原型方法和属性访问器添加到类的 `prototype` 属性。
- 将静态方法和属性访问器作为类本身的属性进行分析，你可以在类本身上调用这些属性。
- 将私有实例方法和属性访问器作为类实例对象的私有属性进行分析。

#### 5\. 解析类的属性值

计算机按照声明顺序通过以下操作分析类的字段值：
```

**注意：**

- 只有在 JavaScript 解析完类的属性值之后，类才会完全初始化并可用作构造函数。
- 任何在完全初始化之前访问子类的尝试都会返回 `ReferenceError`。

## 概述

在本文中，我们讨论了什么是 JavaScript 类对象。我们还通过示例讨论了类字段、`super` 关键字和数据封装。

感谢阅读！

### 这里有一个有用的 React.JS 资源：

我写了一本关于 [创建 NPM 包][110] 的书！

这是一本适合初学者的指南，旨在帮助你掌握在 React 和 JavaScript 生态系统中创建、测试和发布 NPM 库的艺术。

它使用一个可扩展的项目来解释从零开始构建和管理 NPM 包的基本原理。

[![Creating NPM Package ReactJS book is now available at Amazon](https://www.freecodecamp.org/news/content/images/2024/01/creating-npm-package-reactjs-book-codesweetly.png)][111]

---

![Oluwatobi Sofela](https://cdn.hashnode.com/res/hashnode/image/upload/v1723166572499/FyCz19TsZ.jpg)

阅读 [更多帖子][112]。

---

如果你读到了这里，请感谢作者，让他们知道你在意。说声谢谢

免费学习编程。freeCodeCamp 的开源课程已经帮助了超过 40,000 人找到开发者工作。[开始][113]

[1]: #heading-what-is-a-javascript-class
[2]: #heading-why-classes-in-javascript
[3]: #heading-syntax-of-a-javascript-class
[4]: #heading-what-is-a-class-keyword
[5]: #heading-what-is-a-class-name
[6]: #heading-what-is-a-code-block
[7]: #heading-what-is-a-class-body
[8]: #heading-what-is-a-javascript-class-field
[9]: #heading-how-to-create-class-fields-in-javascript
[10]: #heading-how-to-create-class-fields-with-computed-names
[11]: #heading-how-to-create-regular-class-field-methods
[12]: #heading-how-to-create-shorthand-class-field-methods
[13]: #heading-regular-vs-shorthand-class-field-methods-whats-the-difference
[14]: #heading-what-is-a-user-defined-prototypal-method-in-javascript-classes
[15]: #heading-what-is-a-constructor-method-in-javascript-classes
[16]: #heading-types-of-class-fields
[17]: #heading-what-is-a-public-class-field-in-javascript-classes-1
[18]: #heading-what-is-a-private-class-field-in-javascript-classes-1
[19]: #heading-what-is-a-static-class-field-in-javascript-classes-1
[20]: #heading-types-of-javascript-classes
[21]: #heading-what-is-a-javascript-class-declaration
[22]: #heading-what-is-a-javascript-class-expression
[23]: #heading-what-is-a-derived-class-in-javascript
[24]: #heading-what-is-the-super-keyword-in-javascript
[25]: #heading-how-to-use-the-super-keyword-as-a-function-caller
[26]: #heading-how-to-use-the-super-keyword-as-a-property-accessor
[27]: #heading-super-vs-this-keyword-whats-the-difference
[28]: #heading-components-of-a-javascript-class
[29]: #heading-how-does-a-javascript-class-help-with-encapsulation
[30]: #heading-important-things-to-know-about-javascript-classes
[31]: #heading-1-declare-your-class-before-you-access-it
[32]: #heading-2-classes-are-functions
[33]: #heading-3-classes-are-strict
[34]: #heading-4-avoid-the-return-keyword-in-your-classs-constructor-method
[35]: #heading-5-a-classs-evaluation-starts-from-the-extends-clause-to-its-values
[36]: #heading-overview
[37]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
[38]: https://codesweetly.com/javascript-new-keyword
[39]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-gtfmeb
[40]: https://codesweetly.com/encapsulation-in-javascript
[41]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[42]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements
[43]: https://codesweetly.com/method-in-javascript
[44]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-bxe9or
[45]: https://developer.mozilla.org/en-US/docs/Glossary/Property/JavaScript
[46]: https://codesweetly.com/javascript-properties-object#computed-property-names-in-javascript
[47]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-b9jwfx
[48]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-fro6pz
[49]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-j6kpwy
[50]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[51]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[52]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
[53]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions
[54]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-xgekwn
[55]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
[56]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-tfz2hb
[57]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-gzhxdi
[58]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-pqgqew
[59]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
[60]: https://codesweetly.com/declaration-initialization-invocation-in-programming#what-does-invocation-mean
[61]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-stxiye
[62]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[63]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-vkvnuv
[64]: https://codesweetly.com/method-in-javascript#shorthand-for-javascript-methods
[65]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-88zwpt
[66]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-4gefar
[67]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-mkabvf
[68]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-7acrhs
[69]: https://codesweetly.com/web-tech-terms-i#instance-property-in-javascript
[70]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[71]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-dcx7ck
[72]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-cvbm6x
[73]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-field/js-wtvny3
[74]: https://codesweetly.com/javascript-variable
[75]: #heading-what-is-a-public-class-field-in-javascript-classes-1
[76]: #heading-what-is-a-static-class-field-in-javascript-classes-1
[77]: #heading-what-is-a-private-class-field-in-javascript-classes-1
[78]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions-1
[79]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions
[80]: https://codesweetly.com/javascript-properties-object
[81]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-jivp9r
[82]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-kxiztt
[83]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-qcdu2a
[84]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-cdc4ks
[85]: https://www.freecodecamp.org/news/the-this-keyword-in-javascript/
[86]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-zyd4dm
[87]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-sgc2tx
[88]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-cr3jfd
[89]: https://codesweetly.com/web-tech-terms-s#static-class-field-in-javascript
[90]: https://codesweetly.com/web-tech-terms-p#prototypal-property-in-javascript
[91]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-fr9bvs
[92]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-mxdvkm
[93]: https://codesweetly.com/default-function-properties-in-javascript#what-is-the-default-prototype-property-in-javascript-functions-1
[94]: https://codesweetly.com/default-function-properties-in-javascript#the-javascript-prototype-chain-diagram
[95]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-vpw14s
[96]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-kqsqqe
[97]: https://codesweetly.com/try-it-sdk/javascript/operators/super-keyword/js-v2st2a
[98]: https://codesweetly.com/try-it-sdk/javascript/encapsulation/js-q7uqv4
[99]: https://codesweetly.com/web-tech-terms-e#encapsulation
[100]: https://codesweetly.com/try-it-sdk/javascript/encapsulation/js-3vq4es
[101]: https://codesweetly.com/javascript-temporal-dead-zone#how-does-vars-tdz-differ-from-let-and-const-variables
[102]: https://www.freecodecamp.org/news/what-is-hoisting-in-javascript-3/
[103]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-74u2wt
[104]: https://codesweetly.com/javascript-function-object
[105]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-spwwdy
[106]: https://codesweetly.com/javascript-non-primitive-data-type
[107]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties#returning_overriding_object
[108]: https://codesweetly.com/try-it-sdk/javascript/function/class/class-explained/js-vgwrmg
[109]: https://codesweetly.com/web-tech-terms-s#static-initialization-blocks
[110]: https://amzn.to/48NjBdY
[111]: https://amzn.to/48NjBdY
[112]: /news/author/oluwatobiss/
[113]: https://www.freecodecamp.org/learn/


