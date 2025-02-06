```markdown
---
title: 如何为您的 Web 应用构建可扩展的访问控制 [完整手册]
date: 2025-02-06T14:39:11.088Z
author: Samhitha Rama Prasad
authorURL: https://www.freecodecamp.org/news/author/samhitharamaprasad/
originalURL: https://www.freecodecamp.org/news/how-to-build-scalable-access-control-for-your-web-app/
posteditor: ""
proofreader: ""
---

访问控制对于防止未经授权的访问以及确保只有合适的人才能访问您的应用中的敏感数据至关重要。随着您的应用复杂度的增加，以一种清晰和高效的方式实施权限的挑战也在增加。

<!-- more -->

在本手册中，我们将探讨各种访问控制机制，并研究如何在 React 中构建可扩展的基于属性的访问控制解决方案的两种方法。

首先，我们将研究 CASL，这是一个流行的开源授权库。然后，我们将从头开始构建一个自定义解决方案，以加深您对如何设计灵活的权限验证系统的理解。

本指南包括对两种方法的详细代码演练，涵盖了关键概念，如状态管理、自定义钩子和使用 Redux Toolkit 的缓存/条件查询。

如果您计划实现这些代码，您应该对使用状态管理的 Web 应用有基本的了解。但即使您不打算编写代码，您仍然可以获得关于创建强健权限验证系统的设计模式和最佳实践的宝贵见解。

让我们开始吧！

## 目录

-   [什么是访问控制？它与 AuthZ、AuthN 和权限有何不同？][1]
    
-   [多层次访问控制][2]
    
    -   [哈利波特的统一防护][3]
-   [访问控制模型][4]
    
-   [为什么选择 ABAC？][5]
    
-   [深入了解基于属性的访问控制][6]
    
    -   [核心组件][7]
        
    -   [ABAC 如何工作？][8]
        
    -   [谁定义 ABAC 策略？][9]
        
    -   [应该在后端还是前端实施？][10]
        
    -   [策略在哪里定义？][11]
        
-   [1: 使用 CASL 实现权限][12]
    
-   [2: 构建自定义的权限验证框架][13]
    
    -   [使用政策作为代码的政策定义][14]
        
    -   [工作流程概述][15]
        
    -   [政策验证][16]
        
    -   [政策执行][17]
        
-   [总结][18]
    
    -   [进一步的扩展考虑][19]
-   [结论][20]
    

## 什么是访问控制？它与 AuthZ、AuthN 和权限有何不同？

让我用机场的例子来解释这些术语。

当您到达值机柜台时，您会出示护照以验证您的身份。**认证**（你是谁？）是确认您身份的过程。

一旦确认了您的身份，航空公司会通过核实您的机票，或者通过审查您的会员身份、旅行舱位或忠诚度计划等级，检查您是否有权登机，或有权使用贵宾休息室。**授权**（你被允许做什么？）是确定您可以访问哪些特定资源的过程。

**权限**（你可以执行哪些具体操作？）是您在授权范围内被允许做的具体操作的详细信息。如果您被授权登机和进入贵宾休息室，您的权限可能包括：在登机口就座、在休息室放松、在免税店购物，或者如果您是工作人员，可以访问限制区域。

**访问控制**是指执行授权策略的措施。这些是机场用来验证登机牌或贵宾休息室访问权限的规则，并引导您前往正确登机口。

## 多层次访问控制

为了确保全面保护，根据您的应用程序架构，应在多个层次上实施访问控制。

为便于理解，以下是对我的同伙 Potter 粉丝的一个小例子：

### 哈利波特的统一防护

在霍格沃茨的边缘，您有您的周边——防止黑暗势力入侵的外部防御。把这些想象成围绕城堡的高水平 _魔法石墙_——就像一个防火墙，墙头上坐着带翅膀的野猪雕像，守望着远方。只有那些具备正确通行证的人才能通过大门，确保没有像黑巫师这样的不速之客可以进入。

当学生到达霍格沃茨时，他们乘坐 _船或由夜骑马拉的马车_，这些是唯一受信任的交通工具。这就像 **端点检测和响应（EDR）**，确保只有正确的设备（或马车）被允许进入。

如果一个学生尝试使用不合规的设备（如 _被诅咒的扫帚或幻影显形_），他们将不被允许进入。**移动设备管理（MDM）** 就像魔法检查过程——只有符合霍格沃茨标准的设备才能通过大门并连接到学校的系统。

在霍格沃茨，_猫头鹰_是学校和外部世界之间的可信使者。这些猫头鹰，如 API 密钥和 JWT，携带批准的印章，仅向正确的接受者传递消息。像 _摄魂怪_ 这样的黑暗生物被禁止传递消息，确保只有正确的通信能够通过。
```

在城堡内，进入不同区域的权限是由你在霍格沃茨的身份和角色决定的。例如，**基于角色的访问控制（Role-Based Access Control, RBAC）** 确保只有 _格兰芬多_ 学生可以进入他们的公共休息室，而 _斯莱特林_ 则有他们自己的公共休息室。_级长_ 拥有额外的特权，比如可以进入级长浴室或其他特殊房间。这些角色定义了你在城堡内可以去哪里以及可以做什么。

但使用 **基于属性的访问控制（Attribute-Based Access Control, ABAC）** 情况会更加微妙。例如，只有注册了 _神奇动物饲养学_ 的学生才能进入禁林，并且只能在白天的时候进去，因为那时更安全。森林在夜晚太危险，只有拥有正确属性（如特定时间表）的人才能在正确的时间进入。

在霍格沃茨内，有一块被强大魔法保护的密室隐藏着的 _魔法石_。这就是你的数据层——最珍贵的资源，受到强大保护的保障。就像数据库权限一样，这个密室由三头犬路威、一系列魔法和陷阱保护。同样，行级和列级安全措施确保只有哈利·波特能够拿到魔法石，因为他是唯一值得的人（你只能访问你所属的部分）。

总结来说，

1.  **网络层（基础设施级别）：** 使用防火墙和虚拟专用网络（VPN）来控制入站和出站网络流量。
    
2.  **终端层（设备级别）：** 终端检测与响应（EDR）和移动设备管理（MDM）保证只有符合要求的设备才能访问你的应用。
    
3.  **API 层（服务级别）：** 使用 API 密钥、JSON Web Tokens（JWTs），以及 API 网关来进行调用者的认证和授权，并强制执行诸如速率限制、IP 白名单等策略。
    
4.  **应用层：** 授权核心业务逻辑通常所在之地（也是本指南的重点）。
    
5.  **数据层（数据库级别）：** 数据库权限，行/列级安全。
    

## 访问控制模型

在应用层，软件工程中常用的三种主要访问控制模型是：基于角色的访问控制（Role-Based Access Control, RBAC）、基于属性的访问控制（Attribute-Based Access Control, ABAC），以及更新的基于关系的访问控制（Relationship-Based Access Control, ReBAC）。

**RBAC** （基于角色的访问控制）是一种基于分配给用户的角色进行访问授权或拒绝的模型。

角色是一个权限或特权的集合，定义了用户在系统内可以执行的操作。通过为用户分配预定义的角色，而不是为每个用户管理单独的权限，角色简化了访问控制。

当用户被分配一个角色时，他们会自动继承该角色相关的所有权限。每个权限也有一个范围，定义了角色权限适用的边界或上下文。范围通常用于限制对特定资源或数据的访问。

让我通过一个博客应用程序来说明这一点（以及本指南中的所有概念）。这个应用允许用户在多个类别中创建、管理和发布博客文章。它支持多种用户角色，每种角色对于平台内的内容和功能访问有不同级别。

-   **管理员**：可以查看、编辑、删除和管理所有博客文章和用户角色。（范围：所有文章和用户）
    
-   **编辑**：可以编辑和批准他们被分配类别中的文章（如科技、生活方式）。（范围：分配的类别）
    
-   **作者**：只能创建和编辑自己的博客文章。（范围：自己的文章）
    
-   **访客用户**：可以查看公共发布的博客文章，但不能访问私密文章。（范围：仅公共发布的文章）
    

用户和角色之间的关系往往是多对多的，角色也可以是分层的，允许复杂的权限结构。

![基于角色的访问控制图](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780482515/e30316f8-58a9-4595-81ba-8eb08b2d5a3d.jpeg)

**ABAC** （基于属性的访问控制）是一种基于主体（用户）、客体（资源）和环境属性进行访问决策的模型。它根据这些属性和管理它们的策略动态评估一个主体是否可以对一个客体执行某项操作。

**ReBAC** （基于关系的访问控制）是一种新兴的模型，它基于用户与资源之间的关系授权访问。例如，它可能只允许创建某帖子的用户编辑它。此模型在社交网络应用中尤为有用，因为访问取决于用户关系（如朋友、关注者或内容拥有者）。

## 为什么选择 ABAC？

RBAC 提供了多个好处，包括易于实施，通过快速引导新用户减少管理开销，以及简化审计，因为它使得审查哪些角色有权访问敏感数据变得容易。

但是，随着平台的增长，你会引入更多细微的访问控制需求。这些新需求导致创建新的角色来满足特定的访问需求：


在不久的将来，你可能会发现自己需要管理一个不断增长的角色列表，比如高级发布者、发布主管、访客用户、订阅者、高级订阅者、平面设计师、用户体验设计师、摄影师、社交媒体经理、美国市场专家、英国市场专家、Web开发人员、数据分析师、会员经理、广告经理、法律顾问和赞助商经理。

引入额外的需求，比如博客类别、资历和管辖权，很快就会导致角色爆炸。想象一下，这在像金融或医疗保健这样的数据密集型企业应用程序中如何扩展。

虽然当边界清晰且静态（例如部门、博客类型）时，范围很有效，但它们需要对更细化的属性（如资历、服务年限、博客创建时间或发布状态）进行自定义检查。范围也难以考虑随时间变化的属性，如访问的地点或时间。

因为基于角色的访问控制（RBAC）依赖于角色和固定范围来做出访问决策，所以在处理复杂和动态的访问需求时变得有限。这就是为什么，[**OWASP**（开放全球应用程序安全项目）建议使用 **ABAC** 或 **ReBAC** 而不是 RBAC][21]，因为它们在实施最小特权原则方面更有效。

## 深入解读基于属性的访问控制

### 核心组件

ABAC 的核心组件是：

**属性**：属性是用于定义访问上下文的键值对。示例包括：

-   **用户属性**：这些属性描述请求访问的人的特征，如角色、部门、年龄、许可级别等。💡正如你所见，角色可以是基于此进行访问控制决策的属性之一。因此，ABAC 本质上是 RBAC 的扩展。
    
-   **资源属性**：这些属性描述被访问资源（如文件、数据库或服务）的特征。例如，所有者、类别、状态等。
    
-   **动作属性**：这些定义用户对资源请求的动作。例如，`读取`访问如查看/打开，`写入`访问如创建/修改/删除，`执行`访问如处理/运行等。
    
-   **环境属性**：这些包括影响决策过程的上下文元素，如`时间`或`地点`。
    

**策略**：策略是定义哪些属性组合允许或拒绝访问的逻辑规则或声明。例如，在办公室时间，发布者可以在指定类别中发布已批准的帖子。

### ABAC 如何工作？

让我们以我们博客的发布者 Sam 为例。Sam 被授权发布已被编辑批准的帖子，但只能在她被分配的类别中，如“科技”、“生活方式”和“健康”。她只能在特定时间内发布这些帖子，比如上午9点到下午6点。

Sam 的发布者角色和她的分配类别是在她加入团队时设定的。这里的资源是帖子，它在创建时被赋予一个类别。她可以执行的动作是发布，该行为的环境条件是必须在办公时间内。

因为访问控制规则是基于 Sam 的属性——她的发布者角色和她被分配的类别——所以她可以在这些类别中发布帖子。如果她的任何属性发生变化，比如她转到不同的部门，如会员管理，或者她的分配类别变为“时尚”或“旅游”，她的访问权限将自动撤销。

> _ABAC 允许管理员设置访问控制，而无需知道具体谁需要访问。当新成员加入组织时，无需修改现有规则或对象属性；只要他们拥有必要的属性，就可以访问所需资源。这种在不进行额外调整的情况下，自动适应新用户和难以预料的用户的能力是使用 ABAC 的一大优势_。（来源：\[22\]）

### 谁来定义 ABAC 策略？

1.  **身份和访问管理管理员**：
    
    在许多组织中，安全管理员或访问控制管理员定义 ABAC 策略。他们的责任包括分析业务需求、风险管理、合规管理，确保用户拥有正确级别的资源访问权限。他们根据组织特定的不同属性和条件，将安全要求转化为策略。
    
2.  **业务和资源经理**：
    
    在某些情况下，业务部门或部门经理也可能参与定义策略。他们了解运营需求，并且最能指出数据应如何被其团队访问。
    
    例如，会员经理可能会定义控制谁可以根据订阅状态、用户角色或会员级别（如订阅者、高级订阅者）访问高级博客帖子的策略。
    

### **应在后端还是前端强制执行？**

访问控制策略应在**前端和后端**均进行强制执行。原因如下：

- **即时反馈**：当你在前端执行 ABAC 策略时，可以根据用户属性立即显示或隐藏元素（例如按钮、链接或菜单）。这样可以使界面更简洁，并帮助用户立即理解他们能做或不能做的事情。

- **更智能的用户界面**：你可以防止显示用户不该看到的选项。例如，如果用户没有正确的角色或权限，则隐藏某些功能。这使得用户界面感觉更直观和响应更灵敏。

- **减少服务器负载**：通过在前端执行某些访问限制，可以减少对后端的不必要请求，提升应用性能，并减轻服务器负担。

- **安全层**：虽然前端不是敏感数据应该存储的地方，但你仍然可以通过使用它在请求发送到后端**之前**过滤掉无效的操作或内容来增加一层安全性。例如，你可以根据用户属性隐藏敏感的用户界面元素（如管理控制）或禁用按钮，使未经授权用户更难试图触发某些操作。

**2.** **后端执行**

- **绕过风险**：仅依赖前端的缺点是用户可以轻松**绕过**它。通过使用合适的工具，他们可以操控前端代码或网络请求（使用浏览器开发工具或 API 代理）。这就是后端执行至关重要的原因——它确保访问规则在服务器端得到应用，无法被篡改。

- **保护敏感数据**：后端是敏感数据存储和处理的地方。通过在服务器上执行 ABAC 策略，你可以确保未经授权的用户无法访问、修改甚至查看敏感信息。为了避免数据泄露，你应该始终根据用户权限过滤掉敏感内容，并仅将相关内容发送给客户端。

既然你知道需要在前端和后端同时执行 ABAC 策略，接下来的问题是：**在哪里定义这些策略？**

作为开发人员，你可能会想：“_如果我知道安全团队定义的策略，我就可以将它们翻译成前端和后端的代码。_”

例如，如果策略规定只有高级作者可以批准特定类别的博客，你可能会编写如下代码：

**前端示例（简化版）**：

```markdown
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  showApprovalDashboard();
} else {
  hideApprovalDashboard();
}
```

**后端示例（简化版）**：

```markdown
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  return res.send(approvalDashboardData);
} else {
  return res.status(403).send('Forbidden: You do not have approval access for this category.');
}
```

但是，如何在你的应用程序的两个层次间确保策略一致性而不重复逻辑呢？

如果需要为此策略添加额外的条件，比如考虑其他用户属性或将权限与功能标识结合起来，以条件方式为特定用户启用某些功能，该怎么办？

而且，如果你的需求因用户而异呢，比如：

-   仅对具有高级订阅的用户显示某些 UI 元素，

-   基于特定属性阻止社交媒体经理的 API 调用，

-   或对非管理员用户隐藏整个路由？

如果没有一个结构化的方法，你的应用程序就会变成一个充满 if-else 语句的复杂代码库。

请继续阅读以找到这些问题的答案！

### 策略在哪里定义？

在我们深入了解实现细节之前，让我简要回顾一下前一节中的问题：策略应该在哪里定义？

当有多种方式访问服务时——无论是通过移动应用程序、Web 应用程序还是其他平台——后端应该作为策略定义的真实性来源。在后端定义 ABAC 策略可以确保所有平台的一致性和安全性。这意味着所有客户端都以相同的规则进行交互，从而减少了策略差异的可能性。

因此，后端是所有策略定义的所在，并在需要时将其提供给前端。前端然后在用户界面上执行这些决策。但不要忘记，后端也应该始终执行这些策略。

在接下来的章节中，你将学习两种实现 ABAC 访问控制模型的方法。

## 1: 使用 CASL 实现权限

[CASL][23] 是一个开源的、同构的 JavaScript 库，它通过简单、声明式的 API 使管理应用程序中的权限更加简单。

这意味着你可以在客户端（前端）和服务器端（后端）同时使用 CASL。这对全栈应用程序来说尤其棒，因为它能确保访问控制的一致性。无论请求来自何处，相同的权限逻辑都能被应用到整个应用程序中。

这部分最棒的是什么？你可以使用清晰、富有表现力的语法来定义权限。这使得管理复杂权限规则变得简单。比如，你可以基于用户的角色、其拥有的资源以及其他因素来控制用户可以（或不可以）做什么。

而且这不仅仅适用于 React/React Native —— 他们还为 [Angular][24]、[Vue][25] 和 [Aurelia][26] 提供了支持包。

### 第一步：安装 CASL

首先，使用包管理器安装 CASL。我在代码示例中使用的是 v6。

```
npm install @casl/react @casl/ability
# 或
yarn add @casl/react @casl/ability
# 或
pnpm add @casl/react @casl/ability
```

### 第二步：定义能力

在 CASL 中，将“能力”视为一组规则，这些规则定义了用户在特定受众（比如“Posts”或“Users”）上可以或不可以执行的操作。让我们使用博客应用中的一些示例。为简单起见，我们将考虑两种类型的用户：**管理员** 和 **作者**。

-   管理员可以管理一切。
    
-   作者可以在指定类别中创建和编辑他们自己的帖子，但不能删除已发布的帖子。
    

现在，创建一个 `defineAbilities.ts` 文件，使用 DSL 以高级声明式方式定义能力。

首先定义用户可以执行的 `Actions`（例如，`create`，`read`，`update`，`delete`，`manage`）和 `Subjects`（执行动作的实体，例如 `‘User’`，`‘Post‘`，或诸如 `User` 或 `Post` 之类的对象）。

```typescript
//defineAbilities.ts

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | User | Post;
```

接下来，创建一个表示您能力结构的类型。它结合了 `Actions` 和 `Subjects`，以创建一个清晰且类型安全的能力系统。

`PureAbility<[Actions, Subjects]>` 的意思是能力系统将知道哪些动作在哪些主题上是允许的。`createAppAbility` 函数用于基于您定义的动作和主题创建一个能力实例。你可以使用此函数为用户的角色或权限创建特定的能力。

```typescript
//defineAbilities.ts

import { CreateAbility, PureAbility, AbilityBuilder, createMongoAbility } from '@casl/ability';
// 其他导入

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | Post | User;

export type AppAbility = PureAbility<[Actions, Subjects]>;
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;
```

注意，`createMongoAbility` 仅用于支持 [MongoDB 查询语言][27] 的简单操作符，比如 $in、$lte、$eq，它们用于为您的规则指定条件。别担心 —— 这并不意味着您的应用程序必须使用 MongoDB，也不需要熟悉查询语言。您也可以完全跳过这些，创建自定义操作符。

接下来，定义一个名为 `defineAbilityFor` 的函数，它以 `user` 对象作为参数并返回一个能力实例。`user` 对象应有一个表示用户权限的 `role` 属性（例如 'admin' 或 'author'）。

`userPermissions` 对象将每个用户映射到一个函数，使用 `AbilityBuilder` 提供的 `can` 和 `cannot` 方法定义其权限。这种方法相比增加更多角色时，比使用 switch 案例扩展性更好。

```typescript
//defineAbilities.ts

export default function defineAbilityFor(user: User) {
  const { can, cannot, build } = new AbilityBuilder(createAppAbility);
   const userPermissions = {
    admin: () => {
      // 管理员可以管理一切
      can('manage', 'all');
    },
    author: () => {
      // 作者可以创建帖子，但不能删除它们
      can('create', 'Post');
      cannot('delete', 'Post');
    },
    // 添加更多角色
  };

  // 调用与用户关联的权限，或默认无权限。
  const permissions = userPermissions[user.role] || (() => {});
  permissions(); 

  return build();
}
```

注意：`manage` 和 `all` 是 CASL 中的关键词，其中 manage 意味着任何动作，all 意味着任何主题。

要指定条件以防止用户更新他们没有创建的帖子、删除已发布的帖子，以及限制对某些字段的访问，您可以使用 **条件** 和 **字段**。CASL 允许您通过 `subject` 属性（表示对象）和 `fields` 属性（表示用户与之交互的对象属性）在权限上设置特定条件。

将条件规则添加到上述文件。

```typescript
   author: () => {
      // 作者可以在 'Tech' 和 'Lifestyle' 类别中创建帖子
      can('create', 'Post', { category: { $in: ['Tech', 'Lifestyle'] } });

      // 作者可以更新他们创建的帖子中的标题和描述
      can('update', 'Post', ['title', 'description'], { ownerId: user.id, status: 'draft' });

      // 作者无法删除具有 'Published' 状态的帖子
      cannot('delete', 'Post', { status: 'published' });
    },
```

在 CASL 中，直接规则（如 `can`）用 `OR` 组合，反转规则（如 `cannot`）和条件用 `AND` 组合。作者：

记住，对于相同的动作/主题配对，你应该在 `can` 规则之后定义 `cannot` 规则，否则它们将被覆盖。

在处理包含嵌套 `details` 字段的 `Post` 对象时（例如，`details.author.name`，`details.metadata.tags`），你可以使用 `*` 和 `**` 通配符根据嵌套级别来控制访问。

-   `*` 通配符只匹配给定对象中的**顶级字段**。
    
    这意味着它将授予对直接在 `details` 对象内部的字段的访问权限，但不包括任何**嵌套字段**。
    
-   `**` 通配符允许访问对象内的**所有字段**，包括深层嵌套的字段。
    
    这意味着它将授予 `details` 内每个字段的访问权限，无论嵌套有多深。
    

```
// 允许访问无论多深层嵌套在 Post.details 下的所有字段
can('read', 'Post', ['details.**']) 

// 仅允许访问顶层字段（例如 details.body, details.author）
can('read', 'Post', ['details.*'])
```

注意，`*` 匹配除点 (`.`) 以外的所有符号

`defineAbilities.ts` 中的能力实例可用于在整个应用中实施权限。这个文件可以作为一个共享库，这样前端（例如：React）和后端（例如：Node.js）都可以访问并使用相同的权限逻辑。

虽然 `AbilityBuilder` 适用于在系统内部定义的权限，但如果你的应用接收到以 JSON 对象格式定义的外部权限，如：

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

你可以直接将其传递到 `Ability` 构造函数中，如下所示：

```
  const defineAbilityFor = (permissions: (SubjectRawRule<any, any, MongoQuery<AnyObject>>)[]) => {
    return createMongoAbility<[Actions, Subjects]>(permissions);
  }

  export default defineAbilityFor;
```

使用 JSON 定义规则还有一个额外的优点，就是**减小你的应用的包大小**，因为你不需要包含像 `AbilityBuilder` 这样的重量级依赖！

### **步骤 3：为用户创建能力实例**

通过登录或身份验证服务成功认证后，你需要将用户数据或相关权限（取决于步骤 2 中选择的方式）提取到应用中，并在登录组件（或类似组件）中创建一个能力实例，如下所示：

```
// login.tsx

import defineAbiltyFor from './config/defineAbilities.js'

const LoginComponent = () => {
    // 从 API 获取用户数据。然后，
    const ability = defineAbilityFor(user)
}
```

### **步骤 4：为整个应用提供能力实例**

[Contexts][28] 在 React 中用于在组件之间共享数据，而不必通过组件树层层传递属性。将以下代码添加到 `can.ts` 文件中：

```
// can.ts

import {createContext} from 'react'
import {createContextualCan} from '@casl/react'

export const AbilityContext = createContext()
export const Can = createContextualCan(AbilityContext.Consumer)
```

这会创建一个 `Can` 组件，你将在下一步中使用它来确定用户是否有权限执行某个动作，基于通过 `AbilityContext` 传递的能力。

接下来，使用上述 `AbilityContext` 包裹你的 `App` 组件，并将步骤 3 中创建的 `ability` 实例作为 `value` 设置，从而使得应用中的所有组件都可以访问这些能力。

```
ReactDOM.render(
<AbilityContext.Provider value={ability}>
  <App />
</AbilityContext.Provider>,
  document.getElementById('root')
)
```

### **步骤 5：使用能力检查用户权限**

有两种方法来确定用户是否有权限执行某个动作：使用 `ability.can` 进行编程检查，以及使用 `Can` 组件进行条件渲染。

假设这是你的 post 对象：

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

`ability.can` 和 `Can` 组件都接收动作、主题以及一个可选字段，并根据定义的能力检查这些参数。

```
// user-profile.tsx

import { useAbility } from '@casl/react';
import { subject } from '@casl/ability';
import { AbilityContext, Can } from '../config/can';
// 其他引入

export default const UserProfile = () => {
  const ability = useAbility(AbilityContext);

  const canCreatePost = ability.can('create', 'Post'); //==== 示例 (1) ====
  const canDeletePost = ability.can('delete', post); //==== 示例 (2) ====

  return (
    <div>
      <h1>用户资料</h1>

      {/* ==== 示例 (3) ==== */}
      <Can I="delete" a="Post">
        <p>你可以删除帖子。</p>
      </Can>

      {/* ==== 示例 (4) ==== */}
      <Can I="delete" this={subject('Post', post)}>
        {(allowed) =>
          allowed ? <button disabled={!allowed}>删除帖子</button> 
          : <p>无法删除帖子。</p>
        }
      </Can>
    </div>
  );
}
```

现在来看这四个例子。

例子 `(1)` 返回 true，因为用户可以创建帖子。

例子 `(2)` 应该返回 true，因为你可以删除你发布的帖子，**但它返回了** **false**。为什么呢？因为即使 `post` 是 `Post` 的一个实例，CASL 无法检测其主体类型（即 `post` 对象的类型），因为 CASL 使用 `object.constructor.modelName` 或 `object.constructor.name` 进行主体类型检测。

你有两种方法可以修正这个问题。

- 使用一个 `subject` 辅助函数来指定 `post` 实例的类型，如例子 `(4)` 所示（它返回 true）

- 使用自定义的主体类型检测算法来说明 CASL 需要使用哪个属性来识别类型。这可以通过 `detectSubjectType` 完成，如下所示：

  ```
    // defineAbilities.ts

    export default function defineAbilityFor(user: User) {
      const { can, cannot, build } = new AbilityBuilder(createAppAbility);
      // 按上述说明定义的规则

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

现在，例子 `(2)` 应该返回 true。

接下来，来看例子 `(3)`。它也返回 true，因为检查的是主体_类型_而不是主体。记住，当你在检查一个

> -   主体时，你问“我可以删除这个帖子吗？”
>     
> -   主体类型时，你问“我可以删除某个文章吗？”（即，至少有一个帖子） ([来源][29])
>     

尽管 CASL 提供了一个强大的方法来实现细粒度的访问控制，但它并不能直接解决我们需要根据用户属性应用条件的问题。

虽然第三方库可以提供便利，但它们的文档有时不清晰、过时或不准确，并且组件本身可能存在漏洞。为了完全控制你的安全流程，实现自定义的授权逻辑可能是必要的。

## 2: 构建自定义权限验证框架

为了构建一个自定义验证框架，让我们来看看策略是如何定义、验证和执行的，并了解所有这些部分是如何结合在一起的。

### **使用代码策略定义策略**

你已经了解到你的访问控制策略应该驻留在后端。对于自定义实现，你将使用**代码策略**或 PaC。 这指的是使用代码或配置文件（例如 YAML、JSON 或 DSL）而不是手动过程或文档来定义和管理策略的做法。这样可以使策略进行版本控制、自动执行，并在动态环境中更加可靠。这些策略由安全管理员编写，并由策略服务管理。

在 YAML 中，你的策略可能如下所示，其中 `policies` 列表示为一个序列（`-`）。

```
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
  # 其他策略
```

**policyId** 是策略的唯一标识符。**resource** 指定策略应用的资源类型，比如 "Post"。**action** 定义在资源上允许或拒绝的操作，比如 "edit"。**effect** 确定操作是允许还是拒绝，其值可以是 "allow" 或 "deny"。**conditions** 表示必须满足以让策略生效的逻辑表达式，例如检查资源的所有者 ID 是否与用户的 ID 相匹配。

正如你所看到的，策略中的条件是使用类似 TypeScript 的、人类可读的格式编写的。这是因为它们是使用 Google 的**通用表达语法（CEL）**编写的。

CEL 是一种开源的、平台无关的语言，它执行用户自定义表达式时快速且安全（[不像 `eval()`][30]，尤其是在服务器端时）。由于 CEL 被一次编译成抽象语法树，然后用于评估针对多个输入进行快速验证，其性能得到了提升。

我们将结构重新定义如下：

```
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
  # 其他策略
```

原因如下：

1. **结构改进**：通过按资源和操作对策略进行分组，你让它更容易导航。添加新策略或操作变得非常简单，不会打乱整体设置。例如，如果你需要为 `Post` 资源添加一个 `archive` 操作，只需在 `Post` 对象下添加它即可。这种模块化方法使维护和扩展策略更加简单。

2. **高效查找**：当这些策略在你的应用中作为 JavaScript 对象访问时，查找既高效又快速（时间复杂度为 O(1)）。这是因为策略是使用直接键查找存储的，每个策略都可以通过其唯一键立即访问。与通过列表搜索不同（这需要 O(n) 时间），这种方式显著提升了性能。当策略数量增加时，你的查找时间保持不变，因此不会影响性能。

3. **更容易的审计和版本控制**：这种结构也使审计和版本控制更加顺畅。你可以轻松跟踪策略的变化，管理更新而不会意外地打乱其他策略。

💡

要了解 CEL 中字符串字面量在上述条件中的工作方式，请查看 [此处][31]的一些示例。

### 工作流程概述

当应用程序启动时，你使用 RTK Queries 从策略服务中获取策略，并自动将它们缓存到你的 RTK 缓存中。一旦用户通过认证，他们的数据（例如角色和部门）也将储存到缓存中。

为了在会话期间保留这些数据，你需要将其存储在会话存储中，但请注意避免存储敏感信息。为了权限验证，我们将直接从缓存中读取用户数据。

在需要策略执行的点，比如组件或路由中（称之为_策略执行点_），应用程序将调用自定义权限 Hook。这个 Hook 然后根据策略、用户、资源和环境属性验证权限，以便授予或拒绝请求的操作的访问权限。

![基于属性的访问控制工作流](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780571125/1dba1568-ee54-4bea-8d25-5c058fa6da68.jpeg)

### 策略验证

#### 第一步：创建权限验证器

首先在你的代码中定义 `Action`、`Resource` 和 `Policy` 的类型：

```markdown
导出类型 Action = "view" | "edit" | "create" | "approve" | "publish" | "delete";
导出类型 Resource = Partial<Post> | Partial<User> | Partial<Comment>;

导出类型 PolicyEffect = "allow" | "deny"

导出接口 Policy {
  policyId: string;
  resource: string;
  action: string;
  effect: PolicyEffect;
  conditions: string;
}
```

你可能会想为什么这里需要使用 `Partial`。通过使用 `Partial`，我们表示在执行某些操作时，`Post`、`User` 或 `Comment` 上的每个字段不是必需的。这在验证创建操作时特别有用，因为对象可能还没有完全形成——可能仍然缺少一些字段。例如，在创建一个新的 `Post` 时，你可能只有标题和内容，而没有完整的评论或标签列表。

然后，安装 `cel-js`，这是一个用于 JavaScript 的 CEL 评估器，用于你的验证器中。

```
npm i cel-js
```

创建一个 `validatePermission` 函数，从提供的 `policies` 对象中提取给定资源的操作规则，并构建一个包含 `user`、`resource` 和 `system` 信息的上下文。请注意，你可能需要使用 `__typename`（或类似的东西）进行资源类型检测，这与在 CASL 中所做的类似。

使用 `cel-js` 库，评估操作规则中指定的 `conditions`，这将检查用户是否满足执行操作所需的条件。如果条件满足，策略将"生效"，意味着根据定义的效果执行指定的操作——无论是允许还是拒绝操作。如果没有定义规则或在评估期间发生错误，默认拒绝。

```typescript
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

需要验证用户执行某个操作权限的任何组件都需要从缓存中获取策略并从全局状态中检索用户，同时还要管理加载和错误状态。

为了避免代码重复和封装上述操作的逻辑，你可以创建一个自定义钩子，为组件间的一致权限验证提供界面。

#### 第 2 步：创建自定义钩子以封装可重用逻辑

由于在应用启动时，策略已从策略管理服务获取，现在通过相同的 RTK Query 将直接从缓存中检索。请参考以下内容创建一个 `usePermission` 自定义钩子。

注意如何使用 `skip: !userId` 条件确保只有在存在有效 `userId` 的情况下才获取策略，以防止不必要的网络请求。

```typescript
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

#### 第 3 步：添加上下文动作验证

通常情况下，即使用户有执行某项操作的权限，他们仍可能因上下文业务逻辑而无法执行。例如：

- **帖子审批**：编辑可能有批准帖子的权限，但如果他在编辑帖子且有未保存的更改，批准按钮应该隐藏。

- **评论**：如果用户没有输入任何内容，评论按钮即使有权限也应该被禁用。

- **类别创建**：即使有权限，如果名称为空或已经存在，用户仍可能无法创建类别。

这些规则取决于当前应用程序的状态，需要动态处理。要处理这些上下文动作，验证规则应基于应用程序的当前状态定义（例如正在编辑的帖子、正在输入的内容、类别名称的可用性）。

在深入了解自定义钩子如何处理这些验证之前，我们先列出这些上下文操作的规则：

```typescript
// contextualRules.ts

import _ from 'lodash';
// 其他导入

const contextualActionRules = {
  Post: {
    approve: (state: PostState, resource: Resource) => {
      // 如果帖子当前正在编辑，阻止批准
      const postId = resource?.id;
      return postId && !state[postId]?.isEditing;
    },
  },
  Comment: {
    create: (state: CommentState, resource: Resource) => {
      // 如果评论内容为空，阻止创建评论
      return !_.isEmpty(resource?.content);
    },
  },
  Category: {
    create: (state: CategoryState[], resource: Resource) => {
      // 如果名称为空或已存在，阻止创建类别
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

```markdown
// usePermission.ts

export const usePermission = (action: Action, resource: Resource, system: System): boolean => {

  const state = useSelector((state: RootState) => state);

  /**
    这部分代码与上述代码相同
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

以上代码中有一点绝对需要修改。猜一猜是什么？

**`usePermission` 如何** **有利于基于应用状态的上下文验证？** 因为该 hook 订阅了应用程序状态！所以，当某些东西改变时——比如在评论框中输入内容——该 hook 就会重新渲染。由于 Comment 组件依赖此 hook 来控制评论按钮的状态，因此 hook 中的任何更新也会触发组件的重新渲染。这意味着，当您输入时，按钮变得可见，如果内容被清除，按钮将被禁用。

但是，我们不希望 `usePermission` hook 在每次应用状态改变时都重新渲染。让我们解决这个问题。

在 `usePermission` hook 之外定义 `resourceToStateMap`，以避免每次调用时的冗余重新创建。`useSelector` 仅根据资源类型和 ID 订阅相关的状态切片。

```javascript
// 反面示例：不要这样做，
const state = useSelector((state: RootState) => state);

// 正面示例：应该这样做
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

这就是为什么将选择器做得尽可能细粒度是很重要的。

-   **避免过度获取**：您不再选择整个状态，仅选择评估权限和上下文规则所需的部分。这在大型应用程序中效率要高得多。
    
-   **优化的重新渲染**：通过细粒度的状态选择，只有相关的状态部分会触发重新渲染，从而提高应用程序的性能，特别是在许多组件使用 `usePermission` hook 时。
    

现在您已经完成了大部分的权限验证逻辑，让我们让它使用起来更容易。

#### 步骤 4：创建一个用于条件渲染的包装器

创建一个 `Can` 组件，该组件检查用户是否有权使用 `usePermission` hook 在资源上执行特定操作。如果获得权限，则渲染 `children` 或将其作为函数调用并传入权限状态（这将用于禁用按钮）。如果没有，则显示一个回退元素。

```typescript
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

  // 如果 `children` 是一个函数，使用 `hasPermission` 调用它
  if (typeof children === 'function') {
    return <>{children(hasPermission)}</>;
  }

  // 否则，渲染 children 或 fallback
  if (hasPermission) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

export default Can;
```

### 策略执行

您可以使用 `usePermission` hook 用于编程检查，并使用 `Can` 组件进行条件渲染。

**1. 使用** `Can` **隐藏/显示组件**

```jsx
<Can
  I="approve"
  a={post}
  context={system}
  fallback={<p>您无权删除评论。</p>}
>
  <YourComponent />
</Can>
```

**2. 使用** `Can` **禁用组件**

```jsx
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

**3. 使用** `usePermission` **创建受保护的路由**

```typescript
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

**4. 使用** `usePermission` **跳过 API 请求**

```typescript
const hasPermission = usePermission("view", user, context);

const { data: user, isLoading: isUserLoading, isError: isUserError } = useUserQuery({
    skip: !hasPermission,
});
```
```

## 让我们总结一下

在本手册中，您学会了如何使用 CASL 和自定义解决方案来实现可扩展的访问控制。我们首先深入探讨了不同的访问控制模型，重点关注 ABAC，探索了两种实施基于 ABAC 规则的方法。

使用 CASL，您看到了定义用户权限的便捷，无论是使用共享库还是外部权限。我们逐步讲解了如何为各种用户操作设置访问控制，代码清晰且易读。您还学习了如何添加诸如动态条件和字段级访问等高级功能，以实现更细粒度的控制。

另一方面，您还学习了如何构建一种适合于应用特定需求的自定义权限框架。您结合了基于上下文状态的检查和基于策略的规则，创建了一个灵活且可扩展的访问控制系统。在此过程中，您探索了如“代码即策略”、CEL（通用表达语言）、自定义钩子、缓存、以及使用 RTK 查询的条件获取等概念。您还看到了如何在组件、受保护路由等上实施访问控制。

这两种方法共享一些关键的好处：

- **动态且可扩展**：添加新操作或实体只需更新一个文件——无需重写代码。
- **关注点分离**：将验证逻辑与 UI 组件分离，使代码更易于维护。
- **可读性强**：您可以使用简单的、对话式的语言定义权限，例如“_我能读这篇文章吗？_”或“_我能创建评论吗？_”
- **可重用组件**：可以在应用中重复使用包装组件和钩子，减少重复。
- **状态响应性**：与 React 状态无缝工作，确保您的访问控制规则动态反映在 UI 上。

### **进一步的扩展考虑**

如果您的策略负载繁重或验证逻辑计算成本高，请考虑以下优化：

- **记忆输出**：使用 `useMemo` 缓存高昂计算结果，但要注意过度使用 `useMemo` 也可能有成本。
- **模块化策略**：根据领域将策略分解成独立文件。启动时仅获取必要的策略，按需懒加载非必要策略。
- **将验证后台化**：将策略验证逻辑移动到后端，并考虑服务器端渲染。但请记住，一些动态检查仍需在前端进行。

别忘了在后端同样实施访问控制，并确保在将敏感数据发送给客户端之前对其进行过滤！

## 结论

无论您选择 CASL 的简便及强大，还是实施自定义解决方案以获得更大的灵活性，您现在都拥有了将访问控制集成到 React 应用中的工具和知识，从而确保用户只能访问他们授权的部分。

如果您喜欢这篇文章（即便您没喜欢；）），请在 [LinkedIn][32] 上给我留言反馈。

编程愉快，愿您的应用权限如您的用户群一样可扩展!

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

