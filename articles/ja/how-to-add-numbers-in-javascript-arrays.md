---
title: JavaScript 配列の合計計算 – JavaScript 配列内の数字を足し合わせる方法
date: 2024-10-18T10:44:57.122Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/how-to-add-numbers-in-javascript-arrays/
posteditor: ""
proofreader: ""
---

JavaScript における配列は、複数の値を順序通りに一つの変数名の下に収納し、それらの値を様々な方法で操作することができるオブジェクトです。

<!-- more -->

この記事では、指定された配列内の全ての数字を合計するための異なるアプローチについて学びます。

具体的には、以下の方法を用いて配列内の全ての数字の合計を求める方法をお見せします：

- `for` ループ
- `forEach()` メソッド
- `reduce()` メソッド

では、始めましょう！

## JavaScript の `for` ループを使って配列の合計を計算する方法

配列内の全ての数字の合計を計算する最も簡単な方法の一つは、`for` ループを使用することです。このループは `n` 回繰り返します。

次の例を見てみましょう：

```
// 配列を作成
let myNums = [1, 2, 3, 4, 5];

// 合計を格納する変数を作成し初期化
let sum = 0;

// 配列の各項目をループで処理
for (let i = 0; i < myNums.length; i++ ) {
  sum += myNums[i];
}

console.log(sum) // 15
```

上記の例では、まず `myNums` という名前の配列を作成し、5 つの値を格納しています。

次に、`sum` という名前の変数を宣言し、その初期値として `0` を設定しました。この変数は `for` ループ内での計算結果を格納します。

その後、`for` ループを使用して `myNums` 配列のすべての要素を末尾までイテレーションしました。

また、`sum` 変数の値を現在の値と現在の配列要素を加算することで再代入しました。

JavaScript における `for` ループの詳細を知りたい方は、[この記事][1]をお読みください。

## JavaScript の `forEach()` メソッドを使って配列の合計を計算する方法

配列の合計を計算する別の方法として、JavaScript の `forEach()` メソッドを使うことができます。このメソッドは配列を繰り返し処理し、各項目に対して関数を呼び出します。

次の例を見てみましょう：

```
// 配列を作成
const myNums = [1,2,3,4,5];

// 合計を格納する変数を作成し初期化
let sum = 0;

// forEach() メソッドを使用して合計を計算
myNums.forEach( num => {
  sum += num;
})

console.log(sum) // 15
```

上記の例では、`myNums` という配列を作成しました。また、`sum` という変数を宣言し、その初期値として `0` を設定しました。

次に `forEach()` メソッドを使用して、配列内の各項目をイテレーションしました。

各イテレーションで、`sum` 変数の値に現在の値と現在の配列要素の値を追加することで再代入しました。

`forEach()` 関数の詳細について知りたい方は、[この記事][2]をお読みください。

## JavaScript の `reduce()` メソッドを使って配列の合計を計算する方法

配列の合計を計算するためのもう一つの方法は、ES6 で導入された `reduce()` メソッドを使うことです。

`reduce()` メソッドは、配列内のすべての要素を一つの値に集約します。

次の例を見てみましょう：

```
// 配列を作成
const myNums = [1,2,3,4,5];

// reduce() メソッドを使って合計を求める
var sum = myNums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum) // 15
```

`reduce()` メソッドは、ユーザー定義のコールバック関数を最初の必須引数として受け取ります。この関数は配列の各要素で呼び出されます。

コールバック関数は次の 2 つの必須パラメータを受け取ります：

- `accumulator`: 前の関数呼び出しからの最終的な返り値を格納する変数。
- `currentValue`: 現在の配列の項目を表します。

`reduce()` メソッドの第 2 引数は `initialValue` で、これは `0` です。`initialValue` は `accumulator` の初期値を表します。

`reduce()` メソッドの詳細について知りたい方は、[この記事][3]をお読みください。

## 結論

以上で、JavaScript において配列の合計を計算する 3 つの方法を学びました。

JavaScript についてもっと学びたい方は、[この初心者向け JavaScript 完全講座][4]をチェックしてください。

お読みいただきありがとうございます。楽しいコーディングを！

[1]: https://www.freecodecamp.org/news/javascript-for-loops/
[2]: https://www.freecodecamp.org/news/javascript-foreach-how-to-loop-through-an-array-in-js/
[3]: https://www.freecodecamp.org/news/reduce-f47a7da511a9/
[4]: https://www.freecodecamp.org/news/full-javascript-course-for-beginners/

