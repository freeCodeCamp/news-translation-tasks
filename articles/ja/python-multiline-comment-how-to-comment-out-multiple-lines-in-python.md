---
title: Python での複数行コメント – 複数行をコメントアウトする方法
date: 2024-08-27T07:51:56.323Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-multiline-comment-how-to-comment-out-multiple-lines-in-python/
posteditor: ""
proofreader: ""
---

コメントはすべてのプログラミング言語において重要な部分です。コメントを使うことで自分のコードをより理解しやすくし、可読性を向上させ、チームメンバーがコードの動作を理解するのを助けることができます。

<!-- more -->

コメントはコンパイラーやインタープリターによって無視されるため、実行されません。

コードの可読性を向上させるだけでなく、デバッグの際にも役立ちます。2 行のコードがある場合、一方をコメントアウトして実行を防ぐことができます。

他のプログラミング言語と同様に、Python もコメントをサポートしています。

ただし、Python には複数行コメント用の組み込みメカニズムがありません。

この記事では、Python での単一行コメントの方法だけでなく、複数行コメントのワークアラウンドも紹介します。

## Python での単一行コメントの方法

Python で単一行コメントを作成するには、各行の前にハッシュ (`#`) を追加します。

```
# print("Hello world")

print("Hello campers")
```

出力:

```
Hello campers
```

ご覧のとおり、コメントアウトされた行は出力に表示されませんでした。

## Python での複数行コメントの方法

JavaScript、Java、および C++ のような他のプログラミング言語とは異なり、Python には `/*...*/` のような複数行コメント用の組み込みメカニズムはありません。

Python で複数行をコメントアウトするには、各行の前にハッシュ (`#`) を追加する方法があります。

```
# print("Hello world")
# print("Hello universe")
# print("Hello everyone")

print("Hello campers")
```

出力:

```
Hello campers
```

この方法では、技術的に複数の単一行コメントを作成していることになります。

Python で複数行コメントを実現する実際のワークアラウンドは、**ドキュメンテーション文字列 (docstrings)** を使用することです。

Python でドキュメンテーション文字列を使用して複数行のコードをコメントアウトすると、そのコードブロックは無視され、ドキュメンテーション文字列の外側の行だけが実行されます。

```
"""
これは docstrings を使用した複数行コメントです

print("Hello world")
print("Hello universe")
print("Hello everyone")
"""

print("Hello campers")
```

出力:

```
Hello campers
```

**注意:** ドキュメンテーション文字列をコメントとして使用する際には、インデントが重要です。インデントとして 4 つのスペース (またはタブ) を使用しないと、インデントエラーが発生します。

例えば、次のコードは動作します：

```
def addNumbers(num1, num2, num3):
    """
    3 つの数字の合計を返す関数
    """
    return num1 + num2 + num3
print(addNumbers(2, 3, 4))

# 出力: 9
```

しかし、次のコードは動作しません：

```
def addNumbers(num1, num2, num3):
"""
3 つの数字の合計を返す関数
"""
    return num1 + num2 + num3
print(addNumbers(2, 3, 4))
```

このような場合、IDE は "`IndentationError: expected an indented block`" というエラーを表示します。

## 結論

Python には複数行コメントの組み込みサポートがないため、この記事では docstrings をワークアラウンドとして使用する方法を紹介しました。

それでも、複数行にわたる場合でも通常の Python コメント (ハッシュ `#` を使用) を使うことをお勧めします。これは、docstrings はドキュメント用であり、コードのコメントアウトには使わない方が良いためです。

この記事が役に立ったと感じたら、ぜひ友人や家族と共有してください。

読んでいただき、ありがとうございました。

