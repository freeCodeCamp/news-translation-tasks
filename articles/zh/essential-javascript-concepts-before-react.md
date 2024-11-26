```markdown
---
title: 学习 React 前需要了解的重要 JavaScript 概念 - 附代码示例
date: 2024-11-26T03:53:53.989Z
author: Akande Olalekan Toheeb
authorURL: https://www.freecodecamp.org/news/author/MuhToyyib/
originalURL: https://www.freecodecamp.org/news/essential-javascript-concepts-before-react/
posteditor: ""
proofreader: ""
---

你可能见过像 React、Vue 和 Angular 这样的新兴技术，它们承诺将彻底改变你的前端开发。这些技术对你来说很有吸引力，迫不及待地想投入其中，构建令人惊叹的用户界面。但请先等一等！在开始这段激动人心的旅程之前，请考虑以下几点：

<!-- more -->

坚实的 JavaScript 基础是任何成功的前端项目的基石。

在本文中，我旨在为你提供在 React 和其他前端框架中成功所需的基本 JavaScript 知识。在阅读完这篇文章后，你将更好地理解 JavaScript 的关键概念，如解构、短路求值、数据获取等，并能够有效地应用这些知识。

你准备好提升你的 JavaScript 技能了吗？让我们直接开始吧 😉

## 目录

- [如何使用模板字面量][1]
- [如何解构对象和数组][2]
- [使用三元运算符替代 if/else 语句][3]
- [如何使用箭头函数][4]
- [使用 &&, || 和 ?? 进行短路求值][5]
- [如何使用数组方法][6]
- [如何获取数据][7]
- [你现在可以开始学习 React 了][8]

## 如何使用模板字面量

是否曾觉得在 JavaScript 中构建字符串是一件繁琐的事？想象一下，当你要写一个生日祝福时，还要不停地加上引号和加号(+)以包含名字。

在 ES6 之前，字符串拼接就是这样的现实。假设你想向用户问候：

```
let name = prompt("What is your name?");
let greeting = alert("Hello, " + name + “!");
```

这段代码是可行的，但在处理多个变量或动态内容时，这样写会变得繁杂。

之后引入的模板字面量是个救星！它是在 ES6 中被推出的，提供了一种更优雅的方法来创建使用反引号 (\`\`) 而不是引号的字符串。下面是如何用模板字面量重写问候语：

```
let name = prompt("What is your name?");
let greetings = alert(`Hello ${name}`);
```

看出区别了吗？`${name}` 部分告诉 JavaScript 将 `name` 变量的值直接插入到字符串中。

模板字面量让你能轻松地在 JavaScript 生态系统中进行字符串插值，再也不需要烦人的字符串拼接了 😉！

**模板字面量的优势包括：**

- **可读性：** 你的代码变得更清晰，更易于理解。
- **可维护性：** 由于更改集中在模板字面量内，更新变得更加简单。
- **表达能力：** 你可以创建多行字符串，甚至在其中使用函数！

模板字面量不仅让你的生活更轻松，在构建 React 的动态组件时也是至关重要的。例如，你可以创建动态列表项、条件渲染组件或根据数据格式化输出。

```
const name = 'Alice';
const greeting = `Hello, ${name}! How are you today?`;
console.log(greeting); // 输出: Hello, Alice! How are you today?

const items = ['apple', 'banana', 'orange'];
const listItems = items.map(item => `<li>${item}</li>`).join('');
const list = `<ul>${listItems}</ul>`;
```

如你所见，模板字面量使得在 React 中构建动态且可读的基于字符串的组件变得更加容易。

## 如何解构对象和数组

在 JavaScript 中，解构允许你将数组中的值或对象中的属性提取到单独的变量中，提供了一种简洁而高效的方式来处理数据结构。

### 如何在 JavaScript 中解构对象

要解构一个对象，可以使用花括号 `{ }` 并指定你想要提取的属性名称。让我们来看一个例子：

```
const person = {
    firstName: 'Olalekan',
    lastName: 'Akande',
    middleName: 'Toheeb',
    age: 30 
};

const { lastName, firstName } = person;
console.log(firstName, lastName); // 输出: Akande Olalekan
```

在这段代码中，我们解构了 `person` 对象，并将 `firstName` 和 `lastName` 属性提取到单独的变量中。

#### 嵌套解构：

你还可以解构嵌套对象：

```
const address = {
    street: '123 Main St',
    city: 'Ilorin',
    state: {
        name: 'Kwara',
        abbreviation: 'KW'
    }
};

const { street, city, state: { name } } = address;
console.log(street, city, name); // 输出: 123 Main St Ilorin Kwara
```

**默认值：**

你可以为未定义的属性提供默认值：

```
const config = {
    theme: 'light'
};

const { theme = 'dark' } = config;
console.log(theme); // 输出: light
```

#### 重命名属性

有时，为了提高可读性或保持项目内的一致性，你可能需要将现有属性名更改为不同的名称。解构提供了一种方便的方法来实现这一点。

在解构赋值中使用不同的属性名称可以在提取时有效地重命名该属性。

```
const person = {
    firstName: 'Olalekan',
    lastName: 'Akande',
    middleName: 'Toheeb',
    age: 30 
};
```
```

在这个例子中，`firstName` 被重命名为 `givenName`，`lastName` 被重命名为 `familyName` 进行解构。

这种重命名技术可以提高代码的清晰度和可维护性，尤其是在处理复杂对象时。

### 解构数组

要解构一个数组，您可以使用方括号 `[]` 并指定要提取的元素的索引：

```
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second, rest); // 输出：1 2
```

### React 中的解构

解构在 React 组件中广泛用于提取属性(props)、状态(state)和上下文(context)值。它简化了代码并提高了可读性：

```
import React from 'react';

const MyComponent = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};
```

![对象、数组中的解构以及 rest 和 spread 操作符](https://cdn.hashnode.com/res/hashnode/image/upload/v1723980495782/290be34c-171f-4010-b42f-224af48a6cd2.png)

### Rest 和 Spread 操作符

Rest 和 spread 操作符与解构密切相关。

#### Rest 操作符

Rest 操作符 (`...`) 将数组或对象的剩余元素收集到一个新的数组或对象中：

```
const numbers = [1, 2, 3, 4, 5];
const [first, ...rest] = numbers;
console.log(rest); // 输出：[2, 3, 4, 5]
```

#### Spread 操作符

Spread 操作符同样使用 `...`，但用于将一个可迭代对象展开为单个元素：

```
const numbers = [1, 2, 3];
const newArray = [...numbers, 4, 5];
console.log(newArray); // 输出：[1, 2, 3, 4, 5]
```

在 React 中，spread 操作符经常用于克隆数组或对象，或将属性传递给组件：

```
const person = { name: 'John', age: 30 };
const newPerson = { ...person, city: 'New York' };
console.log(newPerson); // 输出：{ name: 'John', age: 30, city: 'New York' }
```

理解解构和 rest/spread 操作符可以帮助你编写更精简和表达性更强的 JavaScript 代码，尤其是在处理 React 时。

## 三元操作符代替 if/else 语句

三元操作符提供了一种简洁的替代传统 `if/else` 语句的方法，特别适用于基于条件返回值的表达式。

**为何选择三元操作符而不是** **if/else**?

虽然 `if/else` 语句功能强大，但在处理简单条件逻辑时，有时会导致代码冗长。三元操作符提供了一种更紧凑和可读的语法，使代码更易于理解和维护。

**语法和用法**

三元操作符的语法如下：

```
condition ? expression1 : expression2
```

如果 `condition` 为真，则计算并返回 `expression1`。否则，计算并返回 `expression2`。

**纯示例：**

```
let age = 19;

const isAdult = age >= 18;
const message = isAdult ? 'You are an adult.' : 'You are a minor.';
console.log(message);
```

上述例子将根据 `age` 变量的值返回一个消息。你能预测控制台中会显示什么吗？

**React 中的示例：**

```

const MyComponent = ({ isLoggedIn }) => {
    return (
        <div>
        {isLoggedIn ? (
        <p>Welcome, user!</p>
        ) : (
        <p>Please log in.</p>
        )}
        </div>
    );
};
```

在这个 React 组件中，三元操作符根据 `isLoggedIn` 属性条件性地渲染不同的内容。

**三元操作符的优点：**

-   **简洁的语法：** 三元操作符提供了一种更紧凑的表达条件逻辑的方法。
    
-   **可读性：** 它们可以通过使条件表达式更简洁和易于理解来提高代码的可读性。
    
-   **效率：** 有时，三元操作符比 `if/else` 语句更高效。
    

通过将三元操作符合并到 JavaScript 代码中，你可以编写更优雅和高效的程序。

## 如何使用箭头函数

箭头函数是在 ES6 中引入的，提供了一种定义函数的简洁语法。它们在函数式编程范式中特别有用，并能显著提高代码的可读性和可维护性。

**什么是箭头函数？**

箭头函数是一种用于声明函数的简写语法。与传统的函数声明或表达式相比，它们有更简单的结构。它们通常用于简短的内联函数。

**语法：**

```
const myFunction = (arg1, arg2) => {
    // 函数体
};
```

**关键特性：**

-   **隐式的** **this** **绑定：** [箭头函数不创建自己的 `this` 上下文][9]。相反，它们继承外部作用域的 `this` 值，这在回调函数和事件处理程序中非常有用。
    
-   **简洁的语法：** 箭头函数语法常常比传统的声明更短且更可读。
    
-   **隐式返回：** 对于带有 `return` 语句的单行箭头函数，可以省略 `return` 关键字。
    

**示例：**

```
const greet = name => `Hello, ${name}!`;
console.log(greet('Akande')); // 输出：Hello, Akande!
```

箭头函数在 React 组件中被广泛使用，主要用于以下用途：

-   **事件处理函数：**

```
<button onClick={() => this.handleClick()}>点击我</button>
```

**解释：** 在这里，箭头函数被用作 `onClick` 事件的处理函数。这样可以确保处理函数中的 `this` 上下文指向组件实例，从而可以访问组件的状态和方法。

-   **Map, filter 和 reduce：**

```
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);
```

**解释：** 箭头函数常用于数组方法，比如 map、filter 和 reduce，以对数据进行转换。在这个例子中，map 方法通过箭头函数的回调创建了一个新数组，每个元素都被加倍。

**Props**：

```
const MyComponent = ({ name, onButtonClick }) => {
    return (
        <button onClick={onButtonClick}>点击我</button>
    );
};
```

**解释：** 箭头函数可以用来定义作为属性的函数。在这个例子中，`onButtonClick` 属性是一个可以传递给组件的函数。当按钮被点击时，`onButtonClick` 函数将被调用。

通过有效使用箭头函数，可以编写更简洁、更易读和可维护的 React 代码。

## 使用 `&&` 、`||` 和 `??` 的短路运算

短路运算是一种 JavaScript 的评估技术，可以优化条件表达式。它涉及在最终结果确定后立即停止逻辑表达式的评估。

逻辑运算符中的短路运算意味着，在某些条件下，运算符将立即返回第一个值，而不会查看第二个值。

可以说短路运算取决于 truthy（真值）和 falsy（假值）。

Falsy 值包括：0，空字符串（''），`null`，`undefined`。

Truthy 值基本上是任何不属于 falsy 的值。

### 逻辑运算符何时短路？

#### 逻辑与 (&&)

`&&` 运算符在运算符左侧（第一个操作数）为假时发生短路（也就是说，当第一个值是任何 falsy 值时，它立即返回第一个值）。如果第一个操作数为真，则没有短路，它将返回运算符右侧（第二个操作数）。

这称为向左短路。

**例子：**

```
const isLoggedIn = true;
const greeting = isLoggedIn && <p>欢迎，用户！</p>;
```

在这个例子中，只有当 `isLoggedIn` 为真时，变量 greeting 才会被赋值为 JSX 元素。如果 `isLoggedIn` 为假，`&&` 运算符将短路，JSX 元素将不会被渲染。

#### 逻辑或 (||)

`||` 运算符的工作方向与 `&&` 运算符相反。当第一个操作数为真时，`||` 运算符短路。这就是说，如果 `||` 运算符的左侧为真，它将立即返回第二个值。

这称为向右短路。

**例子：**

```
const username = 'Akande';
const greeting = username || 'Guest';
```

这段代码将赋予 `greeting` 变量 `username` 的值，如果它不是任何 falsy 值。否则，它将赋予默认值 `Guest`。

**注意：** 在某些情况下，如果你希望返回 0，则在使用 `||` 运算符时需要非常小心。

例如

```
let numberOfBooksRead = 0;
const hasRead = numberOfBooksRead || 'No data';

// hasRead = 'No data'
```

上述情况将返回 `No data` 因为第一个操作数—`numberOfBooksRead`—是一个 falsy 值。在这种情况下，更好的选择是使用空值合并运算符 (`??`)

#### 空值合并运算符 (??)

空值合并运算符 (`??`) 如果左侧操作数不是 `null` 或 `undefined`，则返回该操作数。否则，返回右侧操作数。

上述示例现在可以写为

```
let numberOfBooksRead = 0;
const hasRead = numberOfBooksRead ?? 'No data';  

// hasRead = 0;
```

### 可选链 (?.)

可选链运算符 (`?.`) 提供了一种更安全的方式来在 React 中访问嵌套属性，而不会在属性是 `undefined` 或 `null` 时抛出错误。

```
const user = { address: { street: '123 Main St' } };
const street = user?.address?.street;
```

在这个例子中，如果 `user` 和 `user.address` 都存在，`street` 将被赋予值 `'123 Main St'`。如果两者中的任何一个是 `null` 或 `undefined`，`street` 将是 `undefined`，并且不会抛出错误。

有效使用[短路运算][10]和[可选链][11]可以让你编写更简洁和更健壮的 React 组件。

## 如何使用数组方法

数组是 JavaScript 中的基础数据结构，用于存储元素集合。它们是有序的，并且可以包含不同数据类型的元素。

### 基本数组方法

-   **map():** 通过对每个原始数组元素应用函数来创建一个新数组。使用 `map()` 更新现有元素。
    
-   **filter():** 创建一个新数组，其中只包含通过所提供函数实现的测试的元素。使用 `filter()` 删除元素。
    
-   **reduce():** 将函数应用于累加器和每个数组元素，以将其减少为单个值。
    
-   **sort():** 就地对数组的元素进行排序。
    

-   **flatMap():** 扁平化数组并对每个元素应用映射函数。
    
-   **reduceRight():** 类似于 `reduce()`，但从数组的最后一个元素开始。
    
-   **find():** 返回数组中第一个满足提供的测试函数的元素。
    

### 将数组方法与 React 关联

数组方法对于处理 React 组件中的数据至关重要。它们可以转换、过滤和聚合数据，以渲染动态的 UI 元素。

使用 `map()` 更新元素的示例：

```
const items = ['apple', 'banana', 'orange'];
const updatedItems = items.map(item => item === 'apple' ? 'grapefruit' : item);
```

在这个例子中，`map()` 方法创建了一个新数组，其中元素 `'apple'` 被替换为 `'grapefruit'`。

使用 `filter()` 删除元素的示例：

```
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
```

在这个例子中，`filter()` 方法创建了一个新数组，其中仅包含原数组中的偶数。

使用 `reduce()` 聚合数据的示例：

```
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

在这个例子中，`reduce()` 方法计算了数字数组中所有元素的和。

使用 `flatMap()` 对数组进行扁平化处理的示例：

```
const nestedArrays = [[1, 2], [3, 4]];
const flattenedArray = nestedArrays.flatMap(array => array);
```

在这个例子中，`flatMap()` 方法将嵌套数组扁平化为一个单一的数组。

### 链式调用数组方法

您可以将多个数组方法链接在一起，以简洁有效的方式对数据进行复杂的转换。

示例：

```
const users = [
    { name: 'Akande', age: 30 },
    { name: 'Toheeb', age: 25 },
    { name: 'Olalekan', age: 35 }
];

const adultUsers = users
.filter(user => user.age >= 18)
.map(user => ({ name: user.name, age: user.age }));
```

在这个例子中，我们首先根据年龄对用户进行了过滤，然后对过滤后的数组进行映射，创建一个仅包含姓名和年龄属性的新数组。

通过掌握 [数组方法][12]，您可以编写更高效且表达力更强的 React 组件，以有效地处理和操纵数据。

## 如何获取数据

数据是 Web 应用程序的命脉，React 也不例外。从 API 等外部来源获取数据是 React 开发中的一项基本任务。这些数据用于填充组件、更新 UI 和提供动态用户体验。

### Promises 和 Fetch

Promises 代表异步操作的最终完成（或失败）。`fetch()` API 是一个内置的 JavaScript 函数，返回一个表示资源提取的 Promise。

**使用 `fetch()` 的示例：**

```
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
    // 在此处处理数据
    console.log(data);
    })
    .catch(error => {
    // 在此处处理错误
    console.error(error);
    };
```

### Async/Await

`async/await` 语法为使用 Promises 提供了一种更简洁的方式。它允许您以更同步的风格编写异步代码。

使用 `async/await` 的示例：

```
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
    console.error(error);
    }
}

fetchData();
```

### 在 React 组件中获取数据

在 React 组件中，通常在生命周期方法如 `componentDidMount` 或 `useEffect` 中获取数据。这确保了组件挂载后以及任何初始状态设置后进行数据获取。

示例：

```

import React, { useEffect, useState } from 'react';

function MyComponent() {
const [data, setData] = useState(null);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            setData(data);
            } catch (error) {
            console.error(error);
            }
        };

    fetchData();
}, []);

    return (
        <div>
        {data ? (
        <p>Data: {JSON.stringify(data)}</p>
        ) : (
        <p>Loading...</p>
        )}
        </div>
    );
}
```

在这个例子中，`useEffect` 钩子用于在组件挂载时获取数据。`useState` 钩子用于管理加载状态并显示获取的数据。

### 错误处理

在数据获取过程中处理可能发生的错误至关重要。您可以使用 `try/catch` 块捕获异常，并为用户提供适当的反馈。

通过理解 [**Promises**][13]、[**Fetch API**][14]、[**async/await**][15] 和 [**错误处理**][16]，您可以在 React 应用程序中有效地获取和管理数据。

## 您可以立即开始使用 React

本文探讨了成功进行 React 开发所需的基本 JavaScript 概念。

通过掌握模板字符串、解构、三元运算符、箭头函数、短路运算、数组方法、fetch API 和异步/等待，您将做好迎接 React 所带来的挑战和机遇的准备。

要加深对 React 的理解，可以查看以下内容：

-   [**官方 React 文档**][17]
    
-   [**创建 React 应用程序**][18]：一个快速设置 React 项目的流行工具
    
-   **在线课程**：像 [**freeCodeCamp**][19]、**Udemy** 和 **Coursera** 这样的平台提供全面的 React 课程。
    
-   **React 社区**：通过论坛、社交媒体和见面会与 React 社区互动，向他人学习并保持对最新趋势的更新。
    

### 呼吁行动

现在您已经有了坚实的 JavaScript 基础，是时候投入到 React 中并构建令人惊叹的 web 应用了。不要害怕尝试，犯错，并从您的经验中学习。React 社区是欢迎且支持的，因此在需要帮助时请不要犹豫。

**记住：** 掌握 React 的旅程是持续的。保持好奇心，继续学习，享受创造创新 web 体验的过程。

不要忘记分享并推荐这篇文章给任何可能需要的人。

![谢谢 Memoji](https://thumbs2.imgbox.com/ef/4c/4hKjdQ6N_t.jpeg)

感谢阅读。让我们在 [X][20] 或 [LinkedIn][21] 上联系。

[1]: #heading-how-to-use-template-literals
[2]: #heading-how-to-destructure-objects-and-arrays
[3]: #heading-ternaries-instead-of-ifelse-statements
[4]: #heading-how-to-use-arrow-functions
[5]: #heading-short-circuiting-with-and-or-nullish
[6]: #heading-how-to-use-array-methods
[7]: #heading-how-to-fetch-data
[8]: #heading-you-can-start-react-now
[9]: https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/#heading-arrow-functions-dont-have-this-binding
[10]: https://www.freecodecamp.org/news/short-circuiting-in-javascript/
[11]: https://www.freecodecamp.org/news/optional-chaining-javascript/
[12]: https://www.freecodecamp.org/news/the-javascript-array-handbook/
[13]: https://www.freecodecamp.org/news/the-javascript-promises-handbook/
[14]: https://www.freecodecamp.org/news/javascript-fetch-api-for-beginners/
[15]: https://www.freecodecamp.org/news/asynchronous-programming-in-javascript-examples/
[16]: https://www.freecodecamp.org/news/try-catch-in-javascript/
[17]: %5Bhttps:/legacy.reactjs.org/docs/getting-started.html%5D(https:/legacy.reactjs.org/docs/getting-started.html)**
[18]: https://create-react-app.dev/
[19]: https://www.freecodecamp.org/
[20]: https://x.com/devtoheeb
[21]: https://www.linkedin.com/in/akande-olalekan-toheeb-2a69a0221

