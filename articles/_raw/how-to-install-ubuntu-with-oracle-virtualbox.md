---
title: How to install Ubuntu on VirtualBox
date: 2024-09-27T11:14:36.705Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-install-ubuntu-with-oracle-virtualbox/
posteditor: ""
proofreader: ""
---

By Thanoshan MV

<!-- more -->

## What is VirtualBox?

Oracle VM VirtualBox is a cross-platform virtualization application developed by the Oracle Corporation. It allows users to install operating systems on virtual hard disks such as Windows, macOS, Solaris and Linux.

As an example, you can run Windows and Linux on your Mac, run Windows server on your Linux server, or run Linux on your Windows PC while running your other existing applications.

Disk space and memory are the only problems that you'll face when installing multiple virtual machines.

## Why You’ll Need It

-   Oracle’s VirtualBox is easy to install and use
-   It's free
-   You can run and experience any operating system safely
-   If you’re a developer, VirtualBox can be used as a tool for safely testing your own development projects in multiple OS environments
-   It can run everywhere from small embedded systems to laptops
-   It's good for testing and disaster recovery as it can be easily copied, backed-up, and transported between hosts

## VirtualBox Installation

VirtualBox can be downloaded here: [VirtualBox Downloads][1]

## Why Ubuntu?

-   It's free
-   Easy customization: The GNOME desktop environment helps you customize easily
-   It's secure
-   Ubuntu is open-source
-   Friendly and supportive community
-   Low system requirements
-   According to [FOSSBYTES][2], Ubuntu is the second best Linux distro for programming and developers \[2019 Edition\]
-   It's beginner friendly

## Setup for Ubuntu

First, open VirtualBox, then click "New" to create a virtual machine.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/start-1.png)

Enter "Ubuntu" as the name, select "Linux" as the type, and select Ubuntu (64-bit) as the version.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--14-.png)

**NOTE**: Select any amount of memory you wish, but don't add more than 50 percent of your total RAM.

Check the "Create a virtual hard disk now" option so we can later define our Ubuntu OS virtual hard disk size.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--16-.png)

Now, we want to select "VHD (Virtual Hard Disk)".

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--17--1.png)

Next, we'll dynamically allocate storage on our physical hard disk.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--18-.png)

We want to specify our Ubuntu OS's size. The recommended size is 10 GB, but you can increase the size if you wish.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--19-.png)

After creating a virtual hard disk, you'll see Ubuntu in your dashboard.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--20-.png)

Now, we have to set up the Ubuntu disk image file (.iso).

The Ubuntu disk image file can be downloaded here: [Ubuntu OS download][3]

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--23-.png)

To set up the Ubuntu disk image file, go to settings and follow these steps:

1.  Click "Storage"
2.  In storage devices, click "Empty"
3.  In attributes, click the disk image and "Choose Virtual Optical Disk File"
4.  Select the Ubuntu disk image file and open it

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--25-.png)

Click OK.

Your Ubuntu OS is ready to install in VirtualBox. Let's start!

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--26-.png)

**NOTE:** Ubuntu VirtualBox installation and actual OS installation steps may vary. This guide helps you to install Ubuntu in VirtualBox only.

## Let's install Ubuntu!

Click Install Ubuntu.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--27-.png)

Select your keyboard layout.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--29-.png)

In the "Updates and other software" section, check "Normal installation" and continue.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--30-.png)

In "Installation type", check "Erase disk and install Ubuntu".

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--31-.png)

Click "Continue".

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--32-.png)

Choose your current location.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--33-.png)

Now, set up your profile.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--34-.png)

You'll see Ubuntu installing.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--35-.png)

After the installation, restart it.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--36-.png)

After logging in, you'll see the Ubuntu desktop.

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--40-.png)

We have successfully installed Ubuntu in VirtualBox. It's ready to use for your future development projects.

## Let's verify the installation.

Open your terminal (Press Ctrl+Alt+T) and type in the commands below and check if they work.

1.  pwd: This will print the current working directory
2.  ls: This will list all items in your current directory

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--43-.png)

After checking those, power off your machine by using the following command.

```
poweroff
```

![Image](https://www.freecodecamp.org/news/content/images/2019/11/Screenshot--44-.png)

## Conclusion

VirtualBox is free and is a great tool for running multiple operating systems on a single OS. Ubuntu has many benefits. If you're a beginner to Linux, I would recommend you use Ubuntu as it's beginner friendly.

Please feel free to let me know if you have any questions.

You can contact and connect with me on [Twitter][4] and [Medium][5].

Thank you for reading.

**Happy Coding!**

[1]: https://www.virtualbox.org/wiki/Downloads
[2]: https://fossbytes.com/best-linux-distros-for-programming-developers/
[3]: https://ubuntu.com/#download
[4]: https://twitter.com/ThanoshanMV
[5]: https://medium.com/@mvthanoshan9