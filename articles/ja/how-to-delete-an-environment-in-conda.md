---
title: Conda 環境の削除方法 - 環境を削除する方法
date: 2024-08-20T14:16:52.843Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/how-to-delete-an-environment-in-conda/
posteditor: ""
proofreader: ""
---

Conda は、異なるコード環境を分離して作成するためのオープンソースのパッケージ管理および環境管理システムです。

<!-- more -->

Conda を使えば、特定のプロジェクトごとに別々の環境を作成できます。例えば、機械学習用の環境とデータ分析用の環境を別々に用意することも可能です。

各環境にはそれぞれ独自のパッケージが含まれており、ある環境にインストールされたパッケージは他の環境からアクセスできません。

この記事では、Conda の組み込みコマンドを使って環境を削除する方法を解説します。

## Conda で環境を削除する方法

まず、以下のコマンドを実行して、既存の Conda 環境のリストを取得できます。

```
conda env list
```

環境を削除する前に、まずその環境を非アクティブ化（deactivate）する必要があります。以下のコマンドを使います。

```
conda deactivate
```

環境を非アクティブ化すると、自動的に `base` 環境に戻ります。

次に、環境を削除するには、以下のコマンドを実行します。

```
conda remove --name ENV_NAME --all
```

`ENV_NAME` は削除したい環境の名前を示します。`conda deactivate` コマンドを実行して環境を非アクティブ化してから削除するようにしてください。

`--all` フラグは、その環境にインストールされているすべてのパッケージを削除します。

Conda で環境を削除する手順をまとめると、次のようになります。

-   `conda deactivate` コマンドを使って環境を非アクティブ化する。
-   `conda remove --name ENV_NAME --all` コマンドを使って環境を削除する。

## まとめ

この記事では、Conda というパッケージ及び環境管理システムについて説明しました。Conda を使うことで、独立したコーディング環境とそのパッケージをインストールして管理することができます。

環境を非アクティブ化し、削除するためのさまざまなコマンドを紹介しました。

ハッピーコーディング！

