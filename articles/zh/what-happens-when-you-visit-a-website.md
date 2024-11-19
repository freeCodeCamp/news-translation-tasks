---

title: 访问网站时会发生什么？网络如何运作详解

date: 2024-11-19T09:53:40.335Z

author: Viviana Yanez

authorURL: https://www.freecodecamp.org/news/author/vivianay/

originalURL: https://www.freecodecamp.org/news/what-happens-when-you-visit-a-website/

posteditor: ""

proofreader: ""

---

在本文中，我将指导您了解使用浏览器导航至网站时会发生的情况概述。

<!-- more -->

无论您是网络开发新手还是有一些经验，本篇文章都将帮助您更好地理解网络及其核心技术的工作原理。

## 目录

-   [找到资源：URL][1]

-   [匹配 IP 与 URL：DNS 解析][2]

    -   [什么是 DNS 解析器？][3]

    -   [什么是根 DNS 服务器？][4]

    -   [什么是顶级域名服务器？][5]

    -   [权威名称服务器][6]

-   [建立连接：TCP/IP 模型][7]

    -   [TCP 连接如何工作？][8]

    -   [TCP 三次握手][9]

-   [开始交流：客户端-服务器通信][10]

    -   [什么是 HTTP 协议？][11]

    -   [HTTP 请求/响应][12]

    -   [HTTPS][13]

    -   [首字节时间][14]

-   [从数据到像素：关键渲染路径][15]

    -   [构建 DOM 树][16]

    -   [构建 CSSOM 树][17]

    -   [JavaScript 编译与执行][18]

    -   [构建辅助功能树][19]

    -   [渲染树][20]

    -   [布局][21]

    -   [绘制][22]

    -   [关于 JavaScript Hydration 的一点说明][23]

-   [总结][24]

在详细分析过程中每一步之前，让我们先回顾一些我们将会涉及的基本概念。

互联网是一个由互联计算机组成的巨大网络。万维网（也称为网络）基于该技术构建，并且还有其他服务，例如电子邮件、聊天系统或文件共享等。

连接到互联网的计算机可以是：

-   **客户端**，即网络用户的设备和这些设备用来访问网络的软件。

-   **服务器**，存储网页、网站或应用程序的计算机及它们需要在用户的网页浏览器或设备中显示的文件。

## 找到资源：URL

存储在服务器中的每个资源都可以通过其有效的关联 URL 被客户端定位。以下是一个有效 URL 的示例：

![有效 URL 示例，包括协议、授权、资源路径、两个参数和一个锚点。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731414821178/970907db-f349-421e-b410-45f4ee978e0b.jpeg)

您可能已经知道什么是 URL，但让我们详细看看它的每个部分：

-   **协议**：URL 的第一部分指示应该使用哪个协议来检索资源。网站使用 HTTP 和 HTTPS 协议，但我们稍后会更详细地讨论这一点。协议后的 `:` 是将其与 URL 下一部分分隔开的符号。

-   **授权**：这一部分由域名和由冒号分隔的端口号组成。只有当网络服务器没有使用 HTTP 协议的标准端口 （HTTP 是 80，HTTPS 是 443） 时才需要端口。在域名前的 `//` 表示授权的开始。

-   **资源路径**：这是网络服务器中资源的抽象路径或物理路径。

-   **参数**：一组键/值对，为返回请求的资源添加额外选项。它们由 `&` 分隔，并且每个网络服务器都有自己的处理参数的方式。该部分以 `?` 开始。

-   **锚点**：如果存在，此部分以 `#` 开始，并由浏览器处理以显示已返回文档的特定部分。例如，它可以指向 HTML 文档中的特定部分。

当您在浏览器的地址栏中输入 URL 时，会发生一些事情，以便您可以导航到网站并与其内容交互。让我们详细看看每一个。

## 匹配 IP 与 URL：DNS 解析

虽然作为人类，我们更喜欢由单词组成的域名，但计算机之间通过使用 IP 地址进行通信。IP 地址由数字组成，对于我们大脑来说更难记住。[域名系统][25]（**DNS**）是将域名和 IP 地址结合在一起的系统。

当您输入 URL 时，浏览器将首先查看本地缓存，以查看 DNS 查找的结果是否已存储。然后，它同样会检查操作系统缓存。

如果没有存储结果，浏览器将调用 DNS 解析器来尝试查找与域名关联的 IP 地址。

### 什么是 DNS 解析器？

解析器通常由您的互联网供应商的 DNS 定义，即使这是大多数人使用的默认设置，也可以将其更改为 Google 的或 Cloudflare 的，或任何您想要的其他服务。



```markdown
### 什么是根 DNS 服务器？

根 DNS 服务器是驱动整个互联网的系统。它由分布在全球的十三台服务器组成。它将来自解析器的查询返回给请求的域名的相关顶级域名服务器。

此时，DNS 解析器会缓存该顶级域名服务器的 IP，以便以后不再需要再次请求根 DNS 服务器。

### 什么是顶级域名服务器？

[顶级域名][26]（**TLD**）服务器存储用户要查找的域的权威名称服务器的 IP 地址。

在 URL `www.exampleurl.com` 中，顶级域名是 `.com`。有不同类型的顶级域名，如通用顶级域名（如 `.com` 或 `.org`），国家代码顶级域名（通常由两位字母的 ISO 国家代码表示）等。

TLD 返回请求域的权威名称服务器。再次，DNS 解析器会缓存这些结果，以便不用再回来请求。

### 权威名称服务器

此服务器包含将域名映射到 IP 地址的 DNS 记录。任何域都附有不止一个名称服务器。

因为权威名称服务器是最高权限，也是 DNS 解析链中的最新环节，该阶段不涉及缓存。

如果 IP 地址可用，权威名称服务器会以域名的 IP 地址回应 DNS 解析器的查询。如果不可用，则会以错误回应。然后，DNS 解析器存储 IP 地址并将其发送回客户端的浏览器。

一旦 DNS 查找完成且浏览器获取了 IP 地址，便可以尝试与服务器建立连接。

## 建立连接：TCP/IP 模型

客户端和服务器之间的连接是通过[传输控制协议][27]（**TCP**）和[互联网协议][28]（**IP**）建立的。这些协议是万维网及其他互联网技术（如电子邮件）的基础，它们决定了数据如何在网络中传输。

[TCP/IP 模型][29]是一个用于组织互联网及其他网络通信中涉及的不同协议的框架。TCP/IP 的主要职责是将数据分成数据包并发送到其最终目的地，确保数据包在通信的另一端能重新组合。

这一过程遵循一个四层模型，数据沿一个方向传输，达到目的地后再按相反方向传输：

![四层模型包括应用层、传输层、互联网层和网络层。数据在这些层间来回传输。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731414848576/178ce64e-2216-487a-b142-c88c2125dcde.jpeg)

传输层确保应用程序可以通过建立数据通道进行数据交换。它也是引入网络端口概念的层，这是一个为特定通信通道分配的编号数据通道系统，应用程序所需的通信通道。

TCP/IP 模型的传输层包括两种互联网中最常用的协议：TCP 和[用户数据报协议][30]（UDP）。

TCP 包含一些功能，使其在大多数基于互联网的应用程序（如 Web）中占据主导地位，因此我们将重点关注它。

### TCP 连接是如何工作的？

TCP 允许数据可靠且按顺序地传输到其目的地。它是一个面向连接的协议，这意味着发送者和接收者必须在真正建立连接之前就连接参数达成一致。这个过程被称为握手程序。

### TCP 三次握手

握手是客户端和服务器建立安全连接并确保双方同步并准备好开始交换消息的一种方式。

![TCP 握手的三个步骤。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731414866173/6d66c360-2d2e-427b-8c8d-1555fdaa7197.jpeg)

TCP 握手的三个步骤包括：

1. 客户端通过发送 SYN（同步）数据包通知服务器，它希望建立连接。该数据包指定后续段将开始使用的序列号。
   
2. 服务器收到 SYN 并通过 SYN-ACK（同步确认）段进行回应。它包括服务器的序列号和客户端序列号的确认，客户端序列号加一。
   
3. 客户端以 ACK 消息回应，确认服务器的序列号。此时，连接已经建立。

## 开始交换：客户端-服务器通信

一旦建立 TCP 连接，客户端和服务器便可以开始使用 HTTP 协议交换消息。

### 什么是 HTTP 协议？

[超文本传输协议][31]（**HTTP**）是 TCP/IP 套件中最广泛使用的应用层协议，但由于其被认为不安全，已转向使用在 TCP 之上加密数据的 HTTPS，稍后您会看到更多细节。
```

### HTTP 请求/响应

HTTP 消息有两种类型：

- **请求**：由客户端发送到服务器以触发一个操作。
- **响应**：由服务器发送到客户端作为对先前请求的回复。

消息是纯文本文件，按照通信协议（在这种情况下是 HTTP）确定的精确方式进行结构化。

**HTTP 请求**包括以下三个部分：

1. **请求行**：包括请求方法，这是定义执行的动作的动词。在此博客文章中提到的情况是，浏览器将发出一个 GET 请求以从服务器获取页面。请求行还将包括资源位置，在此情况下为 URL，以及所使用的协议版本。

2. **请求头**：一组键值对。其中两个是必需的。`Host` 指示要访问的域名，`Connection` 总是设置为关闭，除非必须保持打开状态。请求头总以空行结束。

3. **请求体**：一个可选字段，允许向服务器发送数据。

服务器将使用 HTTP 响应来回复请求。响应包括有关请求状态的信息，并可能包含请求的资源或数据。

HTTP 响应结构化为以下部分：

1. **状态行**：包括所用协议版本、状态码和状态文本，提供状态码的可读描述。

2. **头部**：一组键值对，可以是通用头部，适用于整个消息；响应头部，提供有关服务器状态的附加信息；或表述头部，描述消息数据的格式和编码（如果存在）。

3. **主体**：包含请求的数据或资源。如果客户端不希望有数据或资源，请求通常不会包含主体。

当服务器批准网页请求时，响应将包含 `200 OK` 消息。其他现有的 HTTP 响应代码有：

- 404 未找到
- 403 禁止访问
- 301 永久移动
- 500 内部服务器错误
- 304 未修改
- 401 未授权

响应还将包含一系列 HTTP 头部和响应主体，其中包括请求页面的相应 HTML 代码。

### HTTPS

[超文本传输安全协议][32]（**HTTPS**）不是一个不同的协议，而是 HTTP 的扩展。它通常被称为传输层安全（**TLS**）上的 HTTP。让我们看看它到底意味着什么。

HTTP 是用于大多数浏览器与服务器之间通信的协议，但缺乏安全性。通过 HTTP 发送的任何数据都可能对网络上的任何人可见。这在涉及敏感数据的连接中尤其危险，例如登录凭据、财务信息、健康信息等。

HTTPS 背后的主要动机是确保数据隐私、完整性和身份验证。这意味着确保数据只能被其预期的访问者访问，并且不能被中间的任何人拦截或修改。此外，发送方和接收方都可以通过合法权威机构被识别为其声称的身份。

在 HTTPS 中，通信使用 TLS 协议加密，依赖于非对称公钥基础设施。它结合两个密钥：一个公钥和一个私钥。服务器分享其公钥，以便客户端可以使用它加密消息，这些消息只有通过服务器的私钥才能解密。

为了建立加密通信，客户端和服务器必须启动另一个握手。在握手期间，它们商定使用的 TLS 版本，以及如何在连接期间加密数据和相互认证，一组称为密码套件的规则。

![SSL 握手步骤。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731414891509/541f6b6c-ad54-4301-834a-1056aea524c0.jpeg)

此握手或 TLS 协商在建立 TCP 连接后开始，并包括以下步骤：

- **客户端 Hello**：浏览器发送一条 hello 消息，其中包含所有支持的 TLS 版本和密码套件。
- **服务器 Hello**：服务器响应选择的密码套件和 TLS 版本，以及其包含服务器公钥的 SSL 证书。
- **认证和预主密钥**：客户端使用相应的可信任机构验证服务器的 SSL 证书，然后使用服务器的公钥（之前在证书中共享）创建预主密钥，并将此预主密钥与服务器共享。
- **预主密钥解密**：预主密钥只能使用服务器的私钥解密。如果服务器能够解密它，则客户端和服务器可以就会话使用的共享主密钥达成一致。
- **客户端 ChangeCipherSpec**：客户端使用共享主密钥创建会话密钥，并将之前交换的所有记录发送给服务器，这次使用会话密钥加密。
- **服务器 ChangeCipherSpec**：如果服务器生成了正确的会话密钥，则能够解密消息并验证接收到的记录。然后服务器发送一条记录以确认客户端也拥有正确的密钥。
- **建立安全连接**：握手完成。

### 首字节时间

一旦浏览器的请求被批准，服务器将发送一个 200 OK 消息以及响应头和请求的内容。因为这是一个网站，内容很可能是一个 HTML 文档。

数据在客户端与服务器之间传输时被分成一系列小的数据块，称为数据包。这使得在需要时可以轻松替换损坏的数据块，同时也允许数据从不同位置传输往返，使得多个用户能够更快且同时访问数据。

当客户端发出第一个请求时，第一个到达的响应数据包标志着[首字节时间][33]（**TTFB**），它表示从请求发出到接收到第一个数据块之间的时间。这包括进行 DNS 查找、建立连接的 TCP 握手，以及如果是通过 HTTPS 发出的请求，还包括 TLS 握手所花的时间。

## 从数据到像素：关键渲染路径

[关键渲染路径][34]（**CRP**）是浏览器执行的一系列步骤，将服务器返回的数据转换为屏幕上的像素。它包括创建[文档对象模型][35]（**DOM**）和[CSS 对象模型][36]（**CSSOM**）、**渲染树**和**布局**。

### 构建 DOM 树

当第一个数据块到达时，浏览器开始解析 HTML。解析意味着分析并将一段输入代码转换为可以被特定运行环境解释的语法和表示。在这种情况下，浏览器组装接收到的数据包并解析 HTML，构建称为 DOM 树的文档表示。

文档中的每个 HTML 标签都表示为 DOM 树中的一个节点。节点根据它们在文档中的层次结构连接到 DOM 树上，每个节点的表示都包括关于该标签的所有相关信息。

对于以下 HTML 代码：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What Really Happens When You Navigate to a Website</title>
</head>
<body>
    <main>
        <header>
            <h1>What Really Happens When You Navigate to a Website</h1>
        </header>

        <section>
            <h2>Intro</h2>
            <p>
                Before entering into the details of every step included in the process, let's review some of the basic concepts we will be discussing throughout the blog.
            </p>
            <p>
                The Internet is a huge network of interconnected computers. The World Wide Web (aka web) is built on top of that technology, as well as other services such as email, chat systems, or file sharing.
            </p>

            <p>Computers connected to the internet are either:</p>
            <ul>
                <li>
                    <p>Clients, the web user's devices and the software that those devices use to access the web.</p>
                </li>
                <li>
                    <p>Servers, computers that store web pages, sites, or apps and the files they need to be displayed in the user's web browser or devices.</p>
                </li>
            </ul>
        </section>
    </main>

    <footer>
        <p>© 2024</p>
    </footer>
</body>
</html>
```

生成的 DOM 树如下所示：

![DOM树包括所有HTML元素、其内容及其层次关系。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731498370760/4267c646-145e-487c-83af-f97d6f8ce21d.jpeg)

在解析 HTML 的同时，浏览器会对遇到的资源进行额外请求。CSS 文件和图像是非阻塞资源，意味着解析器在等待请求资源的同时会继续其任务。但如果遇到一个 `<script>` 标签，HTML 解析会暂停，从而影响首次渲染时间。

### 构建 CSSOM 树

虽然 DOM 包含页面内容及其层次结构的所有信息，CSSOM 则包含关于如何样式化页面的信息。

在 CSSOM 中，每个 HTML 元素都与其对应的 CSS 样式相匹配。结果是一个不包含元素内容信息的树，而是关于它们应该如何显示的信息。

给定以下 CSS 代码：

```css
* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

main {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

header {
    background-color: #005bbb;
    color: #ffffff;
    padding: 10px;
    text-align: center;
}

h1 {
    font-size: 24px;
}

section {
    margin-top: 20px;
}

h2 {
    font-size: 20px;
    color: #005bbb;
    display: none;
}

p {
    margin-bottom: 10px;
}

ul {
    margin-left: 20px;
    list-style-type: disc;
}

footer {
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
    color: #555;
}
```

当浏览器处理它时，生成的 CSSOM 如下所示：

![CSSOM树包括每个HTML元素及其对应的样式。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731496962735/f3cb0399-a9fb-48cc-8043-00608d1236db.jpeg)

这之所以如此，是因为级联样式表 (**CSS**) 如其名所示，从上到下应用样式，这意味着在文档中稍后定义的类会覆盖开头的类。在屏幕上渲染任何内容之前，需要完全处理 CSS 文档，因为某些类可能会更改。

### Javascript 编译和执行

在创建 CSSOM 时，渲染被阻塞，但浏览器会继续下载它遇到的任何 JavaScript 文件。

JavaScript 也会被浏览器解析、编译和解释，但如前所述，它默认是一个解析阻塞资源。这意味着当浏览器遇到 `<script>` 标签时，它会停止 HTML 解析并执行文件后才继续。可以使用 async 或 defer 属性避免此行为，允许在获取资源时继续解析。

一旦浏览器完成了解析并执行所有可能修改 DOM 和 CSSOM 的 JavaScript 文件，下一步就是构建渲染树。但是，在详细了解此步骤之前，让我们先关注辅助功能树。

### 构建辅助功能树

基于在 DOM 树中创建的站点结构，浏览器也会创建一个辅助功能树。

辅助功能树是该站点内容的另一种表示形式，专门设计用于使用[辅助技术][37]浏览网站。

在辅助功能树中，每个 DOM 元素都表示为一个可访问对象，包含以下信息：

-   **名称**：用于引用元素的标识符。
    
-   **描述**：关于元素的附加信息。
    
-   **角色**：元素的类型，与其预期用途相关。
    
-   **状态**及其他属性：如果元素可能发生变化，则可能包括其当前状态。它还可以包括指定其他功能的其他属性。
    

在主要的网络浏览器中，可以通过在 DOM 树查看器中选择一个节点并导航到“辅助功能”标签来访问可访问对象及其信息。

![在 Chrome 开发者工具中选择的无序列表及辅助功能选项卡。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731578933460/0a8c7a78-c19a-4d19-a96a-fabd19772156.png)

![在 Firefox 开发者工具中选择的无序列表及辅助功能选项卡。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731579023128/85aeb312-1632-49c3-80cb-0d5db8ec8502.png)

拥有一个结构良好的辅助功能树在确定一个网站是否可以使用辅助技术导航时是关键，这决定了包容与排斥的区别。

### 渲染树

在构建了 DOM、CSSOM 和辅助功能树之后，浏览器开始构建渲染树。

这棵树是 DOM 和 CSSOM 树的组合。浏览器处理所有节点并仅保留可见的节点。然后，它将它们与相应的 CSSOM 规则组合。结果是所有可见元素及其计算样式的集合。

不可见的节点，例如 `<script>` 或 `<meta>` 标签，以及使用 CSS 属性 `display: none` 隐藏的元素，不包含在这棵树中。

![渲染树是从 DOM 和 CSSOM 树创建的。](https://cdn.hashnode.com/res/hashnode/image/upload/v1731501603172/d3467e9a-e75b-4217-875b-58684edfdbc0.jpeg)

### 布局

一旦计算出渲染树，浏览器就会运行布局。在这个过程中，浏览器计算每个元素在页面上应该占据的确切位置和大小。

这些计算基于视口大小，即实际上显示站点内容的浏览器区域。视口的大小会根据设备屏幕大小、浏览器窗口大小、系统设置和其他条件而变化。

布局输出是一个盒子模型，捕捉到渲染树中存在的每个元素和对象对应的大小和位置。浏览器通常从 `<body>` 标签开始处理文档，然后遍历其所有后代。

布局计算完成后，文档中一个或多个元素的大小或位置的任何更改将触发新的计算。这些后续计算称为回流。

### 绘制

现在，最后一步是将布局输出显示在用户的屏幕上。在绘制或栅格化阶段，浏览器将每个布局框元素转换为屏幕上的相应像素。

整个页面的视觉表示会首先在屏幕上渲染，然后仅重新渲染更改影响的区域。

许多因素影响浏览器执行此步骤所需的时间，并且有工具可以帮助开发人员衡量和优化此时间。

绘制之后，在用户可以开始与网站交互之前，浏览器可能会执行任何使用 `defer` 或 `async` 属性延迟的 JavaScript 以避免阻塞初始 HTML 解析。

### 关于 JavaScript 水合的说明

我们上面描述的步骤展示了在浏览器中渲染所有网站的 HTML、CSS 和 JavaScript 代码的过程。这被称为客户端渲染（Client-Side Rendering, CSR）。您可能还听说过服务器端渲染（Server-Side Rendering, SSR）。

当使用 CSR 渲染站点时，所有 JavaScript 在页面渲染之前被执行。在 SSR 中，服务器渲染的 HTML 在浏览器中加载并快速显示，但仍需将 JavaScript 发送到客户端以启用用户交互。

JavaScript Hydration 是将 JavaScript 添加到服务器渲染的 HTML 页面中以使其具有交互性的过程。一旦初始 HTML 被提供并在浏览器中显示，JavaScript "hydrate" 静态内容，附加事件监听器并启用交互功能。

## 结论

在本文中，您增强了对从键入网站地址到在浏览器地址栏中访问所需网站内容这一过程的理解。

您了解了 URL 和浏览器为找到网站的 IP 地址所执行的 DNS 查找。您还学习了浏览器与服务器之间如何建立连接及其通信方式。

最后，您探索了从接收到服务器的第一段数据到网站在您的屏幕上显示的过程，以及关键概念如可访问性树和 JavaScript Hydration 过程。

希望您喜欢本指南并发现它有用。感谢您的阅读！

[1]: #heading-finding-a-resource-urls
[2]: #heading-matching-ips-and-urls-dns-resolution
[3]: #heading-what-is-the-dns-resolver
[4]: #heading-what-is-the-root-dns-server
[5]: #heading-what-is-the-top-level-domain-server
[6]: #heading-authoritative-nameserver
[7]: #heading-establishing-a-connection-tcpip-model
[8]: #heading-how-does-tcp-connection-work
[9]: #heading-tcp-three-way-handshake
[10]: #heading-starting-the-exchange-client-server-communication
[11]: #heading-what-is-the-http-protocol
[12]: #heading-http-requestresponse
[13]: #heading-https
[14]: #heading-time-to-first-byte
[15]: #heading-from-data-to-pixels-the-critical-rendering-path
[16]: #heading-building-the-dom-tree
[17]: #heading-building-the-cssom-tree
[18]: #heading-javascript-compilation-and-execution
[19]: #heading-building-the-accessibility-tree
[20]: #heading-render-tree
[21]: #heading-layout
[22]: #heading-painting
[23]: #heading-a-note-about-javascript-hydration
[24]: #heading-conclusion
[25]: https://en.wikipedia.org/wiki/Domain_Name_System
[26]: https://en.wikipedia.org/wiki/Top-level_domain
[27]: https://en.wikipedia.org/wiki/Transmission_Control_Protocol
[28]: https://en.wikipedia.org/wiki/Internet_Protocol
[29]: https://en.wikipedia.org/wiki/Internet_protocol_suite
[30]: https://en.wikipedia.org/wiki/User_Datagram_Protocol
[31]: https://en.wikipedia.org/wiki/HTTP
[32]: https://en.wikipedia.org/wiki/HTTPS
[33]: https://developer.mozilla.org/en-US/docs/Glossary/Time_to_first_byte
[34]: https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
[35]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
[36]: https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model
[37]: https://en.wikipedia.org/wiki/Web_accessibility#Assistive_technologies_used_for_web_browsing

