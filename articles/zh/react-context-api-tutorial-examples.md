---
title: 如何使用 React 的 Context API – 教程与示例
date: 2024-08-19T09:32:08.546Z
author: Danny Adams
authorURL: https://www.freecodecamp.org/news/author/danny-adams/
originalURL: https://www.freecodecamp.org/news/react-context-api-tutorial-examples/
posteditor: ""
proofreader: ""
---

在 React 中，数据通常通过 props 从父组件传递到子组件。但这可能导致“属性钻取”（prop drilling）问题——我们需要将 props 通过许多组件逐级传递，才能让它们到达需要用到它们的地方。

<!-- more -->

此外，一些 props（例如当前认证的用户、UI 主题或首选语言）将在应用程序的许多组件中需要。

React 的 Context API 提供了一种在组件之间共享这些值的方法，而不必在树的每一层显式地传递它们作为 props。因此，Context 被设计用于在 React 组件树中共享可以被视为“全局”的数据。

## 本文将学到什么

-   [什么是 React Context API 以及何时应该使用它？][1]
-   [React Context API 示例：如何在浅色和深色模式 UI 主题之间切换][2]
-   [如何创建多个 React Contexts（以及为什么你应该这样做）][3]
-   [如何防止 React Context 重新渲染问题][4]
-   [React Context API 与 Redux 用于全局状态管理][5]

## 源代码

本文中的所有示例都在这个仓库中：[https://github.com/DoableDanny/React-context-API-tutorial][6]

我还制作了本文的视频版，以便您更容易跟随示例：[React Context 教程与示例  
][7]

## 什么是 React Context API 以及何时应该使用它？

Context API 是 React 中的一个功能，它提供了一种在组件之间共享主题、用户信息或配置设置等值的方法，而无需通过组件树的每一级显式传递 props。这使得它对于管理全局状态或需要在不同嵌套级别的许多组件中使用的状态特别有用。

Context API 是 React 库的一部分，这意味着你不需要在 React 应用程序中安装它作为第三方包。

因此，Context API 可用于在 React 应用程序的组件之间共享全局变量，而无需将这些变量作为 props 向下传递组件树。这特别有用，因为一些深度嵌套的组件需要访问来自更高层组件的变量。

现在，让我们通过一个常见的使用案例示例来学习 Context API 如何工作...

## React Context API 示例 —— 浅色和深色模式 UI 主题

React Context API 的一个非常常见的实际用例是存储当前用户的首选主题——即“浅色模式”或“深色模式”。

想一想：React 应用程序中的许多 UI 组件都需要知道当前主题，以显示适当的样式。按钮、标题、导航栏、页脚、下拉菜单——许多组件需要根据当前主题以不同的方式显示自己。

### 传递 props 解决方案

最简单和明显的“React”解决方案是创建一个 `theme` 变量在顶层 `App` 组件中，然后继续将其作为 props 传递给树中的所有组件。但这会导致一个被称为“属性钻取”的 React 问题。

属性钻取是 React 中用来描述通过多个中介组件从父组件向深层嵌套的子组件传递数据的过程。当你需要将状态或函数传递几级组件时，这种情况可能会发生。

属性钻取示例：

```jsx

function App() {
  const theme = 'dark';
  return <Parent theme={theme} />;
}

function Parent({ theme }) {
  return <Child theme={theme} />;
}

function Child({ theme }) {
  return <Button theme={theme} />;
}

function Button({ theme }) {
  return <button style={{ background: theme === 'dark' ? 'black' : 'white' }}>Click me</button>;
}

```

如你所见，每个中介组件都需要包含这个 prop，即使它不使用它，只是为了进一步向下传递。这会使代码变得杂乱，并且更难理解。

此外，不使用 props 的中介组件在 props 更改时可能仍然会重新渲染，导致性能问题。在具有深层组件树的大型应用程序中，这可能特别成问题。

### Context API 前来救援

我们可以使用 Context API 来解决这个属性钻取问题。

#### 创建一个 context

首先，我们需要创建 context，并传入浅色主题作为默认值：

```jsx
// src/contexts/ThemeContext.js

import { createContext } from "react";

export const themes = {
  light: {
    background: "white",
    text: "black",
  },
  dark: {
    background: "black",
    text: "white",
  },
};

export const ThemeContext = createContext(themes.light);
```

在上面，我们在 `src` 文件夹内创建了一个 `contexts` 文件夹，用于存储我们所有的 contexts。建议将每个 context 创建在其自己的文件中。在我们的例子中，我们只需要创建一个 context 来存储当前的主题。

#### 提供一个上下文

接下来，我们需要将所有需要访问主题的组件包装在一个上下文提供器中。上下文提供器接受一个 `value` 属性，我们可以在这里传递我们想要设为全局的值。

下面，`<Navbar />` 和 `<Button />` 都将能够访问 `theme` 状态，即使我们没有明确地将其作为属性传递下去。这是因为我们已经将这些组件包装在主题上下文提供器中，并将需要设为全局的值（`theme`）传递给了它。

```jsx
// src/App.js

import React, { useState } from "react"
import { ThemeContext, themes } from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Button from "./components/Button"

const App = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(state => (state === themes.light ? themes.dark : themes.light))
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Navbar />
        <Button changeTheme={toggleTheme} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
```

如果我们还想通过上下文在整个应用程序中提供 `setTheme()`，我们可以将以下对象传递给 `value` 属性。然后，我们可以在主题上下文提供器内的任何组件中切换主题：

```jsx
<ThemeContext.Provider value={{ theme, setTheme }}>
```

现在让我们创建将使用 `useContext()` 钩子消费主题上下文的 `Button` 和 `Navbar` 组件。注意组件的 CSS 样式是如何根据当前的主题值变化的：

```jsx
// src/components/Button.js

import React, { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

const Button = ({ changeTheme }) => {
  const theme = useContext(ThemeContext)

  return (
    <button
      style={{ backgroundColor: theme.background, color: theme.text }}
      onClick={changeTheme}
    >
      切换主题
    </button>
  )
}

export default Button
```

```jsx
// src/components/Navbar.js

import React, { useContext } from "react"
import { ThemeContext } from "../contexts/themeContext"

const Navbar = () => {
  const theme = useContext(ThemeContext)

  return (
    <nav style={{ backgroundColor: theme.background }}>
      <ul>
        <li style={{ color: theme.text }}>主页</li>
        <li style={{ color: theme.text }}>关于</li>
      </ul>
    </nav>
  )
}

export default Navbar
```

**使用上下文涉及的步骤如下**：

1.  将你想要使用的上下文（在本例中为 `ThemeContext`）导入组件中。
2.  从 `React` 导入 `useContext` 钩子。
3.  在需要访问上下文值的组件内部，调用 `useContext` 钩子并传入你要使用的上下文。将其赋值给一个变量（在我们的例子中是 `const theme = useContext(ThemeContext)`）。
4.  组件现在可以访问到全局变量，每当上下文中的值更新时，组件将重新渲染/被更新。

好了，这就是我们这个例子所需的一切。现在让我们在项目路径中运行以下命令启动我们的应用程序：

`npm run start`

现在让我们在浏览器中测试一下。

浅色模式：

![light_mode](https://www.freecodecamp.org/news/content/images/2022/03/light_mode.JPG)

_\*\* 按下切换主题按钮 \*\*_

深色模式：

![dark_mode](https://www.freecodecamp.org/news/content/images/2022/03/dark_mode.JPG)

看，我们已经使用上下文 API 在整个应用程序中共享了主题状态 – 而无需将其作为属性逐级传递。很酷吧！👌

## 如何创建多个 React 上下文

在上面的例子中，我们只创建了一个上下文，`ThemeContext`。但是如果我们还有其他需要设为全局的数据，例如当前登录用户的 `username` 和 `age` 怎么办？

我们可以只创建一个大上下文来存储所有需要全局消费的变量：

```jsx
<OneBigContext.Provider value={{ theme, username, age }}>
  <Button changeTheme={toggleTheme} />
  <Navbar />
</OneBigContext.Provider>
```

但这被认为是不好的做法，因为每当上下文值更新时，所有消费该上下文的组件都将重新渲染。这意味着所有只需要知道 `theme` 的组件每次用户变量更新时也会重新渲染。这会恶化应用程序的性能，尤其是对于有许多复杂组件的大型应用程序。

我们可以通过创建多个上下文来解决这个问题 – 一个用于主题，另一个用于用户数据 – 并将我们的应用程序包装在两个提供器中，如下所示：

```jsx
<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={{ username, age }}>
    <Button changeTheme={toggleTheme} />
    <Navbar />
  </UserContext.Provider>
</ThemeContext.Provider>
```

通过只在每个上下文中存储相关数据，我们可以帮助防止组件不必要的重新渲染，并改善应用程序的性能。

## 如何防止 React 上下文重渲染问题

正如我们所讨论的，每当上下文值更新时，所有消费该上下文的组件将会重新渲染 – 即使包裹在 `React.memo()` 中。（如果你不知道 `React.memo()` 是什么，不用担心 – 我们很快会讨论它！）这会恶化应用程序的性能。

### 1\. 使用多个 React Context

这是我们上面讨论的方法，也是解决重新渲染问题的“首选方式”（[参见此答案][8]）。

### 2\. 拆分组件并传递所需的值

你也可以将组件拆分，并通过 prop 从 context 中传递所需的值，子组件使用 `React.memo()` 包装。示例：

```jsx
const Card = () => {
  const appContextValue = useContext(AppContext);
  const theme = appContextValue.theme;

  return (
    <div>
      <CardTitle theme={theme} />
      <CardDescription theme={theme} />
    </div>
  );
};

const CardTitle = React.memo(({ theme }) => {
  return <h2 style={{ color: theme.text }}>This is the Title </h2>;
});

const CardDescription = React.memo(({ theme }) => {
  return <p style={{ color: theme.text }}>lorem ipsum dolor sit amet,</p>;
});
```

`React.memo()` 是 React 中的一个高阶组件（HOC），用于通过防止不必要的重新渲染来优化函数组件。它通过记忆化组件来实现这一点，这意味着只有在其 props 改变时才会重新渲染组件。

-   没有 `React.memo()`：组件 `CardTitle` 和 `CardDescription` 会在其父组件 `Card` 重新渲染时重新渲染 —— 即使它们的 props 没有改变。在大型应用程序或渲染昂贵的组件中，这可能会导致性能问题。
-   使用 `React.memo()`：`CardTitle` 和 `CardDescription` 只有在其 props 改变时才会重新渲染，从而减少不必要的渲染并提高性能。

因此，通过拆分组件，仅传递所需的值作为 props，并使用 `React.memo()` 包装组件，`CardTitle` 和 `CardDescription` 只有在 `theme` 更新时才会重新渲染，而不会在 `username` 更新时重新渲染。

此解决方案在我们无法拆分 context 时特别有用。

### 3\. 内部使用 `React.useMemo()` 的一个组件

如下所示，`theme` 是 `useMemo()` 的一个依赖项，因此我们只有在 `theme` 发生变化时才会重新渲染回调函数返回的元素：

```jsx
const Card = () => {
  const appContextValue = useContext(AppContext);
  const theme = appContextValue.theme;

  return useMemo(
    () => (
      <div>
        <CardTitle theme={theme} />
        <CardDescription theme={theme} />
      </div>
    ),
    [theme]
  );
};

const CardTitle = ({ theme }) => {
  return <h2 style={{ color: theme.text }}>This is the Title </h2>;
};

const CardDescription = ({ theme }) => {
  return <p style={{ color: theme.text }}>lorem ipsum dolor sit amet,</p>;
};
```

以下是 `useMemo()` 的工作原理：

1.  `useMemo()` 的第一个参数是一个返回记忆化值的回调函数。在此例中，它返回一个 React 元素或一棵 React 元素树。
2.  第二个参数是一个依赖项数组。如果此依赖项数组中的任何值被更新，那么作为第一个参数提供的回调函数将被调用，并重新渲染回调函数返回的元素。

所以，`useMemo()` 可用于仅在依赖项数组中指定的某些值更新时重新渲染 React 元素。

通过将这些元素包装在 `useMemo()` 中，并指定 `theme` 为唯一的依赖项，这些元素只会在 `theme` 更新时重新渲染，而不会在任何其他 context 值更新时重新渲染。

此解决方案在我们无法拆分 context 时也特别有用。

## React Context API vs Redux

这是 React 社区内非常常见且充满争议的话题。React Context API 和 Redux 都是用于在 React 应用中管理状态的工具，但它们有不同的用例、优点和限制。

Context API 是 React 的内置功能，其主要目的是允许状态在一棵 React 组件树中共享而无需逐层传递 props。

Context API 的 API 很简单：`React.createContext()`，`Provider` 和 `useContext()` 钩子。适用于小型到中型应用，因为它使用简单，只需很少的设置和模板代码。

另一方面，Redux 是一个状态管理库，需要作为第三方包安装到应用中。其主要目的是以可预测的方式管理整个应用的状态，特别是在大型和复杂的应用中。

#### Context API 适用于小到中型应用的原因：

-   **简单性**：比 Redux 简单。
-   **内置**：它是 React 的一部分，所以无需安装额外的包，使项目维护更容易。
-   **最少的模板代码**：比 Redux 需要更少的模板代码和设置。

#### Redux 适用于更大、更复杂的应用：

-   **单一存储**：维持整个应用状态的单一存储，使调试和测试更容易。
-   **可预测的状态更新**：使用纯函数（reducers）管理状态更新，确保状态的可预测性和不可变性。
-   **中间件支持**：强大的中间件系统（如 redux-thunk 或 redux-saga）用于处理异步操作和副作用。
-   **开发工具集成**：优秀的开发工具支持时光旅行调试和状态检查。
-   **适合大型应用**：设计用于处理复杂的状态逻辑和大规模应用。

-   一致的架构模式
-   调试能力
-   中间件
-   插件和可扩展性
-   跨平台和跨框架使用
-   根据应用程序的设置，比单独使用 Context 有更好的性能（我们不需要担心前面提到的 Context 的重新渲染问题——组件只有在它们使用的值更新时才会重新渲染）

#### 总结：

-   Redux 是一个更复杂的状态管理工具，提供更多的功能和工具。它提供了一种在整个应用程序中管理状态的一致方式，这对于有多个开发人员参与的大型项目非常有帮助（因为他们不会都在实现自己风格的状态管理并导致代码库不一致）。
-   React Context API 更简单，设置要求更少，是小型到中型项目的良好解决方案，其中使用像 Redux 这样的工具增加的复杂性和开销是不必要的。

## 谢谢阅读！

如果您觉得这篇文章有用，可以通过以下方式获取更多我的信息：

-   [订阅我的 YouTube 频道][10]。我计划将其变成一个专注于 React/NextJS/Node 的频道，提供深入的视频讲解 😎。
-   [在 Twitter 上关注我][11]，我会在上面发布关于我的自由职业之旅、副项目和当前学习内容的推文。
-   [查看我的技术博客][12]

### 免费 React Hooks 课程

想要学习 React 的所有 hooks 吗？我创建了一个免费的两小时视频，讲解所有 9 个核心 React Hooks 并附带示例：[React Hooks 教程 - 所有 React Hooks 解释和示例][13]。如果您喜欢，考虑订阅[我的频道][14]。

干杯！

---

![Danny Adams](https://www.freecodecamp.org/news/content/images/size/w60/2022/01/prof-1.png)

我是一名专注于 React、NextJS、TypeScript、Node 和 PHP 的全栈开发人员。目前全职从事 WordPress 自由职业。

---

如果您读到这里，感谢作者以示关心。说声谢谢

免费学习编程。freeCodeCamp 的开源课程帮助了超过 40,000 人找到开发者的工作。[开始吧][15]

[1]: #whatisthereactcontextapiandwhenshouldyouuseit
[2]: #reactcontextapiexamplelightanddarkmodeuitheme
[3]: #howtocreatemultiplereactcontexts
[4]: #howtopreventthereactcontextrerenderissue
[5]: #reactcontextapivsredux
[6]: https://github.com/DoableDanny/React-context-API-tutorial
[7]: https://www.youtube.com/watch?v=hkGiP6Ur-B4
[8]: https://github.com/facebook/react/issues/15156#issuecomment-474590693
[9]: https://x.com/acemarke?lang=en
[10]: https://www.youtube.com/channel/UC0URylW_U4i26wN231yRqvA
[11]: https://twitter.com/doabledanny
[12]: https://www.doabledanny.com/blog/
[13]: https://www.youtube.com/watch?v=TXN6HYGLba4&ab_channel=DoableDanny
[14]: https://www.youtube.com/channel/UC0URylW_U4i26wN231yRqvA
[15]: https://www.freecodecamp.org/learn/

