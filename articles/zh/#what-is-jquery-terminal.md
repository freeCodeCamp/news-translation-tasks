---
title: 如何创建一个交互式终端风格的作品集网站
date: 2024-08-19T12:26:46.002Z
author: Jakub T. Jankiewicz
authorURL: https://www.freecodecamp.org/news/author/jcubic/
originalURL: https://www.freecodecamp.org/news/how-to-create-interactive-terminal-based-portfolio/#what-is-jquery-terminal
posteditor: ""
proofreader: ""
---

在本文中，您将学习如何使用 JavaScript 创建一个交互式终端风格的作品集和简历。我们将使用 [jQuery Terminal 库][1]（以及其他一些工具）来创建一个看起来像真正终端的网站。

<!-- more -->

本文将展示 jQuery Terminal 库的高级用法。如果您想要更基础的内容，可以查看这篇文章：[如何使用 JavaScript 创建交互式终端风格的网站][2]，这篇文章是为更基础的程序员编写的。您也可以在开始阅读本文之前先阅读它。

## 目录

-   [目录][3]
-   [什么是终端？][4]
-   [什么是 jQuery Terminal？][5]
-   [基础 html 文件][6]
-   [如何初始化终端][7]
-   [欢迎信息][8]
    -   [行间距][9]
    -   [如何为 ASCII 艺术添加颜色][10]
    -   [终端格式化][11]
    -   [如何使用 lolcat 库][12]
    -   [彩虹 ASCII 艺术欢迎信息][13]
    -   [如何使欢迎文本变为白色][14]
-   [如何创建第一个命令][15]
-   [默认命令][16]
-   [如何使帮助命令可执行][17]
-   [语法高亮][18]
-   [Tab 补全][19]
-   [如何添加 Shell 命令][20]
-   [如何改进补全][21]
-   [打字动画命令][22]
-   [学分命令][23]
-   [预填充命令][24]
-   [下一步怎么做？][25]

## 什么是终端？

终端有很长的历史。它始于从 [穿孔卡片][26] 的升级。以前的电脑使用电传打字机，它只是一个键盘和打印机。你在键盘上打字，击键将被发送到电脑（通常是大型机），输出内容会打印到打印机上。

后来，电传打字机被终端取代。终端就像我们今天看到的哑终端。它是带有键盘的 CRT 显示器。因此，输出内容不会打印在打印机上，而是显示在显示器上。

今天我们仍然用这种类型的接口（命令行）与电脑对话。

这些是终端仿真器，是 Unix 系统（如 GNU/Linux 或 MacOS）中的重要组成部分。在 Windows 上，你有 PowerShell 或 cmd.exe 文件，可以输入命令并以文本形式获得响应。你还可以在 Windows 上安装 GNU/Linux 系统，形式是 WSL。CLI 接口主要被高级用户、开发者和系统管理员使用。

如果你是命令行新手，可以阅读这篇文章：[初学者的命令行指南——如何像专业人士一样使用终端 \[完整版手册\]][27]。

## 什么是 jQuery Terminal？

jQuery Terminal 是一个 JavaScript 库。它是 [jQuery 库][28] 的插件。jQuery Terminal 更像是一个框架，它依赖于 jQuery。在本文中我们将主要使用 JavaScript，很少使用 jQuery。

让我们用 jQuery Terminal 创建我们的终端风格作品集。

## 基础 html 文件

首先你需要包含 jQuery 和 jQuery Terminal 库。

这是一个基础的 HTML 文件：

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

然后，在 **my-terminal.js** 文件中，我们将用 JavaScript 编写代码。

## 如何初始化终端

要创建一个基础的终端，你需要放入以下代码：

```
const commands = {};

const term = $('body').terminal(commands);
```

字符串 `'body'` 表示终端应被创建的位置的 CSS 选择器。这里我们使用 `'body'`，因此终端将是页面上唯一的内容。但它不一定是全屏的。你可以创建一个终端只是页面一部分的网站，如在一个看起来像操作系统窗口的部分。

终端方法的第一个参数称为解释器。它是一种添加命令的方法。对象是创建它们的最简单方式。请参阅 [创建解释器][29] 以获取更多信息。

如果终端字体太小，可以使用 CSS 自定义属性（也称为 CSS 变量）将其稍微放大：

```
:root {
    --size: 1.2;
}
```

## 欢迎信息

首先我们需要去掉默认的欢迎信息，并用好看的自定义 [ASCII 艺术][30] 替换它。我们将使用用 JavaScript 编写的 [Filget 库][31]。

在 npm 上有几个 figlet 库。我们将使用一个名为 [figlet][32] 的包。

首先你可以选择合适的字体。访问 [figlet playground][33] 并写下你想要的欢迎文本。我们将使用"Terminal Portfolio"，然后点击"Test All"。它应该会显示所有字体的你的文本。滚动列表并选择你喜欢的字体。

![Image](https://www.freecodecamp.org/news/content/images/2024/04/Przechwycenie-obrazu-ekranu_2024-04-26_22-18-26.png) _终端作品集 ASCII 艺术_

你可以复制这段文本并将其放入字符串中，但你会遇到一些问题，比如反斜杠需要转义引号字符。

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

**注意**：jQuery Terminal 的第二个参数是一个具有选项的对象——我们使用了一个单一选项`greetings`。

这看起来不太好，而且很难修改。如果你通过硬编码字符串来创建问候语，它在较小的屏幕上可能会失真。这就是为什么我们将在 JavaScript 中使用 figlet 库。

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

这段代码将加载`'Slant'`字体，并在字体加载完成后调用函数`ready`。

所以我们需要编写这个函数：

```
function ready() {

}
```

现在我们可以做两件事，我们可以将 jQuery Terminal 的初始化放在该函数内：

```
let term;

function ready() {
   term =  $('body').terminal(commands, {
      greetings
   });
}
```

通过这样，我们可以使用`greeting`选项，但我们也可以使用`echo`方法来渲染问候语，并且在初始化终端时我们将`null`或`false`作为`greetings`来禁用默认的问候语：

```
const term = $('body').terminal(commands, {
    greetings: false
});

function ready() {
   term.echo(greetings);
}
```

这会更好地工作，因为库将立即初始化终端，而无需等待加载字体。

注意，我们仍然需要使用 figlet 来定义问候语。为此我们可以编写这个函数：

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

这个函数使用`figlet::textSync()`方法返回一个字符串，并使用`terminal::cols()`获取每行的字符数。通过这个，我们可以使我们的文本具有响应性。

这个函数可以在`ready`中使用。

```
function ready() {
   term.echo(render('Terminal Portfolio'));
}
```

这将创建一个字符串并传递给`echo`方法。但这将与以下情况相同：

```
term.echo(greeting);
```

和我们的硬编码问候语一样。所以如果你调整终端的大小，问候语仍然可能会失真。为了使文本具有响应性，你需要`echo`一个函数。这个函数将在每次终端重新渲染时调用，当你调整页面大小时会发生这个情况。

我们可以使用箭头函数来完成这一点：

```
function ready() {
   term.echo(() => render('Terminal Portfolio'));
}
```

如果你想在 ASCII 艺术下添加一些文本，你可以通过在渲染后连接字符串来完成：

```
function ready() {
   term.echo(() => {
     const ascii = render('Terminal Portfolio');
     return `${ascii}\nWelcome to my Terminal Portfolio\n`;
   });
}
```

**注意**：如果你运行这段代码，你会注意到 ASCII 艺术后有一行空行。这是因为 figlet 库在文本后添加了一些空格。为了去掉它你可以使用`string::replace`与正则表达式，这将移除所有来自末尾的空格和换行符。

我们不能使用`string::trim()`，因为我们不想移除前导行：

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

你可以做的其他事情是，在加载字体时暂停终端：

```
const term = $('body').terminal(commands, {
    greetings: false
});

term.pause();

function ready() {
   term.echo(() => render('Terminal Portfolio')).resume();
}
```

与 jQuery 相同，你可以链式调用终端方法。

## 行间距

如果你选择的字体在行之间创建了间隙——比如使用 ANSI Shadow 字体的这个图像：

![Image](https://www.freecodecamp.org/news/content/images/2024/05/Przechwycenie-obrazu-ekranu_2024-05-08_14-06-41.png) _带有行间距的 ASCII 艺术_

你可以通过将`ansi`选项设为`true`来移除间隙。这个选项是专门为解决显示 [ANSI Art][34] 的问题而添加的。

```
term.echo(() => render('Terminal Portfolio'), { ansi: true });
```

![Image](https://www.freecodecamp.org/news/content/images/2024/05/Przechwycenie-obrazu-ekranu_2024-05-08_14-57-16.png) _移除间隙的 ASCII 艺术_

## 如何为 ASCII 艺术添加颜色

你可以使用一个名为 lolcat 的库为大型 ASCII 艺术增添趣味。lolcat 是一个 Linux 命令，可在终端中用彩虹颜色来样式化文本。而且有一个名为 [isomorphic-lolcat][35] 的库，你可以在 JavaScript 中使用该库使你的 ASCII 艺术显示彩虹颜色。

### 终端格式化

要使用 lolcat 库，你首先需要了解如何更改终端的颜色。

你可以使用如下所示的低级格式化来实现：

```
[[b;red;]一些文本]
```

整个文本被括号包裹，并且文本的格式化在额外的括号中，其中每个参数用分号分隔。要了解更多关于语法的信息，你可以阅读 Wiki 文章：[格式化和语法高亮][36]。

在这里，我们只使用基本的颜色更改。除了 red，你还可以使用 CSS 颜色名称、十六进制颜色或 `rgb()`。

### 如何使用 lolcat 库

要使用该库，我们首先需要在 HTML 中引入它：

```
<script src="https://cdn.jsdelivr.net/npm/isomorphic-lolcat"></script>
```

要使用颜色格式化字符串，我们可以使用这个函数：

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

`lolcat.rainbow` 将调用一个函数，对输入字符串的每个字符进行处理，并传递一个包含 RGB 值和字符的颜色对象。

### 彩虹 ASCII 艺术问候

要使用此代码，你需要将调用渲染的内容用彩虹包裹：

```
function ready() {
   term.echo(() => {
     const ascii = rainbow(render('Terminal Portfolio'));
     return `${ascii}\nWelcome to my Terminal Portfolio\n`;
   }).resume();
}
```

你也可以使用两次 echo 调用，因为只有 Figlet 信息需要在函数内部执行：

```
function ready() {
   term.echo(() => rainbow(render('Terminal Portfolio')))
       .echo('Welcome to my Terminal Portfolio\n').resume();
}
```

你会注意到，当你调整窗口大小时，彩虹会随机变化。这是 lolcat 的默认行为。要改变它，你需要设置 [随机种子][37]。

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

`rand` 函数返回一个从 0 到最大值的伪随机数。在这里我们创建了一个从 0 到 256 的随机值。

### 如何使问候文本变白

如我们以前所示，你可以用终端格式化使文字变白。  
你可以使用：

-   `[[;white;]Welcome to my Terminal Portfolio]`
-   `[[;#fff;]Welcome to my Terminal Portfolio]`
-   `[[;rgb(255,255,255);]Welcome to my Terminal Portfolio]`

此外，如果你包括额外的 XML 文件格式化，你可以使用类 XML 语法。这使得格式化更容易。

```
<script src="https://cdn.jsdelivr.net/npm/jquery.terminal/js/xml_formatting.js"></script>
```

在 HTML 中包含上述文件后，你可以使用 CSS 命名颜色作为 XML 标签：

```
<white>Welcome to my Terminal Portfolio</white>
```

XML 格式化支持更多标签，如链接和图片，请参见 Wiki 的 [扩展 XML 格式化程序][38]。

**注意**：XML 格式化程序是一个添加到 `$.terminal.defaults.formatters` 的函数，它将输入的类 XML 文本转换为终端格式化。你可以将相同的添加到你自己的格式化程序中。

## 如何制作你的第一个命令

在问候之后，我们可以编写我们的第一个命令。这将非常有用，并且可以与我们稍后添加的任何命令一起使用。

```
const commanns = {
    help() {

    }
};
```

这将是我们的帮助命令，我们将在其中添加可用命令列表给我们的终端作品集。我们将使用 [Intl.ListFormat][39]，它创建一个带有链接在最后一个元素之前的元素列表。

```
const formatter = new Intl.ListFormat('en', {
  style: 'long',
  type: 'conjunction',
});
```

要创建一个列表，我们需要使用 `formatter.format()` 并传递一个命令数组。  
要获得该数组，我们可以使用 `Object.keys()`：

```
const commands = {
    help() {
        term.echo(`List of available commands: ${help}`);
    }
};

const command_list = Object.keys(commands);
const help = formatter.format(command_list);
```

当你输入 help 时，你应该会看到：

```
List of available commands: help
```

你还需要添加 `echo` 命令：

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
可用命令列表：help 和 echo
```

但是，如果你尝试执行 'echo hello'，你将会收到一个错误：

```
[Arity] 参数数量错误。函数 'echo' 预期 0 个参数但得到 1 个！
```

默认情况下，jQuery Terminal 会检查参数数量和函数接受的参数数量。问题在于 `rest` 运算符使得所有参数都是可选的，并且 length 函数的属性是 0。要解决这个问题，我们需要通过一个选项来禁用参数检查：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false
});
```

现在 echo 命令应该可以正常工作。

## 默认命令

默认情况下，jQuery Terminal 有两个默认命令：

-   `clear`：这个命令会清除终端上的所有内容。
-   `exit`：这个命令会退出嵌套的解释器。

你可以通过传递命令名称并将其设置为 false 来禁用它们。由于我们不会使用嵌套解释器，我们可以禁用 `exit`：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false
});
```

但是 `clear` 是有用的。所以我们可以将它添加到命令列表中：

```
const command_list = ['clear'].concat(Object.keys(commands));
```

## 如何使帮助命令可执行

我们可以使用户界面更友好，允许点击命令并执行它，就像用户输入它一样。我们需要做一些事情。首先，我们需要为每个命令添加格式和 HTML 类属性。我们还可以将命令设置为白色以便更明显。

```
const command_list = Object.keys(commands);
const formatted_list = command_list.map(cmd => {
    return `<white class="command">${cmd}</white>`;
});
const help = formatter.format(formatted_list);
```

接下来是添加提示。为了表明用户可以点击命令，我们需要在 CSS 中更改光标：

```
.command {
    cursor: pointer;
}
```

最后一步是当用户点击命令时执行命令。我们需要使用 jQuery 添加一个事件处理程序（jQuery Terminal 依赖）或者我们可以使用浏览器的原生 `[addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)`。这里我们使用 jQuery：

```
term.on('click', '.command', function() {
   const command = $(this).text();
   term.exec(command);
});
```

`terminal::exec()` 是一种以编程方式执行命令的方法，就像用户输入并按下回车键一样。

你可以通过输入 `help` 并再次点击 `help` 来测试它。

点击 `echo` 将打印一个空行。我们可以通过在执行 `terminal::echo()` 之前检查参数数组是否为空来修复它：

```
const commands = {
    echo(...args) {
        if (args.length > 0) {
            term.echo(args.join(' '));
        }
    }
};
```

现在点击 `echo` 将只显示执行的命令。

**注意**：如果由于某种原因你不想显示提示和已执行的命令，你可以通过传递 true 作为第二个参数来静默 `exec`。

```
term.exec('help', true);
```

## 语法高亮

如前所述，我们可以通过将函数推送到 `$.terminal.defaults.formatters` 来自定义我们的 shell 语法高亮。我们还可以使用 `$.terminal.new_formatter` 帮助函数。

让我们在输入命令时将其设为白色。格式化器可以是一个数组（包含正则表达式和替换）或者一个函数。我们有一个固定数量的命令，我们只想将列表中的命令设为白色。我们可以通过添加一个正则表达式来实现：

```
const any_command_re = new RegExp(`^\s*(${command_list.join('|')})`);
```

这个正则表达式将检查字符串的开头是否有一个可选的空格和一个命令。目前正则表达式看起来像这样：`/^\s*(help|echo)/`.

```
$.terminal.new_formatter([any_command_re, '<white>$1</white>']);
```

如果你想将命令参数设为不同的颜色，你需要一个函数，在函数中使用 [String::replace][41]。

```
const re = new RegExp(`^\s*(${command_list.join('|')}) (.*)`);

$.terminal.new_formatter(function(string) {
    return string.replace(re, function(_, command, args) {
        return `<white>${command}</white> <aqua>${args}</aqua>`;
    });
});
```

这是使用 `String::replace` 的一个示例。如果你只有一个替换，你可以使用一个数组。这是相同的：

```
const re = new RegExp(`^\s*(${command_list.join('|')})(\s?.*)`);

$.terminal.new_formatter([re, function(_, command, args) {
    return `<white>${command}</white><aqua>${args}</aqua>`;
}]);
```

**注意**：如果你在格式化器中添加类 `<white class="command">`，你将能够点击输入的命令以再次执行它。

## Tab 补全

我们可以添加的另一个特性是按下 Tab 键时完成命令。这非常简单——我们只需要将补全选项设置为 true：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion: true
});
```

现在，当你输入 `h` 并按下 Tab 键时，它会为你完成 `help` 命令。

现在我们可以添加允许我们浏览作品集的最重要的命令。我们将实现目录作为主要入口点，因此用户需要键入 `ls` 命令来查看项目列表，`cd` 进入该目录，然后再 `ls` 看到内容。

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

这是我们的基本结构。你可以编辑它并填写你的信息。首先，我们将添加一个 `cd` 命令来更改目录。

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

这将处理所有更改目录的情况。接下来是添加提示符。

要查看当前所在的目录，我们需要添加一个自定义的 `prompt`。  
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

绿色不太好看，我们可以使用来自 Ubuntu 的颜色使终端看起来更真实。

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

和绿色类似，蓝色也不是很好，我们可以使用来自 Ubuntu 的颜色。为此，我们需要在 XML 格式化中使用自定义的 XML 标签：

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

我们还需要更新我们的 CSS 来改变光标样式：

```
.command, .directory {
    cursor: pointer;
}
```

## 如何改进自动完成

我们的自动完成并不完美，因为它仅完成命令。如果您想要处理目录的自动完成，您需要使用函数：

```
const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    completion(string) {
        // 在每个函数中我们可以使用`this`来引用term对象
        const cmd = this.get_command();
        // 我们处理命令以提取命令名称
        // 和命令的其余部分（作为一个字符串的参数）
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

**注意**：string 参数被保留作为文档。如果您只希望完成某个单词，可以使用它。

## 动画打字命令

我们将添加的另一个命令是一个动画笑话。我们将使用一个 API 打印随机笑话，看起来像用户在打字。

我们将使用 [Joke API][42]。

API 返回 JSON 数据，有两种类型的响应：`twopart` 和 `single`。这是在终端上打印文本的代码：

```
// 我们使用编程笑话，这样更符合
// 开发者作品集
const url = 'https://v2.jokeapi.dev/joke/Programming';
const commands = {
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        if (data.type == 'twopart') {
            // 如前所述，在每个传递给终端的函数中
            // 您可以使用`this`对象引用终端实例
            this.echo(`Q: ${data.setup}`);
            this.echo(`A: ${data.delivery}`);
        } else if (data.type === 'single') {
            this.echo(data.joke);
        }
    },
}
```

要添加打字动画，需要给`echo`方法添加一个选项：

```
this.echo(data.joke, { delay: 50, typing: true });
```

这里有一个注意事项：如果你有一系列的打字动画，你需要等待前一个完成（动画时 echo 会返回一个 promise）。你需要将代码包裹在一个 `async` 函数中，并且需要清除提示，以免在动画之间产生闪烁。默认情况下，提示用于打字效果。所以完整的代码应该如下所示：

```
// 我们使用编程笑话，这样更符合
// 开发者作品集
const url = 'https://v2.jokeapi.dev/joke/Programming';
const commands = {
    async joke() {
        const res = await fetch(url);
        const data = await res.json();
        (async () => {
            if (data.type == 'twopart') {
                // 我们清除提示以避免
                // 动画之间的闪烁
                const prompt = this.get_prompt();
                this.set_prompt('');
                // 如前所述，在每个传递给终端的函数中
                // 您可以使用`this`对象
                // 引用终端实例
                await this.echo(`Q: ${data.setup}`, {
                    delay: 50,
                    typing: true
                });
                await this.echo(`A: ${data.delivery}`, {
                    delay: 50,
                    typing: true
                });
                // 我们恢复提示
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

您可以在维基文章中阅读更多关于打字动画的内容：[Typing Animation][43][.][44]

## Credits 命令

我们将添加的最后一个命令是一个 credits 命令，我们将在其中列出使用的 JavaScript 库：

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

这是在终端上打印内容的另一种方式的示例，如果您从函数返回内容，它将被打印。您也可以返回一个 [Promise][45]，这样您可以发送 [AJAX][46] 请求到服务器并打印结果。

## 预填充命令

您可以通过执行示例命令，使用户更容易知道如何使用终端，特别是如果他们对 Unix 不太熟悉的话：

```
term.exec(command)
```


```
term.exec(command, { typing: true, delay: 50 });
```

这是我们 [互动终端作品集网站][47] 的一个完全可运行的演示。

## 下一步是什么？

你可以为这个作品集添加很多命令。唯一的限制是你的想象力。

你可以查看这些示例来获得灵感：

-   带有 [jQuery Terminal 演示][48] 的 CodePen 收集。
-   [复古终端 CodePen 演示][49]。
-   [jQuery Terminal 示例页面][50]。
-   [终端 404 错误页面][51]。
-   [假的 GNU/Linux 终端][52]。

如果你有这里只列出的想法，可以在 [StackOverflow 带 jquery-terminal 标签进行询问][53]。如果你有一些较耗时的需求，你也可以寻求 [付费支持][54]。

如果你喜欢这篇文章，可以 [查看我的网站][55]，（其中有一个类似的终端作品集和一个聊天功能），并 [关注我的 Twitter/X][56] 和 [LinkedIn][57]。

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

