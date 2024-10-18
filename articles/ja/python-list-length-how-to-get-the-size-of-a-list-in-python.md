---
title: Python リストの長さを取得する方法 - Python でリストのサイズを知る
date: 2024-10-18T11:17:30.856Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-list-length-how-to-get-the-size-of-a-list-in-python/
posteditor: ""
proofreader: ""
---

Python では、リストを使って文字列や数値などの様々なデータを保存します。

<!-- more -->

リストは角括弧で括られ、個々の値はコンマで区切られます。

Python でリストの長さを知りたい場合、組み込み関数の `len()` を使うことができます。

`len()` 関数以外にも、for ループや `length_hint()` 関数を使ってリストの長さを取得する方法があります。

この記事では、リストの長さを取得する 3 つの異なる方法をご紹介します。

## For ループを使って Python でリストの長さを取得する方法

Python のネイティブな for ループを用いてリストの長さを取得できます。リストはタプルや辞書と同様に反復可能なオブジェクトです。

この方法は一般的に「ナイーブな方法」と呼ばれています。

以下に示す例では、Python でリストの長さを取得するためのナイーブな方法を紹介します。

```python
demoList = ["Python", 1, "JavaScript", True, "HTML", "CSS", 22]

# カウンター変数の初期化
counter = 0

for item in demoList:
    # リスト内の各項目を取得するためにカウンターを増加
    counter = counter + 1

# カウンターを文字列に変換して結果をコンソールに出力
print("The length of the list using the naive method is: " + str(counter))
# 出力: The length of the list using the naive method is: 7
```

## `len()` 関数を使ってリストの長さを取得する方法

`len()` 関数を使う方法は、反復可能なオブジェクトの長さを取得する最も一般的な方法です。

for ループを使うよりも直接的です。

`len()` メソッドの構文は `len(listName)` です。

以下のコードスニペットは、`len()` 関数を使ってリストの長さを取得する方法を示しています。

```python
demoList = ["Python", 1, "JavaScript", True, "HTML", "CSS", 22]

sizeOfDemoList = len(demoList)

print("The length of the list using the len() method is: " + str(sizeOfDemoList))
# 出力: The length of the list using the len() method is: 7
```

## `length_hint()` 関数を使ってリストの長さを取得する方法

`length_hint()` メソッドは、リストや他の反復可能なオブジェクトの長さを取得するあまり知られていない方法です。

`length_hint()` は operator モジュールで定義されているため、使用する前にインポートする必要があります。

`length_hint()` メソッドの構文は `length_hint(listName)` です。

以下の例は、`length_hint()` メソッドを使ってリストの長さを取得する方法を示しています。

```python
from operator import length_hint
demoList = ["Python", 1, "JavaScript", True, "HTML", "CSS", 22]

sizeOfDemoList = length_hint(demoList)
print("The length of the list using the length_hint() method is: " + str(sizeOfDemoList))
# 出力: The length of the list using the length_hint() method is: 7
```

## まとめ

この記事では、for ループ、`len()` 関数、そして operator モジュールの `length_hint()` 関数を使ってリストのサイズを取得する 3 つの方法をご紹介しました。

この 3 つの方法の中でどれを使うべきか迷っているかもしれません。

`len()` を使うのが良いと私はお勧めします。for ループや `length_hint()` に比べて簡単に使用できるからです。

さらに、`len()` は for ループや `length_hint()` よりも速いようです。

この記事が役に立った場合は、同じ悩みを抱える他の人に知らせるためにシェアしてください。

