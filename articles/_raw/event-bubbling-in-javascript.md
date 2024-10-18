---
title: Event Bubbling in JavaScript – How Event Propagation Works with Examples
date: 2024-10-18T11:36:15.287Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/event-bubbling-in-javascript/
posteditor: ""
proofreader: ""
---

By Dillion Megida

<!-- more -->

HTML elements receive different types of events, from click, to blur, to scroll, and so on.

One behavior these events have in common is Event Bubbling. I'll explain what this behavior means in this article.

I also made a video version of this article which [you can watch here][1].

## What is Event Bubbling?

Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.

This is the default behavior of events on elements unless you stop the propagation [which I'llexplain at the end of this article][2]

Let's look at an example so I can better explain how event bubbling works.

The HTML:

```
<body>
  <div>
    <span>
      <button>Click Me!</button>
    </span>
  </div>
</body>
```

The CSS:

```
body {
  padding: 20px;
  background-color: pink;
}

div {
  padding: 20px;
  background-color: green;
  width: max-content;
}

span {
  display: block;
  padding: 20px;
  background-color: blue;
}
```

The result:

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-256.png)

The **button** is a child of the **span**, which in turn is a child of the **div**, and the div is a child of the **body**. The DOM tree would look like this:

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-263.png) _DOM tree for this interaction_

When you click the **button**, you can think of it like you're also clicking the **span** (the blue background). This is because the button is a child of the span.

It's also the same thing with the **div** and the **body**. When you click the button, it's just like you're also clicking the span, div, and body because they are the button's ancestors. This is the idea of event bubbling.

An event doesn't stop at the direct element that receives it. The event bubbles up to its ancestors, until it gets to the root element.

So if the button receives a **click** event, for example, the `span`, `div`, and `body` (up until **html**, the root element) respectively receive that event:

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-264.png) _Illustration showing how event bubbling works_

Also, if you click on the blue box (span), the button doesn't receive the click event as it is not a parent or ancestor or the span. But, the div, body, and HTML would receive the event.

The same thing happens if you click on the div – the event is propagated to the body and html element.

## How to Handle Events that Bubble

The "Event Bubbling" behavior makes it possible for you to handle an event in a parent element instead of the actual element that received the event.

The pattern of handling an event on an ancestor element is called Event Delegation. You can [read more about it here][3].

Let's create some event listeners and handlers:

```
const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})
```

Here, we've selected the `body`, `div`, `span`, and `button` elements from the DOM. Then we added the `click` event listeners to each of them and a handler function that logs "body was clicked", "div was clicked", "span was clicked", and "button was clicked", respectively.

What happens on the console when you click on the pink background (which is the body) is:

```
body was clicked
```

When you click on the green background (which is the div), the console shows:

```
div was clicked
body was clicked
```

The "click" event on the body element is triggered even though the div element was the target element clicked because the "click" event bubbled from the div to the body.

When you click on the blue background (which is the span), the console shows:

```
span was clicked
div was clicked
body was clicked
```

And, lastly, when you click on the button, the console shows:

```
button was clicked
span was clicked
div was clicked
body was clicked
```

## How to Stop Event Bubbling

Event Bubbling is a default behavior for events. But in some cases, you might want to prevent this.

Let's say, for example, from our HTML code, that you want the div to open a modal when it is clicked. For the button, on the other hand, you want it to make an API request when it is clicked.

In this case, you may not want the modal to open when you click the button. You might want the modal to only open when you actually click it (and not when you click any of its children). This is where preventing event propagation comes in.

To prevent event bubbling, you use the `stopPropagation` method of the event object.

When handling events, an `event` object is passed to the handling function:

```
button.addEventListener("click", (event) => {
  // do anything with the event object
}
```

The `event` object contains properties that have information about the event that was triggered and the element it was triggered on. This object also contains methods – one of which is `stopPropagation()`.

The `stopPropagation` method of an event prevents the event from propagating to the parents and ancestors of the element the event was triggered on.

We can use this in the JavaScript code from above:

```
body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("button was clicked")
})
```

With this, when you click on the button, all you get in the console is:

```
button was clicked
```

The button's parents and ancestors do not receive the click event as it doesn't bubble up from the button.

You can also stop the bubbling from a different element like this:

```
body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})
```

With the `stopPropagation()` called on the span's event listener, and the button clicked, on the console you get:

```
button was clicked
span was clicked
```

The event bubbles from the button to the span but stops there because the propagation is stopped at this point.

## Wrapping Up

When elements receive events, such events propagate to their parents and ancestors upward in the DOM tree. This is the concept of **Event Bubbling**, and it allows parent elements to handle events that occur on their children's elements.

Event objects also have the `stopPropagation` method which you can use to stop the bubbling of an event. This is useful in cases where you want an element to receive a click event only when it is clicked and not when any of its children elements are clicked.

`stopPropagation` and `preventDefault` are methods of the event object for stopping default behaviors. Here is an article on [the difference between these methods][4].

[1]: https://www.youtube.com/watch?v=KaHZdW02Tg0
[2]: #how-to-stop-event-bubbling
[3]: https://www.freecodecamp.org/news/event-delegation-javascript/
[4]: https://www.freecodecamp.org/news/manage-default-behavior-in-browser/