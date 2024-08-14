---
title: Int オブジェクトは反復可能ではありません – Python エラーの対処法
date: 2024-08-14T09:26:27.222Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/int-object-is-not-iterable-python-error-solved/
translator: ""
reviewer: ""
---

Python コードを実行しているときに「TypeError: 'int' object is not iterable」というエラーに遭遇した場合、それは整数や反復処理ができないデータ型に対してループを試みていることを意味します。

<!-- more -->

Python では、リスト、タプル、セット、辞書などが反復可能なデータです。

また、このエラーが「TypeError」であることは、不適切なデータ型で操作を行おうとしていることを示しています。例えば、文字列と整数を足し合わせようとする場合などです。

ここでは、このエラーの対処法だけでなく、オブジェクトが反復可能かどうかを確認するための `__iter__` マジックメソッドのチェック方法も紹介します。この方法を知っていれば、もうこのエラーに悩まされることはありません。

## Int オブジェクトが反復可能ではないエラーの対処法

整数をループしようとすると、このエラーが発生します：

```
count = 14

for i in count:
    print(i)
# 出力: TypeError: 'int' object is not iterable
```

これを修正する一つの方法は、`range()` 関数に変数を渡すことです。

Pythonでは、`range` 関数は渡された変数をチェックし、0 から始まり、指定された数の直前までの一連の数値を返します。

このようにしてループは正常に動作するようになります：

```
count = 14

for i in range(count):
    print(i)

# 出力: 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
```

この方法を使用した別の例も以下に示します：

```
age = int(input("あなたの年齢を入力してください: "))

for num in range(age):
    print(num)

# 出力: 
# あなたの年齢を入力してください: 6
# 0
# 1
# 2
# 3
# 4
# 5
```

## データまたはオブジェクトが反復可能かどうかの確認方法

特定のデータが反復可能かどうかを確認するためには、`dir()` メソッドを使用できます。このメソッドで `__iter__` マジックメソッドが見つかれば、そのデータは反復可能です。見つからなければ、反復可能ではないのでループを試みるべきではありません。

```
perfectNum = 7

print(dir(perfectNum))

# 出力: ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', 
# '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```

この出力には `__iter__` マジックメソッドが含まれていないため、変数 `perfectNum` は反復可能ではありません。

```
jerseyNums = [43, 10, 7, 6, 8]

print(dir(jerseyNums))

# 出力: ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

この出力には `__iter__` マジックメソッドが含まれているため、リスト `jerseyNums` は反復可能です。

## 結論

この記事では、「Int オブジェクトは反復可能ではありません」エラーの原因と解決法について学びました。

また、オブジェクトやデータが反復可能かどうかを確認する方法についても紹介しました。

データに `__iter__` マジックメソッドが含まれていない場合、そのデータをループしようとするのは避けるべきです。

読んでいただきありがとうございます。

---

![Kolade Chris](https://cdn.hashnode.com/res/hashnode/image/upload/v1720467520534/YTa5HE3R0.jpg)

私はフロントエンド技術に特化したソフトウェア開発者であり、技術ライターです。

---

ここまで読んでくださった方へ、感謝の気持ちを込めて著者に「ありがとう」を伝えましょう。

無料でコードを学びましょう。freeCodeCamp のオープンソースカリキュラムは、40,000 人以上の人々が開発者としての仕事を得るのを支援しています。 [始めるにはこちら][1]

[1]: https://www.freecodecamp.org/learn/


