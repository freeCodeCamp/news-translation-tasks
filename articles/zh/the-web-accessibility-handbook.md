```markdown
---
title: 您需要知道的关于 Web 无障碍访问的一切
date: 2025-07-17T01:59:58.317Z
author: Kunal Nalawade
authorURL: https://www.freecodecamp.org/news/author/KunalN25/
originalURL: https://www.freecodecamp.org/news/the-web-accessibility-handbook/
posteditor: ""
proofreader: ""
---

互联网是获取信息和与人交流的绝佳平台。它开启了无数的机会，让生活在许多方面变得更加便利。

<!-- more -->

但并不是所有人都以相同方式体验网络。对于有视觉、听觉或行动障碍的人来说，网站的使用是困难的。这些障碍使得内容的导航更加困难，在某些情况下，使得访问网络完全不可能。

本手册将帮助您理解无障碍访问及其实现方法。无论您是初学者还是中级开发人员，您都将学习基本的无障碍实践和一些高级技术。这将帮助您让站点更加包容。

让我们开始吧。

## 目录

-   [什么是无障碍访问？][1]
    
-   [基本的无障碍访问实践][2]
    
    -   [语义化和非语义化 HTML][3]
        
    -   [文本内容][4]
        
    -   [页面布局][5]
        
    -   [交互元素][6]
        
    -   [键盘可访问性][7]
        
    -   [表单标签][8]
        
    -   [链接][9]
        
    -   [表格无障碍访问][10]
        
-   [额外的 CSS 和 JavaScript 实践][11]
    
    -   [表单元素样式][12]
        
    -   [色彩对比][13]
        
    -   [JavaScript 实践][14]
        
-   [高级无障碍实践：WAI-ARIA][15]
    
    -   [角色属性][16]
        
    -   [aria-\* 属性][17]
        
    -   [动态内容属性][18]
        
    -   [表单验证和错误][19]
        
    -   [将非语义元素用作按钮][20]
        
-   [多媒体无障碍访问][21]
    
-   [移动无障碍访问][22]
    

## 什么是无障碍访问？

无障碍访问 (A11y) 是网络开发中的一项重要实践，旨在让网站对所有人可用（可访问）。这包括使残疾人可以更容易地使用网站。通过让网站对每个人都可以访问，包括残疾人，确保他们享有和我们一样的机会。我们也在整体上帮助互联网成为一个更具包容性的地方。

我们应考虑哪类残疾？大体上：

-   视觉障碍：失明、视力模糊和色盲
    
-   听觉障碍：低听力到听力完全丧失
    
-   行动障碍：身体动作困难
    
-   认知障碍：例如阅读障碍和注意力缺陷多动障碍 (ADHD)
    

例如，视力障碍者通常使用设备如[屏幕阅读器][23]来可视化和理解网站的内容。因此，网络无障碍访问的一个重要部分是设计一个屏幕阅读器可以轻松访问的网站。

作为开发人员，您可以遵循多种实践来使网站无障碍，我将在本手册中介绍。

## 基本的无障碍访问实践

无障碍访问不仅仅是您已经开发的网站上的一个附加功能。这是一种必须贯穿开发过程的实践。每当您在网页上创建内容时，问问自己它是否真的可访问。

另一个重要的点是，无障碍访问不仅仅是为了有障碍的人。它通过使网站更易于使用，进而提升整体用户体验，惠及每个人。

如何实现良好的无障碍访问？嗯，当书写 HTML、CSS 和 JavaScript 代码时，您应该遵循一些精良的实践。我们将在本节讨论一些基本实践。

在深入探讨之前，让我们先了解什么是语义化和非语义化 HTML 标签：

### 语义化和非语义化 HTML

非语义化 HTML 标签不会传达特定的含义或目的。根据 CSS 样式和 JavaScript 功能，它们可以用于任何用途。非语义化标签的例子有：`<div>` 和 `<span>`。这些标签主要用作包裹其他元素的容器。

语义化 HTML 标签通过其名称清楚地向浏览器和开发人员描述其用途。它们提高了代码的可读性，并有助于[SEO (搜索引擎优化)][24]。语义化标签的例子包括：`<button>`、`<a>`、`<header>`、`<footer>`。

您可以在[这里][25]找到所有语义元素的列表。

#### 使用语义 HTML 的重要性

无障碍访问的一个重要部分是为其预定目的使用正确的 HTML 元素。这意味着，例如，当您想渲染一个按钮时，使用 `<button>` 标签。

但为何使用语义化元素？毕竟，您可以使用 CSS 让 `<div>` 看起来像按钮。没错，但使用语义化元素很重要，原因如下：

-   语义化元素具有内置的样式和功能，否则您需要通过 CSS 和 JavaScript 添加。这使得它们更易于使用。
    
-   它们使代码更易读和维护，因为您可以实际看到正在使用的元素，而不是处处看到一堆 div。
    
-   屏幕阅读器可以轻松读取和解释语义化元素，帮助视觉障碍者。
    
```

随意使用屏幕阅读器测试每个示例。在 Mac 上，使用 ⌘+F5 激活 VoiceOver，这是 Mac 内置的屏幕阅读器。对于 Windows，你可以通过按 Ctrl + Windows 键 + Enter 来使用内置的屏幕阅读器 Narrator。

### 文本内容

在编写文本内容时，使用正确的元素来表示标题、段落和列表非常重要。让我们通过以下示例来理解。

假设你按如下方式编写标题和段落：

```
<span id="heading1">标题 1</span>
<br />
<br />
<span id="heading2">标题 2</span>
<br />
<br />
这是一个段落
<br />
<br />
这是另一个段落
```

这种方法存在以下问题：

-   屏幕阅读器无法区分标题和段落——它会一口气读出内容，从而让依赖屏幕阅读器的人感到困惑。
-   很难对单个段落进行样式设计，因为没有选择器。即使你给每个段落添加一个 `<span>`，也需要额外的 CSS 样式。
-   它还包含不必要的换行符，可以通过使用正确的元素来避免。

以上代码是语义不佳的例子。你应该这样做：

```
<h1>标题 1</h1>
<h2>标题 2</h2>
<p>这是一个段落</p>
<p>这是另一个段落</p>
```

在这里，我们使用了正确的语义元素来表示文本内容，其好处如下：

-   屏幕阅读器能够通过在阅读文本之前读出标题级别来区分标题和段落文本。
-   `h1`、`h2` 和 `p` 自带样式并且每个都在新行上呈现。这消除了使用换行符的需要。
-   代码看起来更清晰，更易于阅读。

#### 列表

为了渲染一个项目列表，我们有以下方法。非语义方法只是将一组 div 组合在一起并应用 CSS 样式。

```
<h2>待办事项列表</h2>
<div id="mylist">
  <div>做早餐</div>
  <div>洗衣服</div>
  <div>完成博客文章</div>
</div>
```

同样，这实现了所需的输出，但屏幕阅读器很难将此内容识别为项目列表。相反，使用语义元素：

```
<h2>待办事项列表</h2>
<ul id="mylist">
  <li>做早餐</li>
  <li>洗衣服</li>
  <li>完成博客文章</li>
</ul>
```

这有助于屏幕阅读器识别元素为无序列表并逐个读出每个项目。`<ul>` 还附带默认样式和每个列表项的项目符号。你也可以使用 `<ol/>` 来表示编号列表，屏幕阅读器会读出每个列表项的编号。

你可以使用 Mac 的 VoiceOver 来测试以上示例，以查看差异。

#### 强调文本

强调文本是指在内容中突出显示的文本，给某些单词或短语增加重要性。在添加强调文本时，使用正确的语义元素如 [`<strong>`][26] 和 [`<em>`][27] 很重要。

```
<p>为了获得最佳效果，烹饪时请使用<em>新鲜食材</em>。</p>

<p>水变成气体的过程称为<strong>蒸发</strong>。</p>
```

这些元素为文本添加了一些内置样式，如_粗体_和_斜体_。此外，如果你用 VoiceOver 测试，你会注意到它对这些元素中的文本略显强调。这帮助使用屏幕阅读器的人识别强调文本。

你也可以为强调文本添加一些颜色。但不需要添加太多样式，否则可能导致混淆。请访问 [MDN 文档 - emphasis and importance][28] 以了解更多关于 HTML 中文本强调的信息。

#### 缩写

接下来，在编写缩写（或首字母缩略词）时，最好使它们在视觉上有所区别，并包括缩写的完整释义。你还可以为缩写添加一些简单的样式。有关缩写的更多信息，请参阅 [MDN 文档 - abbreviations][29]。

#### 其他最佳实践

除了上述内容，还有一些其他做法值得遵循：

- 尽可能使用清晰的语言。例如，展开缩写：不要写 Jan，而是写 January。
- 在书写范围时，尽量避免使用破折号，写 1 到 5 代替 1-5。
- 避免使用在屏幕阅读器读出时可能让用户感到困惑的字符，例如 `~` 或 `*`。
- 避免过多的感叹号和表情符号。

此外，在为文本内容编写 CSS 时，请记住这些实践：

- 在使用字体大小、行高和字母间距等样式时，确保文本易于阅读。
- 如果你在使用 CSS 样式，标题应该从其他文本中脱颖而出。通常，这仅通过使用正确的标题标签就可以实现。
- 文本颜色应该与背景有 4.5:1 的对比度。详细信息请参见[颜色对比][30]部分。

如果你想获得更多关于文本样式的提示，请访问 [MDN 文档 - CSS 文本样式][31]。

### 页面布局

页面布局关注于内容在屏幕上的排列方式。当你开始设计网页时，首先想到的是你的内容应该如何在屏幕上定位。

但是表格使布局变得极其复杂且难以维护。表格布局对屏幕阅读器来说也很难读取，影响了可访问性。

如今，有很多更好的方式来编写页面布局。如果您要包含标题、导航栏以及页脚和主要内容，您可以使用以下语义元素：

```
<header>
  <h1>标题</h1>
  <nav>
    <!-- 主导航内容 -->
  </nav>
</header>

<!-- 这是我们页面的主要内容 -->
<main>
  <!-- 在此添加主要内容 -->
</main>

<footer>
  <!-- 页脚内容 -->
</footer>
```

让我们理解一下上面使用的每个标签（如果您已经知道，可以略过）：

- `<header>`：代表网页的介绍性部分，通常包含标题、标志或导航链接。
  
- `<nav>`：定义一个导航部分，其中包含指向网站或页面其他部分的链接，提供对重要部分的便捷访问。
  
- `<main>`：代表主要内容区域，专注于页面或网站的主要目的，不包括常见元素如标题、页脚或侧边栏（视具体网站而定，可能包含侧边栏）。
  
- `<footer>`：代表网页的底部部分，通常包含元数据、版权信息或相关资源的链接。

这些元素被称为[分段元素][32]。使用这些元素的优点如下：

- 布局清晰，每个元素清楚地描述了其用途，使代码可读且易于维护。
  
- 使用正确的语义元素可以使屏幕阅读器识别布局的每个部分，从而帮助视觉障碍用户理解网站的结构。

当然，您可以使用 div 来编写上述布局，但分段元素提供良好的语义，有助于用户理解他们正在浏览的内容类型。

### 交互式元素

这些元素包括用户通过其与网页进行交互的元素。这些元素包括按钮、表单字段、链接等。

#### 键盘可访问性

网页上的每个交互式元素都应该可以通过键盘进行导航。这为用户在浏览您网站时提供了灵活性。键盘可访问性对行动不便并可能难以使用鼠标的人来说非常有帮助。

例如，访问[此][33]页面，并尝试通过按键盘上的 Tab 键导航到每个交互式元素。您也可以按 Enter/空格键来点击按钮或链接。这应该会让您了解键盘可访问的网站是什么样的。

在大多数情况下，使用正确的语义元素应该确保键盘可访问性，因为它们自带内置功能。请查看以下示例：

```
<p>
  访问我的博客 
  <a href="https://www.freecodecamp.org/news/author/KunalN25/">freecodecamp.org</a>
</p>

<button>点击我</button>
<button>再次点击我</button>

<div>
  <input type="text" placeholder="输入你的名字" />
</div>
```

在这里，我们为超链接、按钮和输入元素使用了正确的语义元素。所有这些元素都可以通过 Tab 键访问，并使用 Enter/空格键进行交互。请查看表单相关元素的其他内容在这个[列表][34]中。

有些人使用 `div` 或 `span` 并通过 CSS 样式使它们看起来像是锚标签或按钮。但这对可访问性不利，原因有两个：

- `div` 和 `span` 默认情况下不能被 Tab 键选中。因此，即使您确实让 `div` 看起来像一个按钮，用户也无法通过键盘导航到它。
  
- 屏幕阅读器无法识别它们为按钮，而在语义元素的情况下，它们会将这些元素读作按钮或链接。

但是如果您绝对需要使用 `div` 创建可点击的元素，请包含以下属性：

```
<div id="customButton" role="button" tabindex="0">点击我</div>
```

这里，我们添加了两个属性，`tabindex` 和 `role`。我们将在后面的章节中理解 `role` 属性。

[`tabindex`][35] 属性接受一个整数，该整数指定可 Tab 的元素的 Tab 顺序，而不是默认的自上而下的 Tab 顺序。正整数表示元素根据属性的值以指定顺序获得焦点。

但使用 tabindex 改变默认的 Tab 顺序是不建议的，因为这可能会导致键盘导航者的困惑并影响可访问性。而且坦白说，这没有必要。

您只应使用以下两个值：

- `tabindex="0"` 使元素可 Tab，这意味着可以通过键盘以自然的 Tab 顺序对其进行访问。
  
- `tabindex="-1"` 表示元素无法通过键盘导航到达。

这些属性使 `div` 表现得像个按钮，但您仍需添加一小段 JS 代码，以使按钮可以通过 Enter/Return 键点击：

```
document.getElementById("customButton").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.activeElement.click();
  }
});
```

在这里，我们为该元素添加了一个事件监听器，用于监听 keydown 事件。如果按下的键是 Enter，那么它会调用元素的 `onclick` 方法。

键盘无障碍对于音频和视频控制同样重要。我们将在[多媒体无障碍][36]部分讨论这一点。

### 表单标签

表单标签是描述您需要在表单字段中输入内容的文本。向表单字段添加标签是必要的做法，因为它可以让用户知道如何填写表单。但使用正确的语义元素很重要。

您可以执行以下操作，并仍能达到所需的输出：

```
Enter name: <input type="text" id="name" name="name" />
```

这对屏幕阅读器用户来说不好，因为它不会读出输入字段的用途。即使它读出“Enter name”，用户也可能不会将其与输入字段关联起来。相反，请为表单标签使用 `<label>` 元素。

```
<div>
      <label for="name">Enter name:</label>
      <input type="text" id="nameField" name="name" />
</div>
```

`for` 属性将标签与输入字段关联在一起。这样，当屏幕阅读器的焦点在输入字段上时，它会读出标签，然后是“edit field”，以便让用户知道他们应该在输入字段中输入名字。

查看这些示例中的[带标签的表单][37]和[不带标签的表单][38]以获得更多清晰的了解。使用Mac的Voiceover (⌘+F5) 或Windows的Narrator (Ctrl+Windows+Enter) 查看它如何读取表单元素。

使用 `<label>` 有更多优势：

-   通过使用 `for` 属性将 `<label>` 与输入字段链接（可点击关联），点击标签会聚焦到输入字段。
    
-   与输入字段的可点击关联有助于用户选择小型输入，比如[复选框][39]或[单选按钮][40]。
    
-   它遵循语义HTML，并指定文本被用作表单标签。
    

最后，请记住，标签文本应清晰描述用户应在字段中输入的内容。例如，“Enter name”或“Enter email”。

这同样适用于按钮。确保按钮文本足够具描述性，以便向用户说明他们在点击什么。像“Click me!” 或“Click here!” 这样的模糊文本是不够的。具有描述性的文本示例有“Submit Form”或“Download Report”，这给用户明确的按钮操作。

除此之外，链接也是属于交互元素。但由于链接有很多示例，我将在他们自己的部分中讨论。

### 链接

链接是网页的重要组成部分，因为它们允许用户导航网站。链接用途多样：进入同一网站的不同页面、访问外部网站或下载某些内容。在本节中，您将学习一些与链接相关的实践，以提升可访问性。

#### 链接到外部网站

当您添加一个链接，允许用户打开一个外部网站时，包括 `target=_blank` 属性可以在新标签页中打开链接。

```
<a href="https://www.wikipedia.org/" target="_blank"> Wikipedia </a>
```

这对用户有帮助，因为他们不需要退出网站，避免了返回网站的麻烦。

另外，如果您的链接在新标签页中打开，最好提到这一点，以便屏幕阅读器可以读出，让视觉障碍用户了解。

```
<a href="https://www.wikipedia.org/" target="_blank" >
Wikipedia (opens in new tab)
</a>
```

类似地，如果您的链接打开的是非HTML文件，比如pdf或docx，您应该提到：

```
<a target="_blank" href="jan-salary-slip.pdf">
Salary-January (PDF)
</a>
```

或者，您可以使用图标来指示在新标签页中打开的链接。

```
<a href="https://www.wikipedia.org/" target="_blank">
  Wikipedia
  <img src="new-tab-icon.png" alt="Opens in new tab" style="width:16px; height:16px; margin-left:5px;">
</a>
```

使用图标时，请确保包含带有图片描述的alt属性。我们将在[多媒体无障碍][41]部分了解其用途。

#### 跳过链接

跳过链接是放置在页面顶部的链接元素，直接链接到页面的主要内容。这允许用户跳过标题和所有导航菜单，直接跳转到页面的主要内容。这在顶端有大量重复内容（如菜单或横幅）的网页上特别有用。

跳过链接对视觉障碍者尤其有帮助，他们可能使用屏幕阅读器。这些链接提供了一种方式来绕过重复的导航菜单，直接访问主要内容。这也帮助了键盘导航者，从而节省时间并提升用户体验。

要添加跳过链接，请在页面最顶部（紧靠body标签下）添加锚标记，并链接到主要内容。

```
<body>
 <a href="#main">Skip to main content</a>
    <header>
      <h1>Page Title</h1>
      <nav>
        <ul id="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
          <!-- 其他导航链接 -->
        </ul>
      </nav>
    </header>
    <main id="main">
      <!-- 主要内容 -->
    </main>
</body>
```

#### 链接样式

默认情况下，由锚标签创建的链接在视觉上与非链接文本不同。这是因为锚标签具有内置样式，例如颜色、[文字装饰][43]、聚焦环（当您使用键盘定位到链接时显示）和悬停效果。

链接应看起来与其他文本不同，以便于辨别。如您在上面所见，浏览器会为您处理，因此您不需要做太多。但如果您要为链接添加适合主题的自定义样式，则需要遵循一些最佳实践：

- 链接在默认、[已访问][44]、[聚焦][45] 和 [悬停][46] 状态下应具有不同的颜色。

- 链接文本颜色应与非链接文本不同，并且应具有不同的样式。

- 链接文本颜色与其他文本应具有 3:1 的对比度，与背景颜色应具有 4.5:1 的对比度。有关更多理解，请参阅 [颜色对比][47] 部分。

下面展示了一个链接自定义样式示例（来自文档）：

```
a {
  color: #ff0000;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

借助 [伪类][48]，这为链接在悬停、已访问、聚焦（使用键盘）或激活（正在点击链接时）时添加了不同的样式。

您可以尝试不同的颜色和样式，但不要移除 `cursor: pointer` 或 `outline` 属性。这两者对于使用键盘导航的人来说非常重要。

记住，链接已经为所有链接状态提供了内置样式。只有当您需要与网站主题一致时，才添加自己的样式。

#### 避免使用 onclick 处理程序

链接用于导航到同一网站上的另一个网页或导航到外部网站。在 [href][49] 属性中指定链接可以为您实现这一点，无需添加 JavaScript 代码。

但有些人会在锚元素中添加 `onclick` 属性，使其表现得像按钮，并将 `href="#"` 或 `href="javascript:void(0)"` 设置为避免页面刷新。这会导致意想不到的行为，并可能导致以下问题：

- 复制或拖动此链接会将不必要的 `#` 或 `void(0)` 添加到 URL 中，这没有任何意义。

- 点击链接立即滚动页面到顶部，可能导致用户失去位置。

- 如果 JavaScript 正在下载中，点击链接没有任何反应，网页变得无响应。

这对语义和可访问性也有不好影响，使用屏幕阅读器的人可能会感到困惑。如果您想在点击元素时添加 JavaScript 功能，请使用 `<button>`。只有在导航到正确的 URL 时才使用链接。

#### 有意义的链接文本

与按钮类似，编写链接文本时，应保持其有意义且具有描述性，避免使用“点击这里”或“点击此处”。

```
<p>
  有关无障碍访问的更多信息
  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    点击这里
  </a>
</p>
```

与其使用上述方式，不如这样做：

```
<p>
  有关无障碍访问的更多信息，请访问
  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    MDN 文档 - 无障碍访问
  </a>
</p>
```

请查看文档中的 [良好链接][50] 和 [不良链接][51] 示例。您也可以使用 VoiceOver 测试它们（⌘+F5）。

#### 链接的间距

如果您的网页有很多交互元素，如链接和按钮，确保它们间距适当以防止意外点击。这有助于有 [运动控制问题][52] 的人避免点击错误的链接。

使用 [`margin`][53] 属性应足以确保间距。

### 表格的可访问性

在页面布局部分，我们看到使用表格创建页面布局是一种过时的做法。然而，如果您想以表格形式显示大量数据，仍然可以使用表格。在表格中结合可访问性有助于屏幕阅读器解释它们，并帮助视障用户。

查看 [MDN Docs - 表格可访问性][54] 以了解最佳实践。

## 其他 CSS 和 JS 实践

您的大多数可访问性目标应该仅通过 HTML 实现。但在编写 CSS 和 JavaScript 时需要注意某些事项，以确保不会破坏可访问性。

### 表单元素的样式

在为表单元素设置样式时，请记住以下几点：

- 不要移除表单元素的默认聚焦轮廓、悬停和禁用状态的样式。您可以根据站点设计对其进行修改，但它们仍应可见。

- 确保您的标签和占位文本在视觉上清晰。遵循颜色对比实践（下一节）。

- 对于像按钮和输入这样的可点击区域，确保它们足够大，以便用户可以舒适地点击。

- 成功和错误信息在物理上应与标签和其他文本内容可区分。

### 颜色对比

当您为网站选择颜色时，文本和背景颜色应具有良好的颜色对比。良好的颜色对比确保所有用户都可以轻松阅读文本（这对特别是色盲人士有帮助）。

![推荐的色彩对比度](https://cdn.hashnode.com/res/hashnode/image/upload/v1736175276741/40ee7fe4-110c-4dd1-95f3-4cb7620de032.png)

让我们了解色彩对比度评级：

-   AA 评级指您的色彩对比度应该达到的最低限度，确保网站的内容易于阅读。如上表所示，这要求正文文本的最低对比度为 4.5:1，大字体文本为 3:1，活动用户界面组件和图形对象为 3:1。
    
-   AAA 评级是确保网站高对比度的理想无障碍标准。这要求正文文本的对比度为 7:1，大字体文本为 4.5:1，并且没有规定 UI 组件/图形对象的对比度。
    

选择一个与您的设计良好契合的对比度，但尽量保持至少 AA 评级。要检查两种颜色之间的色彩对比度，可以使用以下工具：

-   [Color Contrast Checker][55]

-   [Chrome Developer Tools][56] - 识别网站上不符合 AA 和 AAA 评级的文本
    

### JavaScript 实践

#### 鼠标专用事件

当您有通过[鼠标悬停][57]和[鼠标移出][58]之类的事件触发的功能时，依赖键盘导航的人无法访问这些功能。因此，要让这些功能可通过键盘访问，您需要将相同的事件处理程序添加到[焦点][59]和[失焦][60]等事件中。

#### 客户端表单验证

当您通过表单提交数据时，数据将被验证以检查您是否输入了有效数据。通常，当数据发送到服务器时，服务器会验证数据并通知用户界面验证是否失败。

为了使网站更加用户友好，可以在客户端添加表单验证，这样用户在输入错误数据时可以立即获得反馈，因为服务器端机制可能需要时间。这是改善用户体验的一小步。

查看[表单验证][61]示例以了解更多信息。

除了上述内容外，您还应记住不要将 JavaScript 用于所有事情。JavaScript 可以用来生成任何形式的 HTML 并动态应用 CSS 样式。如果您的网站有动态内容，这是非常有用的。

但是，如果 JavaScript 生成了太多 HTML，屏幕阅读器将很难跟踪动态更改。这会使视障用户难以阅读网站。因此，请确保在简单 HTML 就足够的情况下不要过度使用 JavaScript。

动态内容更新的可访问性将在下一部分中介绍。

## 高级可访问性实践：WAI-ARIA

随着应用程序变得越来越大和复杂，开发人员开始需要一套新的可访问性功能。仅有语义元素是不够的，尤其是对于日期选择器和自定义小部件等复杂元素。

当网页上动态更新内容时，依赖于语义 HTML 并没有帮助。如今，所有用 JavaScript 构建的网站都包含未初始加载的内容，而是根据用户交互动态更新。

引入 WAI-ARIA（Web 可访问性计划 - 可访问的丰富互联网应用程序）是为了在需要的地方添加更多可访问性功能。它定义了一组 HTML 属性，您可以使用这些属性为网站提供额外的语义并提高可访问性。

在接下来的部分中，您将了解引入了哪些属性以及如何使用它们来增强可访问性。

### `role` 属性

`role` 属性通过定义页面上的“角色”帮助为非语义元素添加语义信息。通过“角色”，屏幕阅读器可以准确地读取非语义元素并帮助为残障人士识别它们。

W3C 定义了多个可根据用途使用的角色。但请记住，仅在必要时使用 `role`。在大多数情况下，更好的办法是直接使用正确的语义元素，如 `<button>`、`<nav>`、`<header>` 等。

但是，当语义元素无法满足需求时，角色可以提供帮助。让我们通过一些示例了解如何使用它们：

如果您想用自定义 `div` 创建按钮，添加 `role` 属性可以指定此元素用作按钮。

```html
<div role="button" tabindex="0">点击我</div>
```

当您使用 Mac 的 VoiceOver (⌘+F5) 进行测试时，它会将元素读作按钮。如前所述，请始终包含 `tabindex` 属性。

但是，如果您想使用 `div` 而不是按钮，您仍然需要添加 JavaScript 功能，如[键盘可访问性][62]部分所述。

另一个示例是如果您正在编写自定义链接。您可以使用以下角色，使屏幕阅读器将其解释为链接：

```html
<div role="link">访问我们的网站</div>
```

除了交互元素外，`role` 属性还可用于将元素定义为导航菜单、侧边栏、横幅等。如果您使用非语义元素用于这些目的，请始终包括一个角色，如下所示：

在这种情况下，屏幕阅读器会将其宣布为导航区域。

另外，如果您有一个元素作为用户的警报，只要包含以下角色，即使它没有焦点，屏幕阅读器也会在它显示在屏幕上时立即宣布：

```
<div role="alert">
  请回应此警报
</div>
```

您可以在 [MDN Docs: WAI-ARIA Roles][63] 找到可用角色的完整列表。

### aria-\* 属性

除了 `role` 之外，ARIA（Accessible Rich Internet Applications，可访问的丰富互联网应用程序）定义了额外的属性来增强网页应用程序的可访问性。这些属性为屏幕阅读器提供了更多关于元素的信息，帮助残障人士更好地理解它们。

如果原生语义元素或 `role` 属性本身不够充分，aria-\* 属性可以提供更多上下文。您可以在 [MDN Docs-ARIA][64] 中找到这些属性的完整列表。

在接下来的章节中，我们将看到如何使用 role 和 aria-\* 属性来提高可访问性。我们在这里不会涵盖所有的属性，但会专注于最常用的那些。

### 动态内容更新

当网页首次加载时，其内容会被屏幕阅读器读出。但屏幕阅读器无法捕捉动态内容，也就是被添加或移除的内容。

例如，当一个网页正在显示实时体育更新时，内容几乎每分钟都会更新。屏幕阅读器只会读出页面首次呈现时显示的内容，而不会显示动态更新。

这对于许多用户来说并不是真正的问题，但对于视觉障碍者来说，屏幕阅读器可能无法读取页面上的变化。大多数现代网站本质上是动态的，因此考虑动态内容更新的可访问性很重要。

查看来自 MDN Docs 的 [aria-no-live][65] 示例。它每 10 秒加载一个新引用，作为没有视觉障碍的用户，您可以清楚地看到这一点。但屏幕阅读器只会读取最初的页面内容，不会宣布更新。这对可访问性不好。

为了解决这个问题，WAI-ARIA 提供了 [`aria-live`][66] 属性，使屏幕阅读器读出更新的内容。您可以将此属性添加到包含动态内容的元素中。

它采用以下三个值：

- `aria-live="off"`：默认值，表示没有内容被读出
    
- `aria-live="polite"`：仅当用户空闲时才宣布更新
    
- `aria-live="assertive"`：内容在更新后立即被读出。
    

根据更新的重要性，您可以决定使用哪个值。

```
<div aria-live="polite">
    <!-- 动态内容在这里 -->
</div>
```

在这种情况下，屏幕阅读器会等到用户完成当前任务后才宣布更新。

您可以在这里添加更多细节。使用上述属性，只有更新的文本会被读出。但屏幕阅读器用户可能会对页面中被读出的部分感到困惑。因此，如果整个元素被读出会很有帮助。

```
<div aria-live="assertive" aria-atomic="true">
    <!-- 动态内容在这里 -->
</div>
```

[`aria-atomic`][67] 属性告诉屏幕阅读器将整个元素作为一个原子单位读出。这避免了视觉障碍用户的困惑。查看来自 MDN Docs 的 [aria-live][68] 示例与 Mac 的 VoiceOver (⌘+F5)。当内容更新时，它会读出整个元素。

### 表单验证和错误

假设您通过 JavaScript 为您的表单添加了一些验证。当验证失败时，屏幕上会添加错误消息。例如，如果您错过了一个字段，则会显示一个必需消息。

错误处理的实现涉及创建一个包含错误消息或在某些条件下根据 JavaScript 代码渲染的错误列表的元素。正如我们在上一节中讨论的，屏幕阅读器不会读出新内容更新。

因此，我们应该确保屏幕阅读器在错误消息出现时立即读出，以便视觉障碍用户知道已抛出错误。为此，我们可以使用以下属性：

```
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

[`alert`][69] 角色有两个作用。首先，它在语义上将此元素标识为一段重要信息。其次，此角色将该元素变成一个 [live][70] 区域，这意味着屏幕阅读器会在有任何更改时立即通知。

[`aria-relevant`][71] 属性描述了在 live 区域中需要宣布的更改。该属性采用以下值的空格分隔列表：

- `additions`：宣布添加到 live 区域的新内容
    
- `removals`：读出从 live 区域移除的内容
    
- `text`：宣布对现有内容的任何修改。
    

它还接受值 `all`，这是 `additions removals text` 的简写，表示读出所有三种类型的内容。

您可以检查来自 MDN Docs 的 [Form Validation Example][72]。

```
<p>标有星号 (*) 的字段是必填项。</p>
```

这对于普通用户很有帮助，但视力障碍用户可能会对哪些字段是必填项感到困惑。为了让他们更容易辨别，我们可以使用 [`aria-required`][73] 属性。

```
<input type="text" name="name" id="name" aria-required="true" />
```

使用此属性，当屏幕阅读器朗读时，会提到该字段为“必填”。

在创建输入字段时，重要的是要包含标签，因为一些屏幕阅读器不会朗读占位符文本。如果您不想包含标签字段，有以下替代方案：

您可以使用 `aria-label` 属性为没有关联标签的输入字段添加标签。

```
<input type="email" name="email" aria-label="输入邮箱" />
```

此属性提供了一些文本供屏幕阅读器朗读，以描述输入字段。

您可以更进一步，使用 `aria-labelledby` 属性，它使用另一个元素作为输入字段的标签。例如：

```
<div>
  <span id="emailLabel">输入您的邮箱</span>
  <input type="email" name="email" aria-labelledby="emailLabel" />
</div>
```

屏幕阅读器会朗读 `<span>` 元素内的文本来描述输入元素。这与 `<label>` 的 `for` 属性类似。您还可以使用此属性引用其他交互元素，如 `<button>` 或 `<a>`，这些元素没有标签字段来引用它们。

请记住，`aria-labelledby` 属性仅为元素定义了一个可访问的名称——它不提供其他功能，比如点击标签聚焦到输入元素。使用带有 `for` 属性的 `<label>` 更好。

我们已经在 [交互元素][74] 部分讨论了表单标签。

您现在了解了一些 WAI-ARIA 提供的不同属性以及它们如何增强可访问性。您可以访问 [MDN Docs: WAI-ARIA][75] 查看我可能遗漏的其他详细信息。

在我们继续之前，请记住一件事：_仅在必要时使用 WAI-ARIA_。通常情况下，语义元素可以实现您的大多数可访问性目标。不要过度使用 WAI-ARIA，因为它们可能会使您的代码复杂化。

## 多媒体可访问性

网站的内容不限于文本。它通常还包括多媒体内容，如图像、音频和视频。在很多情况下，多媒体内容比文本内容更容易理解。虽然这对许多用户来说是事实，但它给残障用户带来了挑战。

视力障碍者无法看到图像，听力障碍者或听力不佳者无法轻松理解音频内容。因此，作为开发人员，我们的工作是让这种内容对每个人都可访问。让我们了解如何做到这一点：

### 图像

由于视力障碍者无法查看图像，他们依赖屏幕阅读器描述图像。仅编写带有 `src` 属性的 `img` 标签无济于事。

```
<img src="temple.jpg" />
```

默认情况下，屏幕阅读器会朗读图像的文件路径或 URL。文件名可能提供一些关于图像的想法，但仍不足以描述它。

因此，最好为 `img` 添加一个 `alt` 属性。`alt` 属性为图像提供替代文本，其目的是描述图像。

```
<img
  src="temple.jpg"
  alt="Madurai 市的 Meenakshi 神庙，南印度的城市，奉于女神 Meenakshi，Parvati 的化身"
/>
```

在这里，屏幕阅读器不会读出文件路径，而是读出替代文本——即 `alt` 属性的值。替代文本应提供图像描述，以帮助用户了解它传达的内容。因此，用户可以知道图像展示的是哪个神庙，而不仅仅是“一座神庙”。

您还可以使用 `title` 属性为图像添加额外的上下文。

```
<img
  src="temple.jpg"
  alt="Madurai 市的 Meenakshi 神庙，南印度的城市，奉于女神 Meenakshi，Parvati 的化身"
  title="Meenakshi 神庙"
/>
```

聚焦于图像时，屏幕阅读器会朗读 `alt` 文本和标题。

让我们看另一个使用 `alt` 属性替代方案的示例：

```
<img src="temple.jpg" aria-labelledby="temple-label" />
<p id="temple-label">
  Madurai 市的 Meenakshi 神庙，南印度的城市，奉于女神 Meenakshi，Parvati 的化身
</p>
```

在此，我们没有使用 `alt` 属性，而是使用 `aria-labelledby` 属性将段落元素链接到图像。`p` 内的文本充当图像的替代文本。如果您需要为不同的图像使用相同的替代文本，这很有用。

有时，我们将图像用作标题和导航菜单的图标，仅用于装饰。通常，这些图像与理解页面内容无关。在这种情况下，您可以添加一个空的 `alt` 属性。

```
<h3>
  <img src="page-icon.png" alt="" />
  Meenakshi 神庙的历史
</h3>
```

如果您省略 `alt` 属性，屏幕阅读器会读出整个图像 URL。为避免这种情况，使用空的 `alt` 属性，这样屏幕阅读器只会宣布它是一个图像然后继续，从而防止对用户造成不必要的干扰。
```

### 音频和视频

当使用 [<audio>][76] 和 [<video>][77] 元素时，请记得包含多个源文件，即以不同的格式提供音频和视频。对于不支持您提供的格式的浏览器，添加一个备用下载链接，以便它们可以访问资源。

```
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <p>
    您的浏览器不支持 HTML 视频。这里是
    <a href="video.mp3">视频链接</a>。
  </p>
</audio>
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <p>
    您的浏览器不支持 HTML5 视频。这里是
    <a href="video.mp4">视频链接</a>。
  </p>
</video>
```

接下来，让我们了解使用原生 HTML 音视频控件的不足之处。

-   它们无法使用 CSS 样式化，因此可能与您的网站主题不符。
    
-   播放/暂停按钮不支持键盘访问。
    
-   它们不具备快进或倒带功能。
    

为了克服这些限制，我们将在接下来的步骤中创建自定义的视频播放器。首先，让我们为视频内容创建一个容器：

```
<div class="controls">
  <button class="play-pause">播放</button>
  <button class="stop">重置视频</button>
</div>
```

这些将作为播放/暂停和重置按钮。然后，让我们从 `<video>` 中移除 `controls` 属性，以用我们的自定义控件替代它们。

```
const videoPlayer = document.querySelector("video");
videoPlayer.removeAttribute("controls");
```

为什么要在运行时移除它？假设 JavaScript 因为某些问题未能加载。在这种情况下，用户仍然可以使用原生控件。接下来，让我们为按钮添加一些功能：

```
const playPauseBtn = document.querySelector(".play-pause");
const resetBtn = document.querySelector(".reset");

playPauseBtn.onclick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playPauseBtn.textContent = "暂停";
  } else {
    videoPlayer.pause();
    playPauseBtn.textContent = "播放";
  }
};

resetBtn.onclick = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
  playPauseBtn.textContent = "播放";
};
``` 

-   视频播放器对象是类型为 [`HTMLMediaElement`][78] 的，它包含几个可以用来控制视频的方法。
    
-   对于播放/暂停按钮，我们增加了切换功能，使用 `play()` 和 `pause()` 方法。
    
-   要重置视频，我们暂停视频并将当前时间设为 0。
    

现在，我们的自定义视频播放器支持键盘访问并能够使用 CSS 样式化。您还可以添加额外功能，比如快进/倒带、计时器和进度条。自定义音频播放器的步骤类似。

查看 [MDN 文档][79] 了解有关此功能的更多细节。

#### 音频文稿

听觉障碍者无法轻松访问音频内容。因此，为了让其更具可访问性，您需要在任何音频或视频内容下添加文本记录。

如果您经营一家企业，您可以支付专业人士做文本记录。查看 [文档][80] 以了解选项。要在 UI 上显示文本记录，可以使用显示/隐藏面板。参考文档，请参见 [音频文本记录 UI][81]（[源代码][82]）作为示例。

如果音频是某场演讲的录音，您应该附上任何文档或演示幻灯片的链接。此外，还应包含所引用的任何视觉内容的描述。

#### 视频字幕和副标题

首先，让我们了解字幕和副标题之间的区别。它们的实现方式相似，视觉上看起来相同，但目的不同。

字幕表示谁在讲话并描述视频中的其他声音效果。它们主要是为那些听觉障碍人士添加的。副标题则通过将视频中的语言翻译为用户选择的语言来帮助那些不懂视频中语言的人。

让我们看看如何为视频添加副标题。我们用 WebVTT 编写副标题，这种格式包含文本以及指示您希望在每个视频部分中显示哪些文本的时间戳范围。下面是一个副标题文件的示例：

```
WEBVTT

1
00:00:01.230 --> 00:00:02.606
这是第一条字幕。

2
00:00:04.739 --> 00:00:06.074
这是第二条。
```

将此文件保存并命名为 `.vtt` 扩展名。要将此文件链接到您的视频中，请在 [`<track>`][83] 元素中包含它：

```
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track
    src="captions.vtt"
    kind="subtitles"
    srclang="en"
    label="English"
    default
  />
</video>
```

您应该将 `<track>` 元素放在 `<video>` 元素内，并放置在所有源后面。它具有以下属性：

-   `kind` 指明所引用文件的类型。
    
-   `srclang` 指示字幕使用的语言。
    
-   `label` 指示用户在选择语言时显示的文本。
    
-   `src` 是指向字幕文件的路径或 URL，即我们之前创建的 `.vtt` 文件。

对于视力障碍者，您还可以在视频的某些部分包含描述特定视觉效果的文本。屏幕阅读器将读取这些文本。

您还可以为字幕菜单和字幕文本添加自定义样式。查看 [MDN 文档 - 向 HTML 视频添加字幕和说明][84] 了解实现。

## 移动设备的可访问性

到目前为止，我们已经介绍了许多关键的可访问性实践，它们在手机上也应该能够很好地工作。但对于移动用户，您还可以考虑遵循一些额外的注意事项。

首先，我们来讨论一下特定于鼠标的事件。我们已经在 [JavaScript 实践][85] 部分中看到了如何让特定于鼠标的事件更加可访问。像 [mousedown][86] 或 [mouseup][87] 这样的事件通常用于拖放功能。

但这些对触摸屏用户来说并不友好，因此您应该为特定于触摸的事件（如 [touchstart][88] 和 [touchend][89]）添加相同的功能。以下示例是在拖放的情况下：

```
source.ontouchstart = (e) => {
  // 初始化拖动
};

dest.ontouchend = (e) => {
   // 放下
};
```

接下来，您需要确保在设计网页时遵循响应式设计。响应式设计可确保网站在桌面和手机上都看起来不错。我写了一篇关于 [响应式设计][90] 的详细指南，如果您感兴趣，请查看。

其他一些值得了解的移动可访问性实践：

-   不要在您的网站上禁用缩放。无论是完全正常视力的用户还是有视力障碍的用户，都可能需要放大以阅读小屏幕上的网站内容。
    
-   在编写导航菜单时，您通常会将其隐藏并提供一个汉堡图标来打开它，因为在手机上屏幕更短/更小。在这些情况下，汉堡菜单应易于访问。查看文档中的 [良好的汉堡菜单][91] 示例，了解移动视图。
    
-   在创建表单时，尽量减少用户需要键入的内容，因为这可能会让移动用户感到烦恼。如果您的网站主要面向移动用户，这一点尤为重要。查看 [文档][92] 了解示例。
    

如果您想了解更多，请访问 [MDN Docs-移动设备可访问性][93]。

## 使用工具测试可访问性

您可以使用多种工具来测试页面的可访问性。Chrome 开发者工具中的 [Lighthouse][94] 是一个开源工具，可分析网页的性能、可访问性、SEO 等。它会生成有关页面在这些方面表现的报告。

让我们看看它如何帮助分析页面的可访问性：

打开 Chrome 开发者工具并导航到 Lighthouse 标签。点击“Analyse Page Load”并等待几秒钟。它将显示报告，包含网页在可访问性和其他指标上的得分信息。它还会列出您遇到的任何可访问性问题。

以下是一个例子：

```
<h1>Welcome</h1>
<img src="image.jpg" />
<button tabindex="2">Click Here</button>
<div onclick="alert('Clicked!')" class="button">Click Me</div>
<form>
  <input type="text" />
</form>
```

通过 Lighthouse 审核测试时，结果如下：

![具有可访问性问题的 Lighthouse 审核](https://cdn.hashnode.com/res/hashnode/image/upload/v1739631885589/c886f304-aba2-44ac-8d75-88fac2f60c55.png)

如您所见，它在可访问性上得了 74 分，意味着还有提升空间。它还显示了您 HTML 代码中的可访问性问题，就像您看到代码时可能猜到的：

-   图像元素没有 `alt` 属性
    
-   表单输入没有标签
    
-   `tabindex` 值大于 0。
    

让我们纠正这些问题并再次运行测试：

![具有良好可访问性的 Lighthouse 审核](https://cdn.hashnode.com/res/hashnode/image/upload/v1739632090527/2db4798a-53d3-4010-9756-83de8b0f208a.png)

这次，由于我们遵循了所有基本实践，它在可访问性上得到了 100 分。

正如您所看到的，这是一个非常简单的 HTML 页面，而对于大型网站，要获得 100 分要困难得多。但是，您应该力争尽可能高的得分。如果您将可访问性作为开发过程的一部分，这应该不会太具挑战性。

可访问性分数本身并不意味着您的网站完全可访问。您还需要测试以下几个方面：

-   使用屏幕阅读器进行手动测试（Mac 的 Voiceover 或 Windows 的 Narrator）。
    
-   键盘可访问性 – 测试网站的每个部分是否都可以通过键盘访问
    
-   以不同的色彩对比度模拟您的网站，以适应不同的视觉障碍。
    

为了模拟，Chrome 开发者工具提供了一个 Rendering 工具来模拟您网站在不同偏好下的显示效果，如浅色/深色模式、高/低对比度、减小动效及各种视觉障碍。

要访问它，请打开开发者工具，按下 ⌘+shift+P（Windows 上为 Ctrl+Shift+P）并键入“Rendering”。它将打开以下窗口：

![Rendering 工具](https://cdn.hashnode.com/res/hashnode/image/upload/v1741959781294/36f6c233-9326-4acb-a551-e95a56a87d8a.png)

```
@media (prefers-reduced-motion) {
    * {
        animation: none;
    }
}
```

因此，当你选择 `prefers-reduced-motion` 时，可以测试所有的动画是否已被禁用，以及网站的功能如何。

除了开发者工具，还有一个 NPM 插件，名为 [eslint-plugin-jsx-a11y][95]，用于评估 React JSX 代码的可访问性问题。

你可以在 [GitHub][96] 上找到所有代码片段。

## 结论

可访问性不仅仅是你代码之上的一个功能，它应该是开发过程的一部分。当你让网站对所有人可访问时，不仅能够增加用户基础，还能促进包容性。

尽管可访问性的主要受益者是残障人士，但它也通过让网站整体更容易使用而惠及其他用户。文章中提到的许多实践，比如使用语义元素，添加正确的属性等，都是非常容易遵循的，并且在确保可访问性方面有很长的路要走。

如果你是初学者，已经在学习有关可访问性的内容方面做得很好了。开始在你的项目中加入简单的可访问性实践。随着时间的推移，包含这些实践将成为一种自然的习惯。

我希望这本手册成为你与可访问性相关内容的首选资源。如果你觉得我遗漏了一些内容，或者需要解释任何概念，可以在 Twitter 上联系我。想了解更多关于 web 开发的内容，请查看我的个人资料。

### 参考资料

-   [MDN 文档-可访问性][97]
    
-   [Web Dev Simplified- 可访问性指南][98]
    

[1]: #heading-what-is-accessibility
[2]: #heading-basic-accessibility-practices
[3]: #heading-semantic-and-non-semantic-html
[4]: #heading-text-content
[5]: #heading-page-layouts
[6]: #heading-interactive-elements
[7]: #heading-keyboard-accessibility
[8]: #heading-form-labels
[9]: #heading-links
[10]: #heading-table-accessibility
[11]: #heading-additional-css-and-javascript-practices
[12]: #heading-styling-form-elements
[13]: #heading-color-contrast
[14]: #heading-javascript-practices
[15]: #heading-advanced-accessibility-practices-wai-aria
[16]: #heading-the-role-attribute
[17]: #heading-aria--attribute
[18]: #heading-dynamic-content-attributes
[19]: #heading-form-validation-and-errors
[20]: #heading-using-non-semantic-elements-as-buttons
[21]: #heading-multimedia-accessibility
[22]: #heading-mobile-accessibility
[23]: https://axesslab.com/what-is-a-screen-reader/
[24]: https://seo.co/semantic-html/
[25]: https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantic_elements
[26]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
[27]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
[28]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance
[29]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abbreviations
[30]: #heading-color-contrast
[31]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling
[32]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning
[33]: https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html
[34]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms
[35]: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
[36]: #heading-multimedia-accessibility
[37]: https://mdn.github.io/learning-area/accessibility/html/good-form.html
[38]: https://mdn.github.io/learning-area/accessibility/html/bad-form.html
[39]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
[40]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
[41]: #heading-multimedia-accessibility
[42]: https://webaim.org/
[43]: https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
[44]: https://developer.mozilla.org/en-US/docs/Web/CSS/:visited
[45]: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus
[46]: https://developer.mozilla.org/en-US/docs/Web/CSS/:hover
[47]: #heading-color-contrast
[48]: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
[49]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href
[50]: https://mdn.github.io/learning-area/accessibility/html/good-links.html
[51]: https://mdn.github.io/learning-area/accessibility/html/bad-links.html
[52]: https://axesslab.com/hand-tremors/
[53]: https://developer.mozilla.org/en-US/docs/Web/CSS/margin
[54]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility
[55]: https://webaim.org/resources/contrastchecker/
[56]: https://developer.chrome.com/docs/devtools/accessibility/contrast
[57]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
[58]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
[59]: https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event
[60]: https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
[61]: https://mdn.github.io/learning-area/accessibility/css/form-validation.html
[62]: #heading-keyboard-accessibility
[63]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
[64]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
[65]: https://mdn.github.io/learning-area/accessibility/aria/aria-no-live.html
[66]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
[67]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic
[68]: https://mdn.github.io/learning-area/accessibility/aria/aria-live.html
[69]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role
[70]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
[71]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant
[72]: https://mdn.github.io/learning-area/accessibility/css/form-validation.html
[73]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-required
[74]: #heading-interactive-elements
[75]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics#accessibility_of_non-semantic_controls_2
[76]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
[77]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
[78]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
[79]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia#creating_custom_audio_and_video_controls
[80]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Multimedia#audio_transcripts
[81]: https://mdn.github.io/learning-area/accessibility/multimedia/audio-transcript-ui/
[82]: https://github.com/mdn/learning-area/tree/main/accessibility/multimedia/audio-transcript-ui
[83]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
[84]: https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
[85]: #heading-javascript-practices
[86]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
[87]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event
[88]: https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event
[89]: https://developer.mozilla.org/en-US/docs/Web/API/Element/touchend_event
[90]: https://medium.com/gitconnected/read-this-to-make-your-website-responsive-35af4ab7992b
[91]: https://fritz-weisshart.de/meg_men/
[92]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Mobile#user_input
[93]: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/Mobile
[94]: https://developer.chrome.com/docs/lighthouse/overview
[95]: https://www.npmjs.com/package/eslint-plugin-jsx-a11y
[96]: https://github.com/KunalN25/accessibilityguide
[97]: https://developer.mozilla.org/en-US/docs/Web/Accessibility
[98]: https://www.youtube.com/watch?v=2oiBKSjOOFE
```

