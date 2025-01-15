---
title: sudo apt-get update と upgrade の違いとは？
date: 2024-10-18T11:41:07.424Z
author: Kristofer Koishigawa
authorURL: https://www.freecodecamp.org/news/author/scissorsneedfoodtoo/
originalURL: https://www.freecodecamp.org/news/sudo-apt-get-update-vs-upgrade-what-is-the-difference/
posteditor: "YUUSUKE OKAMOTO"
proofreader: ""
---

`sudo apt-get update` と `sudo apt-get upgrade` は、Debian や Debian ベースのディストリビューションでパッケージを最新の状態に保つために利用できるコマンドです。

<!-- more -->

これらのコマンドは Linux 管理者や DevOps に携わる人にとってはよく使うものですが、コマンドラインを頻繁に使用しない人でも知っておくと役に立ちます。

この記事では、これらのコマンドの動作や使用方法、よくある質問などについて解説します。

## `sudo apt-get update`と `sudo apt-get upgrade`の違いは何ですか？

主な違いは、`sudo apt-get update` はディストリビューションのソフトウェアリポジトリやあらかじめ設定されたサードパーティリポジトリから、最新バージョンのパッケージの一覧を取得することです。つまり、それぞれのパッケージや依存関係の最新バージョンを確認するだけで、更新内容を実際にダウンロードしたりインストールすることはありません。

一方、`sudo apt-get upgrade` は、システム上の古くなったパッケージや依存関係の更新バージョンをダウンロードおよびインストールします。しかし、`sudo apt-get upgrade` を実行しても、古くなったパッケージが即座にアップグレードされるわけではありません。変更内容を確認してから、アップグレードを実行するかどうか判断できます。

## `sudo apt-get update`コマンドの使い方

DebianベースのLinuxディストリビューション（Debian、Ubuntu、Linux Mint、Kali Linux、Raspberry Pi OS など）で、ターミナルウィンドウを開きます。

ディストリビューションおよびターミナルの開き方によって、名称は異なる場合があります。例えば、Ubuntu や Linux Mint では、デフォルトで Gnome Terminal が利用されますが、アプリケーションメニューでは単に「ターミナル」として表示されることもあります。

ターミナル上のコマンドラインで `sudo apt-get update`と入力し、管理者パスワードを入力して、Enterキーを押します。

もし更新する項目がある場合、次のような出力が表示されます：

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

アップグレード可能なパッケージを確認したい場合は、`apt list --upgradable`を実行します：

```
kris@pihole:~ $ apt list --upgradable
Listing... Done
libcamera0/stable 0~git20220426+18e68a9b-1 armhf [upgradable from: 0~git20220303+e68e0f1e-1]
raspi-config/stable 20220425 all [upgradable from: 20220419]
rpi-eeprom/stable 13.13-1 armhf [upgradable from: 13.12-1]
```

しかし、ディストリビューションのソフトウェアリポジトリに新しいバージョンのパッケージや依存関係がない場合、次のような出力が表示されます：

```
kris@pihole:~ $ sudo apt-get update
Get:1 https://download.docker.com/linux/raspbian bullseye InRelease [26.7 kB]
Hit:2 https://ftp.harukasan.org/raspbian/raspbian bullseye InRelease           
Hit:3 http://packages.azlux.fr/debian buster InRelease                         
Hit:4 http://archive.raspberrypi.org/debian bullseye InRelease
Fetched 26.7 kB in 3s (8,789 B/s)
Reading package lists... Done
```

ここには、アップグレード可能なパッケージや`apt list --upgradable`を実行するよう指示するメッセージがありません。

ただし、メッセージがないことは、システム上に更新が必要なソフトウェアがないことを意味するわけではなく、単に既に最新のパッケージリストを取得済みということです。`sudo apt-get update`を何度も実行した可能性もあります。

いつでも`apt list --upgradable`を再度実行して、アップグレード可能なものがあるかどうか確認できます。

また、より新しい`sudo apt update`コマンドを使用することもできます。このコマンドは常にアップグレード可能なパッケージの数を示すか、すべてが最新状態であるというメッセージを表示します。

`apt`と `apt-get`の違いに関する詳細な情報は、[以下のセクションで確認できます](#what-s-the-difference-between-apt-get-and-apt)。

## `sudo apt-get upgrade`コマンドの使い方

`sudo apt-get update`コマンドを実行した後、同じターミナルウィンドウで、`sudo apt-get upgrade`と入力し、必要に応じてパスワードを入力して Enter を押します。

すると、次のような出力が表示されます：

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

出力の最後に、アップグレードされるパッケージが表示されます。


```
The following packages will be upgraded:
  libcamera0 raspi-config rpi-eeprom
3 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
```


取得する必要があるデータ量と、アップグレードされたパッケージをインストールする後に使用するディスク容量が表示されます。

```
Need to get 2,616 kB of archives.
After this operation, 1,596 kB of additional disk space will be used.
```

最後に、アップグレードを続けるかどうかの確認メッセージが表示されます：

```
Do you want to continue? [Y/n]
```

アップグレードを続行するには、`y`,`Y`または、`yes`を入力し、終了する場合は、`n`,`N`または、`no`を入力します。

アップグレードを終了することを選んだ場合、以下のような出力が表示されます：

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

アップグレードを続行することを選んだ場合の出力例：

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

処理が完了すると、全ての古いパッケージと依存関係が更新されます。

`sudo apt-get upgrade`コマンドの重要な点は、何も削除せずにアップグレードのみ行うことです。

例えば、アップグレードに新しい依存関係が必要な場合、`upgrade`コマンドは、新しい依存関係をダウンロードおよびインストールしますが、古い依存関係を削除することはありません。古い依存関係を削除するには、別のコマンドが必要です。新しいカーネルバージョンにアップグレードする際によく見られます。

アップグレード後に次のようなメッセージが表示された場合：

```
The following packages were automatically installed and are no longer required:
  g++-8 gir1.2-mutter-4 libapache2-mod-php7.2 libcrystalhd3
Use 'sudo apt autoremove' to remove them.
```

提案通りに、`sudo apt autoremove`で不要なパッケージを削除することができます。

## `sudo apt-get upgrade`コマンドで追加のオプションを使用する方法

`sudo apt-get upgrade`コマンドには多くの追加のオプションまたはパラメータがありますが、その中でも注目すべきは `--dry-run`と `--yes`です。

### `--dry-run`オプションの使用方法：

`--dry-run`（もしくは `-s`または `--simulate`）オプションは、アップグレード処理中に何が起こるかをシュミレーションしますが、システム上で何も変更しません：

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

繰り返しになりますが、DebianやDebianベースのディストリビューションは非常に安定しています。一方で、このオプションは、アップグレード時の競合がないことを確認したい場合に便利です。

### `--yes`オプションの使用方法：

`--yes`（または `-y`や `--assume-yes`）オプションは、安全であれば、全てのプロンプトに自動的に「はい」と回答します：

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


`Do you want to continue? [Y/n]`は省略され、すべてのパッケージがアップグレードされます。

## よくある質問

### `sudo`と `apt-get`とは？

`sudo apt-get update`および`sudo apt-get upgrade`というコマンドは、それぞれ`sudo`、`apt-get`、そして、`update`または`upgrade`の3つで構成されています。

`sudo`は、"superuser do"の略で、管理者権限でプログラムを実行するためのコマンドです。

例えば、システムの再起動には管理者権限が必要です。このため、ターミナルで、`reboot`コマンドを実行すると、次のようなエラーメッセージが表示されるかもしれません。

```
Failed to set wall message, ignoring: Interactive authentication required.
Failed to reboot system via logind: Interactive authentication required.
Failed to open initctl fifo: Permission denied
Failed to talk to init daemon.
```

しかし、`sudo reboot`コマンドを実行し、管理者パスワードを入力すると、`reboot`コマンドが管理者権限で実行され、すぐにシステムが再起動されます。

`apt-get`は、DebianおよびDebianベースのディストリビューションでパッケージをインストールおよび管理するためのコマンドラインツールです。

### `apt-get`と `apt`の違いは？

`apt`は、DebianおよびDebianベースのディストリビューションでアプリケーションをインストールおよび管理するための最新のツールです。

`apt`と `apt-get`は互換性があり、`sudo apt update`と`sudo apt-get update`は、どちらもシステムパッケージを更新します。

主な違いとしては、`apt` の方が入力が簡単で出力がわかりやすく、パッケージのインストール中のプログレスバーなどユーザーフレンドリーな機能を含んでいることです。

この記事の多くの例では`apt-get`を使用していますが、個人的には`apt`を使用することをお勧めします。

### `sudo apt-get update`と`sudo apt-get upgrade`は安全ですか？

はい、DebianおよびDebianベースのディストリビューションは、非常に安定しており、`update`と `upgrade`コマンドは安全に使用できます。これは、パッケージや依存関係、そしてディストリビューション自体の大規模なアップデートが年に一度か二度しかリリースされないからです。

欠点としては、最新のパッケージを使用したい場合は、Arch Linuxなどの最先端ディストリビューションとは異なり、追加の手間がかかることがあります。PPAを通じてサードパーティのリポジトリを設定したり、SnapやFlatpakなどの別のパッケージングシステムを使用したり、自分でコンパイルする必要があるかもしれません。

とはいえ、少し古いソフトウェアによる安定性を重視する価値は十分にあると考えています。

### `sudo apt-get update`と`sudo apt-get upgrade`を連続して実行できますか？

`sudo apt-get update`を実行して完了を待ってから、`sudo apt-get upgrade`を実行するのは、面倒ではないかと考えるかもしれません。

`sudo apt-get update`と`sudo apt-get upgrade`の両方が比較的速く実行されるとはいえ、指令をまとめて実行し、数分後に確認する方が楽なことがあります。

`&&`演算子を使用すると、次のようにコマンドを連続して実行できます。

```
sudo apt-get update && sudo apt-get upgrade
```

`&&`演算子の重要なポイントは、演算子の後のコマンドが実行されるのは、前のコマンドが成功した場合だけということです。

上記の例を使用すると、`sudo apt-get upgrade`は`sudo apt-get update`が成功した場合にのみ実行されます。例えば、パッケージリストの更新中にネットワークの問題が発生した場合には、`sudo apt-get update`がスキップされます。

### `sudo apt-get dist-upgrade`と`sudo apt full-upgrade`とは？これらは安全に使用できますか？

[StackOverflowのスレッド](https://askubuntu.com/questions/770135/apt-full-upgrade-versus-apt-get-dist-upgrade)によれば、これらのコマンドは、内部的には同じことを行います。つまり、古くなったパッケージをアップグレードし、必要に応じて賢くパッケージを削除します。

基本的には、`sudo apt-get upgrade`と`sudo apt autoremove`のコマンドを組み合わせたようなものです。

これらのコマンドを実行することは、ほとんどの場合安全なはずです。

しかし、私を含め多くの人が、`sudo apt-get update`と`sudo apt-get upgrade`を使用することを推奨しています。これらを使用すると、これからの変更を確認する機会が増えますし、`upgrade`は、パッケージを削除しないため、システムへの影響が少なくなります。

## `./thanks_for_reading.sh`

`sudo apt-get update`と`sudo apt-get upgrade`の説明が役に立ったと感じたら、ぜひ友人にシェアしていただき、より多くの人に知識を広めてください。

また、[Twitter](https://twitter.com/kriskoishigawa) で感想をお聞かせいただけると嬉しいです。

