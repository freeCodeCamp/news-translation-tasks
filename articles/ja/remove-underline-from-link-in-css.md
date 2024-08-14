---
title: リンクの下線を CSS で消す方法 - HTML スタイルガイド
date: 2024-08-14T09:21:50.965Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/remove-underline-from-link-in-css/
translator: ""
reviewer: ""
---

ウェブ開発者なら、ページにリンクを追加した際のデフォルトの下線を消したいと思ったことがあるでしょう。

<!-- more -->

幸運なことに、ウェブページの他の要素と同様に、リンクを表示するアンカータグもスタイリングできます。

この記事では、CSS を使ってリンクの下線を消す方法を紹介します。さらに、リンクが持つ 4 つの状態と、それぞれの状態で下線を消す方法についても解説します。

## CSS でリンクの下線を消す方法

デフォルトでは、リンクタグは以下のようにブラウザに表示されます: ![ss1-4](https://www.freecodecamp.org/news/content/images/2022/06/ss1-4.png)

まず知っておくべきは、リンクタグ（アンカータグ）は 4 つの異なる状態（擬似クラス）を持つということです:

-   `a:link`: リンクがアクティブ、訪問済み、またはホバー状態でない通常の状態
-   `a:visited`: リンクがユーザーによってクリックされた場合、つまり訪問済みの状態
-   `a:hover`: ユーザーがリンクにマウスをホバーしている状態
-   `a:active`: ユーザーがリンクをクリックしている状態

**注:** CSS のカスケード特性のため、これらの状態（擬似クラス）は上記の順序で記述しなければなりません。

リンクのデフォルトの下線を消すためには、すべての擬似クラスに `text-decoration` プロパティを `none` として指定すれば良いのです。

```
<p>これは <a href="#">リンク</a> です</p>
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

また、アンカー要素セレクタを使って一度にデフォルトの下線を消すことも可能です:

```
a {
    text-decoration: none;
}
```

![ss3-5](https://www.freecodecamp.org/news/content/images/2022/06/ss3-5.png)

リンクタグの 4 つの擬似クラスを使って、このペンで試してみましょう:

<iframe width="100%" height="350" src="https://codepen.io/koladechris/embed/bGLPzXr" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe>

## 結論

この記事が、CSS を使ってリンクのデフォルトの下線を消す方法を学ぶ助けになれば幸いです。

この記事が役に立った場合は、ぜひ友人や家族に共有してください。

読んでいただき、ありがとうございました。

---

![Kolade Chris](https://cdn.hashnode.com/res/hashnode/image/upload/v1720467520534/YTa5HE3R0.jpg)

私はフロントエンド技術に焦点を当てたソフトウェア開発者兼技術ライターです

---

ここまで読んでくれたなら、著者に感謝の意を伝えてください。感謝の気持ちを伝える

無料でコーディングを学びましょう。freeCodeCamp のオープンソースカリキュラムは、40,000 人以上が開発者としての仕事を得る手助けをしてきました。 [始める][1]

[1]: https://www.freecodecamp.org/learn/

