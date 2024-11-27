---
title: 如何通过懒加载优化 Next.js 应用性能
date: 2024-08-19T09:26:13.051Z
author: Tapas Adhikary
authorURL: https://www.freecodecamp.org/news/author/atapas/
originalURL: https://www.freecodecamp.org/news/next-js-performance-optimization/
posteditor: ""
proofreader: ""
---

人们不喜欢使用速度慢的应用程序。初始加载时间对网络应用程序和网站来说至关重要。

<!-- more -->

加载时间超过 3 秒的应用程序被认为是慢的，可能会导致用户离开应用程序或网站。

`Next.js` 是一个基于 React 的框架，可以用来构建可伸缩、性能良好且速度快的网络应用程序和网站。随着 [React 服务器组件][1] 在 Next.js 应用程序路由版本中的引入，开发人员有了一个新的心智模型来“用服务器组件的方式思考”。它解决了 SEO 问题，帮助创建 `零包装大小(zero bundle size)` 的 React 组件，最终实现 UI 组件的更快加载。

但你的应用程序可能并不总是关于服务器组件。你可能还需要使用客户端组件。此外，你可能希望将它们作为应用程序初始加载的一部分或按需加载（比如点击按钮时）。

在浏览器中加载客户端组件包括将组件代码下载到浏览器、下载所有导入到该客户端组件中的库和其他组件，以及 React 为确保你的组件正常工作而处理的一些额外事项。

根据用户的互联网连接和其他网络因素，整个客户端组件的加载可能需要一段时间，这可能会阻止用户更快地使用应用程序。

这就是 `懒加载` 技术可以派上用场的地方。它们可以帮助你避免在浏览器上单调加载客户端组件。

在本文中，我们将讨论在 Next.js 中用于客户端组件加载优化的几种懒加载技术。我们还会讨论一些你需要知道的边缘情况。

如果你也喜欢通过视频内容学习，本文还提供了视频教程：🙂

[![YouTube 视频播放器](https://img.youtube.com/vi/gq9bBZru78Y/mqdefault.jpg)](https://www.youtube.com/watch?v=gq9bBZru78Y)

在我们开始之前，有几件事需要告诉你：

-   我们将编写大量代码来构建一个演示懒加载技术的应用程序。你可以从这个 GitHub 存储库找到所有源代码：[https://github.com/tapascript/nextjs-lazy-load][2]。但我强烈建议你在我们进行的过程中自己编写代码，并仅将存储库作为参考。
-   你也可以通过 [Netlify 上的公开部署][3] 访问应用程序。

让我们开始吧 🚀。哦对了，如果你是汤姆和杰瑞的卡通迷，你会更享受这篇文章！

## **目录**

-   [什么是懒加载][4]？
-   [Next.js 中的懒加载技术][5]
-   [使用 dynamic import 和 next/dynamic 进行懒加载][6]
-   [使用 React.lazy() 和 Suspense 进行懒加载][7]
-   [如何懒加载命名导出的组件][8]
-   [懒加载你的服务器组件][9]
-   [我们应该懒加载 Next.js 中的所有客户端组件吗？][10]
-   [接下来是什么？][11]

## 什么是懒加载？

在现代 Web 应用程序开发中，我们不会将所有逻辑编写到一个 JavaScript/TypeScript 文件中，或将所有样式编写到一个巨大的 CSS 文件中。而是将它们在源代码级别拆分，创建逻辑模块、业务逻辑、展示组件和样式相关文件。这帮助我们更好地组织代码。

然后我们使用一种称为打包器的工具，它在应用程序开发过程的构建阶段启动。它为我们的脚本和样式创建包。一些著名的打包器包括 Webpack、Rollup 和 Parcel 等。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/image-43.png) _打包器从源代码创建包_

现在，由于我们有了包，如果尝试将它们一起加载到浏览器中，我们会遇到一些缓慢。这是因为需要将完整的包加载到浏览器中，用户界面才能正常工作。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/image-44.png) _加载大量包会导致加载体验差_

因此，现代 Web 开发库和工具系统允许我们将包分块加载，而不是等待大量包加载到浏览器中。

我们可能希望立即加载一些块，因为用户可能会在应用程序加载时更早需要它们。与此同时，我们可能希望等待加载网页的某些部分，直到它们真正需要时。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/image-45.png) _拆分成块并加载所需的部分_

这种等待加载网页或应用程序部分的机制，并仅在绝对必要时加载它们，被称为 `懒加载`。懒加载的概念并不是 React 或 Next.js 特有的。这是一种性能优化技术，你可以使用各种库和框架来实现。



Next.js 中的懒加载技术用于减少一个路径所需的 JavaScript 量。这有助于提高应用程序的初始加载性能。我们可以推迟加载客户端组件和导入的库，直到它们真正需要时。

我们可以通过两种方式在 Next.js 中实现懒加载技术：

- 使用 `next/dynamic` 包的动态导入。
- 使用 `React.lazy()` 和 `Suspense` 的组合。

让我们通过代码示例来理解这些技术。

## 使用 `dynamic import` 和 `next/dynamic` 实现懒加载

`next/dynamic` 是 ReactJS 中的 React.lazy() 和 Suspense 的组合。使用 `next/dynamic` 包进行动态导入是实现 Next.js 中懒加载的首选方法。

为了演示这一点，我们首先用以下命令创建一个 Next.js 应用：

```shell
npx create-next-app@latest
```

您可以使用以下命令在本地启动应用：

```shell
## 使用 npm
npm run dev

## 使用 yarn
yarn dev

## 或者使用 pnpm, bun，您喜欢的都可以！
```

现在在 `app/` 目录下创建一个名为 `components` 的文件夹。我们将在这个组件文件夹下创建所有的组件。现在，在 `app/components/` 下创建一个名为 `tom` 的文件夹。最后，在 `app/components/tom/` 目录下创建一个名为 `tom.jsx` 的 React 组件，代码如下：

```jsx
// tom.jsx

const LazyTom = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-2">The Lazy Tom</h1>
      <p className="text-xl my-1">
        Tom, named &quot;Jasper&quot; in his debut appearance, is a gray and white
        domestic shorthair cat 🐈. &quot;Tom&quot; is a generic name for a male cat. He is
        usually but not always, portrayed as living a comfortable, or even
        pampered life. Tom is no match for Jerry&apos;s wits.
      </p>
      <p className="text-xl my-1">
        Although cats typically chase mice to eat them, it is quite rare for Tom
        to actually try to eat Jerry. He tries to hurt or compete with him just
        to taunt Jerry, even as revenge, or to obtain a reward from a human,
        including his owner(s)/master(s), for catching Jerry, or for generally
        doing his job well as a house cat. By the final &quot;fade-out&quot; of each
        cartoon, Jerry usually gets the best of Tom.
      </p>
    </div>
  );
};

export default LazyTom;
```

解释上述代码：

- 我们创建了一个名为 `LazyTom` 的 ReactJS 组件。
- 这是一个简单的展示组件，包含一个标题和几段关于著名的 `Tom & Jerry` 动画片中的猫 Tom 的描述。
- 最后，我们默认导出了该组件以便在其他地方导入。

现在，在 `app/components/tom/` 目录下创建另一个名为 `tom-story.jsx` 的文件，代码如下：

```jsx
// tom-story.jsx

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LazyTom = dynamic(() => import("./tom"), {
    loading: () => <h1>Loading Tom&apos;s Story...</h1>,
});

function TomStory() {
    const [shown, setShown] = useState(false);

    return (
        <div className="flex flex-col m-8 w-[300px]">
            <h2 className="text-xl my-1">Demonstrating <strong>dynamic</strong></h2>
            <button
                className="bg-blue-600 text-white rounded p-1"
                onClick={() => setShown(!shown)}
            >
                Load 🐈 Tom&apos;s Story
            </button>

            {shown && <LazyTom />}
        </div>
    );
}

export default TomStory;
```

以上代码实现了懒加载的主要部分：

- 我们创建了一个名为 `TomStory` 的客户端组件，并使用 `"use client"` 指令。
- 首先，我们导入了用于管理切换状态的 `useState` 钩子，以及用于懒加载我们之前创建的组件的 `dynamic` 函数。
- `dynamic` 函数接受一个返回导入组件的函数作为参数。你还可以通过提供一个可选的配置对象来配置自定义加载消息。
- `dynamic()` 函数返回懒加载的组件实例，即 `LazyTom`（可以是任何名称）。但这个组件尚未加载。
- 在 JSX 中，我们有一个切换按钮用于显示和隐藏 `LazyTom` 组件。请注意，该组件将在首次点击按钮时懒加载到用户浏览器中。之后，如果您再次隐藏和显示它，`LazyTom` 组件将不会重新加载，除非我们硬刷新浏览器或清除浏览器缓存。
- 最后，我们默认导出了 `TomStory` 组件。

现在我们需要测试它。为此，打开 `app/` 目录下的 `page.js` 文件，并用以下代码替换内容：

```typescript
import TomStory from "./components/tom/tom-story";

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TomStory />
    </div>
  );
}
```

这是一个简单的 ReactJS 组件，导入了 `TomStory` 组件并在其 JSX 中使用它。现在打开您的浏览器窗口。打开浏览器的开发者工具并打开 `网络` 选项卡。确保选中 `全部` 过滤器。

`LazyTom`组件从 `tom.jsx` 文件还没有被下载，因为我们还没有点击 `加载 Tom 的故事` 按钮。

![Image](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-9.21.10-AM.png) _按钮来懒加载 Tom 的故事_

现在，点击按钮。你应该会看到一个加载信息，然后组件会加载 Tom 的故事。你可以在 `Network` 选项卡中看到 `tom.jsx` 组件被列出，并且页面上也会渲染出 Tom 的故事。

![Image](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-9.27.55-AM.png) _现在 Tom 的故事已被懒加载_

现在你已经体验了 `next/dynamic` 的 `dynamic` 函数如何帮助我们懒加载组件，让我们开始使用 `React.lazy()` 和 `Suspense` 的另一种技术。

## 使用 `React.lazy()` 和 `Suspense` 懒加载

为展示此技术，让我们从 Jerry 的故事开始，这是我最喜欢的《猫和老鼠》卡通角色。

首先，我们将在 `app/components/` 目录下创建一个名为 `jerry` 的文件夹。现在，在 `app/components/jerry/` 目录下创建一个名为 `jerry.jsx` 的文件，并添加以下代码：

```tsx
// jerry.jsx

const LazyJerry = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl my-2">懒惰的 Jerry</h1>
      <p className="text-xl my-1">
        Jerry 🐀，在他首次出现时并没有明确提及他的名字，
        是一只小的棕色家鼠，总是住在靠近 Tom 的地方。
        尽管 Tom 非常有活力、坚定且大得多，但他不敌 Jerry 的智慧。
        Jerry 拥有令人惊讶的力量，尽管他的体型较小，但大约相当于 Tom 的力量，
        他能轻松举起诸如铁砧之类的物体，并承受相当大的冲击。
      </p>
      <p className="text-xl my-1">
        尽管猫通常会追捕老鼠来吃掉它们，但 Tom 实际上很少尝试吃掉 Jerry。
        他试图伤害或与 Jerry 竞争只是为了嘲弄他，甚至是为了复仇，
        或为了从人类（包括他的主人）那里获得奖励，
        或只是为了做好他的家猫工作。到每部动画的最后“淡出”时，
        Jerry 通常能让 Tom 吃瘪。
      </p>
    </div>
  );
};

export default LazyJerry;
```

`jerry.jsx` 的内容结构上与 `tom.jsx` 类似。这里我们发布了 Jerry 的故事，而不是 Tom 的，并默认导出了这个组件。

像上次一样，我们来创建一个 `jerry-story.jsx` 文件来展示 Jerry 的故事懒加载。将该文件创建在 `app/components/jerry/` 目录下，添加以下代码：

```tsx
// jerry-story.jsx

"use client";

import React, { useState, Suspense } from "react";

const LazyJerry = React.lazy(() => import('./jerry'));

function JerryStory() {
    const [shown, setShown] = useState(false);

    return (
        <div className="flex flex-col m-8 w-[300px]">
            <h2 className="text-xl my-1"> 演示 <strong>React.lazy()</strong></h2>
            <button
                className="bg-pink-600 text-white rounded p-1"
                onClick={() => setShown(!shown)}
            >
                加载 🐀 Jerry 的故事
            </button>

            {shown && <Suspense fallback={<h1>加载 Jerry 的故事</h1>}>
                <LazyJerry />
            </Suspense>}
        </div>
    );
}

export default JerryStory;
```

这里我们也有一个客户端组件，我们将使用 React 的 `lazy()` 方法和 `Suspense`，所以我们导入了它们。像上次的 `dynamic()` 函数一样，`lazy()` 函数也需要一个返回懒加载组件的函数作为参数。我们还提供了要加载的组件的相对路径。

注意，用 `dynamic()` 我们可以将加载信息作为函数的一部分进行定制。而用 `lazy()`，我们将在 `Suspense` 的 fallback 中进行处理。

Suspense 在等待数据加载时会使用 fallback。如果你想深入了解 ReactJS 的 Suspense 和 Error Boundary，可以[查看这个视频教程][12]。

在这里，由于我们的 `LazyJerry` 组件是懒加载的，我们提供了一个 fallback 信息，在组件代码成功下载并渲染到浏览器之前显示一个加载信息。

```tsx
{shown && 
    <Suspense fallback={<h1>加载 Jerry 的故事</h1>}>
                <LazyJerry />
    </Suspense>
}
```

此外，正如你所看到的，我们在第一次点击按钮时加载组件。这里组件不会在每次点击按钮时重新加载，除非我们刷新浏览器或清除浏览器缓存。

现在通过将其导入 `page.js` 文件并将组件添加到 JSX 中来进行测试。

```tsx
// page.js

import TomStory from "./components/tom/tom-story";
import JerryStory from "./components/jerry/jerry-story"; 

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TomStory />
      <JerryStory />
    </div>
  );
}
```

![Image](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-9.33.36-AM.png) _懒加载 Jerry 故事的按钮_

现在，点击按钮。你会看到组件被加载，并且你可以在网络选项卡的列表中看到它。你应该能够看到作为懒加载组件一部分渲染的 Jerry 的故事。

![Image](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-9.37.30-AM.png) _Jerry 的故事已经被懒加载_

## 如何懒加载命名导出的组件

到目前为止，我们已经用两种技术导入了用 `default export` 导出的组件，并且懒加载了它。在 JavaScript（以及在 React 中），你可以通过两种不同的方式导入和导出模块：

- 使用 `default` 关键字。在这种情况下，导出的模块可以用任何名称导入。如果你想从一个模块中只导出一个功能，你会使用这种方式。
- 不使用 `default` 关键字，这被称为 `命名导出`。在这种情况下，你必须在导出和导入时保持相同的模块名称。在导入时，还需要将模块名包含在大括号（{...}）中。如果你想从一个模块中导出多个功能，你会使用这种方式。

如果你想深入了解 JavaScript 模块以及它们是如何工作的，我建议你浏览一下 freeCodeCamp YouTube 频道上发布的[这门速成课][13]。

为了演示 `命名导出` 组件的懒加载，让我们创建另一个简单的展示用 React 组件。这次我们将使用 Tom & Jerry 动画中的愤怒但可爱的狗 `Spike`。

在 `app/components/` 目录下创建一个名为 `spike` 的文件夹。现在，在 `app/components/spike/` 目录下创建一个名为 `spike.jsx` 的文件，并添加以下代码：

```jsx
// spike.jsx

export const LazySpike = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl my-2">The Lazy Spike</h1>
      <p className="text-xl my-1">
        在试图追赶 Jerry 的过程中，Tom 经常不得不面对 Spike 🦮，在一些短片中被称为“杀手”和“布奇”，他是一只愤怒的、凶狠的但容易上当的斗牛犬，试图在 Tom 打扰他或他的儿子 Tyke 时攻击 Tom，而 Tom 却试图抓住 Jerry。最初，Spike 是没有名字的也不会说话，除了嚎叫和咬人声以及不加区别的攻击，根本不关心是 Tom 还是 Jerry，尽管通常是攻击 Tom。
      </p>
      <p className="text-xl my-1">
        在后来的卡通片中，Spike 经常说话，使用由 Billy Bletcher 和后来的 Daws Butler 表演的声音和表情，以喜剧演员 Jimmy Durante 为原型。Spike 的皮毛多年来在灰色和奶油色之间变化。1940 年代晚期添加了 Spike 的儿子 Tyke，使 Spike 的性格稍微柔和了一些，并产生了一个短暂的衍生剧场系列，名为 Spike and Tyke。
      </p>
    </div>
  );
};
```

同样，这个组件在结构上与之前看到的 `tom.jsx` 和 `jerry.jsx` 组件完全相同，但有两个主要区别：

1. 这里，我们没有使用默认关键词导出组件，因此它是一个 `命名导出`。
2. 我们在讲述的是狗，Spike。

现在，我们需要处理一个命名导出组件的懒加载，并且这与默认导出组件略有不同。

在 `app/components/spike/` 目录下创建一个名为 `spike-story.jsx` 的文件，并添加以下代码：

```jsx
// spike-story.jsx

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const LazySpike = dynamic(() => import("./spike").then((mod) => mod.LazySpike), {
    loading: () => <h1>加载 Spike 的故事...</h1>,
});

function SpikeStory() {
    const [shown, setShown] = useState(false);

    return (
        <div className="flex flex-col m-8 w-[300px]">
            <h2 className="text-xl my-1">演示 <strong>命名导出</strong></h2>
            <button
                className="bg-slate-600 text-white rounded p-1"
                onClick={() => setShown(!shown)}
            >
                加载 🦮 Spike 的故事
            </button>

            {shown && <LazySpike />}
        </div>
    );
}

export default SpikeStory;
```

像 `tom-story` 一样，我们使用了 next/dynamic 的动态导入。但是让我们来深入分析一下上面的代码块：

```
const LazySpike = dynamic(() => import("./spike").then((mod) => mod.LazySpike), {
    loading: () => <h1>加载 Spike 的故事...</h1>,
});
```

你会注意到的变化是我们使用 `.then()` 处理函数明确地从 `import("./spike")` 函数中解析了 promise。我们首先获取模块，然后通过其实际名称选择导出的组件——在这种情况下是 `LazySpike`。其余的事情与 `tom-story` 中的情况保持不变。

现在，为了测试它，再次将组件导入到 `page.js` 文件中，并像前两次那样在 JSX 中使用它。

```javascript
// page.js

import TomStory from "./components/tom/tom-story";
import JerryStory from "./components/jerry/jerry-story";
import SpikeStory from "./components/spike/spike-story"; 
```

那里 – 你应该会在浏览器上看到新组件，并带有一个按钮，从尚未加载的 `spike.jsx` 文件中加载 Spike 的故事。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-9.59.55-AM.png) _Lazy 加载 Spike 的故事的按钮_

点击按钮将加载文件到浏览器，并渲染组件来展示 Spike 的故事。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-10.02.01-AM.png) _Spike 的故事已懒加载_

下面你可以看到所有三个组件侧并肩展示三种不同的技术和使用案例。你可以一起测试它们。下面的图片展示了两个组件并行地懒加载，而另一个组件已经被懒加载了。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-10.14.21-AM.png) _并行懒加载多个组件_

这是另一个案例，通过点击各自的按钮，所有三个组件都按需懒加载了。

![图片](https://www.freecodecamp.org/news/content/images/2024/07/Screenshot-2024-07-17-at-10.05.35-AM-1.png) _所有的故事都被懒加载_

## 懒加载你的服务器组件

我们谈到了客户端组件的懒加载技术。我们是否也可以对服务器组件使用相同的技术呢？其实你可以，但不需要，因为服务器组件已经是 `代码分割` 的，加载方面已经由 Next.js 处理好了。如果你尝试这样做也不会出现任何类型的错误，但这是不必要的。

如果你动态导入一个拥有一个或多个客户端组件作为子组件的服务器组件，那些客户端组件将被懒加载。但对于（父）服务器组件本身不会有任何影响。

下面是一个包含两个客户端组件作为子组件的服务器组件的示例：

```jsx
// server-comp.jsx

import ComponentA from "./a-client-comp";
import ComponentB from "./b-client-comp";

import React from 'react'

const AServerComp = () => {
  return (
    <div className="flex flex-col m-8 w-[300px]">
      <ComponentA />
      <ComponentB />
    </div>
  )
}

export default AServerComp
```

现在，我们将动态导入服务器组件到 `page.js` 文件中并在 JSX 中使用它。动态导入服务器组件的子客户端组件将被懒加载，但服务器组件本身不会。

```jsx
// page.js

import dynamic from "next/dynamic";

import TomStory from "./components/tom/tom-story";
import JerryStory from "./components/jerry/jerry-story";
import SpikeStory from "./components/spike/spike-story";

const AServerComp = dynamic(() => import('./components/server-comps/server-comp'), {
  loading: () => <h1>Loading Through Server Component...</h1>,
})


export default function Home() {
  return (
    <div className="flex flex-wrap justify-center ">
      <TomStory />
      <JerryStory />
      <SpikeStory />

      <AServerComp />
    </div>
  );
}
```

## 我们应该在 Next.js 中懒加载所有客户端组件吗？

当我第一次开始学习懒加载时，我也有这个问题。现在我对这项技术有了更多的了解，这是我的看法：

你并不需要懒加载所有的客户端组件。优化是很好的，但过度优化可能会有反作用。你需要识别哪些地方需要这些优化。

-   你的客户端组件是否真的很笨重？
-   你是否不必要地把很多东西放进一个组件，你应该拆分并重构它吗？
-   你是否在你的客户端组件中导入了沉重的库？
-   你选择了 tree-shaking 吗？
-   你是否可以按路由标记笨重的客户端组件，并且没有问题在该路由的页面初始加载时不加载它们中的一些或全部？

如你所见，这些是在你开始优化前需要问的几个有意义的问题。一旦你有了答案，并决定需要懒加载，那么你可以实现你从这篇文章中学到的技术。

## 接下来是什么？

暂时就这些了。你喜欢阅读这篇文章并学到了一些新东西吗？如果是这样，我很想知道内容是否对你有帮助。以下是我的社交媒体账号。

接下来，如果你愿意学习 `Next.js` 及其生态系统如 `Next-Auth(V5)` 的基本概念和项目，我有个好消息给你：你可以在我的 [YouTube][14] 频道上查看这个播放列表，目前有 20+ 个视频教程和超过 11 小时的精彩内容，免费提供。我希望你也喜欢这些内容。

让我们联系起来。

-   订阅我的 [YouTube 频道][15]。
-   [在 X (Twitter)][16] 或者 [LinkedIn][17] 上关注我，不要错过每日技能提升的推文。
-   查看并关注我在 [GitHub][18] 上的开源作品。
-   我定期在我的 [GreenRoots 博客][19] 上发布有意义的文章，你可能也会发现它们对你有帮助。

下次见我的文章。不管怎样，请照顾好自己，并保持学习。


<img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1645464332466/IynS2q6H6.jpeg" width="100" />


如果你读到这里，请感谢作者，向他们表示你的关心。说声谢谢

免费学习编程。freeCodeCamp 的开源课程帮助了超过 40,000 人找到开发者的工作。[开始学习][20]

[1]: https://www.freecodecamp.org/news/how-to-use-react-server-components/
[2]: https://github.com/tapascript/nextjs-lazy-load
[3]: https://nextjs-lazy-load.netlify.app/
[4]: #heading-what-is-lazy-loading
[5]: #heading-lazy-loading-techniques-in-nextjs
[6]: #heading-lazy-loading-with-dynamic-import-and-nextdynamic
[7]: #heading-lazy-loading-with-reactlazy-and-suspense
[8]: #heading-how-to-lazy-load-the-named-exported-components
[9]: #heading-lazy-loading-your-server-components-1
[10]: #heading-lazy-loading-your-server-components-1
[11]: #heading-whats-next
[12]: https://www.youtube.com/watch?v=OpHbSHp8PcI
[13]: https://www.youtube.com/watch?v=KeBxopnhizw
[14]: https://www.youtube.com/watch?v=VSB2h7mVhPg&list=PLIJrr73KDmRwz_7QUvQ9Az82aDM9I8L_8
[15]: https://www.youtube.com/tapasadhikary?sub_confirmation=1
[16]: https://twitter.com/tapasadhikary
[17]: https://www.linkedin.com/in/tapasadhikary/
[18]: https://github.com/atapas
[19]: https://blog.greenroots.info/
[20]: https://www.freecodecamp.org/learn/

