```markdown
---
title: "清洁代码手册：如何为敏捷软件开发编写更好的代码"
date: 2025-02-06T14:19:33.888Z
author: Programming with Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/the-clean-code-handbook/
posteditor: ""
proofreader: ""
---

构建可扩展的软件应用程序需要编写干净的代码，这些代码简单到任何开发人员都能理解。

<!-- more -->

在本文中，我将解释并演示什么是干净的代码。然后我将分享我最喜欢的用于构建现代敏捷应用程序的干净代码模式。

我不会使用复杂的行话。我会用简单、清晰的 JavaScript 示例来突出核心概念。直截了当，不啰嗦——这就是我的风格。

让我们开始吧。

## 目录

1.  [糟糕代码的代价][1]
    
2.  [干净的编码者 vs. 混乱的编码者][2]
    
3.  [如果你的代码一团糟，人工智能也救不了你 🗑️][3]
    
4.  [为构建敏捷应用程序提供的 12 个干净代码设计模式 ⚖️][4]
    
    -   [🌿 使用有意义的名称][5]
        
    -   [🔨 保持函数的单一职责原则 (SRP)][6]
        
    -   [🚪 有思考地使用注释][7]
        
    -   [⚡ 编写优秀注释的最佳实践][8]
        
    -   [🧩 使代码可读][9]
        
    -   [🏌️ 测试你编写的所有内容][10]
        
    -   [💉 使用依赖注入][11]
        
    -   [📂 清晰的项目结构][12]
        
    -   [🤹‍♂️ 保持格式一致性][13]
        
    -   [✋ 停止硬编码值][14]
        
    -   [🤏 保持函数简短][15]
        
    -   [⛺ 遵循童子军规则][16]
        
    -   [🏟️ 遵循开放/关闭原则][17]
        
5.  [帮助你编写干净代码的现代最佳实践总结 🥷][18]
    
6.  [维护干净代码的自动化工具 ⚓][19]
    
    -   [1️⃣ 静态分析][20]
        
    -   [2️⃣ 自动代码格式化][21]
        
    -   [3️⃣ 持续集成 (CI) 测试][22]
        
    -   [4️⃣ CI/CD 流水线][23]
        
7.  [文档在敏捷软件开发中的角色 🚣][24]
    
8.  [结论 🏁][25]
    
9.  [关于干净代码的常见问题解答 🧯][26]
    

![敏捷软件开发表情包图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xh3j6ccn1hc3euc3lfyl.png)

在瞬息万变的敏捷环境中，干净的代码是你的护甲。它让你变得灵活、迅速，最重要的是，保持掌控。

事实是：如果你想在软件开发行业中生存，编写干净的代码不是可选项。幸运的是，我们人类通过一些努力和练习可以掌握干净代码。

## 糟糕代码的代价

![糟糕代码与干净代码成本对比图表 by shahan](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wdai6npb55j71sguj6kl.png)

为了说明这个堆栈柱状图，在最初的开发阶段，修改糟糕代码的代价虽然**稍微**高于干净代码。

但随着我们进入维护和重构阶段，这种差距显著扩大，糟糕代码的成本几乎是干净代码的两倍。

到达遗留阶段时，糟糕代码的成本达到 100%——此时更新的代价极高，而干净代码则保持在 45% 的更易管理的水平。

截至目前，有关美国低质量软件成本的最新分析是信息与软件质量联盟 ([cisq.org][27]) 发布的 2022 年报告。该报告估计，2022 年低质量软件至少给美国经济造成了 2.41 万亿美元的损失，其中技术债务约占 1.52 万亿美元。

你可以[在这里了解更多][28]。

近期讨论继续强调技术债务对软件质量和业务性能的重大影响。

例如，[2024年的一项调查][29]显示，对于超过50%的公司而言，技术债务占其IT总预算的四分之一以上。如果不予以解决，这可能极大地阻碍创新。

正如你所见，毫无疑问，糟糕的代码是软件开发中的一大昂贵问题。

## **干净的编码者 vs. 混乱的编码者**

这是一张展示**两种类型**编码者旅程的图表：

![清洁代码与糟糕代码图表](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c6ubf77uwipf4gtucw8q.png)

-   **⚠️ 混乱的编码者（红线）：** 开始速度快但很快崩溃。写的代码越多，麻烦越多。
    
-   **⚡ 干净的编码者（蓝线）：** 开始较慢但始终一致。增长不停步 — 它在加速。
    

🫵 现在，你决定你想跟随哪条路线。

## 如果代码一团糟，AI 也救不了你 🗑️

当你写代码陷入困境时，你可能会转向 AI。但告诉你：如果你的代码一团糟，AI 也救不了你。

这就像在沙子上建房子。虽然它会挺立一段时间，但只要一阵强风或大浪，它就会倒塌。

记住：AI 只是一个工具。如果你不知道如何编写干净、可扩展的应用程序，你就是在为失败做好准备。
```

我一次又一次地看到: 那些懂五种编程语言的开发者。他们可以构建应用程序、网站、软件。他们对算法和数据结构了如指掌。

但当面对大型项目或他人杂乱无章的代码时，他们就崩溃了。

他们就像一个设计并制造自己飞机的航空工程师，却不知道如何驾驶这些飞机。他们撞进自己编写的代码中。

这曾经就是我。有段时间，我写了成千上万行代码，却发现自己连上周写的内容都不明白。对我来说，这是一片混乱。

但后来我意识到——每个开发者都会遇到这种困境。这与我知道多少无关，而在于如何组织和结构化我所掌握的知识。换句话说，这是关于理解编程本身的艺术。

我决定摆脱这个陷阱。经过五个月的紧张工作——每天四到五小时的写作、设计和研究——我创造了一本我希望在开始编程时能拥有的东西。一本完全适合初学者的指南：**《干净代码：从零到一》**。

![《从混乱代码到杰作：干净代码从零到一》封面图](https://cdn.hashnode.com/res/hashnode/image/upload/v1737731329839/c4c862d9-7fdc-460a-ae2e-18b19468b6ec.png)

如果你想了解更多关于这本书的信息，我会在本教程的结尾为你提供所有细节。继续阅读以了解更多关于编写干净代码的内容。

## 用于构建敏捷应用的 12 种干净代码设计模式 ⚖️

如果你的代码不遵循这些现代干净代码设计模式，你可能是在制造定时炸弹。这些模式就是你的工具。掌握它们，享受你项目的成功。让我逐一向你展示。

### **🌿 使用有意义的名称**

将你的变量或函数命名为 b 或 x 并没有帮助。称它们为它们实际代表的意思，这样更容易理解。以下是一个糟糕和良好的变量命名例子：

```
// 弱且模糊
let b = 5;

// 强且清晰
let numberOfUsers = 5;
```

写不清楚名称的人不愿为自己的错误负责。不要成为那样的人。

![漫画展示糟糕与良好的变量名称，由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165724746/37b2edc3-3c68-47a8-ab6f-f131a2239a01.png)

### **🔨 让函数聚焦于单一目标 (SRP)**

一个函数应该做**一件事**——并完美地完成它。这被称为单一职责原则（**SRP**）。

好的代码就像一把锤子。它钉一个钉子，而不是十个。例如，如果你雇佣一个人来做公司里的所有工作——财务、销售、市场营销、清洁工等等——他们可能会失败，因为他们无法专注于一件事情。在代码中也是如此。

🚧 当一个类或函数做不止一件事时，它就变成了一团乱麻。调试它就像倒着解谜一样。举例来说，如果你的类既处理用户输入又处理数据库操作，这不是多任务，而是疯狂。拆分它。一个方法一个责任。

**🔥 我的原则：** 你的代码为你服务。保持它的锋利、专注和可控，否则它会反过来控制你。以下是实现这种目标的方法：

```
// 干净：一个任务，一个焦点
function calculateTotal(a, b) {
    return a + b;
}

function logTotal(user, total) {
    console.log(`用户: ${user}, 总计: ${total}`);
}

// 混乱：试图做所有事情
function calculateAndLogTotal(a, b, user) {
    let total = a + b;
    console.log(`用户: ${user}, 总计: ${total}`);
}
```

🪧 当你混合任务时，你会混合进困惑。就是这么简单。

### **🚪 有针对性地使用注释**

专业开发者中有句名言：

> “代码自会表达。”

你不会每次有人走进房间时都解释门做了什么，对吧？你的代码也应该这样工作。

注释不是坏事，但如果你的代码不能独立存在，那你可能有个问题。

🪧 一个好的注释应该告诉“为什么”，而不是“如何或做什么”。如果一个开发者不了解“如何”工作，那么他们很可能也不能理解“为什么”。

以下是一些好的注释与坏的注释的简短示例。也将向你展示一个真实项目中如何编写简洁注释。

**示例 1: 差的注释 👎**

```
// 将价格乘以数量来计算总数
const total = price * quantity;
```

这是一个**差的注释**，因为它只是重复了代码已经说明的内容。代码 `price * quantity` 是自解释的，所以注释并没有增加任何有用的信息。

**好的注释: 👍**

如果代码清晰简单，**就不需要注释。**

```
const total = price * quantity;
```

![图示不必要的注释与“无声注释”，由 Shahan 提供](https://cdn.hashnode.com/res/hashnode/image/upload/v1736165891398/6a942ad7-5b09-4990-9c7f-95358dafcbf3.png)

**示例 2: 差的注释 👎**

```
// 检查用户是否已登录
function isUserLoggedIn(session) {
    return !!session.user;
}
```

这条注释不佳，因为它没有解释 `isUserLoggedIn()` 存在的原因。它只是解释了发生了什么。但我们已经知道这是一个身份验证函数。这个注释浪费了时间。

**好的例子 👍**

这是一个**好的注释**，因为它解释了代码存在的**原因**。它告诉我们在允许访问应用程序的敏感部分之前，该函数会检查用户是否已通过身份验证。它着眼于更大的图景。

![之前：“检查用户是否已登录”。之后：“在访问受保护资源之前，用户已通过认证。”作者：Shahan。](https://cdn.hashnode.com/res/hashnode/image/upload/v1736166143011/b3ddae3d-41cf-4534-8f1a-af710579922c.png)

### **⚡ 撰写良好注释的最佳实践**

1.  **解释“为什么”，而不是“做什么”：**  
    写注释来解释代码的目的或背景，而不是代码在做什么。
    
2.  **避免明显的注释：**  
    不要为代码中已经清楚的事情写注释。
    
3.  **保持简短和准确：**  
    编写简明的注释，使其易于阅读并直截了当地解释目的。
    
4.  **定期更新注释：**  
    过时的注释可能会误导开发人员，因此在代码更改时始终更新它们。
    

**真实世界中的例子（含良好注释） 🛒**

让我们将这些实践应用于一个真实世界的项目：一个大型电商应用程序。一个函数根据订单详情计算运费。以下是完整代码，我将在下面解释每个注释：

```javascript
// 运费规则：
// - 订单超过$100免运费
// - 订单低于$100的标准运费是$10
// - 国际订单需额外加收$5

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

在函数开始时，我们包括一个注释解释运费规则。这给读者提供逻辑的概览，而无需阅读完整代码。

```javascript
// 运费规则：
// - 订单超过$100免运费
// - 订单低于$100的标准运费是$10
// - 国际订单需额外加收$5
```

然后，第一个条件检查订单总额是否大于或等于$100。此处的注释澄清了免运费的原因。

```javascript
// 检查订单是否符合免运费条件
if (order.total >= 100) {
    shippingCost = 0; // 免运费
}
```

第二个条件为国际运费收取额外费用。注释解释了为什么要增加额外费用。

```javascript
// 为国际订单增加额外费用
if (order.isInternational) {
    shippingCost += 5;
}
```

**为什么这些注释好？**

假设你在一个由20名开发人员组成的团队中工作。有人六个月后阅读`calculateShipping`函数。如果没有这些注释，他们可能会浪费时间猜测为什么国际订单有额外费用。良好的注释澄清了原因，节省了大量的挫折时间。

### **🧩 使你的代码可读**

如果有人阅读你的代码感觉像在解谜，那么你已经成为了麻烦制造者。这里是证明：

```javascript
// 清晰：读起来像个故事
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// 混乱：感觉像是混乱
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
```

如果你的代码杂乱无章且难以阅读，它会让其他人感到困惑——甚至是你自己在之后！想象一下你六个月后回头看自己的代码，感觉像是在阅读一种外语。可读的代码节省时间，减少错误，使每个人的生活更轻松。

**🍵 为什么可读性重要？**

1.  **为了你自己：** 当你在几周或几个月后重温你的代码时，干净的代码帮助你不浪费时间弄清楚你做了什么。
    
2.  **为了你的团队：** 如果其他人阅读你的代码，他们不应该需要解谜。干净的代码使团队合作更顺畅，并防止误解。
    
3.  **更少的错误：** 清晰的代码更容易调试，因为你可以快速找到错误。
    

**🧙‍♂️ 如何编写可读代码**

让我们构建一个简单的程序来管理图书馆中的书籍。我们会使其清晰可读，然后我将在下面分解这段代码：

```javascript
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

```markdown
// 示例用法
const book1 = new Book("The Clean Coder", "Robert Martin", true);
const book2 = new Book("You Don’t Know JS", "Kyle Simpson", false);
const book3 = new Book("Eloquent JavaScript", "Marijn Haverbeke", true);

const library = [book1, book2, book3];

displayAvailableBooks(library); // 显示可借书籍
book1.borrow(); // 借一本书
displayAvailableBooks(library); // 再次显示可借书籍
book1.returnBook(); // 归还书籍
displayAvailableBooks(library); // 最终列表
```

我们创建了一个 `Book` 类来表示每本书。它有诸如 `title`、`author` 和 `isAvailable` 这样的属性来跟踪书籍的状态。

- `borrow` 方法检查书籍是否可用。如果可用，则将其标记为不可用并打印一条消息。

- `returnBook` 方法使书籍重新可用。

- `displayAvailableBooks` 函数遍历图书馆，只打印可用书籍。

- 我们创建了三本书（`book1`、`book2`、`book3`），并将它们存储在一个 `library` 数组中。

- 我们借用和归还书籍，展示了可借书籍列表如何变化。

如你所见，可读的代码不仅仅是关于风格。它节省时间，防止错误，并使代码在未来多年内有用。

### **🏌️ 测试你写的所有内容**

如果你不花时间编写测试，那么当代码出现问题时，你不应感到惊讶。如果你确实想写测试，请遵循这个单元测试策略来提前发现问题。

**什么是单元测试？**

具体来说，单元测试检查代码的各个部分（如函数或类）以确保其正常工作。就像在建墙之前检查房子的每一块砖的稳固性。

让我给你一个关于如何进行单元测试的例子：

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

这里的代码内容如下：

首先，我们创建计算器类：

```
class Calculator {
    add(a, b) { return a + b; }
    subtract(a, b) { return a - b; }
}
```

`Calculator` 类有两个方法：`add` 和 `subtract`。

- `add(a, b)` 接受两个数字并返回它们的和。
  
- `subtract(a, b)` 接受两个数字并返回它们的差。

接下来，我们建立测试：

```
const calculator = new Calculator();
```

在这里，我们创建了一个 `Calculator` 类的实例来测试其方法。

然后我们编写测试用例：

```
console.assert(calculator.add(2, 3) === 5, "Addition failed");
console.assert(calculator.subtract(5, 3) === 2, "Subtraction failed");
```

`console.assert(condition, message)` 检查条件是否为 `true`。如果为 `false`，则在控制台显示消息（"Addition failed" 或 "Subtraction failed"）。

- **第一个测试**：`calculator.add(2, 3) === 5`
    
    - 调用 `add` 方法，参数为 `2` 和 `3`。
      
    - 检查结果是否为 `5`。
      
- **第二个测试**：`calculator.subtract(5, 3) === 2`
    
    - 调用 `subtract` 方法，参数为 `5` 和 `3`。
      
    - 检查结果是否为 `2`。
      
那么如果出现问题会发生什么呢？解决此处出现的任何问题都很简单。在本例中，如果 `add` 或 `subtract` 方法无法正常工作，测试将失败。例如：

```
console.assert(calculator.add(2, 3) === 6, "Addition failed");
```

- 条件 `calculator.add(2, 3) === 6` 为 `false`。
    
- 控制台将显示：`"Addition failed"`。
    

**实际案例：测试登录系统 👥**

让我们测试一个简单的登录系统，以了解单元测试在实际场景中的工作原理。

```
class Auth {
    login(username, password) {
        return username === "admin" && password === "1234";
    }
}

// 测试 Auth 类
const auth = new Auth();
console.assert(auth.login("admin", "et5t45#@") === true, "Login failed for valid credentials");
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

`login` 方法检查用户名是否为 `"admin"` 并且密码为 `"1234"`。如果两者匹配，则返回 `true`，否则返回 `false`。

接下来，设置测试：

```
const auth = new Auth();
```

创建 `Auth` 类的一个实例。然后编写测试用例：

```
console.assert(auth.login("admin", "1234") === true, "Login failed for valid credentials");
console.assert(auth.login("user", "wrongpassword") === false, "Login succeeded for invalid credentials");
```

- **第一个测试**：检查有效凭据（`"admin"`，`"1234"`）是否成功。如果没有，显示 `"Login failed for valid credentials"`。
  
- **第二个测试**：检查无效凭据（`"user"`，`"wrongpassword"`）是否失败。如果没有，显示 `"Login succeeded for invalid credentials"`。

**🌱 为什么测试会导致代码的简洁：**
```

### **💉 使用依赖注入**

硬编码依赖就像在额头上纹上某人的名字——它是永久性的、可能令人反感，并让你深陷其中。

那么，依赖注入能做什么呢？它通过将依赖项作为参数传递来管理代码的关系。这样更灵活、可适应且易于维护。

为了展示它的工作原理，我在这里使用 Nodemailer 依赖来发送用户邮件：

```
// 依赖项：使用 Nodemailer 发送邮件
const nodemailer = require('nodemailer');
function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({ /* 配置 */ });
    return transporter.sendMail({ from: "programmingwithshahan@gmail.com", to, subject, text: message });
}
```

⚠️ 为了避免风险，请确保避免**硬编码**依赖项。使用抽象或配置文件以确保安全维护。

这只是一个例子。作为开发者，你可能会使用数百个库或依赖项。

我并不是说你不应该依赖任何依赖项或库，因为现在很难避免使用它们。但在将它们安装到你的编码项目中之前，你需要非常谨慎。

你应该检查组织的软件系统的安全性、性能、质量或功能。因为它们有时包含风险，这可能会毁掉你的整个项目。

🚧 始终掌控你的工具，不要让它们掌控你。

### **📂 整洁的项目结构**

一个组织良好的项目就像高档**精品店**与**垃圾堆**的区别。

以下是每个文件夹应如何组织：

![Shahan 的干净代码项目结构图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9xwyg9iqqcybz21lsgxz.png)

如果你的代码库看起来像一个杂乱抽屉，未来的你已经给自己带来了麻烦。

让我们浏览一下上面看到的干净项目结构，以更好地理解它：

**1.** `myProjet/src`

这是整个应用程序的主要容器。应用程序所需的一切都存储在这个文件夹内。它有子文件夹来保持整洁和统一管理。

**2.** `components`

这是你存放应用可重用部分的地方。可以在多个地方使用这些组件，而无需重新构建。

**3.** `services`

这是应用程序的“头脑”。它处理了前端和后端的幕后一切工作。`emailService.js`、`userService.js` 和 `productService.js` 是 `services` 文件夹的一些示例文件。

**4.** `utils`

这里包含了让应用程序运行得更顺畅的所有小工具，使你的生活更加简单。例如，`formateDate.js`、`validateEmail.js` 和 `generateId.js` 是制作组件可重用部分的一些常见实用文件。

#### **5.** `tests`

通常，测试文件位于 `src` 文件夹之外，在项目根目录。这使得将生产代码（`src`）与测试代码（`tests`）分隔开，使得管理更为清晰和简洁。看一下：

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

一些开发者可能更喜欢在 `test` 文件夹内创建一个测试文件来测试所有东西。不幸的是，最初这样看起来似乎很整洁，但随着项目的增长，你不得不找到并搜索特定的代码块。这很不美观，并可能产生意外的测试结果。因此，强烈建议将它们分解成 `tests` 文件夹内的多个测试文件。

**现实世界的例子 📧**

让我为你创建一个干净、耐用的项目结构，以便将来你可能会在任何项目中应用。不言而喻，干净的项目结构是构建可维护项目的基础。

从先前的邮件发送应用程序示例中，我们将为这个应用编写一个干净的项目结构。我们想要构建一个发送邮件给用户的应用程序。对此应用的干净项目结构应如下所示：

![Shahan 的邮件应用干净代码项目结构图片](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6v6rlc5qiplgxz1h4dps.png)

如你所见，我将每个子文件夹和文件打包在 `src` 文件夹内，`src` 文件夹是我们应用程序的主要容器。在 `src` 文件夹内，我们创建了 `components`、`services`、`utils`。最后，我们在 `src` 文件夹之外有一个可管理的 `tests` 文件夹，用于独立测试每个组件。这个测试文件夹与我们的生产代码无关，生产代码位于 `src` 文件夹内。

### **🤹‍♂️ 保持格式一致性**

不要写看似由十个不同人写的代码。保持格式一致。

使用 [Prettier][30] 或 [ESLint][31] 等工具来强制执行一致的风格。如果每个文件看起来都不同，你就是在制造任何人都不想去修复的混乱。

我会说，格式一致性是编写干净代码最重要的方面之一。

```
// 始终使用两个空格来缩进
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

// 清晰的逻辑分离
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`面积: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

让我们来检查一下这段代码的哪些方面使它更整洁：

#### 1️⃣ 一致的缩进

为什么要用 2 或 4 个空格？它简洁、极简，并且在很多 JavaScript 风格指南中被普遍接受。它不会让人眼花缭乱，而且代码结构清晰。混杂不一致的缩进（这里 2 个空格，那里 4 个空格）会让人困惑，而困惑的人容易犯错。

#### 2️⃣ 有意义的空白：给代码喘息的空间

在矩形定义和 `try` 块之间的额外空行就像句子中的一个停顿 —— 它给读者一些时间来理解。

#### 3️⃣ 清晰的逻辑分离：模块化思维

```
try {
  const area = calculateArea(rectangle.width, rectangle.height);
  console.log(`面积: ${area}`);
} catch (error) {
  console.error(error.message);
}
```

看看逻辑是如何分成清晰的部分的：

- 首先，计算 (`calculateArea` 函数)。
  
- 然后，输出 (`console.log`)。
  
- 最后，错误处理 (`catch` 块)。
  

每个任务都有其自己的空间和目的。

#### 4️⃣ 可读的错误处理

当你抛出错误或记录信息时，请格式化它们。这里没有模糊或神秘的信息。开发者一看到这个就会立即明白问题所在。

```
throw new Error("尺寸必须是正数。");
```

**🐦‍⬛ 保持一致格式的通用建议：**

- 在整个代码库中一致地使用 2 或 4 个空格进行缩进。避免使用制表符以保持不同编辑器间的统一性。
  
- 将行长度保持在最多 100-120 个字符以内，以防止水平滚动并提高可读性。
  
- 将相关逻辑分组，并用空行分隔代码块以突出它们的目的。
  
- 最后，避免过度对齐代码。相反，让缩进自然地引导逻辑的流程。
  

### **✋ 停止硬编码值**

硬编码值是一种懒惰的编码方式。这里是证明：

```
// 糟糕：硬编码且不灵活
function createUser() {
    const maxUsers = 100;
    if (currentUsers >= maxUsers) throw "用户过多！";
}

// 整洁：动态且灵活
const MAX_USERS = 100;
function createUser() {
    if (currentUsers >= MAX_USERS) throw "用户过多！";
}
```

看到了吗，改变这个变量将不会让你在未来感到意外。你就知道要去哪里更改不确定的值。

最好将你的固定值存储在全局配置（config）文件中。

🪧 所以，尽量避免硬编码值。硬编码是可能让你未来的自己（或他人）抓狂的捷径。

### **🤏 保持函数简短**

如果你的函数超过 20 行，它可能试图做太多事情。

短小的函数是锋利的函数。它们总是能命中目标。

又长又冗长的函数难以阅读，而短小的函数则清晰且集中。以下是你的大型函数如何被拆分：

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

让我来解释这段代码，这样你就能理解为什么拆分大型函数是一种成功的策略。

1. **主函数：** `updateCart()` 调用较小的辅助函数来处理特定任务，比如：
  
    - 添加商品到购物车。
    
    - 计算总价。
    
    - 记录交易详情。
    
    - 最后，它返回总价。
    

与其用一个长长的代码块来尝试处理所有事情，不如将任务委派给辅助函数。

2. **辅助函数：** `addItemToCart()` 这个函数**仅**负责添加商品到购物车。如果你需要改变添加商品的方式（例如，检查重复项），你可以仅仅编辑这个小函数，而无需翻遍 `updateCart` 中的巨大代码块。这就是如何编写让人愉悦阅读且易于维护的简洁代码函数。

**如果函数太长会发生什么？ 💤**

假设你没有拆分 `updateCart` 函数。它可能看起来像这样：

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

这里的问题是什么？

- 它试图做所有事情。
  
- 难以阅读，特别是如果它变得更大。
  
- 如果某处出错，你会浪费时间弄清楚问题出在哪一部分。
```

### **⛺ 遵循童子军法则**

> 始终让你的营地比你发现时更干净。

让我来为你解释。你不能只是使用某样东西，却让它变得比之前更糟。这是种无视他人的行为。真正的专业人士会让事情变得比他们发现时更好。

在编程方面，每次你接触代码库时，**都要让它变得更好。** 清理代码，重构凌乱的部分，提高可读性。如果你不这样做，你只是在堆积垃圾，最终会崩溃在你头上。

这里有个例子。与其改善它，我们只是增加了更多的复杂性层次：

```
// 原始代码：难以阅读，变量命名不佳
function calc(a, b) {
  let x = a + b;
  let y = x * 0.2;
  return y;
}

// 我们在增加功能但没有清理代码
function calcDiscount(a, b, discountRate) {
  let total = calc(a, b);
  let final = total - discountRate;
  return final;
}
```

之后：每次都变得更好。看看一名有纪律的程序员如何工作——他们在走的过程中改善：

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

现在，任何人都可以一目了然地知道发生了什么。因为我们已经将代码分解为更小、更专注的函数。因此，添加新功能不会破坏现有功能。 🏕️

### **🏟️ 遵循开放/封闭原则**

该设计原则建议你的代码应设计为允许扩展而无需更改现有基础。

你想要添加功能_—_而不是每次升级时都将其拆开_._ 修改旧代码以满足新需求就像每次买新家具时都试图重建你的房子。这不可持续。

让我们看看如何构建更智能、可扩展的代码，以便在不破坏所有内容的情况下添加功能。

#### 之前：违反原则

你有一个类来处理支付——这很简单。起初，它只处理信用卡。

但随后你的老板过来并说，_“嘿，现在我们需要支持PayPal了。”_

因为你没有费心学习干净代码，你的代码看起来就像一个来自1995年传统企业系统的意大利面条怪物。以下是你精心制作的杰作：

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

唉! 每新增一种支付方式（如Apple Pay、Google Pay等）都需要修改`processPayment`方法。不用说，在添加新功能的同时，你可能会破坏现有功能。如果你学过这个原则，你可能不会落入这样的困境。

别担心：我会帮你解决这个问题。首先，我们需要重构代码。我们不修改现有的类，而是使用[多态][32]来扩展其功能：

```javascript
// 基类
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

// PayPal支付
class PayPalPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

// 添加一种新的支付类型？只需扩展类即可！
class ApplePayPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing Apple Pay payment of $${amount}`);
  }
}

// 用法
const payments = [
  new CreditCardPayment(),
  new PayPalPayment(),
  new ApplePayPayment(),
];

payments.forEach((payment) => payment.processPayment(100));
```

现在，添加新的支付方法不需要更改现有的`PaymentProcessor`类。你只需创建一个新的子类。这样原始代码保持不变，这意味着没有破坏现有功能的风险。

每种支付类型都有自己的类，例如，添加PayPal支付支持不会破坏代码。现在你可以对老板说：_“当然，我会在5分钟内添加这个功能。”_ 晋升在等你去接受。

我在我的书籍[《Clean Code Zero to One》][33] 中分享了更多技巧。

## 帮助你编写干净代码的现代最佳实践：总结 🥷

现在让我展示最佳实践，并总结我们的12条干净代码设计原则，以帮助你为敏捷应用程序开发编写干净代码。

### 🔎 常见的代码异味及如何解决

-   💊 重复：如果你在复制代码，你就是在为自己创造更多工作。将其提取到函数中，并正确处理。
    
-   🛤️ 方法过长：如果你的方法需要滚动条，说明它做得太多了。将其拆分，保持专注。
    
-   👑 霸主对象：没有哪个类应该做所有事情。简化职责，否则你的代码库将变得混乱。
    


```markdown
-   💭 何时写注释：只有当代码不清晰时才添加注释。如果代码已经清楚了，注释只会成为累赘。

-   🫗 清晰度：注释应该说明为什么，而不是做什么。如果你的代码需要解释，那可能太复杂了。

-   🌴 避免冗余：不要注释显而易见的事情。如果你的函数叫 addNumbers，就不需要注释它的功能。
    

### 🧼 整理代码的重构技巧

-   🏭 提取方法：方法太大？将它们分解。这不仅是为了整洁——也是为了控制。

-   🫕 重命名变量：如果你的变量名不能明确表达其作用，就应该修改并改进它们。命名的精确性就是思维的精确性。

-   🍃 简化条件表达式：如果你的条件式看起来像代数，把它们简化。如果 `a == true`，只写 `if(a)`。
    

### 🧪 测试与整洁代码

-   🧙 单元测试：像审问嫌疑犯一样测试每一段代码。确保全面检查。

-   🏇 TDD（测试驱动开发）：先写测试。这不仅是为了抓住 bug，还为了在编写代码之前明确知道它应该做什么。

-   🧽 整洁的测试：你的测试应该像你的代码一样干净。如果它们杂乱无章，就不会有帮助。
    

### 🐛 错误处理与整洁代码

-   ⁉️ 异常：使用它们。不仅是为了处理错误，也是为了避免代码中充斥错误信息。

-   🖍️ 快速失败：如果有错误，及时停下。不要让错误累积。立即处理它们。

-   🚨 日志记录：像记录犯罪现场一样记录日志。清晰、精确，只记录必要的信息。
    

### 🌱 代码审查和整洁代码

-   🚢 流程：有系统。不要随意写代码。审查、批评、提高。

-   🔪 工具：使用使审查更简单的工具。它们不仅用于捕捉错误，也用于教导纪律。

-   🧦 文化：培养一种把反馈当成黄金的文化。帮助团队学会如何应对和接受批评。
    

## 保持整洁代码的自动化工具 ⚓

工具和自动化技术在编写整洁代码上非常有帮助。如果你没有使用合适的工具并通过自动化来节省时间，那你就错过了很多。

你以为可以靠“眼力”保证代码质量？再想想吧。没有自动化，会出现以下情况：

1.  👎 因为“太忙”而错过明显的错误。

2.  🤕 代码在不同文件中显得风格各异，使协作变得头疼。

3.  🪦 因为跳过了关键测试，导致部署失败。
    

成功的开发者使用合适的工具来自动化代码并完成任务。以下是使用现代工具保持整洁代码的四种策略。

### **1️⃣ 静态分析**

静态分析实际上是一个代码检查工具，它会扫描你的代码并提前指出潜在问题。最好的部分？它在运行之前工作，捕捉可能导致崩溃、停机或尴尬错误的问题。

#### **它是如何工作的？**

1.  **语法检查**：检查代码的语法是否正确。如果拼错变量名或忘记了闭括号，它会立即提醒你。

2.  **代码质量规则**：像 ESLint 这样的工具强制执行规则，如一致的缩进、避免未使用的变量，并坚持最佳实践。

3.  **错误预防**：识别逻辑错误，如使用未定义的变量或进行不合逻辑的比较。
    

静态分析的实际应用：

#### 🚨 静态分析前：

```javascript
let sum = (a, b) => { return a + b; }
console.log(sume(2, 3)); // 拼写错误，直到运行时才被注意到
```

-   **问题**：`sume` 的拼写错误只有在运行代码时才会引起错误，这可能导致令人沮丧的调试过程或更糟糕——在生产环境中破坏应用。

#### 🚑 使用 ESLint 后：

```javascript
codeError: 'sume' is not defined.
```

-   **解决方案**：ESLint 在你运行代码之前立即标记拼写错误。错误被提前捕获，为你节省时间和麻烦。

### **2️⃣ 自动代码格式化**

格式化前：

```javascript
function calculate ( x , y ){ return x+ y;}
console.log( calculate (2,3 ) )
```

-   **问题**：不一致的间距和格式使代码难以阅读。

#### 使用 Prettier 之后：

```javascript
function calculate(x, y) {
  return x + y;
}
console.log(calculate(2, 3));
```

-   **解决方案**：自动应用干净、一致和专业的格式。再也不用纠结于空格或对齐。

这些都是基本的东西。我提到这些是为了防止你在没有提供 IDE 的情况下写代码（例如，工作面试）。

### **3️⃣ 持续集成（CI）测试**

CI 测试确保每次对代码的更改都会自动验证。这就像是在开发过程中捕捉引入错误的安全网。CI 工具每次代码推送时运行你的测试，这样没有东西在部署后出现问题。

#### **CI 测试是如何工作的？**

1.  **变更触发**：每次代码提交时，CI 工具（如 [GitHub Actions][35]，[Jenkins][36]）运行自动测试。

2.  **反馈**：如果某些东西失败，会立即给你反馈。

3.  **防止破坏代码**：只有干净且工作的代码才会被合并到主分支。
```
```

我们也使用 CI/CD 管道作为一个持续的过程，其中包括代码构建、测试和部署，而 CI 测试是该过程的一部分，专注于自动化代码更改的测试。

**CI/CD 管道与 CI 测试的区别：**

-   **CI/CD 管道：** CI/CD 管道将代码构建、测试和部署合并为一个过程。这个过程确保主分支代码的所有更改都可以发布到生产环境。CI/CD 管道可以减少部署时间、降低成本并提高团队协作。
    
-   **CI 测试：** CI 测试是指对集成到中心代码库中的代码更改进行自动化测试的过程。CI 测试专注于确保代码库的稳定性并解决集成问题。CI 测试帮助开发人员构建稳定、无错误且符合功能要求的软件。
    

🚧 这才是 CI 测试和 CI/CD 管道概念的真正含义。并没有看上去那么复杂。因此，让我通过 GitHub Actions 更详细地说明CI测试，因为我们通常通过自动化工具运行测试。

### **⚡ 使用 GitHub Actions 的持续集成 (CI) 测试**

如前所述，每当您推送代码或打开拉取请求时，CI 工具都会运行自动化测试。这保证了只有工作正常、无错误的代码才会被合并到主分支中。

#### 如何使用 GitHub Actions 设置 CI 测试

**步骤 1：创建您的代码库**

为您的项目设置一个 GitHub 仓库。然后，使用以下命令将代码推送到 GitHub：

```
git init
git add .
git commit -m "Initial commit for CI Testing"
git branch -M main
git remote add origin https://github.com/codewithshahan/codewithshahan.git
git push -u origin main
```

或者，您可以从 GitHub 账户中创建一个新的仓库，而无需使用命令。只需登录到您的 GitHub 账户并访问仪表盘。这里您会找到一个“New”按钮来创建一个全新的仓库：

![通过 Shahan 在 GitHub 上创建新仓库的图像](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618697327/dcef8be8-0d08-45d7-8000-34c4c65df425.png)

**步骤 2：添加一个 GitHub Actions 工作流**

导航到您仓库的 **Actions** 选项卡。为此，首先您需要访问您在 GitHub 上的仓库（创建仓库后您将找到链接）。在这里，我创建了一个名为“codewithshahan”的新仓库。仔细查看导航栏右侧的 **Actions** 选项卡。

![通过 Shahan 的 GitHub Actions 导航选项卡图像](https://cdn.hashnode.com/res/hashnode/image/upload/v1737618879398/7c5aa37a-72be-4701-a8f8-9ea9e05c0d5d.png)

浏览 Actions 选项卡后，向下滚动一点，您会在这里找到 **continuous integration（持续集成）** 部分：

![通过 Shahan 在 GitHub Actions 页面上进行 CI（持续集成）测试的图像](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619002674/60003e57-f2b2-48f1-bef8-9bde39149faf.png)

选择一个适合您的工作流设置。在这个项目中，我将使用 Node.js。

点击配置按钮后，会自动创建一个 `node.js.yml` 文件，您可以根据您的目标调整代码。

![由 Shahan 提供的用于自动化测试的 GitHub 工作流程代码片段图像](https://cdn.hashnode.com/res/hashnode/image/upload/v1737619475568/74da6d46-c105-42c8-8662-fc72e9410bda.png)

关于如何修改 `.yml` 文件的细节我就不多说了。这取决于您的项目目标和个人喜好。而且，这是一个不同且更广泛的话题，这篇文章已经相当长了，所以我将在未来的文章中详述。目前，只需掌握这些基础知识。

这种 CI 测试工作流最适合现代应用程序开发。您的应用程序在执行包括测试（例如：黑暗模式）、在 GitHub 仓库中直接构建和部署应用程序等关键功能时保持稳定。这样，您可以自信地推送代码，确保您的代码始终是干净且准备好用于生产的。

## 文档在敏捷软件开发中的作用 🚣

如果您希望您的代码达到顶级水平，您需要了解如何编写良好的文档。如果您认为文档只是简单地记录代码工作原理，那您就错了。它是关于解释**为什么**它会工作，而不仅仅是如何工作。这是大多数人遗漏的地方。

### 1\. 🚡 创建**有用的文档（解释为什么，而不仅仅是如何）**

当您编写文档时，您不只是简单地抛出一些关于如何使用代码的说明。您是在告诉下一个人（甚至是未来的您自己）为什么这一段代码首先存在。这就是良好文档与糟糕文档的区别。

糟糕的文档让人挠头。它们太含糊、太简单，并且没有回答关键问题。如果您的文档不清楚，那可能意味着您的思考不清楚。您基本上是在说，“我不在乎您是否理解这个，它能工作，只需使用就行。”这并不有用。

伟大的文档回答了那些难题：

-   ✅ 为什么您选择了这种方法而不是其他方法？
    
-   ✅ 为什么这个函数存在？它解决了什么问题？
    
-   ✅ 为什么您以这种方式编写了这段代码？


### 2\. ⏳ **保持文档更新（过时的文档比没有更糟糕）**

过时的文档是最糟糕的。实际上，它可能比没有文档还要糟糕。当你的文档和代码不同步时，你是在给未来的自己——或者下一个必须处理它的人——造成巨大的麻烦。

每次你的代码改变时，你的文档也需要随之改变。文档必须反映当前的状态。不要通过留下过时的信息让未来的开发者（或你自己）感到困惑并浪费时间。如果某些内容不再相关，删除它。过时的文档就像杂乱的思维——它拖你的后腿。

养成定期检查和更新文档的习惯。代码一有变化，文档也要随之更新。就这么简单。

### 3\. 🚆 **整合注释（优秀的代码注释是文档的一部分）**

实话实说——代码中的注释应该**整合**进你的文档。好的注释不仅仅是为那些无法在其他地方解释代码的开发者提供的拐杖。它们应当提升你的文档质量，而不是替代文档。

注释是你文档的补充。你编写干净、易理解的代码，只需最少的解释，但当某些地方不够清晰时，加入注释。记住代码中注释的原则：解释“为什么”，而不是“怎么做”。同样的规则在这里适用。不要自我重复。让代码自己说话。注释应当是文档整体的补充，而不是补救糟糕代码的创可贴。

🪧 优秀的代码应当是不言自明的。修正代码，然后在必要时添加注释以进行澄清。保持注释干净、简短、切中要点。

如果你想编写干净、高效且易维护的代码，文档是关键。不要再将文档视为事后之举或用来填充空白的东西。它是代码的延伸——你以清晰和有效的方式进行沟通的方式。它是未来开发者的路线图，也是你思维过程的反映。

## 结论 🏁

干净的代码不是一种奢求，而是每个立志于领导的人必须具备的品质。它关乎于控制、效率和长期的持续改进。最终，它将助你在敏捷软件开发的舞台上取得成功。

🪧 如果你想真正掌握你的手艺，写出干净的代码，让效率证明一切。

## 关于干净代码的常见问题 🧯

1.  **什么是干净的代码？** 那是不会让你想把笔记本扔出窗外的代码。
    
2.  **在敏捷中干净代码为什么重要？** 因为敏捷重视速度和变化，而一团糟的代码让你无法快速反应。
    
3.  **什么是代码异味？** 那是你即将失去对代码库控制的信号。
    
4.  **如何改善注释？** 只对必要的部分进行注释，并确保每个注释都增值而不是制造噪音。
    

感谢你的陪伴。你可以访问我的[推特账号][37]或[我的网站][38]以阅读更多关于干净代码和敏捷应用开发的文章。下次再见……继续改进你的代码库。

如果你认真想掌握干净代码并将你的编程职业生涯提升到新的高度，那么我的书正适合你：[**Clean Code Zero to One**][39]。这本书是你从零到一的干净代码全指南，从混乱代码到杰作。我提供50%的折扣，使用代码“earlybird”——仅限前50本。另外，还提供30天退款保证——无风险，全奖励。

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

