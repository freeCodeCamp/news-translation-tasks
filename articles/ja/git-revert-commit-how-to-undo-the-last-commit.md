---
title: 結論
date: 2024-10-18T11:04:50.581Z
author: Ilenia
authorURL: https://www.freecodecamp.org/news/author/uccellino95/
originalURL: https://www.freecodecamp.org/news/git-revert-commit-how-to-undo-the-last-commit/
posteditor: ""
proofreader: ""
---

Git を使ってコーディング中に、思い通りにいかなかったときの対処法、すなわち最後のコミットを取り消す方法を知りたいですか？この記事で詳しく見ていきましょう！

<!-- more -->

最後のコミットを元に戻す方法は 2 つあります。この記事では、その両方を紹介します。

## `revert` コマンド

`revert` コマンドは、対象のコミットの変更を元に戻す新しいコミットを作成します。以下のようにして、最後のコミットを取り消すことができます。

```
git revert <commit to revert>
```

取り消したいコミットの名前は `[git log](https://www.freecodecamp.org/news/git-log-command/)` を使用して見つけることができます。最初に表示されるコミットが最後に作成されたコミットです。それをコピーして `revert` コマンドで使用します。

![git revert コマンドが以前の変更を元に戻すための新しいコミットを作成することを示す図](https://www.freecodecamp.org/news/content/images/2021/08/image-117.png) _図中の各円はコミットを表しています。_

## `reset` コマンド

また、`reset` コマンドを使って最後のコミットを元に戻すことも可能です。しかし注意が必要です。このコマンドはコミット履歴を変更しますので、頻繁には使わない方が良いでしょう。HEAD や作業中のブランチを指定したコミットまで戻し、その後の変更は破棄されます。

```
git reset --soft HEAD~1
```

`--soft` オプションを使うと、コミットされていない変更は失われません。

![git reset --soft がコミット履歴を変更するが、ステージされていない変更は保持することを示す図](https://www.freecodecamp.org/news/content/images/2022/08/git-reset-soft.png) _図中の各円はコミットを表しています。_

ステージされていない変更も含めてすべてを削除したい場合は、`--hard` オプションを使います。

```
git reset --hard HEAD~1
```

これにより、最新のコミットと未コミットの変更がすべて元に戻されます。

![git reset --hard がコミット履歴を変更し、ステージされていない変更も削除することを示す図](https://www.freecodecamp.org/news/content/images/2021/08/image-112.png) _図中の各円はコミットを表しています。_

## Git で `reset` と `revert` はどちらを使うべきか？

`reset` はローカルだけで存在するコミットに対してのみ使用するべきです。このコマンドはコミット履歴を変更し、リモートのチームメンバーに影響を及ぼす可能性があります。

一方、`revert` は変更を元に戻す新しいコミットを作成します。したがって、取り消すコミットが既に共有リポジトリにプッシュされている場合は、コミット履歴を上書きしない `revert` を使うのが最適です。

# 結論

最後のコミットを元に戻す 2 つの方法を学び、どちらを使うべきかも理解しました。

これで、もしも最後のコミットにバグが見つかったり、コミットするべきではなかった場合に、それを修正する方法がわかりましたね！

