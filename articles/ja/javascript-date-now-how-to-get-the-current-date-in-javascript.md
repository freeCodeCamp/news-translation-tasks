---
title: JavaScript で現在の日付を取得する方法
date: 2024-08-21T09:05:27.390Z
author: Vijit Ail
authorURL: https://www.freecodecamp.org/news/author/vijit/
originalURL: https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/
posteditor: ""
proofreader: ""
---

多くのアプリケーションでは、リソースの作成日やアクティビティのタイムスタンプなど、何らかの日付コンポーネントが必要になります。

<!-- more -->

日付やタイムスタンプのフォーマットを扱うのは疲れる作業です。このガイドでは、JavaScript を使って現在の日付を様々なフォーマットで取得する方法をご紹介します。

## JavaScript の Date オブジェクト

JavaScript には `Date` オブジェクトが組み込まれており、日付や時間を格納し、それらを操作するメソッドを提供しています。

新しい `Date` オブジェクトのインスタンスを作成するには、`new` キーワードを使用します：

```js
const date = new Date();
```

`Date` オブジェクトは、1970 年 1 月 1 日からの経過ミリ秒数を表す `Number` を含んでいます。

指定した日付のオブジェクトを作成するには、`Date` コンストラクタに日付文字列を渡します：

```js
const date = new Date('Jul 12 2011');
```

現在の年を取得するには、`Date` オブジェクトのインスタンスメソッド `getFullYear()` を使用します。`getFullYear()` メソッドは、指定された日付の年を返します：

```js
const currentYear = date.getFullYear();
console.log(currentYear); //2020
```

同様に、現在の日付や月を取得するメソッドもあります：

```js
const today = date.getDate();
const currentMonth = date.getMonth() + 1; 
```

`getDate()` メソッドは月の日付（1-31）を返します。

`getMonth()` メソッドは指定された日付の月を返しますが、このメソッドは 0 インデックス（0-11）で値を返すため、1 月は 0、12 月は 11 として扱われます。そのため、月の値を正規化するために 1 を加える必要があります。

## 現在の日時を取得

`now()` は `Date` オブジェクトの静的メソッドで、エポック（1970 年 1 月 1 日 00:00:00 UTC）からの経過ミリ秒数を返します。このミリ秒数を `Date` コンストラクタに渡すことで、新しい `Date` オブジェクトを生成できます：

```js
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
```

## 日付のフォーマット

`Date` オブジェクトのメソッドを使用することで、日付を複数のフォーマット（GMT、ISO など）に整形できます。

`toDateString()` メソッドは、日付を人間に読みやすいフォーマットで返します：

```js
today.toDateString(); // "Sun Jun 14 2020"
```

`toISOString()` メソッドは ISO 8601 拡張フォーマットに従った日付を返します：

```js
today.toISOString(); // "2020-06-13T18:30:00.000Z"
```

`toUTCString()` メソッドは UTC タイムゾーンフォーマットで日付を返します：

```js
today.toUTCString(); // "Sat, 13 Jun 2020 18:30:00 GMT"
```

`toLocaleDateString()` メソッドはローカリティーに依存したフォーマットで日付を返します：

```js
today.toLocaleDateString(); // "6/14/2020"
```

`Date` メソッドの完全なリファレンスは [MDN ドキュメント][1] を参照してください。

## カスタム日付フォーマッター関数

上記のセクションで述べたフォーマットに加え、アプリケーションによっては `yy/dd/mm` や `yyyy-dd-mm` など、異なるフォーマットが必要な場合もあります。

この問題に対処するために、再利用可能な関数を作成して、複数のプロジェクトで使用できるようにするのが良いでしょう。

このセクションでは、関数の引数で指定したフォーマットで日付を返すユーティリティ関数を作成します：

```js
const today = new Date();

function formatDate(date, format) {
	//
}

formatDate(today, 'mm/dd/yy');
```

引数に渡されたフォーマット文字列から "mm"、"dd"、"yy" をそれぞれの月、日、年の値に置き換える必要があります。

そのためには、以下のように `replace()` メソッドを使用できます：

```js
format.replace('mm', date.getMonth() + 1);
```

しかし、この方法だとメソッドチェーンが多くなり、関数をより柔軟にしようとすると保守が難しくなります：

```js
format.replace('mm', date.getMonth() + 1)
    .replace('yy', date.getFullYear())
	.replace('dd', date.getDate());
```

メソッドをチェーンする代わりに、`replace()` メソッドと正規表現を組み合わせることができます。

まず、部分文字列とそれに対応する値のキーバリューペアを表すオブジェクトを作成します：

```js
const formatMap = {
	mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear()
};
```

次に、正規表現を使用して文字列をマッチおよび置換します：

```js
formattedDate = format.replace(/mm|dd|yy|yyy/gi, matched => map[matched]);
```

完全な関数は以下のようになります：

```js
function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}
```

さらに、この関数にタイムスタンプのフォーマット機能を追加することもできます。

## 結論

これで、JavaScript の `Date` オブジェクトについての理解が深まったと思います。アプリケーションで日付を扱う際には、`datesj` や `moment` といったサードパーティライブラリを使用することもできます。

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


```markdown
# JavaScript の Date オブジェクトを使った日付操作入門

JavaScript の `Date` オブジェクトは、日付や時刻を操作するための強力なツールです。この記事では、基本的な使い方から少し進んだ応用テクニックまでを解説します。

## Date オブジェクトの基本

新しい `Date` オブジェクトを作成するには、以下のようにします。

```javascript
let now = new Date();
console.log(now);
```

上記のコードは、現在の日付と時刻を持つ `Date` オブジェクトを作成します。

## 特定の日付を設定する

特定の日付を設定するには、以下のようにコンストラクタに引数を渡します。

```javascript
let specificDate = new Date(2023, 9, 3); // 月は 0 始まりで 10 月
console.log(specificDate);
```

ここでは 2023 年 10 月 3 日を指定しています。

## タイムスタンプから Date オブジェクトを作成する

UNIX タイムスタンプは、1970 年 1 月 1 日からのミリ秒を表します。

```javascript
let timestamp = 1609459200000; // 例: 2021 年 1 月 1 日のタイムスタンプ
let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);
```

## 日付の操作

日付を操作するいくつかのメソッドを見てみましょう。

### 現在の年、月、日を取得する

```javascript
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth(); // 0 始まりの月
let date = now.getDate(); // 月の日付部分
console.log(`${year}-${month + 1}-${date}`);
```

### 日付を設定する

```javascript
let newDate = new Date();
newDate.setFullYear(2025);
newDate.setMonth(11); // 12 月
newDate.setDate(25);
console.log(newDate);
```

## まとめ

JavaScript の `Date` オブジェクトは、日付と時刻の操作に関する多くの便利なメソッドを提供しています。基本的な使い方をマスターすると、アプリケーションでの時間管理や表示の強力な助けとなります。

公式ドキュメントについては、[MDN のページ][1]をご覧ください。
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
```

