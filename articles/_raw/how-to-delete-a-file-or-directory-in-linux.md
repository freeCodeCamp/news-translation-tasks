---
title: How to Delete a File or Directory in Linux – Command to Remove a Folder
  and its Contents
date: 2024-12-11T11:02:41.961Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/how-to-delete-a-file-or-directory-in-linux/
posteditor: ""
proofreader: ""
---

By Shittu Olumide

<!-- more -->

In Linux, deleting files or directories is a fundamental operation that every user must know. Although it may seem like a straightforward task, there are different methods to delete files or directories, each with its specific use case.

This tutorial will provide a step-by-step guide on how to delete files or directories in Linux. We will also walk through the commands you can use to remove files and folders along with their content.

## How to Delete a File in Linux

Deleting a file involves removing the reference to the file from the file system. The file itself is not immediately removed from the storage device, but its space is marked as available for reuse.

There are several ways to delete a file in Linux. Here are some of the most common methods:

### Using the GUI file manager

Most Linux distributions come with a GUI file manager that allows you to delete files using a graphical interface. Simply navigate to the file you want to delete, right-click it, and select "Delete" or "Move to Trash."

### Using the `rm` command

You can also use the `rm` (remove) command to delete files and directories in Linux. To delete a file using the rm command, type the following command in the terminal:

```
rm filename
```

Make sure you replace `filename` with the name of the file you want to delete. If the file is write-protected or you don't have sufficient permissions to delete it, you will be prompted to confirm the deletion.

### Using the `shred` command

The `shred` command is a more secure way to delete files by overwriting the file's contents multiple times before deleting it. This makes it difficult for anyone to recover the deleted file.

To use the `shred` command, type the following command in the terminal:

```
shred -u filename
```

Make sure to replace `filename` with the name of the file you want to delete. The `-u` option tells shred to delete the file after overwriting it.

### Using the `trash-cli` command

The `trash-cli` command provides a safer way to delete files by moving them to the trash instead of immediately deleting them. To be able to use the trash-cli command, you install it first:

```
sudo apt-get install trash-cli
```

After installation, you can delete a file using the following command:

```
trash filename
```

## How to Delete a Directory in Linux

To delete a directory in Linux, you can use the `rmdir` or `rm` command. You use the `rmdir` command to remove an empty directory, while the `rm` command removes a directory and all its contents.

### Using the `rm` command

Here are the steps to delete a directory in Linux using the `rm` command:

1.  **Open the terminal**: To delete a directory in Linux, you need to use the command line. Open the terminal by pressing "Ctrl+Alt+T" on your keyboard or by searching for "terminal" in your system's application launcher.
2.  **Navigate to the directory you want to delete**: Use the `cd` command to navigate to the directory you want to delete. For example, if the directory you want to delete is called `my_directory` and is located in your home folder, type `cd ~/my_directory` and press "Enter".
3.  **Check the contents of the directory**: Before deleting the directory, it is a good idea to check its contents to make sure you are deleting the right directory. Use the `ls` command to list the contents of the directory. For example, type `ls` and press "Enter" to see the files and folders inside the `my_directory` folder.
4.  **Delete the directory and its contents**: To delete the directory and all its contents, use the `rm` command with the `-r` option, which stands for recursive. Type `rm -r my_directory` and press "Enter". You will be prompted to confirm the deletion. Type `y` and press "Enter" to confirm.
5.  **Verify that the directory has been deleted**: To verify that the directory has been deleted, use the `ls` command to list the contents of the parent directory. For example, if the `my_directory` folder was located in your home folder, type `ls ~/` and press "Enter". The `my_directory` folder should no longer be listed.

Note: Be very careful when using the `rm -r` command, as it can delete files and directories irreversibly.

### Using the `rmdir` command

Here are the steps to delete a directory in Linux using the `rmdir` command:

1.  **Open the terminal**: Open the terminal by pressing "Ctrl+Alt+T" on your keyboard or by searching for "terminal" in your system's application launcher.
2.  **Navigate to the directory you want to delete**: Use the `cd` command to navigate to the directory you want to delete. For example, if the directory you want to delete is called `my_directory` and is located in your home folder, type `cd ~/my_directory` and press "Enter".
3.  **Delete the directory**: To delete the directory, use the `rmdir` command followed by the name of the directory. Type `rmdir my_directory` and press "Enter". If the directory is not empty, you will receive an error message and the directory will not be deleted.
4.  **Verify that the directory has been deleted**: To verify that the directory has been deleted, use the `ls` command to list the contents of the parent directory. For example, if the `my_directory` folder was located in your home folder, type `ls ~/` and press "Enter". The `my_directory` folder should no longer be listed.

## Conclusion

The `rm` command is the most commonly used command for deleting files, while the `rmdir` and `rm` commands with the `-r` or `-R` options are used for deleting directories. By following this step-by-step guide, you can now effectively delete files or directories in Linux.

Additional tips:

1.  Be careful when using the rm command with the `-r` or `-R` option as it can delete files and directories irreversibly.
2.  Always double-check the file or directory name before deleting to avoid accidentally deleting the wrong file or directory.
3.  Use the `shred` command only when necessary, as it can take longer to delete files than other methods.
4.  Be mindful of file permissions when deleting files or directories, as some files or directories may require root access to delete.

Let's connect on [Twitter][1] and on [LinkedIn][2]. You can also subscribe to my [YouTube][3] channel.

Happy Coding!

[1]: https://www.twitter.com/Shittu_Olumide_
[2]: https://www.linkedin.com/in/olumide-shittu
[3]: https://www.youtube.com/channel/UCNhFxpk6hGt5uMCKXq0Jl8A