---
title: リンクから下線を削除する方法 – CSS を使用した HTML スタイルガイド
date: 2025-03-18T06:36:58.541Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/remove-underline-from-link-in-css/
posteditor: ""
proofreader: ""
---

ウェブ開発者であれば、ページにリンクを追加するとデフォルトで表示される下線を消したいと考えたことがあるでしょう。

<!-- more -->

幸いなことに、ウェブページ上の他の要素と同様に、リンクを表示するためのアンカータグもスタイルを適用することができます。

この記事では、リンクから下線を削除するための CSS の使い方について解説します。また、リンクの持つ 4 つの状態と、それぞれの状態で下線を削除する方法についても説明します。

## リンクから下線を削除する方法

デフォルトでは、このようにリンクタグがブラウザに表示されます: ![ss1-4](https://www.freecodecamp.org/news/content/images/2022/06/ss1-4.png)

まず初めに、リンクタグ（アンカータグ）が持つ 4 つの異なる状態（擬似クラス）について知っておくことが重要です。

-   `a:link`: リンクがアクティブ、訪問済み、もしくはホバーされていない通常の状態
-   `a:visited`: ユーザーによってクリックされた、つまり訪問済みの状態
-   `a:hover`: ユーザーがリンク上にカーソルを置いている状態
-   `a:active`: ユーザーがリンクをクリックしている状態

**注意:** 擬似クラスは、CSS のカスケーディングの性質上、上記の順序で記述する必要があります。

リンクの**デフォルトの下線を削除**するためには、すべての擬似クラスをターゲットにして、それらに `text-decoration` プロパティとして `none` を割り当てることができます。

```
<p>これは<a href="#">リンク</a>です</p>
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

また、アンカー要素セレクターを使用して、デフォルトの下線を一括で削除することもできます。

```
 a {
       text-decoration: none;
}
```

![ss3-5](https://www.freecodecamp.org/news/content/images/2022/06/ss3-5.png)

リンクタグの 4 つの擬似クラスをこのペンで試すことができます:

<iframe width="100%" height="350" src="https://codepen.io/koladechris/embed/bGLPzXr" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe>

## まとめ

この記事が、CSS を使用してリンクからデフォルトの下線を削除する方法を学ぶのに役立つことを願っています。

この記事が役に立ったと思ったら、友人や家族とシェアすることをお勧めします。

お読みいただき、ありがとうございます。

