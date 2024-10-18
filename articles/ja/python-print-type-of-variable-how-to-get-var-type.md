---
title: Python で変数の型を表示する方法 – データ型を取得する方法
date: 2024-10-18T11:20:41.093Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/
posteditor: ""
proofreader: ""
---

Python 初心者にとって、さまざまなデータ型を理解するのは最初難しく感じるかもしれません。というのも、Python には多くのデータ型が用意されているからです。

<!-- more -->

この記事では、Python のさまざまなデータ構造を変数に割り当て、その型を `print()` 関数を使ってコンソールに表示する方法を紹介します。

## Python で変数の型を表示する方法

Python で変数の型を取得するには、組み込みの `type()` 関数を使用します。

基本的な構文は次のようになります。

```
type(variableName)
```

Python では、すべてがオブジェクトです。そのため、`type()` 関数を使用して変数に格納された値の型をコンソールに表示すると、そのオブジェクトのクラス型が返されます。

例えば、型が文字列の場合、`type()` を使用すると `<class 'str'>` といった結果が得られます。

ここでは、Python のさまざまなデータ型を持つ変数を宣言し、`type()` 関数を使ってその型を表示します。

```
name = "freeCodeCamp"

score = 99.99

lessons = ["RWD", "JavaScript", "Databases", "Python"]

person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 28
}

langs = ("Python", "JavaScript", "Golang")

basics = {"HTML", "CSS", "JavaScript"}
```

次に、`print()` に文字列と `type()` 関数を組み合わせて、各変数の型をコンソールに表示します。

```
print("The variable, name is of type:", type(name))
print("The variable, score is of type:", type(score))
print("The variable, lessons is of type:", type(lessons))
print("The variable, person is of type:", type(person))
print("The variable, langs is of type:", type(langs))
print("The variable, basics is of type:", type(basics))
```

**出力結果は以下の通りです:**

```
# Outputs:
# The variable, name is of type: <class 'str'>
# The variable, score is of type: <class 'float'>  
# The variable, lessons is of type: <class 'list'>
# The variable, person is of type: <class 'dict'> 
# The variable, langs is of type: <class 'tuple'> 
# The variable, basics is of type: <class 'set'>
```

## おわりに

`type()` 関数は、変数のデータ型を取得するのに便利な Python の組み込み関数です。

初心者の方は、データ型を丸暗記する手間を省くために、`type()` 関数を使ってコンソールに変数の型を表示させると良いでしょう。これにより、時間を節約できます。

また、Python では変数はデータ型を宣言せずに使用するため、`type()` 関数を使って変数のデータ型をチェックすることは、デバッグの際にも役立ちます。

ご覧いただきありがとうございました。

