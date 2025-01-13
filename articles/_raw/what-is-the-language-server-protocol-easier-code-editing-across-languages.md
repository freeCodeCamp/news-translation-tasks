---
title: Understanding the Language Server Protocol – Easier Code Editing Across
  Languages and Tools
date: 2025-01-13T08:22:14.906Z
author: Alex Pliutau
authorURL: https://www.freecodecamp.org/news/author/pltvs/
originalURL: https://www.freecodecamp.org/news/what-is-the-language-server-protocol-easier-code-editing-across-languages/
posteditor: ""
proofreader: ""
---

In the past, many code editors were built just for one specific language. To provide rich and smart code editing, tight integration between the editor and the language tooling was a must.

<!-- more -->

On the other hand, there were (and still are) more general-purpose editors, but they lacked in functionality when it came to more advanced language-specific features like code completion, “go to definition”, and so on. As an example, code highlighting was done using regular expressions.

With the growing number of code editors and programming languages available, this became the classic **M\*N** complexity problem.

But then Microsoft introduced the [Language Server Protocol][1] (LSP) as a solution to the problem above, which elegantly transforms this **M\*N** complexity into a more manageable **M+N** situation.

## Table of Contents

-   [Why Microsoft Created the LSP][2]
    
-   [What is the Language Server Protocol (LSP)?][3]
    
-   [Language Server Features][4]
    
-   [How Does LSP Work?][5]
    
-   [Language Server for Go][6]
    
-   [LSP Adoption][7]
    
-   [Conclusion][8]
    
-   [Resources][9]
    

## Why Microsoft Created the LSP

The LSP was initially driven by the needs of VS Code. VS Code had to work with hundreds of different Language Servers as part of its extensions. But there were multiple problems:

-   **Language mismatch**: Language Servers are often written in different languages than the editor (like VS Code's Node.js).
    
-   **Performance impact**: Language features can be resource-intensive, potentially slowing down the editor.
    
-   **Integration complexity**: Multiple editors and multiple languages introduces the **M\*N** complexity mentioned above.
    

Exactly because of that, Microsoft introduced LSP to standardize the communication between language tools and editors, allowing language servers to be written in any language, run separately for better performance, and easily integrate with any LSP-compliant editor. This simplifies language support for both tool providers and editor vendors.

You can find more info in this [Language Server Extension Guide][10].

## What is the Language Server Protocol (LSP)?

The LSP separates language servers from code editors (language clients). By making language servers independent processes dedicated to language understanding, the LSP enables any editor to utilize a standard language server. This means that a single standard language server can be used by all editors.

This interoperability is achieved through a defined set of standard messages and procedures that govern communication between language servers and editors. The LSP defines the format of the messages sent using JSON-RPC between the development tool and the language server.

![Communication between the editor and the Language Server](https://miro.medium.com/v2/resize:fit:700/0*Vdycq7316e_hKTCe.png)

## **Language Server Features**

The list of features may vary for each individual language server, but usually they provide the following functionalities:

-   Auto-completion
    
-   Go to definition/declaration
    
-   Find references
    
-   Code formatting
    
-   Diagnostics
    
-   Documentation
    

And more.

For example, [here][11] you can see the list of editor features that **gopls** (the Go Language Server) provides.

And [here][12] you can see the full LSP specification for available features.

There are hundreds of Language Servers out there. Typically, every mature programming language (or markup language) has at least one Language Server. You can see the full list of language servers that implement LSP [here][13].

## **How Does LSP Work?**

The Language Server Protocol is built upon [JSON-RPC][14]. It specifically uses JSON RPC 2.0. You can think of JSON-RPC as a remote procedure call protocol that uses JSON for data encoding.

In a nutshell, it works like this. First, the editor establishes a connection with the language server. Then as the developer types code, the editor sends incremental changes to the language server. It then sends back insights like code completion suggestions and diagnostics.

Let’s see one real example for auto-completion. The request from the Language Client (editor) for this case will be:

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

As you can see, it sends the information about current cursor position and the buffer file. Let’s break it down:

-   **ID**: The client sets this field to identify the request uniquely. Once the request is processed, it will return a response with the same request ID so that the client can match which response is for what request.
    
-   **Method**: A string containing the name of the method to be invoked.
    
-   **Params**: The parameters to be passed to the method. This can be structured as an array or an object.
    

Language server can access this file, analyze it, and respond with suggestions:

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

## **Language Server for Go**

The most popular and commonly used language server for Go is [gopls][15]. It is used by many editors, for example by the [Visual Studio Code Go extension][16]. Previously, there was another popular Language Server for Go by the Sourcegraph team called [go-langserver][17], but this is no longer under active maintenance.

Many editors install gopls Language Server automatically if it’s not present on the host machine. But you can install it manually as well:

```
# check if its' installed and which version
gopls version
# golang.org/x/tools/gopls v0.16.2

# install or upgrade
go install golang.org/x/tools/gopls@latest
```

gopls also provides an experimental CLI interface:

```
gopls references ./main.go:35:8
```

## **LSP Adoption**

The trend is definitely towards LSP adoption. Many editors that didn't initially support it are adding LSP capabilities due to its benefits.

But it's important to note that not all editors use LSP. Classic editors like **Vi**, **Vim** (in its basic configuration), and **emacs** (without specific plugins) traditionally rely on simpler methods for language support, such as syntax highlighting based on regular expressions.

Also, when your editor uses a Language Server, it can have a noticeable impact on CPU and memory, especially for large projects or complex languages. The good news is that you can choose a more efficient language server or disable them in your editor.

Here is how I can inspect what language servers my [Zed][18] editor is currently running:

```
ps aux | grep language-server

node yaml-language-server --stdio
node tailwindcss-language-server --stdio
...
```

## **Conclusion**

Thanks to the Language Server Protocol, advanced coding capabilities are becoming universally accessible across various programming languages and coding environments.

It’s good to know how your code editors work, so it’s beneficial to have an understanding of this widely used technology called LSP. In short, LSP knowledge helps you understand and better utilize modern coding tools.

LSP is a win for both language providers and tooling vendors.

### **Resources**

-   [Language Server Protocol][19]
    
-   [gopls][20]
    
-   Discover more articles on [packagemain.tech][21]
    

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