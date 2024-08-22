---
title: 目次
date: 2024-08-22T14:00:01.484Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/
posteditor: ""
proofreader: ""
---

この記事では、CSS を使ってボタンをスタイリングする方法について解説します。

<!-- more -->

今回の主な目的は、異なる CSS 規則やスタイルがどのように適用され、使用されるかを紹介することです。デザインのインスピレーションやスタイリングのアイデアについてはあまり触れません。

それよりも、スタイルそのものがどのように機能するのか、どのプロパティがよく使われるのか、そしてそれらがどのように組み合わされるのかについての概要を紹介します。

まず HTML でボタンを作成する方法を見ていきます。次に、ボタンのデフォルトスタイルを上書きする方法を学びます。最後に、ボタンの3つの異なる状態に対するスタイリング方法も紹介します。

### こちらが CSS ボタンスタイルのインタラクティブなスクリーンです

<iframe src="https://scrimba.com/scrim/co3524355bcd2543752fa537c?pl=pBe55fP&amp;embed=freecodecamp,mini-header" width="100%" height="420" title="Embedded content" loading="lazy"></iframe>

# 目次

1.  [HTML にボタンを作成する][1]
2.  [ボタンのデフォルトスタイルを変更する][2]
    1.  [背景色を変更する][3]
    2.  [文字色を変更する][4]
    3.  [ボーダースタイルを変更する][5]
    4.  [サイズを変更する][6]
3.  [ボタンの状態をスタイリングする][7]
    1.  [ホバー状態をスタイリングする][8]
    2.  [フォーカス状態をスタイリングする][9]
    3.  [アクティブ状態をスタイリングする][10]
4.  [まとめ][11]

では、始めましょう！

## HTML にボタンを作成する方法

ボタンを作成するには、`<button>` 要素を使用します。

これは、`<div>` 要素を使用して作成される汎用コンテナと比べて、よりアクセシブルでセマンティックなオプションです。

以下の `index.html` ファイルでは、ウェブページの基本構造を作成し、単一のボタンを追加しました：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>CSS Button Style</title>
</head>
<body>
    <button type="button" class="button">Click me!</button>
</body>
</html>
```

`<button type="button" class="button">Click me!</button>` の行を分解してみましょう：

-   まず、開く `<button>` タグと閉じる `</button>` タグからなるボタン要素を追加します。
-   開く `<button>` タグの `type="button"` 属性は、クリック可能なボタンを明示的に作成します。このボタンはフォームを送信するために使用されないため、セマンティックな理由から追加しておくと、不要な動作を引き起こさずにコードを明確にすることができます。
-   `class="button"` 属性は、別の CSS ファイルでボタンをスタイリングするために使用します。この値 `button` は、他の名前に変更することも可能です。例えば、`class="btn"` にすることもできます。
-   `Click me!` のテキストは、ボタン内に表示される文字です。

ボタンに適用されるスタイルは、別の `style.css` ファイル内に追加します。

HTML コンテンツにスタイルを適用するためには、2 つのファイルをリンクする必要があります。これは `index.html` で使用されている `<link rel="stylesheet" href="style.css">` タグを使用して行います。

`style.css` ファイルには、ボタンをブラウザウィンドウの中央に配置するだけのスタイルを追加しました。

`class="button"` は `.button` セレクタで使用されます。これは、ボタンに直接スタイルを適用する方法です。

```
* {
    box-sizing: border-box;
} 

body {
    display:flex;
    justify-content: center;
    align-items: center;
    margin:50px auto;
}

.button {
    position: absolute;
    top:50%
}
```

上記のコードは以下のようになります：

![Screenshot-2022-02-06-at-10.29.02-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.29.02-PM.png)

ボタンのデフォルトスタイルは、使用しているブラウザによって異なります。

これは Google Chrome ブラウザでのネイティブなボタンスタイルの例です。

## ボタンのデフォルトスタイルを変更する方法

### ボタンの背景色を変更する方法

ボタンの背景色を変更するには、CSS の `background-color` プロパティを使用して、お好みの色を指定します。

`.button` セレクタでは、`background-color:#0a0a23;` を使用してボタンの背景色を変更します。

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
}
```

![Screenshot-2022-02-06-at-10.28.30-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.28.30-PM.png)

### ボタンの文字色を変更する方法

文字のデフォルト色は黒であるため、濃い背景色を追加すると文字が見えなくなります。

もう一つ確認するべきことは、ボタンの背景色と文字色の間に十分なコントラストがあるかどうかです。これにより、文字が読みやすく目に優しくなります。

次に、 `color` プロパティを使用して文字色を変更します：

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
}
```

![Screenshot-2022-02-06-at-10.28.03-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.28.03-PM.png)

ボタンのエッジ周りのグレーに気付きましたか？これがデフォルトのボタンの境界色です。

これを修正する方法の一つは、`border-color` プロパティを使用することです。値を `background-color` と同じに設定することで、ボタンのボーダーが背景色と同じになるようにします。

もう一つの方法は、`border:none;` を使ってボーダーを完全に削除することです。

```
.button {
  position: absolute;
  top:50%;
  background-color:#0a0a23;
  color: #fff;
  border:none;
}
```

![Screenshot-2022-02-06-at-10.27.33-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.27.33-PM.png)

次に、`border-radius` プロパティを使用してボタンのエッジを丸くすることもできます。

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border:none;
    border-radius:10px;
  }
```

![Screenshot-2022-02-06-at-10.26.57-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.26.57-PM.png)

さらに、`box-shadow` プロパティを使用してボタンの周りに淡い影の効果を追加することもできます。

```
 position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border:none;
    border-radius:10px;
    box-shadow: 0px 0px 2px 2px rgb(0,0,0);
```

![Screenshot-2022-02-06-at-10.25.55-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.25.55-PM.png)

### ボタンのサイズを変更する方法

ボタンの境界内にもっとスペースを作りたい場合は、`padding` を増やします。

以下のコードでは、上下左右のパディングをそれぞれ 15px に設定しています。また、`min-height` と `min-width` プロパティで最低高さと幅も設定しています。これにより、様々なデバイスに対応できる大きさになります。

```
.button {
    position: absolute;
    top:50%;
    background-color:#0a0a23;
    color: #fff;
    border:none; 
    border-radius:10px; 
    padding:15px;
    min-height:30px; 
    min-width:120px;
  }
```

![Screenshot-2022-02-06-at-10.42.58-PM](https://www.freecodecamp.org/news/content/images/2022/02/Screenshot-2022-02-06-at-10.42.58-PM.png)

## ボタンの状態をスタイルする方法

ボタンには 3 つの異なる状態があります。

- `:hover`
- `:focus`
- `:active`

これら 3 つの状態は違うスタイルを持ち、同じスタイルを共有しない方が良いでしょう。

次のセクションでは、各状態が何を意味し、何によってトリガーされるのかについて簡単に説明します。また、各状態に対するスタイルの一例も紹介します。

### ボタン状態をスタイルするためのインタラクティブなスクリム：

<iframe src="https://scrimba.com/scrim/coa4a454f9e83e63fbe1a80ed?pl=pBe55fP&amp;embed=freecodecamp,mini-header" width="100%" height="420" title="Embedded content" loading="lazy"></iframe>

### `:hover` 状態をスタイルする方法

`:hover` 状態は、ユーザーがマウスやトラックパッドをボタン上に乗せた際に発生します。選択やクリックは伴いません。

ボタンにホバーした際のスタイルを変更するには、`hover` CSS 擬似クラスセレクタを使用します。

`:hover` で一般的な変更は、ボタンの背景色の変更です。

変更をよりスムーズにするために、`hover` と `transition` プロパティを組み合わせます。

`transition` プロパティは、状態の無い状態から `:hover` 状態への移行をより滑らかにする手助けをします。

背景色の変更が `transition` プロパティなしよりも少し遅くなるため、ユーザーにとってビジュアル的な違和感が減少します。

```
.button:hover {
      background-color:#002ead;
      transition:0.7s;
  }
```

上記の例では、ボタンにホバーした際の背景色を明るい色にするために Hex カラーコード値を使用しています。

`transition` プロパティの助けを借りて、状態無しから `:hover` 状態への移行時に 0.7 秒の遅延を発生させました。これにより、元の `#0a0a23` から `#002ead` への背景色の変更がよりゆっくりと行われます。

![hover](https://www.freecodecamp.org/news/content/images/2022/02/hover-2.gif)

`:hover` 擬似クラスはモバイルデバイスの画面やモバイルアプリでは機能しないことに注意してください。ホバー効果はデスクトップ Web アプリケーション用に選択し、タッチスクリーン用には使用しないようにしましょう。

### `:focus` 状態をスタイルする方法

`:focus` 状態はキーボードユーザーに対して発生し、特に `Tab` キーを押してボタンにフォーカスを合わせた時に有効になります。

もしこれを試しているなら、`Tab` キーを押した後にボタンにフォーカスを当てると次のように見えます。

![focus-5](https://www.freecodecamp.org/news/content/images/2022/02/focus-5.gif)

フォーカスが当たった際のボタン周囲の薄い青色のアウトラインに気付きましたか？

ブラウザにはアクセシビリティのためのキーボードナビゲーションのデフォルトスタイルがあります。`outline` を完全に削除することはお勧めしません。

しかし、カスタムスタイルを作成して目立つようにすることはできます。

まず、アウトラインの色を `transparent` に設定します。

次に、`outline-style` を `solid` に設定します。最後に、`box-shadow` プロパティを使用して、フォーカスされた時に好みの色を追加できます。

![focusend](https://www.freecodecamp.org/news/content/images/2022/02/focusend.gif)

また、エフェクトに応じて `transition` プロパティとこれらのスタイルを組み合わせることもできます:

```
.button:focus {
    outline-color: transparent;
    outline-style: solid;
    box-shadow: 0 0 0 4px #5a01a7;
    transition: 0.7s;
}
```

![focusend1](https://www.freecodecamp.org/news/content/images/2022/02/focusend1.gif)

### `:active` 状態のスタイル設定方法

`:active` 状態は、ユーザーがマウスクリックやノートパソコンのトラックパッドを押し下げるときに _活性化_ されます。

次に、 `:hover` と `:focus` 状態のスタイルを適用し続けた状態でボタンをクリックするとどうなるか見てみましょう:

![active-1](https://www.freecodecamp.org/news/content/images/2022/02/active-1.gif)

`:hover` の状態スタイルは、ボタンにホバーする際に適用されます。

また、ボタンがクリックされると同時に `:focus` 状態も取得されるため、 `:focus` 状態のスタイルも適用されます。

ただし、これらは _同じものではありません_。 

`:focus` 状態は要素がフォーカスされているとき、 `:active` 状態はユーザーが要素を押し下げてクリックしているときです。

ユーザーがボタンをクリックしたときのスタイルを変更するには、 `:active` CSS 疑似セレクタにスタイルを適用します。

この場合、ユーザーがボタンをクリックしたときの背景色を変更しました。

```
.button:active {
    background-color: #ffbf00;
}
```

![activefinal](https://www.freecodecamp.org/news/content/images/2022/02/activefinal.gif)

## 結論

これで完了です！これで CSS を使ってボタンをスタイリングする基本を学びました。

ボタンの背景色やテキスト色を変更する方法だけでなく、さまざまな状態に対するスタイルの付け方についても説明しました。

ウェブデザインについてもっと学びたい方は、freeCodeCamp の [Responsive Web Design Certification][12] をチェックしてください。インタラクティブなレッスンで、15 の練習プロジェクトと 5 つの認定プロジェクトを通じて HTML と CSS を学ぶことができます。

なお、上記の認定はまだベータ版です。最新の安定版が欲しい場合は、[こちらをチェック][13]してください。

読んでいただきありがとうございました。そして、コーディングを楽しんでください！

[1]: #html
[2]: #default
[3]: #background
[4]: #text
[5]: #border
[6]: #size
[7]: #states
[8]: #hover
[9]: #focus
[10]: #active
[11]: #conclusio
[12]: https://www.freecodecamp.org/learn/2022/responsive-web-design/
[13]: https://www.freecodecamp.org/learn/responsive-web-design

