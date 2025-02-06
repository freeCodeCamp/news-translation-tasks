---
title: "清洁代码手册：如何为敏捷软件开发编写更好的代码"
date: 2025-02-06T14:45:28.945Z
author: 编程与Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/the-clean-code-handbook/
posteditor: ""
proofreader: ""
---

构建可扩展的软件应用程序需要编写干净的代码，这种代码简单到任何开发者都能理解。

<!-- more -->

在本文中，我将解释和演示什么是清洁代码。然后，我会分享我最喜欢的用于构建现代敏捷应用程序的清洁代码模式。

我不会使用复杂的术语。我会以简单明了的 JavaScript 示例来展示核心概念。直截了当，无废话——这才是我的风格。

让我们开始吧。

## 目录

1.  [坏代码的成本][1]
    
2.  [清洁编码者 vs. 混乱编码者][2]
    
3.  [如果你的代码一团糟，AI也无法拯救你 🗑️][3]
    
4.  [用于构建敏捷应用程序的12个清洁代码设计模式 ⚖️][4]
    
    -   [🌿 使用有意义的命名][5]
        
    -   [🔨 将函数保持聚焦 (SRP)][6]
        
    -   [🚪 慎重使用注释][7]
        
    -   [⚡ 编写优秀注释的最佳实践][8]
        
    -   [🧩 让代码可读][9]
        
    -   [🏌️ 测试你写的所有东西][10]
        
    -   [💉 使用依赖注入][11]
        
    -   [📂 清洁的项目结构][12]
        
    -   [🤹‍♂️ 格式保持一致][13]
        
    -   [✋ 停止硬编码值][14]
        
    -   [🤏 保持函数简短][15]
        
    -   [⛺ 遵循童子军规则][16]
        
    -   [🏟️ 遵循开放/封闭原则][17]
        
5.  [帮助你编写清洁代码的现代最佳实践：总结 🥷][18]
    
6.  [维护清洁代码的自动化工具 ⚓][19]
    
    -   [1️⃣ 静态分析][20]
        
    -   [2️⃣ 自动代码格式化][21]
        
    -   [3️⃣ 持续集成 (CI) 测试][22]
        
    -   [4️⃣ CI/CD 流水线][23]
        
7.  [文档在敏捷软件开发中的角色 🚣][24]
    
8.  [结论 🏁][25]
    
9.  [关于清洁代码的常见问题解答 🧯][26]
    

![敏捷软件开发表情包图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xh3j6ccn1hc3euc3lfyl.png)

在以变化为唯一恒定的敏捷中，清洁代码是你的盔甲。它让你变得适应迅速，最重要的是，让你掌控局面。

事实是：如果你想在软件开发行业中存活下来，编写清洁代码不是可选项。幸运的是，我们人类经过一定努力和实践可以掌握清洁代码。

## 坏代码的成本

![混乱代码 vs 清洁代码的成本图表](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdai6npb55j71sguj6kl.png)

为了说明这个堆积柱状图，在初始开发阶段，坏代码的更改成本**略高于**清洁代码。

但随着我们进入维护和重构阶段，差距显著扩大，坏代码的成本几乎是清洁代码的两倍。

到遗留阶段，坏代码的成本达到100%——此时更新其极为昂贵，而清洁代码仍较为可控，仅为45%的成本。

截至目前，美国不良软件质量成本的最新分析是 2022 年信息和软件质量联盟（[cisq.org][27]）的报告。该报告估计，2022 年不良软件质量至少给美国经济带来了 2.41 万亿美元的损失，其中技术债务占大约 1.52 万亿美元。

你可以[在这里阅读更多内容][28]。

最近的讨论继续强调技术债务对软件质量和业务性能产生的重要影响。

例如，[2024 年的一项调查][29]表明，对超过 50% 的公司而言，技术债务占其 IT 总预算的四分之一以上。如果不加以解决，这真的会阻碍创新。

如你所见，在软件开发中，坏代码是一个代价高昂的问题没有争议。 

## **清洁编码者 vs. 混乱编码者**

这是一个展示**两种类型**编码者旅程的图表：

![清洁代码 vs 糟糕代码图表](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c6ubf77uwipf4gtucw8q.png)

-   **⚠️ 混乱编码者 (红线)：** 起初快但最终崩溃。写的代码越多，制造的问题就越多。
    
-   **⚡ 清洁编码者 (蓝线)：** 起初慢但始终如一。增长不会停止——而是加速。
    

🫵 现在，你来决定要追随哪条线。

## 如果你的代码一团糟，AI也无法拯救你 🗑️

当你写代码遇到困境时，你可能会求助于 AI。但让我告诉你：如果你的代码一团糟，AI 无法拯救你。

这就像是建房子在沙地上。当然，它能坚持一段时间，但一阵强风或大浪就会垮掉。

记住：AI 只是一个工具。如果你不知道如何编写干净、可扩展的应用程序，你就是在为失败埋下伏笔。

我反复看到这样的情景：开发人员掌握五种编程语言，他们能开发应用、建设网站、编写软件。他们对算法和数据结构了如指掌。

但是，当面对一个大型项目或他人混乱的代码时，他们会崩溃。

他们就像一名设计和制造自己飞机的航空工程师，却不知道如何驾驶这些飞机。他们在自己的代码中崩溃。

这曾经就是我……很久以前。我会写成千上万行代码，却发现连上周自己写的东西都看不懂。对我来说，这是一片混乱。

但后来我意识到——每个开发人员都在与此斗争。问题不在于我知道多少，而在于我如何组织和构建我的知识。换句话说，就是要懂得编程这门艺术。

我决定摆脱这种困境。经过五个月的全力以赴——每天四到五个小时的编写、设计和研究——我创建了一本我希望在刚开始编程时就能拥有的书。这是一本完整的初学者指南：**从零开始的清晰代码。**

![《从零开始的清晰代码：从凌乱到杰作》封面](https://cdn.hashnode.com/res/hashnode/image/upload/v1737731329839/c4c862d9-7fdc-460a-ae2e-18b19468b6ec.png)

如果你想了解更多关于这本书的信息，我会在本教程的最后提供所有细节。所以请继续阅读，了解更多关于编写清晰代码的知识。

## 构建敏捷应用的 12 个清晰代码设计模式 ⚖️

如果你的代码不遵循这些现代清晰代码设计模式，你可能是在创建一个定时炸弹。这些模式就是你的工具。掌握它们并享受项目成功带来的喜悦。现在让我一一展示。

### **🌿 使用有意义的名称**

将变量或函数命名为 b 或 x 并无帮助。称呼它们的真实意义，这样更容易理解。以下是变量命名不佳和优秀的例子：

```
// 弱且模糊
let b = 5;

// 强且清晰
let numberOfUsers = 5;
```

写不清晰命名的人不愿意承认自己的错误。不要成为那样的人。

![漫画展示了差 vs 好的变量命名，由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165724746/37b2edc3-3c68-47a8-ab6f-f131a2239a01.png)

### **🔨 让函数专注于单一职责（SRP）**

一个函数应该只做**一件事**——并完美地完成。这个原则称为单一职责原则（**SRP**）。

好的代码就像锤子。它只钉一个钉子，而不是十个。例如，如果你聘请一个人来处理公司里的所有事情——财务、销售、市场、清洁等等——他们可能会惨败，因为他们无法专注于一件事情。你的类在代码中也是如此。

🚧 当一个类或函数承担多重责任时，它会变成一团乱麻。调试它就像倒立拼图。如果你的类同时处理用户输入和数据库操作，这不是多任务——这是疯狂。分解它。一个方法，一个职责。

**🔥 我的法则：**你的代码为你服务。保持其锐利、专注和可控，否则它将控制你。以下是如何做到的：

```
// 清晰：一个职责，一个专注点
function calculateTotal(a, b) {
    return a + b;
}

function logTotal(user, total) {
    console.log(`User: ${user}, Total: ${total}`);
}

// 混乱：试图做所有事情
function calculateAndLogTotal(a, b, user) {
    let total = a + b;
    console.log(`User: ${user}, Total: ${total}`);
}
```

🪧 当您混合任务时，也混入了混乱。就是这么简单。

### **🚪 用心使用注释**

专业开发者中有句很好的谚语：

> “代码本身会解释。”

你不会每次有人走进房间时都解释门是干什么的，对吧？你的代码应该以同样的方式工作。

注释不是坏事，但如果你的代码不能独立存在，那你可能有问题。

🪧 好的注释应该说明“为什么”，而不是“如何或什么”。如果开发人员无法理解“如何”工作，那么他们可能也无法理解“为什么”。

以下是好的注释和坏的注释的一些简短例子。我还将展示一个编写清晰注释的真实项目。

**例子 1: 不好的注释 👎**

```
// 通过价格乘以数量计算总价
const total = price * quantity;
```

这是一个**不好的注释**，因为它只是重复了代码已经说过的内容。代码 `price * quantity` 是不言自明的，所以注释没有增加任何有用的东西。

**好的注释: 👍**

如果代码是清晰简单的，**你不需要注释。**

```
const total = price * quantity;
```

![Shahan 插图展示不必要的注释 vs "无声的注释"](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165891398/6a942ad7-5b09-4990-9c7f-95358dafcbf3.png)

**例子 2: 不好的注释 👎**

```
// 检查用户是否已登录
function isUserLoggedIn(session) {
    return !!session.user;
}
```

此注释不好，因为它没有解释 `isUserLoggedIn()` 存在的原因。它只是解释了发生了什么。但我们已经知道这是一个认证函数。这个注释是在浪费时间。

**好的例子 👍**

这是一个**不错的注释**，因为它解释了代码存在的**原因**。它告诉我们，这个函数在允许访问应用程序的敏感部分之前，检查用户是否已认证。它关注的是整体视图。

![之前："检查用户是否已登录"。之后："用户在访问受保护资源之前通过认证。" 作者：Shahan。](https://cdn.hashnode.com/res/hashnode/image/upload/v1736166143011/b3ddae3d-41cf-4534-8f1a-af710579922c.png)

### **⚡ 编写良好注释的最佳实践**

1.  **解释"为什么"，而不是"是什么"：**  
    编写注释以解释代码的目的或背景，而不是代码正在做什么。
    
2.  **避免明显的注释：**  
    不要为代码已经清楚的事情编写注释。
    
3.  **保持简短且精确：**  
    编写简洁易读且直接解释目的的注释。
    
4.  **定期更新注释：**  
    过时的注释可能误导开发人员，因此在代码更改时请始终更新它们。
    

**现实世界的例子（配有良好注释）🛒**

让我们将这些实践应用到一个真实的项目中：一个大型电子商务应用程序。一个函数根据订单详细信息计算运费。以下是完整代码，我将在下面解释每个注释：

```
// 运费规则：
// - 订单超过 $100 免运费
// - 订单低于 $100 标准运费 $10
// - 国际订单额外加 $5

function calculateShipping(order) {
    let shippingCost = 0;

    // 检查订单是否符合免运费条件
    if (order.total >= 100) {
        shippingCost = 0; // 免运费
    } else {
        shippingCost = 10; // 标准运费
    }

    // 为国际订单增加额外费用
    if (order.isInternational) {
        shippingCost += 5;
    }

    return shippingCost;
}

// 示例用法
const order1 = { total: 120, isInternational: false };
const order2 = { total: 80, isInternational: true };

console.log(calculateShipping(order1)); // 输出: 0
console.log(calculateShipping(order2)); // 输出: 15
```

在函数开始时，我们包括了一条注释，解释了运费计算的规则。这给读者提供了逻辑概览，而无需阅读完整代码。

```
// 运费规则：
// - 订单超过 $100 免运费
// - 订单低于 $100 标准运费 $10
// - 国际订单额外加 $5
```

然后，第一个条件检查订单总额是否大于或等于 $100。这里的注释澄清了为什么应用免运费。

```
// 检查订单是否符合免运费条件
if (order.total >= 100) {
    shippingCost = 0; // 免运费
}
```

第二个条件为国际运输应用了额外费用。注释解释了为什么增加额外费用。

```
// 为国际订单增加额外费用
if (order.isInternational) {
    shippingCost += 5;
}
```

**为什么这些注释好？**

假设你在一个有20名开发者的团队中工作。有人六个月后阅读`calculateShipping`函数。如果没有这些注释，他们可能会浪费时间猜测为什么国际订单需要额外的费用。好的注释澄清了原因，节省了大量的挫折时间。

### **🧩 让你的代码可读**

如果有人阅读你的代码时感觉像是在解谜题，你已经成为了一个麻烦制造者。这里有个证明：

```
// 清晰：读起来像个故事
if (isLoggedIn) {
    console.log("欢迎！");
} else {
    console.log("请登录。");
}

// 混乱：感觉像是杂乱无章
if(isLoggedIn){console.log("欢迎！");}else{console.log("请登录。");}
```

如果你的代码杂乱无章且难以阅读，它会让他人困惑 —— 甚至后来的你！想象一下在六个月后回到自己的代码，却感觉像在读外语。可读的代码节省时间，减少错误，并使每个人的生活更轻松。

**🍵 可读性为什么重要？**

1.  **对你自己而言：** 当你在几周或几个月后再次查看代码时，干净的代码帮助你在不浪费时间弄清你曾做了什么的情况下继续工作。
    
2.  **对你的团队而言：** 如果别人阅读你的代码，他们不应该像在解谜题。清晰的代码使团队协作更加顺畅，防止沟通不畅。
    
3.  **更少的错误：** 清晰的代码更易于调试，因为你可以快速发现错误。
    

**🧙‍♂️ 如何编写可读代码**

让我们建立一个简单的程序来管理图书馆中的图书。我们将使其干净且可读，然后我将在下面逐步解析此代码：

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
            console.log(`你借了《${this.title}》。`);
        } else {
            console.log(`抱歉，《${this.title}》不可用。`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`你归还了《${this.title}》。`);
    }
}
```

```
// 用法示例
const book1 = new Book("The Clean Coder", "Robert Martin", true);
const book2 = new Book("You Don’t Know JS", "Kyle Simpson", false);
const book3 = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);

const library = [book1, book2, book3];

displayAvailableBooks(library); // 显示可借阅的书籍
book1.borrow(); // 借阅一本书
displayAvailableBooks(library); // 再次显示可借阅的书籍
book1.returnBook(); // 归还书籍
displayAvailableBooks(library); // 显示最终书籍列表
```

我们创建了一个 `Book` 类来表示每本书。它有 `title`、`author` 和 `isAvailable` 等属性来追踪其状态。

-   `borrow` 方法检查书籍是否可用。如果是，则将其标记为不可用并打印一条信息。
    
-   `returnBook` 方法使书籍再次可用。
    
-   `displayAvailableBooks` 函数遍历图书馆并仅打印可用的书籍。
    
-   我们创建了三本书（`book1`、`book2`、`book3`）并将它们存储在一个 `library` 数组中。
    
-   我们借阅和归还书籍，展示了可用书籍列表如何变化。
    

如你所见，可读的代码不仅仅是关于风格。它节省时间，防止错误，并保持你的代码在未来多年仍然有用。

### **🏌️ 测试你写的所有内容**

如果你不花时间编写测试，那么代码出问题时就不应感到惊讶。如果你想编写测试，请按照这个单元测试策略来提前捕捉问题。

**什么是单元测试？**

具体而言，单元测试检查代码的各个部分（如函数或类），以确保它们正常工作。就像在建墙之前检查房子的每一块砖的稳固性。

让我给你一个关于单元测试如何工作的示例：

```
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}

// 测试它（单元测试）
const calculator = new Calculator();
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
```

这里代码的执行情况如下：

首先，我们创建计算器类：

```
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
```

`Calculator` 类有两个方法：`add` 和 `subtract`。

-   `add(a, b)` 接收两个数字并返回它们的和。
    
-   `subtract(a, b)` 接收两个数字并返回它们的差。
    

接下来，我们设置测试：

```
const calculator = new Calculator();
```

这里，我们创建一个 `Calculator` 类的实例来测试其方法。

然后，我们编写测试用例：

```
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
```

`console.assert(condition, message)` 检查条件是否为 `true`。如果为 `false`，则在控制台中显示消息（"Addition failed" 或 "Subtraction failed"）。

-   **第一个测试**：`calculator.add(2, 3) === 5`
    
    -   使用 `2` 和 `3` 调用 `add` 方法。
        
    -   检查结果是否为 `5`。
        
-   **第二个测试**：`calculator.subtract(5, 3) === 2`
    
    -   使用 `5` 和 `3` 调用 `subtract` 方法。
        
    -   检查结果是否为 `2`。
        

那么如果出现问题怎么办？在这里解决问题是相当简单的。在这种情况下，如果 `add` 或 `subtract` 方法不能正确工作，测试将失败。例如：

```
console.assert(calculator.add(2, 3) === 6, "Addition failed");
```

-   条件 `calculator.add(2, 3) === 6` 为 `false`。
    
-   控制台将显示："Addition failed"。
    

**真实案例：测试登录系统 👥**

让我们测试一个简单的登录系统，看看单元测试如何在现实世界场景中工作。

```
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}

// 测试 Auth 类
const auth = new Auth();
console.assert(auth.login("admin", "1234") === true, "Login failed for valid credentials");
console.assert(auth.login("user", "wrongpassword") === false, "Login succeeded for invalid credentials");
```

首先，创建 `Auth` 类：

```
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}
```

`login` 方法检查用户名是否为 `"admin"` 且密码为 `"1234"`。如果两者匹配，则返回 `true`，否则返回 `false`。

接下来，设置测试：

```
const auth = new Auth();
```

创建 `Auth` 类的一个实例。然后编写测试用例：

```
console.assert(auth.login("admin", "1234") === true, "Login failed for valid credentials");
console.assert(auth.login("user", "wrongpassword") === false, "Login succeeded for invalid credentials");
```

-   **第一个测试**：检查有效凭据（`"admin"`，`"1234"`）是否成功。如不成功，显示 "Login failed for valid credentials"。
    
-   **第二个测试**：检查无效凭据（`"user"`，`"wrongpassword"`）是否失败。如不失败，显示 "Login succeeded for invalid credentials"。
    

**🌱 为什么测试会导致代码整洁：**
```

### **💉 使用依赖注入**

将依赖项硬编码就像在额头上纹上某人的名字——它是永久的，可能会引起摩擦，并使你受制于此。

那么，依赖注入能做什么？它通过将依赖项作为参数传递来管理代码的关系。它灵活、适应性强且可维护。

为了演示其工作原理，这里我使用 Nodemailer 依赖项来发送用户邮件：

```
// 依赖项：使用 Nodemailer 发送邮件
const nodemailer = require('nodemailer');
function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({ /* 配置 */ });
    return transporter.sendMail({ from: "programmingwithshahan@gmail.com", to, subject, text: message });
}
```

⚠️ 为了避免风险，请确保避免**硬编码**依赖项。使用抽象或配置文件以确保安全维护。

这只是一个例子。作为开发人员，你可能会使用数百个库或依赖项。

我并不是说你不应该依赖依赖项/库，因为如今很难避免它们。但是在将其安装到你的编码项目中之前，你应该非常小心。

你应该检查组织的软件系统的安全性、性能、质量或功能。因为有时它们会包含可能毁掉整个项目的风险。

🚧 永远要控制你的工具，不要让它们控制你。

### **📂 整洁的项目结构**

一个组织良好的项目就像是**精品店**，而不是**垃圾堆**。

每个文件夹的组织方式如下：

![Image of clean code project structure by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xwyg9iqqcybz21lsgxz.png)

如果你的代码库看起来像个杂物抽屉，你就已经为将来的自己制造了麻烦。

让我们通过上面的清晰项目结构来更好地理解它：

**1.** `myProject/src`

这是整个应用程序的主容器。你的应用程序所需的一切都存储在这个文件夹中。它有子文件夹来保持整洁和管理。

**2.** `components`

这里存放你的应用程序中所有可重用的部分。你可以在多个地方使用这些组件而无需重新构建它们。

**3.** `services`

这是你应用程序的“大脑”。它处理前端和后端的所有幕后工作。`emailService.js`、`userService.js` 和 `productService.js` 是 `services` 文件夹的示例文件。

**4.** `utils`

这里包含了使你的应用程序顺利运行并让生活更轻松的一些小工具。例如，`formatedate.js`、`validateEmail.js` 和 `generateId.js` 是一些常见的工具文件，用于为整个项目创建可重用的组件。

#### **5.** `tests`

通常，测试文件通常位于 `src` 文件夹**之外**，位于项目根级别。这使得你的生产代码 (`src`) 与测试代码 (`tests`) 分开，更加整洁和易于管理。看看：

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

一些开发人员可能倾向于在 `test` 文件夹中创建一个测试文件来在一个地方测试所有内容。不幸的是，它乍一看似乎很整洁，但随着项目的增长，你将不得不查找和搜索特定的代码块。这很麻烦，并可能产生意想不到的测试结果。因此，强烈建议在 `tests` 文件夹中将它们分成多个测试文件。

**现实例子 📧**

让我为你创建一个整洁、耐用的项目结构，以便你可以应用于将来可能参与的任何项目。不用说，整洁的项目结构是构建可维护项目的基础。

根据我们先前的邮件发送应用程序示例，我们将为此应用程序编写一个整洁的项目结构。我们想要构建一个向用户发送邮件的应用程序。这个应用程序的整洁项目结构应该如下所示：

![Image of email app clean code project structure by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6v6rlc5qiplgxz1h4dps.png)

如你所见，我将每个子文件夹和文件都打包到 `src` 文件夹中，这是我们应用程序的主容器。在 `src` 文件夹中，我们创建了 `components`、`services`、`utils`。最后，我们在 `src` 文件夹之外创建了一个可管理的 `test` 文件夹，以独立测试每个组件。这个测试文件夹与我们位于 `src` 文件夹中的生产代码无关。

### **🤹‍♂️ 保持格式一致**

不要写代码像是有 10 个不同的人在写。保持格式一致。

使用 [Prettier][30] 或 [ESLint][31] 等工具来强制实施一致的风格。如果每个文件看起来都不同，你就是在制造没人愿意解决的混乱。

我认为格式一致是编写清晰代码的最重要方面之一。

```
// 始终使用2个空格缩进
function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("尺寸必须是正数。");
  }
  return width * height;
}

// 添加有意义的空白以提高可读性
const rectangle = {
  width: 10,
  height: 20,
};

// 逻辑的清晰分离
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`面积: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

让我们来检查一下这段代码的一些使其干净的方面：

#### 1️⃣ 一致的缩进

为什么选择2个或4个空格？它简洁、最小化，并且在许多 JavaScript 样式指南中被广泛接受。它不会使眼睛感到疲惫，代码结构清晰可见。当缩进不一致时（这里2空格，那里4空格），会让人困惑，而困惑的人容易犯错。

#### 2️⃣ 有意义的空白：让代码有呼吸的空间

矩形定义和 `try` 块之间的额外换行就像句子中的一个停顿 —— 给读者时间处理信息。

#### 3️⃣ 逻辑的清晰分离：模块化思维

```
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`面积: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

看看逻辑是如何划分为清晰的部分：

- 首先是计算（`calculateArea` 函数）。
- 然后是输出（`console.log`）。
- 最后是错误处理（`catch` 块）。

每个任务都有自己的空间和目的。

#### 4️⃣ 可读的错误处理

当你抛出错误或记录消息时，确保格式清晰。这里没有模糊或隐晦的信息。开发者通过这段代码可以立刻知道问题所在。

```
throw new Error("尺寸必须是正数。");
```

**🐦‍⬛ 一般保持一致格式的技巧：**

- 在整个代码库中始终如一地使用2或4个空格缩进。避免使用制表符以保持不同编辑器的一致性。
- 保持行的最大长度为100-120字符，以防止水平滚动并提高可读性。
- 将相关逻辑分组在一起，并在代码块之间使用空行以突出其目的。
- 最后，避免过度对齐代码。让缩进自然地引导逻辑的流动。

### **✋ 避免硬编码值**

硬编码值是一种懒惰的编程方式。以下是证明：

```
// 糟糕：硬编码且呆板的
function createUser() {
    const maxUsers = 100;
    if (currentUsers >= maxUsers) throw "用户过多！";
}

// 干净：动态和灵活的
const MAX_USERS = 100;
function createUser() {
    if (currentUsers >= MAX_USERS) throw "用户过多！";
}
```

你看，改变这个变量在未来不会让你感到意外。你知道确切位置以改变不确定的值。

最好将固定的值存储在全局配置文件中。

🪧 因此，不惜一切代价避免硬编码值。硬编码是可能让你未来的自己（或其他人）抓狂的捷径。

### **🤏 保持函数简洁**

如果你的函数长度超过20行，它可能尝试做的事情太多了。

简短的函数是锐利的函数。它们每次都能精准击中目标。

冗长的、臃肿的函数是混乱且难以阅读的，但简短的函数则是清晰且有重点的。下面是你的大函数应该如何分解：

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

让我解释一下这段代码，以便你理解为什么分解大函数是一种成功的策略。

1. **主函数：** `updateCart()` 调用较小的辅助函数来处理具体任务，例如：

    - 将物品加入购物车。
    - 计算总价格。
    - 日志记录交易详情。
    - 最后，它返回总价格。

与其写一长段尝试涵盖所有内容的代码块，不如将任务委派给辅助函数。

2. **辅助函数：** `addItemToCart()` 这个函数**仅**处理将物品加入购物车的操作。如果你需要改变添加物品的方式（例如，检查重复项）。你可以只编辑这个小函数，而不是在 `updateCart` 中挖代码改动。这就是如何编写令人赏心悦目的并且易于维护的函数。

**如果函数过长，会发生什么？ 💤**

假设你没有分解 `updateCart` 函数。它可能会是这样的：

```
function updateCart(cart, item) {
    cart.items.push(item);
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        total += cart.items[i].price;
    }
    console.log(`已添加 ${item.name}。总价现在是 $${total}。`);
    return total;
}
```

这里有些什么问题？

- 它试图做所有事情。
- 难以阅读，尤其是当它变得更大时。
- 如果某处出现问题，你会浪费时间找出哪个部分是问题所在。
```

### **⛺ 遵循童子军法则**

> 总是把你的营地打扫得比你发现它时更干净。

让我为你分解一下。你不能只是使用某物然后让它变得比之前更糟糕。那是不体贴的行为。真正的专业人士会让事情变得比他们发现时更好。

在编码方面，每次接触代码库时，**让它变得更好。** 清理它，重构混乱的部分，提高可读性。如果不这样做，你只是在堆积垃圾，最终会垮掉。

这里有一个例子。我们不是在改进它，而是只在增加更多的复杂层：

```javascript
// 原始代码：难以阅读，变量命名不当
function calc(a, b) {
  let x = a + b;
  let y = x * 0.2;
  return y;
}

// 我们在添加功能，但没有清理
function calcDiscount(a, b, discountRate) {
  let total = calc(a, b);
  let final = total - discountRate;
  return final;
}
```

之后：它每次都变得更好。以下是一个有纪律的编码者的工作方式——他们随时在改进：

```javascript
// 改进后的代码：清晰的名称，为了清晰性进行重构
function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function calculateDiscountedTotal(price, quantity, discountRate) {
  const subtotal = calculateSubtotal(price, quantity);
  const discount = subtotal * discountRate;
  return subtotal - discount;
}
```

现在，任何人都可以一眼看出发生了什么。因为我们已将代码分解为更小、更专注的函数。因此，添加新功能不会破坏现有功能。🏕️

### **🏟️ 遵循开放/封闭原则**

这个设计原则建议你的代码应该被设计成允许扩展而无需更改现有基础。

你应该添加功能——而不是每次升级都把它拆散。修改旧代码以适应新要求就像每次买新家具时试图重建你的房子。这是不可持续的。

让我们看看如何构建更智能、更具可扩展性的代码，让你可以添加功能而不会破坏其他所有内容。

#### 之前：违反原则

你有一个用于处理支付的类——简单到足够。起初，它只处理信用卡。

但接着你的老板来了，说：“嘿，现在我们需要支持 PayPal。”

由于你不愿意学习干净代码，你的代码看起来就像个来自1995年旧企业系统的意大利面怪兽。这是你创作的杰作：

```javascript
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

唉！每种新支付方式（如 Apple Pay，Google Pay 等）需要修改 `processPayment` 方法。毋庸置疑，在添加新功能时，你冒着破坏现有功能的风险。如果你学习了这一原则，你可能不会陷入这一困境。

别担心：我会帮你解决这个问题。首先，我们需要重构代码。我们将不修改现有类，而是使用[多态性][32]扩展其功能：

```javascript
// 基类
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("processPayment() 必须被实现");
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

// 添加新的支付类型？只需扩展该类！
class ApplePayPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing Apple Pay payment of $${amount}`);
  }
}

// 使用方式
const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new ApplePayPayment(),
];

payments.forEach((payment) => payment.processPayment(100));
```

现在，添加新支付方式不需要更改现有的 `PaymentProcessor` 类。你只需创建一个新的子类。因此，原始代码保持不变，这意味着不会有破坏现有功能的风险。

每种支付类型都有自己的类，例如，添加 PayPal 支持不会破坏代码。你现在可以对你的老板说：“当然，我将在 5 分钟内增加这一功能。”你的晋升正在等你接受。

我在我的书 [Clean Code Zero to One][33] 中分享了更多的技巧。

## 帮助你编写干净代码的现代最佳实践：总结 🥷

现在让我告诉你最佳实践，并总结我们的 12 条干净代码设计原则，帮助你编写适合敏捷应用开发的干净代码。

### 🔎 常见代码异味及其修复方法

-   💊 重复：如果你在复制代码，你就是在为自己制造更多工作。把它提取到一个函数中，并正确地完成。
    
-   🛤️ 方法过长：如果你的方法需要滚动条，那就说明它承担的任务过多。将其拆分，保持专注。
    
-   👑 统领对象：没有哪个类应该处理所有事情。简化职责，否则你的代码库将变得混乱。
    

-   💭 什么时候需要注释：只有在代码不清晰时才需要注释。如果代码本身已经很清晰，注释只会变得多余。

-   🫗 清晰度：注释应该说明原因，而不是做什么。如果你的代码需要解释，可能说明它太复杂了。

-   🌴 避免冗余：不要对显而易见的事情添加注释。如果你的函数叫 addNumbers，不需要注释说它是在做加法。

### 🧼 干净代码的重构技术

-   🏭 提取方法：大方法？拆分它们。这不仅仅是为了清晰，更是为了控制。

-   🫕 重命名变量：如果你的变量名没有明确表达它们的目的，那就改进它们。命名的精准就是思维的精准。

-   🍃 简化条件：如果你的条件语句看起来像代数公式，简化它们。如果 a == true，只需写 if(a)。

### 🧪 测试与干净代码

-   🧙 单元测试：像审问嫌犯一样测试每段代码，检查每一个细节。

-   🏇 TDD（测试驱动开发）：先写测试。这不仅仅是为了捕捉 bug，它还能让你在写代码前明确知道应该实现什么。

-   🧽 干净的测试：你的测试应该和代码一样清晰。如果它们杂乱无章，那它们就无用。

### 🐛 错误处理与干净代码

-   ⁉️ 异常：使用它们。异常不仅仅是用来处理错误，它们还能避免错误代码的污染。

-   🖍️ 快速失败：如果有问题，立即停止。不要让错误积累，立即处理它们。

-   🚨 日志记录：像记录犯罪现场那样做日志。清晰、准确并且只记录必要的内容。

### 🌱 代码评审与干净代码

-   🚢 流程：建立一个系统。避免随意编码。评审、批评、改进。

-   🔪 工具：使用让审查简单的工具。它们不仅仅是用来捕捉错误的，还能培养纪律性。

-   🧦 文化：培养一种把反馈当成宝贵财富的文化。帮助团队学会如何回应和接收批评。

## 维护干净代码的自动化工具 ⚓

工具和自动化技术在编写干净代码时非常有帮助。如果你没有使用合适的工具并进行自动化以节省时间，你就错过了。

你以为通过“目测”能保证代码质量？再想一想。如果没有自动化，这就是会发生的事情：

1.  👎 因为“太忙”而错过明显的错误。

2.  🤕 你的代码在每个文件中看起来都不一样，使得协作变得困难。

3.  🪦 因为跳过了关键测试而导致部署失败。

成功的开发者使用合适的工具来自动化代码工作并完成事情。以下是使用现代工具维护干净代码的四种策略。

### **1️⃣ 静态分析**

静态分析实际上是一个代码检查员，能够提前发现代码中的潜在问题。最好的部分？它在运行时之前工作，可以捕获可能导致崩溃、停机或尴尬错误的问题。

#### **它如何工作？**

1.  **语法检查**：检查代码是否符合正确的语法。如果你拼错了变量或忘记了一个闭合括号，它会立即指出。

2.  **代码质量规则**：像 ESLint 这样的工具会强制执行一致的缩进，避免未使用的变量，并遵循最佳实践。

3.  **错误预防**：识别逻辑错误，例如使用未定义的变量或者进行不合理的比较。

以下是静态分析的实际效果：

#### 🚨 在静态分析之前：

```javascript
let sum = (a, b) => { return a + b; }
console.log(sume(2, 3)); // Typo, unnoticed until runtime
```

-   **问题**：在 `sume` 中的拼写错误只有在代码运行时才会导致错误，这可能会导致令人沮丧的调试过程，甚至在生产环境中破坏应用程序。

#### 🚑 使用 ESLint 之后的静态分析：

```
codeError: 'sume' is not defined.
```

-   **解决方案**：[ESLint][34] 立即在你运行代码之前就标记出了拼写错误。错误被早期发现，节省了时间和精力。

### **2️⃣ 自动代码格式化**

格式化之前：

```javascript
function calculate ( x , y ){ return x+ y;}
console.log( calculate (2,3 ) )
```

-   **问题**：不一致的空格和格式使代码难以阅读。

#### 使用 Prettier 之后：

```javascript
function calculate(x, y) {
  return x + y;
}
console.log(calculate(2, 3));
```

-   **解决方案**：自动应用清晰、一致和专业的格式。不再需要挑剔空格或对齐问题。

尽管这些是基本的东西。在这里提到是因为可能你在记事本中写代码，或者某些不提供 IDE 的情况下（例如，工作面试）。

### **3️⃣ 持续集成（CI）测试**

CI 测试确保每次对代码的新更改都能自动验证。它像一个安全网，可以捕捉在开发中引入的错误。CI 工具在你每次推送代码时运行测试，以确保在部署后没有问题。

#### **CI 测试如何工作？**

1.  **变更触发**：每次提交代码时，CI 工具（比如 [GitHub Actions][35]、[Jenkins][36]）就会运行自动化测试。

2.  **反馈**：如果出现问题，立即提供反馈。

3.  **防止破坏代码**：只有干净和工作的代码才会被合并到主分支。

我们还使用 CI/CD 流水线作为一个包括代码构建、测试和部署的连续过程，而 CI 测试是其中专注于自动化代码变更测试的部分。

**CI/CD 流水线与 CI 测试的区别：**

-   **CI/CD 流水线：** CI/CD 流水线将代码构建、测试和部署合并为一个过程。此过程确保所有对主分支代码的更改都可以发布到生产环境。CI/CD 流水线可以减少部署时间、降低成本并改善团队协作。
    
-   **CI 测试：** CI 测试是自动测试集成到中央代码仓库的代码更改的过程。CI 测试的重点是确保代码库稳定并解决集成问题。CI 测试帮助开发人员构建稳定、无错误且符合功能要求的软件。
    

🚧 这就是 CI 测试和 CI/CD 流水线概念的真正含义，并不像看起来那么复杂。让我详细说明一下如何使用 GitHub Actions 进行 CI 测试，因为我们现在通常通过自动化工具运行测试。

### **⚡ 使用 GitHub Actions 的持续集成 (CI) 测试**

正如我之前所说，每次提交代码或打开 pull 请求时，CI 工具都会运行自动测试。这保证了只有正常工作、无错误的代码才能合并到主分支。

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

或者，您可以直接从您的 GitHub 帐户创建一个新代码库，而无需使用命令。只需登录到您的 GitHub 帐户并访问仪表板。在这里，您会找到一个“New”按钮来创建一个全新的代码库：

![Shahan 在 GitHub 上创建新代码库的图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618697327/dcef8be8-0d08-45d7-8000-34c4c65df425.png)

**步骤 2：添加一个 GitHub Actions 工作流程**

导航到您的代码库的 **Actions** 标签。要做到这一点，首先需要访问您在 GitHub 上的代码库（在创建代码库后您会找到链接）。在这种情况下，我创建了一个名为“codewithshahan”的新代码库。在此查找导航栏右侧的 **Actions** 标签。

![Shahan 制作的 GitHub Actions 导航标签图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618879398/7c5aa37a-72be-4701-a8f8-9ea9e05c0d5d.png)

导航到 Actions 标签后，向下滚动一点，您会找到 **continuous integration** 部分：

![Shahan 在 GitHub Actions 页面上的 CI（持续集成）测试图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619002674/60003e57-f2b2-48f1-bef8-9bde39149faf.png)

选择一个适合自己的工作流设置。我将为本项目使用 Node.js。

点击配置按钮后，会自动创建一个 `node.js.yml` 文件，您可以根据目标调整代码。

![Shahan 制作的用于自动化测试的 GitHub 工作流片段图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619475568/74da6d46-c105-42c8-8662-fc72e9410bda.png)

我不会详细介绍如何修改 `.yml` 文件。这取决于您的项目目标和个人偏好。此外，这也是一个完全不同且更广泛的话题，由于本文已经相当长，我将在未来的文章中对此进行说明。现在，只需掌握这些基础知识即可。

这种 CI 测试工作流程非常适合现代应用开发。您的应用在包含关键功能（例如，暗模式）、构建和直接在您的 GitHub 代码库中部署应用程序的同时保持稳定。这种方式能让您的代码始终保持整洁和准备好上线，您可以放心地推送您的代码。

## 文档在敏捷软件开发中的角色 🚣

如果您想让您的代码达到顶级水平，您需要了解如何编写优秀的文档。如果您认为文档只是在记录代码如何工作，那您就错了。文档是关于解释**为什么**它能起作用，而不仅仅是如何起作用。这正是大多数人错失的重点。

### 1\. 🚡 创建**有用的文档（解释为什么，而不只是怎么做）**

当您编写文档时，您不仅仅是在写如何使用代码的说明。您还在告诉下一个人（或未来的自己）为什么这段代码存在于此。这就是好文档和坏文档的区别。

差劲的文档让人摸不着头脑。它们太笼统、过于简单，并没有回答关键的问题。如果您的文档模糊不清，那可能意味着您的思路也不清晰。您基本上是在说，_"我不在乎你是否理解这点，反正它有效，你就用吧。"这样并没有帮助。

优秀的文档回答了棘手的问题：

-   ✅ 为什么您选择这种方法而不是其他方法？
    
-   ✅ 这个函数为什么存在？它解决了什么问题？
    
-   ✅ 为什么您用这种方式编写代码？
    

### 2\. ⏳ **保持文档更新（过时的文档比没有文档更糟）**

过时的文档是最糟糕的。事实上，它甚至可以比没有文档更糟。当你留下与代码不同步的文档时，你实际上是在给未来的自己——或者任何接手此工作的人——制造巨大的麻烦。

每次你的代码发生变化，你的文档也需要做出相应的更改。它必须反映当前的状态。不要让未来的开发者（或你自己）被误导，过时的信息只会让他们感到困惑并浪费他们的时间。如果某些信息不再相关，就删除它。过时的文档就像杂乱无章的大脑——它会阻碍你。

养成定期检查和更新文档的习惯。代码一变动，文档也应随之更新。就是这样。

### 3\. 🚆 **整合注释（代码中的好注释是文档的一部分）**

重点是——代码中的注释应该与文档**整合**。好的注释不仅仅是无法在其它地方解释代码的开发者的拐杖。它们应提高文档的价值，而不是取代它们。

注释是对文档的补充。你编写清晰、易懂的代码，需要最少的解释，但当某些东西不十分明了时，加上一条注释。记住代码中的注释规则：解释**为什么**，而不是**如何**。在这里也是如此，不要重复自己。让代码来说明问题。注释应该补充文档的大局，而不是为不够精良的代码贴上创可贴。

🪧 优秀的代码应该是不言自明的。先修复代码，然后在必要时添加注释以澄清。保持注释简洁明了。

如果你想编写干净、高效、且易维护的代码，文档是关键。不要把文档当成事后的想法或是填补空白的东西。它是代码的扩展——是你清晰有效沟通的方式。它是为未来开发者准备的路线图，是你思考过程的反映。

## 结论 🏁

干净的代码不是可有可无的——对于那些志在领导的人来说，它是必需品。这关乎于控制、效率和长远的改进。最终，它将帮助你在敏捷软件开发的游戏中取得成功。

🪧 如果你真的想掌握你的技艺，编写干净的代码，让效率证明一切。

## 关于干净代码的常见问题 🧯

1.  **什么是干净的代码？** 这是一种不会让你想把笔记本电脑扔出窗外的代码。
    
2.  **为什么干净的代码在敏捷中如此重要？** 因为敏捷注重速度和变更，而一团糟的情况下无法快速行动。
    
3.  **什么是代码异味？** 它是你即将失去对代码库的控制的征兆。
    
4.  **我该如何改善注释？** 仅对必要的内容加以注释，并确保每条注释都增加价值而非噪音。
    

感谢您的陪伴。您可以访问我的 [Twitter 账户][37] 或 [我的网站][38] 阅读更多关于干净代码和敏捷应用开发的文章。下次再见……继续改进你的代码库。

如果您认真想掌握干净的代码并将您的编程职业提升到一个新的水平，那么我的书就是为您准备的：[**Clean Code Zero to One**][39]。这本书是您的干净代码之旅的完整指南，从凌乱的代码到杰作。我提供一个 50% 的折扣码 “earlybird”——仅限前 50 本。此外，还有 30 天退款保证——无风险，全奖励。

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

