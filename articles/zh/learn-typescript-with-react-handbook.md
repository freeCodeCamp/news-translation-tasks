```markdown
---
title: 学习 TypeScript – 开发者手册
date: 2025-03-07T04:51:19.827Z
author: oghenekparobo Stephen
authorURL: https://www.freecodecamp.org/news/author/Xtephen/
originalURL: https://www.freecodecamp.org/news/learn-typescript-with-react-handbook/
posteditor: "月落星河Tsukistar"
proofreader: "月落星河Tsukistar"
---

这本手册将教你 TypeScript 的基础知识，包括它是什么、它为什么非常有用，以及它提供的关键功能。

<!-- more -->

TypeScript 是由微软的著名软件工程师 Anders Hejlsberg 创建的，他同时也因为在 C# 和 Delphi 上的贡献而广为人知。TypeScript 的设计目的是通过添加静态类型来增强 JavaScript，使构建和维护大规模应用程序变得更容易。

我们将通过“使用 Vite 将 TypeScript 整合进 React 项目”这件事开始。然后你会学习到诸如类型注释、类型推论、如何处理对象和数组等关键概念。

之后，我们将探讨一些高级的主题，例如联合类型和 any 类型、只读属性、具有特定参数和返回类型的函数、用于灵活和可重用代码的泛型，以及类型别名和接口的不同角色。

我将通过这本手册提供一些详细的示例和解释，帮助你全面理解 TypeScript 的特性是如何改善 JavaScript 开发的。

### 前提条件

我假设你已经熟悉 JavaScript 和 React 的基础知识。因此在这本手册中，我不会深入解释某些概念，例如在搭建项目时的文件结构。

## 目录

1.  [什么是 TypeScript？][1]
    
2.  [项目设置][2]
    
3.  [类型注释和类型推论][3]
    
    -   [常用类型注释][4]
        
    -   [类型推论][5]
        
4.  [联合类型和 Any 类型][6]
    
    -   [在 TypeScript 中使用 any 时要小心][7]
        
    -   [在 TypeScript 中使用 unknown 作为 any 的更安全替代方案][8]
        
5.  [TypeScript 中的对象][9]
    
    -   [可变性问题][10]
        
    -   [对象上的只读属性声明][11]
        
    -   [只读数组][12]
        
6.  [函数参数和函数返回值][13]
    
    -   [使用 any 的风险][14]
        
    -   [为参数和返回值使用显式类型][15]
        
    -   [在 TypeScript 中使用 unknown 作为 any 的更安全替代方案][16]
        
    -   [在 TypeScript 中处理可选和默认值][17]
        
7.  [剩余参数][18]
    
8.  [TypeScript 中作为参数的对象][19]
    
9.  [TypeScript 中的类型别名][20]
    
    -   [在 TypeScript 中的交叉类型是什么？][21]

10.  [TypeScript 中的接口][22]
    
11.  [元组和枚举][23]
    
12.  [TypeScript 中的类型断言、类型 Unknown 和类型 Never][24]
    
13.  [TypeScript 中的泛型][25]
    
14.  [写在最后][26]
    

## 什么是 TypeScript？

在深入了解 TypeScript 是什么之前，理解它为什么被创造出来是很重要的。JavaScript 是一种**弱类型的语言**，这意味着变量是在运行时被定义，变量的类型是在运行时被决定的。这种灵活性会导致意想不到的行为，尤其是在较大的项目中。

例如，你可能会意外地将一个错误类型的值分配给一个变量，这会引发一些你只有在执行代码时才会发现的错误。

下面是一个展示此问题的 JavaScript 的示例：

```javascript
let userName = "Alice";
userName = 42; // 在赋值时没有错误，但这可能会破坏之后的代码。

function greetUser(name) {
  console.log("Hello, " + name.toUpperCase()); // 如果 `name` 不是字符串，会在运行时报错。
}

greetUser(userName); // 抛出异常，因为 `userName` 是数字而不是字符串，没有toUpperCase方法。
```

这类错误对于调试来说是一个巨大的挑战，因为它只在运行时出现。这样的错误使得大型项目更难维护且更容易出现 bug 。

这就是 TypeScript 大显身手的地方。TypeScript 是一种通过添加**静态类型**构建在 JavaScript 之上的编程语言。静态类型意味着你可以显式指定变量、函数参数、返回值等的类型。与在运行时确定类型的**动态类型**不同，静态类型允许 TypeScript 在开发过程中提前捕获与类型相关的错误，提高代码质量并减少 bug 。

例如，下面是用 TypeScript 编写的同一代码：

```typescript
let userName: string = "Alice";
// userName = 42; // 错误：类型“number”不能分配给类型“string”。

function greetUser(name: string): void {
  console.log("Hello, " + name.toUpperCase());
}

greetUser(userName); // 完美运行，因为 `userName` 类型正确。
```

## 项目设置

我们将使用 [Vite][27] 来设置我们的 TypeScript 项目。Vite 是一个旨在为 Web 项目提供更快速和更精简开发体验的现代构建工具。

第一步，运行以下命令创建一个支持 TypeScript 的新 Vite 项目：

```shell
npm create vite@latest
```

然后为你的项目输入一个名称（你可以选择任何你喜欢的名称）。在接下来的步骤中，请仔细按照说明操作。
```

选择项目模板时，从可用选项中选择“React”。我们将在本项目的开发中使用带有 TypeScript 的 React。

![运行 create vite@latest 时的项目模板](https://cdn.hashnode.com/res/hashnode/image/upload/v1736769912180/e94dc70c-32e2-4f9f-89cc-d70d35e3a86e.png)

当提示选择变体时，从可用选项中选择“TypeScript”。

![在 create vite@latest 模板中的 TypeScript 变体选择](https://cdn.hashnode.com/res/hashnode/image/upload/v1736770059262/d605726e-8d4f-4e73-8fb7-3854ce0b4e72.png)

完成这些步骤后，系统会提示您切换到项目目录并运行 `npm install`。您可以选择任何代码编辑器。在本例中，我将使用 VS Code。

![e3f81f8b-19b7-4fb6-a439-2f24e3f55df5](https://cdn.hashnode.com/res/hashnode/image/upload/v1736771043869/e3f81f8b-19b7-4fb6-a439-2f24e3f55df5.png)

![在 vscode 中查看项目概况并运行 npm install 以安装项目依赖](https://cdn.hashnode.com/res/hashnode/image/upload/v1736771426441/4c524149-4557-40bf-b50a-79400c6c3c91.png)

运行 `npm install` 后，运行 `npm run dev` 以在本地服务器上启动项目。一旦该项目启动并运行，我们就可以准备开始学习 TypeScript 概念。

![运行项目中的 npm run dev 后的登录页面](https://cdn.hashnode.com/res/hashnode/image/upload/v1736772238962/36f9523c-d316-43e3-ae05-e1ebfa9398f1.png)

首先，让我们创建第一个 TypeScript 文件，`test.ts`（您可以选择使用 `.ts` 或 `.tsx`）。在项目的 `src` 文件夹内创建 `test.ts` 文件，并添加以下代码将测试消息在控制台中打印为日志：

`test.ts`

```typescript
console.log('Testing our first TypeScript file');
```

要在控制台中查看此内容，请将 `test.ts` 文件导入到位于 `src` 文件夹中的 `main.tsx` 文件中。

![突出显示 main.tsx 和 test.tsx 文件](https://cdn.hashnode.com/res/hashnode/image/upload/v1736773745661/8492e586-7bc0-44a8-ac54-fb576119cdea.png)

`main.tsx`

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./test.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

要在控制台中查看日志，请确保将 `test.ts` 文件导入到位于 `src` 文件夹中的 `main.tsx` 文件中。之后，检查在本地服务器上运行的项目的控制台，您应该会看到显示的日志消息。

**Voilà!**

![在 console.log 中的结果](https://cdn.hashnode.com/res/hashnode/image/upload/v1736774231199/9a270631-0639-40e0-84de-513143b4478d.png)

现在，让我们正式开始学习 TypeScript 。

## 类型注解和类型推论

### 什么是类型注解？

TypeScript 中的类型注解使您能够显式地指定变量的类型。这确保了变量仅被赋予指定类型的值，增强了类型安全性并使您的代码更易于维护。

要在 TypeScript 中定义类型注解，只需在变量名称后加上一个冒号 `:`，然后是所需的类型。这允许您指定变量将持有的类型，为您的代码添加一个清晰和精确的层次。例如，让我们在 `test.ts` 文件中指定一个类型为 `string` 的变量，以确保只分配字符串值：

`test.ts`

```typescript
let name: string = 'Stephen';
```

在这个例子中，我们声明了一个变量 `name` 并指定它的类型必须是 `string`。TypeScript 现在将确保只能将字符串值分配给 `name`。

**📄 注意：**所有代码片段都在一个名为 `test.ts` 的文件中用于演示目的。您可以根据需要重命名文件或将片段复制到您的 TypeScript 项目中。我在本文中没有遵循一致的文件命名。

### 常用的类型注解

以下是 TypeScript 中一些常用的类型注解：

-   `string`: 表示文本值。
    
-   `number`: 表示数值（包括整数和浮点数）。
    
-   `boolean`: 表示值为 `true` 或 `false`。
    
-   `any`: 一种允许将任何值分配给变量的回退类型，禁用类型检查。
    
-   `void`: 通常用于不返回值的函数。
    
-   `null` 和 `undefined`: 用于表示没有值。
    

一旦您定义了带有类型注解的变量，TypeScript 会确保它只能持有指定类型的值。您还可以访问与该类型相关的方法。例如，如果您声明了一个字符串变量，TypeScript 会提供对所有字符串方法的访问，如 `.toUpperCase()`。

`test.ts`

```typescript
let name: string = 'Stephen';  // 类型显式设置为字符串
name = 'John';  // 这没有问题，因为它仍然是一个字符串

// 访问字符串方法
console.log(name.toUpperCase());  // 输出: JOHN
```

在这里，变量 `name` 被重新分配了一个新字符串值 `'John'`。由于类型仍然是 `string`，您可以毫无问题地使用字符串方法，比如 `.toUpperCase()`。

`test.ts`

```typescript
let numbers: number[] = [1, 2, 3];  // 类型显式设置为数字数组
numbers.push(4);  // 可以的，因为 4 是一个数字

// 访问数组方法
console.log(numbers.length);  // 输出: 4
```

在这个例子中，`numbers` 是一个数字数组。你可以安全地使用数组方法，比如 `.push()` 和 `.length`，这些都是对数字数组有效的操作。

如果你尝试将变量重新赋值为不兼容类型的值，TypeScript 会在开发时立即捕获错误，甚至在代码运行之前。

例如：

`test.ts`

```typescript
let name: string = 'Stephen';
name = 2;  // 错误: 类型 '2' 不能赋值给类型 'string'
```

在这里，你试图将一个数字 (`2`) 赋给一个先前声明为字符串的变量。TypeScript 会立即抛出错误，指出不能将一个数字赋给字符串变量。

同样地，对于一个数组：

`test.ts`

```typescript
let numbers: number[] = [1, 2, 3];
numbers = 'Hello';  // 错误: 类型 'string' 不能赋值给类型 'number[]'
```

在这里，你试图将一个字符串 (`'Hello'`) 赋给一个先前声明为数字数组的变量。TypeScript 会捕捉到这个错误并强调类型不匹配。

尝试不同的类型来体验 TypeScript 如何执行类型安全。例如，在你的数组和变量中尝试使用布尔值、数字或其他类型。

既然你已经了解了类型注释如何与字符串和数组配合工作，现在是时候尝试其他类型了。TypeScript 允许你定义具有各种类型的数组和变量，从而确保代码的类型安全性。尝试创建具有其他数据类型的数组，例如 `boolean`、`number`。

#### 示例: 布尔数组

`test.ts`

```typescript
let booleanArray: Array<boolean> = [true, false, true];

// 访问数组方法
console.log(booleanArray.length);  // 输出: 3
```

在这个例子中，数组 `booleanArray` 明确声明为仅包含 `boolean` 值。尝试添加 `string` 或 `number` 元素，看看 TypeScript 如何捕获类型错误。

#### 示例: 数字数组

`test.ts`

```typescript
let numberArray: Array<number> = [1, 2, 3];

// 访问数组方法
console.log(numberArray[0] * 2);  // 输出: 2
```

欢迎你试验这些例子，并观察 TypeScript 如何提供强大的类型安全性和实时捕获错误。探索得越多，你就越能理解如何利用 TypeScript 的类型系统编写更整洁、更可靠的代码。

### 什么是类型推论？

TypeScript 中的类型推论是一种强大的功能，它允许 TypeScript 编译器根据赋给变量的值自动确定变量的类型。TypeScript 被设计得足够智能，以在许多情况下推断类型，从而减少显式类型注释的需求。这增强了代码的简洁性，同时保持了类型安全性的优点。

通过类型推论，TypeScript 可以通过分析赋给变量的值来预测变量的类型，确保即使不手动指定类型，也能获得类型检查的所有优势。

##### **示例 1**：推断的字符串类型

`test.ts`

```typescript
let message = "Hello, TypeScript!";  // TypeScript 推断 'message' 的类型为字符串
console.log(message.toUpperCase());  // 输出: HELLO, TYPESCRIPT!
```

在这个例子中，TypeScript 自动推断 `message` 的类型为 `string`，因为赋值给它的值是一个字符串。

##### **示例 2**：推断的数字类型

`test.ts`

```typescript
let count = 42;  // TypeScript 推断 'count' 的类型为数字
console.log(count + 8);  // 输出: 50
```

这里，TypeScript 根据值 `42` 推断 `count` 的类型为 `number`，你可以在它上面执行算术操作而不会出现类型错误。

##### **示例 3:** 推断的数组类型

`test.ts`

```
let numbers = [1, 2, 3];  // TypeScript 推断 'numbers' 为数字数组 (number[])
console.log(numbers.length);  // 输出: 3
```

在这种情况下，TypeScript 推断 `numbers` 为类型 `number[]` 的数组，因为数组包含数字。

#### **不正确的示例:**

##### **示例 4**：类型不匹配的赋值

`test.ts`

```typescript
let count = 42;  // TypeScript 推断 'count' 的类型为数字
count = "Not a number";  // 错误: 类型 'string' 不能赋值给类型 'number'
```

尽管 TypeScript 推断 `count` 是一个数字，但尝试将一个 `string` 赋给它会导致一个错误。TypeScript 抓住了这是一个类型不匹配，因为 `count` 最初被推断为 `number`。

##### **示例 5:** 推断为混合类型数组

`test.ts`

```typescript
let mixedArray = [1, "apple", true];  // TypeScript 推断 'mixedArray' 为 (string | number | boolean)[]
console.log(mixedArray[0].toFixed(2));  // 错误: 属性 'toFixed' 不存在于类型 'string | boolean' 上。
```

在这个例子中，TypeScript 推断 `mixedArray` 是一个包含多种类型的数组 (`string | number | boolean`)。虽然这是允许的，但对元素使用类似 `.toFixed()` 的方法可能会导致错误，因为并非所有数组元素都支持该方法（例如，`boolean` 和 `string` 没有 `.toFixed()`）。

`test.ts`

```typescript
let price = 99.99;  // TypeScript 推断 'price' 为一个数字
price = "Free";  // 错误: 不能将类型 'string' 分配给类型 'number'
```

在这里，TypeScript 推断 `price` 是一个 `number`，但是尝试将其重新赋值为一个 `string` 会导致类型错误，从而确保变量维持其推断的类型。

## 联合类型和 Any 类型

在之前的例子中，我们使用了混合类型。现在，让我们正确定义这些概念，并通过各种例子来扩展它们：

### **什么是联合类型？**

联合类型允许变量或参数拥有多种特定类型，提供灵活性的同时保持类型安全性。你可以使用管道符 (`|`) 来定义一个联合类型。

**简单联合类型：**

`test.ts`

```typescript
let value: string | number;

value = "Hello";  // ✅ 正确
console.log(value.toUpperCase());  // 输出: HELLO

value = 42;  // ✅ 正确
console.log(value + 8);  // 输出: 50

value = true;  // ❌ 错误: 不能将类型 'boolean' 分配给类型 'string | number'.
```

在这个例子中，`value` 可以是字符串或数字。任何其他类型的赋值都会导致类型错误。

**函数参数中的联合类型：**

`test.ts`

```typescript
function printId(id: string | number): void {
  console.log(`Your ID is: ${id}`);
}

printId(12345);      // ✅ 正确
printId("abc123");   // ✅ 正确
printId(true);       // ❌ 错误: 不能将类型 'boolean' 分配给类型 'string | number'.
```

在这里，`id` 参数只能接受 `string` 或 `number`，确保了类型安全性并同时提供了灵活性。

**自定义联合类型：**

你可以使用 `type` 关键字创建自定义类型，以提高可读性和可重用性。

`test.ts`

```typescript
type ID = string | number;

function getUser(id: ID): void {
  console.log(`Fetching user with ID: ${id}`);
}

getUser(12345);      // ✅ 正确
getUser("abc123");   // ✅ 正确
getUser(true);       // ❌ 错误: 不能将类型 'boolean' 分配给类型 'string | number'.
```

### **什么是** `any` 类型？

`any` 类型是 TypeScript 中最灵活的类型。它允许变量持有任何类型的值，并对该变量禁用类型检查。

`any` 类型牺牲了类型安全以获取最大灵活性。在你不确定类型或者处理动态数据时，这非常有用。

##### **例子 1**：Any 类型数组

`test.ts`

```typescript
let mixedArray: any[] = [1, "apple", true];

console.log(mixedArray[0]);  // 输出: 1
console.log(mixedArray[1].toUpperCase());  // 输出: APPLE
console.log(mixedArray[2]);  // 输出: true
```

在这里，`mixedArray` 可以包含任何类型的元素而不会触发类型错误。

#### **何时使用联合类型与** `any`？

-   **联合类型**：当可能的值已知或限制为几种特定类型时使用联合类型。它提供类型安全并避免了运行时错误。
    
-   `any` **类型**：作为最后的手段在类型未知或动态时使用 `any`。
    

但请记住，过度使用 `any` 会使 TypeScript 的类型系统的优势丧失。通过谨慎地在联合类型和 `any` 之间进行选择，你可以编写既灵活又类型安全的 TypeScript 代码。

### **在 TypeScript 中使用** `any` **时要小心**

TypeScript 中的 `any` 类型是一个强大而又冒险的特性。虽然这种灵活性有时会很有用，但它往往会导致 TypeScript 无法在编译时捕获的意外行为或错误。

让我们通过一个例子来理解这种潜在的陷阱。

这是一个展示滥用any类型带来风险的函数：

```typescript
function combineValues(value: any) {
  let anotherValue: number = 10;

  return value + anotherValue;
}

const result = combineValues(5); // 这里没有错误。
const anotherResult = result;

// 试图调用 `anotherResult` 上的方法
anotherResult.someUndefinedMethod(); // 没有编译时错误！
```

运行这段代码的时候发生了什么？

首先，我们没有使用 `any` 时的类型检查。参数 `value` 是 `any` 类型，这意味着它可以持有任何值：字符串、数字、对象等等。TypeScript 会跳过对 `value` 的类型检查。

其次，返回值假设为 `any`。由于 `value` 是 `any`，因此返回类型也被推论为 `any`。

第三，调用未定义方法时没有错误。函数调用后，`anotherResult` 也被视为 `any`。TypeScript 允许在 `any` 类型的变量上调用任何方法（甚至是不存在的方法）而不报错。在这种情况下，`someUndefinedMethod` 并不存在，但 TypeScript 不会发出警告。

#### **使用** `any` **的风险**

1.  **类型安全的丧失**：你会失去 TypeScript 类型系统的好处，比如编译时错误检查。潜在的运行时错误在开发过程中可能会被忽视。
    
2.  **意外的行为**：函数可能会接受意外的输入（例如：字符串、数组或对象），导致结果不正确或崩溃。
    
3.  **调试复杂性**：由于类型未被强制执行，由不正确类型引发的问题的调试变得更加复杂。
    

### **如何解决**

#### **对参数和返回值使用显式类型**

这是一个具有正确类型注释的改进版本：

```typescript
function combineValues(value: number): number {
  let anotherValue: number = 10;

  return value + anotherValue;
}
```

1.  **参数类型**: 该函数现在明确要求 `value` 参数为 `number` 类型。
    
2.  **返回类型**: 返回类型被声明为 `number`，确保只返回数字。
    

这确保了如果您尝试传递无效类型或调用不存在的方法，TypeScript 将会抛出错误。

#### **要点**

-   `any` 类型禁用了 TypeScript 的类型检查，使您的代码容易出现运行时错误。
    
-   尽可能避免使用 `any`。相反，使用明确的类型或更严格的替代品，比如（如果无法事先确定类型时）使用 `unknown`。
    
-   明确的类型通过利用 TypeScript 的编译时检查，增强了代码的清晰度、可维护性和可靠性。
    

如果您因为不清楚类型而有使用 `any` 的冲动，考虑重构您的代码或结合使用类型守卫与 `unknown` 以获得更好的安全性。

### **在 TypeScript 中使用** `unknown` **作为更安全的替代品**

TypeScript 中的 `unknown` 类型是 `any` 的更严格且更安全的替代品。虽然 `any` 和 `unknown` 都可以容纳任意类型的值，但 `unknown` 要求您在使用值之前执行类型检查。这在提供灵活性的同时确保了更高的类型安全性。

```typescript
function processValue(input: unknown): string {
  if (typeof input === 'string') {
    return `这个值是一个字符串：${input}`;
  } else if (typeof input === 'number') {
    return `这个值是一个数字：${input}`;
  } else {
    return '这个值是未知类型';
  }
}

console.log(processValue('Hello, TypeScript!')); // 这个值是一个字符串：Hello, TypeScript!
console.log(processValue(42)); // 这个值是一个数字：42
console.log(processValue(true)); // 这个值是未知类型
```

使用 `unknown` 而不是 `any` 有几个好处：

1.  **类型安全处理**: 与 `any` 不同，`unknown` 迫使您在使用变量的值之前进行类型检查。这防止了在意外类型上执行无效操作所引发的运行时错误。
    
2.  **显式类型缩小**: TypeScript 要求您先通过类型守卫（`typeof`、`instanceof` 等）将 `unknown` 缩小到特定类型（如 `string`、`number`）后，才能访问其属性或方法。
    
3.  **增强代码清晰度**: 通过使用 `unknown`，您向其他开发人员表明类型是不确定的，必须在使用之前检查。
    

### **主要区别:** `any` vs. `unknown`

| **特性** | `any` | `unknown` |
| 类型检查 | 无类型检查 | 使用前需类型检查 |
| 灵活性 | 可直接使用 | 必须先缩小类型 |
| 常见用例 | 快速修复（不推荐） | 安全处理不确定类型 |

总结一下，每当您处理不确定类型的值时，请使用 `unknown` 而不是 `any`。它有助于维护类型安全并减少错误风险。同时尽量避免使用 `any`，因为它会绕过 TypeScript 的安全特性。

## TypeScript 中的对象

在 TypeScript 中，对象是属性的集合，每个属性都有一个名称（键）和一个值。TypeScript 允许我们为这些属性定义类型，以确保对象符合特定结构。

`test.ts`

```typescript
let car = { car: 'Toyota', brand: 2024 };
console.log(car);
```

这段代码可以正常工作，因为 TypeScript 根据提供的值自动推断出 `car` 和 `brand` 的类型。

### **显式对象类型**

当我们希望明确地定义对象的形状时，可以使用内联类型注解。这使得每个属性应该有什么类型变得明确。例如：

`test.ts`

```typescript
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025 };
console.log(carOne);
```

这确保 `carOne` 始终拥有一个类型为 `string` 的 `car` 属性和一个类型为 `number` 的 `brand` 属性。

假设我们想为 `carOne` 添加一个 `color` 属性：

`test.ts`

```typescript
let carOne: { car: string; brand: number } = { car: 'Evil Spirit', brand: 2025, color: 'Black' };
```

上面的代码会显示红线，因为 `color` 不是已定义类型 `{ car: string; brand: number }` 的一部分。错误可能会像这样：

![8a3d48dd-3ae0-4769-9e13-fa1f6ca37331](https://cdn.hashnode.com/res/hashnode/image/upload/v1736933755272/8a3d48dd-3ae0-4769-9e13-fa1f6ca37331.png)

> 类型 '{ car: string; brand: number; color: string; }' 无法分配给类型 '{ car: string; brand: number; }'。对象字面量只能指定已知属性，且 'color' 不存在于类型 '{ car: string; brand: number; }' 中。

类似地，如果您试图将 `brand` 的类型更改为 `string`：

`test.ts`

```typescript
carOne.brand = "2026";
```

您将收到另一个错误：

> 类型 'string' 无法分配给类型 'number'。

每次编写完整的对象类型可能会显得重复，尤其是对于拥有许多属性或在多个地方使用相同结构的对象。但不用担心——我会很快介绍**类型别名**，这将使定义和重用对象类型更简单。之后您将了解到如何使用类型别名简化对象类型并使您的代码更简洁。接下来，我们将探索如何在 React 中应用这些概念。

现在，我们要专注于理解基础知识以及TypeScript如何强制执行这种处理对象的模式。这就像是掀开引擎盖，窥探TypeScript幕后是如何运作的。

### **对象与数组**

在 TypeScript 中，我们经常处理对象数组，其中每个对象都有特定的结构。TypeScript 可以帮助确保数组中的每个对象都符合预期的类型。

想象你在经营一家杂货店，并想要记录你的蔬菜库存。可以这样开始：

```typescript
let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

let vegetables: { name: string; price: number }[] = [tomato, potato, carrot];
```

当 TypeScript 检查这段代码时，它会抛出一个错误，因为 `carrot` 没有 `price` 属性。`vegetables` 数组的每一项的预期类型是 `{ name: string; price: number }`。由于 `carrot` 缺少 `price`，TypeScript 会将其标记为错误。

> 类型 '{ name: string; }' 不能赋值给类型 '{ name: string; price: number; }'。在类型 '{ name: string; }' 中缺少属性 'price'，但在类型 '{ name: string; price: number; }' 中是必需的。

如果 `price` 并不总是已知或需要（例如，也许胡萝卜的价格正在谈判中），可以使 `price` 属性为可选。可以通过在属性名后添加一个 `?` 来实现这一点：

```typescript
let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
```

现在，TypeScript 知道 `price` 属性是可选的。这意味着在 `vegetables` 数组中的对象可以包含 `price` 或不包含 `price` 而不产生错误。

当一个属性是可选的时，TypeScript 允许它：

1.  以指定的类型存在。
    
2.  完全不存在。
    

这种灵活性消除了对于像 `carrot` 这样缺少 `price` 属性的对象的错误。

### **`readonly` 修饰符**

在 TypeScript 中，`readonly` 修饰符是确保某些属性或整个对象保持不变的好方法。这在你想防止数据的意外更改时特别有用。

让我们继续用蔬菜商店的例子来看看 `readonly` 是如何工作的。

#### **可变性的问题**

假设我们有这样的设置：

```typescript
let tomato = { name: 'Tomato', price: 2 };
let potato = { name: 'Potato', price: 1 };
let carrot = { name: 'Carrot' };

let vegetables: { name: string; price?: number }[] = [tomato, potato, carrot];
```

如果有人不小心尝试更改 `tomato` 对象的 `name` 或从 `vegetables` 数组中删除 `carrot` 对象，TypeScript 不会报错：

```typescript
vegetables[0].name = 'Cucumber'; // 没有错误，但这可能是无意的！
vegetables.pop(); // 移除最后一个蔬菜，没有警告。
```

我们可以使用 `readonly` 来使这些对象和数组不可变，以确保它们的原始状态不能被更改。

### **对象属性上的 Readonly**

要使每个蔬菜的属性不可变，可以这样做：

```typescript
let vegetables: { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];
```

现在，如果你尝试更改任何蔬菜的 `name` 或 `price`，TypeScript 会抛出错误：

```typescript
vegetables[0].name = 'Cucumber'; // 错误：不能分配给 'name'，因为它是一个只读属性。
```

### **Readonly 数组**

你还可以通过将整个 `vegetables` 数组声明为 `readonly` 来使其不可变：

```typescript
let vegetables: readonly { name: string; price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];
```

这会阻止修改数组本身的操作，例如 `push`、`pop` 或 `splice`：

```typescript
vegetables.push({ name: 'Onion', price: 3 }); // 错误：属性 'push' 在类型 'readonly { name: string; price?: number; }[]' 上不存在。
vegetables.pop(); // 错误：属性 'pop' 在类型 'readonly { name: string; price?: number; }[]' 上不存在。
```

### **使用 `readonly` 的时机**

1.  **不可变数据**：当你希望对对象或数组实现不可变性时使用 `readonly`，特别是在数据应该保持不变的情况下（例如，配置、初始状态、常量）。
    
2.  **防止错误**：保护你的数据不被代码的其他部分无意中更改。
    

### **完整示例**

这是一个带有 `readonly` 的更新示例：

```typescript
let vegetables: readonly { readonly name: string; readonly price?: number }[] = [
  { name: 'Tomato', price: 2 },
  { name: 'Potato', price: 1 },
  { name: 'Carrot' },
];

// 尝试修改数据
vegetables[0].name = 'Cucumber'; // 错误：不能分配给 'name'，因为它是一个只读属性。
vegetables.pop(); // 错误：方法 'pop' 在类型 'readonly { readonly name: string; readonly price?: number; }[]' 上不存在。

console.log(vegetables);
```

以下是对 readonly 的总结：

-   属性上的 `readonly` 确保对象的各个字段不能被更改。
    
-   数组上的 `readonly` 使数组本身不可变，阻止诸如 `push` 和 `pop` 之类的操作。
    
-   将两者结合可以为数组中的对象提供完全的不可变性。
    

通过使用 `readonly`，你可以创建更安全、更可预测的代码，减少由于无意更改导致的错误。

## **函数参数与函数返回值**

在 TypeScript 中，函数允许您显式定义**参数**和**返回类型**。这确保函数按预期运行并避免运行时错误。让我们通过一个简单的例子来详细说明。

### **推断的返回类型**

```typescript
function arithmeticOp(price: number) {
  return price * 9;
}

const FP = arithmeticOp(2); // 结果是 18。
```

1. 参数 `price` 被显式定义为 `number`。
    
2. 返回类型没有被显式声明，但 TypeScript **推断**它为 `number`，因为函数返回的是 `price * 9`，这是一个数值运算。
    
TypeScript 足够聪明，可以根据返回语句推断函数的返回类型。在这种情况下，它正确地推断 `arithmeticOp` 返回一个 `number`。

### **显式返回类型**

```typescript
function arithmeticOp(price: number): number {
  return price * 9;
}

const FP = arithmeticOp(2); // 结果仍然是 18。
```

1. 函数通过语法 `functionName(parameters): returnType` 显式声明返回类型为 `number`。
    
2. 这不会改变结果，但使函数声明更加清晰。

那么为什么要使用显式返回类型呢？首先，这提高了代码的可读性，并确保未来的更改不会意外改变返回类型。其次，它为其他开发人员提供了文档。

### **返回类型不匹配**

```typescript
function arithmeticOp(price: number): number {
  if (hasDiscount) {
    return 'discount'; // 这里出错了！
  }
  return price * 9;
}

const FP = arithmeticOp(2);
```

在上面的代码中，返回类型被显式声明为 `number`。但函数尝试在某些情况下返回一个 `string`（`'discount'`）。这导致 TypeScript 抛出错误：

> 类型 'string' 不能赋值给类型 'number'.

这是因为 TypeScript 强制执行声明的返回类型。如果您声明一个函数返回 `number`，它**必须始终**返回一个 `number`，无论函数内的逻辑如何。

如果您希望函数返回多种类型（例如，`number` 或 `string`），请使用**联合类型**：

```typescript
function arithmeticOp(price: number): number | string {
  if (hasDiscount) {
    return 'discount'; // 现在有效！
  }
  return price * 9;
}

const FP = arithmeticOp(2);
```

返回类型 `number | string` 告诉 TypeScript 函数可以返回 `number` 或 `string`。这解决了类型不匹配错误。

#### 关键要点：

1. TypeScript 在未显式定义时**推断**返回类型，但为了清晰和可维护性，鼓励使用显式返回类型。
    
2. 声明的返回类型确保函数仅返回指定类型的值。
    
3. 类型不匹配，例如从预期返回 `number` 的函数返回 `string`，会导致 TypeScript 错误。
    
4. 联合类型（`type1 | type2`）允许函数在需要时返回多种类型。
    

### **在 TypeScript 中处理可选参数和默认值**

在使用 TypeScript 的函数时，指定参数的行为对于灵活性和防止运行时错误至关重要。让我们通过实际的例子来探讨如何有效处理可选参数和默认参数。

### 示例 1：理解缺少参数的问题

思考下面这个函数：

```typescript
function calculateFinalScore(baseScore: number, deductions: number): number {
  return baseScore - deductions;
}

let scoreWithDeductions = calculateFinalScore(50, 10);
let scoreWithoutDeductions = calculateFinalScore(50); // 错误
```

对 `calculateFinalScore` 的第一次调用完全正常。但第二次调用会抛出 TypeScript 错误：

```typescript
⚠ Error (TS2554) | 预期有2个参数，但只传入了1个。
Tutorial.ts(7, 47): 参数 'deductions' 没有提供。
```

这是因为 TypeScript 期望同时提供 `baseScore` 和 `deductions`，因为它们都是必需参数。如果省略 `deductions` 值，TypeScript 将不允许函数调用。

### 示例 2：使用默认参数解决问题

为了解决这个问题，我们可以为 `deductions` 参数定义一个默认值。默认参数在没有传递参数时提供回退值。

```typescript
function calculateFinalScore(baseScore: number, deductions: number = 0): number {
  return baseScore - deductions;
}

let scoreWithDeductions = calculateFinalScore(50, 10); // 40
let scoreWithoutDeductions = calculateFinalScore(50);  // 50
```

在这个更新的例子中：

- `deductions` 参数默认值为 `0`，如果没有显式提供。
    
- 两次调用现在都可以正常执行且没有错误。
    

### 为什么这种解决方案有效

通过将 `deductions` 定义为默认参数，TypeScript 确保函数在调用时拥有执行所需的所有参数，即使某些参数在调用中被省略。这种方法增加了函数的灵活性，同时保持了类型安全。

当一个参数值是函数正常工作所必需的，请使用默认参数，这能确保它在被忽略时可以安全地有回退值。这种方法提高了代码清晰度并减少了运行时错误的可能性。

TypeScript中的剩余参数可以让你在不知道将会收到多少个参数的情况下处理多个参数。你可以传递任意多的参数，TypeScript将处理它们。对于输入数量不固定的情况，它们非常完美。

要使用剩余参数，你需要在参数名称前加上三个点（`...`），这些点会将所有额外的参数收集到一个数组中。

假设你想将多个单词组合成一个句子：

```typescript
function joinWords(...words: string[]): string {
  return words.join(" ");
}

let sentence = joinWords("TypeScript", "makes", "coding", "fun");
console.log(sentence); // "TypeScript makes coding fun"
```

-   `...words` 将所有参数收集到一个数组中（`["TypeScript", "makes", "coding", "fun"]`）。
    
-   `join` 方法将它们组合成一个用空格分隔的字符串。
    

### 数字的剩余参数

现在，假设你想累加多个数字：

```typescript
function sumNumbers(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

let total = sumNumbers(10, 20, 30);
console.log(total); // 60
```

-   `...numbers` 将所有数字收集到一个数组中（`[10, 20, 30]`）。
    
-   `reduce` 方法将它们相加得到总和。
    

我们也可以使用剩余参数将多个数组合并为一个：

```typescript
function mergeArrays(...arrays: number[][]): number[] {
  return arrays.flat();
}

let combined = mergeArrays([1, 2], [3, 4], [5, 6]);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

-   `...arrays` 将每个参数作为数组收集到一个数组的数组中（`[[1, 2], [3, 4], [5, 6]]`）。
    
-   `flat` 方法将它们合并为一个数组。
    

剩余参数必须始终放在参数列表的最后。例如：

```typescript
function example(a: string, ...others: number[]): void {
  console.log(a, others);
}
```

这确保所有剩余的参数都进入剩余参数。

## TypeScript中的对象作为参数

在TypeScript中，函数可以接受对象作为参数。这在处理多个相关值时特别有用。

### 使用具有特定属性的对象

这是一个接受具有`id`属性的对象并返回一个新对象的函数：

```typescript
function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
  return { id, isActive: id % 2 === 0 };
}

const firstEmployee = createEmployee({ id: 1 });
console.log(firstEmployee); // { id: 1, isActive: false }

const secondEmployee = createEmployee({ id: 2 });
console.log(secondEmployee); // { id: 2, isActive: true }
```

函数 `createEmployee`：

-   接受具有单个属性`id`的对象作为参数。
    
-   返回一个具有两个属性的对象：`id` 和 `isActive`。
    

`isActive` 属性的值是通过检查 `id` 是否为偶数来确定的（`id % 2 === 0`）。

参数中使用了 **解构** 的语法（参见 [解构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring)）：

-   返回值中的 `id` 属性直接提取自输入对象 `{ id }` 中的 `id` 属性。

### 接受更复杂的对象

现在，让我们看看接受具有多属性对象的函数：

```typescript
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course, ${student.name}!`);
}

const newStudent = { id: 1, name: "John" };
createStudent(newStudent); // "Welcome to the course, John!"
```

函数 `createStudent`：

-   接受一个具有两个属性的对象：`id` 和 `name`。
    
-   使用 `name` 属性记录欢迎信息。
    
`newStudent` 对象与函数期望的结构匹配，因此可以直接传递。

### 为什么使用对象作为参数？

首先，使用对象作为参数的函数更易于阅读，尤其是在处理多个相关值时。此外，利用解构，你可以从对象中提取所需的属性，使代码更加简洁。最后，对象可以在多个函数之间复用，而无需每次都创建新对象。

### TypeScript中的多余属性检查

在TypeScript中，多余属性检查有助于确保传递给函数的对象只能包含定义在函数参数类型中的属性。如果有额外的属性，TypeScript将引发错误。让我们通过简单的例子来看看它是如何工作的。

#### 1. 额外属性错误

这是一个接受具有 `id` 和 `name` 对象的函数，但没有额外属性：

```typescript
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome, ${student.name}!`);
}

const newStudent = { id: 1, name: "John", age: 20 }; // 多余属性 'age'

createStudent(newStudent); // 错误: 'age' 是不被期望的
```

TypeScript 会报错，因为 `age` 属性不属于预期的对象结构。

#### 2. 修复错误

要避免此错误，只需删除任何额外的属性：

```typescript
const validStudent = { id: 1, name: "John" };
createStudent(validStudent); // 没有问题
```

这可行是因为对象只有预期的属性：`id` 和 `name`。

#### 3. 使用类型断言（不推荐）

如果你确实需要传递一个带有额外属性的对象，可以使用**类型断言** 告诉 TypeScript 忽略多余的属性：

```typescript
const studentWithExtras = { id: 1, name: "John", age: 20 };
createStudent(studentWithExtras as { id: number; name: string }); // Bypasses the error
```

虽然这样做可以工作，但最好是匹配预期的结构，而不是使用类型断言。

- TypeScript 期望对象与参数类型的精确结构匹配。
    
- 多余的属性会导致错误，以确保结构的正确性。
    
- 如果需要额外的属性，请修复对象或（谨慎）使用类型断言。
    
针对作为函数参数的对象属性中多余属性的检查可以帮助保持代码安全，并确保只有正确的数据传递到函数中。

## TypeScript 中的类型别名

TypeScript 中的**类型别名**本质上是现有类型的**缩写**或**替代名称**。它允许您为在代码中可能会使用的复杂类型或反复使用的类型定义一个更简单或更易读的名称。

使用类型别名不会创建新类型，而是为现有类型提供一个新的标识符。使用类型别名时，代码的原有功能逻辑不会改变——它只是使代码更具可读性和可重用性。

下面是使用类型别名前的示例：

```typescript
// 没有使用类型别名 （提出质疑，原文的这里在没有定义UserInfo类型前是否可以直接引用UserInfo，在我看来这里会报错，正确的写法可能是user: { name: string, age: number, address: string }）
function getUserInfo(user: UserInfo) {
  console.log(`User Info: 
    Name: ${user.name}, 
    Age: ${user.age}, 
    Address: ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

现在，让我们对函数参数使用类型别名，使代码更具可读性：

```typescript
// 使用类型别名
type UserInfo = { name: string, age: number, address: string };

function getUserInfo(user: UserInfo) {
  console.log(`User Info: 
    Name: ${user.name}, 
    Age: ${user.age}, 
    Address: ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);
```

在上面的示例中：

- 使用类型别名前，我们在函数内分别定义了参数。
    
- 定义类型别名（`UserInfo`）后，我们在函数参数中使用它，使函数签名更简单，更具可读性。
    
使用类型别名**不会改变代码的功能**。它只是通过使用别名，使处理代码变得更容易。别名作为复杂类型的可重用引用，如果 `UserInfo` 的结构发生变化，我们只需在一个地方更新它，从而使代码更易维护。

### 如何使用类型别名

类型别名允许您为一种类型定义一个新名称。这个新名称可以表示基本类型、对象结构，甚至是类型的联合。主要好处是使您的代码更具可读性、可重用性，并防止错误。

您可以使用 `type` 关键字定义类型别名，后跟一个名称和类型结构。

```typescript
type TypeName = TypeStructure;
```

例如，让我们为一个用户对象创建一个类型别名：

```typescript
type User = {
  name: string;
  age: number;
}
```

这意味着 `User` 是一个期待具有两个属性的对象的类型：

- `name` 应该是一个字符串。
    
- `age` 应该是一个数字。
    

### 为什么使用类型别名？

使用类型别名有几个原因。首先，类型别名显式定义了对象的结构，因此任何阅读代码的人都确切知道会得到什么。其次，您可以在代码中的任何地方重用 `User` 类型，而无需重复其结构。最后，TypeScript 将检查分配给 `User` 类型的任何对象是否具有必需属性以及正确的类型。

#### 使用类型别名：

```typescript
type User = {
  name: string;
  age: number;
};

function getUserDetails(user: User): string {
  return `${user.name} (${user.age} years old)`;
}

const user: User = { name: "Alice", age: 30 };
console.log(getUserDetails(user)); // "Alice (30 years old)"
```

在这个示例中，我们定义了 `User` 类型别名，指定 `user` 对象必须有一个 `name` 类型为 `string` 和 `age` 类型为 `number`。

如果您试图分配一个不匹配此结构的对象，TypeScript 会捕获错误，如下所示：

```typescript
// 这将导致 TypeScript 错误：
const invalidUser: User = { name: "Alice" }; // 缺少 'age' 属性
```

### 什么是 TypeScript 中的**交叉类型**？

**交叉类型**是 TypeScript 中一个强大的功能，允许您将多种类型组合成一个。当您创建交叉类型时，生成的类型必须同时具备每个交叉类型的**所有属性**。

您可以组合任意数量的类型，生成的类型必须满足所有原始类型的每一种条件。

#### 交叉类型的语法

要定义一个交叉类型，您可以使用 `&` 运算符来组合两个或更多的类型。

```typescript
type TypeA & TypeB;
```

#### 交叉类型的示例

假设您想为 `User` 类型扩展包含用户的地址。您可以使用**交叉类型**组合 `User` 和 `Address`，而不是修改原始 `User` 类型。

```typescript
type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address; // User 和 Address 的交叉
```

现在，`UserWithAddress` 将需要同时具备 `User` 和 `Address` 的属性。

#### 在函数中使用交叉类型的示例

以下是如何在函数中使用此方法：

```typescript
type User = {
  name: string;
  age: number;
};

type Address = {
  city: string;
  country: string;
};

type UserWithAddress = User & Address;

function getUserDetails(user: UserWithAddress): string {
  return `${user.name} (${user.age} years old), lives in ${user.city}, ${user.country}`;
}

const user: UserWithAddress = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA"
};

console.log(getUserDetails(user));
// 输出: "Alice (30 years old), lives in New York, USA"
```

在此示例中：

-   `UserWithAddress` 是一个交叉类型，这意味着 `user` 对象必须同时拥有 `User` 和 `Address` 的属性。
    
-   TypeScript 会检查对象中是否存在 `name` 和 `age`（来自 `User`），以及 `city` 和 `country`（来自 `Address`）。
    

如果遗漏了这些属性中的任意一个，TypeScript 将显示错误。

```
// 这会导致 TypeScript 错误：
const incompleteUser: UserWithAddress = {
  name: "Alice",
  age: 30,
  city: "New York"
}; // 缺少 'country'
```

### 为什么使用**交叉类型**？

交叉类型在多个场景下非常有用。首先，它们允许你在不修改原有类型的情况下扩展其功能，从而让代码更具模块化和灵活性。当需要将多个不同的结构合并为一个时，例如将 `User` 与 `Address` 或 `OrderDetails` 合并，使用交叉类型也是非常有用的。而使用交叉类型时，你可以轻松地看到对象必须具有的所有必需属性。

### 类型别名 vs 交叉类型：

| 特性 | 类型别名 | 交叉类型 |
| **定义** | 定义单一类型。 | 将多个类型合并为一个类型。 |
| **使用场景** | 为对象或原始数据创造可重用类型。 | 合并多个类型，并要求所有属性存在。 |
| **合并类型** | 不用于合并类型。 | 用于合并多种类型。 |
| **示例** | `type User = { name: string, age: number };` | `type UserWithAddress = User & Address;` |

### 何时使用类型别名或交叉类型

-   当需要为对象、函数或其他数据结构定义**单一类型**时，使用类型别名。它们有助于提升代码的清晰度、重用性和类型安全。
    
-   当需要将多个类型**合并为一个**时，使用交叉类型。在对象需要同时满足多种合同时理想，比如合并不同的类型或扩展现有类型的功能。
    

通过在 TypeScript 中运用类型别名和交集类型，你的代码将变得更易于理解、更安全且更易于维护。这些功能为你的数据提供了结构，帮助尽早捕获错误。

## TypeScript 中的接口

在 TypeScript 中，**接口**是一种定义对象结构、描述其属性及其类型的方法。接口用于在代码中强制执行类型检查，确保对象遵循特定的结构。类似于类型别名，接口使你的代码更具可读性、可重用性和可维护性。

### 什么是接口？

接口是对象的蓝图，定义了它应有的属性和方法。接口可用于为对象、函数或类定义自定义类型。

这是一个基本示例：

```typescript
interface User {
  name: string;
  age: number;
  address: string;
}

function getUserInfo(user: User): string {
  return `${user.name} (${user.age} years old) lives at ${user.address}`;
}

const user: User = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

console.log(getUserInfo(user)); // 输出: Alice (30 years old) lives at 123 Main St
```

在这个示例中：

-   `User` 接口定义了对象的结构。
    
-   任何 `User` 类型的对象必须具有 `name`，`age` 和 `address` 属性且符合指定类型。
    
-   `getUserInfo` 函数确保 `user` 参数遵循 `User` 接口。
    

### 接口和类型别名的相似之处

-   接口和类型别名都可以定义对象的结构。
    
-   两者都可以扩展，尽管语法不同。
    
-   两者都提高了代码的可读性和可重用性。
    
-   在大多数情况下，可以互换使用接口或类型别名来定义对象类型。
    

使用类型别名的示例：

```typescript
type User = {
  name: string;
  age: number;
  address: string;
};

const user: User = {
  name: "Bob",
  age: 25,
  address: "456 Elm St",
};
```

在这种情况下，`type` 和 `interface` 实现了同样的结果。

### 接口和类型别名的区别

让我们总结一下它们的主要区别：

| 特性 | 接口 | 类型别名 |
| --- | --- | --- |
| **语法** | 使用 `interface` 关键字。 | 使用 `type` 关键字。 |
| **扩展性** | 可以使用 `extends` 扩展。 | 可以使用交集（`&`）扩展。 |
| **声明合并** | 支持在多个声明中合并。 | 不支持声明合并。 |
| **联合类型** | 不能定义联合类型。 | 可以定义联合类型。 |

### 使用接口和类型别名进行扩展

**扩展接口：**

```typescript
interface Address {
  city: string;
  country: string;
}

interface User extends Address {
  name: string;
  age: number;
}

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

```typescript
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  age: number;
} & Address;

const user: User = {
  name: "Alice",
  age: 30,
  city: "New York",
  country: "USA",
};
```

两种方法得到相同的结果，但语法不同。

### 使用接口的高级概念

**1\. 可选属性:**

接口可以使用 `?` 符号定义属性为可选：

```typescript
interface User {
  name: string;
  age?: number; // 可选
}

const user1: User = { name: "Alice" };
const user2: User = { name: "Bob", age: 25 };
```

**2\. 只读属性:**

使用 `readonly` 修饰符使属性不可变：

```typescript
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
// user.id = 2; // 错误: 不能分配给 'id' 因为它是只读属性。
```

**3\. 函数类型:**

接口可以定义函数签名：

```typescript
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
console.log(add(5, 3)); // 输出: 8
```

**4\. 索引签名:**

接口可以定义动态属性名：

```typescript
interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  hello: "world",
  name: "Alice",
};
```

**5\. 扩展多个接口:**

一个接口可以扩展多个接口：

```typescript
interface A {
  propA: string;
}

interface B {
  propB: number;
}

interface C extends A, B {
  propC: boolean;
}

const obj: C = {
  propA: "Hello",
  propB: 42,
  propC: true,
};
```

### 接口与类型别名的使用时机

- 当你需要定义对象形状，尤其是当你计划扩展它们时，使用 **接口** 。如果你需要声明合并，也使用接口，因为类型别名不支持它。

- **类型别名** 常用于更复杂的类型，例如联合或交叉。

## 元组和枚举

在 TypeScript 中， **元组** 是一种特殊类型的数组，它具有固定数量的元素，其中每个元素可以有不同的类型。元组确保值的顺序和类型保持一致。

```typescript
// 一个包含字符串和数字的元组
let user: [string, number] = ["Alice", 25];

console.log(user[0]); // 输出: Alice
console.log(user[1]); // 输出: 25
```

在这个例子中，元组 `user` 包含一个字符串（名字）和一个数字（年龄）。顺序和类型必须按定义遵循。

#### **包含可选元素的元组:**

```typescript
let person: [string, number, boolean?] = ["Bob", 30];

console.log(person); // 输出: ["Bob", 30]
```

这里，第三个元素（boolean）是可选的。

#### **只读属性的元组:**

```typescript
const coordinates: readonly [number, number] = [10, 20];

// coordinates[0] = 50; // 错误: 不能分配给 '0' 因为它是一个只读元组
```

`readonly` 关键字防止修改元组的值。

### **枚举**

在 TypeScript 中， **枚举** 是一种定义一组命名常量的方法。枚举使代码更易读并帮助管理一组固定的值。

#### **数值枚举（默认）:**

```typescript
enum Status {
  Pending,   // 0
  InProgress, // 1
  Completed,  // 2
}

console.log(Status.Pending);   // 输出: 0
console.log(Status.Completed); // 输出: 2
```

默认情况下，TypeScript 从 `0` 开始分配数值。

#### **自定义枚举数值:**

```typescript
enum OrderStatus {
  Pending = 1,
  Shipped = 5,
  Delivered = 10,
}

console.log(OrderStatus.Shipped); // 输出: 5
```

这里为每个状态分配了自定义值。

#### **字符串枚举:**

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up); // 输出: "UP"
```

字符串枚举存储固定的文本值而不是数字。

#### **在函数中使用枚举:**

```typescript
function getStatusText(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "Order is pending.";
    case Status.InProgress:
      return "Order is in progress.";
    case Status.Completed:
      return "Order is completed.";
    default:
      return "Unknown status.";
  }
}

console.log(getStatusText(Status.InProgress)); // 输出: "Order is in progress."
```

这个函数接受一个枚举值并根据状态返回一个信息。

元组定义了具有不同数据类型的固定长度数组，而枚举为更好的可读性提供命名常量，使代码更具结构性和类型安全。

## **TypeScript 中的类型断言、unknown类型和never类型**

### **类型断言**

类型断言告诉 TypeScript 将某个值视为特定类型。它不会改变值，但帮助编译器理解类型。

```typescript
let value: unknown = "Hello, TypeScript!";

// 使用类型断言将 'value' 视为字符串
let strLength: number = (value as string).length;

console.log(strLength); // 输出: 18
```

这里，`value` 最初是 `unknown` 类型，但类型断言 (`as string`) 允许将其视为字符串。

这里还有另一种编写类型断言的方式：

```typescript
let num = <number>(10);
console.log(num); // 输出: 10
```

`<number>` 语法也执行类型断言。

### **unknown类型**

现在让我们简单回顾一下 `unknown` 类型。记住，它是一个比 `any` 更安全的选择，并且可以保存任何值——但是TypeScript在使用它之前需要进行类型检查。

```typescript
let data: unknown;

data = "Hello";
data = 42;
data = true;

// 使用值之前进行类型检查
if (typeof data === "string") {
  console.log(data.toUpperCase()); // 仅当数据是字符串时有效
}
```

由于 `data` 是 `unknown` 类型，TypeScript 不允许在不先检查其类型的情况下直接操作。

### **never 类型**

`never` 类型表示永远不会发生的值。它通常用于永不返回或总是抛出错误的函数。

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong!"); // 此函数永远不返回
```

在这里，`throwError` 不会返回任何东西，因为它总是抛出一个错误。

#### **Switch 案例中的 Never 类型示例：**

```typescript
type Status = "success" | "failure";

function checkStatus(status: Status): void {
  switch (status) {
    case "success":
      console.log("Operation was successful.");
      break;
    case "failure":
      console.log("Operation failed.");
      break;
    default:
      const unexpected: never = status; // 确保所有情况都被处理
  }
}
```

这确保了 `Status` 的所有可能值都得到了处理，从而防止了意料之外的行为。

下面是这些不同方法的快速比较：

| **功能** | **描述** |
| **类型断言** | 告诉 TypeScript 将某个值视为特定类型。 |
| **Unknown 类型** | 允许存储任何值，但在使用前需要进行类型检查。 |
| **Never 类型** | 表示永远不会发生的值，用于函未返回的数。 |

## TypeScript 中的泛型

泛型允许编写灵活、可重用且类型安全的代码。泛型让函数、类或接口在不指定特定类型的情况下工作，同时保持类型安全。

### **基本泛型**

一个泛型函数可以与任何类型一起工作，同时保持类型安全。

```typescript
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello")); // 输出: "Hello"
console.log(identity<number>(42));      // 输出: 42
```

这里，`<T>` 是一个**泛型类型参数**，允许 `identity` 使用任何类型。

### **数组中的泛型**

泛型有助于在数组中强制执行类型安全。

以下是使用泛型反转数组的示例：

```typescript
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

console.log(reverseArray<number>([1, 2, 3]));  // 输出: [3, 2, 1]
console.log(reverseArray<string>(["A", "B", "C"])); // 输出: ["C", "B", "A"]
```

这确保了函数始终返回与接收到的相同类型的数组。

### **接口中的泛型**

泛型可以在接口中用来定义灵活的对象结构。

```typescript
interface StorageBox<T> {
  content: T;
}

let numberBox: StorageBox<number> = { content: 100 };
let stringBox: StorageBox<string> = { content: "TypeScript" };

console.log(numberBox.content); // 输出: 100
console.log(stringBox.content); // 输出: "TypeScript"
```

在这里，`StorageBox<T>` 允许存储不同类型的内容，同时确保一致性。

### **类中的泛型**

泛型在类中同样有效，使其更具可重用性。

这是一个泛型队列类的示例：

```typescript
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

let numberQueue = new Queue<number>();
numberQueue.enqueue(10);
numberQueue.enqueue(20);
console.log(numberQueue.dequeue()); // 输出: 10

let stringQueue = new Queue<string>();
stringQueue.enqueue("Hello");
stringQueue.enqueue("World");
console.log(stringQueue.dequeue()); // 输出: "Hello"
```

此类适用于任何类型，同时保持类型安全。

### **具有多个类型参数的泛型**

函数或类可以接受多个泛型类型。

以下是交换两个值的函数示例：

```typescript
function swap<T, U>(first: T, second: U): [U, T] {
  return [second, first];
}

console.log(swap<string, number>("Age", 25)); // 输出: [25, "Age"]
console.log(swap<boolean, string>(true, "Yes")); // 输出: ["Yes", true]
```

在这里，`<T, U>` 允许函数同时处理不同的类型。

### **具有约束的泛型**

有时候，泛型类型应遵循某些规则。**约束**确保某个类型具有特定属性。

以下是确保类型具有 `length` 属性的示例：

```typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength("Hello"));   // 输出: 5
console.log(getLength([1, 2, 3])); // 输出: 3
```

在这里，`T extends { length: number }` 确保 `T` 具有 `length` 属性。

### **高级：使用** `keyof` **操作符的泛型**

`keyof` 操作符可用于确保有效的属性名称。

以下是按名称获取属性值的示例：

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let user = { name: "Alice", age: 30 };

console.log(getProperty(user, "name")); // 输出: "Alice"
console.log(getProperty(user, "age"));  // 输出: 30
```

## 结语

在本手册中，您深入了解了如何在 React 中使用 TypeScript 的基础知识。我们讨论了诸如类型注解、类型推论以及对象和数组管理等重要概念，展示了 TypeScript 如何提高代码的稳定性和可维护性。

我们还涵盖了一些高级主题，如联合类型和 any 类型、只读属性的使用，以及泛型、类型别名和接口的应用。希望这些示例能帮助您理解 TypeScript 如何增强您的 JavaScript 开发，使 TS 成为构建健壮的大型应用程序的宝贵工具。

[1]: heading-what-is-typescript
[2]: #heading-setting-up-the-project
[3]: heading-type-annotations-and-type-inference
[4]: heading-commonly-used-type-annotations
[5]: heading-type-inference
[6]: #heading-the-union-and-any-types
[7]: heading-be-careful-when-using-any-in-typescript
[8]: #heading-unknown-as-a-safer-alternative-to-any-in-typescript
[9]: #heading-objects-in-typescript
[10]: heading-the-problem-of-mutability
[11]: heading-readonly-on-object-properties
[12]: heading-readonly-arrays
[13]: heading-function-params-and-function-returns
[14]: heading-the-risks-of-using-any
[15]: heading-use-explicit-types-for-parameters-and-return-values
[16]: heading-using-unknown-as-a-safer-alternative-to-any-in-typescript
[17]: heading-handling-optional-default-in-typescript
[18]: heading-rest-parameters
[19]: heading-objects-as-parameters-in-typescript
[20]: #heading-type-aliases-in-typescript
[21]: heading-what-is-an-intersection-type-in-typescript
[22]: heading-interfaces-in-typescript
[23]: heading-tuples-and-enums
[24]: heading-type-assertion-type-unknown-and-type-never-in-typescript
[25]: #heading-generics-in-typescript
[26]: heading-conclusion
[27]: https://vite.dev/guide/

