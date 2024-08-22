---
title: How to Change Font with HTML
date: 2024-08-22T14:16:26.046Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/how-to-change-font-with-html/
posteditor: ""
proofreader: ""
---

Back in the days of HTML4, there was a `<font>` tag you could use to change the font size, font family, and the color of a text.

<!-- more -->

But with HTML5, the `<font>` tag has been deprecated. So if you want to change anything related to the font, you have to do it with CSS.

In this article, I will show you how to change the font size, font weight, font style, and font family of text using CSS.

## How to Change the Font Size of Text

The font size of text represents how big that text is.

To change the font size of some text, you need to use the `font-size` property and then specify the value in pixels (`px`), `rem`, or `em`.

You can do it using inline CSS like this:

```
<h1 style="font-size: 4rem">freeCodeCamp</h1>
```

You can also do it in embedded or internal CSS:

```
<style>
    h1 {
        font-size: 4rem;
    }
</style>
```

And finally you can do it in external CSS:

```
    h1 {
        font-size: 4rem;
    }
```

To get rid of the default white background and center the text both horizontally and vertically, I wrote this CSS:

```
  body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f1f1f1;
    }
```

In the browser, it looks as shown below: ![ss1-2](https://www.freecodecamp.org/news/content/images/2022/06/ss1-2.png)

## How to Change the Font-weight of Text

Font-weight is the property that helps set how bold or light specific text will be.

You can use `font-weight` to change the lightness or boldness of text, then give it a value such as `normal`, `lighter`, `bold`, or `bolder`. You can also use values like 100, 200, 500, and so on.

Just like font size, you can change the font-weight in inline, embedded, or external CSS.

```
<span>
   <h1 style="font-weight: lighter">freeCodeCamp Lighter</h1>
   <h1 style="font-weight: normal">freeCodeCamp Normal</h1>
   <h1 class="bold" style="font-weight: bold">freeCodeCamp Bold</h1>
   <h1 style="font-weight: bolder">freeCodeCamp Bolder</h1>
</span>
```

```
<style>
    .lighter {
      font-weight: lighter;
    }

    .normal {
      font-weight: normal;
    }

    .bold {
      font-weight: bold;
    }

    .bolder {
      font-weight: bolder;
    }
</style>
```

```
.lighter {
      font-weight: lighter;
    }

    .normal {
      font-weight: normal;
    }

    .bold {
      font-weight: bold;
    }

    .bolder {
      font-weight: bolder;
    }
```

![ss2-2](https://www.freecodecamp.org/news/content/images/2022/06/ss2-2.png)

## How to Change the Font Style of Text

Font style is the typeface variation of the text. This typeface variation could be `normal`, `bold`, or `italic`.

To change the font style, you need the font-style property with a value of `normal`, `oblique`, or `italic`.

Normal is the default font style, so you don’t need to specify it unless you have to override it.

As usual, you can change the font style in inline, internal, or external CSS.

```
<span>
      <h1>freeCodeCamp Normal</h1>
      <h1 style="font-style: oblique">freeCodeCamp Oblique</h1>
      <h1 style="font-style: italic">freeCodeCamp Italic</h1>
</span>
```

```
<style>
    .oblique {
      font-style: oblique;
    }

    .italic {
      font-style: italic;
    }
</style>
```

```
    .oblique {
      font-style: oblique;
    }

    .italic {
      font-style: italic;
    }
```

Here's the output in the browser: ![ss3-2](https://www.freecodecamp.org/news/content/images/2022/06/ss3-2.png)

## How to Change the Font Family of Text

A font family represents a collection of fonts that share the same design and typography.

To change the font family of some text, you need to use the CSS `font-family` property.

You can then choose to do it with inline CSS, internal CSS, or external CSS.

The code snippet below shows how to change the font-family in inline CSS:

````
<h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif">
      freeCodeCamp
</h1>


You can change the font-family in embedded or internal CSS this way:

```css
<style>
    h1 {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>
````

In an external CSS file you can change the font family like this:

```
h1 {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
```

Make sure the external CSS is linked to the HTML file, otherwise it won’t work.

The Verdana font family looks like this inside the Google Chrome browser: ![ss4-1](https://www.freecodecamp.org/news/content/images/2022/06/ss4-1.png)

You might have noticed that there are other font families in the value – Geneva, Tahoma, and sans-serif.

Those are fallbacks the browser can use in case Verdana is not available on the user’s device.

If you don’t like the fonts built into your device, you can get other ones from Google Fonts.

Search for your favorite font and copy the link to it, then paste the link in the `<head>` section of your HTML so you can have access to it in your HTML stylesheet ![ss5-1](https://www.freecodecamp.org/news/content/images/2022/06/ss5-1.png)

In my case, I used the Roboto font like this:

```
 h1 {
      font-family: Roboto, sans-serif;
    }
```

And this is how it looks in the browser: ![ss6-1](https://www.freecodecamp.org/news/content/images/2022/06/ss6-1.png)

## Conclusion

This article walked you through how to change the font size, font weight, font style, and font family of text in inline, internal, or external CSS.

You might be wondering which is best to use between inline, internal, or external CSS.

If you’re working on a small project, you can use internal or embedded CSS, but if you’re working on a big project or in a team, you should not use internal CSS.

This is because it is a best practice to keep your CSS away from your HTML.

Inline CSS is a no-no in most situations because it might affect the readability of your HTML.

It’s also been suggested that inline CSS can negatively affect the SEO of a website.

Thank you for reading.