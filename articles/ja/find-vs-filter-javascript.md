---
title: JavaScript における find() と filter() の違いを例とともに解説
date: 2024-10-18T10:48:45.208Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/find-vs-filter-javascript/
posteditor: ""
proofreader: ""
---

By Aman Kalra

<!-- more -->

JavaScript 開発者がよく面接で聞かれる質問の 1 つに、find() メソッドと filter() メソッドの違いを説明するというものがあります。

この記事では、これらのメソッドがどのようなもので、どのような場面で使うべきなのかを解説していきます。

## filter() メソッドとは？

このメソッドは、コールバック関数で指定された条件を満たす配列のすべての要素を返します。

以下の例でその動作を確認してみましょう：

```javascript
const x = [1, 2, 3, 4, 5];

const y = x.filter(el => el*2 === 2);

console.log("y is: ", y); // y is: [1]
```

この例の出力を確認すると、y の値は条件を満たす 1 つの要素を含む配列になっています。これは、filter() メソッドが配列の全要素を順にチェックし、条件を満たす要素を集めた配列を返すためです。

## find() メソッドとは？

このメソッドは、コールバック関数で指定した条件を最初に満たす配列の要素を返します。

こちらも例を見てみましょう：

```javascript
const x = [1, 2, 3, 4, 5];

const y = x.find(el => el*2 === 2);

console.log("y is: ", y); // y is: 1
```

この例の出力では、y の値は 1 です。これは、find() メソッドが配列内で条件を最初に満たす要素を返すためです。

上記の例の主な違いは次の通りです：

1. `filter()` は条件を満たす要素を含む配列を返しますが、`find()` は条件を満たす要素そのものを返します。
2. `filter()` は配列全体をチェックしますが、`find()` は条件を満たす要素が見つかり次第、処理を終えます。

## find() と filter() の使い分け

複数の要素が返されることが期待され、それら全てに対して操作を行いたい場合は、**filter()** メソッドを使用します。一方、配列から 1 つだけの要素が返ることを期待している場合は、追加の反復処理を避けるために **find()** メソッドを使用します。

それぞれのケースについて例を見てみましょう：

### 1\. filter() の使用例

```javascript
const x = [1, 2, 3, 4, 5];

const y = x.filter(el => el%2 === 0);

console.log("y is: ", y); // y is: [2, 4]
```

この例では、`filter()` を使用して配列内の偶数をすべて見つけるために全要素をチェックする方が適しています。

### 2\. find() の使用例

```javascript
const emp = [
    {
        name: "Ram",
        empID: 101
    },
    {
        name: "Sham",
        empID: 102
    },
    {
        name: "Mohan",
        empID: 103
    }
];

const res = emp.find(el => el.empID === 102);

console.log("res is: ", res); // res is: {name: 'Sham', empID: 102}
```

この例では、`find()` を使用する方が適しています。この場合は `empID` が `102` の従業員が 1 人しかいないため、3 番目のオブジェクトをチェックすることを避けることができます。

### **ご覧いただきありがとうございます！**

この記事が役に立ったと感じたら、ぜひ友達や同僚とシェアしてください。

