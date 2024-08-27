---
title: JavaScript で最初の文字を大文字にする方法 – 単語の頭文字を大文字にする JS テクニック
date: 2024-08-27T06:06:07.982Z
author: Dillion Megida
authorURL: https://www.freecodecamp.org/news/author/dillionmegida/
originalURL: https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
posteditor: ""
proofreader: ""
---

プログラミングの際には、単語の最初の文字を大文字にする方法はいくつかあります。CSS を用いる方法もあれば、JavaScript のメソッドを使う方法もあります。

<!-- more -->

この記事では、その一つのアプローチについて解説します。

JavaScript で単語の最初の文字を大文字にするためには、以下の 3 つの文字列メソッドを理解している必要があります：**charAt**、**slice**、および **toUpperCase**。

## `charAt` メソッド

このメソッドを使うと、文字列の特定の位置にある文字を取得できます。このメソッドを使用して、単語の最初の文字を取得します：

```js
const word = "freecodecamp"

const firstLetter = word.charAt(0)
// f
```

## `slice` メソッド

このメソッドは、文字列全体から特定の部分文字列を切り取るために使用します。このメソッドを利用して、単語の残りの部分（最初の文字を除く）を切り取ります：

```js
const word = "freecodecamp"

const remainingLetters = word.substring(1)
// reecodecamp
```

## `toUpperCase` メソッド

`toUpperCase` は、指定された文字列を大文字に変換して返すメソッドです。これを使って最初の文字を大文字にします：

```js
const firstLetter = "f"

const firstLetterCap = firstLetter.toUpperCase()
// F
```

## JavaScript で単語の最初の文字を大文字にする方法

上記の 3 つの文字列メソッドを利用して、単語の最初の文字を取得し、それを大文字に変換してから、残りの部分と連結します。

このアプローチにより、最初の文字が大文字になった新しい単語が得られます。

以下がそのコードです：

```js
const word = "freecodecamp"

const firstLetter = word.charAt(0)

const firstLetterCap = firstLetter.toUpperCase()

const remainingLetters = word.slice(1)

const capitalizedWord = firstLetterCap + remainingLetters
// Freecodecamp
// F が大文字になる
```

上記のコードを簡潔にまとめると、以下のようになります：

```js
const word = "freecodecamp"

const capitalized =
  word.charAt(0).toUpperCase()
  + word.slice(1)
  
// Freecodecamp
// F が大文字になる
```

お読みいただきありがとうございました。コーディングを楽しんでください！

