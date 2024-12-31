---
title: How to Become a Web Developer – a Beginner's Guide
date: 2024-12-31T14:57:36.273Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/KunalN25/
originalURL: https://www.freecodecamp.org/news/how-to-become-a-web-developer-beginners-guide/
posteditor: ""
proofreader: ""
---

Are you considering a career in web development? If so, then you are making an excellent choice. Web Development is one of the most in-demand skills in the market in 2024. With over [5.038 billion Internet users][1], web development has a promising future.

<!-- more -->

In this article, I am going to show you the essentials of getting started with web development. We’ll explore key tech stacks, beginner-friendly project ideas, helpful resources, and some additional tips.

Two years ago, I wrote an [article][2] on this topic. Since the demand for web development still remains very high, I am excited to re-visit it with a more detailed guide. So, stick around until the end.

## Table of Contents

1.  [What is a Website?][3]
    
    1.  [Frontend vs Backend][4]
2.  [Frontend Development][5]
    
    1.  [HTML][6]
        
    2.  [CSS][7]
        
    3.  [JavaScript][8]
        
    4.  [Frontend Frameworks and Libraries][9]
        
    5.  [Responsive Design][10]
        
3.  [Backend Development][11]
    
    1.  [Why you should learn a programming language?][12]
        
    2.  [Python][13]
        
    3.  [Golang][14]
        
    4.  [Java][15]
        
    5.  [JavaScript][16]
        
    6.  [How to choose a programming language?][17]
        
    7.  [Backend Frameworks][18]
        
    8.  [Databases][19]
        
    9.  [APIs][20]
        
4.  [Git and GitHub][21]
    
5.  [Build a portfolio of projects][22]
    
6.  [Deployment and Hosting Services][23]
    
7.  [Additional Tips][24]
    

## What is a Website?

A web page is a document displayed in a web browser (like Chrome, Firefox, and so on). It consists of text, images, and other interactive elements. And a website is a collection of web pages that are connected to each other via links.

A website runs on a remote computer referred to as a web server, and is accessed via the internet. Some examples of well-known websites are Wikipedia, Amazon, and YouTube.

**Note**: When I mention web apps or web applications in this article, I mean the same thing as websites.

A web app has two components, the frontend and the backend. Let’s understand the difference between them.

### Frontend vs Backend of a Website

The frontend is the user interface (UI) of the website, which is basically what the user sees on their screen.

The backend refers to the server where the main logic of the website is located. It also includes the database, where all the application’s data is stored.

The frontend and the backend communicate by exchanging data. Let’s take an example of a social media app like Instagram.

When you upload a post, the UI sends the post data to the backend, which processes the data and adds it to the database. Then the next time, when you load the site/app, it fetches all your posts from the backend and displays them on the screen.

In the next two sections, I will show how you can start with frontend and backend development.

## Frontend Development

As I mentioned above, frontend development is mainly concerned with the UI – that is, the appearance of the website. To get started with frontend development, you’ll need to learn the following three essentials tools:

### HTML

HTML (HyperText Markup Language) is used to write web pages that are displayed by the browser. It defines the structure and content of a web page, making it the backbone of every website.

The content of a web page includes elements such as headings, paragraphs, links, images, lists, and so on. HTML creates and structures all these elements through the use of HTML _tags._ The browser, in turn, interprets this HTML code and renders it on your screen.

freeCodeCamp’s Responsive Web Design certification in their free curriculum starts off by teaching you HTML basics. You’ll even build your own photo app. So that’s a good place to start and dig deep into HTML.

If you want additional practice, [w3schools.com][25] is a helpful resource for beginners as well. It offers clear and step-by-step tutorials for each concept. They also provide an interactive editor for you to practice using HTML tags and see the output web page (as does freeCodeCamp).

Focus on the following areas:

-   Creating a simple web page
    
-   Using HTML tags to render content
    
-   Creating Forms
    

### CSS

While HTML defines the structure of the web page, it is not enough as it just creates a skeletal UI of a web page. It just defines what elements are present on the page, and not how they look.

CSS (Cascading Style Sheets) is used to add visual appeal to the web page. It transforms a simple, plain web page into a properly designed user interface.

Here’s how a website looks with plain HTML:

![1*SUE5ynYY1Tu5BXOQZCoJtQ](https://miro.medium.com/v2/resize:fit:1400/1*SUE5ynYY1Tu5BXOQZCoJtQ.png)

And this is what it looks like when you add CSS:

![1*9cVIjOqY-sQESGI9qDVw0w](https://miro.medium.com/v2/resize:fit:1400/1*9cVIjOqY-sQESGI9qDVw0w.png)

Much better, right? It actually looks like a proper web page, as compared to the skeletal UI before. This is referred to as “styling” a web page.

CSS styling includes the following:

-   Colours, fonts, and element backgrounds
    
-   Organising content in various layouts (grid, flex box, and so on)
    
-   Spacing, that is margins and paddings
    
-   Transitions and Animations (Advanced stuff)
    

As you continue on in the freeCodeCamp curriculum, you’ll learn CSS as well – so that’s a great way to go.

You can also refer to [w3schools.com][26] for CSS Tutorials. Play around with each CSS property in their interactive editors.

**Note:** HTML and CSS are NOT programming languages.

### JavaScript

HTML and CSS are only able to create static websites – that is, you cannot interact with any of the elements on a web page created with just HTML and CSS. The website does not update or respond to any user interactions like button clicks or dropdown selections.

JavaScript (JS) is a programming language that makes a website dynamic and interactive. It adds the following functionalities to a website:

-   Handling user interactions like clicks, hovers, keyboard presses, form filling, and so on.
    
-   Updating content dynamically on a web page
    
-   Handling form validations and submissions
    
-   Interacting with the backend servers
    

JavaScript has many more capabilities that make your website functional and engaging for end users. As you start your JS learning journey, building strong foundation of the concepts is key. Initially, focus on the following areas:

-   Basic JavaScript syntax
    
-   JS Functions
    
-   Interacting with DOM (Document Object Model)
    
-   Event Handling
    
-   JS Objects and Arrays
    
-   Asynchronous JavaScript
    

Refer to the following resources for JavaScript:

-   [freeCodeCamp][27] for a free, in-depth, JS curriculum

-   [w3schools.com][28] for basic JavaScript tutorial
    
-   [JavaScript Interview Prep Handbook][29] for important JavaScript concepts.
    

There are a lot of other resources for JavaScript, but I won’t overwhelm you with too many. These two should be enough to get started.

Once you are familiar with HTML, CSS, and JavaScript, you’ll know how to create a simple web page. Keep practicing by building different web pages, such as to-do lists and forms, and try implementing CRUD (Create, Read, Update, Delete) features.

### Learn Frontend Frameworks and Libraries

As your website grows, the JavaScript code becomes more and more complex and harder to maintain. This slows down the development process and makes it really challenging for developers.

To address these issues, you can use frameworks and libraries. Frameworks provide a more structured way to build web apps, encouraging modular design and reusability.

By using frameworks, you can focus on building actual features rather than handling the complexities of JavaScript code, which helps you speed up the development process. So I suggest picking up one JS framework/library to develop bigger projects.

#### React.js – a good option

React JS is a JavaScript library that makes it easy to create dynamic and interactive web pages. It divides your code into components, making it easy to read and maintain. This reduces code complexity and allows reusability.

React is my personal suggestion since it has a gentler learning curve compared to other frameworks. It is in very high demand among frontend roles, as many web apps are built in React.

To start learning React, your best resource is the [React Docs][30]. They are very detailed, and include interactive code editors to play around with.

The freeCodeCamp YouTube channel also has some helpful React courses, like [this one from Bob Ziroll][31], and the Frontend Development Libraries certification has a [React section as well][32].

Apart from React, there are other JavaScript frameworks like Angular, Vue, and the jQuery library. These remain popular as well, and depending on which tools are in demand in your area, you can focus on the one that will meet your needs the best.

**Note:** Make sure you learn all the basic JavaScript concepts and understand them fully before jumping into any framework.

### Learn Responsive Design

Before moving on, let’s talk about a fundamental practice in web development.

Responsive design refers to an approach where your design adjusts to fit screens of all sizes, ranging from desktops to tablets and mobiles. A good responsive design drastically reduces the need to write separate code for different screen sizes.

Here’s an interesting fact: _mobile phones make up two-thirds of web usage in the entire world._ So, to ensure a good user experience, you need to make the website look good on mobile phones.

Learn more about responsive design in this [simple guide][33], and read more about [some best practices here][34].

And here are some other resources that can help you on your frontend journey:

-   [MDN Docs][35]
    
-   [WebDevSimplified][36] - YouTube Channel
    

## Backend Development

Backend Development involves building the server-side of web applications. The server-side hosts the business logic of a website, that powers everything behind the scenes. It is also responsible for managing databases and ensuring smooth flow of data between server and the UI.

To dive into backend development, you need to learn a programming language first.

### Why should you learn a programming language?

Learning a programming language equips you with the foundations to build these server-side applications. Think of a language as a way to tell the server what you want it to do.

A programming language serves as a tool to solve problems and create robust, working applications. These languages have various capabilities for handling tasks like storing and managing data, communicating with the front end, and ensuring application security.

Learning a programming language isn’t just about learning the syntax and writing code. It’s about understanding how to create systems that drive a successful website. So, getting familiar with a programming language is a key part of backend development.

There are a number of programming languages out there, each with its own features. Let’s understand a few options:

### Python

Python is one of the preferred choices for backend development because of its simplicity. It has a concise and readable syntax making it very popular. It offers good features for database connections and setting up web servers. Python also has libraries for data science and machine learning.

Python is has a lot of tutorials and good community support, making it easy to get started with. It is beginner friendly, fun to learn and has a high demand.

Refer to the following resources for learning Python:

-   [Ultimate Python Beginner’s Course][37] on freeCodeCamp’s YouTube channel
    
-   [GeeksforGeeks][38] Python Tutorial
    
-   [Python Tutorial for Beginners on YouTube][39] (Hindi)
    
-   [Machine Learning with Python][40] – freeCodeCamp certification
    

### Golang

Golang (Go) is increasing in popularity because of its simplicity and efficiency. Go code executes quickly and efficiently, making it a good option for high performance needs. This also leads to faster development time. Go also has excellent support for [concurrency][41], which leads to efficient processing.

Go is beginner-friendly and has a clean and concise syntax, making it easy to read and maintain. It also has an extensive standard library offering a many built-in functions and tools, so it’s easy to set up a project without much hassle.

Go is growing in popularity because of its efficiency, and many companies are adopting Go for their projects. This has lead to an increasing demand for Golang developers and it’s expected to go up.

Go offers plenty of resources and a growing community for beginners. To get started with Go, refer to the following resources:

-   [Tour of Go][42] – Interactive Learning with basic Golang concepts
    
-   [Golang Handbook][43] from Flavio Copes
    
-   [Go Docs][44] – Very detailed
    

### Java

Java is an [Object-Oriented Programming][45] (OOP) language, widely used for backend development. Java is known for its security and robustness, making it a preferred choice for applications that require high reliability such as financial and healthcare systems. Java also offers a great support for concurrency.

Java is a good option for beginners as it has extensive resources and a large developer community. This includes plenty of tutorials and detailed documentation to make life easier for beginners as well as experienced developers.

Java has been around for a while, and many existing systems and enterprise applications currently run on Java. So, there is a huge demand for Java developers among big enterprises.

Lastly, the concepts that you learn while coding in Java stick with you and make you a better developer, even if you switch languages going forward.

The following resources can help you get started with Java:

-   [Java Programming for Beginners on freeCodeCamp.org][46]
    
-   [Objects-Oriented Programming in Java][47]
    

### JavaScript

We already know what JavaScript offers to frontend, but it can also be used for backend development through NodeJS.

NodeJS is a run time environment that allows you to run JS code on the server side. This makes it possible to use JavaScript for both the frontend and the backend.

NodeJS follows an event-driven architecture and asynchronous programming, which enables it to handle multiple tasks without stopping execution for a single one (non-blocking I/O). Node is single threaded, so instead of creating multiple threads to handle tasks, it executes them one by one asynchronously by queuing tasks.

Node also follows a modular architecture, meaning you can break your application into smaller, manageable components. It also includes [NPM][48] (Node Package Manager) which provides access to thousands of open-source libraries to add functionality like routing, authentication, or database handling.

Why use Node?

-   This is a very good option if you are already familiar with JavaScript, as you don’t need to learn any other language.
    
-   Node is fast and efficient, making it easy if you want to set up a small server quickly.
    
-   Node also has a large ecosystem of libraries through NPM.
    

However, Node is not ideal for CPU-intensive tasks as they can block the main thread, since it’s single threaded.

### How to choose a programming language?

With so many options available, it may feel confusing to choose the right one for you. Each language has its own capabilities and no language is objectively better than the other.

Python and Golang are very beginner-friendly with simple syntax. So, if you value a gentle learning curve, then these two are good options. Java is known for its reliability and robustness, with a lot of enterprise-level applications built using Java.

As for the job opportunities, there’s [high demand][49] for each of the above languages, so you can choose any one you want. The most important thing is to develop your problem solving skill and understand how reliable software is built.

The choice of language doesn’t really matter in the long run, since the core fundamentals remain the same. So, my advice is to pick any language, learn its syntax and core capabilities, and start solving problems. You can start with the following:

-   [Learn Data Structures and Algorithms][50]
    
-   [Start solving problems on LeetCode][51]
    
-   Learn language specific frameworks and develop projects (Upcoming section)
    

### Backend Development Frameworks

Programming languages alone are not enough to create robust and secure applications. Frameworks, built on the capabilities of these languages, allow you to create these powerful applications. By providing additional functionalities like routing and database handling, they serve as a platform to put your coding skills to the test and also make the development process faster.

Depending on your language of choice, you can learn the following frameworks:

-   [Django][52] and [Flask][53] – Python Based Frameworks
    
-   [Java Spring Boot][54]
    
-   [Gin][55] – Golang framework (You can create a simple Golang application without using a framework)
    

Read more about them if you are interested.

### Databases

A database is a structured collection of data and is a crucial part of backend development. It plays an important role in storing and managing the application’s data.

Databases are broadly categorised into two types:

-   **Relational Databases** use tables to store data and define relationships between those tables. Examples are [MySQL][56], [PostgreSQL][57], [SQLite][58].
    
-   **Non-Relational Databases (NoSQL)** are designed to handle unstructured or semi-structured data and are often used for hierarchical or document-based data storage. Examples are [MongoDB][59] and [Cassandra][60].
    
    -   **MongoDB**: A popular NoSQL database for flexible and scalable data storage.
        
    -   **Cassandra**: Suitable for handling large amounts of distributed data.
        

To begin with relational databases, [learn SQL (Structured Query Language)][61]. SQL is used to write queries that perform various operations on the data, such as:

-   **Creating** tables and defining their structure.
    
-   **Reading** data using SELECT statements.
    
-   **Updating** existing records.
    
-   **Deleting** unnecessary or outdated data.
    

Refer to the following resources to learn SQL:

-   [Full handbook on SQL][62]
    
-   [w3schools.com][63]
    
-   [GeeksforGeeks][64] – Great resource to learn about database concepts
    

Once you are familiar with basic SQL syntax and are able to write queries, explore [DBMS (DataBase Management System)][65] concepts. These help you understand how databases are designed, managed, and optimised.

As a beginner, I recommend starting with relational databases because they provide a solid foundation in DBMS concepts involving tables and relationships between them. They are much more widely used among enterprises and learning their concepts can benefit you a lot.

These concepts might take some time to study, but don't worry about it. Take your time and keep working on the development stuff in parallel. You'll understand these concepts better as you gain more experience working with databases.

### APIs

APIs (Application Programming Interfaces) are an essential part of backend development as they expose the backend logic to the outside world. APIs are a way for two different applications to communicate with each other. In the context of web development, the frontend interacts with the backend services through APIs.

When you build a web application, the frontend often needs to send and receive data from the backend. Let’s take an example of login functionality. When a user logs in, the frontend sends their credentials to the backend through an API call. The backend verifies this information and responds with the result.

To see these API calls, visit any website and open the Network Tab in Developer Tools. Interact with the website, or just reload the page, you’ll see the API calls being made as you use the website.

Read the following articles to understand more about APIs:

-   [GeeksforGeeks - What is an API?][66]
    
-   [Full beginner-friendly course on APIs][67]
    
-   [How does an API work?][68]
    

At this point, you know how to start with both frontend and backend development. If you've reached this stage, congratulations! You've completed most of the hard work. But there’s one more thing you need to learn before you start developing projects.

## Git and GitHub

Git is a version control system that keeps track of changes in a software project. It allows multiple people to work on the project without directly interfering with each other’s work.

GitHub is a remote repository system based on Git. It is like social media, but for your code. GitHub encourages collaboration among developers and keeps track of everyone’s contributions.

GitHub lets you share your project code and view other developers' code, too. This facilitates increased collaboration and learning. I strongly recommend learning Git, especially at the beginning of your development journey.

To get started with Git and GitHub, refer to the following articles:

-   [Learn the Basics of Git in Under 10 Minutes][69]
    
-   [Full book on Git and GitHub + version control basics][70]
    
-   [Getting Started with GitHub][71]
    

## Build a Portfolio of Projects

Now, you are ready to start working on projects. A strong portfolio of projects is essential for showcasing your skills. It also helps you apply what you have learned so far and improves your problem-solving skills.

Consider the following project ideas:

-   Todo App
    
-   E-Commerce App
    
-   Personal Portfolio website
    
-   Weather App – Use a public API and create a simple UI
    
-   Expense Tracker
    

You can research more about these ideas and start with some basic features that come to mind. Build either the frontend, the backend, or both, depending on your goals. Share your projects on GitHub to increase their visibility.

Check out [GeeksforGeeks][72] for more project ideas.

## Deployment and Hosting Platforms

Once you have developed a web project, you can choose to release it to the public. This means that your website will be available on the internet for the public to use. How exciting is that!

Let’s understand the above terms. **Deployment** refers to the process of uploading your application to a remote system or a server in order to make it live and available to users. **Hosting** is like renting a space on the Internet for storing your application code. It provides a space to keep your website’s data on the server and displays your website on the internet.

Deploying and Hosting an application mainly follows these steps:

-   The application code is written, tested locally, and optimised for production
    
-   The required configurations and secrets (passwords, API keys, and so on) are written as environment variables
    
-   The code is pushed to a version control system like GitHub or GitLab
    
-   The code is scanned for any security vulnerabilities and automated tests are run
    
-   Hosting platforms pull the code from these repositories and make it accessible on the internet.
    

Hosting services like [Netlify][73], [GitHub Pages][74], and [Heroku][75] offer free and paid services and are easy to use for beginners. Netlify only supports frontend applications while Heroku is good for backend and full stack applications with easy integration of databases. GitHub Pages lets you host right from your repository.

Releasing your website to the public is a great opportunity to showcase your work to recruiters and potential collaborators.

## Additional Tips

1.  Don't spend too much time on tutorials, as you might get stuck in "tutorial hell." Tutorials are important for understanding core concepts, but real learning happens when you work hands-on. So start building as soon as you can, even if it’s just small projects at first.
    
2.  JavaScript might seem overwhelming at first, but start small and practice regularly. Don’t rush to learn multiple things at once, tackle one concept at a time and practice through code for better understanding.
    
3.  Experiment with different frameworks initially to find one that works for you. Once you choose a framework, stick with it until you learn it well.
    
4.  Ensure that your programming language concepts are clear before jumping into any framework.
    
5.  If you feel that a programming language is not working for you, you can switch to a different one, the core fundamentals remain the same.
    
6.  As a beginner, it's important to have a basic understanding of both the frontend and the backend. Later, you can choose to specialise in one or you can choose to focus on both, becoming a "full stack" developer.
    
7.  You will face challenges at first, so don't get discouraged. Keep practicing, and you will get better over time.
    
8.  If you are stuck on any issue, use Chat GPT, Google Search, forums and developer communities, and Stack Overflow as much as possible. I am always available if you need any help.
    
9.  Lastly, stay updated with the latest trends and technologies in web development. Always look for new or improved ways to solve problems. Learning never stops!
    

## Conclusion

Web Development is divided into two parts: frontend and backend development. The frontend is concerned with the website’s appearance while the backend focuses on the server-side logic and databases.

HTML, CSS, and JavaScript are the essentials in frontend development and form the backbone of a website. In backend development, learning a programming language like Python or Java is key. Both frontend and backend frameworks provide additional capabilities and make the development process faster.

Git is a must-have skill as it allows you to share your work and collaborate with other developers. Building a portfolio of projects and sharing on GitHub showcases your work and makes you a better developer. Lastly, utilise deployment platforms as they make your website available to the general public.

That’s it for today! I hope this article helps you start your web development journey. Let me know what you think. Your feedback is always appreciated!

Connect with me on Twitter for more updates and discussions. If you have any questions or clarifications, feel free to reach out. Thank you for reading, and I look forward to seeing you next time!

### **References:**

-   [How to become a web developer][76]
    
-   [Building your first website][77]
    
-   [Getting started with backend engineering][78]
    
-   [Developer roadmap][79]
    

[1]: https://www.webfx.com/web-development/statistics/
[2]: https://medium.com/gitconnected/read-this-to-kickstart-your-web-development-journey-26f54b1a4843
[3]: #heading-what-is-a-website
[4]: #heading-frontend-vs-backend-of-a-website
[5]: #heading-frontend-development
[6]: #heading-html
[7]: #heading-css
[8]: #heading-javascript
[9]: #heading-learn-frontend-frameworks-and-libraries
[10]: #heading-learn-responsive-design
[11]: #heading-backend-development
[12]: #heading-why-should-you-learn-a-programming-language
[13]: #heading-python
[14]: #heading-golang
[15]: #heading-java
[16]: #heading-javascript-1
[17]: #heading-how-to-choose-a-programming-language
[18]: #heading-backend-development-frameworks
[19]: #heading-databases
[20]: #heading-apis
[21]: #heading-git-and-github
[22]: #heading-build-a-portfolio-of-projects
[23]: #heading-deployment-and-hosting-platforms
[24]: #heading-additional-tips
[25]: https://www.w3schools.com/html/
[26]: https://www.w3schools.com/css/default.asp
[27]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/
[28]: https://www.w3schools.com/js/default.asp
[29]: https://www.freecodecamp.org/news/js-interview-prep-handbook/
[30]: https://react.dev/learn
[31]: https://www.freecodecamp.org/news/learn-react-2024/
[32]: https://www.freecodecamp.org/learn/front-end-development-libraries/#react
[33]: https://levelup.gitconnected.com/read-this-to-make-your-website-responsive-35af4ab7992b
[34]: https://www.freecodecamp.org/news/responsive-design-best-practices/
[35]: https://developer.mozilla.org/en-US/docs/Learn
[36]: https://www.youtube.com/@WebDevSimplified
[37]: https://www.freecodecamp.org/news/ultimate-beginners-python-course/
[38]: https://www.geeksforgeeks.org/python-programming-language-tutorial/
[39]: https://youtu.be/vLqTf2b6GZw?si=hcggX88jmrVYvpC5
[40]: https://www.freecodecamp.org/learn/machine-learning-with-python/
[41]: https://gowthamy.medium.com/concurrent-programming-introduction-1b6eac31aa66
[42]: https://go.dev/tour/welcome/1
[43]: https://www.freecodecamp.org/news/go-beginners-handbook/
[44]: https://go.dev/doc/
[45]: https://medium.com/gitconnected/come-and-join-the-beautiful-world-of-java-9cedc815bafa
[46]: https://www.youtube.com/watch?v=A74TOX803D0
[47]: https://www.freecodecamp.org/news/object-oriented-programming-concepts-java/
[48]: https://docs.npmjs.com/about-npm
[49]: https://codeop.tech/blog/programming-languages-in-demand/
[50]: https://www.geeksforgeeks.org/how-to-start-learning-dsa/
[51]: https://leetcode.com/discuss/study-guide/623011/A-guide-for-dummies-\(like-me\)
[52]: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction
[53]: https://www.geeksforgeeks.org/python-introduction-to-web-development-using-flask/
[54]: https://spring.io/projects/spring-boot
[55]: https://gin-gonic.com/docs/introduction/
[56]: https://www.geeksforgeeks.org/what-is-mysql/
[57]: https://www.postgresql.org/about/
[58]: https://www.simplilearn.com/tutorials/sql-tutorial/what-is-sqlite
[59]: https://www.geeksforgeeks.org/what-is-mongodb-working-and-features/
[60]: https://www.geeksforgeeks.org/apache-cassandra-nosql-database/
[61]: https://www.freecodecamp.org/news/learn-sql-free-relational-database-courses-for-beginners/
[62]: https://www.freecodecamp.org/news/a-beginners-guide-to-sql/
[63]: https://www.w3schools.com/sql/
[64]: https://www.geeksforgeeks.org/sql-tutorial/
[65]: https://www.geeksforgeeks.org/dbms/
[66]: https://www.geeksforgeeks.org/what-is-an-api/
[67]: https://www.freecodecamp.org/news/apis-for-beginners/
[68]: https://www.freecodecamp.org/news/how-apis-work/
[69]: https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/
[70]: https://www.freecodecamp.org/news/gitting-things-done-book/
[71]: https://docs.github.com/en/get-started/start-your-journey
[72]: https://www.geeksforgeeks.org/web-development-projects/
[73]: https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
[74]: https://pages.github.com/
[75]: https://www.heroku.com/
[76]: https://www.geeksforgeeks.org/can-start-learn-web-development/
[77]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website
[78]: https://medium.com/shecodeafrica/getting-started-with-backend-engineering-a-beginners-guide-2426759238ea
[79]: https://www.youtube.com/watch?v=CWAi_2oLhYg