---
title: Everything You Need to Know About Web Accessibility
date: 2025-07-17T01:59:58.317Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/KunalN25/
originalURL: https://www.freecodecamp.org/news/the-web-accessibility-handbook/
posteditor: ""
proofreader: ""
---

The web is a great place to access information and connect with people. It has opened up countless opportunities, making life more convenient in many ways.

<!-- more -->

But not everyone experiences the web in the same way. Websites are difficult to use for people who have visual, hearing, or mobility impairments. These barriers make it harder to navigate content, and in some cases, make the web completely inaccessible.

This handbook will help you understand accessibility and how to implement it. Whether you are a beginner or an intermediate developer, you'll learn basic accessibility practices and some advanced techniques. This will help you make your website more inclusive.

Let’s get started.

## Table of Contents

-   [What is Accessibility?][1]
    
-   [Basic Accessibility Practices][2]
    
    -   [Semantic and Non-Semantic HTML][3]
        
    -   [Text Content][4]
        
    -   [Page Layouts][5]
        
    -   [Interactive Elements][6]
        
    -   [Keyboard Accessibility][7]
        
    -   [Form Labels][8]
        
    -   [Links][9]
        
    -   [Table Accessibility][10]
        
-   [Additional CSS and JavaScript Practices][11]
    
    -   [Styling Form Elements][12]
        
    -   [Color Contrast][13]
        
    -   [JavaScript Practices][14]
        
-   [Advanced Accessibility Practices: WAI-ARIA][15]
    
    -   [The role attribute][16]
        
    -   [aria-\* attribute][17]
        
    -   [Dynamic Content Attributes][18]
        
    -   [Form Validation and Errors][19]
        
    -   [Using non-semantic elements as buttons][20]
        
-   [Multimedia Accessibility][21]
    
-   [Mobile Accessibility][22]
    

## What is Accessibility?

Accessibility (A11y) is an important practice in web development that aims to make the website usable (accessible) for all people. This includes people who have disabilities that make it difficult for them to use websites. By making a website accessible to everyone, including people with disabilities, we ensure that they have the same opportunities as we do. We’re also helping to make the web a more inclusive place overall.

What kind of disabilities should we consider? In broad terms:

-   Visual impairments: blindness, blurred vision, and colour blindness
    
-   Hearing impairments: low to no hearing
    
-   Mobility Impairments: difficulty with physical movement(s)
    
-   Cognitive Impairments: like Dyslexia and ADHD
    

People with visual impairments commonly use devices like [screen readers][23] to visualise and understand a website’s content, for example. So a big part of web accessibility is designing a website that can be easily accessed by a screen reader.

There are various practices that you, as a developer, can follow to make a website accessible, which I’ll cover in this handbook.

## Basic Accessibility Practices

Accessibility is not just an added feature on top of a website you’ve already developed. It is a practice that needs to be followed throughout the development process. Whenever you are creating content on the web page, ask yourself if it is really accessible.

Another important point is that accessibility is not just for people with impairments. It benefits everybody by making a website easier to use, thus improving overall user experience.

How do you achieve good accessibility? Well, there are some practices that you should follow while writing HTML, CSS, and JavaScript code. We’ll discuss some basic practices in this section.

Before we get into it, let’s start by understanding what semantic and non-semantic HTML tags are:

### Semantic and Non-semantic HTML

Non-semantic HTML tags do not convey specific meaning or purpose. They can be used for anything, depending on the CSS styling and JavaScript functionality. Examples of non-semantic tags are: `<div>` and `<span>`. These tags are mostly used as containers for wrapping other elements.

Semantic HTML tags clearly describe their purpose to the browser and the developers through their names. They improve code readability and also help with [SEO (Search Engine Optimisation)][24]. Examples of semantic tags include: `<button>`, `<a>`, `<header>`, `<footer>`.

You can find a list of all semantic elements [here][25].

#### Importance of using semantic HTML

An essential part of accessibility is using the correct HTML element for its intended purpose. This means, for example, using a `<button>` tag when you want to render a button.

But why use semantic elements? After all, you can use CSS to make a `<div>` look like a button. True, but using semantic elements is important for the following reasons:

-   Semantic elements have built-in styles and functionality that you otherwise would need to add through CSS and JavaScript. This makes them easier to use.
    
-   They make the code easier to read and maintain, as you can actually see the elements being used rather than seeing a bunch of divs everywhere.
    
-   Screen readers can easily read and interpret semantic elements, helping people with visual impairments.
    

In the following sections, we’ll understand basic accessibility practices for each type of content you render on HTML. We'll explore how to use the correct HTML tags for each situation, helping you see how choosing the right tag for its purpose improves accessibility.

Feel free to test each example with a screen reader. On Mac, use ⌘+F5 to activate VoiceOver, Mac’s built-in screen reader. For Windows, you can use the built-in screen reader called Narrator by pressing Ctrl + Windows Key + Enter.

### Text Content

When writing text content, it’s important to use the correct elements for headings, paragraphs, and lists. Let’s understand with the following examples.

Let’s say you write headings and paragraphs in the following way:

```
<span id="heading1">Heading 1</span>
<br />
<br />
<span id="heading2">Heading 2</span>
<br />
<br />
This is one paragraph
<br />
<br />
This is another paragraph
```

This approach has the following problems:

-   The screen reader won’t be able to distinguish between headings and paragraphs – it would just read out the contents in one go, thus confusing people who depend on screen readers.
    
-   It’s difficult to style individual paragraphs, since there are no selectors. Even if you add a `<span>` to each one, it requires extra CSS styling.
    
-   It also contains unnecessary line breaks which can be avoided by using the right elements.
    

The above code is an example of bad semantics. This is what you should do instead:

```
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<p>This is one paragraph</p>
<p>This is another paragraph</p>
```

Here, we have used the right semantic elements for the text content, which has the following benefits:

-   A screen reader is able to distinguish the headings from the paragraph text by reading out the heading level before reading the text.
    
-   `h1`, `h2`, and `p` come with built-in styles and they each render on a new line. This eliminates the need to use line breaks.
    
-   The code looks cleaner and is much more readable.
    

#### Lists

To render a list of items, we have the following approaches. The non-semantic approach just groups a bunch of divs together and applies CSS styles to them.

```
<h2>TODO List</h2>
<div id="mylist">
  <div>Make Breakfast</div>
  <div>Do Laundry</div>
  <div>Complete blog post</div>
</div>
```

Again, this achieves the desired output but it’s difficult for screen readers to identify this content as a list of items. Instead, use semantic elements:

```
<h2>TODO List</h2>
<ul id="mylist">
  <li>Make Breakfast</li>
  <li>Do Laundry</li>
  <li>Complete blog post</li>
</ul>
```

This helps screen readers identify the element as an unordered list and read out each item. `<ul>` also comes with default styles and bullet points for each list item. You can also use `<ol/>` for numbered lists, where the screen reader reads out the number on each list item.

You can test the above examples with Mac’s VoiceOver to see the difference.

#### Emphasized Text

Emphasized text refers to highlighted text that gives importance to certain words or phrases within a piece of content. When adding emphasized text, it’s important to use the right semantic elements like [`<strong>`][26] and [`<em>`][27].

```
<p>For best results, use <em>fresh ingredients</em> when cooking.</p>

<p>The process of water turning into gas is called <strong>evaporation</strong>.</p>
```

These elements add some built-in styles to the text like _bold_ and _italic_. Also, if you test with VoiceOver, you’ll notice that it puts some emphasis on the text inside these elements. This helps people using screen readers identify emphasised text.

You may also add some colour to the emphasized text. But, there’s no need to add a lot of styles, else it may cause confusion. Visit [MDN Docs-Emphasis and Importance][28] to learn more about text emphasis in HTML.

#### Abbreviations

Next, when writing abbreviations (or acronyms), it’s a good practice to make them visually different and also include the full expansion of the acronym. You can also add some simple styling to the abbreviation. Learn more about abbreviations in [MDN Docs-Abbreviations][29].

#### Other best practices

Apart from the above, there are a few other practices that are good to follow:

-   Use clear language, wherever possible. For example, expand abbreviations: instead of Jan, write January.
    
-   When writing ranges, avoid using dashes if possible, write 1 to 5 instead of 1-5.
    
-   Avoid using characters that may confuse users when a screen reader reads them out, for example `~` or `*`.
    
-   Avoid excessive exclamations and emojis.
    

Also, when writing CSS for text content, remember these practices:

-   When using styles like font sizes, line height, and letter spacing, ensure that the text is comfortable to read.
    
-   Your headings should stand out from the other text, in case you are using CSS styles. Usually, this is achieved by just using the right heading tags.
    
-   Text color should have 4.5:1 contrast with the background. See the [Color Contrast][30] section for details.
    

If you want more tips on styling text, visit [MDN Docs - CSS Text Styling][31].

### Page Layouts

Page layout is concerned with how the content is laid out on the screen. When you start designing a web page, your first thought is how your content should be positioned on the screen.

Typically, a web page consists of a header, nav bar, footer, main content, and sidebar. In the _bad old days_ (phrase borrowed from the docs, sorry), developers used tables to create page layouts consisting of these elements.

But tables made the layouts incredibly complex and hard to maintain. Table layouts are also difficult for screen readers to read, affecting accessibility.

Nowadays, there are much better ways to write page layouts. If you are including a header, nav bar, and footer along with the main content, you can use the following semantic elements:

```
<header>
  <h1>Header</h1>
  <nav>
    <!-- main navigation in here -->
  </nav>
</header>

<!-- Here is our page's main content -->
<main>
  <!-- Main content here -->
</main>

<footer>
  <!-- footer content in here -->
</footer>
```

Let’s understand each tag used above (skip if you already know):

-   `<header>`: Represents the introductory section of a webpage, typically containing headings, logos, or navigation links.
    
-   `<nav>`: Defines a navigation section that contains links to other parts of the website or page, providing easy access to important sections.
    
-   `<main>`: Represents the main content area that focusses on the primary purpose of the page or the website, excluding common elements like header, footer, or sidebar (may include sidebar depending on the website).
    
-   `<footer>`: Represents the bottom section of the web page, typically containing metadata, copyright information, or links to related resources.
    

These elements are called [sectioning elements][32]. Following are advantages of using these elements:

-   The layout is clear with each element clearly describing its purpose, making the code readable and maintainable.
    
-   Using the right semantic elements makes screen readers identify each part of the layout, thus helping visually impaired users understand how the website is structured.
    

Of course, you can write the above layouts by using divs, but sectioning elements provide good semantics and help users understand the type of content they are navigating.

### Interactive Elements

These consist of elements through which a user interacts with the web page. These elements include buttons, form fields, links, and so on.

#### Keyboard Accessibility

Each interactive element on a web page should be navigable through the keyboard. This gives a user flexibility while navigating your website. Keyboard accessibility is really helpful for people with mobility impairments that may struggle to use a mouse.

For instance, visit [this][33] page and try to navigate to each interactive element by pressing Tab on your keyboard. You can also press Enter/Spacebar to click on a button or a link. This should give you an idea of what a keyboard-accessible website looks like.

For the most part, using the right semantic elements should ensure keyboard accessibility, as they come with built-in functionality. Check out the following example:

```
<p>
  Visit my blog at 
  <a href="https://www.freecodecamp.org/news/author/KunalN25/">freecodecamp.org</a>
</p>

<button>Click me</button>
<button>Click me again</button>

<div>
  <input type="text" placeholder="Enter your name" />
</div>
```

Here, we have used the correct semantic elements for the hyperlink, button, and input element. All these elements can be accessed through Tab and interacted with using Enter/Spacebar. Check out other form-related elements in this [list][34].

Some people use a `div` or `span` and make them look like an anchor tag or a button with CSS styling. But this is bad for accessibility for two reasons:

-   `div` and `span` are not tab-able by default. So, even if you do make a `div` look like a button, the user cannot navigate to it using the keyboard.
    
-   Screen readers won’t be able to identify them as buttons, while in the case of semantic elements, they read these elements out as buttons or links.
    

But if you absolutely have to use a `div` to create a clickable element, include the following attributes:

```
<div id="customButton" role="button" tabindex="0">Click me</div>
```

Here, we have added two attributes, `tabindex` and `role`. We’ll understand the `role` attribute in a later section.

The [`tabindex`][35] attribute takes an integer that specifies the tab order of tab-able elements, instead of the default top to bottom tab order. A positive integer means the element is focussed in an order specified by the attribute’s value.

But using tabindex to change the default tab order is not recommended, as it may cause confusion for keyboard navigators and affect accessibility. And frankly, it’s not necessary.

You should only ever use the following two values:

-   `tabindex=”0”` makes an element tab-able which means it can be accessed through a keyboard in the natural tab order.
    
-   `tabindex=”-1”` means the element is not reachable via keyboard navigation.
    

These attributes make the `div` behave like a button, but there’s a small piece of JS code you still need to add to make the button clickable via Enter/Return:

```
document.getElementById("customButton").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.activeElement.click();
  }
});
```

Here, we have added an event listener to the element that listens for the keydown event. If the key pressed is Enter, then it calls the element’s `onclick` method.

If you are using a non-semantic element as a button, you need to add this extra code to make it work like a button. So, only use it if it's absolutely necessary. Otherwise, it's always better to use the correct semantic element in the first place.

Keyboard Accessibility is important for audio and video controls too. We’ll discuss this in the [Multimedia Accessibility][36] section.

### Form Labels

A form label is some text that describes what you need to enter in a form field. Adding labels to form fields is a necessary practice since it lets the user know how to fill the form. But using the right semantic elements is important.

You could do the following and still achieve the desired output:

```
Enter name: <input type="text" id="name" name="name" />
```

This is not good for screen reader users, as it does not read out what the input field is for. Even if it reads out “Enter name”, the user may not associate it with the input field. Instead, use the `<label>` element for form labels.

```
<div>
      <label for="name">Enter name:</label>
      <input type="text" id="nameField" name="name" />
    </div>
```

The `for` attribute associates the label with the input field. With this, when the screen reader’s focus is on the input field, it reads out the label, followed by “edit field” to let the user know they should enter their name in the input field.

Check out the [form with the label][37] and [form without the label][38] in these examples for more clarity. Use Mac’s Voiceover (⌘+F5) or Windows’ Narrator (Ctrl+Windows+Enter) to see how it reads out the form elements.

Using `<label>` offers more advantages:

-   By linking a `<label>` to an input field with the `for` attribute (clickable association), clicking on the label focuses on the input field.
    
-   Clickable association with input field helps the user’s select small inputs like [checkboxes][39] or [radio buttons][40].
    
-   It follows semantic HTML and specifies that the text is being used as a form label.
    

Lastly, remember that the label text should clearly describe what the user should enter into the field. For examples, “Enter name” or “Enter email”.

This applies to buttons as well. Ensure that button text is descriptive enough to tell the user what they are clicking on. Vague texts like “Click me!” or “Click here!” are not helpful. Examples of descriptive text are “Submit Form” or “Download Report” that give the users a clear idea of the button’s action.

Along with these, links also come under interactive elements. But since there are a lot of examples for Links, I’ll discuss them in their own section now.

### Links

Links are a key part of web pages as they allow the user to navigate the website. Links serve different purposes: going to a different page in the same website, going to an external website, or downloading something. In this section, you’ll learn about several practices with links that contribute towards accessibility.

#### Linking to External Websites

When you add a link that lets users open an external website, including the `target=_blank` attribute opens the link in a new tab.

```
<a href="https://www.wikipedia.org/" target="_blank"> Wikipedia </a>
```

This is helpful for users as they don’t need to exit the website, saving them from the hassle of navigating back to the website.

Also, if your link opens in a new tab, it’s a good idea to mention it so the screen readers can read it out and help visually impaired users.

```
<a href="https://www.wikipedia.org/" target="_blank" >
Wikipedia (opens in new tab)
</a>
```

Similarly, if your link opens a non-HTML file, like a pdf or docx, you should mention it:

```
<a target="_blank" href="jan-salary-slip.pdf">
Salary-January (PDF)
</a>
```

Alternatively, you can use an icon to indicate a link opening in new tab.

```
<a href="https://www.wikipedia.org/" target="_blank">
  Wikipedia
  <img src="new-tab-icon.png" alt="Opens in new tab" style="width:16px; height:16px; margin-left:5px;">
</a>
```

When using an icon, make sure that you include the alt attribute with description about the image. We’ll understand its purpose in the [Multimedia Accessibility][41] section.

#### Skip Links

A skip link is a link element placed at the top of a page that links directly to the main content of the page. This allows the users to skip the headers and all the navigation menus, and directly jump to the main content of the page. This is helpful on websites where there’s lot of repetitive content on top like menus or banners.

Skip links are especially helpful for people who are visually impaired and who might be using screen readers. These links provide a way to bypass repetitive navigation menus and directly access the main content. This also helps keyboard navigators, thus saving time and enhancing the user experience.

To add a skip link, add an anchor tag at the very top, just under the body tag, and link it to the main content.

```
<body>
 <a href="#main">Skip to main content</a>
    <header>
      <h1>Page Title</h1>
      <nav>
        <ul id="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <!-- other nav links -->
        </ul>
      </nav>
    </header>
    <main id="main">
      <!-- Main Content -->
    </main>
</body>
```

The skip link is keyboard accessible and is also read out by the screen reader. Clicking on it takes you straight to the main content. Visit [WebAIM][42] and press Tab on your keyboard to see skip links in action.

#### Link Styling

By default, links created with the anchor tag are visually different from non-link text. This is because the anchor tag has built-in styles like colour, [text-decoration][43], focus-ring (displays when you tab on to the link with the keyboard) and hover effects.

Links should look different from the other text so they’re easily distinguishable. As you saw above, the browser does that for you, so you don’t need to do much. But if you are adding custom styles to the link that fit in better with your theme, you need to follow some best practices:

-   Links should have different colors for default, [visited][44], [focus][45] and [hover][46] states.
    
-   Link text color should be different from the non-link text and should have different styling.
    
-   Link text color should have a contrast of 3:1 between other text and 4.5:1 contrast between background color. See the [Color Contrast][47] section for more understanding
    

An example of custom styling for links is shown below (from the Docs):

```
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

With the help of [pseudo-classes][48], this adds different styles for when link is hovered, previously visited, focussed (with the keyboard), or active (when the link is being clicked).

You can experiment with different colors and styles, but don’t remove the `cursor: pointer` or `outline` properties. Both are important for people using keyboard navigation.

Remember, links already have built-in styles for all the link states. Only add your own if you want something in line with your website’s theme.

#### Avoid using onclick handlers

Links are used to navigate to another web page on the same website or navigate to an external website. Specifying the link in the [href][49] attribute does this for you without any need to add JavaScript code.

But some people add an `onclick` attribute to anchor elements, to make them behave like buttons and set `href=”#”` or `href="javascript:void(0)"` to avoid page refresh. This causes unexpected behaviour and may lead to the following problems:

-   Copying or dragging this link adds an unnecessary `#` or `void(0)` to the URL, which does not make sense.
    
-   Clicking the link immediately scrolls the page to the top, which may lead to the user losing track of where they were.
    
-   If JavaScript is still downloading, clicking the link does nothing and the web page becomes unresponsive.
    

It is also bad for semantics and accessibility, as people using screen readers may get confused. If you want to add JavaScript functionality on click of an element, just use a `<button>`. Only use links when navigating to a proper URL.

#### Meaningful Link Text

Similar to buttons, when writing link text, keep it meaningful and descriptive and avoid using “Click here” or “Click this”.

```
<p>
  For more information about accessibility
  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    click here
  </a>
</p>
```

Instead of the above, do this:

```
<p>
  For more information about accessibility, visit
  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    MDN Docs - Accessibility
  </a>
</p>
```

Check out the [Good Links][50] and [Bad Links][51] examples from the docs. You can also test them with VoiceOver (⌘+F5).

#### Link Proximity

If your web page has a lot of interactive elements like links and buttons, ensure that they are spaced properly to prevent accidental clicks. This helps people with [Motor Control Issues][52] that may click on the wrong link.

Using the [`margin`][53] property should be enough to ensure spacing.

### Table Accessibility

In the page layouts section, we saw that using tables for creating page layouts is an outdated practice. However, tables can still be used if you want to display a large amount of data in tabular form. Incorporating accessibility in tables helps screen readers interpret them and help visually impaired users.

Check out [MDN Docs - Table Accessibility][54] to understand best practices.

## Additional CSS and JS Practices

Most of your accessibility goals should be achieved with HTML alone. But there are certain things to keep in mind when writing CSS and JavaScript to ensure you don't break accessibility.

### Styling Form Elements

When styling form elements, remember the following:

-   Do not remove the default styles for focus outlines, hover, and disabled state in form elements. You may modify them as per your site design, but they should still be visible.
    
-   Ensure that your labels and placeholder texts are visually clear. Follow colour contrast practices (next section).
    
-   For clickable areas like buttons and inputs, ensure they are large enough so the user can click comfortably.
    
-   Success and Error messages should be physically distinguishable from labels and other text content.
    

### Color Contrast

When you choose colors for your website, your text and background colour should have a good colour contrast. A good color contrast ensures that the text is easily readable by all users (and it also helps people with color blindness in particular).

The WCAG (Web Content Accessibility Guidelines) recommends the following contrast ratios:

![Recommended Color contrast ratios](https://cdn.hashnode.com/res/hashnode/image/upload/v1736175276741/40ee7fe4-110c-4dd1-95f3-4cb7620de032.png)

Let’s understand the colour contrast ratings:

-   AA rating refers to the minimum ratio your colour contrast should be such that the site’s content is readable. As you can see in the table above, this requires a 4.5:1 minimum ratio for body text, a 3:1 ratio for large-scale text, and a 3:1 ratio for active user interface components and graphical objects.
    
-   AAA rating is the ideal standard for accessibility that ensures high contrast for your website. This requires a 7:1 ratio for body text, a 4.5:1 ratio for large-scale text, and isn’t defined for UI components/graphical objects.
    

Choose a contrast ratio that aligns well with your design, but try to keep it to at least AA rating. To check colour contrast ratio between two colors, you can use the following tools:

-   [Color Contrast Checker][55]
    
-   [Chrome Developer Tools][56] - Identifies text in your website not meeting AA and AAA ratings
    

### JavaScript Practices

#### Mouse-specific events

When you have functionality triggered by events like [mouse-over][57] and [mouse-out][58], they cannot be accessed by people that depend on keyboard navigation. So, to make the functionality accessible by keyboard, you need to add the same event handlers to events like [focus][59] and [blur][60].

#### Client side form validations

When you submit data through a form, the data is validated to check if you have entered valid data. Often, when the data is sent to the server, the server validates the data and lets the UI know if the validation has failed.

To make the website user-friendly, it helps to add form validations on the client-side, so users can get instant feedback if they have entered incorrect data, since the server-side mechanism may take time. This is a very small step towards improving user experience.

Check out the [Form Validation][61] Example to understand more.

Apart from the above, one thing you should remember is not to use JavaScript for anything and everything. JavaScript can be used to generate any form of HTML and dynamically apply CSS styling. It is very helpful if you have dynamic content on your website.

But if you have too much HTML generated by JavaScript, it gets hard for screen readers to keep track of the dynamic changes. This makes the website difficult to read for impaired users. So, make sure you don't overuse JavaScript when simple HTML would be enough.

Accessibility for dynamic content updates is covered in the next section.

## Advanced Accessibility Practices: WAI-ARIA

As applications started to get bigger and more complex, developers started needing a new set of accessibility features. Semantic elements alone were not enough, especially for complex elements like date pickers and custom widgets.

Depending on semantic HTML does not help when content is updated dynamically on the web page. Nowadays, all websites built with JavaScript have content that isn’t loaded initially, but updated dynamically based on user interactions.

WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) was introduced to add more accessibility features wherever they were needed. It defines a set of HTML attributes that you can use to provide additional semantics to your website and improve accessibility.

In the following sections, you’ll learn which attributes were introduced and how you can use them to enhance accessibility.

### The `role` attribute

The `role` attribute helps add semantic information to non-semantic elements by defining their “role” on the web page. With roles, screen readers can accurately read non-semantic elements and help identify them for people with disabilities.

W3C defines several roles that you can use, depending on their purpose. But keep in mind that you should only use `role` when necessary. In most cases, it’s better to just use the right semantic elements like `<button>`, `<nav>`, `<header>`, and so on.

But, when semantic elements are not fulfilling your purpose, roles can help. So, let’s understand how to use them with some examples:

If you want to create a button with custom `div`, adding the `role` attribute specifies that this element is being used as a button.

```
<div role="button" tabindex="0">Click Me</div>
```

When you test this with Mac’s VoiceOver (⌘+F5), it reads out the element as a button. As discussed before, always include the `tabindex` attribute.

But if you want to use a `div` instead of a button, you still need to add JavaScript functionality, as explained in the the [Keyboard Accessibility][62] section.

Another example is if you are writing a custom link. You can use the following role, so that the screen reader interprets this as a link:

```
<div role="link">Visit our website</div>
```

Apart from interactive elements, `role` attribute can also be used to define elements as navigation menus, side bars, banners, etc. If you are using non-semantic elements for these purposes, always include a role, like the following:

```
<div role="navigation">
    <!-- Navigation menu items -->
</div>
```

In this case, the screen reader announces this as a navigation area.

Also, if you have an element that serves as an alert for the user, including the following role makes the screen reader announce it as soon as it shows up on the screen, even if it doesn’t have focus:

```
<div role="alert">
  Please respond to this alert
</div>
```

You can find the full list of available roles at [MDN Docs: WAI-ARIA Roles][63].

### aria-\* attributes

Apart from `role`, ARIA (Accessible Rich Internet Applications) defines extra attributes to enhance the accessibility of web applications. These attributes give screen readers more information about elements, helping people with disabilities better understand them.

If native semantic elements or the `role` attribute alone are not sufficient, aria-\* attributes can provide extra context. You can find a full list of these attributes in [MDN Docs-ARIA][64].

In the following sections, we’ll see how role and aria-\* attributes can improve accessibility. We won’t cover all the attributes here, but we’ll focus on the most commonly used ones.

### Dynamic Content Updates

When a web page loads for the first time, its content is read out by the screen reader. But screen readers cannot capture dynamic content, that is content that gets added or removed.

For example, when a web page is showing live sport updates, it gets updated almost every minute. Screen readers will only read out the content displayed when the page is first rendered, but don’t show dynamic updates.

This is not really a problem for many users, but for people with visual impairments, screen readers may not be able to read the changes on the page. Most modern websites are dynamic in nature, so it’s important to consider accessibility of dynamic content updates.

Check out the [aria-no-live][65] example from MDN Docs. It loads a new quote every 10 seconds, which you can see clearly as a user with no visual impairment. But the screen reader only reads the initial page content and does not announce the updates. This is not good for accessibility.

To fix this, WAI-ARIA provides the [`aria-live`][66] attribute that makes the screen reader read out content that is updated. You can add this attribute to the element that contains the dynamic content.

It takes the following three values:

-   `aria-live="off"`: Default value that means no content is read out
    
-   `aria-live="polite"` Updates only announced when the user is idle
    
-   `aria-live="assertive"`: Content read out as soon as it is updated.
    

Depending on the importance of the update, you can decide which value to use.

```
<div aria-live="polite">
    <!-- Dynamic Content here -->
</div>
```

In this case, the screen reader waits till the user is done with their current task before announcing the update.

You can add more detail here. With the above attribute, only the text that is updated is read out. But, screen reader users may get confused as to which part of the page is being read out. So, it is helpful if the entire element is read out.

```
<div aria-live="assertive" aria-atomic="true">
    <!-- Dynamic Content here -->
</div>
```

The [`aria-atomic`][67] attribute tells screen readers to read out the entire element as a single atomic unit. This avoids confusion for visually impaired users. Check out the [aria-live][68] example from MDN Docs with Mac’s VoiceOver (⌘+F5). It reads out the entire element when the content is updated.

### Form Validation and Errors

Let’s say you have added some validation to your form through JavaScript. When the validation fails, an error message gets added on the screen. For example, a required message shows up if you have missed a field.

The implementation for error handling involves creating an element containing an error message or a list of errors that render on certain conditions, depending on the JavaScript code. Just as we discussed in the previous section, the screen reader does not read out new content updates.

So, we should make sure that the screen reader reads out the error message as soon as it shows up, to let visually impaired users know that an error has been thrown. We can use the following attributes for this purpose:

```
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

The [`alert`][69] role does two things. It semantically identifies this element as a piece of important information. Secondly, this role turns the element into a [live][70] region which means the screen reader is notified immediately if there are any changes.

The [`aria-relevant`][71] attribute describes what changes need to be announced in a live region. The attribute takes a space-separated list of the following values:

-   `additions`: Announces new content added to the live region
    
-   `removals`: Content removed from the live region is read out
    
-   `text`: Announces any modifications to existing content.
    

It also takes a value `all` which is a shorthand for `additions removals text`, meaning all three types of content are read out.

You can check the [Form Validation Example][72] from the MDN Docs.

Next, let’s see what to do if we want to mark certain fields as required. Normally, we’d add visual cues like a `*` and the following message at the top of the form:

```
<p>Fields marked with an asterisk (*) are required.</p>
```

This is helpful for regular users, but visually impaired users may get confused as to which fields are required. To make it easier for them, we can use the [`aria-required`][73] attribute.

```
<input type="text" name="name" id="name" aria-required="true" />
```

With this attribute, the screen reader mentions this field as “required” while reading it out.

When you are creating input fields, it’s important to include a label, as some screen readers do not read out placeholder text. If you don’t want to include a label field, here are the following alternatives:

You can use the `aria-label` attribute to add labels to input fields that do not have a label associated with them.

```
<input type="email" name="email" aria-label="Enter email" />
```

This attribute provides some text to be read out by a screen reader to describe the input field.

You can go one step further and use the `aria-labelledby` attribute that uses another element to act as a label for the input field. For example:

```
<div>
  <span id="emailLabel">Enter your email</span>
  <input type="email" name="email" aria-labelledby="emailLabel" />
</div>
```

The screen reader reads out the text inside the `<span>` element to describe the input element. This is similar to having a `<label>` with a `for` attribute. You can also use this attribute to reference other interactive elements like `<button>` or `<a>` that do not have a label field to reference them.

Keep in mind that the `aria-labelledby` attribute only defines an accessible name for the element – it does not provide other functionality like clicking on the label to focus on the input element. It’s better to use `<label>` with a `for` attribute.

We have already discussed form labels in the [Interactive Elements][74] section.

You’ve now seen some of the different attributes that WAI-ARIA offers and how they enhance accessibility. You can visit [MDN Docs: WAI-ARIA][75] to check out additional details I may have missed.

Before we move on, remember one thing: _use WAI-ARIA only when necessary_. Usually, semantic elements are able to achieve majority of your accessibility goals. Don’t over-use WAI-ARIA as they might end up complicating your code.

## Multimedia Accessibility

A website’s content is not restricted to text. It also often consists of multimedia content like images, audio, and video. In a lot of cases, multimedia content is easier to understand than text content. While this is true for many users, it poses challenges for users with disabilities.

People with visual impairments cannot see images and people who are deaf or hard of hearing cannot easily interpret audio content. So, as developers, it’s our job to make this type of content accessible for everyone. Let’s understand how to make this possible:

### Images

Since people with visual impairments cannot see images, they depend on a screen reader to describe the image. Just writing an `img` tag with `src` attribute does not help.

```
<img src="temple.jpg" />
```

By default, the screen reader reads out the file path or URL of the image. A file name might give some idea of the image, but still does not describe it.

So, it’s helpful to add an `alt` attribute to an `img`. The `alt` attribute provides an alternate text for the image, and its purpose is to describe the image.

```
<img
  src="temple.jpg"
  alt="The Meenakshi Temple, situated in Madurai, a South Indian City is dedicated to goddess Meenakshi, a form of Parvati"
/>
```

Here, instead of reading the file path, the screen reader reads out the alternate text – that is, the value of the `alt` attribute. The alternate text should provide a description of the image to help users understand what it’s conveying. So, instead of just saying “Temple”, the user knows which temple is being depicted in the image.

You can also add extra context to the image with the `title` attribute.

```
<img
  src="temple.jpg"
  alt="The Meenakshi Temple, situated in Madurai, a South Indian City is dedicated to goddess Meenakshi, a form of Parvati"
  title="The Meenakshi Temple"
/>
```

When focussed on the image, the screen reader reads out the `alt` text and the title.

Let’s take another example which uses an alternative to the `alt` attribute:

```
<img src="temple.jpg" aria-labelledby="temple-label" />
<p id="temple-label">
  The Meenakshi Temple, situated in Madurai, a South Indian City is dedicated to
  goddess Meenakshi, a form of Parvati
</p>
```

Here, instead of using the `alt` attribute, we have used the `aria-labelledby` attribute to link the paragraph element to the image. The text inside `p` acts as an alternate text for the image. This is helpful if you need to use the same text as an alternate text for different images.

Sometimes, we use images as icons for headers and navigation menus, just for decoration. Usually, these images are not relevant to understand the content of the page. In these cases, you add an empty `alt` attribute.

```
<h3>
  <img src="page-icon.png" alt="" />
  History of Meenakshi Temple 
</h3>
```

If you skip the `alt` attribute, the screen reader reads out the entire image URL. To avoid this, use an empty `alt` attribute, so the screen reader simply announces it as an image and moves on, preventing unnecessary distractions for users.

You can also use `role=”presentation”` to skip reading the image path or alternative text.

### Audio and video

When using the [<audio>][76] and [<video>][77] elements, remember to include multiple sources – that is, provide the audio and video in different formats. For browsers that do not support the formats you have mentioned, include a fallback download link so they can access the resource.

```
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <p>
    Your browser doesn't support HTML video. Here is a
    <a href="video.mp3">link to the video</a> instead.
  </p>
</audio>
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <p>
    Your browser doesn't support HTML5 video. Here is a
    <a href="video.mp4">link to the video</a> instead.
  </p>
</video>
```

Next, let’s understand the shortcomings of using native HTML controls for audio and video.

-   They cannot be styled with CSS, so they may not align with your website’s theme.
    
-   The play/pause buttons are not keyboard accessible.
    
-   They don’t have functionality to forward or rewind the video.
    

To overcome these limitations, we’ll create our custom video player in the next steps. To start, let’s create a container for the video content:

```
<div class="controls">
  <button class="play-pause">Play</button>
  <button class="stop">Reset Video</button>
</div>
```

These will work as the play/pause and reset buttons. Then, let’s remove the `controls` attribute from the `<video>` to replace them with our custom controls.

```
const videoPlayer = document.querySelector("video");
videoPlayer.removeAttribute("controls");
```

Why do we remove it at run time? Let’s say JavaScript does not load due to some issue. In this case, the user can still use the native controls. Next, let’s add some functionality to our buttons:

```
const playPauseBtn = document.querySelector(".play-pause");
const resetBtn = document.querySelector(".reset");

playPauseBtn.onclick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = "Pause";
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = "Play";
  }
};

resetBtn.onclick = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  playPauseBtn.textContent = "Play";
};
```

-   The video player object is of type [`HTMLMediaElement`][78], that contains several methods you can use to control the video.
    
-   For the play/pause button, we add a toggling functionality, with the `play()` and `pause()` methods.
    
-   To reset the video, we pause it and set the current time to 0.
    

Now, our custom video player is keyboard accessible, and able to be styled with CSS. You can also add additional functionality like forward/rewind, a timer, and a progress bar. The steps are similar for a custom audio player.

Check out the [MDN Docs][79] for more detail about this functionality.

#### Audio Transcripts

People who are deaf or hard of hearing cannot easily access audio content. So to make it accessible, you need to add transcripts under any audio or video form of content.

If you run a business, you could pay a professional to do the transcripts. Check out the [docs][80] for options. To show the transcript on the UI, you could use a show/hide panel. Referring to the docs, see the [audio transcript UI][81] ([source code][82]) for an example.

If the audio is a recording of some presentation, you should attach links to any documents or presentation decks. Also, include a description for any visual content being referenced.

#### Video Closed Captioning and Subtitles

First, let’s understand the difference between captions and subtitles. They are implemented in a similar way and visually, they look the same – but their purposes are different.

Captions denote who’s speaking and describe other sound effects in the video. They are mostly added with people who are deaf or hard of hearing in mind. Subtitles help people who don’t understand the language being spoken in the video, by translating it to text that uses the language of their choice.

Let’s see how to add subtitles to your videos. We write subtitles in WebVTT, a format that contains text along with the range of timestamps indicating which text you want in each part of the video. Following is an example of a subtitles file:

```
WEBVTT

1
00:00:01.230 --> 00:00:02.606
This is the first subtitle.

2
00:00:04.739 --> 00:00:06.074
This is the second.
```

Save this file and name it with a `.vtt` extension. To link this file to your video, include it in a [`<track>`][83] element:

```
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track
    src="captions.vtt"
    kind="subtitles"
    srclang="en"
    label="English"
    default
  />
</video>
```

You should include the `<track>` element inside the `<video>` element and placed after all the sources. It has the following attributes:

-   `kind` mentions the type of file being referenced.
    
-   `srclang` indicates the language the subtitles are in.
    
-   `label` indicates the text that is shown while the user is selecting a language
    
-   `src` is the path or URL of the subtitles file, that is the `.vtt` file we created previously.
    

This will show subtitles for the specified timestamps. This will not only help people with hearing impairments, but is also useful for people who don’t understand the language, or those who are working in a noisy environment.

For people who are visually impaired, you could also include text that describes certain visuals in parts of the video. This text would be read out by screen reader.

You can also add custom styling to subtitle menu and subtitle text. Check out [MDN Docs - Adding captions and subtitles to HTML video][84] for the implementation.

## Mobile Accessibility

We have covered many key accessibility practices so far, and they should work well on mobile phones as well. But there are some additional considerations you can follow for mobile users.

First, let’s talk about mouse-specific events. We have already seen how to make mouse-specific events accessible in the [JavaScript Practices][85] section. Events like [mousedown][86] or [mouseup][87] are often used for drag and drop functionalities.

But these are not accessible for touchscreen users, so you should add the same functionality to touch-specific events like [touchstart][88] and [touchend][89]. The following example is in the context of drag and drop:

```
source.ontouchstart = (e) => {
  // initiate drag
};

dest.ontouchend = (e) => {
   // drop
};
```

Next, you have to ensure that you are following responsive design when designing your web pages. Responsive designs make sure the website looks good on both desktop and mobile phones. I have written a detailed guide on [responsive design][90], so check it out if you are interested.

Some other mobile accessibility practices that are good to know:

-   Do not disable zoom on your website. Both fully-sighted users as well as those who have visual impairments may need to zoom in to read the website’s content on smaller screens.
    
-   When writing navigation menus, you’d normally conceal it and provide a hamburger icon to open it, as the screen is much shorter/smaller on a mobile phone. In these cases, the hamburger menu should be easily accessible. Check out the example of a [good hamburger menu][91] from the docs, in mobile view.
    
-   When creating forms, try to minimise the amount of typing the user needs to do, as it can get annoying for mobile users. This is especially important if your website is primarily designed for mobile users. Check out the [docs][92] for examples.
    

Visit [MDN Docs-Mobile Accessibility][93] if you want to learn more.

## Testing Accessibility with Tools

There are several tools you can use to test the accessibility of your page. [Lighthouse][94] in Chrome Developer Tools is an open source tool that analyses a web page for performance, accessibility, SEO, and more. It generates a report on how a page performs in these areas.

Let’s see how it helps in analysing the accessibility of a page:

Open Chrome Dev Tools and navigate to the Lighthouse tab. Click on “Analyse Page Load” and wait for a few seconds. It will show a report that contains info on how your web page scored on Accessibility and other metrics. It will list down any accessibility issues you may have.

Let’s take the following example:

```
<h1>Welcome</h1>
<img src="image.jpg" />
<button tabindex="2">Click Here</button>
<div onclick="alert('Clicked!')" class="button">Click Me</div>
<form>
  <input type="text" />
</form>
```

When tested with the Lighthouse audit, it yields the following results:

![Lighthouse audit with accessibility issues](https://cdn.hashnode.com/res/hashnode/image/upload/v1739631885589/c886f304-aba2-44ac-8d75-88fac2f60c55.png)

As you can see, it’s scored 74 on accessibility, meaning there is room for improvement. It has also shown the accessibility issues within your HTML code, as you might have guessed looking at the code:

-   Image elements do not have `alt` attribute
    
-   Form input does not have a label
    
-   `tabindex` value is greater than 0.
    

Let’s correct these issues and run the test again:

![Lighthouse audit with good accessibility](https://cdn.hashnode.com/res/hashnode/image/upload/v1739632090527/2db4798a-53d3-4010-9756-83de8b0f208a.png)

This time, it has scored 100 on Accessibility since we have followed all the basic practices.

As you can see, this is a really simple HTML page, and it’s much harder to achieve a score of 100 for large websites. But, you should aim to achieve as high a score as possible. This shouldn’t be too challenging if you make accessibility a part of your development process.

The accessibility score on it’s own does not mean your website is fully accessible. You also need to test the following:

-   Manual testing with a screen reader (Mac’s Voiceover or Windows’ Narrator).
    
-   Keyboard accessibility – test whether each and every part of your website is keyboard accessible
    
-   Simulating your website with different color contrasts for different visual impairments.
    

For simulating, Chrome Developer Tools provides a Rendering tool to emulate your website on different preferences, like light/dark mode, high/low color contrast, reduced motion and various visual impairments.

To access it, open Developer Tools, do ⌘+shift+P (Ctrl+Shift+P on Windows) and type “Rendering”. It will open the following window:

![Rendering tool](https://cdn.hashnode.com/res/hashnode/image/upload/v1741959781294/36f6c233-9326-4acb-a551-e95a56a87d8a.png)

If you have added media queries like the following, you can select these preferences and test whether your website behaves accordingly:

```
@media (prefers-reduced-motion) {
    * {
        animation: none;
    }
}
```

So, when you select `prefers-reduced-motion`, you can test if all the animations have been disabled, and how your website functions.

Apart from the Developer Tools, there’s an NPM plugin called [eslint-plugin-jsx-a11y][95] that evaluates React JSX code for accessibility issues.

You can find all the code snippets on [GitHub][96].

## Conclusion

Accessibility isn’t just a feature added on top of your code – it should be a part of the development process. When you make a website accessible to everyone, it not only increases your user base, but also promotes inclusivity.

Even though the primary benefactors of accessibility are people with disabilities, it also benefits other users by making the website easier to use overall. A lot of the practices mentioned in the article, like using semantic elements, adding the right attributes, and so on are very easy to follow and go a long way towards ensuring accessibility.

If you are a beginner, you have already done a great job learning about accessibility. Start including simple accessibility practices in your projects. Over time, including these practices will become a natural habit.

I hope this handbook becomes your go-to resource for anything related to accessibility. If you think I've missed something or need clarification on any concepts, feel free to reach out to me on Twitter. For more content on web development, check out out my profile.

### References

-   [MDN Docs-Accessibility][97]
    
-   [Web Dev Simplified- Guide on Accessibility][98]
    

[1]: #heading-what-is-accessibility
[2]: #heading-basic-accessibility-practices
[3]: #heading-semantic-and-non-semantic-html
[4]: #heading-text-content
[5]: #heading-page-layouts
[6]: #heading-interactive-elements
[7]: #heading-keyboard-accessibility
[8]: #heading-form-labels
[9]: #heading-links
[10]: #heading-table-accessibility
[11]: #heading-additional-css-and-javascript-practices
[12]: #heading-styling-form-elements
[13]: #heading-color-contrast
[14]: #heading-javascript-practices
[15]: #heading-advanced-accessibility-practices-wai-aria
[16]: #heading-the-role-attribute
[17]: #heading-aria--attribute
[18]: #heading-dynamic-content-attributes
[19]: #heading-form-validation-and-errors
[20]: #heading-using-non-semantic-elements-as-buttons
[21]: #heading-multimedia-accessibility
[22]: #heading-mobile-accessibility
[23]: https://axesslab.com/what-is-a-screen-reader/
[24]: https://seo.co/semantic-html/
[25]: https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements
[26]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
[27]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
[28]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance
[29]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations
[30]: #heading-color-contrast
[31]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling
[32]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning
[33]: https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html
[34]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms
[35]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
[36]: #heading-multimedia-accessibility
[37]: https://mdn.github.io/learning-area/accessibility/html/good-form.html
[38]: https://mdn.github.io/learning-area/accessibility/html/bad-form.html
[39]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
[40]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
[41]: #heading-multimedia-accessibility
[42]: https://webaim.org/
[43]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
[44]: https://developer.mozilla.org/en-US/docs/Web/CSS/:visited
[45]: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
[46]: https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
[47]: #heading-color-contrast
[48]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[49]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href
[50]: https://mdn.github.io/learning-area/accessibility/html/good-links.html
[51]: https://mdn.github.io/learning-area/accessibility/html/bad-links.html
[52]: https://axesslab.com/hand-tremors/
[53]: https://developer.mozilla.org/en-US/docs/Web/CSS/margin
[54]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility
[55]: https://webaim.org/resources/contrastchecker/
[56]: https://developer.chrome.com/docs/devtools/accessibility/contrast
[57]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
[58]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
[59]: https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
[60]: https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
[61]: https://mdn.github.io/learning-area/accessibility/css/form-validation.html
[62]: #heading-keyboard-accessibility
[63]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
[64]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
[65]: https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html
[66]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
[67]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic
[68]: https://mdn.github.io/learning-area/accessibility/aria/aria-live.html
[69]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
[70]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
[71]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant
[72]: https://mdn.github.io/learning-area/accessibility/css/form-validation.html
[73]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required
[74]: #heading-interactive-elements
[75]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#accessibility_of_non-semantic_controls_2
[76]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
[77]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
[78]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
[79]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia#creating_custom_audio_and_video_controls
[80]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts
[81]: https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/
[82]: https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui
[83]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
[84]: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
[85]: #heading-javascript-practices
[86]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
[87]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event
[88]: https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event
[89]: https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event
[90]: https://medium.com/gitconnected/read-this-to-make-your-website-responsive-35af4ab7992b
[91]: https://fritz-weisshart.de/meg_men/
[92]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Mobile#user_input
[93]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Mobile
[94]: https://developer.chrome.com/docs/lighthouse/overview
[95]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[96]: https://github.com/KunalN25/accessibilityguide
[97]: https://developer.mozilla.org/en-US/docs/Web/Accessibility
[98]: https://www.youtube.com/watch?v=2oiBKSjOOFE