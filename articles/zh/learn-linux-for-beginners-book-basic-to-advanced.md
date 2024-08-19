---
title: "Linux初学者指南: 从基础到高级技术 [完整书籍]"
date: 2024-08-19T09:06:00.637Z
author: Zaira Hira
authorURL: https://www.freecodecamp.org/news/author/zaira/
originalURL: https://www.freecodecamp.org/news/learn-linux-for-beginners-book-basic-to-advanced/
posteditor: ""
proofreader: ""
---

学习Linux是技术行业中最有价值的技能之一。它可以帮助你更快速更高效地完成任务。世界上许多强大的服务器和超级计算机都运行在Linux上。

<!-- more -->

学习Linux不仅能增强你在当前岗位上的能力，还能帮助你转型到其他技术职业，如DevOps、网络安全和云计算。

在这本手册中，你将学习Linux命令行的基础知识，然后过渡到更高级的主题，如Shell脚本编写和系统管理。无论你是Linux新手还是多年的用户，这本书都有适合你的内容。

重要提示：本书中的所有示例均在Ubuntu 22.04.2 LTS (Jammy Jellyfish)中演示。大多数命令行工具在其他发行版中大同小异。然而，如果你使用的是其他Linux发行版，一些GUI应用程序和命令可能会有所不同。

## 目录

-   [第1部分：Linux介绍][1]
    
    -   [1.1. Linux入门][2]
-   [第2部分：Bash Shell和系统命令介绍][3]
    
    -   [2.1. Bash Shell入门][4]
        
    -   [2.2. 命令结构][5]
        
    -   [2.3. Bash命令和快捷键][6]
        
    -   [2.4. 识别自己：`whoami`命令][7]
        
-   [第3部分：理解你的Linux系统][8]
    
    -   [3.1. 发现你的操作系统和规格][9]
-   [第4部分：通过命令行管理文件][10]
    
    -   [4.1. Linux文件系统层次结构][11]
        
    -   [4.2. 浏览Linux文件系统][12]
        
    -   [4.3. 管理文件和目录][13]
        
    -   [4.5. 查看文件的基本命令][14]
        
-   [第5部分：Linux文本编辑基础][15]
    
    -   [5.1. 精通Vim：完整指南][16]
        
    -   [5.2. 精通Nano][17]
        
-   [第6部分：Bash脚本编写][18]
    
    -   [6.1. Bash脚本编写的定义][19]
        
    -   [6.2. Bash脚本编写的优势][20]
        
    -   [6.3. Bash Shell和命令行界面的概述][21]
        
    -   [6.4. 如何创建和执行Bash脚本][22]
        
    -   [6.5. Bash脚本编写基础][23]
        
-   [第7部分：管理Linux中的软件包][24]
    
    -   [7.1. 软件包和包管理][25]
        
    -   [7.2. 通过命令行安装软件包][26]
        
    -   [7.3. 通过高级图形方法安装软件包 - Synaptic][27]
        
    -   [7.4. 安装从网站下载的软件包][28]
        
-   [第8部分：高级Linux主题][29]
    
    -   [8.1. 用户管理][30]
        
    -   [8.2. 通过SSH连接远程服务器][31]
        
    -   [8.3. 高级日志解析和分析][32]
        
    -   [8.4. 通过命令行管理Linux进程][33]
        
    -   [8.5. Linux中的标准输入和输出流][34]
        
    -   [8.6. Linux中的自动化 - 使用Cron Jobs自动化任务][35]
        
    -   [8.7. Linux网络基础][36]
        
    -   [8.8. Linux故障排除：工具和技术][37]
        
    -   [8.9. 服务器一般故障排除策略][38]
        
-   [结论][39]
    

## 第1部分：Linux介绍

### 1.1. Linux入门

#### 什么是Linux？

Linux是基于Unix操作系统的开源操作系统。它由Linus Torvalds于1991年创建。

开源意味着操作系统的源代码是公开的。这允许任何人修改原始代码，定制它，并将新的操作系统分发给潜在用户。

#### 为什么要学习Linux？

在今天的数据中心景观中，Linux和微软Windows是主要竞争者，Linux占据了主要份额。

以下是学习Linux的几个令人信服的理由：

-   鉴于Linux托管的普及性，很有可能你的应用程序将托管在Linux上。因此，作为开发人员，学习Linux变得越来越有价值。
    
-   随着云计算成为常态，你的云实例很有可能依赖于Linux。
    
-   Linux是许多物联网（IoT）和移动应用操作系统的基础。
    
-   在IT行业，擅长Linux的人有很多机会。
    

#### Linux是开源操作系统是什么意思？

首先，什么是开源？开源软件是其源代码自由访问的软件，允许任何人使用、修改和分发它。

每当创建源代码时，它会自动被视为版权保护的，其分发由版权持有者通过软件许可证管理。

Linux 主要是开源的，这意味着它的源代码是自由可用的。任何人都可以查看、修改和分发它。来自世界各地的开发人员都可以为其改进做出贡献。这为协作奠定了基础，这是开源软件的一个重要方面。

这种协作方式导致了 Linux 在服务器、台式机、嵌入式系统和移动设备上的广泛采用。

Linux 开源的最有趣的方面是，任何人都可以根据他们的具体需求定制操作系统，而不受专有限制的约束。

Chromebooks 使用的 Chrome OS 基于 Linux。全球许多智能手机运行的 Android 也基于 Linux。

**什么是 Linux 内核？**

内核是操作系统的核心组件，负责管理计算机及其硬件操作。它处理内存操作和 CPU 时间。

内核通过进程间通信和系统调用，在应用程序和硬件级数据处理之间充当桥梁。

当操作系统启动时，内核首先加载到内存中，并一直保留在内存中直到系统关闭。它负责诸如磁盘管理、任务管理和内存管理等任务。

![显示内核与应用程序和操作系统交互的 Linux 内核布局](https://cdn.hashnode.com/res/hashnode/image/upload/v1719844849011/f4bb226e-f319-4cb5-bfc9-c1a80401123e.png)

如果你对 Linux 内核的样子感到好奇，[这里][40] 是 GitHub 链接。

#### 什么是 Linux 发行版？

到目前为止，你已知道你可以重用 Linux 内核代码，修改它，并创建一个新的内核。你可以进一步结合不同的实用程序和软件，创建一个全新的操作系统。

Linux 发行版或 distro 是包含 Linux 内核、系统实用程序和其他软件的 Linux 操作系统版本。作为开源软件，Linux 发行版是多个独立开源开发社区共同努力的结果。

**发行版“派生”是什么意思？** 当你说一个发行版是从另一个发行版“派生”出来的，新的发行版是建立在原始发行版的基础上的。这种派生可以包括使用相同的软件包管理系统（稍后会详细介绍）、内核版本，有时甚至相同的配置工具。

今天，有成千上万的 Linux 发行版可供选择，它们提供了不同的目标和标准，以选择和支持其发行版提供的软件。

发行版彼此不同，但它们通常具有几个共同特征：

-   一个发行版包含一个 Linux 内核。
    
-   它支持用户空间程序。
    
-   一个发行版可能是小型且单一用途的，或包含数千个开源程序。
    
-   应该提供安装和更新发行版及其组件的一些方法。
    

如果你查看 [Linux 发行版时间轴][41]，你会看到两个主要的发行版：Slackware 和 Debian。有几个发行版是从它们派生出来的。例如，Ubuntu 和 Kali 是从 Debian 派生出来的。

**派生有什么优点？** 派生有各种优点。派生发行版可以利用母版发行版的稳定性、安全性和大型软件库。

在现有基础上构建时，开发人员可以将他们的精力和努力完全专注于新发行版的特定功能。派生发行版的用户可以受益于母版发行版已有的文档、社区支持和资源。

一些流行的 Linux 发行版有：

1.  **Ubuntu**：最广泛使用和流行的 Linux 发行版之一。它用户友好，推荐给初学者。[在这里了解更多关于 Ubuntu 的信息][42]。
    
2.  **Linux Mint**：基于 Ubuntu，Linux Mint 提供了一个专注于多媒体支持的用户友好体验。[在这里了解更多关于 Linux Mint 的信息][43]。
    
3.  **Arch Linux**：在有经验的用户中很受欢迎，Arch 是一个轻量级且灵活的发行版，适合喜欢 DIY 方法的用户。[在这里了解更多关于 Arch Linux 的信息][44]。
    
4.  **Manjaro**：基于 Arch Linux，Manjaro 提供了预装软件和易于系统管理工具的用户友好体验。[在这里了解更多关于 Manjaro 的信息][45]。
    
5.  **Kali Linux**：Kali Linux 提供了一套全面的安全工具，主要专注于网络安全和黑客。[在这里了解更多关于 Kali Linux 的信息][46]。
    

#### 如何安装和访问 Linux

学以致用是学习的最佳方式。在本节中，我们将学习如何在你的机器上安装 Linux，以便你能够跟随一起学习。你还将学习如何在 Windows 机器上访问 Linux。

我建议你遵循本节中提到的任何一种方法来访问 Linux，以便你能够跟随一起学习。

##### 将 Linux 安装为主要操作系统

将 Linux 安装为主要操作系统是使用 Linux 的最有效方式，因为你可以充分利用机器的全部性能。

-   **步骤 1 – 下载 Ubuntu iso 文件：** 访问官方[网站][47]，下载 iso 文件。请确保选择标有 “LTS” 的稳定版本。LTS 代表长期支持，这意味着您可以获得长时间的免费安全和维护更新（通常为 5 年）。
    
-   **步骤 2 – 创建可启动的 U 盘：** 有许多软件可以创建可启动的 U 盘。我推荐使用 Rufus，因为它非常容易使用。您可以从[这里][48]下载。
    
-   **步骤 3 – 从 U 盘启动：** 一旦您的可启动 U 盘准备好，插入 U 盘并从中启动。启动菜单取决于您的笔记本电脑。您可以在谷歌上搜索您的笔记本电脑型号的启动菜单。
    
-   **步骤 4 – 按提示操作：** 一旦启动过程开始，选择 `试用或安装 Ubuntu`。
    
    ![选择试用或安装 Ubuntu 的屏幕提示](https://cdn.hashnode.com/res/hashnode/image/upload/v1719304227675/5b706f94-7368-47ca-a4d6-d55a0d92eff9.png)
    
    此过程将需要一些时间。一旦 GUI 出现，您可以选择语言和键盘布局并继续。输入您的登录名和姓名。记住这些凭证，您将需要它们来登录系统并获得完全权限。等待安装完成。
    
-   **步骤 5 – 重启：** 点击现在重启并取出 U 盘。
    
-   **步骤 6 – 登录：** 使用您之前输入的凭证登录。
    

就是这样！现在您可以安装应用程序并自定义桌面。

![Ubuntu 22.04.4 LTS 桌面屏幕](https://cdn.hashnode.com/res/hashnode/image/upload/v1719304547967/d150c6eb-d04e-47e0-8473-d1a837df45c4.png)

对于高级安装，您可以探索以下主题：

-   磁盘分区
    
-   为启用休眠设置交换内存
    

**访问终端**

本手册的重要部分是学习如何使用终端，您将在终端运行所有命令并观察这些魔法的发生。您可以通过按 "Windows" 键并输入 "终端" 来搜索终端。您还可以将终端固定在停靠栏中，方便访问其他应用程序。

![搜索 "终端" 的结果](https://cdn.hashnode.com/res/hashnode/image/upload/v1719305113272/4dd30c5e-da73-4cd4-86bb-7dcd8cd2084c.png)

> 💡 打开终端的快捷方式是 `ctrl+alt+t`

您还可以从文件夹内打开终端。右键点击当前位置，然后点击 “在终端中打开”。这将打开相同路径下的终端。

![通过右键菜单打开终端](https://cdn.hashnode.com/res/hashnode/image/upload/v1719305289021/284a4a53-2d1a-4eaa-925a-1002a32c1dce.png)

##### 如何在 Windows 机器上使用 Linux

有时您可能需要同时运行 Linux 和 Windows。幸运的是，有几种方法您可以在不为每个操作系统购买不同计算机的情况下获得两全其美的体验。

在本节中，您将探索几种在 Windows 机器上使用 Linux 的方法。其中一些是基于浏览器或云的，在使用前不需要安装任何操作系统。

**选项 1：“双启动” Linux + Windows** 使用双启动，您可以在计算机上安装 Linux 和 Windows，从而在启动时选择使用哪个操作系统。

这需要分区硬盘并在单独的分区上安装 Linux。通过这种方式，您一次只能使用一个操作系统。

**选项 2：使用 Windows 子系统（WSL）** Windows 子系统 (WSL) 提供了一个兼容层，使您可以在 Windows 上原生运行 Linux 二进制可执行文件。

使用 WSL 具有一些优势。WSL 的设置简单且不耗时。相比于需要从主机分配资源的虚拟机，它是轻量级的。您不需要为 Linux 机器安装任何 ISO 或虚拟磁盘映像，这通常是大文件。您可以同时使用 Windows 和 Linux。

**如何安装 WSL2**

首先，在设置中启用 Windows 子系统选项。

-   打开开始菜单，搜索 “启用或关闭 Windows 功能”。
    
-   如果尚未启用，请选中 “Windows 子系统” 选项。
    
    ![在 Windows 功能中检查 "Windows 子系统" 选项](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306102095/84f23bae-faa5-4ece-a9b6-e40f8789a061.png)
    
-   接下来，打开命令提示符并提供安装命令。
    
-   以管理员身份打开命令提示符：
    
    ![通过右键点击应用程序并选择 “以管理员身份运行” 来以管理员身份运行命令提示符](https://cdn.hashnode.com/res/hashnode/image/upload/v1720451480640/6052c9b4-cf07-47e0-ae89-18c3a2d3e385.png)
    
-   运行以下命令：
    

```
wsl --install
```

输出如下：

![Ubuntu 下载进度](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306131053/b7272031-ddb7-4e04-8d7b-bafc0911da04.png)

注意：默认情况下，将安装 Ubuntu。

![使用 WSL 默认安装的 Ubuntu](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306144861/a01f95df-1d95-4b79-bff9-08759be0d3dc.png)

-   安装完成后，您需要重新启动 Windows 机器。因此，请重启您的 Windows 机器。

![重启后显示的窗口](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306157704/15620fbe-59d1-40da-9cd6-119a1fab0802.png)

当 Ubuntu 安装完成后，系统会提示你输入用户名和密码。

![提示用户输入用户名和密码](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306167380/5e3058cd-b7a1-45b1-a16d-c23b5a451504.png)

就是这样！你已经准备好使用 Ubuntu 了。

通过在开始菜单中搜索来启动 Ubuntu。

![从开始菜单启动 Ubuntu](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306185110/77c17856-08ac-4ec7-9380-5b06f93be095.png)

此时，你的 Ubuntu 实例已经启动。

![使用 WSL 成功安装 Ubuntu](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306196320/13be3a71-5b40-440c-a6bf-d742e5b5934b.png)

**选项 3：使用虚拟机 (VM)**

虚拟机 (VM) 是物理计算机系统的软件仿真。它允许你在单个物理机器上同时运行多个操作系统和应用程序。

你可以使用虚拟化软件，如 Oracle VirtualBox 或 VMware，在 Windows 环境中创建运行 Linux 的虚拟机。这允许你将 Linux 作为来宾操作系统与 Windows 并行运行。

VM 软件提供分配和管理每个 VM 硬件资源的选项，包括 CPU 核心、内存、磁盘空间和网络带宽。你可以根据来宾操作系统和应用的要求调整这些分配。

以下是一些常用的虚拟化选项：

-   [Oracle VirtualBox][49]

-   [Multipass][50]

-   [VMware Workstation Player][51]

**选项 4：使用基于浏览器的解决方案**

基于浏览器的解决方案对于快速测试、学习或从未安装 Linux 的设备访问 Linux 环境特别有用。

你可以使用在线代码编辑器或基于 Web 的终端访问 Linux。注意，在这些情况下，你通常没有完全的管理员权限。

#### **在线代码编辑器**

在线代码编辑器提供内置 Linux 终端的编辑器。虽然它们的主要目的是编码，但你也可以利用 Linux 终端来执行命令和完成任务。

[Replit][52] 是一个在线代码编辑器的例子，你可以在其中编写代码并同时访问 Linux shell。

![在 Replit 中运行脚本和 bash shell](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306257260/d85d5541-b78f-4c8b-99a8-dbd8c097f661.gif)

#### **基于 Web 的 Linux 终端：**

在线 Linux 终端允许你直接从浏览器访问 Linux 命令行界面。这些终端提供一个基于 Web 的 Linux shell 接口，使你可以执行命令并使用 Linux 实用程序。

一个例子是 [JSLinux][53]。以下截图展示了一个现成可用的 Linux 环境：

![使用 JSLinux 访问 Linux 终端](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306276915/ddaabfc3-9a20-43b2-bedc-0af6875d2008.png)

**选项 5：使用基于云的解决方案**

你可以考虑使用基于云的 Linux 环境或虚拟私有服务器 (VPS) 来远程访问和工作，而不是直接在 Windows 机器上运行 Linux。

像 Amazon EC2、Microsoft Azure 或 DigitalOcean 这样的服务提供你可以从 Windows 计算机连接的 Linux 实例。注意，其中一些服务提供免费层，但通常不会长期免费。

## 第 2 部分：Bash Shell 和系统命令介绍

### 2.1. 开始使用 Bash shell

#### Bash shell 介绍

Linux 命令行由一个称为 shell 的程序提供。多年来， shell 程序不断发展，以适应各种选项。

可以为不同用户配置不同的 shell。但大多数用户更喜欢使用当前的默认 shell。许多 Linux 发行版的默认 shell 是 GNU Bourne-Again Shell (`bash`)。Bash 是继 Bourne Shell (`sh`) 之后的一个版本。

要找出你当前的 shell，打开终端并输入以下命令：

```
echo $SHELL
```

命令解析：

-   `echo` 命令用于在终端打印信息。

-   `$SHELL` 是一个特殊变量，包含当前 shell 的名称。

在我的设置中，输出是 `/bin/bash`。这意味着我正在使用 bash shell。

```
# output
echo $SHELL
/bin/bash
```

Bash 非常强大，因为它可以简化一些用 GUI（图形用户界面）很难有效完成的操作。记住，大多数服务器没有 GUI，最好学习使用命令行界面的强大功能（CLI）。

**终端 vs Shell**

术语“终端”和“shell”常常互换使用，但它们实际上指的是命令行界面的不同部分。

终端是与你交互的一种界面。Shell 是处理和执行你的命令的命令解释程序。关于 shell 的更多内容，你将在本手册第 6 部分中学习。

当一个 shell 被交互式使用时，它会在等待用户命令时显示一个 `$` 符号。这被称为 shell 提示符。

`[username@host ~]$`

如果 shell 以 `root` 用户身份运行（稍后你会学习更多关于 root 用户的内容），提示符会变为 `#`。

`[root@host ~]#`

### 2.2. 命令结构

命令是执行特定操作的程序。一旦你访问了 shell，你可以在 `$` 符号后输入任何命令，并在终端上看到输出。

通常，Linux 命令遵循以下语法：

```
command [options] [arguments]
```

下面是上述语法的细分：

-   `command`：这是你想要执行的命令的名称。`ls`（列表）、`cp`（复制）和 `rm`（删除）是常见的 Linux 命令。

-   `[options]`：选项或标志，通常以单短横线 (-) 或双短横线 (--) 开头，用于修改命令的行为。它们可以改变命令的操作方式。例如，`ls -a` 使用 `-a` 选项来显示当前目录中的隐藏文件。

-   `[arguments]`：参数是命令需要的输入。这些可以是文件名、用户名或命令将要处理的其他数据。例如，在命令 `cat access.log` 中，`cat` 是命令，而 `access.log` 是输入。因此，`cat` 命令显示 `access.log` 文件的内容。

选项和参数并不是所有命令都需要的。有些命令可以在没有任何选项或参数的情况下运行，而其他命令可能需要一个或两个才能正常运行。你可以随时查看命令的手册以检查它支持的选项和参数。

💡**提示：**你可以使用 `man` 命令查看命令的手册。

你可以通过 `man ls` 访问 `ls` 命令的手册页，它看起来像这样：

![5b1232a6-8c0b-4a97-86f0-9f15f2e14ed7](https://cdn.hashnode.com/res/hashnode/image/upload/v1719312523336/5b1232a6-8c0b-4a97-86f0-9f15f2e14ed7.png)

手册页是一种快速访问文档的好方法。我强烈推荐你阅读那些你经常使用的命令的手册页。

### 2.3. Bash 命令和键盘快捷键

当你在终端中时，可以使用快捷键来加速你的任务。

以下是一些最常见的终端快捷键：

| 操作 | 快捷键 |
| --- | --- |
| 查找前一个命令 | 上箭头 |
| 跳到前一个单词的开头 | Ctrl+左箭头 |
| 清除从光标到命令行末尾的字符 | Ctrl+K |
| 完成命令、文件名和选项 | 按 Tab 键 |
| 跳到命令行的开头 | Ctrl+A |
| 显示以前的命令列表 | history |

### 2.4. 识别身份：`whoami` 命令

你可以使用 `whoami` 命令获取你登录的用户名。当你在不同用户之间切换并想确认当前用户时，这个命令非常有用。

在 `$` 符号后输入 `whoami` 并按回车。

```
whoami
```

这是我得到的输出。

```
zaira@zaira-ThinkPad:~$ whoami
zaira
```

## 第三部分：了解你的 Linux 系统

### 3.1. 发现你的操作系统和规格

#### 使用 `uname` 命令打印系统信息

你可以使用 `uname` 命令获取详细的系统信息。

当你提供 `-a` 选项时，它会打印所有系统信息。

```
uname -a
# 输出
Linux zaira 6.5.0-21-generic #21~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Feb  9 13:32:52 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
```

在上面的输出中，

-   `Linux`：表示操作系统。

-   `zaira`：表示机器的主机名。

-   `6.5.0-21-generic #21~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Feb 9 13:32:52 UTC 2`：提供内核版本、构建日期和一些额外的详细信息。

-   `x86_64 x86_64 x86_64`：表示系统的架构。

-   `GNU/Linux`：表示操作系统类型。

#### 使用 `lscpu` 命令查找 CPU 架构的详细信息

Linux 中的 `lscpu` 命令用于显示 CPU 架构的信息。当你在终端中运行 `lscpu` 时，它会提供一些详细信息，例如：

-   CPU 的架构（例如，x86\_64）

-   CPU 操作模式（例如，32 位，64 位）

-   字节顺序（例如，小端序）

-   CPU 数量（例如，CPU 的数量），等等

尝试一下：

```
lscpu
# 输出
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  12
  On-line CPU(s) list:   0-11
Vendor ID:               AuthenticAMD
  Model name:            AMD Ryzen 5 5500U with Radeon Graphics
    Thread(s) per core:  2
    Core(s) per socket:  6
    Socket(s):           1
    Stepping:            1
    CPU max MHz:         4056.0000
    CPU min MHz:         400.0000
```

这些信息虽然很多，但也很有用。记住，你始终可以通过使用特定标志来筛选相关信息。参见 `man lscpu` 以查看命令手册。

## 第四部分：从命令行管理文件

在 Linux 中，所有文件都存储在文件系统中。它遵循类似倒置树状的结构，因为根位于最上方。

`/` 是根目录，也是文件系统的起点。根目录包含系统上的所有其他目录和文件。`/` 字符也作为路径名称之间的目录分隔符。例如，`/home/alice` 构成一个完整路径。

下图显示了完整的文件系统层次结构。每个目录都有特定的用途。

请注意，这不是详尽的列表，不同的发行版可能有不同的配置。

![Linux 文件系统层次结构](https://cdn.hashnode.com/res/hashnode/image/upload/v1719322457140/02fdbf2c-f4fa-438b-af2f-c23f59f9ddf4.png)

下表显示了每个目录的用途：

| 位置 | 目的 |
| --- | --- |
| /bin | 必要的命令二进制文件 |
| /boot | 启动加载程序的静态文件，用于启动引导过程。 |
| /etc | 特定主机的系统配置 |
| /home | 用户主目录 |
| /root | 管理员根用户的主目录 |
| /lib | 必要的共享库和内核模块 |
| /mnt | 临时挂载文件系统的挂载点 |
| /opt | 附加的应用程序软件包 |
| /usr | 已安装的软件和共享库 |
| /var | 在引导之间也保持持久的可变数据 |
| /tmp | 所有用户可访问的临时文件 |

💡 **提示:** 您可以使用 `man hier` 命令了解更多有关文件系统的信息。

您可以使用 `tree -d -L 1` 命令检查您的文件系统。您可以修改 `-L` 标志来更改树的深度。

```
tree -d -L 1
# 输出
.
├── bin -> usr/bin
├── boot
├── cdrom
├── data
├── dev
├── etc
├── home
├── lib -> usr/lib
├── lib32 -> usr/lib32
├── lib64 -> usr/lib64
├── libx32 -> usr/libx32
├── lost+found
├── media
├── mnt
├── opt
├── proc
├── root
├── run
├── sbin -> usr/sbin
├── snap
├── srv
├── sys
├── tmp
├── usr
└── var

25 个目录
```

此列表并不详尽，不同的发行版和系统可能有不同的配置。

### 4.2. 在 Linux 文件系统中导航

#### 绝对路径 vs 相对路径

绝对路径是从根目录到文件或目录的完整路径。它总是以 `/` 开头。例如，`/home/john/documents`。

另一方面，相对路径是从当前目录到目标文件或目录的路径。它不会以 `/` 开头。例如，`documents/work/project`。

#### 使用 `pwd` 命令定位当前目录

在 Linux 文件系统中很容易迷失方向，尤其是当你刚接触命令行时。您可以使用 `pwd` 命令定位当前目录。

这是一个示例：

```
pwd
# 输出
/home/zaira/scripts/python/free-mem.py
```

#### 使用 `cd` 命令更改目录

更改目录的命令是 `cd`，它代表 "change directory"（更改目录）。您可以使用 `cd` 命令导航到不同的目录。

您可以使用相对路径或绝对路径。

例如，如果您想导航以下文件结构（沿着红线）：

![示例文件结构](https://cdn.hashnode.com/res/hashnode/image/upload/v1719389950079/640cce46-6c52-4f38-9787-581747fb9798.png)

并且您位于 "home"，命令如下：

```
cd home/bob/documents/work/project
```

一些其他常用的 `cd` 快捷方式如下：

| 命令 | 描述 |
| --- | --- |
| `cd ..` | 返回上一级目录 |
| `cd ../..` | 返回上两级目录 |
| `cd` 或 `cd ~` | 进入主目录 |
| `cd -` | 返回上一个路径 |

### 4.3. 管理文件和目录

在处理文件和目录时，您可能想要复制、移动、删除和创建新文件和目录。以下是一些可以帮助您的命令。

💡**提示:** 您可以通过查看 `ls -l` 输出的第一个字母来区分文件和文件夹。`'-'` 代表文件，`'d'` 代表文件夹。

!["d" 表示一个文件夹](https://cdn.hashnode.com/res/hashnode/image/upload/v1719390306244/4f1688cd-ded5-43fe-b13a-9ca44ac7c4ad.png)

#### 使用 `mkdir` 命令创建新目录

您可以使用 `mkdir` 命令创建一个空目录。

```
# 在当前文件夹中创建一个名为 "foo" 的空目录
mkdir foo
```

您还可以使用 `-p` 选项递归地创建目录。

```
mkdir -p tools/index/helper-scripts
# tree 输出
.
└── tools
    └── index
        └── helper-scripts

3 个目录，0 个文件
```

#### 使用 `touch` 命令创建新文件

`touch` 命令创建一个空文件。您可以这样使用它：

```
# 在当前文件夹中创建一个空文件 "file.txt"
touch file.txt
```

如果您想在一个命令中创建多个文件，可以将文件名链在一起。

```
# 在当前文件夹中创建空文件 "file1.txt"、"file2.txt" 和 "file3.txt"
touch file1.txt file2.txt file3.txt
```

#### 使用 `rm` 和 `rmdir` 命令删除文件和目录

您可以使用 `rm` 命令删除文件和非空目录。

🛑 注意，在使用 `-f` 标志时需要谨慎，因为在删除文件之前不会收到提示。同时，在 `root` 文件夹中运行 `rm` 命令时要小心，因为这可能导致删除重要的系统文件。

#### 使用 `cp` 命令复制文件

要在 Linux 中复制文件，可以使用 `cp` 命令。

-   **复制文件的语法:**`cp source_file destination_of_file`

此命令将名为 `file1.txt` 的文件复制到新文件位置 `/home/adam/logs`。

```
cp file1.txt /home/adam/logs
```

`cp` 命令还会创建一个具有提供的名称的文件副本。

此命令将名为 `file1.txt` 的文件复制到同一文件夹中的另一个名为 `file2.txt` 的文件。

```
cp file1.txt file2.txt
```

#### 使用 `mv` 命令移动和重命名文件和文件夹

`mv` 命令用于将文件和文件夹从一个目录移动到另一个目录。

**移动文件的语法:**`mv source_file destination_directory`

**示例:** 将名为 `file1.txt` 的文件移动到名为 `backup` 的目录：

```
mv file1.txt backup/
```

要移动目录及其内容：

```
mv dir1/ backup/
```

在 Linux 中重命名文件和文件夹也使用 `mv` 命令。

**重命名文件的语法:**`mv old_name new_name`

**示例:** 将文件从 `file1.txt` 重命名为 `file2.txt`：

```
mv file1.txt file2.txt
```

将目录从 `dir1` 重命名为 `dir2`：

```
mv dir1 dir2
```

### 4.4. 使用 `find` 命令定位文件和文件夹

`find` 命令可以让你有效地搜索文件、文件夹以及字符和块设备。

以下是 `find` 命令的基本语法：

```
find /path/ -type f -name file-to-search
```

其中，

-   `/path` 是文件可能被找到的路径。这是搜索文件的起点。路径也可以是`/`或 `.` 分别表示根目录和当前目录。
    
-   `-type` 代表文件描述符。它们可以是以下任何一种：  
    `f` – **普通文件**，如文本文件、图像和隐藏文件。  
    `d` – **目录**。这些是考虑中的文件夹。  
    `l` – **符号链接**。符号链接指向文件，类似于快捷方式。  
    `c` – **字符设备**。用于访问字符设备的文件称为字符设备文件。驱动程序通过发送和接收单个字符（字节，八位字节）与字符设备通信。示例包括键盘、声卡和鼠标。  
    `b` – **块设备**。用于访问块设备的文件称为块设备文件。驱动程序通过发送和接收整个数据块与块设备通信。示例包括 USB 和 CD-ROM。
    
-   `-name` 是你要搜索的文件类型的名称。
    

#### 如何按名称或扩展名搜索文件

假设我们需要查找名称中包含“style”的文件。我们将使用此命令：

```
find . -type f -name "style*"
#output
./style.css
./styles.css
```

现在假设我们要查找特定扩展名的文件，如 `.html`。我们将这样修改命令：

```
find . -type f -name "*.html"
# output
./services.html
./blob.html
./index.html
```

#### 如何搜索隐藏文件

文件名开头的点表示隐藏文件。它们通常是隐藏的，但可以使用 `ls -a` 在当前目录中查看。

我们可以如下修改 `find` 命令来搜索隐藏文件：

```
find . -type f -name ".*"
```

**列出和查找隐藏文件**

```
ls -la
# 文件夹内容
total 5
drwxrwxr-x  2 zaira zaira 4096 Mar 26 14:17 .
drwxr-x--- 61 zaira zaira 4096 Mar 26 14:12 ..
-rw-rw-r--  1 zaira zaira    0 Mar 26 14:17 .bash_history
-rw-rw-r--  1 zaira zaira    0 Mar 26 14:17 .bash_logout
-rw-rw-r--  1 zaira zaira    0 Mar 26 14:17 .bashrc

find . -type f -name ".*"
# find output
./.bash_logout
./.bashrc
./.bash_history
```

上面你可以看到我的主目录中的隐藏文件列表。

#### 如何搜索日志文件和配置文件

日志文件通常具有 `.log` 扩展名，我们可以像这样找到它们：

```
 find . -type f -name "*.log"
```

同样，我们可以这样搜索配置文件：

```
 find . -type f -name "*.conf"
```

#### 如何按类型搜索其他文件

我们可以通过提供 `c` 给 `-type` 选项来搜索字符块文件：

```
find / -type c
```

同样，我们可以使用 `b` 来查找设备块文件：

```
find / -type b
```

#### 如何搜索目录

在下面的示例中，我们使用 `-type d` 标志来查找文件夹。

```
ls -l
# 列出文件夹内容
drwxrwxr-x 2 zaira zaira 4096 Mar 26 14:22 hosts
-rw-rw-r-- 1 zaira zaira    0 Mar 26 14:23 hosts.txt
drwxrwxr-x 2 zaira zaira 4096 Mar 26 14:22 images
drwxrwxr-x 2 zaira zaira 4096 Mar 26 14:23 style
drwxrwxr-x 2 zaira zaira 4096 Mar 26 14:22 webp 

find . -type d 
# 查找目录输出
.
./webp
./images
./style
./hosts
```

#### 如何按大小搜索文件

`find` 命令的一个非常有用的用途是根据特定大小列出文件。

```
find / -size +250M
```

这里，我们列出了大小超过 `250MB` 的文件。

其他单位包括：

仅替换为相应的单位。

```
find <directory> -type f -size +N<Unit Type>
```

#### 如何按修改时间搜索文件

通过使用 `-mtime` 标志，你可以根据修改时间过滤文件和文件夹。

```
find /path -name "*.txt" -mtime -10
```

例如，

-   **\-mtime +10** 表示你正在寻找在 10 天前修改的文件。
    
-   **\-mtime -10** 表示少于 10 天。
    
-   **\-mtime 10** 如果你省略 + 或 – 就表示恰好是 10 天。
    

### 4.5. 查看文件的基本命令

#### 使用 `cat` 命令连接并显示文件

Linux 中的 `cat` 命令用于显示文件的内容。它也可以用于连接文件和创建新文件。

以下是 `cat` 命令的基本语法：

```
cat [options] [file]
```

最简单的方式是不带任何选项或参数使用 `cat`。这将在终端显示文件的内容。

例如，如果你想查看名为 `file.txt` 的文件内容，可以使用以下命令：

```
cat file.txt
```

这会一次性在终端中显示文件的所有内容。

#### 使用 `less` 和 `more` 交互式查看文本文件

虽然 `cat` 会一次性显示整个文件，`less` 和 `more` 允许你交互式地查看文件内容。这在你想滚动查看一个大文件或搜索特定内容时非常有用。

`less` 命令的语法是：

```
less [options] [file]
```

`more` 命令类似于 `less`，但功能较少。它用于一次显示一个屏幕的文件内容。

`more` 命令的语法是：

```
more [options] [file]
```

对于这两个命令，你可以使用空格键向下滚动一页，使用回车键向下滚动一行，使用 `q` 键退出查看器。

要向后移动，你可以使用 `b` 键，要向前移动，你可以使用 `f` 键。

#### 使用 `tail` 显示文件的最后部分

有时你可能只需要查看文件的最后几行，而不是整个文件。Linux 中的 `tail` 命令用于显示文件的最后部分。

例如，`tail file.txt` 默认会显示文件 `file.txt` 的最后 10 行。

如果你想显示不同数量的行，可以使用 `-n` 选项并跟随你想显示的行数。

```
# 显示文件 file.txt 的最后 50 行
tail -n 50 file.txt
```

💡**提示：** `tail` 的另一种用法是其跟踪（`-f`）选项。这个选项允许你在文件内容被写入时实时查看文件内容。这是查看和监控日志文件的实用工具。

#### 使用 `head` 显示文件的开头部分

就像 `tail` 显示文件的最后部分一样，你可以使用 Linux 的 `head` 命令来显示文件的开头部分。

例如，`head file.txt` 默认会显示文件 `file.txt` 的前 10 行。

要更改显示的行数，你可以使用 `-n` 选项并跟随你想显示的行数。

#### 使用 `wc` 统计单词、行和字符

你可以使用 `wc` 命令统计文件中的单词、行和字符。

例如，运行 `wc syslog.log` 给出了以下输出：

```
1669 9623 64367 syslog.log
```

在上面的输出中，

-   `1669` 表示文件 `syslog.log` 中的行数。
    
-   `9623` 表示文件 `syslog.log` 中的单词数。
    
-   `64367` 表示文件 `syslog.log` 中的字符数。
    

所以，命令 `wc syslog.log` 统计了文件 `syslog.log` 中的 `1669` 行，`9623` 个单词和 `64367` 个字符。

#### 使用 `diff` 比较文件的逐行差异

在 Linux 中比较和查找两个文件之间的差异是一项常见任务。你可以在命令行中使用 `diff` 命令比较两个文件。

`diff` 命令的基本语法是：

```
diff [options] file1 file2
```

以下是两个文件，`hello.py` 和 `also-hello.py`，我们将使用 `diff` 命令进行比较：

```
# hello.py 的内容

def greet(name):
    return f"Hello, {name}!"

user = input("Enter your name: ")
print(greet(user))
```

```
# also-hello.py 的内容

more also-hello.py
def greet(name):
    return fHello, {name}!

user = input(Enter your name: )
print(greet(user))
print("Nice to meet you")
```

1.  检查文件是否相同

```
diff -q hello.py also-hello.py
# 输出
Files hello.py and also-hello.py differ
```

2.  查看文件的差异。为此，你可以使用 `-u` 标志来查看统一的输出：

```
diff -u hello.py also-hello.py
--- hello.py    2024-05-24 18:31:29.891690478 +0500
+++ also-hello.py    2024-05-24 18:32:17.207921795 +0500
@@ -3,4 +3,5 @@

 user = input(Enter your name: )
 print(greet(user))
+print("Nice to meet you")
```

在上述输出中：

-   `--- hello.py 2024-05-24 18:31:29.891690478 +0500` 表示正在比较的文件及其时间戳。
    
-   `+++ also-hello.py 2024-05-24 18:32:17.207921795 +0500` 表示正在比较的另一个文件及其时间戳。
    
-   `@@ -3,4 +3,5 @@` 显示更改发生的行号。在这个例子中，它表明原文件的第 3 到第 4 行已更改为修改后的文件中的第 3 到第 5 行。
    
-   `user = input(Enter your name: )` 是原文件中的一行。
    
-   `print(greet(user))` 是原文件的另一行。
    
-   `+print("Nice to meet you")` 是修改后文件中添加的行。
    


```
diff -y hello.py also-hello.py
# Output
def greet(name):                        def greet(name):
    return fHello, {name}!                        return fHello, {name}!

user = input(Enter your name: )                    user = input(Enter your name: )
print(greet(user))                        print(greet(user))
                                        >    print("Nice to meet you")
```

在输出中：

-   两个文件中相同的行会显示在并排的一侧。
    
-   不同的行显示一个 `>` 符号，指示该行仅存在于文件之一。
    

## 第 5 部分：Linux 文本编辑的要领

使用命令行的文本编辑技能是 Linux 中最关键的技能之一。在本节中，您将学习如何使用 Linux 中的两种流行文本编辑器：Vim 和 Nano。

我建议您掌握任何一个您选择的文本编辑器并坚持使用它。这将节省您的时间并使您更高效。Vim 和 nano 是安全的选择，因为它们存在于大多数 Linux 发行版中。

### 5.1. 掌握 Vim：完整指南

#### Vim 介绍

Vim 是一个流行的命令行文本编辑工具。Vim 具有以下优点：它功能强大、可定制且快速。以下是您应该考虑学习 Vim 的一些原因：

-   大多数服务器是通过 CLI 访问的，因此在系统管理中，您并不一定有使用 GUI 的奢侈。但 Vim 能为您提供支持——它总会在那里。
    
-   Vim 使用键盘为中心的方法，因为它被设计成无需鼠标即可使用，一旦您学习了键盘快捷键，它可以显著加快编辑任务的速度。这也使它比 GUI 工具更快。
    
-   一些 Linux 工具，例如编辑 cron 作业，使用与 Vim 相同的编辑格式。
    
-   Vim 适用于所有人——初学者和高级用户。Vim 支持复杂的字符串搜索、搜索高亮等。通过插件，Vim 为开发人员和系统管理员提供了扩展功能，包括代码补全、语法高亮、文件管理、版本控制等。
    

Vim 有两个变体：Vim (`vim`) 和 Vim tiny (`vi`)。Vim tiny 是 Vim 的一个较小版本，缺少一些 Vim 的功能。

#### 如何开始使用 `vim`

使用以下命令开始使用 Vim：

```
vim your-file.txt
```

`your-file.txt` 可以是一个新文件，也可以是您要编辑的现有文件。

#### 在 Vim 中导航：掌握移动和命令模式

在 CLI 的早期，键盘没有箭头键。因此，导航是使用现有的一组键进行的，`hjkl` 就是其中之一。

由于是键盘为中心，使用 `hjkl` 键可以大大加快文本编辑任务的速度。

注意：虽然箭头键也能正常工作，但您仍可以尝试使用 `hjkl` 键进行导航。有些人觉得这种导航方式高效。

💡**提示:** 要记住 `hjkl` 顺序，可以这样记：**h**ang back，**j**ump down，**k**ick up，**l**eap forward.

![hjkl navigation guide](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392462442/1a667ede-5f03-4acb-b40f-b10cefc64de3.png)

#### 三种 Vim 模式

您需要了解 Vim 的 3 种操作模式以及如何在它们之间切换。每个命令模式下按键的行为都不同。这三种模式如下：

1.  命令模式
    
2.  编辑模式
    
3.  可视模式
    

**命令模式** 当您启动 Vim 时，默认进入命令模式。此模式使您能够访问其他模式。

⚠ 要切换到其他模式，您需要先进入命令模式

**编辑模式**

此模式允许您对文件进行修改。在命令模式下按 `I` 进入编辑模式。注意屏幕末尾的 `'-- INSERT'` 标记。

![Insert mode in Vim](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392526710/d44cecd7-64be-4c89-9a31-dbf395b77fcb.png)

**可视模式**

此模式允许您处理单个字符、文本块或文本行。让我们分步简化。记住，在命令模式下使用以下组合。

-   `Shift + V` → 选择多行。
    
-   `Ctrl + V` → 块模式
    
-   `V` → 字符模式
    

可视模式在您需要复制和粘贴或批量编辑行时非常有用。

![Selectind text using visual mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392557097/b61a1515-cac0-4470-856b-b2c15de581e8.gif)

**扩展命令模式**

扩展命令模式允许您执行高级操作，例如搜索、设置行号和高亮文本。我们将在下一节中介绍扩展模式。

如何保持在轨道上？如果您忘记了当前模式，只需按两次 `ESC` 键，您就会回到命令模式。

#### 在 Vim 中高效编辑：复制/粘贴和搜索

**1\. 如何在 Vim 中复制和粘贴**

复制粘贴在 Linux 术语中被称为 'yank' 和 'put'。要复制粘贴，请按照以下步骤操作：

-   在可视模式下选择文本。
    
-   按 `'y'` 进行复制/ yank。
    
-   将光标移动到所需位置，然后按 `'p'`。
    

**2\. 如何在 Vim 中搜索文本**


在命令模式下，输入 `:set hls` 并按 `enter`。使用 `/string-to-match` 进行搜索。这将会高亮搜索结果。

让我们搜索一些字符串：

![在 Vim 中高亮搜索](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392684097/11c4a45e-0698-4fb7-bef7-f193684ea21a.gif)

**3\. 如何退出 Vim**

首先，进入命令模式（按两次 escape），然后使用以下命令：

-   不保存退出→ `:q!`
    
-   保存并退出→ `:wq!`
    

#### Vim 中的快捷键：加快编辑速度

注意：所有这些快捷键仅在命令模式下有效。

-   **基本导航**
    
    -   `h`: 向左移动
        
    -   `j`: 向下移动
        
    -   `k`: 向上移动
        
    -   `l`: 向右移动
        
    -   `0`: 移动到行首
        
    -   `$`: 移动到行尾
        
    -   `gg`: 移动到文件开头
        
    -   `G`: 移动到文件结尾
        
    -   `Ctrl+d`: 向下移动半页
        
    -   `Ctrl+u`: 向上移动半页
        
-   **编辑**
    
    -   `i`: 在光标前进入插入模式
        
    -   `I`: 在行首进入插入模式
        
    -   `a`: 在光标后进入插入模式
        
    -   `A`: 在行尾进入插入模式
        
    -   `o`: 在当前行下方开新行并进入插入模式
        
    -   `O`: 在当前行上方开新行并进入插入模式
        
    -   `x`: 删除光标下的字符
        
    -   `dd`: 删除当前行
        
    -   `yy`: 复制（yank）当前行（在可视模式下使用）
        
    -   `p`: 在光标下方粘贴
        
    -   `P`: 在光标上方粘贴
        
-   **搜索和替换**
    
    -   `/`: 搜索模式，将转到下一个匹配项
        
    -   `?`: 向上搜索模式，将转到上一个匹配项
        
    -   `n`: 按相同方向重复上次搜索
        
    -   `N`: 按相反方向重复上次搜索
        
    -   `:%s/old/new/g`: 将文件中的所有 `old` 替换为 `new`
        
-   **退出**
    
    -   `:w`: 保存文件但不退出
        
    -   `:q`: 退出 Vim（如果有未保存的更改将失败）
        
    -   `:wq` 或 `:x`: 保存并退出
        
    -   `:q!`: 不保存退出
        
-   **多窗口**
    
    -   `:split` 或 `:sp`: 水平分割窗口
        
    -   `:vsplit` 或 `:vsp`: 垂直分割窗口
        
    -   `Ctrl+w` 后跟 `h/j/k/l`: 在分割窗口之间导航
        

### 5.2. 精通 Nano

#### 初识 Nano：用户友好的文本编辑器

Nano 是一个用户友好的文本编辑器，非常易于使用，非常适合初学者。它预装在大多数 Linux 发行版上。

使用 Nano 创建新文件，使用以下命令：

```
nano
```

使用 Nano 开始编辑现有文件，使用以下命令：

```
nano filename
```

#### Nano 中的快捷键列表

让我们研究 Nano 中最重要的快捷键。您可以使用这些快捷键执行各种操作，如保存、退出、复制、粘贴等。

**写入文件并保存**

一旦使用 `nano` 命令打开 Nano，您可以开始写入文本。要保存文件，请按 `Ctrl+O`。系统将提示您输入文件名。按 `Enter` 保存文件。

**退出 nano**

您可以按 `Ctrl+X` 退出 Nano。如果有未保存的更改，Nano 将提示您在退出前保存更改。

**复制和粘贴**

要选择一个区域，使用 `ALT+A`。一个标记将显示。使用箭头键选择文本。选择完成后，使用 `ALT+^` 退出标记。

要复制所选文本，按 `Ctrl+K`。要粘贴复制的文本，按 `Ctrl+U`。

**剪切和粘贴**

使用 `ALT+A` 选择区域。选择后，按 `Ctrl+K` 剪切文本。要粘贴剪切的文本，按 `Ctrl+U`。

**导航**

使用 `Alt \` 移动到文件开头。

使用 `Alt /` 移动到文件结尾。

**查看行号**

当您使用 `nano -l filename` 打开文件时，您可以在文件的左侧查看行号。

**搜索**

您可以使用 `ALT + G` 搜索特定行号。输入行号后按 `Enter`。

您还可以使用 `CTRL + W` 开始搜索字符串并按 Enter。如果要向后搜索，可以在启动搜索后按 `Alt+W`。

#### Nano 中快捷键摘要

-   **通用**
    
    -   `Ctrl+X`: 退出 Nano（如果有更改会提示保存）
        
    -   `Ctrl+O`: 保存文件
        
    -   `Ctrl+R`: 将文件读入当前文件
        
    -   `Ctrl+G`: 显示帮助文本
        
-   **编辑**
    
    -   `Ctrl+K`: 剪切当前行并存储在剪贴板
        
    -   `Ctrl+U`: 将剪贴板内容粘贴到当前行
        
    -   `Alt+6`: 复制当前行并存储在剪贴板
        
    -   `Ctrl+J`: 排版当前段落
        
-   **导航**
    
    -   `Ctrl+A`: 移动到行首
        
    -   `Ctrl+E`: 移动到行尾
        
    -   `Ctrl+C`: 显示当前行号和文件信息
        
    -   `Ctrl+_` (`Ctrl+Shift+-`): 转到特定的行（和可选列）号
        
    -   `Ctrl+Y`: 向上滚动一页
        
    -   `Ctrl+V`: 向下滚动一页
        
-   **搜索和替换**
    
    -   `Ctrl+W`: 搜索字符串（然后按 `Enter` 继续搜索）
        
    -   `Alt+W`: 反方向重复最后一次搜索
        
    -   `Ctrl+\`: 搜索并替换
        
-   **杂项**
    
    -   `Ctrl+T`: 调用拼写检查器（如果有）
        
    -   `Ctrl+D`: 删除光标下的字符（不剪切）
        
    -   `Ctrl+L`: 刷新（重绘）当前屏幕
        
    -   `Alt+U`: 撤销上一个操作
        
    -   `Alt+E`: 重做上一个撤销的操作
        


### 6.1. Bash 脚本定义

Bash 脚本是包含一系列命令的文件，这些命令由 bash 程序逐行执行。它允许你执行一系列操作，比如导航到特定目录、创建文件夹和通过命令行启动进程。

通过将命令保存在脚本中，你可以多次重复相同的步骤序列，并通过运行脚本来执行这些步骤。

### 6.2. Bash 脚本的优点

Bash 脚本是一种功能强大且多用途的工具，用于自动化系统管理任务、管理系统资源以及在 Unix/Linux 系统中执行其他常规任务。

Shell 脚本的一些优点包括：

-   **自动化**：Shell 脚本允许你自动执行重复的任务和过程，节省时间并减少手动执行可能发生的错误风险。
    
-   **可移植性**：Shell 脚本可以在各种平台和操作系统上运行，包括 Unix、Linux、macOS，甚至通过使用模拟器或虚拟机在 Windows 上运行。
    
-   **灵活性**：Shell 脚本高度可定制，并且可以轻松修改以满足特定需求。它们还可以与其他编程语言或实用工具组合以创建更强大的脚本。
    
-   **可访问性**：Shell 脚本易于编写，无需任何特殊工具或软件。它们可以使用任何文本编辑器进行编辑，并且大多数操作系统都有内置的 shell 解释器。
    
-   **集成**：Shell 脚本可以与其他工具和应用程序集成，如数据库、Web 服务器和云服务，从而实现更复杂的自动化和系统管理任务。
    
-   **调试**：Shell 脚本易于调试，并且大多数 shell 都有内置的调试和错误报告工具，可以帮助快速识别和解决问题。
    

### 6.3. Bash Shell 和命令行界面概述

“shell”和“bash”这两个术语经常交替使用。但两者之间有一个细微的区别。

术语“shell”指的是一个提供命令行界面以与操作系统交互的程序。Bash (Bourne-Again SHell) 是最常用的 Unix/Linux shell 之一，也是许多 Linux 发行版中的默认 shell。

到目前为止，你输入的命令基本上是在一个“shell”中输入的。

虽然 Bash 是一种类型的 shell，但还有其他 shell 可用，例如 Korn shell (ksh)、C shell (csh) 和 Z shell (zsh)。每个 shell 都有其自己的语法和特性集，但它们的共同目的是提供一个命令行界面以与操作系统交互。

你可以使用 `ps` 命令确定你的 shell 类型：

```
ps
# 输出:

    PID TTY          TIME CMD
  20506 pts/0    00:00:00 bash <--- shell 类型
  20931 pts/0    00:00:00 ps
```

总之，“shell” 是一个广泛的术语，指的是任何提供命令行界面的程序，“Bash” 是一种具体类型的 shell，广泛应用于 Unix/Linux 系统中。

注意：在本节中，我们将使用“bash” shell。

### 6.4. 如何创建和执行 Bash 脚本

**脚本命名约定**

根据命名约定，Bash 脚本以 `.sh` 结尾。但是，Bash 脚本即使没有 `sh` 扩展名也可以完美运行。

**添加 Shebang**

Bash 脚本以 `shebang` 开头。Shebang 是 `bash #` 和 `bang !` 的组合，后面跟着 bash shell 的路径。这是脚本的第一行。Shebang 告诉 shell 通过 bash shell 来执行它。Shebang 只是指向 bash 解释器的绝对路径。

以下是 shebang 语句的示例。

```
#!/bin/bash
```

你可以使用以下命令找到你的 bash shell 路径（可能与上述路径不同）：

```
which bash
```

**创建你的第一个 bash 脚本**

我们的第一个脚本提示用户输入一个路径。作为回报，该路径的内容将被列出。

使用你选择的任何编辑器创建一个名为 `run_all.sh` 的文件。

```
vim run_all.sh
```

在你的文件中添加以下命令并保存：

```
#!/bin/bash
echo "Today is " `date`

echo -e "\nenter the path to directory"
read the_path

echo -e "\n you path has the following files and folders: "
ls $the_path
```

让我们逐行深入了解脚本。我将再次显示相同的脚本，但这次带有行号。

```
  1 #!/bin/bash
  2 echo "Today is " `date`
  3
  4 echo -e "\nenter the path to directory"
  5 read the_path
  6
  7 echo -e "\n you path has the following files and folders: "
  8 ls $the_path
```

-   第1行：Shebang (`#!/bin/bash`) 指向 bash shell 路径。
    
-   第2行：`echo` 命令在终端显示当前日期和时间。注意，`date` 是用反引号括起来的。
    
-   第4行：我们希望用户输入一个有效的路径。
    
-   第5行：`read` 命令读取输入并将其存储在变量 `the_path` 中。
    
-   第8行：`ls` 命令获取存储路径的变量并显示当前的文件和文件夹。
    

**执行 bash 脚本**

要使脚本可执行，请使用以下命令为你的用户分配执行权限：


Here,

-   `chmod` 修改当前用户的文件权限：`u`。
    
-   `+x` 为当前用户添加执行权限。这意味着当用户是所有者时，现在可以运行这个脚本。
    
-   `run_all.sh` 是我们希望运行的文件。
    

你可以使用以下任意一种方法来运行脚本：

-   `sh run_all.sh`
    
-   `bash run_all.sh`
    
-   `./run_all.sh`
    

让我们看看它的运行效果 🚀

![运行一个 bash 脚本](https://www.freecodecamp.org/news/content/images/2023/03/run-script-bash-2.gif)

### 6.5. Bash 脚本基础

#### Bash 脚本中的注释

在 bash 脚本中，注释以 `#` 开头。这意味着任何以 `#` 开头的行都是注释，并且会被解释器忽略。

注释对于记录代码非常有帮助，添加注释以帮助他人理解代码是一种好的实践。

以下是注释的例子：

```
# 这是一个示例注释
# 这些行都将被解释器忽略
```

#### Bash 中的变量和数据类型

变量允许你存储数据。你可以使用变量在脚本中读取、访问和操作数据。

在 Bash 中没有数据类型。Bash 中的变量能够存储数值、单个字符或字符串。

在 Bash 中，可以通过以下方式使用和设置变量值：

1.  直接赋值：

```
country=Netherlands
```

2\. 基于从程序或命令获得的输出赋值，使用命令替代。注意，访问现有变量的值需要使用 `$`。

```
same_country=$country
```

这将 `country` 的值赋给新的变量 `same_country`。

要访问变量值，将 `$` 添加到变量名之前。

```
country=Netherlands
echo $country
# 输出
Netherlands
new_country=$country
echo $new_country
# 输出
Netherlands
```

上面是赋值和打印变量值的示例。

#### 变量命名约定

在 Bash 脚本中，变量命名约定如下：

1.  变量名应以字母或下划线 (`_`) 开头。
    
2.  变量名可以包含字母、数字和下划线 (`_`)。
    
3.  变量名是区分大小写的。
    
4.  变量名不应包含空格或特殊字符。
    
5.  使用反映变量用途的描述性名称。
    
6.  避免使用保留关键字，如 `if`、`then`、`else`、`fi` 等作为变量名。
    

以下是 Bash 中有效变量名的示例：

```
name
count
_var
myVar
MY_VAR
```

以下是无效变量名的示例：

```
# 无效变量名

2ndvar (变量名以数字开头)
my var (变量名包含空格)
my-var (变量名包含连字符)
```

遵循这些命名约定有助于使 Bash 脚本更具可读性和更易维护。

#### Bash 脚本中的输入和输出

#### 获取输入

在本节中，我们将讨论一些为脚本提供输入的方法。

1.  读取用户输入并将其存储在变量中

我们可以使用 `read` 命令读取用户输入。

```
#!/bin/bash
echo "你叫什么名字？"
read entered_name
echo -e "\n欢迎参加 bash 教程" $entered_name
```

![从脚本中读取名字](https://www.freecodecamp.org/news/content/images/2023/03/name-sh.gif)

2\. 从文件中读取

以下代码从名为 `input.txt` 的文件中读取每一行并打印到终端。我们将在本节稍后学习 while 循环。

```
while read line
do
  echo $line
done < input.txt
```

3\. 命令行参数

在 bash 脚本或函数中，`$1` 表示传递的第一个参数，`$2` 表示传递的第二个参数，依此类推。

这个脚本接受一个名字作为命令行参数并打印个性化的问候。

```
#!/bin/bash
echo "你好, $1!"
```

我们将 `Zaira` 作为我们的参数传递给脚本。

**输出:**

![为 bash 脚本提供参数](https://www.freecodecamp.org/news/content/images/2023/03/name-sh-1.gif)

#### 显示输出

在这里我们将讨论接收脚本输出的一些方法。

1.  打印到终端：

```
echo "Hello, World!"
```

这将在终端打印文本 "Hello, World!"。

2\. 写入文件：

```
echo "This is some text." > output.txt
```

这将文本 "This is some text." 写入名为 `output.txt` 的文件。注意，`>` 操作符会覆盖已存在内容的文件。

3\. 追加到文件：

```
echo "More text." >> output.txt
```

这将在文件 `output.txt` 末尾追加文本 "More text."。

4\. 重定向输出：

```
ls > files.txt
```

这将列出当前目录中的文件并将输出写入名为 `files.txt` 的文件。你可以以这种方式将任意命令的输出重定向到文件。

你将在第 8.5 节详细学习输出重定向。

#### 条件语句 (if/else)

产生布尔结果（即真或假）的表达式称为条件。可以有几种方式评估条件，包括 `if`、`if-else`、`if-elif-else` 和嵌套条件。

```
if [[ condition ]];
then
    statement
elif [[ condition ]]; then
    statement 
else
    do this by default
fi
```

#### Bash 条件语句的语法

我们可以使用逻辑操作符，例如 AND `-a` 和 OR `-o` 来进行更有意义的比较。

```
if [ $a -gt 60 -a $b -lt 100 ]
```

此语句检查两个条件是否都为 `true`：`a` 大于 `60` 且 `b` 小于 `100`。

下面是一个使用 `if`、`if-else` 和 `if-elif-else` 语句的 Bash 脚本示例，用来判断用户输入的数字是正数、负数还是零：

```
#!/bin/bash

# 脚本用于判断一个数字是正数、负数还是零

echo "请输入一个数字: "
read num

if [ $num -gt 0 ]; then
  echo "$num 是正数"
elif [ $num -lt 0 ]; then
  echo "$num 是负数"
else
  echo "$num 是零"
fi
```

脚本首先提示用户输入一个数字。然后，它使用一个 `if` 语句检查该数字是否大于 `0`。如果是，脚本输出该数字是正数。如果数字不大于 `0`，脚本继续执行下一个语句，即 `if-elif` 语句。

在这里，脚本检查数字是否小于 `0`。如果是，脚本输出该数字是负数。

最后，如果数字既不大于 `0` 也不小于 `0`，脚本使用 `else` 语句输出该数字为零。

实际操作示例 🚀

![检查一个数字是奇数还是偶数](https://www.freecodecamp.org/news/content/images/2023/03/test-odd.gif)

#### Bash 中的循环和分支

**While 循环**

While 循环检查一个条件，并在条件为 `true` 时循环执行。我们需要提供一个计数器语句来增加计数器的值以控制循环的执行。

在下面的例子中，`(( i += 1 ))` 是增加 `i` 值的计数器语句。循环将精确执行 10 次。

```
#!/bin/bash
i=1
while [[ $i -le 10 ]] ; do
   echo "$i"
  (( i += 1 ))
done
```

![循环从1到10](https://www.freecodecamp.org/news/content/images/2023/03/image-187.png)

**For 循环**

和 `while` 循环类似，`for` 循环允许你执行指定次数的语句。每种循环在语法和用法上有所不同。

在下面的例子中，循环将迭代 5 次。

```
#!/bin/bash

for i in {1..5}
do
    echo $i
done
```

![循环从1到10](https://www.freecodecamp.org/news/content/images/2023/03/image-186.png)

**Case 语句**

在 Bash 中，case 语句用于将给定值与一组模式进行比较，并根据第一个匹配的模式执行相应的代码块。Case 语句的语法如下：

```
case expression in
    pattern1)
        # 如果 expression 匹配 pattern1 时执行的代码
        ;;
    pattern2)
        # 如果 expression 匹配 pattern2 时执行的代码
        ;;
    pattern3)
        # 如果 expression 匹配 pattern3 时执行的代码
        ;;
    *)
        # 如果以上所有模式都不匹配 expression 时执行的代码
        ;;
esac
```

这里 "expression" 是我们要比较的值，"pattern1"、"pattern2"、"pattern3" 等是我们要比较的模式。

双分号 ";;" 分隔每个模式匹配时执行的代码块。星号 "\*" 表示默认情况，如果没有指定的模式匹配 expression 时执行默认代码。

举个例子：

```
fruit="apple"

case $fruit in
    "apple")
        echo "这是一个红色的水果。"
        ;;
    "banana")
        echo "这是一个黄色的水果。"
        ;;
    "orange")
        echo "这是一个橙色的水果。"
        ;;
    *)
        echo "未知的水果。"
        ;;
esac
```

在这个例子中，由于 `fruit` 的值是 `apple`，第一个模式匹配，并且执行输出 `这是一个红色的水果。` 的代码块。如果 `fruit` 的值是 `banana`，第二个模式将匹配，并且输出 `这是一个黄色的水果。` 的代码块将执行，依此类推。

如果 `fruit` 的值不匹配任何指定模式，将执行默认情况，输出 `未知的水果。`

## 第七部分：管理 Linux 中的软件包

Linux 自带多个内置程序。但是，根据需要你可能需要安装新的程序，也可能需要升级现有应用程序。

### 7.1. 软件包和软件包管理

#### 什么是软件包？

软件包是一个文件集合，这些文件被捆绑在一起。这些文件是特定程序运行所必需的。它们包含程序的可执行文件、库和其他资源。

除了程序运行所需的文件外，软件包还包含安装脚本，这些脚本将文件复制到所需的位置。一个程序可能包含多个文件和依赖关系。使用软件包可以更轻松地一次性管理所有文件和依赖关系。

#### 源代码和二进制代码有什么区别？

程序员使用编程语言编写源代码。然后将源代码编译成机器码，计算机可以理解这些代码。编译后的代码称为二进制代码。
```

源代码包在适当编译后可以用于任何类型的机器。而二进制文件则是已编译的代码，专门针对某种类型的机器或架构。

你可以使用 `uname -m` 命令查看你的机器架构。

```
uname -m
# 输出
x86_64
```

#### 包依赖

程序常常共享文件。为了避免在每个包中都包含这些文件，可以通过一个单独的包来为所有程序提供这些文件。

要安装需要这些文件的程序，你还必须安装包含这些文件的包。这就叫做包依赖。指定依赖关系可以通过减少重复，使包更小更简单。

当你安装一个程序时，它的依赖项也必须被安装。大部分必要的依赖项通常已经安装，但可能还需要一些其他的依赖项。因此，不要感到惊讶，如果在安装你选择的包时同时安装了几个其他包。这些是必要的依赖项。

#### 包管理器

Linux 提供了一个全面的包管理系统，用于安装、升级、配置和删除软件。

通过包管理，你可以访问成千上万的软件包，并有能力解析依赖关系和检查软件更新。

包可以通过命令行实用程序进行管理，这些实用程序可以方便地由系统管理员自动化，或者通过图形界面进行管理。

#### 软件频道/仓库

⚠️ 不同的发行版包管理是不同的。这里，我们使用的是 Ubuntu。

在 Linux 中安装软件与 Windows 和 Mac 有些不同。

Linux 使用仓库来存储软件包。仓库是一个软件包的集合，可以通过包管理器进行安装。

包管理器还存储了仓库中所有可用包的索引。有时会重建这个索引，以确保它是最新的，并知道自上次检查以来哪些软件包已经升级或添加到频道中。

从仓库下载软件的一般过程如下：

![从远程仓库下载软件的过程](https://cdn.hashnode.com/res/hashnode/image/upload/v1719313472889/f4961606-b9c4-4ed7-8edc-61e0fc6908e4.png)

具体来说，如果我们谈论 Ubuntu，

1.  使用 `apt update.` 获取索引。（`apt` 会在下节中解释）
    
2.  根据索引使用 `apt install` 请求所需的文件/依赖项
    
3.  本地安装包和依赖项
    
4.  当需要更新依赖项和包时使用 `apt update` 和 `apt upgrade`
    

在基于 Debian 的发行版中，你可以在 `/etc/apt/sources.list` 中找到仓库（repositories）列表。

### 7.2. 通过命令行安装包

`apt` 命令是一个强大的命令行工具，它与 Ubuntu 的 "高级包装工具 (APT)" 一起工作。

`apt` 以及捆绑在一起的命令提供了安装新的软件包、升级现有的软件包、更新包列表索引，甚至升级整个 Ubuntu 系统的方法。

要查看使用 `apt` 进行的安装日志，你可以查看 `/var/log/dpkg.log` 文件。

以下是 `apt` 命令的用法：

#### 安装包

例如，要安装 `htop` 包，你可以使用以下命令：

```
sudo apt install htop
```

#### 更新包列表索引

包列表索引是仓库中所有可用包的列表。要更新本地包列表索引，你可以使用以下命令：

```
sudo apt update
```

#### 升级包

系统上已安装的包可以获取包含错误修复、安全补丁和新功能的更新。

要升级包，你可以使用以下命令：

```
sudo apt upgrade
```

#### 删除包

要删除一个包，例如 `htop`，你可以使用以下命令：

```
sudo apt remove htop
```

### 7.3. 通过高级图形方法安装包 – Synaptic

如果你对命令行不太熟悉，你可以使用 GUI 应用程序来安装包。你可以通过图形界面实现与命令行相同的结果。

Synaptic 是一个 GUI 包管理应用程序，帮助列出已安装的包、它们的状态、待定的更新等等。它提供自定义筛选器，帮助你缩小搜索结果。

![0f362ed7-c371-4a58-96c2-c359178cdbd9](https://cdn.hashnode.com/res/hashnode/image/upload/v1719313599636/0f362ed7-c371-4a58-96c2-c359178cdbd9.png)

你还可以右键点击一个包并查看更多详细信息，如依赖项、维护者、大小和已安装的文件。

![查看包的详细信息](https://cdn.hashnode.com/res/hashnode/image/upload/v1719313607397/33b7ad76-2492-4805-8133-35c8cd3c4a0a.png)

### 7.4. 从网站下载的包安装

你可能想要安装你从网站下载的包，而不是从软件仓库下载的包。这些包称为 `.deb` 文件。

**使用** `dpkg` **安装包**： `dpkg` 是一个命令行工具，用于安装包。要使用 **dpkg** 安装包，打开终端并输入以下命令：


注意: 将 "directory" 替换为软件包存储目录，将 "package\_name" 替换为软件包的文件名。

或者，你可以右键单击，选择“用其他应用程序打开”，然后选择你喜欢的 GUI 应用。

![使用应用程序安装软件](https://cdn.hashnode.com/res/hashnode/image/upload/v1719322161581/f16d83ac-ca9a-4502-a80c-e6a25dee5c68.png)

💡 **提示:** 在 Ubuntu 中，你可以使用 `dpkg --list` 查看已安装的软件包列表。

## 第 8 部分: 高级 Linux 主题

### 8.1. 用户管理

系统中可以有多个具有不同访问级别的用户。在 Linux 中，root 用户拥有最高级别的访问权限，可以在系统上执行任何操作。普通用户的访问权限有限，只能执行已授权的操作。

#### 用户是什么？

用户帐户用于区分不同的人和能够运行命令的程序。

人通过名称识别用户，因为名称易于使用。但系统通过一个称为用户 ID (UID) 的唯一数字来识别用户。

当人类用户使用提供的用户名登录时，他们必须使用密码进行授权。

用户帐户构成了系统安全的基础。文件所有权也与用户帐户相关联，并且强制执行对文件的访问控制。每个进程都有一个相关的用户帐户，为管理员提供了一层控制。

用户帐户主要有三种类型：

1.  **超级用户**: 超级用户拥有对系统的完全访问权限。超级用户的名称是 `root`，其 `UID` 为 0。
    
2.  **系统用户**: 系统用户具有用于运行系统服务的用户帐户。这些帐户用于运行系统服务而不是用于人类交互。
    
3.  **普通用户**: 普通用户是有权访问系统的人类用户。
    

`id` 命令显示当前用户的用户 ID 和组 ID。

```
id
uid=1000(john) gid=1000(john) groups=1000(john),4(adm),24(cdrom),27(sudo),30(dip)... output truncated
```

要查看其他用户的基本信息，请将用户名作为参数传递给 `id` 命令。

```
id username
```

要查看与进程相关的用户信息，请使用带 `-u` 标志的 `ps` 命令。

```
ps -u
# 输出
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1  16968  3920 ?        Ss   18:45   0:00 /sbin/init splash
root         2  0.0  0.0      0     0 ?        S    18:45   0:00 [kthreadd]
```

默认情况下，系统使用 `/etc/passwd` 文件存储用户信息。

以下是 `/etc/passwd` 文件中的一行：

```
root:x:0:0:root:/root:/bin/bash
```

`/etc/passwd` 文件包含了每个用户的以下信息：

1.  用户名: `root` – 用户帐户的用户名。
    
2.  密码: `x` – 用户帐户的密码以加密格式存储在 `/etc/shadow` 文件中以确保安全。
    
3.  用户 ID (UID): `0` – 用户帐户的唯一数字标识符。
    
4.  组 ID (GID): `0` – 用户帐户的主要组标识符。
    
5.  用户信息: `root` – 用户帐户的真实姓名。
    
6.  主目录: `/root` – 用户帐户的主目录。
    
7.  Shell: `/bin/bash` – 用户帐户的默认 shell。如果不允许交互登录，系统用户可能会使用 `/sbin/nologin`。
    

#### 什么是组？

组是共享访问权限和资源的用户帐户集合。组有组名来标识它们。系统通过一个称为组 ID (GID) 的唯一数字识别组。

默认情况下，关于组的信息存储在 `/etc/group` 文件中。

以下是 `/etc/group` 文件中的一个条目：

```
adm:x:4:syslog,john
```

以下是给定条目中的字段的解析：

1.  组名: `adm` – 组的名称。
    
2.  密码: `x` – 组的密码存储在 `/etc/gshadow` 文件中以确保安全。密码是可选的，如果未设置则显示为空。
    
3.  组 ID (GID): `4` – 组的唯一数字标识符。
    
4.  组成员: `syslog,john` – 组成员的用户名列表。在这种情况下，组 `adm` 有两个成员：`syslog` 和 `john`。
    

在此特定条目中，组名为 `adm`，组 ID 为 `4`，组有两个成员：`syslog` 和 `john`。密码字段通常设置为 `x` 表示组密码存储在 `/etc/gshadow` 文件中。

组进一步细分为“_主_”组和“_补充_”组。

-   主组：默认情况下，每个用户被分配一个主组。该组通常与用户同名，并在创建用户帐户时创建。用户创建的文件和目录通常由该主组拥有。
    
-   补充组：这些是用户可以属于的除了其主组之外的其他组。用户可以属于多个补充组。通过这些组，用户可以获得共享那些组的资源的权限。它们有助于在不影响系统文件权限并保持安全性的情况下为共享资源提供访问权限。尽管用户必须属于一个主组，属于补充组是可选的。


文件归属可以使用 `ls -l` 命令查看。`ls -l` 命令的输出的第一列显示文件的权限。其他列显示文件的所有者及文件所属的组。

![Detailed output of ls -l](https://www.freecodecamp.org/news/content/images/2022/04/image-146.png)

让我们仔细看看 `mode` 列：

![Permission classes and file types](https://www.freecodecamp.org/news/content/images/2022/04/image-147.png)

**Mode** 定义了两件事情：

-   **文件类型：** 文件类型定义了文件的类型。对于包含简单数据的常规文件，它是空白的 `-`。对于其他特殊文件类型，符号是不同的。对于作为特殊文件的目录，它是 `d`。操作系统会不同地处理特殊文件。
    
-   **权限类别：** 下一组字符分别定义了用户、组和其他人的权限。  
    – **用户**：这是文件的所有者，文件的所有者属于此类。  
    – **组**：文件组的成员属于此类。  
    – **其他**：不属于用户或组类别的任何用户属于此类。
    

💡**提示:** 目录所有权可以使用 `ls -ld` 命令查看。

##### 如何读取符号权限或 `rwx` 权限

`rwx` 表示法被称为权限的符号表示法。在权限集中，

-   `r` 代表 **读取**。它表示在三元组的第一个字符中。
    
-   `w` 代表 **写入**。它表示在三元组的第二个字符中。
    
-   `x` 代表 **执行**。它表示在三元组的第三个字符中。
    

**读取：**

对于常规文件，读取权限只允许打开和读取文件。用户不能修改文件。

同样，对于目录，读取权限允许列出目录内容而不进行任何修改。

**写入：**

当文件具有写入权限时，用户可以修改（编辑、删除）文件并保存。

对于文件夹，写入权限使用户能够修改其内容（创建、删除和重命名其中的文件），以及修改用户具有写入权限的文件的内容。

**Linux 中的权限示例**

现在我们知道如何读取权限了，让我们看看一些示例。

-   `-rwx------`: 只有文件所有者可以访问和执行的文件。
    
    `-rw-rw-r--`: 所有者和组可以修改的文件，但其他人不能。
    
-   `drwxrwx---`: 目录可以被所有者和组修改。
    

**执行：**

对于文件，执行权限允许用户运行可执行脚本。对于目录，用户可以访问它们，并访问目录下文件的详细信息。

##### 如何使用 `chmod` 和 `chown` 更改 Linux 中的文件权限和所有权

现在我们了解了基本的所有权和权限，让我们看看如何使用 `chmod` 命令修改权限。

**`chmod` 的语法：**

```
chmod permissions filename
```

其中，

-   `permissions` 可以是读取、写入、执行或它们的组合。
    
-   `filename` 是需要更改权限的文件的名称。此参数也可以是更改权限到批量文件的列表。
    

我们可以用两种模式更改权限：

1.  **符号模式**：此方法使用类似 `u`、`g`、`o` 的符号表示用户、组和其他。权限用 `r、w、x` 分别表示读取、写入和执行。你可以使用 +、- 和 = 修改权限。
    
2.  **绝对模式**：此方法表示权限为从 0-7 的 3 位八进制数字。
    

现在，让我们详细了解它们。

##### 如何使用符号模式更改权限

下表总结了用户表示法：

| **用户表示法** | **描述** |
| --- | --- |
| u | 用户/所有者 |
| g | 组 |
| o | 其他 |

我们可以使用数学运算符来添加、删除和分配权限。下表显示了总结：

| **运算符** | **描述** |
| --- | --- |
| + | 向文件或目录添加权限 |
| – | 移除权限 |
| \\= | 设置权限（如果之前不存在）。如果之前设置了权限，则覆盖权限。 |

**示例：**

假设我有一个脚本，我想使其对文件 `zaira` 的所有者可执行。

当前文件权限如下：

![image-161](https://www.freecodecamp.org/news/content/images/2022/04/image-161.png)

让我们像这样拆分权限：

![Splitting file permissions](https://www.freecodecamp.org/news/content/images/2022/04/image-160.png)

通过符号模式，为所有者（`u`）添加执行权限（`x`），我们可以使用以下命令：

```
chmod u+x mymotd.sh
```

**输出：**

现在，我们可以看到对所有者 `zaira` 添加了执行权限。

![Permission updated](https://www.freecodecamp.org/news/content/images/2022/04/image-162.png)

**通过符号方法更改权限的其他示例：**

-   移除 `组` 和 `其他` 的 `读取` 和 `写入` 权限：`chmod go-rw`。
    
-   移除 `其他` 的 `读取` 权限：`chmod o-r`。
    
-   分配 `组` 写入权限并覆盖现有权限：`chmod g=w`。


绝对模式使用数字表示权限并使用数学运算符进行修改。

下表展示了如何分配相关权限：

| **权限** | **授予权限** |
| --- | --- |
| 读 | 加4 |
| 写 | 加2 |
| 执行 | 加1 |

可以使用减法来撤销权限。下表展示了如何移除相关权限。

| **权限** | **撤销权限** |
| --- | --- |
| 读 | 减4 |
| 写 | 减2 |
| 执行 | 减1 |

**示例**：

-   为`用户`设置`读`（加4），为`组`设置`读`（加4）和`执行`（加1），为其他仅设置`执行`（加1）。

`chmod 451 文件名`

这是我们进行计算的方法：

![添加权限的计算详解](https://www.freecodecamp.org/news/content/images/2022/04/image-163.png)

请注意，这等同于 `r--r-x--x`。

-   移除`组`和`其他`的`执行`权限。

要从`组`和`其他`中移除执行权限，在最后两个八位组的执行部分减去 1。

![移除权限的计算详解](https://www.freecodecamp.org/news/content/images/2022/04/image-164.png)

-   为`用户`分配`读`、`写`和`执行`权限，为`组`分配`读`和`执行`权限，其他仅分配`读`权限。

这等同于 `rwxr-xr--`。

![添加权限的计算详解](https://www.freecodecamp.org/news/content/images/2022/04/image-165.png)

##### 如何使用 `chown` 命令更改所有权

接下来，我们将学习如何更改文件的所有权。你可以使用 `chown` 命令更改文件或文件夹的所有权。在某些情况下，更改所有权需要 `sudo` 权限。

`chown` 的语法：

```
chown 用户 文件名
```

##### 如何使用 `chown` 更改用户所有权

让我们将所有权从用户 `zaira` 转移到用户 `news`。

`chown news mymotd.sh`

![查看当前所有者](https://www.freecodecamp.org/news/content/images/2022/04/image-167.png)

更改所有权的命令：`sudo chown news mymotd.sh`。

**输出：**

![所有权已更改](https://www.freecodecamp.org/news/content/images/2022/04/image-168.png)

##### 如何同时更改用户和组所有权

我们还可以使用 `chown` 同时更改用户和组。

```
chown 用户:组 文件名
```

##### 如何更改目录所有权

你可以递归地更改目录内容的所有权。下面的例子更改了 `/opt/script` 文件夹的所有权，以允许用户 `admin`。

```
chown -R admin /opt/script
```

##### 如何更改组所有权

如果我们只需要更改组所有者，可以使用`chown`，在组名称前加一个冒号 `:`

```
chown :admins /opt/script
```

##### 如何在用户之间切换

你可以使用 `su` 命令在用户之间切换。

```
[user01@host ~]$ su user02
密码：
[user02@host ~]$
```

##### 如何获得超级用户访问权限

超级用户或根用户在 Linux 系统中拥有最高的访问权限。根用户可以在系统上执行任何操作。根用户可以访问所有文件和目录，安装和删除软件，并修改或覆盖系统配置。

能力越大，责任越大。如果根用户账户受到攻击，攻击者可以完全控制系统。因此，建议仅在必要时使用根用户账户。

如果省略用户名，`su` 命令默认切换到根用户账户。

```
[user01@host ~]$ su
密码：
[root@host ~]#
```

`su` 命令的另一种变体是 `su -`。`su` 命令切换到根用户账户但不更改环境变量。`su -` 命令切换到根用户账户并将环境变量更改为目标用户的环境变量。

##### 使用 sudo 运行命令

为了以 `root` 用户身份运行命令而不切换到 `root` 用户账户，你可以使用 `sudo` 命令。`sudo` 命令允许你以提升的权限运行命令。

使用 `sudo` 运行命令比以 `root` 用户身份运行命令更安全。这是因为，只有特定的一组用户可以被授予使用 `sudo` 运行命令的权限。这在 `/etc/sudoers` 文件中定义。

此外，`sudo` 记录所有通过它运行的命令，提供谁在何时运行了哪些命令的审计轨迹。

在 Ubuntu 中，你可以在这里找到审计日志：

```
cat /var/log/auth.log | grep sudo
```

对于没有 `sudo` 访问权限的用户，它会在日志中标记并提示如下消息：

```
user01 不在 sudoers 文件中。此事件将被报告。
```

#### 管理本地用户账户

##### 从命令行创建用户

用于添加新用户的命令是：

```
sudo useradd 用户名
```

此命令会设置用户的主目录并创建一个由用户的用户名指定的私人组。目前，账户缺少有效密码，在创建密码之前用户无法登录。

##### 修改现有用户

`usermod` 命令用于修改现有用户。以下是一些常用的 `usermod` 命令选项：

1.  **更改用户的登录名:**
    
    ```
     sudo usermod -l newusername oldusername
    ```
    
2.  **更改用户的主目录:**
    
    ```
     sudo usermod -d /new/home/directory -m username
    ```
    
3.  **将用户添加到一个附加组:**
    
    ```
     sudo usermod -aG groupname username
    ```
    
4.  **更改用户的 shell:**
    
    ```
     sudo usermod -s /bin/bash username
    ```
    
5.  **锁定用户账户:**
    
    ```
     sudo usermod -L username
    ```
    
6.  **解锁用户账户:**
    
    ```
     sudo usermod -U username
    ```
    
7.  **设置用户账户的过期日期:**
    
    ```
     sudo usermod -e YYYY-MM-DD username
    ```
    
8.  **更改用户的用户 ID (UID):**
    
    ```
     sudo usermod -u newUID username
    ```
    
9.  **更改用户的主组:**
    
    ```
     sudo usermod -g newgroup username
    ```
    
10.  **将用户从附加组中移除:**
    
    ```
    sudo gpasswd -d username groupname
    ```

##### 删除用户

`userdel` 命令用于从系统中删除用户账户及相关文件。

-   `sudo userdel username`: 从 `/etc/passwd` 中删除用户的详细信息，但保留用户的主目录。
    
-   `sudo userdel -r username` 命令从 `/etc/passwd` 中删除用户的详细信息，同时删除用户的主目录。

##### 更改用户密码

`passwd` 命令用于更改用户密码。

-   `sudo passwd username`: 设置初始化密码或更改用户名的现有密码。它也用于更改当前登录用户的密码。

### 8.2 通过 SSH 连接到远程服务器

访问远程服务器是系统管理员的基本任务之一。你可以通过本地机器连接到不同服务器或访问数据库并执行命令，这一切都通过 SSH 完成。

**什么是 SSH 协议？**

SSH 代表 Secure Shell。它是一种加密网络传输协议，允许两台系统之间的安全通信。

SSH 的默认端口是 `22`。

通过 SSH 进行通信的两个参与者是：

-   服务器：你想要访问的机器。
    
-   客户端：你从中访问服务器的系统。

连接到服务器的步骤如下：

1.  发起连接：客户端向服务器发送连接请求。
    
2.  密钥交换：服务器向客户端发送其公钥。双方同意使用的加密方法。
    
3.  生成会话密钥：客户端和服务器使用 Diffie-Hellman 密钥交换创建一个共享的会话密钥。
    
4.  客户端认证：客户端使用密码、私钥或其他方法登录服务器。
    
5.  安全通信：认证后，客户端和服务器使用加密进行安全通信。

**如何使用 SSH 连接到远程服务器？**

`ssh` 命令是在 Linux 中内置的实用工具，同时也是默认工具。它使访问服务器变得非常简单和安全。

在这里，我们讨论客户端如何连接到服务器。

在连接到服务器之前，你需要有以下信息：

-   服务器的 IP 地址或域名。
    
-   服务器的用户名和密码。
    
-   你在服务器中有访问权限的端口号。

`ssh` 命令的基本语法是：

```
ssh username@server_ip
```

例如，如果你的用户名是 `john` 而服务器 IP 是 `192.168.1.10`，那么命令将是：

```
ssh john@192.168.1.10
```

之后，你会被提示输入密码。你的屏幕看起来类似于这样：

```
john@192.168.1.10's password: 
Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.4.0-70-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Fri Jun  5 10:17:32 UTC 2024

  System load:  0.08               Processes:           122
  Usage of /:   12.3% of 19.56GB   Users logged in:     1
  Memory usage: 53%                IP address for eth0: 192.168.1.10
  Swap usage:   0%

Last login: Fri Jun  5 09:34:56 2024 from 192.168.1.2
john@hostname:~$ # 开始输入命令
```

现在你可以在服务器 `192.168.1.10` 上执行相关命令了。

⚠️ SSH 的默认端口是 `22`，但它也很容易受到攻击者的攻击，因为他们通常会首先尝试这个端口。你的服务器可以开放另一个端口并与你共享访问权限。要连接到不同的端口，请使用 `-p` 标志。

```
ssh -p port_number username@server_ip
```

### 8.3 高级日志解析与分析

日志文件配置后由系统生成，具有多种有用的用途。它们可用于跟踪系统事件、监控系统性能和排除故障。对于系统管理员而言，它们尤其有用，可跟踪应用错误、网络事件和用户活动。

这里是一个日志文件的示例：

```
# 示例日志文件
2024-04-25 09:00:00 INFO Startup: 应用程序启动
2024-04-25 09:01:00 INFO Config: 配置成功加载
2024-04-25 09:02:00 DEBUG Database: 数据库连接已建立
2024-04-25 09:03:00 INFO User: 新用户注册 (UserID: 1001)
2024-04-25 09:04:00 WARN Security: 尝试使用错误凭据登录 (UserID: 1001)
2024-04-25 09:05:00 ERROR Network: 请求超时 (ReqID: 456)
2024-04-25 09:06:00 INFO Email: 通知邮件已发送 (UserID: 1001)
2024-04-25 09:07:00 DEBUG API: API 调用响应时间超过阈值 (持续时间: 350ms)
2024-04-25 09:08:00 INFO Session: 用户会话结束 (UserID: 1001)
2024-04-25 09:09:00 INFO Shutdown: 应用程序关闭启动
```

-   Timestamp: 事件发生的日期和时间。
    
-   Log Level: 事件的严重程度 (INFO, DEBUG, WARN, ERROR)。
    
-   Component: 生成事件的系统组件 (Startup, Config, Database, User, Security, Network, Email, API, Session, Shutdown)。
    
-   Message: 对发生事件的描述。
    
-   Additional Information: 与事件相关的附加信息。
    

在实时系统中，日志文件往往有成千上万行，并且每秒都会生成。根据配置，它们可能非常冗长。日志文件中的每一列都是可以用来追踪问题的信息。这使得手动阅读和理解日志文件变得困难。

这时日志解析便派上用场了。日志解析是从日志文件中提取有用信息的过程。它涉及将日志文件分解成更小、更易管理的部分，并提取相关信息。

过滤后的信息对于创建警报、报告和仪表盘也是有用的。

在本节中，您将探索在 Linux 中解析日志文件的一些技术。

#### 使用 `grep` 进行文本提取

Grep 是一个内置的 bash 工具。它代表“全局正则表达式打印”。Grep 用于在文件中匹配字符串。

以下是 `grep` 的一些常见用途：

1.  **在文件中搜索特定字符串:**
    
    ```
     grep "search_string" filename
    ```
    
    该命令在名为 `filename` 的文件中搜索 "search\_string"。
    
2.  **在目录中递归搜索:**
    
    ```
     grep -r "search_string" /path/to/directory
    ```
    
    该命令在指定目录及其子目录中的所有文件中搜索 "`search_string"`。
    
3.  **忽略搜索时的大小写:**
    
    ```
     grep -i "search_string" filename
    ```
    
    该命令在名为 `filename` 的文件中执行不区分大小写的 "search\_string" 搜索。
    
4.  **显示匹配行的行号:**
    
    ```
     grep -n "search_string" filename
    ```
    
    该命令在名为 `filename` 的文件中显示匹配行及其行号。
    
5.  **计算匹配行的数量:**
    
    ```
     grep -c "search_string" filename
    ```
    
    该命令统计名为 `filename` 的文件中包含 "search\_string" 的行数。
    
6.  **反向匹配以显示不匹配的行:**
    
    ```
     grep -v "search_string" filename
    ```
    
    该命令显示名为 `filename` 的文件中不包含 "search\_string" 的所有行。
    
7.  **搜索整个单词:**
    
    ```
     grep -w "word" filename
    ```
    
    该命令在名为 `filename` 的文件中搜索整个单词 "word"。
    
8.  **使用扩展正则表达式:**
    
    ```
     grep -E "pattern" filename
    ```
    
    该命令允许在名为 `filename` 的文件中使用扩展正则表达式进行更复杂的模式匹配。
    

**💡 提示:** 如果文件夹中有多个文件，您可以使用以下命令找到包含所需字符串的文件列表。

```
# Find the list of files containing the desired strings
grep -l "String to Match" /path/to/directory
```

#### 使用 `sed` 进行文本提取

`sed` 代表“流编辑器”。它逐行处理数据流，意味着它一次读取一行数据。`sed` 允许您搜索模式并对匹配这些模式的行执行操作。

**`sed` 的基本语法:**

`sed` 的基本语法如下：

```
sed [options] 'command' file_name
```

在这里，`command` 用于对文本数据执行替换、删除、插入等操作。`filename` 是您要处理的文件的名称。

`sed`**用法:**

**1\. 替换:**

`s` 标志用于替换文本。`old-text` 替换为 `new-text`：

```
sed 's/old-text/new-text/' filename
```

例如，要将日志文件 `system.log` 中的所有 "error" 替换为 "warning"：

```
sed 's/error/warning/' system.log
```

**2\. 打印包含特定模式的行:**

使用 `sed` 过滤并显示匹配特定模式的行：

```
sed -n '/pattern/p' filename
```

例如，查找所有包含 "ERROR" 的行：

```
sed -n '/ERROR/p' system.log
```

**3\. 删除包含特定模式的行:**

可以从输出中删除匹配特定模式的行：

```
sed '/pattern/d' filename
```

例如，删除所有包含 "DEBUG" 的行：

```
sed '/DEBUG/d' system.log
```

**4\. 从日志行中提取特定字段:**

可以使用正则表达式来提取行的部分内容。假设每个日志行以 "YYYY-MM-DD" 格式的日期开头。您可以从每行中仅提取日期：

```
sed -n 's/^\([0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}\).*/\1/p' system.log
```

#### 使用 `awk` 进行文本解析

`awk` 具备轻松将每行拆分为字段的能力。它非常适合处理结构化文本如日志文件。

**awk 的基本语法**

```
awk 'pattern { action }' file_name
```

在这里，`pattern` 是必须满足的条件，以便执行 `action`。如果省略模式，则在每一行上执行该动作。

在接下来的示例中，你将使用以下日志文件作为示例：

```
2024-04-25 09:00:00 INFO Startup: Application starting
2024-04-25 09:01:00 INFO Config: Configuration loaded successfully
2024-04-25 09:02:00 INFO Database: Database connection established
2024-04-25 09:03:00 INFO User: New user registered (UserID: 1001)
2024-04-25 09:04:00 INFO Security: Attempted login with incorrect credentials (UserID: 1001)
2024-04-25 09:05:00 INFO Network: Network timeout on request (ReqID: 456)
2024-04-25 09:06:00 INFO Email: Notification email sent (UserID: 1001)
2024-04-25 09:07:00 INFO API: API call with response time over threshold (Duration: 350ms)
2024-04-25 09:08:00 INFO Session: User session ended (UserID: 1001)
2024-04-25 09:09:00 INFO Shutdown: Application shutdown initiated
  INFO
```

-   **使用**`awk`**访问列**

在 `awk` 中的字段（默认由空格分隔）可以使用 `$1`，`$2`，`$3` 等访问。

```
zaira@zaira-ThinkPad:~$ awk '{ print $1 }' sample.log
# 输出
2024-04-25
2024-04-25
2024-04-25
2024-04-25
2024-04-25
2024-04-25
2024-04-25
2024-04-25
2024-04-25
2024-04-25

zaira@zaira-ThinkPad:~$ awk '{ print $2 }' sample.log
# 输出
09:00:00
09:01:00
09:02:00
09:03:00
09:04:00
09:05:00
09:06:00
09:07:00
09:08:00
09:09:00
```

-   **打印包含特定模式的行（例如，ERROR）**

```
awk '/ERROR/ { print $0 }' logfile.log

# 输出
2024-04-25 09:05:00 ERROR Network: Network timeout on request (ReqID: 456)
```

这将打印包含 "ERROR" 的所有行。

-   **提取第一列（日期和时间）**

```
awk '{ print $1, $2 }' logfile.log
# 输出
2024-04-25 09:00:00
2024-04-25 09:01:00
2024-04-25 09:02:00
2024-04-25 09:03:00
2024-04-25 09:04:00
2024-04-25 09:05:00
2024-04-25 09:06:00
2024-04-25 09:07:00
2024-04-25 09:08:00
2024-04-25 09:09:00
```

这将从每一行中提取前两列，在本例中是日期和时间。

-   **总结每个日志级别的出现次数**

```
awk '{ count[$3]++ } END { for (level in count) print level, count[level] }' logfile.log

# 输出
 1
WARN 1
ERROR 1
DEBUG 2
INFO 6
```

输出将是每个日志级别的出现次数摘要。

-   **过滤出特定字段（例如，第三列是 INFO 的行）**

```
awk '{ $3="INFO"; print }' sample.log

# 输出
2024-04-25 09:00:00 INFO Startup: Application starting
2024-04-25 09:01:00 INFO Config: Configuration loaded successfully
2024-04-25 09:02:00 INFO Database: Database connection established
2024-04-25 09:03:00 INFO User: New user registered (UserID: 1001)
2024-04-25 09:04:00 INFO Security: Attempted login with incorrect credentials (UserID: 1001)
2024-04-25 09:05:00 INFO Network: Network timeout on request (ReqID: 456)
2024-04-25 09:06:00 INFO Email: Notification email sent (UserID: 1001)
2024-04-25 09:07:00 INFO API: API call with response time over threshold (Duration: 350ms)
2024-04-25 09:08:00 INFO Session: User session ended (UserID: 1001)
2024-04-25 09:09:00 INFO Shutdown: Application shutdown initiated
  INFO
```

该命令将提取第三列是 "INFO" 的所有行。

💡 **提示:** `awk` 的默认分隔符是空格。如果你的日志文件使用了不同的分隔符，可以使用 `-F` 选项指定。例如，如果日志文件使用冒号作为分隔符，可以使用 `awk -F: '{ print $1 }' logfile.log` 来提取第一列。

#### 使用 `cut` 解析日志文件

`cut` 命令是一个简单但强大的命令，用于从每一行输入中提取文本部分。由于日志文件是结构化的，并且每个字段由特定字符分隔（如空格、制表符或自定义分隔符），`cut` 在提取这些特定字段时非常有效。

`cut` 命令的基本语法是：

```
cut [options] [file]
```

`cut` 命令的一些常用选项：

-   `-d` : 指定作为字段分隔符的分隔符。
    
-   `-f` : 选择要显示的字段。
    
-   `-c` : 指定字符位置。
    

例如，下面的命令会从日志文件的每一行中提取第一个字段（以空格分隔）：

```
cut -d ' ' -f 1 logfile.log
```

**使用**`cut`**进行日志解析的示例**

假设你有一个如下所示结构的日志文件，其中字段由空格分隔：

```
2024-04-25 08:23:01 INFO 192.168.1.10 User logged in successfully.
2024-04-25 08:24:15 WARNING 192.168.1.10 Disk usage exceeds 90%.
2024-04-25 08:25:02 ERROR 10.0.0.5 Connection timed out.
...
```

可以用以下几种方式使用 `cut`：

1.  **提取每条日志条目的时间**：

```
cut -d ' ' -f 2 system.log

# 输出
08:23:01
08:24:15
08:25:02
...
```

此命令使用空格作为分隔符，并选择第二个字段，即每条日志条目的时间部分。

2.  **提取日志中的 IP 地址**：

```
cut -d ' ' -f 4 system.log

# 输出
192.168.1.10
192.168.1.10
10.0.0.5
```

3.  **提取日志级别（INFO、WARNING、ERROR）**：

```
cut -d ' ' -f 3 system.log

# 输出
INFO
WARNING
ERROR
```

这将提取包含日志级别的第三个字段。

4.  **结合使用 `cut` 和其他命令**：

其他命令的输出可以管道传输给 `cut` 命令。假设你想在切割之前筛选日志。可以使用 `grep` 提取包含 "ERROR" 的行，然后使用 `cut` 从这些行中获取具体信息：

```
grep "ERROR" system.log | cut -d ' ' -f 1,2 

# 输出
2024-04-25 08:25:02
```

这个命令首先筛选包含 "ERROR" 的行，然后从这些行中提取日期和时间。

5.  **提取多个字段**：

可以通过指定范围或逗号分隔的字段列表一次提取多个字段：

```
cut -d ' ' -f 1,2,3 system.log 

# 输出
2024-04-25 08:23:01 INFO
2024-04-25 08:24:15 WARNING
2024-04-25 08:25:02 ERROR
...
```

上述命令从每条日志记录中提取前三个字段，即日期、时间和日志级别。

#### 使用 `sort` 和 `uniq` 解析日志文件

排序和去重是处理日志文件时常用的操作。`sort` 和 `uniq` 命令是用于排序和去重输入的强大命令。

**sort 的基本语法**

`sort` 命令按字母顺序或数字顺序组织文本行。

```
sort [options] [file]
```

`sort` 命令的一些关键选项：

-   `-n`：按数字内容排序。
    
-   `-r`：倒序排序。
    
-   `-k`：指定排序的键或列号。
    
-   `-u`：排序并去除重复行。
    

`uniq` 命令用于过滤或计数并报告文件中重复的行。

`uniq` 的语法是：

```
uniq [options] [input_file] [output_file]
```

`uniq` 命令的一些关键选项：

-   `-c`：在行前附上出现次数。
    
-   `-d`：只打印重复的行。
    
-   `-u`：只打印唯一的行。
    

#### 使用 `sort` 和 `uniq` 解析日志文件的示例

假设下面是一个示例日志记录，用于这些演示：

```
2024-04-25 INFO User logged in successfully.
2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 ERROR Connection timed out.
2024-04-25 INFO User logged in successfully.
2024-04-26 INFO Scheduled maintenance.
2024-04-26 ERROR Connection timed out.
```

1.  **按日期排序日志记录**：

```
sort system.log

# 输出
2024-04-25 INFO User logged in successfully.
2024-04-25 INFO User logged in successfully.
2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 ERROR Connection timed out.
2024-04-26 ERROR Connection timed out.
2024-04-26 INFO Scheduled maintenance.
```

这将按字母顺序排序日志记录，根据日期排序。

1.  **排序并去除重复项**：

```
sort system.log | uniq

# 输出
2024-04-25 INFO User logged in successfully.
2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 ERROR Connection timed out.
2024-04-26 INFO Scheduled maintenance.
```

此命令对日志文件进行排序，并将输出传输给 `uniq`，去除重复行。

1.  **计数每行出现次数**：

```
sort system.log | uniq -c

# 输出
2 2024-04-25 INFO User logged in successfully.
1 2024-04-25 WARNING Disk usage exceeds 90%.
2 2024-04-26 ERROR Connection timed out.
1 2024-04-26 INFO Scheduled maintenance.
```

对日志记录进行排序，然后计数每个唯一行的出现次数。根据输出，`'2024-04-25 INFO User logged in successfully.'` 在文件中出现了2次。

1.  **识别唯一的日志记录**：

```
sort system.log | uniq -u

# 输出

2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 INFO Scheduled maintenance.
```

此命令显示唯一的行。

2.  **按日志级别排序**：

```
sort -k2 system.log

# 输出
2024-04-26 ERROR Connection timed out.
2024-04-26 ERROR Connection timed out.
2024-04-25 INFO User logged in successfully.
2024-04-25 INFO User logged in successfully.
2024-04-26 INFO Scheduled maintenance.
2024-04-25 WARNING Disk usage exceeds 90%.
```

根据第二个字段排序条目，即日志级别。

### 8.4. 通过命令行管理 Linux 进程

进程是程序的运行实例。进程包含：

-   分配的内存地址空间。
    
-   进程状态。
    
-   属性，如所有权、安全属性和资源使用。
    

进程也包含一个环境，包括：

-   局部和全局变量
    
-   当前调度上下文
    
-   分配的系统资源，如网络端口或文件描述符。
    

当你运行 `ls -l` 命令时，操作系统创建一个新的进程来执行该命令。该进程有一个ID，一个状态，并运行直到命令完成。

#### 理解进程的创建和生命周期

在Ubuntu中，所有进程都来源于一个叫 `systemd` 的初始系统进程，这是内核在启动过程中启动的第一个进程。

`systemd` 进程的进程 ID (PID) 是 `1`，负责初始化系统、启动和管理其他进程并处理系统服务。系统上的所有其他进程都是 `systemd` 的后代。

![父进程和子进程的初始化](https://cdn.hashnode.com/res/hashnode/image/upload/v1719584071059/f24fac4b-18f3-4a39-8659-93d32c533256.png)

通过 fork 例程，子进程继承了安全身份、先前和当前的文件描述符、端口和资源特权、环境变量和程序代码。子进程随后可以执行自己的程序代码。

通常，父进程在子进程运行时会进入睡眠状态，请求（等待）在子进程完成时被通知。

子进程退出时，已经关闭或丢弃了其资源和环境。唯一剩下的资源是进程表中的一个条目，称为僵尸。当子进程退出时，父进程被唤醒并清理进程表中的子进程条目，从而释放子进程的最后一个资源。然后父进程继续执行它自己的程序代码。

#### 了解进程状态

Linux 中的进程在其生命周期中会进入不同的状态。进程的状态表明进程当前正在做什么，以及它如何与系统交互。进程根据其执行状态和系统的调度算法在不同状态之间转换。

![Linux 进程状态和转换](https://cdn.hashnode.com/res/hashnode/image/upload/v1719584116150/3054dfe2-c42c-4d62-9e12-e3aec479d53a.png)

Linux 系统中的进程可以处于以下状态之一：

| **状态** | **描述** |
| --- | --- |
| **(新)** | 通过 fork 系统调用创建进程时的初始状态。 |
| **可运行（就绪）(R)** | 进程准备运行并等待被调度到 CPU 上。 |
| **正在运行（用户态）(R)** | 进程在用户态下执行，运行用户应用程序。 |
| **正在运行（内核态）(R)** | 进程在内核态下执行，处理系统调用或硬件中断。 |
| **睡眠 (S)** | 进程等待一个事件（例如 I/O 操作）完成，可以被轻易唤醒。 |
| **不可中断睡眠 (D)** | 进程处于不可中断睡眠状态，等待特定条件（通常是 I/O）完成，不能被信号打断。 |
| **磁盘睡眠 (K)** | 进程等待磁盘 I/O 操作完成。 |
| **闲置睡眠 (I)** | 进程闲置，不做任何工作，等待事件发生。 |
| **停止 (T)** | 进程执行已停止，通常由信号触发，可以稍后恢复。 |
| **僵尸 (Z)** | 进程已经完成执行，但在进程表中仍有一个条目，等待其父进程读取其退出状态。 |

进程在这些状态之间的转换如下：

| **转换** | **描述** |
| --- | --- |
| **Fork** | 从父进程创建一个新进程，状态从（新）变为可运行（就绪）(R)。 |
| **调度** | 调度器选择一个可运行的进程，使其状态变为正在运行（用户态）或正在运行（内核态）。 |
| **运行** | 当调度执行时，进程从可运行（就绪）(R) 状态转变为正在运行（内核态）(R)。 |
| **抢占或重新调度** | 进程可以被抢占或重新调度，状态回到可运行（就绪）(R)。 |
| **系统调用** | 进程进行系统调用，从正在运行（用户态）(R) 过渡到正在运行（内核态）(R)。 |
| **返回** | 进程完成系统调用，返回到正在运行（用户态）(R)。 |
| **等待** | 进程等待一个事件，从正在运行（内核态）(R) 转换为一个睡眠状态之一（S、D、K 或 I）。 |
| **事件或信号** | 进程被事件或信号唤醒，从一个睡眠状态回到可运行（就绪）(R)。 |
| **挂起** | 进程被挂起，从正在运行（内核态）或可运行（就绪）状态转变为停止 (T)。 |
| **恢复** | 进程恢复，从停止 (T) 状态回到可运行（就绪）(R)。 |
| **退出** | 进程终止，从正在运行（用户态）或正在运行（内核态）转变为僵尸 (Z)。 |
| **回收** | 父进程读取僵尸进程的退出状态，从进程表中删除它。 |

#### 如何查看进程

你可以使用 `ps` 命令加上选项组合来查看 Linux 系统上的进程。`ps` 命令用于显示活动进程的相关信息。例如，`ps aux` 显示系统上运行的所有进程。

```
zaira@zaira:~$ ps aux
# 输出
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.0 168140 11352 ?        Ss   May21   0:18 /sbin/init splash
root           2  0.0  0.0      0     0 ?        S    May21   0:00 [kthreadd]
root           3  0.0  0.0      0     0 ?        I<   May21   0:00 [rcu_gp]
root           4  0.0  0.0      0     0 ?        I<   May21   0:00 [rcu_par_gp]
root           5  0.0  0.0      0     0 ?        I<   May21   0:00 [slub_flushwq]
root           6  0.0  0.0      0     0 ?        I<   May21   0:00 [netns]
root          11  0.0  0.0      0     0 ?        I<   May21   0:00 [mm_percpu_wq]
root          12  0.0  0.0      0     0 ?        I    May21   0:00 [rcu_tasks_kthread]
root          13  0.0  0.0      0     0 ?        I    May21   0:00 [rcu_tasks_rude_kthread]
*... 输出被截断 ....*
```

1.  `USER`: 拥有此进程的用户。
    
2.  `PID`: 进程ID。
    
3.  `%CPU`: 进程的CPU使用率。
    
4.  `%MEM`: 进程的内存使用率。
    
5.  `VSZ`: 进程的虚拟内存大小。
    
6.  `RSS`: 驻留集大小，即任务使用的未交换物理内存。
    
7.  `TTY`: 进程的控制终端。`?`表示没有控制终端。
    
8.  `STAT`: 进程状态。
    
    -   `R`: 运行中
        
    -   `I` 或 `S`: 可中断的睡眠（等待事件完成）
        
    -   `D`: 不可中断的睡眠（通常是IO）
        
    -   `T`: 停止（由作业控制信号或正在被跟踪的原因）
        
    -   `Z`: 僵尸进程（已终止但未被父进程清除）
        
    -   `Ss`: 会话领导者。这是一个已经启动了会话的进程，是一组进程的领导者，可以控制终端信号。第一个 `S` 表示睡眠状态，第二个 `s` 表示它是会话领导者。
        
9.  `START`: 进程的启动时间或日期。
    
10.  `TIME`: 累计的CPU时间。
    
11.  `COMMAND`: 启动进程的命令。
    

#### 后台和前台进程

在本节中，你将学习如何通过在后台或前台运行作业来控制它们。

一个作业是由shell启动的进程。当你在终端运行一个命令时，它被认为是一个作业。作业可以在前台或后台运行。

为了演示控制，你将首先创建三个进程并将它们在后台运行。之后，你将列出这些进程并在前后台之间交替运行它们。你将看到如何将它们置于睡眠状态或完全退出。

1.  创建三个进程

打开终端并启动三个长时间运行的进程。使用 `sleep` 命令，该命令使进程运行指定的秒数。

```
# 运行 sleep 命令 300、400 和 500 秒
sleep 300 &
sleep 400 &
sleep 500 &
```

每个命令末尾的 `&` 将进程移动到后台。

2.  显示后台作业

使用 `jobs` 命令显示后台作业列表。

```
jobs
```

输出应类似如下：

```
jobs
[1]   Running                 sleep 300 &
[2]-  Running                 sleep 400 &
[3]+  Running                 sleep 500 &
```

3.  将后台作业带到前台

要将后台作业带到前台，请使用 `fg` 命令并跟随作业编号。例如，要将第一个作业（`sleep 300`）带到前台：

```
fg %1
```

这将把作业 `1` 带到前台。

4.  将前台作业移回后台

在作业在前台运行时，你可以按 `Ctrl+Z` 挂起它并将其移回后台。

挂起的作业会显示如下：

```
zaira@zaira:~$ fg %1
sleep 300

^Z
[1]+  Stopped                 sleep 300

zaira@zaira:~$ jobs
# 挂起的作业
[1]+  Stopped                 sleep 300
[2]   Running                 sleep 400 &
[3]-  Running                 sleep 500 &
```

现在，使用 `bg` 命令在后台恢复ID为1的作业。

```
# 按 Ctrl+Z 挂起前台作业
# 然后，在后台恢复它
bg %1
```

5.  再次显示作业

```
jobs
[1]   Running                 sleep 300 &
[2]-  Running                 sleep 400 &
[3]+  Running                 sleep 500 &
```

在本练习中，你：

-   使用 sleep 命令启动了三个后台进程。
    
-   使用 jobs 显示后台作业列表。
    
-   使用 `fg %作业编号` 将一个作业带到前台。
    
-   使用 `Ctrl+Z` 挂起该作业并使用 `bg %作业编号` 将其移回后台。
    
-   再次使用 jobs 验证后台作业的状态。
    

现在你知道如何控制作业了。

#### 杀死进程

可以使用 `kill` 命令终止一个无响应或不需要的进程。`kill` 命令向进程ID发送一个信号，请求其终止。

`kill` 命令有许多选项。

```
# kill 的可用选项

kill -l
 1) SIGHUP     2) SIGINT     3) SIGQUIT     4) SIGILL     5) SIGTRAP
 6) SIGABRT     7) SIGBUS     8) SIGFPE     9) SIGKILL    10) SIGUSR1
11) SIGSEGV    12) SIGUSR2    13) SIGPIPE    14) SIGALRM    15) SIGTERM
16) SIGSTKFLT    17) SIGCHLD    18) SIGCONT    19) SIGSTOP    20) SIGTSTP
21) SIGTTIN    22) SIGTTOU    23) SIGURG    24) 
...终止
```

以下是 Linux 中 `kill` 命令的一些示例：

1.  **通过PID（进程ID）杀死进程：**
    
    ```
     kill 1234
    ```
    
    此命令向PID为1234的进程发送默认的 `SIGTERM` 信号，要求它终止。
    
2.  **通过名称杀死进程：**
    
    ```
     pkill process_name
    ```
    
    此命令向所有指定名称的进程发送默认的 `SIGTERM` 信号。
    
3.  **强制杀死进程：**
    
    ```
     kill -9 1234
    ```
    
    此命令向PID为1234的进程发送 `SIGKILL` 信号，强制终止它。
    
4.  **向进程发送特定信号：**
    
    ```
     kill -s SIGSTOP 1234
    ```
    
    此命令向PID为1234的进程发送 `SIGSTOP` 信号，停止它。
    
5.  **杀死所有由特定用户拥有的进程：**
    
    ```
     pkill -u username
    ```
    
    此命令向所有指定用户拥有的进程发送默认的 `SIGTERM` 信号。

Here is the information about the `kill` command options and signals in a tabular form: This table summarizes the most common `kill` command options and signals used in Linux for managing processes.

| 命令 / 选项 | 信号 | 描述 |
| --- | --- | --- |
| `kill <pid>` | `SIGTERM` | 请求进程优雅地终止（默认信号）。 |
| `kill -9 <pid>` | `SIGKILL` | 强制进程立即终止，无需清理。 |
| `kill -SIGKILL <pid>` | `SIGKILL` | 强制进程立即终止，无需清理。 |
| `kill -15 <pid>` | `SIGTERM` | 显式发送 `SIGTERM` 信号，请求优雅终止。 |
| `kill -SIGTERM <pid>` | `SIGTERM` | 显式发送 `SIGTERM` 信号，请求优雅终止。 |
| `kill -1 <pid>` | `SIGHUP` | 传统上意为“挂起”；可用于重新加载配置文件。 |
| `kill -SIGHUP <pid>` | `SIGHUP` | 传统上意为“挂起”；可用于重新加载配置文件。 |
| `kill -2 <pid>` | `SIGINT` | 请求进程终止（与在终端中按 `Ctrl+C` 相同）。 |
| `kill -SIGINT <pid>` | `SIGINT` | 请求进程终止（与在终端中按 `Ctrl+C` 相同）。 |
| `kill -3 <pid>` | `SIGQUIT` | 使进程终止并生成核心转储以供调试。 |
| `kill -SIGQUIT <pid>` | `SIGQUIT` | 使进程终止并生成核心转储以供调试。 |
| `kill -19 <pid>` | `SIGSTOP` | 暂停进程。 |
| `kill -SIGSTOP <pid>` | `SIGSTOP` | 暂停进程。 |
| `kill -18 <pid>` | `SIGCONT` | 恢复暂停的进程。 |
| `kill -SIGCONT <pid>` | `SIGCONT` | 恢复暂停的进程。 |
| `killall <name>` | 不定 | 向具有给定名称的所有进程发送信号。 |
| `killall -9 <name>` | `SIGKILL` | 强制杀死所有具有给定名称的进程。 |
| `pkill <pattern>` | 不定 | 根据模式匹配向进程发送信号。 |
| `pkill -9 <pattern>` | `SIGKILL` | 强制杀死所有匹配模式的进程。 |
| `xkill` | `SIGKILL` | 图形化工具，允许点击一个窗口以杀死相应的进程。 |

### 8.5. Linux中的标准输入和输出流

读取输入和写入输出是理解命令行和Shell脚本编程的重要部分。在Linux中，每个进程都有三个默认流：

1.  标准输入 (`stdin`)：此流用于输入，通常来自键盘。当程序从 `stdin` 读取时，它收到用户输入的数据或从文件重定向的数据。文件描述符是操作系统分配给一个打开文件的唯一标识符，以便跟踪打开的文件。
    
    `stdin` 的文件描述符是 `0`。
    
2.  标准输出 (`stdout`)：这是进程写入其输出的默认输出流。默认情况下，标准输出是终端。输出也可以重定向到文件或另一个程序。`stdout` 的文件描述符是 `1`。
    
3.  标准错误 (`stderr`)：这是进程写入其错误消息的默认错误流。默认情况下，标准错误是终端，允许在 `stdout` 被重定向时仍可看到错误消息。`stderr` 的文件描述符是 `2`。
    

#### 重定向和管道

**重定向:** 可以将错误和输出流重定向到文件或其他命令。例如：

```
# 将 stdout 重定向到文件
ls > output.txt

# 将 stderr 重定向到文件
ls non_existent_directory 2> error.txt

# 将 stdout 和 stderr 都重定向到文件
ls non_existent_directory > all_output.txt 2>&1
```

在最后一个命令中，

-   `ls non_existent_directory`: 列出名为 non\_existent\_directory 的目录内容。由于该目录不存在，`ls` 将生成错误消息。
    
-   `> all_output.txt`: `>` 操作符将 `ls` 命令的标准输出 (`stdout`) 重定向到文件 `all_output.txt`。如果文件不存在，将创建它。如果文件已存在，它的内容将被覆盖。
    
-   `2>&1:`: 这里，`2` 表示标准错误 (`stderr`) 的文件描述符。`&1` 表示标准输出 (`stdout`) 的文件描述符。`&` 字符用于指定 `1` 不是文件名而是文件描述符。
    

因此，`2>&1` 意味着“将stderr（2）重定向到stdout（1）当前的去向”，在本例中是文件 `all_output.txt`。因此，`ls` 的输出（如果有）和错误消息都将写入 `all_output.txt`。

**管道:**

可以使用管道（`|`）将一个命令的输出作为输入传递给另一个命令：

```
ls | grep image
# 输出
image-10.png
image-11.png
image-12.png
image-13.png
... 输出截断 ...
```

### 8.6. 在Linux中实现自动化 – 使用Cron作业自动化任务

Cron是Unix类操作系统中可用的强大作业调度工具。通过配置cron，你可以设置自动作业在每天、每周、每月或其他特定时间运行。cron提供的自动化功能在Linux系统管理中起着至关重要的作用。

通过使用特定的语法，你可以配置cron作业来自动安排脚本或其他命令的运行。

**Linux中的cron作业是什么？**

任何通过crons安排的任务都被称为cron作业。

现在，让我们看看cron作业是如何工作的。

#### 如何控制对crons的访问

为了使用cron作业，管理员需要在`/etc/cron.allow`文件中允许为用户添加cron作业。

如果你收到如下提示，这意味着你没有使用cron的权限。

![Cron job addition denied for user John.](https://www.freecodecamp.org/news/content/images/2021/11/image-51.png)

要允许John使用crons，需要在`/etc/cron.allow`中添加他的名字。如果文件不存在，创建该文件。这将允许John创建和编辑cron作业。

![Allowing John in file cron.allow](https://www.freecodecamp.org/news/content/images/2021/11/image-52.png)

也可以通过在文件`/etc/cron.d/cron.deny`中输入用户名来拒绝用户访问cron作业。

#### 如何在Linux中添加cron作业

首先，要使用cron作业，需要检查cron服务的状态。如果没有安装cron，可以通过包管理器轻松下载。只需使用以下命令检查：

```
# 检查Linux系统上的cron服务
sudo systemctl status cron.service
```

#### Cron作业语法

Crontabs使用以下标志来添加和列出cron作业：

-   `crontab -e`：编辑crontab条目以添加、删除或编辑cron作业。
    
-   `crontab -l`：列出当前用户的所有cron作业。
    
-   `crontab -u username -l`：列出另一个用户的crons。
    
-   `crontab -u username -e`：编辑另一个用户的crons。
    

当你列出crons且它们存在时，你会看到如下内容：

```
# Cron作业示例
* * * * * sh /path/to/script.sh
```

在上述示例中，

-   `*` 分别代表分钟、小时、天、月、星期。参见下面这些值的详细信息：

|  | **值** | **描述** |
| --- | --- | --- |
| 分钟 | 0-59 | 命令将在特定分钟执行。 |
| 小时 | 0-23 | 命令将在特定小时执行。 |
| 天 | 1-31 | 命令将在这些天执行。 |
| 月 | 1-12 | 要执行任务的月份。 |
| 星期 | 0-6 | 命令将在这些星期几运行。这里，0代表星期天。 |

-   `sh` 表示脚本是一个bash脚本，应从`/bin/bash`运行。
    
-   `/path/to/script.sh` 指定脚本的路径。
    

以下是cron作业语法的总结：

```
*   *   *   *   *  sh /path/to/script/script.sh
|   |   |   |   |              |
|   |   |   |   |      命令或脚本        
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   | 星期几 (0-6)
|   |   |   |
|   |   | 月份 (1-12)
|   |   |
|   | 天 (1-31)  
|   |
| 小时 (0-23)  
|
分钟 (0-59)
```

#### Cron作业示例

以下是一些安排cron作业的示例。

| **安排** | **安排值** |
| --- | --- |
| `5 0 * 8 *` | 在八月的00:05执行。 |
| `5 4 * * 6` | 在星期六的04:05执行。 |
| `0 22 * * 1-5` | 在星期一至星期五的22:00执行。 |

如果你一时无法完全掌握这些内容也没关系。你可以通过[crontab guru][54]网站练习并生成cron时间表。

#### 如何设置一个cron作业

在本节中，我们将看看如何用cron作业安排一个简单的脚本。

1.  创建一个名为`date-script.sh`的脚本，该脚本打印系统日期和时间，并将其附加到一个文件中。脚本如下所示：

```
#!/bin/bash

echo `date` >> date-out.txt
```

2\. 通过给予执行权，使脚本可执行。

```
chmod 775 date-script.sh
```

3\. 使用`crontab -e`将脚本添加到crontab中。

这里，我们安排它每分钟运行一次。

```
*/1 * * * * /bin/sh /root/date-script.sh
```

4\. 检查文件`date-out.txt`的输出。根据脚本，系统日期应该每分钟打印到该文件。

```
cat date-out.txt
# 输出
Wed 26 Jun 16:59:33 PKT 2024
Wed 26 Jun 17:00:01 PKT 2024
Wed 26 Jun 17:01:01 PKT 2024
Wed 26 Jun 17:02:01 PKT 2024
Wed 26 Jun 17:03:01 PKT 2024
Wed 26 Jun 17:04:01 PKT 2024
Wed 26 Jun 17:05:01 PKT 2024
Wed 26 Jun 17:06:01 PKT 2024
Wed 26 Jun 17:07:01 PKT 2024
```

**如何排查crons问题**

Crons非常有用，但它们可能并不总是按预期工作。幸运的是，有一些有效的方法可以用来排查它们的问题。

**1\. 检查时间表。**

首先，你可以尝试验证为cron设置的时间表。你可以使用上述部分中看到的语法来进行验证。

**2**. **检查cron日志。**

首先，你需要检查cron是否在预定时间运行。在Ubuntu中，你可以从位于`/var/log/syslog`的cron日志中进行验证。

如果在这些日志中有在正确时间的条目，说明cron已按你设置的时间表运行。

以下是我们的cron作业示例的日志。请注意第一个列，显示了时间戳。行末尾也提到了脚本的路径。第1、3和5行显示了脚本按预期运行。

**3\. 将 cron 输出重定向到文件**

您可以将 cron 的输出重定向到文件，并检查该文件以查看是否有可能的错误。

```
# 将 cron 输出重定向到文件
* * * * * sh /path/to/script.sh &> log_file.log
```

### 8.7. Linux 网络基础

Linux 提供了一些命令来查看网络相关信息。在本节中，我们将简要讨论一些命令。

#### 使用 `ifconfig` 查看网络接口

`ifconfig` 命令提供有关网络接口的信息。以下是一个示例输出：

```
ifconfig

# 输出
eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:4e:66:a1  txqueuelen 1000  (以太网)
        RX packets 1024  bytes 654321 (654.3 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 512  bytes 123456 (123.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<主机>
        loop  txqueuelen 1000  (本地环回)
        RX packets 256  bytes 20480 (20.4 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 256  bytes 20480 (20.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

`ifconfig` 命令的输出显示了系统上配置的网络接口，以及 IP 地址、MAC 地址、数据包统计信息等详细信息。

这些接口可以是物理设备或虚拟设备。

要提取 IPv4 和 IPv6 地址，您可以分别使用 `ip -4 addr` 和 `ip -6 addr`。

**使用** `netstat` **查看网络活动**

`netstat` 命令通过提供以下信息来显示网络活动和统计信息：

以下是在命令行中使用 `netstat` 命令的一些示例：

1.  **显示所有监听和非监听套接字：**
    
    ```
     netstat -a
    ```
    
2.  **仅显示监听端口：**
    
    ```
     netstat -l
    ```
    
3.  **显示网络统计信息：**
    
    ```
     netstat -s
    ```
    
4.  **显示路由表：**
    
    ```
     netstat -r
    ```
    
5.  **显示 TCP 连接：**
    
    ```
     netstat -t
    ```
    
6.  **显示 UDP 连接：**
    
    ```
     netstat -u
    ```
    
7.  **显示网络接口：**
    
    ```
     netstat -i
    ```
    
8.  **显示连接的 PID 和程序名称：**
    
    ```
     netstat -p
    ```
    
9.  **显示特定协议（例如 TCP）的统计信息：**
    
    ```
     netstat -st
    ```
    
10.  **显示扩展信息：**
    
    ```
    netstat -e
    ```
    

#### 使用 `ping` 检查两个设备之间的网络连接

`ping` 用于测试两个设备之间的网络连接。它向目标设备发送 ICMP 数据包并等待响应。

```
ping google.com
```

`ping` 测试是否在不中断前收到响应。

```
ping google.com
PING google.com (142.250.181.46) 56(84) bytes of data.
64 bytes from fjr04s06-in-f14.1e100.net (142.250.181.46): icmp_seq=1 ttl=60 time=78.3 ms
64 bytes from fjr04s06-in-f14.1e100.net (142.250.181.46): icmp_seq=2 ttl=60 time=141 ms
64 bytes from fjr04s06-in-f14.1e100.net (142.250.181.46): icmp_seq=3 ttl=60 time=205 ms
64 bytes from fjr04s06-in-f14.1e100.net (142.250.181.46): icmp_seq=4 ttl=60 time=100 ms
^C
--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3001ms
rtt min/avg/max/mdev = 78.308/131.053/204.783/48.152 ms
```

您可以使用 `Ctrl + C` 停止响应。

#### 使用 `curl` 命令测试端点

`curl` 命令代表“客户端 URL”。它用于向服务器传输数据或从服务器传输数据。它还可以用于测试 API 端点，有助于排查系统和应用错误。

例如，您可以使用 [`http://www.official-joke-api.appspot.com/`][55] 来实验 `curl` 命令。

-   不带任何选项的 `curl` 命令默认使用 GET 方法。

```
curl http://www.official-joke-api.appspot.com/random_joke
{"type":"general",
"setup":"What did the fish say when it hit the wall?","punchline":"Dam.","id":1}
```

-   `curl -o` 将输出保存到指定文件。

```
curl -o random_joke.json http://www.official-joke-api.appspot.com/random_joke
# 将输出保存到 random_joke.json
```

-   `curl -I` 仅提取头信息。

```
curl -I http://www.official-joke-api.appspot.com/random_joke
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Vary: Accept-Encoding
X-Powered-By: Express
Access-Control-Allow-Origin: *
ETag: W/"71-NaOSpKuq8ChoxdHD24M0lrA+JXA"
X-Cloud-Trace-Context: 2653a86b36b8b131df37716f8b2dd44f
Content-Length: 113
Date: Thu, 06 Jun 2024 10:11:50 GMT
Server: Google Frontend
```

### 8.8. Linux 故障排除：工具和技术

#### 使用 `sar` 命令生成系统活动报告

Linux 中的 `sar` 命令是一种强大的工具，用于收集、报告和保存系统活动信息。它是 `sysstat` 软件包的一部分，广泛用于监控系统性能。

安装完成后，用 `sudo systemctl start sysstat` 启动服务。

使用 `sudo systemctl status sysstat` 验证状态。

状态变为活跃后，系统会开始收集各种统计信息，您可以访问和分析这些历史数据。我们很快会详细说明。

`sar` 命令的语法如下：

```
sar [options] [interval] [count]
```

例如，`sar -u 1 3` 将每秒显示一次 CPU 利用率统计，连续显示三次。

```
sar -u 1 3
# 输出
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:09:26        CPU     %user     %nice   %system   %iowait    %steal     %idle
19:09:27        all      3.78      0.00      2.18      0.08      0.00     93.96
19:09:28        all      4.02      0.00      2.01      0.08      0.00     93.89
19:09:29        all      6.89      0.00      2.10      0.00      0.00     91.01
Average:        all      4.89      0.00      2.10      0.06      0.00     92.95
```

以下是一些常见的使用案例和如何使用 `sar` 命令的示例。

`sar` 可以用于多种用途：

##### 1\. 内存使用情况

要检查内存使用情况（空闲和已用），使用：

```
sar -r 1 3

Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:10:46    kbmemfree   kbavail kbmemused  %memused kbbuffers  kbcached  kbcommit   %commit  kbactive   kbinact   kbdirty
19:10:47      4600104   8934352   5502124     36.32    375844   4158352  15532012     65.99   6830564   2481260       264
19:10:48      4644668   8978940   5450252     35.98    375852   4165648  15549184     66.06   6776388   2481284        36
19:10:49      4646548   8980860   5448328     35.97    375860   4165648  15549224     66.06   6774368   2481292       116
Average:      4630440   8964717   5466901     36.09    375852   4163216  15543473     66.04   6793773   2481279       139
```

此命令每秒显示一次内存统计，连续显示三次。

##### 2\. 交换空间利用率

要查看交换空间利用率统计，使用：

```
sar -S 1 3

sar -S 1 3
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:11:20    kbswpfree kbswpused  %swpused  kbswpcad   %swpcad
19:11:21      8388604         0      0.00         0      0.00
19:11:22      8388604         0      0.00         0      0.00
19:11:23      8388604         0      0.00         0      0.00
Average:      8388604         0      0.00         0      0.00
```

此命令有助于监控交换空间使用情况，对于物理内存不足的系统尤为重要。

##### 3\. I/O 设备负载

要报告块设备和块设备分区的活动情况：

```
sar -d 1 3
```

此命令提供关于数据传输到和从块设备的详细统计信息，对于诊断 I/O 瓶颈非常有用。

##### 5\. 网络统计

要查看网络统计信息，例如网络接口接收（发送）的数据包数量：

```
sar -n DEV 1 3
# -n DEV告诉sar报告网络设备接口
sar -n DEV 1 3
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:12:47        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s   %ifutil
19:12:48           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
19:12:48       enp2s0      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
19:12:48       wlp3s0     10.00      3.00      1.83      0.37      0.00      0.00      0.00      0.00
19:12:48    br-5129d04f972f      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
.
.
.

Average:        IFACE   rxpck/s   txpck/s    rxkB/s    txkB/s   rxcmp/s   txcmp/s  rxmcst/s   %ifutil
Average:           lo      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
Average:       enp2s0      0.00      0.00      0.00      0.00      0.00      0.00      0.00      0.00
...output truncated...
```

这每秒显示一次网络统计，共三秒，有助于监控网络流量。

##### 6\. 历史数据

回想一下，我们之前安装了 `sysstat` 软件包并运行了该服务。请按照以下步骤启用和访问历史数据。

1.  **启用数据收集：** 编辑 `sysstat` 配置文件以启用数据收集。
    
    ```
     sudo nano /etc/default/sysstat
    ```
    
    将 `ENABLED="false"` 改为 `ENABLED="true"`。
    
    ```
     vim /etc/default/sysstat
     #
     # /etc/init.d/sysstat, /etc/cron.d/sysstat 和 /etc/cron.daily/sysstat 文件的默认设置
     #
    
     # sadc 应该收集系统活动信息吗？有效值是 "true" 和 "false"。请不要放置其他值，
     # 因为它们将被 debconf 覆盖！
     ENABLED="true"
    ```
    
2.  **配置数据收集间隔：** 编辑 cron 作业配置以设置数据收集间隔。
    
    ```
     sudo nano /etc/cron.d/sysstat
    ```
    
    默认情况下，它每 10 分钟收集一次数据。您可以通过修改 cron 作业计划来调整间隔。相关文件将存储在 `/var/log/sysstat` 文件夹中。
    
3.  **查看历史数据：** 使用 `sar` 命令查看历史数据。例如，要查看当日的 CPU 使用情况：
    
    ```
     sar -u
    ```
    
    要查看特定日期的数据：
    
    ```
     sar -u -f /var/log/sysstat/sa<DD>
    ```
    
    将 `<DD>` 替换为您想查看数据的月份中的一天。
    
    在下面的命令中，`/var/log/sysstat/sa04` 提供当前月份第 4 天的统计数据。
    

```
sar -u -f /var/log/sysstat/sa04
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

15:20:49     LINUX RESTART    (12 CPU)

16:13:30     LINUX RESTART    (12 CPU)
```


##### 7\. 实时 CPU 中断

要观察 CPU 每秒处理的实时中断数量，请使用以下命令：

```
sar -I SUM 1 3

# 输出
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:14:22         INTR    intr/s
19:14:23          sum   5784.00
19:14:24          sum   5694.00
19:14:25          sum   5795.00
平均:             sum   5757.67
```

此命令有助于监控 CPU 处理中断的频率，这对于实时性能调优非常重要。

这些示例展示了如何使用 `sar` 监控系统性能的各个方面。定期使用 `sar` 可以帮助识别系统瓶颈，确保应用程序高效运行。

### 8.9. 服务器的一般故障排除策略

**为什么需要了解监控？**

系统监控是系统管理的重要方面。关键应用程序需要高度的主动性来防止故障和减少停机影响。

Linux 提供了非常强大的工具来评估系统健康状况。在本节中，您将学习使用各种方法来检查系统的健康状况并识别瓶颈。

#### 查找负载平均值和系统正常运行时间

系统重启可能会发生，这有时会弄乱一些配置。要检查机器的运行时间，可以使用命令：`uptime`。除了正常运行时间，该命令还显示负载平均值。

```
[user@host ~]$ uptime 19:15:00 up 1:04, 0 users, load average: 2.92, 4.48, 5.20
```

负载平均值是系统在最近的 1、5 和 15 分钟内的负载情况。快速一瞥即可判断系统负载是随着时间增加还是减少。

注意：理想的 CPU 队列是 `0`。这只有在没有等待队列的情况下才可能。

每个 CPU 的负载可以通过将负载平均值除以可用的总 CPU 数来计算。

要查找 CPU 数量，可以使用命令 `lscpu`。

```
lscpu
# 输出
Architecture:            x86_64
  CPU 操作模式:        32 位, 64 位
  地址大小:         48 位物理地址, 48 位虚拟地址
  字节顺序:            小端
CPU(s):                  12
  在线 CPU 列表:   0-11
.
.
.
输出省略
```

如果负载平均值上升且未减少，则表示 CPU 过载。某些进程卡住了或存在内存泄漏。

#### 计算可用内存

有时，高内存使用率可能会导致问题。要检查可用内存和已使用的内存，可以使用 `free` 命令。

```
free -mh
# 输出
               总计        已用        可用      共享  buff/cache   可用
Mem:            14Gi       3.5Gi       7.7Gi       109Mi       3.2Gi        10Gi
Swap:          8.0Gi          0B       8.0Gi
```

#### 计算磁盘空间

确保系统健康，不能忘记磁盘空间。要列出所有可用的挂载点及其各自的使用百分比，请使用以下命令。理想情况下，磁盘空间的使用率不应超过 80%。

`df` 命令提供详细的磁盘空间信息。

```
df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           1.5G  2.4M  1.5G   1% /run
/dev/nvme0n1p2  103G   34G   65G  35% /
tmpfs           7.3G   42M  7.2G   1% /dev/shm
tmpfs           5.0M  4.0K  5.0M   1% /run/lock
efivarfs        246K   93K  149K  39% /sys/firmware/efi/efivars
/dev/nvme0n1p3  130G   47G   77G  39% /home
/dev/nvme0n1p1  511M  6.1M  505M   2% /boot/efi
tmpfs           1.5G  140K  1.5G   1% /run/user/1000
```

#### 确定进程状态

进程状态可以监控，以查看是否有高内存或 CPU 使用率的卡住进程。

我们之前看到，`ps` 命令提供了关于进程的有用信息。查看 `CPU` 和 `MEM` 列。

```
[user@host ~]$ ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
 runner         1  0.1  0.0 1535464 15576 ?       S  19:18   0:00 /inject/init
 runner        14  0.0  0.0  21484  3836 pts/0    S   19:21   0:00 bash --norc
 runner        22  0.0  0.0  37380  3176 pts/0    R+   19:23   0:00 ps aux
```

#### 实时系统监控

实时监控提供实时系统状态的窗口。

您可以使用的一个实用程序是 `top` 命令。

`top` 命令显示系统进程的动态视图，显示一个摘要头，后跟一个进程或线程列表。与其静态的对应命令 `ps` 不同，`top` 会不断刷新系统统计信息。

使用 `top`，您可以在一个紧凑的窗口中看到组织良好的详细信息。`top` 附带许多标志、快捷键和高亮方法。

您还可以使用 `top` 命令终止进程。为此，请按 `k`，然后输入进程 ID。

#### 解释日志

系统和应用程序日志携带了大量关于系统经历的信息。它们包含指向错误的有用信息和错误代码。如果在日志中搜索错误代码，可以大大减少问题识别和修复时间。

#### 网络端口分析

网络方面不能忽视，因为网络故障是常见的，可能会影响系统和流量。常见的网络问题包括端口耗尽、端口阻塞、未释放的资源等。

部分端口状态的简要说明如下：

| **状态** | **描述** |
| --- | --- |
| LISTEN | 表示正在等待来自任何远程 TCP 和端口的连接请求的端口。 |
| ESTABLISHED | 表示打开的连接，接收的数据可以传递到目的地。 |
| TIME WAIT | 表示等待时间以确保其连接终止请求的确认。 |
| FIN WAIT2 | 表示等待来自远程 TCP 的连接终止请求。 |

让我们探讨如何在 Linux 中分析与端口相关的信息。

**端口范围：** 系统中定义了端口范围，并且范围可以相应地增加/减少。在下面的示例中，范围是从 `15000` 到 `65000`，总共提供了 `50000`（65000 - 15000）个可用端口。如果使用的端口达到或超过此限制，则存在问题。

```
[user@host ~]$ /sbin/sysctl net.ipv4.ip_local_port_range
net.ipv4.ip_local_port_range = 15000    65000
```

日志中报告的此类错误可能是 `Failed to bind to port` 或 `Too many connections`。

#### 识别丢包

在系统监控中，我们需要确保出入通信是完整的。

一个有用的命令是 `ping`。`ping` 会命中目标系统并带回响应。注意最后几行统计数据，这些数据显示丢包百分比和时间。

```
# ping 目标 IP
[user@host ~]$ ping 10.13.6.113
 PING 10.13.6.141 (10.13.6.141) 56(84) bytes of data.
 64 bytes from 10.13.6.113: icmp_seq=1 ttl=128 time=0.652 ms
 64 bytes from 10.13.6.113: icmp_seq=2 ttl=128 time=0.593 ms
 64 bytes from 10.13.6.113: icmp_seq=3 ttl=128 time=0.478 ms
 64 bytes from 10.13.6.113: icmp_seq=4 ttl=128 time=0.384 ms
 64 bytes from 10.13.6.113: icmp_seq=5 ttl=128 time=0.432 ms
 64 bytes from 10.13.6.113: icmp_seq=6 ttl=128 time=0.747 ms
 64 bytes from 10.13.6.113: icmp_seq=7 ttl=128 time=0.379 ms
 ^C
 --- 10.13.6.113 ping statistics ---
 7 packets transmitted, 7 received,0% packet loss, time 6001ms
 rtt min/avg/max/mdev = 0.379/0.523/0.747/0.134 ms
```

也可以使用 `tcpdump` 在运行时捕获数据包。我们稍后再详细讨论。

#### 收集问题的事后分析统计数据

始终收集某些有助于后期确定根本原因的统计数据是一个好习惯。通常，在系统重启或服务重启后，我们会丢失先前的系统快照和日志。

以下是一些捕获系统快照的方法。

-   **日志备份**

在进行任何更改之前，将日志文件复制到其他位置。这对于理解问题发生时系统的状态是至关重要的。有时，日志文件是了解过去系统状态的唯一窗口，因为其他运行时统计数据已丢失。

-   **TCP Dump**

Tcpdump 是一个命令行工具，可以让你捕获和分析进出网络的流量。它主要用于帮助排除网络问题。如果你觉得系统流量受到了影响，可以按如下方式捕捉 `tcpdump`：

```
sudo tcpdump -i any -w

# 其中，
# -i any 捕获所有接口的流量
# -w 指定输出文件名

# 几分钟后停止命令，因为文件大小可能会增加
# 使用 .pcap 文件扩展名
```

一旦捕获了 `tcpdump`，可以使用 Wireshark 等工具直观分析流量。

### 结论

感谢你阅读本书至此。如果你觉得有帮助，请考虑与他人分享。

本书并未在此结束。我将继续改进并添加新内容。如果你发现任何问题或希望提出改进建议，[随时可以提交 PR/Issue。][56]

**保持联系，继续你的学习旅程！**

你的 Linux 学习之旅不必在此结束。保持联系并提升你的技能：

1.  **在社交媒体上关注我**:
    
    -   [X][57]: 我在那里分享有用的短内容。我的 DM 始终开放。
        
    -   [LinkedIn][58]: 我在 LinkedIn 上分享技术文章和帖子。可以在 LinkedIn 上推荐我并在相关技能上支持我。
        
2.  **获得独家内容访问权**: 获取一对一帮助和独家内容，请点击 [这里][59]。
    

我的 [文章][60] 和本书一样，都是我提升内容可访问性的一部分。这本书将永远免费。如果你喜欢我的工作并希望激励我，可以考虑 [给我买杯咖啡][61]。

再次感谢，祝学习愉快！

---

![Zaira Hira](https://cdn.hashnode.com/res/hashnode/image/upload/v1720621509664/nj6hWYEsR.png)

将复杂的话题变得易于理解。

---

如果你读到这里，感谢作者，表示你的关心。说声谢谢。

免费学习编程。freeCodeCamp 的开源课程已帮助超过 40,000 人获得开发人员职位。[开始学习][62]

[1]: #heading-part-1-introduction-to-linux
[2]: #heading-11-getting-started-with-linux
[3]: #heading-part-2-introduction-to-bash-shell-and-system-commands
[4]: #heading-21-getting-started-with-the-bash-shell
[5]: #heading-22-command-structure
[6]: #heading-23-bash-commands-and-keyboard-shortcuts
[7]: #heading-24-identifying-yourself-the-whoami-command
[8]: #heading-part-3-understanding-your-linux-system
[9]: #heading-31-discovering-your-os-and-specs
[10]: #heading-part-4-managing-files-from-the-command-line
[11]: #heading-41-the-linux-file-system-hierarchy
[12]: #heading-42-navigating-the-linux-file-system
[13]: #heading-43-managing-files-and-directories
[14]: #heading-45-basic-commands-for-viewing-files
[15]: #heading-part-5-the-essentials-of-text-editing-in-linux
[16]: #heading-51-mastering-vim-the-complete-guide
[17]: #heading-52-mastering-nano
[18]: #heading-part-6-bash-scripting
[19]: #heading-61-definition-of-bash-scripting
[20]: #heading-62-advantages-of-bash-scripting
[21]: #heading-63-overview-of-bash-shell-and-command-line-interface
[22]: #heading-64-how-to-create-and-execute-bash-scripts
[23]: #heading-65-bash-scripting-basics
[24]: #heading-part-7-managing-software-packages-in-linux
[25]: #heading-71-packages-and-package-management
[26]: #heading-72-installing-a-package-via-command-line
[27]: #heading-73-installing-a-package-via-an-advanced-graphical-method-synaptic
[28]: #heading-74-installing-downloaded-packages-from-a-website
[29]: #heading-part-8-advanced-linux-topics
[30]: #heading-81-user-management
[31]: #heading-82-connecting-to-remote-servers-via-ssh
[32]: #heading-83-advanced-log-parsing-and-analysis
[33]: #heading-84-managing-linux-processes-via-command-line
[34]: #heading-85-standard-input-and-output-streams-in-linux
[35]: #heading-86-automation-in-linux-automate-tasks-with-cron-jobs
[36]: #heading-87-linux-networking-basics
[37]: #heading-88-linux-troubleshooting-tools-and-techniques
[38]: #heading-89-general-troubleshooting-strategy-for-servers
[39]: #heading-conclusion
[40]: https://github.com/torvalds/linux
[41]: https://upload.wikimedia.org/wikipedia/commons/1/1b/Linux_Distribution_Timeline.svg
[42]: https://ubuntu.com/
[43]: https://linuxmint.com/
[44]: https://www.archlinux.org/
[45]: https://manjaro.org/
[46]: https://www.kali.org/
[47]: https://ubuntu.com/download/desktop
[48]: https://rufus.ie/
[49]: https://www.virtualbox.org/
[50]: https://multipass.run/
[51]: https://www.vmware.com/content/vmware/vmware-published-sites/us/products/workstation-player.html.html
[52]: https://replit.com/
[53]: https://jslinux.org/
[54]: https://crontab.guru/
[55]: http://www.official-joke-api.appspot.com/
[56]: https://github.com/zairahira/Mastering-Linux-Handbook
[57]: https://twitter.com/hira_zaira
[58]: https://www.linkedin.com/in/zaira-hira/
[59]: https://buymeacoffee.com/zairah/extras
[60]: https://www.freecodecamp.org/news/author/zaira/
[61]: https://buymeacoffee.com/zairah
[62]: https://www.freecodecamp.org/learn/


