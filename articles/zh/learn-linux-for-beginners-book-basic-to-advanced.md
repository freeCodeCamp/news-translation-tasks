---
title: "面向初学者的 Linux 学习：从基础到高级技巧 [完整书籍]"
date: 2024-08-15T09:05:25.577Z
author: Zaira Hira
authorURL: https://www.freecodecamp.org/news/author/zaira/
originalURL: https://www.freecodecamp.org/news/learn-linux-for-beginners-book-basic-to-advanced/
translator: ""
reviewer: "miyaliu66"
---

学习 Linux 是科技行业中最有价值的技能之一。它能帮助你更快、更高效地完成任务。世界上许多强大的服务器和超级计算机都运行在 Linux 上。

<!-- more -->

学习 Linux 不仅能提升你在当前职位的能力，还能帮助你转职到其他科技领域，例如 DevOps、网络安全和云计算。

在本手册中，你将学习到 Linux 命令行的基础知识，然后过渡到更高级的话题，如 shell 脚本编写和系统管理。无论你是 Linux 新手还是已经使用多年，本书都能为你提供有价值的内容。

重要提示：本书中的所有示例均在 Ubuntu 22.04.2 LTS (Jammy Jellyfish) 中演示。大多数命令行工具在其他发行版中大同小异。然而，如果你使用的是其他 Linux 发行版，一些图形用户界面 (GUI) 应用程序和命令可能会有所不同。

## 目录

-   [第 1 部分: Linux 简介][1]
    
    -   [1.1. Linux 入门][2]
-   [第 2 部分: Bash Shell 和系统命令简介][3]
    
    -   [2.1. Bash shell 入门][4]
        
    -   [2.2. 命令结构][5]
        
    -   [2.3. Bash 命令和键盘快捷键][6]
        
    -   [2.4. 识别你自己：`whoami` 命令][7]
        
-   [第 3 部分: 认识你的 Linux 系统][8]
    
    -   [3.1. 发现你的操作系统和规格][9]
-   [第 4 部分: 从命令行管理文件][10]
    
    -   [4.1. Linux 文件系统层次结构][11]
        
    -   [4.2. 导航 Linux 文件系统][12]
        
    -   [4.3. 管理文件和目录][13]
        
    -   [4.5. 查看文件的基本命令][14]
        
-   [第 5 部分: Linux 文本编辑基础][15]
    
    -   [5.1. 精通 Vim: 完整指南][16]
        
    -   [5.2. 精通 Nano][17]
        
-   [第 6 部分: Bash 脚本编写][18]
    
    -   [6.1. Bash 脚本编写定义][19]
        
    -   [6.2. Bash 脚本编写的优势][20]
        
    -   [6.3. Bash Shell 和命令行界面概述][21]
        
    -   [6.4. 如何创建和执行 Bash 脚本][22]
        
    -   [6.5. Bash 脚本基础][23]
        
-   [第 7 部分: 在 Linux 中管理软件包][24]
    
    -   [7.1. 软件包和软件包管理][25]
        
    -   [7.2. 通过命令行安装软件包][26]
        
    -   [7.3. 通过高级图形方法安装软件包 – Synaptic][27]
        
    -   [7.4. 安装从网站下载的软件包][28]
        
-   [第 8 部分: 高级 Linux 话题][29]
    
    -   [8.1. 用户管理][30]
        
    -   [8.2 通过 SSH 连接到远程服务器][31]
        
    -   [8.3. 高级日志解析和分析][32]
        
    -   [8.4. 通过命令行管理 Linux 进程][33]
        
    -   [8.5. Linux 中的标准输入和输出流][34]
        
    -   [8.6 Linux 中的自动化 – 使用 Cron Jobs 自动化任务][35]
        
    -   [8.7. Linux 网络基础][36]
        
    -   [8.8. Linux 故障排除：工具和技术][37]
        
-   [结论][39]
    

## 第 1 部分: Linux 简介

### 1.1. Linux 入门

#### 什么是 Linux？

Linux 是一个开源操作系统，基于 Unix 操作系统。它由 Linus Torvalds 在 1991 年创建。

开源意味着操作系统的源代码是公开的。这允许任何人修改原始代码、自定义它，并将新的操作系统分发给潜在用户。

#### 为什么你应该学习 Linux？

在当今的数据中心环境中，Linux 和 Microsoft Windows 是主要的竞争者，而 Linux 占据了很大份额。

以下是学习 Linux 的几个有力理由：

-   鉴于 Linux 托管的普遍性，你的应用程序很有可能会托管在 Linux 上。因此，作为开发人员，学习 Linux 变得越来越有价值。
    
-   随着云计算成为常态，你的云实例很有可能依赖于 Linux。
    
-   Linux 是许多物联网 (IoT) 和移动应用操作系统的基础。
    
-   在 IT 领域，掌握 Linux 技能有很多机会。
    

#### Linux 是开源操作系统意味着什么？

首先，什么是开源？开源软件是指其源代码是开放的，允许任何人使用、修改和分发。

每当源代码被创建时，它会自动被视为受版权保护，并且其分发由版权持有者通过软件许可证管理。

与开源相反，专有或闭源软件限制访问其源代码。只有创建者可以查看、修改或分发它。

这种协作方法导致了 Linux 在服务器、桌面、嵌入式系统和移动设备上的广泛采用。

Linux 开源的最有趣之处在于，任何人都可以根据自己的具体需求定制操作系统，而不会受到专有限制。

Chromebooks 使用的 Chrome OS 基于 Linux。全球许多智能手机所使用的 Android 也基于 Linux。

**什么是 Linux 内核？**

内核是操作系统的核心组件，负责管理计算机及其硬件操作。它处理内存操作和 CPU 时间。

内核通过进程间通信和系统调用在应用程序与硬件级数据处理之间充当桥梁。

当操作系统启动时，内核首先加载到内存中，并一直保留到系统关闭。它负责磁盘管理、任务管理和内存管理等任务。

![显示内核与应用程序和操作系统交互的 Linux 内核布局](https://cdn.hashnode.com/res/hashnode/image/upload/v1719844849011/f4bb226e-f319-4cb5-bfc9-c1a80401123e.png)

如果你对 Linux 内核的样子感到好奇，[这里][40] 是 GitHub 链接。

#### 什么是 Linux 发行版？

现在你知道你可以重复使用 Linux 内核代码，对其进行修改，并创建一个新的内核。你还可以结合不同的实用程序和软件来创建一个完全新的操作系统。

Linux 发行版或发行版是一种 Linux 操作系统版本，包括 Linux 内核、系统实用程序和其他软件。作为开源软件，Linux 发行版是多个独立开源开发社区之间的协作努力。

**发行版 "派生" 的含义是什么？** 当你说一个发行版是 "派生" 自另一个发行版时，较新的发行版是在原始发行版的基础上构建的。这种派生可以包括使用相同的软件包管理系统（稍后会详细介绍），内核版本，有时甚至使用相同的配置工具。

今天，有成千上万的 Linux 发行版可供选择，它们在选择和支持其发行版所提供的软件方面有着不同的目标和标准。

发行版彼此不同，但它们通常具有几个共同特点：

-   一个发行版包含一个 Linux 内核。
    
-   它支持用户空间程序。
    
-   一个发行版可以是小型和单一用途的，或者包含数千个开源程序。
    
-   应提供一种安装和更新发行版及其组件的方法。
    

如果你查看 [Linux 发行版时间轴][41]，你会看到两个主要发行版：Slackware 和 Debian。几个发行版都是从它们派生出来的。例如，Ubuntu 和 Kali 都是从 Debian 派生出来的。

**派生的好处是什么？** 派生有很多好处。派生的发行版可以利用母发行版的稳定性、安全性和庞大的软件仓库。

在现有基础上进行构建时，开发人员可以将全部精力集中在新发行版的专用功能上。使用派生发行版的用户可以受益于母发行版现有的文档、社区支持和资源。

一些流行的 Linux 发行版有：

1.  **Ubuntu**：最广泛使用和最受欢迎的 Linux 发行版之一。它用户友好，推荐给初学者。 [在这里了解更多关于 Ubuntu 的信息][42]。
    
2.  **Linux Mint**：基于 Ubuntu，Linux Mint 提供用户友好的体验，注重多媒体支持。 [在这里了解更多关于 Linux Mint 的信息][43]。
    
3.  **Arch Linux**：在有经验的用户中很受欢迎，Arch 是一个轻量级和灵活的发行版，旨在为喜好 DIY 方法的用户提供服务。 [在这里了解更多关于 Arch Linux 的信息][44]。
    
4.  **Manjaro**：基于 Arch Linux，Manjaro 提供用户友好的体验，带有预装的软件和易于系统管理的工具。 [在这里了解更多关于 Manjaro 的信息][45]。
    
5.  **Kali Linux**：Kali Linux 提供一个全面的安全工具套件，主要集中在网络安全和黑客方面。 [在这里了解更多关于 Kali Linux 的信息][46]。
    

#### 如何安装和访问 Linux

最好的学习方法是边学边做。在本节中，我们将学习如何在你的机器上安装 Linux，以便你可以跟着学习。你也将学习如何在 Windows 机器上访问 Linux。

我建议你按照本节提到的任何一种方法获取 Linux 访问权限，以便你可以跟着学习。

##### 将 Linux 作为主要操作系统进行安装

将 Linux 作为主要操作系统进行安装是使用 Linux 最有效的方法，因为你可以使用机器的全部能力。

在本节中，你将学习如何安装 Ubuntu，这是最受欢迎的 Linux 发行版之一。目前我省略了其他发行版，因为我想保持事情的简单性。一旦你熟悉了 Ubuntu，你可以随时探索其他发行版。

就是这样！现在您可以安装应用程序并自定义您的桌面了。

![Ubuntu 22.04.4 LTS 桌面屏幕](https://cdn.hashnode.com/res/hashnode/image/upload/v1719304547967/d150c6eb-d04e-47e0-8473-d1a837df45c4.png)

对于高级安装，您可以探索以下主题：

-   磁盘分区
    
-   设置交换内存以启用休眠
    

**访问终端**

本手册的重要部分是学习终端，您将在这里运行所有命令并看到魔法发生。您可以按下“windows”键并输入“terminal”来搜索终端。您可以将终端固定在停靠栏中，方便访问其他应用程序。

![“terminal” 的搜索结果](https://cdn.hashnode.com/res/hashnode/image/upload/v1719305113272/4dd30c5e-da73-4cd4-86bb-7dcd8cd2084c.png)

> 💡 打开终端的快捷键是 `ctrl+alt+t`

您还可以从文件夹内打开终端。右键单击您所在的位置，然后点击“在终端中打开”。这将打开该路径下的终端。

![通过右键菜单打开终端](https://cdn.hashnode.com/res/hashnode/image/upload/v1719305289021/284a4a53-2d1a-4eaa-925a-1002a32c1dce.png)

##### 如何在 Windows 机器上使用 Linux

有时您可能需要同时运行 Linux 和 Windows。幸运的是，有一些方法可以让您最好地利用这两种操作系统，而不必为每个操作系统准备不同的计算机。

在本节中，您将探索几种在 Windows 机器上使用 Linux 的方法。其中一些是基于浏览器或云的，不需要在使用前安装任何操作系统。

**选项1：“双启动” Linux + Windows** 通过双启动，您可以在计算机上安装 Linux 和 Windows，让您在启动时选择使用哪个操作系统。

这需要分区您的硬盘并在单独的分区上安装 Linux。使用这种方法，您一次只能使用一个操作系统。

**选项2：使用 Windows Subsystem for Linux (WSL)** Windows Subsystem for Linux 提供了一个兼容层，让您可以在 Windows 上原生运行 Linux 二进制可执行文件。

使用 WSL 有一些优势。WSL 的设置简单且不耗时。与虚拟机相比，它更加轻量化，因为虚拟机需要分配主机资源。您不需要为 Linux 机器安装任何 ISO 或虚拟光盘映像，这些文件往往很大。您可以并排使用 Windows 和 Linux。

**如何安装 WSL2**

首先，在设置中启用 Windows Subsystem for Linux 选项。

-   进入开始菜单。搜索“启用或关闭 Windows 功能”。
    
-   如果“Windows Subsystem for Linux”选项未选中，请选中。
    
    ![在 Windows 功能中选中“Windows Subsystem for Linux”选项](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306102095/84f23bae-faa5-4ece-a9b6-e40f8789a061.png)
    
-   接下来，打开命令提示符并输入安装命令。
    
-   以管理员身份打开命令提示符：
    
    ![右键单击应用程序并选择“以管理员身份运行”，以管理员身份运行命令提示符](https://cdn.hashnode.com/res/hashnode/image/upload/v1720451480640/6052c9b4-cf07-47e0-ae89-18c3a2d3e385.png)
    
-   运行以下命令：
    

```
wsl --install
```

这是输出结果：

![Ubuntu 下载进度](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306131053/b7272031-ddb7-4e04-8d7b-bafc0911da04.png)

注意：默认情况下，将安装 Ubuntu。

![使用 WSL 默认安装的 Ubuntu](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306144861/a01f95df-1d95-4b79-bff9-08759be0d3dc.png)

-   安装完成后，您需要重启 Windows 机器。所以，重新启动您的 Windows 机器。

重启后，您可能会看到这样一个窗口：

![重启后显示的窗口](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306157704/15620fbe-59d1-40da-9cd6-119a1fab0802.png)

Ubuntu 安装完成后，系统会提示您输入用户名和密码。

![提示用户输入用户名和密码](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306167380/5e3058cd-b7a1-45b1-a16d-c23b5a451504.png)

就这样！您可以开始使用 Ubuntu 了。

通过在开始菜单中搜索来启动 Ubuntu。

![从开始菜单启动 Ubuntu](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306185110/77c17856-08ac-4ec7-9380-5b06f93be095.png)

这就是您的 Ubuntu 实例启动成功的样子。

![使用 WSL 成功安装的 Ubuntu](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306196320/13be3a71-5b40-440c-a6bf-d742e5b5934b.png)

**选项3：使用虚拟机 (VM)**

虚拟机 (VM) 是物理计算机系统的软件仿真。它允许您在单台物理机器上同时运行多个操作系统和应用程序。

您可以使用虚拟化软件（如 Oracle VirtualBox 或 VMware）在 Windows 环境中创建一个运行 Linux 的虚拟机。这允许您在 Windows 旁边运行 Linux 作为嘉宾操作系统。

Here are some of the common options available for virtualization:

-   [Oracle virtual box][49]
    
-   [Multipass][50]
    
-   [VMware workstation player][51]
    

**Option 4: Use a Browser-based Solution**

Browser-based solutions are particularly useful for quick testing, learning, or accessing Linux environments from devices that don't have Linux installed.

You can either use online code editors or web-based terminals to access Linux. Note that you usually don't have full administration privileges in these cases.

#### **Online code editors**

Online code editors offer editors with built-in Linux terminals. While their primary purpose is coding, you can also utilize the Linux terminal to execute commands and perform tasks.

[Replit][52] is an example of an online code editor, where you can write your code and access the Linux shell at the same time.

![Running scripts and a bash shell in Replit](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306257260/d85d5541-b78f-4c8b-99a8-dbd8c097f661.gif)

#### **Web-based Linux terminals:**

Online Linux terminals allow you to access a Linux command-line interface directly from your browser. These terminals provide a web-based interface to a Linux shell, enabling you to execute commands and work with Linux utilities.

One such example is [JSLinux][53]. The screenshot below shows a ready-to-use Linux environment:

![Using JSLinux to access Linux terminal](https://cdn.hashnode.com/res/hashnode/image/upload/v1719306276915/ddaabfc3-9a20-43b2-bedc-0af6875d2008.png)

**Option 5: Use a Cloud-based Solution**

Instead of running Linux directly on your Windows machine, you can consider using cloud-based Linux environments or virtual private servers (VPS) to access and work with Linux remotely.

Services like Amazon EC2, Microsoft Azure, or DigitalOcean provide Linux instances that you can connect to from your Windows computer. Note that some of these services offer free tiers, but they are not usually free in the long run.

## Part 2: Introduction to Bash Shell and System Commands

### 2.1. Getting Started with the Bash shell

#### Introduction to the bash shell

The Linux command line is provided by a program called the shell. Over the years, the shell program has evolved to cater to various options.

Different users can be configured to use different shells. But, most users prefer to stick with the current default shell. The default shell for many Linux distros is the GNU Bourne-Again Shell (`bash`). Bash is succeeded by the Bourne shell (`sh`).

To find out your current shell, open your terminal and enter the following command:

```
echo $SHELL
```

Command breakdown:

-   The `echo` command is used to print on the terminal.
    
-   The `$SHELL` is a special variable that holds the name of the current shell.
    

In my setup, the output is `/bin/bash`. This means that I am using the bash shell.

```
# output
echo $SHELL
/bin/bash
```

Bash is very powerful as it can simplify certain operations that are hard to accomplish efficiently with a GUI (or Graphical User Interface). Remember that most servers do not have a GUI, and it is best to learn to use the powers of a command line interface (CLI).

**Terminal vs Shell**

The terms "terminal" and "shell" are often used interchangeably, but they refer to different parts of the command-line interface.

The terminal is the interface you use to interact with the shell. The shell is the command interpreter that processes and executes your commands. You'll learn more about shells in Part 6 of the handbook.

#### What is a prompt?

When a shell is used interactively, it displays a `$` when it is waiting for a command from the user. This is called the shell prompt.

`[username@host ~]$`

If the shell is running as `root` (you'll learn more about the root user later on), the prompt is changed to `#`.

`[root@host ~]#`

### 2.2. Command Structure

A command is a program that performs a specific operation. Once you have access to the shell, you can enter any command after the `$` sign and see the output on the terminal.

Generally, Linux commands follow this syntax:

```
command [options] [arguments]
```

Here is the breakdown of the above syntax:

-   `command`: This is the name of the command you want to execute. `ls` (list), `cp` (copy), and `rm` (remove) are common Linux commands.
    
-   `[options]`: Options, or flags, often preceded by a hyphen (-) or double hyphen (--), modify the behavior of the command. They can change how the command operates. For example, `ls -a` uses the `-a` option to display hidden files in the current directory.
    
-   `[arguments]`: Arguments are the inputs for the commands that require one. These could be filenames, user names, or other data that the command will act upon. For example, in the command `cat access.log`, `cat` is the command and `access.log` is the input. As a result, the `cat` command displays the contents of the `access.log` file.
    

Options and arguments are not required for all commands. Some commands can be run without any options or arguments, while others might require one or both to function correctly. You can always refer to the command's manual to check the options and arguments it supports.

你可以通过 `man ls` 访问 `ls` 命令的手册页，效果如下：

![5b1232a6-8c0b-4a97-86f0-9f15f2e14ed7](https://cdn.hashnode.com/res/hashnode/image/upload/v1719312523336/5b1232a6-8c0b-4a97-86f0-9f15f2e14ed7.png)

手册页是一个快速访问文档的好方法。我强烈建议你查看你最常用的命令的手册页。

### 2.3. Bash 命令和快捷键

当你在终端时，你可以通过使用快捷键加快任务的完成速度。

以下是一些最常见的终端快捷键：

| 操作 | 快捷键 |
| --- | --- |
| 查找上一个命令 | 上箭头 |
| 跳到上一个单词的开头 | Ctrl+左箭头 |
| 清除从光标到命令行末尾的字符 | Ctrl+K |
| 补全命令、文件名和选项 | 按 Tab 键 |
| 跳到命令行的开头 | Ctrl+A |
| 显示以前的命令列表 | history |

### 2.4. 识别自己：`whoami` 命令

你可以使用 `whoami` 命令获取你登录的用户名。当你在不同用户之间切换并且想确认当前用户时，这个命令非常有用。

在 `$` 符号后，输入 `whoami` 并按回车。

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

你可以通过 `uname` 命令获取详细的系统信息。

当你提供 `-a` 选项时，它会打印所有的系统信息。

```
uname -a
# 输出
Linux zaira 6.5.0-21-generic #21~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Feb  9 13:32:52 UTC 2 x86_64 x86_64 x86_64 GNU/Linux
```

在上面的输出中，

- `Linux`：表示操作系统。
- `zaira`：表示机器的主机名。
- `6.5.0-21-generic #21~22.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Feb 9 13:32:52 UTC 2`：提供内核版本、构建日期和一些附加细节。
- `x86_64 x86_64 x86_64`：表示系统的架构。
- `GNU/Linux`：表示操作系统类型。

#### 使用 `lscpu` 命令查找 CPU 架构的详细信息

Linux 中的 `lscpu` 命令用于显示有关 CPU 架构的信息。当你在终端中运行 `lscpu` 时，它提供了如下详细信息：

- CPU 的架构（例如，x86\_64）
- CPU 操作模式（例如，32 位，64 位）
- 字节顺序（例如，小端序）
- CPU 数量等

让我们试试看：

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

这是大量的信息，但也很有用！记住你可以使用特定的标志来浏览相关信息。参见 `man lscpu` 查看命令手册。

## 第四部分：从命令行管理文件

### 4.1. Linux 文件系统层次结构

所有文件在 Linux 中都是存储在文件系统中的。它遵循倒树状结构，因为根在最上面。

`/` 是根目录，是文件系统的起点。根目录包含系统上的所有其他目录和文件。`/` 字符也作为路径名之间的目录分隔符。例如，`/home/alice` 构成了一个完整的路径。

下图显示了完整的文件系统层次结构。每个目录都有特定的用途。

请注意，这不是详尽的列表，不同的发行版可能有不同的配置。

![Linux 文件系统层次结构](https://cdn.hashnode.com/res/hashnode/image/upload/v1719322457140/02fdbf2c-f4fa-438b-af2f-c23f59f9ddf4.png)

下面是一个显示每个目录用途的表格：

| 位置 | 用途 |
| --- | --- |
| /bin | 基本命令二进制文件 |
| /boot | 启动加载器的静态文件，用于启动过程 |
| /etc | 特定于主机的系统配置 |
| /home | 用户主目录 |
| /root | 管理员 root 用户的主目录 |
| /lib | 基本共享库和内核模块 |
| /mnt | 临时挂载文件系统的挂载点 |
| /opt | 附加应用软件包 |
| /usr | 已安装的软件和共享库 |
| /var | 在启动之间也持久存在的可变数据 |
| /tmp | 所有用户可访问的临时文件 |

💡 **提示：** 你可以使用 `man hier` 命令了解更多关于文件系统的信息。

你可以使用 `tree -d -L 1` 命令检查你的文件系统。你可以修改 `-L` 标志来改变树的深度。

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


这个列表并不详尽，不同的发行版和系统可能有不同的配置。

### 4.2. 导航 Linux 文件系统

#### 绝对路径 vs 相对路径

绝对路径是从根目录到文件或目录的完整路径。它总是以 `/` 开头。例如，`/home/john/documents`。

另一方面，相对路径是从当前目录到目标文件或目录的路径。它不以 `/` 开头。例如，`documents/work/project`。

#### 使用 `pwd` 命令定位当前目录

在 Linux 文件系统中迷路很容易，特别是如果你是命令行的新手。你可以使用 `pwd` 命令来定位当前目录。

下面是一个例子：

```
pwd
# 输出
/home/zaira/scripts/python/free-mem.py
```

#### 使用 `cd` 命令更改目录

更改目录的命令是 `cd`，代表 "change directory"。你可以使用 `cd` 命令导航到不同的目录。

你可以使用相对路径或绝对路径。

例如，如果你想导航到以下文件结构（沿着红色路线）：

![示例文件结构](https://cdn.hashnode.com/res/hashnode/image/upload/v1719389950079/640cce46-6c52-4f38-9787-581747fb9798.png)

你当前位于 "home"，则命令如下：

```
cd home/bob/documents/work/project
```

其他一些常用的 `cd` 快捷命令有：

| 命令 | 描述 |
| --- | --- |
| `cd ..` | 返回上一级目录 |
| `cd ../..` | 返回上两级目录 |
| `cd` 或 `cd ~` | 返回主目录 |
| `cd -` | 返回上一个路径 |

### 4.3. 管理文件和目录

在处理文件和目录时，你可能需要复制、移动、删除和创建新的文件和目录。这里有一些可以帮助你的命令。

💡**提示：** 你可以通过查阅 `ls -l` 输出的首字母来区分文件和文件夹。`'-'` 代表文件，`'d'` 代表文件夹。

!["d" 代表文件夹](https://cdn.hashnode.com/res/hashnode/image/upload/v1719390306244/4f1688cd-ded5-43fe-b13a-9ca44ac7c4ad.png)

#### 使用 `mkdir` 命令创建新目录

你可以使用 `mkdir` 命令创建一个空目录。

```
# 在当前文件夹中创建名为 "foo" 的空目录
mkdir foo
```

你还可以使用 `-p` 选项递归地创建目录。

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

`touch` 命令创建一个空文件。你可以这样使用它：

```
# 在当前文件夹中创建名为 "file.txt" 的空文件
touch file.txt
```

如果你想在一个命令中创建多个文件，文件名可以连在一起。

```
# 在当前文件夹中创建名为 "file1.txt"、"file2.txt" 和 "file3.txt" 的空文件

touch file1.txt file2.txt file3.txt
```

#### 使用 `rm` 和 `rmdir` 命令删除文件和目录

你可以使用 `rm` 命令删除文件和非空目录。

| 命令 | 描述 |
| --- | --- |
| `rm file.txt` | 删除文件 `file.txt` |
| `rm -r directory` | 删除目录 `directory` 及其内容 |
| `rm -f file.txt` | 不提示确认直接删除文件 `file.txt` |
| `rmdir` directory | 删除一个空目录 |

🛑 注意使用 `-f` 标志时要谨慎，因为你不会在删除文件前得到提示。另外，在 `root` 目录下运行 `rm` 命令时要小心，因为你可能会删除重要的系统文件。

#### 使用 `cp` 命令复制文件

在 Linux 上复制文件，可以使用 `cp` 命令。

- **复制文件的语法:** `cp source_file destination_of_file`

此命令将文件 `file1.txt` 复制到新的文件位置 `/home/adam/logs`。

```
cp file1.txt /home/adam/logs
```

`cp` 命令还会以提供的名称创建一个文件的副本。

此命令将文件 `file1.txt` 复制到同一文件夹中的另一个文件 `file2.txt`。

```
cp file1.txt file2.txt
```

#### 使用 `mv` 命令移动和重命名文件和文件夹

`mv` 命令用于将文件和文件夹从一个目录移动到另一个目录。

**移动文件的语法:** `mv source_file destination_directory`

**例子：** 将名为 `file1.txt` 的文件移动到名为 `backup` 的目录：

```
mv file1.txt backup/
```

移动一个目录及其内容：

```
mv dir1/ backup/
```

在 Linux 中重命名文件和文件夹也是用 `mv` 命令。

**重命名文件的语法:** `mv old_name new_name`

**例子：** 将文件从 `file1.txt` 重命名为 `file2.txt`：

```
mv file1.txt file2.txt
```

将目录从 `dir1` 重命名为 `dir2`：

```
mv dir1 dir2
```

### 4.4. 使用 `find` 命令定位文件和文件夹

`find` 命令让你能高效地搜索文件、文件夹、字符设备和块设备。

下面是 `find` 命令的基本语法：

```
find /path/ -type f -name file-to-search
```

其中，

- `/path` 是文件预期找到的路径。这是搜索文件的起点。路径也可以是 `/` 或 `.`，分别代表根目录和当前目录。
    
- `-type` 代表文件描述符。它们可以是以下任何一个：
  `f` – **常规文件**，例如文本文件、图像和隐藏文件。
  `d` – **目录**，这些是待查的文件夹。
  `l` – **符号链接**，符号链接指向文件，类似于快捷方式。
  `c` – **字符设备**，用于访问字符设备的文件称为字符设备文件。驱动程序通过发送和接收单个字符（字节、八位字节）与字符设备通信。示例包括键盘、声卡和鼠标。
  `b` – **块设备**，用于访问块设备的文件称为块设备文件。驱动程序通过发送和接收整个数据块与块设备通信。示例包括 USB 和 CD-ROM。
    
- `-name` 是要搜索的文件类型名称。

假设我们需要查找名称中包含“style”的文件。我们将使用以下命令：

```
find . -type f -name "style*"
#output
./style.css
./styles.css
```

现在，假设我们想查找具有特定扩展名的文件，例如`.html`。我们将修改命令如下：

```
find . -type f -name "*.html"
# output
./services.html
./blob.html
./index.html
```

#### 如何查找隐藏文件

文件名开头的点表示隐藏文件。它们通常是隐藏的，但可以使用`ls -a`在当前目录中查看。

我们可以按照以下示例修改`find`命令来搜索隐藏文件：

```
find . -type f -name ".*"
```

**列出并查找隐藏文件**

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

上面可以看到我的主目录中的隐藏文件列表。

#### 如何查找日志文件和配置文件

日志文件通常具有`.log`扩展名，我们可以这样找到它们：

```
 find . -type f -name "*.log"
```

同样，我们可以这样搜索配置文件：

```
 find . -type f -name "*.conf"
```

#### 如何按类型查找其他文件

我们可以通过向`-type`提供`c`来搜索字符块文件：

```
find / -type c
```

同样，我们可以使用`b`来找到设备块文件：

```
find / -type b
```

#### 如何查找目录

在下面的示例中，我们使用`-type d`标志查找文件夹。

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

#### 如何按大小查找文件

`find`命令的一个非常有用的功能是根据特定大小列出文件。

```
find / -size +250M
```

这里，我们列出了大小超过`250MB`的文件。

其他单位包括：

-   `G`: 千兆字节。
    
-   `M`: 兆字节。
    
-   `K`: 千字节
    
-   `c` : 字节。
    

只需替换为相关单位。

```
find <directory> -type f -size +N<Unit Type>
```

#### 如何按修改时间查找文件

通过使用`-mtime`标志，您可以根据修改时间筛选文件和文件夹。

```
find /path -name "*.txt" -mtime -10
```

例如，

-   **\-mtime +10** 表示您正在查找10天前修改的文件。
    
-   **\-mtime -10** 表示少于10天的文件。
    
-   **\-mtime 10** 如果您跳过+或–，则表示正好10天。
    

### 4.5. 查看文件的基本命令

#### 使用`cat`命令连接并显示文件

Linux中的`cat`命令用于显示文件的内容。它也可以用于连接文件并创建新文件。

以下是`cat`命令的基本语法：

```
cat [options] [file]
```

使用`cat`最简单的方法是不带任何选项或参数。这将显示文件内容在终端上。

例如，如果您想查看名为`file.txt`的文件内容，可以使用以下命令：

```
cat file.txt
```

这将在终端上一次显示文件的所有内容。

#### 使用`less`和`more`交互式查看文本文件

虽然`cat`一次显示整个文件，但`less`和`more`允许您交互式查看文件内容。当您想滚动浏览大文件或搜索特定内容时，这很有用。

`less`命令的语法是：

```
less [options] [file]
```

`more`命令与`less`类似，但功能较少。它用于一次屏幕地显示文件内容。

`more`命令的语法是：

```
more [options] [file]
```

对于这两个命令，您可以使用`空格键`向下滚动一页，使用`Enter`键向下滚动一行，并使用`q`键退出查看器。

向后移动可以使用`b`键，向前移动可以使用`f`键。

#### 使用`tail`显示文件的最后部分

有时您可能需要查看文件的最后几行而不是整个文件。Linux中的`tail`命令用于显示文件的最后部分。

例如，`tail file.txt`将默认显示文件`file.txt`的最后10行。

如果您想显示不同数量的行，可以使用`-n`选项，后跟您想要显示的行数。

```
# 显示文件 file.txt 的最后50行
tail -n 50 file.txt
```

💡**提示：** `tail`的另一个用法是其跟随(`-f`)选项。此选项使您能够在文件写入时查看其内容。这是一个非常有用的工具，用于实时查看和监控日志文件。

#### 使用`head`显示文件的开头部分



例如，`head file.txt`将默认显示文件`file.txt`的前10行。

要改变显示的行数，可以使用`-n`选项并后接要显示的行数。

#### 使用`wc`统计单词、行和字符

你可以使用`wc`命令统计文件中的单词、行和字符数。

例如，运行`wc syslog.log`后，我得到以下输出：

```
1669 9623 64367 syslog.log
```

在上述输出中，

- `1669`代表文件`syslog.log`的行数。
- `9623`代表文件`syslog.log`的单词数。
- `64367`代表文件`syslog.log`的字符数。

因此，命令`wc syslog.log`统计了文件`syslog.log`中的`1669`行，`9623`个单词和`64367`个字符。

#### 使用`diff`逐行比较文件

在Linux中，比对两个文件并找出其差异是一项常见任务。你可以使用`diff`命令在命令行中比较两个文件。

`diff`命令的基本语法是：

```
diff [options] file1 file2
```

这里有两个文件，`hello.py`和`also-hello.py`，我们将使用`diff`命令进行比较：

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

1. 检查文件是否相同

```
diff -q hello.py also-hello.py
# 输出
Files hello.py and also-hello.py differ
```

2. 查看文件的差异。为此，你可以使用`-u`选项看到统一的输出格式：

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

- `--- hello.py 2024-05-24 18:31:29.891690478 +0500`表示被比较的文件及其时间戳。
- `+++ also-hello.py 2024-05-24 18:32:17.207921795 +0500`表示另一个被比较的文件及其时间戳。
- `@@ -3,4 +3,5 @@`显示了发生变更的行号。在这种情况下，它表明原始文件的第3至4行已更改为修改后文件的第3至5行。
- `user = input(Enter your name: )`是原始文件中的一行。
- `print(greet(user))`是原始文件中的另一行。
- `+print("Nice to meet you")`是修改后文件中新增的一行。

3. 要以并排格式查看差异，可以使用`-y`选项：

```
diff -y hello.py also-hello.py
# 输出
def greet(name):                        def greet(name):
    return fHello, {name}!                        return fHello, {name}!

user = input(Enter your name: )                    user = input(Enter your name: )
print(greet(user))                        print(greet(user))
                                        >    print("Nice to meet you")
```

在输出中：

- 两个文件中相同的行会并排显示。
- 不同的行会用`>`符号表示该行只出现在其中一个文件中。

## 第五部分：Linux文本编辑的基本要素

使用命令行进行文本编辑是Linux中最重要的技能之一。在本节中，你将学习如何使用Linux中的两种流行文本编辑器：Vim和Nano。

我建议你掌握任何一个你选择的文本编辑器并坚持使用。它将节省你的时间并提高你的生产力。Vim和nano是安全的选择，因为它们在大多数Linux发行版中都存在。

### 5.1. 掌握Vim：完整指南

#### Vim简介

Vim是一个流行的命令行文本编辑工具。Vim具有以下优点：它强大、可定制且快速。以下是你应考虑学习Vim的一些原因：

- 大多数服务器通过CLI进行访问，所以在系统管理中，你不一定有GUI的奢侈。但是Vim可以帮助你——它总是存在。
- Vim采用键盘为中心的方法，因为它设计为在没有鼠标的情况下使用，一旦你学会了键盘快捷键，这可以显著加快编辑任务的速度。这也使得它比GUI工具更快。
- 一些Linux工具，例如编辑cron作业，采用与Vim相同的编辑格式。
- Vim适合所有人——初学者和高级用户。Vim支持复杂的字符串搜索、搜索高亮等功能。通过插件，Vim为开发者和系统管理员提供了扩展功能，包括代码补全、语法高亮、文件管理、版本控制等。

Vim有两个变体：Vim (`vim`) 和Vim tiny (`vi`)。Vim tiny是Vim的简化版本，缺少一些Vim的功能。

#### 如何开始使用`vim`

使用以下命令开始使用Vim：

```
vim your-file.txt
```

`your-file.txt`可以是一个新文件，也可以是你想要编辑的现有文件。

在 CLI 早期，键盘上没有方向键。因此，导航是通过一组可用的按键进行的，`hjkl` 就是其中之一。

由于是以键盘为中心，使用 `hjkl` 键可以大大加快文本编辑任务的速度。

注意：虽然方向键完全可以正常工作，但你仍然可以尝试使用 `hjkl` 键来导航。有些人发现这种导航方式更高效。

💡**提示：** 记住 `hjkl` 顺序的方式： **h**ang back， **j**ump down， **k**ick up， **l**eap forward。

![hjkl navigation guide](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392462442/1a667ede-5f03-4acb-b40f-b10cefc64de3.png)

#### 三种 Vim 模式

你需要了解 Vim 的三种操作模式及其切换方式。按键在每种命令模式下的行为不同。三种模式如下：

1.  命令模式。
    
2.  编辑模式。
    
3.  可视模式。
    

**命令模式。** 当你启动 Vim 时，默认进入命令模式。这种模式下可以访问其他模式。

⚠ 要切换到其他模式，你需要首先处于命令模式

**编辑模式**

此模式允许你对文件进行更改。要进入编辑模式，请在命令模式下按 `I`。注意屏幕末尾的 `'-- INSERT'` 切换。

![Insert mode in Vim](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392526710/d44cecd7-64be-4c89-9a31-dbf395b77fcb.png)

**可视模式**

此模式允许你处理单个字符、文本块或文本行。让我们分解成简单的步骤。记住，在命令模式下使用以下组合。

-   `Shift + V` → 选择多行。
    
-   `Ctrl + V` → 块模式
    
-   `V` → 字符模式
    

可视模式在你需要复制粘贴或批量编辑行时非常有用。

![Selectind text using visual mode](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392557097/b61a1515-cac0-4470-856b-b2c15de581e8.gif)

**扩展命令模式。**

扩展命令模式允许你执行高级操作，例如搜索、设置行号和突出显示文本。我们将在下一节中介绍扩展模式。

如何保持轨道？如果你忘记了当前模式，只需按两次 `ESC` 键，你将回到命令模式。

#### 在 Vim 中高效编辑：复制/粘贴和搜索

**1. 如何在 Vim 中复制和粘贴**

在 Linux 术语中，复制粘贴称为 'yank'（吸取）和 'put'（放置）。要复制粘贴，请按以下步骤操作：

-   在可视模式下选择文本。
    
-   按 `'y'` 进行复制/吸取。
    
-   将光标移动到所需位置并按 `'p'`。
    

**2. 如何在 Vim 中搜索文本**

任何字符串序列都可以在 Vim 中使用命令模式下的 `/` 进行搜索。要搜索，使用 `/string-to-match`。

在命令模式下，输入 `:set hls` 并按 `Enter`。使用 `/string-to-match` 进行搜索。这将突出显示搜索结果。

让我们搜索几个字符串：

![Highlighting searches in Vim](https://cdn.hashnode.com/res/hashnode/image/upload/v1719392684097/11c4a45e-0698-4fb7-bef7-f193684ea21a.gif)

**3. 如何退出 Vim**

首先，进入命令模式（按两次 `ESC` 键）然后使用以下命令：

-   退出但不保存 → `:q!`
    
-   退出并保存 → `:wq!`
    

#### Vim 快捷键：使编辑更快

注意：所有这些快捷键仅在命令模式下有效。

-   **基本导航**
    
    -   `h`：向左移动
        
    -   `j`：向下移动
        
    -   `k`：向上移动
        
    -   `l`：向右移动
        
    -   `0`：移动到行首
        
    -   `$`：移动到行尾
        
    -   `gg`：移动到文件开头
        
    -   `G`：移动到文件末尾
        
    -   `Ctrl+d`：向下移动半页
        
    -   `Ctrl+u`：向上移动半页
        
-   **编辑**
    
    -   `i`：在光标前进入插入模式
        
    -   `I`：在行首进入插入模式
        
    -   `a`：在光标后进入插入模式
        
    -   `A`：在行尾进入插入模式
        
    -   `o`：在当前行下方打开新行并进入插入模式
        
    -   `O`：在当前行上方打开新行并进入插入模式
        
    -   `x`：删除光标下的字符
        
    -   `dd`：删除当前行
        
    -   `yy`：吸取（复制）当前行（在可视模式下使用）
        
    -   `p`：在光标下方粘贴
        
    -   `P`：在光标上方粘贴
        
-   **搜索和替换**
    
    -   `/`：搜索模式字符串，将带你到下一个匹配
        
    -   `?`：搜索模式字符串，将带你到上一个匹配
        
    -   `n`：在相同方向重复上一个搜索
        
    -   `N`：在相反方向重复上一个搜索
        
    -   `:%s/old/new/g`：将文件中所有 `old` 替换为 `new`
        
-   **退出**
    
    -   `:w`：保存文件但不退出
        
    -   `:q`：退出 Vim（如果有未保存更改则失败）
        
    -   `:wq` 或 `:x`：保存并退出
        
    -   `:q!`：不保存退出
        
-   **多窗口**
    
    -   `:split` 或 `:sp`：水平分割窗口
        
    -   `:vsplit` 或 `:vsp`：垂直分割窗口
        
    -   `Ctrl+w 后跟 h/j/k/l`：在分割窗口间导航

#### 开始使用 Nano：用户友好的文本编辑器

Nano 是一个用户友好的文本编辑器，易于使用，非常适合初学者。它预先安装在大多数 Linux 发行版上。

要使用 Nano 创建一个新文件，请使用以下命令：

```
nano
```

要使用 Nano 开始编辑现有文件，请使用以下命令：

```
nano filename
```

#### Nano 中的键绑定列表

让我们学习一下 Nano 中最重要的键绑定。你将使用这些键绑定来执行各种操作，如保存、退出、复制、粘贴等。

**写入文件并保存**

一旦使用 `nano` 命令打开 Nano，你可以开始写文本。要保存文件，请按 `Ctrl+O`。系统将提示你输入文件名。按 `Enter` 保存文件。

**退出 nano**

你可以通过按 `Ctrl+X` 退出 Nano。如果有未保存的更改，Nano 将提示你在退出前保存更改。

**复制和粘贴**

要选择一个区域，请使用 `ALT+A`。一个标记将显示。使用箭头选择文本。选择后，用 `ALT+^` 退出标记。

要复制选定的文本，请按 `Ctrl+K`。要粘贴复制的文本，请按 `Ctrl+U`。

**剪切和粘贴**

用 `ALT+A` 选择区域。选择后，用 `Ctrl+K` 剪切文本。要粘贴剪切的文本，请按 `Ctrl+U`。

**导航**

使用 `Alt \` 移动到文件的开头。

使用 `Alt /` 移动到文件的结尾。

**查看行号**

当你使用 `nano -l filename` 打开文件时，可以在文件的左侧查看行号。

**搜索**

你可以使用 `ALT+G` 搜索特定的行号。在提示符中输入行号并按 `Enter`。

你也可以用 `CTRL+W` 开始搜索字符串并按 Enter。如果你想向后搜索，可以在使用 `Ctrl+W` 启动搜索后按 `Alt+W`。

#### Nano 的键绑定摘要

-   **常规**
    
    -   `Ctrl+X`：退出 Nano（如果有更改，会提示保存）
        
    -   `Ctrl+O`：保存文件
        
    -   `Ctrl+R`：将文件读入当前文件中
        
    -   `Ctrl+G`：显示帮助文本
        
-   **编辑**
    
    -   `Ctrl+K`：剪切当前行并将其存储在剪切缓冲区
        
    -   `Ctrl+U`：将剪切缓冲区的内容粘贴到当前行
        
    -   `Alt+6`：复制当前行并将其存储在剪切缓冲区
        
    -   `Ctrl+J`：调整当前段落
        
-   **导航**
    
    -   `Ctrl+A`：移动到行的开头
        
    -   `Ctrl+E`：移动到行的结尾
        
    -   `Ctrl+C`：显示当前行号和文件信息
        
    -   `Ctrl+_` (`Ctrl+Shift+-`)：转到特定行（和列）号
        
    -   `Ctrl+Y`：向上滚动一页
        
    -   `Ctrl+V`：向下滚动一页
        
-   **搜索和替换**
    
    -   `Ctrl+W`：搜索字符串（然后 `Enter` 重新搜索）
        
    -   `Alt+W`：重复上一次搜索但反向
        
    -   `Ctrl+\`：搜索和替换
        
-   **杂项**
    
    -   `Ctrl+T`：调用拼写检查器（如果可用）
        
    -   `Ctrl+D`：删除光标下的字符（不剪切）
        
    -   `Ctrl+L`：刷新（重绘）当前屏幕
        
    -   `Alt+U`：撤销最后一次操作
        
    -   `Alt+E`：重做最后一次撤销的操作
        

## 第六部分：Bash 脚本编写

### 6.1. Bash 脚本编写的定义

Bash 脚本是包含一系列由 bash 程序逐行执行的命令的文件。它允许你执行一系列操作，如导航到特定目录，创建文件夹，以及使用命令行启动进程。

通过将命令保存在脚本中，你可以多次重复相同的步骤序列，并通过运行脚本执行它们。

### 6.2. Bash 脚本编写的优点

Bash 脚本编写是一个强大且灵活的工具，用于自动化系统管理任务，管理系统资源以及在 Unix/Linux 系统中执行其他常规任务。

一些 shell 脚本的优点是：

-   **自动化**：Shell 脚本允许你自动化重复性任务和流程，节省时间并减少手动执行时可能发生的错误。
    
-   **可移植性**：Shell 脚本可以在各种平台和操作系统上运行，包括 Unix、Linux、macOS，甚至通过使用仿真器或虚拟机在 Windows 上运行。
    
-   **灵活性**：Shell 脚本非常可定制，可以轻松修改以满足特定需求。它们还可以与其他编程语言或工具结合，以创建更强大的脚本。
    
-   **可访问性**：Shell 脚本易于编写，不需要任何特殊工具或软件。它们可以使用任何文本编辑器进行编辑，大多数操作系统都有内置的 shell 解释器。
    
-   **集成**：Shell 脚本可以与其他工具和应用程序集成，如数据库、web 服务器和云服务，从而实现更复杂的自动化和系统管理任务。
    
-   **调试**：Shell 脚本易于调试，大多数 shell 都有内置的调试和错误报告工具，可以帮助快速识别和修复问题。


术语“shell”和“bash”经常被交替使用，但两者之间有微妙的区别。

术语“shell”指的是提供与操作系统交互的命令行界面的程序。Bash（Bourne-Again SHell）是最常用的 Unix/Linux Shell 之一，也是许多 Linux 发行版中的默认 Shell。

到目前为止，你输入的命令基本上是在一个“shell”中输入的。

尽管 Bash 是一种类型的 shell，但还有其他 shell 可用，如 Korn shell（ksh），C shell（csh）和 Z shell（zsh）。每个 shell 都有其自己的语法和功能集，但它们共同的目的都是提供一个与操作系统交互的命令行界面。

你可以使用 `ps` 命令来确定你的 shell 类型：

```
ps
# 输出：

    PID TTY          TIME CMD
  20506 pts/0    00:00:00 bash <--- shell 类型
  20931 pts/0    00:00:00 ps
```

总之，“shell”是一个广义术语，指任何提供命令行界面的程序，而“Bash”是 Unix/Linux 系统中广泛使用的特定类型的 shell。

注意：在本节中，我们将使用“bash” shell。

### 6.4. 如何创建和执行 Bash 脚本

**脚本命名约定**

根据命名约定，bash 脚本以 `.sh` 结尾。然而，即使没有 `sh` 扩展名，bash 脚本也可以完美运行。

**添加 Shebang**

Bash 脚本以 `shebang` 开头。Shebang 是 `bash #` 和 `bang !` 的组合，后面跟着 bash shell 的路径。这是脚本的第一行。Shebang 告诉 shell 通过 bash shell 执行它。Shebang 只是 bash 解释器的绝对路径。

下面是一个 shebang 语句的示例。

```
#!/bin/bash
```

你可以使用以下命令找到你的 bash shell 路径（可能与上述不同）：

```
which bash
```

**创建你的第一个 bash 脚本**

我们的第一个脚本提示用户输入路径，并列出其内容。

使用你选择的任何编辑器创建一个名为 `run_all.sh` 的文件。

```
vim run_all.sh
```

在文件中添加以下命令并保存：

```
#!/bin/bash
echo "Today is " `date`

echo -e "\nenter the path to directory"
read the_path

echo -e "\n you path has the following files and folders: "
ls $the_path
```

让我们逐行深入了解脚本。这次我将脚本重现，并加上行号。

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

-   第 1 行：Shebang (`#!/bin/bash`) 指向 bash shell 的路径。
    
-   第 2 行：`echo` 命令在终端显示当前日期和时间。注意 `date` 在反引号中。
    
-   第 4 行：我们希望用户输入一个有效路径。
    
-   第 5 行：`read` 命令读取输入并将其存储在变量 `the_path` 中。
    
-   第 8 行：`ls` 命令使用存储路径的变量并显示当前的文件和文件夹。
    

**执行 bash 脚本**

要使脚本可执行，请使用以下命令为用户分配执行权限：

```
chmod u+x run_all.sh
```

这里，

-   `chmod` 修改文件的所有权为当前用户：`u`。
    
-   `+x` 添加当前用户的执行权限。这意味着用户现在可以运行脚本。
    
-   `run_all.sh` 是我们希望运行的文件。
    

你可以使用以下任何方法运行脚本：

-   `sh run_all.sh`
    
-   `bash run_all.sh`
    
-   `./run_all.sh`
    

让我们看看它的运行 🚀

![运行 bash 脚本](https://www.freecodecamp.org/news/content/images/2023/03/run-script-bash-2.gif)

### 6.5. Bash 脚本基础

#### Bash 脚本中的注释

在 bash 脚本中，注释以 `#` 开头。这意味着任何以 `#` 开头的行都是注释，并将被解释器忽略。

注释对于文档化代码非常有帮助，添加注释是一种很好的做法，可以帮助他人理解代码。

这些是注释的示例：

```
# 这是一个示例注释
# 这两行都将被解释器忽略
```

#### Bash 中的变量和数据类型

变量让你存储数据。你可以在脚本中使用变量来读取、访问和操作数据。

在 Bash 中没有数据类型。在 Bash 中，变量可以存储数值、单个字符或字符串。

在 Bash 中，你可以用以下方式使用和设置变量：

1.  直接赋值：

```
country=Netherlands
```

2.  基于程序或命令的输出赋值，使用命令替换。注意，访问现有变量的值需要 `$`。

```
same_country=$country
```

这将 `country` 的值分配给新变量 `same_country`。

要访问变量值，将 `$` 附加到变量名。

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

#### 变量命名约定

在 Bash 脚本中，变量命名有以下约定：

1. 变量名应该以字母或下划线 (`_`) 开头。

2. 变量名可以包含字母、数字和下划线 (`_`)。

3. 变量名区分大小写。

4. 变量名不应包含空格或特殊字符。

5. 使用能反映变量用途的描述性名称。

6. 避免使用保留关键字，如 `if`、`then`、`else`、`fi` 等作为变量名。

以下是一些 Bash 中有效的变量名示例：

```
name
count
_var
myVar
MY_VAR
```

以及一些无效的变量名示例：

```
# 无效的变量名

2ndvar (变量名以数字开头)
my var (变量名包含空格)
my-var (变量名包含连字符)
```

遵循这些命名约定有助于使 Bash 脚本更易读，更易维护。

#### Bash 脚本中的输入和输出

#### 收集输入

在本节中，我们将讨论提供输入给脚本的一些方法。

1. 读取用户输入并存储在变量中

我们可以使用 `read` 命令读取用户输入。

```
#!/bin/bash
echo "What's your name?"
read entered_name
echo -e "\nWelcome to bash tutorial" $entered_name
```

![从脚本读取名称](https://www.freecodecamp.org/news/content/images/2023/03/name-sh.gif)

2. 从文件中读取

此代码从名为 `input.txt` 的文件中读取每一行并打印到终端。我们将在本节后面研究 `while` 循环。

```
while read line
do
  echo $line
done < input.txt
```

3. 命令行参数

在 Bash 脚本或函数中， `$1` 表示传递的第一个参数， `$2` 表示传递的第二个参数，依此类推。

此脚本将名称作为命令行参数，并打印个性化问候语。

```
#!/bin/bash
echo "Hello, $1!"
```

我们提供 `Zaira` 作为脚本的参数。

**输出:**

![为 Bash 脚本提供参数](https://www.freecodecamp.org/news/content/images/2023/03/name-sh-1.gif)

#### 显示输出

在这里，我们将讨论一些接收脚本输出的方法。

1. 打印到终端：

```
echo "Hello, World!"
```

这会将文本 "Hello, World!" 打印到终端。

2. 写入文件：

```
echo "This is some text." > output.txt
```

这会将文本 "This is some text." 写入名为 `output.txt` 的文件。注意， `>` 操作符会覆盖文件已有的内容。

3. 追加到文件：

```
echo "More text." >> output.txt
```

这会将文本 "More text." 追加到 `output.txt` 文件的末尾。

4. 重定向输出：

```
ls > files.txt
```

这会列出当前目录中的文件并将输出写入名为 `files.txt` 的文件中。您可以通过这种方式将任何命令的输出重定向到文件。

您将在第 8.5 节详细了解输出重定向。

#### 条件语句 (if/else)

生成布尔结果（真或假）的表达式称为条件。评估条件有多种方式，包括 `if`、`if-else`、`if-elif-else` 和嵌套条件。

**语法**:

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

#### Bash 条件语句语法

我们可以使用逻辑运算符，如 AND `-a` 和 OR `-o` 来进行更有意义的比较。

```
if [ $a -gt 60 -a $b -lt 100 ]
```

此语句检查两个条件是否都为 `true`: `a` 大于 `60` 并且 `b` 小于 `100`。

让我们看一个使用 `if`、`if-else` 和 `if-elif-else` 语句的 Bash 脚本示例，用于判断用户输入的数字是正数、负数还是零：

```
#!/bin/bash

# 脚本用于判断一个数字是正数、负数还是零

echo "Please enter a number: "
read num

if [ $num -gt 0 ]; then
  echo "$num is positive"
elif [ $num -lt 0 ]; then
  echo "$num is negative"
else
  echo "$num is zero"
fi
```

脚本首先提示用户输入一个数字。然后，它使用 `if` 语句检查数字是否大于 `0`。如果是，脚本输出该数字是正数。如果数字不大于 `0`，脚本继续执行下一个语句，这是一条 `if-elif` 语句。

在这里，脚本检查数字是否小于 `0`。如果是，脚本输出该数字是负数。

最后，如果数字既不大于 `0` 也不小于 `0`，脚本使用 `else` 语句输出该数字为零。

实际效果 🚀

![检查一个数是否为偶数或奇数](https://www.freecodecamp.org/news/content/images/2023/03/test-odd.gif)

#### Bash 中的循环和分支

**While 循环**

While 循环检查一个条件并循环直到该条件仍为 `true`。我们需要提供一个计数器语句来增加计数器以控制循环执行。

在下面的示例中，`(( i += 1 ))` 是增加 `i` 值的计数器语句。该循环将运行整整 10 次。

```
#!/bin/bash
i=1
while [[ $i -le 10 ]] ; do
   echo "$i"
  (( i += 1 ))
done
```


**For 循环**

`for` 循环与 `while` 循环一样，允许你执行特定次数的语句。每种循环在语法和用法上有所不同。

在下面的例子中，循环将迭代5次。

```
#!/bin/bash

for i in {1..5}
do
    echo $i
done
```

![从1到10循环](https://www.freecodecamp.org/news/content/images/2023/03/image-186.png)

**Case 语句**

在 Bash 中，case 语句用于将给定的值与一组模式进行比较，并基于第一个匹配的模式执行一段代码。Bash 中 case 语句的语法如下：

```
case expression in
    pattern1)
        # 如果 expression 匹配 pattern1, 执行的代码
        ;;
    pattern2)
        # 如果 expression 匹配 pattern2, 执行的代码
        ;;
    pattern3)
        # 如果 expression 匹配 pattern3, 执行的代码
        ;;
    *)
        # 如果 expression 不匹配上述任何模式, 执行的代码
        ;;
esac
```

这里，“expression” 是我们要比较的值，“pattern1”、“pattern2”、“pattern3”等是我们要比较的模式。

双分号 “;;” 用于分隔每个模式对应的代码块。星号 “*” 表示默认情况，如果上面的模式都不匹配 expression，则执行这个代码块。

让我们来看一个例子：

```
fruit="apple"

case $fruit in
    "apple")
        echo "这是一种红色的水果。"
        ;;
    "banana")
        echo "这是一种黄色的水果。"
        ;;
    "orange")
        echo "这是一种橙色的水果。"
        ;;
    *)
        echo "未知的水果。"
        ;;
esac
```

在这个例子中，由于 `fruit` 的值是 `apple`，第一个模式匹配，执行输出 `这是一种红色的水果` 的代码块。如果 `fruit` 的值是 `banana`，则第二个模式匹配，执行输出 `这是一种黄色的水果` 的代码块，依此类推。

如果 `fruit` 的值不匹配任何指定的模式，则执行默认情况，输出 `未知的水果`。

## 第7部分：管理 Linux 中的软件包

Linux 自带几个内置程序。但你可能需要根据需要安装新的程序，也可能需要升级现有的应用程序。

### 7.1 软件包和软件包管理

#### 什么是软件包？

软件包是捆绑在一起的文件集合。这些文件对于某个程序的运行是必需的。这些文件包含程序的可执行文件、库和其他资源。

除了程序运行所需的文件，软件包还包含安装脚本，将文件复制到所需的位置。一个程序可能包含许多文件和依赖项。使用软件包，可以更轻松地一次管理所有文件和依赖项。

#### 源代码和二进制的区别是什么？

程序员使用编程语言编写源代码。然后将源代码编译成计算机可以理解的机器代码。编译后的代码称为二进制代码。

当你下载软件包时，你可以获取 _源代码_ 或 _二进制代码_。源代码是人类可读的代码，可以编译成二进制代码。二进制代码是计算机可以理解的编译代码。

如果源代码编译正确，源软件包可以用于任何类型的机器。而二进制则是编译后的代码，特定于某一类型的机器或架构。

你可以使用 `uname -m` 命令找到机器的架构。

```
uname -m
# 输出
x86_64
```

#### 软件包依赖

程序经常共享文件。与其在每个软件包中包含这些文件，不如由一个单独的软件包提供它们供所有程序使用。

要安装需要这些文件的程序，你还必须安装包含这些文件的软件包。这称为软件包依赖。指定依赖关系通过减少重复使软件包更小、更简单。

当你安装一个程序时，其依赖项也必须安装。大多数必需的依赖项通常已经安装，但可能需要一些额外的依赖项。所以，当你选择的软件包一起安装几个其他软件包时，不要感到惊讶。这些都是必要的依赖项。

#### 软件包管理器

Linux 提供了一个全面的软件包管理系统，用于安装、升级、配置和删除软件。

使用软件包管理，你可以访问一个组织良好的数千个软件包库，并且能够解决依赖关系和检查软件更新。

软件包可以通过易于系统管理员自动化的命令行工具或通过图形界面进行管理。

#### 软件渠道/存储库

⚠️ 不同的发行版有不同的软件包管理方法。这里，我们使用的是 Ubuntu。

在 Linux 中安装软件与在 Windows 和 Mac 上安装软件有些不同。

Linux 使用存储库来存储软件包。存储库是可通过软件包管理器安装的软件包集合。

从仓库下载软件的通用过程如下所示：

![从远程仓库下载软件的过程](https://cdn.hashnode.com/res/hashnode/image/upload/v1719313472889/f4961606-b9c4-4ed7-8edc-61e0fc6908e4.png)

如果我们具体谈论 Ubuntu，

1. 使用 `apt update` 获取索引。（`apt`将在下一节解释）
    
2. 使用 `apt install` 根据索引请求所需的文件/依赖项。
    
3. 在本地安装软件包和依赖项。
    
4. 在需要时使用 `apt update` 和 `apt upgrade` 更新依赖项和软件包。
    

在基于 Debian 的发行版中，您可以在 `/etc/apt/sources.list` 中找到仓库（repositories）的列表。

### 7.2. 通过命令行安装软件包

`apt` 命令是一个强大的命令行工具，与 Ubuntu 的 “高级打包工具（APT）” 配合使用。

`apt` 以及与其捆绑的命令提供了安装新软件包、升级现有软件包、更新软件包列表索引，甚至升级整个 Ubuntu 系统的手段。

要查看使用 `apt` 安装的日志，您可以查看 `/var/log/dpkg.log` 文件。

以下是 `apt` 命令的用法：

#### 安装软件包

例如，要安装 `htop` 软件包，您可以使用以下命令：

```
sudo apt install htop
```

#### 更新软件包列表索引

软件包列表索引是仓库中所有可用软件包的列表。要更新本地软件包列表索引，您可以使用以下命令：

```
sudo apt update
```

#### 升级软件包

系统上已安装的软件包可以获得包含错误修复、安全补丁和新功能的更新。

要升级软件包，您可以使用以下命令：

```
sudo apt upgrade
```

#### 删除软件包

要删除一个软件包，例如 `htop`，您可以使用以下命令：

```
sudo apt remove htop
```

### 7.3. 通过高级图形方法安装软件包 - Synaptic

如果您不习惯使用命令行，您可以使用 GUI 应用程序来安装软件包。您可以通过图形界面实现与命令行相同的结果。

Synaptic 是一个 GUI 软件包管理应用程序，帮助列出已安装的软件包、它们的状态、待定更新等。它提供了自定义过滤器，以帮助您缩小搜索结果范围。

![0f362ed7-c371-4a58-96c2-c359178cdbd9](https://cdn.hashnode.com/res/hashnode/image/upload/v1719313599636/0f362ed7-c371-4a58-96c2-c359178cdbd9.png)

您还可以右键单击一个软件包并查看更多详细信息，如依赖项、维护者、大小和已安装的文件。

![查看软件包的详细信息](https://cdn.hashnode.com/res/hashnode/image/upload/v1719313607397/33b7ad76-2492-4805-8133-35c8cd3c4a0a.png)

### 7.4. 安装从网站下载的软件包

您可能希望安装从网站下载的软件包，而不是从软件仓库下载的。这些软件包称为 `.deb` 文件。

**使用 `dpkg` 安装软件包：** `dpkg` 是一个用于安装软件包的命令行工具。要使用 **dpkg** 安装软件包，请打开终端并输入以下命令：

```
cd 目录
sudo dpkg -i package_name.deb
```

注意：将“目录”替换为软件包存储的目录，并将“package_name”替换为软件包的文件名。

或者，您可以右键单击，选择“用其他应用程序打开”，并选择您喜欢的 GUI 应用程序。

![使用应用程序安装软件](https://cdn.hashnode.com/res/hashnode/image/upload/v1719322161581/f16d83ac-ca9a-4502-a80c-e6a25dee5c68.png)

💡 **提示：** 在 Ubuntu 中，您可以使用 `dpkg --list` 查看已安装软件包的列表。

## 第8部分：高级 Linux 主题

### 8.1. 用户管理

系统中可以有多个具有不同访问级别的用户。在 Linux 中，`root` 用户具有最高级别的访问权限，可以在系统上执行任何操作。普通用户有有限的访问权限，并且只能执行他们被授予权限的操作。

#### 什么是用户？

用户帐户提供了不同人和程序运行命令的分隔。

人类通过名字识别用户，因为名字比较容易处理。但是系统通过唯一的编号，即用户 ID (UID) 来识别用户。

当人类用户使用提供的用户名登录时，他们必须使用密码进行身份验证。

用户帐户构成了系统安全的基础。文件所有权也与用户帐户相关联，并强制执行对文件的访问控制。每个进程都有一个关联的用户帐户，为管理员提供了一个控制层。

主要有三种类型的用户帐户：

1. **超级用户**：超级用户可以完全访问系统。超级用户的名称是 `root`。它有一个 `UID` 为 0。
    
2. **系统用户**：系统用户有用于运行系统服务的用户帐户。这些帐户用于运行系统服务，不适合人类交互。
    
3. **普通用户**：普通用户是可以访问系统的人类用户。


```
id
uid=1000(john) gid=1000(john) groups=1000(john),4(adm),24(cdrom),27(sudo),30(dip)... output truncated
```

要查看其他用户的基本信息，可以将用户名作为参数传递给 `id` 命令。

```
id 用户名
```

要查看与进程相关的用户信息，请使用带 `-u` 标志的 `ps` 命令。

```
ps -u
# 输出
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1  16968  3920 ?        Ss   18:45   0:00 /sbin/init splash
root         2  0.0  0.0      0     0 ?        S    18:45   0:00 [kthreadd]
```

默认情况下，系统使用 `/etc/passwd` 文件来存储用户信息。

以下是 `/etc/passwd` 文件中的一行：

```
root:x:0:0:root:/root:/bin/bash
```

`/etc/passwd` 文件包含每个用户的以下信息：

1. 用户名：`root` – 用户账户的用户名。
    
2. 密码：`x` – 用户账户的加密密码，出于安全原因存储在 `/etc/shadow` 文件中。
    
3. 用户 ID（UID）：`0` – 用户账户的唯一数字标识。
    
4. 组 ID（GID）：`0` – 用户账户的主要组标识。
    
5. 用户信息：`root` – 用户账户的真实姓名。
    
6. 主目录：`/root` – 用户账户的主目录。
    
7. Shell：`/bin/bash` – 用户账户的默认 shell。如果不允许该用户进行交互式登录，系统用户可能会使用 `/sbin/nologin`。
    

#### 什么是组？

组是共享访问和资源的用户账户集合。组具有用于标识的组名。系统通过称为组 ID（GID）的唯一数字标识组。

默认情况下，有关组的信息存储在 `/etc/group` 文件中。

以下是 `/etc/group` 文件中的一条记录：

```
adm:x:4:syslog,john
```

以下是此记录中各字段的解析：

1. 组名：`adm` – 组的名称。
    
2. 密码：`x` – 组的密码存储在 `/etc/gshadow` 文件中，出于安全原因。密码是可选的，如果未设置则显示为空。
    
3. 组 ID（GID）：`4` – 组的唯一数字标识。
    
4. 组成员：`syslog,john` – 组成员的用户名列表。在这种情况下，`adm` 组有两个成员：`syslog` 和 `john`。
    

在此特定条目中，组名为 `adm`，组 ID 为 `4`，并且组有两个成员：`syslog` 和 `john`。密码字段通常设置为 `x`，表示组密码存储在 `/etc/gshadow` 文件中。

组进一步分为 “_主_” 和 “_补充_” 组。

-   主组：每个用户默认分配一个主组。该组通常具有与用户相同的名称，并在创建用户账户时创建。用户创建的文件和目录通常由此主组拥有。
    
-   补充组：这是用户除了其主组之外可以属于的额外组。用户可以是多个补充组的成员。通过这些组，用户可以拥有共享资源的权限，而不会影响系统的文件权限并保持安全性。虽然用户必须属于一个主组，但是否加入补充组是可选的。
    

#### 访问控制：查找和理解文件权限

可以使用 `ls -l` 命令查看文件拥有者。`ls -l` 命令输出的第一列显示文件的权限。其他列显示文件的所有者以及文件所属的组。

![ls -l 的详细输出](https://www.freecodecamp.org/news/content/images/2022/04/image-146.png)

让我们更仔细地看看 `mode` 列：

![权限类别和文件类型](https://www.freecodecamp.org/news/content/images/2022/04/image-147.png)

**模式** 定义了两个方面：

-   **文件类型：** 文件类型定义了文件的类型。对于包含简单数据的常规文件，它是空的 `-`。对于其他特殊文件类型，符号不同。对于作为特殊文件的目录，它是 `d`。特殊文件由操作系统以不同方式处理。
    
-   **权限类别：** 接下来的字符集分别定义了用户、组和其他人的权限。  
    – **用户：** 这是文件的所有者，文件的所有者属于这一类。  
    – **组：** 文件组的成员属于这一类。  
    – **其他：** 不属于用户或组类别的所有用户属于这一类。
    

💡**提示：** 可以使用 `ls -ld` 命令查看目录所有权。

##### 如何读取符号权限或 `rwx` 权限

`rwx` 表示法被称为权限的符号表示法。在权限集中，

-   `r` 代表 **读取**。它在三元组的第一个字符中表示。
    
-   `w` 代表 **写入**。它在三元组的第二个字符中表示。
    
-   `x` 代表 **执行**。它在三元组的第三个字符中表示。


对于常规文件，读取权限仅允许文件被打开和读取。用户不能修改文件。

类似地，对于目录，读取权限仅允许列出目录内容，而不允许对目录进行任何修改。

**写入：**

当文件具有写入权限时，用户可以修改（编辑、删除）文件并保存它。

对于文件夹，写入权限允许用户修改其内容（创建、删除和重命名其中的文件），以及修改用户有写入权限的文件的内容。

**Linux 中权限的示例**

现在我们知道如何读取权限了，来看一些示例。

- `-rwx------`：只有所有者可以访问和执行的文件。
  
  `-rw-rw-r--`：所有者和组可以修改的文件，但其他人不能。
  
- `drwxrwx---`：所有者和组可以修改的目录。

**执行：**

对于文件，执行权限允许用户运行可执行脚本。对于目录，用户可以访问它们，并访问目录中文件的详细信息。

##### 如何使用 `chmod` 和 `chown` 更改 Linux 中的文件权限和所有权

现在我们已经了解了所有权和权限的基础知识，让我们看看如何使用 `chmod` 命令修改权限。

**`chmod` 的语法：**

```
chmod permissions filename
```

其中，

- `permissions` 可以是读取、写入、执行或它们的组合。
  
- `filename` 是要更改权限的文件名。这个参数也可以是一个列表，如果需要批量更改文件权限。

我们可以通过两种模式更改权限：

1. **符号模式**：这种方法使用 `u`、`g`、`o` 等符号代表用户、组和其他人。权限用 `r、w、x` 分别表示读取、写入和执行。可以使用 `+`、`-` 和 `=` 来修改权限。
  
2. **绝对模式**：这种方法用三个数字的八进制数（范围从 0 到 7）表示权限。
  
现在，让我们详细了解它们。

##### 如何使用符号模式更改权限

下表总结了用户表示：

| **用户表示** | **描述** |
| --- | --- |
| u | 用户/所有者 |
| g | 组 |
| o | 其他 |

我们可以使用数学运算符添加、删除和分配权限。下表显示了摘要：

| **运算符** | **描述** |
| --- | --- |
| + | 添加文件或目录的权限 |
| – | 删除权限 |
| = | 如果之前未设置，则设置权限。如果之前设置了，则覆盖权限 |

**示例：**

假设我有一个脚本，我想使所有者 `zaira` 可以执行它。

当前文件权限如下：

![image-161](https://www.freecodecamp.org/news/content/images/2022/04/image-161.png)

让我们这样分解权限：

![Splitting file permissions](https://www.freecodecamp.org/news/content/images/2022/04/image-160.png)

要使用符号模式为所有者（`u`）添加执行权限（`x`），我们可以使用以下命令：

```
chmod u+x mymotd.sh
```

**输出：**

现在，我们可以看到，所有者 `zaira` 已经有了执行权限。

![Permission updated](https://www.freecodecamp.org/news/content/images/2022/04/image-162.png)

**通过符号方法更改权限的其他示例：**

- 删除 `组` 和 `其他` 的 `读取` 和 `写入` 权限：`chmod go-rw`。
  
- 删除 `其他` 的 `读取` 权限：`chmod o-r`。
  
- 为 `组` 分配 `写入` 权限并覆盖现有权限：`chmod g=w`。

##### 如何使用绝对模式更改权限

绝对模式使用数字表示权限，并使用数学运算符来修改它们。

下表显示了如何分配相关权限：

| **权限** | **赋予权限** |
| --- | --- |
| 读取 | 加 4 |
| 写入 | 加 2 |
| 执行 | 加 1 |

权限可以通过减法撤销。下表显示了如何移除相关权限：

| **权限** | **撤销权限** |
| --- | --- |
| 读取 | 减 4 |
| 写入 | 减 2 |
| 执行 | 减 1 |

**示例**：

- 设定 `用户` 的 `读取`（加 4）、`组` 的 `读取`（加 4）和 `执行`（加 1）、以及 `其他` 的 `执行`（加 1）。

`chmod 451 file-name`

这是我们进行计算的方法：

![Calculation breakdown for adding permissions](https://www.freecodecamp.org/news/content/images/2022/04/image-163.png)

注意，这与 `r--r-x--x` 相同。

- 移除 `组` 和 `其他` 的 `执行` 权限。

要移除 `组` 和 `其他` 的执行权限，从后两个八进制位的执行部分中减去 1。

![Calculation breakdown for removing permissions](https://www.freecodecamp.org/news/content/images/2022/04/image-164.png)

- 给 `用户` 分配 `读取`、`写入` 和 `执行` 权限，给 `组` 分配 `读取` 和 `执行` 权限，而 `其他` 只分配 `读取` 权限。

这将与 `rwxr-xr--` 相同。

![Calculation breakdown for adding permissions](https://www.freecodecamp.org/news/content/images/2022/04/image-165.png)

##### 如何使用 `chown` 命令更改所有权

`chown` 命令的语法：

```
chown 用户 文件名
```

##### 如何使用 `chown` 更改用户所有权

我们将所有权从用户 `zaira` 转移到用户 `news`。

`chown news mymotd.sh`

![查看当前所有者](https://www.freecodecamp.org/news/content/images/2022/04/image-167.png)

更改所有权的命令：`sudo chown news mymotd.sh`。

**输出：**

![所有权已更改](https://www.freecodecamp.org/news/content/images/2022/04/image-168.png)

##### 如何同时更改用户和组的所有权

我们也可以使用 `chown` 同时更改用户和组的所有权。

```
chown 用户:组 文件名
```

##### 如何更改目录的所有权

你可以递归地更改目录内容的所有权。下面的例子是将 `/opt/script` 文件夹的所有权更改为允许用户 `admin`。

```
chown -R admin /opt/script
```

##### 如何更改组的所有权

如果我们只需要更改组所有者，我们可以使用 `chown`，在组名之前加上冒号 `:`

```
chown :admins /opt/script
```

##### 如何在用户之间切换

你可以使用 `su` 命令在用户之间切换。

```
[user01@host ~]$ su user02
Password:
[user02@host ~]$
```

##### 如何获得超级用户权限

超级用户或 root 用户在 Linux 系统中拥有最高等级的访问权限。root 用户可以在系统上执行任何操作。root 用户可以访问所有文件和目录，安装和删除软件，并修改或覆盖系统配置。

能力越大，责任越大。如果 root 用户被攻破，某人可能会完全控制系统。建议仅在必要时使用 root 用户账户。

如果省略用户名，`su` 命令默认切换到 root 用户账户。

```
[user01@host ~]$ su
Password:
[root@host ~]#
```

`su` 命令的另一种变体是 `su -`。`su` 命令切换到 root 用户账户，但不更改环境变量。`su -` 命令切换到 root 用户账户，并将环境变量更改为目标用户的环境变量。

##### 使用 sudo 运行命令

要在不切换到 `root` 用户账户的情况下以 `root` 用户运行命令，可以使用 `sudo` 命令。`sudo` 命令允许你以提升的权限运行命令。

使用 `sudo` 运行命令比以 `root` 用户运行命令更安全。这是因为，只有特定的一组用户可以被授予使用 `sudo` 运行命令的权限。这个权限是在 `/etc/sudoers` 文件中定义的。

此外，`sudo` 会记录所有使用它运行的命令，提供谁在何时运行了哪些命令的审计记录。

在 Ubuntu 中，你可以在这里找到审计日志：

```
cat /var/log/auth.log | grep sudo
```

对于没有访问 `sudo` 权限的用户，它会在日志中被标记，并提示如下消息：

```
user01 is not in the sudoers file.  This incident will be reported.
```

#### 管理本地用户账户

##### 从命令行创建用户

添加新用户的命令是：

```
sudo useradd 用户名
```

这个命令会设置用户的主目录并创建一个以用户名命名的私有组。目前，账户缺少有效密码，用户在创建密码之前无法登录。

##### 修改现有用户

`usermod` 命令用于修改现有用户。以下是一些 `usermod` 命令常用的选项：

以下是一些在 Linux 中使用 `usermod` 命令的示例：

1.  **更改用户的登录名：**
    
    ```
     sudo usermod -l 新用户名 旧用户名
    ```
    
2.  **更改用户的主目录：**
    
    ```
     sudo usermod -d /新/主/目录 -m 用户名
    ```
    
3.  **将用户添加到一个附加组：**
    
    ```
     sudo usermod -aG 组名 用户名
    ```
    
4.  **更改用户的 shell：**
    
    ```
     sudo usermod -s /bin/bash 用户名
    ```
    
5.  **锁定用户账户：**
    
    ```
     sudo usermod -L 用户名
    ```
    
6.  **解锁用户账户：**
    
    ```
     sudo usermod -U 用户名
    ```
    
7.  **设置用户账户的到期日期：**
    
    ```
     sudo usermod -e YYYY-MM-DD 用户名
    ```
    
8.  **更改用户的用户 ID (UID)：**
    
    ```
     sudo usermod -u 新UID 用户名
    ```
    
9.  **更改用户的主组：**
    
    ```
     sudo usermod -g 新组 用户名
    ```
    
10.  **将用户从附加组中移除：**
    
    ```
    sudo gpasswd -d 用户名 组名
    ```

##### 删除用户

`userdel` 命令用于删除用户账户和系统相关文件。

-   `sudo userdel 用户名`：从 `/etc/passwd` 中删除用户的详细信息，但保留用户的主目录。
    
-   `sudo userdel -r 用户名` 命令从 `/etc/passwd` 中删除用户的详细信息，同时删除用户的主目录。

##### 更改用户密码

`passwd` 命令用于更改用户密码。

-   `sudo passwd 用户名`：设置初始密码或更改用户的现有密码。它还用于更改当前登录用户的密码。

访问远程服务器是系统管理员的一项基本任务。你可以通过本地机器连接到不同的服务器或访问数据库并执行命令，这一切都可以使用 SSH。

**什么是 SSH 协议？**

SSH 代表安全外壳（Secure Shell）。它是一种密码网络协议，允许两个系统之间进行安全通信。

SSH 的默认端口是 `22`。

通过 SSH 进行通信时的两个参与者是：

-   服务器：你想访问的机器。
-   客户端：你从其访问服务器的系统。

连接到服务器的步骤如下：

1.  初始化连接：客户端向服务器发送连接请求。
2.  密钥交换：服务器向客户端发送其公钥。双方就使用的加密方法达成一致。
3.  会话密钥生成：客户端和服务器使用 Diffie-Hellman 密钥交换创建一个共享会话密钥。
4.  客户端认证：客户端通过密码、私钥或其他方法登录到服务器。
5.  安全通信：在认证之后，客户端和服务器通过加密进行安全通信。

**如何使用 SSH 连接到远程服务器？**

`ssh` 命令是 Linux 内置的一个实用程序，也是默认的一个。它使得访问服务器变得相当容易和安全。

这里，我们讨论客户端如何与服务器建立连接。

在连接服务器之前，你需要具备以下信息：

-   服务器的 IP 地址或域名。
-   服务器的用户名和密码。
-   你可以在服务器中访问的端口号。

`ssh` 命令的基本语法是：

```
ssh username@server_ip
```

例如，如果你的用户名是 `john` 且服务器 IP 是 `192.168.1.10`，命令将会是：

```
ssh john@192.168.1.10
```

之后，你会被提示输入密码。屏幕看起来会类似这样：

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

现在你可以在服务器 `192.168.1.10` 上执行相关命令。

⚠️ SSH 的默认端口是 `22`，但它也是易受攻击的，因为黑客通常会先尝试这个端口。你的服务器可以暴露另一个端口并与您分享访问权限。要连接到不同的端口，请使用 `-p` 标志。

```
ssh -p port_number username@server_ip
```

### 8.3. 高级日志解析和分析

日志文件在被配置时，由系统生成，出于各种有用的原因。它们可以用于跟踪系统事件、监视系统性能和排查问题。对于系统管理员来说，它们特别有用，可以跟踪应用程序错误、网络事件和用户活动。

以下是一个日志文件示例：

```
# 示例日志文件
2024-04-25 09:00:00 INFO Startup: Application starting
2024-04-25 09:01:00 INFO Config: Configuration loaded successfully
2024-04-25 09:02:00 DEBUG Database: Database connection established
2024-04-25 09:03:00 INFO User: New user registered (UserID: 1001)
2024-04-25 09:04:00 WARN Security: Attempted login with incorrect credentials (UserID: 1001)
2024-04-25 09:05:00 ERROR Network: Network timeout on request (ReqID: 456)
2024-04-25 09:06:00 INFO Email: Notification email sent (UserID: 1001)
2024-04-25 09:07:00 DEBUG API: API call with response time over threshold (Duration: 350ms)
2024-04-25 09:08:00 INFO Session: User session ended (UserID: 1001)
2024-04-25 09:09:00 INFO Shutdown: Application shutdown initiated
```

日志文件通常包含以下列：

-   时间戳：事件发生的日期和时间。
-   日志级别：事件的严重性（INFO、DEBUG、WARN、ERROR）。
-   组件：生成事件的系统组件（Startup、Config、Database、User、Security、Network、Email、API、Session、Shutdown）。
-   消息：发生事件的描述。
-   额外信息：与事件相关的额外信息。

在实时系统中，日志文件往往有数千行长，并且每秒都会生成。根据配置，它们可能非常冗长。日志文件中的每一列都是可以用来追踪问题的信息。这使得日志文件难以手动阅读和理解。

这就是日志解析的作用所在。日志解析是从日志文件中提取有用信息的过程。它包括将日志文件分解为较小的、更易管理的部分，并提取相关信息。

在本节中，你将探索一些用于解析 Linux 日志文件的技术。

#### 使用 `grep` 提取文本

Grep 是一个内置的 bash 实用程序。它代表“全局正则表达式打印”。Grep 用于在文件中匹配字符串。

以下是 `grep` 的一些常见用途：

1.  **在文件中搜索特定字符串：**
    
    ```
     grep "search_string" filename
    ```
    
    该命令在名为 `filename` 的文件中搜索“search_string”。
    
2.  **在目录中递归搜索：**
    
    ```
     grep -r "search_string" /path/to/directory
    ```
    
    该命令在指定目录及其子目录中的所有文件中搜索“search_string”。
    
3.  **搜索时忽略大小写：**
    
    ```
     grep -i "search_string" filename
    ```
    
    该命令在名为 `filename` 的文件中进行不区分大小写的“search_string”搜索。
    
4.  **显示匹配行的行号：**
    
    ```
     grep -n "search_string" filename
    ```
    
    该命令显示名为 `filename` 的文件中匹配行的行号。
    
5.  **计算匹配行的数量：**
    
    ```
     grep -c "search_string" filename
    ```
    
    该命令计算名为 `filename` 的文件中包含“search_string”的行数。
    
6.  **反向匹配以显示不匹配的行：**
    
    ```
     grep -v "search_string" filename
    ```
    
    该命令显示名为 `filename` 的文件中不包含“search_string”的所有行。
    
7.  **搜索整个单词：**
    
    ```
     grep -w "word" filename
    ```
    
    该命令在名为 `filename` 的文件中搜索整个单词“word”。
    
8.  **使用扩展正则表达式：**
    
    ```
     grep -E "pattern" filename
    ```
    
    该命令允许在名为 `filename` 的文件中使用扩展正则表达式进行更复杂的模式匹配。
    

**💡 提示：** 如果文件夹中有多个文件，可以使用以下命令查找包含所需字符串的文件列表。

```
# 查找包含所需字符串的文件列表
grep -l "String to Match" /path/to/directory
```

#### 使用 `sed` 提取文本

`sed` 代表“流编辑器”。它逐行处理数据，意味着它一次读取一行数据。`sed` 允许你搜索模式并对匹配这些模式的行执行操作。

**`sed` 的基本语法：**

`sed` 的基本语法如下：

```
sed [options] 'command' file_name
```

这里 `command` 用于执行诸如替换、删除、插入等操作。`filename` 是你要处理的文件的名称。

`sed` **用法：**

**1. 替换：**

`sed` 使用 `s` 标志替换文本。`old-text` 被 `new-text` 替换：

```
sed 's/old-text/new-text/' filename
```

例如，要将日志文件 `system.log` 中的所有“error”实例更改为“warning”：

```
sed 's/error/warning/' system.log
```

**2. 打印包含特定模式的行：**

使用 `sed` 过滤并显示与特定模式匹配的行：

```
sed -n '/pattern/p' filename
```

例如，要查找所有包含“ERROR”的行：

```
sed -n '/ERROR/p' system.log
```

**3. 删除包含特定模式的行：**

你可以从输出中删除与特定模式匹配的行：

```
sed '/pattern/d' filename
```

例如，要删除所有包含“DEBUG”的行：

```
sed '/DEBUG/d' system.log
```

**4. 提取日志行的特定字段：**

你可以使用正则表达式提取行的一部分。假设每一行日志都以格式“YYYY-MM-DD”开头。你可以从每行中提取日期：

```
sed -n 's/^\([0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}\).*/\1/p' system.log
```

#### 使用 `awk` 解析文本

`awk` 能够轻松地将每行拆分为字段。它非常适合处理结构化文本，如日志文件。

**`awk` 的基本语法**

`awk` 的基本语法是：

```
awk 'pattern { action }' file_name
```

其中，`pattern` 是必须满足的条件，以便执行 `action`。如果模式被省略，则对每一行执行操作。

在接下来的示例中，你将使用这个日志文件作为示例：

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

- **使用 `awk` 访问列**


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

这将打印所有包含“ERROR”的行。

-   **提取第一个字段（日期和时间）**

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
2024-04-25 09:08:007
2024-04-25 09:09:00
```

这将从每行中提取前两个字段，在这种情况下是日期和时间。

-   **总结每个日志级别的次数**

```
awk '{ count[$3]++ } END { for (level in count) print level, count[level] }' logfile.log

# 输出
 1
WARN 1
ERROR 1
DEBUG 2
INFO 6
```

输出将是每个日志级别的出现次数的总结。

-   **过滤特定字段（例如，第3个字段为INFO）**

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

这条命令将提取所有第3个字段为“INFO”的行。

💡 **提示:** `awk`的默认分隔符是空格。如果您的日志文件使用不同的分隔符，可以使用`-F`选项来指定。例如，如果日志文件使用冒号作为分隔符，可以使用`awk -F: '{ print $1 }' logfile.log`来提取第一个字段。

#### 使用`cut`解析日志文件

`cut`命令是一个简单但功能强大的命令，用于从输入的每一行中提取文本部分。由于日志文件是结构化的，每个字段由特定字符（如空格、制表符或自定义分隔符）分隔，`cut`非常适合提取这些特定字段。

`cut`命令的基本语法是：

```
cut [选项] [文件]
```

`cut`命令的一些常用选项：

-   `-d` : 指定作为字段分隔符的分隔符。
    
-   `-f` : 选择要显示的字段。
    
-   `-c` : 指定字符位置。
    

例如，下面的命令将从日志文件的每一行中提取第一个字段（由空格分隔）：

```
cut -d ' ' -f 1 logfile.log
```

**使用**`cut`**解析日志的示例**

假设您有一个结构如下的日志文件，其中字段是用空格分隔的：

```
2024-04-25 08:23:01 INFO 192.168.1.10 User logged in successfully.
2024-04-25 08:24:15 WARNING 192.168.1.10 Disk usage exceeds 90%.
2024-04-25 08:25:02 ERROR 10.0.0.5 Connection timed out.
...
```

可以使用`cut`命令如下：

1.  **提取每条日志记录的时间**：

```
cut -d ' ' -f 2 system.log

# 输出
08:23:01
08:24:15
08:25:02
...
```

这个命令使用空格作为分隔符，选择第二个字段，即每条日志记录的时间部分。

2.  **提取日志中的IP地址**:

```
cut -d ' ' -f 4 system.log

# 输出
192.168.1.10
192.168.1.10
10.0.0.5
```

这个命令提取每条日志记录的第四个字段，即IP地址。

3.  **提取日志级别（INFO, WARNING, ERROR）**:

```
cut -d ' ' -f 3 system.log

# 输出
INFO
WARNING
ERROR
```

这个命令提取包含日志级别的第三个字段。

4.  **将**`cut`**与其他命令结合使用**：

其他命令的输出可以通过管道传递给`cut`命令。例如，您想在`cut`之前过滤日志，可以使用`grep`提取包含“ERROR”的行，然后使用`cut`获取这些行的特定信息：

```
grep "ERROR" system.log | cut -d ' ' -f 1,2

# 输出
2024-04-25 08:25:02
```

这个命令首先过滤出包含“ERROR”的行，然后从这些行中提取日期和时间。

5.  **提取多个字段**：

可以通过指定一个范围或一个逗号分隔的字段列表，一次提取多个字段：

```
cut -d ' ' -f 1,2,3 system.log` 

# 输出
2024-04-25 08:23:01 INFO
2024-04-25 08:24:15 WARNING
2024-04-25 08:25:02 ERROR
...
```

上述命令从每条日志记录中提取前三个字段，即日期、时间和日志级别。
```

对日志文件进行排序和移除重复项是常见的操作。`sort` 和 `uniq` 命令是用来排序和移除输入中重复项的强大命令。

**sort 的基本语法**

`sort` 命令按字母或数字顺序组织文本行。

```
sort [options] [file]
```

sort 命令的一些关键选项：

-   `-n`: 假设文件内容是数字，按数字排序。
    
-   `-r`: 反转排序顺序。
    
-   `-k`: 指定要排序的键或列号。
    
-   `-u`: 排序并移除重复行。
    

`uniq` 命令用于过滤或计数并报告文件中重复的行。

`uniq` 的语法是：

```
uniq [options] [input_file] [output_file]
```

`uniq` 命令的一些关键选项：

-   `-c`: 在行前显示出现次数。
    
-   `-d`: 只打印重复行。
    
-   `-u`: 只打印唯一行。
    

#### 使用 `sort` 和 `uniq` 进行日志解析的示例

假设以下示例日志条目用于这些演示：

```
2024-04-25 INFO User logged in successfully.
2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 ERROR Connection timed out.
2024-04-25 INFO User logged in successfully.
2024-04-26 INFO Scheduled maintenance.
2024-04-26 ERROR Connection timed out.
```

1.  **按日期排序日志条目**：

```
sort system.log

# Output
2024-04-25 INFO User logged in successfully.
2024-04-25 INFO User logged in successfully.
2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 ERROR Connection timed out.
2024-04-26 ERROR Connection timed out.
2024-04-26 INFO Scheduled maintenance.
```

这会按字母顺序对日志条目进行排序，如果日期是第一个字段，这实际上是按日期排序。

2.  **排序并移除重复项**：

```
sort system.log | uniq

# Output
2024-04-25 INFO User logged in successfully.
2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 ERROR Connection timed out.
2024-04-26 INFO Scheduled maintenance.
```

这个命令对日志文件进行排序并将其传递给 `uniq`，移除重复行。

3.  **统计每行的出现次数**：

```
sort system.log | uniq -c

# Output
2 2024-04-25 INFO User logged in successfully.
1 2024-04-25 WARNING Disk usage exceeds 90%.
2 2024-04-26 ERROR Connection timed out.
1 2024-04-26 INFO Scheduled maintenance.
```

排序日志条目然后统计每行的唯一行。根据输出，'2024-04-25 INFO User logged in successfully.' 这一行在文件中出现了 2 次。

4.  **识别唯一日志条目**：

```
sort system.log | uniq -u

# Output

2024-04-25 WARNING Disk usage exceeds 90%.
2024-04-26 INFO Scheduled maintenance.
```

这个命令只显示唯一的行。

5.  **按日志级别排序**：

```
sort -k2 system.log

# Output
2024-04-26 ERROR Connection timed out.
2024-04-26 ERROR Connection timed out.
2024-04-25 INFO User logged in successfully.
2024-04-25 INFO User logged in successfully.
2024-04-26 INFO Scheduled maintenance.
2024-04-25 WARNING Disk usage exceeds 90%.
```

根据第二个字段（日志级别）对条目进行排序。

### 8.4. 通过命令行管理 Linux 进程

进程是程序的运行实例。一个进程包括：

-   分配内存的地址空间。
    
-   进程状态。
    
-   所有权、安全属性和资源使用等属性。
    

进程还包含一个环境，包括：

-   本地和全局变量
    
-   当前的调度上下文
    
-   分配的系统资源，如网络端口或文件描述符。
    

当你运行 `ls -l` 命令时，操作系统会创建一个新进程来执行该命令。该进程有一个 ID，一个状态，并且在命令完成之前一直运行。

#### 理解进程创建和生命周期

在 Ubuntu 中，所有进程都源自初始的系统进程 `systemd`，这是内核在启动时第一个启动的进程。

`systemd` 进程的进程 ID（PID）为 `1`，负责初始化系统、启动和管理其他进程以及处理系统服务。系统上的所有其他进程都是 `systemd` 的后代。

父进程复制其自己的地址空间（fork）以创建一个新的（子）进程结构。每个新进程都会被分配一个唯一的进程 ID（PID）以进行跟踪和安全目的。PID 和父进程 ID（PPID）是新进程环境的一部分。任何进程都可以创建子进程。

![进程及其初始化到父子关系](https://cdn.hashnode.com/res/hashnode/image/upload/v1719584071059/f24fac4b-18f3-4a39-8659-93d32c533256.png)

通过 fork 例程，子进程继承了安全身份、以前和当前的文件描述符、端口和资源权限、环境变量和程序代码。子进程然后可以执行其自己的程序代码。

通常，父进程在子进程运行时处于休眠状态，设置一个请求（wait）以便在子进程完成时得到通知。

退出时，子进程已经关闭或丢弃了其资源和环境。唯一剩余的资源是进程表中的一项，称为僵尸。子进程退出时唤醒父进程，并清理进程表中的子进程条目，从而释放子进程的最后一个资源。父进程然后继续执行其自己的程序代码。

在 Linux 中，进程在其生命周期中会假设不同的状态。进程的状态表示进程当前正在做什么以及如何与系统交互。进程根据其执行状态和系统的调度算法在状态之间转换。

![Linux process states and transitions](https://cdn.hashnode.com/res/hashnode/image/upload/v1719584116150/3054dfe2-c42c-4d62-9e12-e3aec479d53a.png)

Linux 系统中的进程可以处于以下状态之一：

| **状态** | **描述** |
| --- | --- |
| **(new)** | 通过 fork 系统调用创建进程时的初始状态。 |
| **可运行 (ready) (R)** | 进程准备好运行并等待在 CPU 上调度。 |
| **运行中 (用户态) (R)** | 进程在用户模式下执行，运行用户应用程序。 |
| **运行中 (内核态) (R)** | 进程在内核模式下执行，处理系统调用或硬件中断。 |
| **休眠 (S)** | 进程在等待事件（例如 I/O 操作）完成，并且可以很容易被唤醒。 |
| **休眠 (不可中断) (D)** | 进程处于不可中断的休眠状态，等待特定条件（通常是 I/O）完成，不能被信号中断。 |
| **休眠 (磁盘休眠) (K)** | 进程在等待磁盘 I/O 操作完成。 |
| **休眠 (空闲) (I)** | 进程是空闲的，没有进行任何工作，等待事件发生。 |
| **停止 (T)** | 进程执行已停止，通常由信号引起，并且可以稍后恢复。 |
| **僵尸 (Z)** | 进程已完成执行，但仍在进程表中有一个条目，等待其父进程读取其退出状态。 |

进程在以下方式之间转换：

| **转换** | **描述** |
| --- | --- |
| **Fork** | 从父进程创建一个新进程，从 (new) 转换到可运行 (ready) (R)。 |
| **调度** | 调度程序选择一个可运行的进程，将其转换为运行中 (用户态) 或 运行中 (内核态) 状态。 |
| **运行** | 当调度执行时，进程从可运行 (ready) (R) 转换为运行中 (内核态) (R)。 |
| **抢占或重新调度** | 进程可以被抢占或重新调度，移动回可运行 (ready) (R) 状态。 |
| **系统调用** | 进程进行系统调用，从运行中 (用户态) (R) 转换为运行中 (内核态) (R)。 |
| **返回** | 进程完成系统调用并返回到运行中 (用户态) (R)。 |
| **等待** | 进程等待事件，从运行中 (内核态) (R) 转换到休眠状态之一 (S, D, K, 或 I)。 |
| **事件或信号** | 进程被事件或信号唤醒，从休眠状态移动回可运行 (ready) (R)。 |
| **挂起** | 进程被挂起，从运行中 (内核态) 或 可运行 (ready) 转换为停止 (T)。 |
| **恢复** | 进程恢复，从停止 (T) 移动回可运行 (ready) (R)。 |
| **退出** | 进程终止，从运行中 (用户态) 或 运行中 (内核态) 转换为僵尸 (Z)。 |
| **清理** | 父进程读取僵尸进程的退出状态，将其从进程表中移除。 |

#### 如何查看进程

你可以使用 `ps` 命令及其组合选项来查看 Linux 系统上的进程。`ps` 命令用于显示关于一组选定活跃进程的信息。例如，`ps aux` 显示系统上运行的所有进程。

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
*... output truncated ....*
```

上面的输出显示了系统上当前运行的进程的快照。每一行代表一个进程，其列如下：

1.  `USER`: 拥有该进程的用户。
    
2.  `PID`: 进程 ID。
    
3.  `%CPU`: 进程的 CPU 使用率。
    
4.  `%MEM`: 进程的内存使用率。
    
5.  `VSZ`: 进程的虚拟内存大小。
    
6.  `RSS`: 驻留集大小，即任务使用的非交换物理内存。
    
7.  `TTY`: 进程的控制终端。`?` 表示无控制终端。
    
8.  `STAT`: 进程状态。
    
    -   `R`: 运行中
        
    -   `I` 或 `S`: 可中断休眠（等待事件完成）
        
    -   `D`: 不可中断休眠（通常是 IO）
        
    -   `T`: 停止（由作业控制信号引起或因为正在被跟踪）
        
    -   `Z`: 僵尸（已终止但未被其父进程清理）
        
    -   `Ss`: 会话领导者。此进程已启动会话，并且是进程组的领导者，可以控制终端信号。第一个 `S` 表示休眠状态，第二个 `s` 表示它是会话领导者。
        
9.  `START`: 进程的启动时间或日期。
    
10.  `TIME`: 累计 CPU 时间。
    
11.  `COMMAND`: 启动进程的命令。


在本节中，您将学习如何通过在后台或前台运行作业来控制作业。

一个作业是由 shell 启动的进程。当您在终端中运行命令时，它被视为一个作业。一个作业可以在前台运行，也可以在后台运行。

为了演示控制，您首先需要创建 3 个进程，然后将它们放在后台运行。之后，您将列出这些进程并在前台和后台之间切换它们。您还将了解如何将它们置于休眠状态或完全退出。

1. 创建三个进程

打开终端并启动三个长时间运行的进程。使用 `sleep` 命令，保持进程运行指定的秒数。

```
# 运行 300、400 和 500 秒的 sleep 命令
sleep 300 &
sleep 400 &
sleep 500 &
```

每个命令末尾的 `&` 将进程移到后台运行。

2. 显示后台作业

使用 `jobs` 命令显示后台作业列表。

```
jobs
```

输出应该类似如下所示：

```
jobs
[1]   Running                 sleep 300 &
[2]-  Running                 sleep 400 &
[3]+  Running                 sleep 500 &
```

3. 将后台作业移到前台

要将后台作业移到前台，请使用 `fg` 命令并跟上作业编号。例如，将第一个作业（`sleep 300`）移到前台：

```
fg %1
```

这将把作业 `1` 移到前台。

4. 将前台作业移回后台

当作业在前台运行时，您可以按下 `Ctrl+Z` 来暂停它并将其移回后台。

暂停的作业将如下所示：

```
zaira@zaira:~$ fg %1
sleep 300

^Z
[1]+  Stopped                 sleep 300

zaira@zaira:~$ jobs
# 暂停的作业
[1]+  Stopped                 sleep 300
[2]   Running                 sleep 400 &
[3]-  Running                 sleep 500 &
```

现在使用 `bg` 命令在后台恢复 ID 为 1 的作业。

```
# 按 Ctrl+Z 暂停前台作业
# 然后在后台恢复它
bg %1
```

5. 再次显示作业

```
jobs
[1]   Running                 sleep 300 &
[2]-  Running                 sleep 400 &
[3]+  Running                 sleep 500 &
```

在本次练习中，您：

- 使用 sleep 命令启动了三个后台进程。
  
- 使用 jobs 显示后台作业列表。
  
- 使用 `fg %job_number` 将作业移到前台。
  
- 使用 `Ctrl+Z` 暂停作业并使用 `bg %job_number` 将其移回后台。
  
- 再次使用 jobs 验证后台作业的状态。
  

现在您知道如何控制作业了。

#### 终止进程

可以使用 `kill` 命令终止无响应或不需要的进程。`kill` 命令会向进程 ID 发送一个信号，要求其终止。

`kill` 命令有多种可用选项。

```
# 使用 kill 的可用选项

kill -l
 1) SIGHUP     2) SIGINT     3) SIGQUIT     4) SIGILL     5) SIGTRAP
 6) SIGABRT     7) SIGBUS     8) SIGFPE     9) SIGKILL    10) SIGUSR1
11) SIGSEGV    12) SIGUSR2    13) SIGPIPE    14) SIGALRM    15) SIGTERM
16) SIGSTKFLT    17) SIGCHLD    18) SIGCONT    19) SIGSTOP    20) SIGTSTP
21) SIGTTIN    22) SIGTTOU    23) SIGURG    24) 
...已终止
```

以下是一些在 Linux 中使用 `kill` 命令的示例：

1. **按 PID（进程 ID）终止进程：**
    
    ```
     kill 1234
    ```
    
    此命令向 PID 为 1234 的进程发送默认的 `SIGTERM` 信号，要求其终止。
    
2. **按名称终止进程：**
    
    ```
     pkill process_name
    ```
    
    此命令向所有具有指定名称的进程发送默认的 `SIGTERM` 信号。
    
3. **强制终止进程：**
    
    ```
     kill -9 1234
    ```
    
    此命令向 PID 为 1234 的进程发送 `SIGKILL` 信号，强制终止它。
    
4. **向进程发送特定信号：**
    
    ```
     kill -s SIGSTOP 1234
    ```
    
    此命令向 PID 为 1234 的进程发送 `SIGSTOP` 信号，停止它。
    
5. **终止特定用户拥有的所有进程：**
    
    ```
     pkill -u username
    ```
    
    此命令向所有由指定用户拥有的进程发送默认的 `SIGTERM` 信号。
    

这些示例演示了在 Linux 环境中使用 `kill` 命令管理进程的各种方法。

以下是有关 `kill` 命令选项和信号的信息表：该表总结了在 Linux 中用于管理进程的最常见 `kill` 命令选项和信号。

| 命令 / 选项 | 信号 | 描述 |
| --- | --- | --- |
| `kill <pid>` | `SIGTERM` | 请求进程正常终止（默认信号）。 |
| `kill -9 <pid>` | `SIGKILL` | 强制进程立即终止且无需清理。 |
| `kill -SIGKILL <pid>` | `SIGKILL` | 强制进程立即终止且无需清理。 |
| `kill -15 <pid>` | `SIGTERM` | 显式发送 `SIGTERM` 信号请求正常终止。 |
| `kill -SIGTERM <pid>` | `SIGTERM` | 显式发送 `SIGTERM` 信号请求正常终止。 |
| `kill -1 <pid>` | `SIGHUP` | 传统意义上表示“挂起”；可用于重新加载配置文件。 |
| `kill -SIGHUP <pid>` | `SIGHUP` | 传统意义上表示“挂起”；可用于重新加载配置文件。 |
| `kill -2 <pid>` | `SIGINT` | 请求进程终止（与在终端中按 `Ctrl+C` 相同）。 |
| `kill -SIGINT <pid>` | `SIGINT` | 请求进程终止（与在终端中按 `Ctrl+C` 相同）。 |
| `kill -3 <pid>` | `SIGQUIT` | 使进程终止并产生核心转储以进行调试。 |
| `kill -SIGQUIT <pid>` | `SIGQUIT` | 使进程终止并产生核心转储以进行调试。 |
| `kill -19 <pid>` | `SIGSTOP` | 暂停进程。 |
| `kill -SIGSTOP <pid>` | `SIGSTOP` | 暂停进程。 |
| `kill -18 <pid>` | `SIGCONT` | 恢复被暂停的进程。 |
| `kill -SIGCONT <pid>` | `SIGCONT` | 恢复被暂停的进程。 |
| `killall <name>` | 变化 | 向所有具有给定名称的进程发送信号。 |
| `killall -9 <name>` | `SIGKILL` | 强制终止所有具有给定名称的进程。 |
| `pkill <pattern>` | 变化 | 向基于模式匹配的进程发送信号。 |
| `pkill -9 <pattern>` | `SIGKILL` | 强制终止所有匹配模式的进程。 |
| `xkill` | `SIGKILL` | 图形化工具，允许点击一个窗口以终止相应的进程。 |

读取输入和写入输出是理解命令行和Shell脚本的一个基本部分。在Linux中，每个进程都有三条默认的流：

1.  标准输入 (`stdin`): 这个流用于输入，通常来自键盘。当程序从 `stdin` 读取时，它接收到的是用户输入的数据或从文件重定向的数据。文件描述符是操作系统分配给打开文件的唯一标识符，用于跟踪打开的文件。
    
    `stdin` 的文件描述符是 `0`。
    
2.  标准输出 (`stdout`): 这是进程写入其输出的默认输出流。默认情况下，标准输出是终端。输出也可以重定向到文件或另一个程序。`stdout` 的文件描述符是 `1`。
    
3.  标准错误 (`stderr`): 这是进程写入其错误消息的默认错误流。默认情况下，标准错误是终端，即使 `stdout` 被重定向，错误消息也能被看到。`stderr` 的文件描述符是 `2`。
    

#### 重定向和管道

**重定向:** 你可以将错误和输出流重定向到文件或其他命令。例如：

```
# 将 stdout 重定向到文件
ls > output.txt

# 将 stderr 重定向到文件
ls non_existent_directory 2> error.txt

# 将 stdout 和 stderr 都重定向到文件
ls non_existent_directory > all_output.txt 2>&1
```

在最后一条命令中，

-   `ls non_existent_directory`: 列出一个名为 non\_existent\_directory 的目录内容。由于这个目录不存在，`ls` 将生成一条错误消息。
    
-   `> all_output.txt`: `>` 操作符将 `ls` 命令的标准输出 (`stdout`) 重定向到文件 `all_output.txt`。如果文件不存在，将会创建新文件。如果存在，其内容将被覆盖。
    
-   `2>&1:`: 这里，`2` 代表标准错误 (`stderr`) 的文件描述符。`&1` 代表标准输出 (`stdout`) 的文件描述符。`&` 字符用于指定 `1` 不是文件名而是文件描述符。
    

所以，`2>&1` 的意思是“将标准错误 (2) 重定向到当前标准输出 (1) 的位置”，在这种情况下就是文件 `all_output.txt`。因此，`ls` 的输出（如果有）和错误消息都会写入 `all_output.txt`。

**管道:**

你可以使用管道 (`|`) 将一个命令的输出作为另一个命令的输入：

```
ls | grep image
# 输出
image-10.png
image-11.png
image-12.png
image-13.png
... 输出截断 ...
```

### 8.6 Linux中的自动化 – 使用Cron Jobs自动化任务

Cron 是一个强大的作业调度工具，适用于类Unix操作系统。通过配置cron，你可以设置自动化作业在每日、每周、每月或其他特定时间运行。Cron 提供的自动化能力在 Linux 系统管理中起着至关重要的作用。

`crond` 守护进程（在后台运行的一种计算机程序）启用 cron 功能。cron 通过读取 **crontab** (cron 表) 来运行预定义的脚本。

通过使用特定的语法，你可以配置 cron 作业以自动调度脚本或其他命令运行。

**什么是 Linux 中的 cron 作业？**

通过 cron 调度的任何任务都称为 cron 作业。

现在，我们来看看 cron 作业是如何工作的。

#### 如何控制对cron的访问

为了使用 cron 作业，管理员需要在 `/etc/cron.allow` 文件中允许用户添加 cron 作业。

如果你收到这样的提示，说明你没有使用 cron 的权限。

![Cron job addition denied for user John.](https://www.freecodecamp.org/news/content/images/2021/11/image-51.png)

要允许 John 使用 cron，在 `/etc/cron.allow` 中加入他的名字。如果文件不存在，请创建该文件。这将允许 John 创建和编辑 cron 作业。

![Allowing John in file cron.allow](https://www.freecodecamp.org/news/content/images/2021/11/image-52.png)

也可以通过将用户名输入文件 `/etc/cron.d/cron.deny` 来拒绝用户对 cron 作业的访问。

#### 如何在 Linux 中添加 cron 作业

首先，要使用 cron 作业，你需要检查 cron 服务的状态。如果 cron 未安装，可以通过包管理器轻松下载。只需使用以下命令检查：

```
# 检查 Linux 系统上的 cron 服务
sudo systemctl status cron.service
```

#### Cron 作业语法

Crontabs 使用以下标志添加和列出 cron 作业：

-   `crontab -e`: 编辑 crontab 项以添加、删除或编辑 cron 作业。
    
-   `crontab -l`: 列出当前用户的所有 cron 作业。
    
-   `crontab -u username -l`: 列出其他用户的 cron 作业。
    
-   `crontab -u username -e`: 编辑其他用户的 cron 作业。
    

当你列出 crons 并且它们存在，你会看到类似如下的内容：

```
# Cron 作业示例
* * * * * sh /path/to/script.sh
```

在上面的例子中，

-   `*` 分别代表分钟、小时、日期、月份、星期。详见以下这些值的详情：

|  | **值** | **描述** |
| --- | --- | --- |
| 分钟 | 0-59 | 在具体分钟执行命令。 |
| 小时 | 0-23 | 在具体小时执行命令。 |
| 日期 | 1-31 | 在这些天执行命令。 |
| 月份 | 1-12 | 执行任务的月份。 |
| 星期 | 0-6 | 执行命令的星期几。这里，0 是星期天。 |

下面是 cron 任务语法的摘要：

```
*   *   *   *   *  sh /path/to/script/script.sh
|   |   |   |   |              |
|   |   |   |   |      要执行的命令或脚本
|   |   |   |   |
|   |   |   |   |
|   |   |   |   |
|   |   |   | 星期几(0-6)
|   |   |   |
|   |   | 月份(1-12)
|   |   |
|   | 日期(1-31)
|   |
| 小时(0-23)
|
分钟(0-59)
```

#### Cron 任务示例

下面是一些调度 cron 任务的示例。

| **SCHEDULE (计划)** | **SCHEDULED VALUE (计划值)** |
| --- | --- |
| `5 0 * 8 *` | 在八月的 00:05。 |
| `5 4 * * 6` | 在每个星期六的 04:05。 |
| `0 22 * * 1-5` | 在每周一到周五的 22:00。 |

如果你一时间无法全部掌握也没关系。你可以在 [crontab guru][54] 网站上练习并生成 cron 计划。

#### 如何设置一个 cron 任务

在本节中，我们将通过一个示例来了解如何通过 cron 任务调度一个简单的脚本。

1.  创建一个名为 `date-script.sh` 的脚本，该脚本会打印系统日期和时间并追加到一个文件中。脚本如下所示：

```
#!/bin/bash

echo `date` >> date-out.txt
```

2\. 通过赋予执行权限使脚本可执行。

```
chmod 775 date-script.sh
```

3\. 使用 `crontab -e` 将脚本添加到 crontab 中。

在这里，我们将它计划为每分钟运行一次。

```
*/1 * * * * /bin/sh /root/date-script.sh
```

4\. 查看 `date-out.txt` 文件的输出。根据脚本，系统日期应该每分钟打印到这个文件。

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

**如何排除 crons 故障**

Crons 非常有用，但有时可能不会按预期工作。幸运的是，有一些有效的方法可以用来排除它们的故障。

**1\. 检查计划。**

首先，你可以尝试验证为 cron 设置的计划。你可以使用上面部分中看到的语法来实现。

**2**. **检查 cron 日志。**

首先，你需要检查 cron 是否在计划时间运行。在 Ubuntu 中，可以从 `/var/log/syslog` 中验证这一点。

如果在正确的时间点这些日志中有条目，则表示 cron 按照你设置的计划运行。

下面是我们的 cron 任务示例的日志。请注意显示时间戳的第一列。脚本的路径也在行尾提到。1、3 和 5 行表明脚本按预期运行。

```
1 Jun 26 17:02:01 zaira-ThinkPad CRON[27834]: (zaira) CMD (/bin/sh /home/zaira/date-script.sh)
2 Jun 26 17:02:02 zaira-ThinkPad systemd[2094]: Started Tracker metadata extractor.
3 Jun 26 17:03:01 zaira-ThinkPad CRON[28255]: (zaira) CMD (/bin/sh /home/zaira/date-script.sh)
4 Jun 26 17:03:02 zaira-ThinkPad systemd[2094]: Started Tracker metadata extractor.
5 Jun 26 17:04:01 zaira-ThinkPad CRON[28538]: (zaira) CMD (/bin/sh /home/zaira/date-script.sh)
```

**3\. 将 cron 输出重定向到文件。**

你可以将 cron 的输出重定向到一个文件，并检查该文件以寻找可能的错误。

```
# 将 cron 输出重定向到文件
* * * * * sh /path/to/script.sh &> log_file.log
```

### 8.7. Linux 网络基础

Linux 提供了许多命令来查看网络相关的信息。在本节中，我们将简要讨论一些命令。

#### 使用 `ifconfig` 查看网络接口

`ifconfig` 命令会提供关于网络接口的信息。以下是一个示例输出：

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
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (本地回环)
        RX packets 256  bytes 20480 (20.4 KB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 256  bytes 20480 (20.4 KB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

`ifconfig` 命令的输出显示了系统上配置的网络接口，以及 IP 地址、MAC 地址、数据包统计等详细信息。

这些接口可以是物理设备或虚拟设备。

使用 `ip -4 addr` 和 `ip -6 addr` 可以分别提取 IPv4 和 IPv6 地址。

**使用**`netstat`**查看网络活动**

`netstat` 命令通过提供以下信息显示网络活动和统计数据：

以下是一些在命令行中使用 `netstat` 命令的示例：

#### 使用 `ping` 检查两台设备之间的网络连接

`ping` 用于测试两台设备之间的网络连接。它会向目标设备发送 ICMP 数据包并等待响应。

```
ping google.com
```

`ping` 测试是否能在没有超时的情况下收到返回的响应。

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

你可以通过 `Ctrl + C` 来停止响应。

#### 使用 `curl` 命令测试端点

`curl` 命令代表“客户端 URL”。它用于将数据传输到服务器或从服务器传输数据。它也可以用来测试 API 端点，有助于排除系统和应用程序错误。

作为一个例子，你可以使用 [`http://www.official-joke-api.appspot.com/`][55] 来试验 `curl` 命令。

-   默认情况下，不带任何选项的 `curl` 命令使用 GET 方法。

```
curl http://www.official-joke-api.appspot.com/random_joke
{"type":"general",
"setup":"What did the fish say when it hit the wall?","punchline":"Dam.","id":1}
```

-   `curl -o` 将输出保存到指定的文件中。

```
curl -o random_joke.json http://www.official-joke-api.appspot.com/random_joke
# 将输出保存到 random_joke.json
```

-   `curl -I` 只获取头部信息。

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

#### 使用 `sar` 的系统活动报告

Linux 中的 `sar` 命令是一个强大的工具，用于收集、报告和保存系统活动信息。它是 `sysstat` 包的一部分，被广泛用于监控系统性能。

要使用 `sar`，你首先需要使用 `sudo apt install sysstat` 安装 `sysstat`。

安装完成后，使用 `sudo systemctl start sysstat` 启动服务。

使用 `sudo systemctl status sysstat` 验证状态。

一旦状态为 active，系统将开始收集各种统计数据，你可以使用这些数据来访问和分析历史数据。我们很快就会详细了解这一点。

`sar` 命令的语法如下：

```
sar [options] [interval] [count]
```

例如，`sar -u 1 3` 将每秒显示一次 CPU 利用率统计信息，共三次。

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

以下是 `sar` 命令的一些常见用法和示例。

`sar` 可用于多种用途：

##### 1\. 内存使用情况

要检查内存使用情况（空闲和已用），请使用：

```
sar -r 1 3

Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:10:46    kbmemfree   kbavail kbmemused  %memused kbbuffers  kbcached  kbcommit   %commit  kbactive   kbinact   kbdirty
19:10:47      4600104   8934352   5502124     36.32    375844   4158352  15532012     65.99   6830564   2481260       264
19:10:48      4644668   8978940   5450252     35.98    375852   4165648  15549184     66.06   6776388   2481284        36
19:10:49      4646548   8980860   5448328     35.97    375860   4165648  15549224     66.06   6774368   2481292       116
Average:      4630440   8964717   5466901     36.09    375852   4163216  15543473     66.04   6793773   2481279       139
```

此命令每秒显示一次内存统计信息，共三次。

##### 2\. 交换空间利用率

要查看交换空间利用率统计信息，请使用：

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

此命令有助于监控交换空间的使用情况，这对于物理内存用尽的系统来说至关重要。

##### 3\. I/O 设备负载

```
sar -d 1 3
```

此命令提供关于数据传输到和从块设备的详细统计信息，对于诊断 I/O 瓶颈非常有用。

##### 5\. 网络统计

要查看网络统计信息，例如网络接口接收（传输）的数据包数：

```
sar -n DEV 1 3
# -n DEV 告诉 sar 报告网络设备接口
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

这会显示每秒三秒钟的网络统计信息，帮助监控网络流量。

##### 6\. 历史数据

回想一下，之前我们安装了 `sysstat` 软件包并运行了服务。按以下步骤启用和访问历史数据。

1\. **启用数据收集：** 编辑 `sysstat` 配置文件以启用数据收集。
    
    ```
     sudo nano /etc/default/sysstat
    ```
    
    将 `ENABLED="false"` 更改为 `ENABLED="true"`。
    
    ```
     vim /etc/default/sysstat
     #
     # /etc/init.d/sysstat、/etc/cron.d/sysstat 和 /etc/cron.daily/sysstat 文件的默认设置
     #
    
     # sadc 应该收集系统活动信息吗？有效值为 "true" 和 "false"。请不要放置其他值，否则它们将被 debconf 覆盖！
     ENABLED="true"
    ```
    
2\. **配置数据收集间隔：** 编辑 cron 任务配置以设置数据收集间隔。
    
    ```
     sudo nano /etc/cron.d/sysstat
    ```
    
    默认情况下，它每 10 分钟收集一次数据。您可以通过修改 cron 任务时间表来调整间隔。相关文件将进入 `/var/log/sysstat` 文件夹。
    
3\. **查看历史数据：** 使用 `sar` 命令查看历史数据。例如，要查看当天的 CPU 使用情况：
    
    ```
     sar -u
    ```
    
    要查看特定日期的数据：
    
    ```
     sar -u -f /var/log/sysstat/sa<DD>
    ```
    
    将 `<DD>` 替换为您要查看数据的月份中的某一天。
    
    在以下命令中，`/var/log/sysstat/sa04` 为当前月份的第 4 天提供统计数据。
    

```
sar -u -f /var/log/sysstat/sa04
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

15:20:49     LINUX RESTART    (12 CPU)

16:13:30     LINUX RESTART    (12 CPU)

18:16:00        CPU     %user     %nice   %system   %iowait    %steal     %idle
18:16:01        all      0.25      0.00      0.67      0.08      0.00     99.00
Average:        all      0.25      0.00      0.67      0.08      0.00     99.00
```

##### 7\. 实时 CPU 中断

要观察 CPU 每秒处理的实时中断数，请使用此命令：

```
sar -I SUM 1 3

# Output
Linux 6.5.0-28-generic (zaira-ThinkPad)     04/06/24     _x86_64_    (12 CPU)

19:14:22         INTR    intr/s
19:14:23          sum   5784.00
19:14:24          sum   5694.00
19:14:25          sum   5795.00
Average:          sum   5757.67
```

该命令有助于监控 CPU 处理中断的频率，这对于实时性能调整至关重要。

这些示例说明了如何使用 `sar` 监控系统性能的各个方面。定期使用 `sar` 有助于识别系统瓶颈，确保应用程序持续高效运行。

### 8.9. 服务器的一般故障排除策略

**我们为什么需要了解监控？**

系统监控是系统管理的重要方面。关键应用程序需要高度的主动性以防止故障并减少停机影响。

Linux 提供了非常强大的工具来评估系统健康状况。在本节中，您将了解检测系统健康状况并识别瓶颈的各种方法。

#### 查找负载平均值和系统正常运行时间

系统重新启动可能会导致一些配置问题。要检查机器运行时间，请使用命令：`uptime`。除了正常运行时间外，该命令还显示负载平均值。

```
[user@host ~]$ uptime 19:15:00 up 1:04, 0 users, load average: 2.92, 4.48, 5.20
```

负载平均值是系统在最近 1 分钟、5 分钟和 15 分钟的负载。一瞥即可显示系统负载是否随着时间增加或减少。

每个 CPU 的负载可以通过将负载平均值除以可用 CPU 的总数来计算。

要查找 CPU 的数量，请使用命令 `lscpu`。

```
lscpu
# 输出
Architecture:            x86_64
  CPU op-mode(s):        32-bit, 64-bit
  Address sizes:         48 bits physical, 48 bits virtual
  Byte Order:            Little Endian
CPU(s):                  12
  On-line CPU(s) list:   0-11
.
.
.
输出省略
```

如果负载平均值似乎增加并且未下降，则 CPU 可能过载。有些进程可能陷入僵局或存在内存泄漏。

#### 计算空闲内存

有时，高内存使用率可能会导致问题。要检查可用内存和正在使用的内存，请使用 `free` 命令。

```
free -mh
# 输出
               total        used        free      shared  buff/cache   available
Mem:            14Gi       3.5Gi       7.7Gi       109Mi       3.2Gi        10Gi
Swap:          8.0Gi          0B       8.0Gi
```

#### 计算磁盘空间

为了确保系统的健康性，不要忘记磁盘空间。要列出所有可用的挂载点及其各自的使用百分比，请使用以下命令。理想情况下，已使用的磁盘空间不应超过 80%。

`df` 命令提供详细的磁盘空间。

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

可以监控进程状态以查看是否有高内存或 CPU 使用率的卡住进程。

我们之前看到 `ps` 命令提供了关于进程的有用信息。查看 `CPU` 和 `MEM` 列。

```
[user@host ~]$ ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
 runner         1  0.1  0.0 1535464 15576 ?       S  19:18   0:00 /inject/init
 runner        14  0.0  0.0  21484  3836 pts/0    S   19:21   0:00 bash --norc
 runner        22  0.0  0.0  37380  3176 pts/0    R+   19:23   0:00 ps aux
```

#### 实时系统监控

实时监控提供了系统实时状态的窗口。

一个可以用来做这件事的工具是 `top` 命令。

`top` 命令显示系统进程的动态视图，显示一个摘要头，然后是进程或线程列表。与其静态对应物 `ps` 不同，`top` 会连续刷新系统统计信息。

使用 `top`，您可以在一个紧凑的窗口中看到组织良好的详细信息。有许多标志、快捷键和高亮方法可以与 `top` 一起使用。

您还可以使用 `top` 终止进程。为此，请按 `k` 然后输入进程 ID。

#### 解释日志

系统和应用程序日志包含了系统正在经历的海量信息。它们包含有用的信息和错误代码，这些可能指向错误。如果您在日志中搜索错误代码，问题识别和修复时间可以大大减少。

#### 网络端口分析

网络方面不应忽视，因为网络故障是常见的，可能会影响系统和流量。常见的网络问题包括端口耗尽、端口阻塞、未释放的资源等。

为识别此类问题，我们需要了解端口状态。

这里简要解释了一些端口状态：

| **State** | **Description** |
| --- | --- |
| LISTEN | 表示正在等待来自任何远程 TCP 和端口的连接请求的端口。|
| ESTABLISHED | 表示连接已建立并可以将接收到的数据传递给目标。|
| TIME WAIT | 表示等待时间以确保其连接终止请求的确认。|
| FIN WAIT2 | 表示正在等待来自远程 TCP 的连接终止请求。|

让我们探讨下如何在 Linux 中分析端口相关的信息。

**端口范围：** 端口范围在系统中定义，并且可以相应增加/减少。在下面的片段中，范围是从 `15000` 到 `65000`，这使得总共有 `50000` 个（65000 - 15000）可用端口。如果已使用的端口接近或超过此限制，则会出现问题。

```
[user@host ~]$ /sbin/sysctl net.ipv4.ip_local_port_range
net.ipv4.ip_local_port_range = 15000    65000
```

在这种情况下，日志中报告的错误可能是 `Failed to bind to port` 或 `Too many connections`。

#### 识别数据包丢失

在系统监控中，我们需要确保出站和入站通信完好无损。

一个有用的命令是 `ping`。`ping` 锁定目标系统并将响应带回来。注意显示数据包丢失百分比和时间的最后几行统计信息。

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
 --- 10.13.6.113 ping 统计信息 ---
 7 packets transmitted, 7 received,0% packet loss, time 6001ms
 rtt min/avg/max/mdev = 0.379/0.523/0.747/0.134 ms
```

#### 收集问题事后分析的统计数据

收集某些统计数据以便以后识别根本原因始终是个好习惯。通常，在系统重启或服务重启后，我们会失去早先的系统快照和日志。

以下是一些捕捉系统快照的方法。

-   **日志备份**

在进行任何更改之前，将日志文件复制到另一个位置。这对于了解系统在问题发生时的情况至关重要。有时，日志文件是查看过去系统状态的唯一窗口，因为其他运行时统计数据已丢失。

-   **TCP Dump**

Tcpdump 是一种命令行工具，可以捕获和分析进出网络的流量。主要用于帮助排查网络问题。如果你觉得系统流量受到了影响，可按以下方式使用 `tcpdump`：

```
sudo tcpdump -i any -w

# 其中，
# -i any 捕获所有接口的流量
# -w 指定输出文件名

# 几分钟后停止命令，因为文件大小可能会增加
# 使用 .pcap 文件扩展名
```

一旦捕获了 `tcpdump`，你可以使用 Wireshark 等工具直观地分析流量。

### 结论

感谢你读完本书。如果你觉得有帮助，请考虑与他人分享。

然而，这本书并不会在这里结束。我将继续改进它并增加新材料。如果你发现任何问题或想提出改进建议，[请随时提出 PR/Issue。][56]

**保持联系并继续你的学习之旅！**

你的 Linux 学习之旅不必在此结束。保持联系并将你的技能提升到下一个水平：

1.  **在社交媒体上关注我**：
    
    -   [X][57]：我在那里分享有益的短内容。我的私信始终开放。
        
    -   [LinkedIn][58]：我在那里分享技术文章和帖子。请在 LinkedIn 上给予推荐并认可我的相关技能。
        
2.  **获得独家内容访问权限**：如需一对一帮助和独家内容，请点击[这里][59]。
    

我的[文章][60]和书籍，如本书，是我增加优质内容可达性的使命的一部分。本书也将开放翻译成其他语言。每篇内容的写作都需要很多时间和精力。本书将永远免费。如果你喜欢我的工作并希望我继续保持动力，请考虑[请我喝杯咖啡][61]。

再次感谢你，祝你学习愉快！

---

![Zaira Hira](https://cdn.hashnode.com/res/hashnode/image/upload/v1720621509664/nj6hWYEsR.png)

让复杂的主题变得容易理解。

---

如果你读到了这里，请对作者表示关心并感谢。说声谢谢

免费学习编程。freeCodeCamp 的开源课程帮助超过 40,000 人获得开发者职位。[开始学习][62]

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

