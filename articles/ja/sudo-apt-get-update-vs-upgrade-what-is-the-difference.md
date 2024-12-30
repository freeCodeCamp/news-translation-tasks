---
title: sudo apt-get update と upgrade の違いとは？
date: 2024-10-18T11:41:07.424Z
author: Kristofer Koishigawa
authorURL: https://www.freecodecamp.org/news/author/scissorsneedfoodtoo/
originalURL: https://www.freecodecamp.org/news/sudo-apt-get-update-vs-upgrade-what-is-the-difference/
posteditor: "YUUSUKE OKAMOTO"
proofreader: ""
---

`sudo apt-get update` と `sudo apt-get upgrade` は、Debian や Debianベースのディストリビューションでパッケージを最新の状態に保つために利用できるコマンドです。

<!-- more -->

これらのコマンドは Linux 管理者や DevOps に携わる人にとっては、共通のコマンドですが、コマンドラインを頻繁に使用しない人でも知っておくと役に立ちます。

この記事では、これらのコマンドが何をするのか、使用方法、そしてよくある質問について解説します。

## `sudo apt-get update` と `sudo apt-get upgrade` の違いは何ですか？

主な違いは、`sudo apt-get update` がディストリビューションのソフトウェアリポジトリや設定したサードパーティリポジトリからパッケージリストにある最新バージョンを取得することです。つまり、それぞれのパッケージや依存関係の最新バージョンを確認するだけで、実際にはいずれの更新情報のダウンロードやインストールしません。

`sudo apt-get upgrade` は、システム上の古くなったパッケージや依存関係を更新バージョンをダウンロードおよびインストールします。しかし、`sudo apt-get upgrade` を実行しても、古くなったパッケージが自動でアップグレードされるわけではありません。変更内容を確認して、アップグレードを実行するかどうか判断できます。

## `sudo apt-get update` コマンドの使い方

Debian ベースの Linux ディストリビューション（Debian、Ubuntu、Linux Mint、Kali Linux、Raspberry Pi OS など）で、ターミナルウィンドウを開きます。

ディストリビューションによって、ターミナルの開き方で名称は、異なる場合があります。例えば、Ubuntu や Linux Mint ではデフォルトで Gnome Terminal が利用されますが、アプリケーションメニューでは単に「ターミナル」として表示されることもあります。

ターミナル上のコマンドラインで `sudo apt-get update` と入力し、管理者パスワードを入力して Enter キーを押します。

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

アップグレード可能なパッケージを確認したい場合は、`apt list --upgradable` を実行します：

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

ここには、アップグレード可能なパッケージや `apt list --upgradable` を実行するよう指示するメッセージがありません。

ただし、メッセージがないことは、システム上に更新が必要なソフトウェアがないことを意味するわけではなく、単に既に最新のパッケージリストを取得済みということです。`sudo apt-get update` を何度も実行した可能性もあります。

いつでも `apt list --upgradable` を再度実行して、アップグレード可能なものがあるかどうか確認できます。

また、よりモダンな `sudo apt update` コマンドを使用することもできます。このコマンドは常にアップグレード可能なパッケージの数を示すか、すべてが最新状態であるというメッセージを表示します。

`apt` と `apt-get` の違いに関する詳細な情報は、[以下のセクションで確認できます](#what-s-the-difference-between-apt-get-and-apt)。

## `sudo apt-get upgrade` コマンドの使い方

`sudo apt-get update` コマンドを実行した後、同じターミナルウィンドウで `sudo apt-get upgrade` と入力し、必要に応じてパスワードを入力して Enter を押します。

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

次のパッケージがアップグレードされます:
  libcamera0 raspi-config rpi-eeprom
3 個のパッケージがアップグレードされ、0 個の新規インストール、0 個の削除、0 個が未アップグレードです。

アップグレードするパッケージがダウンロード時に取得する必要があるデータ量と、インストール後に追加で使用するディスク容量の情報です：

```
2,616 kB のアーカイブを取得する必要があります。
この操作の後、追加で 1,596 kB のディスク容量が使用されます。
```

最後に、アップグレードを続けるかどうかの確認メッセージが表示されます：

```
続行しますか? [Y/n]
```

続行するには `y`, `Y` または `yes` を入力し、アップグレードを終了する場合は `n`, `N` または `no` を入力します。

アップグレードを終了することを選んだ場合、以下のような出力が表示されます：

```
kris@pihole:~ $ sudo apt-get upgrade
パッケージリストを読み込んでいます... 完了
依存ツリーを作成しています... 完了
状態情報を読み取っています... 完了
アップグレードを計算しています... 完了
次のパッケージがアップグレードされます:
  libcamera0 raspi-config rpi-eeprom
3 個のパッケージがアップグレードされ、0 個の新規インストール、0 個の削除、0 個が未アップグレードです。
2,616 kB のアーカイブを取得する必要があります。
この操作の後、追加で 1,596 kB のディスク容量が使用されます。
続行しますか? [Y/n] n
中断しました。
```

アップグレードを続行することを選んだ場合の出力例：

```
kris@pihole:~ $ sudo apt-get upgrade
パッケージリストを読み込んでいます... 完了
依存ツリーを作成しています... 完了
状態情報を読み取っています... 完了
アップグレードを計算しています... 完了
次のパッケージがアップグレードされます:
  libcamera0 raspi-config rpi-eeprom
3 個のパッケージがアップグレードされ、0 個の新規インストール、0 個の削除、0 個が未アップグレードです。
2,616 kB のアーカイブを取得する必要があります。
この操作の後、追加で 1,596 kB のディスク容量が使用されます。
続行しますか? [Y/n] y
Get:1 http://archive.raspberrypi.org/debian bullseye/main armhf libcamera0 armhf 0~git20220426+18e68a9b-1 [548 kB]
Get:2 http://archive.raspberrypi.org/debian bullseye/main armhf raspi-config all 20220425 [30.3 kB]
Get:3 http://archive.raspberrypi.org/debian bullseye/main armhf rpi-eeprom armhf 13.13-1 [2,037 kB]
2,616 kB を 3秒 で取得しました (1,019 kB/s)   
変更履歴を読んでいます... 完了
(データベースを読んでいます ... 現在 43496 個のファイルとディレクトリがインストールされています。)
libcamera0:armhf (0~git20220426+18e68a9b-1) アンパックの準備をしています...
(以前のバージョンの libcamera0:armhf を処理しています) ...
raspi-config (20220425) アンパックの準備をしています...
raspi-config (20220425) をアンパックしています...
rpi-eeprom (13.13-1) アンパックの準備をしています...
rpi-eeprom (13.13-1) をアンパックしています...
rpi-eeprom (13.13-1) を設定しています...
libcamera0:armhf (0~git20220426+18e68a9b-1) を設定しています...
raspi-config (20220425) を設定しています...
man-db (2.9.4-2) のトリガを処理しています...
libc-bin (2.31-13+rpt2+rpi1+deb11u2) のトリガを処理しています...
```

これで全ての古いパッケージと依存関係が更新されました。

`sudo apt-get upgrade` コマンドの重要な点は、何も削除せずにアップグレードのみ行うことです。例えば、アップグレードに新しい依存関係が必要な場合、このコマンドはそれをダウンロードおよびインストールしますが、古い依存関係を削除することはありません。古い依存関係を削除するには、別のコマンドが必要です。新しいカーネルバージョンにアップグレードする際によく見られます。

アップグレード後に次のようなメッセージが表示された場合：

```
自動的にインストールされた次のパッケージは、もう必要ありません:
  g++-8 gir1.2-mutter-4 libapache2-mod-php7.2 libcrystalhd3
'sudo apt autoremove' を使用してそれらを削除できます。
```

この提案に従い、`sudo apt autoremove` で不要なパッケージを削除することができます。

## `sudo apt-get upgrade` コマンドを特別なオプションで使用する方法

`sudo apt-get upgrade` コマンドには多くの特別なオプションまたはパラメータがありますが、その中でも注目すべきは `--dry-run` と `--yes` です。

### `--dry-run` オプションの使用方法：

`--dry-run`（もしくは `-s` または `--simulate`）オプションは、アップグレードプロセス中に何が起こるかをシミュレートしますが、システム上で何も変更しません：

```
kris@pihole:~ $ sudo apt-get upgrade --dry-run
パッケージリストを読み込んでいます... 完了
依存ツリーを作成しています... 完了
状態情報を読み取っています... 完了
アップグレードを計算しています... 完了
次のパッケージがアップグレードされます:
  libcamera0 raspi-config rpi-eeprom
3 個のパッケージがアップグレードされ、0 個の新規インストール、0 個の削除、0 個が未アップグレードです。
Inst libcamera0 [0~git20220303+e68e0f1e-1] (0~git20220426+18e68a9b-1 Raspberry Pi Foundation:stable [armhf])
Inst raspi-config [20220331] (20220425 Raspberry Pi Foundation:stable [all])
Inst rpi-eeprom [13.12-1] (13.13-1 Raspberry Pi Foundation:stable [armhf])
Conf libcamera0 (0~git20220426+18e68a9b-1 Raspberry Pi Foundation:stable [armhf])
Conf raspi-config (20220425 Raspberry Pi Foundation:stable [all])
Conf rpi-eeprom (13.13-1 Raspberry Pi Foundation:stable [armhf])
```

Debian や Debian ベースのディストリビューションは非常に安定していますが、アップグレード時の競合がないことを確認したい場合にこのオプションは便利です。

### `--yes` オプションの使用方法：

`--yes`（または `-y` や `--assume-yes`）オプションは、安全であれば全てのプロンプトに自動的に「はい」と回答します：



定期的に表示される `Do you want to continue? [Y/n]` は省略され、すべてのパッケージがアップグレードされます。

## よくある質問

### `sudo` と `apt-get` とは？

`sudo apt-get update` および `sudo apt-get upgrade` というコマンドは、それぞれ `sudo`、`apt-get`、そして `update` または `upgrade` の 3 つの部分で構成されています。

`sudo` は "superuser do" の略で、管理者権限でプログラムを実行するためのコマンドです。

たとえば、システムの再起動には管理者権限が必要です。このため、通常のターミナルで `reboot` コマンドを実行すると、次のようなエラーメッセージが表示されるかもしれません。

```
Failed to set wall message, ignoring: Interactive authentication required.
Failed to reboot system via logind: Interactive authentication required.
Failed to open initctl fifo: Permission denied
Failed to talk to init daemon.
```

しかし、`sudo reboot` としてコマンドを実行し、管理者パスワードを入力すると、`reboot` コマンドが管理者権限で実行され、即座にシステムが再起動されます。

`apt-get` は、Debian およびその派生ディストリビューションでパッケージをインストールおよび管理するためのコマンドラインツールです。

### `apt-get` と `apt` の違いは？

`apt` は、Debian およびその派生ディストリビューションでアプリケーションをインストールおよび管理するための、よりモダンなツールです。

基本的に、`apt` と `apt-get` は互換性があり、`sudo apt update` と `sudo apt-get update` はどちらもシステムパッケージを更新します。

主な違いとしては、`apt` の方が入力が簡単で出力がわかりやすく、インストール時にプログレスバーなどのユーザーフレンドリーな機能を含んでいることです。

この記事の多くの例では `apt-get` を使用していますが、個人的には `apt` を使用することをお勧めします。

### `sudo apt-get update` と `sudo apt-get upgrade` は安全ですか？

はい、Debian およびその派生ディストリビューションは一般的に非常に安定しており、`update` と `upgrade` コマンドは安全に使用できます。これは、パッケージや依存関係、そしてディストリビューション自体の大規模なアップデートが年に一度か二度しかリリースされないためです。

欠点としては、最新のパッケージを使用したい場合は、Arch Linux などの最先端ディストリビューションとは異なり、追加の手間がかかることがあります。場合によっては、PPA を通じてサードパーティのリポジトリを設定したり、Snap や Flatpak などの別のパッケージングシステムを使用したり、自分でコンパイルする必要があるかもしれません。

とはいえ、少し古いソフトウェアによる安定性を重視する価値は十分にあると考えています。

### `sudo apt-get update` と `sudo apt-get upgrade` を連続して実行できますか？

`sudo apt-get update` を実行して完了を待ってから、`sudo apt-get upgrade` を実行するのは面倒ではないかと考えるかもしれません。

`sudo apt-get update` と `sudo apt-get upgrade` の両方が比較的速く実行されるとはいえ、指令をまとめて実行し、数分後に確認する方が楽なことがあります。

`&&` 演算子を使用すると、次のようにコマンドを連続して実行できます。

```
sudo apt-get update && sudo apt-get upgrade
```

`&&` 演算子の重要なポイントは、演算子の後のコマンドが実行されるのは、前のコマンドが成功した場合だけということです。

上記の例を使用すると、`sudo apt-get upgrade` は `sudo apt-get update` が成功した場合にのみ実行されます。例えば、パッケージリストの更新中にネットワークの問題が発生した場合には、`sudo apt-get update` がスキップされます。

### `sudo apt-get dist-upgrade` と `sudo apt full-upgrade` とは？これらは安全に使用できますか？

[こちらの Stack Overflow スレッド][2]によれば、これらのコマンドは内部的には同じ操作を行います。古くなったパッケージのアップグレードや、必要に応じてパッケージの削除をインテリジェントに実行します。

基本的には、`sudo apt-get upgrade` と `sudo apt autoremove` の両方のコマンドを組み合わせたものと同じです。

これらのコマンドを実行することは、ほとんどの場合安全であるべきです。

しかし、多くの人（私も含む）が、`sudo apt-get update` と `sudo apt-get upgrade` を使用することを推奨しています。これらを使用すると、これからの変更を確認する機会が増えますし、`upgrade` はパッケージを削除しないため、より安全です。

## `./thanks_for_reading.sh`

`sudo apt-get update` と `sudo apt-get upgrade` の説明が役に立ったと感じたら、ぜひ友人にシェアしていただき、より多くの人に知識を広めてください。

また、[Twitter][3] で感想をお聞かせいただけると嬉しいです。

[1]: 
[2]: https://askubuntu.com/questions/770135/apt-full-upgrade-versus-apt-get-dist-upgrade
[3]: https://twitter.com/kriskoishigawa

