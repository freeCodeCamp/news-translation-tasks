---
title: Visual Studio Code で C および C++ コードを記述して実行する方法
date: 2024-10-18T11:32:32.141Z
author: Md. Fahim Bin Amin
authorURL: https://www.freecodecamp.org/news/author/FahimFBA/
originalURL: https://www.freecodecamp.org/news/how-to-write-and-run-c-cpp-code-on-visual-studio-code/
posteditor: ""
proofreader: ""
---

Visual Studio Code (略して VS Code) は、非常に普及しているテキストエディタ兼 IDE (統合開発環境) です。多くの拡張機能を利用することで、VS Code を IDE のように強力にすることができます。

<!-- more -->

最初の C または C++ コードを Visual Studio Code で実行する前に、使用しているオペレーティングシステムに基づいてセットアップするプロセスを説明します。

## C および C++ コンパイラ

C または C++ コードを実行するためには、有効な C/C++ コンパイラがコンピュータにインストールされている必要があります。Linux オペレーティングシステムを使用している場合、高い確率でシステムにすでにインストールされていますが、正しくインストールされていることを確認する必要があります。

システムにコンパイラ (GCC/G++/MinGW) がインストールされているかどうかを確認するには、まずコンパイラのバージョンを確認します。

端末を開いて `gcc --version` および `g++ --version` を使用します。バージョン番号が表示されれば、コンパイラはシステムにインストールされています。

これらのコマンドを使用して、Windows、Linux、または macOS ベースのオペレーティングシステムでバージョンを確認できます。

端末で GCC または G++ に関する情報が何も返されない場合は、コンパイラを正しくインストールする必要があります。

最も普及している Windows オペレーティングシステムを使用している場合、freeCodeCamp に詳細な手順を示した記事を書いています。記事全体を最初に読むことをお勧めします。完全なサポートとしてビデオも含まれています。

[Embedded content][1]

別のオペレーティングシステムを使用していて、コンパイラがインストールされていない場合は、先にインストールをしてください。

## VS Code または VS Code Insiders のインストール方法

Visual Studio Code は公式ウェブサイトから直接ダウンロードする必要があります: [https://code.visualstudio.com/][2]。

希望する場合は、VS Code Insiders もインストールできます。同じ手順が適用されます。

Visual Studio Code Insiders は、Visual Studio Code の "Insiders" ビルドで、最新の機能が日々提供されます。VS Code は安定したリリースであり、VS Code Insiders はそのインサイダーズリリースと考えることができます。

最新の更新を即座に体験したい場合は、Visual Studio Code Insiders を試すこともできます (筆者も使用しています)。VS Code Insiders をダウンロードするには、こちら: [https://code.visualstudio.com/insiders/][3] を訪れてください。

必ずお使いのオペレーティングシステムに合ったファイルをダウンロードしてください。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-163.png) _**ダウンロードページ: VS Code**_

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-164.png) _**ダウンロードページ: VS Code Insiders**_

インストール手順は非常に基本的です。順を追ってすべての手順を示します。ここでは VS Code Insiders のインストールプロセスを示しますが、VS Code でもまったく同じです。

"I accept the agreement" ボックスをクリックし、**Next** をクリックしてください。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-165.png) _**契約を承諾し、次へ**_

そのままで進めてください。何も変更しないでください。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-168.png) _**次へをクリック**_

**Next** をクリック。再度、**Next** をクリック。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-170.png) _**次へをクリック**_

すべてのボックスにチェックマーク (✔) を入れます。それから **Next** をクリックします。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-171.png) _**すべてのボックスをチェックし、次へをクリック**_

**Install** をクリック。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-172.png) _**インストールをクリック**_

インストールが完了するまで少し時間がかかるかもしれません。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-173.png) _**完了まで待つ...**_

**Finish** をクリック。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-175.png) _**完了をクリック**_

おめでとうございます - システムに VS Code/VS Code Insiders を無事にインストールできました。乾杯！ 🥂

## C および C++ コードのために VS Code/VS Code Insiders を準備する方法

まず初めに、VS Code または VS Code Insiders を開きます。

拡張機能タブに移動し、「C」または「C++」を検索し、Microsoft が認証済みの最初のものをインストールします。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-178.png) _**C/C++ 拡張機能をインストール**_

また、**C/C++ Extension Pack** もインストールします。これも Microsoft によって認証されているはずです。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-179.png) _**C/C++ Extension Pack をインストール**_



![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-180.png) _**Code Runner 拡張機能のインストール**_

最初に設定を変更する必要があります。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-177.png) _**設定の変更**_

**歯車**アイコンをクリック（これは管理セクションと呼ばれます）、続いて **設定** をクリックします。もしくはショートカットキー `Ctrl` + `,`（Mac では `Command` キー）も使えます。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-182.png) _**"Run code in terminal" と入力し、Enter キーを押します**_

検索バーに "Run code in terminal" と入力し、Enter キーを押してください。

スクロールダウンして `Code-runner: Run In Terminal` を見つけます。このボックスがチェック (✔) されていることを確認してください。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-184.png) _**ボックスがチェックされていることを確認**_

次に、VS Code または VS Code Insiders を再起動します。ただプログラムを閉じて再度開くだけです。

## コードのテスト方法

VS Code または VS Code Insiders を開き、任意のフォルダを選択し、`.c` 拡張子の C ファイルや `.cpp` 拡張子の C++ ファイルを作成します。

コードを書いたら、右上の再生ボタンを使って直接コードを実行できます。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/image-185.png) _**VS Code/Insiders から C/C++ プログラムを実行する方法**_

これにより、コードがコンパイルされ、直接実行されます。コードを実行した後、コードランナーボタンはデフォルトで直接実行する設定になります。これで、あなたのコンピュータは C/C++ プログラムコードをコンパイルし、実行する準備が整いました。😀

## 結論

この記事を読んでいただきありがとうございます。お役に立てたなら、[freeCodeCamp][4] の他の記事もぜひご覧ください。

私と連絡を取りたい場合は、[Twitter][5]、[LinkedIn][6]、[GitHub][7] を通じて可能です。

また、さまざまなプログラミング言語をたくさんの実践的な例と共に学びたいと思えば、私の [YouTube チャンネル][8]（Code With FahimFBA）に[購読]することもできます。

私のハイライトを確認したい場合は、[Polywork タイムライン][9]でご覧いただけます。

私についてもっと知りたい、または私が取り組んでいることについて知りたい場合は、[私のウェブサイト][10]を訪れてください。

どうもありがとうございます！

[1]: https://www.freecodecamp.org/news/how-to-install-c-and-cpp-compiler-on-windows/
[2]: https://code.visualstudio.com/
[3]: https://code.visualstudio.com/insiders/
[4]: https://www.freecodecamp.org/news/author/fahimbinamin/
[5]: https://twitter.com/Fahim_FBA
[6]: https://www.linkedin.com/in/fahimfba/
[7]: https://github.com/FahimFBA
[8]: https://www.youtube.com/@FahimAmin?sub_confirmation=1
[9]: https://www.polywork.com/fahimbinamin
[10]: https://fahimbinamin.com/

