---
title: 如何创建一个基于终端交互的作品集网站
date: 2024-08-19T12:31:24.305Z
author: Jakub T. Jankiewicz
authorURL: https://www.freecodecamp.org/news/author/jcubic/
originalURL: https://www.freecodecamp.org/news/how-to-create-interactive-terminal-based-portfolio/
posteditor: ""
proofreader: ""
---

在本文中，你将学习如何使用 JavaScript 创建一个基于终端交互的作品集和简历。我们将使用 [jQuery Terminal 库][1]（以及其他一些工具）来创建一个看起来像真正终端的网站。

<!-- more -->

这篇文章将展示 jQuery Terminal 库的高级用法。如果你想要更基础的内容，可以查看这篇文章：[How to create interactive terminal like website with JavaScript][2]，这篇文章适用于入门级程序员。你也可以先阅读这篇文章，然后再来阅读本文。

## 目录

- [目录][3]
- [什么是终端？][4]
- [什么是 jQuery Terminal？][5]
- [基础 HTML 文件][6]
- [如何初始化终端][7]
- [问候语][8]
    - [行间距][9]
    - [如何为 ASCII Art 添加颜色][10]
    - [终端格式化][11]
    - [如何使用 lolcat 库][12]
    - [彩虹 ASCII Art 问候语][13]
    - [如何将问候语文本变为白色][14]
- [如何创建第一个命令][15]
- [默认命令][16]
- [如何使帮助命令可执行][17]
- [语法高亮][18]
- [Tab 补全][19]
- [如何添加 Shell 命令][20]
- [如何改进补全功能][21]
- [打字动画命令][22]
- [致谢命令][23]
- [预填命令][24]
- [下一步做什么？][25]

## 什么是终端？

终端（Terminal）有着悠久的历史。它始于 [打孔卡][26] 的升级。那时候的计算机使用电传打字机，只是一个键盘和打印机。你在键盘上输入，然后输入的内容会发送到计算机（通常是大型机），输出则打印在打印机上。

后来，电传打字机被终端取代。终端就像是今天我们看到的哑终端。它是一个带键盘的 CRT 显示器。因此，输出不是打印在打印机上，而是显示在显示器上。

今天，我们仍然使用这种类型的界面（命令行）与计算机进行交互。

这些是终端模拟器，是 Unix 系统的重要组成部分，比如 GNU/Linux 或 MacOS。在 Windows 上，你有 PowerShell 或 cmd.exe 文件，它们允许你输入命令并以文本形式获得响应。你也可以在 Windows 上安装 GNU/Linux 系统作为 WSL。CLI 接口主要供高级用户、开发人员和系统管理员使用。

如果你是命令行新手，可以阅读这篇文章：[Command Line for Beginners – How to Use the Terminal Like a Pro \[Full Handbook\]][27]。

## 什么是 jQuery Terminal？

jQuery Terminal 是一个 JavaScript 库。它是 [jQuery 库][28] 的一个插件。jQuery Terminal 更像是一个以 jQuery 为依赖的框架。在本文中，我们主要使用 JavaScript，而很少使用 jQuery。

让我们使用 jQuery Terminal 创建我们的基于终端的作品集。

## 基础 HTML 文件

你需要做的第一件事是包含 jQuery 和 jQuery Terminal 库。

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

然后在 **my-terminal.js** 文件中，我们将用 JavaScript 编写代码。

## 如何初始化终端

要创建一个基本的终端，你需要输入以下代码：

```
const commands = {};

const term = $('body').terminal(commands);
```

字符串 `'body'` 表示应创建终端的 CSS 选择器。这里我们使用 `'body'`，因此终端将是页面上唯一的内容。但它不必是全屏的。你可以创建一个只在页面的一部分中显示终端的网站，就像一个看上去是操作系统一部分的窗口那样。

传给 `terminal` 方法的第一个参数称为解释器。它是添加命令的方法。对象是创建命令的最简单方法。查看 [创建解释器][29] 了解更多信息。

如果终端字体太小，你可以使用 CSS 自定义属性（也称为 CSS 变量）将其放大一些：

```
:root {
    --size: 1.2;
}
```

## 问候语

我们首先要做的是去掉默认的问候消息，并将其替换为好看的自定义 [ASCII Art][30]。我们将使用用 JavaScript 编写的 [Filget 库][31]。

在 npm 上有几个 figlet 库。我们将使用一个名为 [figlet][32] 的包。

首先，你需要选择合适的字体。访问 [figlet playground][33] 并写下你想要用于问候的文本。我们使用 "Terminal Portfolio" 并点击 "Test All"。它应该会显示你输入文本的所有字体。浏览列表并选择你喜欢的字体。



![Image](https://www.freecodecamp.org/news/content/images/2024/04/Przechwycenie-obrazu-ekranu_2024-04-26_22-18-26.png) _终端组合 ASCII 艺术_

你可以复制这个文本并放入一个字符串中，但你会遇到一些问题，比如反斜杠和引号字符需要被转义。

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

**注意**：传递给 jQuery Terminal 的第二个参数是一个包含选项的对象——我们使用了一个 `greetings` 选项。

这样看起来不太好，而且很难修改。如果你通过硬编码字符串来创建问候语，它可能会在较小的屏幕上失真。这就是为什么我们将在 JavaScript 中使用 figlet 库。

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

这段代码将加载 `'Slant'` 字体，并在字体加载完成后调用 `ready` 函数。

所以我们需要编写这个函数：

```
function ready() {

}
```

现在我们可以做两件事，我们可以在这个函数内部初始化 jQuery Terminal：

```
let term;

function ready() {
   term =  $('body').terminal(commands, {
      greetings
   });
}
```

这样我们可以使用 `greeting` 选项，但我们也可以使用 `echo` 方法来渲染问候语，并且在初始化终端时，我们将 `greetings` 设置为 `null` 或 `false` 以禁用默认的问候语：

```
const term = $('body').terminal(commands, {
    greetings: false
});

function ready() {
   term.echo(greetings);
}
```

这样效果会更好，因为库会立即初始化终端，而不需要等待字体加载。

请注意，我们仍然需要使用 figlet 定义问候语。为此我们可以编写这个函数：

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

此函数使用 `figlet::textSync()` 方法返回字符串，并使用 `terminal::cols()` 获取每行的字符数。有了这，我们可以使我们的文本具有响应性。

此函数可以在 `ready` 中使用。

```
function ready() {
   term.echo(render('Terminal Portfolio'));
}
```

这将创建一个字符串并将其传递给 `echo` 方法。但这将与下面代码中的效果相同：

```
term.echo(greeting);
```

以及我们的硬编码问候语。因此，如果你调整终端大小，问候语仍然可能会失真。为了使文本具有响应性，你需要 `echo` 一个函数。该函数将在每次重新渲染终端时调用，当你调整页面大小时，这种情况会发生。

我们可以使用箭头函数来实现：

```
function ready() {
   term.echo(() => render('Terminal Portfolio'));
}
```

如果你想在 ASCII 艺术下面添加一些文本，可以在 `render` 后面连接字符串：

```
function ready() {
   term.echo(() => {
     const ascii = render('Terminal Portfolio');
     return `${ascii}\nWelcome to my Terminal Portfolio\n`;
   });
}
```

**注意**：如果你运行这段代码，你会注意到 ASCII 艺术之后有一个空行。这是因为 figlet 库在文本后添加了一些空格。要去掉这些内容，你可以使用 `string::replace` 和一个正则表达式来移除文本末尾的所有空格和换行符。

我们不能使用 `string::trim()`，因为我们不想移除前导行：

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

你还可以做的其他事情包括暂停字体加载时的终端：

```
const term = $('body').terminal(commands, {
    greetings: false
});

term.pause();

function ready() {
   term.echo(() => render('Terminal Portfolio')).resume();
}
```

与 jQuery 相同，你也可以链接终端方法。

## 行间距

如果你选择的字体在行之间产生了间隙——就像此图像中使用 ANSI Shadow 字体：

![Image](https://www.freecodecamp.org/news/content/images/2024/05/Przechwycenie-obrazu-ekranu_2024-05-08_14-06-41.png) _带有行间隙的 ASCII 艺术_

你可以通过设置 `ansi` 选项为 `true` 来消除间隙。该选项是专门为解决显示 [ANSI 艺术][34] 时的问题而添加的。

```
term.echo(() => render('Terminal Portfolio'), { ansi: true });
```


![Image](https://www.freecodecamp.org/news/content/images/2024/05/Przechwycenie-obrazu-ekranu_2024-05-08_14-57-16.png) _移除了间隙的 ASCII 艺术_

## 如何为 ASCII 艺术添加颜色

你可以通过使用一个名为 lolcat 的库为大的 ASCII 艺术增添趣味。lolcat 是一个可以在终端使用彩虹颜色对文本进行样式化的 Linux 命令。还有一个名为 [isomorphic-lolcat][35] 的库，你可以在 JavaScript 中使用它来为你的 ASCII 艺术添加彩虹颜色。

### 终端格式化

要使用 lolcat 库，你首先需要知道如何更改终端的颜色。

你可以使用低级格式化来实现，如下所示：

```
[[b;red;]一些文本]
```

整个文本被括号包裹，文本的格式在额外的括号内，其中每个参数用分号分隔。要了解更多关于语法的信息，你可以阅读 Wiki 文章: [Formatting and Syntax Highlighting][36]。

这里，我们只会用到基本的颜色更改。除了红色，你还可以使用 CSS 颜色名称，十六进制颜色或者 `rgb()`。

### 如何使用 lolcat 库

要使用这个库，我们首先需要在 HTML 中引入它：

```
<script src="https://cdn.jsdelivr.net/npm/isomorphic-lolcat"></script>
```

为了用颜色格式化字符串，我们可以使用这个函数：

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

`lolcat.rainbow` 将会对输入字符串中的每个字符调用一个函数，并传递一个包含 RGB 值和字符的颜色对象。

### 彩虹 ASCII 艺术问候

要使用这段代码，你需要用 `rainbow` 包裹渲染的调用：

```
function ready() {
   term.echo(() => {
     const ascii = rainbow(render('Terminal Portfolio'));
     return `${ascii}\n欢迎来到我的终端作品集\n`;
   }).resume();
}
```

你也可以使用两次 echo 调用，因为只有 Figlet 消息需要在函数内部执行：

```
function ready() {
   term.echo(() => rainbow(render('Terminal Portfolio')))
       .echo('欢迎来到我的终端作品集\n').resume();
}
```

你会注意到，当你调整窗口大小时，彩虹颜色会随机变化。这是 lolcat 的默认行为。要更改它，你需要设置 [随机种子][37]。

```
function rand(max) {
    return Math.floor(Math.random() * (max + 1));
}

function ready() {
   const seed = rand(256);
   term.echo(() => rainbow(render('Terminal Portfolio'), seed))
       .echo('欢迎来到我的终端作品集\n').resume();
}

function rainbow(string, seed) {
    return lolcat.rainbow(function(char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
    }, string, seed).join('\n');
}
```

`rand` 函数返回一个从 0 到 max 的伪随机数。这里我们创建了一个从 0 到 256 的随机值。

### 如何使问候文本变白

如我们之前所示，你可以通过终端格式化使文本变白。
你可以使用：

-   `[[;white;]欢迎来到我的终端作品集]`
-   `[[;#fff;]欢迎来到我的终端作品集]`
-   `[[;rgb(255,255,255);]欢迎来到我的终端作品集]`

此外，如果你包括额外的文件 XML 格式化，你可以使用类 XML 语法。这使得格式化变得更加容易。

```
<script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/xml_formatting.js"></script>
```

在 HTML 中包含上述文件后，你可以使用 CSS 命名颜色作为 XML 标签:

```
<white>欢迎来到我的终端作品集</white>
```

XML 格式化支持更多的标签，如链接和图片，参见 [Extension XML Formatter][38], 在 Wiki 上。

**注意**: XML 格式化器是添加到 `$.terminal.defaults.formatters` 的一个函数，它将 XML 类文本转换为终端格式化。你也可以将相同格式化器添加到你自己的格式化器中。

## 如何创建你的第一个命令

在问候之后，我们可以编写我们的第一个命令。这将会很有帮助，并且之后添加的任何命令都会有效。

```
const commanns = {
    help() {

    }
};
```

这将是我们的帮助命令，我们将在其中添加我们终端作品集中可用命令的列表。我们将使用 [Intl.ListFormat][39]，它会创建一个带有 and 的元素列表，并在最后一个元素之前包含 and。

```
const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});
```

要创建一个列表，我们需要使用 `formatter.format()` 并传递一个命令数组。
要获取该数组，我们可以使用 `Object.keys()`:

```
const commands = {
    help() {
        term.echo(`可用命令列表: ${help}`);
    }
};

const command_list = Object.keys(commands);
const help = formatter.format(command_list);
```

当你输入 help 你应该会看到:

```
可用命令列表: help
```

你还需要添加 echo 命令：

```
const commands = {
    help() {
        term.echo(`可用命令列表: ${help}`);
    },
    echo(...args) {
        term.echo(args.join(' '));
    }
};
```

```
可用命令列表: help 和 echo
```

但是如果你尝试执行 'echo hello'，你会得到一个错误:

```
[Arity] 参数数量错误。函数 'echo' 期望 0 个参数，但得到了 1 个！
```

默认情况下，jQuery Terminal 会检查参数数量和函数接受的参数数量。问题在于 `rest` 操作符使所有参数变为可选的，而且 length 函数属性为 0。要解决这个问题，我们需要通过一个选项禁用参数检查:

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false
});
```

现在 echo 命令应该可以正常工作了。

## 默认命令

默认情况下，jQuery Terminal 有两个默认命令:

-   `clear`: 此命令会清除终端中的所有内容。
-   `exit`: 此命令会退出嵌套的解释器。

你可以通过将命令名称传递给选项并设置为 false 来禁用它们。因为我们不会使用嵌套解释器，所以我们可以禁用 `exit`:

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false
});
```

但是 `clear` 可能会有用。所以我们可以将其添加到命令列表中:

```
const command_list = ['clear'].concat(Object.keys(commands));
```

## 如何让帮助命令可执行

我们可以改进用户体验，使得用户可以点击命令并执行它，就像用户输入一样。我们需要做几件事。首先，我们需要为每个命令添加格式并添加一个 HTML 类属性。我们也可以使命令变为白色以使其更明显。

```
const command_list = Object.keys(commands);
const formatted_list = command_list.map(cmd => {
    return `<white class="command">${cmd}</white>`;
});
const help = formatter.format(formatted_list);
```

接下来是添加 [提示][40]。为了指示用户可以点击命令，我们需要在 CSS 中更改光标:

```
.command {
    cursor: pointer;
}
```

最后一步是当用户点击命令时执行命令。我们需要使用 jQuery（jQuery Terminal 依赖项）添加事件处理程序，或者我们可以使用原生浏览器的 `[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)`。这里我们使用 jQuery:

```
term.on('click', '.command', function() {
   const command = $(this).text();
   term.exec(command);
});
```

`terminal::exec()` 是以编程方式执行命令的方式，就像用户输入并按下回车一样。

你可以通过输入 `help` 并再点击 `help` 进行测试。

点击 `echo` 会打印一个空行。我们可以通过在执行 `terminal::echo()` 之前检查参数数组是否为空来解决这个问题:

```
const commands = {
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    }
};
```

现在点击 `echo` 只会显示执行的命令。

**注意**: 如果出于某种原因你不想显示提示和已执行的命令，你可以通过传递 true 作为第二个参数来静默执行 `exec`。

```
term.exec('help', true);
```

## 语法高亮

如前所述，我们可以通过将函数推入 `$.terminal.defaults.formatters` 来使用自定义的 shell 语法高亮。我们也可以使用 `$.terminal.new_formatter` 助手函数。

让我们在输入命令时将其变为白色。格式化程序可以是数组（正则表达式和替换项组成），也可以是函数。我们有固定数量的命令，并且只想让列表中的命令变为白色。我们可以通过添加正则表达式来实现:

```
const any_command_re = new RegExp(`^\s*(${command_list.join('|')})`);
```

这个正则表达式将检查字符串开头是否有一个可选的空格和一个命令。目前正则表达式看起来是这样的: `/^\s*(help|echo)/`。

```
$.terminal.new_formatter([any_command_re, '<white>$1</white>']);
```

如果你想将命令参数变为不同的颜色，你需要一个函数，在其中使用 [String::replace][41]。

```
const re = new RegExp(`^\s*(${command_list.join('|')}) (.*)`);

$.terminal.new_formatter(function(string) {
    return string.replace(re, function(_, command, args) {
        return `<white>${command}</white> <aqua>${args}</aqua>`;
    });
});
```

这是使用 `String::replace` 的一个示例。如果你只有一个替换项，可以使用数组。效果是一样的:

```
const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

$.terminal.new_formatter([re, function(_, command, args) {
    return `<white>${command}</white><aqua>${args}</aqua>`;
}]);
```

**注意**: 如果你在格式化器中添加类 `<white class="command">`，你将能够点击已输入的命令以再次执行它。

## 标签补全

另一个我们可以添加的功能是当你按下 tab 键时自动补全命令。这非常简单——我们只需要将补全选项设置为 true:

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion: true
});
```

现在当你输入 `h` 并按下 tab 键时，它会为你自动补全命令 `help`。

现在我们可以添加允许我们浏览作品集的最重要命令。我们会实现目录作为主要入口点，因此用户需要输入 `ls` 命令来查看列表，`cd` 进入那个目录，然后再次 `ls` 查看内容。

```
const directories = {
    education: [
        '',
        '<white>education</white>',

        '* <a href="https://en.wikipedia.org/wiki/Kielce_University_of_Technology">Kiel采大学</a> <yellow>"计算机科学"</yellow> 2002-2007 / 2011-2014',
        '* <a href="https://pl.wikipedia.org/wiki/Szko%C5%82a_policealna">中等后教育</a> 电子学校 <yellow>"计算机系统"</yellow> 2000-2002',
        '* 电子 <a href="https://en.wikipedia.org/wiki/Technikum_(Polish_education)">技术学院</a> 主修 <yellow>"RTV"</yellow> 1995-2000',
        ''
    ],
    projects: [
        '',
        '<white>开源项目</white>',
        [
            ['jQuery Terminal',
             'https://terminal.jcubic.pl',
             '为网站添加终端界面的库'
            ],
            ['LIPS Scheme',
             'https://lips.js.org',
             '用 JavaScript 实现的 Scheme'
            ],
            ['Sysend.js',
             'https://jcu.bi/sysend',
             '打开的标签页之间的通讯'
            ],
            ['Wayne',
             'https://jcu.bi/wayne',
             '纯浏览器内的 HTTP 请求'
            ],
        ].map(([name, url, description = '']) => {
            return `* <a href="${url}">${name}</a> &mdash; <white>${description}</white>`;
        }),
        ''
    ].flat(),
    skills: [
        '',
        '<white>语言</white>',

        [
            'JavaScript',
            'TypeScript',
            'Python',
            'SQL',
            'PHP',
            'Bash'
        ].map(lang => `* <yellow>${lang}</yellow>`),
        '',
        '<white>库</white>',
        [
            'React.js',
            'Redux',
            'Jest',
        ].map(lib => `* <green>${lib}</green>`),
        '',
        '<white>工具</white>',
        [
            'Docker',
            'git',
            'GNU/Linux'
        ].map(lib => `* <blue>${lib}</blue>`),
        ''
    ].flat()
};
```

这是我们的基本结构。你可以编辑它并输入你的信息。首先，我们将添加一个 `cd` 命令来改变目录。

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
            this.error('错误目录');
        }
    }
};
```

这将处理所有更改目录的情况。接下来是添加提示符。

为了查看我们在哪个目录中，我们需要添加一个自定义 `prompt` 来实现此功能。  
我们可以创建一个函数：

```
const user = 'guest';
const server = 'freecodecamp.org';

function prompt() {
    return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}
```

并将其作为选项使用：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion: true,
    exit: false,
    prompt
});
```

绿色看起来不太好，我们可以使用来自 Ubuntu 的颜色让终端看起来更真实。

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
                // ls ~ 或 ls ~/
                print_dirs();
            } else if (dir.startsWith('~/')) {
                const path = dir.substring(2);
                const dirs = path.split('/');
                if (dirs.length > 1) {
                    this.error('无效目录');
                } else {
                    const dir = dirs[0];
                    this.echo(directories[dir].join('\n'));
                }
            } else if (cwd === root) {
                if (dir in directories) {
                    this.echo(directories[dir].join('\n'));
                } else {
                    this.error('无效目录');
                }
            } else if (dir === '..') {
                print_dirs();
            } else {
                this.error('无效目录');
            }
        } else if (cwd === root) {
            print_dirs();
        } else {
            const dir = cwd.substring(2);
            this.echo(directories[dir].join('\n'));
        }
    }
```

和绿色类似，蓝色也不是那么好，因此我们可以使用来自 Ubuntu 的颜色。要做到这一点，我们需要在 XML 格式中使用自定义 XML 标签：

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

我们还需要更新我们的 CSS 来更改光标：

```
.command, .directory {
    cursor: pointer;
}
```

## 如何改进自动补全

我们的自动补全并不完美，因为它只补全了命令。如果您想要一个也能处理目录的补全系统，您需要使用一个函数：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion(string) {
        // 在每个函数中，我们可以使用 `this` 来引用 term 对象
        const cmd = this.get_command();
        // 我们处理命令以提取命令名
        // 在命令的剩余部分（作为一个字符串的参数）
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

**注意**：这个字符串参数是作为文档保留的。如果您只想补全一个单词，可以使用它。

## 打字动画命令

我们将添加的另一个命令是一个动画笑话。我们将使用一个 API 打印随机笑话，看起来像用户在打字。

我们将使用 [Joke API][42]。

该 API 返回 JSON，并有两种类型的响应：`twopart` 和 `single`。以下是将在终端打印文本的代码：

```
// 我们使用编程笑话，所以它更适合
// 开发者组合
const url = 'https://v2.jokeapi.dev/joke/Programming';
const commands = {
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        if (data.type == 'twopart') {
            // 如前所述，在每个直接传递
            // 到终端的函数中，您可以使用 `this` 对象
            // 来引用终端实例
            this.echo(`Q: ${data.setup}`);
            this.echo(`A: ${data.delivery}`);
        } else if (data.type === 'single') {
            this.echo(data.joke);
        }
    },
}
```

要添加打字动画，您需要向 `echo` 方法添加一个选项：

```
this.echo(data.joke, { delay: 50, typing: true });
```

但是有一个注意事项：如果您有一系列打字动画，您需要等待前一个完成（动画时，echo 将返回一个 Promise）。您需要将代码包装在一个 `async` 函数中，并且您需要清除提示符，这样在动画之间不会有任何闪烁。默认情况下，提示符用于打字效果。因此，完整代码应如下所示：

```
// 我们使用编程笑话，所以它更适合
// 开发者组合
const url = 'https://v2.jokeapi.dev/joke/Programming';
const commands = {
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        (async () => {
            if (data.type == 'twopart') {
                // 我们清除提示符，这样在动画之间
                // 不会有闪烁
                const prompt = this.get_prompt();
                this.set_prompt('');
                // 如前所述，在每个直接传递
                // 到终端的函数中，您可以使用 `this` 对象
                // 来引用终端实例
                await this.echo(`Q: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
                // 我们恢复提示符
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

您可以在维基文章中阅读更多关于打字动画的信息：[Typing Animation][43][.][44]

## Credits 命令

我们将添加的最后一个命令是显示我们使用的 JavaScript 库列表的 credits 命令：

```
const commands = {
    credits() {
        return [
            '',
            '<white>使用的库：</white>',
            '* <a href="https://terminal.jcubic.pl">jQuery Terminal</a>',
            '* <a href="https://github.com/patorjk/figlet.js/">Figlet.js</a>',
            '* <a href="https://github.com/jcubic/isomorphic-lolcat">Isomorphic Lolcat</a>',
            '* <a href="https://jokeapi.dev/">Joke API</a>',
            ''
        ].join('\n');
    }
};
```

这是另一种在终端上打印内容的示例，如果您从一个函数返回一些内容，它将被打印出来。您还可以返回一个 [Promise][45]，从而可以向服务器发送 [AJAX][46] 请求并打印结果。

## 预设命令

您可以通过执行示例命令使用户更容易知道如何使用终端，特别是对于那些不太熟悉 Unix 的用户：

```
term.exec(command)
```

```
term.exec(command, { typing: true, delay: 50 });
```

这里是我们的[互动终端作品集网站][47]的一个完整演示。

## 接下来做什么？

你可以为这个作品集添加很多命令。唯一的限制是你的想象力。

你可以查看这些示例来获得灵感：

-   包含 [jQuery Terminal 示例][48] 的 CodePen 集合。
-   [复古（老式）终端 CodePen 示例][49]。
-   [jQuery Terminal 示例页面][50]。
-   [终端 404 错误页面][51]。
-   [假 GNU/Linux 终端][52]。

如果你有一些这里没有列出的想法，你可以在 [StackOverflow 使用 jquery-terminal 标签][53] 询问。如果你有一些需要更多时间的事情，你也可以寻求 [付费支持][54]。

如果你喜欢这篇文章，你可以 [查看我的网站][55]，（有一个类似的终端作品集，还有一个聊天功能），并 [关注我的 Twitter/X][56] 和 [LinkedIn][57]。

[1]: https://terminal.jcubic.pl/
[2]: https://itnext.io/how-to-create-interactive-terminal-like-website-888bb0972288
[3]: #heading-table-of-contents
[4]: #heading-what-is-the-terminal
[5]: #heading-what-is-jquery-terminal
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
```

