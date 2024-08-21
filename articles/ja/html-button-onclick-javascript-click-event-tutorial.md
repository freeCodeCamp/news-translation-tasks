---
title: HTML のボタン onclick － JavaScript のクリックイベントチュートリアル
date: 2024-08-21T09:06:55.995Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/html-button-onclick-javascript-click-event-tutorial/
posteditor: ""
proofreader: ""
---

ウェブサイトを訪れるたびに、おそらくリンクやボタンのどちらかをクリックすることが多いでしょう。

<!-- more -->

リンクはページの特定の部分や別のページ、または完全に別のウェブサイトに移動させます。それに対して、ボタンは通常 JavaScript イベントによって操作され、特定の機能をトリガーすることができます。

このチュートリアルでは、JavaScript でクリックイベントを実行する 2 つの異なる方法を探ります。

まず、HTML ページから直接行う従来の `onclick` スタイルについて見ていきます。その後、よりモダンな "click" `eventListner` がどのように機能するかを確認し、HTML と JavaScript を分離する方法についても学びます。

### インタラクティブな HTML ボタン onclick のデモ

<iframe src="https://scrimba.com/scrim/cob064720ad708e33a795aefa?pl=pz9wDSk&amp;embed=freecodecamp,mini-header" width="100%" height="420" title="Embedded content" loading="lazy"></iframe>

## JavaScript で `onclick` イベントを使う方法

`onclick` イベントはボタンがクリックされたときに特定の機能を実行します。例えば、ユーザーがフォームを送信するとき、ウェブページの特定のコンテンツを変更するときなどです。

ボタンの開始タグ内に実行したい JavaScript 関数を配置します。

### 基本的な `onclick` 構文

```
<element onclick="functionToExecute()">Click</element>
```

例えば

```
<button onclick="functionToExecute()">Click</button>
```

注意すべき点は、`onclick` 属性が純粋に JavaScript であることです。それが取る値（実行したい関数）は、その通りであり、開始タグ内で直接呼び出されます。

JavaScript では、関数を呼び出すときにその名前を記述し、関数識別子（名前）の後に括弧を付けます。

## `onclick` イベントの例

`onclick` イベントを実際のシナリオで使うために、基本的な HTML と少しのスタイリングを準備しました。

```
<div>
  <p class="name">freeCodeCamp</p>
  <button>Change to Blue</button>
</div>
```

そして、例のコードと共に見栄えを良くするための CSS は以下の通りです：

```
 body {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100vh;
}
p {
   font-size: 2rem;
}

button {
    padding: 7px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button.blue {
    background-color: #3498db;
}

button.green {
    background-color: #2ecc71;
}

button.orange {
   background-color: orangered;
}
```

ウェブページに表示すると次のようになります： ![changeColor](https://www.freecodecamp.org/news/content/images/2021/08/changeColor.png)

私たちの目的は、ボタンをクリックするとテキストの色を青に変更することです。そこで、ボタンに `onclick` 属性を追加し、色を変更するための JavaScript 関数を作成する必要があります。

そのため、HTML を少し変更します：

```
<div>
  <p class="name">freeCodeCamp</p>
  <button onclick="changeColor()">Change to Blue</button>
</div>
```

実行したい関数は `changeColor()` です。これを JavaScript ファイルや HTML ファイル内の `<script>` タグ内に記述します。

スクリプトを JavaScript ファイルに記述したい場合は、以下のように HTML にリンクを追加する必要があります：

```
<script src="path-to-javascript-file"></script>
```

HTML ファイル内にスクリプトを記述する場合は、スクリプトタグ内に記述します：

```
<script>
  // あなたのスクリプト
</script>
```

では、`changeColor()` 関数を作成しましょう。

まず、操作したい要素、つまり `<p>` タグ内の freeCodeCamp テキストを選択する必要があります。

JavaScript では、DOM の `getElementById()`、`getElementsByClassName()`、または `querySelector()` メソッドを使用して行います。そして、その値を変数に格納します。

このチュートリアルでは、よりモダンで速い `querySelector()` を使用し、変数を `let` や `var` ではなく `const` で宣言します。これは変数が読み取り専用になるため、より安全だからです。

```
const name = document.querySelector(".name");
```

テキストが選択されたので、関数を書きましょう。JavaScript では、基本的な関数の構文は次のようになります：

```
function functionName () {
    // 実行する内容
}
```

そこで、関数を次のように書きます：

```
function changeColor() {
    name.style.color = "blue";
}
```

何が起こっているのでしょうか？

HTML では `changeColor()` が実行する関数であると記述されています。そのため、関数識別子（名前）は `changeColor` に設定されています。HTML の記述と名前が一致しない場合、動作しません。

DOM（Document Object Model、すなわち HTML 全体）では、スタイルに関連するものを変更する場合、「style」を記述し、その後にドット（.）を付けます。次に、変更したい内容（色、背景色、フォントサイズなど）を記述します。

したがって、関数内で宣言した名前変数を使用して freeCodeCamp テキストを取得し、その色を青に変更します。

![changeColor](https://www.freecodecamp.org/news/content/images/2021/08/changeColor.gif)

コードが動いています！

さらに一歩進めて、テキストの色をもっと多彩に変更してみましょう。

```
<div>
      <p class="name">freeCodeCamp</p>
      <button onclick="changeColor('blue')" class="blue">Blue</button>
      <button onclick="changeColor('green')" class="green">Green</button>
      <button onclick="changeColor('orangered')" class="orange">Orange</button>
</div>
```

ここでは、テキストの色を青、緑、オレンジレッドに変更することを目指します。

今回は、HTML 内の `onclick` 関数がテキストの色を変更したい色の値を受け取ります。これらは JavaScript で「パラメータ」と呼ばれます。作成する関数も同様にパラメータを取りますが、ここでは「color」と名付けます。

Web ページはこのように変わりました。

![changeColors](https://www.freecodecamp.org/news/content/images/2021/08/changeColors.png)

それでは、freeCodeCamp のテキストを選択し、その色を青、緑、オレンジレッドに変更する関数を書きましょう。

```
const name = document.querySelector(".name");

function changeColor(color) {
   name.style.color = color;
}
```

この関数内のコードブロックは、名前変数（freeCodeCamp テキストを格納した場所）を取り、それを HTML ボタン内の `changeColor()` 関数に渡された色に設定します。

![changeColors](https://www.freecodecamp.org/news/content/images/2021/08/changeColors.gif)

## JavaScript で `eventListener` を使う方法

JavaScript には同じことを行うための複数の方法があります。JavaScript 自体が進化するにつれて、HTML、CSS、JavaScript コードを分離し、ベストプラクティスに従う必要が出てきました。

イベントリスナーを使用すれば、JavaScript を HTML から分離できます。`onclick` でこれを行うこともできますが、今回は別のアプローチを見てみましょう。

### イベントリスナーに関するインタラクティブな例はこちらです。

<iframe src="https://scrimba.com/scrim/cof804618b5a4eff5ca0b3dff?pl=pz9wDSk&amp;embed=freecodecamp,mini-header" width="100%" height="420" title="Embedded content" loading="lazy"></iframe>

### 基本的な `eventListener` の構文

```
 element.addEventListener("type-of-event", functionToExecute)
```

では、クリックイベントリスナーを使って freeCodeCamp のテキストを青に変更してみましょう。

これが新しい HTML です。

```
 <div>
      <p class="name">freeCodeCamp</p>
      <button>Change Color</button>
 </div>
```

表示はこのようになります。

![colorChange](https://www.freecodecamp.org/news/content/images/2021/08/colorChange.png)

今回はスクリプト内で、ボタンも選択する必要があります（freeCodeCamp テキストだけでなく）。なぜなら、ボタンの開始タグには JavaScript が含まれていないからです。これはクールですね。

したがって、スクリプトは次のようになります。

```
const name = document.querySelector(".name");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
   name.style.color = "blue";
});
```

関数をまったくイベントリスナーから分離しても、機能は同じままです。

```
btn.addEventListener("click", changeColor);

function changeColor() {
   name.style.color = "blue";
}
```

![changeColorWithEvents](https://www.freecodecamp.org/news/content/images/2021/08/changeColorWithEvents.gif)

## JavaScript で「Show More」ボタンと「Show Less」ボタンを作る方法

プロジェクトを作成することは学習の最良の方法の一つです。`onclick` と「click」イベントリスナーについて学んだことを活かして、何かを作ってみましょう。

ブログを訪れると、最初に記事の抜粋が表示され、その後「もっと読む」ボタンをクリックして残りを表示することが多いです。それを実現してみましょう。

これが使用する HTML です。

```
 <article id="content">
      <p>
        freeCodeCamp は、コーディングを学ぶための最高のプラットフォームの一つです。
        freeCodeCamp には、ウェブ開発、ソフトウェアエンジニアリング、機械学習などの
        分野でゼロからヒーローになるための詳細なカリキュラムがあります。
      </p>

      <p>
        freeCodeCamp には、ウェブ開発、ソフトウェアエンジニアリング、機械学習、
        データサイエンス、フリーランスのウェブ開発、データベース管理、またはほぼ
        すべてに関連する約 1000 本以上の動画が収められた YouTube チャンネルも
        あります。動画がアップロードされたときに通知を受け取るには、チャンネルに
        登録して通知をオンにする必要があります。また、freeCodeCamp の Twitter も
        フォローできます。そこでは、日々、よく書かれた記事や動画のリンクがツイート
        されています。
      </p>

      <p>
        無料でコーディングを学べる場所ですが、その運営費用やサーバーの
        メンテナンス費用は、全世界からのドナーの自主的な寄付で成り立っています。
        もし寛大な心をお持ちの方は、ぜひドナーとして参加してください。
      </p>
    </article>

<button onclick="showMore()">Show more</button>
```

これは freeCodeCamp に関するシンプルな HTML といくつかの事実です。そして、すでに `onclick` を設定したボタンがあります。実行したい関数は `showMore()` です。これについてはすぐに書きます。

CSS がない状態だと、このようになります。

![articleunstyled](https://www.freecodecamp.org/news/content/images/2021/08/articleunstyled.png)

```
<style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: #f1f1f1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      article {
        width: 400px;
        background: #fff;
        padding: 20px 20px 0;
        font-size: 18px;
        max-height: 270px;
        overflow: hidden;
        transition: max-height 1s;
        text-align: justify;
        margin-top: 20px;
      }

      p {
        margin-bottom: 16px;
      }

      article.open {
        max-height: 1000px;
      }

      button {
        background: #0e0b22;
        color: #fff;
        padding: 0.6rem;
        margin-top: 20px;
        border: none;
        border-radius: 4px;
      }

      button:hover {
        cursor: pointer;
        background: #1e1d25;
      }
</style>
```

この CSS は何をしているのでしょうか？

ユニバーサルセレクター (`*`) を使うことで、要素に割り当てられているデフォルトのマージンとパディングをリセットし、独自のマージンとパディングを追加できるようにしています。

また、ボックスサイズを `border-box` に設定することで、パディングとボーダーを要素の総幅と高さに含めることができます。

ボディ内のすべての要素を Flexbox を使って中央に配置し、背景色を薄いグレーに設定しています。

テキストを含む `<article>` 要素には、幅 `400px`、背景色は白 (#fff)、上と左右に 20px、下に 0 のパディングを設定しています。

その中の段落タグにはフォントサイズ 18px を設定し、最大高さを `270px` にしています。article 要素の最大高さのため、すべてのテキストが収まらずにオーバーフローします。これを解決するために、オーバーフローを隠す設定にして最初にはそのテキストを表示しないようにしています。

トランジションプロパティにより、すべての変化が 1 秒後に行われるようにしました。article 内のすべてのテキストは両端揃えになっており、ページのトップに引っ付きすぎないようにするために、上マージンを 20 ピクセルに設定しています。

デフォルトのマージンを削除したため、段落同士がくっついてしまいました。そこで、段落同士を分離するために下マージンを 16 ピクセルに設定しています。

`article.open` のセレクターには `max-height` プロパティを `1000px` に設定しています。これは、article 要素に `open` クラスが追加されると、最大高さが `270px` から `1000px` に切り替わり、残りのテキストが表示されることを意味します。これを可能にするのが JavaScript の役割です。

ボタンは暗い背景色にして白いテキストにしています。ボタンにデフォルトのボーダーを持たせないために `border` をなしに設定し、`4px` のボーダー半径を与えて少し丸みを帯びたボーダーにしています。

最後に、CSS の `hover` 擬似クラスを使ってボタンのカーソルをポインターに変更しました。ユーザーがカーソルをボタン上に置いたときに背景色がわずかに変わります。

これが CSS の全体です。

ページはこのように見えます：

![articlestyled](https://www.freecodecamp.org/news/content/images/2021/08/articlestyled.png)

次に必要なのは、記事の残り部分を表示するための JavaScript を書くことです。

ボタンのオープニングタグにはすでに `showMore()` 関数を実行するための `onclick` 属性が用意されていますので、この関数を書いてみましょう。

最初に記事を選択する必要があります。なぜなら、残りの記事を表示するためです。

```
const article = document.querySelector("#content");
```

次に `showMore()` 関数を書いて、記事の残り部分を表示するか隠すかを切り替えることができるようにします。

```
function showMore() {
     if (article.className == "open") {
       // 短く表示
       article.className = "";
       button.innerHTML = "もっと見る";
     } else {
       // もっと表示
       article.className = "open";
       button.innerHTML = "閉じる";
     }
  }
```

この関数は何をしているのでしょうか？

ここで `if…else` 文を使っています。これは、特定の条件が満たされた場合にコード内で決定を下すための重要な JavaScript の部分です。

基本的な構文は以下の通りです：

```
if (condition == "something") {
  // 何かを行う
} else {
  // 他の何かを行う
}
```

ここでは、article のクラス名が `open` と等しい場合（つまり、CSS で最大高さ 1000px に設定された `open` クラスを追加したい場合）、記事の残り部分を見ることができます。それ以外の場合、記事は初期状態に戻り、一部が隠されます。

これを、else ブロック内で `open` クラスを割り当てることで実現し、記事の残り部分を表示します。次に、if ブロック内でクラスを空の文字列（なし）に設定し、初期状態に戻します。

コードはスムーズなトランジションで正常に動作しています： ![article](https://www.freecodecamp.org/news/content/images/2021/08/article.gif)

HTML と JavaScript を分離しても `onclick` を使うことができます。なぜなら、`onclick` は JavaScript だからです。したがって、HTML の代わりに JavaScript ファイルにこれを書き込むことも可能です。

```
 button.onclick = function () {
     if (article.className == "open") {
       // 短く表示
       article.className = "";
       button.innerHTML = "もっと見る";
     } else {
       // もっと表示
       article.className = "open";
       button.innerHTML = "閉じる";
     }
  };
```
```

イベント リスナーを使ってこれを実現することもできます:

```
<article id="content">
      <p>
        freeCodeCamp は、プログラミングを学ぶための最高のプラットフォームの一つです。
        freeCodeCamp は、ウェブ開発、ソフトウェア エンジニアリング、機械学習、その他多くの分野で
        初心者から上級者まで網羅したカリキュラムを提供しています。
      </p>

      <p>
        freeCodeCamp には YouTube チャンネルもあり、ウェブ開発、ソフトウェア エンジニアリング、
        機械学習、データ サイエンス、フリーランスのウェブ開発、データベース管理など、
        技術関連の内容を扱った1000本以上の動画が公開されています。動画がアップロードされると
        更新情報を受け取るには、チャンネル登録と通知のオンが必要です。さらに、毎日質の高い記事や
        動画のリンクをツイートする Twitter の freeCodeCamp もフォローすることができます。
      </p>

      <p>
        freeCodeCamp でコーディングを学ぶために料金を支払う必要がないため、
        freeCodeCamp は世界中のドナーからの自発的な寄付で運営されており、
        従業員の給与やサーバーの維持に充てられています。もしあなたが寛大であれば、
        ドナーとして参加することを検討してください。
      </p>
</article>

<button id="read-more">もっと見る</button>
```

```
 const article = document.querySelector("#content");
 const button = document.querySelector("#read-more");

button.addEventListener("click", readMore);

function readMore() {
     if (article.className == "open") {
       // 読む量を減らす
     article.className = "";
     button.innerHTML = "もっと見る";
   } else {
     article.className = "open";
     button.innerHTML = "少なく表示";
   }
}
```

機能自体は変わりませんね！

## 結論

このチュートリアルが、JavaScript のクリック イベントの仕組みを理解する助けになれば幸いです。ここでは 2 つの異なる方法を紹介しましたので、ぜひコーディング プロジェクトに活用してみてください。

お読みいただきありがとうございました。引き続きコーディングを楽しんでください。

