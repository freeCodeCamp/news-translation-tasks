---
title: Python で文字列を JSON に変換する方法
date: 2024-10-18T11:26:11.948Z
author: ディオニシア・レモナキ
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/python-json-how-to-convert-a-string-to-json/
posteditor: ""
proofreader: ""
---

このチュートリアルでは、JSON の基本について学びます。JSON が何であるか、どのような場面で最もよく使用されるか、そしてその文法について説明します。

<!-- more -->

さらに、Python で文字列を JSON に変換する方法も紹介します。

それでは始めましょう！

## JSON とは？

JSON は JavaScript Object Notation の略です。

これは、ウェブアプリケーションの情報を保存・転送するためのデータ形式です。

JSON は JavaScript プログラミング言語からインスパイアされていますが、特定の言語に縛られているわけではありません。

ほとんどの現代のプログラミング言語は、JSON データを解析・生成するためのライブラリを持っています。

### JSON はどこで使われているのか？

JSON は主に、サーバーとクライアント間でデータを送受信するために使用されます。クライアントとは、ウェブページやウェブアプリケーションのことを指します。

これは、ネットワーク上で接続する際のリクエスト・レスポンスサイクルで使用するのに、よりしっかりしたフォーマットです。数年前は、より複雑でコンパクトでない XML が主に使われていました。

### JSON の基本文法

JSON では、データは次のようにキーと値のペアで記述します。

```
"first_name": "Katie"
```

データはダブルクォーテーションで囲まれ、キーと値のペアはコロンで分けられます。

複数のキーと値のペアをもつことができ、それぞれはカンマで区切られます。

```
"first_name": "Katie", "last_name": "Rodgers"
```

上記は複数のキーと値のペアからなる _オブジェクト_ の例です。

オブジェクトは波括弧 `{}` の中に入ります。

```
{
    "first_name": "Katie",  
    "last_name": "Rodgers"
}
```

また、JSON で配列を作成することも可能で、値の順序リストを形成します。その場合、配列は角括弧 `[]` の中に入ります。

```
[
  { 
    "first_name": "Katie",  
    "last_name": "Rodgers"
  },
  { 
    "first_name": "Naomi",  
    "last_name": "Green"
  }
]

// または:

{
 "employee": [
     { 
    "first_name": "Katie",  
    "last_name": "Rodgers"
  },
  { 
    "first_name": "Naomi",  
    "last_name": "Green"
  }
 ]
}

// これは 'employee' というオブジェクトを作成し、2 つのレコードを持っています。
// それは従業員の名前と苗字を定義します。
```

## Python で JSON データを操作する方法

### Python で JSON モジュールをインクルードする

Python で JSON を利用するためには、まず Python ファイルの冒頭に JSON モジュールをインクルードする必要があります。これは Python に標準で組み込まれています。

例えば、`demo.py` という名前のファイルがあるとします。その冒頭に次の行を追加します。

```
import json
```

### `json.loads()` 関数を使用する

プログラム内に次のような JSON 文字列データがある場合:

```
#include json library
import json

#json string data
employee_string = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'

#check data type with type() method
print(type(employee_string))

#output
#<class 'str'>
```

Python では `json.loads()` 関数を使用して、その文字列を JSON に変換することができます。

`json.loads()` 関数は有効な文字列を入力として受け取り、それを Python の辞書に変換します。

このプロセスは _デシリアライズ_ と呼ばれ、文字列をオブジェクトに変換する行為です。

```
#include json library
import json

#json string data
employee_string = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'

#check data type with type() method
print(type(employee_string))

#convert string to  object
json_object = json.loads(employee_string)

#check new data type
print(type(json_object))

#output
#<class 'dict'>
```

その後は、Python 辞書を使用する場合と同様に、各項目にアクセスすることができます。

```
#include json library
import json

#json string data
employee_string = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'

#check data type with type() method
print(type(employee_string))

#convert string to  object
json_object = json.loads(employee_string)

#check new data type
print(type(json_object))

#output
#<class 'dict'>

#access first_name in dictionary
print(json_object["first_name"])

#output
#Michael
```

別の例を見てみましょう。

1) JSON 文字列データを用意する:

```
import json

#json string
employees_string = '''
{
    "employees": [
       {
           "first_name": "Michael", 
           "last_name": "Rodgers", 
           "department": "Marketing"
        },
       {
           "first_name": "Michelle", 
           "last_name": "Williams", 
           "department": "Engineering"
        }
    ]
}
'''

#check data type using the type() method
print(type(employees_string))

#output
#<class 'str'>
```

2) `json.loads()` 関数を用いて文字列をオブジェクトに変換する:

```
import json

emoloyees_string = '''
{
    "employees" : [
       {
           "first_name": "Michael", 
           "last_name": "Rodgers", 
           "department": "Marketing"
        },
       {
           "first_name": "Michelle", 
           "last_name": "Williams", 
           "department": "Engineering"
        }
    ]
}
'''

data = json.loads(employees_string)

print(type(data))
#output
#<class 'dict'>
```

3) データにアクセスする:

続きをご覧ください。

```markdown
従業員データを記述した JSON 形式の文字列を Python で利用する方法を紹介します。

```python
employees_string = '''
{
    "employees" : [
       {
           "first_name": "Michael", 
           "last_name": "Rodgers", 
           "department": "Marketing"

        },
       {
           "first_name": "Michelle", 
           "last_name": "Williams", 
           "department": "Engineering"
        }
    ]
}
'''

data = json.loads(employees_string)

print(type(data))
#出力
#<class 'dict'>

# first_name にアクセス
for employee in data["employees"]: 
    print(employee["first_name"])

#出力
#Michael
#Michelle
```

## 結論

これで、Python で JSON を扱う基本的な方法がわかりましたね。

もっと Python を学びたいなら、freeCodeCamp の [Python 認定プログラム][1] をチェックしてみてください。変数、ループ、関数といった基礎から、データ構造といった高度なトピックまでカバーしており、合計 5 つのプロジェクトを実際に構築します。

読んでくださり、ありがとうございました。学習を楽しんでください！

[1]: https://www.freecodecamp.org/learn/scientific-computing-with-python/
```

