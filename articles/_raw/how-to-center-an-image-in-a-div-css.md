---
title: CSS Image Centering – How to Center an Image in a Div
date: 2024-08-22T14:13:37.301Z
author: Joel Olawanle
authorURL: https://www.freecodecamp.org/news/author/joel-olawanle/
originalURL: https://www.freecodecamp.org/news/how-to-center-an-image-in-a-div-css/
posteditor: ""
proofreader: ""
---

When you're working on the front-end of a web page, you sometimes need to center an image within a `div` (container).

<!-- more -->

This can become tricky at times. And based on certain conditions, a particular method may not work at some point, leaving you searching for alternatives.

In this article, you will learn how to center an image in a `div` with CSS.

## How to Center a `div` using CSS

You center an image in a `div` in two ways: horizontally and vertically. When you put these two methods together, you will have an entirely centered image:

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660599829888_Untitled](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660599829888_Untitled.png)

By default, web content always begins from the top-left corner of the screen and moves from `ltr` (left to right) – except for certain languages like Arabic, which goes from `rtl` (right to left).

Let’s start by seeing how to center an image within a `div` horizontally. Then we'll see how to center vertically. Finally, we'll see how you can do both together.

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702367688_image](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702367688_image.png)

### How to Center an Image in a Div Horizontally with Text-align

Suppose you have a `div` in which you place your image this way:

```html
<div class="container">
    <img src="./fcc-logo.png" alt="FCC Logo" />
</div>
```

And apply basic CSS styling so your image is visible:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
}
.container img {
    width: 100px;
}
```

The `text-align` method won't work in all cases, as you typically use it to center text. But when you have your images within a block level container like a `div`, then this method will work:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    text-align: center;
}

.container img {
    width: 100px;
}
```

This works by adding the `text-align` property alongside its value of `center` to the container and not the image itself.

### How to Center an Image in a Div Horizontally with Margin-auto

Another method that you can use to horizontally center an image within a `div` (container) is the `margin` property with the value of `auto`.

The element will then take up the **specified** `width`, and the remaining space will be split equally between the left and right margins.

You would usually apply this method to the image itself and not the container. But unfortunately, this property alone doesn't work. You also need to specify the `width` the image will take first. This lets the margin know the remaining width the container has so that it can be split equally.

Secondly, `img` is an inline element, and the `margin-auto` property set does not affect inline-level elements. This means you must first convert it to a block-level element with `display` property set as `block`.

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
}

.container img {
    width: 100px;
    margin: auto;
    display: block;
}
```

### How to Center an Image in a Div Horizontally with the Position and Transform Properties

Another method you can use to position an image horizontally is the `position` property alongside the `transform` property.

This method can be very tricky, but it works. You must first set the container’s `position` to `relative`, then the image to `absolute`.

Once you do this, you can now move the image to whichever position you wish using either the `left`, `top`, `bottom`, or `right` properties on the image.

In this case, you only want to move the image to the center horizontally. This means you would move the image via the `left` to 50% or `right` to -50%:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
}
```

But when you check your image, you will notice that the image is still not perfectly placed in the center. This is because it started from the 50% mark, which is the center position.

In this case, you need to use the `transform-translateX` property to adjust it to get the perfect center horizontally:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

### How to Center an Image in a Div Horizontally with Display-Flex

CSS flexbox makes it easier for you to design flexible, responsive layout structures without using float or positioning. We can also use this to place an image in the center horizontally of a container using the display property with flex as its value.

But this alone doesn't work. You also need to define the position where you want your image. This could be `center,` `left` or maybe `right`:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    justify-content: center;
}

.container img {
    width: 100px;
    height: 100px;
}
```

**Note:** The `display: flex` property is not supported in older versions of browsers. You can read more [here][1]. You’ll also notice that the width and height of the image are defined to ensure the image doesn't shrink.

Let’s now learn how to center an image in a `div` vertically. Later we'll see how to center an image in a `div` horizontally and vertically together, making it a perfect center.

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702330431_image](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702330431_image.png)

### How to Center an Image in a Div Vertically with Display-Flex

Just like how you were able to center the image horizontally with the display-flex method, you can also do the same vertically.

But this time around, you won’t need to use the `justify-content` property. Rather you'll use the `align-items` property:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    align-items: center;
}

.container img {
    width: 100px;
    height: 100px;
}
```

For this method to work, the container must have a specified `height` which you will use to calculate the height and know where the center is located.

### How to Center an Image in a Div Vertically with the Position and Transform Properties

Similar to how you used the `position` and `transform` properties earlier to place your image in the center horizontally, you can also do the same vertically.

But this time around, you won't use `left` or `right,`. Instead you will use `top` or `bottom` alongside `translateY` rather than `translateX`:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

You have learned how to center an image within a `div` horizontally and vertically using all possible methods. Let’s now learn how to center both horizontally and vertically.

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702293626_image](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702293626_image.png)

### How to Center an Image in a Div Horizontally and Vertically with Display-Flex

The `display-flex` property is a combination of how you'd center the image vertically and horizontally.

For the flex method, this means you will use both the `justify-content` and `align-items` properties set to `center`:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container img {
    width: 100px;
    height: 100px;
}
```

### How to Center an Image in a Div Horizontally and Vertically with the Position and Transform Properties

This is also very similar, as all you have to do is combine both ways you were able to center vertically and horizontally:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
```

You can also combine the `translateX` and `translateY` by using `translate(x,y)`:

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## Wrapping Up

In this article, you have learned how to center an image in a div vertically, horizontally, or both.

You will often use the Flexbox method when moving an image to the center because the `position` method can distort your web page and works very trickily.

You can learn more about the [CSS position method here][2] and then more about the [flexbox method here.][3]

Have fun coding!

[1]: https://caniuse.com/#search=display%20flex
[2]: https://www.freecodecamp.org/news/css-position-property-explained/
[3]: https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/