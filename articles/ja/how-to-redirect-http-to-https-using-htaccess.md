---
title: .htaccess を使用して HTTP から HTTPS へリダイレクトする方法
date: 2024-08-23T18:09:51.754Z
author: Bolaji Ayodeji
authorURL: https://www.freecodecamp.org/news/author/bolajiayodeji/
originalURL: https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/
posteditor: ""
proofreader: ""
---

Chrome や Firefox は、[SSL 証明書][1]を持たないサイトに「安全でない」という警告を表示し始めました。SSL がない場合、訪問者にとってあなたのウェブサイトは安全でないと判断されます。したがって、安全性、アクセスビリティ、または PCI 準拠の理由から、SSL 暗号化接続を使用することが重要です。HTTP から HTTPS へリダイレクトすることがますます重要になっています。

<!-- more -->

![0*wUTFJrRSM2vh1H7v](https://cdn-media-1.freecodecamp.org/images/0*wUTFJrRSM2vh1H7v.jpg)

### SSL とは？

SSL（Secure Sockets Layer）は、オンライン通信において Web サーバーとブラウザ間で暗号化リンクを確立するための標準的なセキュリティプロトコルです。

SSL 技術を利用することで、Web サーバーとブラウザ間で送信されるすべてのデータが暗号化されたままになります。

**SSL 証明書**は、SSL 接続を作成するために必要です。Web サーバーで SSL を有効化するときに、あなたの Web サイトと会社の情報をすべて提供する必要があります。これにより、プライベートキーとパブリックキーの 2 つの暗号鍵が生成されます。

[_詳細: SSL が不可欠な理由とは？_][2]

ウェブトラフィックを HTTPS に強制的にリダイレクトするためには、**.htaccess ファイル**のコードを編集する必要があります。

HTTP から HTTPS へリダイレクトする前に、.htaccess ファイルの編集方法を確認しましょう。既に知っている方はリダイレクト手順に進んでください。

### .htaccess ファイルの編集

.htaccess ファイルには、サーバーが特定のシナリオでどのように動作するかを指示する命令が含まれており、Web サイトの機能に直接影響を与えます。.htaccess ファイルで一般的な指令には以下のものがあります：

- リダイレクト
- URL の書き換え

**.htaccess ファイルを編集する方法:**

1. コンピュータでファイルを編集し、FTP を使用してサーバーにアップロードする。
2. リモートでファイルを編集できる FTP プログラムの「編集」モードを使用する。
3. テキストエディタと SSH を使用してファイルを編集する。
4. **cPanel** のファイルマネージャーを使用してファイルを編集する。

### cPanel ファイルマネージャーで .htaccess を編集

**注:** 万一のために、ウェブサイトのバックアップを作成してください。

1. cPanel にログインします。
2. ファイル > ファイルマネージャー > ドキュメントルートのドメイン名を選択します。
3. 「隠しファイル（ドットファイル）を表示」をチェックします。
4. 「Go」をクリックします。
5. 新しいタブやウィンドウが開いたら、.htaccess ファイルを探します。
6. .htaccess ファイルを右クリックし、メニューから「コード編集」を選択します。
7. エンコードに関するダイアログボックスが表示される場合は、「編集」ボタンをクリックして続行します。
8. ファイルを編集します。
9. 編集が完了したら「変更を保存」します。
10. ウェブサイトをテストして、正しく変更が適用されたか確認します。エラーが発生した場合は、以前のバージョンに戻してやり直します。
11. 完了したら、「閉じる」をクリックしてウィンドウを閉じます。

### HTTP から HTTPS へのリダイレクト

#### 1\. すべてのウェブトラフィックをリダイレクト

既存のコードが .htaccess に含まれている場合は、以下を追加してください：

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

#### 2\. 特定のドメインのみリダイレクト

特定のドメインを HTTPS にリダイレクトする場合、以下を追加してください：

```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain\.com [NC]
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

#### 3\. 特定のフォルダのみリダイレクト

特定のフォルダを HTTPS にリダイレクトする場合、以下を追加してください：

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteCond %{REQUEST_URI} folder
RewriteRule ^(.*)$ https://www.yourdomain.com/folder/$1 [R,L]
```

注: 必要に応じて _`“yourdomain”`_ を実際のドメイン名に置き換えてください。また、フォルダの場合は _`/folder`_ を実際のフォルダ名に置き換えてください。

この記事が参考になったと思いますか？他の人にも HTTPS への移行を手助けするために共有しましょう。

![0*P6EKtlMMzyIXNRMw](https://cdn-media-1.freecodecamp.org/images/0*P6EKtlMMzyIXNRMw.png)

[1]: https://www.instantssl.com/ssl.html
[2]: https://www.sslrenewals.com/blog/why-is-ssl-important-benefits-of-using-ssl-certificate

