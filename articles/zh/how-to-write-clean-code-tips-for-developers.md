```markdown
---
title: 如何写出简洁的代码 —— 开发者提示与示例
date: 2024-11-26T13:00:58.161Z
author: 编程与 Shahan
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/how-to-write-clean-code-tips-for-developers/
posteditor: ""
proofreader: ""
---

想象一下一个乱糟糟的房间，衣服、书籍和其他物品散落一地。在那个房间里找东西是不是很难？

<!-- more -->

现在再想想写乱糟糟的代码——同样让人困惑，甚至更甚！

反之，简洁的代码就像一个整齐的房间：你可以轻松找到你需要的东西，理解正在发生的情况，并更快速地完成工作。

我们来看看这个图表。它展示了两种不同的代码编写方式，以及它们如何影响添加更多代码行所需的时间：

![3fa8f5a1-0af4-4ffd-aa3a-bb70001b026d](https://cdn.hashnode.com/res/hashnode/image/upload/v1730728342241/3fa8f5a1-0af4-4ffd-aa3a-bb70001b026d.png)

1. ⚠️ **快速 & 随意代码**（红线）：这是指快速编写代码而不做规划或组织的情况。起初似乎更快，但随着代码行的增加，理解和修复变得更加困难。因此，随着时间的推移，添加每一行新代码所需的时间越来越长。
    
2. **⚡ 认真 & 简洁代码**（蓝线）：这是指认真编写代码，使其易于理解和修改。起初可能花费更长时间，但随着时间的推移，它始终易于处理。这样，添加新代码行不会变得更困难。
    

简单来说，编写简洁的代码一开始可能会慢一些，但从长远来看，它节省了大量时间并使工作更轻松。这也会导致更可靠的软件和更好的产品。

编写简洁代码是专业开发人员养成的习惯，显示了他们对质量的承诺和坚强的职业道德。在本文中，我将带领你了解一些保持代码简洁的最佳实践。

### 我们将涵盖的内容：

1. [使用有意义的名称][1]
    
2. [遵循单一责任原则 (SRP)][2]
    
3. [避免不必要的注释][3]
    
4. [让代码易读][4]
    
5. [编写单元测试][5]
    
6. [小心依赖项][6]
    
7. [组织你的项目][7]
    
8. [使用一致的格式][8]
    
9. [避免硬编码值][9]
    
10. [限制函数长度][10]
    
11. [结论][11]
    

## 编写简洁代码的10个基本提示

为帮助你开始简洁代码之旅，这里有10个实用提示，以保持你的代码可读、组织整齐且高效。

### 1\. 使用有意义的名称

在命名变量、函数和类时，选取能清楚描述其用途的名称。

不要简单地命名变量为 `b`，应该用 `numberOfUsers`。这样，任何阅读你的代码的人都可以毫不费力地理解其用途，而无需额外注释。一个有意义的名称可以消除猜测并避免混淆。

**示例**：

```
// 好
let numberOfUsers = 5; // 清晰易懂

// 坏
let b = 5; // 含糊不清
```

**💡 命名技巧**

- **变量**：使用描述数据的名词，如 `userAge` 或 `totalAmount`。
    
- **函数**：使用动词，如 `calculateTotal()` 或 `fetchUserData()`。
    
- **类**：使用单数名词，如 `User` 或 `Order` 来表示它们的类型。
    

```
// 变量：描述其所持有的数据
let userAge = 25;

// 函数：使用动词来描述其功能
function calculateTotal(price, quantity) {
    return price * quantity;
}

// 类：表示对象类型的单数名词
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### 2\. 遵循单一责任原则 (SRP)

**单一责任原则**意味着每个函数或方法应有**一个特定的职责**。

这可以让函数保持简短和聚焦，从而更易于阅读、测试和维护。

想象一个工具箱，其中每个工具都有一个独特的用途——干净的代码函数也应如此。

![77666f78-7ec9-4a5c-af4f-253e6de4acac](https://cdn.hashnode.com/res/hashnode/image/upload/v1730728643183/77666f78-7ec9-4a5c-af4f-253e6de4acac.jpeg)

例如，如果你有一个名为 `calculateTotal` 的函数，它应该只负责计算总数。如果你添加额外的任务，可能会导致难以维护的混乱代码。

下面是一个示例，展示为什么保持函数聚焦很重要：

假设你想计算一个总数并返回一个带有额外信息的对象，比如是谁计算了它，以及何时计算的。与其将这些直接添加到 `calculateTotal` 中，我们可以使用第二个函数。

1. **好示例（分离的任务）**
    
    ```
     // 这个函数仅计算总和
     function calculateTotal(a, b) {
         return a + b;
     }
    
     // 这个函数创建一个带有额外细节的对象
     function createCalculationRecord(a, b, user) {
         let sum = calculateTotal(a, b); // 调用计算函数
         return {
             user: user,
             total: sum,
             timestamp: new Date()
         };
     }
    
     let record = createCalculationRecord(5, 10, "Shahan");
     console.log(record);
    ```
    
    **👍 这为何好**：每个函数都有一个明确的、集中的任务。`calculateTotal` 只负责数学运算，而 `createCalculationRecord` 添加了额外细节。如果你想改变总数的计算方式，只需更新 `calculateTotal`；如果你想改变记录格式，只需更新 `createCalculationRecord`。
    
2. **坏示例（混合任务的单一函数）**
    
    ```
     // 这个函数在一步中计算总和并创建一个对象
     function calculateTotalAndReturnRecord(a, b, user) {
         let sum = a + b;
         return {
             user: user,
             total: sum,
             timestamp: new Date()
         };
     }
    
     let record = calculateTotalAndReturnRecord(5, 10, "Shahan");
     console.log(record);
    ```
    
    **👎 这为何差**：函数名称 `calculateTotalAndReturnRecord` 显示它在尝试做多件事情。如果你仅想使用计算部分，就不能在不带记录部分的情况下重用此函数。也更难分别更新和测试每个任务。
```


好的代码应该是自解释的，不需要过多的注释。专注于编写清晰易懂的代码。

注释在解释复杂的逻辑或独特的方法时是有用的，但过多的注释会使代码混乱，难以阅读。

**💬 什么时候使用注释**：

-   用于说明为什么要以特定方式进行操作。
    
-   处理复杂的算法或计算时。
    
-   添加关于潜在限制的注释。
    

**示例**：

```
// 清晰的名称，不需要注释
let userAge = 25;

// 不清晰的名称，需要注释
let a; // 用户的年龄
```

### 4\. 让代码可读

可读的代码使用**缩进**、**换行**和**空格**来保持整洁和有序。

可以把这看作写故事：段落通过分隔大块文本使阅读更容易。在编码中，换行起到同样的作用。

**示例**：

```
// 好的代码
if (isLoggedIn) {
    console.log("Welcome!");
} else {
    console.log("Please log in.");
}

// 不好的代码
if(isLoggedIn){console.log("Welcome!");}else{console.log("Please log in.");}
```

在 VS Code 中，**Prettier** 和 **Black** 是流行的格式化工具，可以自动为多种语言应用整洁的代码风格。

**PyCharm** 和 **IntelliJ** 拥有功能强大的内置格式化工具，具有可自定义的规则，支持 Python 的 PEP 8 和其他标准指南。这些工具确保项目中代码的一致性和可读性，极少需要手动调整。

### 5\. 编写单元测试

单元测试有助于确保代码的每个部分按预期工作。

通过测试小的、独立的部分（如函数），可以及早发现错误并防止它们扩散到代码的其他部分。

具体来说，单元测试实际上是每个代码部分的小型质量检查，以确保它们按预期工作。

**🍎 实际例子：**

我们来看一下如何使用一个 `Calculator` 类来测试具有多个方法的复杂 JavaScript 对象。

这种方法将帮助你理解为什么保持每个方法专注于一个任务很重要，并通过单元测试确保每个方法都能正常工作。

这是一个包括基本算术操作方法的 `Calculator` 类：加法、减法、乘法和除法。

```
class Calculator {
    constructor() {
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    }
}
```

正如你所看到的，每个方法执行一个特定的操作。`divide` 方法有额外的逻辑来处理除以零的情况，否则会导致错误。

现在，我们将编写单元测试来确认每个方法的行为是否符合预期。🔬

**🧪 为每个方法编写单元测试**

为了测试我们的 `Calculator` 类，我们可以编写单元测试，涵盖正常情况和边缘情况。以下是为每个方法设置测试的方法：

```
// 初始化 Calculator 实例
const calculator = new Calculator();

// 测试 add 方法
console.assert(calculator.add(2, 3) === 5, '测试失败: 2 + 3 应该等于 5');
console.assert(calculator.add(-1, 1) === 0, '测试失败: -1 + 1 应该等于 0');

// 测试 subtract 方法
console.assert(calculator.subtract(5, 3) === 2, '测试失败: 5 - 3 应该等于 2');
console.assert(calculator.subtract(0, 0) === 0, '测试失败: 0 - 0 应该等于 0');

// 测试 multiply 方法
console.assert(calculator.multiply(2, 3) === 6, '测试失败: 2 * 3 应该等于 6');
console.assert(calculator.multiply(-1, 2) === -2, '测试失败: -1 * 2 应该等于 -2');

// 测试 divide 方法
console.assert(calculator.divide(6, 3) === 2, '测试失败: 6 / 3 应该等于 2');
try {
    calculator.divide(1, 0);
    console.assert(false, '测试失败: 除以零应该抛出错误');
} catch (e) {
    console.assert(e.message === "Cannot divide by zero", '测试失败: 除以零的错误信息不正确');
}
```

**🫧 测试解释：**

1.  **加法**（`add` 方法）：我们测试 `add(2, 3)` 返回 `5`，以及 `add(-1, 1)` 返回 `0`。如果这些测试通过，我们知道加法逻辑正常。
    
2.  **减法**（`subtract` 方法）：我们验证 `subtract(5, 3)` 返回 `2`，以及 `subtract(0, 0)` 返回 `0`。这些检查确认减法是准确的。
    
3.  **乘法**（`multiply` 方法）：我们测试乘法功能的正负值，确保 `multiply(2, 3)` 返回 `6`，以及 `multiply(-1, 2)` 返回 `-2`。
    
4.  **除法**（`divide` 方法）：我们验证 `6` 除以 `3` 返回 `2`。对于除以零的情况，我们使用 `try...catch` 块来确认会抛出带有正确信息的错误。此测试确保该方法能正确处理错误。
    

你可以看到，如果任何方法失败，测试将生成一个清晰的错误信息，使我们能够快速识别和修复问题。单独测试方法有助于我们及早发现错误，并在项目增长时维护可靠、干净的代码。

依赖是您的代码所依赖的软件组件。🔌

想象一下，您正在构建一个发送电子邮件的网络应用。与其自己编写发送电子邮件的代码，不如使用像 [**Nodemailer**][12] 这样的外部库。在这里，Nodemailer就是一个**依赖**——您的应用依赖它来处理电子邮件发送功能。

**示例：**

```javascript
const nodemailer = require('nodemailer');

function sendEmail(to, subject, message) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: message
    };

    return transporter.sendMail(mailOptions);
}
```

在这段代码中，`nodemailer` 被导入并用于创建一个用于发送电子邮件的传输器。如果没有它，您将需要从头开始构建所有的电子邮件功能，这将非常复杂且耗时。通过使用 Nodemailer 作为依赖，您的应用可以轻松发送电子邮件。

尽管依赖很有用，但您应该尽量避免过度依赖外部软件或库。只有当它们简化您的工作或增加重要功能时才使用依赖。

有效管理依赖是编写简洁代码的关键。以下是一些提示：

- **限制依赖**：仅包括对您的项目至关重要的库或模块。
  
- **保持版本更新**：使用更新版本的库以避免安全风险。
  
- **逻辑分离**：尽可能自己编写核心功能。这样，如果您需要移除依赖，它不会破坏您的代码。
  

让我用之前的 Nodemailer 代码给您一个例子，说明如何在代码中实现逻辑分离。

您可以创建一个包装函数来抽象掉发送电子邮件的细节。这样，您可以更改底层的电子邮件服务或移除对 Nodemailer 的依赖，而不影响其余的代码。

以下是如何组织代码以实现此目的：

```javascript
const nodemailer = require('nodemailer');

// 发送电子邮件的核心功能
function sendEmail(to, subject, message) {
    const transporter = createTransporter();
    const mailOptions = createMailOptions(to, subject, message);
    return transporter.sendMail(mailOptions);
}

// 创建传输器的功能
function createTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
}

// 创建邮件选项的功能
function createMailOptions(to, subject, message) {
    return {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: message
    };
}

// 示例用法
sendEmail('recipient@example.com', 'Test Subject', 'Hello, this is a test email.')
    .then(() => {
        console.log('Email sent successfully!');
    })
    .catch((error) => {
        console.error('Error sending email:', error);
    });
```

**🗝️ 关键点：**

1. **核心功能**：`sendEmail`、`createTransporter` 和 `createMailOptions` 功能是分开的，允许您修改一个而不影响另一个。

2. **轻松修改**：如果您希望在将来切换到其它电子邮件服务，您只需修改 `createTransporter` 功能。

3. **可维护性**：这种结构使您的代码更易维护且更易于理解。
  

### 7\. 组织您的项目

良好的项目结构与代码本身同样重要。

可以将其类比为整理您的工作环境——您需要为每件事指定位置，以便轻松找到它们。对于编码项目，创建特定部分的文件夹，例如 `components`、`utils` 和 `services`。

**📂 如何组织您的项目**

为了设置清晰和有序的项目，您应该将代码的不同部分分类到指定的文件夹中。以下是一个很好的项目结构示例：

```
myProject
├── src
│   ├── components
│   ├── services
│   ├── utils
└── tests
```

#### 项目结构的细分：

1. **myProject**：这是您项目的根文件夹。包含与您的应用相关的所有内容。

2. **src (Source)**：此文件夹包含您项目的所有源代码。这是您大部分编码工作的地方。

3. **components**：此子文件夹包含可重用的 UI 组件。例如，如果您正在构建网络应用，您可能在此处有按钮、标题或表单的单独文件。每个组件可以在自己的文件中，以保持模块化。

    - `components` 中的示例结构：

```
    components
    ├── Button.js
    ├── Header.js
    └── Form.js
```

4. **services**：此文件夹包含执行特定任务或处理业务逻辑的功能。例如，如果您正在发送电子邮件，您可以在此处拥有一个包含所有电子邮件相关功能的文件。

5.  **utils（实用工具）**：在这里，您可以放置一些可以跨项目使用的辅助函数。这些可能包括格式化日期、验证输入或其他不属于特定组件或服务的通用任务的函数。
    
    -   `utils` 目录内的示例结构：

```
    utils
    ├── formatDate.js
    ├── validateEmail.js
    └── generateId.js
```

6.  **tests（测试）**：此文件夹专用于测试文件。保持测试的有序排列有助于确保在构建新功能时，您可以轻松地测试它们，而不必深入代码库。
    
    -   `tests` 目录内的示例结构：

```
    tests
    ├── emailService.test.js
    ├── userService.test.js
    └── component.test.js
```

**📨 真实案例：使用 Nodemailer 进行邮件发送**

假设您正在构建一个向用户发送电子邮件的应用程序。您可以这样构建项目结构：

```
myEmailApp
├── src
│   ├── components
│   │   ├── EmailForm.js
│   │   └── SuccessMessage.js
│   ├── services
│   │   └── emailService.js
│   ├── utils
│   │   └── validateEmail.js
└── tests
    ├── emailService.test.js
    └── EmailForm.test.js
```

-   **EmailForm.js**：这个组件处理发送电子邮件的用户界面，比如收件人、主题和消息的输入字段。
    
-   **SuccessMessage.js**：这个组件在邮件发送成功后显示一条成功消息。
    
-   **emailService.js**：该服务包含使用 Nodemailer 发送电子邮件的逻辑，使您的代码保持模块化和清晰。
    
-   **validateEmail.js**：一个实用工具函数，用于检查电子邮件地址格式是否正确。
    
-   **tests**：在这里，您可以编写测试以确保您的电子邮件服务和组件按预期运行。
    

**🍱 组织良好的项目的优势**

1.  **易于导航**：查看您的项目的人可以快速了解在哪里找到特定部分的代码。
    
2.  **更好的协作**：如果您与他人合作，清晰的结构可以帮助每个人知道在何处贡献而不互相干扰。
    
3.  **可扩展性**：随着项目的发展，保持清晰的结构有助于管理复杂性，并保持代码库的整洁。
    
4.  **改进的维护性**：当您需要更新或修复某些内容时，可以快速找到相关文件，从而节省时间并减少错误。
    

### **8. 使用一致的格式**

格式一致性可以提高可读性。

为您的代码编写建立一个模式，例如使用两个空格缩进或在注释前始终包括换行符。

遵循一致的格式会使您的代码看起来干净且组织良好。

**🛠️ 格式化工具**

-   [**Prettier**][13]：根据一组规则自动格式化代码。[这里有一个教程][14]，可以说明如何在 VSCode 中设置和使用 Prettier。
    
-   [**ESLint**][15]：通过突出显示问题来帮助执行编码标准。[这里有一个教程][16]，其中包含一个关于为项目设置 ESLint 的有用且深入的部分。
    

### 9. 避免硬编码值

硬编码是指直接在代码中嵌入数据值，例如将用户 ID 设置为 `123` 而不是使用变量。

避免硬编码值可让您在不做持续更改的情况下重用代码。请将值存储在变量、常量或配置文件中。

以下是硬编码可能导致问题的场景：

```
// 错误示例：硬编码的用户限制
function createUser(name) {
    let numberOfUsers = 100; // 硬编码值
    if (numberOfUsers >= 100) {
        return '用户数量已达上限。';
    }
    // 创建用户的代码
    return '用户已创建。';
}
```

在本例中，`numberOfUsers` 被硬编码为 `100`。如果您想要更改用户限制，您必须在代码中找到并修改此值。如果它出现在多个位置，此任务将变得繁琐且容易出错。

#### **🏗️ 使用常量改进的示例**

现在，让我们重构此代码以使用常量：

```
// 良好示例：使用常量
const MAX_USERS = 100; // 将限制存储在常量中

function createUser(name) {
    let numberOfUsers = getCurrentUserCount(); // 从函数或数据库获取当前计数
    if (numberOfUsers >= MAX_USERS) {
        return '用户数量已达上限。';
    }
    // 创建用户的代码
    return '用户已创建。';
}

// 获取当前用户数量的示例函数
function getCurrentUserCount() {
    // 模拟从数据库获取当前计数
    return 90; // 示例计数
}
```

**🥣 改进示例的分解：**

1.  **使用常量**：`MAX_USERS` 常量在顶部定义。这样，如果您需要更改用户的最大数量，只需在一个地方更新它即可。
    
2.  **动态值**：`getCurrentUserCount()` 函数动态获取数据库或其他来源的当前用户计数。此方法可防止硬编码计数，并允许轻松更改。
    
3.  **可维护性**：通过将值存储在常量中，您的代码变得更加容易维护。如果业务需求发生变化并且您需要将用户限制增加到 `150`，只需将 `MAX_USERS` 从 `100` 更改为 `150`，更改将反映在整个应用程序中。
    
4.  **清晰性**：为常量使用描述性名称（如 `MAX_USERS`）可提高代码的可读性。查看您代码的任何人都可以快速理解该值代表什么。

在大型应用中，您可能还会考虑使用配置文件（如 JSON、YAML 或环境变量）来存储在不同环境（开发、预发布、生产）之间可能会改变的值。

例如，在您的 **config.json** 文件中，您可以将 `maxUsers` 硬编码如下（请记住，在 config.json 中，建议使用驼峰命名法以遵循一致的格式）：

```
{
    "maxUsers": 100,
    "emailService": {
        "service": "gmail",
        "user": "your-email@gmail.com",
        "pass": "your-email-password"
    }
}
```

**🪴 在代码中使用配置：**

```
const config = require('./config.json');

function createUser(name) {
    let numberOfUsers = getCurrentUserCount(); 
    if (numberOfUsers >= config.maxUsers) {
        return 'User limit reached.';
    }
    // 代码以创建用户
    return 'User created.';
}
```

### 10\. 限制函数长度

较长的函数更难理解和维护。

没有严格的规定，但总体而言，函数的长度理想情况下不应超过 20 到 30 行。如果一个函数有多项职责或者包含许多步骤，这就表明它可能过长。将这些函数分解为较小的“辅助”函数可以使它们更易于管理和理解。

下面是一个冗长而复杂的函数示例：

```
function updateCart(cart, item, discountCode) {
    // 将商品加入购物车
    cart.items.push(item);

    // 计算新的总价
    let total = 0;
    cart.items.forEach(cartItem => {
        total += cartItem.price * cartItem.quantity;
    });

    // 如果有折扣码则应用折扣
    if (discountCode) {
        total = applyDiscount(total, discountCode);
    }

    // 记录交易
    console.log(`Item added: ${item.name}, New total: $${total}`);

    return total;
}
```

⚠️ **这个函数做了多件事情：**

1.  将商品加入购物车。
    
2.  计算总价格。
    
3.  如果有折扣码则应用折扣。
    
4.  记录交易。
    

虽然该函数目前看起来可以管理，但如果增加更多任务，它会迅速变得难以调试和维护。

让我们将这个冗长的函数分解为较小的、单一用途的函数：

```
function updateCart(cart, item, discountCode) {
    addItemToCart(cart, item);
    let total = calculateTotal(cart);

    if (discountCode) {
        total = applyDiscount(total, discountCode);
    }

    logTransaction(item, total);
    return total;
}

function addItemToCart(cart, item) {
    cart.items.push(item);
}

function calculateTotal(cart) {
    return cart.items.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0);
}

function logTransaction(item, total) {
    console.log(`Item added: ${item.name}, New total: $${total}`);
}
```

#### 🧩 详解：

1.  `addItemToCart`：这个函数现在仅负责将商品加入购物车。简单且明确。
    
2.  `calculateTotal`：这个函数计算购物车中所有商品的总价。更容易阅读和理解，如果需要更新总价的计算方式，只需修改这个函数。
    
3.  `logTransaction`：负责记录详细信息。如果您需要更改日志内容（例如，添加时间戳），可以在此函数中进行，而无需触及其余代码。
    
4.  `updateCart`：主函数现在读起来更像是所采取操作的小结：添加商品，计算总价，应用折扣并记录结果。一目了然，更容易理解。
    

**📒 让我们总结一下限制函数长度的要点：**

1.  **🎯 专注于一项任务**: 每个函数理想情况下应只执行一项任务。如果一个函数看似执行了多项任务，请考虑拆分它。
    
2.  **🩼 使用辅助函数**: 辅助函数是一些小而专注的函数，它们通过执行特定任务来协助主函数。在上面的示例中，`addItemToCart`、`calculateTotal` 和 `logTransaction` 就是辅助函数。
    
3.  **🪦 描述性命名**: 基于任务为函数命名（如 `addItemToCart`），这有助于代码自解。
    

## 干净代码的最佳实践

现在我们已经介绍了一些重要的提示，让我们来看一些构成干净代码哲学的整体原则：

1.  **🎏 简单性**: 始终努力使代码尽可能简单。
    
2.  **🧂 一致性**: 保持代码风格和结构的一致。
    
3.  **🌾 清晰性**: 代码应清楚地表达其功能。
    
4.  **⛽ 效率**: 编写在性能上进行了合理优化的代码，同时不牺牲可读性。
    

这些原则让编码更像是在设计解决方案。编写干净代码是一项随着实践增长的技能，所以要不断学习和提高。

**🔌 关于依赖的说明**

与其将依赖项直接硬编码到代码中，不如使用像 [**npm**][17]（用于 JavaScript）或 **pip**（用于 Python）这样的包管理器来管理它们。这样一来，当需要时可以轻松更新或移除它们。

写干净的代码就像为房子打下坚实的基础。它让一切井井有条，使在项目增长时添加新功能或修复问题变得容易。

通过这些提示，您可以开始养成一些习惯，使您的代码更具可读性、可维护性，并让工作变得更愉快。

### 建议的下一步 📘

如果你想在六个月内成为后端开发人员，可以查看我的[后端开发人员路线图][18]。它旨在帮助初学者通过每周目标保持正轨，涵盖关键的技能、工具和技术。这个路线图可以保持你的动力，使学习更可管理。

**你可以在** [**𝕏**][19] **上关注我，获取即时更新。**

希望下次再见到您！

[1]: #heading-1-use-meaningful-names
[2]: #heading-2-follow-the-single-responsibility-principle-srp
[3]: #heading-3-avoid-unnecessary-comments
[4]: #heading-4-make-your-code-readable
[5]: #heading-5-write-unit-tests
[6]: #heading-6-be-careful-with-dependencies
[7]: #heading-7-organize-your-project
[8]: #heading-8-use-consistent-formatting
[9]: #heading-9-avoid-hardcoding-values
[10]: #heading-10-limit-function-length
[11]: #heading-conclusion
[12]: https://nodemailer.com/
[13]: https://prettier.io/
[14]: https://www.freecodecamp.org/news/how-to-use-prettier-in-visual-studio-code/
[15]: https://eslint.org/
[16]: https://www.freecodecamp.org/news/how-to-set-up-eslint-prettier-stylelint-and-lint-staged-in-nextjs/#heading-set-up-eslint
[17]: https://www.npmjs.com/
[18]: https://codewithshahan.gumroad.com/l/pcela
[19]: https://x.com/shahancd

