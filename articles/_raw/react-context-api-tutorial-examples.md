---
title: How to Use React's Context API – Tutorial with Examples
date: 2024-08-19T09:32:08.546Z
author: Danny Adams
authorURL: https://www.freecodecamp.org/news/author/danny-adams/
originalURL: https://www.freecodecamp.org/news/react-context-api-tutorial-examples/
posteditor: ""
proofreader: ""
---

In React, data is typically passed down from parent to child via props. But this can lead to "prop drilling" – where we have to pass props down through lots of components to get them where they're needed.

<!-- more -->

Also, some props (for example, the current authenticated user, UI theme, or preferred language) will be required by many components within an application.

React's Context API provides a way to share values like these between components without having to explicitly pass them down as a prop through every level of the tree. So, Context is designed to share data that can be considered "global" for a tree of React components.

## What You'll Learn in This Article

-   [What is the React Context API and when should you use it?][1]
-   [React Context API example: how to switch between light and dark mode UI themes][2]
-   [How to create multiple React Contexts (and why you should)][3]
-   [How to prevent the React Context re-render issue][4]
-   [React Context API vs Redux for global state management][5]

## Source Code

All examples from this article are in this repo: [https://github.com/DoableDanny/React-context-API-tutorial][6]

I also made a video version of this article to make it easier for you to follow along with the examples: [React Context Tutorial with Examples  
][7]

## What is the React Context API and When Should You Use It?

The Context API is a feature in React that provides a way to share values like themes, user information, or configuration settings between components without having to explicitly pass props through every level of the component tree. This makes it particularly useful for managing global state, or state that is needed by many components at different nesting levels.

The Context API is a part of the React library, meaning that you don't need to install it as a third-party package in a React application.

So, the Context API can be used for sharing global variables between components in a React app, without having to pass these variables as props down the component tree. This is especially useful if there are components that are deeply nested that need access to variables from higher up components.

Now, let's learn how the Context API works by going through a common use case example for the Context API...

## React Context API Example — Light and Dark Mode UI Theme

A very common real-world usecase for the React Context API is for storing the current user's prefered theme – that is, "light mode" or "dark mode".

Think about it: many of the UI components in a React app will need to know about the current theme, in order to display the approprate styles. Buttons, Headings, the Navbar, the Footer, Dropdowns – lots of components are going to need to display themselves differently depending on the current theme.

### The passing-down-a-prop solution

The most simple and obvious "React" way to solve this would be to create a `theme` variable in the main top-level `App` component, and then keep on passing it down as a prop to all of the components in the tree. But this leads to a React problem known as "prop drilling".

Prop drilling is a term used in React to describe the process of passing data from a parent component to a deeply nested child component through multiple intermediary components. This can happen when you need to pass state or functions several levels down the component tree.

Prop drilling example:

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

As you can see, each intermediary component needs to include the prop, even if it doesn't use it, just to pass it down further. This clutters the code and makes it more difficult to understand.

Also, intermediary components that do not use the props might still re-render when the props change, leading to performance issues. This can be particularly problematic in large applications with deep component trees.

### Context API To The Rescue

We can solve this prop drilling issue by using the Context API.

#### Creating a context

First, we need to create the context, and pass in the light theme as the default value:

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

Above, we have created a `contexts` folder inside of our `src` folder for storing all of our contexts. It's considered good practice to create each context in its own file. In our case, we just need to create a context for storing the current theme.

Notice that contexts are created by calling the `createContext()` function that comes from the `React` library. We pass the `createContext()` function a default value of `themes.light`.

#### Providing a context

Next, we need to wrap all of the components that need access to the theme in a context provider. The context provider takes a `value` prop, where we can pass the value that we want to make global.

Below, `<Navbar />` and `<Button />` will have access to the `theme` state, even though we haven't explicitly passed it down as a prop. This is because we have wrapped these components in the theme context provider, and passed it the value (`theme`) that needs to be made global.

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

If we also wanted to make `setTheme()` available throughout our app via context, we could pass the following object to the `value` prop. We'd then be able to toggle the theme from any component within the Theme Context Provider:

```jsx
<ThemeContext.Provider value={{ theme, setTheme }}>
```

Now let's create the `Button` and `Navbar` components that will consume the theme context using the `useContext()` hook. Notice how the CSS styles of the components change depending on the current theme values:

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
      Toggle theme
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
        <li style={{ color: theme.text }}>Home</li>
        <li style={{ color: theme.text }}>About</li>
      </ul>
    </nav>
  )
}

export default Navbar
```

**Here are the steps involved in using a context**:

1.  Import the context that you want to use (`ThemeContext` in this example) into the component.
2.  Import the `useContext` hook from `React`.
3.  Inside of the component that needs access to the context value(s), call the `useContext` hook and pass the context that you want to use. Assign this to a variable (`const theme = useContext(ThemeContext)` in our example)
4.  The component now has access to the global variable, and the component will re-render/be updated every time a value inside of the context is updated.

OK, that's everything that we need for this example. Let's now start up our application by running the following command in the project route:

`npm run start`

Now let's test things out in the browser.

Light mode:

![light_mode](https://www.freecodecamp.org/news/content/images/2022/03/light_mode.JPG)

_\*\* Press the Toggle Theme button \*\*_

Dark mode:

![dark_mode](https://www.freecodecamp.org/news/content/images/2022/03/dark_mode.JPG)

And there we go, we've used the context API to share the theme state throughout our application – without having to pass it down as a prop. Cool! 👌

## How to Create Multiple React Contexts

In our example above, we only created one context, `ThemeContext`. But what if we had other data that needed to be made global, such as the current logged in user's `username` and `age`?

We could just create one big context for storing all variables that needed to be consumed globally:

```jsx
<OneBigContext.Provider value={{ theme, username, age }}>
  <Button changeTheme={toggleTheme} />
  <Navbar />
</OneBigContext.Provider>
```

But this is considered bad practice, as whenever a context value is updated, all components consuming that context will be re-rendered. This means that all components that only need to know about the `theme`, and not the user variables, will get re-rendered whenever any of the user variables are updated. This can worsen an app's performance, especially in larger apps with lots of complex components.

We can solve this by creating multiple contexts – one context for the theme and another for the user data – and wrapping our app in both providers, like so:

```jsx
<ThemeContext.Provider value={theme}>
  <UserContext.Provider value={{ username, age }}>
    <Button changeTheme={toggleTheme} />
    <Navbar />
  </UserContext.Provider>
</ThemeContext.Provider>
```

By only storing related data in each context, we help prevent unnecessary re-renders of components, and improve the performance of our app.

## How to Prevent the React Context Re-render Issue

As we've discussed, whenever a context value is updated, all components consuming that context will be rerendered – even if wrapped in `React.memo()`. (If you don't know what `React.memo()` is, don't panic – we'll discuss it soon!) This can worsen an app’s performance.

But we can mitigate this problem with the following methods:

### 1\. Use Multiple React Contexts

This is what we discussed above, and is the "preferred" way of solving the rerender problem ([see this answer][8]).

### 2\. Split the Component and Pass the Needed Value

You can also split the component up and pass down (as a prop) the needed value from context, with the child components wrapped in `React.memo()`. Example:

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

`React.memo()` is a higher-order component (HOC) in React that is used to optimize functional components by preventing unnecessary re-renders. It does this by memoizing the component, meaning it will only re-render if its props change.

-   Without `React.memo()`: The components, `CardTitle` and `CardDescription`, would re-render whenever their parent, `Card`, re-renders – even if their props haven't changed. This can lead to performance issues in larger applications or with components that are expensive to render.
-   With `React.memo()`: `CardTitle` and `CardDescription` only re-render if their props change, reducing unnecessary renders and improving performance.

So, by splitting the component up, passing down only the values that are needed as props, and wrapping the components in `React.memo()`, `CardTitle` and `CardDescription` will only be re-rendered if `theme` is updated, but not if `username` is updated.

This solution is particularly useful if we can’t split out context for whatever reason.

### 3\. One Component with `React.useMemo()` Inside

Below, `theme` is a dependency of `useMemo()`, so we will only get a re-render of the elements returned by the callback function when `theme` is changed:

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

Here's how `useMemo()` works:

1.  The first parameter of `useMemo()` is a callback function that returns a memoized value. In this case, it returns a React element, or tree of React elements.
2.  The second parameter is an array of dependences. If any of the values in this dependency array are updated, then the callback function provided as the first argument is called, and the elements that the callback function returns are re-rendered.

So, `useMemo()` can be used to only re-render React elements if certain values specified in the dependency array are updated.

By wrapping these elements in `useMemo()`, and specifying `theme` as the only dependency, the elements only get re-rendered if `theme` is updated, but won't get re-rendered if any other context value is updated.

This solution is also particularly useful if we can’t split out context.

## React Context API vs Redux

This is a very common and much-depated topic within the React community. React Context API and Redux are both tools for managing state in a React application, but they have different use cases, strengths, and limitations.

The Context API is a built-in feature of React, with the primary purpose of allowing state to be shared across a tree of React components without prop drilling.

The Context API has a simple API: `React.createContext()`, `Provider`, and the `useContext()` hook. And is good for small to medium-sized apps, as it is straightforward to use, and requires little setup and boilerplate code.

On the other hand, Redux is a state management library that has to be installed as a third-party package into an application. Its primary purpose is to manage application-wide state in a predictable way, especially in large and complex applications.

#### Why Context API is good for small-to-medium-sized apps:

-   **Simplicity**: It's simpler than Redux.
-   **Built-in**: It's part of React, so no need to install extra packages, making maintenance of the project easier.
-   **Minimal boilerplate**: Requires less boilerplate and setup than Redux.

#### Why Redux is good for larger, more complex applications:

-   **Single Store**: Maintains a single store for the entire application state, which makes debugging and testing easier.
-   **Predictable State Updates**: Uses pure functions (reducers) to manage state updates, ensuring predictability and immutability.
-   **Middleware Support**: Powerful middleware system (like redux-thunk or redux-saga) for handling asynchronous actions and side effects.
-   **DevTools Integration**: Excellent developer tools for time-travel debugging and state inspection.
-   **Suitable for Large Apps**: Designed to handle complex state logic and large-scale applications.

**Redux maintainer, [Mark Erikson][9], gives the following reasons for using Redux**:

-   Consistent architectural patterns
-   Debugging capabilities
-   Middleware
-   Addons and extensibility
-   Cross-platform and cross-framework usage
-   Depending on your app's setup, much better performance than working with just Context (we don't have to worry about the rerender problem we get with Context, mentioned above – components only rerender when the value they are using updates)

#### In summary:

-   Redux is a more complex state management tool that provides more features and tools. It provides a consistent way of managing state throughout an application, which is very helpful on larger projects with multiple developers (as they won't all be implementing their own styles of state management and making the codebase inconsistent).
-   React Context API is more straightforward, requires less setup, and is a good solution for smaller to medium sized projects where the added complexity and overhead of using a tool like Redux isn't necessary.

## Thank you for reading!

If you found this article useful, you can hear more from me by:

-   [Subscribing to my YouTube channel][10]. I plan to turn it into a React/NextJS/Node-focused channel, with in-depth videos 😎.
-   [Following me on Twitter][11] where I tweet about my freelancing journey, side projects and current learnings.
-   [Checking out my tech blog][12]

### Free React Hooks Course

Want to learn all the hooks in React? I created a free 2 hour video explaining all 9 core React Hooks with examples: [React Hooks Tutorial — All React Hooks Explained with Examples][13]. If you enjoy, consider subscribing to [my channel][14].

Cheers!

---

![Danny Adams](https://www.freecodecamp.org/news/content/images/size/w60/2022/01/prof-1.png)

I am a fullstack web developer focused on React, NextJS, TypeScript, Node, and PHP. Currently freelancing fulltime with WordPress.

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][15]

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