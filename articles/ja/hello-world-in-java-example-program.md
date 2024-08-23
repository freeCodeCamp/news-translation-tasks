---
title: Java での Hello World プログラム – サンプルコード
date: 2024-08-23T18:04:17.069Z
author: Ihechikara Abba
authorURL: https://www.freecodecamp.org/news/author/Ihechikara/
originalURL: https://www.freecodecamp.org/news/hello-world-in-java-example-program/
posteditor: ""
proofreader: ""
---

新しいプログラミング言語を学ぶ際に、最初に目にするプログラムが「Hello World」プログラムですよね。これは初心者向けのシンプルなプログラムとして広く使われています。

<!-- more -->

この記事を読んでいるあなたは、おそらく Java の初心者か、懐かしい Hello World プログラムを思い出したい方でしょう。どちらにしても、この記事はシンプルで要点を押さえて進めていきます。

この記事では、Java での Hello World プログラムを紹介するだけでなく、Java を学ぶ上で知っておくべき基本的な用語についても説明します。

プログラムを実行するには、統合開発環境（IDE）が必要です。PC にインストールするか、インストール手順を省きたい場合はオンライン IDE を利用することもできます。

## Java での Hello World プログラム

このセクションでは、シンプルな Hello World プログラムを作成し、その動作を理解できるように分解して説明します。

以下がサンプルコードです：

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

クラスは Java のアプリケーション全体の基盤となる要素です。異なる機能ごとに別々のクラスを持つことができます。

クラスには、そのクラスが何をするのかを定義する属性やメソッドを持つことができます。

例えば、「人間」を表す Human クラスは、髪の色や身長といった属性を持ち、走る、食べる、寝るといったメソッドを持つことができるでしょう。

私たちの Hello World プログラムでは、`HelloWorld` というクラスがあります。慣例として、クラス名は必ず大文字で始めます。

クラスを作成するには、`class` キーワードの後にクラス名を書きます。Hello World プログラムを使った例がこちらです：

```java
class HelloWorld {

}
```

### Java の `main` メソッド

すべての Java プログラムには `main` メソッドが必要です。Java コンパイラはコードの実行を `main` メソッドから開始します。

`main` メソッドはこのようになります：

```java
public static void main(String[] args) {

    }
```

この記事をシンプルに保つために、上記の `public`, `static`, `void` といったキーワードについての詳細な説明は行いません。

### `System.out.println()` ステートメント

`System.out.println()` ステートメントを使ってコンソールに情報を出力します。このステートメントは引数を取ります。引数は丸括弧内に書かれます。

構文は以下の通りです：

```java
System.out.println(引数)
```

今回の場合、"Hello World!" を引数として渡しています。テキストがダブルクォーテーションで囲まれているのが分かりますね。これにより、コンパイラは引数が `string` であることを理解します。プログラミングにおける文字列（`string`）は、通常のテキストと同じように文字の集合体ですが、必ずクォーテーションで囲む必要があります。

以下が私たちのコードです：

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!"); 
        // Hello World!
    }
}
```

このコードを実行すると、「Hello World」が表示されます。

コードブロック内で表示されるわけではありません。`// Hello World!` は、コードの出力結果を示すためのコメントです。この部分はコンパイラによって実行されません。

Java では、シングルラインコメントを開始するには二つのスラッシュ（`//`）を使います。

## まとめ

この記事では、Java での Hello World プログラムについて説明しました。

プログラムを作成した後、その全てのコード行がどのように動作するのかを説明しました。

クラス、`main` メソッド、`System.out.println()` ステートメント、文字列（strings）、コメントについても触れました。

皆さんもぜひ、コーディングを楽しんでください！

