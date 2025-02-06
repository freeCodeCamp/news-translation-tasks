---
title: 如何为您的 Web 应用程序构建可扩展的访问控制【完整手册】
date: 2025-02-06T14:07:36.706Z
author: Samhitha Rama Prasad
authorURL: https://www.freecodecamp.org/news/author/samhitharamaprasad/
originalURL: https://www.freecodecamp.org/news/how-to-build-scalable-access-control-for-your-web-app/
posteditor: ""
proofreader: ""
---

控制访问对于防止未经授权的访问并确保只有合适的人可以访问应用程序中的敏感数据至关重要。随着应用程序复杂性的增加，以简洁有效的方式实施权限的挑战也在增加。

<!-- more -->

在本手册中，我们将探讨各种访问控制机制，并介绍两种在 React 中构建可扩展的基于属性的访问控制解决方案的方法。

首先，我们将研究 CASL，一个流行的开源授权库。然后，我们将从头开始构建一个自定义解决方案，以加深您对如何设计灵活的权限验证系统的理解。

本指南包括对两种方法的详细代码演练，涵盖关键概念，如状态管理、自定义钩子以及使用 Redux Toolkit 进行缓存/条件查询。

如果您计划实现代码，您应该对使用状态管理的 web 应用程序的工作原理有基本的了解。但即使您不编写代码，您仍将获得有关创建强大权限验证系统背后的设计模式和最佳实践的宝贵见解。

让我们开始吧！

## 目录

-   [什么是访问控制？它与 AuthZ、AuthN 和权限有何不同？][1]
    
-   [多层次访问控制][2]
    
    -   [霍格沃茨和谐：统一防御][3]
-   [访问控制模型][4]
    
-   [为什么选择 ABAC？][5]
    
-   [深入了解基于属性的访问控制][6]
    
    -   [核心组件][7]
        
    -   [ABAC 如何工作？][8]
        
    -   [谁定义 ABAC 策略？][9]
        
    -   [您应在何处执行 ABAC——后端还是前端？][10]
        
    -   [策略在哪里定义？][11]
        
-   [1：使用 CASL 实现权限][12]
    
-   [2：构建自定义权限验证框架][13]
    
    -   [使用策略即代码定义策略][14]
        
    -   [工作流程概述][15]
        
    -   [策略验证][16]
        
    -   [策略实施][17]
        
-   [让我们总结一下][18]
    
    -   [进一步扩展的考虑][19]
-   [结论][20]
    

## 什么是访问控制？它与 AuthZ、AuthN 和权限有何不同？

让我用机场的例子来解释这些术语。

当您到达值机柜台时，您会出示护照以验证您的身份。**身份验证**（你是谁？）是确认您是您所说的人的过程。

一旦确认了您的身份，航空公司会通过核实您的机票来检查您是否有资格登机，或者通过查看您的会员状态、旅行舱位或忠诚度计划等级来确认您是否有权限访问休息室。**授权**（您被允许做什么？）是确定您被允许访问哪些特定资源。

**权限**（您可以执行哪些具体操作？）是指在您的授权范围内您被允许执行的详细操作。如果您被授权登机和访问休息室，您的权限可能包括：在登机口休息、在休息室放松、在免税店购物，或者如果您是工作人员，可以进入受限区域。

**访问控制**是指强制执行授权政策的措施。这些是机场遵循的验证登机牌或休息室访问权限的规则，并引导您到正确的登机口。

## 多层次访问控制

为了确保全面的保护，应该根据您的应用程序架构在多个层次上实施访问控制。

为了理解这一点，以下是给我的哈利波特粉丝们的一点东西：

### 霍格沃茨和谐：统一防御

在霍格沃茨的最边缘，您有外围——抵御黑暗势力的外部防御。这些被认为是围绕城堡的高大_魔法石墙_，就像防火墙一样，墙上的翼野猪雕像俯瞰着。只有拥有适当许可的人才能通过大门，确保黑魔法师等不速之客无法进入。

当学生到达霍格沃茨时，他们通过_船或被夜骐牵引的马车_到达，这是唯一受信任的交通工具。这就像**端点检测和响应 (EDR)**，确保只有正确的设备（或马车）才能进入。

如果学生尝试使用不合规的设备（如_被诅咒的扫帚或幻影移形_），他们将无法进入。**移动设备管理 (MDM)** 就像是魔法检查过程——只有符合霍格沃茨标准的设备才能通过大门并连接到学校的系统。

在霍格沃茨，_猫头鹰_是学校与外界之间传递消息的可靠信使。这些猫头鹰就像 API 密钥和 JWT，携带批准印章，并且只将消息传递给正确的收件人。像_摄魂怪_这样的黑暗生物被禁止发送消息，确保只有正确的通信能够通过。

```markdown
在城堡内部，进入不同区域的权限是根据你的身份和你在霍格沃茨的角色来控制的。例如，**基于角色的访问控制 (RBAC)** 确保只有 _格兰芬多_ 的学生可以进入他们的休息室，而 _斯莱特林_ 的学生有他们自己的休息室。_级长_ 享有额外的特权，例如可进入级长浴室或其他特殊房间。这些角色规定了你在城堡内可以去的地方和可以做的事情。

但是，**基于属性的访问控制 (ABAC)** 则提供了更细致的管理。例如，只有选修了 _神奇生物护理课_ 的学生才能进入禁林，但他们只能在白天时分进入，因那时相对安全。森林在夜间过于危险，只有具有正确属性（如某个特定课程表）的学生才能在正确的时间进入。

在霍格沃茨内隐藏着 _贤者之石_，它被置于一个由强大法术守护的密室中。这就是你的数据层——最为宝贵的资源，由强力保护手段进行保护。就像数据库权限一样，密室被路威——那只三头犬，以及一系列的法术和陷阱所保护。类似地，行级和列级安全设置确保只有哈利·波特可以取回贤者之石，因为他是唯一值得的人（你只能访问属于你的东西）。

总结：

1.  **网络层（基础设施级）：** 使用防火墙和虚拟专用网（VPN）来控制进出网络的流量。

2.  **终端层（设备级）：** 使用端点检测与响应 (EDR) 和移动设备管理 (MDM) 来确保只有符合要求的设备才能访问应用程序。

3.  **API 层（服务级）：** 使用 API 密钥、JSON 网络令牌 (JWT) 和 API 网关来验证和授权调用者，并实施速率限制、IP 白名单等策略。

4.  **应用层：** 此处通常是授权的核心业务逻辑所在（该指南的主要内容）。

5.  **数据层（数据库级）：** 数据库权限、行/列级安全性。

## 访问控制模型

在应用层，软件工程中常见的三种主要访问控制模型是基于角色的访问控制 (RBAC)、基于属性的访问控制 (ABAC) 和较新的基于关系的访问控制 (ReBAC)。

**RBAC** **(基于角色的访问控制)** 是一种基于分配给用户的角色来授予或拒绝访问权限的模型。

角色是权限或特权的集合，定义了一个用户在系统中可以执行的操作。角色通过将用户分配到预定义的角色来简化访问控制，而不是为每个用户管理单独的权限。

当用户被分配一个角色时，他们会自动继承与该角色关联的所有权限。每个权限也有一个范围，定义了角色权限适用的边界或上下文。范围通常用于限制对特定资源或数据的访问。

让我来举个例子（并用这个例子说明本指南中的所有概念），一个博客应用程序。这款应用允许用户在多个类别中创建、管理和发布博客文章。它支持多种用户角色，每种角色对平台内的内容和功能有不同的访问级别。

-   **管理员**：可以查看、编辑、删除和管理所有博客文章和用户角色。（范围：所有文章和用户）
    
-   **编辑**：可以编辑和批准其分配类别（如技术、生活方式）内的文章。（范围：分配的类别）
    
-   **作者**：只能创建和编辑自己的博客文章。（范围：自己的文章）
    
-   **访客用户**：可以查看公共的、已发布的博客文章，但不能访问私人文章。（范围：仅限公共发布的文章）
    

用户与角色之间的关系通常是多对多的，角色也可能是分层的，允许复杂的权限结构。

![基于角色的访问控制图示](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780482515/e30316f8-58a9-4595-81ba-8eb08b2d5a3d.jpeg)

**ABAC** **(基于属性的访问控制)** 是一种基于主体（用户）、客体（资源）及环境属性做出访问决策的模型。它动态评估主体是否可以基于这些属性及治理它们的策略在客体上执行某个动作。

**ReBAC** **(基于关系的访问控制)** 是一种新兴的模型，基于用户和资源之间的关系授予访问权限。例如，它可能只允许创建文章的用户编辑该文章。此模型在社交网络应用中特别有用，其中访问取决于用户关系（如好友、关注者或内容所有权）。

## 为什么选择 ABAC？

RBAC 提供了多个好处，包括易于实现，减少了通过快速入驻新用户而带来的管理负担，并简化审核，因为它可以轻松检查哪些角色可以访问敏感数据。

但是，随着平台的发展，你可能需要为访问控制引入更细致的需求。这些新要求导致创建新角色以满足特定的访问需求：
```

不久之后，您可能会发现自己需要管理不断增长的角色列表，如资深出版商、出版主管、访客用户、订阅者、优质订阅者、平面设计师、用户体验设计师、摄影师、社交媒体经理、美国市场专员、英国市场专员、网页开发员、数据分析师、会员管理、广告经理、法律顾问和赞助商经理。

引入其他要求，如博客类别、资历和司法管辖区，可能很快导致角色爆炸。想象一下，这种情况在数据密集型企业应用（如金融或医疗）中会如何扩展。

虽然当边界清晰且静态时（例如部门、博客类型），范围定义得很好，但它们需要针对更细化的属性（如资历、服务时长、博客创建时间或发布状态）进行定制检查。范围定义也难以解释随时间变化的属性，如访问地点或时间。

因为基于角色的访问控制（RBAC）依赖于角色和固定范围来进行访问决策，所以在处理复杂和动态的访问需求时变得有限。这就是为什么 [**OWASP**（开放应用安全项目）建议使用 **ABAC**（基于属性的访问控制）或 **ReBAC**（基于关系的访问控制）而不是 RBAC][21]，因为它们在实施最小特权原则方面更有效。

## 深入了解基于属性的访问控制（ABAC）

### 核心组件

ABAC的核心组件是：

**属性**：属性是用于定义访问上下文的键值对。例子包括：

-   **用户属性**：这些描述了请求访问的人的特征，如角色、部门、年龄、许可级别等。💡如您所见，角色可以成为基于其进行访问控制决策的属性之一。所以，ABAC本质上是RBAC的扩展。
    
-   **资源属性**：这些描述了被访问资源（如文件、数据库或服务）的特征。例如，所有者、类别、状态等。
    
-   **操作属性**：这些定义用户在资源上请求的操作。例如，`读取`访问如查看/打开，`写入`访问如创建/修改/删除，`执行`访问如处理/运行等。
    
-   **环境属性**：这些包括影响决策过程的上下文元素，如`时间`或`地点`。
    
**策略**：策略是逻辑规则或语句，定义了哪些属性组合允许或拒绝访问。例如，出版商可以在工作时间发布分配类别中的已批准帖子。

### ABAC如何工作？

让我们以我们的博客发布者Sam为例。Sam被授权发布已被编辑批准的帖子，但必须在她被分配的类别内，如“科技”、“生活方式”和“健康”。她只能在特定时间发布这些帖子，比如早上9点到晚上6点。

Sam作为发布者的角色和她被分配的类别是在她加入团队时设定的。这里的资源是帖子，帖子在创建时被赋予一个类别。她可以执行的操作是发布，环境条件是必须在工作时间内。

由于访问控制规则基于Sam的属性——她作为发布者的角色和被分配的类别——她可以在这些类别内发布帖子。如果她的任何属性改变，比如她转到不同的部门，比如会员管理，或者她的分配类别更改为“时尚”或“旅行”，她的访问权限将自动被撤销。

> _ABAC允许管理员设置访问控制而无需知道具体谁需要访问。随着新成员加入组织，无需修改现有规则或对象属性；只要他们拥有必要的属性，他们就可以访问所需的资源。能够在无需额外调整的情况下自动适应新的和未预料到的用户，是使用ABAC的一个关键优势_。([来源][22])

### 谁定义ABAC策略？

1.  **身份和访问管理管理员**：
    
    在许多组织中，安全管理员或访问控制管理员定义ABAC策略。他们的职责包括分析业务需求、风险管理、合规性，并确保用户对资源具有正确的访问级别。他们根据组织具体的不同属性和条件将安全要求转化为策略。
    
2.  **业务和资源经理**：
    
    在某些情况下，业务部门或部门经理也可能会在定义策略时提供意见。他们了解运营需求，并最有能力表明团队应如何访问数据。
    
    例如，会员经理可能会定义策略，决定谁可以根据订阅状态、用户角色或会员级别（例如订阅者、优质订阅者）访问优质博客文章。
    

### **应该在何处强制执行——后端还是前端？**

访问控制策略应在**前端和后端**同时执行。原因如下：

-   **即时反馈**：当您在前端强制执行 ABAC 策略时，可以根据用户属性立即显示或隐藏元素（如按钮、链接或菜单）。这使界面更加简洁，并帮助用户立即理解他们可以或不能做什么。
    
-   **更智能的界面**：您可以防止向不应看到的用户显示选项。例如，如果用户没有正确的角色或权限，则隐藏功能。这使得界面感觉更加直观和响应迅速。
    
-   **减少服务器负载**：通过在前端执行某些访问限制，您可以减少不必要的后端请求，改善应用程序性能并减轻服务器负载。
    
-   **安全层**：虽然前端不应存放敏感数据，但您仍然可以通过在请求发往后端**之前**使用它来过滤无效的操作或内容，增加一层额外的安全保护。例如，您可以隐藏敏感 UI 元素（如管理员控制）或基于用户属性禁用按钮，使未经授权的用户更难尝试触发某些操作。
    

**2.** **后端强制执行**

-   **绕过风险**：仅依赖前端的缺点是用户可以轻松**绕过**它。借助正确的工具，他们可以操作前端代码或网络请求（使用浏览器开发工具或API代理）。这就是为什麽后端强制执行是必需的——它确保访问规则在**服务器端**被应用，从而无法被篡改。
    
-   **保护敏感数据**：后端是存储和处理敏感数据的地方。通过在服务器上强制执行 ABAC 策略，确保未经授权的用户无法访问、修改甚至查看敏感信息。为了避免数据泄漏，应该始终根据用户权限过滤掉敏感内容，只将相关内容发送给客户端。
    

现在您知道 ABAC 策略需要在前端和后端都进行强制执行，接下来的问题是：**在哪里定义这些策略？**

作为开发人员，您可能会想："_如果我了解安全团队定义的策略，我可以直接将它们翻译为前端和后端的代码。_"

例如，如果策略是只有高级作者才能批准特定类别的博客，您可能会写这样的代码：

**前端示例（简化版）：**

```
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  showApprovalDashboard();
} else {
  hideApprovalDashboard();
}
```

**后端示例（简化版）：**

```
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  return res.send(approvalDashboardData);
} else {
  return res.status(403).send('Forbidden: You do not have approval access for this category.');
}
```

但是，如何确保在应用程序的两层中策略一致而不重复逻辑呢？

如果需要为此策略引入其他条件怎么办，例如考虑其他用户属性或将权限与功能标志结合，以有条件地为特定用户启用某些功能？

而且，如果每个用户的要求不同，比如：

-   仅为具有高级订阅的用户显示某些 UI 元素，
    
-   基于特定属性阻止社交媒体经理的 API 调用，
    
-   或者为非管理员用户隐藏整个路径？
    

没有结构化的方法，您的应用程序就会变成充满 if-else 语句的混乱代码。

继续阅读以找到这些问题的答案！

### 策略是在哪里定义的？

在深入实现细节之前，让我们简要回顾一下上一个部分的问题：应该在哪里定义策略？

当存在多种方式访问服务时 – 无论是通过移动应用、Web 应用还是其他平台 – 后端应作为策略定义的真实来源。在后端定义 ABAC 策略可确保所有平台的一致性和安全性。这意味着所有客户端都与相同的一组规则交互，从而减少策略差异的可能性。

因此，后端是所有策略定义的所在，并在需要时将其提供给前端。然后，前端在用户界面上执行这些决策。但不要忘记，后端始终应执行这些策略。

在接下来的章节中，您将学习两种实现 ABAC 访问控制模型的方法。

## 1：使用 CASL 实现权限

[CASL][23] 是一个开源的、同构 JavaScript 库，通过其简单的声明式 API，使您更轻松地管理应用中的权限。

这意味着您可以在客户端（前端）和服务器端（后端）使用 CASL。对于全栈应用程序来说，这尤其出色，因为它确保了访问控制的一致性。无论请求来自何处，整个应用程序都可以应用相同的权限逻辑。

最棒的部分是什么？你可以使用明确、富有表现力的语法来定义权限。这使得管理甚至复杂的权限规则变得简单。例如，你可以根据用户的角色、他们拥有的资源以及其他因素来控制用户可以（或不可以）执行的操作。

而且不仅限于 React/React Native，他们还为 [Angular][24]、[Vue][25] 和 [Aurelia][26] 提供了支持包。

### 步骤 1：安装 CASL

首先，使用包管理器安装 CASL。代码示例中使用了 v6 版本。

```
npm install @casl/react @casl/ability
# 或者
yarn add @casl/react @casl/ability
# 或者
pnpm add @casl/react @casl/ability
```

### 步骤 2：定义权限

在 CASL 中，将“abilities”视为一组规则，这些规则定义了用户在特定对象（例如“Posts”或“Users”）上可以或不可以执行的操作。让我们使用早先博客应用程序的例子。为简单起见，我们将考虑两种类型的用户：**管理员**和**作者**。

-   管理员可以管理所有内容。
    
-   作者可以在指定的类别中创建和编辑自己的帖子，但不能删除已发布的帖子。
    

现在，创建一个 `defineAbilities.ts` 文件，以使用 DSL 定义权限集，这种方式是高级别的和声明性的。

首先定义用户可以执行的 `Actions`（例如，`create`、`read`、`update`、`delete`、`manage`）和 `Subjects`（可以执行操作的实体，例如 `‘User’`、`‘Post‘`，或对象如 `User` 或 `Post`）。

```
//defineAbilities.ts

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | User | Post
```

然后，创建一个表示权限结构的类型。它结合了 `Actions` 和 `Subjects`，以创建一个清晰且类型安全的权限系统。

`PureAbility<[Actions, Subjects]>`意味着权限系统将知道哪些操作在哪些对象上被允许。`createAppAbility` 函数用于根据你定义的动作和主题创建一个能力实例。你可以使用此功能为特定用户的角色或权限创建特定的权限。

```
//defineAbilities.ts

import { CreateAbility, PureAbility, AbilityBuilder, createMongoAbility } from '@casl/ability';
// other imports

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | Post | User

export type AppAbility = PureAbility<[Actions, Subjects]>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>
```

注意，`createMongoAbility` 仅用于支持来自 [MongoDB 查询语言][27] 的简单运算符，例如 $in, $lte, $eq，这些用于指定规则条件。但别担心——这并不意味着你的应用必须使用 MongoDB，你也无需熟悉查询语言。你还可以完全跳过这些并创建自定义运算符。

接下来，定义一个名为 `defineAbilityFor` 的函数，它将 `user` 对象作为参数并返回一个能力实例。`user` 对象预计将有一个 `role` 属性（例如 'admin' 或 'author'），决定用户的权限。

`userPermissions` 对象将每个用户映射到一个使用 `AbilityBuilder` 提供的 `can` 和 `cannot` 方法定义其权限的函数。这种方法在添加更多角色时比 switch case 更具可扩展性。

```
//defineAbilities.ts

export default function defineAbilityFor(user: User) {
  const { can, cannot, build } = new AbilityBuilder(createAppAbility);
   const userPermissions = {
    admin: () => {
      // 管理员用户可以管理所有内容
      can('manage', 'all');
    },
    author: () => {
      // 作者可以创建但不能删除帖子
      can('create', 'Post');
      cannot('delete', 'Post');
    },
    // 添加更多角色
  };

  // 调用与用户关联的权限，或默认没有权限。
  const permissions = userPermissions[user.role] || (() => {});
  permissions(); 

  return build();
}
```

注意：`manage` 和 `all` 是 CASL 中的关键字，其中 manage 表示任何操作，all 表示任何主题。

为了指定防止用户更新他们未创建的帖子、删除已发布的帖子以及限制访问特定字段的条件，你可以使用**条件**和**字段**。CASL 允许你通过 `subject` 属性（表示对象）和 `fields` 属性（表示用户正在交互的对象的属性）在权限上设置特定条件。

向上述文件添加条件规则。

```

   author: () => {
      // 作者可以在“科技”和“生活方式”类别中创建帖子
      can('create', 'Post', { category: { $in: ['Tech', 'Lifestyle'] } });

      // 作者可以更新用户创作的文章的标题和描述
      can('update', 'Post', ['title', 'description'], { ownerId: user.id, status: 'draft' });

      // 作者不能删除状态为“已发布”的帖子
      cannot('delete', 'Post', { status: 'published' });
    },
```

在 CASL 中，直接规则（如 `can`）使用 `OR` 组合，而反向规则（如 `cannot`）和条件使用 `AND` 组合。作者：

Remember，与相同的操作/对象对相关的 `cannot` 规则应该在 `can` 规则之后定义，否则它们将被覆盖。

在处理具有嵌套 `details` 字段的 `Post` 对象时（例如，`details.author.name`，`details.metadata.tags`），可以使用 `*` 和 `**` 通配符来基于嵌套级别控制访问。

-   `*` 通配符仅匹配给定对象内的**顶级字段**。
    
    这意味着它将允许访问 `details` 对象直接包含的字段，但不包括任何**嵌套字段**。
    
-   `**` 通配符允许访问对象内的**所有字段**，包括深度嵌套的字段。
    
    这意味着它将允许访问 `details` 内的每个字段，无论嵌套有多深。
    

```
// 允许访问 Post.details 下所有嵌套字段，无论它们多深
can('read', 'Post', ['details.**']) 

// 仅允许访问顶层字段（如 details.body, details.author）
can('read', 'Post', ['details.*'])
```

注意，`*` 匹配所有符号，除了点（.）

`defineAbilities.ts` 中的能力实例可用于在您的应用中实施权限。此文件可以作为共享库，因此前端（例如：React）和后端（例如：Node.js）都可以访问和使用相同的权限逻辑。

虽然 `AbilityBuilder` 适用于系统内部定义的权限，但如果您的应用接收外部定义的权限作为 JSON 对象，例如：

```
[
  {
    action: 'read',
    subject: 'Post'
  },
  {
    inverted: true, // 表示不能规则
    action: 'delete',
    subject: 'Post',
    conditions: { published: true }
  }
]
```

您可以按照如下方式将其直接传递给 `Ability` 构造函数：

```
  const defineAbilityFor = (permissions: (SubjectRawRule<any, any, MongoQuery<AnyObject>>)[]) => {
    return createMongoAbility<[Actions, Subjects]>(permissions);
  }

  export default defineAbilityFor;
```

使用 JSON 定义规则的另一优势是**减少应用的包大小**，因为您不需要引入诸如 `AbilityBuilder` 之类的重型依赖！

### **步骤 3: 为用户创建能力实例**

在登录或认证服务成功认证后，您将获取用户数据或相关权限（依据您在步骤 2 中选择的方法）到您的应用中，并在登录组件（或类似的组件）中创建一个能力实例，如下所示：

```
// login.tsx

import defineAbiltyFor from './config/defineAbilities.js'

const LoginComponent = () => {
    // 从 API 获取用户数据。然后，
    const ability = defineAbilityFor(user)
}
```

### **步骤 4: 向整个应用提供能力实例**

[上下文][28] 在 React 中用于跨组件共享数据，而不需要通过组件树传递 props。在 `can.ts` 文件中添加以下代码：

```
// can.ts

import {createContext} from 'react'
import {createContextualCan} from '@casl/react'

export const AbilityContext = createContext()
export const Can = createContextualCan(AbilityContext.Consumer)
```

这将创建一个 `Can` 组件，您将在下一步使用它根据通过 `AbilityContext` 传递的能力来确定用户是否有权限执行某个操作。

接下来，使用上述 `AbilityContext` 来包裹您的 `App` 组件，并设置在步骤 3 中创建的 `ability` 实例作为 `value`，以便所有组件都可以访问到这些能力。

```
ReactDOM.render(
<AbilityContext.Provider value={ability}>
  <App />
</AbilityContext.Provider>,
  document.getElementById('root')
)
```

### **步骤 5: 使用能力检查用户权限**

有两种方法可以确定用户是否有权限执行某个操作：使用 `ability.can` 进行编程检查，以及使用 `Can` 组件进行条件渲染。

假设这是您的 post 对象：

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

`ability.can` 和 `Can` 组件均需要动作、对象以及一个可选字段，并根据定义的权限检查这些参数。

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
        <p>您可以删除帖子。</p>
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

现在看四个例子。

例子 `(1)` 返回 true，因为用户可以创建帖子。

例子 `(2)` 应该返回 true，因为你可以删除已发布的帖子，但它返回的是 **false**。为什么呢？因为即使 `post` 是 `Post` 的一个实例，CASL 无法检测其主题类型（`post` 对象的类型），因为 CASL 使用 `object.constructor.modelName` 或 `object.constructor.name` 来检测主题类型。

可以用两种方法来解决这个问题。

- 使用 `subject` 辅助函数来指定 `post` 实例的类型，如例子 `(4)` 所示（返回 true）。

- 使用自定义主题类型检测算法来指定 CASL 需要使用哪个属性来识别类型。可以使用 `detectSubjectType` 来实现，如下所示：

    ```
      // defineAbilities.ts
    
      export default function defineAbilityFor(user: User) {
        const { can, cannot, build } = new AbilityBuilder(createAppAbility);
        // rules defined as explained above
    
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

接下来，看例子 `(3)`。它也返回 true，因为检查的是主题类型而不是主题。记住，当你检查某个

> - 主题时，你问的是“我能删除这个帖子吗？”
> - 主题类型时，你问的是“我能删除某篇文章吗？”（即至少一篇帖子）（[来源][29]）

虽然 CASL 提供了一种强大的方法用于细粒度的访问控制，但它并不能直接解决需要基于用户属性应用条件的问题。

虽然第三方库可以提供便利，但它们的文档有时不清楚、过时或不准确，组件本身可能存在漏洞。为了完全控制你的安全流程，可能需要实现自定义授权逻辑。

## 2: 构建自定义权限验证框架

要建立自定义验证框架，让我们看看策略是如何定义、验证和执行的，以及它们如何结合在一起。

### 使用代码定义策略

你已经了解到，访问控制策略应该存在于后端。对于自定义实现，你将使用**代码定义策略**或 PaC。PaC 是指通过代码或配置文件（如 YAML、JSON 或 DSL）定义和管理策略的做法，而不是手动流程或文档。这允许策略进行版本控制、自主执行，并在动态环境中更加可靠。这些策略由安全管理员编写，并由策略服务管理。

在 YAML 中，你的策略可能看起来像这样，其中 `policies` 列表由序列（`-`）表示。

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
  # other policies
```

**policyId** 是策略的唯一标识符。**resource** 指定策略适用的资源类型，例如“Post”。**action** 定义在资源上允许或拒绝的操作，如“edit”。**effect** 决定操作是允许还是拒绝，值如“allow”或“deny”。**conditions** 表示策略适用的逻辑表达式，例如检查资源所有者 ID 是否与用户 ID 匹配。

如你所见，策略中的条件为类似 TypeScript 的人类可读格式。这是因为它们使用谷歌的**通用表达式语言(CEL)** 编写。

CEL 是一种开源、平台独立的语言，快速且安全地执行用户定义表达式（[与 `eval()` 不同][30]，尤其是在服务器端）。其性能得以增强，因为 CEL 编译一次成抽象语法树，然后用以微秒级或纳秒级对多输入进行评估。

让我们重新定义结构如下：

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
  # other policies
```

原因如下：

1.  **结构改进**：通过按资源和行为分组政策，可以更容易导航。添加新政策或操作变得轻而易举，不会干扰整体设置。例如，如果需要为 `Post` 资源添加 `archive` 操作，只需在 `Post` 对象下添加它。这种模块化的方式使得政策的维护和扩展更加简单。
    
2.  **高效查找**：当这些策略在应用中作为 JavaScript 对象访问时，查找效率高且时间恒定（O(1)）。这是因为策略使用直接键查找存储，每个策略都可以通过其唯一键直接访问。与通过列表搜索（需 O(n) 时间）相比，这大大提高了性能。随着策略数量增加，查找时间保持不变，因此性能不会下降。
    
3.  **更易审核和版本控制**：这种结构同样使审核和版本控制更顺畅。你可以轻松追踪政策的变更和管理更新，而不会有意外扰动其他政策的风险。
    

💡

要了解 CEL 中字符串字面量在上述条件中的工作原理，请查阅一些示例[这里][31]。

### 工作流程概述

当应用启动时，你会通过 RTK Queries 从策略服务获取策略，并自动缓存到 RTK 缓存中。一旦用户通过身份验证，其数据（如角色和部门）也将存储在缓存中。

要在会话期间持久化这些数据，你需要将其存储在会话存储中，但注意不要存储敏感信息。对于权限验证器，我们将直接从缓存中读取用户数据。

在需要策略执行的点，如组件或路由（我们称其为_策略执行点_）中，应用将调用我们的自定义权限 hook。然后该 hook 会基于策略、用户、资源和环境属性验证权限，从而授予或拒绝请求操作的访问。

![基于属性的访问控制工作流](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780571125/1dba1568-ee54-4bea-8d25-5c058fa6da68.jpeg)

### 策略验证

#### 步骤 1：创建权限验证器

首先在代码中定义 `Action`、`Resource` 和 `Policy` 的类型：

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

您可能想知道为什么需要在这里使用 `Partial`。通过使用 `Partial`，我们表示在执行某些操作时，`Post`、`User` 或 `Comment` 上的每个字段都不是必需的。这在验证创建操作时特别有用，因为对象可能尚未完全形成——某些字段可能仍然缺失。例如，在创建新的 `Post` 时，您可能只有标题和内容，但没有完整的评论或标签列表。

然后，安装 `cel-js`，这是一个用于 JavaScript 的 CEL 评估器，可用于您的验证器中。

```
npm i cel-js
```

创建一个 `validatePermission` 函数，从提供的 `policies` 对象中提取给定资源的操作规则，并构建一个包含 `user`、`resource` 和 `system` 信息的上下文。请注意，您可能需要使用 `__typename`（或类似的）进行资源类型检测，类似于您在 CASL 中所做的。

使用 `cel-js` 库，评估操作规则中指定的 `conditions`，以检查用户是否满足执行操作所需的条件。如果满足条件，则策略“生效”，这意味着根据定义的效果实施指定的操作——无论是允许还是拒绝操作。如果没有定义规则或在评估过程中发生错误，则默认拒绝。

```typescript
// validator.ts

import * as cel from 'cel-js';
// other imports

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

任何需要验证用户权限的组件都需要从缓存中获取策略，并从全局状态中检索用户，同时还要管理加载和错误状态。

为了避免代码重复并封装上述操作的逻辑，您可以创建一个自定义钩子，为权限验证跨组件提供一致的接口。

#### 第 2 步：创建自定义钩子以封装可重用逻辑

由于应用启动时已经从策略管理服务中获取了策略，现在相同的 RTK 查询将直接从缓存中检索它们。请参阅以下参考文献，创建 `usePermission` 自定义钩子。

注意如何使用 `skip: !userId` 条件来确保仅在存在有效的 `userId` 时才获取策略，从而防止不必要的网络请求。

```typescript
// usePermission.ts

import { useSelector } from 'react-redux';
import { useGetPoliciesQuery } from './services/api'; 
import { validatePermission } from './validator';
// other imports

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

#### 第 3 步：添加上下文操作验证

通常，即使用户具备执行某个操作所需的权限，他们仍可能因为上下文业务逻辑而不被允许。例如：

-   **帖子审批**：编辑可能有权限批准帖子，但如果他正在编辑帖子且还有未保存的更改，批准按钮应隐藏。
    
-   **评论**：即使用户有权发表评论，如果尚未输入任何内容，评论按钮也应被禁用。
    
-   **类别创建**：具有权限的用户可能仍会因为名称为空或已经存在而被禁止创建类别。
    

这些规则依赖于应用程序的当前状态，需要动态处理。要处理这些上下文操作，验证规则应基于应用程序的当前状态（例如，正在编辑的帖子、正在输入的内容、类别名称的可用性）来定义。

在探讨自定义钩子如何处理这些验证之前，让我们先列出这些上下文操作的规则：

```typescript
// contextualRules.ts

import _ from 'lodash';
// other imports

const contextualActionRules = {
  Post: {
    approve: (state: PostState, resource: Resource) => {
      // Prevent approval if the post is currently being edited
      const postId = resource?.id;
      return postId && !state[postId]?.isEditing;
    },
  },
  Comment: {
    create: (state: CommentState, resource: Resource) => {
      // Prevent creating a comment if the comment content is empty
      return !_.isEmpty(resource?.content);
    },
  },
  Category: {
    create: (state: CategoryState[], resource: Resource) => {
      // Prevent creating a category if the name is empty or already exists
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
usePermission.ts

export const usePermission = (action: Action, resource: Resource, system: System): boolean => {

  const state = useSelector((state: RootState) => state);

  /**
    这部分代码与上面相同
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

上面代码中有一点是绝对需要更改的。你能猜到是什么吗？

**`usePermission`如何对基于应用状态的上下文验证有帮助？** 因为这个 hook 订阅了应用程序状态！所以，当某些内容发生变化时——例如在评论框中输入内容——这个 hook 会重新渲染。由于评论组件依赖于这个 hook 来控制评论按钮的状态，因此 hook 中的任何更新也会触发组件的重新渲染。这意味着当你输入时，按钮变得可见，而如果内容被清空，按钮就会被禁用。

但是，我们不希望 `usePermission` hook 在应用状态每次改变时都重新渲染。让我们来修复这个问题。

在 `usePermission` hook 外部定义 `resourceToStateMap` ，以避免每次调用时冗余地重新创建。`useSelector` 只根据资源类型和 ID 订阅相关的状态切片。

```
// 不好的做法：与其这样做，
const state = useSelector((state: RootState) => state);

// 好的做法：应该这样
const resourceToStateMap: Record<string, (state: RootState, id: string | number) => any> = {
  Post:     (state, id) => state.posts[id],
  Comment:  (state, id) => state.comments[id],
  User:     (state, id) => state.user,
  // 继续添加更多
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

这就是为什么让选择器尽可能精细的重要性。

-   **避免过度获取**: 你不再选择整个状态，仅选择评估权限和上下文规则所需的片段。这在大型应用程序中特别高效。
    
-   **优化重新渲染**: 通过精细的状态选择，仅相关状态切片会触发重新渲染，提高应用程序性能，特别是在许多组件使用 `usePermission` hook 时。
    

现在你已经完成了大部分权限验证逻辑，让我们使它更易于使用。

#### 步骤 4: 创建一个用于条件渲染的包装器

创建一个 `Can` 组件，检查用户是否有权限使用 `usePermission` hook 对资源执行特定操作。如果授予权限，则渲染 `children` 或将其作为函数与权限状态一起调用（这将用于禁用按钮）。如果没有，则显示一个回退元素。

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

你可以使用用于编程检查的 `usePermission` hook 和用于条件渲染的 `Can` 组件。

**1\. 使用** `Can` **隐藏/显示组件**

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

**2\. 使用** `Can` **禁用组件**

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

**3\. 使用** `usePermission` **创建保护路由**

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

**4\. 使用** `usePermission` **跳过 API 调用**

```
const hasPermission = usePermission("view", user, context);

const { data: user, isLoading: isUserLoading, isError: isUserError } = useUserQuery({
    skip: !hasPermission,
});
```
```

```markdown
## 让我们总结一下

在本手册中，您学习了如何使用 CASL 和自定义解决方案来实现可扩展的访问控制。我们从深入研究不同的访问控制模型开始，重点关注 ABAC，并探索了两种实施基于 ABAC 规则的方法。

使用 CASL，您见识到了定义用户能力是多么简单，无论您是使用共享的库还是外部权限。我们演示了如何为各种用户操作设置访问控制，代码干净且易读。您还学会了如何添加高级功能，如动态条件和字段级别的访问，以实现更细粒度的控制。

另一方面，您还学习了如何构建一个专为您的应用程序特定需求量身打造的自定义权限框架。您结合了基于上下文状态的检查和基于策略的规则，创建了一个灵活且可扩展的访问控制系统。在此过程中，您探讨了诸如代码即策略（Policy as Code）、CEL（通用表达式语言）、自定义钩子、缓存以及使用 RTK 查询进行条件获取等概念。您还了解了如何在组件、受保护路由等上实施访问控制。

这两种方法共享一些关键优势：

-   **动态和可扩展**：添加新的操作或实体就像更新单个文件一样简单——不需要重写代码。
    
-   **关注点分离**：将验证逻辑与 UI 组件分离，使代码更易于维护。
    
-   **可读性强**：您可以使用简单的对话语言定义权限，例如“_我能读取这篇文章吗？_”或“_我能创建评论吗？_”
    
-   **可重用组件**：您可以在应用程序中重用包装组件和钩子，减少重复。
    
-   **状态响应性**：与 React 状态无缝集成，确保您的访问控制规则在 UI 中动态反映。
    

### **进一步的扩展考虑**

如果您的策略负载繁重或验证逻辑计算开销大，请考虑以下优化：

-   **记忆输出**：使用 `useMemo` 缓存昂贵计算的结果，但需注意，如果过度使用 `useMemo`，本身也可能代价不菲。
    
-   **模块化策略**：根据领域将策略分解到不同的文件。在启动时仅获取必要的策略，并在需要时延迟加载非必要的策略。
    
-   **将验证工作卸载到后端**：将策略验证逻辑移动到后端，并考虑服务器端渲染。不过，请记住，某些动态检查仍需要在前端进行。
    

不要忘记在后端实施访问控制，并确保在将敏感数据发送到客户端之前进行过滤！

## 结论

无论您选择 CASL 的简便性和强大性，还是实现您自己的定制解决方案以获得更大的灵活性，您现在都有工具和知识将访问控制集成到您的 React 应用程序中，确保用户只能访问他们被授权的内容。

如果您喜欢阅读这篇文章（即使不喜欢 ;)），欢迎在 [LinkedIn][32] 给我留言反馈。

祝编程愉快，愿您的应用权限如您的用户基地一般可扩展！

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
```

