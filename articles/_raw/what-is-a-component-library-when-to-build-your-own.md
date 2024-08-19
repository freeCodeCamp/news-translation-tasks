---
title: What is a Component Library? When to Build Your Own and When to Use
  Someone Else's
date: 2024-08-19T09:58:26.377Z
author: Andrico Karoulla
authorURL: https://www.freecodecamp.org/news/author/andrico1234/
originalURL: https://www.freecodecamp.org/news/what-is-a-component-library-when-to-build-your-own/
posteditor: ""
proofreader: ""
---

If you've built a frontend project in the last five years, you will have likely written some components, and maybe even used a component library.

<!-- more -->

Components and libraries have been an important part of the web development landscape for multiple decades now, and they're as useful and as important as ever.

Now, there are going to be times when you should build your own component library, and times when it's better to use a third-party option. By the end of this article, you'll know the benefits and drawbacks of each approach, and you'll be able to make the right call for your next project.

### Table of Contents:

-   [An Analogy: What if Pre-Recorded Music Albums Didn't Exist][1]
    
-   [Why I'm Writing this Guide][2]
    
-   [What is a Component?][3]
    
-   [What is a Component Library?][4]
    
-   [What’s the Difference Between a Component Library and a Design System][5]
    
    -   [Design Systems][6]
        
    -   [Component Libraries][7]
        
-   [A Brief History of Component Libraries][8]
    
-   [What Makes a Good Component Library?][9]
    
-   [What Are the Benefits of Using a Component Library?][10]
    
-   [What Are the Drawbacks of Using a Third-Party Component Library?][11]
    
-   [The Different Shapes a Component Library Can Take][12]
    
    -   [Utility Classes Libraries / CSS Style Guides][13]
        
    -   [Off-the-Shelf Component Libraries][14]
        
    -   [Un-styled Components][15]
        
    -   [Copy Pastable Component Libraries][16]
        
-   [Why Isn’t There One Component Library to Rule Them All?][17]
    
-   [Should You Build Your Own Component Library?][18]
    
-   [When (and Why) It's Useful to Build Your Own Component Library][19]
    

## An Analogy: What if Pre-Recorded Music Albums Didn't Exist

I’m a huge music fan. One of my favourite pastimes is to put on a record and listen to it front to back. A music album is simple in concept: it’s a suite of recorded tracks by an artist and is considered a complete and coherent set of songs.

But what if recorded music didn’t exist? Instead of putting songs to tape, CD, or mp3 (or FLAC if you’re that way inclined), you could only listen to an album if the artist played it live for you. You’d need to go to the band, ask them to set up their equipment, and get them to play the album front-to-back. They’d need to play it the same way every time to ensure that everyone had the exact same experience.

The cracks would start to show. It’s not an efficient way to ensure that anyone interested in the band’s music could listen to it. If Taylor Swift were to play her song Fortnight personally for every person who listened to it on Spotify, it would take her 3,179 years. And that doesn’t account for any [plane travel][20]. Artists would get bored, maybe even careless, leading to a poorer experience for their listeners.

So how does this relate to web development? Every time you build a UI control, you have to ensure it’s functioning, robust, and accessible. You’ll get bored if you keep rewriting the same UI every time. Mistakes will slip through, leading to a bad experience for your end users.

## Why I'm Writing this Guide

I’ve been a web developer for nearly 10 years, and I’ve written hundreds of components, often the same UI pattern many times. I’ve used dozens of component libraries, and have built admin dashboards, component libraries, mobile applications, blogs, Figma plugins, VSCode extensions, and more.

In this article, I'll discuss the role of components and libraries in web development, and whether developers should write their own.

I'm also the creator of [Component Odyssey][21], a course that'll teach you to build your own component library that works in any frontend framework.

## What is a Component?

When building user interfaces, we don’t write all the HTML markup from scratch every single time. We write our UIs using components – reusable building blocks that encapsulate common UI patterns. Writing a component lets you use it multiple times in a single project or even in independent projects.

Here I’ve written a counter component. I’ve written it once and used it in multiple places on the page.

```
<body>
  <div class="wrapper">
    <counter-button></counter-button>
    <counter-button></counter-button>
    <counter-button></counter-button>
  </div>

  <script type="module">
    import { LitElement, html } from 'lit';

    class CounterButton extends LitElement {
      constructor() {
        super();
        this.count = 0;
      }

      static properties = {
        count: { type: Number }
      };

      _increment() {
        this.count++;
      }

      render() {
        return html`
          <button @click=${this._increment}>Count: ${this.count}</button>
        `;
      }
    }

    customElements.define('counter-button', CounterButton);
  </script>
</body>
```

We tutorial creators like to demo counters like they’re going out of style – but a real-world application will contain dozens of different UI patterns written as components.

In this article, I’ll group CSS rules that provide styling for certain UI patterns under the components umbrella. The definition can get murky depending on whom you ask.

## What is a Component Library?

Not all components are standalone. It makes sense for many components to be grouped within a single package, called a component library.

If you want your site to have a specific look or feel, you can use a _component library_. There are component libraries that:

-   offer components that adhere to a design specification.
    
-   offer multiple solutions for a specific UI pattern.
    
-   work with a specific toolchain
    

But they come in different shapes and sizes. The definition I’ve come to use when defining a component library is the following:

_A component library is a set of reusable components that are cohesive in their utility, or appearance (or both). A great component library will help developers achieve their UI needs efficiently, while offering an exemplary experience for the end user._

## What’s the Difference between a Component Library and a Design System?

I talk about guidelines and design systems later in this article, so I’ll take a moment to disambiguate them. It can be difficult to see where one ends, one begins, or one subsumes the other.

### **Design Systems**

I see a design system as a specification for how things should look, feel, and behave. A design system can encompass a product, a brand, or a company to ensure consistency across the suite of experiences. A comprehensive design system will dictate everything from font families, font sizes, and spacing sizes, to UI patterns and copy guidelines.

A few of the most well-known design systems include:

-   [Material Design][22] (Google)
    
-   [Base Design][23] (Uber)
    
-   [Lightning Design System][24] (Salesforce)
    

While many design systems are specific to companies, there are design systems, like Material Design, that teams across the globe use to shortcut their way to building familiar feeling products. You’ve probably used a handful of products that use Material Design principles, but they’re [certainly not free from basic usability issues][25].

### **Component Libraries**

As for component libraries, they may or may not be the code implementation of a design system. If you work for a company with a design system, it’s likely that the corresponding component library (if one exists) is tightly integrated with it.

For instance, Google’s [Material Web][26] is a web component implementation of Material Design. [Base Web][27] and [Lightning Web Components][28] are also open source.

## A Brief History of Component Libraries

The concept of UI components (or widgets) has been around for a long time. If you want to see a museum’s worth of retro user interfaces, grab some popcorn and watch this [2+ hour video of "all the widgets" from 1974-1990][29].

From the early 2000s, we started seeing component libraries made to help developers build for the web.

The web browser landscape back then was unrecognisable from what we see now. Versions of Internet Explorer deviated away from the spec entirely, which was particularly problematic given the [huge market share that IE had back in the day][30]. [Internet Explorer 6 was famously known for being a pain to develop for][31]. This was mainly due to its incorrect implementation of the [box model][32], and lack of CSS2 support.

> 💡 TIL, Internet Explorer supported a “[quirks mode][33]” that let developers write non-standard HTML and CSS to appease older browsers that didn’t support the standards.

Fortunately, when I started web development in earnest, many of these issues were ironed out. By this point, there were still a handful of libraries that made writing complex interfaces with cross-browser support a little easier.

[jQuery UI][34], the first component library I used, supported accordions and other widgets. But the browser is constantly evolving, and we now have a native way of implementing this accordion pattern using the `details` and `summary` elements, available in all browsers in 2020.

With these elements, you can get pretty far along creating interactive accordions without JavaScript.

Contrast this with 2009, before these elements had been implemented in any browser. It required a fair bit of JS to get working. Have a look at the [jQuery UI v1.7 source code][35], and CTRL+F “accordion” if you want to see how web devs were implementing accordions 15 years ago.

Over the next couple of decades, the capabilities of the web grew. More powerful devices meant more powerful browsers. More powerful browsers meant web applications became more ambitious.

Developers responded by creating the tools to help us build these applications by allowing us to create UIs using _building blocks_ – that is, a component model. We saw a proliferation of these component-based frameworks. I’m talking Angular, React, and Vue. And each has its own rich ecosystem of component libraries.

There's a reasonable argument to be made that there has been an over-correction and that the frontend landscape is now oversaturated with tools that are too powerful for most people's needs...but let's not go there.

## What Makes a Good Component Library?

The challenge with building a component library is that they’re not a _one-and-done_ deal. Many of the most popular libraries have been around for years and have had heaps of research, usage feedback, and contributions to get them to where they are now.

I’ve found that a good component library often has the following traits:

-   It understands the problems of its target developers and solves those problems well
    
-   It has great documentation
    
-   It ensures a good experience for the end-user
    
-   It’s robust and caters to appropriate input modes and devices.
    

On the flip side, a way to discern if a component library _isn’t good_ is if it doesn’t consider accessibility, has an inconsistent API, has little to no project stewardship, or has no clear and consistent documentation.

## What Are the Benefits of Using a Component Library?

We know what a good component library looks like – so let’s see how one can make your life, and the lives of your users, a little better.

### Component Libraries Save You Time

If you’re on a project with a tight deadline, it’s important to be efficient. But efficiency shouldn’t come at the cost of crafting a robust web experience. Using a component library lets you spend less time reinventing the wheel and more time focusing on the finer details.

### Component Libraries Make You and Your Users Happier

We’re not motivated by repetitive work. We enjoy technical challenges, and writing the same components over and over again is not a fun challenge. We’ve already spoken about what happens when we get bored and let mistakes slip through.

If you wanted to implement a dialog component from scratch, you’d need to:

-   Handle focus trapping correctly
    
-   Make the rest of the page inert
    
-   Position the dialog correctly
    
-   Ensure that it works with assistive technologies
    

It takes work to remember and implement the above, but the consequence of getting it wrong can render your interface literally unusable. Such is the case if you [incorrectly handle focus][36].

By using a component library that’s been built with the end users in mind, you can prevent the risk of introducing broken experiences, while spending less time rebuilding the same components.

### Component Libraries Lead to Consistent Experiences

If you work for a company with several different web applications, they’ll generally follow a set of guidelines. These guidelines might dictate the colour palette to use, the size of your typography, or how UI elements should look and behave.

But you increase the likelihood of your application deviating from the style guide if you’re re-writing components. By having a component library, you can more easily audit your component’s UI against the brand guidelines so they look great, wherever they’re used.

Uber has several different apps that share the same user interface elements. I’m almost certain that they use the same component library across these apps. That way each new app is virtually guaranteed to adhere to the brand’s guidelines.

![Different Uber apps side by side, showing how similar they are in terms of appearance](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4lh0etdq7yhk4zhmiac8.png)

## What Are the Drawbacks of Using a Third-Party Component Library?

The benefits I’ve mentioned above are irrespective of whether you’re using your own component library or a third party. If you or your team has decided that they don’t want to build a library, and instead lean on a third-party, then it’s worth considering the following.

### Vendor Lock-in

By choosing a component library, you’re picking a partner who will greatly impact how you write your frontend code and how your interfaces will look and behave.

The former will have a big impact on you, and the latter will have a big impact on your end users. Using a component library is locking you into the standards of that component library.

The library could introduce massive breaking changes in a major version that could require dedicated development time, and a lot of testing to ensure that no serious regressions were introduced.

A few years back I used React Admin to build a complex admin dashboard to an internal division. The library offered a suite of components specifically dedicated to fetching and displaying complex data.

Because our application at the time relied heavily on React Admin, upgrading between major versions was challenging, especially as many of the internal tools used by React Admin had been swapped out for others. The change surface was huge, and we spent a good deal of time upgrading and flagging the issues that we spotted.

I don’t believe that building our own solution would have saved us any time in the long term, but this kind of vender lock-in is worth considering, especially before going all in on a tool.

### Code Bloat

Shocking as it is, libraries with a lot of components tend to be written using lots of code. Code that you download when installing dependencies, and code you're sending over to your end users.

Modern tooling makes it easier to perform bundle optimisations like tree-shaking to remove unused code, but there’s no guarantee that you’re removing all of the code that your users won’t need.

Unless you dig deep into the libraries that you’re using, you may not be aware of all the separate packages they’re importing. You could end up with hundreds of unnecessary dependencies. The folks in the [e18e][37] community have been working hard at bringing this problem to light, [while also fixing it too][38].

Many of these problems could also be said about rolling out your own component library. The biggest difference is that you have stewardship over your component library. You’re able to define how it solves your specific problems, and you have control over improving its shortcomings.

## The Different Shapes a Component Library Can Take

The [initial proposal][39] for the World Wide Web was a tool to improve communication between researchers at CERN. The proposal outlined how documents could be shared, and linked to one another through the use of hypertext.

This is the fundamental cornerstone of the web, and we still use the humble `<a>` tag to link between other HTML documents across the web.

But the web has grown in scope over the last few decades, and the browsers we use to navigate the web have become beasts of their own. The browsers today can enable [powerful forms of creative expression][40], and the [running of native-like software][41].

There are hundreds of different solutions out there, some general purpose, others hyper-niche, but finding the right tool for your next project requires a complex decision process that might look like this:

![The different kinds of component libraries, and when you should use them. The diagram's context is explored below](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bn80olo3e0h8v4h4v311.png)

This isn’t a comprehensive list of ALL use cases or component library types, but it illustrates how component libraries differ in terms of:

-   the technologies involved.
    
-   the levels of abstraction they offer.
    
-   the problems they solve.
    

Let’s take a look at some of the most common component library types.

💡 A quick side note: If you're interested in building your own web component library, then consider checking out my course [Component Odyssey][42]. You'll learn how to build and publish a component library that works in any frontend framework.

### Utility Class Libraries / CSS Style Guides

For me, [Bootstrap][43] is the first that comes to mind. Back in the day, if you wanted to give your site a quick lick of paint, you’d drop the CDN link to the bootstrap CSS file and immediately get that Bootstrap look. It was everywhere in the mid-2010s.

![A demo example of a Bootstrap web, circa 2013](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7zl86ek2nhsoxc043pnt.png)

The technical scope of these kind of tools range from

-   A single CSS file ([Pico][44])

to

-   A toolchain to generate CSS classes based on your configuration ([Tailwind][45])

Dozens of other tools, like [Open Props][46], fit somewhere in between.

### Off-the-Shelf Component Libraries

If you’re building an interactive web application, you might just want to grab a suite of components that look great and function well. There are many of these off-the-shelf component libraries that give you everything you need and more.

Regardless of which framework you’re writing your app with, there’s likely to be a set of great looking components for you to use.

Another great component library is [Shoelace][47], which provides dozens of fully interactive and fully-styled components.

What makes libraries like Shoelace particularly interesting is that it’s built using web components, the browser’s built-in way of writing components. Building your UIs with tools like Shoelace gives you the added benefit of being able to use them across different frontend frameworks. [This is something I’ve spoken a little about in the past.][48]

Here's the same Shoelace component being used in Vue and React:

![Shoelace buttons in Vue and React](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/anphi6seqnbqvjd0q7ty.gif)

### Un-styled Components

Depending on your project’s specs, you might not have the luxury of using an off-the-shelf tool. Your design specs might be very specific.

I’ve seen teams roll out components at the first sign of friction. And in one case of a hand-rolled data picker, it led to a way worse user experience. In retrospect, using an un-styled component library would have given the team flexibility with appearance, while ensuring that the notoriously tricky time-related behaviour was correct.

That’s why you can reach for a library out there that offers completely un-styled components with flexible styling hooks. If it’s a good library, it’ll also take care of all those complex interactions. It’s a best of both worlds situation.

It’s easy to mess up a checkbox if you want to push beyond the styling hooks that the browser provides, unless you test with a wide-range of devices and input modes.

<iframe width="640" height="360" src="https://player.vimeo.com/video/995085532" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="Vimeo embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>

[Radix][49] is a popular example of a library, but it’s built using React.

Other examples of component libraries like this are [Lion][50] and [HeadlessUI][51].

### Copy-Pastable Component Libraries

Some developers might want the best of both worlds. They might want a component built by a trusted third-party library, while also having full control over the markup, styles, and functionality.

Libraries like [ShadCN][52] allow for this kind of work flow by allowing developers to copy and paste the component definition into their own projects, effectively letting them _own_ the component.

## Why Isn’t There One Component Library to Rule Them All?

At this point, it’s probably clear why no such single component library exists. We’ve taken a non-exhaustive look at different groups of component libraries.

There is, however, a movement to introduce a “[Global Design System][53]”, a concept spearheaded by Brad Frost.

In the announcement, Brad outlines that in the hundreds of projects he’s been a part of, many of the UI controls behave (or should behave) similarly across these various projects – but developers reimplement the same thing in every single project.

This has lead to lots of wasted time and effort, and inconsistencies between projects. This also expands to the existing component libraries out there. You’ll see that the keyboard behaviour for a combobox in React Aria, is different to that of the combobox in ShadCN.

<iframe width="640" height="360" src="https://player.vimeo.com/video/995085659" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="Vimeo embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>

Brad Frost is proposing a Global Design System as a set of web components that should be adoptable by almost any frontend project to ensure a baseline of functionality for the controls that are not yet available in HTML.

There are [discussions going on within the Open UI][54] to see how this could start taking shape within the next few years.

## Should You Build Your Own Component Library?

This article has delved deeply into component libraries. And with all that context, you’ll inevitably start asking yourself, when you're staring at the empty HTML page for your next big project, whether you should build your own component library or use an existing one.

My first thought is: _I don’t think you should build your own library._

I generally favour picking a battle-tested library. Particularly one that has:

-   Been used across thousands of projects
    
-   A strong community, in Discord or GitHub
    
-   Great documentation
    
-   A strong focus on accessibility
    
-   Worked with the strengths of the chosen framework
    

Most importantly out of all of these is to use a component library that puts care into building accessible components.

Take a combobox, for instance. It’s a search input and a select menu mixed into one. If you’ve built your own, you may get it looking good, and working with your mouse. But you’ll also need to consider:

-   Cross browser support
    
-   Tab and focus behaviour
    
-   Screen reader support
    
-   Handling states for async loading of search results
    

Konnor Rogers, who does excellent work in the web + web component space, has shared countless frustrations with his experiences building an accessible combobox. Here’s one such [tweet he shared][55].

Screen reader support is particularly complex, and is worth of its own bullet-point list. To support screen readers, you’ll also need to handle:

-   live regions
    
-   interactive controls
    
-   selected items
    
-   support between different screen readers
    

As a side note, I only have access to Voiceover, meaning it’s difficult for me to test these complex UI patterns using different screen readers. Like browsers, there are differences between screen readers. In this article, [Are We Live?][56], Scott O’Hara describes how there’s variance among the difference with how they treat the live regions.

This means it’s also up to you, as the developer, to pick a component library that you can trust has been developed with accessibility in mind. This is why it’s also important to pick a component library that has a strong community.

You should be able to:

-   See the bugs and issues others have flagged for a given library
    
-   Suggest (or even contribute) improvements and changes to the library
    
-   Discuss ideas with members of the community and build working relationships with active members of the community or even maintainers themselves
    

Finally, and not least, a great component library will consider much more than the aesthetics of its components. For a component library designed for the web, it should try it’s best to:

-   adhere to the [Web Content Accessibility Guidelines (WCAG)][57]
    
-   ensure that the components work across different input modalities (touch, keyboard, screen reader)
    
-   ensure that the components are usable for folks with additional requirements, like those living with vestibular disorders, vision impairments, or a broken hand.
    

## When (and Why) It's Useful to Build Your Own Component Library

If I haven’t scared you off from building a component library, then let me contradict myself and explain why it can be a really good thing to build your own.

If you take the time to put care and attention into building a component library, then you’ll find yourself a becoming developer who better understands the browser platform, accessibility best practices, testing practices, and more.

But it doesn’t just stop there: there are some excellent reasons to build your own library.

For starters, you can build something tailored to your needs, and avoid some of the bloat you might get form an off-the-shelf component library. It’s up to you and your team to understand your end users, and you can build something specifically for them.

You also have the opportunity to experiment with novel approaches. If you have a hyper-niche problem, there might not be a component library out there to solves that need. It could be a component library that:

-   Visualises data in specific way
    
-   Has a distinct and unique visual identity
    
-   Is built on a new framework
    

That gives you the opportunity to build something tailored to your needs. You then have the opportunity to change and fix things as your needs change, or as you understand the problem space better.

Importantly, you’ll learn more about the web by doing so. If it’s your first time building a component library, it can be an opportunity to dive deeper into the [HTML browser specs][58], or brush up on your [web accessibility knowledge][59]. This will improve your abilities as a web developer, which will serve you well in any frontend project in the future. It could even help you land your next job.

So whether you should build a component library depends on your end goals. Consider questions like:

-   Do I want to better understand the browser?
    
-   Do I want to build something quickly?
    
-   Do I want to make it usable for as many users as possible?
    
-   Do libraries exist that solve my current problem?
    

Depending on what your answers are, you can make the right call for your project.

## Thanks for Reading!

Thanks for learning about component libraries with me. If you're interested in building your own web component library, then consider checking out my course [Component Odyssey][60]. You'll learn how to build and publish a component library that works in any frontend framework.

💡 I want to give a special shoutout to stephband ([Mastodon][61], [Bluesky][62]) for proofreading and providing feedback.

---

![Andrico Karoulla](https://cdn.hashnode.com/res/hashnode/image/upload/v1663007071410/4i8XhoHghu.png)

Read [more posts][63].

---

If this article was helpful, share it.

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][64]

[1]: #heading-an-analogy-what-if-pre-recorded-music-albums-didnt-exist
[2]: #heading-why-im-writing-this-guide
[3]: #heading-what-is-a-component
[4]: #heading-what-is-a-component-library
[5]: #heading-whats-the-difference-between-a-component-library-and-a-design-system
[6]: #heading-design-systems
[7]: #heading-component-libraries
[8]: #heading-a-brief-history-of-component-libraries
[9]: #heading-what-makes-a-good-component-library
[10]: #heading-what-are-the-benefits-of-using-a-component-library
[11]: #heading-what-are-the-drawbacks-of-using-a-third-party-component-library
[12]: #heading-the-different-shapes-a-component-library-can-take
[13]: #heading-utility-classes-libraries-css-style-guides
[14]: #heading-off-the-shelf-component-libraries
[15]: #heading-un-styled-components
[16]: #heading-copy-pastable-component-libraries
[17]: #heading-why-isnt-there-one-component-library-to-rule-them-all
[18]: #heading-should-you-build-your-own-component-library
[19]: #heading-when-and-why-its-useful-to-build-your-own-component-library
[20]: https://www.threads.net/@adhd.international/post/C6ugTXAPt71?hl=en-gb
[21]: https://component-odyssey.com/
[22]: https://m3.material.io/foundations/layout/understanding-layout/overview
[23]: https://base.uber.com/6d2425e9f/p/294ab4-base-design-system
[24]: https://www.lightningdesignsystem.com/getting-started/
[25]: https://www.smashingmagazine.com/2021/02/material-design-text-fields/
[26]: https://material-web.dev/
[27]: https://baseweb.design/components/button/
[28]: https://lwc.dev/guide/introduction
[29]: https://vimeo.com/61556918
[30]: https://en.wikipedia.org/wiki/Usage_share_of_web_browsers#TheCounter.com_(2000_to_2009)
[31]: https://www.quora.com/Why-do-people-hate-IE6-so-much-and-want-it-to-die#:~:text=IE6%20doesn't%20support%20web,PNGs%20to%20natively%20support%20IE6
[32]: https://www.webfx.com/blog/web-design/definitive-guide-to-taming-the-ie6-beast/#616723179a361-3
[33]: https://www.notion.so/Complete-written-content-806882f918204715a6e45df68f492bdd?pvs=21
[34]: https://jqueryui.com/
[35]: https://code.jquery.com/ui/1.7.0/jquery-ui.js
[36]: https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html
[37]: https://e18e.dev/
[38]: https://x.com/DanaWoodman/status/1819084012729798833
[39]: https://cds.cern.ch/record/369245/files/dd-89-001.pdf
[40]: https://plumegame.com/
[41]: https://medium.com/@addyosmani/photoshop-is-now-on-the-web-38d70954365a
[42]: https://component-odyssey.com/
[43]: https://getbootstrap.com/
[44]: https://picocss.com/
[45]: https://tailwindcss.com/
[46]: https://open-props.style/
[47]: https://shoelace.style/
[48]: https://component-odyssey.com/articles/01-writing-components-that-work-in-any-framework
[49]: https://www.radix-ui.com/
[50]: https://lion-web.netlify.app/
[51]: https://headlessui.com/
[52]: https://ui.shadcn.com/
[53]: https://bradfrost.com/blog/post/a-global-design-system/
[54]: https://github.com/openui/open-ui/issues/1066
[55]: https://x.com/RogersKonnor/status/1797529313279140294
[56]: https://www.scottohara.me/blog/2022/02/05/are-we-live.html
[57]: https://www.w3.org/TR/WCAG21/
[58]: https://html.spec.whatwg.org/multipage/
[59]: https://www.w3.org/TR/WCAG21/
[60]: https://component-odyssey.com/
[61]: https://front-end.social/@stephband
[62]: https://bsky.app/profile/stephen.band
[63]: /news/author/andrico1234/
[64]: https://www.freecodecamp.org/learn/