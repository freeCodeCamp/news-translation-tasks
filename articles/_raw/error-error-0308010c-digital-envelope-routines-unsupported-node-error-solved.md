---
title: "Error: error:0308010c:digital envelope routines::unsupported [Node Error
  Solved]"
date: 2024-08-27T13:46:01.360Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/
posteditor: ""
proofreader: ""
---

If you work with Node.js and command line interface solutions like Webpack, create-react-app, or vue-cli-service, you might have encountered the error, `Error: error:0308010c:digital envelope routines::unsupported`.

<!-- more -->

You’re not alone, because I’m currently getting it too:

![ss1-1](https://www.freecodecamp.org/news/content/images/2022/11/ss1-1.png)

The React app indeed failed to start:

![ss2-1](https://www.freecodecamp.org/news/content/images/2022/11/ss2-1.png)

In this article, you’ll learn how to fix this error in 3 ways. But first, let’s discuss what causes the error.

## What Causes the "0308010c:digital envelope routines::unsupported" Error?

You are likely getting this error because of 2 main reasons:

-   you’re not using the LTS (long term support) version of Node JS. You can see I’m using Node 17.0.0, which is not an LTS version of Node.
-   you’re using react-script with a version less than 5

The error can also occur because you’re using Node 17.

## How to Fix the "0308010c:digital envelope routines::unsupported" Error

There are at least 3 ways by which you can fix this error. We are going to look at them one by one. Any of them should work for you.

### Pass `--openssl-legacy-provider` to Webpack or the CLI Tool

In a React app, for instance, you can pass `--openssl-legacy-provider` to the start script like this `"react-scripts --openssl-legacy-provider start"`.

That should do it. But if this fails to fix the error, then proceed to the next fix. On many occasions, it works.

### Use an LTS Version of Node JS

Consider downgrading your Node version to 16.16.0 or other LTS versions.

Currently, 18.12.1 is the latest LTS version of Node. You can download it from the Node JS official website or use NVM to install it.

### Upgrade React Script to Version 5+

If you’re working with React and this still fails to fix the error for you, then it’s likely an issue with your React script.

If you’re using a React script version less than 5, then you should upgrade it to version 5+.

In my case, I’m currently using react-scripts 3.4.3:

![ss3](https://www.freecodecamp.org/news/content/images/2022/11/ss3.png)

To upgrade react-scripts to 5+, you can do it in two ways:

-   Uninstall and reinstall react-scripts
    
    -   open the terminal and run `npm uninstall react-scripts`
    -   run `npm install react-scripts`
-   Manually change the react script version
    
    -   go to your `package.json` and change the react-script version to 5.0.2
    -   delete the node\_modules folder by running `rm –rf node_modules`
    -   delete the package.lock.json file by running `rm –rf package.lock.json`
    -   run `npm install` or `yarn add`, depending on the package manager you’re using

After upgrading the version of react-scripts to 5+, my React app is now working fine:

![ss4](https://www.freecodecamp.org/news/content/images/2022/11/ss4.png)

![ss5](https://www.freecodecamp.org/news/content/images/2022/11/ss5.png)

## Conclusion

As already pointed out in this article, if you are getting the "0308010c:digital envelope routines::unsupported" error, then it could happen you’re not using an LTS version of Node JS, or you’re using react-scripts version <5.

Hopefully the fixes we discussed in this tutorial help you fix this error. If any of the fixes fail to work for you, then you should try the others. In my case, upgrading react-scripts to 5+ was what worked for me.

Thank you for reading.