Sure, here's the translation:

---
title: 如何为您的 Web 应用构建可扩展的访问控制【完整手册】
date: 2025-07-17T02:28:00.575Z
author: Samhitha Rama Prasad
authorURL: https://www.freecodecamp.org/news/author/samhitharamaprasad/
originalURL: https://www.freecodecamp.org/news/how-to-build-scalable-access-control-for-your-web-app/
posteditor: ""
proofreader: ""
---

访问控制对于防止未经授权的访问至关重要，并确保只有合适的人才能访问您应用程序中的敏感数据。随着应用程序复杂性的增加，如何以清晰高效的方式执行权限的挑战也随之加大。

<!-- more -->

在本手册中，我们将探讨各种访问控制机制，并介绍两种在 React 中构建可扩展的基于属性的访问控制（ABAC）解决方案的方法。

首先，我们将研究 CASL，这是一个流行的开源授权库。 然后，我们将从零开始构建一个自定义解决方案，以加深您对如何设计灵活的权限验证系统的理解。

本指南包含两个方法的详细代码演练，涵盖关键概念，如状态管理、自定义钩子以及使用 Redux Toolkit 的缓存/条件查询。

如果您计划实施代码，您应该对使用状态管理的 Web 应用有所了解。 但即使您没有编写代码，您仍然可以深入了解创建强大权限验证系统背后的设计模式和最佳实践。

让我们开始吧！

## 目录

- [什么是访问控制？它与 AuthZ、AuthN 和权限有何不同？][1]

- [多层次访问控制][2]

  - [和谐中的霍格沃茨：统一的防御][3]

- [访问控制模型][4]

- [为什么选择 ABAC？][5]

- [深入了解基于属性的访问控制][6]

  - [核心组件][7]

  - [ABAC 如何工作？][8]

  - [谁定义 ABAC 策略？][9]

  - [应该在后端还是前端实施？][10]

  - [策略在哪里定义？][11]

- [1: 使用 CASL 实现权限][12]

- [2: 构建自定义权限验证框架][13]

  - [使用代码即策略定义策略][14]

  - [工作流程概述][15]

  - [策略验证][16]

  - [策略实施][17]

- [总结][18]

  - [进一步的扩展考虑][19]

- [结论][20]

## 什么是访问控制？它与 AuthZ、AuthN 和权限有何不同？

让我用机场的例子来解释这些术语。

当您到达值机柜台时，您出示护照以验证您的身份。 **身份验证**（你是谁？）是确认您是您所声称的人的过程。

一旦确认了您的身份，航空公司会通过核对您的机票来检查您是否可以登机，或者通过查看您的会员资格、旅行等级或忠诚度计划等级检查您是否有资格进入休息室。 **授权**（您被允许做什么？）是确定您有权访问哪些特定资源的问题。

**权限**（您可以采取哪些具体措施？）是指在您授权范围内允许您执行的具体操作的详细信息。如果您被授权登机并进入休息室，您的权限可能包括：在登机口就座、在休息室放松、在免税商店购物，或者如果您是工作人员，进入限制区。

**访问控制** 是指实施授权政策的措施。这些是机场用于验证登机牌或休息室访问权限并引导您到达正确登机口的规则。

## 多层次访问控制

为了确保全面的保护，应根据您的应用程序架构在多个层强制执行访问控制。

为了理解这一点，这里有一些献给我的哈利波头控：

### 和谐中的霍格沃茨：统一的防御

在霍格沃茨的边缘，您拥有您的周界—那些阻挡黑暗势力的外部防御。将这些视为包围城堡的高大“施了魔法的石墙”，就像防火墙一样，墙上的翼猪雕像密切注视着。 只有拥有适当许可的人才能通过大门，确保没有不速之客，如黑巫师，进入。

当学生到达霍格沃茨时，他们通过“小船或夜骐拉动的马车”来到这里，这是唯一受信任的交通工具。这就像 **终端检测与响应 (EDR)**，确保只有正确的设备（或马车）可以进入。

如果学生尝试使用不合规的设备（如“被诅咒的扫帚或幻影显形”），他们将不被允许进入。 **移动设备管理 (MDM)** 就像魔法检查过程—只有符合霍格沃茨标准的设备才能通过大门并连接到学校的系统。

在霍格沃茨，“猫头鹰”是将消息从学校送到外界的信使。这些猫头鹰就像 API 密钥和 JWT，携带着认证印章，并仅将消息送达正确的接收者。像“摄魂怪”这样的黑暗生物被禁止传递消息，确保只有正确的通信通过。

在城堡内，不同区域的访问是基于你在霍格沃茨的身份和角色来控制的。例如，**基于角色的访问控制（RBAC）**确保只有_格兰芬多_的学生可以进入他们的休息室，而_斯莱特林_也有自己的休息室。_级长_有额外的特权，比如进入级长浴室或其他特殊房间。这些角色定义了你在城堡内可以去哪里以及可以做什么。

但通过**基于属性的访问控制（ABAC）**，情况变得更加微妙。比如，只有选修_保护神奇动物课_的学生才可以进入禁林，但他们只能在白天安全的时候进入。森林在夜间太危险，只有具备正确属性（如特定时间表）的学生才能在正确的时间进入。

在霍格沃茨的一个保险库中隐藏着_魔法石_，由强大的魔法保护着。这是你的数据层——最珍贵的资源，由强大的保护措施来保障安全。就像数据库权限一样，保险库由三头狗路威、一系列魔法和陷阱所保护。同样，行级和列级安全措施确保只有哈利·波特能够取到石头，因为他是唯一有资格的人（你只能访问属于你的内容）。

总结来说：

1.  **网络层（基础设施层）**：使用防火墙和虚拟专用网络（VPN）来控制进出网络流量。

2.  **终端层（设备级）**：使用终端检测与响应（EDR）和移动设备管理（MDM）确保只有合规的设备能够访问你的应用程序。

3.  **API 层（服务级）**：使用 API 密钥、JSON Web Tokens（JWTs）和 API 网关来验证和授权调用方，并执行速率限制、IP 白名单等策略。

4.  **应用层**：核心业务逻辑的授权通常位于这一层（本指南主要讨论的内容）。

5.  **数据层（数据库级）**：数据库权限、行/列级安全性。

## 访问控制模型

在应用层，软件工程中常用的三种主要访问控制模型是：基于角色的访问控制（RBAC）、基于属性的访问控制（ABAC）以及更新的基于关系的访问控制（ReBAC）。

**RBAC** **(基于角色的访问控制)** 是一种基于分配给用户的角色来授予或拒绝访问的模型。

角色是一组权限或特权的集合，它定义了用户在系统中可以执行的操作。角色通过为用户分配预定义的角色来简化访问控制，而不是为每个用户管理单独的权限。

当用户被分配角色时，他们自动继承与该角色相关的所有权限。每个权限也有一个范围，定义了角色权限适用的边界或上下文。范围通常用于限制对特定资源或数据的访问。

让我用一个博客应用程序作为示例来说明这一点（以及本指南中的所有概念）。该应用程序允许用户创建、管理和发布多个类别的博文。它支持各种用户角色，每种角色对平台的内容和功能具有不同等级的访问权限。

-   **管理员**：可以查看、编辑、删除并管理所有博文和用户角色。（范围：所有博文和用户）

-   **编辑**：可以编辑和批准其分配类别（例如技术、生活方式）内的帖子。（范围：指定的类别）

-   **作者**：只能创建和编辑自己的博文。（范围：自己的帖子）

-   **访客用户**：可以查看公开发布的博文，但不能访问私人帖子。（范围：仅限公开发布的帖子）

用户与角色之间的关系通常是多对多的，角色也可能是分层的，允许复杂的权限结构。

![基于角色的访问控制图](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780482515/e30316f8-58a9-4595-81ba-8eb08b2d5a3d.jpeg)

**ABAC** **(基于属性的访问控制)** 是一种根据主体（用户）、客体（资源）和环境的属性来做出访问决策的模型。它动态评估主体是否可以根据这些属性和管控它们的策略在客体上执行操作。

**ReBAC** **(基于关系的访问控制)** 是一种新兴的模型，它基于用户和资源之间的关系授予访问权限。例如，它可能只允许创建某个帖子的用户编辑它。此模型在社交网络应用程序中特别有用，访问权限取决于用户关系（如朋友、关注或内容所有权）。

## 为什么选择 ABAC？

RBAC 提供了多个优点，包括实现简便性、通过快速为新用户入职降低管理开销，并简化审计，因为它使得审查哪些角色有权访问敏感数据变得简单。

然而，随着平台的扩展，你会引入更细致的访问控制需求。这些新需求导致创建新的角色以满足特定的访问需求：

不久之后，你可能会发现自己正在管理不断增加的角色列表，例如高级发布者、出版主管、访客用户、订阅者、高级订阅者、平面设计师、用户体验设计师、摄影师、社交媒体经理、美国市场专员、英国市场专员、网络开发人员、数据分析师、会员管理者、广告经理、法律顾问和赞助经理。

引入附加要求（例如博客类别、级别和司法管辖区）可能会迅速导致角色爆炸。想象一下这将如何在数据密集型企业应用程序中扩展，比如金融或医疗保健。

虽然范围在边界明确且静态（例如部门、博客类型）时效果良好，但它们需要为更细粒度的属性（例如高级别、服务年限、博客创建时间或发布状态）进行自定义检查。范围也难以解释那些随着时间变化的属性，例如位置或访问时间。

由于 RBAC 依赖于角色和固定范围来做出访问决策，因此在处理复杂和动态的访问需求时显得有限。这就是为什么，[**OWASP**（开放式网络应用程序安全项目）建议使用 **ABAC** 或 **ReBAC** 代替 RBAC][21]，因为它们在实施最小权限原则方面更有效。

## 深入了解基于属性的访问控制

### 核心组件

ABAC 的核心组件包括：

**属性**：属性是用于定义访问上下文的键值对。示例包括：

-   **用户属性**：这些描述请求访问的人的特征，如角色、部门、年龄、许可级别等。💡 如你所见，角色可以是基于此进行访问控制决策的属性之一。因此，ABAC 本质上是 RBAC 的扩展。
    
-   **资源属性**：这些描述被访问资源（如文件、数据库或服务）的特征。例如，所有者、类别、状态等。
    
-   **操作属性**：这些定义用户对资源请求的操作。例如，`读取`访问如查看/打开，`写入`访问如创建/修改/删除，`执行`访问如处理/运行等。
    
-   **环境属性**：这些包括影响决策过程的背景元素，例如`时间`或`位置`。
    

**策略**：策略是定义哪些属性组合允许或拒绝访问的逻辑规则或声明。例如，发布者可以在工作时间内发布已审批的分配类别的帖子。

### ABAC 如何工作？

让我们以 Sam，一个博客的发布者为例。Sam 被授权发布已被编辑审批过的帖子，但只能在她被分配的类别内，例如“科技”、“生活方式”和“健康”。她只能在特定时间内发布这些帖子，比如上午 9 点到下午 6 点。

Sam 的角色作为发布者和她被分配的类别是在她加入团队时设置的。这里的资源是帖子，创建时被赋予一个类别。她可以执行的操作是发布，而环境条件是需要在工作时间内。

由于访问控制规则是基于 Sam 的属性——她作为发布者的角色和她被分配的类别——她可以在这些类别内发布帖子。如果她的任何属性发生变化，例如她调到一个不同的部门，比如会员管理，或者她被分配的类别更改为“时尚”或“旅行”，她的访问权限将自动撤销。

> _ABAC 允许管理员设置访问控制，而无需知道具体哪些人需要访问。随着新成员加入组织，无需修改现有规则或对象属性；只要他们具备必要的属性，他们就可以访问所需的资源。这种在没有额外调整情况下自动适应新的和未预见用户的能力是使用 ABAC 的关键优势_。([来源][22])

### 谁定义 ABAC 策略？

1.  **身份与访问管理管理员**：
    
    在许多组织中，安全管理员或访问控制管理员会定义 ABAC 策略。他们的职责包括分析业务需求、风险管理、合规监管，确保用户对资源有适当的访问权限。他们将安全需求翻译为基于不同属性和组织特定条件的政策。
    
2.  **业务和资源管理者**：
    
    在某些情况下，业务单元或部门经理也可能参与定义策略。他们了解操作需求，并最有资格指示他们的团队应如何访问数据。
    
    例如，会员管理者可能会定义基于订阅状态、用户角色或会员级别（如订阅者、高级订阅者）来管理谁可以访问高级博客文章的策略。
    

### **在哪里应执行它——后端还是前端？**

访问控制策略应在**前端和后端**都予以执行。原因如下：

-   **即时反馈**: 当您在前端实施 ABAC 策略时，可以根据用户的属性立即显示或隐藏元素（如按钮、链接或菜单）。这使界面更简洁，帮助用户立即了解他们可以或不能做什么。

-   **更智能的 UI**: 您可以防止向不应该看到相应选项的用户展示选项。例如，如果用户没有正确的角色或权限，则隐藏功能。这让 UI 感觉更直观和响应迅速。

-   **减少服务器负载**: 通过在前端实施某些访问限制，您可以减少不必要的后端请求，从而提高应用性能并减少服务器负载。

-   **安全层**: 虽然前端不是敏感数据存放的地方，但您仍然可以通过它在请求发送到后端**之前**过滤掉无效的操作或内容，增加一层安全保障。例如，您可以根据用户属性隐藏敏感的 UI 元素（如管理员控制）或禁用按钮，使未经授权的用户更难尝试触发某些操作。

**2.** **后端实施**

-   **绕过风险**: 仅依赖前端的缺点是用户可以轻易地**绕过**它。利用正确的工具，他们可以操纵前端代码或网络请求（使用浏览器开发工具或 API 代理）。这就是为什么后端实施是必不可少的——它确保访问规则在**服务器端**得到应用，无法被篡改。

-   **保护敏感数据**: 后端是存储和处理敏感数据的地方。通过在服务器上实施 ABAC 策略，您可以确保未经授权的用户无法访问、修改甚至查看敏感信息。为了避免数据泄露，您应该始终根据用户权限过滤掉敏感内容，并仅将相关内容发送给客户端。

现在您知道 ABAC 策略需要在前端和后端均施行，接下来的问题是：**您在哪里定义这些策略？**

作为开发人员，您可能会想：“_如果我知道安全团队定义的策略，我就可以把它们翻译成前端和后端的代码。_”

例如，如果策略是只有高级作者才能在特定类别中批准博客，您可以写出如下代码：

**前端示例（简化版）：**

```javascript
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  showApprovalDashboard();
} else {
  hideApprovalDashboard();
}
```

**后端示例（简化版）：**

```javascript
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  return res.send(approvalDashboardData);
} else {
  return res.status(403).send('禁止访问：您没有此类别的审批访问权限。');
}
```

但是，如何确保您的应用程序在两个层次上策略的一致性而不重复逻辑？

当您需要为此策略引入其他条件，如考虑其他用户属性或将权限与功能标志结合起来，以有选择地为特定用户启用某些功能时，会发生什么？

另外，如果您的要求因用户而异，例如：

-   仅对具有高级订阅的用户显示某些 UI 元素，

-   根据特定属性阻止社交媒体经理的 API 调用，

-   或为非管理员用户隐藏整个路径？

如果没有结构化的方法，您的应用程序将变成充满 if-else 语句的代码混乱。

继续阅读以找到这些问题的答案！

### 策略在哪里定义？

在我们深入研究实现细节之前，让我简要回顾一下上一个部分的问题：您应该在哪里_定义_策略？

当通过移动应用程序、Web 应用程序或其他平台访问服务的方式有多种时，后端应作为策略定义的真理来源。在后端定义 ABAC 策略可以保持所有平台上的一致性和安全性。这意味着所有客户端都按同一套规则进行交互，减少了策略不一致的可能性。

因此，后端是所有策略定义的存放地，并在需要时将它们提供给前端。然后前端根据这些决定在用户界面上执行。但不要忘记，后端始终也应该执行这些策略。

在接下来的章节中，您将学习两种实现 ABAC 访问控制模型的方法。

## 1: 使用 CASL 实现权限

[CASL][23] 是一个开源、多态的 JavaScript 库，通过简单的声明式 API 使得在应用程序中管理权限变得更加容易。

这意味着您可以在客户端（前端）和服务器端（后端）使用 CASL。这对全栈应用程序尤其有利，因为它确保了访问控制的一致性。无论请求来自哪里，相同的权限逻辑可以应用于整个应用程序。

以下是翻译后的 md 文件，保持了源文件的 markdown 排版布局：

最棒的部分？您可以使用清晰且富有表现力的语法定义权限。这使得即使是复杂的权限规则的管理也变得简单。例如，您可以根据用户的角色、他们拥有的资源以及其他因素来控制用户可以（或不可以）执行的操作。

而且，这不仅适用于 React/React Native——他们也提供了 [Angular][24]、[Vue][25] 和 [Aurelia][26] 的支持包。

### 第一步：安装 CASL

首先，使用包管理器安装 CASL。这里我使用 v6 的代码示例。

```
npm install @casl/react @casl/ability
# 或
yarn add @casl/react @casl/ability
# 或
pnpm add @casl/react @casl/ability
```

### 第二步：定义能力

在 CASL 中，“能力”可以被看作是定义用户在特定主体（例如“Posts”或“Users”）上可以或不可以执行哪些动作的一组规则。让我们使用早期博客应用程序的示例。为了简单起见，我们将考虑两种类型的用户：**管理员**和**作者**。

-   管理员可以管理所有内容。
    
-   作者可以在指定的类别中创建和编辑他们自己的文章，但不能删除已发布的文章。
    

现在，创建一个 `defineAbilities.ts` 文件，用 DSL 以高级声明性方式定义这些能力。

首先定义用户可以执行的 `Actions`（例如，`create`、`read`、`update`、`delete`、`manage`）和 `Subjects`（执行操作的实体，如 `‘User’`、`‘Post’` 或对象如 `User` 或 `Post`）。

```
//defineAbilities.ts

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | User | Post
```

然后，创建一个类型来表示您能力的结构。它结合了 `Actions` 和 `Subjects`，从而创建一个清晰和类型安全的能力系统。

`PureAbility<[Actions, Subjects]>` 意味着该能力系统将知道在哪些主题上允许哪些操作。`createAppAbility` 函数用于根据您定义的动作和主题创建一个能力实例。您可以使用此函数创建特定于用户角色或权限的能力。

```
//defineAbilities.ts

import { CreateAbility, PureAbility, AbilityBuilder, createMongoAbility } from '@casl/ability';
// other imports

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | Post | User

export type AppAbility = PureAbility<[Actions, Subjects]>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>
```

请注意，`createMongoAbility` 仅用于支持来自 [MongoDB 查询语言][27] 的简单运算符，比如 $in，$lte，$eq，这些运算符用于为您的规则指定条件。别担心——这并不意味着您的应用程序必须使用 MongoDB，也不需要您熟悉查询语言。您也可以完全跳过它们并创建自定义运算符。

接下来，定义一个名为 `defineAbilityFor` 的函数，该函数将一个 `user` 对象作为其参数并返回能力实例。预期 `user` 对象应有一个 `role` 属性（例如 'admin' 或 'author'），用于确定用户的权限。

`userPermissions` 对象将每个用户映射到一个使用 `AbilityBuilder` 提供的 `can` 和 `cannot` 方法定义其权限的函数。随着您添加更多的角色，这种方法比 switch case 更具扩展性。

```
//defineAbilities.ts

export default function defineAbilityFor(user: User) {
  const { can, cannot, build } = new AbilityBuilder(createAppAbility);
   const userPermissions = {
    admin: () => {
      // 管理员可以管理一切
      can('manage', 'all');
    },
    author: () => {
      // 作者可以创建文章但不能删除它们
      can('create', 'Post');
      cannot('delete', 'Post');
    },
    // 添加更多角色
  };

  // 调用与用户相关联的权限，或者默认为无权限。
  const permissions = userPermissions[user.role] || (() => {});
  permissions(); 

  return build();
}
```

注意：`manage` 和 `all` 是 CASL 中的关键字，其中 manage 意味着任何动作，all 意味着任何主题。

为了指定阻止用户更新他们未创建的文章、删除已发布文章以及限制访问某些字段的条件，可以使用 **条件** 和 **字段**。CASL 允许您通过 `subject` 属性（代表对象）和 `fields` 属性（代表用户正在交互的对象的属性）在权限上设置特定条件。

在上述文件中添加条件规则。

```

   author: () => {
      // 作者可以在 'Tech' 和 'Lifestyle' 类别中创建文章
      can('create', 'Post', { category: { $in: ['Tech', 'Lifestyle'] } });

      // 作者可以更新他们自己创作的文章的标题和描述
      can('update', 'Post', ['title', 'description'], { ownerId: user.id, status: 'draft' });

      // 作者不能删除状态为 'Published' 的文章
      cannot('delete', 'Post', { status: 'published' });
    },
```

在 CASL 中，直接规则（如 `can`）使用 `OR` 组合，而反规则（如 `cannot`）和条件则使用 `AND` 组合。作者：

请记住，对于相同的动作/主题对，您应该在 `can` 规则之后定义 `cannot` 规则，否则它们将被覆盖。

在处理具有嵌套 `details` 字段的 `Post` 对象时（例如，`details.author.name`，`details.metadata.tags`），您可以使用 `*` 和 `**` 通配符来根据嵌套级别控制访问权限。

- `*` 通配符仅匹配给定对象内的 **顶级字段**。
    
    这意味着它将授予对 `details` 对象中直接字段的访问权限，但不包括任何 **嵌套字段**。
    
- `**` 通配符允许访问对象内的 **所有字段**，包括深层嵌套的字段。
    
    这意味着它将授予对 `details` 内每个字段的访问权限，而不考虑嵌套的深度。
    

```
// 允许访问 Post.details 下的所有嵌套字段，无论它们有多深
can('read', 'Post', ['details.**']) 

// 仅允许访问顶级字段（例如 details.body，details.author）
can('read', 'Post', ['details.*'])
```

注意 `*` 匹配所有符号，除了点（.）

`defineAbilities.ts` 中的能力实例可用于在您的应用中强制执行权限。此文件可以作为共享库，因此前端（例如：React）和后端（例如：Node.js）都可以访问并使用相同的权限逻辑。

尽管 `AbilityBuilder` 适用于系统内部定义的权限，但如果您的应用收到外部定义的权限作为 JSON 对象，例如：

```
[
  {
    action: 'read',
    subject: 'Post'
  },
  {
    inverted: true, // 表示 cannot 规则
    action: 'delete',
    subject: 'Post',
    conditions: { published: true }
  }
]
```

您可以直接将其传递到 `Ability` 构造函数中，如下所示：

```
  const defineAbilityFor = (permissions: (SubjectRawRule<any, any, MongoQuery<AnyObject>>)[]) => {
    return createMongoAbility<[Actions, Subjects]>(permissions);
  }

  export default defineAbilityFor;
```

使用 JSON 定义规则还具有 **减少应用程序包大小** 的额外优势，因为您无需包含像 `AbilityBuilder` 这样的重量级依赖项！

### **步骤 3：为用户创建能力实例**

通过您的登录或身份验证服务成功认证后，您将获取用户数据或关联权限（取决于您在步骤 2 中选择的方法）到您的应用中，并在登录组件（或类似组件）中创建一个能力实例，如下所示：

```
// login.tsx

import defineAbilityFor from './config/defineAbilities.js'

const LoginComponent = () => {
    // 从 API 获取用户数据。然后，
    const ability = defineAbilityFor(user)
}
```

### **步骤 4：为整个应用提供能力实例**

[Contexts][28] 在 React 中用于跨组件共享数据，而无需通过组件树传递 props。在 `can.ts` 文件中添加以下代码：

```
// can.ts

import {createContext} from 'react'
import {createContextualCan} from '@casl/react'

export const AbilityContext = createContext()
export const Can = createContextualCan(AbilityContext.Consumer)
```

这将创建一个 `Can` 组件，您将在下一步中使用它来判断用户是否有权限执行某个操作，基于通过 `AbilityContext` 传递的能力。

接下来，使用上述 `AbilityContext` 包装您的 `App` 组件，并在步骤 3 中将创建的 `ability` 实例设置为 `value`，以便应用程序中的所有组件都可以使用这些能力。

```
ReactDOM.render(
<AbilityContext.Provider value={ability}>
  <App />
</AbilityContext.Provider>,
  document.getElementById('root')
)
```

### **步骤 5：使用能力检查用户权限**

有两种方法可以判断用户是否有权限执行操作：使用 `ability.can` 进行编程检查和使用 `Can` 组件进行条件渲染。

假设这是您的帖子对象：

```
// post.ts

export interface Post {
    ownerId: string;
    category: string;
    title: string;
    description: string;
    status: string;
}
const post: Post = {
    ownerId: 'yourUserName',
    category: 'Lifestyle',
    title: 'My First Post',
    description: 'This is the description for the first post.',
    status: 'published'
};
```

`ability.can` 和 `Can` 组件都需要动作、主题和一个可选字段，并根据定义的能力检查这些参数。

```
// user-profile.tsx

import { useAbility } from '@casl/react';
import { subject } from '@casl/ability';
import { AbilityContext, Can } from '../config/can';
// other imports

export default const UserProfile = () => {
  const ability = useAbility(AbilityContext);

  const canCreatePost = ability.can('create', 'Post'); //==== 示例 (1) ====
  const canDeletePost = ability.can('delete', post); //==== 示例 (2) ====

  return (
    <div>
      <h1>User Profile</h1>

      {/* ==== 示例 (3) ==== */}
      <Can I="delete" a="Post">
        <p>You can delete a Post.</p>
      </Can>

      {/* ==== 示例 (4) ==== */}
      <Can I="delete" this={subject('Post', post)}>
        {(allowed) =>
          allowed ? <button disabled={!allowed}>Delete Post</button> 
          : <p>Cannot delete post.</p>
        }
      </Can>
    </div>
  );
}
```

现在来看四个例子。

例子`(1)`返回 true，因为用户可以创建帖子。

例子`(2)`应该返回 true，因为您可以删除自己发布的帖子，**但它返回了** **false**。为什么？因为即使`post`是一个`Post`的实例，CASL 也无法检测到它的主题类型（`post`对象的类型），因为 CASL 使用 `object.constructor.modelName` 或 `object.constructor.name` 来检测主题类型。

您有两种方法可以解决此问题。

- 使用 `subject` 辅助函数来指定 `post` 实例的类型，如例子 `(4)` 所示（它返回 true）
  
- 使用自定义主题类型检测算法来说明 CASL 需要用哪个属性来识别类型。这可以通过使用 `detectSubjectType` 来实现，如下所示：
  
  ```typescript
  // defineAbilities.ts

  export default function defineAbilityFor(user: User) {
    const { can, cannot, build } = new AbilityBuilder(createAppAbility);
    // 如上所述定义规则

    return build({
      detectSubjectType: object => object.__typename
    });
  }

  // post.ts

  const post: Post = {
    ownerId: 'yourUserName',
    category: 'Lifestyle',
    title: 'My First Post',
    description: 'This is the description for the first post.',
    status: 'published',
    __typename: 'Post'
  };
  ```

现在，例子`(2)`应该返回 true。

接下来，看看例子`(3)`。它也返回 true，因为检查的是主题类型而不是主题本身。记住，当你检查一个

> - 主题时，你在问“我可以删除这个帖子吗？”
> - 主题类型时，你在问“我可以删除一些文章吗？”（也就是说，至少一个帖子）（[来源][29]）

虽然 CASL 提供了一种针对细粒度访问控制的强大方法，但它并没有直接解决我们需要根据用户属性应用条件的要求。

虽然第三方库可以提供便利，但它们的文档有时不够清晰，过时或不准确，且组件本身可能存在漏洞。为了完全控制您的安全流程，可能需要实施自定义授权逻辑。

## 2：构建自定义权限验证框架

要构建自定义验证框架，让我们来看看策略是如何定义、验证和强制执行的，并看看所有这些部分如何结合在一起。

### **使用代码策略定义策略**

您已经了解到，您的访问控制策略应该驻留在后端。对于自定义实现，您将使用**代码策略**或 PaC。这是指使用代码或配置文件（如 YAML、JSON 或 DSL）而非手动流程或文档来定义和管理策略的做法。这允许策略进行版本控制，自动强制执行，并在动态环境中更加可靠。这些策略是由安全管理员编写的，并由策略服务管理。

在 YAML 中，您的策略可能如下所示，其中`policies`列表由序列（`-`）表示。

```yaml
policies:
  - policyId: P001
    resource: Post
    action: view
    effect: allow
    conditions: '(resource.tag != "exclusive") || (resource.tag == "exclusive" && user.role == "premium user")'
  - policyId: P002
    resource: Post
    action: edit
    effect: allow
    conditions: 'resource.ownerId == user.id'
  # other policies
```

**policyId** 是策略的唯一标识符。**resource** 指定策略适用于的资源类型，例如“Post”。**action** 定义对资源允许或拒绝的操作，例如“edit”。**effect** 决定操作是允许还是拒绝，值可以为“allow”或“deny”。**conditions** 表示策略适用时必须满足的逻辑表达式，例如检查资源的所有者 ID 是否与用户的 ID 匹配。

如您所见，策略中的条件是以类似 TypeScript 的人类可读格式编写的。这是因为它们使用的是 Google 的**通用表达式语言（CEL）**编写的。

CEL 是一种开源的、平台无关的语言，用于快速、安全地执行用户定义的表达式（[不像 `eval()`][30]，尤其在服务器端）。其性能的提升得益于 CEL 一次性编译成抽象语法树，然后用于在纳秒或微秒内对多个输入进行评估。

让我们重新定义结构如下：

```yaml
policies:
  Post:
    view:
      policyId: P001
      resource: Post
      action: view
      effect: allow
      conditions: '(resource.tag != "exclusive") || (resource.tag == "exclusive" && user.role == "premium user")'
    edit:
      policyId: P002
      resource: Post
      action: edit
      effect: allow
      conditions: 'resource.ownerId == user.id'
    publish:
      policyId: P003
      resource: Post
      action: publish
      effect: allow
      conditions: 'user.role == "publisher" && resource.category in ["Tech", "Lifestyle"] && resource.status == "approved" && system.time >= "09:00:00" && system.time <= "18:00:00"'

  Comment:
    create:
      policyId: C001
      resource: Comment
      action: create
      effect: deny
      conditions: 'user.role == "guest"'
    edit:
      policyId: C002
      resource: Comment
      action: edit
      effect: allow
      conditions: 'resource.authorId == user.id'
    delete:
      policyId: C003
      resource: Comment
      action: delete
      effect: allow
      conditions: 'resource.authorId == user.id || user.role in ["moderator", "admin"]'
  # other policies
```

理由如下：

1.  **结构改进**：通过按资源和操作分组策略，使导航变得更加容易。添加新策略或操作变得轻而易举，而不会破坏整体设置。例如，如果您需要为`Post`资源添加`archive`操作，只需将其添加到`Post`对象下即可。这种模块化方法使策略的维护和扩展变得更简单。
    
2.  **高效查找**：当这些策略在您的应用程序中作为 JavaScript 对象访问时，查找是高效且常数时间（O(1)）。这是因为策略是使用直接键查找存储的，每个策略可以通过其唯一键立即访问。相比于通过列表进行搜索（需要 O(n) 时间），这显著提升了性能。随着策略数量的增长，查找时间保持不变，因此性能不会下降。
    
3.  **更容易的审核和版本控制**：这种结构还使审核和版本控制更加顺畅。您可以轻松跟踪策略的更改并管理更新，而无需担心意外中断其他策略。
    

💡

要了解 CEL 中字符串字面值在上述条件中的工作方式，请查看一些示例[这里][31]。

### 工作流程概览

当应用程序启动时，您使用 RTK 查询从策略服务获取策略，并自动将其缓存到您的 RTK 缓存中。一旦用户被验证，他们的数据（如角色和部门）也将存储在缓存中。

要在会话期间持久化这些数据，您需要将其存储在会话存储中，但要注意避免存储敏感信息。出于权限验证器的目的，我们将直接从缓存中读取用户数据。

在需要策略执行的地方，比如组件或路由中（我们称之为_策略执行点_），应用程序将调用我们的自定义权限钩子。然后，此钩子会根据策略、用户、资源和环境属性来验证权限，以决定是授予还是拒绝对请求操作的访问。

![基于属性的访问控制工作流](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780571125/1dba1568-ee54-4bea-8d25-5c058fa6da68.jpeg)

### 策略验证

#### 步骤 1：创建权限验证器

首先在您的代码中定义`Action`、`Resource`和`Policy`的类型：

```markdown
export type Action = "view" | "edit" | "create" | "approve" | "publish" | "delete";
export type Resource = Partial<Post> | Partial<User> | Partial<Comment>;

export type PolicyEffect = "allow" | "deny"

export interface Policy {
  policyId: string;
  resource: string;
  action: string;
  effect: PolicyEffect;
  conditions: string;
}
```

你可能想知道为什么这里需要使用 `Partial`。通过使用 `Partial`，我们表示在执行某些操作时，`Post`、`User` 或 `Comment` 上的每个字段都不是必须的。这在你验证创建操作时尤其有用，因为对象可能尚未完全形成——有些字段仍可能缺失。例如，在创建新 `Post` 时，你可能只有标题和内容，而没有完整的评论或标签列表。

然后，安装 `cel-js`，这是一个用于 JavaScript 的 CEL 评估器，用于你的验证器中。

```
npm i cel-js
```

创建一个 `validatePermission` 函数，从提供的 `policies` 对象中提取给定资源的操作规则，并构建一个包含 `user`、`resource` 和 `system` 信息的上下文。请注意，你可能需要使用 `__typename`（或类似的）来检测资源类型，类似于你在 CASL 中所做的。

使用 `cel-js` 库，评估操作规则中指定的 `conditions`，这些条件将检查用户是否满足操作的必要标准。如果条件满足，策略将“生效”，意味着根据定义的效果执行允许或拒绝动作。如果没有定义规则或评估期间发生错误，默认拒绝。

```
// validator.ts

import * as cel from 'cel-js';
// 其他导入

export const validatePermission = (
  action: Action,  
  resource: Resource,  
  system: System, 
  user: User,
  policies: { [resourceKey: string]: { [actionKey: string]: Policy } }
): boolean => {

  const actionRules = policies[resource.__typename]?.[action];
  if (!actionRules) return false; 

  try {
    const context = {
      user: user,  
      resource: resource,  
      system: system,  
    };

    return cel.evaluate(actionRules.conditions, context) && actionRules.effect === "allow";

  } catch (error) {
    console.error('Error evaluating permission condition:', error);
    return false;
  }
};
```

任何需要验证用户对某操作的权限的组件都需要从缓存中获取策略并从全局状态中检索用户，同时也要管理加载和错误状态。

为了避免这种代码重复并封装上述操作的逻辑，你可以创建一个自定义钩子，为跨组件的权限验证提供一致的接口。

#### 第 2 步: 创建一个自定义钩子来封装可重用的逻辑

由于策略在应用程序启动期间已从策略管理服务中获取，现在同样的 RTK 查询将直接从缓存中检索它们。按照下面的参考创建一个 `usePermission` 自定义钩子。

注意如何使用 `skip: !userId` 条件来确保只有在存在有效的 `userId` 时才获取策略，从而防止不必要的网络请求。

```
// usePermission.ts

import { useSelector } from 'react-redux';
import { useGetPoliciesQuery } from './services/api'; 
import { validatePermission } from './validator';
// 其他导入

export const usePermission = (action: Action, resource: Resource, system: System): boolean => {

  const user = useSelector((state: any) => state.user); 

  const { data: policies, isLoading: isPoliciesLoading, isError: isPoliciesError } = useGetPoliciesQuery({
    skip: !userId,
  });

  if (isPoliciesError || !policies) {
    console.error('Failed to fetch policies');
    return false;
  }

  const hasPermission = validatePermission(action, resource, system, user, policies);

  return hasPermission;
};
```

#### 第 3 步: 添加上下文操作验证

往往即使用户拥有执行某个操作的必要权限，他们仍可能由于上下文业务逻辑而不被允许这样做。例如：

- **帖子审核**：编辑可能有权批准帖子，但如果他们正处于编辑状态且有未保存的更改，则应隐藏批准按钮。
  
- **评论**：即使用户有权发表评论，当他们没有输入任何内容时，评论按钮也应被禁用。
  
- **类别创建**：即使用户有权限，如果名称为空或已存在，他们可能仍然被阻止创建类别。

这些规则依赖于应用程序的当前状态，需要动态处理。为了处理这些上下文操作，验证规则应该根据应用程序的当前状态（例如正在编辑的帖子，正在输入的内容，类别名称的可用性）来定义。

在深入讨论自定义钩子如何处理这些验证之前，让我们首先列出这些上下文操作的规则：

```
// contextualRules.ts

import _ from 'lodash';
// 其他导入

const contextualActionRules = {
  Post: {
    approve: (state: PostState, resource: Resource) => {
      // 如果帖子当前正在编辑，则防止批准
      const postId = resource?.id;
      return postId && !state[postId]?.isEditing;
    },
  },
  Comment: {
    create: (state: CommentState, resource: Resource) => {
      // 如果评论内容为空，则防止创建评论
      return !_.isEmpty(resource?.content);
    },
  },
  Category: {
    create: (state: CategoryState[], resource: Resource) => {
      // 如果名称为空或已存在，则防止创建类别
      const categoryName = resource.name?.trim();
      return (
        !_.isEmpty(categoryName) &&
        !state.some(category => category.name === categoryName)
      );
    },
  },
};
```
```

```
// usePermission.ts

export const usePermission = (action: Action, resource: Resource, system: System): boolean => {

  const state = useSelector((state: RootState) => state);

  /**
    这段代码与上面相同
  **/ 

  const hasPermission = validatePermission(action, resource, system, user, policies);
  const validateContextualRule = contextualActionRules[resource?.__typename]?.[action];

  if (validateContextualRule) {
    const contextualActionAllowed = validateContextualRule(state, resource);
    return hasPermission && contextualActionAllowed;
  }

  return hasPermission;
};
```

上面代码中有一个非常明确需要更改的地方。猜猜是什么？

`usePermission` **对基于应用状态的上下文验证有何益处？** 因为钩子订阅了应用状态！所以，当某些事情发生改变——比如输入评论框时——钩子会重新渲染。由于评论组件依赖于这个钩子来控制评论按钮的状态，钩子的任何更新也会触发组件的重新渲染。这意味着，当你输入内容时，按钮会变得可见，而当内容被清除时，按钮会被禁用。

但我们不希望 `usePermission` 钩子在每次应用状态更改时都重新渲染。让我们来修复它。

在 `usePermission` 钩子之外定义 `resourceToStateMap` 以避免每次调用时的冗余重新创建。`useSelector` 根据资源类型和 ID 仅订阅相关的状态切片。

```
// 不好的做法：这样子
const state = useSelector((state: RootState) => state);

// 好的做法：这样
const resourceToStateMap: Record<string, (state: RootState, id: string | number) => any> = {
  Post:     (state, id) => state.posts[id],
  Comment:  (state, id) => state.comments[id],
  User:     (state, id) => state.user,
  // 添加更多 
};

const resourceType = resource?.__typename;
const resourceId = resource?.id;
const stateSlice = useSelector((state: RootState) => {
  if (resourceType && resourceId && resourceToStateMap[resourceType]) {
    return resourceToStateMap[resourceType](state, resourceId);
  }

  return null;
});
```

这就是为什么让选择器尽可能精细化是很重要的。

-   **避免过度获取**：你不再选择整个状态，只是获取评价权限和上下文规则所需的部分。这在大型应用中效率更高。
    
-   **优化重新渲染**：通过精细化的状态选择，只有相关的状态切片会触发重新渲染，提高应用性能，尤其是在很多组件使用 `usePermission` 钩子时。
    

现在你已经完成权限验证逻辑的主要部分，让我们使其使用起来更简洁。

#### 步骤4：创建用于条件渲染的封装器

创建一个 `Can` 组件，使用 `usePermission` 钩子检查用户是否有权限对资源执行特定操作。如果授予权限，它会渲染 `children` 或将其作为函数调用（这将用于禁用按钮）。如果没有，则显示备用元素。

```
// Can.tsx

import { usePermission } from '../hooks/usePermission';

export interface CanProps {
  I: Action;
  a: Resource;
  context: System;
  fallback?: React.ReactNode; 
  children: React.ReactNode | ((allowed: boolean) => React.ReactNode); 
}

const Can: React.FC<CanProps> = ({
  I,
  a,
  context,
  fallback = null,
  children,
}) => {
  const hasPermission = usePermission(I, a, context);

  // 如果 `children` 是一个函数，用 `hasPermission` 调用它
  if (typeof children === 'function') {
    return <>{children(hasPermission)}</>;
  }

  // 否则，渲染子节点或备用节点
  if (hasPermission) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

export default Can;
```

### 策略执行

你可以使用 `usePermission` 钩子进行编程检查，也可以使用 `Can` 组件进行条件渲染。

**1. 使用** `Can` **来隐藏/显示组件**

```
<Can
  I="approve"
  a={post}
  context={system}
  fallback={<p>你无权删除评论。</p>}
>
  <YourComponent />
</Can>
```

**2. 使用** `Can` **来禁用组件**

```
<Can
  I="delete"
  a={comment}
  context={system}
>
  {(allowed) => (
     <button onClick={deleteComment} disabled={!allowed}>
       删除评论
     </button>
   )}
</Can>
```

**3. 使用** `usePermission` **来创建受保护的路由**

```
// ProtectedRoute.tsx

import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  const hasPermission = usePermission("view", user, context);

  return hasPermission ? <Outlet /> : <Navigate to='/login' />
}

// 路由设置
<Route element={<ProtectedRoute />}>
  <Route path='/' element={<Admin />} />
</Route>
```

**4. 使用** `usePermission` **来跳过 API 调用**

```
const hasPermission = usePermission("view", user, context);

const { data: user, isLoading: isUserLoading, isError: isUserError } = useUserQuery({
    skip: !hasPermission,
});
```
```

## 让我们总结一下

在本手册中，您学习了如何通过 CASL 和自定义解决方案来实现可扩展的访问控制。我们首先深入探讨了不同的访问控制模型，重点关注 ABAC，并探索了两种强制执行基于 ABAC 的规则的方法。

使用 CASL，您看到了如何简单地定义用户能力，无论是使用共享库还是外部权限。我们演示了如何为各种用户操作设置访问控制，并且代码清晰且易读。您还学习了如何添加高级功能，如动态条件和字段级别访问，以实现更细粒度的控制。

另一方面，您也学习了如何构建一个针对您的应用程序特定需求的自定义权限框架。您将基于上下文的状态检查与基于策略的规则相结合，创建了一个灵活且可扩展的访问控制系统。在这个过程中，您探索了如代码即策略（Policy as Code）、CEL（通用表达式语言）、自定义钩子、缓存以及使用 RTK 查询进行条件获取等概念。您还看到了如何在组件、受保护路由等上强制实施访问控制。

这两种方法共享一些关键优势：

- **动态且可扩展**：添加新的操作或实体就像更新单个文件一样简单，无需代码重写。
  
- **关注点分离**：使验证逻辑与 UI 组件分离，这使得代码更易于维护。
  
- **可读性**：您可以使用简单的对话语言定义权限，如“_我能阅读这篇文章吗？_”或“_我能创建评论吗？_”
  
- **可重用组件**：您可以在应用程序中重用包装组件和钩子，以减少重复。
  
- **状态反应性**：可无缝结合 React 状态，确保您的访问控制规则动态地反映在 UI 中。
  

### **进一步的扩展考虑**

如果您的策略负载过于庞大或验证逻辑计算成本高昂，请考虑以下优化：

- **记忆化输出**：使用 `useMemo` 来缓存高昂计算结果，但请注意，`useMemo` 本身在过度使用时可能也很高成本。
  
- **模块化策略**：根据领域将策略拆分成独立文件。在启动时仅获取必要的策略，并按需加载非必要的策略。
  
- **将验证移至后端**：将策略验证逻辑移至后端，并考虑服务器端渲染。但请记住，某些动态检查仍需在前端进行。
  

别忘了也要在后端实施访问控制，并在将数据发送给客户端之前筛除敏感数据！

## 结论

无论您是选择 CASL 以其简洁性和强大功能，还是为了更大的灵活性而实现自己的自定义解决方案，现在您拥有了将访问控制集成到 React 应用程序中的工具和知识，确保您的用户只能访问他们被授权的内容。

如果您喜欢阅读这篇文章（即使您不喜欢；）），欢迎在 [LinkedIn][32] 上给我留言反馈。

享受编码乐趣，愿您应用程序的权限如同您的用户基数一样可扩展！

[1]: #heading-what-is-access-control-how-is-it-different-from-authz-authn-and-permissions
[2]: #heading-multi-layered-access-control
[3]: #heading-hogwarts-in-harmony-a-unified-defense
[4]: #heading-access-control-models
[5]: #heading-why-abac
[6]: #heading-attribute-based-access-control-in-depth
[7]: #heading-core-components
[8]: #heading-how-does-abac-work
[9]: #heading-who-defines-abac-policies
[10]: #heading-where-should-you-enforce-it-back-end-or-front-end
[11]: #heading-where-are-policies-defined
[12]: #heading-1-implementing-permissions-with-casl
[13]: #heading-2-build-your-custom-permissions-validation-framework
[14]: #heading-policy-definition-using-policy-as-code
[15]: #heading-workflow-overview
[16]: #heading-policy-validation
[17]: #heading-policy-enforcement
[18]: #heading-lets-summarize
[19]: #heading-further-scaling-considerations
[20]: #heading-conclusion
[21]: https://en.wikipedia.org/wiki/OWASP
[22]: https://www.optiq.ai/blog-post/what-is-attribute-based-access-control-explained
[23]: https://casl.js.org/v6/en
[24]: https://casl.js.org/v6/en/package/casl-angular
[25]: https://casl.js.org/v6/en/package/casl-vue
[26]: https://casl.js.org/v6/en/package/casl-aurelia
[27]: https://www.mongodb.com/docs/manual/reference/operator/query/
[28]: https://react.dev/reference/react/createContext
[29]: https://casl.js.org/v6/en/guide/intro
[30]: https://owasp.org/www-community/attacks/Direct_Dynamic_Code_Evaluation_Eval%20Injection
[31]: https://stackblitz.com/edit/github-b9k23yjf-kbho9jtj?file=demo.ts
[32]: https://www.linkedin.com/in/samhitharamaprasad/

