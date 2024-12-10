```markdown
---
title: 初学者的 Docker 和容器简介
date: 2024-12-10T07:37:52.556Z
author: Kedar Makode
authorURL: https://www.freecodecamp.org/news/author/Kedar98/
originalURL: https://www.freecodecamp.org/news/an-introduction-to-docker-and-containers-for-beginners/
posteditor: ""
proofreader: ""
---

在现代软件开发的世界中，效率和一致性是关键。开发人员和运维团队需要能够帮助他们无缝管理、部署和运行应用程序的解决方案，这些应用程序能够在不同的环境中运行。

<!-- more -->

容器和 Docker 是革新软件构建、测试和部署方式的技术。

无论你是技术新手，还是只是想了解 Docker 的基础知识，本文将引导你掌握这些基本要点。

## 目录

-   [什么是容器？][1]
    
-   [什么是 Docker？][2]
    
-   [为什么选择 Docker？][3]
    
-   [Docker 架构][4]
    
-   [Docker 的容器运行时：containerd][5]
    
-   [如何使用 Docker 创建一个简单的容器][6]
    
-   [总结][7]
    

## 什么是容器？

在深入了解 Docker 之前，我们先来了解一下容器。想象一下你正在进行一个项目，你的应用程序在你的笔记本电脑上运行完美无缺。但当你尝试在另一台机器上运行相同的应用程序时，它却出错了。这通常是因为环境的差异：不同的操作系统、已安装的软件版本或配置的不同。

容器解决了这个问题，它通过将应用程序及其所有依赖项（如库、框架和配置文件）打包成一个单一的标准化单元，从而确保应用程序无论在何处部署都能以相同的方式运行，无论是在你的笔记本电脑上、服务器上还是云端。

容器的主要特性：

-   **轻量级**：容器共享主机系统的内核，不像虚拟机（VM）那样需要单独的操作系统实例，使得它们更快速更高效。
    
-   **可移植性**：一旦构建完成，容器可以在不同环境中一致运行。
    
-   **隔离性**：容器在隔离的进程中运行，这意味着它们不会干扰在同一系统上运行的其他应用程序。
    

## 什么是 Docker？

现在我们了解了容器，让我们来谈谈 Docker 这个让容器变得主流的平台。

Docker 是一个开源工具，旨在简化创建、管理和部署容器的过程。自 2013 年推出以来，Docker 因其易用性、社区支持和强大的工具生态系统，迅速成为容器化的首选解决方案。

### Docker 的关键概念

1.  **Docker 镜像**：可以将 Docker 镜像视为容器的蓝图。它包含运行应用程序所需的一切，包括代码、库和系统依赖项。镜像是从 Dockerfile 中定义的一组指令生成的。
    
2.  **Docker 容器**：容器是 Docker 镜像的运行实例。当你创建并启动一个容器时，Docker 会将镜像加载到一个隔离的环境中运行你的应用程序。
    
3.  **Dockerfile**：这是一个文本文件，里面包含创建 Docker 镜像所需的步骤。在这里你定义了容器的样子，包括基础镜像、应用程序代码以及任何附加依赖项。
    
4.  **Docker Hub**：Docker Hub 是一个公共仓库，开发者可以在这里分享和访问预构建镜像。如果你正在处理一个常用的应用程序或技术栈，很可能已经有可用的镜像在 Docker Hub 上，可以节省你的时间。
    
5.  **Docker Compose**：对于需要多个容器的应用程序（例如，一个 Web 服务器和一个数据库），Docker Compose 允许你使用一个简单的 YAML 文件来定义和管理多容器环境。
    

## 为什么选择 Docker？

Docker 的流行源于其解决了今天开发人员面临的多种挑战：

-   **在不同环境中的一致性**：开发人员可以“构建一次，到处运行”，确保相同的应用程序在不同的环境中以相同的方式工作，从本地开发到生产环境。
    
-   **速度**：Docker 容器启动和停止速度快，非常适合于测试和部署流水线。
    
-   **资源的高效使用**：由于容器比虚拟机更有效地共享主机系统的资源，它们降低了开销，并允许更高密度的部署。
    
-   **应用程序的版本控制**：Docker 允许你不仅对代码进行版本控制，还对运行代码的环境进行版本控制。这对于回滚到以前的版本或在生产中调试问题特别有用。
    

## Docker 架构

当你初次使用 Docker 时，你可能会把它当作一个“可以正常工作”的盒子。这对于初学者来说是可以的，但更深入地了解 Docker 的架构将帮助你消除故障、优化性能，并在容器化策略中做出明智的决策。

Docker 的架构旨在确保效率、灵活性和可扩展性。它由多个组件组成，这些组件协同工作以创建、管理和运行容器。让我们更详细地看一下这些组件。
```


Docker的架构基于一个客户-服务器模型，包括以下组件

-   **Docker客户端**
    
-   **Docker守护进程 (dockerd)**
    
-   **Docker引擎**
    
-   **Docker镜像**
    
-   **Docker容器**
    
-   **Docker注册表**
    

![Docker Architecture](https://docs.docker.com/get-started/images/docker-architecture.webp)

#### 1\. Docker客户端

Docker客户端是用户与Docker交互的主要方式。它是一个命令行工具，通过REST API将指令发送给Docker守护进程（我们将在下一节中介绍）。像`docker build`、`docker pull`和`docker run`这样的命令都是通过Docker客户端执行的。

当你输入像`docker run nginx`这样的命令时，Docker客户端将其翻译成Docker守护进程可以理解并执行的请求。实质上，Docker客户端作为前端，与Docker更复杂的后端组件进行交互。

#### 2\. Docker守护进程 (dockerd)

Docker守护进程，也称为**dockerd**，是整个Docker操作的核心。它是一个后台进程，监听来自Docker客户端的请求，并管理像容器、镜像、网络和卷这样的Docker对象。

这是Docker守护进程的职责所在

-   **构建和运行容器**：当客户端发送运行容器的命令时，守护进程会拉取镜像，创建容器并启动它。
    
-   **管理Docker资源**：守护进程处理诸如网络配置和卷管理等任务。
    

-   Docker守护进程运行在主机上，通过REST API、Unix套接字或网络接口与Docker客户端通信。它还负责与容器运行时进行交互，处理容器的实际执行。

#### 3\. Docker引擎

Docker引擎是Docker的核心部分。它使整个平台能够运行，将客户端、守护进程和容器运行时组合在一起。Docker引擎可以运行在包括Linux、Windows和macOS在内的各种操作系统上。

Docker引擎有两个版本

-   **Docker CE（社区版）**：这是免费的开源版本，广泛用于个人和小型项目。
    
-   **Docker EE（企业版）**：付费的企业级版本，提供了增强的安全性、支持和认证等附加功能。
    

Docker引擎通过集成构建、运行和管理容器所需的各种组件，简化了容器编排的复杂性。

#### 4\. Docker镜像

Docker镜像是一个只读模板，包含应用运行所需的一切——代码、库、依赖项和配置。镜像是容器的构建块。当你运行一个容器时，实际上是在Docker镜像之上创建了一个可写层。

Docker镜像通常是从Dockerfile构建的，这是一种文本文件，包含关于如何构建镜像的指令。例如，基本的Dockerfile可能以一个基础镜像如`nginx`或`ubuntu`开始，并包括复制文件、安装依赖项或设置环境变量的命令。

这是一个简单的Dockerfile示例：

```
FROM nginx:latest
COPY ./html /usr/share/nginx/html
EXPOSE 80
```

在这个例子中，我们使用官方的Nginx镜像作为基础，并将本地HTML文件复制到容器的web目录中。

一旦镜像构建完成，它可以存储在Docker注册表中并与他人共享。

#### 5\. Docker容器

Docker容器是Docker镜像的一个运行实例。它是轻量级的并与其他容器隔离，但它共享主机操作系统的内核。每个容器都有自己的文件系统、内存、CPU分配和网络设置，这使其具有可移植性和可复现性。

容器可以被创建、启动、停止和销毁，甚至可以在重启之间进行持久化。因为容器基于镜像，它们确保应用无论运行在何处的行为都一致。

Docker容器的一些关键特性：

-   **隔离性**：容器彼此隔离并与主机隔离，但它们仍然共享同一个操作系统内核。
    
-   **可移植性**：容器可以在任何地方运行，无论是在本地机器、虚拟机上，还是在云提供商上。
    

#### 6\. Docker注册表

Docker注册表是存储和分发Docker镜像的集中场所。最流行的注册表是Docker Hub，它托管了数百万个公开可用的镜像。组织也可以设置私有注册表，以安全地存储和分发自己的镜像。

Docker注册表提供了一些关键功能：

-   **镜像版本控制**：镜像使用标签进行版本控制，方便管理应用的不同版本。
    
-   **访问控制**：注册表可以是公开或私有的，具有基于角色的访问控制来管理谁可以拉取或推送镜像。
    
-   **分发**：镜像可以从注册表中拉取并部署到任何地方，方便地共享和重用容器化应用。
    

Docker 架构最近的一个重要发展是使用了 containerd。Docker 曾经拥有自己的容器运行时，但现在它使用 containerd，这是一种符合行业标准的容器运行时，也被 Kubernetes 等其他平台使用。

1.  containerd 负责
    
    -   启动和停止容器
        
    -   管理容器的存储和网络
        
    -   从注册表中拉取容器镜像
        

通过将容器运行时与 Docker 的高级功能分离，Docker 变得更加模块化，允许其他工具使用 containerd，同时 Docker 专注于用户功能。

## 如何使用 Docker 创建一个简单的容器

**拉取 Linux 镜像**

首先从 Docker Hub 拉取 `alpine` 镜像。`alpine` 镜像是一个极简的 Linux 发行版，设计得轻量且快速。

运行以下命令：

```
docker pull alpine
```

这将下载 `alpine` 镜像到您的本地系统。

**运行容器**

使用 `alpine` 镜像创建并启动一个容器。我们还将在容器内启动一个终端会话。

```
docker run -it alpine /bin/sh
```

以下是每个选项的含义：

-   `docker run`：创建并启动一个新容器。
    
-   `-it`：允许与容器交互（交互模式 + 终端）。
    
-   `alpine`：指定要使用的镜像。
    
-   `/bin/sh`：指定在容器内运行的命令（在此案例中是一个 shell 会话）。
    

**探索容器**

一旦容器在运行，您将看到一个类似这样的 shell 提示符：

```
/ #
```

这表示您在 Alpine Linux 容器内。您现在可以运行 Linux 命令。例如：

检查当前目录：

```
pwd
```

列出目录中的文件：

```
ls
```

输出：一个极简目录结构，因为 Alpine 是一个轻量化的镜像。

您还可以安装一个软件包（Alpine 使用 `apk` 作为其包管理器）：

```
apk add curl
```

**退出容器**

探索完毕后，输入 `exit` 以关闭会话并停止容器

```
exit
```

**在容器停止后访问容器**

如果您想在停止后再次访问容器，可以使用此命令列出所有容器（包括已停止的）：

```
docker ps -a
```

您将看到包含容器 ID 和状态的容器列表，然后可以启动已停止的容器：

```
docker start <container-id>
```

您可以使用此命令附加到容器的 shell：

```
docker exec -it <container-id> /bin/sh
```

如果您不再需要该容器，可以将其删除

1.  停止容器（如果它仍在运行）：
    
    ```
     docker stop <container-id>
    ```
    
2.  删除容器：
    
    ```
     docker rm <container-id>
    ```
    

**Docker 关键命令回顾**

| **命令** | **描述** |
| --- | --- |
| `docker pull alpine` | 下载 Alpine Linux 镜像。 |
| `docker run -it alpine /bin/sh` | 创建并启动一个交互式容器。 |
| `docker ps -a` | 列出所有容器（正在运行和已停止）。 |
| `docker start <container-id>` | 启动已停止的容器。 |
| `docker exec -it <container-id>` | 附加到正在运行的容器。 |
| `docker stop <container-id>` | 停止正在运行的容器。 |
| `docker rm <container-id>` | 删除已停止的容器。 |

## 总结

现在您已经掌握了基础知识，是时候运用您的知识了。开始使用 Docker 进行实验，构建您的第一个容器，并探索其庞大的生态系统。

您会很快明白为什么 Docker 已成为现代 DevOps 和软件工程的基石。

您可以关注我

-   [Twitter][8]
    
-   [LinkedIn][9]
    

[1]: #heading-what-are-containers
[2]: #heading-what-is-docker
[3]: #heading-why-docker
[4]: #heading-docker-architecture
[5]: #heading-dockers-container-runtime-containerd
[6]: #heading-how-to-create-a-simple-container-using-docker
[7]: #heading-wrapping-up
[8]: https://twitter.com/Kedar__98
[9]: https://www.linkedin.com/in/kedar-makode-9833321ab/?originalSubdomain=in

