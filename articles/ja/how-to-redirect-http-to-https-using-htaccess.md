---
title: .htaccess を使用して HTTP から HTTPS へリダイレクトする方法
date: 2024-08-23T18:09:51.754Z
author: Bolaji Ayodeji
authorURL: https://www.freecodecamp.org/news/author/bolajiayodeji/
originalURL: https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/
posteditor: まつだようこ
proofreader: ""
---

Chrome や Firefox は、[SSL 証明書][1]がないサイトに「安全でない」という警告を表示するようになりました。つまり、訪問者から見ても、あなたのウェブサイトが安全でないことが一目でわかります。安全性、アクセシビリティ、あるいは PCI 準拠などの理由からも、SSL 暗号化接続を使用することは不可欠です。HTTP から HTTPS へリダイレクトすることがますます重要になっています。

<!-- more -->

![0*wUTFJrRSM2vh1H7v](https://cdn-media-1.freecodecamp.org/images/0*wUTFJrRSM2vh1H7v.jpg)

### SSL とは？

SSL (Secure Sockets Layer) は、オンライン通信において、ウェブサーバーとブラウザの間で暗号化リンクを確立するための標準的なセキュリティプロトコルです。

SSL 技術を利用することで、ウェブサーバーとブラウザの間で送信されるすべてのデータが暗号化されます。

SSL 接続を作成するためには **SSL 証明書**が必要です。ウェブサーバーで SSL を有効化する際には、あなたの ウェブサイトと会社に関するさまざまな情報を提供する必要があります。その後、秘密鍵と公開鍵の 2 つの暗号鍵が生成されます。

[_さらに詳しく: SSL が不可欠な理由とは？(英語)_][2]

ウェブトラフィックを強制的に HTTPS にリダイレクトするには、**.htaccess ファイル**のコードを編集します。

HTTP から HTTPS へリダイレクトする手順の前に、.htaccess ファイルの編集方法を確認しましょう。既にご存じの方はリダイレクト手順に進んでください。

### .htaccess ファイルの編集

.htaccess ファイルには、サーバーが特定の状況でどのように動作するべきかを指示する命令が含まれており、ウェブサイトの機能に直接影響を与えます。.htaccess ファイルの一般的な命令に以下のものがあります:

- リダイレクト
- URL の書き換え

**.htaccess ファイルを編集するさまざまな方法:**

1. ローカルのコンピューターでファイルを編集し、FTP を使用してサーバーにアップロードする。
2. リモートでファイルを編集できる FTP プログラムで「編集」モードを使用する。
3. テキストエディタと SSH を使用してファイルを編集する。
4. **cPanel** のファイルマネージャーを使用してファイルを編集する。

### cPanel ファイルマネージャーで .htaccess を編集する方法

**注:** 万一のために、ウェブサイトのバックアップを作成してください。

1. cPanel にログインする。
2. 「Files」＞「File Manager」＞「Document Root for:」を選択する。
3. アクセスしたいドメイン名を選択する。
4. 「Show Hidden Files (dotfiles)」にチェックを入れる。
5. 「Go」をクリックする。
6. 新しいタブまたはウィンドウが開いたら、.htaccess ファイルを探す。
7. .htaccess ファイルを右クリックし、メニューから「Code Edit」を選択する。
8. エンコーディングに関するダイアログボックスが表示された場合は、「Edit」ボタンをクリックして続行する。
9. ファイルを編集する。
10. 編集が完了したら「Save Changes」をクリック。
11. ウェブサイトをテストして、正しく変更が適用されたか確認する。エラーが発生した場合は、以前のバージョンを復元してやり直す。
12. 完了したら、「閉じる」をクリックしてウィンドウを閉じる。

### HTTP から HTTPS へのリダイレクト

#### 1\. すべてのウェブトラフィックをリダイレクト

.htaccess に既存のコードがある場合、以下を追加してください:

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

#### 2\. 特定のドメインのみリダイレクト

特定のドメインを HTTPS にリダイレクトする場合、以下を追加してください:

```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain\.com [NC]
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

#### 3\. 特定のフォルダのみリダイレクト

特定のフォルダのみを対象に HTTPS にリダイレクトする場合、以下を追加してください:

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteCond %{REQUEST_URI} folder
RewriteRule ^(.*)$ https://www.yourdomain.com/folder/$1 [R,L]
```

注: _`yourdomain`_ を実際のドメイン名に置き換えてください。また、フォルダ (ディレクトリ) についても _`/folder`_ を実際のフォルダ名に置き換えてください。

この記事が参考になりましたか？周りの人もスムーズに HTTPS に移行できるようにシェアしてください。

![0*P6EKtlMMzyIXNRMw](https://cdn-media-1.freecodecamp.org/images/0*P6EKtlMMzyIXNRMw.png)

[1]: https://www.instantssl.com/ssl.html
[2]: https://www.sslrenewals.com/blog/why-is-ssl-important-benefits-of-using-ssl-certificate

