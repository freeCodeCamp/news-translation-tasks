```markdown
---
title: "CI/CD 手册：学习 GitHub Actions、Docker 和 Google Cloud Run 的持续集成与交付"
date: 2025-02-07T04:51:05.791Z
author: Prince Onukwili
authorURL: https://www.freecodecamp.org/news/author/onukwilip/
originalURL: https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/
posteditor: ""
proofreader: ""
---

大家好！🌟 如果你身处科技领域，你可能听说过诸如**持续集成 (CI)**、**持续交付 (CD)**和**持续部署**这样的术语。你可能还听说过自动化管道、暂存环境、生产环境以及测试工作流这样的概念。

<!-- more -->

这些术语乍一看可能显得复杂或者可互换，让你不禁疑惑：它们到底是什么意思？它们之间有何不同？🤔

在这本手册中，我将用清晰易懂的方式解析这些概念，借助相关的类比让每个术语更易于理解。🧠💡 除了理论之外，我们还将进行实际操作教程，逐步教你如何设置 CI/CD 工作流。

我们将一起完成：

- 设置一个 Node.js 项目。✨
  
- 使用 Jest 和 Supertest 实现自动化测试。🛠️
  
- 使用 GitHub Actions 设置一个 CI/CD 工作流，触发在推送、拉取请求或新版本发布时。⚙️
  
- 构建并将应用的 Docker 镜像发布到 Docker Hub。📦
  
- 将应用部署到测试用的暂存环境。🚀
  
- 最后，将其发布到生产环境并上线！🌐

在本指南结束时，你不仅能够理解 CI/CD 概念之间的区别，还将具备构建自动化管道的实际经验。😃

### 目录

1.  [**什么是持续集成、交付和部署？**][1]
    
2.  [**持续集成、持续交付与持续部署之间的区别**][2]
    
3.  [**如何设置带有 Web 服务器和自动化测试的 Node.js 项目**][3]
    
4.  [**如何创建 GitHub 仓库以托管代码库**][4]
    
5.  [**如何在项目中设置 CI 和 CD 工作流**][5]
    
6.  [**为项目的镜像设置 Docker Hub 仓库，并生成发布镜像的访问令牌**][6]
    
7.  [**创建 Google Cloud 账户、项目和结算账户**][7]
    
8.  [**创建 Google Cloud 服务账户，通过 CD 管道将 Node.js 应用部署到 Google Cloud Run**][8]
    
9.  [**创建暂存分支并将功能分支合并其中（持续集成和持续交付）**][9]
    
10.  [**将暂存分支合并到主分支（持续集成和持续部署）**][10]
    
11.  [**结论**][11]

## **什么是持续集成、交付和部署？** 🤔

### **持续集成 (CI)**

想象一下，你是一个由六名开发人员组成的团队的一部分，大家都在同一个项目上工作。如果没有一个合适的系统，必然会一团糟。

假设 A 先生正在构建一个新的登录功能，B 女士正在修复搜索栏的一个漏洞，而 C 先生在调整仪表板 UI——所有这些同时进行。如果每个人都直接编辑同一个“文件夹”或代码库，事情可能会变得非常糟糕："嘿！谁刚刚破坏了应用程序？" 😱

为了有条不紊，团队使用诸如 GitHub、GitLab 或 BitBucket 这样的**版本控制系统 (VCS)**。把它看作是一个数字化的工作空间，大家可以安全地协作而不会互相妨碍。🗂️✨

这里是持续集成在此过程中如何逐步适用的：

#### 1\. **主分支：通用文件夹** ✨

每个项目的核心是**主分支**——最终的真相来源。它包含支持你实时应用的稳定代码库。每位团队成员都将自己的工作贡献到这里，但有一个重要的规则：只有经过测试和批准的代码才能合并到这里。🚀

#### 2\. **功能分支：个人工作空间** 🔨

当像 A 先生这样的人想要开发一个新功能时，他们创建一个**功能分支**。这个分支本质上是主分支的一个个人副本，在这里他们可以修改、编写代码和测试而不影响其他人。B 女士和 C 先生也在他们自己的分支上工作。每个人的实验保持得整整齐齐。🧪💡

#### 3\. **合并更改：CI 工作流** 🎉

当 A 先生对他的功能满意时，他不会直接将其推入主分支——CI 确保此操作的安全性：

- **自动化测试**：在合并之前，CI 工具会自动运行 A 先生的代码来检查是否有漏洞或错误。可以把它看作是守卫主分支的保镖，确保没有不良代码进入。🕵️‍♂️
  
- **构建验证**：功能分支代码还会被“构建”（转换成可部署版本的应用）以确认其工作是否如预期。

一旦这些检查通过，A 先生的功能分支就可以合并到主分支。这种频繁的更改合并就是我们所说的**持续集成**。

### 持续交付 (CD)
```


#### 需要一个 `Staging` 区域 🌉

在我们之前讨论的持续集成（CI）过程中，我们主要处理**功能分支**和**主分支**。但直接将功能分支的更改合并到主分支（驱动实时产品）中可能有风险。为什么？🛑

虽然自动化测试和构建能够捕捉到很多错误，但并不是万无一失的。有些边界情况或漏洞可能会被忽略。这时候，**预发布分支**和**预发布环境**就发挥了作用！🎭

可以把预发布分支看作是一次“试运行”。在将更改推送给真实用户之前，来自功能分支的代码库会被合并到预发布分支，并部署到一个**预发布环境**。这个环境是生产环境的精确复制，但仅供**质量保证（QA）团队**用于测试。

QA 团队扮演“测试驾驶员”的角色，以真实用户的方式测试平台。他们检查可用性问题、边界情况或自动化测试可能遗漏的错误，并向开发人员提供修复反馈。🚦如果一切通过，代码库就能被批准部署到生产环境中。

#### 持续交付的实践 📦

将更改合并到预发布分支并部署到**预发布环境**的过程就是我们所说的**持续交付**。🛠️ 它确保应用程序始终处于可部署状态，为流水线中的下一步做好准备。

与持续部署（我们稍后会讨论）不同，持续交付不会自动将更改推送到生产（实时平台）。而是暂停让人类——即 QA 团队或利益相关者——决定何时继续。这增加了一个额外的质量保证层，降低了错误进入实时产品的风险。🕵️‍♂️

### 持续部署（CD）

持续部署（CD）将自动化推向了顶峰。虽然它与持续交付有相似之处，但关键区别在于**最后一步**：不需要人工审批。最终的过程——合并代码库并将其实时部署给终端用户（QA 测试人员或团队负责人可以执行此操作）。

让我们来探讨一下是什么让持续部署如此强大（和有点吓人）！😅

#### CI/CD 流水线的最后一英里 🛣️

想象一下你已经经历了严格的持续集成过程：团队成员合并了他们的功能分支，自动化测试被执行，并且代码库在持续交付期间成功地部署到了预发布环境。

现在，你确信应用程序没有漏洞，并准备好在生产环境中大放异彩——这是你的平台的实时版本，供真实客户使用。

在**持续部署**中，这一步骤将更改部署到实时环境**自动**发生。流水线在特定事件发生时触发，比如：

- 一个**拉取请求（PR）**合并到**主分支**。
  
- 创建一个新的**版本发布**。
  
- 一个**提交**直接推送到生产分支（尽管这对于大多数团队来说很少见）。
  

一旦触发，流水线便开始行动，构建、测试并最终将更新的代码库部署到生产环境。📡

## **持续集成、持续交付和持续部署之间的区别** 🔍

| 方面 | 持续集成 (CI) | 持续交付 (CD) | 持续部署 (CD) |
| --- | --- | --- | --- |
| 主要关注点 | 将功能分支合并到主/一般代码库或预发布代码库。 | 将经过测试的代码部署到预发布环境以进行 QA 测试和批准。 | 自动将代码部署到实时生产环境。 |
| **自动化水平** | 自动化测试和构建功能分支的进程。 | 在成功测试后，自动化部署到预发布/测试环境。 | 完全自动化部署到生产环境，无需人工审批。 |
| **测试范围** | 在功能分支上运行自动化测试，以确保代码质量在合并到主或预发布分支之前。 | 包括在部署到预发布之前的自动化测试，并允许 QA 测试人员在受控环境中进行手动测试。 | 可能包括自动化测试作为最终检查，以确保在部署之前生产环境的稳定性。 |
| **涉及分支** | 功能分支合并到主/一般或预发布分支。 | 使用预发布分支作为合并到主分支之前的中间步骤。 | 主/一般分支直接部署到生产。 |
| **目标环境** | 确保在本地环境或构建流水线中的集成和测试。 | 部署到 QA 测试人员验证功能的预发布/测试环境。 | 部署到终端用户访问的生产/实时环境。 |
| **关键目标** | 防止集成冲突，确保新更改不会破坏现有代码库。 | 提供一个稳定、接近生产的环境进行彻底的 QA 测试，然后最终部署。 | 确保新功能和更新最短时间内到达用户手中，延迟最小。 |
| **审批流程** | 无需批准。功能分支在通过标准后进行测试和合并。 | QA 团队或负责人在更改合并到面向生产的主分支之前提供反馈/批准。 | 无需人工审批。完全自动化部署。 |
| **触发示例** | 开发人员将功能分支合并到主分支。 | 预发布分支通过自动化测试（在 PR 期间），准备好部署到测试环境。 | 创建新版本或拉取请求合并到主分支，触发自动生产部署。 |

## **如何设置 Node.js 项目，搭建 Web 服务器并进行自动化测试** ✨

在本实践中，我们将使用 Jest 构建一个带有自动化测试功能的 Node.js 网络服务器。随后，我们将使用 GitHub Actions 创建一个 CI/CD 管道，以自动化每次**向暂存和主分支提出拉取请求**时的测试。最后，我们将应用程序的镜像发布到 DockerHub，并将镜像部署到**Google Cloud Run**，首先部署到测试环境进行测试，随后再部署到生产环境供实际使用。

准备好让你的项目焕发生机吗？让我们开始吧！🚀✨

### 步骤 1: 安装 Node.js 📥

首先，你需要在计算机上安装 **Node.js**。Node.js 提供了我们将用来创建网络服务器的 JavaScript 运行环境。

1. 访问[https://nodejs.org/en/download/package-manager][12]

2. 选择你的操作系统（Windows、macOS 或 Linux），并下载安装程序。

3. 按照安装说明完成设置。

为了验证 Node.js 是否成功安装，打开终端并运行 `node -v`。 应该会显示安装的 Node.js 版本。

### 步骤 2: 克隆初始仓库 📂

下一步是从 GitHub 获取初始代码。如果你还没有安装 Git，可以在 [https://git-scm.com/downloads][13] 下载。选择你的操作系统并按照说明安装 Git。安装完成后，就可以克隆仓库了。

在终端中运行以下命令克隆项目的基础代码：

```
git clone --single-branch --branch initial https://github.com/onukwilip/ci-cd-tutorial
```

这将从 `initial` 分支下载项目文件，该分支包含我们的 Node.js 网站服务器的基础模板。

进入项目目录：

```
cd ci-cd-tutorial
```

### 步骤 3: 安装依赖项 📦

进入项目目录后，安装 Node.js 项目所需的依赖项。这些都是支持应用程序的包：

```
npm install --force
```

这将下载并设置项目中指定的所有库。 好的，依赖项安装完成？你离成功又近了一步！

### 步骤 4: 运行自动化测试 ✅

在深入代码之前，先确认自动化测试能否正常运行。运行：

```
npm test
```

你应该会在终端中看到两个成功的测试结果。这表明入门项目配置正确，具备有效的自动化测试。

![Successful test run](https://cdn.hashnode.com/res/hashnode/image/upload/v1733074280408/93b4ea86-1dfa-42eb-a163-b97c19c2a053.png)

### 步骤 5: 启动 Web 服务器 🌐

最后，让我们启动网络服务器并查看其运行情况。运行以下命令：

```
npm start
```

等待应用程序启动运行。打开浏览器，访问 [http://localhost:5000][14]。🎉你应该可以看到启动的网络服务器，准备好进行你的 CI/CD 魔法了：

![Successful project run](https://cdn.hashnode.com/res/hashnode/image/upload/v1733074667521/7b80bb21-1f43-430e-8a56-2bff8b81ddad.png)

## **如何创建 GitHub 仓库存储你的代码库 📂**

### 步骤 1: 登录 GitHub

1. **访问 GitHub**: 打开浏览器并访问 GitHub - [https://github.com][15]。

2. **登录**: 点击右上角的**登录**按钮，输入你的用户名和密码进行登录，或者如果没有账号，可以通过点击**注册**按钮创建一个账号。

### 步骤 2: 创建新仓库

登陆后，在主 GitHub 页面的右上角，你会看到一个 "+" 号。点击它，然后从下拉菜单中选择 **"New repository"**。

![New GitHub repository](https://cdn.hashnode.com/res/hashnode/image/upload/v1733130465203/dac28dee-74da-4fd4-8a96-bc90aef01207.png)

现在是时候设置仓库的详细信息了。你需要包括：

- **仓库名称**: 为你的仓库选择一个名称。例如，你可以称之为 `ci-cd-tutorial`。

- **描述** (可选): 你可以添加一段简短的描述，比如“使用 Docker 和 GitHub Actions 的 CI/CD 教程项目。”

- **可见性**: 选择你希望仓库是**公共**(任何人都可以访问)还是**私有**(只有你和你邀请的人可以访问)。为了适应本教程，将其设置为**公共**。

- **不要勾选添加 README 文件框**: **重要**: 确保你**没有勾选**添加 `README.md` 文件的选项。这会自动在你的仓库中创建一个 `README.md` 文件，在以后推送本地文件时可能会造成冲突。如有需要我们稍后将手动添加 README 文件。

填写完详细信息后，点击 **"Create repository"**。

![Create GitHub repository](https://cdn.hashnode.com/res/hashnode/image/upload/v1733130890582/04e09ac8-0ee6-4d26-a9f2-007c0e6ca08f.png)

### 步骤 3: 更改远程目标并推送到你的新仓库

#### **更新远程仓库 URL**:

由于你已经从我的仓库克隆了代码库，需要更新远程目标以指向你新创建的 GitHub 仓库。

打开项目目录中的终端并运行以下命令：

```
git remote set-url origin <your-repo-url>
```

将 `<your-repo-url>` 替换为您之前复制的 GitHub 仓库 URL。

#### **将当前分支重命名为** `main`：

如果您的分支名不是 `main`，可以使用以下命令将其重命名为 `main`：

```
git branch -M main
```

#### **推送到您的新仓库**：

最后，提交您所做的任何更改，并通过运行以下命令将本地仓库推送到新的 GitHub 远程仓库：

```
git add .
git commit -m 'Created boilerplate'
git push -u origin main
```

现在，您的本地代码库已链接到您的新 GitHub 仓库，并且文件已成功推送到那里。您可以通过访问 GitHub 上的仓库进行验证。

## 如何在项目中设置 CI 和 CD 流程 ⚙️

现在是为我们的项目创建 **CI 和 CD 流程** 的时候了！这些流程不会在您的本地 PC 上运行，而是会在您将更改推送到远程仓库时在云中自动触发并执行。GitHub Actions 将检测到这些流程并根据您定义的触发器运行它们。

### 第一步：准备工作流目录 📂

在添加 CI/CD 管道之前，最好先创建一个功能分支。这一过程模拟了团队中常用的工作流，即在合并到主代码库之前在独立分支中进行新功能或更改。

要创建并切换到新分支，请运行以下命令：

```
git checkout -b feature/ci-cd-pipeline
```

这将创建一个名为 `feature/ci-cd-pipeline` 的新分支并切换到该分支。现在，您可以安全地添加和测试 CI/CD 工作流，而不会影响主分支。

完成后，您可以在拉取请求流程中将此功能分支合并回 `main` 或 `staging`。

在项目的根目录中，创建一个名为 `.github` 的文件夹。在 `.github` 中，再创建一个名为 `workflows` 的文件夹。

放置在 `.github/workflows` 目录中的任何 YAML 文件都会自动识别为 GitHub Actions 工作流。这些工作流将根据特定触发器执行，例如拉取请求、推送或发布。

### 第二步：创建持续集成工作流 🚀

现在我们将创建一个 CI 工作流，它将在向 `main` 或 `staging` 分支发出拉取请求时自动测试应用程序。

首先，在 `workflows` 目录中创建一个名为 `ci-pipeline.yml` 的文件。

将以下代码粘贴到文件中：

```
name: CI Pipeline to staging/production environment
on:
  pull_request:
    branches:
      - staging
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    name: Setup, test, and build project
    env:
      PORT: 5001
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Test application
        run: npm test

      - name: Build application
        run: |
          echo "Run command to build the application if present"
          npm run build --if-present
```

#### CI 工作流解释

以下是工作流中每个部分的详细说明：

1.  `name: CI Pipeline to staging/production environment`：这是您工作流的标题。它帮助您在 GitHub Actions 中识别此管道。

2.  `on`：`on` 参数决定了触发工作流的事件。当工作流 YAML 文件被推送到远程 GitHub 仓库时，GitHub Actions 使用 `on` 字段中配置的触发器自动注册工作流。这些触发器充当事件侦听器，告诉 GitHub 何时执行工作流。

    **例如：**

    如果我们将 `pull_request` 设置为 `on` 参数的值，并使用 `branches` 键指定要监控的分支，则 GitHub 为这些分支上的拉取请求设置事件侦听器。

    ```
     on:
       pull_request:
         branches:
           - main
           - staging
    ```
    
    此配置意味着在向 `main` 或 `staging` 分支发出拉取请求时，GitHub 会触发工作流。
    
    **多重触发器**:
    您可以在 `on` 参数中定义多个事件侦听器。例如，除了拉取请求，还可以添加一个监听推送事件的侦听器。
    
    ```
     on:
       pull_request:
         branches:
           - main
           - staging
       push:
         branches:
           - main
    ```
    
    此配置确保工作流在以下情况下被触发：
    
    -   向 `main` 或 `staging` 分支发出拉取请求。
        
    -   直接向 `main` 分支进行推送。
        

📘 **了解更多关于触发器的信息：**请查看[GitHub 官方文档][16]。

3.  `jobs`：`jobs` 部分概述了工作流将执行的具体任务（或作业）。每个作业都是在单独的虚拟机（VM）上运行的独立工作单元。这种隔离确保了每个作业都有一个干净、独立的环境，避免了任务之间潜在的冲突。
    
    **关于作业的关键点：**
    
    1.  **每个作业的干净 VM**：当 GitHub Actions 运行工作流时，它为每个作业分配一个专用的 VM 实例。这意味着每个作业的环境都是重置的，确保任务之间没有重叠或干扰。
        
    2.  **多个作业**：工作流可以有多个作业，每个作业负责一个特定的任务。例如：
        
        -   **测试**作业用于安装依赖项和运行自动化测试。
            
        -   **构建**作业用于编译应用程序。
            
    3.  **作业组织**：作业可以组织为运行：
        
        -   **顺序**：确保一个作业完成后再开始下一个作业，例如测试作业必须在构建作业之前完成。这种顺序流程模拟了“管道”结构。
            
        -   **同时**：多个作业可以并行运行以节省时间，特别是当这些作业彼此独立时。
            
    4.  **当前工作流中的单个作业**：在我们当前的工作流中，只有一个作业 `test`，它：
        
        -   安装依赖项。
            
        -   运行自动化测试。
            
        -   构建应用程序。

4.  `runs-on: ubuntu-latest`: 指定作业运行的操作系统。GitHub 提供了预配置的虚拟环境，我们使用最新的 Ubuntu 镜像。
    
5.  `env`: 为作业设置环境变量。在这里，我们定义应用程序使用的 **PORT** 变量。
    
6.  **Steps (步骤)**: 步骤定义了一个作业中要执行的各个操作：

    -   `Checkout (签出)`: 使用 `actions/checkout` 操作将包含代码库的特性分支克隆到虚拟机实例环境中。此步骤确保流水线能访问项目文件。
        
    -   `Install dependencies (安装依赖)`: 运行 `npm ci` 以安装所需的 Node.js 包。
        
    -   `Test application (测试应用程序)`: 使用 `npm test` 命令运行自动化测试。这用于验证代码库中是否有错误或失败的测试用例。
        
    -   `Build application (构建应用程序)`: 如果在 `package.json` 中定义了构建脚本，则构建应用程序。`--if-present` 标志确保如果没有构建脚本，此步骤不会失败。
        

既然我们已经完成了在 `main` 或 `staging` 分支上的拉取请求中运行的 CI 流水线，那么让我们继续设置 **持续交付（CD）** 和 **持续部署** 流水线。🚀

### 第三步：持续交付和部署工作流

**首先，创建流水线文件**:  
在 `.github/workflows` 文件夹中，创建一个名为 `cd-pipeline.yml` 的新文件。此文件将定义用于自动化交付和部署的工作流。

**接下来，粘贴配置**:  
将以下配置复制并粘贴到 `cd-pipeline.yml` 文件中：

```
name: CD Pipeline to Google Cloud Run (staging and production)
on:
  push:
    branches:
      - staging
  workflow_dispatch: {}
  release:
    types: published

env:
  PORT: 5001
  IMAGE: ${{vars.IMAGE}}:${{github.sha}}
jobs:
  test:
    runs-on: ubuntu-latest
    name: Setup, test, and build project
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install dependencies
        run: npm ci

      - name: Test application
        run: npm test
  build:
    needs: test
    runs-on: ubuntu-latest
    name: Setup project, Authorize GitHub Actions to GCP and Docker Hub, and deploy
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Authenticate for GCP
        id: gcp-auth
        uses: google-github-actions/auth@v0
        with:
          credentials_json: ${{ secrets.GCP_SERVICE_ACCOUNT }}

      - name: Set up Cloud SDK
        uses: google-github-actions/setup-gcloud@v0

      - name: Authenticate for Docker Hub
        id: docker-auth
        env:
          D_USER: ${{secrets.DOCKER_USER}}
          D_PASS: ${{secrets.DOCKER_PASSWORD}}
        run: |
          docker login -u $D_USER -p $D_PASS
      - name: Build and tag Image
        run: |
          docker build -t ${{env.IMAGE}} .
      - name: Push the image to Docker hub
        run: |
          docker push ${{env.IMAGE}}
      - name: Enable the Billing API
        run: |
          gcloud services enable cloudbilling.googleapis.com --project=${{secrets.GCP_PROJECT_ID}}
      - name: Deploy to GCP Run - Production environment (If a new release was published from the master branch)
        if: github.event_name == 'release' && github.event.action == 'published' && github.event.release.target_commitish == 'main'
        run: |
          gcloud run deploy ${{vars.GCR_PROJECT_NAME}} \
          --region ${{vars.GCR_REGION}} \
          --image ${{env.IMAGE}} \
          --platform "managed" \
          --allow-unauthenticated \
          --tag production \
      - name: Deploy to GCP Run - Staging environment
        if: github.ref != 'refs/heads/main'
        run: |
          echo "Deploying to staging environment"
          # Deploy service with to staging environment
          gcloud run deploy ${{vars.GCR_STAGING_PROJECT_NAME}} \
          --region ${{vars.GCR_REGION}} \
          --image ${{env.IMAGE}} \
          --platform "managed" \
          --allow-unauthenticated \
          --tag staging \
```

**CD 流水线**配置将持续交付和持续部署工作流合并到一个文件中，以简化操作。它基于我们之前讨论的 CI/CD 概念，自动化测试、构建和将应用程序部署到 Google Cloud Run。

#### CD 流水线的说明：

1.  #### 工作流触发器 (`on`)
    

-   `push`: 在推送到 `staging` 分支时触发工作流。
    
-   `workflow_dispatch`: 允许通过 GitHub Actions 界面手动执行工作流。
    
-   `release`: 在发布新版本时触发。  
    示例：当从 `main` 分支发布版本时，应用程序将部署到生产环境。
    

2.  **作业 1 – 测试代码库:** 流水线中的第一个作业“测试”确保代码库在交付或部署之前功能正常且无错误。
    
3.  **作业 2 – 构建和部署应用程序:** Aha! 时刻 ✨: 这些作业按顺序运行。😃 **构建**作业仅在**测试**作业成功完成后开始。它为部署准备应用程序并管理实际的部署过程。
    
    以下是发生的情况：
    
    -   **为 GCP 和 Docker Hub 授权**: 工作流使用 `google-github-actions/auth@v0` 操作处理存储为机密的服务帐户凭据进行 GCP 认证。同样，使用存储的凭据登录 Docker Hub 以启用图像上传。
        
    -   **构建和推送 Docker 镜像**: 应用程序被构建为 Docker 镜像并标记唯一标识符 (`${{env.IMAGE}}`)。此镜像随后被推送到 Docker Hub，以便部署时访问。
        
    -   **部署到 Google Cloud Run**: 根据触发工作流的事件，应用程序**部署到 Google Cloud Run 中的暂存或生产环境**。推送到 `staging` 分支会部署到暂存环境（持续交付），而从 `main` 分支发布则会部署到生产环境（持续部署）。

为什么？工作流配置文件是您代码库的一部分，任何有权访问代码库的人都可以访问该文件。如果在这里暴露了敏感数据，如 API 密钥或密码，则可能很容易被泄露。 😨

相反，我们使用 GitHub 的 **Secrets** 来安全地存储和访问这些信息。Secrets 允许我们定义加密的变量，这些变量只能由我们的工作流访问。例如：

-   **DockerHub 凭据**：我们会将 Docker 用户名和访问令牌添加到代码库的 secrets 中。这些对于验证 DockerHub 并上传构建的 Docker 镜像至关重要。
    
-   **Google Cloud 服务账户密钥**：这个密钥将授予流水线必要的权限，以便安全地在 **Google Cloud Run** 上部署应用程序。
    
我们将在推进的过程中逐步设置这些变量和 secrets，确保每一步都是完全安全和可用的。 🎯

## **为项目的镜像设置 Docker Hub 仓库并生成用于发布镜像的访问令牌** 📦

在进入具体步骤之前，我们快速了解一下我们即将做的事情。在本节中，您将学习如何创建 Docker Hub 仓库，这就像是用于存储应用程序容器镜像的在线存储空间。

可以将容器镜像视为应用程序的一个快照，可以随时随地进行部署。为了确保顺畅和安全的访问，我们还将生成一个特别的访问令牌，这种令牌类似于可以撤销的密码，我们的 CI/CD 流水线可以使用它来将您的应用的镜像上传到 Docker Hub。让我们开始吧！🚀

### 步骤 1：注册 Docker Hub

这是注册 Docker Hub 的步骤：

1.  **访问 Docker Hub 网站**：打开您的网络浏览器并访问 [https://hub.docker.com/](https://hub.docker.com/)。
    
2.  **创建账户**：在 Docker Hub 首页，您会看到右上角有一个标记为 **"Sign Up"** 的按钮。点击它。
    
3.  **填写详细信息**：系统会要求您提供一些详细信息，如您的用户名、电子邮件地址和密码。请选择一个您可以记住的强密码。
    
4.  **同意条款**：您需要勾选一个框以同意 Docker 的服务条款。之后，点击 **“Sign Up”** 来创建您的账户。
    
5.  **验证您的电子邮件**：Docker Hub 会向您发送一封电子邮件以验证您的账户。打开这封邮件并点击验证链接以完成账户创建。
    

### 步骤 2：登录 Docker Hub

在验证您的电子邮件后，返回 Docker Hub，并点击右上角的 **"Sign In"**。然后您可以使用刚创建的凭据登录。

### 步骤 3：生成访问令牌（用于 CI/CD 流水线）

现在您有了账户，可以创建一个访问令牌。这个令牌将允许您的 GitHub Actions 工作流安全地登录到 Docker Hub 并上传 Docker 镜像。

登录 Docker Hub 后，点击右上角的个人资料图片（或头像）。这将打开一个菜单。从菜单中点击 “Account Settings”。

然后在账户设置的左侧菜单中，滚动到 **"Security"** 标签。这一部分是您管理令牌和密码的地方。

现在您需要创建一个新的访问令牌。在 Security 标签中，您会看到一个标记为 **“Personal access tokens”** 的链接——点击它。点击标记为 **“Generate new token”** 的按钮。

系统会要求您为您的令牌提供一个描述。您可以将其命名为"GitHub Actions CI/CD"这类名称，以便知道它的用途。

在给它一个描述之后，点击 **Access permissions dropdown** 并选择 **“Read & Write“**，或者 **“Read, Write, Delete“**。点击 **“Generate”**。

![Create Docker access token](https://cdn.hashnode.com/res/hashnode/image/upload/v1733129374816/c725f041-c0ef-49a0-b8ef-ca62acafc1ee.png)

现在，您需要复制凭据。点击生成按钮后，Docker Hub 将创建一个访问令牌。**立即复制此令牌和您的用户名**并将其安全保存，例如保存在一个文件中（别担心，我们会将其添加到我们的 GitHub secrets 中）。您将无法再次看到这个令牌，所以请确保保存它！

![Copy Docker username + access token](https://cdn.hashnode.com/res/hashnode/image/upload/v1733133363382/33dbf334-a7ec-4151-8639-5368c3ccaedb.png)

### 步骤 4：将令牌添加到 GitHub 作为 Secret

要做到这一点，请打开托管代码库的 GitHub 仓库。在 GitHub 仓库中，点击 **Settings** 标签（位于仓库页面的顶部附近）。

然后在左侧边栏中向下滚动并点击 **“Secrets and Variables”**，然后选择 **“Actions”**。

1.  ![Open GitHub Actions Secrets](https://cdn.hashnode.com/res/hashnode/image/upload/v1733133003023/75c3bd35-1a5b-46fa-845a-0f4fd8305d53.png)

以下是创建和管理新 secret 的步骤：

1.  **添加新 secret**：点击 **“New repository secret”** 按钮。
    
2.  **设置 secret**：
    
    -   在 **Name** 字段中，输入 `DOCKER_PASSWORD`。
        
    -   在 **Value** 字段中，粘贴您之前复制的访问令牌。
        
3.  **保存 secret**：最后，点击 **Add secret** 以安全地将您的 Docker 访问令牌保存在 GitHub 中。


就是这样！现在，您的 CI/CD 管道可以使用此令牌安全地登录到 Docker Hub，并在触发时自动上传镜像。🎉

### **步骤 5：为项目创建 Dockerfile**

在您可以构建并发布 Docker 镜像到 Docker Hub 之前，您需要创建一个 `Dockerfile`，其中包含构建您的应用程序所需的指令。

按照以下步骤在项目的根文件夹中创建 `Dockerfile`：

1.  导航到项目的根文件夹。
    
2.  创建一个名为 `Dockerfile` 的新文件。
    
3.  用文本编辑器打开 **Dockerfile**，并将以下内容粘贴到其中：
    

```
FROM node:18-slim

WORKDIR /app

COPY package.json .

RUN npm install -f

COPY . .

# EXPOSE 5001
EXPOSE 5001

CMD ["npm", "start"]
```

#### Dockerfile 的解释：

-   `FROM node:18-slim`：这设置了 Docker 容器的基础镜像，是基于版本 18 的官方 Node.js 镜像的精简版本。
    
-   `WORKDIR /app`：将容器内应用程序的工作目录设置为 `/app`。
    
-   `COPY package.json .`：将 `package.json` 文件复制到工作目录中。
    
-   `RUN npm install -f`：使用 `npm` 安装项目依赖项。
    
-   `COPY . .`：将其余的项目文件复制到容器中。
    
-   `EXPOSE 5001`：这告诉 Docker 暴露端口 `5001`，这是我们的应用将在容器内运行的端口。
    
-   `CMD ["npm", "start"]`：这设置了在运行容器时启动应用程序的默认命令，使用 `npm start`。
    

## **创建 Google Cloud 账号、项目和结算账户** ☁️

在本节中，我们为将应用程序部署到 Google Cloud 打下基础。首先，我们将设置一个 Google Cloud 账户（不用担心，开始是免费的！）。然后，我们将创建一个新项目，其中将存放应用程序的所有资源。

最后，我们将启用计费功能，以便您可以解锁部署所需的云服务。将其视为在云中设置您的工作区——组织良好、准备就绪且安全！让我们开始吧！☁️

### 步骤 1：创建或登录 Google Cloud 账户 🌐

首先，前往 [Google Cloud 控制台][19]。如果您没有 Google Cloud 账户，则需要创建一个。

要执行此操作，请点击 **免费开始** 并按照步骤设置您的账户（需要提供付款信息，但 Google 提供 300 美元的免费额度以供起步）。如果您已经有 Google 账户，只需使用您的凭据登录。

登录后，您将进入 Google Cloud 仪表板。在这里您可以管理所有的云项目和资源。

### 步骤 2：创建一个新的 Google Cloud 项目 🏗️

在 Google Cloud 控制台的左上角，您会看到 Google Cloud 标志旁边的下拉菜单。点击此下拉菜单以显示您当前的项目。

现在是创建新项目的时候了。在弹出模式窗口的左上角，点击 **新项目** 按钮。

![创建 Google Cloud 项目](https://cdn.hashnode.com/res/hashnode/image/upload/v1733134260252/6769909a-cf9c-4c91-9d79-7676500f3981.webp)

您将被重定向到一个页面，您需要为新项目提供一些基本信息。现在输入以下信息：

-   **项目名称：** 为项目输入一个您选择的名称（例如，`gcr-ci-cd-project`）。
    
-   **位置：** 选择项目的位置。如果您刚开始，可以将其保留为默认的“无组织”。
    

输入项目名称后，点击 **创建** 按钮。Google Cloud 现在将开始创建您的新项目。这可能需要几秒钟时间。

### 步骤 3：访问您的新项目 🛠️

几秒钟后，您将被重定向到 **Google Cloud 仪表板**。

再次点击 Google Cloud 标志旁边的下拉菜单，您现在应该可以在模式窗口中看到您新创建的项目并选择它。

然后点击项目名称（例如，`gcr-ci-cd-project`）进入项目的仪表板。

### 步骤 4：将结算账户链接到您的项目 💳

要访问计费页面，在 Google Cloud 控制台中，找到屏幕左上角的 **导航菜单**（三个水平线）。点击它以打开选项列表。向下滚动并点击 **结算**。这将带您进入 Google Cloud 账户的结算部分。

![导航到 Google Cloud 结算仪表板/部分](https://cdn.hashnode.com/res/hashnode/image/upload/v1733134747962/745c8a0e-13c5-4dde-849b-303c1200f495.png)

如果您尚未设置结算账户，系统将提示您进行设置。点击 **“链接结算账户”** 按钮开始该过程。

现在您可以创建一个新的结算账户（如果您还没有的话）。您将被重定向到一个页面，在那里您可以选择一个现有的结算账户或创建一个新的帐户。如果您还没有结算账户，请点击 **“创建结算账户”**。

提供必要的详细信息，包括：

-   **账户名称**（例如，“个人结算账户”或您的公司名称）。
    
-   **国家**：选择您的企业或账户所在的国家。
    
-   **货币**：选择您希望使用的计费货币。
    
    ![创建 Google Cloud 结算账户](https://cdn.hashnode.com/res/hashnode/image/upload/v1733135153425/1287ab53-e9c5-45b5-a09d-3d3a13840ca4.png)
    

阅读并同意 Google Cloud 服务条款和账单账户条款。一旦完成此操作，点击 **“开始计费”**，以完成您的账单账户设置。

在设置账单账户之后，您将进入一个页面，询问您是否将其**链接**到您的项目。选择您刚创建的账单账户或您想使用的现有账单账户。点击“设置账户”以将账单账户链接到您的项目。

![将 Google Cloud 账单账户链接到项目](https://cdn.hashnode.com/res/hashnode/image/upload/v1733337276189/b80702dd-2ff6-42db-a325-c2082e8059e5.png)

将账单账户链接到您的项目后，您应该会看到一条确认消息，指示您的项目已成功启用计费。

您随时可以通过返回 Google Cloud Console 的计费部分进行验证，您将在这里看到您的账单账户信息。

## **创建 Google Cloud 服务账户以通过 CD 管道启用将 Node.js 应用程序部署到 Google Cloud Run** 🚀

### 我们为什么需要服务账户和密钥？ 🤔

**服务账户**允许我们的 CI/CD 管道以编程方式进行身份验证和与 Google Cloud 服务的交互。通过分配特定的角色（权限），我们可以确保该服务账户只能执行与部署相关的任务，如管理 Google Cloud Run。

**服务账户密钥**是一个包含用于身份验证的凭据的 JSON 文件。我们将此密钥作为 GitHub secret 进行安全存储，以保护敏感信息。

### 步骤 1：打开服务账户页面

以下是您可以按照的步骤来设置您的服务账户并获取您的密钥：

首先，访问 [Google Cloud Console](https://console.cloud.google.com/) 确保您已选择正确的项目（例如，`gcr-ci-cd-project`）。要更改项目，请点击左上角 Google Cloud 标志旁的下拉菜单，然后选择您的项目。

然后导航到导航菜单（左上角的三条横线），点击 **IAM 和管理 > 服务账户**。

![导航到 Google Cloud IAM - 服务账户](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147553088/e3647442-ca8e-4197-ab5f-91cee5a6d6b0.png)

### 步骤 2：创建新的服务账户

点击“创建服务账户”按钮。这将打开一个表单，您将在其中定义您的服务账户详细信息。

接下来，输入服务账户详细信息：

-   **名称**：输入一个描述性名称（例如，`ci-cd-sa`）。
-   **ID**：将根据名称自动填充。
-   **描述**：添加一个描述以帮助识别其用途，例如“用于将 Node.js 应用程序部署到 Cloud Run”。
-   点击 **创建并继续** 以继续。

### 步骤 3：分配必要的角色（权限）

在下一个屏幕中，您将为服务账户分配角色。逐一添加以下角色：

-   **Cloud Run Admin**：允许管理 Cloud Run 服务。
-   **Service Account User**：授予使用服务账户的能力。
-   **Service Usage Admin**：使控制启用 API 的能力。
-   **Viewer**：提供查看资源的只读访问权限。

要添加角色：

-   点击 **“选择角色”**。
-   使用搜索栏输入角色名称（例如，“Cloud Run Admin”）并选择它。
-   对所有四个角色重复此操作。

![创建 Google Cloud 服务账户 - 在创建过程中为服务账户添加角色](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147870701/393833c9-c320-49e3-8743-dbc0d739b99b.png)

您的屏幕应类似于此：

![创建 Google Cloud 服务账户 (SA) - 完成为 SA 分配所有角色](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147949148/c509c810-767d-4900-aa44-a737cc1c8dc1.png)

分配角色后，点击 **继续**。

### 步骤 4：跳过授予用户对服务账户的访问

在下一个屏幕中，您将看到一个选项，用于授予其他用户对此服务账户的访问权限。点击 **完成** 以完成创建过程。

### 步骤 5：生成服务账户密钥 🔑

您现在应该在列表中看到您新创建的服务账户。找到您的服务账户所在的行（例如，`ci-cd-sa`），然后点击“操作”列下的三个竖点。从下拉菜单中选择 **“管理密钥”**。

要添加新密钥：

-   点击 **“添加密钥” > “创建新密钥”**。
-   在弹出对话框中，选择 **JSON** 作为密钥类型。
-   点击 **创建**。

  ![创建 Google Cloud 服务账户密钥](https://cdn.hashnode.com/res/hashnode/image/upload/v1733148120618/c7014982-ae7d-40ed-bbfb-0c8f5c4b8090.png)

现在，下载密钥文件。一个 JSON 文件将自动下载到您的计算机。该文件包含与 Google Cloud 身份验证所需的凭据。

确保您保持密钥安全并存储在安全位置。不要分享它——将其视为敏感信息。

### 步骤 6：将服务账户密钥添加到 GitHub Secrets 🔒

首先，使用文本编辑器（如 Notepad 或 VS Code）打开下载的 JSON 文件。然后选择并复制文件的全部内容。

现在您需要添加一个新的密钥。点击 **“New repository secret”（新建仓库密钥）** 按钮。在 **Name（名称）** 字段中，输入 `GCP_SERVICE_ACCOUNT`。在 **Value（值）** 字段中，粘贴您之前复制的 JSON 内容。点击 **Add secret（添加密钥）** 保存它。

对 `GCP_PROJECT_ID` 密钥执行相同操作，但现在将您的 Google 项目 ID 添加为值。要获取项目 ID，请按照以下步骤操作：

1. **导航到 Google Cloud 控制台**：打开 Google Cloud 控制台，网址为 [https://console.cloud.google.com/][21]。
   
2. **找到项目下拉菜单**：在屏幕左上角，**Google Cloud 徽标**旁边，您会看到一个下拉菜单，显示您当前项目的名称。
   
3. **查看项目 ID**：点击下拉菜单，您将看到所有项目的列表。您的 **项目 ID** 将显示在项目名称旁边。它是 Google Cloud 使用的唯一标识符。
   
4. **复制项目 ID**：复制显示的 **项目 ID**，并将其作为 `GCP_PROJECT_ID` 密钥的值添加。
    

### 第七步：向 GitHub 仓库添加外部变量 🔧

在进行部署之前，我们需要定义在 CD 工作流中引用的一些外部变量。这些变量确保管道知道有关您的 Google Cloud Run 服务和 Docker 容器注册表的关键信息。

您需要执行以下步骤来完成此操作：

1. 首先，进入您的 GitHub 仓库。
   
2. 点击仓库顶部的 **Settings（设置）** 选项卡。向下滚动到 **Secrets and variables > Actions（密钥和变量 > 操作）**。
   
3. 点击 **Variables（变量）** 选项卡旁边的 **Secrets（密钥）**。为每个变量点击 **“New repository variable”（新建仓库变量）**。您需要定义这些变量：
   
   - `GCR_PROJECT_NAME`：将其设置为生产/上线环境的 Cloud Run 服务名称。例如 `gcr-ci-cd-app`。
     
   - `GCR_STAGING_PROJECT_NAME`：将其设置为预发布/测试环境的 Cloud Run 服务名称。例如 `gcr-ci-cd-staging`。
     
   - `GCR_REGION`：输入您希望部署服务的区域。对于本教程，将其设置为 `us-central1`。
     
   - `IMAGE`：指定已发布图像将上传到的 Docker 镜像/容器注册表的名称。例如 `<dockerhub-username>/ci-cd-tutorial-app`。
     
4. 输入每个变量名称和值后，点击 **Add variable（添加变量）**。
    

### 在 Google Cloud 项目中启用 Service Usage API 🌐

要部署应用程序，必须在您的 Google Cloud 项目中启用 **Service Usage API**。该 API 允许您以编程方式管理 Google Cloud 服务，包括启用/禁用 API 以及监控其使用情况。

按照以下步骤启用它：

1. 首先，访问 Google Cloud 控制台，网址为 [https://console.cloud.google.com/][22]。
   
2. 确保您在正确的项目中。在左上角 **Google Cloud 徽标**旁边点击项目下拉菜单。从项目列表中选择 `gcr-ci-cd-project` 或您为项目提供的名称。
   
3. 接下来，您需要访问 API 库。打开 **导航菜单**（左上角的三个水平线）。从菜单中选择 **APIs & Services > Library（API 和服务 > 库）**。
   
4. 在 API 库中，使用搜索栏搜索 **“Service Usage API”**。
   
5. 在搜索结果中点击 **Service Usage API**。在 API 的详细信息页面上，点击 **Enable（启用）**。
   
6. 为确认，请转到 Google Cloud 控制台中的 **APIs & Services > Enabled APIs & Services（API 和服务 > 已启用的 API 和服务）**。确认 **Service Usage API** 出现在已启用的 API 列表中。
    
    ![在项目中启用 Google Cloud “Service Usage API”](https://cdn.hashnode.com/res/hashnode/image/upload/v1733150269757/00a4e20b-72ac-4bd4-b05f-af6e61600e09.png)
    

## **创建 Staging 分支并将特性分支合并到其中（持续集成和持续交付） 🌟**

当 `feature/ci-cd-pipeline` 分支的更改合并到 `staging` 分支时，我们完成了 **持续集成 (CI)** 过程，工作流 `ci-pipeline.yml` 将运行。这确保了在特性分支中所做的更改经过测试并集成到共享分支中。

一旦拉取请求 (PR) 被合并到 `staging`，**持续交付 (CD)** 管道会自动触发，将应用程序部署到预发布环境。这模拟了更新在安全环境中进行测试，然后推到生产环境。

### 在远程仓库上创建 `staging` 分支

为了启用 CI/CD 管道，首先我们将在远程 GitHub 仓库上创建一个 `staging` 分支。该分支将作为测试环境，部署更改后才会到达生产环境。

要直接在 GitHub 上创建 `staging` 分支，请按照以下步骤操作：

1. 首先，导航到您的 GitHub 仓库。在网页浏览器中打开要创建新 `staging` 分支的 GitHub 仓库。
   
2. 然后，切换到 `main` 分支。在仓库页面顶部，找到 **Branch（分支）** 下拉菜单（通常标记为 `main` 或当前分支名称）。点击下拉菜单并确保您位于 `main` 分支。
   
3. 接下来，创建 `staging` 分支。在您看到 `main` 分支的下拉菜单中，在文本框中输入 `staging`。一旦开始输入，GitHub 会为您提供创建新 `staging` 分支的选项。从下拉菜单中选择 **Create branch: staging（创建分支：staging）** 选项。
   
4. 最后，验证分支**。**创建 `staging` 分支后，GitHub 会自动切换到它。现在您应该在分支下拉菜单中看到 `staging`，确认新分支已创建。
    
    ![在 GitHub 仓库中创建新的 Staging 分支](https://cdn.hashnode.com/res/hashnode/image/upload/v1733152232155/e6215137-5e3b-474b-88f8-af03269eccc2.png)


这个流程结合了持续集成 (CI) 和持续交付 (CD)。您将在功能分支上提交更改，将它们推送到远程功能分支，然后创建一个 PR 将这些更改合并到 `staging` 分支。具体步骤如下：

#### **步骤 1：在功能分支上提交本地更改**

首先，您需要确保自己位于正确的分支（功能分支）上，运行以下命令：

```
git status
```

如果您不在 `feature/ci-cd-pipeline` 分支上，请通过以下命令切换到该分支：

```
git checkout feature/ci-cd-pipeline
```

现在，是时候添加您所做的更改以进行提交：

```
git add .
```

这将暂存所有更改，包括新文件、已修改文件和已删除文件。

接下来，通过明确且描述性的消息提交您的更改：

```
git commit -m "为项目设置 CI/CD 管道"
```

然后，您可以通过运行以下命令来验证您的提交：

```
git log
```

这将显示您最近的提交，您应能看到您刚添加的提交消息。

#### **步骤 2：将功能分支上的更改推送到远程存储库**

在提交更改后，将它们推送到远程存储库：

```
git push origin feature/ci-cd-pipeline
```

这将您的本地更改推送到远程 GitHub 存储库的 `feature/ci-cd-pipeline` 分支。

一旦推送成功，请在网络浏览器中访问您的 GitHub 存储库，并确认 `feature/ci-cd-pipeline` 分支已更新您的新提交。

#### **步骤 3：创建拉取请求将功能分支合并到 Staging**

前往 GitHub 上的存储库，确保您位于存储库的主页。

您应该在页面顶部看到一个提示，建议您为最近推送的分支 (`feature/ci-cd-pipeline`) 创建拉取请求。点击警告旁的 **Compare & Pull Request** 按钮。

现在，是选择基准和比较分支的时候了。在 PR 创建页面上，确保 **base** 分支设置为 `staging`（这就是您想要合并更改的分支）。**compare** 分支应已设置为 `feature/ci-cd-pipeline`（您刚刚推送的分支）。如果它们未正确选择，请使用下拉菜单更改它们。

您需要为此写一个好的 PR 描述。撰写一个清晰的标题和描述，解释您正在合并的更改以及原因。例如：

-   **标题**：“将功能分支的 CI/CD 设置变更合并”
    
-   **描述**：“此拉取请求为项目添加了适用于 GitHub Actions 和 Docker Hub 集成的 CI/CD 管道。它包括 CI 和 CD 工作流的配置。”
    

现在，GitHub 将显示所有将被合并的更改列表。花几分钟时间检查一下，确保一切看起来正确无误。

如果在检查后您认为一切都正常，点击 **Create pull request** 按钮。这将创建 PR 并通知团队成员（如果有）变更已准备好进行审核和合并。

稍等几秒钟，您应能看到一条消息，表明所有检查均已通过。点击描述为 "**CI Pipeline to staging/production environment...**" 的链接。这应将您重定向到持续集成工作流页面，在那里您可以查看运行的步骤。

![从功能分支创建到 Staging 分支的新拉取请求 (PR)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733153444873/6ecdb277-0a45-44ec-981c-c7ee671cd2f0.png)

![从 PR (功能分支到 Staging 分支) 运行 CI 工作流](https://cdn.hashnode.com/res/hashnode/image/upload/v1733153637817/e12fefde-9259-41a3-9bd1-63b5da1d88ea.png)

#### 持续集成 (CI) 过程

当向 `staging` 分支发起拉取请求时，CI 过程开始。它触发 `.github/workflows/ci-pipeline.yml` 文件中定义的 GitHub Actions 工作流。该工作流运行必要的步骤来设置环境、安装依赖项并构建 Node.js 应用程序。

然后，它运行自动化测试（使用 `npm test`）以确保这些更改不会破坏代码库中的任何功能。如果所有这些步骤都成功完成，CI 管道会确认功能分支是稳定的，并准备好合并到 `staging` 分支以进行进一步测试和部署。

#### **步骤 4：合并拉取请求**

如果您的团队或合作成员是项目的一部分，他们可能会审核您的 PR。此步骤可能涉及讨论任何更改或改进。如果一切看起来良好，审核员将合并 PR。

在您的 PR 被审核并批准后，您可以合并 PR。为此，只需点击 **Merge pull request** 按钮。在提示时选择 **Confirm merge**。

合并后，您可以转到 `staging` 分支以验证更改是否已成功合并。

### **合并 PR 后导航到操作页面**

一旦您成功地将拉取请求从 `feature/ci-cd-pipeline` 分支合并到 `staging` 分支，将触发持续交付 (CD) 管道。要查看 CD 管道的进度，请导航到 GitHub 存储库中的 **Actions** 标签页。步骤如下：

```markdown
![从合并到预生产环境的持续交付工作流（特性到预生产）](https://cdn.hashnode.com/res/hashnode/image/upload/v1733154575368/96e236a2-ae66-494b-b544-f96955a18ac9.png)

![从合并到预生产环境的持续交付工作流作业（特性到预生产）](https://cdn.hashnode.com/res/hashnode/image/upload/v1733159329441/cb7e26a9-7a20-4b1b-9869-e00facc695c1.png)

![从合并到预生产环境的持续交付工作流步骤（特性到预生产）](https://cdn.hashnode.com/res/hashnode/image/upload/v1733160506355/4682afe3-bb04-405d-af4e-fd9bd3494659.png)

这将允许您监控 CD 管道的状态，并检查在部署过程中是否存在任何问题。

如果你查看 CD 步骤和工作流，你会发现将应用程序部署到**生产**环境的步骤被跳过了，而将其部署到**预生产**环境的步骤得以执行。

#### **持续交付 (CD) 管道——发生了什么：**

**持续交付 (CD) 管道** 自动化将应用程序部署到 Google Cloud Run（测试环境）的过程。该工作流由推送到 `staging` 分支触发，这发生在特性分支的更改合并到 `staging` 后。它也可以通过 `workflow_dispatch` 手动触发，或者在发布新版本时触发。

管道由多个阶段组成：

1. **测试作业：** 管道从设置环境并使用 `npm test` 命令运行测试开始。如果测试通过，过程会继续进行。
    
2. **构建作业：** 下一步是构建 Node.js 应用程序的 Docker 镜像，标记它，然后将其推送到 Docker Hub。
    
3. **部署到 GCP：** 在镜像被推送后，工作流将认证到 Google Cloud 并部署应用程序。如果事件是发布（即推送到 `main` 分支），应用程序会被部署到生产环境。如果事件是推送到 `staging`，应用程序会被部署到预生产环境。
    

CD 过程确保对 `staging` 分支所做的任何更改都自动进行测试、构建并部署到预生产环境，准备好进一步验证。当发布被发布时，它将触发部署到生产环境，确保您的应用程序始终保持最新。

### 访问在 Google Cloud Run 上的预生产环境中已部署的应用程序 🌐

一旦成功完成部署到 Google Cloud Run，您将需要访问在 **预生产** 环境中运行的应用程序。请按照以下步骤查找并访问已部署的应用程序：

#### 1. **导航到 Google Cloud 控制台**

在浏览器中打开 Google Cloud 控制台，访问 [https://console.cloud.google.com][23]。如果您尚未登录，请确保使用您的 Google 帐户登录。

#### 2. **转到 Cloud Run 仪表板**

在 Google Cloud 控制台中，使用顶部的搜索栏或通过左侧菜单导航：转到 **Cloud Run**（您可以在搜索栏中键入，或在 **Products & services** > **Compute** > **Cloud Run** 下找到它）。点击 **Cloud Run** 打开 Cloud Run 仪表板。

#### 3. **选择您的预生产服务**

在 **Cloud Run 仪表板**中，您应该看到在各个环境中部署的所有服务的列表。找到与预生产环境相关联的服务。该名称应该类似于您在工作流中定义的，例如 `gcr-ci-cd-staging`。

![Google Cloud Run 预生产环境服务](https://cdn.hashnode.com/res/hashnode/image/upload/v1733159635861/4ac895d2-5071-4d3f-9ed1-5af2bcca8835.png)

#### 4. **访问服务 URL**

一旦您选择了您的预生产服务，您将被带到 **服务详细信息页面**。该页面提供有关已部署服务的所有重要信息。  
在该页面上，查找 **服务 URL** 下的 **URL** 部分。网址看起来像：`https://gcr-ci-cd-staging-<unique-id>.run.app`。

#### 5. **访问应用程序**

点击 **服务 URL**，它将在浏览器的新标签中打开您的预生产环境。您现在可以像在**预生产环境**中实时一样与您的应用程序进行交互。

![Google Cloud Run 预生产环境服务 URL](https://cdn.hashnode.com/res/hashnode/image/upload/v1733160050763/b097e647-bf6d-442e-87df-fc7d82d3585c.png)

## **将预生产分支合并到主分支（持续集成和持续部署）🌐**

在本节中，我们将获取预生产分支中的更新，将其合并到主分支，并触发 CI/CD 管道。这个过程不仅确保您的更改已做好生产准备，还部署它们到生产/实时环境。🚀

### 步骤 1：推送本地更改并打开请求合并

**为何？** 第一步涉及将预生产分支合并到主分支。就像在之前的持续交付过程中一样，这确保了充分测试的更新得到集成。

以下是如何操作：

首先，访问托管您的项目的 GitHub 仓库。
```


### 步骤2：持续集成（CI）流水线执行

在合并拉取请求后，**持续集成（CI）** 流水线将自动执行，以验证更改在集成到**主分支**时的稳定性。

#### 流水线步骤：

-   **代码签出**：工作流从**主分支**提取最新的代码。
    
-   **依赖安装**：流水线安装所有必需的依赖项。
    
-   **测试**：运行自动化测试以验证应用程序的稳定性。
    

### 步骤3：创建新版本

从主分支创建新版本会触发部署到生产环境的持续部署（CD）工作流。

让我们来看看创建版本的步骤。

在您的 GitHub 仓库页面上，点击 **Releases** 部分（位于 **Code** 标签下）。

![导航到 GitHub 仓库中的 Release 页面](https://cdn.hashnode.com/res/hashnode/image/upload/v1733338781623/c21e7f03-5381-47f9-8807-b5a3360245ad.png)

接下来，点击 **Draft a new release**。将 **Target** 分支设置为 **main**。输入一个符合语义化版本规则的 **Tag version**（例如，`v1.0.0`）。添加一个**发布标题**和一个可选的更改描述。

然后，点击 **Publish Release** 以完成。

![在 GitHub 仓库中创建新版本](https://cdn.hashnode.com/res/hashnode/image/upload/v1733161473858/6e14214c-31fb-49b3-9dff-a719b9ec1d40.png)

#### 为什么在发布时而不是在推送时运行持续部署流水线？🤔

在我们的设置中，我们决定不在每次对主分支的更改推送时触发持续部署（CD）流水线。相反，我们仅在创建新版本时才触发。这让团队对何时将更新部署到生产环境有了更多的控制。

想象一下开发人员正在开发新功能的情景——他们可能会将更改推送到主分支，作为他们常规工作流程的一部分，但是这些功能可能尚未完成或准备好给用户使用。自动部署每次推送可能会意外地将未完成的功能暴露给用户，这可能会引起混乱或中断。

通过要求版本以触发部署，团队有机会在更改上线前进行最终确定和完善。

例如，开发人员可以在暂存环境中测试新功能，修复任何问题，并将这些更改合并到主分支，而无需担心它们立即出现在生产环境中。该工作流确保只有经过充分测试和完善的功能才会面向最终用户。

最终，这种方法有助于保持顺畅的用户体验。用户只会看到已准备好且功能完整的更新，而不是半成品功能或意外的更改。它还赋予团队更大的灵活性来频繁推送更改至主分支，从而防止合并冲突并使协作更简单，同时保持对上线内容的控制。🚀

### 步骤4：导航到操作页面

发布完成后，生产环境的 CD 流水线被触发。要监测这个重复的流程， 按以下步骤执行：

1.  **转到 GitHub Actions 标签**：在您的 GitHub 仓库中，点击 **Actions** 标签。
    
2.  **找到部署工作流**：寻找 **CD Pipeline to Google Cloud Run（暂存和生产）** 工作流。您会注意到，由于推送事件，工作流已在**主分支**上被触发。
    
3.  **打开工作流详情**：点击工作流以查看部署过程每个部分的详细步骤、日志和状态。
    

这一次，持续交付工作流将应用程序部署到**生产**/**实时**环境中。

![从合并到主分支的持续部署工作流（从暂存到主分支）](https://cdn.hashnode.com/res/hashnode/image/upload/v1733164741827/303cd415-5bb9-4149-aa5d-7088d0eab582.png)

### 步骤5：访问实时应用

一旦部署完成，前往 [https://console.cloud.google.com][24] 的 Google Cloud 控制台。

从菜单中导航到 **Cloud Run**。选择对应于**生产环境**的服务（例如，`gcr-ci-cd-app`）。

在服务详情页面找到 **服务 URL**。在浏览器中打开该 URL 以访问实时应用。

现在，恭喜您——您已经完成了！

## 结论 🌟

在本文中，我们探讨了如何为一个 Node.js 应用程序构建和自动化 CI/CD 流水线，使用 GitHub Actions、Docker Hub 和 Google Cloud Run。

我们设置了工作流以通过测试和集成代码变更来处理持续集成，以及将这些更改部署到暂存环境的持续交付。我们还使用 Docker 将应用程序容器化，并无缝地将其部署到 Google Cloud Run。

最后，我们实现了持续部署，确保生产环境的更新仅在从主分支创建版本时发生。

这种方法让团队能够推送和测试未完成的功能而不影响最终用户。通过遵循这些步骤，您已经构建了一个强大的流水线，使应用程序部署更顺畅、更快速且更可靠。

如果您想了解更多关于持续集成、交付和部署的内容，可以查看下面的课程：

-   [**持续集成和持续交付 (CI/CD) (来自 IBM Coursera**][25]**)**
    
-   [**GitHub Actions - 完整指南 (来自 Udemy**][26]**)**
    
-   [**通过构建项目学习 CI/CD (freeCodeCamp 教程)**][27]
    

### 关于作者 👨‍💻

你好，我是 Prince！我是一名软件工程师，热衷于构建可扩展的应用程序，并与技术社区分享知识。

如果您喜欢这篇文章，可以通过在我的 [LinkedIn 个人资料][28] 中探索更多我的博客和项目来了解更多关于我的信息。您可以在这里找到我的 [LinkedIn 文章][29]。您也可以[访问我的网站][30]来阅读更多文章。让我们一起连接与成长！😊

[1]: #heading-what-is-continuous-integration-deployment-and-delivery
[2]: #heading-differences-between-continuous-integration-continuous-delivery-and-continuous-deployment
[3]: #heading-how-to-set-up-a-nodejs-project-with-a-web-server-and-automated-tests
[4]: #heading-how-to-create-a-github-repository-to-host-your-codebase
[5]: #heading-how-to-set-up-the-ci-and-cd-workflows-within-your-project
[6]: #heading-set-up-a-docker-hub-repository-for-the-projects-image-and-generate-an-access-token-for-publishing-the-image
[7]: #heading-create-a-google-cloud-account-project-and-billing-account
[8]: #heading-create-a-google-cloud-service-account-to-enable-deployment-of-the-nodejs-application-to-google-cloud-run-via-the-cd-pipeline
[9]: #heading-create-the-staging-branch-and-merge-the-feature-branch-into-it-continuous-integration-and-continuous-delivery
[10]: #heading-merge-the-staging-branch-into-the-main-branch-continuous-integration-and-continuous-deployment
[11]: #heading-conclusion
[12]: https://nodejs.org/en/download/package-manager
[13]: https://git-scm.com/downloads
[14]: http://localhost:5000/
[15]: https://github.com/
[16]: https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
[17]: https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-jobs-in-a-workflow
[18]: https://hub.docker.com/
[19]: https://console.cloud.google.com
[20]: https://console.cloud.google.com/
[21]: https://console.cloud.google.com/
[22]: https://console.cloud.google.com/
[23]: https://console.cloud.google.com
[24]: https://console.cloud.google.com
[25]: https://www.coursera.org/learn/continuous-integration-and-continuous-delivery-ci-cd
[26]: https://www.udemy.com/course/github-actions-the-complete-guide/?couponCode=CMCPSALE24
[27]: https://www.freecodecamp.org/news/what-is-ci-cd/
[28]: https://www.linkedin.com/in/prince-onukwili-a82143233/
[29]: https://www.linkedin.com/in/prince-onukwili-a82143233/details/publications/
[30]: https://prince-onuk.vercel.app/achievements#articles

