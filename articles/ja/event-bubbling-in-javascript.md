---
title: JavaScript のイベントバブリング – イベントの伝播の仕組みと実例
date: 2024-10-18T11:36:15.287Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/event-bubbling-in-javascript/
posteditor: ""
proofreader: ""
---

Dillion Megida による解説

<!-- more -->

HTML 要素はクリックやフォーカス、一時停止といった様々なイベントを受け取ります。これらのイベントに共通する動作の一つが「イベントバブリング」です。この記事では、この動作が何を意味するのかを詳しく解説していきます。

また、この記事の動画版も作成しましたので、興味のある方は[こちらからご覧いただけます][1]。

## イベントバブリングとは？

イベントバブリングとは、DOM (Document Object Model) の概念の一つで、ある要素がイベントを受け取った際に、そのイベントが DOM ツリー上の親や先祖要素に向かって伝播していく現象を指します。最終的にはルート要素に到達します。

これはイベントが要素で発生する際のデフォルト動作となっており、特に明示的に伝播を停止しない限り [この記事の最後で詳しく説明します][2]。

では、イベントバブリングがどのように機能するのか、具体的な例を見ていきましょう。

HTML:

```html
<body>
  <div>
    <span>
      <button>Click Me!</button>
    </span>
  </div>
</body>
```

CSS:

```css
body {
  padding: 20px;
  background-color: pink;
}

div {
  padding: 20px;
  background-color: green;
  width: max-content;
}

span {
  display: block;
  padding: 20px;
  background-color: blue;
}
```

結果:

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-256.png)

この **button** は **span** の子要素であり、その **span** は **div** の子要素で、さらにその **div** は **body** の子要素です。DOM ツリーは以下のようになります。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-263.png) _このインタラクションの DOM ツリー_

ボタンをクリックすると、その操作が **span**（青い背景）をクリックしたのと同様に扱われます。これはボタンが span の子要素であるためです。

同様に **div** や **body** にも当てはまり、ボタンをクリックすることはそれらをもクリックしていることになります。これがイベントバブリングの概念です。

イベントが発生した直接の要素に留まらず、親や先祖までイベントが伝播され、最終的にはルート要素に達します。

たとえば、ボタンが **click** イベントを受け取ると、`span`、`div`、`body`（最終的には **html**、ルート要素）も順次そのイベントを受け取ります。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-264.png) _イベントバブリングの仕組みを示す図_

青いボックス（span）をクリックした場合は、ボタンはクリックイベントを受け取りません。なぜなら、ボタンは span の親でも先祖でもないからです。しかし、div、body、HTML にはイベントが伝播されます。

同様に、div をクリックした場合は、イベントが body や HTML に伝播されます。

## イベントバブリングを利用したイベント処理

「イベントバブリング」機能を利用すると、実際にイベントを受け取った要素ではなく、その親要素でイベントを処理することが可能です。

このような方法でイベントを先祖要素で処理するパターンは「イベントデリゲーション」と呼ばれています。詳しくは [こちら][3]をご覧ください。

以下のコードでは、イベントリスナーとハンドラーを設定しています。

```javascript
const body = document.getElementsByTagName("body")[0]
const div = document.getElementsByTagName("div")[0]
const span = document.getElementsByTagName("span")[0]
const button = document.getElementsByTagName("button")[0]

body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})
```

ここでは、`body`、`div`、`span`、`button` を DOM から取得し、それぞれに `click` イベントリスナーを設定しました。そして、"body was clicked"、"div was clicked"、"span was clicked"、"button was clicked" のログを表示するハンドラー関数を追加しています。

ピンクの背景（body）をクリックすると、コンソールには以下のように表示されます。

```
body was clicked
```

緑色の背景（div）をクリックすると、コンソールには次のように表示されます。

```
div was clicked
body was clicked
```

div 要素がターゲット要素であるにもかかわらず、body 要素の "click" イベントが発生する理由は、"click" イベントが div から body へとバブリングしたためです。

青い背景（span）をクリックすると、コンソールには以下の出力があります。

```
span was clicked
div was clicked
body was clicked
```

最後に、ボタンをクリックした場合、コンソールは次の通りです。

```
button was clicked
span was clicked
div was clicked
body was clicked
```

## イベントバブリングの停止方法

イベントバブリングはデフォルトの動作ですが、特定のケースではこれを止めたいこともあります。

たとえば、先ほどの HTML コードで、div をクリックするとモーダルを開きたいが、ボタンの場合には API リクエストを発生させたいとします。

この場合、ボタンをクリックしたときにモーダルが開いてほしくないかもしれません。このような場合や、その子要素をクリックしても親要素が反応しないようにしたいときは、イベントの伝播を防ぐことが重要です。

イベントを処理する際には、`event` オブジェクトが処理関数に渡されます。

```
button.addEventListener("click", (event) => {
  // event オブジェクトを使って何かをする
}
```

`event` オブジェクトには、発生したイベントおよびそのイベントが発生した要素に関する情報を含むプロパティが含まれています。このオブジェクトにはメソッドもあり、その一つが `stopPropagation()` です。

イベントの `stopPropagation` メソッドを使うと、イベントが発生した要素の親要素や祖先要素への伝播を防ぐことができます。

このコードを使って JavaScript で試してみましょう：

```
body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', () => {
  console.log("span was clicked")
})

button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("button was clicked")
})
```

このコードでは、ボタンをクリックすると、コンソールに表示されるのは以下の通りです：

```
button was clicked
```

ボタンの親や祖先要素にはクリックイベントが伝わらないので、ボタンクリックのみが記録されます。

他の要素からバブリングを止めることもできます：

```
body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked")
})

span.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("span was clicked")
})

button.addEventListener('click', () => {
  console.log("button was clicked")
})
```

`stopPropagation()` が span のイベントリスナーで使われ、ボタンをクリックすると、コンソールには次のように表示されます：

```
button was clicked
span was clicked
```

イベントはボタンから span へとバブリングされますが、そこで伝播が止まります。

## まとめ

要素がイベントを受け取ると、そのイベントは DOM ツリー内で親や祖先要素に上向きに伝播します。これが **イベントバブリング** の概念であり、親要素が子要素で発生したイベントを処理できるようになります。

イベントオブジェクトには、イベントのバブリングを止めるための `stopPropagation` メソッドもあります。この機能は、特定の要素でのクリックイベントをその要素自身に限り、子要素がクリックされた時には発生させたくない場合に便利です。

`stopPropagation` と `preventDefault` は、イベントオブジェクトのデフォルトの動作を停止するためのメソッドです。これらのメソッドの違いに関する記事は [こちら][4] にあります。

[1]: https://www.youtube.com/watch?v=KaHZdW02Tg0
[2]: #how-to-stop-event-bubbling
[3]: https://www.freecodecamp.org/news/event-delegation-javascript/
[4]: https://www.freecodecamp.org/news/manage-default-behavior-in-browser/

