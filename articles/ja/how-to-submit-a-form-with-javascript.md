---
title: JavaScript でフォームを送信する方法 – JS 送信ボタンの例
date: 2024-08-21T09:11:22.921Z
author: Joel Olawanle
authorURL: https://www.freecodecamp.org/news/author/joel-olawanle/
originalURL: https://www.freecodecamp.org/news/how-to-submit-a-form-with-javascript/
posteditor: ""
proofreader: ""
---

Web アプリケーションやサイトを構築する際、ユーザーにフォームを使って情報を提供してもらうことがよくあります。

<!-- more -->

でも、そのフォームからデータを取得するにはどうすればいいのかと疑問に思うかもしれませんね。その答えは、JavaScript を使うことです。

この記事では、JavaScript を使ってフォームを作成し、フォームが送信されたときにデータを取得する方法を学びます。

この記事では、データベースにデータを入力する方法についてはカバーしません。あくまでフォームの送信方法に焦点を当てます。ただし、このデータが手に入れば、データベースに送信したり、情報を操作したりすることができることを知っておいてください。

JavaScript でフォームを送信するためには、まずフォームを作成し、入力フィールドに特定の属性を追加する必要があります。これらの属性を使って、ユーザーが送信したときにデータを取得し、バリデーションを行う関数を呼び出します。

## HTML フォームの作成方法

まず、ユーザー名とパスワードの 2 つのフィールドを持つ基本的な HTML フォームを作成しましょう。また、フォームを送信して JavaScript のアクションをトリガーするためのボタンも追加します。

```html
<form action="">
  <h1>Login</h1>
  <input type="text" class="form-control" placeholder="Enter your Username...">
  <input type="password" class="form-control" placeholder="Enter your Password...">
  <button type="submit">Submit</button>
</form>
```

このフォームのデータを JavaScript で取得するには、フォームの入力フィールドとフォーム自体に特定の属性を付加する必要があります。これらの属性は `id`、`class`、さらには `name` タグでも構いません。これにより、JavaScript で document メソッドを使ってデータを取得することができます。

例えば、入力フィールドに `id` 属性を使用する場合、document メソッド `getElementByID('idName')` を使って入力フィールドのデータやその他の値にアクセスすることができます。

```html
<!-- HTML -->
<input type="text" id="username" class="form-control" placeholder="Enter your Username...">

<!-- JS -->
<script>
  let myUsername = document.getElementById('username');
  console.log(myUsername);
</script>
```

`class` 属性を使用する場合は、`getElementsByClassName(className)` を使います。これは指定した `className` を持つすべての要素の配列を返します。要素が 1 つだけなら、インデックス番号 `0` でそのデータにアクセスできます。

```html
<!-- HTML -->
<input type="text" class="username" class="form-control" placeholder="Enter your Username...">

<!-- JS -->
<script>
  let myUsername = document.getElementsByClassName('username');
  console.log(myUsername[0]);
</script>
```

`name` 属性を使用する場合は、`getElementsByName(name)` を使います。これはクラス属性と同様に配列を返し、ループさせたり、インデックス番号でアクセスしたりできます。

```html
<!-- HTML -->
<input type="text" name="username" class="form-control" placeholder="Enter your Username...">

<!-- JS -->
<script>
  let myUsername = document.getElementsByName('username');
  console.log(myUsername[0]);
</script>
```

> 注意: これは入力値そのものではなく、入力要素自体を返します。

## JavaScript でフォームを送信する方法

まず最初に、フォームのトラッキングに使用する属性 (`id`、`class`、または `name`) をフォームに付加します。この記事では、フォームと入力フィールドに `id` を使用します。

```html
<form action="" id="loginForm">
  <h1>Login</h1>
  <input type="text" id="username" class="form-control" placeholder="Enter your Username...">
  <input type="password" id="password" class="form-control" placeholder="Enter your Password...">
  <button type="submit">Submit</button>
</form>
```

ここまでくれば、JavaScript でフォーム送信の処理を行うことができます。最初に、指定した属性 (この場合は `id`) でフォームを取得し、変数に格納します。

```js
let loginForm = document.getElementById("loginForm");
```

次に、`addEventListener` をフォーム変数に付け、submit イベントをリッスンします。このイベントリスナーにより、フォームが送信されるとコールバック関数がトリガーされます。

```js
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // 送信処理
});
```

ここで、フォームデータを取得し、任意の操作を行うことができます。この記事では、まず入力が空でないことを確認するバリデーションを行ってから操作を実行します。

```js
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    // エラー処理
  } else {
    // フォーム入力で操作を実行
  }
});
```

これが全体の JavaScript コードです。

```js
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username");
  let password = document.getElementById("password");

  // 省略...
});
```

```javascript
username.value = "";
password.value = "";
  }
});
```

[Olawanle Joel ([@olawanlejoel][2]) が CodePen][3] に投稿した [Form Submission JS][1] をご覧ください。

## 結論

この記事では、JavaScript を使用してフォームを送信する方法と、さまざまな DOM メソッドと連携する方法について学びました。

他にもこの操作を行う方法はありますが、これは JavaScript でフォーム送信を処理するための直接的な方法です。

私のウェブサイトを [訪れていただくと、150 以上の記事][4] にアクセスできます。検索フィールドを使って、特定の記事が書かれているかどうか確認することもできます。

[1]: https://codepen.io/olawanlejoel/pen/xxzvdqQ
[2]: https://codepen.io/olawanlejoel
[3]: https://codepen.io
[4]: https://joelolawanle.com/contents
```

