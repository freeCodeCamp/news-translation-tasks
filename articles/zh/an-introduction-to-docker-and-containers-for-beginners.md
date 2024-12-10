```markdown
---
title: Docker 和容器的初学者入门
date: 2024-12-10T07:43:17.933Z
author: Kedar Makode
authorURL: https://www.freecodecamp.org/news/author/Kedar98/
originalURL: https://www.freecodecamp.org/news/an-introduction-to-docker-and-containers-for-beginners/
posteditor: ""
proofreader: ""
---

在现代软件开发的世界中，效率和一致性是关键。开发人员和运营团队需要能够帮助他们无缝地管理、部署和运行应用程序的解决方案，以适应不同的环境。

<!-- more -->

容器和 Docker 是彻底改变软件构建、测试和部署方式的技术。

无论您是技术界的新手，还是只是想了解 Docker 的基本知识，本文将引导您了解基本概念。

## 目录

-   [什么是容器？][1]
    
-   [什么是 Docker？][2]
    
-   [为什么选择 Docker？][3]
    
-   [Docker 架构][4]
    
-   [Docker 的容器运行时：containerd][5]
    
-   [如何使用 Docker 创建一个简单的容器][6]
    
-   [总结][7]
    

## 什么是容器？

在深入了解 Docker 之前，我们先来理解一下容器。想象一下，您正在进行一个项目，您的应用程序在笔记本电脑上运行得非常好。但当您尝试在另一台机器上运行相同的应用程序时，却失败了。这通常是由于环境的不同而导致的：不同的操作系统、已安装的软件版本或配置。

容器通过将应用程序及其所有依赖项（如库、框架和配置文件）打包成一个单一的、标准化的单元来解决这个问题。这确保了无论应用程序部署在哪里，它都能正常运行，无论是在您的笔记本电脑上、服务器上还是在云中。

容器的关键特性：

-   **轻量级**：容器共享主机系统的内核，不像虚拟机（VM）需要单独的操作系统实例，使它们更快和更高效。
    
-   **可移植性**：一旦构建完毕，容器可以在各种环境中一致地运行。
    
-   **隔离性**：容器在隔离的进程中运行，这意味着它们不会干扰同一系统上运行的其他应用程序。
    

## 什么是 Docker？

现在我们了解了容器，让我们来谈谈 Docker，这个平台使容器成为主流。

Docker 是一个开源工具，旨在简化创建、管理和部署容器的过程。自2013年推出以来，Docker 由于其易用性、社区支持和强大的工具生态系统而迅速成为容器化的首选解决方案。

### Docker 的关键概念

1.  **Docker 映像**：将 Docker 映像视为您的容器的蓝图。它包含运行应用程序所需的一切，包括代码、库和系统依赖项。映像是通过在 Dockerfile 中编写的一组指令构建的。
    
2.  **Docker 容器**：容器是 Docker 映像的运行实例。当您创建并启动一个容器时，Docker 将映像启动到一个隔离的环境中，您的应用程序可以在其中运行。
    
3.  **Dockerfile**：这是一个文本文件，其中包含创建 Docker 镜像所需的步骤。在这里定义您的容器将是什么样子，包括基础映像、应用程序代码和任何附加的依赖项。
    
4.  **Docker Hub**：Docker Hub 是一个公共注册表，开发人员可以在此分享和访问预构建的映像。如果您正在使用一个常见的应用程序或技术栈，很可能在 Docker Hub 上已经有可用的映像，为您节省了时间。
    
5.  **Docker Compose**：对于需要多个容器的应用程序（例如，一个 web 服务器和一个数据库），Docker Compose 允许您使用简单的 YAML 文件定义和管理多容器环境。
    

## 为什么选择 Docker？

Docker 的流行源于其能够解决开发人员今天所面临的各种挑战：

-   **跨环境的一致性**：开发人员可以“构建一次，随处运行”，确保相同的应用程序在不同的环境中以相同的方式运行，从本地开发到生产环境。
    
-   **速度**：Docker 容器启动和停止速度快，非常适合测试和部署流水线。
    
-   **资源的高效利用**：由于容器比虚拟机更有效地共享主机系统的资源，它们减少了开销，并允许在部署中实现更高的密度。
    
-   **应用程序的版本控制**：Docker 允许您不仅对代码进行版本控制，还对运行代码的环境进行版本控制。这对于回滚到以前的版本或在生产中调试问题特别有用。
    

## Docker 架构

当您第一次使用 Docker 时，您可能会将其视为一个“开箱即用”的工具。虽然这样开始是没问题的，但更深入地了解 Docker 的架构将帮助您解决问题、优化性能并就您的容器化策略做出明智的决策。

Docker 的架构旨在确保效率、灵活性和可扩展性。它由多个组件组成，这些组件协同工作以创建、管理和运行容器。让我们仔细看看这些组件中的每一个。
```


Docker 的架构建立在客户端-服务器模型之上，包括以下组件：

-   **Docker 客户端**
    
-   **Docker 守护进程 (dockerd)**
    
-   **Docker 引擎**
    
-   **Docker 镜像**
    
-   **Docker 容器**
    
-   **Docker 注册表**
    

![Docker 架构](https://docs.docker.com/get-started/images/docker-architecture.webp)

#### 1\. Docker 客户端

Docker 客户端是用户与 Docker 交互的主要方式。它是一个命令行工具，通过 REST API 将指令发送给 Docker 守护进程（我们接下来会介绍）。命令如 `docker build`、`docker pull` 和 `docker run` 是从 Docker 客户端执行的。

当你输入像 `docker run nginx` 这样的命令时，Docker 客户端会将其转换为 Docker 守护进程可以理解并执行的请求。基本上，Docker 客户端充当与 Docker 更复杂的后台组件交互的前端。

#### 2\. Docker 守护进程 (dockerd)

Docker 守护进程，也称为 **dockerd**，是整个 Docker 操作的核心。它是一个后台进程，监听来自 Docker 客户端的请求，并管理 Docker 对象，如容器、镜像、网络和卷。

Docker 守护进程负责以下任务：

-   **构建和运行容器**：当客户端发送运行容器的命令时，守护进程拉取镜像、创建容器并启动它。
    
-   **管理 Docker 资源**：守护进程处理诸如网络配置和卷管理等任务。
    

-   Docker 守护进程在主机机器上运行，并通过 REST API、Unix 套接字或网络接口与 Docker 客户端通信。它还负责与容器运行时交互，处理容器的实际执行。

#### 3\. Docker 引擎

Docker 引擎是 Docker 的核心部分。它使整个平台工作，将客户端、守护进程和容器运行时结合在一起。Docker 引擎可以运行在各种操作系统上，包括 Linux、Windows 和 macOS。

Docker 引擎有两个版本：

-   **Docker CE (Community Edition, 社区版)**：这是免费的开源版本的 Docker，广泛用于个人和小规模项目。
    
-   **Docker EE (Enterprise Edition, 企业版)**：这是一种付费的企业级版本，具有增强的安全性、支持和认证等附加功能。
    

Docker 引擎通过集成构建、运行和管理容器所需的各种组件，简化了容器编排的复杂性。

#### 4\. Docker 镜像

Docker 镜像是一个只读模板，包含应用程序运行所需的一切——代码、库、依赖项和配置。镜像是构建容器的基本单位。当你运行一个容器时，实际上是在 Docker 镜像的顶部创建了一个可写层。

Docker 镜像通常通过 Dockerfile 构建，一个包含如何构建镜像指令的文本文件。例如，一个基本的 Dockerfile 可能从 `nginx` 或 `ubuntu` 之类的基础镜像开始，并包括复制文件、安装依赖项或设置环境变量的命令。

这是一个简单的 Dockerfile 示例：

```
dockerfileCopy codeFROM nginx:latest
COPY ./html /usr/share/nginx/html
EXPOSE 80
```

在这个例子中，我们使用官方的 Nginx 镜像作为基础，并将本地 HTML 文件复制到容器的 Web 目录中。

一旦镜像构建完成，就可以存储在 Docker 注册表中并与其他人共享。

#### 5\. Docker 容器

Docker 容器是 Docker 镜像的运行实例。它轻量且与其他容器隔离，但仍与主操作系统共享内核。每个容器都有自己的文件系统、内存、CPU 分配和网络设置，使其可移植且可重复。

容器可以被创建、启动、停止和销毁，甚至可以在重启之间保持持久性。由于容器基于镜像，它们确保应用程序无论在哪里运行都会表现一致。

Docker 容器的一些关键特性：

-   **隔离**：容器彼此隔离，并与主机隔离，但它们仍共享同一个操作系统内核。
    
-   **可移植性**：容器可以在任何地方运行，无论是本地机器、虚拟机还是云提供商。
    

#### 6\. Docker 注册表

Docker 注册表是存储和分发 Docker 镜像的集中场所。最受欢迎的注册表是 Docker Hub，托管着数百万个公开可用的镜像。组织也可以设置私有注册表来安全地存储和分发自己的镜像。

Docker 注册表提供了几个关键功能：

-   **镜像版本控制**：镜像使用标签进行版本控制，便于管理应用程序的不同版本。
    
-   **访问控制**：注册表可以是公共的或私有的，并具有基于角色的访问控制，以管理谁可以拉取或推送镜像。
    
-   **分发**：镜像可以从注册表中拉取并部署到任何地方，使容器化应用程序的共享和重用变得容易。
    

Docker 架构中一个重要的最近发展是使用 containerd。Docker 曾经有自己的容器运行时，但现在它使用了 containerd，一个遵循行业标准的容器运行时，并且也被 Kubernetes 等其他平台使用。

1.  containerd 的职责包括
    
    -   启动和停止容器
        
    -   管理容器的存储和网络
        
    -   从注册表中拉取容器镜像
        

通过将容器运行时与 Docker 的更高层功能分开，Docker 变得更加模块化，使得其他工具可以使用 containerd，而 Docker 则专注于面向用户的功能。

## 如何使用 Docker 创建一个简单的容器

**拉取 Linux 镜像**

首先从 Docker Hub 上拉取 `alpine` 镜像。`alpine` 镜像是一个最小的 Linux 发行版，设计为轻量且快速。

运行以下命令：

```
docker pull alpine
```

这会将 `alpine` 镜像下载到你的本地系统。

**运行容器**

使用 `alpine` 镜像创建并启动容器。我们还将在容器内启动一个终端会话。

```
docker run -it alpine /bin/sh
```

这些选项的含义是：

-   `docker run`：创建并启动一个新的容器。
    
-   `-it`：允许你与容器交互（交互模式 + 终端）。
    
-   `alpine`：指定要使用的镜像。
    
-   `/bin/sh`：指定在容器内运行的命令（在这里是一个 shell 会话）。
    

**探索容器**

一旦容器运行，你会看到一个类似这样的 shell 提示符

```
/ #
```

这表明你在 Alpine Linux 容器内部。你现在可以运行 Linux 命令。例如：

检查当前目录：

```
pwd
```

列出目录中的文件：

```
ls
```

输出：一个最小的目录结构，因为 Alpine 是一个轻量级镜像。

你还可以安装软件包（Alpine 使用 `apk` 作为其包管理器）：

```
apk add curl
```

**退出容器**

探索完成后，键入 `exit` 关闭会话并停止容器

```
bashCopy codeexit
```

**在容器停止后访问容器**

如果想在停止后再次访问容器，可以用这个命令列出所有容器（包括停止的）：

```
docker ps -a
```

你会看到一个包含容器 ID 和状态的列表，然后你可以启动停止的容器：

```
docker start <container-id>
```

你可以使用这个命令附加到容器的 shell：

```
docker exec -it <container-id> /bin/sh
```

如果你不再需要这个容器，可以将其移除

1.  停止容器（如果还在运行）：
    
    ```
    docker stop <container-id>
    ```
    
2.  移除容器：
    
    ```
    docker rm <container-id>
    ```
    

**Docker 关键命令回顾**

| **命令** | **描述** |
| --- | --- |
| `docker pull alpine` | 下载 Alpine Linux 镜像。 |
| `docker run -it alpine /bin/sh` | 创建并启动一个交互式容器。 |
| `docker ps -a` | 列出所有容器（运行和停止的）。 |
| `docker start <container-id>` | 启动一个停止的容器。 |
| `docker exec -it <container-id>` | 附加到一个正在运行的容器。 |
| `docker stop <container-id>` | 停止一个运行中的容器。 |
| `docker rm <container-id>` | 移除一个停止的容器。 |

## 总结

现在你已经掌握了基础知识，是时候将你的知识付诸实践了。开始尝试使用 Docker，构建你的第一个容器，并探索其庞大的生态系统。

你很快就会明白为什么 Docker 已经成为现代 DevOps 和软件工程的基石。

你可以关注我：

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

