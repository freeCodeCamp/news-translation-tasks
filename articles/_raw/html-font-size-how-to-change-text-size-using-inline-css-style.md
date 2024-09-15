---
title: HTML Font Size – How to Change Text Size Using Inline CSS Style
date: 2024-09-15T04:02:54.104Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/html-font-size-how-to-change-text-size-using-inline-css-style/
posteditor: ""
proofreader: ""
---

In HTML, the font you choose will play a major role in the look and feel of your web pages.

<!-- more -->

You get to pick the font's color, weight, size, and so on. And all these features make your websites and apps look better and more presentable to the user.

With the `font-size` property in CSS, you can change how big or small the text is on the web page. You can use this property in any type of CSS you are writing – external, internal, or inline.

In this article, I will show you how to change the size of the text with the `font-size` property in inline CSS.

## What is inline CSS?

Inline CSS is one of the three different ways you can use to style any HTML element.

Instead of targeting the element with a class or id attribute, or the element itself as the selector and styling it with that, you put all the CSS styles in the opening tag.

In addition, you have to make sure all the properties and values of your stylings are inside the `style` attribute. This `style` attribute is one of the numerous attributes accepted by all HTML tags.

In the example below, I change the background color of the text to crimson, the text color to `#f1f1f1` (light-grey), and the font-weight to `bold` with inline CSS.

```
<p style="background-color: crimson; color: #f1f1f1; font-weight: bold">
      Hello Campers...
</p>
```

![inline-styling-example](https://www.freecodecamp.org/news/content/images/2021/09/inline-styling-example.png)

By the way, my browser is zoomed-in to a level of 400% which is why everything appears so big. I didn’t apply any additional styles to accomplish that :)

## How to Change Text Size Using Inline CSS

To change the size of your text with inline CSS, you have to do it with the `style` attribute. You type in the `font-size` property, and then assign it a value.

There are built-in values such as `large`, `larger`, `medium`, `small`, `x-large`, and so on: ![inbuilt-properties](https://www.freecodecamp.org/news/content/images/2021/09/inbuilt-properties.png)

In the code snippet below, I change the size of the “Hello Campers…” text to x-large, one of the built-in values of the font-size property.

```
<p style="font-size: x-large">Hello Campers...</p>
```

![font-style-with-inbuilt-value](https://www.freecodecamp.org/news/content/images/2021/09/font-style-with-inbuilt-value.png)

You can also set the value of the `font-size` property using a number with any unit such as pixels (px), rem, or em.

It’s better to go with numbered values because they give you more freedom to pick any font size you want.

In the code snippet below, I changed the size of the text to `30px` with inline CSS:

```
<p style="font-size: 30px">Hello Campers...</p>
```

![font-style-with-numbered-value](https://www.freecodecamp.org/news/content/images/2021/09/font-style-with-numbered-value.png)

## Conclusion

In this article, you learned how to change text size with inline CSS and the font-size property. You also saw how you can assign values to the font-size property.

Just a heads up, though: inline CSS is great for styling, but you should not rely heavily on it as it makes your HTML hard to read, especially if you are working in a team. You don’t want to be the only one who will be able to read your own code.

Be aware that it also overrides any styling set with internal or external styling. You should use external style or internal style instead, as they make your HTML and CSS codes separate, which is better for readability.

While assigning values to the `font-size` property, it is better to assign the values in rem units instead of `px`, for example. This is because when you use `rem`, the browser will be able to make font size adjustments as the user zooms in or out, which won't happen when you use `px`.

Thank you for reading, and keep coding.