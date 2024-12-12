---
title: 如何使用 Gemini API 构建视频字幕生成器
date: 2024-12-12T03:25:52.102Z
author: Sanjay R
authorURL: https://www.freecodecamp.org/news/author/sanjayxr/
originalURL: https://www.freecodecamp.org/news/build-a-video-subtitle-generator-using-the-gemini-api/
posteditor: "miyaliu66"
proofreader: ""
---

在本教程中，你将使用谷歌的 Gemini API 构建一个 AI 驱动的字幕生成器。我们将创建一个名为 “AI-Subtitle-Generator” 的项目，前端使用 React，后端使用 Express。准备好迎接一个有趣而实用的项目吧。

<!-- more -->

## 目录

-   [如何获取你的 API 密钥][1]
    
-   [项目设置][2]
    
-   [前端设置][3]
    
-   [服务器设置][4]
    
-   [更新前端][5]
    
-   [总结][6]
    
-   [结论][7]
    

### 前提条件

要构建此项目，你应该了解 React 和 Express 的基础知识。

## 如何获取你的 API 密钥

API 密钥充当唯一标识符并验证你对服务的请求。它对于访问和使用 Gemini AI 的功能至关重要。这个密钥将允许我们的应用程序与 Gemini 通信，帮助我们构建项目。

访问 [Google AI Studio][8]，然后点击“Get API Key”：

![Google AI Studio 的截图，显示了“Get API Key”按钮](https://cdn.hashnode.com/res/hashnode/image/upload/v1733571839232/f5636fd0-c3cd-4c1b-bf7f-5200bce41444.png)

在重定向到 API KEY 页面后，点击“Create API Key“：

![展示如何在 Google AI Studio 创建 API 密钥的截图。](https://cdn.hashnode.com/res/hashnode/image/upload/v1733572045638/c950f7a2-613c-4976-905a-ce5c9dceb901.png)

将创建一个新的 API KEY。接下来确保你复制了这个密钥。

这就是你的 API 密钥。这个密钥用于验证你的应用程序对 Gemini API 的请求。每次你的应用程序向 Gemini 发送请求时，都必须包含这个密钥。Gemini 使用这个密钥来验证请求是否来自授权来源。如果没有这个 API 密钥，你的请求将被拒绝，你将无法访问 Gemini 的服务。

## 项目设置

首先为你的项目创建一个新文件夹。我们称之为 `ai-subtitle-generator`。

在 `ai-subtitle-generator` 文件夹中，创建两个子文件夹：`client` 和 `server`。`client` 文件夹将包含 React 前端，而 `server` 文件夹将包含 Express 后端。

## 前端设置

首先，我们将专注于前端，并设置一个基本的 React 应用程序。

进入 `client` 文件夹：

```
cd client
```

然后使用 Vite 创建一个新的 React 项目。为此，运行以下命令：

```
npm create vite@latest .
```

当提示时，选择“React”。选择“React + TS”或“React + JS”。在本教程中，我将使用 React + TS。你也可以选择使用 JS 进行操作。

接下来，使用以下命令安装依赖项：

```
npm install
```

然后启动开发服务器：

```
npm run dev
```

#### 如何在前端处理文件上传

现在在 `client/src/App.tsx` 中，添加以下代码：

```
//  client/src/App.tsx

const App = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      console.log(formData)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*,.mkv" name="video" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
```

在上述代码中，我们使用了一个 input 标签来接收视频，并将其命名为 `video`。这个名称将被附加到 `FormData` 对象中。

在将视频发送到服务器时，我们需要将其作为键值对发送，其中键为 `video`，值为文件数据。

为什么是键值对？因为当服务器接收到请求时，它需要解析传入的数据块。解析后，视频数据将会在 `req.files[key]` 中可用，其中 `key` 是我们在前端指定的名称（在本例中为 `video`）。

这就是为什么我们使用 `FormData` 对象的原因。当我们创建一个新的 `FormData` 实例并传入 `e.target` 时，所有的表单字段及其名称将自动以键值对的形式可用。

## 服务器设置

既然我们已经准备好了 API 密钥，让我们设置后端服务器。这个服务器将处理来自前端的视频上传，并与 Gemini API 通信以生成字幕。

进入 `server` 文件夹：

```
cd server
```

并初始化项目：

```
npm init -y
```

然后安装必要的软件包：

```
npm install express dotenv cors @google/generative-ai express-fileupload nodemon
```

这些是我们在这个项目中使用的后端依赖：

-   `express`**:** 用于创建后端 API 的 Web 框架。
    
-   `dotenv`**:** 从 `.env` 文件加载环境变量。
    
-   `cors`**:** 启用跨源资源共享，允许你的前端与后端通信。
    
-   `@google/generative-ai`**:** 用于与 Gemini API 交互的 Google AI 库。
    
-   `express-fileupload`**:** 处理文件上传，使在服务器上访问上传的文件变得容易。
    
-   `nodemon`**:** 在你更改代码时自动重启服务器。
    

现在创建一个名为 `.env` 的文件。在这里你将管理你的 API 密钥。

```
//.env
API_KEY = YOUR_API_API
PORT = 3000
```

### 更新 `package.json`

对于这个项目，我们使用的是 ES6 模块而不是 CommonJS。为了启用这一点，请用以下代码更新你的 `package.json` 文件：

```
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",       // 添加 "type": "module" 来启用 ES6 模块
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"    // 配置 nodemon
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "@google/generative-ai": "^0.21.0",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.1",
    "express-fileupload": "^1.5.1",
    "nodemon": "^3.1.7"
  }
}
```

### Express 的基本设置

创建一个文件 `server.js`。现在，让我们设置一个基本的 Express 应用程序。

```
//  server/server.js

import express from "express";
import { configDotenv } from "dotenv";
import fileUpload from "express-fileupload";
import cors from "cors"

const app = express();

configDotenv();           // 配置环境变量
app.use(fileUpload());    // 它将解析多部分数据
app.use(express.json());  // 启用请求体的 JSON 解析
app.use(cors())           // 配置 cors

app.use("/api/subs", subRoutes);  // 使用 "/api/subs" 端点的路由

app.listen(process.env.PORT, () => {   // 从 .env 访问端口
  console.log("server started");         
});
```

在这段代码中，我们创建了一个 Express 应用实例，然后加载我们的环境变量。在这里，我们将 API 密钥等敏感数据安全地保存。接下来，我们应用中间件函数：`fileUpload` 准备服务器接收上传的视频，`express.json` 允许我们接收 JSON 数据，`cors` 使我们的前端和后端之间能够通信。

我们定义了一个路由 `(/api/subs)` 来处理所有与字幕生成相关的请求。这些路由的具体逻辑将在 `subs.routes.js` 中定义。最后，我们启动服务器，让它监听 `.env` 文件中指定的端口上的请求。

现在我们需要创建一些文件夹来管理代码。你也可以将全部代码管理在一个文件中，但将其结构化为单独的文件夹并以这种方式管理会更容易。

这是服务器的最终文件夹结构：

```
server/
├── server.js
├── controller/
│   └── subs.controller.js
├── gemini/
│   ├── gemini.config.js
├── routes/
│   └── subs.routes.js
├── uploads/
├── utils/
│   ├── fileUpload.js
│   └── genContent.js
└── .env
```

**注意：** 现在不需要立即创建这个文件夹结构。这只是作为参考。跟随我一步一步，我们将一起构建这个结构。

### 创建路由

现在创建一个 `routes` 文件夹，然后创建 `subs.routes.js`：

```
// server/routes/sub.routes.js

import express from "express"
import { uploadFile } from "../controller/subs.controller.js"    // 从控制器文件夹导入 uploadFile 函数

const router = express.Router()

router.post("/", uploadFile)    // 定义一个调用 uploadFile 函数的 POST 路由

export default router     // 导出路由以便在主 server.js 文件中使用
```

这段代码定义了我们服务器的路由，特别是处理视频上传和字幕生成的路由。

我们使用 `express.Router()` 创建一个新的路由实例。这允许我们在主服务器文件之外定义路由，从而提高代码组织性。我们在 API 端点的根路径 `("/")` 定义一个 POST 路由。当对此路由发送 POST 请求时（这将在用户在前端提交视频上传表单时发生），将调用 `uploadFile` 函数。这个函数将处理实际的上传和字幕生成。

最后，我们导出路由，以便在我们的主服务器文件 `(server.js)` 中使用来连接这个路由到主应用。

### 配置 Gemini

现在，让我们配置我们的应用将如何与 Gemini 交互。

创建一个 `gemini` 文件夹，然后创建一个名为 `gemini.config.js` 的新文件：

```
//  server/gemini/gemini.config.js

import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai";
import { configDotenv } from "dotenv";
configDotenv();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);  // 使用 API 密钥初始化 Google Generative AI

const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash-001",    // 选择模型
  safetySettings: safetySettings,   // 可选的安全设置
});

export default model;    // 导出模型
```

在上述代码中，`safetySettings` 是可选的。这些设置允许你为 Gemini 输出中可能有害的内容（如仇恨言论、暴力或露骨材料）定义阈值。

你可以在[这里][9]了解更多关于 Gemini 安全设置的信息。

### 创建控制器处理端点逻辑

现在，创建一个 `controller` 文件夹，并在其中创建一个名为 `subs.controller.js` 的文件。在这个文件中，你将处理与 Gemini 模型交互的端点逻辑。

在 `server/controller/subs.controller.js` 中，添加以下代码：

```markdown
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);  //将模块 URL 转换为文件路径
const __dirname = path.dirname(__filename);   //获取当前文件目录

export const uploadFile = async (req, res) => {
  try {
    if (!req.files || !req.files.video) {   //如果没有可用的文件，返回错误给客户端
      return res.status(400).json({ error: "没有上传视频" });
    }

    const videoFile = req.files.video;   //访问视频
    const uploadDir = path.join(__dirname, "..", "uploads");   //临时上传视频的路径

    if (!fs.existsSync(uploadDir)) {   //检查目录是否存在
      fs.mkdirSync(uploadDir);      //如果不存在，则创建一个新目录
    }

    const uploadPath = path.join(uploadDir, videoFile.name);  

    await videoFile.mv(uploadPath);  //将视频从缓冲区移动到“upload”文件夹

    return res.status(200).json({ message:"文件上传成功" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "内部服务器错误：" + error.message });
  }
};
```

由于我们使用的是 ES6 模块，因此默认情况下不会提供 `__dirname`。文件处理机制与 CommonJS 不同。正因为如此，我们将使用 `fileURLToPath` 来处理文件路径。

我们将文件从默认的临时位置（即缓冲区）移动到 `uploads` 文件夹。

但文件上传过程尚未完成。我们仍需要将文件发送到 Google AI 文件管理器，上传后，它会返回一个 URI。这个 URI 将被传递给模型进行视频分析。

### 如何上传文件到 Google AI 文件管理器

创建一个文件夹 `utils` 并创建一个文件 `fileUpload.js`。你可以参考上面提供的文件夹结构。

```javascript
//  server/utils/fileUpload.js

import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
import { configDotenv } from "dotenv";
configDotenv();

export const fileManager = new GoogleAIFileManager(process.env.API_KEY);  //创建一个新的 GoogleAIFileManager 实例

export async function fileUpload(path, videoData) {  
  try {
    const uploadResponse = await fileManager.uploadFile(path, {   //将路径作为参数
      mimeType: videoData.mimetype,  
      displayName: videoData.name,
    });
    const name = uploadResponse.file.name;
    let file = await fileManager.getFile(name);    
    while (file.state === FileState.PROCESSING) {     //检查文件的状态
      process.stdout.write(".");
      await new Promise((res) => setTimeout(res, 10000));   //每10秒检查一次
      file = await fileManager.getFile(name);
    }
    if (file.state === FileState.FAILED) {   
      throw new Error("视频处理失败");
    }
    return file;   // 返回包含上传文件信息和 URI 的文件对象
  } catch (error) {
    throw error;
  }
}
```

在上面的代码中，我们创建了一个名为 `fileUpload` 的函数，该函数接受两个参数。这些参数将从稍后设置的控制器函数中传递。

`fileUpload` 函数使用 `fileManager.uploadFile` 方法将视频发送到 Google 的服务器。此方法需要两个参数：文件路径和包含文件元数据(其 MIME 类型及显示名称)的对象。

由于 Google 服务器上的视频处理需要时间，我们需要检查文件的状态。我们通过一个循环来执行此操作，该循环使用 `fileManager.getFile()` 每 10 秒检查一次文件的状态。只要文件的状态为 `PROCESSING`，循环就会继续。一旦状态更改为 `SUCCESS` 或 `FAILED`，循环就会停止。

然后函数检查处理是否成功。如果成功，它将返回包含已上传和已处理视频信息（包括其 URI）的文件对象。否则，如果状态为 `FAILED`，函数将引发错误。

### 将 URI 传递到 Gemini 模型

现在在 `utils` 文件夹中，创建一个名为 `genContent.js` 的文件：

```javascript
// server/utils/genContent.js

import model from "../gemini/gemini.config.js";
import { configDotenv } from "dotenv";
configDotenv();

export async function getContent(file) {
  try {
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: file.mimeType,
          fileUri: file.uri,
        },
      },
      {
        text: "您需要为整个视频编写字幕，将字幕写成 SRT 格式，除了字幕之外不要在响应中写其他任何内容，请创建准确的字幕。",
      },
    ]);
    return result.response.text();
  } catch (error) {
    throw error;
  }
}
```

导入我们之前配置的模型。创建一个名为 `getContent` 的函数。`getContent` 函数需要通过 `fileUpload` 函数返回的文件对象。

将文件 URI 和 `mime` 传递给模型。然后，我们将提供一个提示，指导模型为整个视频生成 SRT 格式的字幕。如果你想的话，也可以添加你的提示。然后返回响应。
```

最后，我们需要更新控制器文件。我们已经创建了 `fileUpload` 和 `getContent` 函数，现在我们将在控制器中使用它们并提供所需的参数。

在 `server/controller/subs.controller.js` 文件中：

```javascript
//  server/controller/subs.controller.js

import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import { fileUpload } from "../utils/fileUpload.js";
import { getContent } from "../utils/genContent.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const uploadFile = async (req, res) => {
  try {
    if (!req.files || !req.files.video) {
      return res.status(400).json({ error: "没有上传视频" });
    }

    const videoFile = req.files.video;
    const uploadDir = path.join(__dirname, "..", "uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const uploadPath = path.join(uploadDir, videoFile.name);

    await videoFile.mv(uploadPath);

    const response = await fileUpload(uploadPath, req.files.video);  // 我们将 'uploadPath' 和视频文件数据传递给 'fileUpload'
    const genContent = await getContent(response);   // 将包含文件 URI 的 'response' 传递给 'getContent'

    return res.status(200).json({ subs: genContent });   //// 将生成的字幕返回给客户端
  } catch (error) {
    console.error("视频上传错误：", error);
    return res
      .status(500)
      .json({ error: "内部服务器错误：" + error.message });
  }
};
```

这样，后端 API 就完成了。现在，我们将继续更新前端。

## 更新前端

我们的前端目前只允许用户选择一个视频。在这一部分，我们将更新它以便将视频数据发送到我们的后端进行处理。前端随后将从后端接收生成的字幕并启动 `.srt` 文件的下载。

导航到 `client` 文件夹：

```
cd client
```

安装 `axios`。我们将使用它来处理 HTTP 请求。

```
npm install axios
```

在 `client/src/App.tsx` 中：

```javascript
//   client/src/App.tsx

import axios from "axios";

const App = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      // 用表单数据发送 POST 请求
      const response = await axios.post(
        "http://localhost:3000/api/subs/",   
        formData
      );
      // 从服务器响应创建一个 Blob 并触发文件下载
      const blob = new Blob([response.data.subs], { type: "text/plain" }); 
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "subtitle.srt";
      link.click();
      link.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*,.mkv" name="video" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
```

`axios` 将 POST 请求发送到你的后端 API 端点 `(/api/subs)`。服务器将处理视频，这可能需要一些时间。

在服务器发送生成的字幕后，前端将其作为响应接收。为了处理该响应并允许用户下载字幕，我们将使用 Blob。Blob（Binary Large Object，二进制大对象）是一种 Web API 对象，表示原始二进制数据，本质上就像一个文件。在我们的例子中，服务器返回的字幕将被转换成 Blob，然后允许我们在用户的浏览器中触发下载。

## 结语

在本教程中，您学习了如何使用 Google 的 Gemini API、React 和 Express 构建一个 AI 驱动的字幕生成器。您可以上传视频，发送到 Gemini API 进行字幕生成，并提供生成的字幕供下载。

## 结论

就是这样！您已成功使用 Gemini API 构建了一个 AI 驱动的字幕生成器。为了更快速的测试，请从较短的视频片段（3-5 分钟）开始。较长的视频可能需要更多时间来处理。

想要创建一个可定制的视频提示应用程序吗？只需添加一个输入字段，让用户输入他们的提示，将该提示发送到服务器，并用它替代硬编码的提示。就是这么简单。

有关 Gemini API 的更多信息，请参考官方 [Gemini API 文档][10]

您可以在这里找到完整的代码：[AI-Subtitle-Generator][11]

如果有任何错误或您有任何问题，请通过 [LinkedIn][12] 或 [Instagram][13] 联系我。

感谢您的阅读！

[1]: #heading-how-to-get-your-api-key
[2]: #heading-project-setup
[3]: #heading-front-end-setup
[4]: #heading-server-setup
[5]: #heading-update-the-front-end
[6]: #heading-summary
[7]: #heading-conclusion
[8]: https://aistudio.google.com/prompts/new_chat
[9]: https://ai.google.dev/gemini-api/docs/safety-settings
[10]: https://ai.google.dev/gemini-api/docs#node.js
[11]: https://github.com/sanjayr-12/ai-subtitle-generator
[12]: https://www.linkedin.com/in/sanjay-r-ab6064294/
[13]: https://www.instagram.com/heheheh_pet/profilecard/?igsh=eXh3MWw4ZzZ3NTRq


