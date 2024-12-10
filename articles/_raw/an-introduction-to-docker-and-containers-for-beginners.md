---
title: An Introduction to Docker and Containers for Beginners
date: 2024-12-10T07:50:04.070Z
author: Kedar Makode
authorURL: https://www.freecodecamp.org/news/author/Kedar98/
originalURL: https://www.freecodecamp.org/news/an-introduction-to-docker-and-containers-for-beginners/
posteditor: ""
proofreader: ""
---

In the world of modern software development, efficiency and consistency are key. Developers and operations teams need solutions that help them manage, deploy, and run applications seamlessly across different environments.

<!-- more -->

Containers and Docker are technologies that have revolutionized how software is built, tested, and deployed.

Whether you're new to the world of tech or just looking to understand the basics of Docker, this article will guide you through the essentials.

## Table of Content

-   [What Are Containers?][1]
    
-   [What is Docker?][2]
    
-   [Why Docker?][3]
    
-   [Docker Architecture][4]
    
-   [Docker’s Container Runtime: containerd][5]
    
-   [How to Create a Simple Container Using Docker][6]
    
-   [Wrapping Up][7]
    

## What Are Containers?

Before diving into Docker, let’s first understand containers. Imagine that you’re working on a project, and your application works perfectly on your laptop. But when you try to run the same application on a different machine, it fails. This is often due to differences in environments: different operating systems, installed software versions, or configurations.

Containers solve this problem by packaging an application and all its dependencies like libraries, frameworks, and configuration files into a single, standardized unit. This ensures that the application runs the same no matter where it's deployed, whether on your laptop, a server, or in the cloud.

Key features of containers:

-   **Lightweight**: Containers share the host system's kernel, unlike virtual machines (VMs) that require separate OS instances, making them faster and more efficient.
    
-   **Portable**: Once built, a container can run consistently across various environments.
    
-   **Isolated**: Containers run in isolated processes, meaning that they don’t interfere with other applications running on the same system.
    

## What is Docker?

Now that we understand containers, let’s talk about Docker, the platform that has made containers mainstream.

Docker is an open-source tool designed to simplify the process of creating, managing, and deploying containers. Launched in 2013, Docker has rapidly become the go-to solution for containerization due to its ease of use, community support, and powerful ecosystem of tools.

### Key Concepts in Docker

1.  **Docker Images**: Think of a Docker image as a blueprint for your container. It contains everything needed to run the application, including code, libraries, and system dependencies. Images are built from a set of instructions written in a Dockerfile.
    
2.  **Docker Containers**: A container is a running instance of a Docker image. When you create and start a container, Docker launches the image into an isolated environment where your application can run.
    
3.  **Dockerfile**: This is a text file that contains the steps needed to create a Docker image. It’s where you define what your container will look like, including the base image, application code, and any additional dependencies.
    
4.  **Docker Hub**: Docker Hub is a public registry where developers can share and access pre-built images. If you're working on a common application or technology stack, chances are that there’s already an image available on Docker Hub, saving you time.
    
5.  **Docker Compose**: For applications that require multiple containers (for example, a web server and a database), Docker Compose allows you to define and manage multi-container environments using a simple YAML file.
    

## Why Docker?

Docker's popularity stems from its ability to solve a variety of challenges developers face today:

-   **Consistency Across Environments**: Developers can "build once, run anywhere," ensuring the same application works the same way in different environments, from local development to production.
    
-   **Speed**: Docker containers are fast to start and stop, making them ideal for testing and deployment pipelines.
    
-   **Efficient Use of Resources**: Since containers share the host system's resources more effectively than virtual machines, they reduce overhead and allow for greater density in deployments.
    
-   **Version Control for Your Applications**: Docker allows you to version control not only your code but also the environment in which your code runs. This is particularly useful for rolling back to previous versions or debugging issues in production.
    

## Docker Architecture

When you first start using Docker, you may treat it as a box that "just works." While that’s fine for getting started, a deeper understanding of Docker’s architecture will help you troubleshoot issues, optimize performance, and make informed decisions about your containerization strategy.

Docker's architecture is designed to ensure efficiency, flexibility, and scalability. It’s composed of several components that work together to create, manage, and run containers. Let’s take a closer look at each of these components.

### Docker Architecture: Key Components

Docker’s architecture is built around a client-server model that includes the following components

-   **Docker Client**
    
-   **Docker Daemon (dockerd)**
    
-   **Docker Engine**
    
-   **Docker Images**
    
-   **Docker Containers**
    
-   **Docker Registries**
    

![Docker Architecture](https://docs.docker.com/get-started/images/docker-architecture.webp)

#### 1\. Docker Client

The Docker Client is the primary way users interact with Docker. It’s a command-line tool that sends instructions to the Docker Daemon (which we’ll cover next) using REST APIs. Commands like `docker build`, `docker pull`, and `docker run` are executed from the Docker Client.

When you type a command like `docker run nginx`, the Docker Client translates that into a request that the Docker Daemon can understand and act upon. Essentially, the Docker Client acts as a front-end for interacting with Docker’s more complex backend components.

#### 2\. Docker Daemon (dockerd)

The Docker Daemon, also known as **dockerd**, is the brain of the entire Docker operation. It’s a background process that listens for requests from the Docker Client and manages Docker objects like containers, images, networks, and volumes.

Here’s what the Docker Daemon is responsible for

-   **Building and running containers**: When the client sends a command to run a container, the daemon pulls the image, creates the container, and starts it.
    
-   **Managing Docker resources**: The daemon handles tasks like network configurations and volume management.
    

-   The Docker Daemon runs on the host machine and communicates with the Docker Client using a REST API, Unix sockets, or a network interface. It’s also responsible for interacting with container runtimes, which handle the actual execution of containers.

#### 3\. Docker Engine

The Docker Engine is the core part of Docker. It’s what makes the entire platform work, combining the client, daemon, and container runtime. Docker Engine can run on various operating systems, including Linux, Windows, and macOS.

There are two versions of the Docker Engine

-   **Docker CE (Community Edition)**: This is the free, open-source version of Docker that’s widely used for personal and smaller-scale projects.
    
-   **Docker EE (Enterprise Edition)**: The paid, enterprise-level version of Docker comes with additional features like enhanced security, support, and certification.
    

The Docker Engine simplifies the complexities of container orchestration by integrating the various components required to build, run, and manage containers.

#### 4\. Docker Images

A Docker Image is a read-only template that contains everything your application needs to run—code, libraries, dependencies, and configurations. Images are the building blocks of containers. When you run a container, you are essentially creating a writable layer on top of a Docker image.

Docker Images are typically built from Dockerfiles, which are text files that contain instructions on how to build the image. For example, a basic Dockerfile might start with a base image like `nginx` or `ubuntu` and include commands to copy files, install dependencies, or set environment variables.

Here’s a simple example of a Dockerfile

```
dockerfileCopy codeFROM nginx:latest
COPY ./html /usr/share/nginx/html
EXPOSE 80
```

In this example, we’re using the official Nginx image as the base and copying our local HTML files into the container’s web directory.

Once the image is built, it can be stored in a Docker Registry and shared with others.

#### 5\. Docker Containers

A Docker Container is a running instance of a Docker Image. It’s lightweight and isolated from other containers, yet it shares the kernel of the host operating system. Each container has its own file system, memory, CPU allocation, and network settings, which makes it portable and reproducible.

Containers can be created, started, stopped, and destroyed, and they can even be persisted between reboots. Because containers are based on images, they ensure that applications will behave the same way no matter where they’re run.

A few key characteristics of Docker containers:

-   **Isolation**: Containers are isolated from each other and the host, but they still share the same OS kernel.
    
-   **Portability**: Containers can run anywhere, whether on your local machine, a virtual machine, or a cloud provider.
    

#### 6\. Docker Registries

A Docker Registry is a centralized place where Docker Images are stored and distributed. The most popular registry is Docker Hub, which hosts millions of publicly available images. Organizations can also set up private registries to store and distribute their own images securely.

Docker Registries provide several key features:

-   **Image Versioning**: Images are versioned using tags, making it easy to manage different versions of an application.
    
-   **Access Control**: Registries can be public or private, with role-based access control to manage who can pull or push images.
    
-   **Distribution**: Images can be pulled from a registry and deployed anywhere, making it easy to share and reuse containerized applications.
    

## Docker’s Container Runtime: containerd

One important recent development in Docker’s architecture is the use of containerd. Docker used to have its own container runtime, but now it uses containerd, a container runtime that follows industry standards and is also used by other platforms like Kubernetes.

1.  containerd is responsible for
    
    -   Starting and stopping containers
        
    -   Managing storage and networking for containers
        
    -   Pulling container images from registries
        

By separating the container runtime from Docker’s higher-level functionality, Docker has become more modular, allowing other tools to use containerd while Docker focuses on user-facing features.

## How to Create a Simple Container Using Docker

**Pull the Linux Image**

Start by pulling the `alpine` image from Docker Hub. The `alpine` image is a minimal Linux distribution, designed to be lightweight and fast.

Run the following command:

```
docker pull alpine
```

This will download the `alpine` image to your local system.

**Run the Container**

Create and start a container using the `alpine` image. We’ll also launch a terminal session inside the container.

```
docker run -it alpine /bin/sh
```

Here’s what each option means:

-   `docker run`: Creates and starts a new container.
    
-   `-it`: Allows you to interact with the container (interactive mode + terminal).
    
-   `alpine`: Specifies the image to use.
    
-   `/bin/sh`: Specifies the command to run inside the container (a shell session in this case).
    

**Explore the Container**

Once the container is running, you’ll see a shell prompt that looks something like this

```
/ #
```

This indicates you are inside the Alpine Linux container. You can now run Linux commands. For example:

Check the current directory:

```
pwd
```

List files in the directory:

```
ls
```

Output: A minimal directory structure, as Alpine is a lightweight image.

You can also install a package (Alpine uses `apk` as its package manager):

```
apk add curl
```

**Exit the Container**

When you're done exploring, type `exit` to close the session and stop the container

```
bashCopy codeexit
```

**Access the Container After It’s Stopped**

If you want to access the container again after stopping it, you can use this command to list all containers (including stopped ones):

```
docker ps -a
```

You’ll see a list of containers with their IDs and statuses, then you can start the stopped container:

```
docker start <container-id>
```

You can attach to the container's shell using this command:

```
docker exec -it <container-id> /bin/sh
```

If you no longer need the container, you can remove it

1.  Stop the container (if it’s still running):
    
    ```
     docker stop <container-id>
    ```
    
2.  Remove the container:
    
    ```
     docker rm <container-id>
    ```
    

**Key Docker Commands Recap**

| **Command** | **Description** |
| --- | --- |
| `docker pull alpine` | Downloads the Alpine Linux image. |
| `docker run -it alpine /bin/sh` | Creates and starts an interactive container. |
| `docker ps -a` | Lists all containers (running and stopped). |
| `docker start <container-id>` | Starts a stopped container. |
| `docker exec -it <container-id>` | Attaches to a running container. |
| `docker stop <container-id>` | Stops a running container. |
| `docker rm <container-id>` | Removes a stopped container. |

## Wrapping Up

Now that you've got a foundational understanding, it's time to put your knowledge to use. Start experimenting with Docker, build your first container, and explore its vast ecosystem.

You'll soon see why Docker has become a cornerstone of modern DevOps and software engineering.

You can follow me on

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