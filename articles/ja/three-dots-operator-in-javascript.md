---
title: JavaScript の … 演算子 – JS における 3 つのドット演算子
date: 2024-10-18T11:44:14.429Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/three-dots-operator-in-javascript/
posteditor: ""
proofreader: ""
---

By Joel Olawanle

<!-- more -->

JavaScript における 3 つのドット演算子は、ES6 で導入された重要な更新の一つです。

この演算子 (`...`) を使うことで、以前では何行ものコードや複雑な構文が必要だったさまざまな処理が簡潔に行えるようになりました。

今回は、この 3 つのドット演算子が何を意味するのか、そしてどのように機能するのかを学びます。具体的な例を通じて、どのように利用されるのかを確認し、従来の方法と比較しながらその利便性を探ってみましょう。JavaScript 開発者にとって、このドット演算子がどのように有利に働くのかがわかるはずです。

JavaScript における 3 つのドット演算子は、異なる 2 つの用途があります。見た目は非常に似ていますが、それぞれ異なる文脈で使用します。この 2 つの用途とは、スプレッド演算子とレスト演算子です。

## JavaScript でスプレッド演算子を使う方法

スプレッド演算子は、その名の通り、指定されたレシーバ（受け手）の中にイテラブル（繰り返し可能な）要素を展開するために使用します。

この受け手はオブジェクトや配列など様々なものになり得ます。そして、イテラブルな要素も文字列や配列、オブジェクトなど色々なものを扱うことができます。

### スプレッド演算子の構文:

```javascript
const newArray = ['firstItem', ...oldArray];
```

次に、スプレッド演算子を活用できるさまざまなケースを見てみましょう。

### スプレッド演算子で配列をコピーする方法

特定の配列の要素を新しい配列にコピーし、元の配列には影響を与えないようにしたいとき、スプレッド演算子が役立ちます。

例を示します：

```javascript
let studentNames = ["Daniel", "Jane", "Joe"];

let names = [...studentNames];

console.log(names); // ["Daniel","Jane","Joe"]
```

これは、ループ処理を記述する手間を省いてくれます：

```javascript
let studentNames = ["Daniel", "Jane", "Joe"];

let names = [];

studentNames.map((name) => {
    names.push(name);
});

console.log(names); // ["Daniel","Jane","Joe"]
```

### スプレッド演算子でオブジェクトをコピーする方法

配列と同様に、オブジェクトもスプレッド演算子の受け手として利用できます。

```javascript
let user = { name: "John Doe", age: 10 };

let copiedUser = { ...user };
console.log(copiedUser); // { name: "John Doe", age: 10 }
```

以前の方法では、`Object.assign()` メソッドを使って以下のように行っていました：

```javascript
let user = { name: "John Doe", age: 10 };

let copiedUser = Object.assign({}, user);
console.log(copiedUser); // { name: "John Doe", age: 10 }
```

### スプレッド演算子で配列を結合またはマージする方法

複数の配列を新しい配列に結合したい場合、スプレッド演算子を使うと簡単です。これにより、配列から要素をコピーできます：

```javascript
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];

let allNames = [...maleNames, ...femaleNames];

console.log(allNames); // ["Daniel","Peter","Joe","Sandra","Lucy","Jane"]
```

これは、多くの配列に対しても同様に適用できますし、個々の要素を配列内に追加することもできます。

```javascript
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];
let otherNames = ["Bill", "Jill"];

let moreNames = [...otherNames, ...femaleNames, ...maleNames];
let names = [...moreNames, "Ben", "Fred"];
```

`concat()` メソッドのような複雑な構文を使わずに済みます：

```javascript
let maleNames = ["Daniel", "Peter", "Joe"];
let femaleNames = ["Sandra", "Lucy", "Jane"];
let otherNames = ["Bill", "Jill"];

let allNames = femaleNames.concat(maleNames);
let moreNames = femaleNames.concat(maleNames, otherNames);
```

### スプレッド演算子でオブジェクトを結合またはマージする方法

スプレッド演算子を使って配列を結合したように、オブジェクトも同様に結合できます：

```javascript
let userName = { name: "John Doe" };
let userSex = { sex: "Male" };

let user = { ...userName, ...userSex };

console.log(user); // { name: "John Doe", sex: "Male" }
```

**注意：** 一つのキーが複数のプロパティを持つ場合、最後のプロパティが最初のインスタンスを上書きします：

```javascript
let userName = { name: "John Doe" };
let userSex = { sex: "Female", name: "Jane Doe" };

let user = { ...userName, ...userSex }; // { name: "Jane Doe", sex: "Female" }
```

### Set メソッドでユニークな要素を取得する方法

スプレッド演算子が有用な場面として、一つの配列からユニークな要素を他の配列に取得したい場合が挙げられます。

例えば、果物の配列に重複があり、新しい配列にこれらの果物を重複なくコピーしたい場合、`set()` メソッドとスプレッド演算子を使い、以下のように記述できます：

```javascript
let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];

let uniqueFruits = [...new Set(fruits)];
console.log(uniqueFruits); // ["Mango","Apple","Banana"]
```

### スプレッド演算子を使って配列要素を関数に渡す方法

数値を取り込む関数があるとき、それらの数値を配列の要素として保持している場合：

```javascript
let scores = [12, 33, 6];
```

このように配列を渡すことが可能です。

## スプレッド演算子を使用して要素を関数呼び出しの引数として渡す方法

JavaScript でのスプレッド演算子を使うと、配列の要素を関数の引数として展開して渡すことができます。

```javascript
let scores = [12, 33, 6];

const addAll = (a, b, c) => {
    console.log(a + b + c);
};

addAll(...scores); // 51
```

以前の方法では、`apply()` メソッドを使って以下のように行っていました。

```javascript
let scores = [12, 33, 6];

const addAll = (a, b, c) => {
    console.log(a + b + c);
};

addAll.apply(null, scores); // 51
```

### スプレッド演算子を使って文字列を文字に分割する方法

例えば、文字列があるとします。この文字列をスプレッド演算子を利用して、個々の文字に分割できます。

```javascript
let myString = "freeCodeCamp";

const splitString = [...myString];

console.log(splitString); // ["f","r","e","e","C","o","d","e","C","a","m","p"]
```

これは、`split()` メソッドに似ています。

```javascript
let myString = "freeCodeCamp";

const splitString = myString.split('');

console.log(splitString); // ["f","r","e","e","C","o","d","e","C","a","m","p"]
```

## JavaScript におけるレスト演算子の使い方

一方で、レスト演算子を使うと、任意の数の引数を配列にまとめ、その配列を自由に操作することができます。これは無限の数の引数を配列として表現します。

### レスト演算子の構文

```javascript
const func = (first, ...rest) => {};
```

これを示す良い例としては、数のリストがあり、最初の数を乗数として使い、残りの数をその乗数で乗じた値を配列にまとめたい場合です。

```javascript
const multiplyArgs = (multiplier, ...otherArgs) => {
    return otherArgs.map((number) => {
        return number * multiplier;
    });
};

let multipiedArray = multiplyArgs(6, 5, 7, 9);

console.log(multipiedArray); // [30,42,54]
```

レスト演算子とその値の良い例を示しましょう。

```javascript
const multiplyArgs = (multiplier, ...otherArgs) => {
    console.log(multiplier); // 6
    console.log(otherArgs); // [5,7,9]
};

multiplyArgs(6, 5, 7, 9);
```

**注意:** レストパラメータは最後の正式なパラメータである必要があります。

```javascript
const multiplyArgs = (multiplier, ...otherArgs, lastNumber) => {
    console.log(lastNumber); // Uncaught SyntaxError: Rest parameter must be last formal parameter
};

multiplyArgs(6, 5, 7, 9);
```

## JavaScript におけるスプレッド演算子とレスト演算子の違い

ここまでで、両方の方法が非常に似ているため混乱するかもしれません。しかし、JavaScript チームは、その名前で各 `...` の動作を定義してうまくやっています。

スプレッド演算子を使うと、配列の値やイテラブルを配列やオブジェクトに展開できます。

一方で、レスト演算子を使用することで、関数に渡された残りの要素を配列としてまとめることができます。

```javascript
const myFunction = (name1, ...rest) => { // ここでレスト演算子を使用
    console.log(name1);
    console.log(rest);
};

let names = ["John", "Jane", "John", "Joe", "Joel"];
myFunction(...names); // ここでスプレッド演算子を使用
```

## まとめ

この記事では、JavaScript で三点リーダー演算子が何を意味するのかを学びました。また、この三点リーダー演算子を使用できるさまざまなインスタンスと、その二つの異なる意味/使用例を見てきました。

コーディングを楽しんでください！

私のサイトで [他の 200以上の記事][1] にアクセスできます。また、検索フィールドを使用して、特定の記事が書かれているか確認することもできます。

[1]: https://joelolawanle.com/contents

