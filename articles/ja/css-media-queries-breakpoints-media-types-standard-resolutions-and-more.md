---
title: Media Query CSS Tutorial – Standard Resolutions, CSS Breakpoints, and
  Target Phone Sizes
date: 2025-03-18T05:33:15.540Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/
posteditor: ""
proofreader: ""
---

By Cem Eygi

<!-- more -->

In the past, building a website was much simpler. Today a website’s layout should adapt itself not only to computers, but also tablets, mobile devices, and even TVs.

Making a website with an adaptable layout is called Responsive Web Design. And CSS Media Queries are one of the most important parts of Responsive Design. In this article, we are going to take a closer look at Media Queries and how to use them in CSS.

If you prefer, you can watch the video version below:

<iframe width="560" height="315" src="https://www.youtube.com/embed/P_vkS4UJNDk" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

## What is a Media Query?

A Media query is a CSS3 feature that makes a webpage adapt its layout to different screen sizes and media types.

### Syntax

```
@media media type and (condition: breakpoint) {
  // CSS rules
}
```

We can target different media types under a variety of conditions. If the condition and/or media types meet, then the rules inside the media query will be applied, otherwise, they won’t.

The syntax may seem complicated at the beginning, so let’s explain each part one by one in detail…

### @ Media Rule

We start defining media queries with @media rule and later include CSS rules inside the curly braces. The @ media rule is also used to specify target media types.

```
@media () {
  // CSS rules
}
```

### Parenthesis

Inside the parenthesis, we set a condition. For example, I want to apply a larger font size for mobile devices. To do that, we need to set a maximum width which checks the width of a device:

```
.text {
  font-size: 14px;
}

@media (max-width: 480px) {
  .text {
    font-size: 16px;
  }
}
```

Normally, the text size will be 14px. However since we applied a media query, it will change to 16px when a device has a maximum width of 480px or less.

**Important: Always put your media queries at the end of your CSS file.**

### Media Types

If we don’t apply a media type, the @ media rule selects all types of devices by default. Otherwise, Media types come right after the @ media rule. There are many kinds of devices but we can group them into 4 categories:

-   all — for all media types
-   print — for printers
-   screen — for computer screens, tablets and, smart-phones
-   speech — for screen readers that “read” the page out loud

For example, when I want to select only screens, I will set the screen keyword right after the @ media rule. I also must concatenate the rules with the “and” keyword:

```
@media screen and (max-width: 480px) {
  .text {
    font-size: 16px;
  }
}
```

### Breakpoints

Breakpoints are maybe the most common term you will hear and use. A breakpoint is a key to determine when to change the layout and adapt the new rules inside the media queries. Let’s go back to our example at the beginning:

```
@media (max-width: 480px) {
  .text {
    font-size: 16px;
  }
}
```

Here, the breakpoint is 480px. Now the media query knows when to set or overwrite the new class. Basically, if the width of a device is smaller than 480px, the text class will be applied, otherwise, it won’t.

#### Common Breakpoints: Is there a Standard Resolution?

One of the most commonly asked questions is “Which breakpoint should I use?”. There are a ton of devices on the market so we can’t and we shouldn’t define fixed breakpoints for each of them.

That’s why we can’t say that there is a standard resolution for devices, but there are some commonly used breakpoints in daily programming. If you’re using a CSS framework (like Bootstrap, Bulma, etc.) you can also use their breakpoints.

Now let’s see some common breakpoints for widths of devices:

-   320px — 480px: Mobile devices
-   481px — 768px: iPads, Tablets
-   769px — 1024px: Small screens, laptops
-   1025px — 1200px: Desktops, large screens
-   1201px and more —  Extra large screens, TV

As I said above, these breakpoints can differ and there is no standard exactly defined, but these are some commonly used ones.

## Wrapping up

Responsive Design is a must in today’s web design and development field. Media queries are one of the most important parts of building responsive layouts, and I hope you find my post helpful for understanding how media queries work.

**If you want to learn more about web development, feel free to [subscribe to my channel.][1]**

Thank you for reading!

[1]: https://www.youtube.com/channel/UC1EgYPCvKCXFn8HlpoJwY3Q?view_as=subscriber