---
title: Python で複数行コメントを作成する方法
date: 2024-08-27T07:35:05.247Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-multiline-comment-how-to-comment-out-multiple-lines-in-python/
posteditor: ""
proofreader: ""
---

コメントはすべてのプログラミング言語において重要な要素です。コメントを使うことで、自分のコードを理解しやすくし、可読性を高め、チームメンバーがコードの動作を理解する助けにもなります。

<!-- more -->

コメントはコンパイラやインタープリタによって無視されるため、実行されることはありません。

さらに、デバッグ中にもコメントは役立ちます。例えば、2 行のコードがある場合、そのうち 1 行をコメントアウトすることで実行を防ぐことができます。

他のプログラミング言語と同様に、Python もコメントをサポートしています。

しかし、Python には複数行コメントのための組み込みのメカニズムがありません。

そこでこの記事では、Python でシングルラインコメントを作成する方法だけでなく、複数行コメントを作成するためのワークアラウンドも紹介します。

## Python でシングルラインコメントを作成する方法

Python でシングルラインコメントを作成するには、それぞれの行の先頭にハッシュ (`#`) を付けます。

```
# print("Hello world")

print("Hello campers")
```

出力:

```
Hello campers
```

ご覧の通り、コメントアウトされた行は出力に表示されませんでした。

## Python で複数行コメントを作成する方法

JavaScript、Java、C++ などの他のプログラミング言語では、複数行コメントに `/*...*/` を使用しますが、Python にはそのような組み込みのメカニズムがありません。

Python で複数行をコメントアウトするには、各行の先頭にハッシュ (`#`) を付けることができます。

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

この方法では、実際には単一行のコメントを複数作成していることになります。

Python で複数行コメントを作成するための実際のワークアラウンドは、**ドキュメンテーション文字列（docstrings）** を使用することです。

Python で複数行のコードをドキュメンテーション文字列でコメントアウトすると、そのコードブロックは無視され、ドキュメンテーション文字列の外側の行だけが実行されます。

```
"""
This is a multi-line comment with docstrings

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

**注意:** ドキュメンテーション文字列をコメントに使用する場合、インデントが重要です。インデントに 4 つのスペース（またはタブ）を使用すると、インデントエラーが発生します。

例えば、以下は動作します:

```
def addNumbers(num1, num2, num3):
    """
    3 つの数字の合計を返す関数
    """
    return num1 + num2 + num3
print(addNumbers(2, 3, 4))

# 出力: 9
```

しかし、以下は動作しません:

```
def addNumbers(num1, num2, num3):
"""
3 つの数字の合計を返す関数
"""
    return num1 + num2 + num3
print(addNumbers(2, 3, 4))
```

この場合、IDE は "`IndentationError: expected an indented block`" というエラーを投げます。

## まとめ

Python には複数行コメントのための組み込みサポートがないので、この記事ではドキュメンテーション文字列を使用したワークアラウンドを紹介しました。

しかし、一般的には、ハッシュ (`#`) を使用して通常の Python コメントを使用するべきです。複数行にわたって使用する必要があっても同様です。これは、ドキュメンテーション文字列はドキュメント用であり、コードのコメントアウトには向いていないからです。

この記事が参考になったら、ぜひシェアしてください。

ご覧いただき、ありがとうございました。

