---
title: conda remove コマンド – Conda 環境を削除する方法
date: 2024-08-20T14:16:52.843Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/how-to-delete-an-environment-in-conda/
posteditor: まつだようこ
proofreader: ""
---

Conda とは、隔離されたコード環境を作成できるオープンソースのパッケージ管理および環境管理システムです。

<!-- more -->

Conda を使えば、プロジェクトごとに個別の環境を作成できます。例えば、機械学習用の環境とデータ分析用の環境を別々に用意することが可能です。

各環境にはそれぞれ独自のパッケージを含めることができます。ある環境にインストールされたパッケージは、他の環境からアクセスできません。

この記事では、Conda 環境を削除する組み込みコマンドの使い方を解説します。

## Conda で環境を削除する方法

以下のコマンドを実行すると、既存の Conda 環境のリストを取得できます。

```
conda env list
```

環境を削除する前に、まずその環境を非アクティブ化 (deactivate) する必要があります。以下のコマンドを使います。

```
conda deactivate
```

環境を非アクティブ化すると、自動的に `base` 環境に切り替わります。

次に、環境を削除するには以下のコマンドを実行します。

```
conda remove --name ENV_NAME --all
```

`ENV_NAME` は、削除したい環境の名前を示します。前述の通り、`conda deactivate` コマンドを実行して環境を非アクティブ化してから削除するようにしてください。

`--all` フラグは、その環境にインストールされているすべてのパッケージを削除します。

Conda で環境を削除する手順をまとめると、次のようになります。

-   `conda deactivate` コマンドを使って環境を非アクティブ化する。
-   `conda remove --name ENV_NAME --all` コマンドを使って環境を削除する。

## まとめ

Conda というパッケージ及び環境管理システムを使うと、独立したコーディング環境とそのパッケージをインストール・管理することができます。

この記事では、Conda 環境を非アクティブ化し、削除するためのコマンドを紹介しました。

Happy coding!
