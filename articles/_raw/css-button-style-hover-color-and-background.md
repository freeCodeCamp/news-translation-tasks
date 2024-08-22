---
title: Table of Contents
date: 2024-08-22T14:00:01.484Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/
posteditor: ""
proofreader: ""
---

In this article you'll see how to style a button using CSS.

<!-- more -->

My goal here is mostly to showcase how different CSS rules and styles are applied and used. We won't see much design inspiration nor will we discuss ideas for styling.

Instead, this will be more of an overview of how the styles themselves work, what properties are commonly used, and how they can be combined.

You'll first see how to create a button in HTML. Then you'll learn how to override the default styles of buttons. Lastly, you'll get a glimpse of how to style buttons for their three different states.

### Here's an Interactive Scrim of CSS Button Style

<iframe src="https://scrimba.com/scrim/co3524355bcd2543752fa537c?pl=pBe55fP&amp;embed=freecodecamp,mini-header" width="100%" height="420" title="Embedded content" loading="lazy"></iframe>

# Table of Contents

1.  [Create a button in HTML][1]
2.  [Change default styling of buttons][2]
    1.  [Change the background color][3]
    2.  [Change text color][4]
    3.  [Change the border style][5]
    4.  [Change the size][6]
3.  [Style button states][7]
    1.  [Style hover state][8]
    2.  [Style focus state][9]
    3.  [Style active state][10]
4.  [Conclusion][11]

Let's get started!

## How to Create a Button in HTML

To create a button, use the `<button>` element.

This is a more accessible and semantic option compared to using a generic container which is created with the `<div>` element.

In the `index.html` file below, I've created the basic structure for a webpage and added a single button:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CSS Button Style</title>
</head>
<body>
    <button type="button" class="button">Click me!</button>
</body>
</html>
```

Let's break down the line `<button type="button" class="button">Click me!</button>`:

-   You first add the button element, which consists of an opening `<button>` and closing `</button>` tag.
-   The `type="button"` attribute in the opening `<button>` tag explicitly creates a clickable button. Since this particular button is not used for submitting a form, it is useful for semantic reasons to add it in order to make the code clearer and not trigger any unwanted actions.
-   The `class="button"` attribute will be used to style the button in a separate CSS file. The value `button` could be any other name you choose. For example you could have used `class="btn"`.
-   The text `Click me!` is the visible text inside the button.

Any styles that will be applied to the button will go inside a spearate `style.css` file.

You can apply the styles to the HTML content by linking the two files together. You do this with the `<link rel="stylesheet" href="style.css">` tag which was used in `index.html`.

In the `style.css` file, I've added some styling which only centers the button in the middle of the browser window.

Notice that the `class="button"` is used with the `.button` selector. This is a way to apply styles directly to the button.

```
* {
    box-sizing: border-box;
} 

body {
    display:flex;
    justify-content: center;
    align-items: center;
    margin:50px auto;
}

.button {
    position: absolute;
    top:50%
}
```

The code from above will result in the following:

![Screenshot-2022-02-06-at-10.29.02-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.29.02-PM.png)

The default styling of buttons will vary depending on the browser you're using.

This is an example of how the native styles for buttons look on the Google Chrome browser.

## How to Change the Default Styling of Buttons

### How to Change the Background Color of Buttons

To change the background color of the button, use the CSS `background-color` property and give it a value of a color of your taste.

In the `.button` selector, you use `background-color:#0a0a23;` to change the background color of the button.

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
}
```

![Screenshot-2022-02-06-at-10.28.30-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.28.30-PM.png)

### How to Change the Text Color of Buttons

The default color of text is black, so when you add a dark background color you will notice that the text has disappeared.

Another thing to make sure of is that there is enough contrast between the button's background color and text color. This helps make the text more readable and easy on the eyes.

Next, use the `color` property to change the color of text:

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
}
```

![Screenshot-2022-02-06-at-10.28.03-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.28.03-PM.png)

### How to Change the Border Style of Buttons

Notice the grey around the edges of the button? That is the default color of the button's borders.

One way to fix this is to use the `border-color` property. You set the value to be the same as the value of `background-color`. This makes sure the borders have the same color as the background of the button.

Another way would be to remove the border around the button entirely by using `border:none;`.

```
.button {
  position: absolute;
  top:50%;
  background-color:#0a0a23;
  color: #fff;
  border:none;
}
```

![Screenshot-2022-02-06-at-10.27.33-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.27.33-PM.png)

Next, you can also round-up the edges of the button by using the `border-radius` property, like so:

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border:none;
    border-radius:10px;
  }
```

![Screenshot-2022-02-06-at-10.26.57-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.26.57-PM.png)

You could also add a slight dark shadow effect around the button by using the `box-shadow` property:

```
 position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border:none;
    border-radius:10px;
    box-shadow: 0px 0px 2px 2px rgb(0,0,0);
```

![Screenshot-2022-02-06-at-10.25.55-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.25.55-PM.png)

### How to Change the Size of Buttons

The way to create more space inside the button's borders is to increase the `padding` of the button.

Below I added a value of 15px for the top, bottom, right, and left padding of the button.

I also set a minimum height and width, with the `min-height` and `min-width` properties respectively. Buttons need to be large enough for all different kind of devices.

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border:none; 
    border-radius:10px; 
    padding:15px;
    min-height:30px; 
    min-width: 120px;
  }
```

![Screenshot-2022-02-06-at-10.42.58-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.42.58-PM.png)

## How to Style Button States

Buttons have three different states:

-   `:hover`
-   `:focus`
-   `:active`

It's best that the three states are styled differently and don't share the same styles.

In the following sections I'll give a brief explanation on what each one of the states mean and what triggers them. You'll also see some ways you can style the button for each separate state.

### Here's an interactive scrim about styling button states:

<iframe src="https://scrimba.com/scrim/coa4a454f9e83e63fbe1a80ed?pl=pBe55fP&amp;embed=freecodecamp,mini-header" width="100%" height="420" title="Embedded content" loading="lazy"></iframe>

### How to Style `:hover` States

The `:hover` state becomes present when a user hovers over a button, by bringing their mouse or trackpad over it, without selecting it or clicking on it.

To change the button's styles when you hover over it, use the `:hover` CSS pseudoclass selector.

A common change to make with `:hover` is switching the background-color of the button.

To make the change less sudden, pair `:hover` with the `transition` property.

The `transition` property will help make the _transition_ from no state to a `:hover` state much smoother.

The change of background color will happen a bit slower than it would without the `transition` property. This will also help make the end result less jarring for the user.

```
.button:hover {
      background-color:#002ead;
      transition: 0.7s;
  }
```

In the example above, I used a Hex color code value to make the background color a lighter shade for when I hover over the button.

With the help of the `transition` property I also caused a delay of `0.7s` when the transition from no state to a `:hover` state happens. This caused a slower transition from the original `#0a0a23` background color to the `#002ead` background color.

![hover](https://www.freecodecamp.org/news/content/images/2022/02/hover-2.gif)

Keep in mind that the `:hover` pseudoclass does not work for mobile device screens and mobile apps. Choose to use hover effects only for desktop web applications and not touch screens.

### How to Style `:focus` States

The `:focus` state takes effect for keyboard users - specifically it will activate when you focus on a button by hitting the `Tab` key (`⇥`).

If you're following along, when you focus on the button after pressing the `Tab` key, you'll see the following:

![focus-5](https://www.freecodecamp.org/news/content/images/2022/02/focus-5.gif)

Notice the slight light blue outline around the button when it's gained focus?

Browsers have default styling for the `:focus` pseudoclass, for accessibility keyboard navigation purposes. It's not a good idea to remove that `outline` altogether.

You can however create custom styles for it and make it easily detectable.

A way to do so is by setting the outline color to first be `transparent`.

Following that, you can maintain the `outline-style` to `solid`. Lastly, using the `box-shadow` property, you can add a color of your liking for when the element is focused on:

```
 .button:focus {
    outline-color: transparent;
    outline-style:solid;
    box-shadow: 0 0 0 4px #5a01a7;
}
```

![focusend](https://www.freecodecamp.org/news/content/images/2022/02/focusend.gif)

You can also again pair these styles with the `transition` property, depending on the effect you want to achieve:

```
  .button:focus {
    outline-color: transparent;
    outline-style:solid;
    box-shadow: 0 0 0 4px #5a01a7;
    transition: 0.7s;
}
```

![focusend1](https://www.freecodecamp.org/news/content/images/2022/02/focusend1.gif)

### How to Style for the `:active` State

The `:active` state gets _activated_ when you click on the button by either clicking the computer's mouse or pressing down on the laptop's trackpad.

That being said, look at what happens when I click the button after I've applied and kept the styles for the `:hover` and `:focus` states:

![active-1](https://www.freecodecamp.org/news/content/images/2022/02/active-1.gif)

The `:hover` state styles are applied before clicking when I hover over the button.

The `:focus` state styles are applied also, because when a button is clicked it also gains a `:focus` state alongside an `:active` one.

However, keep in mind that they are _not_ the same thing.

`:focus` state is when an element is being focused on and `:active` is when a user `clicks` on an element by holding and pressing down on it.

To change the style for when a user clicks a button, apply styles to the `:active` CSS pseudoselector.

In this case, I've changed the background color of the button when a user clicks on it

```
.button:active {
    background-color: #ffbf00;
}
```

![activefinal](https://www.freecodecamp.org/news/content/images/2022/02/activefinal.gif)

## Conclusion

And there you have it! You now know the basics of how to style a button with CSS.

We went over how to change the background color and text color of buttons as well as how to style buttons for their different states.

To learn more about web design, check out freeCodeCamp's [Responsive Web Design Certification][12]. In the interactive lessons, you'll learn HTML and CSS by building 15 practice projects and 5 certification projects.

Note that the above cert is still in beta - if you want the latest stable version, [check here][13].

Thanks for reading and happy coding!

[1]: #html
[2]: #default
[3]: #background
[4]: #text
[5]: #border
[6]: #size
[7]: #states
[8]: #hover
[9]: #focus
[10]: #active
[11]: #conclusio
[12]: https://www.freecodecamp.org/learn/2022/responsive-web-design/
[13]: https://www.freecodecamp.org/learn/responsive-web-design