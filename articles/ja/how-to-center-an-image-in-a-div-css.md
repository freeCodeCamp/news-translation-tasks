---
title: CSS 画像のセンタリング – Div 内で画像を中央に配置する方法
date: 2024-08-22T14:13:37.301Z
author: Joel Olawanle
authorURL: https://www.freecodecamp.org/news/author/joel-olawanle/
originalURL: https://www.freecodecamp.org/news/how-to-center-an-image-in-a-div-css/
posteditor: ""
proofreader: ""
---

ウェブページのフロントエンドを作業していると、 `div` （コンテナ）内に画像を中央に配置したいことがあります。

<!-- more -->

これが時には厄介になることがあります。特定の条件に基づいて、ある方法がある時点でうまく機能しないことがあり、代替手段を探さなければならないこともあります。

この記事では、CSS を使用して `div` 内に画像を中央に配置する方法を学びます。

## CSS を使用して `div` をセンタリングする方法

画像を `div` 内で中央に配置するには、水平方向と垂直方向の 2 つの方法があります。これらの方法を組み合わせることで、完全に中央に配置された画像が得られます。

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660599829888_Untitled](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660599829888_Untitled.png)

デフォルトでは、ウェブコンテンツは常に画面の左上隅から始まります。特定の言語（例えばアラビア語）を除いて、左から右（ltr）に進みます。

まず、 `div` 内で画像を水平に中央に配置する方法を見てみましょう。その後、垂直に中央に配置する方法を見て、最終的に両方を同時に行う方法を確認します。

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702367688_image](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702367688_image.png)

### Text-align を使用して画像を水平に中央配置する方法

次のように画像を配置した `div` を持っているとします。

```html
<div class="container">
    <img src="./fcc-logo.png" alt="FCC Logo" />
</div>
```

そして基本的な CSS スタイリングを適用して画像を表示させます。

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
}
.container img {
    width: 100px;
}
```

`text-align` メソッドは通常テキストを中央に配置するために使用されるため、すべての場合に機能するわけではありません。しかし、 `div` のようなブロックレベルコンテナ内に画像を配置する場合、この方法は有効です。

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    text-align: center;
}

.container img {
    width: 100px;
}
```

この方法は、コンテナに `text-align` プロパティとその値として `center` を追加することで機能します。

### Margin-auto を使用して画像を水平に中央配置する方法

画像を `div` （コンテナ）内で水平に中央に配置するもう一つの方法は、 `margin` プロパティに `auto` の値を設定することです。

この方法では要素は **指定された** `width` を取り、残りのスペースは左と右のマージン間で均等に分割されます。

通常、この方法を画像自体に適用し、コンテナには適用しません。ただし、このプロパティだけでは機能しません。まず、画像が取る `width` を指定する必要があります。これにより、マージンはコンテナが持つ残りの幅を公式に分割することができます。

第二に、`img`はインライン要素であり、`margin-auto` プロパティの設定はインラインレベルの要素には影響しません。これは、`display` プロパティを `block` に設定してブロックレベルの要素に変換する必要があることを意味します。

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
}

.container img {
    width: 100px;
    margin: auto;
    display: block;
}
```

### Position と Transform プロパティを使用して画像を水平に中央配置する方法

画像を水平に配置するために使用できるもう一つの方法は、 `position` プロパティと `transform` プロパティを組み合わせることです。

この方法は非常にトリッキーですが、機能します。まず、コンテナの `position` を `relative` に設定し、次に画像の `position` を `absolute` に設定します。

これを行った後、画像を `left`、`top`、`bottom`、または `right` プロパティを使用して任意の位置に移動できます。

この場合、画像を水平に中央に移動したいので、 `left` を 50% または `right` を -50% に設定します。

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
}
```

しかし、画像を確認すると、完璧に中央に配置されていないことに気付くでしょう。これは、画像が 50% の位置から始まったためです。

この場合、 `transform-translateX` プロパティを使用して水平に完璧に中央に調整する必要があります。

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
```

### Display-Flex を使用して画像を水平に中央配置する方法

CSS のフレックスボックスを使用すると、float やポジショニングを使用せずに柔軟でレスポンシブなレイアウト構造を設計することが簡単になります。このプロパティを使用して、コンテナの中心に画像を水平に配置することもできます。

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    justify-content: center;
}

.container img {
    width: 100px;
}
```

この方法では、画像を持つ `div` をフレックスコンテナに変換し、`justify-content` プロパティを `center` に設定することで、画像が水平に中央に配置されます。


```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    justify-content: center;
}

.container img {
    width: 100px;
    height: 100px;
}
```

**注意:** `display: flex` プロパティは古いバージョンのブラウザではサポートされていないことがあります。詳細は[こちら][1]を参照してください。また、画像の幅と高さが固定されているため、画像が縮小されないこともポイントです。

それでは、`div` 要素内で画像を垂直方向に中央揃えする方法を学びましょう。後で、画像を水平方向および垂直方向の両方で中央揃えする方法についても説明します。

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702330431_image](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702330431_image.png)

### Display-Flex を使って画像を垂直方向に中央揃えする方法

`display: flex` を使用して画像を水平方向に中央揃えしたように、垂直方向にも同様に行うことができます。

ただし、この場合は `justify-content` プロパティを使用する必要はありません。代わりに `align-items` プロパティを使用します：

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    align-items: center;
}

.container img {
    width: 100px;
    height: 100px;
}
```

この方法を有効にするためには、コンテナの `height` が指定されている必要があります。これを基に高さを計算し、中央がどこにあるかを把握します。

### Position と Transform プロパティを使って画像を垂直方向に中央揃えする方法

以前に `position` と `transform` プロパティを使って画像を水平方向に中央揃えした方法と同様に、垂直方向にも同様に行うことができます。

今回は `left` や `right` ではなく、`top` や `bottom` を使い、`translateX` の代わりに `translateY` を使用します：

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

これで、すべての方法を使って `div` 内の画像を垂直方向と水平方向の両方で中央揃えする方法を学びました。それでは、次に両方の方法を組み合わせて完璧に中央揃えする方法を説明します。

![s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702293626_image](https://paper-attachments.dropbox.com/s_E4F69027FF573CB7A65859895F7B6CD8342925344584ACB8BE37F8B299430A72_1660702293626_image.png)

### Display-Flex を使って画像を水平方向および垂直方向に中央揃えする方法

`display: flex` プロパティは、画像を垂直方向および水平方向に中央揃えするための方法です。

Flexbox メソッドを使用する場合は、`justify-content` と `align-items` プロパティの両方を `center` に設定します：

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container img {
    width: 100px;
    height: 100px;
}
```

### Position と Transform プロパティを使って画像を水平方向および垂直方向に中央揃えする方法

こちらも非常にシンプルで、垂直方向と水平方向の中央揃え方法を組み合わせるだけです：

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
```

さらに、`translateX` と `translateY` を `translate(x,y)` にまとめることもできます：

```css
.container {
    width: 200px;
    height: 200px;
    background-color: #0a0a23;
    position: relative;
}

.container img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```

## まとめ

この記事では、`div` 内の画像を垂直方向、水平方向、もしくはその両方で中央揃えする方法について学びました。

多くの場合、画像を中央に配置するには Flexbox メソッドを使用することになるでしょう。`position` メソッドはウェブページのレイアウトを歪める可能性があり、扱いが難しいためです。

[CSS の position メソッドの詳細はこちら][2]、[Flexbox メソッドの詳細はこちら][3]から学んでください。

コーディングを楽しんでください！

[1]: https://caniuse.com/#search=display%20flex
[2]: https://www.freecodecamp.org/news/css-position-property-explained/
[3]: https://www.freecodecamp.org/news/css-flexbox-tutorial-with-cheatsheet/
```

