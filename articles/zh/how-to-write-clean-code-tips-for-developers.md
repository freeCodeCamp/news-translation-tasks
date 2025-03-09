```markdown
---
title: 如何编写出整洁的代码 —— 开发者指南与示例
date: 2024-11-26T13:00:58.161Z
author: 与Shahan一起编程
authorURL: https://www.freecodecamp.org/news/author/codewithshahan/
originalURL: https://www.freecodecamp.org/news/how-to-write-clean-code-tips-for-developers/
posteditor: "Darrenhqf"
proofreader: ""
---

试想一下，一个房间里衣服、书籍和各种物品散落得到处都是。在这样的凌乱环境里，你觉得要找到一样东西会不会很困难呢？

<!-- more -->

现在来想一想，当我们写出乱糟糟的代码时，它是不是也会使人感到困惑，甚至比凌乱的房间还要让人头疼呢！

相反，简洁的代码就像一个井然有序的房间：你可以轻松找到所需的内容，和快速理解正在发生的事情，使你更快地完成工作。

现在，我们来瞧瞧这个图表。该图表呈现并对照了两种不同的代码编写方式，以及它们对添加更多代码行所需要时间的影响：

![3fa8f5a1-0af4-4ffd-aa3a-bb70001b026d](https://cdn.hashnode.com/res/hashnode/image/upload/v1730728342241/3fa8f5a1-0af4-4ffd-aa3a-bb70001b026d.png)

1. ⚠️ **仓促 & 混乱的代码**（红线）：这种代码是在没有规划和整理的情况下匆忙写出的代码。起初，这种方式看起来高效，但随着代码行数增加，代码结构变得越来越难以理解和维护。因此，随着时间推移，每添加一行代码所需的时间都会越来越长。
    
2. **⚡ 谨慎 & 整洁的代码**（蓝线）：这种代码是经过精心规划和整理的，使其更容易理解和修改。虽然一开始可能会稍微慢一些，但随着代码的增长，它依然保持清晰易读，因此添加新代码不会变得越来越困难。
    

简单来说，编写整洁的代码一开始可能会缓慢一些，但从长远来看，它能节省后续所耗费的时间，让工作更轻松。同时，还能提高软件的可靠性，打造更优质的产品。

编写整洁的代码是专业开发人员培养的一种良好习惯，体现了专业人员对质量的承诺和坚定的职业操守。在本文中，我将带领你了解一些保持代码整洁的最佳实践。

### 我们将涵盖的内容：

1. [使用有意义的名称][1]
    
2. [遵循单一责任原则 (SRP)][2]
    
3. [避免不必要的注释][3]
    
4. [提高代码可读性][4]
    
5. [编写单元测试][5]
    
6. [谨慎处理依赖项][6]
    
7. [合理组织项目结构][7]
    
8. [保持一致的代码格式][8]
    
9. [避免硬编码][9]
    
10. [限制函数长度][10]
    
11. [总结][11]
    

## 编写整洁代码的 10 个实用技巧

为了帮助你开启编写整洁代码的旅程，这里为你提供了 10 个实用技巧，可以帮助你保持代码的可读性、条理性和高效性。

### 1\. 使用有意义的名称

在为变量、函数和类命名时，选择能清晰描述其用途的名称。

不要简单地命名变量为 `b`，试着用 `numberOfUsers`这样的名称。这样，任何阅读你的代码的人都能毫不费力地理解其用途，而无需额外注释。一个有意义的名称可以减少猜测，避免产生混淆。

**示例**：

```
// 正确的例子
let numberOfUsers = 5; // 清晰易懂

// 错误的示范
let b = 5; // 含糊不清
```

**💡 命名技巧**

- **变量**：使用描述数据的名词，例如 `userAge` 或 `totalAmount`。
    
- **函数**：使用动词，如 `calculateTotal()` 或 `fetchUserData()`。
    
- **类**：使用单数名词来表示其含义，如 `User` 或 `Order` 来表示它们的类型。
    

```
// 变量：描述其存储的数据
let userAge = 25;

// 函数：使用动词来描述其功能
function calculateTotal(price, quantity) {
    return price * quantity;
}

// 类：单数名词，表示一种对象类型
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
```

### 2\. 遵循单一责任原则 (SRP)

**单一职责原则**意味着每个函数或方法都应该**只负责一项特定的任务**。

这样可以让你的函数保持简洁、专注，从而提高代码的可读性，有便于后续的测试和维护。

想象一下一个工具箱，其中每个工具都有其独特的用途——干净的代码函数也应如此运作。

![77666f78-7ec9-4a5c-af4f-253e6de4acac](https://cdn.hashnode.com/res/hashnode/image/upload/v1730728643183/77666f78-7ec9-4a5c-af4f-253e6de4acac.jpeg)

例如，如果你有一个名为 `calculateTotal` 的函数，它就只应该负责计算总和。如果你给它添加额外的任务，可能会导致代码变得混乱，难以维护。

下面是一个示范例子，展示了为什么保持函数的单一职责很重要：

假定您期望计算一个总和并返回一个带有额外信息的对象，诸如谁进行了计算，以及何时计算的。与其直接将这些内容添加到 `calculateTotal` 中，不如我们创建第二个函数来处理额外的信息。

1. **优良范例（任务分立）**
    
    ```
     // 此函数仅用于计算总和
     function calculateTotal(a, b) {
         return a + b;
     }
    
     // 此函数用于创建包含额外信息的对象
     function createCalculationRecord(a, b, user) {
         let sum = calculateTotal(a, b); // 调用上面的计算总和函数
         return {
             user: user,
             total: sum,
             timestamp: new Date()
         };
     }
    
     let record = createCalculationRecord(5, 10, "Shahan");
     console.log(record);
    ```
    
    **👍 为什么这样更好**：这样使每个函数都有一个明确且集中的任务。其中 `calculateTotal` 只需负责数学运算，而 `createCalculationRecord` 则负责添加额外的细节。如果你想更改总数的计算方式，只需更新 `calculateTotal`函数；如果你想改变记录格式，只需更新 `createCalculationRecord`的函数。
    
2. **错误示例（在一个函数中混合多个任务）**
    
    ```
     // 此函数在一个步骤中同时计算总和创建对象
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
    
    **👎 为什么这样不好**：函数名称 `calculateTotalAndReturnRecord` 表明它试图完成多项任务。如果你只想使用计算部分，就无法在不涉及记录部分的情况下复用这个函数。此外，单独更新和测试每一项任务也会更困难。
```

### 3\. 避免不必要的注释

一个良好的代码应该能够具有自身的解释性，而不需要过多的注释来解释。而专注于编写清晰且易于理解的代码，便使其本身就能表达出意图。

注释在解释复杂逻辑或特殊实现时很有用，但同时过多的注释会使代码显得杂乱无章，难以阅读和理解。

**💬 什么时候使用注释**：

-   用于说明为什么要以特定方式进行操作。
    
-   在处理复杂的算法或计算时。
    
-   添加有关潜在局限性的注释。
    

**示例**：

```
// 命名清晰，无需注释
let userAge = 25;

// 命名不清晰，需要注释
let a; // 用户的年龄
```

### 4\. 提高代码可读性

可读性良好的代码使用**缩进**、**换行**和**空格**来保持整洁和有序。

可以把它想象成写一篇故事文章：段落的划分能让阅读变得更轻松，同样，在代码中，合理的换行可以起到相同的作用，使其更易于理解。

**示例**：

```
// 优良范例的代码结构
if (isLoggedIn) {
    console.log("欢迎回来!");
} else {
    console.log("请登入账号。");
}

// 错误示例的代码结构
if(isLoggedIn){console.log("欢迎回来!");}else{console.log("请登入账号。");}
```

在 VS Code 中，**Prettier** 和 **Black** 是常见的代码格式化工具，可以自动为多种编程语言应用整洁的代码风格。

**PyCharm** 和 **IntelliJ** 具备强大的内置格式化功能，并支持自定义规则，例如 Python 中的 PEP 8 代码风格指南和其他标准规范。这些工具可以帮助项目保持一致的代码格式，减少手动调整的工作量，从而提高代码的可读性和维护性。


### 5\. 编写单元测试

单元测试有助于确保代码的每个部分按预期运行。

通过测试小的、独立的部分（比如函数），你可以尽早发现错误，并防止其蔓延到代码的其他部分。

具体来说，单元测试实际上是对你代码的每个部分所进行的小型质量检查，从而确保它们按预期来工作。

**🍎 现实中的案例：**

让我们来看一下，如何测试具有多个方法的复杂 JavaScript 对象，以 `Calculator` 类为例。

这种方法将帮助你明白，为何要让每个方法专注于一项任务，并通过单元测试确保每个方法都能正确运行。

这里有一个 `Calculator` 类，其中包含执行基本算术运算的方法：加法、减法、乘法和除法。

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
        if (b === 0) throw new Error("无法除以零");
        return a / b;
    }
}
```

如你所见，每个方法都执行一个特定的操作。其中，`divide` 方法有额外的逻辑来处理除以零的情况，否则这会导致错误。

现在，我们将编写单元测试来验证每个方法是否按预期工作。🔬

**🧪 为每个方法编写单元测试**

为了测试我们的 `Calculator` 类，我们可以编写单元测试，涵盖正常情况和边缘情况。以下是如何为每个方法设置测试的示例：

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
    console.assert(e.message === "无法除以零", '测试失败: 除以零的错误信息不正确');
}
```

**🫧 测试解释：**

1.  **加法**（`add` 方法）：我们测试 `add(2, 3)` 返回 `5`，以及 `add(-1, 1)` 返回 `0`。如果这些测试通过，就说明我们的加法逻辑是正确的。
    
2.  **减法**（`subtract` 方法）：我们验证 `subtract(5, 3)` 返回 `2`，以及 `subtract(0, 0)` 返回 `0`。这些检查确保减法计算准确无误。
    
3.  **乘法**（`multiply` 方法）：我们测试乘法函数，包括正数和负数的情况，确保 `multiply(2, 3)` 返回 `6`，以及 `multiply(-1, 2)` 返回 `-2`。
    
4.  **除法**（`divide` 方法）：我们验证 `6` 除以 `3` 返回 `2`。对于除以零的情况，我们使用 `try...catch` 块来确保方法抛出正确的错误消息。这可以验证该方法是否能正确处理错误情况。

你可以看到，如果任何方法失败，测试都会生成清晰的错误消息，使我们能够迅速识别并修复问题。单独测试方法有助于我们在项目发展过程中尽早发现错误，并保持可靠、整洁的代码。


### 6\. 谨慎处理依赖项

依赖项，是指你的代码所依赖的外部软件组件。🔌

想象一下，您正在构建一个能发送电子邮件的网络应用程序。与其自己编写邮件发送功能，你可以使用像 [**Nodemailer**][12] 这样的外部库。在这种情况下，Nodemailer就是一个**依赖项**——你的应用依赖它来处理邮件发送功能。

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

在这段代码中，`nodemailer` 被引入并用于创建一个邮件发送的传输器。如果没有它，你将不得不从零编写整个邮件发送功能，这将非常复杂且耗时。通过使用 Nodemailer 作为依赖项，你的应用可以轻松实现邮件发送功能。

尽管依赖项非常有用，但过度依赖外部软件或库可能会带来问题。因此，只有当它们能简化你的工作或提供重要功能时，才应该使用依赖项。

有效管理依赖是编写简洁代码的关键。以下是一些提示：

- **限制依赖项**：仅包含对项目真正必要的库或模块，避免不必要的依赖项。
  
- **保持版本更新**：使用最新版本的库，以减少安全风险。
  
- **分离核心逻辑**：尽可能自己编写核心功能，这样即使未来需要移除某个依赖，也不会影响你代码的正常运行。
  

让我用之前的 Nodemailer 代码来给你举个例子，说明如何在代码中实现逻辑分离。

你可以创建一个封装函数，将发送电子邮件的细节抽象出来。这样，你就可以更改底层的电子邮件服务或移除对 Nodemailer 的依赖，而不影响到代码的其他部分。

以下是如何组织代码以实现此目的：

```javascript
const nodemailer = require('nodemailer');

// 用于发送电子邮件的核心函数
function sendEmail(to, subject, message) {
    const transporter = createTransporter();
    const mailOptions = createMailOptions(to, subject, message);
    return transporter.sendMail(mailOptions);
}

// 创建邮件发送器的函数
function createTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });
}

// 创建邮件选项的函数
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

**🗝️ 关键要点：**

1. **核心函数**：`sendEmail`、`createTransporter` 和 `createMailOptions` 的函数是相互独立的，这样你就可以修改其中一个而不影响其他函数。

2. **轻松修改**：如果您希望在将来切换到其它电子邮件服务，你只需修改 `createTransporter` 的函数即可。

3. **可维护性**：这种结构使你的代码更易于维护和理解。
  

### 7\. 合理组织项目结构

一个良好的项目结构与代码本身同样重要。

可以这样想，就像整理你的工作空间一样——你需要为每样东西指定位置，这样就能轻松找到它们。对于编码项目，应该为不同的部分创建专门的文件夹，例如 `components`、`utils` 和 `services`等格式。

**📂 如何组织你的项目**

为了建立一个整洁有序的项目，你应当将代码的不同部分的分类放入指定的文件夹中。以下是一个组织良好的项目结构的简单示例：

```
myProject # 我的项目
├── src # 资源文件夹
│   ├── components # 组件文件夹
│   ├── services # 服务文件夹
│   ├── utils # 实用工具文件夹
└── tests # 测试文件夹
```

#### 项目结构解析：

1. **myProject（我的项目）**：这是你项目的根文件夹。包含与您的应用所有相关的内容。

2. **src (资源)**：此文件夹包含您项目的所有源代码。这是您大部分编码工作的地方。

3. **components（组件）**：此子文件夹用于存放可复用的 UI 组件。例如，如果你正在构建网络应用程序，你可能会在这里存放按钮、导航栏、表单等组件的单独文件。每个组件都应有独立的文件，以保持模块化。

    - `components` 中的示例结构：

```
    components
    ├── Button.js # 按钮组件文件
    ├── Header.js # 头部导航组件文件
    └── Form.js # 表单组件文件
```

4. **services（服务）**：此文件夹用于存放执行特定任务或处理业务逻辑的函数。例如，如果你的应用涉及发送邮件，你可以在这里创建一个专门的文件来管理所有与邮件相关的功能。

    - `services` 中的示例结构：

```
    services
    ├── emailService.js # 邮件服务文件
    ├── userService.js # 用户服务文件
    └── productService.js # 产品服务文件
```

5.  **utils（实用工具）**：在这里，你可以放置一些可以跨项目使用的辅助函数。这些通常包括格式化日期、验证输入或其他不属于特定组件或服务的通用任务。
    
    -   `utils` 目录内的示例结构：

```
    utils
    ├── formatDate.js # 格式化日期文件
    ├── validateEmail.js # 验证邮箱格式文件
    └── generateId.js # 生成客户ID号码文件
```

6.  **tests（测试）**：此文件夹专用于存放测试文件。保持测试的有序排列有助于确保在构建新功能时，你可以轻松地测试它们，而无需在代码库中四处查找相关文件。
    
    -   `tests` 目录内的示例结构：

```
    tests
    ├── emailService.test.js # 测试邮件服务的功能
    ├── userService.test.js # 测试用户服务的功能
    └── component.test.js # 测试 UI 组件的功能
```

**📨 真实案例：使用 Nodemailer 进行邮件发送**

假设你正在构建一个向用户发送电子邮件的应用程序。你可以按照以下结构组织项目：

```
myEmailApp # 我的邮件应用程序
├── src # 资源文件夹
│   ├── components # 存放组件的文件夹
│   │   ├── EmailForm.js # 邮件表单组件
│   │   └── SuccessMessage.js # 邮件发送成功消息的组件
│   ├── services # 存放服务组件的文件夹
│   │   └── emailService.js # 处理邮件服务功能的组件
│   ├── utils # 存放工具组件的文件夹
│   │   └── validateEmail.js  # 验证邮箱格式的组件
└── tests # 存放测试组件的文件夹
    ├── emailService.test.js # 测试邮件服务的组件
    └── EmailForm.test.js # 测试邮件表单组件
```

-   **EmailForm.js**：此组件负责处理发送电子邮件的用户界面，例如收件人、主题和邮件正文的输入字段。
    
-   **SuccessMessage.js**：这个组件在邮件发送成功后显示一条成功消息。
    
-   **emailService.js**：该服务包含使用 Nodemailer 发送电子邮件的逻辑，使你的代码保持模块化和清晰。
    
-   **validateEmail.js**：一个实用的工具函数，用于检查电子邮件地址格式是否正确。
    
-   **tests**：该文件夹用于编写测试代码，以确保你的电子邮件服务和组件按预期运行。
    

**🍱 良好项目组织的优势**

1.  **易于导航**：查看你的项目的任何人都可以快速了解，在哪里找到特定部分的代码，帮助理解其结构。
    
2.  **更好的协作**：如果你与他人合作，清晰的结构可以帮助团队成员明确各自的贡献范围，避免相互干扰。
    
3.  **良好的扩展性**：随着项目的发展，保持清晰的结构有助于管理复杂性，并保持代码库的整洁。
    
4.  **提高可维护性**：当你需要更新或修复某些内容时，可以快速找到相关文件，从而节省时间并减少错误。
    

### 8\. 保持一致的代码格式

一致的代码格式 有助于提高可读性，使代码更加清晰、有条理。

为你的项目确立一种编写代码的模式，例如使用两个空格缩进，或者在注释前始终包括一个换行符。

遵循一致的代码格式可以让代码更易读、更易维护，并提升项目的整体质量。

**🛠️ 代码格式化工具**

-   [**Prettier**][13]：基于一套规则自动格式化代码，确保代码风格一致。[这里有一个教程][14]，其中讲解如何在 VSCode 中设置和使用 Prettier，从而来帮助提高你的代码的可读性。
    
-   [**ESLint**][15]：用于强制执行编码规范，突出潜在问题。[这里有一个教程][16]，其中包含关于为你的项目设置 ESLint 的实用且深入的部分。
    

### 9\. 避免硬编码

硬编码指的是，直接在代码中嵌入数据值，例如将用户 ID 设置为 `123` 而不是使用变量。

避免硬编码可以提高代码的复用性，减少手动修改的需求。相反，你应该将值存储在变量、常量或配置文件中，以便更灵活地调整和管理数据。

以下是硬编码可能导致问题的一个场景：：

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

在这个错误示例中，`numberOfUsers` 被硬编码为 `100`。如果您想要更改用户限制，您必须在代码中找到并修改此值。如果这个值在多个地方被重复使用，那么修改起来会变得繁琐且容易出错。

#### **🏗️ 使用常量的优化示例**

现在，让我们对代码进行重构，使用常量来替代硬编码：

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

**🥣 优化示例解析：**

1.  **使用常量**：`MAX_USERS` 常量被定义在代码顶部。如果未来需要更改最大用户数，只需修改这一处，而不必在代码中四处查找并修改硬编码的值
    
2.  **动态值**：`getCurrentUserCount()` 函数会从数据库或其他数据源中动态获取当前的用户数量。这种方法避免了对数量进行硬编码，便于轻松更改。
    
3.  **可维护性**：将值存储在常量中，使你的代码更易于维护。如果业务需求发生变化，并且您需要将用户限制增加到 `150`，只需将 `MAX_USERS` 从 `100` 更改为 `150`，整个应用程序都会反映出这一更改。
    
4.  **清晰性**：为常量使用描述性的名称（如 `MAX_USERS`）可提高代码的可读性。任何查看您代码的人都能迅速明白这个值所代表的含义。

**🤐 何时使用配置文件**

在大型应用程序中，你可能还会考虑使用配置文件（如 JSON、YAML 或环境变量）来存储在不同环境（开发、预发布、生产）之间可能会改变的值。

例如，在你的 **config.json** 文件中，你可以将 `maxUsers` 硬编码（但请注意，在 config.json 中，建议使用驼峰命名法，以保持格式一致性）：

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

**🪴 在代码中使用配置文件：**

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

较长的函数难以理解和维护。

虽然没有严格的规定，但通常来说，函数的长度最好控制在 20 到 30 行以内。如果一个函数承担了多个职责或包含过多的步骤，这往往意味着它太长了。需将这些函数拆分成为较小的“辅助”函数，可以使代码更易管理和理解。

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

⚠️ **这个函数执行了多个任务：**

1.  将商品加入购物车。
    
2.  计算总价格。
    
3.  如果有折扣码，则应用折扣。
    
4.  记录交易信息。
    

虽然该函数目前看起来可以管理，但如果继续增加任务，它会迅速变得难以调试和维护。

让我们将这个冗长的函数拆分为更小、单一职责的函数：

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

#### 🧩 详细解释：

1.  `addItemToCart`：该函数仅负责将商品添加到购物车。它简单且目标明确，不包含任何额外逻辑。
    
2.  `calculateTotal`：函数计算购物车内所有商品的总价。这样代码更易读、易理解，如果你未来需要修改计算方式，只需调整这个函数即可。
    
3.  `logTransaction`：负责记录详细信息。如果你以后需要更改日志内容（例如，添加时间戳），只需修改该函数，而不会影响其他部分。
    
4.  `updateCart`：作为主函数，它现在更像是一个流程总结——先添加商品，然后计算总价、再应用折扣，最好记录交易结果。这种方式使代码一目了然，更清晰易懂。
    

**📒 让我们总结一下限制函数长度的要点：**

1.  **🎯 专注于单一任务**: 每个函数最好只执行一个任务。如果一个函数同时处理多个任务，不妨考虑将其拆分成更小的函数。。
    
2.  **🩼 使用辅助函数**: ：辅助函数是小型且专注的函数，用于执行特定任务并支持主函数的运行。例如，上述示例中的`addItemToCart`、`calculateTotal` 和 `logTransaction` 就是辅助函数。
    
3.  **🪦 使用描述性命名**: 函数名称应该能够清楚表达其功能（例如 `addItemToCart`），这样可以让代码自解释，减少对额外注释的依赖。
    

## 整洁代码的最佳实践

现在我们已经介绍了一些重要的技巧，现在让我们来看一下整洁代码背后的核心原则：

1.  **🎏 简单性**: 始终让代码尽可能简单，避免不必要的复杂度。
    
2.  **🧂 一致性**: 保持代码在风格和结构上的统一性，使其更易读和维护。
    
3.  **🌾 清晰性**: 代码应该清楚地表达它的功能，无需额外的解释。
    
4.  **⛽ 高效性**: 在不牺牲可读性的前提下，编写优化的代码，以提升性能。
    

这些原则表明，编写代码不仅仅是写代码，更是设计解决方案。整洁代码是一种需要不断练习的技能，所以请保持学习，不断提升自己！

**🔌 关于依赖项的说明**

与其直接在代码中硬编码依赖项，不如使用包管理工具来管理它们，如 [**npm**][17]（用于 JavaScript）或 **pip**（用于 Python）这样的包管理器来统一规划它们。这样，你可以轻松更新或移除依赖项，确保代码的灵活性和可维护性。

### 总结 🏁

编写整洁的代码就像为房子打下坚实的地基。它能让整个项目井然有序，使你在项目扩展时轻松添加新功能或修复问题。

掌握这些技巧后，你可以逐步养成让代码更易读、更易维护的良好习惯，同时让编写代码变得更加高效且愉悦。

### 建议的下一步 📘

如果你想在六个月内成为后端开发者，可以参考我的[后端开发人员路线图][18]。该路线图旨在帮助初学者按照每周目标稳步学习，其中涵盖关键的技能、工具和技术。这个路线图可以让你的学习过程更加有条理、易坚持。

**你可以在** [**𝕏**][19] **上关注我，以获取实时更新。**

期待我们的下次再见！

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

