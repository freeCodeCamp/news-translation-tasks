```markdown 
--- 
title: Docker 和容器初学者入门 
date: 2024-12-10T07:50:04.070Z 
author: Kedar Makode 
authorURL: https://www.freecodecamp.org/news/author/Kedar98/ 
originalURL: https://www.freecodecamp.org/news/an-introduction-to-docker-and-containers-for-beginners/ 
posteditor: "" 
proofreader: "" 
--- 
 
在现代软件开发的世界中，效率和一致性是关键。开发人员和运营团队需要能够帮助他们无缝管理、部署和运行应用程序的解决方案，以适应不同的环境。 
 
<!-- more --> 
 
容器和 Docker 是已经革新了软件构建、测试和部署方式的技术。 
 
无论你是技术领域的新人，还是只是想了解 Docker 的基础知识，本文将带你了解必备知识。 
 
## 内容目录 
 
-   [什么是容器？][1] 
     
-   [什么是 Docker？][2] 
     
-   [为什么选择 Docker？][3] 
     
-   [Docker 架构][4] 
     
-   [Docker 的容器运行时：containerd][5] 
     
-   [如何使用 Docker 创建一个简单的容器][6] 
     
-   [总结][7] 
     
 
## 什么是容器？ 
 
在深入了解 Docker 之前，让我们先了解一下容器。想象一下你正在做一个项目，并且你的应用程序在你的笔记本电脑上运行得非常好。但是当你试图在另一台机器上运行相同的应用程序时，却失败了。这通常是由于环境的不同造成的：不同的操作系统、安装的不同软件版本或配置。 
 
容器通过将应用程序及其所有依赖项（如库、框架和配置文件）打包成一个单一的标准化单元来解决这个问题。这确保了无论应用程序部署在哪里（你的笔记本电脑、服务器或云端），它都能以相同的方式运行。 
 
容器的关键特性： 
 
-   **轻量级**：容器共享宿主系统的内核，而虚拟机 (VM) 则需要单独的操作系统实例，这使得它们运行更快、更高效。 
     
-   **可移植性**：一旦构建完成，容器可以在各种环境中一致地运行。 
     
-   **隔离性**：容器在隔离的进程中运行，这意味着它们不会干扰在同一系统上运行的其他应用程序。 
     
 
## 什么是 Docker？ 
 
现在我们理解了容器，让我们来谈谈 Docker，这个平台使得容器成为主流。 
 
Docker 是一个开源工具，旨在简化创建、管理和部署容器的过程。自 2013 年推出以来，由于其易用性、社区支持以及强大的工具生态系统，Docker 已迅速成为容器化的首选解决方案。 
 
### Docker 的关键概念 
 
1.  **Docker 镜像**：把 Docker 镜像想象成你的容器的蓝图。它包含运行应用程序所需的一切，包括代码、库和系统依赖项。镜像是根据写在 Dockerfile 中的一组指令构建的。 
     
2.  **Docker 容器**：容器是 Docker 镜像的运行实例。当你创建并启动一个容器时，Docker 会将镜像启动到一个孤立的环境中，供你的应用程序运行。 
     
3.  **Dockerfile**：这是一个包含创建 Docker 镜像所需步骤的文本文件。它是你定义容器外观的地方，包括基础镜像、应用程序代码和任何附加依赖。 
     
4.  **Docker Hub**：Docker Hub 是一个公共注册仓库，开发人员可以在这里共享和访问预构建的镜像。如果你正在处理一个常见的应用程序或技术栈，很可能已经有一个可用的镜像在 Docker Hub 上，帮你节省时间。 
     
5.  **Docker Compose**：对于需要多个容器的应用程序（例如，Web 服务器和数据库），Docker Compose 允许你使用一个简单的 YAML 文件定义和管理多容器环境。 
     
 
## 为什么选择 Docker？ 
 
Docker 的流行源于它解决了开发人员当前面临的多种挑战： 
 
-   **跨环境的一致性**：开发人员可以“构建一次，到处运行”，确保相同的应用程序在不同环境中（从本地开发到生产）以相同的方式工作。 
     
-   **速度**：Docker 容器启动和停止迅速，使其成为测试和部署管道的理想选择。 
     
-   **高效使用资源**：由于容器比虚拟机更有效地共享宿主系统的资源，它们减少了开销并允许更高密度的部署。 
     
-   **应用程序版本控制**：Docker 允许你不仅对代码进行版本控制，还可以对运行代码的环境进行版本控制。这对于回滚到以前的版本或在生产中调试问题特别有用。 
     
 
## Docker 架构 
 
当你第一次开始使用 Docker 时，可能会把它当成一个“开箱即用”的盒子。对于入门来说，这没有问题，但更深入地了解 Docker 的架构将有助于你解决问题、优化性能以及对你的容器化策略做出明智的决策。 
 
Docker 的架构旨在确保效率、灵活性和可扩展性。它由几个组件组成，这些组件协同工作来创建、管理和运行容器。让我们更详细地看看这些组件中的每一个。 
``` 
 
Docker 的架构围绕客户端-服务器模型构建，包括以下组件 
 
- **Docker 客户端** 
 
- **Docker 守护进程（dockerd）** 
 
- **Docker 引擎** 
 
- **Docker 镜像** 
 
- **Docker 容器** 
 
- **Docker 注册表** 
 
![Docker 架构](https://docs.docker.com/get-started/images/docker-architecture.webp) 
 
#### 1\. Docker 客户端 
 
Docker 客户端是用户与 Docker 交互的主要方式。它是一个命令行工具，通过 REST API 将指令发送给 Docker 守护进程（我们将在下一步讨论）。像 `docker build`、`docker pull` 和 `docker run` 这样的命令都是从 Docker 客户端执行的。 
 
当你输入一个像 `docker run nginx` 这样的命令时，Docker 客户端会将其转换为 Docker 守护进程可以理解并执行的请求。本质上，Docker 客户端充当与 Docker 更复杂的后端组件交互的前端。 
 
#### 2\. Docker 守护进程 (dockerd) 
 
Docker 守护进程，也称为 **dockerd**，是整个 Docker 操作的核心。它是一个后台进程，监听来自 Docker 客户端的请求并管理 Docker 对象，如容器、镜像、网络和卷。 
 
以下是 Docker 守护进程负责的工作： 
 
- **构建和运行容器**：当客户端发送运行容器的命令时，守护进程会拉取镜像，创建容器并启动。 
   
- **管理 Docker 资源**：守护进程处理网络配置和卷管理等任务。 
 
- Docker 守护进程在主机上运行，并通过 REST API、Unix 套接字或网络接口与 Docker 客户端通信。它还负责与容器运行时交互，处理容器的实际执行。 
 
#### 3\. Docker 引擎 
 
Docker 引擎是 Docker 的核心部分。它使整个平台运行，通过将客户端、守护进程和容器运行时结合在一起。Docker 引擎可以在各种操作系统上运行，包括 Linux、Windows 和 macOS。 
 
Docker 引擎有两个版本： 
 
- **Docker CE (社区版)**：这是免费的开源版 Docker，广泛用于个人和小规模项目。 
 
- **Docker EE (企业版)**：付费的企业级版本，具有附加功能，如增强的安全性、支持和认证。 
 
Docker 引擎通过集成构建、运行和管理容器所需的各种组件，简化了容器编排的复杂性。 
 
#### 4\. Docker 镜像 
 
Docker 镜像是一个只读的模板，包含运行应用所需的一切—代码、库、依赖和配置。镜像是容器的构建模块。当你运行一个容器时，基本上是在 Docker 镜像之上创建了一个可写层。 
 
Docker 镜像通常是从 Dockerfile 构建的，它是包含如何构建镜像指令的文本文件。例如，一个基本的 Dockerfile 可能从一个基础镜像开始，如 `nginx` 或 `ubuntu`，并包括复制文件、安装依赖或设置环境变量的命令。 
 
这是一个简单的 Dockerfile 示例： 
 
``` 
dockerfileCopy codeFROM nginx:latest 
COPY ./html /usr/share/nginx/html 
EXPOSE 80 
``` 
 
在这个例子中，我们使用官方的 Nginx 镜像作为基础，并将本地的 HTML 文件复制到容器的 web 目录中。 
 
一旦镜像构建完成，它可以存储在 Docker 注册表中，并与他人共享。 
 
#### 5\. Docker 容器 
 
Docker 容器是 Docker 镜像的运行实例。它轻量且与其他容器隔离，但它共享主机操作系统的内核。每个容器都有自己的文件系统、内存、CPU 分配和网络设置，这使得它具有可移植性和可重复性。 
 
容器可以被创建、启动、停止和销毁，它们甚至可以在重启之间保持持久化。因为容器是基于镜像的，因此它们确保应用无论在哪里运行都能够表现相同。 
 
Docker 容器的一些关键特性： 
 
- **隔离**：容器彼此与主机隔离，但它们仍然共享相同的操作系统内核。 
 
- **可移植性**：容器可以运行在任何地方，无论是在本地机器、虚拟机还是云提供商上。 
 
#### 6\. Docker 注册表 
 
Docker 注册表是存储和分发 Docker 镜像的集中地方。最受欢迎的注册表是 Docker Hub，托管着数百万个公开可用的镜像。组织还可以设置私有注册表以安全地存储和分发自己的镜像。 
 
Docker 注册表提供了几个关键功能： 
 
- **镜像版本控制**：镜像使用标签进行版本控制，便于管理应用的不同版本。 
   
- **访问控制**：注册表可以是公开或私有的，通过基于角色的访问控制管理谁能拉取或推送镜像。 
 
- **分发**：镜像可以被从注册表中拉取并部署到任何地方，这使得共享和重用容器化应用变得容易。 
 
Docker架构的一个重要近期发展是使用containerd。Docker过去有自己的容器运行时，但现在它使用containerd，这是一种符合行业标准的容器运行时，也被Kubernetes等其他平台使用。 
 
1.  containerd负责： 
     
    -   启动和停止容器 
         
    -   管理容器的存储和网络 
         
    -   从注册表中拉取容器映像 
         
 
通过将容器运行时与Docker的更高层功能分离开来，Docker变得更加模块化，允许其他工具使用containerd，而Docker则专注于面向用户的功能。 
 
## 如何使用Docker创建一个简单的容器 
 
**拉取Linux映像** 
 
首先从Docker Hub拉取`alpine`映像。`alpine`映像是一个最小的Linux发行版，设计为轻量级且快速。 
 
运行以下命令： 
 
``` 
docker pull alpine 
``` 
 
这将下载`alpine`映像到你的本地系统。 
 
**运行容器** 
 
使用`alpine`映像创建并启动一个容器。我们还将在容器内启动一个终端会话。 
 
``` 
docker run -it alpine /bin/sh 
``` 
 
以下是每个选项的含义： 
 
-   `docker run`: 创建并启动一个新容器。 
     
-   `-it`: 允许你与容器交互（交互模式+终端）。 
     
-   `alpine`: 指定要使用的映像。 
     
-   `/bin/sh`: 指定在容器内运行的命令（在本例中为一个shell会话）。 
     
 
**探索容器** 
 
容器运行后，你将看到一个类似这样的shell提示符： 
 
``` 
/ # 
``` 
 
这表明你在Alpine Linux容器内。你现在可以运行Linux命令。例如： 
 
检查当前目录： 
 
``` 
pwd 
``` 
 
列出目录中的文件： 
 
``` 
ls 
``` 
 
输出：一个最小的目录结构，因为Alpine是轻量级映像。 
 
你还可以安装一个包（Alpine使用`apk`作为其包管理器）： 
 
``` 
apk add curl 
``` 
 
**退出容器** 
 
完成探索后，输入`exit`以关闭会话并停止容器 
 
``` 
bashCopy codeexit 
``` 
 
**停止后的容器访问** 
 
如果希望在停止后再次访问容器，可以使用此命令列出所有容器（包括已停止的容器）： 
 
``` 
docker ps -a 
``` 
 
你将看到一个包含容器ID和状态的列表，然后可以启动已停止的容器： 
 
``` 
docker start <container-id> 
``` 
 
你可以使用此命令附加到容器的shell： 
 
``` 
docker exec -it <container-id> /bin/sh 
``` 
 
如果不再需要容器，可以将其移除 
 
1.  停止容器（如果它仍在运行）： 
     
    ``` 
     docker stop <container-id> 
    ``` 
     
2.  移除容器： 
     
    ``` 
     docker rm <container-id> 
    ``` 
     
 
**Docker命令关键回顾** 
 
| **命令** | **描述** | 
| --- | --- | 
| `docker pull alpine` | 下载Alpine Linux映像。 | 
| `docker run -it alpine /bin/sh` | 创建并启动一个交互式容器。 | 
| `docker ps -a` | 列出所有容器（运行的和停止的）。 | 
| `docker start <container-id>` | 启动已停止的容器。 | 
| `docker exec -it <container-id>` | 附加到正在运行的容器。 | 
| `docker stop <container-id>` | 停止正在运行的容器。 | 
| `docker rm <container-id>` | 移除已停止的容器。 | 
 
## 总结 
 
现在你已经有了基本的理解，是时候运用你的知识了。开始尝试使用Docker，构建你的第一个容器，探索其广阔的生态系统。 
 
你很快就会明白为什么Docker已成为现代DevOps和软件工程的基石。 
 
你可以关注我 
 
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
 
 