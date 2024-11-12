---
title: 如何使用开发者工具在浏览器中调试 JavaScript
date: 2024-11-12T09:26:25.951Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/how-to-use-developer-tools-to-debug-javascript-in-the-browser/
posteditor: "Miya"
proofreader: ""
---

`console` 对象是开发人员处理有问题的 JavaScript 代码时的第一选择。

但如果你仍然只是重度依赖于 `console` 对象来调试 JavaScript，你就错过了浏览器开发者工具的一些很棒的功能。

让我们来看看如何使用 Chrome 开发者工具调试 JavaScript。

## 我们要处理的问题代码

首先，我准备了一些有 bug 的代码，将四个数字相加并计算其平均值。

这是代码的 HTML 部分：

```html
<label for="num1">Number 1:</label>
<input type="text" id="num1" placeholder="Enter a number" />

<label for="num2">Number 2:</label>
<input type="text" id="num2" placeholder="Enter a number" />

<label for="num3">Number 3:</label>
<input type="text" id="num3" placeholder="Enter a number" />

<label for="num4">Number 4:</label>
<input type="text" id="num4" placeholder="Enter a number" />

<button id="calculateBtn">Calculate Sum and Average</button>

<p id="addition-result"></p>
<p id="average-result"></p>

<script src="script.js"></script>
```

这是非常简单的 CSS，用来将标签推到各自的行，并稍微放大输入元素和按钮：

```css
body {
  background: #d2d2d2;
}

label {
  display: block;
  margin-top: 0.5rem;
}

button {
  display: block;
  margin-top: 1rem;
}

input,
button {
  padding: 0.2rem;
}
```

这是 HTML 和 CSS 在浏览器中显示的样子：

![Sum and Average Calculator](https://cdn.hashnode.com/res/hashnode/image/upload/v1729767323533/db4b903d-8cfe-4d6b-85b2-2233a2a2bcd0.png)

以下是有 bug 的 JavaScript：

```javascript
const calculateBtn = document.getElementById('calculateBtn');
const sumText = document.getElementById('sum');
const avgText = document.getElementById('average');

function calculateTotal(a, b, c, d) {
 return a + b + c + d;
}

function calculateAverage(total, count) {
 return total / count;
}

function handleButtonClick() {
 let num1 = document.getElementById('num1').value;
 let num2 = document.getElementById('num2').value;
 let num3 = document.getElementById('num3').value;
 let num4 = document.getElementById('num4').value;

 let total = calculateTotal(num1, num2, num3, num4);
 let average = calculateAverage(total, 4);

 sumText.textContent = `The sum is ${total}`;
 avgText.textContent = `The average is: ${average}`;
}

calculateBtn.addEventListener('click', handleButtonClick);
```

如果你输入四个数字，比如 `3`、`4`、`2`、`1`，然后点击 `Calculate Sum and Average` 按钮，会发生什么：

![Wrong sum and average](https://cdn.hashnode.com/res/hashnode/image/upload/v1729767417791/6c5a49d1-dc6f-45db-9720-c3c6daedbeb3.png)

不幸的是，数字只是被合并了，平均值是基于这个计算的，这意味着执行了拼接而不是加法。加法执行有问题也导致了平均值计算错误。

让我们用浏览器开发者工具检查一下发生了什么。

## 如何使用 Chrome 开发者工具调试 JavaScript 代码

当出现这样的错误时，你可能会倾向于添加一堆控制台日志。

很多时候，控制台日志可以完成任务，但你必须花费大量时间来弄清楚事情。

浏览器开发者工具为你提供了更多选项，比如添加断点、监视特定表达式，甚至逐行执行代码以查看错误发生的位置。

### 如何打开开发者工具和源代码（Sources）标签

首先，右键点击浏览器中并选择“检查”来打开 Chrome DevTools。

在 DevTools 中，打开源代码（Sources）标签查看程序中的文件。你也可以按下键盘上的 `F12` 键并选择源代码（Sources）标签。

以下是 Chrome DevTools 源代码（Sources）标签的简要结构：

![Anatomy of the chrome developer tools source tab](https://cdn.hashnode.com/res/hashnode/image/upload/v1729767628385/30310aa1-ddb0-41d5-a3ce-9ecc84b034e3.png)

在调试器标签顶部有一些灰色的图标。激活它们，你可以逐步执行代码并添加或移除断点。

在调试器标签中还有：

- 监视：你可以在此添加和查看监视表达式。

- 断点：你可以在此查看你添加断点的代码行。

- 作用域：包含本地和全局变量。

- 调用栈：显示导致当前位置代码执行的函数调用。
    

要查看任何文件的内容，你可以点击它。然后，调试器标签中的一些图标将不再是灰色的。

![Icons of the Chrome developer tools source tab](https://cdn.hashnode.com/res/hashnode/image/upload/v1729767971149/04f8e5c7-a08a-49b3-be7f-2854f820b94a.png)

### 如何通过添加断点调试代码

要开始调试代码，你可以通过点击行号添加断点。

断点就像你可以在开发者工具中设置的行标记，它会在该行执行之前暂停你的代码执行。这样，你就可以检查变量的值，查看函数是否按预期被调用，或者观察代码的整体流程。

当你添加一个断点并执行代码时，该行会出现一个蓝色图标，表示执行会在该行之前暂停。

或者，你可以在你想暂停执行的行添加 `debugger` 语句。不过，还是让我们坚持使用断点。

例如，我们在第 14 行添加一个断点，然后输入四个数字并点击 `Calculate Sum and Average` 按钮，这样代码就会运行：

![第 14 行的断点](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768234921/8c1f0d4e-5fb2-4461-8e62-574d95a51672.png)

此时，你会看到没有继续执行——这就是为什么在 “Local” 下所有变量显示 “value unavailable”。

从这里开始，你可以通过点击右上角的 step 图标逐行单步执行代码：

![Chrome 开发者工具源标签的 step 图标](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768323163/45fb5c6b-682d-4b90-8bec-d4ef8596c4b7.png)

一旦你点击 step 图标，你所退出的行被执行。

![点击 step 图标](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768411765/f2670800-c8d8-490f-8dc9-1fdfa8c8da7b.png)

你可以看到，`"3"` 是第`14`行的值。该值被一对双引号包围，这意味着它是一个字符串。你需要确保这一点，而这正是 watch 特性能让你做到的。你将很快了解这一特性。

如果你正处理多行代码，逐行单步执行可能会耗费时间。因此，你可能需要添加另一个断点。

我将继续在第 `23` 行设置一个断点并再次运行代码：

![第 23 行的断点](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768528136/478fc837-0c16-4990-9b70-19ff1695331e.png)

现在你可以看到，除了 `average` 外的所有变量结果似乎都是字符串。这引出了下一个 Chrome 开发者工具调试器特性——watcher。

### 如何使用开发者工具的监视（watch）特性

开发者工具的监视特性可以让你在代码运行时监视（watch）特定的变量或表达式。

要确认变量的数据类型，你可以添加一个显示其值的监视（watch）表达式，或更合适地，显示其类型。

要添加监视（watch）表达式，点击 “监视（watch）” 旁边的加号（+）图标，并按键盘上的 `ENTER`。

![添加 watch 表达式](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768780977/ef22ae71-068c-41a2-9a2e-509c7c6a8afb.png)

以下监视（watch）表达式是确认 `num1` 到 `num4` 和 `total` 为字符串——但它们应为整数：

![watch 表达式](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768808497/5d7352d6-37b3-490c-9ce2-f430c2d9a0e6.png)

你还可以在控制台标签中验证变量类型：

![控制台的变量类型](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768847227/3730a133-0a5b-4eb1-a5dd-257fa0ac2293.png)

这意味着你输入的数字被解释为字符串。这是因为在 JavaScript 中，从 HTML 元素（如输入字段）获取的值总是字符串。

这是因为输入元素的 `value` 属性返回一个字符串，即使你输入的是数字——这就是 bug 出现的原因。

记住，JavaScript 只会连接字符串，即使它们是数字。这说明 `"3"` 是字符串类型而不是整型。

要修复这个 bug，你应将 `num1` 到 `num4` 的类型更改为整数，以便 JavaScript 能正确地将它们的值相加。

然后你可以继续在 DevTools 中修复此问题，并在 Windows 上按 `CTRL + S` 或在Mac上按 `CMD + S` 保存代码。你也可以在代码编辑器中，通过在数字的变量中使用 `parseInt()` 来修复它。

一旦你这么做并再次运行代码，watcher 中应该显示正确的数据类型，Local 下应该显示正确的变量值：

![watch 中的正确变量类型](https://cdn.hashnode.com/res/hashnode/image/upload/v1729768941146/964cabbd-2298-4303-ac0d-2b54af070d66.png)

你也可以在代码编辑器中实现这些更改，使一切正常工作。以下是正确的代码：

```javascript
const calculateBtn = document.getElementById('calculateBtn');
const sumText = document.getElementById('sum');
const avgText = document.getElementById('average');

function calculateTotal(a, b, c, d) {
  return a + b + c + d;
}

function calculateAverage(total, count) {
  return total / count;
}

function handleButtonClick() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let num3 = parseInt(document.getElementById('num3').value);
  let num4 = parseInt(document.getElementById('num4').value);

  let total = calculateTotal(num1, num2, num3, num4);
  let average = calculateAverage(total, 4);

  sumText.textContent = `The sum is ${total}`;
  avgText.textContent = `The average is: ${average}`;
}

calculateBtn.addEventListener('click', handleButtonClick);
```

以下是在浏览器中的结果：

![求和并计算平均值正常执行](https://cdn.hashnode.com/res/hashnode/image/upload/v1729769063113/b7e39538-e9fe-4ce5-a4de-e98f43263235.png)

## 总结

这就是如何使用 Chrome 的开发者工具调试 JavaScript。断点和监视器功能以及 step 按钮是对基本控制台日志的升级。

请注意，每个现代浏览器都内置了这个 JavaScript 调试工具，因此你可以使用相同的方法在 Firefox 或 Edge 中调试 JavaScript。

