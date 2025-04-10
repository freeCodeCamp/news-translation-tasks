```markdown
---
title: "《代码整洁手册：如何为敏捷软件开发撰写更优雅的代码》"
date: 2025-04-10T13:43:06.827Z
author: 编程与 Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/the-clean-code-handbook/
posteditor: ""
proofreader: ""
---

构建可扩展的软件应用程序需要编写整洁的代码，这种代码应该简单到任何开发者都能理解。

<!-- more -->

在本文中，我将解释和展示什么是整洁的代码。然后，我将分享我最喜欢的现代敏捷应用程序构建用的整洁代码模式。

我不会使用复杂的术语。我将用简单、清晰的 JavaScript 示例直击核心概念，直奔主题，拒绝废话—这就是我的风格。

让我们开始吧。

## 目录

1.  [糟糕代码的代价][1]
    
2.  [整洁的程序员 vs. 混乱的程序员][2]
    
3.  [如果你的代码很乱，AI 也拯救不了你 🗑️][3]
    
4.  [构建敏捷应用程序的 12 个整洁代码设计模式 ⚖️][4]
    
    -   [🌿 使用有意义的名称][5]
        
    -   [🔨 保持函数的专注性 (SRP)][6]
        
    -   [🚪 慎重使用注释][7]
        
    -   [⚡ 编写优质注释的最佳实践][8]
        
    -   [🧩 使代码可读][9]
        
    -   [🏌️ 测试你写的一切][10]
        
    -   [💉 使用依赖注入][11]
        
    -   [📂 整洁的项目结构][12]
        
    -   [🤹‍♂️ 在格式上保持一致][13]
        
    -   [✋ 停止硬编码值][14]
        
    -   [🤏 保持函数简短][15]
        
    -   [⛺ 遵循童子军规则][16]
        
    -   [🏟️ 遵循开闭原则][17]
        
5.  [帮助你编写整洁代码的现代最佳实践：总结 🥷][18]
    
6.  [维护整洁代码的自动化工具 ⚓][19]
    
    -   [1️⃣ 静态分析][20]
        
    -   [2️⃣ 自动代码格式化][21]
        
    -   [3️⃣ 持续集成 (CI) 测试][22]
        
    -   [4️⃣ CI/CD 管道][23]
        
7.  [文档在敏捷软件开发中的作用 🚣][24]
    
8.  [结论 🏁][25]
    
9.  [关于整洁代码的常见问题 🧯][26]
    

![敏捷软件开发的搞笑图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xh3j6ccn1hc3euc3lfyl.png)

在变革是唯一常态的敏捷中，整洁的代码是你的盔甲。它让你变得适应迅速，最重要的是，能够掌控局面。

事实是：如果你想在软件开发行业中生存下来，编写整洁代码并非可有可无。幸运的是，只要付出一些努力和实践，我们人类就可以掌握整洁代码。

## 糟糕代码的代价

![混乱代码与整洁代码的成本对比图 by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdai6npb55j71sguj6kl.png)

为了解释这个堆叠条形图，在初始开发阶段，糟糕代码的更改成本比整洁代码**略高**。

但随着我们进入维护和重构阶段，差距显著扩大，糟糕代码的成本几乎是整洁代码的两倍。

到了遗留阶段，糟糕代码达到了 100% 的成本——现在更新它的代价非常高，而整洁代码的可管理性仍然保持在 45%。

截至目前，美国关于劣质软件质量成本的最新分析是由信息和软件质量联盟 ([cisq.org][27]) 在 2022 年发布的报告。该报告估计，仅在 2022 年，劣质软件就给美国经济造成了至少 2.41 万亿美元的损失，其中技术债务约占这个数额的 1.52 万亿美元。

你可以[在此阅读更多相关信息][28]。

最近的讨论继续强调技术债务对软件质量和业务表现的重大影响。

例如，[2024 年的一项调查][29]表明，超过 50% 的公司将技术债务占其总 IT 预算的四分之一以上。如果不解决，它真的会阻碍创新。

正如您所看到的，没有疑问，糟糕代码是软件开发中代价高昂的问题。

## **整洁的程序员 vs. 混乱的程序员**

这是一张展示**两种类型**的程序员旅程的图表：

![整洁代码与糟糕代码的图表对比](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c6ubf77uwipf4gtucw8q.png)

-   **⚠️ 混乱的程序员（红线）：**开始很快但很快崩溃。他们写的行数越多，制造的麻烦就越多。
    
-   **⚡ 整洁的程序员（蓝线）：**开始慢但保持一致。增长不停——反而加速。
    

🫵 现在，你来决定要追随哪条线。

## 如果你的代码很乱，AI 也拯救不了你 🗑️

当你在编写代码时遇到困难，你可能会求助于 AI。但让我告诉你一件事：如果你的代码很乱，AI 也拯救不了你。

这就像建在沙滩上的房子。是的，它会暂时矗立在那儿，但来一阵强风或大浪，它就会垮塌。

记住：AI 只是一个工具。如果你不知道如何编写整洁的、可扩展的应用程序，你就是在为失败做准备。
```

我重复见到开发人员精通五种编程语言。他们能够构建应用程序、网站、软件。他们对算法和数据结构了如指掌。

但在面对一个大型项目或别人的混乱代码时，他们就崩溃了。

他们就像一个航空航天工程师，设计并建造自己的飞机，却不知道如何驾驶。他们在自己的代码中迷失。

这曾经是我……有一段时间。我写了数千行代码，才意识到我甚至不知道上周写了什么。对我来说，那就是混乱。

然后我意识到——每个开发者都在挣扎。这并不是关于我知道多少，而是关于我如何组织和构建我所知道的东西。换句话说，就是关于理解编程的艺术。

我决定跳出这个陷阱。经过五个月的高强度工作——每天四到五小时的写作、设计和研究——我创建了一本我在编程初期希望拥有的书。《从混乱代码到艺术杰作的完整初学者指南：**Clean Code Zero to One**》。

![Clean Code Zero to One 书籍封面：从混乱代码到艺术杰作](https://cdn.hashnode.com/res/hashnode/image/upload/v1737731329839/c4c862d9-7fdc-460a-ae2e-18b19468b6ec.png)

如果你想了解关于这本书的更多信息，我将在本教程的末尾给出详细信息。所以接着阅读以了解更多关于编写干净代码的内容。

## 构建敏捷应用程序的 12 种干净代码设计模式 ⚖️

如果你的代码不遵循这些现代化的干净代码设计模式，你可能正在制造一个定时炸弹。这些模式是你的工具。掌握它们，享受项目的成功。让我逐一为你展示。

### **🌿 使用有意义的命名**

给变量或函数命名为 b 或 x 是没有帮助的。用它们所代表的意义来命名，以便更容易理解。以下是糟糕和良好变量名的示例：

```
// 弱和含糊
let b = 5;

// 强和清晰
let numberOfUsers = 5;
```

写下不清晰名称的人不想承担他们的错误。不要成为这样的人。

![Shahan 的漫画展示了糟糕与良好变量名](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165724746/37b2edc3-3c68-47a8-ab6f-f131a2239a01.png)

### **🔨 保持函数聚焦（SRP）**

一个函数应该做**一件事**——并且做到完美。这被称为单一职责原则（**SRP**）。

好的代码就像一把锤子。它命中一个钉子，而不是十个。例如，如果你雇用一个人做公司里的所有事情——财务、销售、市场营销、清洁工作等等——他们很可能会惨败，因为他们无法专注于一件事。你的代码中的类也是如此。

🚧 当一个类或函数做多于一件事时，它变成一团乱麻。调试它感觉就像在倒立解谜。如果一个类同时处理用户输入和数据库操作，那就不是在多任务处理，而是在制造混乱。拆分它。一种方法，一个职责。

**🔥 我的法则：** 你的代码为你工作。保持它的锐利、专注和可控，否则它将控制你。以下是实现的方法：

```
// 干净：一个职责，一个聚焦
function calculateTotal(a, b) {
    return a + b;
}

function logTotal(user, total) {
    console.log(`User: ${user}, Total: ${total}`);
}

// 混乱：尝试做所有事情
function calculateAndLogTotal(a, b, user) {
    let total = a + b;
    console.log(`User: ${user}, Total: ${total}`);
}
```

🪧 当你混合任务时，你就是在混合困惑。就是这么简单。

### **🚪 慎用注释**

专业开发人员中有句好话：

> “代码自己会说话。”

你不会每次有人走进房间时都解释一扇门的作用吧？你的代码也应如此。

注释并不是坏事，但如果你的代码不能独立存在，那么你可能会遇到问题。

🪧 一个好的注释应该说明“为什么”而不是“如何或是什么”。如果开发人员不理解“如何”某些东西工作，那么他们很可能也不会理解“为什么”。

以下是一些好的注释和坏的注释的简短示例。我还将向您展示一个写干净注释的实际项目。

**示例 1: 坏注释 👎**

```
// 乘以数量以计算总数
const total = price * quantity;
```

这是一个**糟糕的注释**，因为它只是重复代码已经说明的内容。代码 `price * quantity` 是自解释的，因此注释没有增加任何有用的东西。

**好注释: 👍**

如果代码清晰且简洁，**你不需要注释。**

```
const total = price * quantity;
```

![Shahan 的漫画展示了不必要的注释与“静默注释”](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165891398/6a942ad7-5b09-4990-9c7f-95358dafcbf3.png)

**示例 2: 坏注释 👎**

```
// 检查用户是否登录
function isUserLoggedIn(session) {
    return !!session.user;
}
```

这个注释是糟糕的，因为它没有解释 `isUserLoggedIn()` 存在的原因。它只是解释了发生了什么。但我们已经知道这是一个认证函数。这个注释是浪费时间。

**好示例 👍**

这是一个**良好的注释**，因为它解释了代码存在的**原因**。它告诉我们，该函数在允许访问应用程序的敏感部分之前检查用户是否经过身份验证。它关注的是更大的图景。

![之前：“检查用户是否已登录”。之后：“用户在访问保护资源之前经过身份验证。” By Shahan.](https://cdn.hashnode.com/res/hashnode/image/upload/v1736166143011/b3ddae3d-41cf-4534-8f1a-af710579922c.png)

### **⚡ 编写良好注释的最佳实践**

1.  **解释“为什么”，而不是“做什么”：**  
    编写注释以解释代码的目的或上下文，而不是代码正在做什么。
    
2.  **避免明显的注释：**  
    不要为代码已经清楚解释的内容编写注释。
    
3.  **保持简短和精确：**  
    编写简明扼要的注释，易于阅读并直接解释目的。
    
4.  **定期更新注释：**  
    过时的注释会误导开发人员，因此当代码变化时请务必更新它们。
    

**真实世界的示例（带有良好注释）🛒**

让我们在一个真实项目中应用这些实践：一个大型电子商务应用程序。一个函数根据订单详情计算运费。以下是完整代码，我将逐条解释每个注释：

```
// 运费规则：
// - 订单超过 $100 免费送货
// - 订单低于 $100 标准运费 ($10)
// - 国际订单额外收费 $5

function calculateShipping(order) {
    let shippingCost = 0;

    // 检查订单是否符合免费送货条件
    if (order.total >= 100) {
        shippingCost = 0; // 免费送货
    } else {
        shippingCost = 10; // 标准运费
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

在函数开始，我们包含了一条注释来解释运费规则。这为读者提供了逻辑概览，而不需要通读整个代码。

```
// 运费规则：
// - 订单超过 $100 免费送货
// - 订单低于 $100 标准运费 ($10)
// - 国际订单额外收费 $5
```

然后，第一个条件检查订单总额是否大于或等于 $100。此处的注释澄清了为何适用免费送货。

```
// 检查订单是否符合免费送货条件
if (order.total >= 100) {
    shippingCost = 0; // 免费送货
}
```

第二个条件为国际运输应用了额外的费用。注释解释了为何增加额外费用。

```
// 为国际订单增加额外费用
if (order.isInternational) {
    shippingCost += 5;
}
```

**为什么这些注释好？**

想象一下你在一个由20位开发人员组成的团队中工作。有人在六个月后阅读 `calculateShipping` 函数。如果没有这些注释，他们可能会浪费时间猜测为何国际订单要额外收费。好的注释澄清了原因，节省了数小时的挫败感。

### **🧩 让你的代码可读**

如果有人阅读你的代码时感觉像是在解谜，那么你已经成了麻烦制造者。这是证据：

```
// 干净：像故事一样阅读
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// 混乱：感觉像混乱
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
```

如果你的代码混乱难读，它会让他人困惑——甚至以后也会让你自己困惑！想象一下半年后回到自己的代码，感觉像是在阅读一种外语。可读性代码节省时间，减少错误，并让每个人的生活更轻松。

**🍵 为什么可读性重要？**

1.  **为了你自己：** 当你在几周或几个月后重温你的代码时，干净的代码有助于你不必浪费时间去弄清你做了什么。
    
2.  **为了你的团队：** 如果别人阅读你的代码，他们不应该像在解谜。干净的代码使团队合作更加顺畅，并防止沟通不畅。
    
3.  **更少的错误：** 清晰的代码更易于调试，因为你可以快速发现错误。
    

**🧙‍♂️ 如何编写可读代码**

让我们构建一个简单的程序来管理图书馆的书籍。我们将使其干净且易读，然后我将分解该代码：

```
// 表示一本书的类
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
```

```
// 示例用法
const book1 = new Book("The Clean Coder", "Robert Martin", true);
const book2 = new Book("You Don’t Know JS", "Kyle Simpson", false);
const book3 = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);

const library = [book1, book2, book3];

displayAvailableBooks(library); // 显示可用的书籍
book1.borrow(); // 借书
displayAvailableBooks(library); // 再次显示可用的书籍
book1.returnBook(); // 还书
displayAvailableBooks(library); // 最后的列表
```

我们创建了一个 `Book` 类来表示每本书。它具有 `title`、`author` 和 `isAvailable` 等属性来跟踪其状态。

-   `borrow` 方法检查书籍是否可用。如果是，则将其标记为不可用并打印一条消息。
    
-   `returnBook` 方法使书籍重新可用。
    
-   `displayAvailableBooks` 函数遍历图书馆，只打印可用的书籍。
    
-   我们创建了三本书（`book1`、`book2`、`book3`）并将它们存储在一个 `library` 数组中。
    
-   我们借阅并归还书籍，展示了可用书籍列表的变化。
    

如你所见，可读代码不仅仅是关于风格。它可以节省时间，防止错误，并使你的代码长期有用。

### **🏌️ 测试你写的每一行代码**

如果你不花时间编写测试，那么你的代码出错时就不要感到惊讶。如果你想要写测试，请遵循这个单元测试策略来提前捕捉问题。

**什么是单元测试？**

具体来说，单元测试检查你的代码的各个部分（如函数或类）是否正常工作。就像在建造墙壁之前检查房屋的每块砖是否稳固。

让我给你一个单元测试如何工作的例子：

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

以下是这段代码中正在发生的事情：

首先，我们创建了计算器类：

```
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
```

`Calculator` 类有两个方法：`add` 和 `subtract`。

-   `add(a, b)` 接受两个数字并返回它们的和。
    
-   `subtract(a, b)` 接受两个数字并返回它们的差。
    

接下来，我们设置测试：

```
const calculator = new Calculator();
```

在这里，我们创建了 `Calculator` 类的一个实例来测试其方法。

然后我们编写测试用例：

```
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
```

`console.assert(condition, message)` 检查条件是否为 `true`。如果为 `false`，则在控制台中显示消息（“Addition failed” 或 “Subtraction failed”）。

-   **第一个测试**：`calculator.add(2, 3) === 5`
    
    -   调用 `add` 方法，参数为 `2` 和 `3`。
        
    -   检查结果是否为 `5`。
        
-   **第二个测试**：`calculator.subtract(5, 3) === 2`
    
    -   调用 `subtract` 方法，参数为 `5` 和 `3`。
        
    -   检查结果是否为 `2`。
        

如果出问题会发生什么？这里解决任何问题都相当简单。在这种情况下，如果 `add` 或 `subtract` 方法不正常工作，测试将失败。例如：

```
console.assert(calculator.add(2, 3) === 6, "Addition failed");
```

-   条件 `calculator.add(2, 3) === 6` 为 `false`。
    
-   控制台将显示："Addition failed"。
    

**现实世界的例子：测试登录系统 👥**

让我们测试一个简单的登录系统，看看单元测试在现实场景中如何工作。

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

`login` 方法检查用户名是否为 `"admin"` 且密码是否为 `"1234"`。如果两者匹配，则返回 `true`，否则返回 `false`。

接下来，设置测试：

```
const auth = new Auth();
```

创建 `Auth` 类的实例。然后编写测试用例：

```
console.assert(auth.login("admin", "1234") === true, "Login failed for valid credentials");
console.assert(auth.login("user", "wrongpassword") === false, "Login succeeded for invalid credentials");
```

-   **第一个测试**：检查有效凭据（`"admin"`、`"1234"`）是否成功。如果没有，则显示 `"Login failed for valid credentials"`。
    
-   **第二个测试**：检查无效凭据（`"user"`、`"wrongpassword"`）是否失败。如果没有，则显示 `"Login succeeded for invalid credentials"`。
    

**🌱 为什么测试能导致干净的代码：**
```

### **💉 使用依赖注入**

硬编码依赖就像把某人的名字刺在你的额头上——它是永久的，可能是刺耳的，并将你困住。

那么，依赖注入做了什么？它通过将依赖关系作为参数传递来管理你的代码关系。它是灵活的、可适应的、可维护的。

为演示其工作原理，这里我使用 Nodemailer 依赖来向用户发送电子邮件：

```
// 依赖：使用 Nodemailer 发送电子邮件
const nodemailer = require('nodemailer');
function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({ /* 配置 */ });
    return transporter.sendMail({ from: "programmingwithshahan@gmail.com", to, subject, text: message });
}
```

⚠️ 为了保护自己，确保避免**硬编码**依赖。使用抽象或配置文件进行安全维护。

这只是一个例子。作为开发者，你可能会使用数百个库或依赖。

我不是说你不应该完全依赖依赖项/库，因为如今很难避免它们。但在将它们安装到你的编码项目之前，你应该非常小心。

你应检查组织的软件系统的安全性、性能、质量或功能。因为它们有时包含可能毁掉你整个项目的风险。

🚧 永远控制你的工具，不要让它们控制你。

### **📂 干净的项目结构**

一个组织良好的项目是**垃圾堆**和高端**精品店**之间的区别。

以下是每个文件夹的组织方式：

![Shahan 的干净代码项目结构图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xwyg9iqqcybz21lsgxz.png)

如果你的代码库看起来像个杂乱抽屉，你已经给未来的自己制造了麻烦。

让我们通过上面的干净项目结构更好地了解它：

**1.** `myProjet/src`

这是你的整个应用程序的主要容器。你的应用所需的一切都存储在此文件夹中。它有子文件夹以保持整洁和集中管理。

**2.** `components`

这里是你保存应用所有可重用部分的地方。你可以在多个地方使用这些组件，而不必重新构建它们。

**3.** `services`

这是你的应用的“头脑”。它为前端和后端处理所有幕后的工作。`emailService.js`, `userService.js` 和 `productService.js` 是你的 `services` 文件夹的一些示例文件。

**4.** `utils`

这个文件夹包含所有你需要的小工具，以便让你的应用程序平稳运行并让你的生活更轻松。例如，`formatedate.js`, `validateEmail.js` 和 `generateId.js` 是一些常见的 utils 文件，用于制作组件的可重用部分以应用于整个项目。

#### **5.** `tests`

传统上，测试文件通常位于 `src` 文件夹的**外部**，在项目根级别。这使你的生产代码 (`src`) 与测试代码 (`tests`) 分开，使其更清晰且易于管理。来看一下：

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

有些开发者可能倾向于在 `test` 文件夹中创建一个测试文件，以便在一个地方测试所有内容。不幸的是，起初可能看起来很整洁，但随着项目的增长，你将不得不找到并搜索特定的代码块。这很丑陋，并且可能产生意想不到的测试结果。因此，强烈建议将它们分解为 `tests` 文件夹中的多个测试文件。

**现实世界的例子 📧**

让我为你创建一个干净而持久的项目结构，以便你在将来可能处理的任何项目中应用。无需赘言，干净的项目结构是构建可维护项目的基石。

在我们之前发送电子邮件的应用程序示例中，我们将为此应用编写一个干净的项目结构。我们想要构建一个可以向用户发送电子邮件的应用程序。你应用的这个干净项目结构应该看起来像这样：

![Shahan 的电子邮件应用干净代码项目结构图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6v6rlc5qiplgxz1h4dps.png)

如你所见，我把每个子文件夹和文件都放在了我们的应用程序的主容器 `src` 文件夹中。在 `src` 文件夹中，我们创建了 `components`, `services`, `utils`。最后，我们在 `src` 文件夹外有一个可管理的 `test` 文件夹，以独立测试每个组件。这个测试文件夹与我们位于 `src` 中的生产代码没有任何关系。

### **🤹‍♂️ 格式化的一致性**

不要像你是 10 个不同的人一样写代码。保持格式的一致性。

使用像 [Prettier][30] 或 [ESLint][31] 这样的工具来强制执行一致的风格。如果每个文件看起来都不同，你正在制造一种没人想去解决的混乱。

我会说，格式化的一致性是编写干净代码最重要的方面之一。

```
// 始终使用 2 个空格进行缩进
function calculateArea(width, height) {
  if (width <= 0 || height <= 0) {
    throw new Error("Dimensions must be positive numbers.");
  }
  return width * height;
}

// 添加有意义的空白行以增强可读性
const rectangle = {
  width: 10,
  height: 20,
};

// 逻辑的清晰分隔
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`Area: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

让我们来审视一下使这段代码保持整洁的一些要点：

#### 1️⃣ 一致的缩进

为什么使用 2 或 4 个空格？这是整洁的、简约的，并且在许多 JavaScript 风格指南中被广泛接受。它不会让人眼花缭乱，而且代码结构非常清晰。如果混用不一致的缩进（这里用 2 个空格，那里用 4 个空格），会让人困惑，而困惑的人容易犯错。

#### 2️⃣ 有意义的空白：给代码留出喘息空间

在矩形定义和 `try` 块之间的额外空行就像句子中的停顿——给读者时间去思考。

#### 3️⃣ 逻辑的清晰分隔：模块化思维

```
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`Area: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

看看逻辑是如何被分为明确的部分：

-   首先，进行计算（`calculateArea` 函数）。
    
-   接着，输出结果（`console.log`）。
    
-   最后，错误处理（`catch` 块）。
    

每个任务都有其自身的空间和目的。

#### 4️⃣ 易读的错误处理

当你抛出错误或记录消息时，要格式化得清晰。这里没有模糊或生涩的信息。开发者一眼就知道问题所在。

```
throw new Error("Dimensions must be positive numbers.");
```

**🐦‍⬛ 保持一致格式的一般提示：**

-   在整个代码库中始终使用 2 或 4 个空格进行缩进。避免使用制表符，以保持跨不同编辑器的一致性。
    
-   将行长度限制在 100-120 个字符以内，以避免横向滚动并提高可读性。
    
-   将相关的逻辑组合在一起，用空行分隔代码块以突出其目的。
    
-   最后，避免过度对齐代码。让缩进自然引导逻辑的流程。
    

### **✋ 停止硬编码值**

硬编码值是一种懒惰的编码方式。下面是证明：

```
// 不好：硬编码且僵化
function createUser() {
    const maxUsers = 100;
    if (currentUsers >= maxUsers) throw "Too many users!";
}

// 整洁：动态且灵活
const MAX_USERS = 100;
function createUser() {
    if (currentUsers >= MAX_USERS) throw "Too many users!";
}
```

看到吗，改变这个变量在未来不会让你感到意外。你知道该去哪里找到这个变量以改变不确定的值。

最好将固定值存储在全局配置（config）文件中。

🪧 因此，不惜一切代价避免硬编码。硬编码是可能让你（或他人）未来抓狂的捷径。

### **🤏 保持函数简短**

如果函数超过 20 行，可能试图包含太多功能。

简短的函数是尖锐的函数。它们每次都能精准命中目标。

冗长、臃肿的函数既混乱又难以阅读，但短小的函数则清晰而集中。这里是如何将大型函数进行分解：

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

让我解释一下这段代码，以便你理解为何分解大型函数是一种成功的策略。

1.  **主要函数：** `updateCart()` 调用较小的助手函数以处理特定任务，例如：
    
    -   将物品添加到购物车。
        
    -   计算总价。
        
    -   记录交易的详细信息。
        
    -   最后，返回总价。
        

与其写一段试图完成所有工作的长代码块，不如将任务委派给辅助函数。

2.  **辅助函数：** `addItemToCart()` 这个函数 **只** 处理将物品添加到购物车。如果你需要改变添加物品的方式（例如，检查重复项），可以只需编辑这个小函数，而无需在 `updateCart` 的巨大代码块中进行挖掘。这就是编写整洁代码函数的方法，读起来愉快且易于维护。

**函数过长会怎样？ 💤**

假设你没有分解 `updateCart` 函数。它可能会变成这样：

```
function updateCart(cart, item) {
    cart.items.push(item);
    let total = 0;
    for (let i = 0; i < cart.items.length; i++) {
        total += cart.items[i].price;
    }
    console.log(`Added ${item.name}. Total is now $${total}.`);
    return total;
}
```

这里有什么问题？

-   它试图做所有事情。
    
-   难以阅读，尤其是变得更大时。
    
-   如果某个部分出错，你会浪费时间找出问题所在。
    
```

### **⛺ 遵循童子军规则**

> 让你的营地比你发现时更干净。

让我来为你解析一下。你不能只是使用某样东西然后把它弄得比之前更糟。这是缺乏考虑的行为。真正的专业人士会让事情变得比他们发现时更好。

在编程术语中，每次你接触代码库时，**让它变得更好。** 清理它，重构混乱的部分，提高可读性。如果不这样做，你只是在堆积垃圾，最终会崩塌在你头上。

这里有一个例子。我们没有改善它，只是增加了更多复杂性：

```
// 原始代码：难以阅读，变量命名不当
function calc(a, b) {
  let x = a + b;
  let y = x * 0.2;
  return y;
}

// 我们在添加功能但没有清理它
function calcDiscount(a, b, discountRate) {
  let total = calc(a, b);
  let final = total - discountRate;
  return final;
}
```

之后：每次都会变得更好。看看有纪律的程序员是如何工作的——他们边走边改进：

```
// 改进后的代码：清晰的名称，重构以提高清晰度
function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function calculateDiscountedTotal(price, quantity, discountRate) {
  const subtotal = calculateSubtotal(price, quantity);
  const discount = subtotal * discountRate;
  return subtotal - discount;
}
```

现在，任何人一眼就能看出发生了什么。因为我们已经将代码分解为更小、更集中的函数。因此，添加新功能不会破坏现有功能。🏕️

### **🏟️ 遵循开放/封闭原则**

该设计原则建议您的代码应该被设计为允许扩展，而不改变现有基础。

你想要添加功能_——_而不是每次升级时都拆掉它_。_修改旧代码以适应新要求，就像每次你买了新家具就得重建房子一样。这是不可持续的。

让我们看看如何构建更智能、更具可扩展性的代码，让你在不破坏其他功能的情况下添加功能。

#### 之前：违反原则

你有一个类来处理付款——这很简单。开始时，它只是处理信用卡。

但是你的老板出现了，说，“嘿，现在我们需要支持 PayPal。”

由于你没有努力学习干净的代码，你的代码看起来像1995年的一个遗留企业系统出来的意大利面条怪物。这是你制作的杰作：

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

唉！每种新的支付方式（如 Apple Pay、Google Pay 等）都需要修改`processPayment`方法。不用说，你在添加新功能时有可能破坏现有功能。如果你学过这一原则，你可能就不会陷入这种困境。

不用担心：我会帮你解决这个问题。首先，我们需要重构代码。我们将不修改现有类，而是通过使用[多态][32]来扩展其功能：

```
javascriptCopy code// 基类
class PaymentProcessor {
  processPayment(amount) {
    throw new Error("processPayment() 必须被实现");
  }
}

// 信用卡付款
class CreditCardPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

// PayPal 付款
class PayPalPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// 添加新的支付类型？只需扩展类即可！
class ApplePayPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing Apple Pay payment of $${amount}`);
  }
}

// 使用
const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new ApplePayPayment(),
];

payments.forEach((payment) => payment.processPayment(100));
```

现在，添加新的支付方法不需要更改现有的`PaymentProcessor`类。你只需创建一个新的子类。因此，原始代码仍然保持不变，这意味着没有破坏现有功能的风险。

每种支付方式都有自己的类，例如，添加 PayPal 支付支持不会破坏代码。现在你可以回复你的老板：“当然，我将在5分钟内添加这个功能。” 晋升已在等你接受。

在我的书[《Clean Code Zero to One》][33]中，我分享了更多提示。

## 帮助您编写干净代码的现代最佳实践：总结 🥷

现在让我向您展示最佳实践，并总结我们的12条干净代码设计原则，以帮助您为敏捷应用程序开发编写干净的代码。

### 🔎 常见代码异味及其解决方法

-   💊 重复：如果你在复制代码，那就是在给自己制造更多工作。把它提取到函数中，并做好。
    
-   🛤️ 长方法：如果你的方法需要一个滚动条，那它做得太多了。分解它，保持专注。
    
-   👑 大对象：没有哪个类应该全权处理所有事情。简化职责，否则你的代码库将变得混乱。

```
-   💭 什么时候评论：只有在代码不清晰时才评论。如果代码已经很清楚，注释反而是一种干扰。

-   🫗 清晰度：注释应该解释“为什么”，而不是“是什么”。如果你的代码需要解释，可能是太复杂了。

-   🌴 避免冗余：不要注释明显的部分。如果你的函数是 addNumbers，不要注释它的功能就是加法。

### 🧼 清洁代码的重构技术

-   🏭 提取方法：大方法？拆解它们。这不仅仅是关于代码的整洁——也是关于控制。

-   🫕 重命名变量：如果你的变量名称没有明确说明它们的用途，就改变并改进它们。命名精确代表思维精确。

-   🍃 简化条件：如果你的条件语句看起来像代数，简化它们。如果 a == true，只需写 if(a)。

### 🧪 测试与清洁代码

-   🧙 单元测试：像审问嫌疑犯一样测试每一段代码。不放过任何细节。

-   🏇 TDD（测试驱动开发）：先编写测试。这不仅仅是为了捕捉 bug，更是为了在编写代码之前确切知道代码应该做什么。

-   🧽 清晰测试：测试应如代码一样清洁。如果它们混乱，就不会有用。

### 🐛 错误处理和清洁代码

-   ⁉️ 异常：使用它们。它们不仅仅用于错误，也用于保持代码不受错误干扰。

-   🖍️ 快速失败：如果有问题，立刻停止。不要让错误积累。立即处理它们。

-   🚨 日志记录：像记录犯罪现场一样记录。清晰、精确，只记录必要的内容。

### 🌱 代码审查和清洁代码

-   🚢 过程：有一个系统。不要随心所欲地编写代码。审查、批评、改进。

-   🔪 工具：使用那些让审查变得容易的工具。它们不仅用于抓错，也是用于培养纪律。

-   🧦 文化：培养一种将反馈视为黄金的文化。帮助你的团队学会如何处理和接受批评。

## 保持清洁代码的自动化工具 ⚓

工具和自动化技术在编写清洁代码时非常有帮助。如果你没有使用合适的工具并自动化以节省时间，你就错失了很多。

你以为你可以通过眼睛来判断代码质量？再想想吧。没有自动化，这就是会发生的事情：

1.  👎 你会错过明显的错误，因为你“太忙”了。

2.  🤕 你的代码在每个文件中都不同，使得合作变得复杂。

3.  🪦 部署失败，因为你跳过了关键测试。

成功的开发者使用合适的工具来自动化代码并高效完成任务。以下是利用现代工具维护清洁代码的四种策略。

### **1️⃣ 静态分析**

静态分析实际上是一个代码检查器，它会在运行时之前通过你的代码并指出潜在的问题。最佳部分？它在运行时之前工作，捕获可能导致崩溃、停机或尴尬 bug 的错误。

#### **如何工作？**

1.  **语法检查**：它查看你的代码以确保所有语法正确。如果拼写变量错误或忘记闭合括号，它会立即指出。

2.  **代码质量规则**：像 ESLint 这样的工具实施的规则包括一致的缩进、避免未使用的变量及坚持最佳实践。

3.  **错误预防**：识别逻辑错误，比如使用未定义的变量或进行不合理的比较。

以下是静态分析在实践中的应用：

#### 🚨 在静态分析之前：

```javascript
let sum = (a, b) => { return a + b; }
console.log(sume(2, 3)); // 拼写错误，直到运行时才被发现
```

-   **问题**：`sume` 的拼写错误只会在代码运行时导致错误，这可能导致令人沮丧的调试或更糟的——在生产中应用崩溃。

#### 🚑 使用 ESLint 后的静态分析：

```
codeError: 'sume' 没有定义。
```

-   **解决方案**：[ESLint][34] 在运行代码之前立即标记拼写错误。错误被早期发现，节省了时间和麻烦。

### **2️⃣ 自动代码格式化**

格式化之前：

```javascript
function calculate ( x , y ){ return x+ y;}
console.log( calculate (2,3 ) )
```

-   **问题**：不一致的间距和格式使代码难以阅读。

#### 使用 Prettier 后：

```javascript
function calculate(x, y) {
  return x + y;
}
console.log(calculate(2, 3));
```

-   **解决方案**：通过自动化应用清晰、一致且专业的格式。不再纠结于空格或对齐问题。

这虽然是基本的内容。如果你在记事本中或某些没有提供 IDE 的场合编写代码（例如，在工作面试中），我还是涵盖了这个内容。

### **3️⃣ 持续集成（CI）测试**

CI 测试确保每次代码有新变化时都自动验证。这就像一个安全网，可以捕捉开发过程中引入的 bug。CI 工具会在每次提交代码时运行测试，以防部署后出现问题。

#### **CI 测试如何工作？**

1.  **检测变化**：每次提交代码时，CI 工具（如 [GitHub Actions][35]、[Jenkins][36]）会自动运行测试。

2.  **反馈**：如果某个地方失败了，会立即给出反馈。

3.  **防止坏代码**：只有清晰且运作正常的代码才会合并到主分支中。
```

我们还使用 CI/CD 管道作为一个持续的过程，包括代码构建、测试和部署，而 CI 测试是该过程的一部分，专注于自动化代码变更的测试。

**CI/CD 管道与 CI 测试的区别：**

- **CI/CD 管道：** CI/CD 管道将代码构建、测试和部署组合成一个过程。这个过程确保所有对主分支代码的更改都可以发布到生产环境。CI/CD 管道可以缩短部署时间、降低成本并改善团队协作。

- **CI 测试：** CI 测试是对集成到中央代码仓库中的代码变更进行自动化测试的过程。CI 测试重点确保代码库的稳定性并解决集成问题。CI 测试帮助开发人员构建稳定、无错误且符合功能要求的软件。

🚧 这就是 CI 测试和 CI/CD 管道概念的真正意义所在。并没有想象中那么复杂。因此，让我详细说明一下如何使用 GitHub Actions 进行 CI 测试，因为现在我们通常通过自动化工具运行测试。

### **⚡ 使用 GitHub Actions 进行持续集成 (CI) 测试**

如前所述，CI 工具在每次推送代码或打开拉取请求时运行自动化测试。这保证了只有有效、无错误的代码才能合并到主分支。

#### 如何使用 GitHub Actions 设置 CI 测试

**步骤 1：创建你的代码仓库**

为你的项目设置一个 GitHub 仓库。然后，使用以下命令将代码推送到 GitHub：

```
git init
git add .
git commit -m "Initial commit for CI Testing"
git branch -M main
git remote add origin https://github.com/codewithshahan/codewithshahan.git
git push -u origin main
```

你也可以直接从 GitHub 帐户创建一个新的代码仓库，而无需使用命令。只需登录你的 GitHub 账户并访问仪表板。在这里你会找到一个“新建”按钮来创建一个全新的代码仓库：

![Shahan 在 GitHub 上创建新仓库的图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618697327/dcef8be8-0d08-45d7-8000-34c4c65df425.png)

**步骤 2：添加一个 GitHub Actions 工作流**

导航到代码仓库的 **Actions** 选项卡。要做到这一点，首先你需要访问你的 GitHub 仓库（创建仓库后你会获得链接）。在这个例子中，我创建了一个名为 “codewithshahan” 的新仓库。在这里，查看导航栏右侧的 **Actions** 选项卡。

![Shahan 的 GitHub Actions 导航栏图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618879398/7c5aa37a-72be-4701-a8f8-9ea9e05c0d5d.png)

导航到 Actions 选项卡后，向下滚动一点，你会找到 **持续集成** 部分：

![Shahan 的 GitHub Actions 页面的 CI（持续集成）测试图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619002674/60003e57-f2b2-48f1-bef8-9bde39149faf.png)

选择一个适合自己的工作流设置。我将在这个项目中使用 Node.js。

点击配置按钮后，将自动创建一个 `node.js.yml` 文件，你可以根据自己的目标调整其中的代码。

![Shahan 的 GitHub 工作流片段自动化测试图片](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619475568/74da6d46-c105-42c8-8662-fc72e9410bda.png)

我不会详细说明如何修改 `.yml` 文件。它取决于你的项目目标和个人喜好。此外，这个话题范围较广，而本文已经相当长，所以我会在以后的文章中解释。目前，只需掌握这些基础知识。

这种 CI 测试工作流最适合现代应用开发。在你的 GitHub 仓库内直接构建和部署应用程序时，你的应用保持稳定，同时加入关键功能（例如，暗模式）。这样你可以自信地推送代码，确保代码始终干净并准备好用于生产。

## 文档在敏捷软件开发中的作用 🚣

如果你希望你的代码出类拔萃，你需要了解如何编写优秀的文档。如果你认为文档只是写下代码的工作原理，那你就错了。它是关于解释**为什么**代码有效，而不仅仅是如何生效的。这是大多数人容易忽视的地方。

### 1\. 🚡 创建**有用的文档（解释“为什么”，不仅仅是“如何”）**

当你编写文档时，你不仅仅是在提供使用代码的说明。你是在告诉下一个人（或者是未来的自己）为什么这段代码会存在。这就是优秀文档和普通文档的区别。

糟糕的文档会让人摸不着头脑。它们过于笼统、简陋，并且没有回答关键问题。如果你的文档不清晰，那通常意味着你的思路也不清晰。你基本上是在说，“_我不在乎你是否理解，只要它有效，使用就行。_”这没有帮助。

优秀的文档会回答一些艰难的问题：

- ✅ 你为什么选择这种方法而不是其他方法？

- ✅ 为什么这个函数存在？它解决了什么问题？

- ✅ 为什么你这样写这段代码？

### 2\. ⏳ **保持文档更新（过时文档比没有文档更糟）**

过时的文档是最糟糕的。事实上，它可能比没有文档还要糟。当你的文档与代码不同步时，你是在给未来的自己——或其他需要处理这份工作的人的巨大麻烦。

每次代码变化时，文档也需要更新。它必须反映当前的状态。不要通过留下过时的信息来误导未来的开发者（或你自己），这些信息只会让他们困惑并浪费时间。如果某些东西不再相关，立即删除它。过时的文档就像杂乱的思维——会牵制住你。

养成定期检查和更新文档的习惯。当一行代码发生变化时，文档也应该随之变化。就是这么简单。

### 3\. 🚆 **整合注释（代码中的好注释是文档的一部分）**

如下所述——代码中的注释应当与文档**整合**。好的注释不仅仅是为不能在其他地方解释代码的开发者提供的拐杖。它们应该改进你的文档，而不是取代它们。

注释是文档的补充。你要编写干净、易于理解的代码，这样才需要最少的解释，但当有些东西不是十分清楚时，可以加入注释。记住代码中注释的规则：解释**为什么**，而不是**如何**。这同样适用在这里。不要重复自己。让你的代码来说话。注释应当补充文档的整体，不应是补救冗杂代码的补丁。

🪧 优秀的代码应当是不言自明的。修正代码，然后在必要时添加注释以作澄清。保持注释的简洁、明了和直接。

如果你想编写干净、高效、可维护的代码，文档非常关键。不要把文档当作事后的想法或填充空间的东西。它是代码的延伸——是你清晰且有效沟通的方式。它是为未来开发者的路线图，也是你思维过程的体现。

## 结论 🏁

干净的代码不是可有可无的——它是那些想要引领潮流者的必备。它关乎控制、效率以及从长远来看不断的改进。最终，它会帮助你在敏捷软件开发的竞争中取得成功。

🪧 如果你想真正掌握你的工艺，写出干净的代码，让效率自己说话。

## 关于干净代码的常见问题 🧯

1.  **什么是干净代码？** 它是不会让你想把笔记本电脑扔出窗外的代码。
    
2.  **为什么干净代码在敏捷中很重要？** 因为敏捷关乎速度和变化，而混乱中难以快速应对。
    
3.  **什么是代码异味？** 表明你即将失去对代码库控制的信号。
    
4.  **我如何改进注释？** 只注释必要的内容，并确保每个注释增值而不是增加噪音。
    

感谢你的陪伴。你可以访问我的[推特账号][37]或[我的网站][38]，阅读更多关于干净代码和敏捷应用开发的文章。下次见...继续改善你的代码库。

如果你认真想掌握干净代码并将你的编程职业提升到一个新的水平，那么我的书就是你的不二选择：[《从零到一的干净代码》][39]。这本书是你从混乱代码到杰作的完整指南。我提供50%的折扣，使用代码"earlybird"——仅限前50本。此外，还有30天退款保证——无风险，全回报。

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

