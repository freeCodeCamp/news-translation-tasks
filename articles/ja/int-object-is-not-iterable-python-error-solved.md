---
title: Python エラー 'int' object is not iterable の対処法
date: 2024-08-14T09:26:27.222Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/int-object-is-not-iterable-python-error-solved/
translator: まつだようこ
reviewer: ""
---

Python コードの実行中に「TypeError: 'int' object is not iterable」というエラーに遭遇した場合、それは、反復処理ができないはずの整数などのデータ型に対してループ処理を試みていることを意味します。

<!-- more -->

Python では、リスト、タプル、セット、辞書などが反復可能なデータにあたります。

また、このエラーが「TypeError」であることから、不適切なデータ型で操作を行おうとしていることがわかります。例えば、文字列と整数を足し合わせようとする場合などと同じエラーです。

この記事では、このエラーの対処法だけでなく、`__iter__` マジックメソッドをチェックしてオブジェクトが反復可能かどうかを確認する方法も紹介します。この方法を知っていれば、もうこのエラーに悩まされることはありません。

## 'int' object is not iterable エラーの対処法

整数をループしようとすると、このエラーが発生します:

```
count = 14

for i in count:
    print(i)
# 出力: TypeError: 'int' object is not iterable
```

これを修正する方法の 1 つとして考えられるのが、変数を `range()` 関数に渡すことです。

Python における `range` 関数は、渡された変数をチェックして、0 から指定された数の直前までの一連の数値を返します。

次のようにすると、ループは正常に動作するようになります:

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

この方法を使用したコード例をもう 1 つ示します:

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

あるデータが反復可能かどうかを確認するために、`dir()` メソッドが使用できます。このメソッドで `__iter__` マジックメソッドが見つかれば、そのデータは反復可能です。見つからない場合、そのデータは反復可能ではないため、ループを試みるべきではありません。

```
perfectNum = 7

print(dir(perfectNum))

# 出力: ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', 
# '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```

上記の出力には `__iter__` マジックメソッドが含まれていないため、変数 `perfectNum` は反復可能ではないとわかります。

```
jerseyNums = [43, 10, 7, 6, 8]

print(dir(jerseyNums))

# 出力: ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

上記の出力では `__iter__` マジックメソッドが含まれています。つまり、リスト `jerseyNums` は反復可能です。

## 結論

この記事では、「'int' object is not iterable」エラーの原因と解決法について学びました。

また、オブジェクトやデータが反復可能かどうかを確認する方法についても紹介しました。

データに `__iter__` マジックメソッドが含まれていない場合、そのデータをループしようとするのは避けるようにしましょう。

お読みいただきありがとうございました。
