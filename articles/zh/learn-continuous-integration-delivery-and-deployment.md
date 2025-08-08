---
title: "CI/CD 手册: 使用 GitHub Actions、Docker 和 Google Cloud Run 学习持续集成与交付"
date: 2025-07-17T02:10:48.442Z
author: Prince Onukwili
authorURL: https://www.freecodecamp.org/news/author/onukwilip/
originalURL: https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/
posteditor: ""
proofreader: ""
---

大家好！🌟 如果你在科技领域工作，很可能你已经听说过 **持续集成 (CI)**、**持续交付 (CD)** 和 **持续部署** 这些术语。你可能也听说过自动化管道、登台环境、生产环境以及类似测试工作流的概念。

<!-- more -->

这些术语乍一看可能显得复杂或可以互换使用，让你不禁想知道：它们到底是什么意思？它们之间有什么区别？🤔

在这本手册中，我将用简单易懂的方法分解这些概念，利用可关联的类比来使每个术语更易于理解。🧠💡 除了理论，我们将进行实践教程，你将逐步学习如何建立一个 CI/CD 工作流。

我们将一起：

-   设置一个 Node.js 项目。 ✨
    
-   使用 Jest 和 Supertest 实现自动化测试。 🛠️
    
-   使用 GitHub Actions 设置一个在推送、拉取请求或者新发布后触发的 CI/CD 工作流。 ⚙️
    
-   构建并将你的应用程序的 Docker 镜像发布到 Docker Hub。 📦
    
-   将你的应用程序部署到一个用于测试的登台环境。 🚀
    
-   最后，将它发布到生产环境，使其上线！🌐
    

在本指南结束时，你不仅会理解 CI/CD 概念之间的差异，还将在建立自己的自动化管道方面获得实践经验。😃

### 内容目录

1.  [**什么是持续集成、部署和交付？**][1]
    
2.  [**持续集成、持续交付和持续部署的区别**][2]
    
3.  [**如何使用 Web 服务器和自动化测试设置一个 Node.js 项目**][3]
    
4.  [**如何创建一个 GitHub 仓库来托管你的代码库**][4]
    
5.  [**如何在你的项目中设置 CI 和 CD 工作流**][5]
    
6.  [**为项目的镜像建立一个 Docker Hub 仓库，并生成发布镜像的访问令牌**][6]
    
7.  [**创建一个 Google Cloud 账户、项目和结算账户**][7]
    
8.  [**创建一个 Google Cloud 服务账户以通过 CD 管道实现 Node.js 应用部署到 Google Cloud Run**][8]
    
9.  [**创建登台分支并将功能分支合并到该分支（持续集成和持续交付）**][9]
    
10.  [**合并登台分支到主分支（持续集成和持续部署）**][10]
    
11.  [**结论**][11]
    

## **什么是持续集成、部署和交付？** 🤔

### **持续集成 (CI)**

想象一下你是六名开发人员团队的一员，大家都在进行同一个项目。如果没有一个合适的系统，混乱将接踵而至。

假如 A 先生正在开发一个新的登录功能，B 女士正在修复搜索栏的一个 bug，而 C 先生正在调整仪表板 UI——所有这些都在同时进行。如果每个人都直接编辑同一个“文件夹”或代码库，事情可能会变得非常糟糕：_“天哪！谁毁了这个应用？”_ 😱

为了维持秩序，团队使用 **版本控制系统 (VCS)**，如 GitHub、GitLab 或 BitBucket。可以将它视为一个数字工作空间，每个人都能在这里安全地协作而不会妨碍到其他人。🗂️✨

以下是持续集成在这个过程中如何发挥作用的步骤：

#### 1\. **主分支: 通用文件夹** ✨

每个项目的核心是 **主分支**——最终的事实来源。它包含了支持你的在线应用的稳定代码库。团队中的每一位成员都在这里贡献他们的工作，但有一个重要的规则：只有经过测试和批准的代码才能合并进去。🚀

#### 2\. **功能分支: 个人工作区** 🔨

当像 A 先生这样的人想开发一个新功能时，他们会创建一个 **功能分支**。这个分支基本上是主分支的个人副本，开发人员可以在此进行 tinkering、编写代码和测试，而不会影响他人。B 女士和 C 先生也在各自的分支上工作。每个人的实验都能保持整齐有序。🧪💡

#### 3\. **合并更改: CI 工作流** 🎉

当 A 先生对他的功能满意时，他不会直接插入到主分支中—CI 确保它是安全完成的：

-   **自动化测试**：在合并之前，CI 工具会自动运行测试来检查 A 先生的代码是否存在错误或 bug。可以将其视为守护主分支的保镖，确保坏代码不会混入。🕵️‍♂️
    
-   **构建验证**：功能分支代码也会被“构建”（转换为可部署的应用版本）以确认其按预期工作。
    

一旦这些检查通过，A 先生的功能分支就会被合并到主分支中。这种频繁的更改单的合并称为 **持续集成**。

### 持续交付 (CD)

以下是翻译后的内容：

#### `Staging` 区域的需求 🌉

在我们上面讨论的持续集成（CI）过程中，我们主要处理**特性分支**和**主分支**。但是直接将特性分支的更改合并到主分支（驱动实时产品）可能会有风险。为什么呢？🛑

尽管自动化测试和构建可以捕捉到许多错误，但它们并非万无一失。一些边缘情况或错误可能会悄然溜走。这就是**staging 分支**和**staging 环境**发挥作用的地方！🎭

可以将 staging 分支视为“试运行”。在将更改发布给真实客户之前，特性分支的代码库被合并到 staging 分支并部署到一个**staging 环境**。这个环境是生产环境的精确副本，但它专门供**质量保证（QA）团队**进行测试使用。

QA 团队扮演着“测试驾驶员”的角色，就像真实用户一样对平台进行测试。他们检查可用性问题、边缘情况或自动化测试可能遗漏的错误，并向开发人员提供反馈以进行修复。🚦 如果一切通过，代码库就可以部署到生产环境。

#### 行动中的持续交付 📦

将更改合并到 staging 分支并将其部署到**staging 环境**的过程就是我们所说的**持续交付**。🛠️ 它确保应用程序始终处于可部署状态，随时准备好进入管道中的下一个步骤。

与持续部署（稍后会讨论）不同，持续交付并不会自动将更改推送到生产（实时平台）。相反，它暂停以让人—即 QA 团队或利益相关者—决定何时继续。这增加了一层质量保证，减少了错误进入实时产品的机会。🕵️‍♂️

### 持续部署（CD）

持续部署（CD）将自动化推向了顶点。虽然它与持续交付有相似之处，但关键区别在于**最后一步**：不需要手动批准。最终过程—合并代码库并将其实时部署给终端用户（QA 测试人员或团队负责人可以做到这一点）。

让我们来探讨一下是什么让持续部署如此强大（有点吓人）！😅

#### CI/CD 流水线的最后一英里 🛣️

想象一下，你已经经历了严格的持续集成过程：团队成员已经合并了他们的特性分支，自动化测试已经运行，并且代码库在持续交付期间成功部署到 staging 环境。

现在，你有信心应用程序没有错误，准备好在生产环境中大放异彩—你的平台的实时版本供真实客户使用。

在**持续部署**中，这一步骤将更改部署到实时环境是**自动发生**的。每当特定事件发生时，流水线会被触发，例如：

- 一个**拉取请求（PR）** 被合并到**主分支**。
- 创建了一个新的**发布版本**。
- 一个**提交**被直接推送到生产分支（尽管对于大多数团队来说这很少见）。

一旦被触发，流水线就会迅速行动起来，构建、测试，并最终将更新的代码库部署到生产环境。📡

## **持续集成、持续交付和持续部署之间的差异** 🔍

| 方面              | 持续集成（CI） | 持续交付（CD） | 持续部署（CD） |
| ----------------- | -------------- | -------------- | -------------- |
| 主要关注点        | 将特性分支合并到主/通用代码库或 staging 代码库。 | 将测试过的代码部署到 staging 环境进行 QA 测试和批准。 | 自动将代码部署到实时生产环境。 |
| **自动化水平**    | 自动化测试和构建特性分支的过程。 | 在成功测试后自动化部署到 staging/测试环境。 | 无需手动批准，完全自动化生产环境的部署。 |
| **测试范围**      | 在特性分支上运行自动化测试，确保代码质量在合并到主或 staging 分支之前无误。 | 包括部署到 staging 之前的自动化测试，并允许 QA 测试人员在受控环境中进行手动测试。 | 可能包括作为最终检查的自动化测试，确保生产环境在部署之前是稳定的。 |
| **涉及分支**      | 特性分支合并到主/通用或 staging 分支。 | Staging 分支用作合并到主分支之前的中间步骤。 | 主/通用分支直接部署到生产。 |
| **目标环境**      | 确保在本地环境或构建流水线中的集成和测试。 | 部署到 staging/测试环境，QA 测试人员验证功能。 | 部署到生产/实时环境，终端用户可以访问。 |
| **关键目标**      | 防止集成冲突，确保新更改不会破坏现有代码库。 | 提供一个稳定的、接近生产的环境，以便在最终部署前进行彻底的 QA 测试。 | 确保新功能和更新尽快到达用户手中，延迟最小。 |
| **批准过程**      | 不需要批准。特性分支在达到标准后被测试和合并。 | QA 团队或负责人在更改合并到生产的主分支之前提供反馈/批准。 | 无需人工批准。部署完全自动化。 |
| **示例触发**      | 开发人员将特性分支合并到主分支。 | Staging 分支通过自动化测试（在 PR 期间）并准备好部署到测试环境。 | 创建新版本或一个拉取请求合并到主分支，触发自动生产部署。 |

```markdown
## **如何设置一个带有 Web 服务器和自动化测试的 Node.js 项目** ✨

在这个实践部分中，我们将使用 Jest 构建一个带有自动化测试的 Node.js Web 服务器。接下来，我们将使用 GitHub Actions 创建一个 CI/CD 管道，对每次**对暂存和主分支的拉取请求**自动化测试。最后，我们将把应用程序的镜像发布到 DockerHub，并将该镜像部署到 **Google Cloud Run**，首先部署到测试环境进行测试，然后部署到生产环境进行实际使用。

准备好让你的项目焕发生机了吗？让我们开始吧！🚀✨

### 步骤 1：安装 Node.js 📥

要开始，你需要在你的机器上安装 **Node.js**。Node.js 提供了我们用来创建 Web 服务器的 JavaScript 运行环境。

1.  访问 [https://nodejs.org/en/download/package-manager][12]
    
2.  选择你的操作系统（Windows、macOS 或 Linux）并下载安装程序。
    
3.  按照安装说明完成安装。
    

要验证 Node.js 是否安装成功，打开你的终端并运行 `node -v`。这应该会显示已安装的 Node.js 版本。

### 步骤 2：克隆起始代码库 📂

下一步是从 GitHub 获取起始代码。如果你还没有安装 Git，你可以在 [https://git-scm.com/downloads][13] 下载。选择你的操作系统并按照说明安装 Git。一旦设置好，就可以克隆代码库了。

在你的终端中运行以下命令来克隆模板代码：

```
git clone --single-branch --branch initial https://github.com/onukwilip/ci-cd-tutorial
```

这将从 `initial` 分支下载项目文件，其中包含 Node.js Web 服务器的起始模板。

进入项目目录：

```
cd ci-cd-tutorial
```

### 步骤 3：安装依赖 📦

进入项目目录后，安装 Node.js 项目所需的依赖项。这些是为应用程序提供动力的包：

```
npm install --force
```

这将下载并设置项目中指定的所有库。好了，依赖安装了吗？你离成功又进一步！

### 步骤 4：运行自动化测试 ✅

在深入编码之前，让我们确认自动化测试运行正确。运行：

```
npm test
```

你应该在终端中看到两个成功的测试结果。这表明起始项目已正确配置并且自动化测试正常运行。

![成功的测试运行](https://cdn.hashnode.com/res/hashnode/image/upload/v1733074280408/93b4ea86-1dfa-42eb-a163-b97c19c2a053.png)

### 步骤 5：启动 Web 服务器 🌐

最后，让我们启动 Web 服务器并查看其运行情况。运行以下命令：

```
npm start
```

等待应用程序启动。打开你的浏览器并访问 [http://localhost:5000][14]。🎉 你应该会看到起始 Web 服务器已启动并运行，为你的 CI/CD 魔法做好了准备：

![成功的项目运行](https://cdn.hashnode.com/res/hashnode/image/upload/v1733074667521/7b80bb21-1f43-430e-8a56-2bff8b81ddad.png)

## **如何创建一个 GitHub 仓库来托管你的代码库 📂**

### 步骤 1：登录 GitHub

1.  **访问 GitHub**：打开浏览器并访问 GitHub - [https://github.com][15]。
    
2.  **登录**：点击右上角的**登录**按钮，输入你的用户名和密码以登录，或者如果你还没有帐号，则点击**注册**按钮创建一个帐户。
    

### 步骤 2：创建一个新仓库

登录后，在 GitHub 主页面上，你会在右上角个人资料图片旁边看到一个 "+" 号。点击它，并从下拉菜单中选择**“新仓库”**。

![新 GitHub 仓库](https://cdn.hashnode.com/res/hashnode/image/upload/v1733130465203/dac28dee-74da-4fd4-8a96-bc90aef01207.png)

现在是设置仓库详细信息的时间。你需要包括：

-   **仓库名称**：为你的仓库选择一个名称。例如，你可以将其命名为 `ci-cd-tutorial`。
    
-   **描述**（可选）：你可以添加一个简短的描述，比如“使用 Docker 和 GitHub Actions 的 CI/CD 教程项目。”
    
-   **可见性**：选择是否希望你的仓库是**公共的**（任何人都可以访问）还是**私有的**（只有你和你邀请的人可以访问）。为了本教程的目的，请将其设为**公共**。
    
-   **不要勾选添加 README 文件框**：**重要**：确保你**没有勾选**“添加 README 文件”选项。这将自动在你的仓库中创建一个 `README.md` 文件，当你推送本地文件时可能会导致冲突。我们稍后会根据需要手动添加 README 文件。
    

填写详细信息后，点击**“创建仓库”**。

![创建 GitHub 仓库](https://cdn.hashnode.com/res/hashnode/image/upload/v1733130890582/04e09ac8-0ee6-4d26-a9f2-007c0e6ca08f.png)

### 步骤 3：更改远程目标并推送到你的新仓库

#### **更新远程仓库 URL**：

由于你已经从我的仓库克隆了代码库，你需要更新远程目标，以指向你新创建的 GitHub 仓库。
```

打开项目目录中的终端并运行以下命令：

```
git remote set-url origin <your-repo-url>
```

将 `<your-repo-url>` 替换为您之前复制的 GitHub 仓库 URL。

#### **将当前分支重命名为** `main`：

如果您的分支名称不是 `main`，可以使用以下命令将其重命名为 `main`：

```
git branch -M main
```

#### **推送到您的新仓库**：

最后，提交您所做的任何更改，并通过以下命令将本地仓库推送到新的远程 GitHub 仓库：

```
git add .
git commit -m 'Created boilerplate'
git push -u origin main
```

现在，您的本地代码库已链接到您的新的 GitHub 仓库，并且文件已成功推送到那里。您可以通过访问 GitHub 上的仓库进行验证。

## 如何在项目中设置 CI 和 CD 工作流 ⚙️

现在是时候为我们的项目创建 **CI 和 CD 工作流**了！这些工作流不会在本地 PC 上运行，而是一旦您将更改推送到远程仓库，就会在云端自动触发并执行。GitHub Actions 将检测这些工作流并根据您定义的触发器运行它们。

### 步骤 1：准备工作流目录 📂

在添加 CI/CD 管道之前，首先创建一个功能分支是一个好的做法。这一步反映了团队中常用的工作流，即新功能或更改在合并到主代码库之前是在单独的分支中进行的。

要创建并切换到新分支，请运行以下命令：

```
git checkout -b feature/ci-cd-pipeline
```

这将创建一个名为 `feature/ci-cd-pipeline` 的新分支并切换到该分支。现在，您可以安全地添加和测试 CI/CD 工作流而不会影响主分支。

完成后，您可以在拉取请求过程的一部分中将此功能分支合并回 `main` 或 `staging`。

在项目的根目录下，创建一个名为 `.github` 的文件夹。在 `.github` 内，再创建一个名为 `workflows` 的文件夹。

放置在 `.github/workflows` 目录中的任何 YAML 文件都会自动被识别为 GitHub Actions 工作流。这些工作流会根据特定的触发器执行，例如拉取请求、推送或发布。

### 步骤 2：创建持续集成工作流 🚀

接下来，我们将创建一个 CI 工作流，当向 `main` 或 `staging` 分支发起拉取请求时，它会自动测试应用程序。

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

#### CI 工作流的解释

以下是工作流中每个部分的详细说明：

1.  `name: CI Pipeline to staging/production environment`：这是工作流的标题。它帮助您在 GitHub Actions 中识别此管道。
    
2.  `on`：`on` 参数决定触发工作流的事件。当工作流 YAML 文件被推送到远程 GitHub 仓库时，GitHub Actions 会依据 `on` 字段中配置的触发器自动注册工作流。这些触发器充当事件监听器，告知 GitHub 何时执行工作流。
    
    **例如：**
    
    如果我们将 `pull_request` 设置为 `on` 参数的值，并使用 `branches` 键指定要监控的分支，GitHub 将为对这些分支的拉取请求设置事件监听器。
    
    ```
    on:
      pull_request:
        branches:
          - main
          - staging
    ```
    
    此配置意味着每当对 `main` 或 `staging` 分支发起拉取请求时，GitHub 将触发工作流。
    
    **多重触发器**：  
    您可以在 `on` 参数中定义多个事件监听器。例如，除拉取请求外，您还可以添加一个推送事件的监听器。
    
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
    
    此配置确保在以下情况下触发工作流：
    
    -   对 `main` 或 `staging` 分支发起拉取请求。
        
    -   直接推送到 `main` 分支。
        

📘 **了解更多关于触发器的信息：**请查看[GitHub 官方文档][16]。

3.  `jobs`：`jobs` 部分概述了工作流将执行的具体任务（或作业）。每个作业都是一个在单独虚拟机（VM）上运行的独立工作单元。这种隔离确保每个作业都有一个干净、独特的环境，避免任务之间的潜在冲突。
    
    **关于作业的关键点：**
    
    1.  **每个作业的干净 VM**：当 GitHub Actions 运行工作流时，它为每个作业分配一个专用的 VM 实例。这意味着环境会为每个作业重置，确保任务之间没有重叠或干扰。
        
    2.  **多作业**：工作流可以有多个作业，每个作业负责一个特定的任务。例如：
        
        -   一个 **Test** 作业用于安装依赖项并运行自动化测试。
            
        -   一个 **Build** 作业用于编译应用程序。
            
    3.  **作业组织**：可以组织作业以运行：
        
        -   **按顺序**：确保一个作业完成后再开始下一个作业，例如，Test 作业必须在 Build 作业之前完成。这种顺序流程模仿了 "pipeline" 结构。
            
        -   **同时**：多个作业可以并行运行以节省时间，尤其是在这些作业彼此独立时。
            
    4.  **当前工作流中的单个作业**：在我们的当前工作流中，只有一个作业 `test`，它：
        
        -   安装依赖项。
            
        -   运行自动化测试。
            
        -   构建应用程序。

4.  `runs-on: ubuntu-latest`: 指定工作运行的操作系统。GitHub 提供了预配置的虚拟环境，在这里我们使用最新的 Ubuntu 映像。
    
5.  `env`: 为工作设置环境变量。在这里，我们定义了应用程序使用的 **PORT** 变量。
    
6.  **Steps**: 步骤定义了在工作中执行的各个操作：
    
    -   `Checkout`: 使用 `actions/checkout` 操作将包含代码库的特性分支克隆到虚拟机实例环境中。此步骤确保流水线能够访问项目文件。
        
    -   `Install dependencies`: 运行 `npm ci` 以安装所需的 Node.js 包。
        
    -   `Test application`: 使用 `npm test` 命令运行自动化测试。这验证了代码库在错误或测试用例失败方面的情况。
        
    -   `Build application`: 如果在 `package.json` 中定义了构建脚本，则构建应用程序。`--if-present` 标志确保如果没有构建脚本，该步骤不会失败。
        

既然我们已经完成了在 `main` 或 `staging` 分支上的拉取请求中运行的 CI 流水线，那么让我们继续设置 **持续交付（CD）** 和 **持续部署** 流水线。🚀

### 第 3 步：持续交付和部署工作流程

**首先，创建流水线文件**：  
在 `.github/workflows` 文件夹中，创建一个名为 `cd-pipeline.yml` 的新文件。此文件将定义自动化交付和部署的工作流程。

**接下来，粘贴配置**：  
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

**CD 流水线**配置将持续交付和持续部署工作流程结合到一个文件中以简化操作。它基于我们之前讨论的 CI/CD 概念，自动化测试、构建和将应用程序部署到 Google Cloud Run。

#### CD 流水线的解释：

1.  #### 工作流触发器 (`on`)
    

-   `push`: 在推送至 `staging` 分支时触发工作流。
    
-   `workflow_dispatch`: 使通过 GitHub Actions 接口手动执行工作流成为可能。
    
-   `release`: 在发布新版本时触发。  
    例如：当从 `main` 分支发布版本时，应用程序将部署到生产环境。
    

2.  **任务 1 – 测试代码库**：流水线中的第一个任务，测试，确保代码库在进行交付或部署之前是功能正常且无错误的。
    
3.  **任务 2 – 构建和部署应用程序**：Aha！时刻 ✨：这些任务按顺序运行。😃 仅在 **测试** 任务成功完成后，**构建** 任务才开始。它准备应用程序进行部署并管理实际的部署过程。
    
    具体过程如下：
    
    -   **GCP 和 Docker Hub 授权**：工作流对 Google Cloud Platform (GCP) 和 Docker Hub 进行身份验证。对于 GCP，它使用 `google-github-actions/auth@v0` 操作来处理存储为密钥的服务账号凭证。同样，它使用存储的凭证登录到 Docker Hub 以启用镜像上传。
        
    -   **构建和推送 Docker 镜像**：应用程序被构建成 Docker 镜像，并使用唯一标识符（`${{env.IMAGE}}`）标记。然后将该镜像推送到 Docker Hub，使其可以被访问用于部署。
        
    -   **部署到 Google Cloud Run**：根据触发步骤的事件，应用程序将**部署到 Google Cloud Run 中的临时或生产环境**。将更改**推送**到 `staging` 分支会部署到临时环境（持续交付），而从 `main` 分支发布的**版本**则会部署到生产环境（持续部署）。


为什么？工作流配置文件是您代码库的一部分，任何有权访问代码库的人都可以访问。如果敏感数据（如 API 密钥或密码）在此暴露，它可能会轻易地被泄露。😨

相反，我们使用 GitHub 的 **Secrets** 来安全地存储和访问这些信息。Secrets 允许我们定义加密的变量，这些变量仅能由我们的工作流访问。例如：

- **DockerHub 凭证**：我们将 Docker 用户名和访问令牌添加到存储库的 secrets 中。这些对于与 DockerHub 进行身份验证以上传构建的 Docker 镜像是必不可少的。

- **Google Cloud 服务账户密钥**：这个密钥将授予流水线必要的权限，以安全地在 **Google Cloud Run** 上部署应用程序。

我们将随着操作的推进逐步设置这些变量和 secrets，确保每一步都是完全安全和可用的。🎯

## **为项目的镜像设置 Docker Hub 存储库并生成用于发布镜像的访问令牌** 📦

在我们深入操作步骤之前，让我们快速浏览一下我们即将要做的事情。在本节中，您将学习如何创建一个 Docker Hub 存储库，它就像您应用程序容器镜像的在线存储空间。

可以将容器镜像视为您应用程序的一个快照，准备好可以在任何地方部署。为了确保顺畅和安全的访问，我们还将生成一个特殊的访问令牌，就像一个可撤销的密码，我们的 CI/CD 流水线可以使用该密码将您的应用镜像上传到 Docker Hub。让我们开始吧！🚀

### 步骤 1：注册 Docker Hub

以下是注册 Docker Hub 的步骤：

1. **访问 Docker Hub 网站**：打开您的网络浏览器并访问 Docker Hub - [https://hub.docker.com/][18]。

2. **创建账户**：在 Docker Hub 首页，您会在右上角看到一个标有 **“Sign Up”** 的按钮。点击它。

3. **填写您的详细信息**：系统会要求您提供一些详细信息，如用户名、电子邮件地址和密码。选择一个您能记住的强密码。

4. **同意条款**：您需要选中一个复选框以同意 Docker 的服务条款。之后，点击 **“Sign Up”** 创建您的账户。

5. **验证您的电子邮件**：Docker Hub 会发给您一封验证账户的邮件。打开该邮件并点击验证链接以完成您的账户创建。

### 步骤 2：登录 Docker Hub

验证您的电子邮件后，返回 Docker Hub，点击右上角的 **“Sign In”**。然后您可以使用刚创建的凭证登录。

### 步骤 3：生成访问令牌（用于 CI/CD 流水线）

现在您有了账户，可以创建一个访问令牌。该令牌将允许您的 GitHub Actions 工作流安全地登录 Docker Hub 并上传 Docker 镜像。

登录 Docker Hub 后，点击右上角的个人资料图片（或头像），这将打开一个菜单。从菜单中点击“Account Settings”。

然后在您的账户设置左侧菜单中，滚动到 **“Security”** 选项卡。在这一部分，您可以管理自己的令牌和密码。

现在您需要创建一个新的访问令牌。在 Security 选项卡中，您会看到一个标为 **“Personal access tokens”** 的链接——点击它。点击标为 **“Generate new token”** 的按钮。

系统会要求您为您的令牌提供一个描述。您可以将其命名为 "GitHub Actions CI/CD"，以便知道它的用途。

在提供描述后，点击 “**Access permissions dropdown**“ 并选择 **“Read & Write“** 或 **“Read, Write, Delete“**。点击 “**Generate**“

![创建 Docker 访问令牌](https://cdn.hashnode.com/res/hashnode/image/upload/v1733129374816/c725f041-c0ef-49a0-b8ef-ca62acafc1ee.png)

现在，您需要复制凭证。点击生成按钮后，Docker Hub 会生成一个访问令牌。**立即复制此令牌以及您的用户名** 并将其保存在安全地方，例如文件中（别担心，我们会把它添加到我们的 GitHub secrets 中）。您将不能再查看此令牌，因此请确保您已保存好！

![复制 Docker 用户名 + 访问令牌](https://cdn.hashnode.com/res/hashnode/image/upload/v1733133363382/33dbf334-a7ec-4151-8639-5368c3ccaedb.png)

### 步骤 4：将令牌添加到 GitHub 中作为一个 Secret

要执行此操作，请打开托管代码库的 GitHub 存储库。在 GitHub 存储库中，点击 **Settings** 标签（位于存储库页面顶部附近）。

然后在左侧边栏，向下滚动并点击 **“Secrets and Variables”**，然后选择 **“Actions”**。

1. ![打开 GitHub Actions Secrets](https://cdn.hashnode.com/res/hashnode/image/upload/v1733133003023/75c3bd35-1a5b-46fa-845a-0f4fd8305d53.png)

以下是创建和管理新 secret 的步骤：

1. **添加一个新 secret**：点击 **“New repository secret”** 按钮。

2. **设置 secret**：

   - 在 **Name** 字段中输入 `DOCKER_PASSWORD`。
   
   - 在 **Value** 字段中粘贴您之前复制的访问令牌。

3. **保存 secret**：最后，点击 **Add secret** 以将您的 Docker 访问令牌安全保存到 GitHub 中。

以下是您提供的 markdown 文件翻译成中文的版本，并保留了原始的 markdown 排版布局：

而这就是全部内容！现在，您的 CI/CD 管道可以使用此令牌安全地登录 Docker Hub，并在被触发时自动上传镜像。🎉

### **步骤 5：为项目创建 Dockerfile**

在您能够构建并将 Docker 镜像发布到 Docker Hub 之前，您需要创建一个 `Dockerfile`，其中包含构建您的应用程序所需的指令。

按照以下步骤在您的项目根目录中创建 `Dockerfile`：

1. 导航到项目的根目录。
    
2. 创建一个名为 `Dockerfile` 的新文件。
    
3. 在文本编辑器中打开 **Dockerfile**，并将以下内容粘贴到其中：
    

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

#### Dockerfile 解释：

-   `FROM node:18-slim`：设置 Docker 容器的基础镜像，是一个基于 18 版本的官方 Node.js 精简版镜像。
    
-   `WORKDIR /app`：将容器内应用程序的工作目录设置为 `/app`。
    
-   `COPY package.json .`：将 `package.json` 文件复制到工作目录中。
    
-   `RUN npm install -f`：使用 `npm` 安装项目依赖。
    
-   `COPY . .`：将项目的其他文件复制到容器中。
    
-   `EXPOSE 5001`：告知 Docker 暴露端口 `5001`，这是应用程序在容器内运行的端口。
    
-   `CMD ["npm", "start"]`：设置容器运行时的默认命令，使用 `npm start` 启动应用程序。
    

## **创建 Google Cloud 帐户、项目和账单账户** ☁️

在本节中，我们将为应用程序部署到 Google Cloud 打下基础。首先，我们将设置一个 Google Cloud 帐户（别担心，开始是免费的！）。然后，我们将创建一个新项目，您的应用所需的所有资源都将在其中。

最后，我们将启用账单功能，以便您可以解锁所需的云服务来进行部署。可以把这想象成在云中设置您的工作空间——有条理、准备充分、安全！让我们开始吧！☁️

### 第 1 步：创建或登录 Google Cloud 帐户 🌐

首先，前往 [Google Cloud 控制台][19]。如果您没有 Google Cloud 帐户，您需要创建一个。

要执行此操作，点击 **免费开始** 并按照步骤设置您的帐户（您需要提供支付信息，但 Google 提供 300 美元的免费积分以供开始）。如果您已有 Google 帐户，只需使用您的凭证登录即可。

登录后，您将进入 Google Cloud 仪表板。在这里，您可以管理所有云项目和资源。

### 第 2 步：创建新的 Google Cloud 项目 🏗️

在 Google Cloud 控制台的左上方，您会看到 Google 云标志旁边的下拉菜单。单击此下拉菜单以显示当前项目。

现在是时候创建一个新项目了。在弹出窗口的左上角，单击 **新建项目** 按钮。

![创建 Google Cloud 项目](https://cdn.hashnode.com/res/hashnode/image/upload/v1733134260252/6769909a-cf9c-4c91-9d79-7676500f3981.webp)

您将被重定向到一个页面，在该页面上您需要为新项目提供一些基本详细信息。现在输入以下信息：

-   **项目名称：** 输入您选择的项目名称（例如，`gcr-ci-cd-project`）。
    
-   **位置：** 为您的项目选择一个位置。如果您刚开始使用，您可以将其保留为默认的 "无组织"。
    

输入项目名称后，单击 **创建** 按钮。Google Cloud 将开始创建您的新项目。这可能需要几秒钟。

### 第 3 步：访问您的新项目 🛠️

几秒钟后，您将被重定向到 **Google Cloud 仪表板**。

再次单击 Google 云标志旁边的下拉菜单，您现在应该在弹出窗口中看到您新创建的项目，并可选择它。

然后单击项目名称（例如，`gcr-ci-cd-project`）进入项目的仪表板。

### 第 4 步：将账单账户链接到您的项目 💳

要访问账单页面，请在 Google Cloud 控制台中，找到屏幕左上方的 **导航菜单**（三条横线）。单击它以打开选项列表。向下滚动并点击 **账单**。这将带您进入 Google Cloud 帐户的账单部分。

![导航到 Google Cloud 账单仪表盘/部分](https://cdn.hashnode.com/res/hashnode/image/upload/v1733134747962/745c8a0e-13c5-4dde-849b-303c1200f495.png)

如果您尚未设置账单账户，系统会提示您进行设置。单击 **"链接账单账户"** 按钮以开始此过程。

现在您可以创建新的账单账户（如果您还没有）。您将被重定向到一个页面，在该页面上您可以选择现有账单账户或创建一个新的。如果您尚未拥有账单账户，请单击 **"创建账单账户"**。

提供必要的详细信息，包括：

-   **账户名**（例如，“个人账单账户”或您的公司名称）。
    
-   **国家/地区**：选择您所在公司或账户的国家/地区。
    
-   **货币**：选择您希望使用的计费货币。
    
    ![创建 Google Cloud 账单账户](https://cdn.hashnode.com/res/hashnode/image/upload/v1733135153425/1287ab53-e9c5-45b5-a09d-3d3a13840ca4.png)

阅读并同意 Google Cloud 服务条款和结算账户条款。完成后，点击 **“开始结算”** 以完成结算账户的设置。

设置好您的结算账户后，您将进入一个页面，该页面要求您将其**链接**到您的项目。选择您刚刚创建的结算账户或您想使用的现有结算账户。点击“设置账户”以将结算账户链接到您的项目。

![将 Google Cloud 结算账户链接到项目](https://cdn.hashnode.com/res/hashnode/image/upload/v1733337276189/b80702dd-2ff6-42db-a325-c2082e8059e5.png)

将结算账户链接到项目后，您应会看到确认消息，指示您的项目的结算已成功启用。

您可以随时返回 Google Cloud 控制台中的结算部分进行验证，您将在那里看到列出的结算账户。

## **创建 Google Cloud 服务账户以通过 CD 管道启用 Node.js 应用程序部署到 Google Cloud Run** 🚀

### 为什么我们需要服务账户和密钥？ 🤔

一个**服务账户**允许我们的 CI/CD 管道以编程方式进行身份验证并与 Google Cloud 服务交互。通过分配特定角色（权限），我们确保服务账户只能执行与部署相关的任务，例如管理 Google Cloud Run。

**服务账户密钥**是一个 JSON 文件，包含用于身份验证的凭据。我们将此密钥安全地存储为 GitHub 的机密信息，以保护敏感信息。

### 步骤 1：打开服务账户页面

以下是您可以遵循的步骤来设置服务账户并获取您的密钥：

首先，访问 Google Cloud 控制台 [https://console.cloud.google.com/][20]。确保您已选择正确的项目（例如 `gcr-ci-cd-project`）。要更改项目，点击左上角 Google Cloud 徽标旁边的下拉菜单并选择您的项目。

然后导航到导航菜单（左上角的三个水平线），点击 **IAM & 管理 > 服务账户**。

![导航到 Google Cloud IAM - 服务账户](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147553088/e3647442-ca8e-4197-ab5f-91cee5a6d6b0.png)

### 步骤 2：创建一个新的服务账户

点击 “创建服务账户” 按钮。这将打开一个表单，您将在其中定义服务账户详细信息。

接下来，输入服务账户详细信息：

- **名称**：输入一个描述性的名称（例如，`ci-cd-sa`）。
  
- **ID**：根据名称自动填充。
  
- **描述**：添加一个描述以帮助识别其用途，例如“用于将 Node.js 应用程序部署到 Cloud Run”。
  
- 点击 **创建并继续** 以继续。

### 步骤 3：分配必要的角色（权限）

在下一个屏幕上，您将为服务账户分配角色。逐一添加以下角色：

- **Cloud Run 管理员**：允许管理 Cloud Run 服务。
  
- **服务账户用户**：授予使用服务账户的能力。
  
- **服务使用管理员**：启用对启用 API 的控制。
  
- **查看者**：提供只读访问权限以查看资源。

添加角色：

- 点击 **“选择角色”**。
  
- 使用搜索栏输入角色名称（例如，“Cloud Run 管理员”）并选择它。
  
- 对所有四个角色重复此操作。

![创建 Google Cloud 服务账户 - 在创建过程中向服务账户添加角色](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147870701/393833c9-c320-49e3-8743-dbc0d739b99b.png)

您的屏幕应类似于此：

![创建一个 Google Cloud 服务账户（SA） - 完成向 SA 分配所有角色](https://cdn.hashnode.com/res/hashnode/image/upload/v1733147949148/c509c810-767d-4900-aa44-a737cc1c8dc1.png)

分配角色后，点击 **继续**。

### 步骤 4：跳过授予用户对服务账户的访问权限

在下一个屏幕上，您将看到一个选项，可以授予其他用户对该服务账户的访问权限。单击 **完成** 以完成创建过程。

### 步骤 5：生成服务账户密钥 🔑

您现在应该会在列表中看到您新创建的服务账户。找到服务账户的行（例如，`ci-cd-sa`），然后点击“操作”列下的三个竖点。从下拉菜单中选择 **“管理密钥”**。

要添加一个新密钥：

- 点击 **“添加密钥” > “创建新密钥”**。
  
- 在弹出对话框中，选择 **JSON** 作为密钥类型。
  
- 点击 **创建**。

![创建 Google Cloud 服务账户密钥](https://cdn.hashnode.com/res/hashnode/image/upload/v1733148120618/c7014982-ae7d-40ed-bbfb-0c8f5c4b8090.png)

现在，下载密钥文件。一个 JSON 文件将自动下载到您的计算机。该文件包含与 Google Cloud 验证所需的凭据。

确保您对密钥进行保密，并将其存储在安全位置。不要与他人分享 —— 将其视为敏感信息。

### 步骤 6：将服务账户密钥添加到 GitHub 机密信息 🔒

首先使用文本编辑器（如 Notepad 或 VS Code）打开下载的 JSON 文件。然后选择并复制文件的全部内容。

现在你需要添加一个新的 secret。点击 **“New repository secret”** 按钮。在 **Name** 字段中，输入 `GCP_SERVICE_ACCOUNT`。在 **Value** 字段中，粘贴你之前复制的 JSON 内容。点击 **Add secret** 进行保存。

对 `GCP_PROJECT_ID` secret 执行相同操作，不过这次将你的 Google Project ID 作为值添加。要获取你的项目 ID，请按照以下步骤操作：

1.  **导航到 Google Cloud 控制台**：在 [https://console.cloud.google.com/][21] 打开 Google Cloud 控制台。
    
2.  **找到项目下拉菜单**：在屏幕左上角，靠近 **Google Cloud 徽标**，您会看到一个下拉菜单，显示您当前项目的名称。
    
3.  **查看项目 ID**：点击下拉菜单，你会看到所有项目的列表。您的 **项目 ID** 将显示在项目名称旁边。它是由 Google Cloud 使用的唯一标识符。
    
4.  **复制项目 ID**：复制所显示的 **项目 ID**，并将其添加为 `GCP_PROJECT_ID` secret 的值。
    

### 步骤 7: 向 GitHub 存储库添加外部变量 🔧

在进行部署之前，我们需要定义一些在 CD 工作流中引用的外部变量。这些变量确保管道了解关于你的 Google Cloud Run 服务和 Docker 容器注册表的重要信息。

你需要按照以下步骤进行操作：

1.  首先，访问你的 GitHub 存储库。
    
2.  点击存储库顶部的 **Settings** 标签。滚动到 **Secrets and variables > Actions**。
    
3.  在 **Secrets** 旁边点击 **Variables** 标签。为每个变量点击 **“New repository variable”**。然后你需要定义这些变量：
    
    -   `GCR_PROJECT_NAME`: 将其设置为生产/线下环境的 Cloud Run 服务名称。例如，`gcr-ci-cd-app`。
        
    -   `GCR_STAGING_PROJECT_NAME`: 将其设置为暂存/测试环境的 Cloud Run 服务名称。例如，`gcr-ci-cd-staging`。
        
    -   `GCR_REGION`: 输入你想部署服务的地区。在本教程中，设置为 `us-central1`。
        
    -   `IMAGE`: 指定将上传已发布映像的 Docker 映像/容器注册表的名称。例如，`<dockerhub-username>/ci-cd-tutorial-app`。
        
4.  输入每个变量名称和值后，点击 **Add variable**。
    

### 在 Google Cloud 项目上启用服务使用 API 🌐

要部署应用程序，必须在你的 Google Cloud 项目中启用 **服务使用 API**。此 API 允许你以编程方式管理 Google Cloud 服务，包括启用/禁用 API 和监控其使用情况。

按照以下步骤启用：

1.  首先，访问 Google Cloud 控制台 [https://console.cloud.google.com/][22]。
    
2.  确保你在正确的项目中。在左上角，靠近 **Google Cloud 徽标** 处，点击下拉菜单。选择 `gcr-ci-cd-project`，或你从项目列表中给定项目的名称。
    
3.  接下来，访问 API 库。打开 **导航菜单**（左上角的三条横线）。从菜单中选择 **APIs & Services > Library**。
    
4.  在 API 库中，使用搜索栏搜索 **"Service Usage API"**。
    
5.  从搜索结果中点击 **Service Usage API**。在 API 的详细信息页面上，点击 **Enable**。
    
6.  为了验证，请前往 Google Cloud 控制台中的 **APIs & Services > Enabled APIs & Services**。确认 **Service Usage API** 出现在已启用 API 列表中。
    
    ![在项目中启用 Google Cloud "Service Usage API"](https://cdn.hashnode.com/res/hashnode/image/upload/v1733150269757/00a4e20b-72ac-4bd4-b05f-af6e61600e09.png)
    

## **创建暂存分支并将功能分支合并到其中（持续集成和持续交付）🌟**

当来自 `feature/ci-cd-pipeline` 分支的更改被合并到 `staging` 分支时，我们完成了 **持续集成 (CI)** 过程，并且会运行工作流 `ci-pipeline.yml`。这确保了功能分支中所做的更改经过测试并集成到共享分支中。

一旦拉取请求 (PR) 合并到 `staging` 中，**持续交付 (CD)** 管道会自动触发，将应用程序部署到暂存环境。这模拟了更新在安全环境中的测试过程，然后才推送到生产环境。

### 在远程存储库上创建 `staging` 分支

为了启用 CI/CD 管道，我们首先会在远程 GitHub 存储库上创建一个 `staging` 分支。此分支将作为测试环境，您可以在其中部署更改，然后才到达生产环境。

要直接在 GitHub 上创建 `staging` 分支，请遵循以下步骤：

1.  首先，导航到你的 GitHub 存储库。打开你的网页浏览器，并进入你想要创建新 `staging` 分支的 GitHub 存储库。
    
2.  然后，切换到 `main` 分支。在存储库页面顶部找到 **Branch** 下拉菜单（通常标记为 `main` 或当前分支名称）。点击下拉菜单并确保你在 `main` 分支上。
    
3.  接下来，创建 `staging` 分支。在你看到 `main` 分支的下拉菜单中，在文本框输入 `staging`。一旦你开始输入，GitHub 会给你提供创建一个名为 `staging` 的新分支的选项。从下拉菜单中选择 **Create branch: staging** 选项。
    
4.  最后，验证分支。创建 `staging` 分支后，GitHub 会自动切换到它。你现在应该在分支的下拉菜单中看到 `staging`，确认已创建新的分支。
    
    ![在 GitHub 存储库中创建新的 Staging 分支](https://cdn.hashnode.com/res/hashnode/image/upload/v1733152232155/e6215137-5e3b-474b-88f8-af03269eccc2.png)

该过程结合了持续集成（CI）和持续交付（CD）。你将从功能分支提交更改，将它们推送到远程功能分支，然后打开一个 PR 将这些更改合并到 `staging` 分支。以下是具体步骤：

#### **步骤 1：在功能分支上提交本地更改**

首先，通过运行以下命令确保你在正确的分支上（即功能分支）：

```
git status
```

如果不在 `feature/ci-cd-pipeline` 分支上，运行以下命令切换到该分支：

```
git checkout feature/ci-cd-pipeline
```

现在，该添加你所做的更改以进行提交：

```
git add .
```

此命令会暂存所有更改，包括新文件、修改文件和已删除文件。

接下来，用清晰且描述性的消息提交更改：

```
git commit -m "为项目设置 CI/CD 管道"
```

然后你可以通过运行以下命令验证你的提交：

```
git log
```

这将显示你最近的提交，你应该可以看到刚添加的提交信息。

#### **步骤 2：将功能分支更改推送到远程仓库**

提交更改后，将它们推送到远程仓库：

```
git push origin feature/ci-cd-pipeline
```

这会将 `feature/ci-cd-pipeline` 分支的本地更改推送到远程 GitHub 仓库。

推送成功后，在网页浏览器中访问你的 GitHub 仓库，确认 `feature/ci-cd-pipeline` 分支已更新你的新提交。

#### **步骤 3：创建拉取请求以将功能分支合并到 Staging**

转到 GitHub 上的仓库，并确保你在仓库的主页上。

你应该会在页面顶部看到一个建议为最近推送的分支（`feature/ci-cd-pipeline`）创建拉取请求的警示。点击警示旁边的 **Compare & Pull Request** 按钮。

现在，该选择基准和比较分支。在 PR 创建页面，确保 **base** 分支设置为 `staging`（这是你希望将更改合并到的分支）。**compare** 分支应该已经设置为 `feature/ci-cd-pipeline`（即你刚刚推送的分支）。如果它们未正确选择，则使用下拉菜单更改它们。

你需为此构思一个好的 PR 描述。为拉取请求撰写一个清晰的标题和描述，解释你合并了哪些更改以及原因。例如：

-   **标题**："合并功能分支的 CI/CD 设置更改"
    
-   **描述**："此拉取请求添加了 GitHub Actions 和 Docker Hub 集成的 CI/CD 管道到项目中。它包括 CI 和 CD 工作流程的配置。"
    

现在 GitHub 将显示所有将被合并的更改列表。花一点时间审查它们，确保一切看起来正常。

如果在审查之后一切都很好，点击 **Create pull request** 按钮。这将创建 PR 并通知团队成员（如果有的话）更改已准备好被审查和合并。

等待几秒钟，你应看到一条消息表示所有检查均已通过。点击带有描述 "**CI Pipeline to staging/production environment...**" 的链接。这应会将你指向持续集成工作流程，你可以查看运行的步骤

![从功能分支到 staging 分支创建新的拉取请求 (PR)](https://cdn.hashnode.com/res/hashnode/image/upload/v1733153444873/6ecdb277-0a45-44ec-981c-c7ee671cd2f0.png)

![从 PR (功能到 staging 分支) 运行的 CI 工作流程](https://cdn.hashnode.com/res/hashnode/image/upload/v1733153637817/e12fefde-9259-41a3-9bd1-63b5da1d88ea.png)

#### 持续集成（CI）过程

当对 `staging` 分支发起拉取请求时，CI 过程开始。这会触发定义在 `.github/workflows/ci-pipeline.yml` 文件中的 GitHub Actions 工作流程。该工作流程运行必要的步骤来设置环境、安装依赖项并构建 Node.js 应用程序。

然后运行自动化测试（使用 `npm test`）以确保更改不会破坏代码库中的任何功能。如果所有这些步骤都成功完成，则 CI 管道确认功能分支是稳定的并准备合并到 `staging` 分支以进行进一步测试和部署。

#### **步骤 4：合并拉取请求**

如果你的团队或合作者是项目的一部分，他们可能会审查你的 PR。此步骤可能涉及讨论任何更改或改进。如果一切看起来正常，审阅者会合并 PR。

一旦 PR 被审查和批准，你可以合并 PR。为此，只需点击 **Merge pull request** 按钮。当系统提示时，选择 **Confirm merge**。

合并后，你可以进入 `staging` 分支来验证更改是否成功合并。

### **合并 PR 后导航到操作页面**

一旦你成功地将拉取请求从 `feature/ci-cd-pipeline` 分支合并到 `staging` 分支，持续交付（CD）管道将被触发。要查看 CD 管道的进展，请导航到 GitHub 仓库中的 **Actions** 选项卡。方法如下：

![从合并到暂存 (功能到暂存) 的持续交付工作流程](https://cdn.hashnode.com/res/hashnode/image/upload/v1733154575368/96e236a2-ae66-494b-b544-f96955a18ac9.png)

![从合并到暂存 (功能到暂存) 的持续交付工作流作业](https://cdn.hashnode.com/res/hashnode/image/upload/v1733159329441/cb7e26a9-7a20-4b1b-9869-e00facc695c1.png)

![从合并到暂存 (功能到暂存) 的持续交付工作步骤](https://cdn.hashnode.com/res/hashnode/image/upload/v1733160506355/4682afe3-bb04-405d-af4e-fd9bd3494659.png)

这将允许您监控 CD 管道的状态，并检查在部署过程中是否存在任何问题。

如果您查看 CD 步骤和工作流，您会发现应用部署到**生产**环境的步骤被跳过，而部署到**暂存**环境的步骤则已执行。

#### **持续交付 (CD) 管道 – 进展情况：**

**持续交付 (CD) 管道** 自动化了将应用程序部署到 Google Cloud Run (测试环境) 的过程。该工作流由推送到 `staging` 分支触发，此操作在功能分支的更改合并到 `staging` 后发生。它也可以通过 `workflow_dispatch` 或发布新版本时手动触发。

该管道由多个阶段组成：

1. **测试作业：** 管道首先设置环境并使用 `npm test` 命令运行测试。如果测试通过，流程继续进行。
    
2. **构建作业：** 下一步是构建 Node.js 应用的 Docker 镜像，标记并推送到 Docker Hub。
    
3. **部署到 GCP：** 镜像推送后，工作流验证到 Google Cloud 并进行应用的部署。如果事件是发布 (即推送到 `main` 分支)，应用部署到生产环境。如果事件是推送到 `staging`，应用部署到暂存环境。
    

CD 过程确保对 `staging` 分支的任何更改都会自动测试、构建并部署到暂存环境，以便进一步验证。当发布版本时，它将触发对生产环境的部署，确保您的应用始终保持最新。

### 在 Google Cloud Run 上访问已部署的暂存环境应用 🌐

一旦成功完成 Google Cloud Run 的部署，您将需要访问正在**暂存**环境中运行的应用。按照以下步骤查找并访问已部署的应用：

#### 1\. **导航到 Google Cloud 控制台**

通过访问 [https://console.cloud.google.com][23] 在浏览器中打开 Google Cloud 控制台。如果您还未登录，请确保使用您的 Google 账户登录。

#### 2\. **进入 Cloud Run 仪表板**

在 Google Cloud 控制台中，使用顶部的搜索栏或通过左侧菜单导航：前往 **Cloud Run** (您可以在搜索栏中输入，或在 **产品与服务** > **计算** > **Cloud Run** 下找到)。点击 **Cloud Run** 打开 Cloud Run 仪表板。

#### 3\. **选择您的暂存服务**

在 **Cloud Run 仪表板** 中，您应能看到所有部署在各个环境中的服务列表。找到与暂存环境关联的服务。名称应类似于您在工作流中定义的名称 (例如 `gcr-ci-cd-staging`)。

![暂存环境的 Google Cloud Run 服务](https://cdn.hashnode.com/res/hashnode/image/upload/v1733159635861/4ac895d2-5071-4d3f-9ed1-5af2bcca8835.png)

#### 4\. **访问服务 URL**

选择您的暂存服务后，您将进入 **服务详情页面**。此页面提供有关已部署服务的所有重要信息。  
在此页面上，查找 **服务 URL** 标题下的 **URL** 部分。URL 看起来会像这样：`https://gcr-ci-cd-staging-<unique-id>.run.app`。

#### 5\. **访问应用程序**

点击 **服务 URL**，它将在浏览器中新标签中打开您的暂存环境。您现在可以像体验在线应用那样与您的应用进行交互，但在**暂存环境中**。

![暂存环境的 Google Cloud Run 服务 URL](https://cdn.hashnode.com/res/hashnode/image/upload/v1733160050763/b097e647-bf6d-442e-87df-fc7d82d3585c.png)

## **合并暂存分支到主分支 (持续集成和持续部署) 🌐**

在这一部分中，我们将暂存分支中的更新合并到主分支，并触发 CI/CD 管道。此过程不仅确保您的更改已具备生产准备状态，还会将其部署到生产/上线环境。 🚀

### 第一步：推送本地变更并打开拉取请求

**为什么？** 第一步涉及将暂存分支合并到主分支。就像之前的持续交付过程一样，这确保已彻底测试的更新得以整合。

操作步骤如下：

首先，访问托管您项目的 GitHub 仓库。

### 步骤 2：持续集成 (CI) 管道执行

合并拉取请求后，**持续集成 (CI)** 管道将自动执行，以验证更改在集成到**主分支**时是否仍然稳定。

#### 管道步骤：

-   **代码检出**：工作流从**主分支**提取最新代码。
    
-   **依赖安装**：管道安装所有必需的依赖项。
    
-   **测试**：运行自动化测试以验证应用程序的稳定性。
    

### 步骤 3：创建新版本

从主分支创建新版本将触发部署到生产环境的持续部署 (CD) 工作流。

让我们逐步了解如何创建一个版本。

在您的 GitHub 仓库页面，点击 **Releases** 部分（位于 **Code** 标签下）。

![导航到 GitHub 仓库中的 Release 页面](https://cdn.hashnode.com/res/hashnode/image/upload/v1733338781623/c21e7f03-5381-47f9-8807-b5a3360245ad.png)

接下来，点击 **Draft a new release**。将**目标**分支设置为 **main**。输入一个**标签版本**（例如，`v1.0.0`），遵循语义版本规范。添加一个**发布标题**和一个可选的更改描述。

然后，点击 **Publish Release** 以完成。

![在 GitHub 仓库中创建一个新版本](https://cdn.hashnode.com/res/hashnode/image/upload/v1733161473858/6e14214c-31fb-49b3-9dff-a719b9ec1d40.png)

#### 为什么在发布而不是推送时运行持续部署管道？🤔

在我们的设置中，我们决定不在每次更改推送到主分支时触发持续部署 (CD) 管道。而是仅在创建新版本时触发它。这让团队对何时将更新部署到生产环境有更多控制。

想象一个场景，开发人员正在开发新功能——他们可能会将更改推送到主分支，作为他们常规工作流程的一部分，但这些功能可能尚未完成或准备好供用户使用。自动部署每一次推送可能会意外地将未完成的功能展示给用户，这会导致混乱或干扰。

通过要求发布触发部署，团队有机会在上线之前完成和完善所有更改。

例如，开发人员可以在预发布环境中测试新功能，修复任何问题，并将这些更改合并到主分支中，而无需担心它们会立即出现在生产环境中。此工作流确保只有经过充分测试且完整的功能才会呈现给最终用户。

最终，这种方法有助于维护平稳的用户体验。用户不会看到构建到一半的功能或意想不到的更改，而是仅看到已准备好和功能齐全的更新。它还让团队能够频繁地将更改推送到主分支——防止合并冲突并让协作更容易——同时保持对部署上线内容的控制。🚀

### 步骤 4：导航至操作页面

发布后，生产环境的 CD 管道被触发。要监控此重复的过程以用于持续交付工作流，请按以下步骤操作：

1.  **转到 GitHub Actions 标签**：在您的 GitHub 仓库中，点击 **Actions** 标签。
    
2.  **定位部署工作流**：查找 **CD Pipeline to Google Cloud Run (staging and production)** 工作流。您会注意到，由于推送事件，工作流已在**主分支**上触发。
    
3.  **打开工作流详情**：点击工作流以查看每个部署过程的详细步骤、日志和状态。
    

这次，持续交付工作流将应用程序部署到**生产**/**上线**环境。

![从合并到主分支的持续部署工作流（从预发布到主分支）](https://cdn.hashnode.com/res/hashnode/image/upload/v1733164741827/303cd415-5bb9-4149-aa5d-7088d0eab582.png)

### 步骤 5：访问实时应用程序

完成部署后，前往 [https://console.cloud.google.com][24] 的 Google Cloud 控制台。

从菜单中导航到 **Cloud Run**。选择与**生产环境**对应的服务（例如，`gcr-ci-cd-app`）。

在服务详情页面找到**服务 URL**。在浏览器中打开此 URL 以访问实时应用程序。

现在，恭喜你——完成了!

## 结论 🌟

在本文中，我们探索了如何为 Node.js 应用程序构建和自动化 CI/CD 管道，使用 GitHub Actions、Docker Hub 和 Google Cloud Run。

我们设置了工作流来处理持续集成，通过测试和集成代码更改，以及持续交付将这些更改部署到预发布环境。我们还使用 Docker 使我们的应用程序容器化，并将其无缝部署到 Google Cloud Run。

最后，我们实现了持续部署，确保只有当从主分支创建版本时，更新才会应用到生产环境。

这种方法为团队提供了推送和测试未完成功能的灵活性，而不会影响最终用户。通过遵循这些步骤，您已构建了一个稳健的管道，使您的应用程序部署更加顺畅、快速和可靠。

如果你想要了解更多关于持续集成、交付和部署的信息，可以查看以下课程：

-   [**持续集成和持续交付 (CI/CD)（来自 IBM Coursera**][25]**)**
    
-   [**GitHub Actions - 完整指南（来自 Udemy**][26]**)**
    
-   [**通过构建项目学习 CI/CD (freeCodeCamp 教程)**][27]
    

### 关于作者 👨‍💻

你好，我是 Prince！我是一名软件工程师，热衷于构建可扩展的应用程序，并与技术社区分享知识。

如果你喜欢这篇文章，可以通过浏览我的博客和在 [LinkedIn 个人资料][28] 上的项目了解更多关于我的信息。你可以在[这里找到我的 LinkedIn 文章][29]。你也可以[访问我的网站][30]阅读更多我的文章。让我们一起联系并共同成长吧！😊

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

