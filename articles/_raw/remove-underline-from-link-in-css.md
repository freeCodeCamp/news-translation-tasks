---
title: How to Remove Underline from a Link in CSS – HTML Style Guide
date: 2024-08-18T10:50:38.140Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/remove-underline-from-link-in-css/
translator: ""
reviewer: ""
---

If you're a web developer, you've probably wanted to get rid of the default underline that appears when you add a link to a page.

<!-- more -->

Fortunately, just like other elements on a web page, you can style the anchor tags responsible for displaying a link.

In this article, I will show you how to remove the underline from a link with CSS. I will also show you the four states links can be in, and how to remove the underline for each one.

## How to Remove Underline from a Link in CSS

By default, this is how the link tag appears in the browser: ![ss1-4](https://www.freecodecamp.org/news/content/images/2022/06/ss1-4.png)

Firstly, it is important to know that the link tag (anchor tag) can be in 4 different states called pseudo-classes:

-   `a:link`: the regular state of the link when it is not active, visited, or hovered on
-   `a:visited`: when the link has been clicked by the user, that is, visited
-   `a:hover`: when the user is hovering on the link
-   `a:active`: when the user is clicking on the link

**N.B.:** The states (pseudo-classes) must appear in the order listed above due to the cascading nature of CSS.

To finally **remove the default underline** of the link, you can target all the pseudo-classes and assign them a `text-decoration` property of `none`.

```
<p>This is a <a href="#">link</a></p>
```

```
 a:link {
      text-decoration: none;
}

a:visited {
      text-decoration: none;
}

a:hover {
      text-decoration: none;
}

a:active {
      text-decoration: none;
}
```

![ss2-4](https://www.freecodecamp.org/news/content/images/2022/06/ss2-4.png)

You can also remove the default underline all in one with the anchor element selector:

```
 a {
       text-decoration: none;
}
```

![ss3-5](https://www.freecodecamp.org/news/content/images/2022/06/ss3-5.png)

You can play with the 4 pseudo-classes of the link tag with this pen:

<iframe width="100%" height="350" src="https://codepen.io/koladechris/embed/bGLPzXr" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe>

## Conclusion

I hope this article helps you learn how to remove the default underline from links in CSS.

If you find the article helpful, don’t hesitate to share it with your friends and family.

Thanks for reading.