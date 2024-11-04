---
title: The React Interview Prep Handbook – Essential Topics and Code Examples
date: 2024-11-04T08:40:47.162Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/KunalN25/
originalURL: https://www.freecodecamp.org/news/react-interview-prep-handbook/
posteditor: ""
proofreader: ""
---

Hi everyone! In the ever-changing landscape of web development, React is in very high demand. Companies are often seeking skilled React developers to build dynamic and engaging web applications.

<!-- more -->

If you are a web developer or aspiring to be one, it's important to understand what these companies look for in candidates. Preparing for interviews at these companies can be a daunting task.

So, in this article, I am going to list some of the topics to help you prepare for your next React interview. We'll discuss each topic in detail, with examples, so you can get a good look before the interviews and possibly gain an edge over other candidates. Let's dive into it!

## Table of Contents

-   [JavaScript Fundamentals][1]
    
-   [React Essentials][2]
    
-   [React Hooks][3]
    
-   [Additional Concepts][4]
    
-   [React Redux][5]
    
-   [Additional Notes][6]
    

## JavaScript Fundamentals

To prepare for any web development interview, you need to get familiar with JavaScript fundamentals no matter what framework is listed in the job description. Framework based questions are always secondary to JavaScript fundamentals, so expect to get tested on JavaScript first.

If you are a beginner, you need to clear JavaScript fundamentals before jumping into React. A lot of people (including me) make the mistake of jumping straight into React after learning a bit of JavaScript.

I have written a detailed post on [important JavaScript concepts for interviews][7]. You can include this as part of your React interview preparation. If you are clear on all JavaScript fundamentals, you can skip to the next section.

## React Essentials

Let's go through some essential topics you need to get familiar with:

### What is Virtual DOM in React?

As we all know, the browser DOM (Document Object Model) is a tree-like structure of different HTML elements. Virtual DOM is an in-memory representation or a lightweight version of the real DOM. It is an abstraction created by React which is similar to the real DOM.

Why does React use the virtual DOM? Updating and re-rendering the real DOM is slow and inefficient, especially if it gets updated frequently. So, instead of updating the real DOM directly, React updates the virtual DOM.

The virtual DOM is then compared to the real DOM and once it identifies the differences, it only updates that part of the DOM, rather than rendering the entire DOM again. This process is known as [diffing and reconciliation][8].

### What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in the same file as the JavaScript code. This makes it very easy for your HTML to work with JavaScript.

You can write JSX code in a `.js` or `.jsx` file. Consider the following **MyComponent.jsx** file:

```
const MyComponent = () => {
    const name = "Kunal"
    return (
        <div>
            {name}
        </div>
    )
}
```

### What is State?

State is a React object that contains information about the component and determines how the component behaves. State can change any time based on user behavior. Any change in state causes the entire component to re-render.

State is used to render dynamic information in the component and makes the UI interactive. State determines how a component reacts to events like user input and data manipulation, and controls what it renders on screen.

Some things you need to keep in mind while using state:

-   States are immutable. Always update the state using a `setState` function. For objects/arrays, create new ones and set the state with the new array/object. This ensures proper component behavior.
    
-   Use state only when necessary, avoid storing redundant information as it may cause unnecessary re-renders.
    
-   Use the state locally in the same component, avoid passing state down the DOM tree, unless absolutely necessary. For global state, use context or redux.
    

Check the [legacy docs][9] for state in class components. For functional components, refer to the [`useState`][10] section.

### What are props?

Props (short for properties) are a way to pass data from one component to another. They can be considered as arguments passed to components. Props are passed to a child component similar to HTML attributes.

Let's take an example:

```
function ParentComponent() {
  const name = "John Doe";
  const age = 30;

  const handleClick = () => {
    console.log("Button clicked")
  };

  return (
    <div>
      <ChildComponent name={name} age={age} handleClick={handleClick} />
    </div>
  );
}

function ChildComponent({ name, age, handleClick }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

-   Here, the parent component passes down name, age and handleClick method as props to the child component.
    
-   These props form a `props` object that contains the values passed. Every functional component takes a `props` object as an argument
    
-   We have accessed the props by destructuring the object in the child component.
    

Props can only be passed one way down the component tree. That is, from parent to child component. Props are read-only, you cannot change their value directly. State values passed down as props can be updated using state update function.

### Difference Between Class and Functional components

React components are of two types: class and functional components. Let's understand the difference between the two:

**Class Components:**

-   Class components are written using ES6 classes. Its properties and functions are accessed using the `this` keyword. They need a `render` method to return JSX.
    
-   Class components are stateful components that contain built-in features like State and Context.
    
-   They have methods for different stages of component lifecycle: `componentDidMount()` `componentDidUpdate()` `componentWillUnmount()`, and so on.
    
-   Class components are verbose, hard to read and always need `this` keyword to access properties.
    

**Functional Components:**

-   Functional components are simple JavaScript functions that take a `props` object as an argument. They don't need a `render` method, they return JSX directly.
    
-   Functional components are stateless and do not have state of their own. Instead, they use Hooks to use class component features like State or Context.
    
-   There are no lifecycle methods, lifecycle is be managed with `useEffect` hook.
    
-   Functional components require less code than class components, so they are easier to read and write.
    

Nowadays, developers prefer and recommend functional components, especially with Hooks. Class components are usually found in older codebases.

However, knowing class components is helpful as a lot of companies have old codebases written using class components.

### What is the Component Lifecycle?

Every React component has a lifecycle that goes through three phases: Mounting, Updating and Unmounting.

**Mounting**

In this phase, a component is created and added to the DOM. When a component is mounted, the following methods are called:

-   [`constructor()`][11]

-   [`static getDerivedStateFromProps(props, state)`][12] (rarely used)
    
-   [`render()`][13]
    
-   `componentDidMount()`
    

`componentDidMount()` is called only once; that is, when the component mounts. It is the preferred method for executing side effects when a component loads for the first time. In functional components, its equivalent is `useEffect` Hook.

**Updating**

In updating phase, the component's state or props change, which causes the component to re-render. The following methods are called when component updates:

-   [`shouldComponentUpdate(nextProps, nextState)`][14]
    
-   `render()` (called again)
    
-   [`getSnapshotBeforeUpdate()`][15]
    
-   `componentDidUpdate()`
    

The `componentDidUpdate` method is called following times:

-   The first time when component mounts, after the `componentDidMount` method.
    
-   Any state or props change triggering component re-render.
    

It is useful to execute side effects when a state updates. In functional component, the equivalent is `useEffect` with dependencies.

**Unmounting**

In this phase, the component is removed from the DOM. The `componentWillUnmount` method is called while unmounting.

It is mostly used for cleanup tasks before the component unmounts. Refer to the [`useEffect`][16] section for its equivalent.

### Controlled and Uncontrolled components

In controlled components, the form elements are managed by React state. This means that the values of form fields are set and updated ("controlled" by React state). All form data is stored in state before submitting the form.

Example of controlled component:

```
function ControlledComponent() {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Value: ${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
  );
}
```

-   The value of the `input` field is being controlled by React state variable `value`.
    
-   When you update the input field, the state gets updated and value of the input is set accordingly.
    

Uncontrolled components, on the other hand, do not depend on state to manage forms. Instead, the values of form fields are managed internally, usually with refs. Refs are used to directly interact with the DOM elements and update values without updating state and causing re-renders.

Example of uncontrolled component:

```
function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
    </form>
  );
}
```

Here, we have used a ref to directly access the input element's DOM node and used its value to access form data. This makes form handling much simpler compared to using state.

When to use either:

-   Use controlled components if you want more control over data that the user inputs. This is particularly useful when two form fields are dependent on each other.
    
-   If you have multiple state dependent on the form data, using state is a good practice.
    
-   Use uncontrolled components if your form is very simple and there's no need to manipulate the form data.
    

### What are Pure Components?

A pure component is similar to a normal component, except that it only renders if its state or props have changed.

Let's take an example:

```
const PureExample = React.memo(() => {
  return <h1> Hello {this.props.name} </h1>;
});

function App() {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setToggle(!toggle)}> Toggle </button>
      <PureExample name={name} />
    </div>
  );
}
```

-   `PureExample` is a pure component that is a child of `App` component. Pure components can be created by surrounding the function with `React.memo()`.
    
-   In the example, we have an `input` field that updates `name`, and a button that toggles the state, `toggle`.
    
-   `name` is passed down as props to `PureExample`, so it re-renders if `name` is updated. If you update `toggle` or any other state, `PureExample` does not re-render.
    

In case of class components, pure components can be created by extending the `PureComponent` class. However, functional components are recommended.

```
class PureExample extends React.PureComponent {
  render() {
    return <h1> Hello {this.props.name} </h1>;
  }
}
```

Usually, when parent component re-renders, React renders all its child components again, even if none of the child components have updated.

Pure components are used for child components that only need to re-render if one of their props change. This skips unnecessary re-renders and improves performance.

## React Hooks

React Hooks is a game-changing feature introduced to React in 2016. Hooks provide a way to implement class component features in functional components. Because of hooks, developers nowadays prefer functional to class components.

### useState Hook

We have already seen what state is. Let's understand how to implement state in functional components with a simple example:

```
const [count, setCount] = useState(0);
const increment = () => {
    setCount(count + 1);
};
const decrement = () => {
    setCount(count - 1);
};
return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
);
```

-   `useState` function takes an initial value as an argument and returns an array containing two elements: the current state, and a state update function.
    
-   In this example, we have two buttons that increment and decrement the count. On click of the button, the increment/decrement operations are performed by updating the `count` state.
    
-   The component re-renders and displays the updated `count`.
    

For more examples of its usages, check out my post below:

[https://levelup.gitconnected.com/4-different-examples-of-the-usestate-hook-in-react-5504ce011a20][17]

### useEffect Hook

The `useEffect` hook is used to implement side effects in a component. Side effects include API calls, subscription to a service and DOM manipulation. `useEffect` can also be used to conditionally update a state based on another state change.

Let's understand how to use it, with an example:

```
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.example.com/data?page=${page}`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, [page]);

  return (
    <div>
      <div> {JSON.stringify(data)} </div>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
```

-   `useEffect` takes two arguments: a function that performs side effects and a dependency array.
    
-   In this example, we display paginated data by including the fetching logic inside a `useEffect` and including the current page in the dependency.
    
-   `useEffect` makes the API call on the first render, loading the first page of data. After that, it loads additional data every time user changes the page.
    

How to implement lifecycle methods in `useEffect`:

-   To implement `componentDidMount()`, pass an empty dependency array
    
-   To implement `componentDidUpdate()`, pass dependencies to run the `useEffect` if one of those dependencies changes
    
-   For `componentWillUnmount()`, return a callback function from `useEffect` containing the cleanup code
    

`useEffect` can be used in a lot of ways. The React [docs][18] contain several examples of usages.

### useContext Hook

States are used to store information about a component and controls how the component behaves. In some cases, child components need access to the parent component’s state.

To achieve this we pass down the state data as props. However, passing data through props may lead to issues. Let’s understand the biggest issue:

**What is Prop Drilling?**

To pass data from parent to child component, we use props. But what if a component deep within the component tree needs access to a prop. You would need to pass it through several components that don't even need the prop.

The same issue arises when multiple components in different branches of the tree need access to the same prop.

Passing down props through numerous components leads to a situation known as prop drilling.

**How does React context solve the problem?**

Context lets parent components pass data to all components in the tree without drilling props through them. This eliminates the need to pass down props through multiple components in the tree.

Context was introduced as a [class component feature][19] initially, but now it can be used in functional components with the `useContext` hook.

Let's see how to use the hook:

```
import React, {useContext} from "react";

const DataContext = React.createContext(null);

export default function App() {
  return (
    <DataContext.Provider value="Some value">
      <MainComponent />
    </DataContext.Provider>
  );
}

function MainComponent() {
  const data = useContext(DataContext);
  return <div> Data: {data} </div>;
}
```

-   We used `React.createContext` method to create a context and then created a provider function that wraps around the main component.
    
-   The `value` prop of `DataContext.Provider` is used the pass data to the entire component tree under `MainComponent`.
    
-   The `useContext` Hook consumes this data inside components. It returns the data that was passed to the `value` prop of the provider.
    

`useContext` can only be used if the component or one of its parents has a context provider wrapped around it. Examples use cases are themes, user info, language preferences and localization, and so on.

Check out additional usages of `useContext` in the [docs][20].

### useRef Hook

Refs (short for references) are a way to interact directly with DOM elements. They give you direct access to the JavaScript DOM object and its [methods][21].

Visit the [legacy docs][22] for using refs in class components. In functional components, we have the `useRef` Hook. Let's take an example:

```
export function App(props) {
  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.focus();
  }, []);

  return <input type="text" ref={myRef} />;
}
```

-   `useRef` takes an initial value as an argument and returns a `ref` object.
    
-   When this `ref` object is passed to the `ref` prop of an element, we get a direct reference to the element's DOM node.
    
-   The value of a `ref` is stored inside its `current` property.
    
-   Since `ref` is a JavaScript DOM object, we can call the [focus()][23] method to focus on the `input` element when the component mounts.
    

Unlike state, refs do not cause component re-renders and unlike local variables, refs retain their values between renders.

Some things to remember about refs:

-   Components can expose their DOM nodes to parent components by using [forwardRef][24].
    
-   Only use refs when you absolutely need to access DOM elements. Example use cases could be for tasks like focusing on input elements, selecting tests, triggering animations, determining elements positions, and so on.
    
-   Avoid over-using them, prefer state and props over refs. Avoid modifying DOM elements explicitly to control component behavior, use state instead.
    

### useMemo Hook

If your component needs to perform an intensive calculation while rendering something, it slows down website performance since the component executes the calculation on every render.

This may be acceptable for a state value dependent on it, but it's inefficient if the expensive function executes again on other, unrelated state updates. To tackle this, we memoize the result of the calculation and re-calculate it only when the relevant state changes.

`useMemo` Hook is used to memoize the result of this calculation, so that it doesn't run on every render. Let's take an example:

```
const MemoExample = () => {
  const [computedValue, setComputedValue] = useState(value);
  const [otherState, setOtherState] = useState('Initial State');

  const expensiveFunction = () => {
      let result = 0;
      for (let i = 0; i < 10000000; i++) {
          result += i * 2;
      }
      return result;
  }

  const value = useMemo(expensiveFunction, [computedValue]);

  return  (
    <div>
      <button onClick={() => setComputedValue(computedValue + 1)}>
            Re-calculate
      </button>
      <button onClick={() => setOtherState('State Changed')}>
        Change Other State
      </button>
    </div>
  );
};
```

-   `useMemo` takes in the function and a dependency array as arguments, and returns the result of this function. It memoizes the result for the next render and returns the memoized value unless some dependency changes.
    
-   We have passed `computedValue` state inside the array, so, after running on the first render, the function will run only when `computedValue` changes.
    
-   If you update any other state, the component re-renders, but the function does not run again.
    

When to use:

-   If you do not want to run a function on every render, except for the state dependent on it.
    
-   To maintain referential equality of arrays and object across renders. Array/object references change each time they are declared.
    
-   When rendering lists with [`Array.map`][25] that do not need to change except for relevant state updates.
    

### useCallback Hook

`useCallback` is similar to `useMemo`, the only difference is that `useCallback` caches the function definition itself, rather than memoizing its return value.

Similar to arrays or objects, a function reference changes each time it is declared. So, wrapping it around a `useCallback` maintains referential equality of the function across renders.

Let's understand it with an example:

```
function ParentComponent() {
  const [toggle, setToggle] = useState(false);

  const handleSubmit = useCallback(() => {
    console.log('Child component form submitted');
  }, []); // Add props or state that this function depends on
  return (
    <div className={toggle ? 'dark' : ''}>
      <button onClick={() => setToggle(!toggle)}> Toggle Theme </button>
      <Child handleSubmit={handleSubmit} />
    </div>
  );
}

const Child = React.memo(({ handleSubmit }) => {

  for (let i = 0; i < 1000000000; i++) {
    // Assume component is slow
  }
  return (
    <div>
      <h2> Child component </h2>
      <button onClick={handleSubmit}> Click Me </button>
    </div>
  );
});
```

-   Here, we deliberately slow down the child component to simulate slow renders. Since it's wrapped inside `React.memo()`, it only re-renders if its only prop `handleSubmit` changes.
    
-   But when `toggle` state changes, it triggers a re-render for the child component as well, even if it's not passed down to the child component.
    
-   This is because, every time the parent component renders, the `handleSubmit` function is created with a new reference. So, technically `handleSubmit` has changed and thus, the child component re-renders.
    
-   To avoid this behaviour, we wrap the `handleSubmit` function declaration inside a `useCallback`. This ensures that the function reference remains the same between renders.
    
-   In our example, the function is created only once, since there are no dependencies. If you add dependencies, the function is re-created only if one of them changes.
    

When to use:

-   When you have event handlers defined for an element inside your component, wrap them inside a `useCallback` to avoid unnecessary re-creations of event handlers.
    
-   When you call a function inside a `useEffect`, you would usually pass the function as a dependency. To avoid running `useEffect` unnecessarily on every render, wrap the function definition inside a `useCallback`.
    
-   If your custom Hook is returning a function, it is recommended to wrap it inside a `useCallback`. So, the users don't have to optimize the Hook – rather, they can focus on their own code.
    

If you want to learn more about `useMemo` and `useCallback` hooks, check out my post below:

[https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/][26]

[https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/][27]

### useReducer Hook

The `useReducer` Hook is another way to manage state in React applications. As your application grows, its state gets more and more complex. With time, it becomes difficult to handle complex state logic with `useState` Hook.

useReducer offers a more structured way to manage complex state by handling all state updates in a reducer function. This makes state management easier since all the state update logic is at one place.

Let's see how to use this hook with an example:

```
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export function App(props) {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App'>
      State: {state.count}
      <div>

        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    </div>
  );
}
```

-   This example contains a simple counter state with three actions: increment, decrement and reset.
    
-   We define a reducer function that accepts the current state and an action object as arguments. The action object contains the action type (a string) and payload (data passed to the action).
    
-   The `useReducer` Hook accepts the reducer function and an initial state, and returns an array containing the current state and a `dispatch` method.
    
-   To update state, we call the `dispatch` method and pass the action type and payload in an object. We call this process, "dispatching an action".
    

When to use `useReducer`:

-   Use this hook only when your component has complex state update logic. Since it involves writing more code, prefer `useState` for simpler state updates. The simple example provided is just for demonstration purpose.
    
-   When there are a lot of state update actions with different logic, it makes sense to have them all in a separate function. With this, you just pass the action type and payload to a `dispatch` function and the reducer handles the state update.
    

If you want to understand more about the `useReducer` hook, check out my post:

[https://www.freecodecamp.org/news/usereducer-hook-react/][28]

So far, we have covered the most common hooks that React provides. Besides these, React also offers additional, less commonly uses hooks. So, if you are interested, read about them in the [docs][29]. However, learning the above hooks should be enough for your interviews.

### Custom Hooks

There are some situations where you may need to create your own hooks on top of the existing ones. Custom hooks provide re-usable functionality across multiple components and contribute to cleaner, maintainable code.

To create a custom Hook, first identify a piece of functionality that you want to re-use. Then, you can export it as a function with its name starting with the prefix 'use'.

Let's say you have multiple components that need to fetch data from APIs. You can export the fetching logic as a Hook to avoid duplicating code.

```
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

-   In the `useFetch` custom hook, we fetched the data inside a `useEffect` Hook, just as would inside a component. We also handled loading and error states in the Hook.
    
-   Finally, we return the data, with the loading and error states, allowing the component to use them for handling the rendering logic.
    

Let's use this in a component:

```
const UserList = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
```

The `UsersList` component displays a list of users fetched from an API, and also renders “Loading” text and an error if any. To use the custom Hook, we called `useFetch` just like any other hook, and passed an API endpoint. We can further modify the `useFetch` custom hook to include request headers, request body, etc.

This way, custom Hooks help you abstract the logic from a component and make it re-usable throughout the application. There are several other use cases:

-   Event listeners for events like window resizing, mouse movements or keyboard presses.
    
-   Form handling, including form validation and submission.
    
-   Themes, caches, transitions, and so on.
    

Check out the [docs][30] to learn more about custom hooks.

## Additional Concepts

Here are some additional concepts that can be helpful:

### Why not Use Index as Keys while Rendering Lists?

When you render lists in React using the [`Array.map`][31] method, you are asked to provide a unique `key` prop to each item being rendered. This key is used to distinguish elements from each other.

Indices are unique, so it's tempting to use them as keys for simplicity. However, indices of elements are not stable.

Elements often get added or deleted in an array. The order of elements could get changed too. In these cases, value of `key` prop changes and may lead to unpredictable behavior.

Let's consider the following list:

```
const items = [
  {
    id: 1,
    name: 'Item A'
  },
  {
    id: 2,
    name: 'Item B'
  },
  {
    id: 3,
    name: 'Item C'
  }
]
export const App = () => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>
        {item.name}
      </li>
    ))}
  </ul>
);
```

Each rendered item in the list has its index as the key. If we delete `Item B` from the list, the references of the other elements get changed.

React uses keys to uniquely identify list elements, so that rendering them becomes easier. React often re-uses these elements for quick renders. However, if an element gets deleted, the keys of all subsequent elements are updated.

React may reuse the deleted key or render the entire list again which could lead to performance issues. Instead of indices, choose something unique, preferably username, email or an ID generated by database.

### Higher Order Components

A higher order component (HOC) is a function that takes a component as an argument and returns a new component that wraps the original one. HOCs allow you to provide additional functionality to a component as well as re-use it across multiple components.

Rather than providing a short explanation here, I would recommend the following article that explains HOCs with various examples:

[https://www.freecodecamp.org/news/higher-order-components-in-react/][32]

### Lazy Loading

Lazy loading is a web development pattern that delays the loading of resources like images, videos, or non-essential components. It helps web pages load faster by first loading the content necessary for interaction, and then loading the rest of the content.

One example of lazy loading is an E-commerce product catalog page. The page first loads the names and prices of products and clickable elements. Then, it loads the images and other UI elements.

In React, lazy loading can be implemented using `React.lazy()` and `Suspense`:

```
const LazyComponent = React.lazy(() => import('./LazyComponent'));

export const App = () => {
  return (
    <div>
      <h1>Showing lazy component below</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
```

-   Once you have identified a component to lazy load, use the `React.lazy()` function to dynamically import the lazy component.
    
-   Wrap the lazy-loaded component inside `Suspense`. It renders a fallback (default) component till the lazy component loads.
    

This way, you can load a React component on demand. This is also known as code splitting**.** The code is split and some part of the React code is loaded dynamically when needed.

Code splitting optimizes the performance of React applications that have large, complex components. By using `Suspense`, you can display a temporary UI to the user, so they don't have to stare at a blank screen while a component is loading.

Code splitting breaks your application into several chunks, with each chunk being loaded independently. So, this process is also known as chunking**.**

### Difference Between Client-side and Server-side Rendering

There are two ways to render webpages in React. Let's have a look:

**Server Side Rendering (SSR):**

-   Web Page is generated and rendered on the server before sending to the client. Client receives complete web page from the server and displays it directly to the user.
    
-   Loading the prepared HTML helps with faster loading times, improving the user experience. This is especially beneficial for users with slower internet connections.
    
-   Since the web page is already prepared, it helps search engines better index your website, making it more SEO-friendly.
    
-   SSR can increase server load if the page is updated frequently. Pages with dynamic content can take longer to update because they need to re-render often.
    
-   SSR is used for marketing, blogging and news websites where initial load times and SEO are important.
    

**Client Side Rendering (CSR):**

-   A basic HTML file is sent to the client, and then it renders dynamic content using JavaScript.
    
-   Initial load times are slower because preparing and rendering the content mostly happens on the client side.
    
-   Since it initially renders basic HTML and adds JavaScript content later, search engines may not be able to index your content, making it less SEO-friendly.
    
-   For web pages with dynamic content, rendering times are faster since all the rendering happens on client side.
    
-   CSR is used for websites with dynamic content and frequent user interactions like social media platforms or dashboards.
    

## React Redux

Redux is a state-management library that helps manage complex application state. It is a powerful library for managing state in large React applications.

In the context of React, let’s look at the Hooks Redux provides:

### useSelector

A selector function accepts a Redux state object as an argument and returns a part of that state. The `useSelector` Hook is used to call the selector function. Let's take the following example:

```
// example state for e-commerce app
const initialState = {
    users: { 
        ...
    },
    products: {
        ...
    },
    cart: {
        ...
    }
    orders: {
        ordersList: [
            {
                id: 101,
                status: "Shipped"
            },
            {
                id: 102,
                status: "Processing"
            },

            ...
        ]
    }
}
```

Let's say you want to display list of orders on a page. We can't access this state directly from the component as it’s part of the redux store. So, we use selector functions.

```
const selectAllOrders = (state) => state.orders.ordersList
```

To call this selector function, we use the `useSelector` Hook:

```
const OrdersList = () => {
  const orders = useSelector(selectAllOrders);
  return (
    // display orders
  );
};
```

The main advantage of using selectors is that you get access to the Redux state object, allowing you to access any slice of the state.

### useDispatch

The `useDispatch` Hook returns a function that you can use to dispatch actions, such as updating state and calling APIs. This function takes an action object as an argument and performs the corresponding action. This function is known as a dispatch function.

Let's take an example. We’ll work with the same state and update one of the order’s status:

```
function App() {
  const dispatch = useDispatch();

  const handleUpdateStatus = () => {
    dispatch({type: 'ORDER_UPDATE_STATUS', payload: {
      id: 102,
      status: "Shipped"
    }});
  };

  return (
    <div>
      <h2>Update Order Status</h2>
      <button onClick={handleUpdateStatus}>Mark as Delivered</button>
    </div>
  );
}
```

Here, the action `ORDER_UPDATE_STATUS` will be dispatched with the corresponding payload. This action will be mapped to a reducer that will perform the state update.

The advantage of using dispatch is that you can just specify the action type and pass the payload and the state update logic will be handled by the reducer, instead of the component itself.

### Others

I have just listed two Hooks that React provides to work with Redux. However, if you are not familiar with Redux, you should check out the [docs][33] to get started.

Redux is much more than just these two Hooks. Make sure you are clear on the core concepts: store, slices, reducers, actions, selectors, dispatch. [Redux Sagas][34] is another major concept you should learn. They are mainly used for async operations.

## Additional Notes

There are a few other areas that I haven't mentioned so far, but can be a good addition:

-   [React Router][35]
    
-   [Unit Testing in React][36]
    

Additionally, you may be asked to implement a small feature using the concepts I explained in this article. This gives you the opportunity to demonstrate your understanding of React.

Also, it's helpful to have a few React projects on your resume. Check out the [Master React by Building 25 Projects][37].

Keep in mind that React is not limited to just these topics, there are additional resources in the References section. However, this handbook should serve as a useful guide before interviews. Feel free to keep re-visiting it during your interview preparation.

## Conclusion

In this handbook, we outlined several important topics to prepare for your next React interview. We started with a few basic concepts in React, then moved to Hooks. Then, we saw a few additional concepts that are good to know before discussing React Redux.

I have written clear and concise explanations for each topic, with examples. That should help you articulate these concepts to interviewers. At places where I couldn't explain, I have pointed to other helpful resources that explain better. This makes the article your go-to place any time during your interview prep.

During the interviews, just stay calm and confidently demonstrate your knowledge. Good communication puts a nice impression on the interview. Lastly, remember that each interview is a learning opportunity - whether you succeed or not. Stay positive and keep refining your skills. All the best in your interviews!

### References

-   [React Interview Questions – Interview Prep with Answers and Examples][38]
    
-   [React Interview Questions][39] - InterviewBit
    
-   [Learn React – A Guide to the Key Concepts by Ankur Tyagi][40]
    

[1]: #heading-javascript-fundamentals
[2]: #heading-react-essentials
[3]: #heading-react-hooks
[4]: #heading-additional-concepts
[5]: #heading-react-redux
[6]: #heading-additional-notes
[7]: https://www.freecodecamp.org/news/js-interview-prep-handbook/
[8]: https://legacy.reactjs.org/docs/reconciliation.html
[9]: https://legacy.reactjs.org/docs/state-and-lifecycle.html
[10]: #heading-usestate-hook
[11]: https://www.geeksforgeeks.org/react-js-constructor-method/
[12]: https://www.geeksforgeeks.org/react-js-static-getderivedstatefromprops/
[13]: https://www.geeksforgeeks.org/react-js-render-method/
[14]: https://www.geeksforgeeks.org/reactjs-shouldcomponentupdate-method/
[15]: https://www.geeksforgeeks.org/reactjs-getsnapshotbeforeupdate-method/
[16]: #heading-useeffect-hook
[17]: https://levelup.gitconnected.com/4-different-examples-of-the-usestate-hook-in-react-5504ce011a20
[18]: https://react.dev/reference/react/useEffect#usage
[19]: https://legacy.reactjs.org/docs/context.html
[20]: https://react.dev/reference/react/useContext#usage
[21]: https://www.tutorialspoint.com/javascript/javascript_dom_methods.htm
[22]: https://legacy.reactjs.org/docs/refs-and-the-dom.html
[23]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
[24]: https://react.dev/reference/react/forwardRef
[25]: http://Array.map
[26]: https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/
[27]: https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/
[28]: https://www.freecodecamp.org/news/usereducer-hook-react/
[29]: https://react.dev/reference/react/hooks
[30]: https://react.dev/learn/reusing-logic-with-custom-hooks
[31]: http://Array.map
[32]: https://www.freecodecamp.org/news/higher-order-components-in-react/
[33]: https://redux.js.org/introduction/getting-started
[34]: https://redux-saga.js.org/docs/introduction/GettingStarted
[35]: https://www.freecodecamp.org/news/react-router-cheatsheet/
[36]: https://www.freecodecamp.org/news/how-to-write-unit-tests-in-react/
[37]: https://www.freecodecamp.org/news/master-react-by-building-25-projects/
[38]: https://www.freecodecamp.org/news/react-interview-questions-and-answers/
[39]: https://www.interviewbit.com/react-interview-questions/
[40]: https://www.freecodecamp.org/news/learn-react-key-concepts/#how-much-javascript-do-you-need-to-know-before-learning-react