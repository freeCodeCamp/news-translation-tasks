---
title: HTML、CSS、JavaScript、および Bootstrap 5 を使ってポートフォリオウェブサイトを作成する方法
date: 2024-08-27T07:45:43.927Z
author: Sampurna Chapagain
authorURL: https://www.freecodecamp.org/news/author/sampurna/
originalURL: https://www.freecodecamp.org/news/how-to-create-a-portfolio-website-using-html-css-javascript-and-bootstrap/
posteditor: ""
proofreader: ""
---

Web 開発者やデザイナーであれば、自分自身のポートフォリオウェブサイトを持つことが重要です。これは、自分に関する情報を提供し、自分のスキルや経験を示すための最適な手段となります。

<!-- more -->

この記事では、ポートフォリオウェブサイトを作成することの利点について説明します。その上で、HTML、CSS、JavaScript、および Bootstrap バージョン 5 を使用して、美しいレスポンシブなポートフォリオウェブサイトを作成する方法を紹介します。

### HTML、CSS、JS、および Bootstrap 5 を使ってポートフォリオウェブサイトを作成する方法についてのインタラクティブなデモはこちらです：

<iframe src="https://scrimba.com/scrim/co27f4302abab219aea652cf7?embed=freecodecamp,mini-header" width="100%" height="480" title="Embedded content" loading="lazy"></iframe>

## 目次

-   [ポートフォリオウェブサイトを持つことの利点][1]
-   [Bootstrap とは何か][2]
-   [フォルダ構成][3]
-   [ナビゲーションメニューを追加する方法][4]
-   [Hero ヘッダーを追加する方法][5]
-   [自己紹介セクションの作成方法][6]
-   [サービスセクションの作成方法][7]
-   [スクロール時にナビバーにダーク背景色を追加する方法][8]
-   [ポートフォリオセクションの作成方法][9]
-   [お問い合わせセクションの作成方法][10]
-   [フッターセクションの作成方法][11]
-   [最終仕上げ][12]
-   [まとめ][13]

## ポートフォリオウェブサイトを持つことの利点

ポートフォリオウェブサイトを持つことには複数の利点があります：

-   自分のスキルや経験をアピールするためのプラットフォームとなる
-   自分の個性を見せることができる
-   採用担当者が自分を見つけやすくなる
-   Google などの検索エンジンで自分を簡単に検索できる

## Bootstrap とは何か？

Bootstrap は、レスポンシブでモバイルフレンドリーなウェブサイトを開発するために使用される人気のフロントエンド CSS フレームワークです。Bootstrap の最新リリースはバージョン 5 です。公式ドキュメントは[こちら][14]から確認できます。

## フォルダ構成

これからポートフォリオウェブサイトの作成に取りかかります。

まず、フォルダ構成を作成しましょう。プロジェクトのスターターファイルは [GitHub][15] で取得できます。また、このプロジェクトのライブデモは[こちら][16]から確認できます。

![Screenshot-from-2022-01-22-19-10-25](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-22-19-10-25.png)

プロジェクトフォルダ構成

このフォルダ構成は、index.html、style.css、script.js ファイルと images フォルダで構成されています。すべての CSS は style.css ファイルに、JavaScript は script.js ファイルに記述します。

index.html ファイルには、Bootstrap CDN、[フォントオーサムキット][17]、および外部スタイルシートと JavaScript へのリンクを含む HTML のボイラープレートコードが含まれています。

ここで、script.js ファイルはすべての HTML コードが読み込まれた後に読み込まれます。

## ポートフォリオにナビゲーションメニューを追加する方法

次に、プロジェクトにナビゲーションメニューを追加しましょう。これにより、訪問者は必要な情報を簡単に見つけることができます。

nav 要素に Bootstrap の `fixed-top` クラスを使用して、ナビバーをページの上部に固定します。ナビバーには `navbar-brand` クラスがあり、そこにブランドとして人の名前を掲載します。

```html
<nav class="navbar navbar-expand-lg fixed-top navbarScroll">
        <div class="container">
            <a class="navbar-brand" href="#">Brad</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>
```

ナビバーには以下の機能があります：

-   ホーム、アバウト、サービス、ポートフォリオ、コンタクト、フッターの 6 つのリンクを持つ
-   背景が透明で、後でページのスクロール時にダーク背景色を追加します
-   小さいデバイスでトグルされる

Bootstrap 5 のナビバーの機能に関する詳細は[こちら][18]から確認できます。

## ポートフォリオにヒーローヘッダーを追加する方法

今回は、ヒーローヘッダーを追加して、サイトに大きなインパクトを与えます。ヒーローヘッダーとは、ウェブデザイン用語で、企業や個人の主要な目標や代表的な画像、写真、その他の注目される要素をフル幅で表示する高品質な画像のことです。これにより、ユーザーの目を引くことができます。

```html
<!-- メインバナー -->
<section class="bgimage" id="home">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 class="hero_title">こんにちは、私の名前はブラッドです</h2>
                <p class="hero_desc">ニューヨークでフリーランスとして活動しています</p>
            </div>
        </div>
    </div>
</section>
```

次に、上記のコードに対応する CSS を style.css ファイルに追加しましょう：

```css
/* ヒーローバックグラウンド画像 */
.bgimage {
    height: 100vh;
    background: url('images/heroImage.jpeg');
    background-size: cover;
    position: relative;
}
/* バックグラウンド画像上のテキストの CSS */
.hero_title {
    font-size: 4.5rem;
}
.hero_desc {
    font-size: 2rem;
}
.hero-text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
}
```

ここでは、`bgimage` という id を持つセクションがフル幅のヒーロー画像を表示する役割を果たし、その画像の中央にテキストを配置しています。これが上記の CSS によって実現されています。

ナビゲーションバーとヒーローセクションを追加した結果、サイトは以下のようになります：

![Screenshot-from-2022-01-25-10-13-25](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-25-10-13-25.png)

ヒーロー画像とナビゲーションバー

## アバウトセクションを作成する方法

アバウトページには、あなたとあなたのバックグラウンドに関する重要な情報が含まれています。ポートフォリオサイトの訪問者は、このページの情報を通じてあなたを知ることができます。

ここでは、行の左側に画像を、右側には簡単な自己紹介を追加します。以下のコードを使って説明しましょう：

```html
<!-- アバウトセクション -->
<section id="about">
    <div class="container mt-4 pt-4">
        <h1 class="text-center">About Me</h1>
        <div class="row mt-4">
            <div class="col-lg-4">
                <img src="images/about.jpeg" class="imageAboutPage" alt="">
            </div>

            <div class="col-lg-8">
                <p> Lorem Ipsum は 1500 年代から業界標準のダミーテキストです。ある未知の印刷業者がタイプ見本の本を作成するために、版を取り、スクランブルして使用しました。それ以来、5 世紀以上にわたって生き残り、電子出版に飛躍しても本質的に変わっていません。
                </p>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <ul>
                            <li>Name: David Parker</li>
                            <li>Age: 28</li>
                            <li>Occupation: Web Developer</li>
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li>Name: David Parker</li>
                            <li>Age: 28</li>
                            <li>Occupation: Web Developer</li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-3">
                    <p> Lorem Ipsum は 1500 年代から業界標準のダミーテキストです。ある未知の印刷業者がタイプ見本の本を作成するために、版を取り、スクランブルして使用しました。それ以来、5 世紀以上にわたって生き残り、電子出版に飛躍しても本質的に変わっていません。
                        Lorem Ipsum は 1500 年代から業界標準のダミーテキストです。ある未知の印刷業者がタイプ見本の本を作成するために、版を取り、スクランブルして使用しました。それ以来、5 世紀以上にわたって生き残り、電子出版に飛躍しても本質的に変わっていません。
                    </p>
                </div>
            </div>
        </div>
</section>
```

左側の画像の CSS を追加しましょう:

```css
/* アバウトセクションの画像 CSS */
.imageAboutPage {
    width: 100%;
}
```

これでアバウトセクションが完成しました。コンテンツは必要に応じて変更できます。`mt-4` と `pt-4` クラスをコンテナクラスに追加し、上部のマージンとパディングを 1.5 rem に設定しています。

行には２つのカラムがあります。一つには `col-lg-4` クラスが割り当てられており、画像を表示し、大画面では左側のカラムの 4/12 を占めます。

次のカラムには `col-lg-8` クラスが割り当てられており、大画面では右側のカラムの 8/12 を占めます。中画面や小画面では、それぞれが重なって表示されます。以下の GIF をご覧ください：

![about](https://www.freecodecamp.org/news/content/images/2022/01/about.gif)

## サービスセクションの作り方

このセクションでは、ウェブサイトの訪問者を潜在的なクライアントへと転換するお手伝いをします。ここでは、具体的に提供するサービスについて説明し、自分の提供するサービスを絞り込む部分です。

それでは、このセクションのコードを追加し、以下に説明していきます:

```html
<!-- services section-->
    <section id="services">
        <div class="container">
            <h1 class="text-center">Services</h1>
            <div class="row">
                <div class="col-lg-4 mt-4">
                    <div class="card servicesText">
                        <div class="card-body">
                            <i class="fas servicesIcon fa-clock"></i>
                            <h4 class="card-title mt-3">Website Development</h4>
                            <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>
                <div class="col-lg-4 mt-4">
                    <div class="card servicesText">
                        <div class="card-body">
                            <i class='fas servicesIcon fa-layer-group'></i>
                            <h4 class="card-title mt-3">Website Design</h4>
                            <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card servicesText">
                        <div class="card-body">
                            <i class='far servicesIcon fa-check-circle'></i>
                            <h4 class="card-title mt-3">Website Deployment</h4>
                            <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4 mt-4">
                    <div class="card servicesText">
                        <div class="card-body">
                            <i class='fas servicesIcon fa-search'></i>
                            <h4 class="card-title mt-3">SEO</h4>
                            <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card servicesText">
                        <div class="card-body">
                            <i class='fas servicesIcon fa-shield-alt'></i>
                            <h4 class="card-title mt-3">DevOps</h4>
                            <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="card servicesText">
                        <div class="card-body">
                            <i class='fas servicesIcon fa-wrench'></i>
                            <h4 class="card-title mt-3">QA</h4>
                            <p class="card-text mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section>
```

このウェブサイトはウェブ開発者やデザイナーを対象としていますので、彼らが提供するサービスの一部を含めました。

ここでは、Bootstrap のカードを使ってサービスを表示しています。サービスセクションは 2 行 3 列で構成されています。幅が 992px 以上の大画面では、1 行に 3 つのカードが表示されます。992px 未満の画面では、1 行に 1 つのカードのみが表示されます。

Bootstrap のブレークポイントについてさらに知りたい方は、[こちら][21] をご参考ください。

CSS を使わずにサービスセクションを作成すると、以下のような見た目になります：

![Screenshot-from-2022-01-23-14-01-00](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-23-14-01-00.png)

では、CSS を追加して、アイコンのフォントサイズとカードの高さを増やし、ユーザーがカードにホバーしたときに色を追加しましょう。

```css
/* services section css */
.servicesText.card {
    height: 280px;
    cursor: pointer;
}
.servicesIcon {
    font-size: 36px;
    text-align: center;
    width: 100%;
}
.card-title {
    text-align: center;
}
.card:hover .servicesIcon {
    color: #008000;
}
.servicesText:hover {
    border: 1px solid #008000;
}
```

これでサービスセクションは次のようになります：

![services](https://www.freecodecamp.org/news/content/images/2022/01/services.gif)

## スクロール時に Navbar にダーク背景色を追加する方法

上の GIF をよく見ると、ページ全体で navbar が透過されており、読みやすさに問題があることがわかります。この問題を解決するために、JavaScript と CSS を少し書きます。スクロール時に navbar にダークな背景色を表示するために `navbarDark` クラスを追加します。

まずは script.js ファイルに次のコードを追加します：

```javascript
// スクロール時に navbarDark クラスを追加
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
```

次に、上記のコードを分解して説明します：

-   `header` は nav 要素の値を保持します。querySelector メソッドは CSS セレクタ（この場合は `.navbar`）に一致する最初の要素を返すためです。
-   `window.onscroll` はスクロールイベントが発生したときに発火します。
-   `window.scrollY` はドキュメントが縦方向にスクロールされたピクセル数を返し、その値が `top` という変数に代入されます。
-   `top` の値が 100 以上の場合、`header` に `navbarDark` クラスを追加します。

次に `navbarDark` クラス用の CSS を追加しましょう。style.css ファイルに次のコードを追加します：

```css
/* スクロール時に navbar に黒い背景色を表示 */
.navbarScroll.navbarDark {
    background-color: black;
}
```

これで navbar は次のようになります：

![navbar](https://www.freecodecamp.org/news/content/images/2022/01/navbar.gif)

## ポートフォリオセクションの作り方

このセクションには、あなたの最高の作品を掲載しましょう。閲覧者はあなたのスキルを確認でき、強力な過去の作品を示すことで、より多くのクライアントや採用担当者を引きつけることができます。したがって、このセクションには最高の作品だけを追加してください。

ポートフォリオプロジェクトを表示するために Bootstrap カードを使用します。2 行に分け、それぞれの行に 3 列のカードを配置します。

ポートフォリオセクションのコードは以下の通りです：

```html
<!-- portfolio section-->
    <section id="portfolio">
        <div class="container mt-3">
            <h1 class="text-center">Portfolio</h1>
            <div class="row">
                <div class="col-lg-4 mt-4">
                    <div class="カード">
                        <img class="card-img-top" src="images/portfolioImage1.jpg" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">YouTube Clone</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="カード portfolioContent">
                        <img class="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">Quiz App</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 mt-4">
                    <div class="カード portfolioContent">
                        <img class="card-img-top" src="images/portfolioImage3.jpg" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">Product Landing Page</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-lg-4 mt-4">
                    <div class="カード portfolioContent">
                        <img class="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">Messaging Service</h4>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <div class="text-center">
                                <a href="#" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
```

```html
<div class="col-lg-4 mt-4">
    <div class="card portfolioContent">
        <img class="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">Blog App</h4>
            <p class="card-text">印刷と組版業界のダミーテキストである Lorem Ipsum の単なるサンプルテキストです。</p>
            <div class="text-center">
                <a href="#" class="btn btn-success">リンク</a>
            </div>
        </div>
    </div>
</div>
</div>
</section>
```

各カードには画像、タイトル、説明文、およびプロジェクトへのリンクが含まれています。大きな画面（幅 992px 以上）では 3 つのカードが 1 行に表示されますが、幅 992px 未満の画面では 1 行に 1 つのカードのみが表示されます。

以下の GIF はポートフォリオセクションの現在の見た目です：

![portfolio](https://www.freecodecamp.org/news/content/images/2022/01/portfolio.gif)

ポートフォリオ

## コンタクトセクションの作成方法

このセクションには、訪問者があなたに連絡できるように連絡先情報を記載する必要があります。

私たちのコンタクトセクションは、1 行に 2 つのカラムを含むレイアウトになります。一方は Google マップで位置情報を表示し、もう一方はコンタクトフォームを表示します。

Google マップを埋め込むには、次の手順に従う必要があります：

-   [https://www.embed-map.com][22] にアクセス
-   あなたの位置情報を入力
-   **Generate HTML Code** ボタンをクリックして Google マップの HTML コードを取得

私たちのコードは次のようになります。コンタクトフォームも含まれています：

```html
<!-- contact section-->
    <section id="contact">
        <div class="container mt-3 contactContent">
            <h1 class="text-center">Contact Me</h1>

            <div class="row mt-4">
                <div class="col-lg-6">
                    <!-- google map を編集するには https://www.embed-map.com にアクセスし、位置情報を入力、html コードを生成してコピー -->
                    <div style="max-width:100%;overflow:hidden;color:red;width:500px;height:500px;">
                        <div id="embedmap-canvas" style="height:100%; width:100%;max-width:100%;">
                            <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=new+york&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                            </iframe>
                        </div>
                        <a class="googlemaps-html" href="https://www.embed-map.com" id="get-data-forembedmap">https://www.embed-map.com</a>
                        <style>#embedmap-canvas img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}
                        </style>
                    </div>
                </div>

                <div class="col-lg-6">
                    <!-- フォームフィールド -->
                    <form>
                        <input type="text" class="form-control form-control-lg" placeholder="Name">
                        <input type="email" class="form-control mt-3" placeholder="Email">
                        <input type="text" class="form-control mt-3" placeholder="Subject">
                        <div class="mb-3 mt-3">
                            <textarea class="form-control" rows="5" id="comment" name="text" placeholder="Project Details"></textarea>
                        </div>
                    </form>
                    <button type="button" class="btn btn-success mt-3">Contact Me</button>
                    
                </div>

            </div>
        </div>
    </section>
```

最初のカラムは Google マップを表示し、次のカラムはコンタクトフォームを表示します。

フォームには、名前、メールアドレス、件名、およびプロジェクトの詳細という 4 つの異なるフォームフィールドがあります。フォーム自体はリクエストを送信しません。バックエンド言語を使って接続する必要があります。または、[Netlify Form][23] や [Formspree form][24] を使用することもできます。

コンタクトセクションの見た目は次のようになります：

![Screenshot-from-2022-01-25-11-31-56](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-25-11-31-56.png)

コンタクトセクション

## フッターセクションの作成方法

この記事の最後のセクション、フッターセクションに移りましょう。index.html ファイルには既に Font Awesome CDN のリンクが追加されています。

フッターでは、Font Awesome のアイコンを使ってソーシャルメディアへのリンクを追加します。

```html
 <!-- footer section-->
    <footer id="footer">
        <div class="container-fluid">
            <!-- social media icons -->
            <div class="social-icons mt-4">
                <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.twitch.tv/" target="_blank"><i class="fab fa-twitch"></i></a>
            </div>
        </div>
    </footer>
```
```

![スクリーンショット 2022-01-23 17:56:37](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-23-17-56-37.png)

スタイルが適用されていないフッター

では、以下のコードを使ってフッターにスタイリングを追加しましょう。

```css
/* ソーシャルメディアアイコンのスタイリング */
.social-icons {
    font-size: 36px;
    cursor: pointer;
}
.fa-facebook:hover,.fa-instagram:hover,.fa-twitter:hover,.fa-linkedin:hover, .fa-twitch:hover {
    color: #008000;
}
.fab {
    color: #000000;
}
/* フッターのスタイリング */
#footer {
    background-color: #808080;
    text-align: center;
}
```

これでアイコンが中央に表示され、ホバーした際のエフェクトも確認できるようになりました。以下の GIF でその動作を確認できます。

![フッター](https://www.freecodecamp.org/news/content/images/2022/01/footer.gif)

フッター

## 仕上げのタッチ

すべてのセクション間にスペースを追加するため、さらにスタイリングを加えましょう。

```css
/* すべてのセクションの間にスペースを追加 */
#about, #services, #portfolio, #contact {
    margin-top: 4rem;
    padding-top: 4rem;
}
#contact {
    padding-bottom: 4rem;
}
```

これで、ポートフォリオサイトが完成しました。

このプロジェクトのフルソースコードは [こちら][25] で確認できます。

## まとめ

このようにして、HTML、CSS、JavaScript、および Bootstrap 5 を使用して完全なレスポンシブポートフォリオウェブサイトを作成することができます。

このブログ記事では、ウェブ開発者およびデザイナーにとってのポートフォリオサイト作成の利点をいくつか見てきました。サイト全体を異なるセクションに分け、それぞれを個別に詳細に説明しながら構築しました。

このサイトは皆さんの用途に応じてカスタマイズすることができます。

この記事が役に立てば幸いです。

コーディングを楽しんでください！

ウェブ開発に関する日々のコンテンツについては [Twitter][26] で私をフォローしてください。

[1]: #benefits-of-having-a-portfolio-website
[2]: #what-is-bootstrap
[3]: #folder-structure
[4]: #how-to-add-a-navigation-menu-to-your-portfolio
[5]: #how-to-add-a-hero-header-to-the-portfolio
[6]: #how-to-make-the-about-section
[7]: #how-to-make-the-services-section
[8]: #how-to-add-dark-background-color-to-navbar-on-page-scroll
[9]: #how-to-build-the-portfolio-section
[10]: #how-to-build-the-contact-section
[11]: #how-to-build-the-footer-section
[12]: #final-touches
[13]: #conclusion
[14]: https://getbootstrap.com/docs/5.0/getting-started/introduction/
[15]: https://github.com/SampurnaC/portfolio_website_fcc/tree/portfolio-starter-files
[16]: https://brad-portfolio.netlify.app/
[17]: https://fontawesome.com/
[18]: https://getbootstrap.com/docs/5.0/components/navbar/
[19]: #how-to-make-the-services-section
[20]: https://www.freecodecamp.org/news/web-design-niche/
[21]: https://getbootstrap.com/docs/5.0/layout/breakpoints/
[22]: https://www.embed-map.com/
[23]: https://www.netlify.com/products/forms/
[24]: https://formspree.io/
[25]: https://github.com/SampurnaC/portfolio_website_fcc/tree/master
[26]: https://twitter.com/saam_codes

