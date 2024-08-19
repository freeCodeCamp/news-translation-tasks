---
title: Python代码示例手册
date: 2024-08-19T13:10:13.408Z
author: Farhan Hasin Chowdhury
authorURL: https://www.freecodecamp.org/news/author/farhanhasin/
originalURL: https://www.freecodecamp.org/news/the-python-code-example-handbook/
posteditor: ""
proofreader: ""
---

很少有编程语言能像Python一样被广泛喜爱。作为荷兰程序员Guido van Rossum的心血结晶，Python易于学习、功能强大，而且使用起来非常愉快。

<!-- more -->

由于其受欢迎程度，关于Python的视频和书面资源非常丰富。然而，这本手册试图与众不同，它并不是对这门语言的权威指南。

相反，你将了解我认为是语言基础的所有主题，并附有大量代码示例。

我没有在本手册中讨论面向对象编程，因为我认为这是一个非常广泛的主题，值得单独编写一本手册。

在接近尾声的部分，我还列出了一些学习资源，以进一步提高你对Python和编程的理解。

事不宜迟，让我们开始吧！

## 目录

-   [前提条件][1]
-   [如何在电脑上设置Python][2]
-   [如何在电脑上安装Python IDE][3]
-   [如何在PyCharm中创建一个新项目][4]
-   [如何编写Python中的Hello World程序][5]
-   [如何从PyCharm初始化和发布Git仓库][6]
-   [如何在Python中使用变量和不同类型的数据][7]
-   [如何在Python中处理简单的数字][8]
-   [如何在Python中接受用户输入][9]
-   [如何在Python中处理字符串][10]
-   [Python中的序列类型是什么？][11]
    -   [Python中的列表][12]
    -   [Python中的元组][13]
    -   [Python中的范围][14]
    -   [如何在Python中进行索引][15]
-   [什么是可迭代类型以及如何在Python中使用它们进行循环][16]
-   [如何在Python中使用While循环][17]
-   [如何编写Python中的嵌套循环][18]
-   [Python中常见的序列类型操作是什么？][19]
    -   [如何在Python中使用in运算符][20]
    -   [如何在Python中使用+和\*运算符与序列类型][21]
    -   [如何在Python中使用len()、min()和max()函数][22]
-   [Python中的字符串类型操作是什么？][23]
    -   [如何在Python中将字符串大写][24]
    -   [如何在Python中将字符串转换为小写或大写][25]
    -   [如何在Python中计算字符串中子字符串出现的次数][26]
    -   [如何在Python中分割和连接字符串][27]
-   [如何在Python中编写条件语句][28]
-   [Python中的关系运算符和逻辑运算符是什么？][29]
-   [Python中的赋值运算符是什么？][30]
-   [Python中的集合类型是什么？][31]
-   [Python中的映射类型是什么？][32]
    -   [Python中的字典视图对象是什么][33]
-   [如何在Python中编写函数][34]
    -   [如何在Python中编写匿名或Lambda函数][35]
    -   [如何在Python中处理局部变量、非局部变量和全局变量][36]
    -   [如何在Python中使用\_args和*kwargs向函数传递可变数量的参数][37]
-   [Python中的模块是什么？][38]
-   [如何高效使用Python文档][39]
-   [下一步是什么？][40]
    -   [面向对象编程][41]
    -   [算法和数据结构][42]
    -   [Django][43]
    -   [Qt][44]
    -   [PyGame][45]
    -   [数据科学][46]
-   [结论][47]

## **前提条件**

你不需要知道任何其他编程语言，但知道一门语言可能会帮助你理解Python的基础。

除此之外，你需要熟练使用你选择的操作系统，以便下载和安装新软件，并在需要时获得管理员权限。

## 如何在电脑上设置Python

在电脑上安装Python是一个非常简单的过程。事实上，如果你使用的是Linux系统，Python应该已经安装好了。

打开终端窗口并执行以下命令：

```
python --version
```

如果你的系统上安装了Python，你会得到类似于`Python 3.10.4`或其他次要版本的输出。

虽然大多数现代Linux发行版默认使用Python 3，但一些较旧的发行版可能仍然默认使用Python 2。

所以如果上述命令指向的是Python 2，试试以下命令：

```
python3 --version
```

我还建议你检查Linux发行版的更新，并安装任何新的Python更新。

虽然macOS也预装了Python，但我建议你按照[Dillion Megida][48]的这篇文章安装一个更新的版本。

[https://www.freecodecamp.org/news/how-to-install-python-3-on-mac-and-update-the-python-version-macos-homebrew-command-guide/][49]

最后，对于Windows，我建议你按照[Md. Fahim Bin Amin][50]的文章正确安装最新版本的Python。

[https://www.freecodecamp.org/news/how-to-install-python-in-windows-operating-system/][51]

只要你安装了Python 3版本，你就可以开始了。

作为开发人员，您的体验在很大程度上取决于您选择编写代码的程序。一个好的集成开发环境（IDE）或代码编辑器能够极大提升您的生产力。

如今，[Visual Studio Code][52] 已成为所有语言和平台的首选代码编辑器。但为了简化，在本书中我们将使用 [PyCharm][53]。

如果您想使用 VS Code，我已经写过一篇关于[如何配置 Visual Studio Code 进行 Python 开发][54]的完整文章。如果您不介意手动配置您的编辑器，可以随意查看。

专业版 IDE 的价格为 [每年 89 美元][55]，但也有免费和开源的社区版。前往 [PyCharm 下载页面][56]。

![Image](https://www.freecodecamp.org/news/content/images/2024/04/download-pycharm-page.png) _下载 PyCharm 页面_

使用黑色的“Download”按钮下载社区版。文件大小应略大于 350 兆字节。

在 Windows 上，您将获得一个可执行的安装程序；在 macOS 上，您将获得一个 Apple 磁盘镜像；在 Linux 上，您将获得一个 TAR 压缩文件。

我不会在这本书中演示安装过程，因为它与安装其他软件相似。

安装完成后，您可以从开始菜单或应用启动器启动 IDE。在第一次启动时，您将有机会配置一些选项。我建议您保留默认设置。

配置向导结束后，您应该会看到以下欢迎窗口：

![Image](https://www.freecodecamp.org/news/content/images/2022/09/image-469.png) _欢迎来到 PyCharm 界面——可以选择开始新项目、打开项目或从 VCS 获取项目_

选择一个 IDE 或代码编辑器不会影响您使用本手册的体验，因此请随意使用您觉得舒服的工具。

## 如何在 PyCharm 中创建新项目

如果您打开了上一节的欢迎窗口，点击“New Project”按钮。

![Image](https://www.freecodecamp.org/news/content/images/2024/04/start-a-new-project-in-pycharm.png) _在 PyCharm 中开始一个新项目_

在下一步中，选择存储项目的位置：

![Image](https://www.freecodecamp.org/news/content/images/2022/09/image-472.png)

在位置输入框中，`HelloWorld` 部分是项目名称。然后确保选择了“New environment using Virtualenv”。接着，从“Base interpreter”下拉菜单中选择正确的 Python 版本。

[Virtualenv][57] 是一个可以从给定的基础解释器创建独立 Python 环境的程序。这非常有用，因为当您稍后处理多个 Python 项目时，它们的依赖项可能会发生冲突。

为每个项目创建独立的环境可以解决这个问题，并且可以让您的全局 Python 安装不受任何不必要的包安装影响。

由于这可能是您的第一个 Python 项目，我建议您保留“Create a main.py welcome script”选项勾选状态。当您对所选项满意后，点击“Create”按钮。

项目创建过程不应花费太长时间。完成后，IDE 应自动为您打开项目。

![Image](https://www.freecodecamp.org/news/content/images/2022/09/image-473.png)

您可以使用右上角的播放按钮来运行代码。该按钮默认配置为运行“main.py”文件。

这就是为什么您可以在旁边看到“main”字样。您还可以编写您自定义的配置，但这是后续章节的主题。

![Image](https://www.freecodecamp.org/news/content/images/2022/09/image-474.png)

您可以在 IDE 底部看到程序的输出。PyCharm 提供了对 TODO 注释的支持、内置终端等。随着您的前进，您将学到更多这些功能。

## 如何在 Python 中编写 Hello World 程序

从上一节继续，打开“main.py”文件并将所有预先存在的代码替换为以下代码行：

```
print('Hello, World!')

# Hello, World!
```

`print()` 函数会打印出您传入括号内的任何内容。您不必特别将 Python 文件命名为“main.py”。这只是让您知道这是该程序的入口点的一种方式。

这就是在 Python 中编写最简单可执行程序所需的一切。但还有更好的方法可以做到这一点。更新代码如下：

```
def main():
    print('Hello, World!')


if __name__ == '__main__':
    main()

# Hello, World!
```

随着您继续处理更大的项目，您的项目中最终会有多个 Python 文件，这种编写脚本的方法会很有用。

为了模拟一个更大的项目，通过右键点击“HelloWorld”项目名称并选择“New”子菜单下的“Python File”，创建另一个 Python 文件。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image.png)

将文件命名为类似“library”的名称，并在文件类型列表中突出显示“Python file”后按回车键。

一个名为 `library.py` 的新文件将出现在你的项目文件夹中。在该文件中加入以下代码：

```
def greet():
    print('Hello, World!')
```

这是一个非常简单的函数，会在控制台输出 "Hello, World!" 。你可以在你的 `main.py` 文件中 `import` 并使用这个函数。

要这样做，请按以下内容更新 `main.py` 文件代码：

```
from library import greet


def main():
    greet()


if __name__ == '__main__':
    main()

# Hello, World!
```

你正在从 `library.py` 文件中导入 `greet()` 函数，并在 `main()` 函数中执行它。

现在在你的项目中，有两种类型的 Python 文件。你有 `main.py` 文件，它是一个脚本。换句话说，你可以运行这个文件。

然后你有 `library.py` 文件，它是一个库。换句话说，它包含了许多有用的函数和变量，你可以在其他 Python 文件中导入。

现在想象一下，你的项目中有数百个文件，它们或多或少看起来都一样。别人如何找到程序的入口点？

最简单的方法是对整个项目进行搜索，查找 `if __name__ == '__main__'` 这一行代码。这使你的代码更加可读。

现在我让你相信这是可行的方式，让我来解释一下这里实际发生了什么。

`__name__` 是一个特殊的 Python 变量。在脚本的情况下，该变量的值将是 `__main__`，而在库的情况下，它的值将是文件的名称。

所以在前面提到的程序中，`main.py` 文件中的 `__name__` 的值将是 `__main__`，而在 `library.py` 文件中将是 `library`。

如果你将 `main.py` 文件的名称更改为其他名称，该值仍将是 `__main__`，因为它是一个脚本。

不过，`library.py` 文件并不受限制不能成为脚本。如果你运行该文件，它也会成为一个脚本。

在 C/C++/Go/Java 等语言中，你将有一个指定的 `main` 函数。该函数将是程序的入口点。

由于 Python 没有这样的东西，使用 `if __name__ == '__main__'` 表达式为你的程序强制指定一个入口点的感觉。

它告诉程序员和 IDE 这个脚本是用于执行的（而不是用于在其他 Python 文件中导入）。

## 如何从 PyCharm 初始化和发布 Git 仓库

你可能已经熟悉 [Git][58] 并知道如何初始化一个新的仓库。如果你更喜欢使用其他 Git 客户端，那完全没问题。

然而，我认为知道如何直接从 IDE 进行提交可以提高你的生产力。

请记住，你需要在系统上安装和配置 Git。如果没有，[Bolaji Ayodeji][60] 的[这篇文章][59]可能会派上用场。

现在，继续上一部分的内容，如果你看一下 IDE 底部，你应该会看到一个 "Version Control" 选项卡。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-2-1.png)

点击它，你应该会切换到版本控制选项卡。现在点击 "Create Git repository..." 链接。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-3-1.png)

PyCharm 会询问你想在哪里初始化新的仓库。确保你选择了正确的文件夹。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-4.png)

一旦你按下 "OK" 按钮，"Version Control" 选项卡将变为 "Git" 选项卡。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-5-1.png)

在当前状态下，没有提交。在你进行第一次提交之前，我建议你添加 `.gitignore` 文件，以便没有不需要的文件进入仓库。

要生成一个新的 gitignore 文件，请前往 [gitignore.io][61] 网站。你可以从这个网站为大量技术生成 gitignore 文件。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-6.png)

你编写你想要生成文件的技术的名称。我通常会选择 "Python", "PyCharm" 并点击 "Create" 按钮。

网站会显示你所需的 `.gitignore` 文件的内容。从那里选择并复制所有内容，然后回到 PyCharm。

为此，在你的项目中创建一个新文件，方法是右键点击 "HelloWorld" 项目名称，并在 "New" 子菜单下选择 "File"。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-7.png)

将你的文件命名为 `.gitignore` 并按回车键。PyCharm 会询问是否要将该文件添加到 Git。点击 Add，然后粘贴复制的内容。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-10.png)

此时，你的仓库没有任何提交。要创建一个新的提交，点击 "Commit local changes" 链接或切换到 "Commit" 选项卡。

由于这是你的第一次提交，检查提交选项卡中的所有 "Changes" 和 "Unversioned Files"。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-11.png)

由于这是你的第一次提交，请输入一个描述性的提交信息，例如 "Initial commit"，然后按 "Commit" 按钮进行最终提交。

现在是时候将这个仓库发布到 GitHub 上了。为此，请在你的 GitHub 账户下创建一个新的仓库。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-14.png)

然后复制此仓库的 SSH 链接。如果你的项目没有配置 SSH，可以使用 HTTPS 链接，但我强烈推荐 SSH。

现在回到 PyCharm，看看右上角。在 Git 旁边，你会找到一些标志。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-15.png)

向下的蓝色箭头将从你的远程仓库拉取代码，勾号将创建一个新的提交，向上的绿色箭头将推送代码。

时钟图标将显示你的提交历史，最后循环箭头将撤销你的更改。点击推送箭头将弹出一个新窗口。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-16.png)

点击“Define remote”链接，在 URL 输入框内粘贴你从 GitHub 复制的链接。按下 OK 按钮并等待过程结束。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-17.png)

如果一切顺利，PyCharm 会给你一个“Push”按钮。将代码推送到远程仓库不应该超过几秒钟。

如果你使用 HTTPS 而不是 SSH，每次推送时可能需要提供你的 GitHub 邮箱和密码。

完成后，访问你的远程仓库并刷新页面以查看更改是否已经正确推送。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-18.png)

现在每次你做出任何重大更改时，都可以直接从 IDE 提交和推送代码到 GitHub。

例如，删除“library.py”文件并更新“main.py”文件中的代码，使其在控制台上打印“Hello, World!”。

```
def main():
    print("Hello, World!")


if __name__ == '__main__':
    main()

# Hello, World!
```

一旦你做出更改，切换到提交选项卡，你会看到所有未提交的更改。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-19.png)

确保你检查了所有要提交的更改。写一个描述性的提交消息。

这次尝试点击“Commit and Push...”按钮而不是仅仅提交。将弹出一个新窗口。

![Image](https://www.freecodecamp.org/news/content/images/2022/10/image-21.png)

如果一切对你来说都很好，点击推送按钮并等待过程完成。

记住，如果你使用的是 HTTPS，每次推送时可能需要重新输入你的邮件和密码。

你可以在 GitHub 上检查你的远程仓库，以确保推送已正确完成。

你可以在 PyCharm 中做更多关于版本控制的操作，比如处理拉取请求，但我会将这些留到稍后讲解。

## 如何在 Python 中使用变量和不同类型的数据

变量是可以取不同类型值的实体。它是你计算机内存中的一个命名位置。

要在 Python 中创建一个新变量，你只需要键入变量名，后跟等号和值。

```
def main():
    book = 'Dracula'
    author = 'Bram Stoker'
    release_year = 1897
    goodreads_rating = 4.01

    print(book)
    print(author)
    print(release_year)
    print(goodreads_rating)


if __name__ == '__main__':
    main()

# Dracula
# Bram Stoker
# 1897
# 4.01
```

在命名你的变量时，[PEP 8 - Python 代码风格指南][62] 说：

> 函数名应使用小写字母，必要时用下划线分隔单词以提高可读性。

还有

> 变量名遵循与函数名相同的约定。

该[指南还][63]说：

> 绝不要使用 'l'（小写字母 L）、'O'（大写字母 O）或 'I'（大写字母 I）作为单个字符的变量名。在某些字体中，这些字符与数字一和零无法区别。当尝试使用 'l' 时，请改用 'L'。

只要你遵循这些指南，在 Python 中声明变量是非常简单的。

而不是在不同的行中声明变量，你可以像下面这样一次性声明它们：

```
def main():
    book, author, release_year, goodreads_rating = 'Dracula', 'Bram Stoker', 1897, 4.01

    print(book)
    print(author)
    print(release_year)
    print(goodreads_rating)


if __name__ == '__main__':
    main()

# Dracula
# Bram Stoker
# 1897
# 4.01
```

你需要做的就是在一行中使用逗号分隔单个变量名。

然后在等号后面，你需要按照它们的名字顺序写对应的值，同样使用逗号分隔。

事实上，你还可以一次性打印出它们。`print()`方法可以接受用逗号分隔的多个参数。

```
def main():
    book, author, release_year, goodreads_rating = 'Dracula', 'Bram Stoker', 1897, 4.01

    print(book, author, release_year, goodreads_rating)


if __name__ == '__main__':
    main()

# Dracula Bram Stoker 1897 4.01
```

这些参数随后会在终端中用空格隔开打印在一行上。

说到 `print()` 方法，你可以使用 `+` 号在一个打印方法中添加变量和字符串：

```    
print(book + ' 是由 ' + author + ' 撰写的小说, 发表在 ' + release_year + '. 它在 goodreads 上的评分是 ' + goodreads_rating + '.')


if __name__ == '__main__':
    main()


# TypeError: can only concatenate str (not "int") to str
```

如果你运行这段代码，你会得到一个 `TypeError`，它表示 Python 只能连接字符串，不能连接整型。

在上面的代码片段中，`book`，`author`，`release_year` 和 `goodreads_rating` 都是不同类型的变量。

`book` 和 `author` 变量是字符串。`release_year` 是整数，最后 `goodreads_rating` 变量是浮点数。

每当 Python 遇到一个数值类型前的 `+` 符号时，它会认为程序员可能在进行算术操作。

解决这个问题的最简单方法是将数值类型转换为字符串。你可以通过对数值变量调用 `str()` 方法来实现。

```
def main():
    book, author, release_year, goodreads_rating = '德古拉', '布莱姆·斯托克', 1897, 4.01

    print(book + ' 是由 ' + author + ' 撰写的小说, 发表在 ' + str(release_year) + '. 它在 goodreads 上的评分是 ' + str(goodreads_rating) + '.')


if __name__ == '__main__':
    main()

# 德古拉 是由 布莱姆·斯托克 撰写的小说, 发表在 1897. 它在 goodreads 上的评分是 4.01.
```

这就好很多了 – 但你可以通过使用 f 字符串使那一行代码更可读。

```
def main():
    book, author, release_year, goodreads_rating = '德古拉', '布莱姆·斯托克', 1897, 4.01

    print(f'{book} 是由 {author} 撰写的小说, 发表在 {release_year}. 它在 goodreads 上的评分是 {goodreads_rating}.')


if __name__ == '__main__':
    main()

# 德古拉 是由 布莱姆·斯托克 撰写的小说, 发表在 1897. 它在 goodreads 上的评分是 4.01.
```

你可以在常规字符串前加上 `f` 将其变为 f 字符串，这样你就可以在字符串内部直接书写变量名，并将其放在大括号内。

有一件事一直困扰着我，那就是代码行的长度。幸运的是，你可以如下所示将长字符串分割成多个较短的字符串：

```
def main():
    book, author, release_year, goodreads_rating = '德古拉', '布莱姆·斯托克', 1897, 4.01

    print(f'{book} 是由 {author} 撰写的小说, 发表在 {release_year}.'
          f' 它在 goodreads 上的评分是 {goodreads_rating}.')


if __name__ == '__main__':
    main()

# 德古拉 是由 布莱姆·斯托克 撰写的小说, 发表在 1897. 它在 goodreads 上的评分是 4.01.
```

这才是好的 Python 代码应该有的样子。我建议你从一开始就让你的代码尽可能可读 – 以后你会感谢我的。

除了 `int` 和 `float`，Python 中还有另一种数值类型叫做 `complex`。它是专门用来处理像 `500+2j` 这样的数字的。

还有布尔数据可以存储 `True` 或 `False`，而且只能存储这两个值。你实际上可以向 Python 提问，它会以布尔值回答。

在本书中，你不会看到复数的实际应用，而布尔值将在后面才会用到。所以现在，让我们先专注于简单的数字和字符串。

## 如何在 Python 中处理简单的数字

Python 中的简单数字有两种类型。整数是整型，带浮点数的数字是浮点型。

在 Python 中，你可以使用四种不同的进制表示整数。它们是十进制、十六进制、八进制和二进制。

| 进制 | 表示方法 |
| --- | --- |
| 十进制 | 404 |
| 十六进制 | 0x194 |
| 八进制 | 0o624 |
| 二进制 | 0b000110010100 |

因此，你可以分别通过在相应的值前加上 `0x`、`0o` 或 `0b` 前缀，来表示十六进制、八进制或二进制的 404 值。

另一方面，Python 使用浮点数时可以精确到 15 位有效数字。第 15 位之后的任何数字都可能不准确。

针对简单数值类型，你可以进行六种不同的算术操作。最简单的是加法和减法。

```
def main():
    num_1 = 15
    num_2 = 12

    print(f'num_1 和 num_2 的和是: {num_1 + num_2}')
    print(f'num_1 和 num_2 的差是: {num_1 - num_2}')

if __name__ == '__main__':
    main()

# num_1 和 num_2 的和是: 27
# num_1 和 num_2 的差是: 3
```

在进行减法操作时，如果第二个操作数大于第一个操作数，结果将为负数。

```
def main():
    num_1 = 15
    num_2 = 12

    print(f'num_2 和 num_1 的差是: {num_2 - num_1}')

if __name__ == '__main__':
    main()

# num_2 和 num_1 的差是: -3
```

同样，你可以使用各自对应的运算符进行乘法和除法操作。

```
def main():
    num_1 = 15
    num_2 = 12

    print(f'num_1 和 num_2 的乘积是: {num_1 * num_2}')
    print(f'num_1 和 num_2 的商是: {num_1 / num_2}')
    print(f'num_1 和 num_2 的整除商是: {num_1 // num_2}')


if __name__ == '__main__':
    main()

# num_1 和 num_2 的乘积是: 180
# num_1 和 num_2 的商是: 1.25
# num_1 和 num_2 的整除商是: 1
```
```

除非你使用两个除法运算符进行向下取整，否则除法操作的输出将始终是浮点值。

```
def main():
    num_1 = 15
    num_2 = 12

    print(f'floored quotient of num_1 and num_2 is: {num_1 // num_2}')


if __name__ == '__main__':
    main()

# floored quotient of num_1 and num_2 is: 1
```

在这种情况下，结果将四舍五入到最接近的整数-例如，0.25 将被舍弃。因此，仅在数据丢失是允许的情况下执行此操作。

要讨论的最后一个操作是找到除法操作的余数。

```
def main():
    num_1 = 15
    num_2 = 12

    print(f'remainder of num_1 / num_2 is: {num_1 % num_2}')


if __name__ == '__main__':
    main()

# remainder of num_1 / num_2 is: 3
```

这种操作也称为模或模运算。因此，如果有人提到模或模运算符，他们指的是百分号。

你可以通过在前面加上一个 `-` 符号将无符号数变成负数。你还可以自由地在整数和浮点数之间转换。

```
def main():
    float_variable = 1.25
    integer_variable = 55

    print(f'{float_variable} converted to an integer is: {int(float_variable)}')
    print(f'{integer_variable} converted to a float is: {float(integer_variable)}')


if __name__ == '__main__':
    main()

# 1.25 converted to an integer is: 1
# 55 converted to a float is: 55.0
```

在浮点数到整数转换的情况下数据丢失是不可避免的，所以要小心。你也可以在字符串上使用 `int()` 和 `float()` 方法（稍后详述）。

任何涉及浮点数的算术运算将始终产生浮点结果，除非显式转换为整数。

```
def main():
    float_variable = 5.0
    integer_variable = 55

    print(f'the sum of {float_variable} and {integer_variable} is: {float_variable + integer_variable}')
    print(f'the sum of {float_variable} and {integer_variable} '
          f'converted to integer is: {int(float_variable + integer_variable)}')


if __name__ == '__main__':
    main()

# the sum of 5.0 and 55 is: 60.0
# the sum of 5.0 and 55 converted to integer is: 60
```

如果你想获取有符号值的绝对值，可以使用 `abs()` 方法。

```
def main():
    num_1 = -5.8

    print(f'the absolute value of {num_1} is: {abs(num_1)}')


if __name__ == '__main__':
    main()

# the absolute value of -5.8 is: 5.8
```

有一个类似的方法 `pow(x, y)` 可以用来给 `x` 作为 `y` 的次方，如下所示。

```
def main():
    x = 2
    y = 3

    print(f'{2} to the power of {3} is: {pow(2, 3)}')
    print(f'{2} to the power of {3} is: {2 ** 3}')


if __name__ == '__main__':
    main()

# 2 to the power of 3 is: 8
# 2 to the power of 3 is: 8
```

你可以使用两个乘法运算符执行相同的操作，但我更喜欢 `pow()` 方法。

最后有一个 `divmod()` 方法，你可以用来结合除法和模运算。

```
def main():
    num_1 = 8
    num_2 = 2

    print(f'division and modulus of {num_1} and {num_2} is: {divmod(num_1, num_2)}')


if __name__ == '__main__':
    main()

# division and modulus of 8 and 2 is: (4, 0)
```

该方法返回一个数字的元组（稍后详述）。第一个是除法的结果，第二个是模运算的结果。

这些是你可以从一开始就在简单数字上执行的基本操作。但你可以做更多的事情，一旦你开始调用内置模块。

## 如何在 Python 中获取用户输入

学习如何从用户那里获取输入是一个重要的里程碑，因为它允许你创建人类可以交互的程序。

与许多其他编程语言不同，Python 中获取用户输入非常简单。

```
def main():
    name = input('What is your name? ')

    print(f'Nice to meet you {name}')


if __name__ == '__main__':
    main()

# What is your name? Farhan
# Nice to meet you Farhan
```

内置的 `input()` 方法正如其名。该方法接受一个字符串类型的单个参数 `prompt`。

你在此参数中写的任何内容都会显示在控制台上——就像在这个例子中，“What is your name?” 是提示。

一旦用户在控制台上输入内容并按下回车键，input 方法将返回该字符串。

你可以将该字符串保存到任何变量中，就像我将名称保存在 `name` 变量中一样。即使用户输入数字，`input()` 也会将其作为字符串返回。

```
def main():
    name = input('What is your name? ')
    age = input(f'How old are you {name}? ')
    current_year = input(f'What year is this again? ')

    print(f'If my calculations are right, you were born in {current_year - age}')


if __name__ == '__main__':
    main()

# What is your name? Farhan
# How old are you Farhan? 27
# What year is this again? 2023
# TypeError: unsupported operand type(s) for -: 'str' and 'str'
```

尽管 Python 正确接收了所有的用户输入，但由于算术运算不适合字符串，因此无法计算用户的出生年份。

```
def main():
    name = input('你叫什么名字? ')
    age = int(input(f'你多大了 {name}? '))
    current_year = int(input(f'现在是哪一年来着? '))

    print(f'如果我的计算没错，你出生于 {current_year - age}')


if __name__ == '__main__':
    main()

# 你叫什么名字? Farhan
# 你多大了 Farhan? 27
# 现在是哪一年来着? 2023
# 如果我的计算没错，你出生于 1996
```

就这样，效果棒极了。你可以在代码中的任何地方执行这种转换。不一定非要在一开始就转换。

```
def main():
    temperature_in_celsius = input('摄氏温度是多少? ')

    temperature_in_fahrenheit = (float(temperature_in_celsius) * 1.8) + 32

    print(f'{temperature_in_celsius} 摄氏度等于 {temperature_in_fahrenheit} 华氏度.')


if __name__ == '__main__':
    main()

# 摄氏温度是多少? 32
# 32 摄氏度等于 89.6 华氏度.
```

该程序可以将温度从摄氏度转换为华氏度。在这个程序中，我没有立即将输入从字符串转换为数值类型。

我在计算过程中进行了转换，同时保持原始输入变量不变。还要注意使用了 `float()` 而不是 `int()` 函数。

## 如何在 Python 中处理字符串

你已经在前面的章节中看到了字符串的示例——但是关于字符串，还有很多你需要学习的东西。

在 Python 中，任何用单引号、双引号或三重引号括起来的内容都是字符串。这些是代表 Unicode 字符的字节序列。

```
def main():
    book = '德古拉'
    author = "布拉姆·斯托克"

    print('标题:', book)
    print('作者:', author)


if __name__ == '__main__':
    main()

# 标题: 德古拉
# 作者: 布拉姆·斯托克
```

用单引号或双引号声明字符串没有任何区别。但根据具体情况，你可能需要选择其一。

例如，如果你的句子中有撇号，你可能想使用双引号。

```
def main():
    question = "你叫什么名字?"

    print(question)


if __name__ == '__main__':
    main()

# 你叫什么名字?
```

反之亦然。例如，当你的字符串中有直接引用时：

```
def main():
    sentence = '哈丽雅特·雅各布斯写道，“她坐下来，四肢颤抖”'

    print(sentence)


if __name__ == '__main__':
    main()

# 哈丽雅特·雅各布斯写道，“她坐下来，四肢颤抖”
```

如果你愿意，你也可以使用 [转义序列][64]，但 [PEP 8 - Python 代码风格指南][65] 建议避免在字符串中使用反斜杠。

三重引号则是另一回事。你可以在三重引号中放置多行字符串，Python 也会保留空格。

```
def main():
    synopsis = """德古拉由主角们的日记条目、信件和电报组成。
故事始于年轻的英国律师乔纳森·哈克特，他前往特兰西瓦尼亚。
哈克特计划会见德古拉伯爵，他是一位客户，目的是完成一项房产交易。
当他到达特兰西瓦尼亚时，当地人得知他的目的地是德古拉城堡后，表现出恐惧。
虽然这令他有些不安，但他还是继续前行。
当他到达城堡时，空气中响起了狼嚎。
当哈克特见到德古拉时，他意识到这个人苍白、瘦弱且奇怪。
当哈克特在刮胡子时不小心割伤自己，德古拉扑向他的喉咙。
不久之后，哈克特被三位女性吸血鬼诱惑，险些逃脱。
他继而了解到德古拉的秘密——他是吸血鬼，通过吸食人血生存。
哈克特正确地猜到自己是德古拉的下一个目标。
他攻击了德古拉，但未成功。
德古拉把哈克特困在城堡里，然后带着50箱泥土前往英国."""

    print('梗概:', synopsis)


if __name__ == '__main__':
    main()

# 梗概: 德古拉由主角们的日记条目、信件和电报组成。
# 故事始于年轻的英国律师乔纳森·哈克特，他前往特兰西瓦尼亚。
# 哈克特计划会见德古拉伯爵，他是一位客户，目的是完成一项房产交易。
# 当他到达特兰西瓦尼亚时，当地人得知他的目的地是德古拉城堡后，表现出恐惧。
# 虽然这令他有些不安，但他还是继续前行。
# 当他到达城堡时，空气中响起了狼嚎。
# 当哈克特见到德古拉时，他意识到这个人苍白、瘦弱且奇怪。
# 当哈克特在刮胡子时不小心割伤自己，德古拉扑向他的喉咙。
# 不久之后，哈克特被三位女性吸血鬼诱惑，险些逃脱。
# 他继而了解到德古拉的秘密——他是吸血鬼，通过吸食人血生存。
# 哈克特正确地猜到自己是德古拉的下一个目标。
# 他攻击了德古拉，但未成功。
# 德古拉把哈克特困在城堡里，然后带着50箱泥土前往英国。
```

你可以使用三个单引号来声明一个三引号字符串，但 [PEP 8 - Python 代码风格指南][66] 推荐使用三个双引号。

关于字符串还有很多可以学习的内容，但我想先介绍一些 Python 中其他的序列类型。

## Python 中的序列类型有哪些？

在 Python 中，有三种序列类型。它们是列表、元组和范围。我将从列表开始，因为它可能是 Python 中最常用的序列类型。

### Python 中的列表

在 Python 中，列表顾名思义：就是在计算机内存中顺序存储的数据集合。

你可以通过写出列表的名字，后跟一个等号，然后在方括号内写入要存储的值来创建一个新的列表：

```
def main():
    horror_books = ['Dracula', 'Carmilla', 'The Imago Sequence']

    print(horror_books)


if __name__ == '__main__':
    main()

# ['Dracula', 'Carmilla', 'The Imago Sequence']
```

在这个例子中，`horror_books` 是一个字符串列表。但是你也可以创建包含整数、浮点数或甚至混合类型的列表。

```
def main():
    a_random_list = ['Dracula', 1, 5.7, 'Carmilla']

    print(a_random_list)


if __name__ == '__main__':
    main()

# ['Dracula', 1, 5.7, 'Carmilla']
```

尽管这是完全有效的，你可能会发现自己更常创建相同类型的列表。

Python 中的列表是可变的。这意味着你可以在创建之后修改列表。例如，你可以使用 `pop()` 方法来删除列表中的最后一个值。

```
def main():
    horror_books = ['Dracula', 'Carmilla', 'The Imago Sequence']

    print(horror_books.pop())
    print(horror_books)


if __name__ == '__main__':
    main()

# The Imago Sequence
# ['Dracula', 'Carmilla']
```

如你所见，`pop()` 方法返回列表中的最后一个值并删除它。和 `pop()` 类似，有 `append()` 方法可以向列表中插入新项。

```
def main():
    horror_books = ['Dracula', 'Carmilla', 'The Imago Sequence']

    print(horror_books)

    horror_books.append('The Exorcist')

    print(horror_books)


if __name__ == '__main__':
    main()

# ['Dracula', 'Carmilla', 'The Imago Sequence']
# ['Dracula', 'Carmilla', 'The Imago Sequence', 'The Exorcist']
```

从方法名称可以看出，它会在列表末尾添加新项。鉴于它们的可变性，列表也可以排序。

欢迎查阅我的同事 [Dionysia Lemonaki][67] 在 freeCodeCamp 上写的关于如何在 Python 中排序列表的文章：

[https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/][68]

### Python 中的元组

列表并不是 Python 中唯一的序列类型。Python 中与列表最接近的兄弟是元组。

你可以通过写出元组的名字，后跟一个等号，然后在小括号内写入要存储的值来创建一个新的元组。

```
def main():
    horror_books = ('Dracula', 'Carmilla', 'The Imago Sequence')

    print(horror_books)


if __name__ == '__main__':
    main()

# ('Dracula', 'Carmilla', 'The Imago Sequence')
```

和列表一样，你也可以在单个元组中混合不同类型的数据。

```
def main():
    a_random_list = ('Dracula', 1, 5.7, 'Carmilla')

    print(a_random_list)


if __name__ == '__main__':
    main()

# ('Dracula', 1, 5.7, 'Carmilla')
```

列表和元组之间最显著的区别是，元组是不可变的。所以这次不能对它们进行 `pop` 和 `append` 操作。

### Python 中的范围

最后一个你将学习的序列类型是范围。Python 中的范围就是一个数字范围。

你可以通过调用 `range()` 方法来创建一个范围，它将返回一个数字范围。你可以用几种不同的方式调用该方法。

最常见的是传递一个单独的数字作为参数。在这种情况下，该方法将把该数字视为范围的结束并将 0 作为开始。

```
def main():
    a_range = range(10)

    print(a_range)

    list_a_range = list(a_range)

    print(list_a_range)


if __name__ == '__main__':
    main()

# range(0, 10)
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

直接打印范围并不会给你太多信息。你需要通过调用 `list()` 或 `tuple()` 方法将范围转换为列表或元组。

一旦转换，你就可以在控制台打印出整个范围。注意，传递给 `range()` 方法的数字不包含在范围内。

第二种调用方法的方式是同时提供范围的起始和结束数字。

```
def main():
    a_range = range(5, 15)

    print(a_range)

    list_a_range = list(a_range)

    print(list_a_range)

    tuple_a_range = tuple(a_range)

    print(tuple_a_range)


if __name__ == '__main__':
    main()

# range(5, 15)
# [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
# (5, 6, 7, 8, 9, 10, 11, 12, 13, 14)
```

再一次，作为范围结束传递的数字不会包含在结果范围内。

```
def main():
    a_range = range(1, 10, 2)

    print(a_range)

    list_a_range = list(a_range)

    print(list_a_range)

    tuple_a_range = tuple(a_range)

    print(tuple_a_range)


if __name__ == '__main__':
    main()

# range(1, 10, 2)
# [1, 3, 5, 7, 9]
# (1, 3, 5, 7, 9)
```

由于步长（step）的值在这个例子中是2，range将从1开始，然后每隔一个数跳过一个数。

理解这个概念可能需要一些时间，但通过练习不同的步长值会有所帮助。

你还可以阅读[Bala Priya C][69]写的以下文章：

[https://www.freecodecamp.org/news/python-range-function-explained-with-code-examples/][70]

### 索引在Python中的工作原理

关于序列类型，你需要理解的最重要的概念之一是索引。

你看，序列中的每个元素都有一个表示其在列表中位置的编号，这称为索引。这些索引是从0开始的。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/horror-books-list.svg)

这个图代表了我们的恐怖书籍列表。第一本书的索引是0——这意味着第一个元素在第0个位置。

第二本在第1个位置，第三本在第2个位置。这种从零开始的索引乍看可能有点令人困惑，但你会渐渐掌握它。

索引最基本的用法是从序列中访问其对应的值。

```
def main():
    horror_books = ['Dracula', 'Carmilla', 'The Imago Sequence']

    print(horror_books[0])
    print(horror_books[1])
    print(horror_books[2])


if __name__ == '__main__':
    main()

# Dracula
# Carmilla
# The Imago Sequence
```

你还可以使用负数作为索引，但在这种情况下，计数将从末尾开始。

```
def main():
    books = ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow',
             'And Then There Were None', 'The ABC Murders', 'The Valley of Fear']

    print(books[0])

    print(books[1])
    print(books[-1])

    print(books[2])
    print(books[-2])


if __name__ == '__main__':
    main()

# Dracula

# Frankenstein
# The Valley of Fear

# The Omen
# The ABC Murders
```

列表中第0个元素将始终是第一个元素。现在如果你访问第一个位置上的元素，你会得到“Frankenstein”。

但如果你试图访问第-1个位置上的元素，你会得到“The Valley of Fear”，因为那是倒数第二个项目。

第2个位置上的元素是“The Omen”，但第-2个位置上的元素是“The ABC Murders”，因为那是倒数第三个项目。

如果你觉得难以理解，可以将列表想象成一个时钟。

![Image](https://www.freecodecamp.org/news/content/images/2023/01/list-clock.svg) _用圆形图表示像时钟一样的从零开始的索引_

这里外侧的数字是负索引，内侧的数字是正索引。如果你试图将输出与这个假想的时钟匹配，应该会更容易理解。

## 什么是可迭代类型以及如何在Python中使用它们进行循环

到目前为止，你已经学习了如何创建数据集合以及逐个访问它们。这很酷，但有更酷的。

想象一下，你有一个包含大量数字的列表或其他类型的数据集合。

现在你想要将该列表中的每个数字乘以二，将乘得的数字插入一个新列表，并在终端上打印出该列表。

这正是Python中`for`语句的一个极好用例。首先，我们通过遍历给定列表中的每个数字开始。

```
def main():
    random_numbers = [6, 1, 3, 8, 0, 9, 12, 3, 4, 0, 54, 8, 100, 55, 60, 70, 85]

    for number in random_numbers:
        print(number)

if __name__ == '__main__':
    main()

# 6
# 1
# 3
# 8
# 0
# 9
# 12
# 3
# 4
# 0
# 54
# 8
# 100
# 55
# 60
# 70
# 85
```

你先写下单词`for`，后跟一个变量名。我用了`number`，但你也可以用任何对你有意义的名字。

尽管你写的是`for number`，但Python读取时会将其理解为“对于每个数字”，并思考这些数字在哪里呢？

这时，你在`in`之后说出序列的名称，在这个例子中是`random_numbers`。

现在Python理解了你想对`random_numbers`序列中的每个数字做一些事情，但是什么呢？

这就是你要在冒号之后写出的内容，并且要非常注意缩进。任何在for循环声明之后缩进一级的内容都被视为循环体。

在for循环内部，你可以编写任何你想对当前`number`变量的值进行的操作。

由于序列中有17个数字，循环将运行17次，每次循环会有一个新值。

它将从索引0开始，该索引的值为6，然后通过索引1、2、3、4、5，依此类推。

在每次迭代中，它将当前处理的索引的值保存在`number`变量中并打印出来。因此你会看到一长串数字。

你也可以乘以2后再打印出结果值，而不是打印出原值。

```
def main():
    random_numbers = [6, 1, 3, 8, 0, 9, 12, 3, 4, 0, 54, 8, 100, 55, 60, 70, 85]

    for number in random_numbers:
        print(number * 2)

if __name__ == '__main__':
    main()

```

现在你得到了乘法的结果。最后的任务是将这些乘法值插入到一个新列表中，并打印出新列表本身。

```
def main():
    random_numbers = [6, 1, 3, 8, 0, 9, 12, 3, 4, 0, 54, 8, 100, 55, 60, 70, 85]
    multiplied_random_numbers = []

    for number in random_numbers:
        multiplied_random_numbers.append(number * 2)

    print(multiplied_random_numbers)

if __name__ == '__main__':
    main()

# [12, 2, 6, 16, 0, 18, 24, 6, 8, 0, 108, 16, 200, 110, 120, 140, 170]
```

为此，你需要一个空列表。然后，在乘以数字之后，你可以简单地在新列表上调用 `append()` 方法，并传递乘以后的值。

最后，确保你将打印语句放在循环体外，否则你会最终打印出列表17次。

`for` 循环适用于所有序列类型和 Python 语言中的任何可迭代类型。你问什么是可迭代类型。

好吧，任何具有 `__iter__()` 方法的对象在 Python 中都被认为是可迭代的。

你可以在任何对象上调用 `dir()` 函数来列出它的所有方法和属性。以 `random_numbers` 列表为例。

```
def main():
    random_numbers = [6, 1, 3, 8, 0, 9, 12, 3, 4, 0, 54, 8, 100, 55, 60, 70, 85]

    print(dir(random_numbers))

if __name__ == '__main__':
    main()

# ['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

你可以看到一些熟悉的方法，比如 `append`、`count` 和 `index`，但最重要的是它具有 `__iter__` 方法。

随着你在 Python 中不断工作，你最终会记住 `for` 循环支持的类型，但你总是可以在对象上使用 `dir()` 方法来查找。

## 如何在 Python 中使用 While 循环

在 Python 中还有一种循环类型，称为 `while` 循环。与 `for` 不同，`while` 循环可以在给定条件评估为 `true` 时执行语句。

```
def main():
    number = 1
    while number < 11:
        print(number)
        number += 1

if __name__ == '__main__':
    main()

# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
```

这里有一个值为 `11` 的变量 `number` 和一个打印出 `number` 值的 `while` 循环，然后每次递增 `number` 值1。

`while` 循环从写出 `while` 后跟条件开始。然后你在冒号后的下一行开始编写循环体。

`for` 循环在你尝试访问可迭代对象内部的每个元素时很有用。`while` 循环在你想要重复相同的一组指令任意次数时很有用。

`number += 1` 是编写 `number = number + 1` 的另一种方式，这在不同的编程语言中被程序员广泛使用。

## 如何在Python中编写嵌套循环

你还可以在一个循环内嵌套另一个循环。例如，看看下面的打印出乘法表的代码：

```
def main():
    for x in range(1, 6):
        print()
        for y in range(1, 11):
            print(f"{x} x {y} = {x * y}")


if __name__ == '__main__':
    main()

#
# 1 x 1 = 1
# 1 x 2 = 2
# 1 x 3 = 3
# 1 x 4 = 4
# 1 x 5 = 5
# 1 x 6 = 6
# 1 x 7 = 7
# 1 x 8 = 8
# 1 x 9 = 9
# 1 x 10 = 10
#
# 2 x 1 = 2
# 2 x 2 = 4
# 2 x 3 = 6
# 2 x 4 = 8
# 2 x 5 = 10
# 2 x 6 = 12
# 2 x 7 = 14
# 2 x 8 = 16
# 2 x 9 = 18
# 2 x 10 = 20
#
# 3 x 1 = 3
# 3 x 2 = 6
# 3 x 3 = 9
# 3 x 4 = 12
# 3 x 5 = 15
# 3 x 6 = 18
# 3 x 7 = 21
# 3 x 8 = 24
# 3 x 9 = 27
# 3 x 10 = 30
#
# 4 x 1 = 4
# 4 x 2 = 8
# 4 x 3 = 12
# 4 x 4 = 16
# 4 x 5 = 20
# 4 x 6 = 24
# 4 x 7 = 28
# 4 x 8 = 32
# 4 x 9 = 36
# 4 x 10 = 40
#
# 5 x 1 = 5
# 5 x 2 = 10
# 5 x 3 = 15
# 5 x 4 = 20
# 5 x 5 = 25
# 5 x 6 = 30
# 5 x 7 = 35
# 5 x 8 = 40
# 5 x 9 = 45
# 5 x 10 = 50
```

老实说，这是一个非常简单的代码，利用了你在本手册中已经学到的很多东西。

要创建一个乘法表，我们需要两个操作数：一个在整个表中保持不变，另一个增加1，直到达到10。

这里，`x` 代表左操作数或常量操作数，`y` 代表右操作数或变量操作数。

第一个循环迭代范围为1到5，第二个循环迭代范围为1到10。

由于范围的结束数字是排他的，你需要放一个比期望结束数字高1的数字。

首先Python解释器遇到外部循环并开始执行它。在那个循环中，`x` 的值是1。

解释器然后遇到内部循环并开始执行它。在内部循环中，`x` 的值保持为1，但每次迭代中 `y` 的值增加。

在完成内层循环的10次迭代后，解释器会回到外层循环并再次开始执行。

这次`x`的值变为2，因为这是范围内的下一个值。

就这样，外层循环执行了5次，每次迭代内层循环执行10次。

和许多其他概念一样，理解嵌套循环可能会有些困难，但练习会让事情变得容易。

我建议你使用`while`循环来实现这个程序，以测试你的理解。

你还可以从用户那里获取两个数字，并打印出该范围内的乘法表。

例如，如果用户输入5和10，那么你将打印出从5到10所有数字的乘法表。

你可以将循环嵌套到更深的层次，但超过两个循环可能会导致性能问题，所以要小心。

## Python中的一些常见序列类型操作是什么？

假设你还记得文本序列类型（字符串），那么你现在已经熟悉了四种最流行的Python序列类型。

所以我认为现在是时候让你学习一些可以对它们执行的常见操作了。让我们开始吧？

### 如何在Python中使用`in`运算符

`in`运算符是检查任何对象存在与否的最常见方式。例如，假设你有一个字符串并且你想检查它是否包含单词“red”。

```
def main():
    a_string = 'Little Red Riding-Hood comes to me one Christmas Eve to give me information of the cruelty and ' \
               'treachery of that dissembling Wolf who ate her grandmother. '

    print('Red' in a_string)


if __name__ == '__main__':
    main()

# True
```

这就像是在问Python，单词`Red`是否在`a_string`变量中。而Python将给你一个`True`或`False`作为答案。

`in`运算符不仅仅适用于字符串。你实际上可以在任何其他集合类型，如列表、元组和范围中使用它。

```
def main():
    books = ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow']
    movies = ('A Christmas Carol', 'The Sea Beast', 'Enchanted', 'Pinocchio', 'The Addams Family')
    numbers = range(10)

    print('A Christmas Carol' in books)
    print('Enchanted' in movies)
    print(5 in numbers)


if __name__ == '__main__':
    main()

# False
# True
# True
```

《圣诞颂歌》在`books`列表中不存在，所以这是一个`False`语句。其他两个语句是正确的，所以它们是`True`。

你可能还想知道一个对象的缺席。为此，你可以将`not`运算符与`in`运算符结合使用。

```
def main():
    books = ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow']
    movies = ('A Christmas Carol', 'The Sea Beast', 'Enchanted', 'Pinocchio', 'The Addams Family')
    numbers = range(10)

    print('A Christmas Carol' not in books)
    print('Enchanted' not in movies)
    print(15 not in numbers)


if __name__ == '__main__':
    main()

# True
# False
# True
```

《圣诞颂歌》在`books`列表中不存在，所以第一个语句计算结果为`true`。第二个语句计算结果为false，因为《魔法奇缘》存在于`movies`列表中。

最后一个在这一点上不言自明。当在处理条件语句时，`in`和`not in`运算符非常有用。

### 如何在Python中使用`+`和`*`运算符处理序列类型

你已经学会了`+`和`*`作为算术运算符 – 但在序列类型的情况下，它们扮演着完全不同的角色。

`+`运算符可以让你合并两个序列。

```
def main():
    books = ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow']
    more_books = ['And Then There Were None', 'The ABC Murders', 'The Valley of Fear', 'The Hound of the Baskervilles', 'The Chestnut Man']


    print(books + more_books)


if __name__ == '__main__':
    main()

# ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow', 'And Then There Were None', 'The ABC Murders', 'The Valley of Fear', 'The Hound of the Baskervilles', 'The Chestnut Man']
```

如你所见，运算符已将`books`列表的内容添加到`more_books`列表的内容中。

另一方面，`*`运算符可以制作多份给定的序列。

```
def main():
    books = ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow']


    print(books * 2)


if __name__ == '__main__':
    main()

# ['Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow', 'Dracula', 'Frankenstein', 'The Omen', 'The Exorcist', 'The Legend of Sleepy Hollow']
```

因此，将`books`列表乘以2给我们得到列表中所有5本书的两份。这些运算符对元组、字符串、范围或任何其他序列类型都适用。

### 如何在Python中使用`len()`、`min()`和`max()`函数

`len()`函数可以返回给定序列的长度。`min()`和`max()`函数则分别可以返回给定序列中的最小值和最大值。

```
def main():
    random_numbers = [6, 1, 3, 8, 0]


    print(len(random_numbers))
    print(min(random_numbers))
    print(max(random_numbers))


if __name__ == '__main__':
    main()

由于列表中有 5 个元素，所以 `len()` 函数调用的输出是 5。

列表中最小值是 0，最大值是 8，分别是 `min()` 和 `max()` 函数调用的输出。

根据你未来编写的程序类型，这三个函数可能会是一些最有用的函数。

## 在 Python 中有哪些字符串类型操作？

在前一节中，你已经学习了一些可以对任何序列类型（包括字符串）执行的常见操作。

然而，文本序列类型（也就是字符串）有一些特别的操作可供使用。

在本章中，我将向你介绍一些最常见的字符串方法。请记住，这不是一个详尽的列表。

尽管我要教你的每一个方法执行的任务不同，但它们有一个共同点。它们都不会就地修改给定的字符串变量，而是返回一个新的、修改后的副本。

如果你想了解所有可用的字符串方法，可以查阅 Python 官方文档。

[https://docs.python.org/3/library/stdtypes.html#string-methods][71]

还要记住，不只是逐个方法地记住它们的用法就可以了。

重要的是要知道在特定情况下什么方法最有效，并且想出聪明的解决方案。而这需要练习。

### 如何在 Python 中对字符串进行首字母大写处理

你将要学习的第一个方法叫做 `capitalize()`，它的作用如其名。

```
def main():
    country_name = 'bangladesh'

    print(country_name.capitalize())


if __name__ == '__main__':
    main()

# Bangladesh
```

从上面的代码片段可以看出，`capitalize()` 方法将单词的首字母变为大写字母。

这很简单，但让我们尝试在包含多个单词的字符串上使用它 —— 例如一句话。

```
def main():
    book_name = 'the house of silk'

    print(book_name.capitalize())


if __name__ == '__main__':
    main()

# The house of silk
```

尽管该方法完成了它的工作，但有一个小问题。根据你的需求，可能希望每个单词的首字母都大写。

这时 `title()` 方法就派上用场了。此方法返回一个字符串的标题化版本。

```
def main():
    book_name = 'the house of silk'

    print(book_name.title())


if __name__ == '__main__':
    main()

# The House Of Silk
```

但仍然有一个问题。以带有撇号的字符串为例。

```
def main():
    book_name = "alice's adventures in wonderland"

    print(book_name.title())


if __name__ == '__main__':
    main()

# Alice'S Adventures In Wonderland
```

可以看到，`title()` 方法将撇号后的 `s` 视为单独的单词并将其大写。

对于这个问题，[官方文档][72] 说明如下：

> 算法使用了一个简单的语言无关的单词定义，作为连续字母的组。这种定义在很多情况下都有效，但在缩略词和所有格中，撇号会形成单词边界。

`capwords()` 辅助函数可以解决这个问题。此函数根据单词之间的空格将字符串拆分成多个单词，将这些单词首字母大写，再将它们重新组合成一个字符串并返回给用户。

```
from string import capwords


def main():
    book_name = "alice's adventures in wonderland"

    print(capwords(book_name))


if __name__ == '__main__':
    main()

# Alice's Adventures In Wonderland
```

请注意顶部的 `import` 语句。`capwords()` 函数不是字符串类型中的方法，而是一个位于 `string` 模块中的函数。

稍后你将详细学习模块和导入。现在，只需先了解下。虽然该函数使用空格来分隔单词，但你可以覆盖它。

```
from string import capwords


def main():
    address = 'house 42, road 02, wonderland'

    print(capwords(address, ', '))


if __name__ == '__main__':
    main()

# House 42, Road 02, Wonderland
```

可以看到，在这种情况下，字符串的多个部分由逗号和空格分隔开。

`capwords()` 函数可以接受作为其第二个参数的自定义分隔符。你可以传递任意字符串作为分隔符。

最后，有一个 `istitle()` 方法可以检查给定字符串是否为标题化格式。

```
def main():
    book_name = 'hearts in atlantis'

    print(f'Is "{book_name}" in title case? {book_name.istitle()}')
    print(f'Is "{book_name.title()}" in title case? {book_name.title().istitle()}')


if __name__ == '__main__':
    main()

# Is "hearts in atlantis" in title case? False
# Is "Hearts In Atlantis" in title case? True
```

不过要记住，`istitle()` 方法不适用于 `capwords()` 辅助函数。

### 如何在 Python 中将字符串转换为小写或大写

除了首字母大写，你可能想将整个字符串转换为大写或小写。你可以使用 Python 中的 `upper()` 和 `lower()` 方法来实现。

```
def main():
    book_name = 'moriarty'

    print(book_name.upper())

    another_book_name = 'DRACULA'

    print(another_book_name.lower())


if __name__ == '__main__':
    main()

```

也可以使用 `isupper()` 和 `islower()` 方法来检查给定的字符串是否已经是大写或小写状态。

```
def main():
    book_name = 'moriarty'

    print(book_name)
    print(f'Is {book_name} in upper case? {book_name.isupper()}')
    print(f'Is {book_name} in lower case? {book_name.islower()}')

    another_book_name = 'DRACULA'

    print(another_book_name)
    print(f'Is {another_book_name} in upper case? {another_book_name.islower()}')
    print(f'Is {another_book_name} in lower case? {another_book_name.isupper()}')


if __name__ == '__main__':
    main()

# moriarty
# Is moriarty in upper case? False
# Is moriarty in lower case? True
# DRACULA
# Is DRACULA in upper case? True
# Is DRACULA in lower case? False
```

还有一个最后的方法叫做 `casefold()` ，它是一种更为激进的 `lower()` 方法版本。

根据[官方文档][73]：

> casefolding 类似于小写化，但更为激进，因为它旨在消除字符串中的所有大小写区别。例如，德语小写字母 'ß' 相当于 "ss"。由于 'ß' 已经是小写，lower() 方法对其无效；casefold() 会将其转换为 "ss"。

此方法的使用与 `lower()` 方法相同。

```
def main():
    book_name = 'DRACULA'

    print(book_name.casefold())


if __name__ == '__main__':
    main()

# dracula
```

这三种方法都很好，但如果你不想使用这些特定的方法，而只是想切换给定字符串的大小写呢？

`swapcase()` 方法可以做到这一点。

```
def main():
    book_name = 'HEARTS IN ATLANTIS'

    print(book_name.swapcase())


if __name__ == '__main__':
    main()

# hearts in atlantis
```

正如你所看到的，该方法已将书名从大写转换为小写。

### 如何在 Python 中计算子字符串在字符串中出现的次数

如果你想找出一个子字符串在字符串中出现的次数，你可以使用 Python 中的 `count()` 方法。

```
def main():
    paragraph = '''At three in the morning the chief Sussex detective, obeying the urgent call from Sergeant Wilson of 
    Birlstone, arrived from headquarters in a light dog-cart behind a breathless trotter. By the five-forty train in 
    the morning he had sent his message to Scotland Yard, and he was at the Birlstone station at twelve o'clock to 
    welcome us. White Mason was a quiet, comfortable-looking person in a loose tweed suit, with a clean-shaved, 
    ruddy face, a stoutish body, and powerful bandy legs adorned with gaiters, looking like a small farmer, 
    a retired gamekeeper, or anything upon earth except a very favourable specimen of the provincial criminal 
    officer.'''

    substring = 'morning'

    print(f'The substring "{substring}" shows up {paragraph.count(substring)} times in the paragraph.')


if __name__ == '__main__':
    main()

# The substring "morning" shows up 2 times in the paragraph.
```

如果在调用 `count()` 方法时不传递任何参数，该方法会返回给定字符串中的空格数。

### 如何在 Python 中分割和连接字符串

你实际上可以将一个字符串拆分成一个单词列表，或者在 Python 中将一个单词列表拼接成一个字符串。

```
def main():
    string = 'Holmes was certainly not a difficult man to live with'

    word_list = string.split()

    print(word_list)


if __name__ == '__main__':
    main()

# ['Holmes', 'was', 'certainly', 'not', 'a', 'difficult', 'man', 'to', 'live', 'with']
```

如果调用 `split()` 方法时没有任何参数，它会使用空格作为分隔符将给定的字符串拆分成单词。

你可以通过传递自定义分隔符并指定所需的拆分次数来覆盖默认设置。

```
def main():
    string = 'Holmes,was,certainly,not,a,difficult,man,to,live,with'

    word_list = string.split(',', 5)

    print(word_list)


if __name__ == '__main__':
    main()

# ['Holmes', 'was', 'certainly', 'not', 'a', 'difficult,man,to,live,with']
```

这次我将源字符串中的空格替换为逗号。我还用逗号覆盖了默认的分隔符，并将拆分次数固定为五次。

正如你在输出中看到的，有五次拆分，字符串的其余部分作为列表中的第六个元素保持不变。

`split()` 方法适用于有意分隔的数据。对包含标点符号的自然文本使用它可能会产生意外结果。

`split()` 方法的反义词是 `join()` ，它适用于 Python 中的任何迭代类型。

```
def main():
    word_list = ['Holmes', 'was', 'certainly', 'not', 'a', 'difficult', 'man', 'to', 'live', 'with']
    string = ''

    string = string.join(word_list)

    print(string)

    word_list = ['Holmes ', 'was ', 'certainly ', 'not ', 'a ', 'difficult ', 'man ', 'to ', 'live ', 'with']
    string = ''

    string = string.join(word_list)

    print(string)


if __name__ == '__main__':
    main()

# Holmeswascertainlynotadifficultmantolivewith
# Holmes was certainly not a difficult man to live with
```



所以，我在列表中的每个单词后面追加了一个空格，在第二次调用时，该行变得更加易读。

## 如何在 Python 中编写条件语句

这就变得有趣了。在 Python 或任何其他编程语言中，您可以根据条件做出决策。

我希望您还记得前一节中的 `boolean` 数据类型——它只能保存 `True` 或 `False` 值。

好吧，您可以在 Python 中使用带有 `if` 语句（条件语句）的布尔值来有条件地执行操作。

```
def main():
    number = int(input('想要检查哪个数字？\n- '))

    if number % 2 == 0:
        print(f"{number} 是偶数。")
    else:
        print(f"{number} 是奇数。")


if __name__ == '__main__':
    main()

# 想要检查哪个数字？
# - 10
# 10 是偶数。
```

您首先写出 `if`，后接一个条件和一个冒号。这个条件是一个计算结果为布尔值（真或假）的语句。

自开始以来，您一直在使用 `==` 运算符，并且已经知道它检查其左边的值是否等于右边的值。

因此，如果给定数字除以 2 后余数为 0，那这个数字是偶数——否则，它是奇数。

您可以使用 `if...else` 语句在两个不同选项之间进行选择。但是，如果您有多个选项可以选择，您可以使用 `if...elif...else` 语句。

```
def main():
    year = int(input('想要检查哪一年？\n- '))

    if year % 400 == 0 and year % 100 == 0:
        print(f"{year} 是闰年。")
    elif year % 4 == 0 and year % 100 != 0:
        print(f"{year} 是闰年。")
    else:
        print(f"{year} 不是闰年。")


if __name__ == '__main__':
    main()

# 想要检查哪一年？
# - 2004
# 2004 是闰年。
```

`elif` 语句通常在 `if` 语句之后，`else` 语句之前。

可以把它想象成"else if"，所以如果 `if` 语句失败，则由 `elif` 接管。你写它的方式与常规 `if` 语句完全相同。

这个例子中的另一个新事物是 `and` 运算符。它是 Python 中的逻辑运算符之一。它在现实生活中也能做到。

如果 `and` 语句两边的表达式都计算为 `true`，那么整个表达式计算为 `true`。很简单。

如果目前还不完全理解 `and` 运算符，不用担心。您将在下一节中了解它以及它的兄弟姐妹们。

你还需要明白的是，这些 `if` 语句只是常规语句，所以你可以在其中做任何事。

```
def main():
    number = int(input('想要检查哪个数字？\n- '))

    is_not_prime = False

    if number == 1:
        print(f"{number} 不是质数。")
    elif number > 1:
        for n in range(2, number):
            if (number % n) == 0:
                is_not_prime = True
                break

        if is_not_prime:
            print(f"{number} 不是质数。")
        else:
            print(f"{number} 是质数。")


if __name__ == '__main__':
    main()

# 想要检查哪个数字？
# - 10
# 10 不是质数。
```

这个例子比您目前见过的要复杂一些。所以让我来为您分解一下。程序检查一个给定的数字是否是质数。

首先，您从用户那里获取一个数字。一个数是质数的条件是它只能被 1 和其本身整除。因为1 只能被 1 整除，所以它不是质数。

现在，如果给定的数字大于 1，那么您需要将该数字从 2 除到特定的数字。

如果该数字能被这些数字中的任何一个整除，那么您将 `is_not_prime` 变量设置为 `True`，并 `break` 循环。

`break` 语句会立即跳出循环。此外还有 `continue` 语句，它可以跳过当前的迭代而不是跳出循环。

最后，如果 `is_not_prime` 变量为 `True`，那么该数字不是质数，否则它是质数。

所以，如您所见，您不仅可以在条件语句中放入循环，还可以在循环中放入条件语句。

我想展示给您的最后一个例子是 `for...else` 语句。如上面的例子所示，您有一个 `for` 语句紧随一个 `if...else` 语句之后。

```
def main():
    number = int(input('想要检查哪个数字？\n- '))

    if number == 1:
        print(f"{number} 不是质数。")
    elif number > 1:
        for n in range(2, number):
            if (number % n) == 0:
                print(f"{number} 不是质数。")
                break
        else:
            print(f"{number} 是质数。")


if __name__ == '__main__':
    main()

# 想要检查哪个数字？
# - 5
# 5 是质数。
```

如果您将一个 `else` 语句放在 `for` 语句的同一级别，那么当循环结束时，Python 会执行您在那个 `else` 块中放置的内容。

在上面的例子中，你已经见到了 `==` 以及 `and` 操作符的使用。在这一部分，你将详细了解它们。

当你想检查两个操作数之间的关系时，关系运算符会派上用场。这些运算符有六种：

| 运算符 | 解释 | 用法 |
| --- | --- | --- |
| `==` | 等于 | `5 == 5` 返回 `True`，但 `5 == 10` 返回 `False` |
| `!=` | 不等于 | `5 != 10` 返回 `True`，但 `5 != 5` 返回 `False` |
| `>` | 大于 | `10 > 5` 返回 `True`，但 `5 > 10` 返回 `False` |
| `<` | 小于 | `5 < 10` 返回 `True`，但 `10 < 5` 返回 `False` |
| `>=` | 大于或等于 | `10 >= 5` 和 `10 >= 10` 返回 `True`，但 `5 >= 10` 返回 `False` |
| `<=` | 小于或等于 | `5 <= 10` 和 `5 <= 5` 返回 `True`，但 `10 <= 5` 返回 `False` |

你从一开始就一直在使用 `等于` 运算符。其他的运算符你将随着学习的进展逐渐了解。

除了这些，Python 中还有三个逻辑运算符。它们是 `and`、`or` 和 `not` 运算符。

以一个 RPG 游戏为例，主角必须拥有等级 45 或更高的盾牌和等级 48 或更高的剑才能进入下一关。

```
def main():
    shield = int(input('你的盾牌等级是多少？ '))
    sword = int(input('你的剑等级是多少？ '))

    if shield >= 45 and sword >= 48:
        print('你可以通过！')
    else:
        print('你不能通过！')


if __name__ == '__main__':
    main()

# 你的盾牌等级是多少？ 42
# 你的剑等级是多少？ 52
# 你不能通过！
```

除非你满足两个条件，否则该语句将计算为 `False`。你可以在这样的语句中添加更多条件：

```
def main():
    shield = int(input('你的盾牌等级是多少？ '))
    sword = int(input('你的剑等级是多少？ '))
    armor = int(input('你的盔甲等级是多少？ '))

    if shield >= 45 and sword >= 48 and armor >= 25:
        print('你可以通过！')
    else:
        print('你不能通过！')


if __name__ == '__main__':
    main()

# 你的盾牌等级是多少？ 45
# 你的剑等级是多少？ 50
# 你的盔甲等级是多少？ 10
# 你不能通过！
```

另一方面，`or` 运算符更加宽容。如果任何一个条件为真，那么整个语句将计算为真。

例如在另一个恐怖游戏中，你只能进入德古拉城堡，如果你超过 500,000 岁或者法律上已经死亡。

```
def main():
    age = 10_000
    is_legally_dead = True

    if is_legally_dead or age > 500_000:
        print('你可以通过！')
    else:
        print('你不能通过！')


if __name__ == '__main__':
    main()

# 你可以通过！
```

你可以混合使用 `and` 和 `or` 运算符。我不会列出这些运算符的所有可能组合，但随着你持续使用 Python，你会使用到它们。

最后一个我想讨论的逻辑运算符是 `not` 运算符。这个运算符只接受一个操作数并返回相反的值。

```
def main():
    print('not True =', not True)
    print('not False =', not False)


if __name__ == '__main__':
    main()

# not True = False
# not False = True
```

例如，如果你更改上个例子的恐怖游戏规则，使得只有超过 500,000 岁且不是范海辛的人才能进入城堡。

```
def main():
    age = 800_000
    is_van_helsing = True

    if age > 500_000 and not is_van_helsing:
        print('你可以通过！')
    else:
        print('你不能通过！')


if __name__ == '__main__':
    main()

# 你不能通过！
```

既然我们一直在讨论条件语句和一些与之相关的运算符，我想向你介绍另一个在 Python 3.10 中首次引入的语句，即 `match...case` 语句。

[https://www.freecodecamp.org/news/python-switch-statement-switch-case-example/][74]

因为我的同事 [Kolade Chris][75] 已经写了一篇很好的文章来介绍该主题，所以我这里就不再赘述。请随时查看。

## Python 中的赋值运算符是什么？

你已经遇到了简单的赋值运算符，即 `=` 符号，你用它来给变量赋值。

现在有一些这个运算符的变体，你可以用来执行算术和位操作，同时也进行赋值。

位操作有点超出了本书的范围，所以我只讲算术运算。

Python 中有七种不同的赋值运算符。因为你已经了解了简单的赋值运算符，所以我在下面的表格中将讨论其他六种。

| 运算符 | 用法 | 相当于 |
| --- | --- | --- |
| `+=` | `a += b` | `a = a + b` |
| `-=` | `a -= b` | `a = a - b` |
| `*=` | `a *= b` | `a = a * b` |
| `/=` | `a /= b` | `a = a / b` |
| `%=` | `a %= b` | `a = a % b` |
| `**=` | `a **= b` | `a = a ** b` |

这些运算符并不是特有的，在大多数编程资源中，你会在早期章节中看到它们。

假设你想写一个程序来计算给定范围内所有数字的和。

```
def main():
    start = int(input('你想从哪个数字开始?\n- '))
    end = int(input('你想在哪个数字停止?\n- '))

    total = 0

    for number in range(start, end + 1):
        total += number

    print(f"{start} 和 {end} 之间的数字之和是: {total}")


if __name__ == '__main__':
    main()

# 你想从哪个数字开始?
# - 1
# 你想在哪个数字停止?
# - 10
# 1 和 10 之间的数字之和是: 55
```

我希望你记得在 `range()` 函数调用中的结束数字是排他的。所以我必须在结束数字上加 `+1`。

否则这就是一个非常简单的基于范围的 for 循环，它将每个数字添加到 `total` 变量中并在循环结束时打印出来。

## 什么是 Python 中的 Set 类型？

到目前为止，你已经了解了许多可迭代的类型，例如列表、元组以及字符串。还有一种称为 set（集合）的类型。让我们看看一个例子：

```
def main():
    numbers = {1, 2, 3, 4, 5}

    for number in numbers:
        print(number)


if __name__ == '__main__':
    main()

# 1
# 2
# 3
# 4
# 5
```

你可以通过将值放在一组大括号之间来创建一个新的 set。但是请记住，你不能使用大括号创建一个空 set。

你必须使用 `set()` 函数来创建空 set。

```
def main():
    numbers = {}

    print(type(numbers))

    numbers = set()

    print(type(numbers))


if __name__ == '__main__':
    main()

# <class 'dict'>
# <class 'set'>
```

如你所见，使用空大括号创建了一个字典，而 `set()` 函数创建了一个空 set。

Sets 看起来和列表很相似，但它们实际上非常不同。首先，你不能在 set 中放置重复的值。

```
def main():
    numbers_list = [1, 2, 3, 4, 5, 3, 2, 4]

    print(numbers_list)

    numbers_set = set(numbers_list)

    print(numbers_set)


if __name__ == '__main__':
    main()

# [1, 2, 3, 4, 5, 3, 2, 4]
# {1, 2, 3, 4, 5}
```

数字列表可以毫无问题地保存重复值。但是一旦你从该列表创建一个 set，所有重复的值都会消失。

Sets 是可变的，因此你可以使用 `add()` 方法向 set 添加新值。

```
def main():
    numbers = {1, 2, 3, 4, 5}

    numbers.add(500)

    print(numbers)


if __name__ == '__main__':
    main()

# {1, 2, 3, 4, 5, 500}
```

同样，你可以使用 `discard()` 方法从 set 中移除一个项目，或者使用 `clear()` 方法移除所有值。

```
def main():
    numbers = {1, 2, 3, 4, 5}

    numbers.discard(3)

    print(numbers)

    numbers.clear()

    print(numbers)


if __name__ == '__main__':
    main()

# {1, 2, 4, 5}
# set()
```

注意，一个空的 set 显示为 `set()` 而不是 `{}`，因为后者表示一个空字典。

除了 set 永远不会包含重复值这一事实外，该类型还有另一个特性。

你可以在 Python 中使用 sets 执行集合操作，例如并集、交集、补集和差集。

我的同事 [Estefania Cassingena Navone][76] 写了一篇关于 sets、冻结集以及所有你可以在它们上执行的操作的优秀指南。

[https://www.freecodecamp.org/news/python-sets-detailed-visual-introduction/][77]

最后，如果你想全面了解 set 类型，[官方文档][78] 就足够了。

## 什么是 Python 中的 Mapping 类型？

你已经了解了 Python 中的序列类型和 set 类型。那些对于包含大量数据非常有用。

但在存储键值对数据的情况下也是很常见的。例如，一个在线书店需要存储书籍的价格。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    print(programming_books)


if __name__ == '__main__':
    main()

# {'C Programming Language': 35, 'Introduction to Algorithms': 100, 'Clean Code: A Handbook of Agile Software Craftsmanship': 50}
```

这里的变量 `programming_books` 是一种通常称为字典的映射类型。声明字典类似于声明列表或元组，只是你使用的是一组大括号而不是方括号或括号。

大括号内包含了一堆键值对。左侧的字符串是键，右侧的数字是值。你可以使用 `get()` 方法来访问任何键。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    cpl = 'C Programming Language'
    algo = 'Introduction to Algorithms'

    print(f"{cpl} 的价格是 ${programming_books.get(cpl)}")
    print(f"{algo} 的价格是 ${programming_books[algo]}")


if __name__ == '__main__':
    main()

# C Programming Language 的价格是 $35
# Introduction to Algorithms 的价格是 $100
```

或者，你也可以像访问列表一样使用方括号来访问字典项目。

字典是可变的，这意味着你可以添加新项目，移除或更改现有项目。

```markdown
key = 'C Programming Language'

programming_books[key] = 45

programming_books['The Pragmatic Programmer'] = 32

print(programming_books)


if __name__ == '__main__':
    main()

# {'C Programming Language': 45, 'Introduction to Algorithms': 100, 'Clean Code: A Handbook of Agile Software Craftsmanship': 50, 'The Pragmatic Programmer': 32}
```

你可以通过使用方括号并为其赋值来更改现有的项目。C Programming Language 的价格上涨了 10 美元。

如果你在方括号内放一个不存在的键，那么它将作为一个新项目显示出来。The Pragmatic Programmer 的价格之前不在字典中，但现在它已经被添加了。

要从字典中删除一个项目，你可以使用 `popitem()` 或 `pop()` 方法。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    print(programming_books.popitem())

    key = 'C Programming Language'

    print(programming_books.pop(key))

    print(programming_books)


if __name__ == '__main__':
    main()

# ('Clean Code: A Handbook of Agile Software Craftsmanship', 50)
# 35
# {'Introduction to Algorithms': 100}
```

`popitem()` 方法删除字典中的最后一个项目，并将其作为元组返回。

另一方面，`pop()` 方法根据给定的键返回值并删除该对。

最终的 `print()` 函数调用显示，由于调用了两个 `pop` 方法，确实从字典中删除了两个项目。

最后，有一个 `clear()` 方法可以一次性清除给定字典中的所有键值对。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    programming_books.clear()

    print(programming_books)


if __name__ == '__main__':
    main()

# {}
```

### Python 中的字典视图对象是什么？

在本节中，你看到的是打印出的字典，它们是逗号分隔的长行，包含在一对大括号之间 —— 但这并不太易读。

这时候视图对象变得很有用。你可以在字典上调用一些特定的方法，并返回视图对象。

我要讨论的第一个方法是 `keys()` 方法。它返回给定字典的键，你可以遍历它们。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    for key in programming_books.keys():
        print(key)


if __name__ == '__main__':
    main()

# C Programming Language
# Introduction to Algorithms
# Clean Code: A Handbook of Agile Software Craftsmanship
```

就像 `keys()` 方法一样，还有一个 `values()` 方法，它返回字典中的值。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    for value in programming_books.values():
        print(value)


if __name__ == '__main__':
    main()

# 35
# 100
# 50
```

最后，如果你想同时得到键和值作为元组，你可以使用 `items` 方法。

```
def main():
    programming_books = {
        'C Programming Language': 35,
        'Introduction to Algorithms': 100,
        'Clean Code: A Handbook of Agile Software Craftsmanship': 50
    }

    for item in programming_books.items():
        print(item)


if __name__ == '__main__':
    main()

# ('C Programming Language', 35)
# ('Introduction to Algorithms', 100)
# ('Clean Code: A Handbook of Agile Software Craftsmanship', 50)
```

## 如何在 Python 中编写函数

Python 中（以及编程的一般情况）一个函数是一个自包含的指令集合，它执行一个任务。

```
def print_hello():
    print('Hello, World!')


def main():
    print_hello()


if __name__ == '__main__':
    main()

# Hello, World!
```

你可以通过编写 `def` 后跟函数名和一个冒号来定义一个函数。然后可以从下一行缩进开始编写函数体。

在这个例子中，`print_hello()` 在终端上打印出 `Hello, World!`。它不接受任何参数。

```
def print_hello(message):
    print(message)


def main():
    print_hello('Hello, Universe!')


if __name__ == '__main__':
    main()

# Hello, Universe!
```

现在，不再是每次都打印 `Hello, World!`，你可以传递一个自定义消息让函数打印出来。

你可以让一个函数接受多个参数，甚至为它设置一个默认值。

```
def print_hello(message, is_lower=False):
    if is_lower:
        print(message.lower())
    else:
        print(message.upper())


def main():
    print_hello('Hello, Universe!')
    print_hello('Hello, Universe!', True)


if __name__ == '__main__':
    main()

# HELLO, UNIVERSE!
# hello, universe!
```
```

与其直接打印出信息，你可以让函数返回信息。

```
def hello(message, is_lower=False):
    if is_lower:
        return message.lower()
    else:
        return message.upper()


def main():
    print(hello('Hello, Universe!'))
    print(hello('Hello, Universe!', True))


if __name__ == '__main__':
    main()

# HELLO, UNIVERSE!
# hello, universe!
```

由于函数不再直接打印出信息，将其名字从 `print_hello()` 改为 `hello()` 更加合理。

当你调用该函数时，无论是否传递自定义信息，函数返回一个字符串，可以在 `main()` 函数中打印出来。

你也可以将信息保存在变量中，而不是直接传递给 `print()` 函数。

```
def hello(message, is_lower=False):
    if is_lower:
        return message.lower()
    else:
        return message.upper()


def main():
    uppercase_message = hello('Hello, Universe!')
    print(uppercase_message)

    lowercase_message = hello('Hello, Universe!', True)
    print(lowercase_message)


if __name__ == '__main__':
    main()

# HELLO, UNIVERSE!
# hello, universe!
```

不仅仅是单个值，你还可以传递列表、元组、字典或其他对象给函数。

```
def total(numbers):
    s = 0
    for number in numbers:
        s += number
    return s


def main():
    print(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


if __name__ == '__main__':
    main()

# 55
```

在这个函数中，你可以传递一个数字列表，并获取它们的总和。我必须将函数命名为 `total()` 而不是 `sum()`，因为有一个内置函数与此同名。

在这一节中，我还想讨论的最后一个关于函数的概念是递归。

在 Python 或编程中，递归是一种使函数自己调用自己的技术，以迭代地执行任务。

比如，想象一个接受整数并计算所有自然数的总和的函数。你可以用循环写这个程序。

```
def natural_sum(last_number):
    if last_number < 1:
        return last_number

    total = 0
    for number in range(1, last_number + 1):
        total += number

    return total


def main():
    last_number = int(input('你想计算到哪个数字的总和？\n- '))

    print(natural_sum(last_number))


if __name__ == '__main__':
    main()

# 你想计算到哪个数字的总和？
# - 10
# 55
```

这并没有什么新内容，只是常规使用基于范围的 for 循环。现在，你还可以不使用任何循环写同样的程序。

```
def recursive_natural_sum(last_number):
    if last_number < 1:
        return last_number

    return last_number + recursive_natural_sum(last_number - 1)


def main():
    last_number = int(input('你想计算到哪个数字的总和？\n- '))

    print(recursive_natural_sum(last_number))


if __name__ == '__main__':
    main()

# 你想计算到哪个数字的总和？
# - 10
# 55
```

乍看上去，这段代码可能看起来很复杂。但实际上它很简单。让我们一步步分解。

当你第一次以值 10 调用 `recursive_natural_sum()` 函数时，你启动了一种链式反应。

由于值不小于 1，`if` 语句的结果为 `False`，第二个 `return` 语句被调用。

在那个 `return` 语句中，你传递 `last_number - 1` 的值（此时为 9）来调用 `recursive_natural_sum()` 函数。

你还将这个调用返回的值加到当前 `last_number` 变量的值上。

但是你不会得到返回值，因为你的内部函数调用会再次调用自己并传递 `last_number - 1`，此时为 8。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/recursion-1.drawio.svg)

这种调用会一直进行，直到 `last_digit` 变为零。一旦它变为零，`if` 语句的结果为 `True` 并且函数调用开始返回一个值。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/recursion-2.drawio-1.svg)

从每个函数调用返回的值是 `last_digit + (last_digit - 1)`，到递归链结束时，它相加为 55。

我的同事[Beau Carnes][79] 写了一篇更深入的文章讨论递归的工作原理。如果你想了解更多，可以看看这篇文章。

[https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/][80]

我不是说递归函数比循环更容易—但有时，使用递归函数而不是嵌套循环可能更加高效。

### 如何在 Python 中编写匿名或 Lambda 函数

匿名或 Lambda 函数是没有名称的函数。这不仅是 Python 专有的，大多数现代编程语言都有某种 Lambda 实现。

你可以这样编写匿名函数：

```
print_hello = lambda: print('Hello, World!')


def main():
    print_hello()


if __name__ == '__main__':
    main()
```

由于 lambda 没有名字，你必须将其放入一个变量中以便访问，但这并不推荐。如果你需要一个命名函数，使用 `def` 更好。

Lambda 函数在你需要将函数作为参数传递给另一个函数调用时非常有用。以 `filter()` 函数为例。

```
def check_even(number):
    if number % 2 == 0:
        return True
    else:
        return False


def main():
    numbers = [1, 2, 5, 4, 7, 88, 12, 15, 55, 77, 95]

    even_numbers = filter(check_even, numbers)

    print(list(even_numbers))


if __name__ == '__main__':
    main()

# [2, 4, 88, 12]
```

`filter()` 函数接受一个函数和一个可迭代类型作为它的两个参数。函数应描述过滤逻辑，而可迭代类型将包含你要过滤的值。

在这段代码中，你有一个数字列表，你想从该列表中过滤掉奇数。

`check_even()` 函数接收一个数字作为参数。如果该数字能被二整除，则返回 `True`，否则返回 `False`。

`filter()` 函数遍历数字列表并将每个数字传递给 `check_even()` 函数。

如果 `check_even()` 函数返回 `True`，它将保留该数字；否则，如果 `check_even()` 函数返回 `False`，它将丢弃该数字。

现在，这个 `check_even()` 函数除了检查给定数字是否能被二整除外没有其他用途。因此，你可以将其写成一个 lambda。

```
def main():
    numbers = [1, 2, 5, 4, 7, 88, 12, 15, 55, 77, 95]

    even_numbers = filter(lambda number: True if number % 2 == 0 else False, numbers)

    print(list(even_numbers))


if __name__ == '__main__':
    main()

# [2, 4, 88, 12]
```

这个 lambda 接收一个名为 `number` 的参数。如果该参数能被二整除，就返回 `True`，否则返回 `False`。

你可以通过逗号分隔来添加多个参数。最后，lambda 不需要 return 语句，但你可以假设它会返回结果。

因此 `True if number % 2 == 0 else False` 等同于 `return True if number % 2 == 0 else False`。lambda 内部的 `if...else` 语句是简写形式。

### 如何在 Python 中使用 local、nonlocal 和 global 变量

变量在 Python 或编程中的作用域通常是指该变量可访问的区域。

```
def outside():
    message = 'Hello, World!'


def main():
    print(message)


if __name__ == '__main__':
    main()

# NameError: name 'msg' is not defined
```

在这个例子中，`message` 变量是在 `outside()` 函数内定义的，其它地方不存在它的任何实际存在。

因此，当你试图从 `main()` 函数中访问该变量时，会得到一个 `NameError`，因为该变量的作用域仅限于 `outside()` 函数。

像这样的变量被称为局部变量，它们仅在声明它们的块内存在。

另一方面，全局变量通常声明在任何特定代码块之外。

```
message = 'Hello, World!'


def main():
    print(message)


if __name__ == '__main__':
    main()

# Hello, World!
```

如你所见，现在 `message` 变量没有缩进，并声明在函数的顶部。你也可以在 `main()` 函数后声明该变量。

```
def main():
    print(message)


message = 'Hello, World!'

if __name__ == '__main__':
    main()

# Hello, World!
```

这是可行的，因为在调用 `if` 语句内的 `main()` 函数之前，你没有尝试访问该变量。

尽管全局变量在几乎任何地方都可以访问，但如果你有一个名字相似的局部变量，它们的使用可能有点棘手。

```
message = 'Hello, {name}!'


def main():
    message = message.format(name='Farhan')
    print(message)


if __name__ == '__main__':
    main()

# UnboundLocalError: local variable 'message' referenced before assignment
```

在这段代码中，你在 `message` 变量中有一个名字占位符。你可以使用 `format()` 方法在那里放一个名字。

但如果你尝试运行此代码，你会得到一个 `local variable 'message' referenced before assignment` 错误。简单地说，你在试图访问名为 `message` 的局部变量时，还没有对它进行任何赋值。

显然，Python 在查找具有给定名字的局部变量，而不是访问全局变量。既然它在查找局部变量，那就给它一个局部变量试试。

```
message = 'Hello, {name}!'


def main():
    message = str()

    message = message.format(name='Farhan')
    print(message)


if __name__ == '__main__':
    main()
```

这次错误已经消失，但你的控制台不会有任何输出。这是因为局部 `message` 变量是空的，没有占位符来放名字。

这时 `global` 关键字发挥了作用。你可以告诉 Python 你要访问的是全局 `message` 变量，而不是创建局部变量。

```
message = 'Hello, {name}!'


def main():
    global message

    message = message.format(name='Farhan')
    print(message)


if __name__ == '__main__':
    main()

# Hello, Farhan!
```

现在，Python 不会在局部作用域内查找名为 `message` 的变量，而是直接访问全局作用域。

最后，还有一个通常在嵌套函数中使用的 `nonlocal` 关键字。它解决了与 `global` 关键字类似的问题，但在局部作用域内。

```python
def include_name():
    message = message.format(name=name)

include_name()
return message


def main():
    print(greet('Farhan'))


if __name__ == '__main__':
    main()

# UnboundLocalError: local variable 'message' referenced before assignment
```

在这个例子中，你处理了三个函数。有 `main()` 函数，有 `greet()` 函数，而在 `greet()` 函数的本地范围内定义了 `include_name()` 函数。

`greet()`函数接收一个名为 `name` 的参数，但并没有立即将其包含在消息中。

相反，它调用在其本地范围内定义的 `include_name()` 函数。问题就出在这里。

你看，`message` 变量在 `include_name()` 函数的范围之外，这就是你收到 `referenced before assignment（引用前未赋值）` 错误消息的原因。

```python
def greet(name):
    message = 'Hello, {name}!'

    def include_name():
        global message

        message = message.format(name=name)

    include_name()
    return message


def main():
    print(greet('Farhan'))


if __name__ == '__main__':
    main()

# NameError: name 'message' is not defined
```

你也不能使用 `global` 关键字，因为 `message` 变量未在全局范围内定义，这就是错误消息所表达的意思。

你可以使用 `nonlocal` 关键字来使用那些不在全局范围内但在外部函数范围内的变量。

```python
def greet(name):
    message = 'Hello, {name}!'

    def include_name():
        nonlocal message
        message = message.format(name=name)

    include_name()
    return message


def main():
    print(greet('Farhan'))


if __name__ == '__main__':
    main()

# Hello, Farhan!
```

现在 `include_name()` 函数将会在 `greet()` 函数的范围内查找 `message` 变量，而不是在其本地范围内。

### 如何使用 *args 和 **kwargs 向函数传递可变数量的参数

想象一个接受一堆数字作为参数并返回它们和的函数。在这样的函数里，能够传递可变数量的参数是很实用的。

当然，你可以将数字作为元组或列表传递，但你可能想以逗号分隔的常规参数形式传递它们。你可以通过在Python中使用 `*args` 或非关键字参数来实现这一点。

```python
def total(*args):
    print(type(args))

    t = 0
    for arg in args:
        t += arg

    return t


def main():
    print(total(1, 2, 3, 4, 5))


if __name__ == '__main__':
    main()

# <class 'tuple'>
# 15
```

在这里，你可以将任意数量的变量作为参数传递给 `total()` 函数，并可以在该函数中以元组的形式访问它们。

它不一定命名为 `*args`，你可以将其命名为更具描述性的 `*numbers` 或其他名称。只要你在前面加上星号就可以。

类似于 `*args` 还有 `**kwargs` 或关键字参数，它可以让你以字典的形式访问函数参数。

```python
def items(**kwargs):
    print(type(kwargs))

    for key, value in kwargs.items():
        print(f"{key} : {value}")


def main():
    items(
        Apple=10,
        Orange=8,
        Grape=35
    )


if __name__ == '__main__':
    main()

# <class 'dict'>
# Apple : 10
# Orange : 8
# Grape : 35
```

在这种情况下，你可以传递任意数量的键值对，并可以在 `items()` 函数中以字典的形式访问它们。

就像 `*args` 关键词一样，你不必一定要将其命名为 `**kwargs`。你可以将其命名为任何你想要的名称。

只要你在前面加上双星号，就可以了。字典中的 `items()` 方法允许你遍历它们。

你也可以更改 `key` 和 `value` 变量的名称。更具可读性的版本如下：

```python
def items(**fruits):
    print(type(fruits))

    for fruit, price in fruits.items():
        print(f"{fruit} : {price}")


def main():
    items(
        Apple=10,
        Orange=8,
        Grape=35
    )


if __name__ == '__main__':
    main()

# <class 'dict'>
# Apple : 10
# Orange : 8
# Grape : 35
```

请记住，在这种情况下，键的类型必须是字符串，而值可以是你想要的任何类型。

## 什么是Python模块？

随着项目的增长，将代码拆分成多个文件变得必要。Python 中的模块只是包含 Python 代码的文件，你可以在其他 Python 文件中导入这些代码。

例如，假设你有一个包含两个文件的 Python 项目。第一个文件可能是 "mathstuff.py"，另一个文件可能是 "main.py"。

"mathstuff.py" 文件可以包含与数学相关的内容，例如一个计算某个范围内所有自然数之和的函数。

```python
# mathstuff.py

def natural_sum(last_number):
    if last_number < 1:
        return last_number

    total = 0
    for number in range(1, last_number + 1):
        total += number

    return total
```

现在，你可以在其他任何文件中导入这个函数，例如 "main.py" 文件。

```python
import mathstuff


def main():
    last_number = int(input('你想计算到哪个数字的和？\n- '))
```

```python
if __name__ == '__main__':
    main()

# up to which number would you like to calculate the sum?
# - 10
# 55
```

`import` 语句，顾名思义，从其他文件或模块中导入代码片段。

在一个 Python 模块中包含多个函数、变量或其他对象并不罕见，有时你可能只想使用其中的一些。

在这些情况下，你可以使用 `from...import` 语句。

```python
from mathstuff import natural_sum


def main():
    last_number = int(input('up to which number would you like to calculate the sum?\n- '))

    print(natural_sum(last_number))


if __name__ == '__main__':
    main()

# up to which number would you like to calculate the sum?
# - 10
# 55
```

它还可以避免每次想访问模块中的函数或对象时都必须写模块名称。

最后，你可以使用 `as` 关键字更改导入模块的名称，以使其更容易访问。

```python
import mathstuff as math


def main():
    last_number = int(input('up to which number would you like to calculate the sum?\n- '))

    print(math.natural_sum(last_number))


if __name__ == '__main__':
    main()

# up to which number would you like to calculate the sum?
# - 10
# 55
```

也适用于 `from...import` 语句。

```python
from mathstuff import natural_sum as nsum


def main():
    last_number = int(input('up to which number would you like to calculate the sum?\n- '))

    print(nsum(last_number))


if __name__ == '__main__':
    main()

# up to which number would you like to calculate the sum?
# - 10
# 55
```

导入模块是你必须一直做的事情。除了模块，还有包的概念。

在这些示例中，两个文件都在同一个文件夹中。包是一种将相关的 Python 模块放在不同文件夹中存放的小技巧。

例如，在一个 Web 框架中，你可能有一个名为 `framework` 的包，里面包含了这个 Web 框架的所有代码。

这个 `framework` 包可以有多个子包——例如可能有一个名为 `http` 的包，用于处理 HTTP 请求和响应。

```plaintext
├───framework
│   └───http
```

目前，这些只是普通文件夹。要将它们变成 Python，你只需要在它们内部创建 `__init__.py` 文件。

```plaintext
├───framework
│   │   __init__.py
│   │
│   └───http
│           __init__.py
```

现在这些文件已变成包。这些 `__init__.py` 文件会告诉 Python 导入系统这些文件夹确实是包。

最后，要在 `http` 包中放入一些代码，创建一个名为 `response.py` 的文件，内容如下：

```python
# framework/http/response.py

from json import dumps


def as_json(message):
    return dumps({
        'message': message
    })
```

首先，你正在从 `json` 包中导入 `dumps` 函数。这些是 Python 标准库的一部分。

`dumps` 函数可以将字典等 Python 对象转换为 JSON 字符串，这意味着 `as_json()` 函数以 JSON 格式返回给定的值。

```json
{"message": "Hello, World"}
```

现在你可以在 `main.py` 文件中导入这个函数。

```python
from framework.http.response import as_json


def main():
    print(as_json('Hello, World!'))


if __name__ == '__main__':
    main()

# {"message": "Hello, World"}
```

你可以将 `as_json()` 函数放到另一个 Python 文件中，也可以直接放到 `framework/http/__init__.py` 文件中。

然后你可以更新 `main.py` 文件以使用更新的包路径。

```python
from framework.http import as_json


def main():
    print(as_json('Hello, World!'))


if __name__ == '__main__':
    main()

# {"message": "Hello, World"}
```

如果你曾尝试过像 Django 这样的框架，你会看到该框架包含大量包，因此了解导入系统如何工作对你会有很大帮助。

## 如何高效使用 Python 文档

既然你已经不再是 Python 程序员的新手，我想向你展示如何浏览官方的 Python 文档。

你可能会认为，浏览文档并不难，你绝对是对的。但起初可能会令人望而生畏。

所以我要做的是告诉你我整个职业生涯中如何使用文档的简介。

第一步是访问 [https://docs.python.org/](https://docs.python.org/)，你会自动进入最新版本 Python 的文档页面。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/image-154.png) _Python 文档 ([https://docs.python.org/](https://docs.python.org/))_

在写这篇文章时，最新版本的 Python 是 3.11.4，然而我电脑上仍然安装了 3.10.11 版本。

一开始你就可以看到许多不同的链接，老实说，你不会立即需要所有这些链接。

找到每个链接对应的页面的最佳方法是查看你觉得有趣的内容。

我将介绍三个对我帮助很大的链接。第一个是 "Tutorial" 页面。
```

回到我从 C 语言转向 Python 时，这是我看过的教程。该教程从 Python 解释器的介绍开始。

然后它教你数据类型、控制流语句、数据结构、模块、错误处理、标准库，甚至面向对象编程等主题。

另一个极其有用的页面是“术语表”页面。它包含了你在使用 Python 时可能遇到的所有重要术语的列表。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/image-156.png) _Glossary (https://docs.python.org/3/glossary.html)_

所以，如果你在任何时候觉得你不知道某个词的意思，看看术语表。

最后，“库参考”页面详细描述了标准 Python 库中包含的所有内容。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/image-158.png) _Library Reference (https://docs.python.org/3/library/index.html)_

比如说，我想了解上下文管理器类型（这超出了本书的范围）。我只需在“内置类型”部分下查询。

或者如果你想了解其他内容，例如 JSON 包，你可以在库参考中搜索 JSON——你肯定会找到相关的信息。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/image-159.png) _JSON is under the Internet Data Handling section ()_

点击链接会让你访问描述 JSON 包如何工作的页面。

![Image](https://www.freecodecamp.org/news/content/images/2023/08/image-160.png) _JSON encoder and decoder (https://docs.python.org/3/library/json.html)_

该页面不仅包含文本，还包含实际且非常有用的代码示例。

官方文档将成为你最可靠和最深入的学习资源，所以越早习惯使用它越好。

## 接下来是什么？

正如我所说，这本书不是 Python 的权威指南——这意味着还有很多东西要学习。在本节中，我将列出一些不同的资源。

### 面向对象编程

在完成这本手册后，你可能首先要学习的是使用 Python 进行面向对象编程。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ej_02ICOIgs" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

这个综合视频课程托管在 freeCodeCamp YouTube 频道。它稍超过 2 小时，涵盖了基本概念。

面向对象编程不仅仅是学习类、对象和继承等概念。

写好面向对象的代码需要大量的练习，一切从基础开始。花点时间学习，确保理解所有内容。

### 算法和数据结构

列表上的第二项，如果你想成为一名高效的程序员，那绝对应该学习的是数据结构和算法。

<iframe width="560" height="315" src="https://www.youtube.com/embed/8hly31xKli0" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

幸运的是，freeCodeCamp YouTube 频道上托管了一些由最优秀的老师制作的非常全面的视频。

该视频略超过 5 小时，作为初学者将教你所有关于数据结构和算法的知识。

这个课程不会立刻让你成为一个更好的程序员，但它会教你一种更好、更高效的思维方式来考虑问题。

### Django

如果你想使用 Python 进行 Web 开发，Django 是其中最受欢迎的选择之一。

<iframe width="560" height="315" src="https://www.youtube.com/embed/o0XbHvKxw7Y" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

freeCodeCamp YouTube 频道上托管了这门由世界上最好的老师之一 Chuck 博士教授的长达 18 小时的课程。

该课程不仅从头开始教授 Django，还讲授了与 Web 本身相关的一长串概念。

在进入 Django 的世界之前，拥有良好的面向对象编程理解非常重要，所以确保你已经掌握了。

### Qt

Python 可能不是构建图形用户界面的最流行语言，但它在这方面也是非常有能力的。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z1N9JzNax2k" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

在这个长达5小时的课程中，你将学习使用Qt创建用户界面的所有基础知识，并在短时间内创建跨平台、健壮的软件。

### PyGame

就像跨平台图形用户界面一样，当谈到游戏编程时，Python并不是最受欢迎的选择。

<iframe width="560" height="315" src="https://www.youtube.com/embed/R9apl6B_ZgI" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

然而，PyGame库是一个非常强大且易于使用的库，用于用Python编写2D游戏。

在这个近7小时的Python游戏编程课程中，你将学习编写一个模仿非常流行的《星露谷物语》的游戏。

毫无疑问，这是一段非常具有挑战性的视频，但制作游戏也是如此。因此，如果你对游戏开发和Python感兴趣，这可能是你需要的课程。

### 数据科学

数据科学可以说是Python发挥巨大作用的最热门领域。成为数据科学家可能需要数年时间，但你得从某个地方开始。

<iframe width="560" height="315" src="https://www.youtube.com/embed/LHBE6Q9XlzI" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

freeCodeCamp YouTube频道上的这门长达12小时的课程教你如何在数据科学中使用你的Python知识。

虽然该课程没有深入探讨数据科学的领域，但它教你使用一些数据科学中经常使用的非常重要的库。

在课程结束时，你还将通过应用整个课程中学到的所有知识来创建一个项目。

## 结论

我衷心感谢你花时间阅读这篇文章。

虽然我在这里只列出了一小部分课程，但[freeCodeCamp YouTube频道][83]充满了出色的Python学习资源。

请记住，本手册是一个动态文档，我会不时更新。因此，将其书签保存可能是个好主意。

我还有一个个人博客，那里写了一些随意的科技话题，如果你对此感兴趣，请看看[https://farhan.dev][84]。

如果你有任何问题或对任何事情感到困惑，或者只是想联系我，我在[Twitter][85]和[LinkedIn][86]上都可以找到。

[1]: #heading-prerequisites
[2]: #heading-how-to-setup-python-on-your-computer
[3]: #heading-how-to-install-a-python-ide-on-your-computer
[4]: #heading-how-to-create-a-new-project-on-pycharm
[5]: #heading-how-to-write-the-hello-world-program-in-python
[6]: #heading-how-to-initialize-and-publish-a-git-repository-from-pycharm
[7]: #heading-how-to-work-with-variables-and-different-types-of-data-in-python
[8]: #heading-how-to-work-with-simple-numbers-in-python
[9]: #heading-how-to-take-inputs-from-users-in-python
[10]: #heading-how-to-work-with-strings-in-python
[11]: #heading-what-are-the-sequence-types-in-python
[12]: #heading-lists-in-python
[13]: #heading-tuples-in-python
[14]: #heading-ranges-in-python
[15]: #heading-how-indexing-works-in-python
[16]: #heading-what-are-the-iterable-types-and-how-to-use-them-for-loops-in-python
[17]: #heading-how-to-use-while-loops-in-python
[18]: #heading-how-to-write-nested-loops-in-python
[19]: #heading-what-are-some-common-sequence-type-operations-in-python
[20]: #heading-how-to-use-the-in-operator-in-python
[21]: #heading-how-to-use-the-and-operators-with-sequence-types-in-python
[22]: #heading-how-to-use-the-len-min-and-max-functions-in-python
[23]: #heading-what-are-some-string-type-operations-in-python
[24]: #heading-how-to-capitalize-strings-in-python
[25]: #heading-how-to-convert-strings-to-lower-case-or-upper-case-in-python
[26]: #heading-how-to-count-the-number-of-occurrences-of-a-substring-in-a-string-in-python
[27]: #heading-how-to-split-and-join-strings-in-python
[28]: #heading-how-to-write-conditional-statements-in-python
[29]: #heading-what-are-relational-and-logical-operators-in-python
[30]: #heading-what-are-assignment-operators-in-python
[31]: #heading-what-is-the-set-type-in-python
[32]: #heading-what-is-the-mapping-type-in-python
[33]: #heading-what-are-dictionary-view-objects-in-python
[34]: #heading-how-to-write-functions-in-python
[35]: #heading-how-to-write-anonymous-or-lambda-functions-in-python
[36]: #heading-how-to-work-with-local-nonlocal-and-global-variables-in-python
[37]: #heading-how-to-pass-a-variable-number-of-arguments-to-a-function-using-args-and-kwargs-in-python
[38]: #heading-what-are-modules-in-python
[39]: #heading-how-to-use-the-python-documentation-efficiently
[40]: #heading-whats-next
[41]: #heading-object-oriented-programming
[42]: #heading-algorithms-and-data-structures
[43]: #heading-django
[44]: #heading-qt
[45]: #heading-pygame
[46]: #heading-data-science
[47]: #heading-conclusion
[48]: https://www.freecodecamp.org/news/author/dillionmegida/
[49]: https://www.freecodecamp.org/news/how-to-install-python-3-on-mac-and-update-the-python-version-macos-homebrew-command-guide/
[50]: https://www.freecodecamp.org/news/author/fahimbinamin/
[51]: https://www.freecodecamp.org/news/how-to-install-python-in-windows-operating-system/
[52]: https://code.visualstudio.com/
[53]: https://www.jetbrains.com/pycharm/
[54]: https://www.freecodecamp.org/news/how-to-configure-visual-studio-code-for-python-development/
[55]: https://www.jetbrains.com/pycharm/buy/
[56]: https://www.jetbrains.com/pycharm/download/
[57]: https://virtualenv.pypa.io/
[58]: https://git-scm.com/
[59]: https://www.freecodecamp.org/news/git-first-time-setup/
[60]: https://www.freecodecamp.org/news/author/bolajiayodeji/
[61]: https://www.toptal.com/developers/gitignore/
[62]: https://peps.python.org/pep-0008/#function-and-variable-names
[63]: https://peps.python.org/pep-0008/#names-to-avoid
[64]: https://www.freecodecamp.org/news/escape-sequences-python/
[65]: https://peps.python.org/pep-0008/#string-quotes
[66]: https://peps.python.org/pep-0008/#string-quotes
[67]: https://www.freecodecamp.org/news/author/dionysia/
[68]: https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/
[69]: https://www.freecodecamp.org/news/author/bala-priya/
[70]: https://www.freecodecamp.org/news/python-range-function-explained-with-code-examples/
[71]: https://docs.python.org/3/library/stdtypes.html#string-methods
[72]: https://docs.python.org/3/library/stdtypes.html#str.title
[73]: https://docs.python.org/3/library/stdtypes.html#str.casefold
[74]: https://www.freecodecamp.org/news/python-switch-statement-switch-case-example/
[75]: https://www.freecodecamp.org/news/author/kolade/
[76]: https://www.freecodecamp.org/news/author/estefaniacn/
[77]: https://www.freecodecamp.org/news/python-sets-detailed-visual-introduction/
[78]: https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset
[79]: https://www.freecodecamp.org/news/author/beau/
[80]: https://www.freecodecamp.org/news/how-recursion-works-explained-with-flowcharts-and-a-video-de61f40cb7f9/
[81]: https://docs.python.org/
[82]: https://docs.python.org/
[83]: https://www.youtube.com/c/Freecodecamp/search?query=python
[84]: https://farhan.dev
[85]: https://twitter.com/frhnhsin
[86]: https://www.linkedin.com/in/farhanhasin/

