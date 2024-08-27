---
title: HTML, CSS, JavaScript, Bootstrap 5 でポートフォリオサイトを作成する方法
date: 2024-08-27T06:20:49.446Z
author: Sampurna Chapagain
authorURL: https://www.freecodecamp.org/news/author/sampurna/
originalURL: https://www.freecodecamp.org/news/how-to-create-a-portfolio-website-using-html-css-javascript-and-bootstrap/
posteditor: ""
proofreader: ""
---

ウェブデベロッパーやウェブデザイナーの方にとって、ポートフォリオサイトを持つことは非常に重要です。自己紹介を提供し、自分のスキルや経験を最も効果的にアピールすることができます。

<!-- more -->

この記事では、ポートフォリオサイトを作成することの利点について解説します。その後、HTML、CSS、JavaScript、Bootstrap 5 を使用して、美しくレスポンシブなポートフォリオサイトを作成する手順をご紹介します。

### HTML、CSS、JS、Bootstrap 5 を使ってポートフォリオサイトを作成するためのインタラクティブなスクラムはこちらです:

<iframe src="https://scrimba.com/scrim/co27f4302abab219aea652cf7?embed=freecodecamp,mini-header" width="100%" height="480" title="Embedded content" loading="lazy"></iframe>

## 目次

-   [ポートフォリオサイトを持つ利点][1]
-   [Bootstrap とは][2]?
-   [フォルダ構成][3]
-   [ナビゲーションメニューの追加方法][4]
-   [ヒーローヘッダーの追加方法][5]
-   [自己紹介セクションの作成方法][6]
-   [サービスセクションの作成方法][7]
-   [ページスクロール時のナビバーにダーク背景色を設定する方法][8]
-   [ポートフォリオセクションの作成方法][9]
-   [コンタクトセクションの作成方法][10]
-   [フッターセクションの作成方法][11]
-   [最終仕上げの追加][12]
-   [まとめ][13]

## ポートフォリオサイトを持つ利点

ポートフォリオサイトを持つことには、以下のような利点があります:

-   自分のスキルや経験をアピールできるプラットフォームを提供する
-   自分の個性を示すことができる
-   採用担当者が自分を見つけやすくなる
-   Googleなどの検索エンジンで簡単に検索される

## Bootstrap とは

Bootstrap は、レスポンシブでモバイルフレンドリーなウェブサイトを開発するための人気のあるフロントエンド CSS フレームワークです。最新バージョンは Bootstrap 5 です。Bootstrap 5 の公式ドキュメントは[こちら][14]で確認できます。

## フォルダ構成

ここから、ポートフォリオサイトの作成に取りかかりましょう。

まずは、フォルダ構成を作成します。プロジェクトのスターターファイルは [GitHub][15] で入手できます。また、このプロジェクトのライブデモは[こちら][16]からご覧いただけます。

![Screenshot-from-2022-01-22-19-10-25](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-22-19-10-25.png)

プロジェクトのフォルダ構成

フォルダ構成は、index.html、style.css、script.js ファイルと images フォルダで構成されています。CSS はすべて style.css ファイルに、JavaScript は script.js ファイルに記述します。

index.html ファイルには、Bootstrap CDN、[font awesome kit][17]、外部スタイルシートおよび JavaScript へのリンクを含む HTML ボイラープレートコードが記載されています。

ここでは、script.js ファイルはすべての HTML コードを読み込んだ後に読み込まれます。

## ナビゲーションメニューの追加方法

それでは、プロジェクトにナビゲーションメニューを追加していきましょう。これにより、訪問者が探している情報を見つけやすくなります。

ナビバーをページのトップに固定するために、Bootstrap の `fixed-top` クラスを nav 要素に使用します。また、`navbar-brand` クラスには、ブランドとして名前を保持します。

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

ナビバーの特徴には以下の点が含まれます:

-   六つのリンク: Home、About、Services、Portfolio、Contact、および Footer
-   背景は透明です。後でページスクロール時にダークな背景を追加します。
-   小型デバイスでトグル表示します

Bootstrap 5 のナビバー機能に関する詳細は[こちら][18]で確認できます。

## ポートフォリオにヒーローヘッダーを追加する方法

今回は、中央にテキストを配置したヒーロー画像を追加します。ヒーロー画像とは、ウェブデザインの用語で、企業や個人のメイン目標を表示する高品質な全幅画像や代表的な写真、その他の目を引く要素を指します。これによってユーザーをサイトに引き付ける効果があります。

```html
 <!-- メインバナー -->
    <section class="bgimage" id="home">
        <div class="container-fluid">
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 class="hero_title">Hi, it's me Brad</h2>
                <p class="hero_desc">I am a professional freelancer in New York City</p>
            </div>
            </div>
        </div>
    </section>
```

次に、上記のコードに対応する CSS を style.css ファイルに追加しましょう:

```css
/* ヒーロー背景画像 */
.bgimage {
    height:100vh;
    background: url('images/heroImage.jpeg');
    background-size:cover;
    position:relative;
}
/* ヒーロー画像上のテキストCSS */
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

ここでは、セクションに `bgimage` という ID を持たせており、これが全幅のヒーロー画像を表示する役割を果たします。また、上記の CSS を使用して背景画像の中央にテキストを表示します。

これがナビゲーションバーとヒーローセクションを含んだサイトの現在の見た目です:

![Screenshot-from-2022-01-25-10-13-25](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-25-10-13-25.png)

ナビゲーションバー付きのヒーロー画像

## アバウトセクションの作り方

アバウトページには、貴方や貴方のバックグラウンドについての重要な情報を記載します。訪問者はこのページを通じて、貴方について知ることができます。

ここでは、左側に画像を配置し、右側には自己紹介文を追加します。以下のコードで説明します:

```html
<!-- アバウトセクション -->
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src="images/about.jpeg" class= "imageAboutPage" alt="">
                </div>

                <div class="col-lg-8">
                    <p> Lorem Ipsumは1500年代以来、業界標準のダミーテキストです。未知のプリンターがタイプの見本帳を作成するために型を組み合わせてスクランブルしました。それは5世紀以上の間生き残り、電子組版への移行も経て、本質的に変わらずに残っています。
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
                        <p> Lorem Ipsumは1500年代以来、業界標準のダミーテキストです。未知のプリンターがタイプの見本帳を作成するために型を組み合わせてスクランブルしました。それは5世紀以上の間生き残り、電子組版への移行も経て、本質的に変わらずに残っています。
                            Lorem Ipsumは1500年代以来、業界標準のダミーテキストです。未知のプリンターがタイプの見本帳を作成するために型を組み合わせてスクランブルしました。それは5世紀以上の間生き残り、電子組版への移行も経て、本質的に変わらずに残っています。
                        </p>
                    </div>
                </div>
            </div>
    </section>
```

左側の画像に対して CSS を追加しましょう:

```css
/* アバウトセクションの画像CSS */
.imageAboutPage {
    width: 100%;
}
```

これでアバウトセクションが作成されます。コンテンツは使用例に応じて変更できます。`mt-4` と `pt-4` のクラスを container クラスに追加しており、これによってマージントップとパディングトップが 1.5rem に設定されます。

行は二つのカラムで構成されています。`col-lg-4` クラスを持つカラムが画像を表示し、大画面では左側の 4 部グリッドを占有します。

もう一方のカラムには `col-lg-8` クラスが割り当てられ、大画面では右側の 8 部グリッドを占有します。中小画面では、これらのカラムが重なることになります。その様子は以下の GIF から確認できます:

![about](https://www.freecodecamp.org/news/content/images/2022/01/about.gif)

## サービスセクションの作り方

このセクションは、ウェブサイトの訪問者を潜在的なクライアントに変えるために重要です。ここでは、あなたが提供する具体的なサービスを説明し、提供するサービスを[ニッチ化][20]します。

それでは、このセクションのコードを追加し、説明していきましょう:

```html
<!-- サービスセクション -->
<section id="services">
    <div class="container">
        <h1 class="text-center">Services</h1>
        <div class="row">
            <div class="col-lg-4 mt-4">
                <div class="card servicesText">
                    <div class="card-body">
                        <i class="fas servicesIcon fa-clock"></i>
                        <h4 class="card-title mt-3">Website Development</h4>
                        <p class="card-text mt-3">カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                            カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                        </p>
                    </div>
                </div>  
            </div>
            <div class="col-lg-4 mt-4">
                <div class="card servicesText">
                    <div class="card-body">
                        <i class='fas servicesIcon fa-layer-group'></i>
                        <h4 class="card-title mt-3">Website Design</h4>
                        <p class="card-text mt-3">カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                            カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                        </p>
                    </div>
                </div>  
            </div>

            <div class="col-lg-4 mt-4">
                <div class="card servicesText">
                    <div class="card-body">
                        <i class='far servicesIcon fa-check-circle'></i>
                        <h4 class="card-title mt-3">Website Deployment</h4>
                        <p class="card-text mt-3">カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                            カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
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
                        <p class="card-text mt-3">カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                            カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                        </p>
                    </div>
                </div>  
            </div>

            <div class="col-lg-4 mt-4">
                <div class="card servicesText">
                    <div class="card-body">
                        <i class='fas servicesIcon fa-shield-alt'></i>
                        <h4 class="card-title mt-3">DevOps</h4>
                        <p class="card-text mt-3">カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                            カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                        </p>
                    </div>
                </div>  
            </div>

            <div class="col-lg-4 mt-4">
                <div class="card servicesText">
                    <div class="card-body">
                        <i class='fas servicesIcon fa-wrench'></i>
                        <h4 class="card-title mt-3">QA</h4>
                        <p class="card-text mt-3">カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                            カードのタイトルに基づくいくつかの簡単な例文を構築し、カードのコンテンツの大部分を作成します。
                        </p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</section>
```

このウェブサイトはウェブ開発者やデザイナー向けなので、ウェブ開発者やデザイナーが提供する可能性のあるサービスを含めました。

サービスセクションでは、Bootstrap のカードを使用してサービスを表示しています。私たちのサービスセクションは 2 行 3 列構成で、幅が 992px 以上の大画面では 1 行に 3 枚のカードが表示され、幅が 992px 未満の画面では 1 行に 1 枚のカードが表示されます。

Bootstrap のブレークポイントについての詳細は[こちら][21]をご覧ください。

CSS を使わない場合、サービス セクションは以下のように表示されます :

![Screenshot-from-2022-01-23-14-01-00](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-23-14-01-00.png)

では、フォントアイコンのサイズとカードの高さを増やし、ユーザーがカードにホバーしたときに色が変わるように CSS を追加しましょう。

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

これでサービス セクションは次のように表示されます :

![services](https://www.freecodecamp.org/news/content/images/2022/01/services.gif)

## ページスクロール時にナビバーに暗い背景色を追加する方法

上の GIF をよく見ると、ページ全体でナビバーが透明なため、読みにくいことがわかります。では、この問題を解決しましょう。

問題を解決するために JavaScript と CSS を使用します。ページスクロール時にナビバーに暗い背景色を表示するために `navbarDark` クラスを追加します。

そのためには、script.js ファイルに以下のコードを追加します:

```javascript
// ナビバーのスクロール時に navbarDark クラスを追加
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

上記のコードを詳しく見てみましょう:

- ヘッダーは nav 要素の値を持ちます。querySelector メソッドは CSS セレクタ (ここでは `.navbar`) に一致する最初の要素を返します。
- `window.onscroll` はスクロールイベントが発生したときに実行されます。
- `window.scrollY` はドキュメントが縦方向にスクロールしたピクセル数を返し、その値が `top` という変数に割り当てられます。
- `top` の値が 100 以上の場合、ヘッダーに `navbarDark` クラスが追加されます。

次に、`navbarDark` クラスの CSS を追加します。style.css ファイルに次のコードを追加します:

```css
/* ナビバーのスクロール時に背景色を黒に表示 */
.navbarScroll.navbarDark {
    background-color: black;
}
```

これでナビバーは次のように表示されます:

![navbar](https://www.freecodecamp.org/news/content/images/2022/01/navbar.gif)

## ポートフォリオセクションの作成方法

このセクションには、あなたの最良の作品を含めます。人々はあなたが何ができるかを理解し、強力な過去の作品を披露することで、より多くの潜在的なクライアントや採用担当者を引き付けることができます。したがって、このセクションには最高の作品だけを追加しましょう。

ポートフォリオプロジェクトを表示するために Bootstrap カードを使用します。2 行があり、それぞれの行には 3 列のカードがあります。

ポートフォリオセクションのコードは次のようになります:

```html
<!-- ポートフォリオセクション-->
<section id="portfolio">
    <div class="container mt-3">
        <h1 class="text-center">Portfolio</h1>
        <div class="row">
            <div class="col-lg-4 mt-4">
                <div class="card">
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
                <div class="card portfolioContent">
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
                <div class="card portfolioContent">
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
                <div class="card portfolioContent">
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

<div class="col-lg-4 mt-4">
    <div class="card portfolioContent">
        <img class="card-img-top" src="images/portfolioImage4.jpg" alt="Card image" style="width:100%">
        <div class="card-body">
            <h4 class="card-title">Blog App</h4>
            <p class="card-text">Lorem Ipsum は印刷業界におけるダミーテキストです。</p>
            <div class="text-center">
                <a href="#" class="btn btn-success">リンク</a>
            </div>
        </div>
    </div>
</div>
</div>
</section>
```

各カードには画像、タイトル、説明、そしてプロジェクトへのリンクが含まれています。大きな画面（幅 992px 以上）では 3 枚のカードが 1 行に表示されますが、幅が 992px 未満の画面では 1 行に 1 枚のカードが表示されます。

以下の GIF は、ポートフォリオセクションの現在の見た目です:

![portfolio](https://www.freecodecamp.org/news/content/images/2022/01/portfolio.gif)

ポートフォリオ

## コンテントセクションを作成する方法

このセクションには、訪問者があなたに連絡を取りたいときのための情報を含めるべきです。

私たちのコンテントセクションは、1 行に 2 つのカラムを含んでいます: ひとつは Google マップの位置情報、もうひとつは連絡フォームです。

Google マップを埋め込むためには、以下の手順に従ってください:

- [https://www.embed-map.com][22] にアクセス
- あなたの所在地を入力
- **Generate HTML Code** ボタンをクリックし、Google マップの HTML コードを取得

次に、連絡フォームを含むコードがこちらです:

```html
<!-- contact section-->
<section id="contact">
    <div class="container mt-3 contactContent">
        <h1 class="text-center">Contact Me</h1>

        <div class="row mt-4">
            <div class="col-lg-6">
                <!-- to edit google map goto https://www.embed-map.com type your location, generate html code and copy the html  -->
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
                <!-- form fields -->
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

最初のカラムには Google マップが表示され、次のカラムには連絡フォームが表示されます。

フォームには 4 つの異なるフィールドがあります: 名前、メールアドレス、件名、プロジェクトの詳細。フォーム自体はリクエストを送信しません。バックエンドの言語と接続する必要があります。または、[Netlify Form][23] または [Formspree form][24] を使用することもできます。

このようにコンテントセクションが表示されます:

![Screenshot-from-2022-01-25-11-31-56](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-25-11-31-56.png)

コンテントセクション

## フッターセクションを作成する方法

この記事の最後のセクション、フッターセクションに進みましょう。index.html ファイルに Font Awesome CDN へのリンクを追加済みです。

フッターでは、Font Awesome アイコンを通じてソーシャルメディアへのリンクを追加します。

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

これでフッターセクションの完成です。

![Screenshot-from-2022-01-23-17-56-37](https://www.freecodecamp.org/news/content/images/2022/01/Screenshot-from-2022-01-23-17-56-37.png)

スタイリングがない状態のフッター

では、このコードを使ってフッターにスタイリングを追加しましょう。

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

上記のコードを追加すると、アイコンが中央に表示され、ホバーエフェクトも適用されます。以下の GIF ファイルでその効果を確認できます。

![footer](https://www.freecodecamp.org/news/content/images/2022/01/footer.gif)

フッター

## 最後の仕上げ

各セクションの間に適度なスペースを追加するために、もう少しスタイリングを追加します。

```css
/* 各セクションのスペース */
#about, #services, #portfolio, #contact {
    margin-top: 4rem;
    padding-top: 4rem;
}
#contact {
    padding-bottom: 4rem;
}
```

これでポートフォリオサイトが完成しました。

このプロジェクトの全ソースコードは [こちら][25] で確認できます。

## 結論

以上が HTML、CSS、JavaScript、および Bootstrap 5 を使用して完全なレスポンシブポートフォリオサイトを作成する方法です。

このブログ記事では、ウェブ開発者やデザイナーにとってポートフォリオサイトを作成する利点について説明しました。サイト全体をさまざまなセクションに分け、それぞれを個別に構築しながら解説しました。

このサイトは、それぞれの用途に合わせてカスタマイズすることが可能です。

この記事が役に立ったと思います。

ハッピーコーディング！

Web 開発に関する日々のコンテンツは [Twitter][26] でチェックしてください。

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

