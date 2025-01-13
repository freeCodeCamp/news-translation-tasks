--- 
title: 理解语言服务器协议 – 跨语言和工具的更轻松代码编辑 
date: 2025-01-13T08:22:14.906Z 
author: Alex Pliutau 
authorURL: https://www.freecodecamp.org/news/author/pltvs/ 
originalURL: https://www.freecodecamp.org/news/what-is-the-language-server-protocol-easier-code-editing-across-languages/ 
posteditor: "miyaliu66" 
proofreader: "" 
--- 
 
过去，许多代码编辑器是专门为一种特定语言而构建的。为了提供丰富而智能的代码编辑，编辑器与语言工具的紧密集成是必需的。 
 
<!-- more --> 
 
另一方面，也存在（并且仍然存在）更多通用的编辑器，但在涉及更高级的语言特定功能（如代码补全、“转到定义”等）时，它们在功能上有所欠缺。例如，代码高亮是使用正则表达式完成的。 
 
随着可用代码编辑器和编程语言的不断增加，这成了典型的 **M\*N** 复杂性问题。 
 
但随后，微软引入了 [Language Server Protocol][1]（LSP）作为上述问题的解决方案，它优雅地将此 **M\*N** 复杂性转变为更易于管理的 **M+N** 情景。 
 
## 目录 
 
-   [微软为何创建 LSP][2] 
     
-   [什么是语言服务器协议（LSP）？][3] 
     
-   [语言服务器功能][4] 
     
-   [LSP 如何工作？][5] 
     
-   [Go 语言的语言服务器][6] 
     
-   [LSP 采用][7] 
     
-   [结论][8] 
     
-   [资源][9] 
     
 
## 微软为何创建 LSP 
 
LSP 最初由 VS Code 的需求驱动。VS Code 必须与数百个不同的语言服务器协作，作为其扩展的一部分。但有多个问题： 
 
-   **语言不匹配**：语言服务器通常用不同于编辑器（比如 VS Code 的 Node.js）的语言编写。 
     
-   **性能影响**：语言功能可能是资源密集型的，可能会减慢编辑器的速度。 
     
-   **集成复杂性**：多个编辑器和多种语言引入了上述的 **M\*N** 复杂性。 
     
 
正因为如此，微软引入了 LSP，标准化语言工具与编辑器之间的通信，使得语言服务器可以用任何语言编写，为了更好的性能而分开运行，并能够轻松地与任何遵循 LSP 的编辑器集成。这简化了工具提供商和编辑器供应商的语言支持。 
 
你可以在这个 [语言服务器扩展指南][10] 中找到更多信息。 
 
## 什么是语言服务器协议（LSP）？ 
 
LSP 将语言服务器从代码编辑器（语言客户端）中分离出来。通过使语言服务器成为独立的进程专注于语言理解，LSP 使任何编辑器都能利用标准语言服务器。这意味着所有编辑器都可以使用单一标准语言服务器。 
 
这种互操作性是通过定义的一组控制语言服务器和编辑器之间通信的标准消息和过程实现的。LSP 定义了在开发工具和语言服务器之间使用 JSON-RPC 发送的消息格式。 
 
![编辑器与语言服务器之间的通信](https://miro.medium.com/v2/resize:fit:700/0*Vdycq7316e_hKTCe.png) 
 
## **语言服务器功能** 
 
每个语言服务器的功能列表可能有所不同，但通常提供以下功能： 
 
-   自动补全 
     
-   转到定义/声明 
     
-   查找引用 
     
-   代码格式化 
     
-   诊断 
     
-   文档 
     
 
等等。 
 
例如，你可以在[这里][11]查看 **gopls**（Go 语言服务器）提供的编辑器功能列表。 
 
在[这里][12]你可以看到可用功能的完整 LSP 规范。 
 
市面上有成百上千个语言服务器。通常，每种成熟的编程语言（或标记语言）至少有一个语言服务器。你可以在[这里][13]查看实现 LSP 的语言服务器的完整列表。 
 
## **LSP 如何工作？** 
 
语言服务器协议建立在 [JSON-RPC][14] 之上。它特别使用了 JSON RPC 2.0。你可以将 JSON-RPC 看作是一种使用 JSON 进行数据编码的远程过程调用协议。 
 
简而言之，它的工作原理如下。首先，编辑器与语言服务器建立连接。然后，当开发者输入代码时，编辑器会将增量变化发送给语言服务器。然后语言服务器会返回建议，如代码补全建议和诊断信息。 
 
让我们来看一个实际的自动补全案例。对此案例中来自语言客户端（编辑器）的请求将是： 
 
``` 
{ 
  "jsonrpc": "2.0", 
  "id": 1, 
  "method": "textDocument/completion", 
  "params": { 
    "textDocument": { 
      "uri": "file:///home/alex/code/test/main.go" 
    }, 
    "position": { 
      "line": 35, 
      "character": 21 
    } 
  } 
} 
``` 
 
如您所见，它发送了有关当前光标位置和缓冲区文件的信息。让我们拆解一下： 
 
-   **ID**：客户端设置此字段以唯一标识请求。一旦请求被处理，它将返回一个带有相同请求 ID 的响应，以便客户端可以匹配哪一个响应对应哪一个请求。 
     
-   **Method**：要调用的方法名称的字符串。 
     
-   **Params**：要传递给方法的参数。这可以构造成数组或对象。 
     
 
``` 
{ 
  "jsonrpc": "2.0", 
  "id": 1, 
  "result": { 
    "isIncomplete": false, 
    "items": [ 
      { 
        "label": "Println", 
        "kind": 3, 
        "insertText": "Println(${1:format}, ${2:a ...interface{}})$0", 
        "insertTextFormat": 2, 
        "detail": "func Println(a ...interface{}) (n int, err error)", 
        "documentation": "Println formats ..." 
      }, 
      // ... other items 
    ] 
  } 
} 
``` 
 
## **Go 语言的语言服务器** 
 
Go 语言中最流行和常用的语言服务器是 [gopls][15]。它被许多编辑器使用，比如 [Visual Studio Code 的 Go 扩展][16]。以前，Sourcegraph 团队提供了另一个流行的 Go 语言服务器，叫做 [go-langserver][17]，但它已经不再积极维护。 
 
许多编辑器如果在主机上检测到没有 gopls 语言服务器时，会自动安装它。但你也可以手动安装： 
 
``` 
# 检查是否已安装及其版本 
gopls version 
# golang.org/x/tools/gopls v0.16.2 
 
# 安装或升级 
go install golang.org/x/tools/gopls@latest 
``` 
 
gopls 还提供了一个实验性的 CLI 接口： 
 
``` 
gopls references ./main.go:35:8 
``` 
 
## **LSP 的采纳** 
 
趋势显然是向 LSP 的采纳发展。许多最初不支持它的编辑器由于其优点正在添加 LSP 功能。 
 
但重要的是要注意，并不是所有的编辑器都使用 LSP。传统的编辑器如 **Vi**、**Vim**（在其基本配置中）和 **emacs**（没有特别的插件）依赖于语言支持的简单方法，例如基于正则表达式的语法高亮。 
 
此外，当你的编辑器使用语言服务器时，它可能会对 CPU 和内存产生显著影响，特别是对于大型项目或复杂语言。值得庆幸的是，你可以选择一个更高效的语言服务器，或者在编辑器中禁用它们。 
 
以下是我如何检查我的 [Zed][18] 编辑器当前运行哪些语言服务器： 
 
``` 
ps aux | grep language-server 
 
node yaml-language-server --stdio 
node tailwindcss-language-server --stdio 
... 
``` 
 
## **结论** 
 
得益于语言服务器协议，高级编码功能正在各种编程语言和编码环境中普遍可用。 
 
了解你的代码编辑器是如何工作的很有好处，所以了解这种广泛使用的技术 LSP 是有益的。简而言之，LSP 知识帮助你理解和更好地利用现代编码工具。 
 
LSP 对于语言提供者和工具供应商来说是一个双赢的局面。 
 
### **资源** 
 
-   [语言服务器协议][19] 
     
-   [gopls][20] 
     
-   在 [packagemain.tech][21] 上发现更多文章 
     
 
[1]: https://microsoft.github.io/language-server-protocol/ 
[2]: #heading-why-microsoft-created-the-lsp 
[3]: #heading-what-is-the-language-server-protocol-lsp 
[4]: #heading-language-server-features 
[5]: #heading-how-does-lsp-work 
[6]: #heading-language-server-for-go 
[7]: #heading-lsp-adoption 
[8]: #heading-conclusion 
[9]: #heading-resources 
[10]: https://code.visualstudio.com/api/language-extensions/language-server-extension-guide 
[11]: https://github.com/golang/tools/blob/master/gopls/doc/features/README.md 
[12]: https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#languageFeatures 
[13]: https://microsoft.github.io/language-server-protocol/implementors/servers/ 
[14]: https://www.jsonrpc.org/ 
[15]: https://github.com/golang/tools/tree/master/gopls 
[16]: https://github.com/golang/vscode-go 
[17]: https://github.com/sourcegraph/go-langserver 
[18]: https://zed.dev/ 
[19]: https://microsoft.github.io/language-server-protocol/ 
[20]: https://github.com/golang/tools/tree/master/gopls 
[21]: https://packagemain.tech/ 
``` 
 
 
