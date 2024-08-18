---
title: CSS でリンクの下線を消す方法 – HTML スタイルガイド
date: 2024-08-18T10:50:38.140Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/remove-underline-from-link-in-css/
translator: ""
reviewer: ""
---

ウェブ開発者であれば、ページにリンクを追加した際にデフォルトで表示される下線を消したいと思ったことがあるでしょう。

<!-- more -->

幸いなことに、他のウェブページ要素と同様に、リンクを表示するための anchor タグもスタイルを設定できます。

この記事では、CSS でリンクの下線を消す方法を紹介します。また、リンクが持つ 4 つの状態と、それぞれの状態で下線を削除する方法も説明します。

## CSS でリンクの下線を消す方法

デフォルトでは、リンクタグはブラウザで次のように表示されます: ![ss1-4](https://www.freecodecamp.org/news/content/images/2022/06/ss1-4.png)

まず、リンクタグ（anchor タグ）が 4 つの異なる状態（擬似クラスとも呼ばれます）になることを知っておくことが重要です。

-   `a:link`: 通常の状態（アクティブでも訪問済みでもホバーでもない）
-   `a:visited`: ユーザーがリンクをクリックして訪問した状態
-   `a:hover`: ユーザーがリンクにホバーしている状態
-   `a:active`: ユーザーがリンクをクリックしている状態

**注意:** CSS のカスケード特性のため、これらの状態（擬似クラス）は上記の順序で記述する必要があります。

リンクのデフォルトの下線を消すためには、すべての擬似クラスに対して `text-decoration` プロパティに `none` を割り当てればよいです。

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

また、次のように anchor 要素セレクタを使用して、デフォルトの下線を一括して削除することもできます。

```
 a {
       text-decoration: none;
}
```

![ss3-5](https://www.freecodecamp.org/news/content/images/2022/06/ss3-5.png)

リンクタグの 4 つの擬似クラスを使って遊んでみたい方は、こちらの Pen をお試しください:

<iframe width="100%" height="350" src="https://codepen.io/koladechris/embed/bGLPzXr" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="CodePen embed" scrolling="no" allowtransparency="true" allowfullscreen="true" loading="lazy"></iframe>

## まとめ

この記事が、CSS でリンクのデフォルトの下線を消す方法を学ぶ助けになれば幸いです。

この記事が役立ったと思ったら、ぜひ友達や家族とシェアしてください。

読んでくれてありがとう。

