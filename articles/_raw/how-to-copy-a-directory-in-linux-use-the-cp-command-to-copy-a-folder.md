---
title: How to Copy a Directory in Linux – Use the cp Command to Copy a Folder
date: 2024-08-27T12:15:29.968Z
author: Shittu Olumide
authorURL: https://www.freecodecamp.org/news/author/shittuolumide/
originalURL: https://www.freecodecamp.org/news/how-to-copy-a-directory-in-linux-use-the-cp-command-to-copy-a-folder/
posteditor: ""
proofreader: ""
---

Often times you'll want to copy a folder in Linux to perform specific tasks – maybe for backup, sharing, editing, an so on. This is a frequent task that you can perform using the `cp` command.

<!-- more -->

The `cp` command is a simple yet powerful command you can use to copy files and directories in Linux. In this tutorial, we will discuss how to use the `cp` command to copy a folder in Linux.

The steps you'll need to follow to copy a directory in Linux using the `cp` command are as follows:

## Step 1: Open the Terminal

To copy a folder in Linux, you need to open the terminal. You can open the terminal by pressing the `Ctrl+Alt+T` shortcut keys or by searching for the Terminal app in the application menu.

## Step 2: Navigate to the Source Directory

Before copying the folder, you need to navigate to the source directory. You can use the `cd` command to change the current working directory to the source directory.

For example, if the folder you want to copy is located in the home directory, you can use the following command:

```bash
cd /home/user/source_folder
```

## Step 3: Copy the Folder

Once you have navigated to the source directory, you can use the `cp` command to copy the folder. The basic syntax of the `cp` command is as follows:

```bash
cp [options] source destination
```

To copy a folder, you need to specify the `-r` option, which stands for recursive, to copy the entire directory tree. You also need to specify the source and destination paths.

For example, to copy a folder named `source_folder` to a destination directory named `destination_folder`, you can use the following command:

```bash
cp -r source_folder /path/to/destination_folder/
```

Note that you need to replace `/path/to/destination_folder/` with the actual path to the destination directory.

## Step 4: Verify the Copied Folder

After copying the folder, you can verify the copied files and directories in the destination directory. You can use the `ls` command to list the contents of the destination directory.

For example, you can use the following command to list the contents of the `destination_folder` directory:

```bash
ls /path/to/destination_folder/
```

This will display the list of files and directories in the destination folder.

## Benefits of the Linux `cp` Command

You may be wondering what the benefits are of using the terminal and the `cp` command to copy a folder.

Using the Linux terminal to copy a folder has several benefits, including:

1.  **Flexibility**: The Linux terminal allows for greater flexibility and control when copying folders than using a graphical user interface. With the terminal, you can use command-line options to customize the copying process and handle any errors that may occur.
2.  **Speed**: Copying large folders with numerous files can be faster in the terminal than with a graphical user interface. This is because the terminal uses fewer system resources and can perform actions more quickly than a graphical interface.
3.  **Efficiency**: The terminal allows you to perform several tasks simultaneously, and you can run several commands at once. This can save time and make the copying process more efficient.
4.  **Automation**: Copying folders in the terminal can be automated using scripts. This means that you can save time by creating a script to copy folders that you use frequently, and you can run the script with a single command.
5.  **Reliability**: The terminal is a reliable way to copy folders because it provides feedback on the copying process, including errors or warnings that may occur. This allows you to take corrective action and ensures that the copying process is completed successfully.

## Conclusion

Copying a folder in Linux is a simple task that can be accomplished using the `cp` command. By following the steps outlined in this article, you can easily copy a folder in Linux using the `cp` command.

Remember to use the -r option to copy the entire directory tree, and verify the copied folder by listing its contents in the destination directory.

Let's connect on [Twitter][1] and on [LinkedIn][2]. You can also subscribe to my [YouTube][3] channel.

Happy Coding!

[1]: https://www.twitter.com/Shittu_Olumide_
[2]: https://www.linkedin.com/in/olumide-shittu
[3]: https://www.youtube.com/channel/UCNhFxpk6hGt5uMCKXq0Jl8A