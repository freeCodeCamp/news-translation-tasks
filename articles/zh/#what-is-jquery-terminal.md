---
title: 如何创建交互式基于终端的作品集网站
date: 2024-08-19T09:36:22.186Z
author: Jakub T. Jankiewicz
authorURL: https://www.freecodecamp.org/news/author/jcubic/
originalURL: https://www.freecodecamp.org/news/how-to-create-interactive-terminal-based-portfolio/#what-is-jquery-terminal
posteditor: ""
proofreader: ""
---

在本文中，您将学习如何使用 JavaScript 创建一个交互式的基于终端的作品集和简历。我们将使用 [jQuery Terminal 库][1]（以及其他一些工具）来创建一个看起来像真实终端的网站。

<!-- more -->

本文将展示 jQuery Terminal 库的更高级用法。如果您想要一些更基础的内容，可以查看这篇文章：[如何使用 JavaScript 创建交互式终端样式的网站][2]，这篇文章是为入门级程序员编写的。您也可以在开始阅读本文之前先阅读它。

## 内容目录

-   [内容目录][3]
-   [什么是终端？][4]
-   [什么是 jQuery Terminal？][5]
-   [基本的 html 文件][6]
-   [如何初始化终端][7]
-   [问候语][8]
    -   [行间距][9]
    -   [如何为 ASCII 艺术添加颜色][10]
    -   [终端格式化][11]
    -   [如何使用 lolcat 库][12]
    -   [彩虹 ASCII 艺术问候语][13]
    -   [如何使问候语文本变白][14]
-   [如何制作第一个命令][15]
-   [默认命令][16]
-   [如何使帮助命令可执行][17]
-   [语法高亮][18]
-   [自动补全][19]
-   [如何添加 Shell 命令][20]
-   [如何改进补全][21]
-   [打字动画命令][22]
-   [致谢命令][23]
-   [预填充命令][24]
-   [接下来做什么？][25]

## 什么是终端？

终端有着悠久的历史。它开始是作为[打孔卡][26]的升级。过去的计算机使用电传打字机，它只是一台键盘和打印机。你在键盘上打字，按键被发送到计算机（通常是大型机），然后输出打印在打印机上。

后来，电传打字机被终端取代。终端就像我们今天看到的哑终端。它是一个带键盘的 CRT 显示器。所以不再是在打印机上得到输出，而是显示在显示器上。

今天我们仍然使用这种类型的界面（命令行）与计算机进行对话。

这些是终端仿真器，是 Unix 系统（如 GNU/Linux 或 MacOS）的重要组成部分。在 Windows 上，您可以使用 PowerShell 或 cmd.exe 文件，这些文件允许您输入命令并以文本形式得到响应。你也可以以 WSL 形式在 Windows 上安装 GNU/Linux 系统。CLI 接口主要被高级用户、开发人员和系统管理员使用。

如果你是命令行新手，可以阅读这篇文章：[初学者命令行 – 如何像专业人士一样使用终端 \[完整手册\]][27]。

## 什么是 jQuery Terminal？

jQuery Terminal 是一个 JavaScript 库。它是 [jQuery 库][28] 的一个插件。jQuery Terminal 更像一个框架，它依赖于 jQuery。在本文中，我们将主要使用 JavaScript 而很少使用 jQuery。

让我们使用 jQuery Terminal 创建我们的基于终端的作品集。

## 基本的 html 文件

你需要做的第一件事是包括 jQuery 和 jQuery Terminal 库。

这是一个基本的 HTML 文件：

```
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery.terminal/css/jquery.terminal.min.css"/>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/jquery"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/jquery.terminal.min.js"></script>
<script src="my-terminal.js"></script>
</body>
</html>
```

然后在 **my-terminal.js** 文件中，我们将编写我们的 JavaScript 代码。

## 如何初始化终端

创建一个基本的终端，您需要放入以下代码：

```
const commands = {};

const term = $('body').terminal(commands);
```

字符串 `'body'` 表示应创建终端的 CSS 选择器。在这里我们使用 `'body'`，所以终端将是页面上的唯一内容。但它不必是全屏的。你可以创建一个终端只是页面一部分的网站，就像看起来像操作系统的一部分窗口。

传递给 `terminal` 方法的第一个参数称为解释器。这是一种添加命令的方法。对象是创建命令的最简单方法。请参阅 [创建解释器][29] 以了解更多信息。

如果终端字体太小，你可以使用 CSS 自定义属性（也称为 CSS 变量）来使它大一点：

```
:root {
    --size: 1.2;
}
```

## 问候语

我们需要做的第一件事是去掉默认的问候信息，并用漂亮的自定义 [ASCII 艺术][30] 替换它。我们将使用用 JavaScript 编写的 [Filget 库][31]。

在 npm 上有几个 figlet 库。我们将使用一个名为 [figlet][32] 的包。

你首先可以做的是选择正确的字体。前往 [figlet playground][33] 并写下您想要的问候语。我们将使用 "Terminal Portfolio" 并点击 "Test All"。它应显示所有字体的文字。浏览列表并选择您喜欢的字体。

![Image](https://www.freecodecamp.org/news/content/images/2024/04/Przechwycenie-obrazu-ekranu_2024-04-26_22-18-26.png) _终端组合 ASCII 艺术_

你可以将这段文本复制到一个字符串中，但是你会遇到一些问题，比如反斜杠需要被转义引号字符。

```
const greetings = `  ______                    _             __   ____             __  ____      ___     
 /_  __/__  _________ ___  (_)___  ____ _/ /  / __ \\____  _____/ /_/ __/___  / (_)___ 
  / / / _ \\/ ___/ __ \`__ \\/ / __ \\/ __ \`/ /  / /_/ / __ \\/ ___/ __/ /_/ __ \\/ / / __ \\
 / / /  __/ /  / / / / / / / / / / /_/ / /  / ____/ /_/ / /  / /_/ __/ /_/ / / / /_/ /
/_/  \\___/_/  /_/ /_/ /_/_/_/ /_/\\__,_/_/  /_/    \\____/_/   \\__/_/  \\____/_/_/\\____/`

const term = $('body').terminal(commands, {
    greetings
});
```

**注意**：jQuery 终端的第二个参数是一个包含选项的对象——我们使用了单个选项 `greetings`。

这看起来不好，并且很难修改。另外，如果你通过硬编码字符串来创建问候语，当屏幕较小时可能会被扭曲。这就是为什么我们将在 JavaScript 中使用 figlet 库。

首先，我们需要在 HTML 中包含 figlet 库：

```
<script src="https://cdn.jsdelivr.net/npm/figlet/lib/figlet.js"></script>
```

要在 JavaScript 中初始化该库，我们需要加载字体：

```
const font = 'Slant';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);
```

这段代码将加载 `'Slant'` 字体并在字体加载完毕后调用 `ready` 函数。

因此我们需要编写这个函数：

```
function ready() {

}
```

现在我们可以做两件事，我们可以将 jQuery 终端的初始化放在该函数内部：

```
let term;

function ready() {
   term =  $('body').terminal(commands, {
      greetings
   });
}
```

有了这个，我们可以使用 `greeting` 选项，但我们也可以使用 `echo` 方法来渲染问候语，当初始化终端时，我们将 `null` 或 `false` 作为 `greetings`，以禁用默认问候语：

```
const term = $('body').terminal(commands, {
    greetings: false
});

function ready() {
   term.echo(greetings);
}
```

这样做会更好，因为库会立即初始化终端，而无需等待字体加载。

需要注意的是，我们仍然需要使用 figlet 定义问候语。为此我们可以编写这个函数：

```
function render(text) {
    const cols = term.cols();
    return figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    });
}
```

这个函数使用 `figlet::textSync()` 方法返回字符串，并使用 `terminal::cols()` 来获取每行字符数。通过这个，我们可以使我们的文本具有响应性。

这个函数可以在 `ready` 中使用。

```
function ready() {
   term.echo(render('Terminal Portfolio'));
}
```

这将创建一个字符串并将其传递给 `echo` 方法。但这与以下代码效果相同：

```
term.echo(greeting);
```

以及我们的硬编码问候语。因此，如果你调整终端大小，问候语仍然可能会被扭曲。为了使文本具有响应性，你需要 `echo` 一个函数。这个函数将在每次终端重新渲染时被调用，这将在你调整页面大小时发生。

我们可以使用箭头函数来实现这一点：

```
function ready() {
   term.echo(() => render('Terminal Portfolio'));
}
```

如果你想在 ASCII 艺术下方添加一些文本，可以通过在 `render` 后连接字符串来实现：

```
function ready() {
   term.echo(() => {
     const ascii = render('Terminal Portfolio');
     return `${ascii}\nWelcome to my Terminal Portfolio\n`;
   });
}
```

**注意**：如果你运行这段代码，你会注意到在 ASCII 艺术后有一个空行。这是因为 figlet 库在文本之后添加了一些空格。要去除它，你可以使用 `string::replace` 和一个正则表达式，删除末尾的所有空格和换行符。

我们不能使用 `string::trim()`，因为我们不想删除前导行：

```
function render(text) {
    const cols = term.cols();
    return trim(figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    }));
}

function trim(str) {
    return str.replace(/[\n\s]+$/, '');
}
```

另外可以做的一些事情是在加载字体时暂停终端：

```
const term = $('body').terminal(commands, {
    greetings: false
});

term.pause();

function ready() {
   term.echo(() => render('Terminal Portfolio')).resume();
}
```

与 jQuery 类似，你可以链式调用终端方法。

## 行间隙

如果你选择的字体在行之间产生了空隙——比如这个使用 ANSI Shadow 字体的图像：

![Image](https://www.freecodecamp.org/news/content/images/2024/05/Przechwycenie-obrazu-ekranu_2024-05-08_14-06-41.png) _带有行间隙的 ASCII 艺术_

你可以通过将 `ansi` 选项设置为 `true` 来去除这些间隙。这个选项是专门为修复展示 [ANSI 艺术][34] 的问题而添加的。

```
term.echo(() => render('Terminal Portfolio'), { ansi: true });
```


![Image](https://www.freecodecamp.org/news/content/images/2024/05/Przechwycenie-obrazu-ekranu_2024-05-08_14-57-16.png) _删除间隙的ASCII艺术_

## 如何为ASCII艺术添加颜色

你可以通过使用一个叫做lolcat的库来为大型ASCII艺术增色。lolcat是一个Linux命令，可以在终端中以彩虹颜色样式显示文本。而且还有一个叫做[isomorphic-lolcat][35]的库，你可以在JavaScript中使用它来使你的ASCII艺术呈现彩虹颜色。

### 终端格式化

要使用lolcat库，你首先需要知道如何更改终端的颜色。

你可以使用这样的低级格式化来完成：

```
[[b;red;]some text]
```

整个文本被括号包围，文本的格式在额外的括号中，其中每个参数用分号分隔。要了解更多关于语法的内容，你可以阅读Wiki文章：[Formatting and Syntax Highlighting][36]。

在这里，我们只使用基本的颜色变化。除了红色，你可以使用CSS颜色名称、十六进制颜色或`rgb()`。

### 如何使用lolcat库

要使用这个库，我们首先需要在HTML中包含它：

```
<script src="https://cdn.jsdelivr.net/npm/isomorphic-lolcat"></script>
```

要用颜色格式化字符串，我们可以使用这个函数：

```
function rainbow(string) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string).join('\n');
}

function hex(color) {
    return '#' + [color.red, color.green, color.blue].map(n => {
        return n.toString(16).padStart(2, '0');
    }).join('');
}
```

`lolcat.rainbow`将在输入字符串中的每个字符处调用一个函数，并传递一个包含RGB值和字符的对象作为颜色。

### 彩虹ASCII艺术问候语

要使用这段代码，你需要使用`rainbow`将渲染调用包裹起来：

```
function ready() {
   term.echo(() => {
     const ascii = rainbow(render('Terminal Portfolio'));
     return `${ascii}\nWelcome to my Terminal Portfolio\n`;
   }).resume();
}
```

你也可以使用两次echo调用，因为只有Figlet消息需要在函数内部执行：

```
function ready() {
   term.echo(() => rainbow(render('Terminal Portfolio')))
       .echo('Welcome to my Terminal Portfolio\n').resume();
}
```

你会注意到，当你调整窗口大小时，彩虹会随机变化。这是lolcat的默认行为。要改变它，你需要设置[random seed][37]。

```
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function ready() {
   const seed = rand(256);
   term.echo(() => rainbow(render('Terminal Portfolio'), seed))
       .echo('Welcome to my Terminal Portfolio\n').resume();
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}
```

`rand`函数返回一个从0到最大值的伪随机数。在这里我们创建了一个从0到256的随机值。

### 如何将问候文本变为白色

如前所示，你可以使用终端格式将文本变为白色。
你可以使用：

-   `[[;white;]Welcome to my Terminal Portfolio]`
-   `[[;#fff;]Welcome to my Terminal Portfolio]`
-   `[[;rgb(255,255,255);]Welcome to my Terminal Portfolio]`

此外，如果你包含额外的文件XML格式化，你可以使用类似XML的语法。这使得格式化变得更加容易。

```
<script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/xml_formatting.js"></script>
```

在HTML中包含上述文件后，你可以使用XML标签作为CSS命名颜色：

```
<white>Welcome to my Terminal Portfolio</white>
```

XML格式化支持更多标签，如链接和图像，请参阅Wiki上的[Extension XML Formatter][38]。

**注意**：XML格式化是添加到`$.terminal.defaults.formatters`的一个函数，它将输入的类似XML的文本转换为终端格式。你可以将相同的内容添加到自己的格式化程序中。

## 如何创建你的第一个命令

在问候之后，我们可以编写我们的第一个命令。它将是有用的，并且会与我们稍后添加的任何命令一起工作。

```
const commanns = {
    help() {

    }
};
```

这将是我们的帮助命令，我们将在其中添加一个我们终端组合中可用命令的列表。我们将使用[Intl.ListFormat][39]，它创建一个带有最后一个元素之前的形式的元素列表。

```
const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});
```

要创建一个列表，我们需要使用`formatter.format()`并传递一个命令数组。
要获得该数组，我们可以使用`Object.keys()`：

```
const commands = {
    help() {
        term.echo(`List of available commands: ${help}`);
    }
};

const command_list = Object.keys(commands);
const help = formatter.format(command_list);
```

当你键入help时，你应该看到：

```
List of available commands: help
```

你还需要添加`echo`命令：

```
const commands = {
    help() {
        term.echo(`List of available commands: ${help}`);
    },
    echo(...args) {
        term.echo(args.join(' '));
    }
};
```



```
可用命令列表: help 和 echo
```

但是如果你试图执行 'echo hello'，你会得到一个错误：

```
[Arity] 参数数量错误。函数 'echo' 需要 0 个参数，却获得了 1 个参数！
```

默认情况下，jQuery Terminal 会检查参数的数量和函数接受的参数数量。有一个问题是 `rest` 操作符使得所有参数都是可选的，length 函数属性是 0。要解决这个问题，我们需要通过设置选项来禁用参数数量检查：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false
});
```

现在 echo 命令应该能正常工作。

## 默认命令

默认情况下，jQuery Terminal 有两个默认命令：

-   `clear`：这个命令会清除终端中的所有内容。
-   `exit`：这个命令会退出嵌套的解释器。

你可以通过传递名称并将其设置为 false 来禁用它们。由于我们不会使用嵌套解释器，我们可以禁用 `exit`：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false
});
```

但 `clear` 可能是有用的。所以我们可以把它加入到命令列表中：

```
const command_list = ['clear'].concat(Object.keys(commands));
```

## 如何让帮助命令可执行

我们可以通过允许点击命令并像用户输入那样执行它来改进用户体验。我们需要做一些事情。首先，我们需要为每个命令添加格式并添加 HTML class 属性。我们也可以将命令设为白色，使其更明显。

```
const command_list = Object.keys(commands);
const formatted_list = command_list.map(cmd => {
    return `<white class="command">${cmd}</white>`;
});
const help = formatter.format(formatted_list);
```

接着就是添加[提示][40]。为了表示用户可以点击命令，我们需要在 CSS 中改变光标：

```
.command {
    cursor: pointer;
}
```

最后一步是当用户点击命令时执行命令。我们需要用 jQuery（jQuery Terminal 依赖）添加事件处理程序，或者使用原生浏览器的 `[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)`。这里我们使用 jQuery：

```
term.on('click', '.command', function() {
   const command = $(this).text();
   term.exec(command);
});
```

`terminal::exec()` 是一种以编程方式执行命令的方式，就像用户输入并按下回车一样。

你可以通过输入 `help` 并再次点击 `help` 来测试。

点击 `echo` 将打印一个空行。我们可以通过在执行 `terminal::echo()` 之前检查参数数组是否为空来解决这个问题：

```
const commands = {
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    }
};
```

现在点击 `echo` 只会显示已执行的命令。

**注意**： 如果由于某种原因你不想显示提示符和已执行的命令，可以通过传递 `true` 作为第二个参数来使 `exec` 静默。

```
term.exec('help', true);
```

## 语法高亮

正如我们之前讨论的，我们可以通过将函数推送到 `$.terminal.defaults.formatters` 来使用自定义 shell 语法高亮。我们也可以使用 `$.terminal.new_formatter` 辅助函数。

让我们在输入命令时将其设为白色。格式化器可以是一个数组（正则表达式和替换），也可以是一个函数。我们有固定数量的命令，只希望使在列表中的那些命令变为白色。我们可以通过添加一个正则表达式来实现：

```
const any_command_re = new RegExp(`^\s*(${command_list.join('|')})`);
```

这个正则表达式会检查在字符串的开头是否有一个可选的空格和一个命令。现在正则表达式会像这样：`/^\s*(help|echo)/`。

```
$.terminal.new_formatter([any_command_re, '<white>$1</white>']);
```

如果你想将命令参数设为不同的颜色，你需要一个函数，在这个函数中你会用到 [String::replace][41]。

```
const re = new RegExp(`^\s*(${command_list.join('|')}) (.*)`);

$.terminal.new_formatter(function(string) {
    return string.replace(re, function(_, command, args) {
        return `<white>${command}</white> <aqua>${args}</aqua>`;
    });
});
```

这是使用 `String::replace` 的一个示例。如果你只有一个替换项，你可以使用数组。效果会是一样的：

```
const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

$.terminal.new_formatter([re, function(_, command, args) {
    return `<white>${command}</white><aqua>${args}</aqua>`;
}]);
```

**注意**： 如果你在格式化器中添加 class `<white class="command">`，你就可以点击输入的命令来再次执行它。

## 标签补全

另一个我们可以添加的功能是当你按下 tab 键时，可以补全命令。这非常简单——我们只需要将 completion 选项设置为 true：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion: true
});
```

现在当你输入 `h` 并按下 tab 键，它会为你补全 `help` 命令。

现在我们可以添加最重要的命令，它们允许我们在作品集中导航。我们将实现目录作为主要入口点，因此用户需要键入 `ls` 命令来查看项目列表，`cd` 进入该目录，然后再次 `ls` 以查看内容。

```
const directories = {
    education: [
        '',
        '<white>education</white>',

        '* <a href="https://en.wikipedia.org/wiki/Kielce_University_of_Technology">Kielce University of Technology</a> <yellow>"Computer Science"</yellow> 2002-2007 / 2011-2014',
        '* <a href="https://pl.wikipedia.org/wiki/Szko%C5%82a_policealna">Post-secondary</a> Electronic School <yellow>"Computer Systems"</yellow> 2000-2002',
        '* Electronic <a href="https://en.wikipedia.org/wiki/Technikum_(Polish_education)">Technikum</a> with major <yellow>"RTV"</yellow> 1995-2000',
        ''
    ],
    projects: [
        '',
        '<white>Open Source projects</white>',
        [
            ['jQuery Terminal',
             'https://terminal.jcubic.pl',
             'library that adds terminal interface to websites'
            ],
            ['LIPS Scheme',
             'https://lips.js.org',
             'Scheme implementation in JavaScript'
            ],
            ['Sysend.js',
             'https://jcu.bi/sysend',
             'Communication between open tabs'
            ],
            ['Wayne',
             'https://jcu.bi/wayne',
             'Pure in browser HTTP requests'
            ],
        ].map(([name, url, description = '']) => {
            return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    skills: [
        '',
        '<white>languages</white>',

        [
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'PHP',
            'Bash'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>libraries</white>',
        [
            'React.js',
            'Redux',
            'Jest',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>tools</white>',
        [
            'Docker',
            'git',
            'GNU/Linux'
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};
```

这是我们的基本结构。你可以编辑并添加你的信息。首先，我们将添加一个 `cd` 命令来改变目录。

```
const root = '~';
let cwd = root;

const commands = {
    cd(dir = null) {
        if (dir === null || (dir === '..' && cwd !== root)) {
            cwd = root;
        } else if (dir.startsWith('~/') && dirs.includes(dir.substring(2))) {
            cwd = dir;
        } else if (dirs.includes(dir)) {
            cwd = root + '/' + dir;
        } else {
            this.error('Wrong directory');
        }
    }
};
```

这将处理所有改变目录的情况。接下来是添加一个提示符。

为了查看当前所在的目录，我们需要添加一个自定义的 `prompt` 来实现此功能。  
我们可以创建一个函数：

```
const user = 'guest';
const server = 'freecodecamp.org';

function prompt() {
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}
```

并将其用作一个选项：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion: true,
    exit: false,
    prompt
});
```

绿色看起来不太好，我们可以使用Ubuntu的颜色让终端看起来更逼真。

```
$.terminal.xml_formatter.tags.green = (attrs) => {
    return `[[;#44D544;]`;
};
```

接下来是 `ls` 命令。

```
function print_dirs() {
     term.echo(dirs.map(dir => {
         return `<blue class="directory">${dir}</blue>`;
     }).join('\n'));
}

const commands = {
    ls(dir = null) {
        if (dir) {
            if (dir.match(/^~\/?$/)) {
                // ls ~ or ls ~/
                print_dirs();
            } else if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('Invalid directory');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('Invalid directory');
                }
            } else if (dir === '..') {
                print_dirs();
            } else {
                this.error('Invalid directory');
            }
        } else if (cwd === root) {
            print_dirs();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
    }
```

类似于绿色，蓝色也不是特别好看，因此我们可以使用Ubuntu的颜色。为此，我们需要在XML格式中使用自定义的XML标签：

```
$.terminal.xml_formatter.tags.blue = (attrs) => {
    return `[[;#55F;;${attrs.class}]`;
};
```

```
term.on('click', '.directory', function() {
    const dir = $(this).text();
    term.exec(`cd ~/${dir}`);
});
```

我们还需要更新我们的 CSS 以改变光标样式：

```
.command, .directory {
    cursor: pointer;
}
```

## 如何改进补全

我们的补全功能并不完美，因为它只补全命令。如果你想要一个可以处理目录的补全功能，你需要使用一个函数：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion(string) {
        // 在每个函数中我们都可以使用 `this` 来引用 term 对象
        const cmd = this.get_command();
        // 处理命令以提取命令名称及其余部分（作为一个字符串的参数）
        const { name, rest } = $.terminal.parse_command(cmd);
        if (['cd', 'ls'].includes(name)) {
            if (rest.startsWith('~/')) {
                return dirs.map(dir => `~/${dir}`);
            }
            if (cwd === root) {
                return dirs;
            }
        }
        return Object.keys(commands);
    },
    prompt
});
```

**注意**: 字符串参数仅作为文档。可以用于你只想补全一个单词时。

## 输入动画命令

我们还将添加一个动画笑话命令。我们将使用一个看起来像用户在输入的 API 打印随机笑话。

我们将使用 [Joke API][42]。

该 API 返回包含两种类型响应的 JSON：`twopart` 和 `single`。这是在终端打印文本的代码：

```
// 我们使用编程笑话，这样更符合开发者作品集
const url = 'https://v2.jokeapi.dev/joke/Programming';
const commands = {
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        if (data.type == 'twopart') {
            // 如前所述，在每个直接传递给终端的函数中
            // 可以使用 `this` 对象引用终端实例
            this.echo(`Q: ${data.setup}`);
            this.echo(`A: ${data.delivery}`);
        } else if (data.type === 'single') {
            this.echo(data.joke);
        }
    },
}
```

要添加输入动画，你需要向 `echo` 方法添加一个选项：

```
this.echo(data.joke, { delay: 50, typing: true });
```

有一个注意事项：如果你有一系列输入动画，你需要等待前一个完成（当动画时，echo 将返回一个 promise）。你需要将代码包装在一个 `async` 函数中，并且需要清除提示符，这样在动画之间不会闪烁。默认情况下，提示符用于输入效果。所以完整代码应如下所示：

```
// 我们使用编程笑话，这样更符合开发者作品集
const url = 'https://v2.jokeapi.dev/joke/Programming';
const commands = {
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        (async () => {
            if (data.type == 'twopart') {
                // 我们清除提示符，这样动画之间不会闪烁
                const prompt = this.get_prompt();
                this.set_prompt('');
                // 如前所述，在每个直接传递给终端的函数中
                // 可以使用 `this` 对象引用终端实例
                await this.echo(`Q: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
                // 恢复提示符
                this.set_prompt(prompt);
            } else if (data.type === 'single') {
                await this.echo(data.joke, {
                    delay: 50,
                    typing: true
                });
            }
        })();
    },
}
```

你可以在 wiki 文章中阅读更多关于输入动画的信息：[Typing Animation][43][.][44]

## Credits 命令

我们将添加最后一个命令，列出使用的 JavaScript 库：

```
const commands = {
    credits() {
        return [
            '',
            '<white>使用的库:</white>',
            '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
            '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            '* <a href="https://jokeapi.dev/">Joke API</a>',
            ''
        ].join('\n');
    }
};
```

这是另一种在终端打印内容的示例，如果函数返回内容，它将被打印。你也可以返回一个 [Promise][45]，这样你可以向服务器发送 [AJAX][46] 请求并打印结果。

## 预配命令

你可以通过执行示例命令来让用户更容易知道如何操作终端，特别是如果他们对 Unix 不太熟悉：

```
term.exec(command)
```
```

```
term.exec(command, { typing: true, delay: 50 });
```

这里是我们[互动终端作品集网站][47]的完整演示。

## 接下来做什么？

你可以为这个作品集添加许多命令。唯一的限制就是你的想象力。

你可以查看这些例子以获得启发：

-   CodePen 上的 [jQuery Terminal 演示合集][48]。
-   [复古终端 CodePen 演示][49]。
-   [jQuery Terminal 示例页面][50]。
-   [终端 404 错误页][51]。
-   [虚假的 GNU/Linux 终端][52]。

如果你有一些这里没有列出的想法，可以在 [StackOverflow 上用 jquery-terminal 标签][53]提问。如果你有一些更耗时的事情，你也可以申请[付费支持][54]。

如果你喜欢这篇文章，可以[查看我的网站][55]，（那里有一个类似于这个的终端作品集，还有一个聊天功能），并[关注我的 Twitter/X][56]和[LinkedIn][57]。

---

![Jakub T. Jankiewicz](https://cdn.hashnode.com/res/hashnode/image/upload/v1627237590042/HRgKaoTrr.jpeg)

我是一名来自波兰的网页开发者。同时，我也是一名维基人、维基导师，并为波兰维基百科做培训。

---

如果你读到这里，请感谢作者，表达你的关心。说声谢谢吧

免费学习编程。freeCodeCamp 的开源课程帮助了超过 40,000 人获得了开发者的工作。[开始学习][58]

[1]: https://terminal.jcubic.pl/
[2]: https://itnext.io/how-to-create-interactive-terminal-like-website-888bb0972288
[3]: #heading-table-of-contents
[4]: #heading-what-is-the-terminal
[5]: #heading-what-is-jquery_terminal
[6]: #heading-base-html-file
[7]: #heading-how-to-initialize-the-terminal
[8]: #heading-greetings
[9]: #heading-line-gaps
[10]: #heading-how-to-add-colors-to-ascii-art
[11]: #heading-terminal-formatting
[12]: #heading-how-to-use-the-lolcat-library
[13]: #heading-rainbow-ascii-art-greetings
[14]: #heading-how-to-make-the-greeting-text-white
[15]: #heading-how-to-make-your-first-command
[16]: #heading-default-commands
[17]: #heading-how-to-make-help-commands-executable
[18]: #heading-syntax-highlighting
[19]: #heading-tab-completion
[20]: #heading-how-to-add-shell-commands
[21]: #heading-how-to-improve-completion
[22]: #heading-typing-animation-command
[23]: #heading-credits-command
[24]: #heading-prefilled-commands
[25]: #heading-what-next
[26]: https://en.wikipedia.org/wiki/Punched_card
[27]: https://www.freecodecamp.org/news/command-line-for-beginners/
[28]: https://en.wikipedia.org/wiki/JQuery
[29]: https://github.com/jcubic/jquery.terminal/wiki/Getting-Started#creating-the-interpreter
[30]: https://en.wikipedia.org/wiki/ASCII_art
[31]: https://en.wikipedia.org/wiki/FIGlet
[32]: https://www.npmjs.com/package/figlet
[33]: https://patorjk.com/software/taag/
[34]: https://en.wikipedia.org/wiki/ANSI_art
[35]: https://www.npmjs.com/package/isomorphic-lolcat
[36]: https://github.com/jcubic/jquery.terminal/wiki/Formatting-and-Syntax-Highlighting
[37]: https://en.wikipedia.org/wiki/Random_seed
[38]: https://github.com/jcubic/jquery.terminal/wiki/Formatting-and-Syntax-Highlighting#extension-xml-formatter
[39]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
[40]: https://en.wikipedia.org/wiki/Affordance
[41]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
[42]: https://jokeapi.dev/
[43]: https://github.com/jcubic/jquery.terminal/wiki/Typing-Animation
[44]: https://github.com/jcubic/jquery.terminal/wiki/Typing-Animation#sequence-of-animations
[45]: https://www.freecodecamp.org/news/javascript-promises-explained/
[46]: https://en.wikipedia.org/wiki/Ajax_(programming)
[47]: https://codepen.io/jcubic/full/ZEZPWRY
[48]: https://codepen.io/collection/LPjoaW
[49]: https://codepen.io/jcubic/pen/BwBYOZ
[50]: https://terminal.jcubic.pl/examples.php
[51]: https://terminal.jcubic.pl/404
[52]: https://fake.terminal.jcubic.pl/
[53]: https://stackoverflow.com/questions/tagged/jquery-terminal
[54]: https://support.jcubic.pl/
[55]: https://jakub.jankiewicz.org/
[56]: https://twitter.com/jcubic
[57]: https://www.linkedin.com/in/jakubjankiewicz/
[58]: https://www.freecodecamp.org/learn/
```

