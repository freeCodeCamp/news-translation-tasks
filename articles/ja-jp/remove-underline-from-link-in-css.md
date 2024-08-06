---
title: CSS でリンクの下線を除去する方法 – HTML スタイルガイド
date: 2024-08-06T10:46:16.743Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/remove-underline-from-link-in-css/
translator: ""
reviewer: ""
---

ウェブ開発者であれば、ページにリンクを追加したときにデフォルトで表示される下線を外したいと思ったことがあるでしょう。

<!-- more -->

幸いなことに、他のウェブページの要素と同様に、リンクを表示するためのアンカータグもスタイルを適用することができます。

この記事では、CSS を使ってリンクの下線を除去する方法を紹介します。また、リンクが持つ4つの状態と、それぞれの状態で下線を除去する方法についても説明します。

## CSS でリンクの下線を除去する方法

デフォルトでは、リンクタグはブラウザで次のように表示されます。 ![ss1-4](https://www.freecodecamp.org/news/content/images/2022/06/ss1-4.png)

まず、リンクタグ（アンカータグ）が 4 つの異なる状態、いわゆる擬似クラスにあることを知っておくことが重要です。

-   `a:link`: リンクがアクティブでなく、訪問もされていない通常の状態
-   `a:visited`: ユーザーがリンクをクリックした後、すなわち訪問済みの状態
-   `a:hover`: ユーザーがリンク上にマウスカーソルを置いている状態
-   `a:active`: ユーザーがリンクをクリックしている瞬間の状態

**注:** CSS のカスケーディングの特性上、これらの状態（擬似クラス）は上記の順序で記述する必要があります。

リンクのデフォルトの下線を取り除くためには、全ての擬似クラスに対して `text-decoration` プロパティに `none` を指定します。

```
<p>This is a <a href="#">link</a></p>
```

```
 a:link {
      text-decoration: none;
}

a:visited {
      text-decoration: none;
}

a:hover {
      text-decoration: none;
}

a:active {
      text-decoration: none;
}
```

![ss2-4](https://www.freecodecamp.org/news/content/images/2022/06/ss2-4.png)

また、アンカー要素セレクタを使ってすべてのデフォルトの下線を一度に除去することもできます。

```
 a {
       text-decoration: none;
}
```

![ss3-5](https://www.freecodecamp.org/news/content/images/2022/06/ss3-5.png)

以下の CodePen でリンクタグの 4 つの擬似クラスを試してみてください。

<iframe width="100%" height="350" src="https://codepen.io/koladechris/embed/bGLPzXr" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe>

## まとめ

この記事がお役に立てば幸いです。CSS を使ってリンクのデフォルトの下線をどのように除去するかについて理解できましたか？

この記事が役に立ったと感じたら、ぜひ友人や家族とシェアしてください。

読んでいただき、ありがとうございました。

---

![Kolade Chris](https://cdn.hashnode.com/res/hashnode/image/upload/v1720467520534/YTa5HE3R0.jpg)

私はフロントエンド技術に焦点を当てたソフトウェア開発者兼テックライターです。

---

ここまで読んでくださった方は、ぜひ著者に感謝の意を示してください。 Say Thanks

無料でコードを学びましょう。freeCodeCamp のオープンソースカリキュラムは、40,000 人以上が開発者として就職するのを支援しました。[始めましょう][1]

[1]: https://www.freecodecamp.org/learn/



