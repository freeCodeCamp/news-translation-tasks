---
title: Inline Elements and Block Elements in HTML - Explained
date: 2024-09-15T04:03:36.909Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/inline-elements-and-block-elements-in-html-explained/
posteditor: ""
proofreader: ""
---

## **Block and Inline Elements**

<!-- more -->

Let's understand block and inline elements using the below examples:

#### **Code Sample with Output:**

![Block Output](https://user-images.githubusercontent.com/16048167/31070017-6f2cf0a2-a77c-11e7-9de6-110b9d0b488d.PNG)

### Block-Level Element:

A Block-level element occupies the entire space of the parent (container) such as `<div>` and `<p>` in the example .

Note that both `<div>` and `<p>` start from a new line each time, forming a **block-like** structure. Block-level elements begin on new lines.

Common **block-level elements** are `<div>`,`<p>`,`<article>`,`<section>`,`<figure>`,`<footer>` etc.

### Inline Element:

Inline as the name says “included as a part of the main text and not as a separate section”. Inline elements occupy the space as needed within the space defined by the main element. Unlike block-level elements, they do not begin on new lines.

Some of the **inline elements** are `<a>`,`<span>`,`<img>`,`<code>`,`<cite>`,`<button>`,`<input>` etc.

### Code Sample with Output:

![Inline Output](https://user-images.githubusercontent.com/16048167/31069389-e1e3fc10-a779-11e7-86d2-6685e0061f52.png)

**_Note_** : Block-level elements may contain other block-level elements or inline elements. Inline elements **cannot** contain block-level elements.

### Changes In HTML5

While an understanding of block and inline elements is still relevant, you should be aware that these terms were defined in prior versions of the HTML specification.

In HTML5, a more complex set of “content categories” replaces block-level and inline elements. Block-level elements are largely placed in the “flow content” category in HTML5, while inline elements correspond to the “phrasing content” category.

For more information on the new content categories in HTML5, including flow content and phrasing content, refer to the [Content categories page on the Mozilla Developer Network.][1]

Read more about HTML [here][2].

[1]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories
[2]: https://guide.freecodecamp.org/html