---
title: How to Use Props in Vue.js
date: 2024-09-30T02:50:36.362Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-use-props-in-vuejs/
posteditor: ""
proofreader: ""
---

By Joel Olawanle

<!-- more -->

We use props to pass information/data from a parent component to child components. In this article, I will explain everything you need to know about props and why you should use props in Vue.js.

Here's a brief outline of what we'll cover in this guide:

-   What are props in Vue.js?
-   How to register props inside a component
-   How to work with multiple props
-   Vue.js prop types
-   How to pass data to props
-   How to pass functions to props
-   How to validate props
-   How to set default values for props

## What are Props in Vue.js?

“Props” is a special keyword which stands for properties. It can be registered on a component to pass data from a parent component to one of its children components.

This is a lot easier compared to using state management libraries like vuex for Vue.js applications.

Data in props can only flow one way – from the top, or parent component, to the bottom, or child components. This simply means you cannot pass data from a child to a parent.

Another thing to keep in mind is that Props are read-only and cannot be modified by the child component because the parent component "owns" that value.

Let’s balance things up now – the parent components pass props to the child component(s) while the child component emit events to the parent component(s).

## How to Register Props Inside a Component

Let's now take a look at how we can register props inside a component.

```
Vue.component('user-detail', {
  props: ['name'],
  template: '<p>Hi {{ name }}</p>'
})
.js
```

or, in a Vue Single File Component:

```
<template>
  <p>{{ name }}</p>
</template>

<script>
export default {
  props: ['name']
}
</script>
```

In the above code, we registered a prop called `name` which we can call in the template section of our app.

Note: This is the child component and this prop is going to receive data from the parent component. I will explain this more later.

## How to Work with Multiple Props

You can have more than one prop by appending them to the props array, just like this:

```
Vue.component('user-detail', {
  props: ['firstName', 'lastName'],
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```

or, in a Vue Single File Component:

```
<template>
  <p>Hi {{ firstName }} {{ lastName }}</p>
</template>

<script>
export default {
  props: [
    'firstName', 
    'lastName'
  ],
}
</script>
```

## Vue.js Prop Types

To specify the type of prop you want to use in Vue, you will use an object instead of an array. You'll use the name of the property as the key of each property, and the type as the value.

If the type of the data passed does not match the prop type, Vue sends an alert (in development mode) in the console with a warning. The valid types you can use are:

-   String
-   Number
-   Boolean
-   Array
-   Object
-   Date
-   Function
-   Symbol

```
Vue.component('user-detail', {
  props: {
    firstName: String,
    lastName: String
  },
  template: '<p>Hi {{ firstName }} {{ lastName }}</p>'
})
```

or, in a Vue Single File Component:

```
<template>
  <p>Hi {{ firstName }} {{ lastName }}</p>
</template>

<script>
export default {
  props: {
    firstName: String,
    lastName: String
  },
}
</script>
```

## How to Pass Data to Props in Vue

The major goal of using props is to pass down data/information. You can either pass your value as a data property using v-bind, such as in this code:

```
<template>
  <ComponentName :title=title />
</template>

<script>
export default {
  //...
  data() {
    return {
      title: 'Understanding Props in vuejs'
    }
  },
  //...
}
</script>
```

or as a static value like this:

```
<ComponentName title="Understanding Props in vuejs" />
```

Suppose we are building an app which has so many buttons with different text/background colors. Instead of repeating the button syntax in all our files, it's better to create a button component and then pass the text/background colors as props.

Here's the parent component:

```
<template>
  <div id="app">
    <Button :name='btnName' bgColor='red' />
    <Button :name='btnName' bgColor='green' />
    <Button :name='btnName' bgColor='blue' />
  </div>
</template>

<script>
import Button from './components/Button'

export default {
  name: 'App',
  data(){
    return{
      btnName:"Joel",
    }
  },
  components: {
    Button
  }
}
</script>
```

And here's the child component:

```
<template>
  <button class="btn" :style="{backgroundColor:bgColor}">{{name}}</button>
</template>
<script>
export default {
  name: 'Button',
  props:{
    name:String,
    bgColor:String
  }
}
</script>
```

The above code shows you how to use both data property and static values when you're getting data from a parent component and using that data in a child component.

**Note:** you can also use a ternary operator inside the prop value to check a truthy condition and pass a value that depends on it.

```
<template>
  <div id="app">
    <Button :tagUser="signedUp ? 'Logout' : 'Login'" bgColor='red' />
  </div>
</template>
<script>
import Button from './components/Button'
export default {
  name: 'App',
  data(){
    return{
      signedUp: true,
    }
  },
  components: {
    Button
  }
}
</script>
```

In the above code, we are checking the `signedUp` data property. If it’s true, the data sent should be **Logout**, else it should be **Login.**

## How to Pass Functions to Props

Passing a function or a method down to a child component as a prop is relatively straightforward. It's basically the same process as passing any other variable.

But there are reasons why you shouldn't use props as functions – instead you should use emit. This article properly explains [why][1].

```
<template>
  <ChildComponent :function="newFunction" />
</template>
```

```
<script>
export default {
  methods: {
    newFunction() {
      // ...
    }
  }
};
</script>
```

## How to Validate Props in Vue

Vue makes validating props very easy. All you have to do is add the required key and its value to the prop. We can validate with both the prop type and by using `required`:

```
props: {
  name: {
    type: String,
    required: true
  }
}
```

## How to Set Default Prop Values

Before concluding this article, let’s now see how to set default values to our props. Default values are rendered if the child component is unable to get data from the parent component.

Vue allows you to specify a default value, just as we specified `required` earlier.

```
props: {
  name: {
    type: String,
    required: true,
    default: 'John Doe'
  },
  img: {
    type: String,
    default: '../image-path/image-name.jpg',
   },
}
```

You can also define the default value as an object. And it can be a function that returns an appropriate value, rather than being the actual value.

## Conclusion

In this article, we have learned what props do and how props works in Vue.js.

In summary, we use props to pass down data from the parent components to the child component(s). The child component also emit events to the parent component(s) in case you need to send data/events from the child to the parent component.

![Image](https://www.freecodecamp.org/news/content/images/2021/08/image-50.png)

Thank you for reading!

**Useful Links**

-   [Vue.js Component Props - flaviocopes][2]
-   [Props - Vue documentation][3]

[1]: https://michaelnthiessen.com/pass-function-as-prop/
[2]: https://flaviocopes.com/vue-props/
[3]: https://vuejs.org/v2/guide/components-props.html