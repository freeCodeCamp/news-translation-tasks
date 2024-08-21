---
title: Python リスト検索 - リスト内のアイテムや要素のインデックスを見つける方法
date: 2024-08-21T09:09:13.236Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/python-find-in-list-how-to-find-the-index-of-an-item-or-element-in-a-list/
posteditor: ""
proofreader: ""
---

この記事では、Python プログラミング言語でリスト内の要素のインデックスを見つける方法を学びます。

<!-- more -->

いくつかの方法があり、この記事では Python でリスト要素のインデックスを見つけるための 3 つの技術について学びます。

使用される 3 つの技術は次のとおりです：

- `index()` メソッドを使用してインデックスを見つける方法
- `for ループ` を使用する方法
- リスト内包表記と `enumerate()` 関数を使用する方法

具体的には、以下のトピックを深く解説します：

1. [Python のリストの概要][1]
    1. [インデックスの仕組み][2]
2. [ `index()` メソッドを使用して、アイテムのインデックスを見つける方法][3]
    1. [`index()` メソッドのオプションパラメータの使い方][4]
3. [リスト内のアイテムのすべての出現場所のインデックスを取得する方法][5]
    1. [`for ループ` を使用してアイテムのすべての出現場所のインデックスを取得する方法][6]
    2. [リスト内包表記と `enumerate()` 関数を使用してアイテムのすべての出現場所のインデックスを取得する方法][7]

## Python のリストとは？

リストは Python に組み込まれているデータ型であり、最も強力なデータ構造の 1 つです。

リストはコンテナとして機能し、複数の関連アイテムを同じ変数名の下に格納します。

アイテムは角括弧 `[]` の中に配置されます。それぞれのアイテムはカンマ `,` で区切られます。

```
# 文字列と数字を含む 'my_information' リスト
my_information = ["John Doe", 34, "London", 1.76]
```

上記の例からわかるように、リストに含まれるアイテムは任意のデータ型にすることができるため、リスト要素は異種である可能性があります。

同じ型のアイテムのみを格納する配列とは異なり、リストはより柔軟性があります。

リストは _ミュータブル_ でもあり、つまり変更可能で動的です。プログラムの実行中にリストのアイテムを更新したり、新しいアイテムを追加したり、任意のアイテムを削除することができます。

### Python におけるインデックスの概要

前述のとおり、リストはアイテムのコレクションです。特に、リストは順序付きのアイテムのコレクションであり、そのセットと定義された順序をほぼ維持します。

リスト内の各要素には、それを識別する一意の位置があります。

その位置を要素の _インデックス_ と呼びます。

Python およびすべてのプログラミング言語におけるインデックスは `0` から始まり、**1 ではありません**。

前のセクションで使用したリストを見てみましょう：

```
my_information = ["John Doe", 34, "London", 1.76]
```

このリストは 0 ベースのインデックスを持ち、カウントは `0` から始まります。

リストの最初の要素 `"John Doe"` のインデックスは `0` です。2 番目の要素 `34` のインデックスは `1` です。3 番目の要素 `"London"` のインデックスは `2` です。4 番目の要素 `1.76` のインデックスは `3` です。

インデックスは、その位置（インデックス）を知っている特定のリストアイテムにアクセスするのに便利です。

したがって、インデックスを使用して任意のリスト要素を取得できます。

アイテムにアクセスするには、まずリストの名前を入力し、次に角括弧内にアクセスしたいアイテムのインデックスに対応する整数を含めます。

インデックスを使用して各アイテムにアクセスする方法は次のとおりです：

```
my_information = ["John Doe", 34, "London", 1.76]

print(my_information[0])
print(my_information[1])
print(my_information[2])
print(my_information[3])

# 出力

# John Doe
# 34
# London
# 1.76
```

では、Python でリストのアイテムのインデックスを _見つける_ にはどうすればよいでしょうか？

次のセクションでは、リスト要素のインデックスを見つけるためのいくつかの方法を見ていきます。

## `index()` メソッドを使用してアイテムのインデックスを見つける方法

これまでは、インデックス番号を参照して値にアクセスする方法を見てきました。

しかし、大きなリストを扱っているときにインデックス番号がわからない場合はどうでしょうか？

値を指定してそのインデックスを見つけることで、リスト内の位置を確認できます。

そのために、Python の組み込みメソッド `index()` を検索ツールとして使用します。

`index()` メソッドの構文は次のようになります：

```
my_list.index(item, start, end)
```

これを分解してみましょう：

- `my_list` は検索対象のリストの名前です。
- `.index()` は検索メソッドで、3 つのパラメータを取ります。1 つは必須で、他の 2 つは任意です。
- `item` は必須のパラメータです。検索する要素です。
- `start` は最初の任意のパラメータです。検索を開始するインデックスです。
- `end` は 2 番目の任意のパラメータです。検索を終了するインデックスです。

必須のパラメータのみを使用する例を見てみましょう：

```
programming_languages = ["JavaScript","Python","Java","C++"]

print(programming_languages.index("Python"))

# 出力
# 1
```

上記の例では、`index()` メソッドは 1 つの引数を取り、これはインデックスを探している要素です。

戻り値は整数であり、その整数はメソッドの引数として渡されたリスト項目のインデックス番号です。

別の例を見てみましょう。

```
programming_languages = ["JavaScript","Python","Java","C++"]

print(programming_languages.index("React"))

# 出力
# 3行目, <module> 内
#    print(programming_languages.index("React"))
# ValueError: 'React'はリストにありません
```

リスト内に存在しない項目を検索しようとすると、Python はエラーを返します。具体的には `ValueError` が返されます。これは、検索対象の項目がリストに存在しないことを示しています。

このエラーを防ぐ方法として、`index()` メソッドの呼び出しを `try/except` ブロックでラップすることが考えられます。

値が存在しない場合、リストに保存されておらず、存在しない旨のメッセージがコンソールに表示されます。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

try:
    print(programming_languages.index("React"))
except ValueError:
    print("その項目は存在しません")

# 出力
# その項目は存在しません
```

もう一つの方法は、まずその項目がリスト内に存在するかどうか確認し、その後でインデックス番号を求めることです。出力は Boolean 値 (True か False) になります。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print("React" in programming_languages)

# 出力
# False
```

### `index()` メソッドのオプションパラメータの使い方

次の例を見てみましょう。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print(programming_languages.index("Python"))

# 出力
# 1
```

`programming_languages` リストには、「Python」という文字列が 3 回出現しています。

テストのために、このリストが小さいため、逆から数えることができます。

インデックス番号を数えて見つけ、前述のセクションで見たように参照できます。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print(programming_languages[1])
print(programming_languages[3])
print(programming_languages[5])

# 出力
# Python
# Python
# Python
```

位置 `1` に 1 つ、位置 `3` にもう 1 つ、最後に位置 `5` にもう 1 つ存在します。

なぜ `index()` メソッドを使った時にこれらが出力されないのでしょうか？

`index()` メソッドを使うと、戻り値はリスト内で **最初に出てきた** 項目のインデックスだけです。残りの出現は返されません。

`index()` メソッドは、項目が **最初** に現れる位置のインデックスのみを返します。

`index()` メソッドにオプションの `start` および `end` パラメータを渡すことを試すことができます。

最初の出現はインデックス `1` から始まることは既に知っているので、これは `start` パラメータの値になります。

`end` パラメータには、まずリストの長さを調べる必要があります。

長さを調べるには、`len()` 関数を使用します。

```
print(len(programming_languages))

# 出力は 6
```

`end` パラメータの値は、リストの長さから 1 を引いたものになります。リスト内の最後の項目のインデックスは常にリストの長さより 1 少ないからです。

それでは、これらをすべて組み合わせて、次のようにすれば項目の 3 つの出現すべてを取得できるかもしれません。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print(programming_languages.index("Python", 1, 5))

# 出力
# 1
```

出力はやはり最初のインスタンスのみです！

`start` と `end` パラメータは検索の範囲を指定しますが、`index()` メソッドを使用すると戻り値はリスト内で項目が **最初** に出てきた位置のインデックスだけです。

## リスト内の項目のすべての出現箇所のインデックスを取得する方法

### `for ループ` を使用してリスト内の項目のすべての出現箇所のインデックスを取得する

これまで使ってきた同じ例を取り上げます。

このリストには 3 つの「Python」文字列が出現しています。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]
```

まず、新しい空のリストを作成します。

これは、「Python」のすべてのインデックスが格納されるリストになります。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

python_indices = []
```

次に、`for ループ` を使用します。これはリストを反復（またはループ）し、元のリスト内の各項目を取得する方法です。具体的には、各項目のインデックス番号をループします。

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

python_indices = []

for programming_language in range(len(programming_languages)):
```

最初に `for` キーワードを使用します。

次に、この場合 `programming_language` という変数を作成します。これは反復プロセス中に元のリスト内の各項目の位置のプレースホルダーとして機能します。

次に、`for ループ` が実行する設定された反復回数を指定する必要があります。

この場合、ループはリストの全長にわたって最初から最後まで反復します。構文 `range(len(programming_languages))` は、リスト `programming_languages` 内のすべての項目にアクセスする方法です。

`len()` 関数はリストの長さを計算します。この場合、カウントは `0` から始まり、リストの終わりである `6` まで - ただしこの場合 `6` は含まれません。

最後に、論理条件を設定する必要があります。

本質的にはこう言いたいのです。「もしイテレーションの最中に、指定された位置の値が 'Python' と等しい場合、その位置を前に作成した新しいリストに追加してください」と。

要素をリストに追加するには、`append()` メソッドを使用します。

```
programming_languages = ["JavaScript", "Python", "Java", "Python", "C++", "Python"]

python_indices = []

for programming_language in range(len(programming_languages)):
    if programming_languages[programming_language] == "Python":
      python_indices.append(programming_language)

print(python_indices)

#出力

#[1, 3, 5]
```

### リスト内包表記と `enumerate()` 関数を使って、リスト内の特定のアイテムの全ての発生インデックスを取得する

特定のアイテムのすべての発生インデックスを取得するもう一つの方法は、リスト内包表記を使用することです。

リスト内包表記は既存のリストを元に新しいリストを作成する方法です。

ここでは、リスト内包表記を使って文字列 "Python" のすべての発生インデックスを取得する方法を紹介します。

```
programming_languages = ["JavaScript", "Python", "Java", "Python", "C++", "Python"]

python_indices  = [index for (index, item) in enumerate(programming_languages) if item == "Python"]

print(python_indices)

#[1, 3, 5]
```

`enumerate()` 関数を使用すると、設定した条件を満たすアイテムのインデックスを保存できます。

この関数はまず、リスト (`programming_languages`) の各要素に対してペア (`index, item`) を提供します。このリストは関数に引数として渡されています。

`index` はリストアイテムのインデックス番号を表し、`item` はリストアイテム自体を表します。

その後、この関数はカウンターとして機能し、設定した条件が満たされるたびにカウントを `0` から始めて増加させ、条件を満たすアイテムのインデックスを選択して移動します。

リスト内包表記と組み合わせることで、"Python" という文字列のすべてのインデックスを含む新しいリストが作成されます。

## 結論

以上です！アイテムのインデックスを見つける方法、そしてリスト内でアイテムが複数回発生するインデックスを見つける方法を学びましたね。

この記事が役に立ったことを願っています。

Python プログラミング言語についてもっと学びたい方は、freeCodeCamp の [Scientific Computing with Python Certification][8] をチェックしてください。

基礎から始めて、インタラクティブかつ初心者に優しい方法で学ぶことができます。また、学んだことを実践し強化するために、最後に5つのプロジェクトを構築します。

読んでいただきありがとうございました。ハッピーコーディング！

[1]: #intro
[2]: #index-intro
[3]: #index
[4]: #params
[5]: #all
[6]: #for
[7]: #enumerate
[8]: https://www.freecodecamp.org/learn/scientific-computing-with-python/

