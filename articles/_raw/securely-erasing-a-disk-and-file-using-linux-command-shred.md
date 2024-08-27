---
title: How to Securely Erase a Disk and File using the Linux shred Command
date: 2024-08-27T09:59:04.066Z
author: Zaira Hira
authorURL: https://www.freecodecamp.org/news/author/zaira/
originalURL: https://www.freecodecamp.org/news/securely-erasing-a-disk-and-file-using-linux-command-shred/
posteditor: ""
proofreader: ""
---

Removing files and formatting disks is a common task for users. And Linux provides a number of utilities to delete files and folders from the command line.

<!-- more -->

The most common command to delete files and folders is `rm` and `rmdir`, respectively. You can read in detail about the `rm` command [here][1].

In this blog post, we will study a new command known as `shred` which helps us to wipe out disks and clear files in a secure way.

## What is the Linux `shred` command?

The shred command helps to overwrite the data in place several times. This makes it harder for third party software and hardware probing to recover the data. That is why it's commonly used to securely remove data.

### Syntax of Linux shred command:

```
shred [OPTION] filename
```

```
shred -vfz [/file/system/path]
```

According to the `man` page, some of the \[OPTIONS\] you can use with `shred` are:

-   `-n`, --iterations=N  
    Instead of the default (3) times, overwrite the data N times.
-   `-z`, --zero  
    Add a final overwrite with zeros to hide shredding.
-   `-f`, --force  
    Force the permissions to allow writing if necessary.
-   `-v`, --verbose  
    Show progress in detail.
-   `-u`, --remove  
    Truncate and remove file after overwriting.

In the example above, replace the path with your disk path.

### How is `shred` different from `rm`?

Simply using `rm` removes the pointer to the filesystem. The actual data might still be there. So there is a possibility for data recovery.

But when you use the `shred` command, the file is overwritten a specified number of times in a way that the actual content is unrecoverable. We'll see that in examples later on.

Another difference is the speed of execution. Usually, `rm` is faster than `shred`. This is because `shred` overwrites the file a couple of times before deleting it. Depending on the number of iterations and file/disk size, `shred` can take longer. Whereas `rm` simply removes the pointer to file system.

### How does the `shred` command work?

The `shred` command makes the file go through three passes by default. The three passes ensure that the file is overwritten three times. The default pass value can be changed as well by using the `-n` flag.

## When to use the `shred` command

You use the shred command to erase sensitive data, which ensures security as well. It can be used by sys admins, digital forensics teams, or information security specialists to enforce security standards.

## Examples of `shred`

⚠️ Before running any of the examples on your system, ensure that your file and filesystem is properly backed-up. Please be careful, as contents are not recoverable.

### How to overwrite and delete a file with `shred`

We have a sample file `poem.txt` whose contents are shared below:

![content of file poem.txt](https://www.freecodecamp.org/news/content/images/2022/03/image-53.png) _Contents of sample file `poem.txt`_

Let's overwrite its contents using the default three passes:

```
shred -v poem.txt
```

![Image](https://www.freecodecamp.org/news/content/images/2022/03/image-54.png) _Here, we can see that file has gone through 3 overwrites_

Let's check out the contents of the shredded file:

```
cat poem.txt
```

![Image](https://www.freecodecamp.org/news/content/images/2022/03/image-55.png) _Here, we can see that contents have been changed to an unreadable format._

Now we can safely remove the file using `rm poem.txt`.

However, we can use the shred command more efficiently where we can overwrite, hide shredding, and remove the file in a single command. Let's modify and run the command below:

```
shred -vzu -n5 poem.txt
```

Where,

-   `-v` stands for verbose and gives detailed output.
-   `-z` replaces the final pass with zeros to hide shredding.
-   `-u` removes the file after shredding. We don't need to remove file afterwards using `rm` with this flag.
-   `-n` changes the number of passes. We have set it to 5.

### Output:

In the output below, the file is overwritten 5 times. In the final pass, the file is overwritten with all zeros. In the file removal steps, the file name is also mutated so it is non-discoverable.

![Image](https://www.freecodecamp.org/news/content/images/2022/03/image-57.png) _Removing and hiding file in a single command_

### How to wipe a disk or partition with `shred`

Suppose you are selling your disks or you need to erase your portable drive. You can use `shred` to wipe your drive using the command below:

```
sudo shred -vfz /dev/sde
```

Where,

-   `-v` gives detailed output.
-   `-f` forces the write permissions if missing.
-   `-z` writes zeros in the final pass.

You can also use `shred` on RAID partitions.

```
shred -vfz -n 10 /dev/md1
```

## When is shred not effective? ️ ️

There are certain cases when `shred` is not effective. According to the [man pages][2], below are some of the cases:

-   Log-structured or journaled file systems, such as those supplied with AIX and Solaris (and JFS, ReiserFS, XFS, Ext3, and so on)
-   File systems that write redundant data, such as RAID-based file systems.
-   File systems that make snapshots. Examples include: Network Appliance's NFS server.
-   File systems that support caching in temporary locations, such as NFS version 3 clients.
-   Compressed file systems.

## Wrapping up

The `shred` command ensures that the data in a file is not recoverable. Although there are some exceptions, `shred` is still a better and safer option than `rm`.

I hope you found this tutorial helpful.

Share your thoughts on [Twitter][3]!

You can read my other posts [here][4].

[1]: https://www.freecodecamp.org/news/remove-directory-in-linux-how-to-delete-a-folder-from-the-command-line/
[2]: https://linux.die.net/man/1/shred
[3]: https://twitter.com/hira_zaira
[4]: https://www.freecodecamp.org/news/author/zaira/