---
title: JavaScript 面试准备手册 – 必知话题及代码示例
date: 2024-08-19T08:41:41.590Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/kunal-nalawade-25/
originalURL: https://www.freecodecamp.org/news/js-interview-prep-handbook/
posteditor: ""
proofreader: ""
---

JavaScript 是一种广泛应用于网页开发的语言，几乎每个网站的交互功能都由它提供支持。JavaScript 使创建动态网页成为可能，并且非常灵活多变。

<!-- more -->

在 2024 年，JavaScript 仍然是最受欢迎的编程语言之一。许多公司在寻找精通 JavaScript 及其框架（如 Angular 和 React）的人才。如果你是一名有抱负的网页开发者，了解这些公司在面试中寻找什么是开启美好机会的钥匙。

在这本手册中，我将深入探讨你在面试前必须准备的几个关键 JavaScript 概念。掌握基础知识和以下概念，你将在网页开发领域展示自己作为一个出色候选人的风采。

## 目录

-   [如何使用 `var`、`let` 和 `const` 关键字][1]
-   [什么是提升？][2]
-   [闭包如何工作？][3]
-   [如何实现防抖？][4]
-   [如何实现节流？][5]
-   [什么是柯里化？][6]
-   [`==` 和 `===` 有什么区别？][7]
-   [`this` 关键字如何工作？][8]
-   [如何使用 `call`、`apply` 和 `bind` 方法][9]
-   [什么是原型和原型继承？][10]
-   [如何使用扩展操作符][11]
-   [数组和对象解构如何工作？][12]
-   [什么是 Promise？][13]
-   [如何使用 `async` 和 `await` 关键字][14]
-   [什么是事件循环？][15]
-   [事件传播如何工作 – 冒泡与捕获][16]
-   [什么是生成器函数？][17]
-   [如何为 `Array.map()`、`Array.reduce()` 和 `Array.filter()` 实现 Polyfill][18]
-   [附加思考][19]

## 如何使用 `var`、`let` 和 `const` 关键字

在 JavaScript 中，你可以通过三种方式声明变量：使用 `var`、`let` 和 `const`。理解这三者之间的区别至关重要。

`var` 变量具有全局和函数级作用域。如果变量在全局声明，则可以在任何地方访问，如果在函数内声明，则只能在函数内的任意位置访问。

```javascript
var a=5
function fun() {
    var b=4
}

console.log(a) // 5
console.log(b) // 抛出 ReferenceError
```

`let` 变量具有块级作用域。如果在块内声明该变量，则不能在块外部访问它。例如：

```javascript
var a = 5;
if (a > 1) {
    var b = 6;
    let c = 7;
}
console.log(a); // 打印 5
console.log(b); // 打印 6
console.log(c); // 抛出 ReferenceError
```

在这里，变量 `a` 和 `b` 具有全局作用域，因此可以在任何地方访问。变量 `c` 不能在 `if` 块外访问，因为 `let` 仅具有块级作用域。

`const` 用于声明常量。一旦使用 `const` 声明变量，就不能修改该变量。

```javascript
const x = 5;
x = 6; // 抛出错误
```

然而，你可以修改对象的属性或数组的元素。

```javascript
const obj = { name: 'kunal', age: 21 };
obj.name = 'alex';
console.log(obj); // { name: 'alex', age: 21 }

const arr = [1, 2, 3];
arr[1] = 4;
console.log(arr); // [ 1, 4, 3 ]
```

## 什么是提升？

提升指的是 JavaScript 的默认行为，即将所有变量和函数声明移动到顶部。这意味着你可以在它们声明之前使用它们。

```javascript
x=5 
console.log(x) // 打印 5 
var x               
```

在上面的代码中，JavaScript 将变量声明移动到了代码块的顶部。这意味着相当于在第一行声明 `x`。

对于函数，声明也会被移动到顶部：

```javascript
function foo() {
    console.log("foo called");
}

foo(); // foo called
```

然而，这对于 `let` 和 `const` 不适用。

```javascript
x = 5; // 抛出 ReferenceError
let x;

fiz(); // 抛出 ReferenceError
const fiz = () => { console.log("fiz called") };
```

## 闭包如何工作？

闭包是 JavaScript 中的一个重要概念。当你在一个函数内部包含另一个函数时，内部函数可以访问外部函数的所有变量。

但是，当该内部函数由外部函数返回时，内部函数可以在外部函数之外的任何地方调用，并且仍然可以访问这些变量。

```javascript
function fun() {
    let count = 0;
    return () => {
        count++;
        console.log(count);
    };
}

const innerFun = fun();
innerFun(); // 打印 1
innerFun(); // 打印 2
innerFun(); // 打印 3
```

在这里，`fun()` 声明并初始化了一个变量 `count`。然后，它返回一个内部函数，该内部函数在打印之前递增 `count`。现在，当你在 `fun()` 方法之外的任何地方调用 `innerFun()` 时，它仍然可以访问并递增 `count`。


[
## 如何在 JavaScript 中使用闭包 — 初学者指南

学习闭包是 JavaScript 中一个令人困惑的概念，因为很难看到它们的实际用途。不同于诸如函数、变量和对象等概念，你并不总是有意义地直接使用闭包。你不会说：哦！这里我将使用闭包作为解决方案。但是在…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Matías HernándezfreeCodeCamp.org

![English-Header-4](https://www.freecodecamp.org/news/content/images/2021/01/English-Header-4.png)

][21]

## 如何实现防抖

防抖是一种延迟函数调用几秒钟并确保函数调用和执行之间总有延迟的技术。

当你调用一个函数时，它会在延迟后执行。但是，如果你在该延期内再次调用该函数，之前的调用会被取消，并开始一个新的计时器。这个过程在每次后续调用中重复。

让我们看看如何实现它：

```javascript
function debounce(func, delay) {
    let timeout = null;
    return (...args) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            timeout = null;
        }, delay);
    };
}
```

防抖接收一个函数和一个延迟作为参数，并返回一个新的防抖函数。当你调用防抖函数时，它将在`delay`毫秒后执行。如果在此时间内再次调用函数，它会取消之前的调用并再次等待`delay`。

让我们测试一下这个行为：

```javascript
function fun(a, b) {
    console.log(`这是一函数，参数为${a}和${b}`);
}

const debouncedFun = debounce(fun, 500);
debouncedFun(2, 3);
debouncedFun(2, 3);
debouncedFun(2, 3); // 这是一函数，参数为2和3
```

前两次调用不会执行，而第三次会在500毫秒后执行。防抖使用了闭包的概念，所以首先理解它们很重要。

防抖有很多应用，其中最流行的是搜索栏中的自动完成功能。我在下面的文章中详细解释了防抖：

[

在 JavaScript 中的防抖 – 通过在 React 中构建自动完成功能来解释

嗨，读者们，希望你们一切都好！我带来了另一篇关于 Web 开发的教程。如果你是喜欢使用 JavaScript 和 React 开发 Web 应用程序的人，那么这篇文章适合你。当你将一个新的应用程序推入生产环境时，你会希望它对用户友好。一个网站的…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Kunal NalawadefreeCodeCamp.org

![photo-1550063873-ab792950096b](https://www.freecodecamp.org/news/content/images/2024/02/photo-1550063873-ab792950096b.jpeg)

][22]

## 如何实现节流

节流是一种限制函数调用频率的技术。一次节流函数在首次执行后，只有在经过某个延迟后才能再次调用。如果在该延迟时间内调用，则无效。

让我们看看如何实现它：

```javascript
function throttle(func, delay) {
    let timeout = null;
    return (...args) => {
        if (!timeout) {
            func(...args);
            timeout = setTimeout(() => {
                timeout = null;
            }, delay);
        }
    };
}
```

`throttle()`接收一个函数和一个延迟作为参数，并返回一个节流函数。调用节流函数时，它会首次执行并启动一个带有`delay`的计时器。在此期间，无论调用多少次节流函数，它都不会再次执行。

让我们测试一下这个行为：

```javascript
function fun(a, b) {
    console.log(`这是一函数，参数为${a}和${b}`);
}

const throttledFun = throttle(fun, 500);

throttledFun(2, 3); // 这是一函数，参数为2和3
throttledFun(2, 3);

setTimeout(() => {
    throttledFun(2, 3);
}, 300);

setTimeout(() => {
    throttledFun(2, 3); // 这是一函数，参数为2和3
}, 600);
```

这里，第一次调用立即执行，并且在接下来的500毫秒内，不会有任何函数调用执行。最后一次调用因为是在500毫秒之后调用的，所以执行了。

节流也使用了闭包的概念。我在我的文章中详细解释了节流，所以请查看：

[

JavaScript 中的节流是什么？通过一个简单的 React 用例来解释

欢迎回来，开发者伙伴们！今天，我们将再次深入 JavaScript 和 Web 开发，学习节流。作为一个开发者，使你的网站用户友好是很重要的。这对于产品的成功有很长的路要走，并且用户体验的一个关键部分是网站…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Kunal NalawadefreeCodeCamp.org

![throttling-image](https://www.freecodecamp.org/news/content/images/2024/04/throttling-image.jpeg)

][23]

## 什么是科里化？

科里化是一种技术，其中多个参数的函数被转换为一系列函数，每个函数接收单个参数并返回另一个函数。例如，考虑下面的函数：


通过柯里化，上述函数可以写成：

```javascript
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
```

在这里，`curryAdd` 内部的每个函数都接受一个参数，并返回另一个函数，直到收集到所有参数。`curryAdd` 也被称为[高阶函数][24]。

柯里化允许你重用函数的部分实现。如果你没有所有的参数，可先固定函数的某些参数，并返回一个可重用的函数。

```javascript
// 可重用的函数
const addTwo = curryAdd(2);
console.log(addTwo); // 打印该函数

// 调用最终结果
const result1 = addTwo(5)(10);
console.log(result1); // 17

const result2 = addTwo(3)(5);
console.log(result2); // 10
```

`addTwo` 是一个可重用的函数，可以在以后有更多参数时使用。

因此，柯里化通过部分函数应用增强了代码模块化和灵活性。它还允许你创建适合特定需求的函数，如上例所示。

柯里化通过将复杂函数分解为更简单、更易管理的部分来简化复杂函数。这导致代码更加简洁和易读。

## `==` 和 `===` 的区别是什么？

这个问题非常简单，但在面试中经常被问到。

```javascript
let a = 1;
let b = "1";

console.log(a == b); // true
console.log(a === b); // false
```

-   `==` 仅比较 `a` 和 `b` 的值，
-   `===` 同时比较 `a` 和 `b` 的值和数据类型

## `this` 关键字是如何工作的？

`this` 关键字是你当前引用的对象。它的值设置为你使用它的上下文。在全局引用时，`this` 指的是[window][25] 对象。

```javascript
console.log(this) // 打印 window 对象 {}
```

`this` 可用于访问对象的属性。

```javascript
const obj = {
    name: 'kunal',
    age: 21,
    getInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
};

obj.getInfo();
```

参考[文档][26]了解更多关于 `this` 关键字的信息。

## 如何使用 `call`，`apply` 和 `bind` 方法

当你在函数内部使用 `this` 时，它的值设置为调用该函数的对象。让我们看一个例子：

```javascript
function getInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
}
```

`call`，`apply` 和 `bind` 用于设置方法内部 `this` 关键字的值。

### `call`

要在某个对象上调用 `getInfo()` 函数，使用 `call` 函数。让我们创建两个对象并在这些对象上调用 `getInfo()`。

```javascript
const ob1 = { name: 'alex', age: 25 };
const ob2 = { name: 'marcus', age: 23 };

getInfo.call(ob1); // Name: alex, Age: 25
getInfo.call(ob2); // Name: marcus, Age: 23
```

`call` 设置函数内部 `this` 关键字的值。

### `apply`

`apply` 方法与 `call` 类似，但在传递参数的方式上有所不同。考虑一个带参数的函数：

```javascript
function getInfo(a, b) {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    console.log(`Args: ${a} and ${b}`);
}

const obj = {
    name: 'alex',
    age: 25
};

getInfo.call(obj, 2, 3);
getInfo.apply(obj, [2, 3]);
```

### `bind`

`bind` 用于创建一个新的函数，该函数的 `this` 关键字设置为某个对象。让我们用上面的 `getInfo` 函数作为例子。

```javascript
const obj = {
    name: 'alex',
    age: 25
};

const objGetInfo = getInfo.bind(obj, 2, 3);
objGetInfo();
```

当 `bind` 调用 `getInfo()` 函数时，它返回一个新的函数，该函数绑定到 `obj`。现在，每次调用 `objGetInfo()` 函数时，`this` 关键字都指向 `obj`。

这三种方法是类似的，即它们设置 `this` 关键字的值。然而，`bind` 的一个关键区别在于它返回一个新的函数，而 `call` 和 `apply` 只是简单地调用函数。

## 什么是原型和原型继承？

继承是面向对象编程中的一个概念，允许对象从另一个对象继承属性和方法。然而，在 JavaScript 中继承的工作方式有所不同。

在 JavaScript 中，每个对象都有一个属性，链接到另一个对象，这个对象称为原型。原型本身是一个对象，可以有自己的原型，从而形成一个原型链。当我们到达一个等于 `null` 的原型时，这个链就结束了。

原型允许你从另一个对象继承方法和属性。当一个属性在对象上不存在时，JavaScript 会搜索它的原型，依此类推，直到到达原型链的末尾。

让我们通过一个例子来理解。

```javascript
let animal = {
    eats: true,
    walk() {
        console.log("Animal is walking");
    }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;
rabbit.walk(); // Animal is walking
```

`Object.create` 创建了一个新的对象 `rabbit`，它的原型设置为 `animal`。你也可以设置新对象的其他属性。

此外，`walk()` 方法不存在于 `rabbit` 上，所以它搜索对象的原型 `animal`。这意味着 `rabbit` 对象继承了 `animal` 对象的属性和方法。

```javascript
const dog = {
    bark() {
        console.log("Dog barking");
    }
};

Object.setPrototypeOf(dog, animal);
console.log(dog.eats); // true
dog.walk(); // Animal is walking
```

你还可以使用函数作为构造函数，并使用 `prototype` 属性设置它的原型。

```javascript
function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log(`${this.name} is walking`);
};

const dog = new Animal("Dog");
console.log(dog); // Animal { name: 'Dog' }
dog.walk(); // Dog is walking
```

你可以在 [Germán Cocca][27] 的以下帖子中了解更多关于 JavaScript 中原型和继承的信息。

[

JavaScript Prototypes and Inheritance – and Why They Say Everything in JS is an Object

大家好！在这篇简短的文章中，我们将讨论 JavaScript 中的原型继承及其含义。内容目录：\* 简介 \* 如何在 JavaScript 中访问原型的属性和方法 \* 原型链 \* 基于原型的语言 \* Javascript c…

![favicon](https://cdn.freecodecamp.org/universal/favicons/favicon.ico)Germán CoccafreeCodeCamp.org

![pexels-maor-attias-5192478](https://www.freecodecamp.org/news/content/images/2022/04/pexels-maor-attias-5192478.jpg)

][28]

## 如何使用拓展运算符

拓展运算符用于将数组或对象的内容展开为单独的元素，或者将一堆元素收集到一个单独的对象中。它有以下使用案例：

拓展运算符可以用于将数组复制到一个新的数组中：

```javascript
const arr1 = [2, 4, 5];
const arr2 = [...arr1];

console.log(arr1); // [2, 4, 5]
console.log(arr2); // [2, 4, 5]
console.log(arr1 == arr2); // false
```

如同等号运算符所示，`arr1` 和 `arr2` 是完全不同的对象。

你还可以在创建新对象时重用一个对象的字段：

```javascript
const obj1 = { name: 'kunal', age: 23 };
const obj2 = { ...obj1, gender: 'male', city: 'Mumbai' };

console.log(obj2); // { name: 'kunal', age: 23, gender: 'male', city: 'Mumbai' }
```

你可以将传递给函数的多个参数收集到一个数组中。

```javascript
function fun1(...args) {
    console.log(args);
}

fun1(1, 2, 3, 4, 5); // [ 1, 2, 3, 4, 5 ]
```

或者你可以将数组的元素作为单独的参数传递给函数。

```javascript
function fun2(a, b) {
    console.log(`${a} and ${b}`);
}

const numbers = [1, 2];
fun2(...numbers);
```

## 数组和对象解构是如何工作的？

类似于拓展运算符，你可以将数组或对象的元素分配给单独的变量。

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

对象同样也是：        

```javascript
const obj = { name: 'kunal', age: 22, gender: 'male' };
const {name, age, gender} = obj;

console.log(name); // kunal
console.log(age); // 22
console.log(gender); // male
```

## 什么是 Promise？

Promise 是 JavaScript 中一个非常重要的概念，几乎肯定会在面试中被问到。Promise 用于 JavaScript 中的异步操作，如超时或 API 调用。

Promise 使用一个 [Promise][29] 对象，该对象存在于三种状态之一：待定、已完成（已解决）和已拒绝。当异步操作结束时，promise 可以被解决（成功）或被拒绝（失败）。

让我们来看一个简单的例子：

```javascript
function asyncOperation() {
    return new Promise((resolve, reject) => {
        const x = 1 + Math.random() * 10;
        if (x < 5) 
            resolve("Successful");
        else 
            reject("Error");
    });
}
```

上述函数返回一个执行异步操作的 promise。

-   如果操作成功，则调用 `resolve` 方法表示 promise 已被解决。
-   如果操作失败，则调用 `reject` 方法表示 promise 已被拒绝。

在这个例子中，这些方法是随机调用的。要在代码中处理这个 promise，请使用 `then` 和 `catch` 方法。

```javascript
asyncOperation()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
```

-   `then` 方法接受一个回调函数，如果 promise 解决了，则执行此回调函数。它接受一个响应对象作为参数，该对象等于你传递给 `resolve` 方法的对象。
-   `catch` 方法接受一个回调函数，如果 promise 被拒绝，则执行此回调函数，并接受一个错误对象作为参数，该对象由 `reject` 方法传递。

上述代码会随机打印 "Successful" 和 "Error" 。

除了基础知识外，Promise 对象还包含一些处理多个 Promise 的有用方法：[Promise.all()][30]、[Promise.any()][31]、[Promise.race()][32]。

阅读以下教程以详细了解 Promise：

[

JavaScript Promise Tutorial – How to Resolve or Reject Promises in JS

Promise 是 JavaScript 中异步操作的重要构建块。你可能认为 promise 很难理解、学习和使用。相信我，你并不孤单！Promise 对于许多 Web 开发者来说都是一个挑战，即使他们在这方面已经有多年经验。在这篇文章中我们将…
```

![cover-1](https://www.freecodecamp.org/news/content/images/2020/11/cover-1.png)

][33]

## 如何使用 `async` 和 `await` 关键字

`await` 关键字会暂停函数的执行，直到一个 promise 已经被解决或拒绝。`await` 只能在 `async` 函数中使用。让我们举个例子：

```javascript
function dataPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data retrieved"), 500);
    });
}

async function fetchData() {
    try {
        const res = await dataPromise();
        console.log(res); // Data retrieved (after 500ms)
    } catch(err) {
        console.log(err);
    }
}

fetchData();
```

当调用 `dataPromise()` 时，函数的执行会暂停 500 毫秒。执行会在 promise 被解决后继续。要处理错误，请使用 `try-catch` 块将代码包围。

`await` 关键字也使得处理一个接一个运行的多个 promise 更加容易。

```javascript
function promise1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promise 1 resolved"), 500);
    });
}

function promise2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Promise 2 resolved"), 300);
    });
}

async function fetchData() {
    try {
        const res1 = await promise1();
        console.log(res1); // Promise 1 resolved (after 500ms)
        const res2 = await promise2();
        console.log(res2); // Promise 2 resolved (after 300ms)
    } catch(err) {
        console.log(err);
    }
}

fetchData();
```

`async` 和 `await` 使处理 promise 更加容易，也通过移除代码中的嵌套使代码更简洁和可读。

## 什么是事件循环？

事件循环解释了异步操作和事件处理的机制。这是 JavaScript 的一个关键概念，解释了它的运行时模型，因此也是面试中最常被问到的问题之一。

与其提供一个简短的解释，我认为你应该详细学习并完全理解它。阅读 [MDN 文档][34] 以通过图示详细理解事件循环。

如果你喜欢视频，你也可以观看 Philip Roberts 的以下视频：

<iframe width="356" height="200" src="https://www.youtube.com/embed/8aGhZQkoFbQ?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" title="What the heck is the event loop anyway? | Philip Roberts | JSConf EU" name="fitvid0"></iframe>

## 事件传播是如何工作的 – 冒泡和捕获

事件传播发生在事件被目标元素及其所有祖先元素捕获并处理时。看下以下例子：

```html
<body>
    <div id="box"> <button id="button">Click Me</button> </div>
    <script src="script.js"></script>
</body>
```

当你点击按钮时，你也点击了 `div` 元素以及 `body` 元素。事件会在整个 DOM 树中传播。让我们为上述所有元素添加处理程序：

```javascript
document.body.addEventListener("click", () => {
    console.log("Body clicked");
});

document.getElementById("box").addEventListener("click", () => {
    console.log("div clicked");
});

document.getElementById("button").addEventListener("click", () => {
    console.log("Button clicked");
});
```

事件传播有两种方式：

### 事件冒泡

当按钮被点击时，按钮的事件处理程序首先被调用。然后，事件在 DOM 树中冒泡，并且父元素的事件处理程序按序从直接父元素到最高的祖先元素依次被调用。即：`div` 和 `body` 元素分别被依次触发。

![image-52](https://www.freecodecamp.org/news/content/images/2024/05/image-52.png)

事件冒泡

### 事件捕获

这与事件冒泡类似，但顺序相反。事件首先被根元素捕获，然后沿 DOM 树向下传播到目标元素。

事件处理程序是按顺序调用的，从根元素开始，一直到目标元素。可以通过在 `addEventListener()` 函数中传递 `true` 作为第三个参数来实现。

```javascript
document.body.addEventListener("click", () => {
    console.log("Body clicked");
}, true);
```

![image-53](https://www.freecodecamp.org/news/content/images/2024/05/image-53.png)

事件捕获

但是，这看起来像是适得其反。毕竟，用户只想点击按钮，他们不知道 DOM 树结构。所以，为了防止这种行为，我们可以使用 `stopPropagation()` 方法。

```javascript
document.getElementById("button").addEventListener("click", (event) => {
    event.stopPropagation();
    console.log("Button clicked");
});
```

![image-54](https://www.freecodecamp.org/news/content/images/2024/05/image-54.png)

停止传播

## 什么是生成器函数？

生成器函数是一种特殊类型的函数，可以暂停其执行并稍后恢复。每次暂停执行时，它们还会返回一个值。

以下是一个生成器函数的基本示例：

```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
}
```

生成器函数使用 `function*` 声明，并使用 `yield` 关键字来暂停执行并返回一个值。上面的语法创建了一个 [GeneratorFunction][35] 对象。

```javascript
const gen = generatorFunction()
```

‌此对象使用一个 [iterator][36] 来执行生成器函数。迭代器提供了一个 `next()` 方法，该方法执行函数体直到下一个 `yield` 语句，并返回一个包含 `yield` 值和一个 `done` 属性（布尔值）的对象，该属性指示生成器函数是否已到达末尾。

让我们调用生成器函数：

```javascript
console.log(gen.next().value); // 1
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

‌这里，首次调用 `next()` 产生 1，第二次产生 2。最后一次不产生任何值，并将 `done` 标志设置为 true，因为没有更多的 `yield` 语句。

你还可以使用 `for` 循环遍历生成器函数：

```javascript
for(value of generatorFunction()) {
  console.log(value)
}
```

通过这种方式，你可以在任何时间进入或退出函数来控制生成器函数的执行。

## 如何为 `Array.map()`、`Array.reduce()` 和 `Array.filter()` 实现 Polyfills

自诞生以来，JavaScript 已经演变了很多。JavaScript 添加了许多以前不存在的方法和构造。大多数现代浏览器都使用最新版本的 JavaScript。

然而，仍有一些应用程序在使用旧版本的 JavaScript 的老浏览器上运行。数组方法如 `map`、`reduce` 和 `filter` 可能不可用。因此，您可能需要为这些方法提供 polyfills。

Polyfills 是为旧版不支持的浏览器提供现代功能的代码片段。这确保了您的代码可以在不同浏览器和版本上无缝运行。

大多数公司都有网站仍然面向运行旧浏览器的用户和系统。因此，了解如何为常用方法编写 polyfills 是很重要的。

在我们的案例中，我们将为 `Array.map`、`Array.reduce` 和 `Array.filter` 方法编写 polyfills。这意味着我们将用自己的实现来代替默认实现。

### `Array.map`

此方法将回调函数作为参数，对每个数组元素执行，并返回一个新的、修改后的数组。

回调函数接受三个参数：数组元素、索引和数组本身。后两个参数是可选的。

```javascript
Array.prototype.map = function(callback) {
  var newArray = [];
  for (var i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};
```

‌逻辑很简单。对数组的每个元素调用函数，并将每个值添加到新数组中。`this` 关键字是你调用函数的对象，在这种情况下是数组。

### `Array.filter`

此方法也将回调函数作为参数。回调函数对每个数组元素运行一个条件并返回一个布尔值。`filter` 方法返回一个新的、经过过滤的数组，其中包含满足条件的元素。

回调函数接受三个参数：数组元素、索引和数组本身。后两个参数是可选的。

```javascript
Array.prototype.filter = function(callback) {
  var filteredArr = [];
  for (var i = 0; i < this.length; i++) {
    var condition = callback(this[i], i, this);
    if (condition) {
      filteredArr.push(this[i]);
    }
  }
  return filteredArr;
};
```

在这里，使用回调函数返回的布尔值将元素添加到新数组中。

### `Array.reduce`

此方法将一个回调函数和一个初始值作为参数，并将数组简化为一个单一的值。这是通过对累加器和当前值执行函数并将结果存储到累加器中完成的。

回调函数接受四个参数：累加器、当前元素、索引和数组本身。后两个参数是可选的。

```javascript
Array.prototype.reduce = function(callback, initialValue) {
    var accumulator = initialValue;
    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
};
```

最初，将累加器设置为初始值。对每个数组元素执行回调函数，并将结果存储在累加器中。如果累加器是未定义的，则将其设置为元素本身。

让我们测试这些方法：

```javascript
const arr = [1, 2, 3];
console.log(arr.map(ele => ele * 2)); // [ 2, 4, 6 ]
console.log(arr.filter(ele => ele < 2)); // [ 1 ]
console.log(arr.reduce((total, ele) => total + ele, 0)); // 6
```

**注意：** 在为任何属性添加 polyfill 之前，始终检查该属性是否存在于对象的原型上，否则你可能会覆盖现有行为。例如：

## 额外的想法

在结束之前，我想分享一些额外的想法。破解 JavaScript 面试不仅仅是记住概念。确保深入了解每个主题并彻底理解它，包括其应用。

此外，不要低估像沟通这样的软技能的重要性。清晰地向面试官表达你的想法与了解知识同样重要。

当你被问到任何上述概念的问题时，首先简要解释一下这个概念，然后用一个例子进行更详细的说明。

用例子讲解对于回答任何面试问题都是至关重要的。它可以让面试官更容易理解你的思维过程。在这篇文章中，我在解释每个概念时也遵循了类似的模式。

最后，在整个面试准备过程中，不断重温本手册。请随时将其用作备忘录。如果你是一名经验丰富的开发人员，这本手册也会帮助你重温和强化这些概念。

## 结论

面试可能会相当可怕和不可预测。尽管对 JavaScript 技能的需求很高，竞争也同样激烈。建立坚实的基础对于成功的面试准备至关重要。

在本手册中，我概述了准备下次 JavaScript 面试的几个重要主题，并对每个概念进行了详细解释。虽然这不是一个详尽的列表，但它涵盖了几个关键概念。如果你认为我遗漏了任何重要主题，请告诉我。

如果你无法理解内容或觉得解释不满意，请在下面评论你的想法。新想法总是受到赞赏的！随时在 Twitter 上与我联系。

祝你面试好运！！！

---

![Kunal Nalawade](https://www.freecodecamp.org/news/content/images/size/w60/2023/01/prof.jpeg)

阅读[更多文章][37]。

---

如果你读到这里，感谢作者以示关心。说声谢谢。

学习免费编程。freeCodeCamp 的开源课程帮助了超过 40,000 人获得开发人员工作。[开始学习][38]

[1]: #how-to-use-var-let-and-const-keywords
[2]: #what-is-hoisting
[3]: #how-do-closures-work
[4]: #how-to-implement-debouncing
[5]: #how-to-implement-throttling
[6]: #what-is-currying
[7]: #what-is-the-difference-between-and-
[8]: #how-does-the-this-keyword-work
[9]: #how-to-use-the-call-apply-and-bind-methods
[10]: #what-are-prototypes-and-prototypal-inheritance
[11]: #-how-to-use-the-spread-operator
[12]: #how-does-array-and-object-destructuring-work
[13]: #what-are-promises
[14]: #how-to-use-the-async-and-await-keywords
[15]: #what-is-an-event-loop
[16]: #how-event-propagation-works-bubbling-and-capturing
[17]: #what-are-generator-functions
[18]: #how-to-implement-polyfills-for-array-map-array-reduce-and-array-filter-
[19]: #additional-thoughts
[20]: https://www.freecodecamp.org/news/author/matias-hernandez/
[21]: https://www.freecodecamp.org/news/closures-in-javascript/
[22]: https://www.freecodecamp.org/news/deboucing-in-react-autocomplete-example/
[23]: https://www.freecodecamp.org/news/throttling-in-javascript/
[24]: https://www.freecodecamp.org/news/higher-order-functions-explained/
[25]: https://developer.mozilla.org/en-US/docs/Web/API/Window
[26]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[27]: https://www.freecodecamp.org/news/author/gercocca/
[28]: https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/
[29]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[30]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
[31]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any
[32]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
[33]: https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/
[34]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop
[35]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
[36]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol
[37]: /news/author/kunal-nalawade-25/
[38]: https://www.freecodecamp.org/learn/

