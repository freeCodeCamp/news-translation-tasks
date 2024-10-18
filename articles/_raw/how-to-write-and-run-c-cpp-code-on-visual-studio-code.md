---
title: How to Write And Run C and C++ Code in Visual Studio Code
date: 2024-10-18T11:32:32.141Z
author: Md. Fahim Bin Amin
authorURL: https://www.freecodecamp.org/news/author/FahimFBA/
originalURL: https://www.freecodecamp.org/news/how-to-write-and-run-c-cpp-code-on-visual-studio-code/
posteditor: ""
proofreader: ""
---

Visual Studio Code (or VS Code for short) is a very common and widely used text editor and IDE (Integrated Development Environment). You can make VS Code very powerful like an IDE using a lot of extensions.

<!-- more -->

Before approaching the process of running your first C or C++ code on Visual Studio Code, let me guide you through the process and get it all set up based on the operating system you are using on your computer.

## C and C++ compilers

For running C or C++ code, you just need to have a valid C/C++ compiler installed on your computer. If you are using a Linux operating system, then there is a high chance that it is already installed on your system. But we need to make sure that it is correctly installed.

For checking whether or not you have the compiler (GCC/G++/MinGW) installed on your system or not, you have to check the compiler version first.

Simply open your terminal and use `gcc --version` and `g++ --version`. If you get the version number, then the compiler is already installed on your system.

You can check the version using the same commands on any operating system, whether that is a Windows, Linux, or macOS-based operating system.

If you get feedback on your terminal that it does not know anything about GCC or G++, then you have to install the compiler correctly.

If you are using the most used Windows operating system, then I already have written an in-depth article showing you all the processes step-by-step on freeCodeCamp. Make sure to read the entire article first, as it also contains a complete video to provide you with complete support.

[Embedded content][1]

If you are using another operating system, and you don't have the compilers installed, then make sure to install them before proceeding.

## How to Install VS Code or VS Code Insiders

You have to download Visual Studio Code directly from the official website: [https://code.visualstudio.com/][2].

If you want, you can also install VS Code Insiders, and the same process is applicable for that as well.

Visual Studio Code Insiders is actually the "Insiders" build of Visual Studio Code, which contains all the latest features that are shipped daily. You can think of VS Code as the stable release and the VS Code Insiders as the Insiders release of that.

If you want to experience the latest updates instantly, then you might also try Visual Studio Code Insiders (I use it myself). For downloading VS Code Insiders, you can visit the official website for VS Code Insiders here: [https://code.visualstudio.com/insiders/][3]

Make sure to download the exact file for your operating system.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-163.png) _**Download Page: VS Code**_

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-164.png) _**Download Page: VS Code Insiders**_

The installation process is pretty basic. But I am going to show you all the steps sequentially. For now, I am going to show you the installation process using VS Code Insiders, but everything you will see here is going to be exactly the same for VS Code as well.

Make sure to click the box on the "I accept the agreement " box and click on **Next**.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-165.png) _**Accept the agreement and click Next**_

Keep everything as it is. Do not change anything from here.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-168.png) _**Click Next**_

Click **Next**. Again, simply click **Next**.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-170.png) _**Click Next**_

Make sure to add the checkmark (✔) on all of the boxes. Then click on **Next**.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-171.png) _**Check all of the boxes, and click Next**_

Click on **Install**.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-172.png) _**Click Install**_

It might take a little time to finish the installation.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-173.png) _**Let it finish...**_

Click on **Finish**.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-175.png) _**Click Finish**_

Congrats - you've successfully installed VS Code/VS Code Insiders on your system. Now, cheers! 🥂

## How to Prepare VS Code/VS Code Insiders For C and C++ Code

First, open VS Code or VS Code Insiders.

Go to the Extension tab. Search for "C" or "C++" and install the first one that is already verified by Microsoft itself.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-178.png) _**Install C/C++ extension**_

Also, install **C/C++ Extension Pack**. It should also be verified by Microsoft.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-179.png) _**Install C/C++ Extension Pack**_

Then you have to search for **Code Runner** and install the extension as well.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-180.png) _**Install Code Runner Extension**_

Now, we need to change some settings.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-177.png) _**Change some settings**_

Click the **gear** box (It is called the Manage section), and then click **Settings**. Alternatively, you can also use the shortcut keys `Ctrl` + `,`. You need to replace the `Ctrl` key with the Command key for Mac.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-182.png) _**Type "Run code in terminal" and press Enter key**_

In the search bar, type "Run code in terminal" and press the Enter key.

Scroll down a little bit until you find `Code-runner: Run In Terminal`. Make sure that the box is checked (✔).

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-184.png) _**Make sure to check the box**_

Now you need to restart your VS Code/VS Code Insiders. Simply close and reopen the program.

## How to Test Your Code

Simply open VS Code/VS Code Insiders, open any folder, and create any file with the extension `.c` for the C file and `.cpp` for the C++ file.

After writing your code, you can run the code directly using the play button you'll find in the upper right corner.

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-185.png) _**This is how you can run any C/C++ program from VS Code/Insiders**_

It will compile and then run the code directly. After running a code, the code runner button would be set default to run directly. So, your computer is 100% ready for compiling and running any C/C++ programming code. 😀

## Conclusion

Thanks for reading the entire article. If it helps you then you can also check out other articles of mine at [freeCodeCamp][4].

If you want to get in touch with me, then you can do so using [Twitter][5], [LinkedIn][6], and [GitHub][7].

You can also [SUBSCRIBE to my YouTube channel][8] (Code With FahimFBA) if you want to learn various kinds of programming languages with a lot of practical examples regularly.

If you want to check out my highlights, then you can do so at my [Polywork timeline][9].

You can also [visit my website][10] to learn more about me and what I'm working on.

Thanks a bunch!

[1]: https://www.freecodecamp.org/news/how-to-install-c-and-cpp-compiler-on-windows/
[2]: https://code.visualstudio.com/
[3]: https://code.visualstudio.com/insiders/
[4]: https://www.freecodecamp.org/news/author/fahimbinamin/
[5]: https://twitter.com/Fahim_FBA
[6]: https://www.linkedin.com/in/fahimfba/
[7]: https://github.com/FahimFBA
[8]: https://www.youtube.com/@FahimAmin?sub_confirmation=1
[9]: https://www.polywork.com/fahimbinamin
[10]: https://fahimbinamin.com/