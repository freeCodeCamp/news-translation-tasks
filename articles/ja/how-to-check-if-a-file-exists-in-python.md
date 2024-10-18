---
title: Python でファイルの存在を確認する方法 - isFile() と exists() を使って
date: 2024-10-18T11:39:02.240Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/how-to-check-if-a-file-exists-in-python/
posteditor: ""
proofreader: ""
---

Python でファイル操作を行う際、ファイルが存在するかどうかを確認したい場合があります。

<!-- more -->

では、なぜファイルの存在を確認する必要があるのでしょうか？

特定のファイルが存在することを確認することは、[ファイルを開く、読み込む、または書き込む][1] といった特定の操作を行う際に非常に便利です。

もしも上記の操作を行おうとしてファイルが存在しない場合、プログラムはバグを引き起こし、最悪の場合クラッシュしてしまいます。

そのため、操作を行う前にプログラムがクラッシュしないようにするための基本的なステップとして、与えられたパスにファイルが存在するかどうかを確認するのは有効です。

幸いなことに、Python にはファイルが存在するかどうかを確認するための組み込みの方法が複数あり、例えば `os.path` モジュールや `pathlib` モジュールがあります。

具体的には、`os.path` モジュールを使用すると、以下の方法があります：

- `os.path.isfile(path)` メソッドは、`path` がファイルまたはファイルへのシンボリックリンクであれば `True` を返します。
- `os.path.exists(path)` メソッドは、`path` がファイル、ディレクトリ、またはファイルへのシンボリックリンクであれば `True` を返します。

また、`pathlib` モジュールを使用すると、`pathlib.Path(path).is_file()` 関数を使用して、`path` が存在するファイルであれば `True` を取得できます。

この記事では、`os.path` および `pathlib` モジュールを用いて Python でファイルの存在を確認する方法を学びます。

さっそく始めましょう！

## `os.path` モジュールを使用してファイルの存在を確認する方法

`os` モジュールは Python の標準ライブラリ（`stdlib` とも呼ばれます）に含まれており、オペレーティングシステムとのアクセスや対話を可能にします。

`os` モジュールを使用すると、ファイルやフォルダの作成や削除、フォルダの内容のコピーや移動など、オペレーティングシステムに依存する機能を利用できます。

標準ライブラリに含まれているため、`os` モジュールは Python をローカルシステムにインストールする際に自動的にパッケージ化されています。Python ファイルの冒頭で `import` 文を使用してインポートするだけです：

```
import os
```

`os.path` は `os` モジュールのサブモジュールです。

このサブモジュールは、ファイル操作向けに `isfile()` と `exists()` の 2 つのメソッドを提供し、ファイルが存在するかどうかに応じて `True` または `False` を返します。

ファイルで `os.path` サブモジュールを使用するため、冒頭で以下のようにインポートする必要があります：

```
import os.path
```

### Python で `os.path.isfile()` メソッドを使用してファイルの存在を確認する方法

`isfile()` メソッドの一般的な構文は以下の通りです：

```
os.path.isfile(path)
```

このメソッドは 1 つの引数 `path` を受け取り、確認したいファイルのパスを指定します。

`path` 引数は引用符で囲まれた文字列です。

`isfile()` メソッドの返り値は Boolean 値で、ファイルが存在するかどうかに応じて `True` または `False` を返します。

パスがディレクトリ名で終わっている場合、`False` を返しますので注意してください。

メソッドを実際に使ってみましょう。

現在の作業ディレクトリ `python_project` に `example.txt` というファイルが存在するかを確認したいとします。

`example.txt` は Python ファイル `main.py` と同じ階層にあるので、相対パスを使用しています。

`example.txt` のパスを `path` という変数に保存します。

その後、`isfile()` メソッドを使用して、`example.txt` がそのパスに存在するかどうかを確認します。

ファイルが実際に存在するため、返り値は `True` です：

```
import os.path

path = './example.txt'

check_file = os.path.isfile(path)

print(check_file)

# 出力

# True
```

では、絶対パスの場合はどうでしょうか？

絶対パスを使用した場合の同等のコードを示します。`example.txt` ファイルは `python_project` ディレクトリ内にあり、そのディレクトリはホームディレクトリ `/Users/dionysialemonaki/` の中にあります：

```
import os.path

path = '/Users/dionysialemonaki/python_project/example.txt'

print(os.path.isfile(file_path))

# 出力

# True
```

前述のように、`isfile()` メソッドはファイルに対してのみ機能し、ディレクトリには対応していません：

```
import os.path

path = '/Users/dionysialemonaki/python_project'

check_file = os.path.isfile(path)

print(check_file)

# 出力

# False
```

パスがディレクトリで終わる場合、返り値は `False` になります。

### Python で `os.path.exists()` メソッドを使用してファイルの存在を確認する方法

`exists()` メソッドの一般的な構文は以下の通りです：

```
os.path.exists(path)
```

上記の構文からもわかるように、`exists()` メソッドは `isfile()` メソッドと似ています。

`os.path.exists()` メソッドは、指定されたパスが存在するかどうかを確認します。

`exists()` と `isfile()` の大きな違いは、`exists()` はフォルダやファイルのパスが存在する場合に `True` を返すのに対し、`isfile()` はファイルのパスである場合のみ `True` を返す点です。

[1]: https://www.freecodecamp.org/news/opening-reading-files-in-python/


前のセクションの例に戻り、`exists()` メソッドを使って現在の作業ディレクトリに `example.txt` ファイルが存在するかどうか確認してみましょう。

```
import os.path

path = './example.txt'

check_file = os.path.exists(path)

print(check_file)

# 出力結果

# True
```

`example.txt` へのパスが存在するので、出力は `True` になります。

前述の通り、`exists()` メソッドはディレクトリへのパスが有効であるかどうかを確認します。

前のセクションで `isfile()` メソッドを用いたとき、パスがディレクトリを指している場合、そのディレクトリが存在していても出力は `False` でした。

`exists()` メソッドを使用すると、ディレクトリへのパスが存在する場合、出力は `True` になります。

```
import os.path

path = '/Users/dionysialemonaki/python_project'

check_file = os.path.exists(path)

print(check_file)

# 出力結果

# True
```

`exists()` メソッドは、ファイル _または_ ディレクトリが存在するか確認したいときに非常に便利です。

## `pathlib` モジュールを使用してファイルが存在するか確認する方法

Python バージョン 3.4 では `pathlib` モジュールが導入されました。

`pathlib` モジュールを使用して、ファイルの存在を確認することはファイルシステムパスを扱う [オブジェクト指向][2] アプローチです。

以前の `os.path` モジュールのように、`pathlib` モジュールをインポートする必要があります。

具体的には、`pathlib` モジュールから `Path` クラスを次のようにインポートする必要があります。

```
from pathlib import Path
```

その後、確認したいファイルパスを使って `Path` クラスの新しいインスタンスを作成します。

```
from pathlib import Path

# ファイルパスを持つ Path オブジェクトを作成
path = Path('./example.txt')
```

データ型を確認するために `type()` 関数を使用できます。

```
from pathlib import Path

path = Path('./example.txt')

print(type(path))

# 出力は pathlib オブジェクト
# <class 'pathlib.PosixPath'>
```

これで `Path` オブジェクトを作成したことが確認できました。

次に、`pathlib` モジュールの組み込みメソッドの一つである `is_file()` メソッドを使用して、ファイルが存在するかどうか確認する方法を見てみましょう。

### Python で `Path.is_file()` メソッドを使用してファイルの存在を確認する方法

`is_file()` メソッドはファイルが存在するかどうかを確認します。

`Path` オブジェクトがファイルを指している場合は `True` を返し、ファイルが存在しない場合は `False` を返します。

その動作を示す例を見てみましょう。

```
from pathlib import Path

# ファイルパスを持つ Path オブジェクトを作成
path = Path('./example.txt')

print(path.is_file())

# 出力結果

# True
```

指定されたパスに `example.txt` ファイルが存在するので、`is_file()` メソッドは `True` を返します。

## 結論

この記事では、Python の `os.path` と `pathlib` モジュール、およびそれに関連するメソッドを使用して、ファイルが存在するかどうかを確認する方法を学びました。

これらのモジュールの違いと、それぞれの使用タイミングが理解できたことでしょう。

お読みいただきありがとうございます。コーディングを楽しんでください！

[1]: https://www.freecodecamp.org/news/how-to-read-files-in-python/
[2]: https://www.freecodecamp.org/news/crash-course-object-oriented-programming-in-python/

