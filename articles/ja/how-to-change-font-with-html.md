---
title: HTMLでフォントを変更する方法
date: 2024-08-22T14:16:26.046Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/how-to-change-font-with-html/
posteditor: ""
proofreader: ""
---

かつて HTML4 の時代には、`<font>` タグを使ってテキストのフォントサイズやフォントファミリー、色を変更することができました。

<!-- more -->

しかし、HTML5 では `<font>` タグは廃止されました。そのため、フォントに関連する設定を変更する場合は CSS を使用する必要があります。

この記事では、CSS を使ってテキストのフォントサイズ、フォントウェイト、フォントスタイル、およびフォントファミリーを変更する方法を紹介します。

## テキストのフォントサイズを変更する方法

テキストのフォントサイズは、そのテキストがどれだけ大きいかを表します。

テキストのフォントサイズを変更するには、`font-size` プロパティを使用し、値をピクセル（`px`）、`rem` または `em` で指定します。

以下のようにインライン CSS で行うことができます：

```html
<h1 style="font-size: 4rem">freeCodeCamp</h1>
```

また、組み込みまたは内部 CSS を使用することもできます：

```html
<style>
    h1 {
        font-size: 4rem;
    }
</style>
```

最後に、外部 CSS を使用して行うことも可能です：

```css
    h1 {
        font-size: 4rem;
    }
```

デフォルトの白い背景を解除し、テキストを水平および垂直に中心に配置するために、次の CSS を使用しました：

```css
  body {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f1f1f1;
    }
```

ブラウザでの表示は以下の通りです： ![ss1-2](https://www.freecodecamp.org/news/content/images/2022/06/ss1-2.png)

## テキストのフォントウェイトを変更する方法

フォントウェイトは、特定のテキストがどれだけ太いかまたは軽いかを設定するプロパティです。

`font-weight` を使用して、テキストの太さや軽さを変更できます。その値としては `normal`、`lighter`、`bold`、または `bolder` などがあります。また、100、200、500 などの数値も使用できます。

フォントサイズと同様に、フォントウェイトもインライン、組み込み、または外部 CSS で変更できます。

```html
<span>
   <h1 style="font-weight: lighter">freeCodeCamp Lighter</h1>
   <h1 style="font-weight: normal">freeCodeCamp Normal</h1>
   <h1 class="bold" style="font-weight: bold">freeCodeCamp Bold</h1>
   <h1 style="font-weight: bolder">freeCodeCamp Bolder</h1>
</span>
```

```html
<style>
    .lighter {
      font-weight: lighter;
    }

    .normal {
      font-weight: normal;
    }

    .bold {
      font-weight: bold;
    }

    .bolder {
      font-weight: bolder;
    }
</style>
```

```css
.lighter {
      font-weight: lighter;
    }

    .normal {
      font-weight: normal;
    }

    .bold {
      font-weight: bold;
    }

    .bolder {
      font-weight: bolder;
    }
```

![ss2-2](https://www.freecodecamp.org/news/content/images/2022/06/ss2-2.png)

## テキストのフォントスタイルを変更する方法

フォントスタイルは、テキストの書体のバリエーションを指します。この書体のバリエーションは `normal`、`bold`、または `italic` などです。

フォントスタイルを変更するには、`font-style` プロパティを使用し、その値として `normal`、`oblique`、または `italic` を指定します。

`normal` はデフォルトのフォントスタイルなので、特に指定する必要はありませんが、上書きする場合には指定します。

フォントスタイルもインライン、内部、または外部 CSS で変更することができます。

```html
<span>
      <h1>freeCodeCamp Normal</h1>
      <h1 style="font-style: oblique">freeCodeCamp Oblique</h1>
      <h1 style="font-style: italic">freeCodeCamp Italic</h1>
</span>
```

```html
<style>
    .oblique {
      font-style: oblique;
    }

    .italic {
      font-style: italic;
    }
</style>
```

```css
    .oblique {
      font-style: oblique;
    }

    .italic {
      font-style: italic;
    }
```

ブラウザでの表示は以下の通りです： ![ss3-2](https://www.freecodecamp.org/news/content/images/2022/06/ss3-2.png)

## テキストのフォントファミリーを変更する方法

フォントファミリーは、同じデザインやタイポグラフィーを共有する一連のフォントを表します。

CSS の `font-family` プロパティを使用して、テキストのフォントファミリーを変更することができます。

インライン CSS、内部 CSS、または外部 CSS を使って変更することができます。

以下のコードスニペットは、インライン CSS でフォントファミリーを変更する方法を示しています：

```html
<h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif">
      freeCodeCamp
</h1>
```

組み込みまたは内部 CSS でフォントファミリーを変更する方法は次の通りです：

```css
<style>
    h1 {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>
```

外部 CSS ファイルでフォントファミリーを変更する場合は次の通りです：

```css
h1 {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
```

外部 CSS が HTML ファイルにリンクされていることを確認してください。でないと機能しません。

Google Chrome ブラウザでの Verdana フォントファミリーの表示は以下の通りです： ![ss4-1](https://www.freecodecamp.org/news/content/images/2022/06/ss4-1.png)

また、値の中に他のフォントファミリー（Geneva、Tahoma、sans-serif）が含まれていることに気づいたかもしれません。

これは、ユーザーのデバイスで Verdana が利用できない場合に、ブラウザが使うフォールバックフォントです。

デバイスに内蔵されているフォントが気に入らない場合は、Google Fonts から他のフォントを取得することもできます。

お気に入りのフォントを検索して、そのリンクをコピーし、HTML の `<head>` セクションに貼り付けることで、そのフォントを HTML スタイルシートで使用できるようになります。 ![ss5-1](https://www.freecodecamp.org/news/content/images/2022/06/ss5-1.png)

```
 h1 {
      font-family: Roboto, sans-serif;
    }
```

そして、ブラウザでの見た目は以下のようになります： ![ss6-1](https://www.freecodecamp.org/news/content/images/2022/06/ss6-1.png)

## 結論

本記事では、インライン、内部、外部 CSS を使用してテキストのフォントサイズ、フォントウェイト、フォントスタイル、フォントファミリーの変更方法について解説しました。

インライン、内部、外部 CSS のどれを使うべきか迷うかもしれません。

小規模なプロジェクトであれば、内部や埋め込み CSS を使用しても良いでしょう。しかし、大規模なプロジェクトやチームで作業する場合は、内部 CSS は避けた方がよいです。

その理由は、CSS と HTML を分離することがベストプラクティスだからです。

ほとんどの状況では、インライン CSS は HTML の可読性を損なう可能性があるため、避けるべきです。

また、インライン CSS はウェブサイトの SEO に悪影響を与える可能性があるとも指摘されています。

ご覧いただきありがとうございました。
```

