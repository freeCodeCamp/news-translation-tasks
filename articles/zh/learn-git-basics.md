---
title: 学习 Git 基础知识 – 日常开发任务手册
date: 2024-08-19T09:40:38.579Z
author: Samyak Jain
authorURL: https://www.freecodecamp.org/news/author/samyak/
originalURL: https://www.freecodecamp.org/news/learn-git-basics/
posteditor: ""
proofreader: ""
---

欢迎阅读我关于 Git 的综合指南，这是一种分布式版本控制系统，已在软件开发中彻底改变了协作和代码管理。

<!-- more -->

无论你是经验丰富的开发人员还是刚开始编程之旅，了解 Git 都是控制代码、有效管理项目和与他人协作的必备技能。

在本教程中，我将带你了解 Git 的基本原理，涵盖从基本工作流到高级分支策略和 rebase 技术的所有内容。

在本指南结束时，你将对 Git 的核心概念有一个扎实的理解，并自信且熟练地在你的开发工作中有效使用它。

## 前提条件：

你只需带上好奇心和渴望学习的心态。本指南是为初学者精心制作的，因此不需要任何版本控制系统或编程的先验知识。无论你是完全的新手还是有一些编码经验，你都会发现本教程易于理解和跟随。

## **目录：**

1.  [什么是 Git？][1]  
    – [与其他版本控制系统的区别][2]  
    – [三种状态和基本 Git 工作流][3]
2.  [首次 Git 设置][4]
3.  [在 Git 中获取帮助][5]
4.  [如何获取 Git 仓库][6]  
    – [在现有目录中初始化仓库][7]  
    – [克隆现有 Git 仓库][8]
5.  [如何记录对仓库的更改][9]
6.  [查看 Git 中的提交历史][10]
7.  [在 Git 中撤销操作][11]
8.  [Git 中的远程仓库][12]
9.  [Git 中的标签][13]
10.  [Git 别名][14]
11.  [Git 分支][15]  
    – [在 Git 中创建新分支][16]  
    – [理解分支][17]  
    – [切换到 Git 中的其他分支][18]  
    – [可视化 Git 分支][19]
12.  [如何管理 Git 中的分支][20]  
    – [管理合并后的分支][21]  
    – [重命名分支][22]  
    – [更改默认分支名称][23]
13.  [分支工作流][24]
14.  [Git 中的 rebase][25]
15.  [总结][26]

## 什么是 Git？

Git 是一种分布式版本控制系统，可以帮助你和你的团队有效地协作，同时保持项目历史记录的安全。它就像为你的代码配备了一台时间机器！

### Git 与其他版本控制系统有什么不同？

#### 概念性差异：

Git 区别于其他工具的最大特点在于其对数据的处理方式。Git 不是存储文件的更改，而是将数据视为项目的一系列快照，即每次你进行更改并保存（提交）时，Git 会对你所有的文件进行快照。如果文件没有更改，Git 只保留对上一个相同文件的链接。

#### 本地操作：

使用 Git，大部分操作都不需要连接到服务器。因为你在电脑上拥有整个项目的历史记录，操作非常快。你可以浏览项目历史记录或查看版本之间的更改，而无需等待服务器响应。

#### 数据完整性：

Git 确保不会丢失或损坏任何信息。每个文件和目录都进行校验，若有任何更改，Git 都能识别。

Git 使用 SHA-1 哈希为每个文件的每个版本生成一个唯一的代码。如果对内容进行了任何更改，即使只是一个字符，也会生成不同的 SHA-1 哈希。

#### 仅追加模型：

在 Git 中，几乎所有操作都只会向项目添加数据，从而很难意外丢失信息。一旦你提交更改，这些更改就会被安全地存储。使用 Git 实验更改的风险较小。

### 三种状态和基本 Git 工作流

理解 Git 的三种状态——已修改、已暂存和已提交——是有效版本控制的关键：

-   **已修改**：对 **工作区** 中文件的更改尚未提交。
-   **已暂存**：标记为下次提交的 **暂存区** 中的修改。
-   **已提交**：永久存储在本地 **Git 目录** 中的更改。

**基本 Git 工作流**：

1.  **修改** 你的工作区中的文件。
2.  **暂存** 你想包括在下次提交中的更改。
3.  **提交** 更改，使快照永久保存到 Git 目录中。

## 首次 Git 设置

首次设置 Git 涉及自定义 Git 环境以适应你的个人喜好。不过，首先你需要从 [Git - 下载][27] 或使用 Chocolatey 包下载安装 Git。然后只需按照安装说明进行操作，你就能开始使用了。

### Git 配置

我们使用 `git config` 工具来自定义 Git 环境。此工具允许我们检索和设置配置变量，这些变量决定了 Git 的操作方式。这些变量可以存储在三个不同的位置：

1.  **系统范围配置：**  
    存储在 `/etc/gitconfig` 文件中，这些设置适用于系统上的所有用户和所有仓库。我们可以使用 `--system` 选项与 `git config` 一起操作此文件。
2.  **用户特定配置：**  
    存储在 `~/.gitconfig` 或 `~/.config/git/config` 中，这些值对你作为用户是特定的。我们可以使用 `--global` 选项与 `git config` 一起操作此文件，影响系统上的所有仓库。
3.  **仓库特定配置：**  
    存储在特定仓库中的 `.git/config` 文件中，这些设置会覆盖全局配置，只适用于该仓库。



要查看所有配置设置及其来源：

```bash
$ git config --list --show-origin
```

#### 如何在 Git 中配置您的身份：

Git 中的身份用于正确归属提交。让我们设置您的用户名和电子邮件地址。

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "your.email@example.com"
```

如果您需要为特定项目覆盖这些设置，可以在设置值时省略 `--global` 选项，这样它们只对那个特定的仓库生效。

#### 如何配置默认文本编辑器

在配置您的身份之后，设置 Git 中的默认文本编辑器也非常重要。当 Git 需要您输入消息（如编写提交消息或解决合并冲突时），这个文本编辑器将被使用。

默认情况下，Git 使用系统默认的文本编辑器。但是，如果您更喜欢使用其他文本编辑器，例如 Emacs，可以这样设置：

```bash
$ git config --global core.editor "emacs"
```

在 Windows 系统中，设置不同的文本编辑器需要指定其可执行文件的完整路径。例如，如果您想使用 Notepad++，可以使用以下命令：

```bash
$ git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

请确保提供正确的文本编辑器可执行文件的路径。

顺便提一下，这些参数 `"-multiInst -notabbar -nosession -noPlugin"` 是用于自定义 Notepad++ 在被 Git 启动时的行为。

#### 如何更改 Git 中的默认分支名称（可选）：

默认情况下，当您使用 `git init` 初始化新仓库时，Git 会创建一个名为 `master` 的分支。但是，从 Git 版本 2.28 开始，您可以为初始分支设置一个不同的名称。

```bash
$ git config --global init.defaultBranch main
```

将默认分支名称全局更改为 'main'

#### 如何检查 Git 中的配置/设置：

您可以使用以下命令查看您的 Git 配置：

```bash
$ git config --list
$ git config user.name  # 查询特定配置（如用户名）：
```

`git config --list` 命令列出 Git 能找到的所有配置设置。

## 如何在 Git 中获取帮助

有三种等效的方法可以获取任何 Git 命令的详细帮助：

1.  Git 帮助命令： `$ git help <verb>`
2.  使用 `--help` 选项： `$ git <verb> --help`
3.  手册页（manpages）： `$ man git-<verb>`

用您需要帮助的命令替换 `<verb>`。例如，要获取 `config` 命令的帮助，您可以输入：

```bash
$ git help config
或者
$ man git-config
```

这些命令也支持离线使用，非常方便。

如果您需要快速简洁的信息来了解 Git 命令的可用选项，可以使用 `-h` 选项：

```bash
$ git add -h    # 这将显示 add 命令的可用选项
```

## 如何获取 Git 仓库

要开始使用 Git，通常需要获取一个 Git 仓库。基本上有两种主要方法开始：

### 1\. 如何在现有目录中初始化 Git 仓库

打开终端或命令提示符。使用 `cd` 命令切换到项目所在的目录： `cd /path/to/your/project`.

进入项目目录后，通过运行以下命令初始化一个 Git 仓库：

```bash
$ git init
```

该命令会创建一个名为 `.git` 的新子目录，Git 将在其中存储该 Git 仓库所需的所有文件。此时，您的项目文件尚未被跟踪。

现在，假设您有一些文件需要 Git 开始跟踪：

```bash
$ git add *.py        # 添加所有 Python 文件
$ git add README.md   # 添加 README 文件
$ git commit -m 'Initial commit'
```

`git add` 将文件添加到暂存区，表示您希望将它们包含在下次提交中，然后提交更改。`-m` 标志允许您为提交添加描述性消息。

### 2\. 如何克隆现有的 Git 仓库：

获取 Git 仓库的第二种方法是克隆一个现有的。这在您想要处理其他地方已经存在的项目时非常有用（例如，您想贡献的项目）。

**注意：** 当您克隆一个仓库时，Git 会检索服务器上几乎所有的数据的完整副本。这包括项目历史的每个文件的每个版本。这意味着您会在本地机器上拥有该仓库历史的完整副本。

要克隆仓库，使用 `git clone` 命令，然后是您想要克隆的仓库的 URL。例如，要克隆 grok-1 仓库，您可以使用：

```bash
$ git clone https://github.com/xai-org/grok-1.git
```

这将在当前目录中创建一个名为 grok-1 的目录，在其内部初始化 `.git` 目录，并下载该仓库的所有数据。

顺便说一下，`.git` 只是一个表示 URL 指向 Git 仓库的约定。您可以使用或不使用它，这无关紧要。

如果您想将仓库克隆到一个不同名称的目录，可以指定它。要将 grok-1 仓库克隆到一个名为 "chatgpt" 的目录中，而不是 "grok-1"，可以这样做：

Git 提供了多种传输协议，你可以用来克隆仓库。上面的示例使用了 `https://` 协议，但你可能还会看到 `git://` 或 `user@server:path/to/repo.git`，它们使用的是 SSH 传输协议。

## 如何记录对存储库的更改

现在你已经设置了一个 Git 存储库，你通常需要进行更改并在存储库中记录这些更改。这个过程包括跟踪文件、暂存更改和提交快照。让我们来探讨一下具体步骤：

![生命周期](https://www.freecodecamp.org/news/content/images/2024/03/lifecycle.png)

图片来源 - https://git-scm.com/

### 1\. 如何检查 Git 中文件的状态：

在使用 Git 存储库时，了解文件的状态是至关重要的。

Git 将文件分为两类：已跟踪的和未跟踪的。已跟踪文件是指 Git 认知的文件，这些文件要么是上一个快照（提交）的一部分，要么已经被暂存。未跟踪文件是指 Git 当前未监控的所有其他文件。要检查你存储库的状态：

```bash
$ git status
```

此命令提供了关于当前分支、其同步状态和文件状态的全面信息。

`git status` 还建议可以采取的操作。例如，当文件已修改但未暂存提交时，`git status` 建议使用 `git add <file>` 将其暂存。它还建议使用 `git checkout -- <file>` 丢弃工作目录中的更改。这些建议通过提供快速访问相关的 Git 命令来简化你的工作流。

此外，`git status` 提供了一种简短状态模式 (`git status -s`)，它使用 M（已修改）、A（已添加）和 ??（未跟踪）等符号来简洁地展示你的更改。

### 2\. 如何在 Git 中跟踪新文件

当你在项目中创建一个新文件时，Git 最初会将其视为未跟踪文件。要开始跟踪一个新文件，你需要使用 `git add` 命令将其添加到暂存区。

例如，让我们为我们的项目创建一个名为 `index.html` 的新文件并将其添加到暂存区：

```bash
$ touch index.html
$ git add index.html
```

添加后，再次运行 `git status` 将显示 `index.html` 文件现在已被跟踪并暂存提交。

### 3\. 如何在 Git 中暂存已修改的文件

如果你修改了一个已跟踪的文件，需要使用 `git add` 将更改暂存。假设我们修改了一个名为 `styles.css` 的现有文件：

```bash
$ vim styles.css
```

修改后，暂存文件：

```bash
$ git add styles.css
```

现在，当你检查状态时，你会看到已修改的文件和新的文件都已暂存提交。

### 4\. 如何在 Git 中忽略文件

通常，项目中有些文件或目录不是为了被 Git 跟踪的。这些可能包括日志文件、构建工件或敏感信息（如本地环境设置，如 \*.env 或 config.json）。你可以使用 `.gitignore` 文件指定要忽略的这些文件。

创建一个 `.gitignore` 文件：

```bash
$ nano .gitignore
```

列出要忽略的文件或目录模式：

```bash
$ echo '*.log' >> .gitignore
$ echo 'build/' >> .gitignore
```

这里，我们告诉 Git 忽略所有以 `.log` 结尾的文件和 `build/` 目录。

**注意：** 在 `.gitignore` 文件添加之前，已经被 Git 跟踪的文件将继续被跟踪。要删除它们，你需要使用 Git 命令手动取消跟踪。

以下是一些可以在 Git 中更有效工作的模式：

- **准确定位单个文件或文件扩展名：** 例如，`test.txt` 仅忽略那个特定文件，而 `*.log` 忽略所有以 `.log` 结尾的文件。
- **广泛匹配的通配符：** 星号 (`*`) 通配符匹配任意数量的字符。例如，`*.doc` 忽略所有以 `.doc` 扩展名的文件，无论其名称如何。

### 5\. 如何在 Git 中查看更改：

如果你想在提交之前查看对文件的具体更改，可以使用 `git diff` 命令。

查看未暂存的更改：

```bash
$ git diff 
```

查看已暂存的更改：

```bash
$ git diff --cached README.md
```

`git diff` 提供了详细的实际修改视图。使用 `git diff <filename>` 可以专注于特定文件中的更改。

### 6\. 如何提交更改：

当你准备好提交更改时，使用 `git commit` 命令。这将打开文本编辑器供你输入提交信息。或者，你也可以使用 `-m` 标志直接添加提交信息：

一旦你暂存了想要包括在提交中的更改，就可以使用 `git commit` 提交它们

```bash
$ git commit -m "这里是你的提交信息"
```

### 7\. 如何在 Git 中删除文件：

如果你需要从 Git 的跟踪中删除一个文件，可以使用 `git rm`。它将从存储库和工作目录中删除该文件。假设你想删除一个名为 `temp.txt` 的文件：

```bash
$ git rm temp.txt
```

如果你只想从存储库中删除它，但保留在工作目录中，使用 `--cached` 选项：



### 8\. 如何在 Git 中移动（或重命名）文件：

Git 并不明确跟踪文件移动。但你可以使用 `git mv` 在仓库内重命名或移动文件。例如，将 `old_file.txt` 重命名为 `new_file.txt`：

```bash
$ git mv old_file.txt new_file.txt
```

这个命令将会暂存重命名操作，并在下次提交时反映出来。

它相当于手动移动文件，然后使用 `git rm` 移除旧文件，再用 `git add` 添加新文件。`git mv` 基本上将这些步骤整合到一个命令中。

这些命令构成了在 Git 仓库中进行更改、暂存更改和提交更改的基本工作流。

## 如何在 Git 中查看提交历史

在创建多个提交或克隆仓库之后，`git log` 命令允许你检查提交历史。

默认情况下，它以逆时间顺序列出提交，显示每个提交的 SHA-1 校验和、作者的名字和电子邮件、日期和提交信息。  
现在，让我们看看如何增强这个输出：

### 如何在 Git 中查看提交差异：

要查看每个提交中引入的差异，可以使用 `-p` 或 `--patch` 选项：

```bash
$ git log -p -2    # -2 用于查看最后两个提交中的差异
```

### 如何在 Git 中显示统计信息：

`--stat` 选项为每个提交提供摘要统计信息，包括修改的文件、添加/删除的行和摘要。

```bash
$ git log --stat
```

### 如何自定义 Git 日志输出格式：

`--pretty` 选项允许你改变日志输出格式。有多种选项可用于不同格式：

-   `oneline`: 每个提交的简明单行摘要。
-   `short`: 默认格式，包括作者、日期和信息。
-   `full`: 详细格式，包含提交哈希、作者、日期、信息和差异。
-   `fuller`: 更详细的格式，包括完整文件路径。
-   `format`: 使用格式说明符自定义输出。

```bash
$ git log --pretty=oneline
```

**`--pretty=format` 的有用格式说明符**：

-   `%h:` 简短的提交哈希
-   `%an:` 作者名字
-   `%ae:` 作者电子邮件
-   `%ad:` 作者日期
-   `%s:` 主题（提交信息）

```bash
$ git log --pretty=format:"%h %an %ad %s"
```

**ASCII 图表**：

使用 `--graph`，你还可以可视化分支和合并历史。

```bash
$ git log --pretty=format:"%h %s" --graph
```

### 如何限制 Git 日志输出：

除了格式选项，`git log` 提供各种限制选项来精炼显示的提交历史。

-   `-<n>:` 只显示最后的 n 次提交。
-   `--since, --until:` 限制在指定日期之后/之前的提交。
-   `--author:` 只显示特定作者的提交。
-   `--grep:` 根据提交信息中的关键词过滤提交。
-   `-S:` 显示更改的提交

****示例用法：**** 查看自特定日期以来作者 Abbey 的最后 3 次提交，包含补丁细节：

```bash
$ git log --author="Abbey" --since="2024-01-01" -p -3
```

## 如何在 Git 中撤销操作

在 Git 中撤销更改是常见需求，有多种选项可用于此目的。

### 如何在 Git 中撤销提交

如果你过早提交或需要对上一次提交进行额外更改，可以使用这条命令：

```bash
$ git commit --amend
```

这将打开提交信息编辑器，允许你修改信息。如果自上次提交以来没有进行任何更改，它只允许你编辑提交信息。

****注意****: 只修改仍然是本地的且尚未推送到远程的提交，以避免给协作者带来问题。

### 如何用 `git reset` 取消暂存文件

如果不小心包含了不需要的文件，可以使用 `git reset HEAD <file>` 命令取消暂存。例如：

```bash
$ git reset HEAD CONTRIBUTING.md 
```

文件被取消暂存，允许你在不提交不必要的更改的情况下进行进一步修改。

### 如何用 `git checkout` 取消修改的文件

假设你对文件进行了修改，后来意识到不想要这些修改。使用 `git checkout -- <file>` 取消文件的更改，将其恢复到之前的状态。

```bash
$ git checkout -- CONTRIBUTING.md
```

这将用上一次暂存或提交的版本替换已修改的文件。

### 使用 `git restore` 撤销操作

让我们探讨 Git 2.23.0 版本引入的替代方法 `git restore`，它作为 `git reset` 进行多种撤销操作的替代方式。

#### 如何用 `git restore` 取消暂存的文件

如果你不小心暂存了不打算提交的文件，可以使用 `git restore --staged <file>` 取消暂存它。

```bash
$ git restore --staged CONTRIBUTING.md   
```

文件被取消暂存，类似于 `git reset HEAD <file>`，允许你在不提交不必要的更改的情况下进行进一步修改。

#### 如何用 `git restore` 取消修改的文件

要取消工作目录中对文件的更改，使用 `git restore <file>`：

```bash
$ git restore CONTRIBUTING.md
```

类似于 `git checkout -- <file>`，此命令取消对指定文件的更改，将其恢复到上一次提交时的状态。

**替代方法:** 存储和分支是临时保留更改而不完全丢弃它们的替代方法。如果你不确定是否要丢弃更改，这些方法更安全。

## 如何在 Git 中使用远程仓库

远程仓库是托管在互联网或网络上的项目版本。与他人合作涉及管理这些远程仓库，包括添加、删除和检查它们。让我们学习如何有效地管理它们。

### 如何显示 Git 中的远程仓库

首先，让我们看看哪些远程服务器已经为项目配置了：

```bash
$ git remote
```

这个命令列出了我们指定的所有远程句柄的短名称。例如，如果我们克隆了一个仓库，通常会看到 `origin`，这是 Git 为我们克隆的服务器分配的默认名称。

添加 `-v` 选项可以提供更多细节，例如每个远程的 URL。

```bash
$ git remote -v
```

这将显示每个远程的获取和推送 URL，使我们了解项目的托管位置以及如何与其交互。

### 如何在 Git 中添加远程仓库

要显式添加一个新的远程仓库，请使用 `git remote add <shortname> <url>`：

```bash
$ git remote add example https://github.com/example/example.git
```

在这里，我们添加了一个名为 `example` 的远程仓库，并指定了 URL。这使我们可以在命令中使用短名称 `example` 来引用这个远程仓库。

### 如何从 Git 中获取和拉取远程仓库的数据

要从远程仓库获取数据，我们使用 `git fetch` 命令，后跟远程名称：

```bash
$ git fetch origin // 这里未指定任何特定分支。
```

它会将 `origin` 远程仓库中的所有新改动下载到本地仓库中，使我们保持最新状态。

或者，如果我们想在一个步骤中获取和合并来自远程分支的更改到当前分支中，我们使用 `git pull` 命令：

```bash
$ git pull origin master
```

在这里，我们是从 `origin` 远程仓库的 `master` 分支拉取更改到当前分支。

### 如何向 Git 中的远程仓库推送更改

要与他人共享我们的工作，我们使用以下命令将更改推送到远程仓库：

```bash
$ git push origin main
```

在这个例子中，我们将本地的更改推送到 `origin` 远程仓库的 `main` 分支。

### 如何检查 Git 中的远程仓库

最后，我们可以使用以下命令检查远程仓库以获取更多信息：

```bash
$ git remote show origin
```

这个命令显示了诸如获取和推送 URL、跟踪的分支，以及与 `origin` 远程仓库关联的本地分支配置等详细信息。

### 如何在 Git 中重命名远程仓库

现在假设我们想将远程仓库的短名称从 `example` 重命名为 `new-example`：

```bash
$ git remote rename example new-example
```

### 如何删除 Git 中的远程仓库

如果由于某种原因我们不再需要远程仓库并希望将其从项目中删除：

```bash
$ git remote remove new-example
```

或者

```bash
$ git remote rm new-example
```

删除后，远程跟踪分支和相关的配置设置也会被删除。

## Git 中的标签

Git 中的标签是一个基本功能，允许开发人员将存储库历史记录中的特定点标记为重要点。通常，标签用于表示发行点，例如 v1.0、v2.0 等。

### 如何列出 Git 中现有的标签

假设你正在处理一个有多个发行版本的项目。要列出现有的标签：

```bash
$ git tag
```

此外，你可以使用 `-l` 或 `--list` 选项搜索匹配特定模式的标签。例如：

```bash
$ git tag -l "v2.0*"
```

这个命令将列出类似 `v2.0`、`v2.0-beta` 等等与指定模式匹配的标签。

### 如何在 Git 中创建标签

Git 支持两种类型的标签：轻量级标签和附注标签。

#### 轻量级标签

当你想标记一个特定提交而不添加任何额外信息时，可以使用轻量级标签。例如：

```bash
$ git tag v1.1-lw
```

要查看与此标签关联的提交信息，使用：

```bash
$ git show v1.1-lw
```

轻量级标签仅显示提交校验和。

#### 附注标签

另一方面，附注标签包含额外的信息，例如标记者的信息、日期和标签消息。

创建附注标签涉及到使用 `-a` 选项和标签消息的 `git tag` 命令。例如：

```bash
$ git tag -a v2.0 -m "Release version 2.0"
```

要查看有关此标签的详细信息，包括它指向的提交和标签消息，使用：

```bash
$ git show v2.0
```

### 如何在 Git 中标记旧的提交

有时，你可能忘记为特定提交打标签。不用担心，你可以稍后通过指定提交校验和进行标记。

例如：假设你忘记为 ID 为 `abcdefg` 的提交打标签。你可以如下进行标记：

```bash
$ git tag -a v1.2 abcdefg
```

这个命令将指定的提交标记为 `v1.2`。

#### 如何将标签推送到远程仓库

要将特定标签推送到远程服务器，可以使用：

如果你有多个标签并想一次性推送它们，你可以使用 `--tags` 选项：

```bash
$ git push origin --tags
```

#### 如何在 Git 中删除标签

要在本地删除标签（从本地仓库中移除）：

```bash
$ git tag -d <tagname>
```

例如，要删除一个名为 `v1.4-lw` 的轻量标签：

```bash
$ git tag -d v1.4-lw
```

另一方面，你可以通过以下两种方式删除远程服务器上的标签：

1. 使用 `git push` 命令和一个 refspec：

```bash
$ git push origin :refs/tags/v1.1-lw
```

该命令推送空值 (`:`) 到远程标签 `v1.1-lw`，有效地删除了它。

2\. 使用 `--delete` 选项和 `git push`：

```bash
$ git push origin --delete v1.1-lw
```

这个命令直接从远程服务器删除标签 `v1.1-lw`。

#### 如何在 Git 中检出标签

要查看特定标签下文件的状态，你可以检出该标签：

```bash
$ git checkout v2.0
```

此命令会让你的仓库进入“分离头指针”状态，在此状态下你可以查看文件但不能直接进行修改。

如果你需要在该标签下工作，最好创建一个新分支：

```bash
$ git checkout -b v2.0-branch v2.0
```

现在你可以进行更改和提交，而不会影响到原始标签。

## Git 别名

Git 别名是你可以创建的快捷方式或自定义命令，以简化和优化你的 Git 工作流程。

要创建一个 Git 别名，你可以使用 `git config` 命令和 `--global` 标志，使该别名在你所有的 Git 仓库中可用。

### 常用命令的基础别名

你可以为经常使用的 Git 命令创建别名，使它们更容易记住和输入。例如：

```bash
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
```

现在，你可以分别使用简短的别名 `git co`、`git br` 和 `git ci` 替代完整的命令。

你还可以为你经常执行的操作或改进命令可读性 **创建自定义别名**。例如：

```bash
$ git config --global alias.unstage 'reset HEAD --'
```

现在你可以使用 `git unstage <file>` 来替代 `git reset HEAD -- <file>` 以取消暂存文件。

#### 如何在 Git 中结合多个命令

别名还可以用来将多个 Git 命令组合成一个单一的别名。例如，创建一个别名来暂存所有更改并一并提交它们：

```bash
$ git config --global alias.commitall '!git add -A && git commit'
```

现在，运行 `git commitall` 将会暂存所有更改 (`git add -A`) 然后提交它们，从而节省时间和按键次数。

## Git 分支

在 Git 中，分支提供了一种强大的方式来管理你的项目代码库，允许并行开发和实验，而不会影响主代码库。

Git 分支允许你从主开发线分离出来，进行特性开发或修复，然后合并你的更改。与许多其他版本控制系统不同，Git 的分支模型轻量且高效，使得分支操作几乎是瞬间完成的。

### Git 中的分支是什么？

分支是一个轻量的、可移动的指向提交的指针。默认分支名称通常为 "master"，但它并不特殊 – 它和其他分支一样。

创建和切换分支允许你同时在不同的特性上工作。

### 如何在 Git 中创建一个新分支：

当你想开始一个新特性或实验一个点子时，你可以在 Git 中创建一个新分支。这个新分支作为一个独立的开发线，允许你进行更改而不影响主分支。

```bash
$ git branch new_feature
```

这个命令创建一个名为 'new_feature' 的新分支，指向与当前分支相同的提交。分支可以共存，Git 保持一个特殊的指针叫做 `HEAD` 指示当前分支。

### 理解分支

首先，让我们掌握 Git 中分支的基础。当你初始化一个 Git 仓库时，你开始于一个默认分支，通常名为 'master' 或 'main'。分支本质上是指向提交的指针，使你能够独立地在不同的特性或修复上工作。

要查看你仓库中的所有分支，使用命令：

```bash
$ git branch
```

这会显示一个分支列表，带有星号 (*) 指示当前检出的分支。若要额外信息如每个分支的最后一次提交，使用：

```bash
$ git branch -v
```

### 如何在 Git 中切换到另一个分支：

要切换到一个已存在的不同分支，使用 `git checkout`。

```bash
$ git checkout new_feature
```

这个命令将 'HEAD' 指针切换到 'new_feature' 分支，使其成为当前活动的分支。

要在一次操作中创建并切换到一个新分支：

```bash
$ git checkout -b <newbranchname>
```

在 Git 2.23 版本及其后续版本中，你可以使用 `git switch` 替代 `git checkout`。

- 切换到一个已存在的分支：`git switch existing-branch`。
- 创建并切换到一个新分支：`git switch -c new-branch`。

### 如何在 Git 中可视化分支：

在创建和切换分支后，你可以使用以下命令来可视化分支结构：

This command displays a concise and graphical representation of the commit history and branch pointers, allowing you to see how branches diverge and merge over time.

## 如何管理 Git 中的分支

### 如何管理合并后的分支

随着项目的进展，一旦分支的更改完成，您将把它们合并回主分支。要识别已合并的分支，请执行：

```bash
$ git branch --merged
```

此命令列出了已成功合并到当前分支的分支。这些分支通常可以使用以下命令安全删除：

```bash
$ git branch -d branch_name
```

然而，对包含未合并工作的分支，请使用：

```bash
$ git branch --no-merged
```

删除此类分支需要使用 '-D' 标志：

```bash
$ git branch -D branch_name
```

这可以确保您不会意外丢失任何未合并的更改。

### 如何重命名分支

要重命名本地分支：

```bash
$ git branch --move old_branch_name new_branch_name
```

此命令会在本地更新分支名称。要在远程仓库中反映更改，请推送重命名后的分支：

```bash
$ git push --set-upstream origin new_branch_name
```

使用以下命令验证更改：

```bash
$ git branch --all
```

确保在远程删除旧分支：

```bash
$ git push origin --delete old_branch_name
```

这可确保本地和远程仓库的一致性。

### 如何更改默认分支名称

重命名默认分支（通常是 'master'）需要谨慎和协调，因为它会影响项目集成和协作者。

```bash
$ git branch --move master main
```

重命名后，将更新的分支推送到远程仓库：

```bash
$ git push --set-upstream origin main
```

请务必记住更新依赖项、测试、脚本和仓库主机中的引用和配置。完成后，删除远程的旧 master 分支：

```bash
$ git push origin --delete master
```

这与 `$ git config --global init.defaultBranch main` 我们在配置部分讨论的方式不同，如下：

-   `$ git branch --move master main`: 该命令将当前仓库中名为 “master” 的现有分支重命名为 “main”。它是一种仅影响该仓库的本地操作。
-   `$ git config --global init.defaultBranch main`: 该命令全局设置新仓库的默认分支名称。它不会重命名现有分支，但确保之后创建的任何新仓库将使用 “main” 作为默认分支名称，而不是 “master”。

**附加资源**: 可以看看这个官方 Git [资源][28]，它提供的信息丰富的视觉效果和图表，可以为您提供有关远程分支和分支管理概念的更多清晰度。

## 分支工作流

让我们更详细地了解分支，并看看在大型项目中常用的一种分支工作流。

### 长期运行的分支：

在 Git 中，长期运行的分支是在较长时间内保持开放的分支。

### 主题分支：

`主题`/`功能` 分支是为特定功能或工作创建的短期分支。与长期运行的分支不同，主题分支的创建、使用和在工作完成后通常会被删除。

**示例:** 让我们考虑一个团队维护两个长期运行的分支：`master` 和 `develop`。

-   `master` 分支只包含稳定代码，可能是已经发布或将要发布的代码。
-   `develop` 分支充当持续开发的测试平台。虽然它不一定总是稳定的，但它作为新功能的测试场地。

开发人员将更改从功能分支合并到 `develop` 分支进行测试。一旦功能经过彻底测试并稳定后，它们就会合并到 `master` 分支。

请注意更改如何通过不同级别的稳定性进行进展，从最不稳定的（功能分支）到更稳定的（如 develop 分支），因为它们经过测试和改进，最终合并到最稳定的主分支 / master 分支。

这保持了稳定代码和开发代码之间的明确分离，确保只有经过彻底测试的功能才能进入稳定发布版本。

### 分支最佳实践

1.  **创建描述性分支名称**: 使用有意义的分支名称，这些名称反映所开发的目的或功能。
2.  **删除未使用的分支**: 一旦分支完成了它的目的，并且它的更改已经合并到主分支中，请考虑删除它来保持仓库的清洁和可管理性。

## 在 Git 中的 Rebase

在 Git 中，当您在使用分支时，有两种主要方式将一个分支的更改整合到另一个分支中：合并和 Rebase。

与合并不同的是，合并可能会创建一个包含多个合并提交的混乱历史记录，而 Rebase 会产生线性历史记录，使得解析在一段时间内所做的更改序列更容易。

### 基本 Rebase 示例：

假设您正在一个项目中工作，包含两个分支："feature" 和 "master"。您在 "feature" 分支上进行了些提交，现在希望使用 Rebase 将这些更改整合到 "master" 分支中。

```bash
$ git checkout feature
```

然后，将功能分支变基到主分支上：

```bash
$ git rebase master
```

这个命令会将你在“feature”分支上所做的所有提交/更改应用到“master”分支的最新提交之上，并一一重放这些提交。

不仅是主分支，你还可以将一个主题分支变基到另一个主题分支上。示例：

假设你正在一个项目中工作，有两个功能分支：“frontend”和“backend”。你在“frontend”分支上进行了若干提交，现在希望将这些更改整合到“backend”分支中。

这次我们用一个不同的方法——  
使用 `git rebase` 的 `--onto` 选项将“frontend”分支变基到“backend”分支上：

```bash
$ git rebase --onto backend frontend
```

变基后，切换回“backend”分支并执行快进合并：

```bash
$ git checkout backend
$ git merge frontend
```

现在，你的项目历史显得线性，反映了从“frontend”分支到“backend”分支的顺序集成变化。

### 变基 vs 合并：哪个更好？

#### 变基使用场景：

-   适用于需要干净集成到主线分支的功能分支。
-   在开源贡献中更喜欢干净提交历史时优选。

#### 合并使用场景：

-   适合于在项目开发过程透明度至关重要的协作环境。
-   适用于需要维护准确历史记录的项目。

## 结论

本手册作为全面指南，旨在帮助理解和使用 Git，这个在软件开发中广泛使用的强大版本控制系统。

从基本工作流到设置仓库、打标签和分支远程仓库，我们已经学习了一套完整的功能，可以帮助简化开发过程。

---

![Samyak Jain](https://www.freecodecamp.org/news/content/images/size/w60/2024/02/profilepic.png)

永不满足的学习者，拥有 web 开发者的工具包。科学世界无尽地吸引着我。更多信息请访问 samyakinfo.tech

---

如果你读了这么多，感谢作者以示关心。表示感谢

学习编程免费。freeCodeCamp 的开源课程已经帮助超过 40,000 人获得了开发者的工作。[开始学习][29]

[1]: #what-is-git
[2]: #what-makes-git-different-from-other-version-control-systems
[3]: #the-three-states-and-basic-git-workflow
[4]: #first-time-git-setup
[5]: #how-to-get-help-in-git
[6]: #how-to-get-a-git-repository
[7]: #1-how-to-initialize-a-repository-in-an-existing-directory-in-git
[8]: #2-how-to-clone-an-existing-repository-in-git-
[9]: #how-to-record-changes-to-the-repository
[10]: #how-to-view-commit-history-in-git
[11]: #how-to-undo-things-in-git
[12]: #how-to-work-with-remote-repositories-in-git
[13]: #tagging-in-git
[14]: #git-aliases
[15]: #git-branching
[16]: #how-to-create-a-new-branch-in-git-
[17]: #understanding-branches
[18]: #how-to-switch-to-another-branch-in-git-
[19]: #how-to-visualise-branches-in-git-
[20]: #how-to-manage-branches-in-git
[21]: #how-to-manage-merged-branches
[22]: #how-to-rename-branches
[23]: #how-to-change-the-default-branch-name
[24]: #branching-workflow
[25]: #rebasing-in-git
[26]: #conclusion
[27]: https://git-scm.com/download/win
[28]: https://git-scm.com/book/en/v2/Git-Branching-Remote-Branches
[29]: https://www.freecodecamp.org/learn/
```

