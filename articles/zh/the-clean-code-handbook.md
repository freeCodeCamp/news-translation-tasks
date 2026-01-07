---
title: "清洁代码手册：如何为敏捷软件开发编写更好的代码"
date: 2025-07-17T01:56:30.419Z
author: Programming with Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/the-clean-code-handbook/
posteditor: "Tsukistar"
proofreader: ""
---

构建可扩展的软件应用程序需要编写干净的代码，这种代码简单到任何开发人员都能理解。

<!-- more -->

在这篇文章中，我将解释并演示什么是干净的代码。然后，我将分享我最喜欢的代码整洁模式，用于构建现代敏捷应用程序。

我不会使用复杂的术语。我会用简单明了的 JavaScript 示例来展示核心概念。开门见山，这就是我的风格。

让我们开始吧。

## 目录

1.  [坏代码的成本][1]
    
2.  [清洁编码者 vs. 混乱编码者][2]
    
3.  [如果你的代码一团糟，AI 也救不了你 🗑️][3]
    
4.  [用于构建敏捷应用的 12 个整洁代码设计模式 ⚖️][4]
    
    -   [🌿 使用有意义的名称][5]
        
    -   [🔨 保持函数的专注性 (SRP)][6]
        
    -   [🚪 谨慎使用注释][7]
        
    -   [⚡ 编写优秀注释的最佳实践][8]
        
    -   [🧩 让你的代码可读][9]
        
    -   [🏌️ 测试你写的所有内容][10]
        
    -   [💉 使用依赖注入][11]
        
    -   [📂 清理项目结构][12]
        
    -   [🤹‍♂️ 格式保持一致][13]
        
    -   [✋ 停止硬编码值][14]
        
    -   [🤏 保持函数简短][15]
        
    -   [⛺ 遵循童子军原则][16]
        
    -   [🏟️ 遵循开放/封闭原则][17]
        
5.  [帮助你编写整洁代码的现代最佳实践：总结 🥷][18]
    
6.  [保持代码整洁的自动化工具 ⚓][19]
    
    -   [1️⃣ 静态分析][20]
        
    -   [2️⃣ 自动代码格式化][21]
        
    -   [3️⃣ 持续集成 (CI) 测试][22]
        
    -   [4️⃣ CI/CD 流水线][23]
        
7.  [文档在敏捷软件开发中的角色 🚣][24]
    
8.  [结论 🏁][25]
    
9.  [关于代码整洁的常见问题 🧯][26]
    

![敏捷软件开发梗图](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xh3j6ccn1hc3euc3lfyl.png)

在敏捷中，变化是唯一不变的，干净的代码是你的盔甲。它使你具有适应性、敏捷性，最重要的是，它使你能够掌控局面。

一个无可辩驳事实是：如果你想在软件开发行业中生存，编写整洁代码不是可选项，而是必须掌握的能力。幸运的是，我们人类通过努力和练习可以掌握干净的代码。

## 坏代码的成本

![混乱代码与整洁代码成本对比图表 by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdai6npb55j71sguj6kl.png)

为了解释这个堆叠条形图，在初始开发阶段，坏代码比整洁代码的变更成本**稍微**高一些。

但是当我们进入维护和重构阶段时，这个差距显著扩大，坏代码的成本几乎是整洁代码的两倍。

到了代码变成遗留代码时，坏代码的变更成本达到100%——现在升级它非常昂贵，而整洁代码仍然更易于管理，仅为45%。

目前，美国关于软件低质量成本的最新分析仍是信息与软件质量联盟（Consortium for Information and Software Quality，CISQ，网站：cisq.org）发布的2022年报告。在这份报告中，经估计，2022年软件低质量给美国经济造成了至少2.41万亿美元的损失，其中技术债务（technical debt）约占1.52万亿美元。

你可以[在这里阅读更多内容][28]。

近期的讨论继续强调技术债务对软件质量和业务绩效的显著影响。

例如，[2024年的一项调查][29]指出，超过50%的公司认为技术债务占其IT总预算的四分之一以上。如果不加以解决，这确实会阻碍创新。

如你所见，毫无疑问，在软件开发中，坏代码是一个代价高昂的问题。

## **清洁编码者 vs. 混乱编码者**

这是一个展示**两种**编码者历程的图表：

![整洁代码 vs 坏代码图表](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c6ubf77uwipf4gtucw8q.png)

-   **⚠️ 混乱编码者（红线）：** 起步快但坠落得更惨。他们写的行数越多，问题也越多。
    
-   **⚡ 清洁编码者（蓝线）：** 开始慢但保持一致。增长不会停止——它会加速。
    

🫵 现在，你可以决定想走哪条线。

## 如果你的代码一团糟，AI 也救不了你 🗑️

当你陷入写代码的困境时，你可能会求助于 AI。但让我告诉你：如果你的代码一团糟，AI 也救不了你。

这就像是在沙子上建房子。没错，它会暂时站立，但一旦有强风或大浪，就会倒塌。

记住：AI 只是一个工具。如果你不知道如何编写清晰、可扩展的应用程序，你就是在为失败做准备。

我反复看到了这样的情况：那些熟悉五种编程语言的开发者。 他们能构建应用程序、网站、软件。他们对算法和数据结构了如指掌。

但当面对大型项目或别人的混乱代码时，他们崩溃了。

他们就像一位能设计和建造自己飞机的航天工程师，但却不知道如何驾驶它们。他们在自己的代码中坠毁。

这曾经是我...... 从前的我。我会写上数千行代码，但却发现自己连上周写的东西都无法理解。对我来说，那是一片混乱。

然后我恍然大悟 —— 每个开发者都在为此苦苦挣扎。问题不在于我知道多少，而在于我如何组织和结构化我所知道的东西。换句话说，这取决于对编程艺术本身的理解。

我决定摆脱这个陷阱。经过五个月的密集工作——每天写作、设计和研究四到五个小时——我创造了一本我希望在开始编程时就能拥有的书。一本完整的初学者指南：**从零到一的代码整洁。**

![从零到一的清洁代码封面图片：从混乱代码到杰作](https://cdn.hashnode.com/res/hashnode/image/upload/v1737731329839/c4c862d9-7fdc-460a-ae2e-18b19468b6ec.png)

如果你想了解更多关于这本书的信息，我会在本教程的结尾告诉你所有的细节。所以继续阅读以了解更多关于编写清洁代码的内容。

## 构建敏捷应用程序的 12 种清洁代码设计模式 ⚖️

如果你的代码不遵循这些现代清洁代码设计模式，你可能正在制造一个定时炸弹。这些模式是你的工具。掌握它们并享受项目成功的乐趣。让我一一展示给你看。

### **🌿 使用有意义的名称**

将你的变量或函数命名为 b 或 x 并没有帮助。将它们称为何物以便于理解。以下是一个坏变量名与好变量名的例子：

```
// 弱且模糊
let b = 5;

// 强且清晰
let numberOfUsers = 5;
```

那些写出不清晰名字的人不想承认他们的错误。不要成为那样的人。

![Shahan创作的关于不良变量名和良好变量名的漫画](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165724746/37b2edc3-3c68-47a8-ab6f-f131a2239a01.png)

### **🔨 保持函数的专注性 (SRP)**

一个函数应该做到**一件事**——并做到完美。这就是单一职责原则（**SRP**）。

好的代码就像一把锤子。它只打一根钉子，不会打十根。例如，如果你招聘一个人来处理公司里的所有事情——财务、销售、市场营销、清洁工作等等——他们很可能会因为无法专注而惨败。同样的道理适用于你代码中的类。

🚧 当一个类或函数做超过一件事时，就会变成一团乱麻。调试它就像在倒着拼拼图。比如，如果你的类既要处理用户输入又要操作数据库，这不是多任务并行，而是逻辑混乱。将其拆分，遵循一个方法只做一件事的原则。

**🔥 我的规则：**你的代码为你工作。保持它锋利、专注且可控，否则它会控制你。以下是实现这一目标的方法：

```
// 干净编码：一个工作，一种专注
function calculateTotal(a, b) {
    return a + b;
}

function logTotal(user, total) {
    console.log(`用户: ${user}, 总计: ${total}`);
}

// 混乱编码：尝试做所有事情
function calculateAndLogTotal(a, b, user) {
    let total = a + b;
    console.log(`用户: ${user}, 总计: ${total}`);
}
```

🪧 任务混在一起，混乱也就随之而来。就这么简单。

### **🚪 谨慎使用注释**

职业开发者中有一句名言：

> “代码自有其解释。”

你不会每次都解释门是做什么用的，当有人走进房间时，对吧？你的代码也应该这样工作。

加注释没错，但如果代码不加注释就看不懂，那代码本身可能就有毛病。

🪧 好的注释要讲‘为什么’，而不是‘怎么做’或‘是什么’。如果开发者连代码是怎么工作的都看不懂，那他更不可能理解背后的‘为什么’。

以下是一些好的注释与坏的注释的简短例子。我还将向你展示一个编写清洁注释的实际项目。

**例子1：坏注释 👎**

```
// 将价格乘以数量以计算总数
const total = price * quantity;
```

这是一个**坏注释**，因为它只是重复了代码已经说明的内容。代码 `price * quantity` 本身已经很清晰，因此这个注释没有增加任何有用的信息。

**好注释：👍**

如果代码清晰简明，**你不需要注释。**

```
const total = price * quantity;
```

![Shahan创作的说明不必要注释与“无声注释”的图像](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165891398/6a942ad7-5b09-4990-9c7f-95358dafcbf3.png)

**例子2：坏注释 👎**

```
// 检查用户是否登录
function isUserLoggedIn(session) {
    return !!session.user;
}
```

这个注释不好，因为它没有解释 `isUserLoggin()` 的存在原因。它只是解释了正在发生的事情。但我们已经知道这是一个身份验证函数。这个注释是浪费时间。

**好例子 👍**

```
// 用户在访问受保护的资源之前已经通过认证
function isUserLoggedIn(session) {
    return !!session.user;
}
```

这是一个**好的注释**，因为它解释了代码存在的**原因**。它告诉我们函数在允许访问应用程序的敏感部分之前检查用户是否已认证。它关注的是更大的图景。

![之前：“检查用户是否已登录”。之后：“用户在访问受保护的资源之前已经通过认证。”作者：Shahan。](https://cdn.hashnode.com/res/hashnode/image/upload/v1736166143011/b3ddae3d-41cf-4534-8f1a-af710579922c.png)

### **⚡ 编写优秀注释的最佳实践**

1.  **解释“为什么”，而不是“什么”：**
    写注释是为了解释代码的目的或背景，而不是代码正在做什么。
    
2.  **避免明显的注释：**
    不要为代码已经清晰的部分写注释。
    
3.  **保持简短和精确：**
    写简洁的注释，方便阅读，并直接解释目的。
    
4.  **定期更新注释：**
    过时的注释可能误导开发者，所以在代码更改时务必更新注释。
    

**现实世界中的例子（使用好的注释） 🛒**

让我们把这些实践应用到一个真实项目中：一个大型电子商务应用程序。一个函数根据订单详情计算运输成本。下面是完整的代码，我将在下面解释每个注释：

```
// 运输规则：
// - 订单超过 $100 免费运输
// - 低于 $100 的订单标准运输（$10）
// - 国际订单额外 $5

function calculateShipping(order) {
    let shippingCost = 0;

    // 检查订单是否符合免费运输条件
    if (order.total >= 100) {
        shippingCost = 0; // 免费运输
    } else {
        shippingCost = 10; // 标准运输费用
    }

    // 为国际订单增加额外费用
    if (order.isInternational) {
        shippingCost += 5;
    }

    return shippingCost;
}

// 示例使用
const order1 = { total: 120, isInternational: false };
const order2 = { total: 80, isInternational: true };

console.log(calculateShipping(order1)); // 输出：0
console.log(calculateShipping(order2)); // 输出：15
```

在函数的开始，我们包含了一个注释来解释运输费用的规则。这使读者在不需要阅读完整代码的情况下获得逻辑概览。

```
// 运输规则：
// - 订单超过 $100 免费运输
// - 低于 $100 的订单标准运输（$10）
// - 国际订单额外 $5
```

然后，第一个条件检查订单总额是否大于或等于 $100。这里的注释明确了为什么会应用免费运输。

```
// 检查订单是否符合免费运输条件
if (order.total >= 100) {
    shippingCost = 0; // 免费运输
}
```

第二个条件为国际运输应用附加收费。注释解释了为何增加额外费用。

```
// 为国际订单增加额外费用
if (order.isInternational) {
    shippingCost += 5;
}
```

**为什么这些注释很好？**

想象一下你正身处一个 20 人的开发团队。六个月后，有人读到了 `calculateShipping` 这个函数。如果没有这些注释，他们可能得浪费大把时间去猜测为什么国际订单会有一笔额外费用。好的注释能阐明背后的原因，避免让人陷入数小时的烦躁和困惑中。

### **🧩 让你的代码可读**

如果别人看你的代码感觉像是在“破译密码”，那你已经在给团队“埋坑”了。不信请看：

```
// 干净：读起来像看故事一样
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// 杂乱：感到困惑
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
```

如果你的代码杂乱且难以阅读，它会让他人甚至是你自己感到困惑！想象六个月后回到自己写的代码却感觉像在读一种外语。可读性高的代码节省时间，减少错误，使每个人的生活更轻松。

**🍵 为什么可读性很重要？**

1.  **对于你自己：** 当你在几周或几个月后重新访问代码时，整洁的代码能帮助你在不浪费时间弄清楚自己做了什么的情况下继续进行接下来的工作。
    
2.  **对于你的团队：** 如果其他人阅读你的代码，他们不应该像是在解谜题。整洁的代码让团队合作更顺畅，防止沟通不畅。
    
3.  **更少的错误：** 清晰的代码更易于调试，因为你能快速发现错误。
    

**🧙‍♂️ 如何编写可读的代码**

让我们构建一个简单的程序来管理图书馆中的书籍。我们将使其整洁和可读，接下来我将分解这段代码：

```
// 一个表示书籍的类
class Book {
    constructor(title, author, isAvailable) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed "${this.title}".`);
        } else {
            console.log(`Sorry, "${this.title}" is not available.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`You returned "${this.title}".`);
    }
}

// 一个用于展示可用书籍的函数
function displayAvailableBooks(books) {
    console.log("Available books:");
    books.forEach((book) => {
        if (book.isAvailable) {
            console.log(`- ${book.title} by ${book.author}`);
        }
    });
}

// 示例使用
const book1 = new Book("The Clean Coder", "Robert Martin", true);
const book2 = new Book("You Don’t Know JS", "Kyle Simpson", false);
const book3 = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);

const library = [book1, book2, book3];

displayAvailableBooks(library); // 显示可用的书籍
book1.borrow(); // 借阅一本书
displayAvailableBooks(library); // 再次显示可用的书籍
book1.returnBook(); // 归还这本书
displayAvailableBooks(library); // 最终列表
```

我们创建了一个 `Book` 类来表示每本书。它具有像 `title`、`author` 和 `isAvailable` 这样的属性来追踪其状态。

- `borrow` 方法检查书籍是否可用。如果是，则将其标记为不可用并打印一条消息。
- `returnBook` 方法使书籍再次可用。
- `displayAvailableBooks` 函数循环遍历图书馆，只打印可用的书籍。
- 我们创建了三本书（`book1`、`book2`、`book3`）并将它们存储在一个 `library` 数组中。
- 我们借阅和归还书籍，展示了可用书籍列表如何变化。

如你所见，可读代码不仅仅关乎风格。它节省时间，防止错误，并将你的代码在未来几年内保持有用。

### **🏌️ 测试你写的所有内容**

如果你不花时间编写测试，那么代码出故障时就别感到意外。如果你打算编写测试，请遵循这套单元测试策略，以便及早发现问题。

**什么是单元测试？**

具体来说，单元测试检查代码的各个部分（如函数或类）以确保其正常工作。就像在建造房子的墙之前检查每一块砖是否完好一样。

让我给你一个单元测试工作原理的例子：

```javascript
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// 测试它（单元测试）
const calculator = new Calculator();
console.assert(calculator.add(2, 3) === 5, "加法失败");
console.assert(calculator.subtract(5, 3) === 2, "减法失败");
```

让我们来看看这段代码是怎么运行的： 

首先，我们要先构建一个计算器类：

```javascript
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
```

`Calculator` 类有两个方法：`add` 和 `subtract`。

- `add(a, b)` 接受两个数字并返回它们的和。
- `subtract(a, b)` 接受两个数字并返回它们的差。

接下来，我们设置测试：

```javascript
const calculator = new Calculator();
```

在这里，我们创建一个 `Calculator` 类的实例以测试其方法。

然后我们编写测试用例：

```javascript
console.assert(calculator.add(2, 3) === 5, "加法失败");
console.assert(calculator.subtract(5, 3) === 2, "减法失败");
```

`console.assert(condition, message)` 检查条件是否为 `true`。如果是 `false`，则消息（“加法失败”或“减法失败”）将显示在控制台中。

- **第一次测试**：`calculator.add(2, 3) === 5`
  - 调用 `add` 方法，给出 `2` 和 `3`。
  - 检查结果是否为 `5`。

- **第二次测试**：`calculator.subtract(5, 3) === 2`
  - 调用 `subtract` 方法，给出 `5` 和 `3`。
  - 检查结果是否为 `2`。

那么如果出错了会发生什么呢？在这里解决出现的问题是相当简单的。在这种情况下，如果 `add` 或 `subtract` 方法不能正常工作，测试将失败。例如：

```javascript
console.assert(calculator.add(2, 3) === 6, "加法失败");
```

- 条件 `calculator.add(2, 3) === 6` 是 `false`。
- 控制台将显示：“加法失败”。

**实际例子：测试一个登录系统 👥**

让我们测试一个简单的登录系统，看看单元测试在实际场景中如何工作。

```javascript
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}

// 测试 Auth 类
const auth = new Auth();
console.assert(auth.login("admin", "et5t45#@") === true, "有效凭证登录失败");
console.assert(auth.login("user", "wrongpassword") === false, "无效凭证登录成功");
```

首先，创建 `Auth` 类：

```javascript
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}
```

`login` 方法检查用户名是否为 `"admin"` 且密码是否为 `"1234"`。如果两者都匹配，则返回 `true`，否则返回 `false`。

接下来，设置测试：

```javascript
const auth = new Auth();
```

创建一个 `Auth` 类的实例。然后编写测试用例：

```javascript
console.assert(auth.login("admin", "1234") === true, "有效凭证登录失败");
console.assert(auth.login("user", "wrongpassword") === false, "无效凭证登录成功");
```

- **第一次测试**：检查有效凭证（`"admin"`，`"1234"`）是否成功。如果不成功，就会显示 “有效凭证登录失败”。
- **第二次测试**：检查无效凭证（`"user"`，`"wrongpassword"`）是否失败。如果没有失败，就会显示 “无效凭证登录成功”。

**🌱 为什么测试会导致干净的代码：**

1. 为了提高代码的可测试性，你会自然而然地编写更短小、更专注的函数。 

2. 测试能验证你的代码在不同场景下的表现是否符合预期。 

3. 有了测试作为保障，你可以放心大胆地更新代码，因为你知道任何错误都会被测试及时发现。

### **💉 使用依赖注入**

将依赖硬编码就像在额头上纹上某人的名字——它是永久性的，可能是磨蚀性的，并且限制了你的选择。

那么，依赖注入做了什么？它通过将依赖关系作为参数传递来管理代码的关系。它是灵活、可适应且易于维护的。

为了演示其工作原理，我这里使用 Nodemailer 依赖项向用户发送电子邮件：

```
// 依赖：使用 Nodemailer 发送电子邮件
const nodemailer = require('nodemailer');
function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({ /* 配置 */ });
    return transporter.sendMail({ from: "programmingwithshahan@gmail.com", to, subject, text: message });
}
```

⚠️ 为了避免风险，请确保避免将依赖关系**硬编码**。使用抽象或配置文件进行安全维护。

这只是一个例子。作为开发人员，你可能会使用数百个库或依赖项。

我并不是说你绝对不应该依赖依赖项/库，因为如今很难避免它们。但在将它们安装到你的编码项目中之前，你应该非常小心。

你应该检查组织的软件系统的安全性、性能、质量或功能。因为它们有时可能包含会毁掉你整个项目的风险。

🚧 永远要控制你的工具，不要让它们控制你。

### **📂 清理项目结构**

一个组织良好的项目就像一座高端**精品店**与一堆**垃圾堆**的区别。

以下是每个文件夹的组织方式：

![Shahan 的整洁代码项目结构图](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xwyg9iqqcybz21lsgxz.png)

如果你的代码库像个杂物抽屉，那你已经给未来的自己制造了麻烦。

让我们浏览上面的干净项目结构，以更好地理解它：

**1.** `myProjet/src`

这是整个应用程序的主容器。应用所需的一切都存储在这个文件夹中。它有子文件夹，可以保持整洁并在一个地方管理。

**2.** `components`

这是存放应用所有可重用部分的地方。你可以在多个地方使用这些组件，而无需再次构建它们。

**3.** `services`

这是应用的“大脑”。它在前端和后端为幕后工作提供支持。`emailService.js`、`userService.js` 和 `productService.js` 是 `services` 文件夹的一些示例文件。

**4.** `utils`

这包含了所有运行应用程序所需的小工具，使你的生活更轻松。例如，`formatedate.js`、`validateEmail.js` 和 `generateId.js` 是一些常见的 utils 文件，用于为整个项目制作可重用的组件。

**5.** `tests`

根据惯例，测试文件通常位于项目根级别的 `src` 文件夹**之外**。这样可以将生产代码（`src`）与测试代码（`tests`）分隔开，使其更清晰易于管理。查看下面结构：

```
myProject/
├── src/              # 生产代码
│   ├── components/
│   ├── services/
│   └── utils/
├── tests/            # 测试文件
│   ├── components/
│   ├── services/
│   └── utils/
├── package.json      # 项目配置
└── README.md         # 文档
```

一些开发人员可能更喜欢在 `test` 文件夹中创建一个测试文件来测试所有内容。遗憾的是，一开始它看起来很整洁，但随着项目的发展，你将不得不寻找和搜索特定代码块。这样显得杂乱无章，并可能产生意外的测试结果。因此，强烈建议在 `tests` 文件夹中将它们分解成多个测试文件。

**一个实际的例子 📧**

让我为你创建一个干净、耐用的项目结构，以便在任何将来可能从事的项目中应用。不用说，干净的项目结构是构建可维护项目的基础。

根据我们之前的发送电子邮件应用程序的示例，我们将为该应用程序编写一个干净的项目结构。我们希望构建一个向用户发送电子邮件的应用程序。此应用的干净项目结构应如下所示：

![Shahan 的邮箱应用整洁代码项目结构图](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6v6rlc5qiplgxz1h4dps.png)

如你所见，我将每个子文件夹和文件都打包在应用的主容器 `src` 文件夹中。在 `src` 文件夹中，我们创建了 `components`、`services`、`utiles`。最后，我们在 `src` 文件夹外有一个可管理的 `test` 文件夹，以独立测试每个组件。这个测试文件夹与位于 `src` 文件夹中的生产代码没有任何关系。

### **🤹‍♂️ 保持格式一致性**

别让你的代码看起来像是出自不同的十个人一样。请务必保持格式风格的一致性。

使用 [Prettier][30] 或 [ESLint][31] 等工具强制执行一致的风格。如果每个文件都看起来不同，你只是在制造没人愿意解决的混乱。

我认为格式一致性是编写整洁代码的最重要方面之一。

```
// 始终使用2个空格进行缩进
function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("维度必须是正数。");
  }
  return width * height;
}

// 添加有意义的空白以提高可读性
const rectangle = {
  width: 10,
  height: 20,
};

// 清晰的逻辑分离
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`面积: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

让我们来分析一下，这段代码在哪些方面体现了“整洁之道”：

#### 1️⃣ 一致的缩进

为什么用2个或4个空格？这很简洁、最小化，并且被许多JavaScript风格指南普遍接受。它不会让眼睛感到负担，并且代码结构清晰。如果你在这里用2个空格，那里用4个空格，就会让人感到困惑——而困惑时容易犯错。

#### 2️⃣ 有意义的空白：给代码留出呼吸空间

在`rectangle`定义和`try`块之间的额外换行就像句子中的停顿——它让读者有时间去处理信息。

#### 3️⃣ 清晰的逻辑分离：模块化思维

```
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`面积: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

看看代码逻辑是如何被分成清晰的部分：

-   首先是计算（`calculateArea`函数）。
    
-   然后是输出（`console.log`）。
    
-   最后是错误处理（`catch`块）。
    
每个任务都有其独立的空间和明确的职责。

#### 4️⃣ 可读的错误处理

当你抛出错误或记录消息时，请整洁地格式化它们。不要使用模糊或隐晦的信息。看到这样的代码，开发者立刻就能知道出了什么问题。

```
throw new Error("维度必须是正数。");
```

**🐦‍⬛ 常规的格式一致性建议：**

-   在整个代码库中一致地使用2个或4个空格进行缩进。避免使用制表符，以维护在不同编辑器间的一致性。
    
-   将每行的字符数限制在最多100-120个以内，以防止水平滚动并提高可读性。
    
-   将相关逻辑集中在一起，用空行分隔代码块以突出强调其用途。
    
-   最后，避免过度对齐代码。相反，让缩进自然引导逻辑流程。
    

### **✋ 停止硬编码值**

硬编码值是一种懒惰的编码方式。以下是证明：

```
// 糟糕：硬编码且僵化
function createUser() {
    const maxUsers = 100;
    if (currentUsers >= maxUsers) throw "用户太多！";
}

// 简洁：动态且灵活
const MAX_USERS = 100;
function createUser() {
    if (currentUsers >= MAX_USERS) throw "用户太多！";
}
```

你看，改变这个变量将来不会让你感到意外。你确切地知道在哪里可以找到它来改变不确定的值。

最好将固定值存储在全局配置（配置）文件中。

🪧 因此，无论如何避免硬编码。硬编码是一种可能会让你的未来自我（或其他人）感到抓狂的捷径。

### **🤏 保持函数简洁**

如果你的函数超过20行，可能它试图做得太多了。

短小精悍的函数总是能命中目标。

冗长的函数又乱又难读，而短小的函数则清晰且集中。以下是你应如何将大型函数拆解：

```
function updateCart(cart, item) {
    addItemToCart(cart, item);
    let total = calculateTotal(cart);
    logTransaction(item, total);
    return total;
}

function addItemToCart(cart, item) {
    cart.items.push(item);
}
```

让我解释一下这段代码，以便你理解为何将大型函数拆分是一个明智的策略。

1.  **主函数：** `updateCart()` 调用较小的辅助函数来处理特定的任务，如：
    
    -   将物品添加到购物车。
        
    -   计算总价格。
        
    -   记录交易细节。
        
    -   最后，返回总价格。
        

这并不是一个试图做所有事情的长块代码，而是将任务委派给辅助函数。

2.  **辅助函数：** `addItemToCart()` 这个函数**只**负责将物品添加到购物车。如果你需要更改添加物品的方式（例如，检查重复项）。你只需编辑这个小函数，而不必在`updateCart`中一大块代码中寻找更改。这就是编写整洁代码函数的方式，令人愉悦和易于维护。

**函数过长会怎样？ 💤**

假设你没有拆分`updateCart`函数。它可能看起来像这样：

```
function updateCart(cart, item) {
    cart.items.push(item);
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        total += cart.items[i].price;
    }
    console.log(`添加了${item.name}。总价现在是$${total}。`);
    return total;
}
```

这里的问题是什么？

-   它试图做所有事情。
    
-   特别是当它变得更庞大时，难以阅读。
    
-   如果出了问题，你将浪费时间去找出问题的所在部分。
    
现在，选择权在你手中：是继续坚持那种混乱的“全能一把抓”写法，还是开始实践“一个函数只做一件事”的整洁心态？

### **⛺ 遵循童子军规则**

> 离开营地时，要比你发现它时更整洁。

让我来详细解释一下：你不能只顾着自己使用，却留下一个比之前更烂的摊子。那是极不负责任的行为。真正的专业人士总会想办法让事物变得比原来更好。

在编程中，这意味着 **每当你触碰代码库，都要让它变得更好一点。** 去清理冗余、重构混乱的部分、提升可读性。如果你不这么做，你只是在不断堆积垃圾，而这些“屎山”最终会崩塌并砸到你自己头上。

来看这个例子。在这里，我们没有选择优化，而是仅仅增加了一层又一层的复杂度：

```
// 原始代码：难以阅读，变量命名不好
function calc(a, b) {
  let x = a + b;
  let y = x * 0.2;
  return y;
}

// 我们只是不断添加而未进行清理
function calcDiscount(a, b, discountRate) {
  let total = calc(a, b);
  let final = total - discountRate;
  return final;
}
```

之后：每次都有所改善。这是一个有纪律的程序员的工作方式——他们在改进中前行：

```
// 改进后的代码：清晰的命名，重构以提高清晰度
function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function calculateDiscountedTotal(price, quantity, discountRate) {
  const subtotal = calculateSubtotal(price, quantity);
  const discount = subtotal * discountRate;
  return subtotal - discount;
}
```

现在，任何人一目了然地看出发生了什么。因为我们将代码拆解为更小、更集中的函数。因此，增加新功能不会破坏现有功能。🏕️

### **🏟️ 遵循开放/封闭原则**

这项设计原则建议：代码应当设计成允许扩展，而不必改变现有的基础。

你肯定希望是“增加功能”，而不是每升级一次就把代码“拆了重建”。为了适配新需求而去修改旧代码，简直就像每次买新家具都要把房子推倒重盖一样。这显然是不可持续的。

让我们来看看如何构建更聪明、更具扩展性的代码，让你在增加功能的同时，不会把其他部分搞坏。

#### 重构前：违反原则的写法

你写了一个处理支付的类——挺简单的，起初它只支持信用卡支付。

结果你老板突然冒出来说：“嘿，我们现在得接个 PayPal。”

因为你之前没心思学什么代码整洁之道，你的代码现在看起来就像一个从 1995 年过时企业级系统里爬出来的“意面怪物”。来，欣赏一下你亲手打造的这件“杰作”：

```
class PaymentProcessor {
  processPayment(paymentType, amount) {
    if (paymentType === "creditCard") {
      console.log(`Processing credit card payment of $${amount}`);
    } else if (paymentType === "paypal") {
      console.log(`Processing PayPal payment of $${amount}`);
    } else {
      throw new Error("Unsupported payment type");
    }
  }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment("creditCard", 100);
paymentProcessor.processPayment("paypal", 200);
```

唉！每新增一种支付方式（例如 Apple Pay、Google Pay 等），都需要修改 `processPayment` 方法。不用说，你在添加新功能时有可能破坏现有功能。如果你学过这个原则，你就不会陷入这个困境。

不要担心：我会帮你解决这个问题。首先，我们需要重构代码。我们将通过使用[多态][32]来扩展其功能，而不是修改现有的类：

```
javascriptCopy code// 基础类
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("processPayment() must be implemented");
  }
}

// 信用卡支付
class CreditCardPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

// PayPal 支付
class PayPalPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// 添加新的支付类型？只需扩展类！
class ApplePayPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing Apple Pay payment of $${amount}`);
  }
}

// 使用方法
const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new ApplePayPayment(),
];

payments.forEach((payment) => payment.processPayment(100));
```

现在，添加新的支付方式不再需要修改现有的 `PaymentProcessor` 类了，你只需要创建一个新的子类。这样一来，原有代码保持原封不动，意味着完全没有破坏现有功能的风险。

每种支付类型都有独立的类。比如添加 PayPal 支持，完全不会影响到老代码。现在你可以自信地回复老板：“没问题，我 5 分钟就能把这功能加上。” 升职加薪的机会正等着你呢！

我在我的书 [从零到一的整洁代码][33] 中分享了更多的技巧。

## 帮助你编写整洁代码的现代最佳实践：总结 🥷

现在，让我为你展示最佳实践，并总结这 12 条整洁代码设计原则，助你在敏捷应用开发中游刃有余。

### 🔎 常见代码异味及其修复方法

- 💊 重复代码： 如果你在复制粘贴代码，那你是在给自己挖坑。把代码抽离成函数，一次性把事做对。

- 🛤️ 过长方法： 如果一个方法长到需要滚动条，那它承载的逻辑就太多了。拆分它，让功能保持专注。

- 👑 万能对象： 没有任何一个类应该包揽所有活儿。简化职责，否则你的代码库迟早会变成一团乱麻。
    

### 💬 高效注释实践
- 💭 何时注释： 只有在代码逻辑不够清晰时才写注释。如果代码已经很直观了，注释就是噪音。

- 🫗 清晰度： 注释应该解释 **“为什么”** 而不是“是什么”。如果你的代码非得靠注释才能读懂，那可能它写得太复杂了。

- 🌴 避免冗余： 别给显而易见的代码写注释。如果函数名是 `addNumbers`，就别再注释说它是用来“加数”的。
    

### 🧼 整洁代码的重构技巧

-   🏭 提取方法：方法太臃肿？拆掉它。这不仅仅是为了整洁，更是为了掌控感。
    
-   🫕 重命名变量：如果变量名不能一眼看出用途，就改掉它。命名的精准度反映了思维的严谨度。
    
-   🍃 如果你的判断语句写得像代数题一样复杂，简化它。如果是 if (a == true)，直接写成 if (a)。
    

### 🧪 测试与清洁代码

-   🧙 单元测试：像审讯嫌疑人一样测试每一行代码。不放过任何死角。
    
-   🏇 TDD（测试驱动开发）：先写测试。这不只是为了抓 Bug，更是为了在动笔写代码前，就搞清楚它到底该干什么。
    
-   🧽 清洁测试：测试代码也要写得和业务代码一样整洁。如果测试代码本身就乱七八糟，它就毫无参考价值。
    

### 🐛 错误处理与整洁代码

- ⁉️ 异常处理：大胆使用异常。它们不仅能处理错误，还能让你的主逻辑免受错误处理代码的干扰。

- 🖍️ 快速失败：一旦发现异常，立即停止。别让错误雪球越滚越大，当场解决。

- 🚨 日志记录：记录日志要像记录犯罪现场一样。清晰、精准，且只记录必要的信息。
    

### 🌱 代码审查及整洁代码

-   🚢 流程化：建立一套系统。拒绝“牛仔式”野路子开发。审查、评判、改进。
    
-   🔪 工具化：利用工具让审查变得轻松。工具不仅是为了纠错，更是为了培养规范性。
    
-   🧦 文化建设：营造一种“反馈是金”的文化。帮助团队学会如何给出和接受有建设性的批评。
    

## 维护清洁代码的自动工具 ⚓

工具和自动化技术对于编写清洁代码非常有帮助。如果你没有使用合适的工具和自动化来节省时间，那就错过了机会。

你认为可以"凭眼力"判断代码质量？再想想吧。没有自动化，这会发生：

1.  👎 因为“太忙”而错过显而易见的错误。
    
2.  🤕 你的代码在每个文件中看起来都不同，协作起来头疼。
    
3.  🪦 部署失败，因为你跳过了关键测试。
    

成功的开发者使用合适的工具来自动化代码和完成任务。以下是使用现代工具维护清洁代码的四种策略。

### **1️⃣ 静态分析**

静态分析实际上是一个代码检查器，它在早期找出潜在问题。最棒的是，它在**运行前**工作，捕获可能导致崩溃、停机或令人尴尬的错误。

#### **它是如何工作的？**

1.  **语法检查**：检查代码中编写的语法是否正确。如果拼写错误或遗漏了闭合括号，它会立即指出。
    
2.  **代码质量规则**：像 ESLint 这样的工具强制执行规则，如一致的缩进、避免未使用的变量，以及遵循最佳实践。
    
3.  **错误预防**：识别逻辑错误，比如使用未定义的变量或进行无意义的比较。
    

以下是静态分析的实际操作：

#### 🚨 在静态分析之前：

```javascript
let sum = (a, b) => { return a + b; }
console.log(sume(2, 3)); // Typo, unnoticed until runtime
```

-   **问题**：`sume`中的拼写错误只有在运行代码时才会导致错误，这可能会导致令人沮丧的调试会话，或者更糟糕的是，在生产环境中中断应用程序。

#### 🚑 使用 ESLint 之后的静态分析：

```
codeError: 'sume' is not defined.
```

-   **解决方案**：ESLint 立即标记拼写错误，你甚至在运行代码之前就发现了问题。早期捕获错误，节省了时间和麻烦。

### **2️⃣ 自动代码格式化**

格式化前：

```javascript
function calculate ( x , y ){ return x+ y;}
console.log( calculate (2,3 ) )
```

-   **问题**：不一致的空格和格式化使代码难以阅读。

#### 使用 Prettier 之后：

```javascript
function calculate(x, y) {
  return x + y;
}
console.log(calculate(2, 3));
```

-   **解决方案**：自动应用干净、一致、专业的格式。不再挑剔空格或对齐问题。

当然了，这些都是基本操作。我讲这些是以防万一，比如你得用记事本手撕代码，或者是在面试这种没有 IDE 助力的环境。

### **3️⃣ 持续集成（CI）测试**

CI 测试确保你对代码的每一次更改都得到自动验证。它就像一个安全网，可以捕捉开发过程中引入的错误。CI 工具在每次推送代码时运行测试，因此在部署后没有任何中断。

#### **CI 测试如何工作？**

1.  **变化触发**：每次提交代码时，CI 工具（如 GitHub Actions、Jenkins）会运行自动测试。
    
2.  **反馈**：如果出现问题，它会立即提供反馈。
    
3.  **防止代码破坏**：只有干净且工作的代码会被合并到主分支。
    
### 4️⃣ CI/CD 流水线

我们也使用 CI/CD 流水线作为一个持续的过程，其中包括代码构建、测试和部署，而 CI 测试是这个过程中专注于自动化代码变更测试的部分。

**CI/CD 流水线与 CI 测试的区别：**

-   **CI/CD 流水线：** CI/CD 流水线将代码构建、测试和部署整合为一个单一过程。这个过程确保对主分支代码的所有更改都可以发布到生产环境。CI/CD 流水线可以减少部署时间、降低成本并改善团队协作。
    
-   **CI 测试：** CI 测试是自动测试集成到中央代码库中的代码变更的过程。CI 测试专注于确保代码库的稳定性以及解决集成问题。CI 测试帮助开发者构建稳定的、无错误的软件并满足功能需求。
    

🚧 这些就是 CI 测试和 CI/CD 流水线概念的真正含义。并不像想象中那么复杂。所以让我详细讲解一下使用 GitHub Actions 进行的 CI 测试，因为我们现在通常通过自动化工具运行测试。

### **⚡ 使用 GitHub Actions 进行持续集成（CI）测试**

正如我之前所说，CI 工具会在每次您推送代码或打开拉取请求时运行自动化测试。这确保只有正常工作的、无错误的代码才会被合并到主分支。

#### 如何使用 GitHub Actions 设置 CI 测试

**步骤 1：创建您的代码库**

为您的项目设置一个 GitHub 代码库。然后，使用以下命令将代码推送到 GitHub：

```
git init
git add .
git commit -m "Initial commit for CI Testing"
git branch -M main
git remote add origin https://github.com/codewithshahan/codewithshahan.git
git push -u origin main
```

或者您可以在不使用命令的情况下从 GitHub 账户创建一个新的代码库。只需登录到您的 GitHub 账户并访问仪表板。您会发现一个“New”按钮来创建一个全新的代码库：

![在 GitHub 上创建新代码库的图片由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618697327/dcef8be8-0d08-45d7-8000-34c4c65df425.png)

**步骤 2：添加一个 GitHub Actions 工作流**

导航到您代码库的 **Actions** 选项卡。要执行此操作，首先您必须访问 GitHub 上的代码库（创建代码库后您会找到链接）。在此示例中，我创建了一个名为“codewithshahan”的新代码库。在这里，看一下导航栏右侧的 **Actions** 选项卡。

![GitHub Actions 导航选项卡的图片由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618879398/7c5aa37a-72be-4701-a8f8-9ea9e05c0d5d.png)

进入 Actions 选项卡后，向下滚动一点，您会找到 **continuous integration** 部分：

![GitHub Actions 页面上的 CI（持续集成）测试图片由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619002674/60003e57-f2b2-48f1-bef8-9bde39149faf.png)

选择一个适合您的工作流设置。我将在这个项目中使用 Node.js。

点击配置按钮后，会自动创建一个 `node.js.yml` 文件，您可以根据目标调整代码。

![GitHub 自动测试工作流代码段的图片由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619475568/74da6d46-c105-42c8-8662-fc72e9410bda.png)

我不会详细说明如何修改 `.yml` 文件。这取决于您的项目目标和个人偏好。此外，这是一个完全不同的更广泛的话题，鉴于这篇文章已经相当长，我将在以后的文章中再做解释。目前，请坚持这些基础知识。

这个 CI 测试工作流非常适合现代应用程序开发。您的应用程序在包含关键功能（例如：暗模式）、在 GitHub 代码库中直接构建和部署应用程序时保持稳定。通过这种方式，您可以自信地推送代码，确保您的代码始终清晰并准备好投入生产。

## 文档在敏捷软件开发中的角色 🚣

如果您希望您的编码能力达到顶级水准，您需要了解如何编写好的文档。如果您认为文档只是匆忙写下代码如何工作，那么您错了。这是关于解释**为什么**它可以工作，而不仅仅是如何工作。这是大多数人忽视的一点。

### 1\. 🚡 创建**有用的文档（解释为什么，而不仅仅是如何）**

当您编写文档时，您不仅仅是写下一些关于如何使用代码的说明。您是在告诉下一个人（或者未来的自己）为什么这个代码段最初存在。这就是好文档和差文档的区别。

糟糕的文档会让人困惑。它们太模糊、太简单，并且没有回答重要的问题。如果您的文档不清晰，这可能意味着您的思考不清晰。您基本上是在说，“我不在乎你是否理解这个，它管用，直接用就行。”这没有帮助。

优秀的文档回答了棘手的问题：

-   ✅ 为什么您选择了这种方法而不是其他方法？
    
-   ✅ 为什么这个函数存在？它解决了什么问题？
    
-   ✅ 为什么您这样编写代码？

### 2\. ⏳ **保持文档更新（过时的文档比没有文档更糟）**

过时的文档是最糟糕的。事实上，它可能比没有文档更糟。当你的文档与代码不同步时，你是在给未来的自己（或下一个必须处理它的人）带来巨大的麻烦。

每当代码发生变化，你的文档也必须随之更新。它必须能够反映代码的当前状态。千万不要留下那些过时的信息去误导未来的开发者（甚至是未来的你自己），那只会让他们感到困惑并浪费时间。如果某些内容不再相关，直接删掉它。过时的文档就像凌乱的大脑——它只会拖你的后腿。

要养成定期检查和更新文档的习惯。代码改动的那一刻，文档也必须同步更新。就这么简单。

### 3\. 🚆 **整合注释（代码中的良好注释是文档的一部分）**

听好了——代码里的注释应当与文档融为一体。优秀的注释不该是开发者的“拐杖”，仅仅因为他们在别处解释不清楚代码才拿来凑合。注释的作用是升华文档，而不是取而代之。

注释是文档的补充。你应该编写那种清晰易懂、几乎不需要解释的高质量代码；但当某些地方无法做到“一眼看透”时，再加入注释。记住注释的准则：解释 **“为什么（Why）”**，而不是 **“怎么做（How）”**。文档也是同理。别说废话，让代码自己“说话”。注释应当服务于文档的宏观大局，而不是给烂代码打补丁。

🪧 优秀的代码应该是自解释的。先去优化代码逻辑，如果仍有必要，再添加注释进行澄清。保持注释整洁、简短、直击要害。

如果你想写出整洁、高效且易维护的代码，文档就是关键。别再把文档当成事后才补的作业，或者填补空间的废话。它是代码的延伸——是你进行清晰高效沟通的方式。它是留给后人的路线图，更是你思维过程的体现。

## 结论 🏁

整洁代码并非可有可无的“加分项”，而是那些志在成为领导者的人的“必选项”。它关乎掌控力、效率，以及长期的持续改进。归根结底，它将助你在敏捷软件开发的博弈中脱颖而出。

🪧 如果你想真正精进自己的技艺，请编写整洁的代码，让效率自己证明一切。

## 关于整洁代码的常见问题 🧯

1. **什么是干净的代码？** 是指不会让你想把电脑扔出窗外的代码。
   
2. **为什么干净的代码在敏捷中很重要？** 因为敏捷注重速度和变化，凌乱的环境中你不可能快速行动。
   
3. **什么是代码异味？** 是你即将失去对代码库控制的迹象。
   
4. **我该如何改善注释？** 只对必要的部分进行注释，并确保每个注释都增加价值而不是噪音。

感谢您的陪伴。您可以访问我的 [Twitter 账号][37] 或 [我的网站][38] 阅读更多关于整洁代码和敏捷应用程序开发的文章。下次再见……继续改进你的代码库。

如果你认真想掌握整洁代码并提升你的编程职业生涯，我的书就是为你而写的：[**从零到一的整洁代码**][39]。这本书是你从零到一掌握整洁代码的完整指南，从杂乱到杰作。我正在提供50%的折扣，使用代码“earlybird”——仅限前50本。此外，还有30天的退款保证——无风险，纯奖励。

[1]: #heading-the-cost-of-bad-code
[2]: #heading-clean-coder-vs-messy-coder
[3]: #heading-ai-cant-save-you-if-your-code-is-a-mess
[4]: #heading-12-clean-code-design-patterns-for-building-agile-applications
[5]: #heading-use-names-that-mean-something
[6]: #heading-keep-functions-laser-focused-srp
[7]: #heading-use-comments-thoughtfully
[8]: #heading-best-practices-for-writing-good-comments
[9]: #heading-make-your-code-readable
[10]: #heading-test-everything-you-write
[11]: #heading-use-dependency-injection
[12]: #heading-clean-project-structures
[13]: #heading-be-consistent-with-formatting
[14]: #heading-stop-hardcoding-values
[15]: #heading-keep-functions-short
[16]: #heading-follow-the-boy-scout-rule
[17]: #heading-follow-the-openclosed-principle
[18]: #heading-modern-best-practices-to-help-you-write-clean-code-a-summary
[19]: #heading-automated-tools-for-maintaining-clean-code
[20]: #heading-1-static-analysis
[21]: #heading-2-automated-code-formatting
[22]: #heading-3-continuous-integration-ci-testing
[23]: #heading-4-cicd-pipelines
[24]: #heading-the-role-of-documentation-in-agile-software-development
[25]: #heading-conclusion
[26]: #heading-frequently-asked-questions-about-clean-code
[27]: http://cisq.org
[28]: https://www.it-cisq.org/the-cost-of-poor-quality-software-in-the-us-a-2022-report/
[29]: https://vfunction.com/blog/how-to-manage-technical-debt
[30]: https://prettier.io/
[31]: https://eslint.org/
[32]: https://stackify.com/oop-concept-polymorphism/
[33]: https://codewithshahan.gumroad.com/l/cleancode-zero-to-one
[34]: https://eslint.org/
[35]: https://github.com/features/actions
[36]: https://www.jenkins.io/
[37]: https://x.com/shahancd
[38]: https://www.codewithshahan.com
[39]: https://codewithshahan.gumroad.com/l/cleancode-zero-to-one

