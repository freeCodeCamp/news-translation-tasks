---
title: sudo apt-get update vs upgrade – What is the Difference?
date: 2024-10-18T11:41:07.424Z
author: Kristofer Koishigawa
authorURL: https://www.freecodecamp.org/news/author/scissorsneedfoodtoo/
originalURL: https://www.freecodecamp.org/news/sudo-apt-get-update-vs-upgrade-what-is-the-difference/
posteditor: ""
proofreader: ""
---

`sudo apt-get update` and `sudo apt-get upgrade` are two commands you can use to keep all of your packages up to date in Debian or a Debian-based Linux distribution.

<!-- more -->

They're common commands for Linux admins and people doing DevOps, but are handy to know even if you don't use the command line often.

In this article, I'll go into what both of these commands do, how to use them, and some frequently asked questions.

## What Are the Differences Between `sudo apt-get update` and `sudo apt-get upgrade`?

The main difference is that `sudo apt-get update` fetches the latest version of the package list from your distro's software repository, and any third-party repositories you may have configured. In other words, it'll figure out what the latest version of each package and dependency is, but will not actually download or install any of those updates.

The `sudo apt-get upgrade` command downloads and installs the updates for each outdated package and dependency on your system. But just running `sudo apt-get upgrade` will not automatically upgrade the outdated packages – you'll still have a chance to review the changes and confirm that you want to perform the upgrades.

## How to Use the `sudo apt-get update` Command

In your Debian-based Linux distro (Debian, Ubuntu, Linux Mint, Kali Linux, Raspberry Pi OS, and so on), open a terminal window.

Depending on your distro, the terminal might go by different names depending on how you open it. For example, in Ubuntu and Linux Mint, the default terminal is Gnome Terminal, but may be listed under Terminal in the application menu.

In the terminal, enter `sudo apt-get update` in the command line, enter in your admin password, and press the Enter key.

If there are updates, you'll see an output similar to this:

```
kris@pihole:~ $ sudo apt-get update
Hit:1 https://ftp.harukasan.org/raspbian/raspbian bullseye InRelease
Get:2 https://download.docker.com/linux/raspbian bullseye InRelease [26.7 kB]
Get:3 http://archive.raspberrypi.org/debian bullseye InRelease [23.7 kB]       
Get:4 http://packages.azlux.fr/debian buster InRelease [3,989 B]               
Get:5 http://archive.raspberrypi.org/debian bullseye/main armhf Packages [282 kB]
Get:6 http://packages.azlux.fr/debian buster/main armhf Packages [3,418 B]
Fetched 340 kB in 4s (94.8 kB/s)     
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
3 packages can be upgraded. Run 'apt list --upgradable' to see them.
```

If you want to see which packages can be upgraded, run `apt list --upgradable`:

```
kris@pihole:~ $ apt list --upgradable
Listing... Done
libcamera0/stable 0~git20220426+18e68a9b-1 armhf [upgradable from: 0~git20220303+e68e0f1e-1]
raspi-config/stable 20220425 all [upgradable from: 20220419]
rpi-eeprom/stable 13.13-1 armhf [upgradable from: 13.12-1]
```

But if there are no newer versions of packages or dependencies in your distro's software repository, you'll see an output like this:

```
kris@pihole:~ $ sudo apt-get update
Get:1 https://download.docker.com/linux/raspbian bullseye InRelease [26.7 kB]
Hit:2 https://ftp.harukasan.org/raspbian/raspbian bullseye InRelease           
Hit:3 http://packages.azlux.fr/debian buster InRelease                         
Hit:4 http://archive.raspberrypi.org/debian bullseye InRelease
Fetched 26.7 kB in 3s (8,789 B/s)
Reading package lists... Done
```

Notice that there is no mention of packages that can be upgraded, and no note about running `apt list --upgradable`.

But this does not necessarily mean there's no outdated software on your system, just that you already got the latest version of the package list. You may have run `sudo apt-get update` multiple times.

You can always run `apt list --upgradable` again to see if anything can be upgraded.

Or you can use the more modern `sudo apt update` command instead. This command will always show you the number of packages that can be upgraded, or a note saying everything is up to date.

For more information about the differences between `apt` and `apt-get`, [check out this section below][1].

## How to Use the `sudo apt-get upgrade` Command

After running the `sudo apt-get update` command, in the same terminal window, type in `sudo apt-get upgrade`, enter your password if necessary, and hit enter.

Then, you'll see an output similar to this:

```
kris@pihole:~ $ sudo apt-get upgrade
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,616 kB of archives.
After this operation, 1,596 kB of additional disk space will be used.
Do you want to continue? [Y/n]
```

Towards the bottom of the output, you'll see the packages that will be upgraded:

```
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
```

The amount of data that needs to be fetched, and the amount of storage space the upgraded packages will use once installed:

```
Need to get 2,616 kB of archives.
After this operation, 1,596 kB of additional disk space will be used.
```

And finally, you'll see a prompt asking if you want to continue with the upgrade:

```
Do you want to continue? [Y/n]
```

You can enter `y`, `Y`, or `yes` to continue with the upgrade, or `n`, `N`, or `no` to exit out of the `upgrade` command.

If you choose to exit out, you'll see an output like this:

```
kris@pihole:~ $ sudo apt-get upgrade
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,616 kB of archives.
After this operation, 1,596 kB of additional disk space will be used.
Do you want to continue? [Y/n] n
Abort.
```

If you choose to continue with the upgrade, you'll see a long output like this:

```
kris@pihole:~ $ sudo apt-get upgrade
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,616 kB of archives.
After this operation, 1,596 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.raspberrypi.org/debian bullseye/main armhf libcamera0 armhf 0~git20220426+18e68a9b-1 [548 kB]
Get:2 http://archive.raspberrypi.org/debian bullseye/main armhf raspi-config all 20220425 [30.3 kB]
Get:3 http://archive.raspberrypi.org/debian bullseye/main armhf rpi-eeprom armhf 13.13-1 [2,037 kB]
Fetched 2,616 kB in 3s (1,019 kB/s)   
Reading changelogs... Done
(Reading database ... 43496 files and directories currently installed.)
Preparing to unpack .../libcamera0_0~git20220426+18e68a9b-1_armhf.deb ...
Unpacking libcamera0:armhf (0~git20220426+18e68a9b-1) over (0~git20220303+e68e0f1e-1) ...
Preparing to unpack .../raspi-config_20220425_all.deb ...
Unpacking raspi-config (20220425) over (20220419) ...
Preparing to unpack .../rpi-eeprom_13.13-1_armhf.deb ...
Unpacking rpi-eeprom (13.13-1) over (13.12-1) ...
Setting up rpi-eeprom (13.13-1) ...
Setting up libcamera0:armhf (0~git20220426+18e68a9b-1) ...
Setting up raspi-config (20220425) ...
Processing triggers for man-db (2.9.4-2) ...
Processing triggers for libc-bin (2.31-13+rpt2+rpi1+deb11u2) ...
```

And once that's complete, all of the outdated packages and dependencies will be updated.

One important thing to remember about the `sudo apt-get upgrade` command is that it only upgrades what it can without removing anything.

For example, if an upgrade requires a new dependency, the `upgrade` command will download and install it, but it will not remove the old dependency. Removing old dependencies requires a different command. You'll see this a lot when you upgrade to a new kernel version.

If you see a message similar to this after upgrading:

```
The following packages were automatically installed and are no longer required:
  g++-8 gir1.2-mutter-4 libapache2-mod-php7.2 libcrystalhd3
Use 'sudo apt autoremove' to remove them.
```

You can follow the suggestion and use `sudo apt autoremove` to remove those unnecessary packages.

## How to Use Special Options With the `sudo apt-get upgrade` Command

There are a number of special options or parameters that you can use with the `sudo apt-get upgrade` command, but two stand out: `--dry-run` and `--yes`.

### How to Use the `--dry-run` Option:

The `--dry-run` (alternatively, `-s` or `--simulate`) option simulates what would happen during the upgrade process, but doesn't actually change anything on your system:

```
kris@pihole:~ $ sudo apt-get upgrade --dry-run
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Inst libcamera0 [0~git20220303+e68e0f1e-1] (0~git20220426+18e68a9b-1 Raspberry Pi Foundation:stable [armhf])
Inst raspi-config [20220331] (20220425 Raspberry Pi Foundation:stable [all])
Inst rpi-eeprom [13.12-1] (13.13-1 Raspberry Pi Foundation:stable [armhf])
Conf libcamera0 (0~git20220426+18e68a9b-1 Raspberry Pi Foundation:stable [armhf])
Conf raspi-config (20220425 Raspberry Pi Foundation:stable [all])
Conf rpi-eeprom (13.13-1 Raspberry Pi Foundation:stable [armhf])
```

Though again, while Debian and Debian-based distros are very stable, this option is useful if you want to make sure there are no conflicts during an upgrade.

### How to Use the `--yes` Option:

The `--yes` (alternatively, `-y` or `--assume-yes`) option automatically answers yes to any prompts if it's safe to do so:

```
kris@pihole:~ $ sudo apt-get upgrade --yes
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,616 kB of archives.
After this operation, 1,596 kB of additional disk space will be used.
Get:1 http://archive.raspberrypi.org/debian bullseye/main armhf libcamera0 armhf 0~git20220426+18e68a9b-1 [548 kB]
Get:2 http://archive.raspberrypi.org/debian bullseye/main armhf raspi-config all 20220425 [30.3 kB]
Get:3 http://archive.raspberrypi.org/debian bullseye/main armhf rpi-eeprom armhf 13.13-1 [2,037 kB]
...
Processing triggers for libc-bin (2.31-13+rpt2+rpi1+deb11u2) ...
```

Note that the `Do you want to continue? [Y/n]` is skipped above, and all packages are upgraded.

## FAQs

### What Are `sudo` and `apt-get`?

An important thing to note about `sudo apt-get update` and `sudo apt-get upgrade` is that both commands are made up of three parts: `sudo`, `apt-get`, and `update` or `upgrade`.

`sudo` stands for "superuser do", and allows you to run programs with root or admin privileges.

For example, rebooting a system requires superuser/root-level privileges, so running `reboot` in the terminal might return errors similar to this:

```
Failed to set wall message, ignoring: Interactive authentication required.
Failed to reboot system via logind: Interactive authentication required.
Failed to open initctl fifo: Permission denied
Failed to talk to init daemon.
```

But if you run `sudo reboot`, then enter your admin password, you will run the `reboot` command as a superuser, and your system will restart immediately.

`apt-get` is a command line tool in Debian and Debian-based Linux distros that you use to install and manage packages.

### What's the Difference Between `apt-get` and `apt`?

`apt` is a more modern tool for installing and managing applications on Debian and Debian-based distros.

For the most part, `apt` and `apt-get` can be used interchangeably – `sudo apt update` and `sudo apt-get update` both update the package list on your system.

The main differences you'll notice is that `apt` is easier to type, its output is generally more useful, and it includes some user-friendly features like a progress bar when installing packages.

While most of the examples in this article use `apt-get`, I strongly encourage you to use `apt` instead.

### Are `sudo apt-get update` and `sudo apt-get upgrade` Safe to Use?

Yes, Debian and Debian-based distros are generally very stable, and the `update` and `upgrade` commands are safe to use. This is because major updates for packages / dependencies, and the distros themselves, are only released once or twice a year.

The downside is that, unlike with bleeding edge distros like Arch Linux, if you want to use the most recent version of a package, you might need to put in some extra work. You may need to configure a third-party repository via a PPA, use an alternative packaging system like Snap of Flatpak, or compile the package yourself.

But the stability that comes with slightly older software is worth it, at least in my opinion.

### Can You Chain the `sudo apt-get update` and `sudo apt-get upgrade` Commands?

You might be thinking, isn't it tedious to run `sudo apt-get update`, wait for that to complete, then run `sudo apt-get upgrade`?

While both `sudo apt-get update` and `sudo apt-get upgrade` run pretty quickly, sometimes it's easier to execute a string of commands and check back on them a few minutes later.

With the `&&` operator, you can chain multiple commands together like this:

```
sudo apt-get update && sudo apt-get upgrade
```

The important thing to remember with the `&&` operator is that the command after the operator only runs if the command before it is successful.

Using the example above, `sudo apt-get upgrade` only runs if `sudo apt-get update` succeeds. If there's some sort of error, like a network problem while updating the package list, then `sudo apt-get update` is skipped.

### What Are `sudo apt-get dist-upgrade` and `sudo apt full-upgrade`, and Are They Safe to Use?

According to [this Stack Overflow thread][2], these commands do the same thing under the hood – they upgrade outdated packages, and also intelligently remove some packages whenever necessary.

Essentially they're like the combination of the `sudo apt-get upgrade` and `sudo apt autoremove` commands.

Running these commands _should_ be safe in most cases.

But a lot of people, myself included, recommend using `sudo apt-get update` and `sudo apt-get upgrade` instead. You have more of a chance to review upcoming changes, and since `upgrade` never removes packages, it's less destructive.

## `./thanks_for_reading.sh`

If you found this breakdown on `sudo apt-get update` and `sudo apt-get upgrade` useful, please share it with your friends so more people can benefit from it.

Also, feel free to reach out on [Twitter][3] and let me know what you think.

[1]: #what-s-the-difference-between-apt-get-and-apt
[2]: https://askubuntu.com/questions/770135/apt-full-upgrade-versus-apt-get-dist-upgrade
[3]: https://twitter.com/kriskoishigawa