---
title: Java の Hello World プログラム – サンプルコード解説
date: 2024-08-23T18:04:17.069Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/hello-world-in-java-example-program/
posteditor: まつだようこ
proofreader: ""
---

新しいプログラミング言語を学ぶ際、初めてのプログラムとして「Hello World」と呼ばれるプログラムをよく目にすると思います。これは初心者向けのシンプルなプログラムとして広く使われています。

<!-- more -->

この記事を読んでいるということは、あなたはおそらく Java の初心者か、懐かしい Hello World プログラムを思い出したいのでしょう。いずれにしても、手順はシンプルです。

この記事では、Java での Hello World プログラムを紹介するだけでなく、Java を学ぶ上で知っておくべき基本的な用語についても説明します。

記事に沿ってプログラムを実行するには、コードを書いてコンパイルするための統合開発環境 (IDE) が必要です。任意の IDE を PC にインストールするか、インストール手順を省きたい場合はオンライン IDE を利用してください。

## Java での Hello World プログラム

このセクションでは、シンプルな Hello World プログラムを作成し、その動作を理解できるように分解して説明します。

以下がサンプルコードです:

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
```

このコードを実行すると、コンソールに「Hello World!」と表示されます。コード内にコメントとして書いてありますね。コメントについては後ほど説明します。

それではコードを分解して説明します。

### Java のクラス

クラスは Java のアプリケーションを組み立てるための部品のような要素です。それぞれ異なる機能ごとに別々のクラスを用意することが多いでしょう。

クラスには、そのクラスの持つ情報を定義する「属性」や、何をするのかを定義する「メソッド」を持つことができます。

例えば、「人間」を表す Human クラスは、髪の色や身長といった属性を持ち、走る、食べる、寝るといったメソッドを持つことができるでしょう。

上記の Hello World プログラムには、`HelloWorld` というクラスがあります。慣例として、クラス名は必ず大文字で始めます。

クラスを作成するには、`class` キーワードの後にクラス名を書きます。Hello World プログラムの例がこちらです:

```java
class HelloWorld {

}
```

### Java の `main` メソッド

すべての Java プログラムには `main` メソッドが必要です。Java コンパイラはコードの実行を `main` メソッドから開始します。

`main` メソッドは次のようになります:

```java
public static void main(String[] args) {

    }
```

この記事では、簡略化のため上記の `public`, `static`, `void` といったキーワードについての詳しい説明は省きます。

### `System.out.println()` ステートメント

コンソールに情報を出力するには、`System.out.println()` ステートメントを使います。このステートメントは引数を取ります。引数は丸括弧内に書かれます。

構文は次の通りです:

```java
System.out.println(引数)
```

この記事のコードでは、"Hello World!" を引数として渡しています。テキストがダブルクォーテーションで囲まれているのが分かりますね。これにより、引数が `string` (文字列) であることをコンパイラに伝えます。プログラミングにおける文字列とは、私たちが普段書いているテキストと同じような文字の集合体ですが、必ずクォーテーションで囲む必要があります。

コードは次のようになります:

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
```

このコードを実行すると、「Hello World!」と表示されます。

コードブロック内で表示されるわけではありません。`// Hello World!` は、コードの出力結果を示すためのコメントです。この部分はコンパイラによって実行されません。

Java の単一行コメントは 2 つのスラッシュ (`//`) で始めます。

## まとめ

この記事では、Java での Hello World プログラムについて説明しました。

プログラムを作成した後、各コード行がどのように動作するのかを見てきました。

Java におけるクラス、`main` メソッド、`System.out.println()` ステートメント、文字列、コメントについても触れました。

皆さんもぜひ、コーディングを楽しんでください！
