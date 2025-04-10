---

title: 关于网络无障碍的一切你需要知道

date: 2025-04-10T13:17:04.948Z

author: Kunal Nalawade

authorURL: https://www.freecodecamp.org/news/author/KunalN25/

originalURL: https://www.freecodecamp.org/news/the-web-accessibility-handbook/

posteditor: ""

proofreader: ""

---

网络是一个获取信息和与人沟通的绝佳平台。它开辟了无数的机会，让生活在很多方面更方便。

<!-- more -->

但并非每个人都以相同的方式体验网络。对于那些在视觉、听觉或行动上有障碍的人来说，网站是难以使用的。这些障碍使导航内容变得困难，在某些情况下，使网络完全无法访问。

本手册将帮助你了解无障碍设计及如何实施。无论你是初学者还是中级开发者，你都将学习到基本的无障碍实践和一些高级技术。这将帮助你让网站更加包容。

让我们开始吧。

## 目录

-   [什么是无障碍设计？][1]
    
-   [基本无障碍实践][2]
    
    -   [语义和非语义HTML][3]
        
    -   [文本内容][4]
        
    -   [页面布局][5]
        
    -   [互动元素][6]
        
    -   [键盘无障碍][7]
        
    -   [表单标签][8]
        
    -   [链接][9]
        
    -   [表格无障碍][10]
        
-   [附加的CSS和JavaScript实践][11]
    
    -   [表单元素的样式][12]
        
    -   [颜色对比][13]
        
    -   [JavaScript实践][14]
        
-   [高级无障碍实践：WAI-ARIA][15]
    
    -   [role属性][16]
        
    -   [aria-\* 属性][17]
        
    -   [动态内容属性][18]
        
    -   [表单验证和错误][19]
        
    -   [使用非语义元素作为按钮][20]
        
-   [多媒体无障碍][21]
    
-   [移动端无障碍][22]
    

## 什么是无障碍设计？

无障碍设计（A11y）是网络开发中一个重要的实践，旨在使网站对所有人都可用（无障碍）。这包括那些因残疾而难以使用网站的人。通过使网站对所有人，包括有残疾的人，无障碍，我们确保他们拥有与我们相同的机会。我们也在帮助使网络整体上更加包容。

我们应该考虑哪些类型的残疾？从广义上讲：

-   视觉障碍：失明、视力模糊和色盲
    
-   听力障碍：低听力或无听力
    
-   行动障碍：身体移动困难
    
-   认知障碍：如诵读困难症和注意力缺陷多动障碍
    

例如，视觉障碍人士通常使用诸如[屏幕阅读器][23]之类的设备来浏览和理解网站的内容。因此，网络无障碍设计的重要部分是设计一个可以被屏幕阅读器轻松访问的网站。

你作为开发者，可以遵循各种实践来使网站无障碍，这些我将在本手册中讨论。

## 基本无障碍实践

无障碍设计不仅仅是你已经开发好的网站上的一个附加功能。它是一种需要在整个开发过程中遵循的实践。每当你在网页上创建内容时，问问自己它是否真的无障碍。

另一个重要的点是，无障碍设计不仅仅是为了有障碍的人。通过让网站更容易使用，它让所有人受益，从而改善整体用户体验。

如何实现良好的无障碍设计？嗯，在编写HTML、CSS和JavaScript代码时，有一些实践你应该遵循。我们将在本节中讨论一些基本实践。

在进入正题之前，让我们先了解什么是语义和非语义HTML标签：

### 语义和非语义HTML

非语义HTML标签不表达特定的含义或用途。根据CSS样式和JavaScript功能，它们可以用作任何东西。非语义标签的例子有：`<div>` 和 `<span>`。这些标签主要用作其他元素的容器。

语义HTML标签通过其名称向浏览器和开发者清楚地描述其用途。它们提高了代码可读性，也有助于[搜索引擎优化 (SEO)][24]。语义标签的例子包括：`<button>`、`<a>`、`<header>`、`<footer>`。

你可以在[这里][25]找到所有语义元素的列表。

#### 使用语义HTML的重要性

无障碍设计的一个重要部分是使用正确的HTML元素来达到其目的。这意味着，例如，当你想呈现一个按钮时，使用`<button>`标签。

但为什么要使用语义元素呢？毕竟，你可以使用CSS使一个`<div>`看起来像一个按钮。不错，但使用语义元素很重要，原因如下：

-   语义元素具有内置的样式和功能，否则你需要通过CSS和JavaScript添加。这使得它们更容易使用。
    
-   它们使代码更易于阅读和维护，因为你可以实际看到正在使用的元素，而不是到处看到一堆div。
    
-   屏幕阅读器可以轻松读取和解释语义元素，帮助视力有障碍的人。
    


随时可以使用屏幕阅读器来测试每个例子。在 Mac 上，使用 ⌘+F5 激活 VoiceOver，Mac 的内置屏幕阅读器。在 Windows 上，可以通过按 Ctrl + Windows Key + Enter 使用名为 Narrator 的内置屏幕阅读器。

### 文本内容

在书写文本内容时，使用正确的元素来表示标题、段落和列表是很重要的。让我们通过以下例子加以理解。

假设你像下面这样书写标题和段落：

```
<span id="heading1">标题 1</span>
<br />
<br />
<span id="heading2">标题 2</span>
<br />
<br />
这是一段
<br />
<br />
这是另一段
```

这种方法存在以下问题：

-   屏幕阅读器无法区分标题和段落，它会一次性读取所有内容，这让依赖屏幕阅读器的人感到困惑。
    
-   个别段落的样式很难设置，因为没有选择器。即使你为每个段落添加一个 `<span>`，也需要额外的 CSS 样式。
    
-   它还包含不必要的换行符，这些可以通过使用适当的元素来避免。
    

以上代码是一个不良语义的例子。相应地，你应该这样做：

```
<h1>标题 1</h1>
<h2>标题 2</h2>
<p>这是一段</p>
<p>这是另一段</p>
```

在这里，我们使用了正确的语义元素表示文本内容，其具有以下好处：

-   屏幕阅读器能够通过在读取文本之前先读标题级别，从而区别标题和段落文本。
    
-   `h1`、`h2` 和 `p` 自带样式，并且每个在新行上渲染。这消除了使用换行符的需要。
    
-   代码看起来更简洁且更易读。
    

#### 列表

要渲染一组列表项目，我们有以下方法。非语义方法仅是将一些 div 分组并应用 CSS 样式。

```
<h2>待办事项列表</h2>
<div id="mylist">
  <div>准备早餐</div>
  <div>洗衣服</div>
  <div>完成博客文章</div>
</div>
```

同样的，这达到了预期的输出效果，但屏幕阅读器难以识别这些内容为一个项目列表。相反，使用语义元素：

```
<h2>待办事项列表</h2>
<ul id="mylist">
  <li>准备早餐</li>
  <li>洗衣服</li>
  <li>完成博客文章</li>
</ul>
```

这有助于屏幕阅读器识别该元素为一个无序列表并读取每个项目。`<ul>` 还带有默认样式和每个列表项目的项目符号。你也可以使用 `<ol/>` 来表示有序列表，屏幕阅读器会读取每个列表项目上的编号。

你可以使用 Mac 的 VoiceOver 测试以上例子，以查看差异。

#### 强调文本

强调文本指的是在内容中给予某些词语或短语突出意义的高亮文本。在添加强调文本时，使用正确的语义元素如 [`<strong>`][26] 和 [`<em>`][27] 很重要。

```
<p>为了达到最佳效果，烹饪时请使用 <em>新鲜配料</em>。</p>

<p>水变为气体的过程称为 <strong>蒸发</strong>。</p>
```

这些元素为文本添加了类似 _粗体_ 和 _斜体_ 的内建样式。同时，如果你使用 VoiceOver 测试，你会注意到它在这些元素内的文本上施加了一些强调。这帮助使用屏幕阅读器的人识别强调的文本。

你也可以为强调的文本添加一些颜色。但是，不需要添加太多样式，否则可能引起混淆。访问 [MDN 文档-强调和重要性][28] 以了解更多关于 HTML 中文本强调的信息。

#### 缩略词

接下来，在书写缩略词（或首字母缩写词）时，最好使它们在视觉上有所不同，并包含缩略语的完整解释。你也可以对缩略词进行一些简单的样式设置。了解更多关于缩略词的信息请访问 [MDN 文档-缩略词][29]。

#### 其他最佳实践

除了以上内容之外，还有一些其他的实践也值得遵循：

-   尽可能使用清晰的语言。例如，展开缩略词：不要写 Jan，应写 January。
    
-   在书写范围时，尽量避免使用破折号，写作 1 to 5 而不是 1-5。
    
-   避免使用屏幕阅读器在阅读时可能让用户困惑的字符，例如 `~` 或 `*`。
    
-   避免过多的感叹号和表情符号。
    

此外，在为文本内容编写 CSS 时，请记住以下实践：

-   使用字体大小、行高和字母间距等样式时，确保文本易于阅读。
    
-   如果使用 CSS 样式，标题应与其他文本区分开来。通常，只需使用正确的标题标签即可实现。
    
-   文本颜色与背景的对比应达到 4.5:1。有关详细信息，请参见 [颜色对比][30] 部分。
    

如果需要关于样式化文本的更多技巧，请访问 [MDN 文档 - CSS 文本样式][31]。

### 页面布局

页面布局涉及内容在屏幕上的布局方式。在开始设计网页时，第一个想到的就是内容如何应放置在屏幕上。

但表格使得布局变得极其复杂和难以维护。表格布局对于屏幕阅读器来说也很难读取，从而影响无障碍性。

如今，有更好的方式来编写页面布局。如果您包括一个标题、导航栏和页脚以及主要内容，您可以使用以下语义元素：

```
<header>
  <h1>头部</h1>
  <nav>
    <!-- 主要导航在此处 -->
  </nav>
</header>

<!-- 这是我们页面的主要内容 -->
<main>
  <!-- 主要内容在此 -->
</main>

<footer>
  <!-- 页脚内容在此 -->
</footer>
```

让我们了解一下上面使用的每个标签（如果您已经了解，可以跳过）：

-   `<header>`：表示网页的介绍部分，通常包含标题、徽标或导航链接。
    
-   `<nav>`：定义一个导航部分，其中包含指向网站或页面其他部分的链接，提供对重要部分的便捷访问。
    
-   `<main>`：表示主要内容区域，专注于页面或网站的主要目的，排除像头部、页脚或侧边栏这样的常见元素（可能包括侧边栏，具体取决于网站）。
    
-   `<footer>`：表示网页的底部部分，通常包含元数据、版权信息或链接到相关资源。
    

这些元素称为[分区元素][32]。使用这些元素的优点如下：

-   布局清晰，每个元素明确描述其用途，使代码可读且易于维护。
    
-   使用正确的语义元素使屏幕阅读器识别布局的每个部分，从而帮助视觉障碍用户理解网站的结构。
    

当然，您可以用 div 来编写上述布局，但分区元素提供了良好的语义，有助于用户理解他们正在导航的内容类型。

### 交互式元素

这些由用户与网页互动的元素组成。这些元素包括按钮、表单字段、链接等。

#### 键盘无障碍性

网页上的每个交互元素都应该可以通过键盘导航。这使用户在浏览您的网站时具有灵活性。键盘无障碍性对那些可能在使用鼠标时挣扎的行动障碍人士非常有帮助。

例如，访问[这个][33]页面，尝试按下键盘上的 Tab 键来导航到每个交互元素。您也可以按下 Enter/空格键来点击按钮或链接。这应该能让您了解一个键盘无障碍网站的样子。

大多数情况下，使用正确的语义元素应能确保键盘无障碍性，因为它们带有内置的功能。请查看以下示例：

```
<p>
  访问我的博客 
  <a href="https://www.freecodecamp.org/news/author/KunalN25/">freecodecamp.org</a>
</p>

<button>点击我</button>
<button>再点击我</button>

<div>
  <input type="text" placeholder="请输入您的姓名" />
</div>
```

在这里，我们为超链接、按钮和输入元素使用了正确的语义元素。所有这些元素都可以通过 Tab 键访问，并通过 Enter/空格键进行交互。在这个[列表][34]中查看其他与表单相关的元素。

有些人使用 `div` 或 `span`，并通过 CSS 样式将它们看起来像锚标签或按钮。但这对无障碍性不利，原因有二：

-   `div` 和 `span` 默认情况下不可通过 tab 键访问。因此，即使您让 `div` 看起来像按钮，用户也无法通过键盘导航到它。
    
-   屏幕阅读器无法将它们识别为按钮，而在语义元素的情况下，它们会将这些元素读出为按钮或链接。
    

但是，如果您绝对需要使用 `div` 来创建可点击元素，请包括以下属性：

```
<div id="customButton" role="button" tabindex="0">点击我</div>
```

在这里，我们添加了两个属性，`tabindex` 和 `role`。我们将在后面的部分了解 `role` 属性。

[`tabindex`][35] 属性接受一个整数，该整数指定可通过 tab 键访问的元素的 tab 顺序，而不是默认的从上到下的 tab 顺序。正整数意味着元素会按属性值指定的顺序聚焦。

但不建议使用 tabindex 改变默认的 tab 顺序，因为这可能会导致键盘导航者的混淆并影响无障碍性。而且坦白说，这不是必要的。

您应该只使用以下两个值：

-   `tabindex="0"` 使元素可通过 tab 键访问，这意味着它可以通过键盘在自然 tab 顺序中访问。
    
-   `tabindex="-1"` 意味着该元素不能通过键盘导航访问。
    

这些属性使得 `div` 像按钮一样，但您仍需要添加一小段 JS 代码以通过 Enter/Return 使按钮可点击：

```
document.getElementById("customButton").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.activeElement.click();
  }
});
```

在这里，我们为元素添加了一个事件监听器，该监听器监听 keydown 事件。如果按下的键是 Enter，则调用元素的 `onclick` 方法。

键盘可访问性对音频和视频控件也很重要。我们将在[多媒体可访问性][36]部分中讨论这一点。

### 表单标签

表单标签是描述您需要在表单字段中输入什么的文本。为表单字段添加标签是必要的实践，因为它让用户知道如何填写表单。但使用正确的语义元素也很重要。

您可以像下面这样做，仍然可以实现所需的输出：

```
Enter name: <input type="text" id="name" name="name" />
```

这对屏幕阅读器用户不友好，因为它不会读出输入字段的用途。即使它读出“Enter name”，用户也可能不会将其与输入字段关联起来。相反，使用`<label>`元素作为表单标签。

```
<div>
      <label for="name">Enter name:</label>
      <input type="text" id="nameField" name="name" />
    </div>
```

`for`属性将标签与输入字段关联。这样，当屏幕阅读器的焦点在输入字段上时，它会读出标签，接着是“编辑字段”，以告知用户他们应该在输入字段中输入姓名。

查看这些示例中的[带标签的表单][37]和[无标签的表单][38]以获得更清晰的理解。使用 Mac 的 Voiceover (⌘+F5) 或 Windows 的讲述人 (Ctrl+Windows+Enter) 来查看它如何读取表单元素。

使用`<label>`提供了更多优势：

-   通过使用`for`属性将`<label>`与输入字段关联（可点击的关联），点击标签会聚焦到输入字段。
    
-   与输入字段的可点击关联帮助用户选择小的输入项，如[复选框][39]或[单选按钮][40]。
    
-   它遵循语义 HTML 并指定该文本用作表单标签。
    

最后，请记住，标签文本应该清楚地描述用户应该在字段中输入什么。例如，“Enter name”或“Enter email”。

这同样适用于按钮。确保按钮文本足够描述，以告知用户他们在点击什么。模糊的文本如“Click me!”或“Click here!”没有帮助。描述性文本的例子有“提交表单”或“下载报告”，这给用户提供了按钮操作的明确想法。

除此之外，链接也属于交互元素。但由于关于链接的例子很多，我会在下一节中专门讨论它们。

### 链接

链接是网页的重要组成部分，因为它们允许用户导航网站。链接有不同的用途：跳转到同一网站的不同页面，跳转到外部网站，或下载某些东西。在本节中，您将了解一些关于链接的可访问性实践。

#### 链接到外部网站

当您添加一个允许用户打开外部网站的链接时，包括`target=_blank`属性会在新标签页中打开链接。

```
<a href="https://www.wikipedia.org/" target="_blank"> Wikipedia </a>
```

这对用户有帮助，因为他们不需要离开当前网站，从而避免了返回网站导航的麻烦。

此外，如果您的链接在新标签页中打开，最好标明这一点，以便屏幕阅读器可以读出并帮助视力受损的用户。

```
<a href="https://www.wikipedia.org/" target="_blank" >
Wikipedia (opens in new tab)
</a>
```

同样，如果您的链接打开的是非 HTML 文件，如 pdf 或 docx，您也应该注明：

```
<a target="_blank" href="jan-salary-slip.pdf">
Salary-January (PDF)
</a>
```

或者，您可以使用图标来指示链接在新标签页中打开。

```
<a href="https://www.wikipedia.org/" target="_blank">
  Wikipedia
  <img src="new-tab-icon.png" alt="Opens in new tab" style="width:16px; height:16px; margin-left:5px;">
</a>
```

使用图标时，请确保包含带有图像描述的 alt 属性。我们将在[多媒体可访问性][41]部分中理解其目的。

#### 跳过链接

跳过链接是放置在页面顶部的链接元素，直接链接到页面的主要内容。这允许用户跳过页眉和所有导航菜单，直接跳转到页面的主要内容。这在页面顶部有很多重复内容（如菜单或横幅）的网站上特别有用。

跳过链接对视力受损且可能使用屏幕阅读器的人特别有帮助。这些链接提供了一种绕过重复导航菜单并直接访问主要内容的方法。这也帮助键盘导航用户，从而节省时间并增强用户体验。

要添加跳过链接，在 body 标签的最上方、紧接着添加一个锚标签，并链接到主要内容。

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
          <!-- other nav links -->
        </ul>
      </nav>
    </header>
    <main id="main">
      <!-- Main Content -->
    </main>
</body>
```

#### 链接样式

默认情况下，通过锚标签创建的链接在视觉上与非链接文本不同。这是因为锚标签内置了样式，如颜色、[文本装饰][43]、焦点环（当你用键盘 Tab 键切换到链接时显示）和悬停效果。

链接应与其他文本看起来不同，以便于区分。如上所述，浏览器已为你处理了这些，因此你不需要做太多。但如果你想为链接添加自定义样式以更符合你的主题，则需遵循一些最佳实践：

- 链接在默认、[已访问][44]、[焦点][45]和[悬停][46]状态下应具有不同的颜色。

- 链接文本颜色应与非链接文本不同，并具有不同的样式。

- 链接文本颜色与其他文本之间应具有 3:1 的对比度，与背景颜色之间应具有 4.5:1 的对比度。参见[颜色对比][47]部分以获取更多信息。

下面是链接自定义样式的示例（来自文档）：

```markdown
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

通过使用[伪类][48]，当链接被悬停、已访问、通过键盘聚焦或处于活动状态（正在点击链接）时，添加了不同的样式。

你可以尝试不同的颜色和样式，但不要移除 `cursor: pointer` 或 `outline` 属性。两者对使用键盘导航的人都很重要。

请记住，链接已经为所有链接状态内置了样式。只有当你希望与网站的主题一致时，才需添加你自己的样式。

#### 避免使用 onclick 事件处理程序

链接用于导航到同一网站上的其他网页或外部网站。在 [href][49] 属性中指定链接已足够实现此功能，无需添加 JavaScript 代码。

但是，有些人会向锚元素添加 `onclick` 属性，使其像按钮一样，并设置 `href="#"` 或 `href="javascript:void(0)"` 来避免页面刷新。这会导致意想不到的行为，可能导致以下问题：

- 复制或拖动此链接会在 URL 中添加不必要的 `#` 或 `void(0)`，这不合理。

- 点击链接会立即滚动页面到顶部，可能导致用户失去自己所在的位置。

- 如果 JavaScript 仍在下载中，点击链接将无效，网页变得无响应。

从语义和可访问性上讲，这也是不好的，因为使用屏幕阅读器的人可能会感到困惑。如果你想在点击元素时添加 JavaScript 功能，只需使用 `<button>`。只有在导航到适当的 URL 时才使用链接。

#### 有意义的链接文本

与按钮类似，在编写链接文本时，请保持其有意义和具描述性，避免使用“点击这里”或“点击此处”。

```markdown
<p>
  有关可访问性的更多信息，
  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    点击这里
  </a>
</p>
```

不要使用上述方式，而应这样做：

```markdown
<p>
  有关可访问性的更多信息，请访问
  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
    MDN 文档 - 可访问性
  </a>
</p>
```

查看文档中的[好的链接][50]和[坏的链接][51]示例。你也可以使用 VoiceOver (⌘+F5) 进行测试。

#### 链接间距

如果你的网页有很多互动元素，比如链接和按钮，请确保它们的间距足够，以防止误点击。这有助于有[运动控制问题][52]的人避免点击错误的链接。

使用 [`margin`][53] 属性就应该足以确保间距。

### 表格可访问性

在页面布局部分，我们看到使用表格创建页面布局是一种过时的做法。然而，如果希望以表格形式显示大量数据，仍然可以使用表格。表格中的可访问性有助于屏幕阅读器解释它们，帮助视觉障碍用户。

查看 [MDN 文档 - 表格可访问性][54] 以了解最佳实践。

## 额外的 CSS 和 JS 实践

大多数可访问性目标应仅通过 HTML 实现。但在编写 CSS 和 JavaScript 时需注意某些事项，以确保不破坏可访问性。

### 样式化表单元素

在样式化表单元素时，请记住以下几点：

- 不要去除表单元素的默认聚焦轮廓、悬停和禁用状态样式。你可以根据站点设计进行修改，但仍应保持可见。

- 确保标签和占位符文本在视觉上清晰。遵循颜色对比实践（下一节）。

- 对于按钮和输入等可点击区域，确保它们足够大，以便用户可以舒适地点击。

- 成功和错误消息应在视觉上区别于标签和其他文本内容。

### 颜色对比

选择网站颜色时，文本和背景颜色应具有良好的颜色对比度。良好的颜色对比确保所有用户都能轻松阅读文本（对色盲人士特别有帮助）。

```
![推荐颜色对比度比率](https://cdn.hashnode.com/res/hashnode/image/upload/v1736175276741/40ee7fe4-110c-4dd1-95f3-4cb7620de032.png)

让我们了解颜色对比度评级：

-   AA 评级指的是你的颜色对比度应达到的最低比率，以确保网站内容可读。如上表所示，正文文本需要 4.5:1 的最低比率，大规模文本需要 3:1 的比率，活动用户界面组件和图形对象需要 3:1 的比率。
    
-   AAA 评级是确保网站高对比度的理想无障碍标准。这要求正文文本的比率为 7:1，大规模文本的比率为 4.5:1，UI 组件/图形对象未定义。
    

选择与设计良好契合的对比度比率，但尽量保持至少 AA 评级。要检查两种颜色之间的颜色对比度比率，你可以使用以下工具：

-   [颜色对比检查工具][55]
    
-   [Chrome 开发者工具][56] - 识别网站上不符合 AA 和 AAA 评级的文本
    

### JavaScript 实践

#### 鼠标特定事件

当有功能由[鼠标悬停][57]和[鼠标离开][58]等事件触发时，依赖键盘导航的人无法访问这些功能。因此，为了使功能可通过键盘访问，需要将相同的事件处理程序添加到[焦点][59]和[失焦][60]等事件中。

#### 客户端表单验证

当通过表单提交数据时，需要验证数据以检查所输入的数据是否有效。通常，当数据发送到服务器时，服务器会验证数据并告知 UI 验证是否已失败。

为了使网站更友好，添加客户端表单验证有助于用户即时获得反馈，以便在输入错误数据时立刻知晓，因为服务器端机制可能会花费时间。这是改善用户体验的一小步。

查看[表单验证示例][61]以了解更多信息。

除了上述内容，你需要记住不要滥用 JavaScript。JavaScript 可以用于生成任何形式的 HTML 并动态应用 CSS 样式。如果你的网站有动态内容，它非常有用。

但如果通过 JavaScript 生成了过多的 HTML，屏幕阅读器将很难跟踪动态变化。这会使视力障碍用户难以阅读网站。因此，当简单的 HTML 就足够时，不要过度使用 JavaScript。

动态内容更新的可访问性将在下一节中讨论。

## 高级无障碍实践：WAI-ARIA

随着应用程序变得越来越大且复杂，开发人员开始需要一组新的无障碍功能。仅仅依靠语义元素是不够的，特别是对于日期选择器和自定义小部件等复杂元素。

仅仅依靠语义 HTML 对于动态更新网页内容是没有帮助的。如今，所有使用 JavaScript 构建的网站都有内容不是在最初加载，而是基于用户交互动态更新。

WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）被引入，以在需要的地方添加更多的无障碍功能。它定义了一组 HTML 属性，可以用来为网站提供额外的语义，并提高无障碍性。

在接下来的部分中，你将了解引入了哪些属性以及如何使用它们来增强无障碍性。

### `role` 属性

`role` 属性通过定义在网页中的“角色”来帮助为非语义元素添加语义信息。借助角色，屏幕阅读器可以准确地读取非语义元素，并帮助识别它们。

W3C 定义了多个可以使用的角色，取决于其用途。但请记住，仅在必要时使用 `role`。在大多数情况下，最好只使用合适的语义元素，例如 `<button>`、`<nav>`、`<header>` 等。

但是，当语义元素无法满足你的需求时，角色可以提供帮助。那么，让我们通过一些例子来了解如何使用角色：

如果你想用自定义的 `div` 创建一个按钮，添加 `role` 属性可以指定该元素用作按钮。

```
<div role="button" tabindex="0">点击我</div>
```

当你使用 Mac 的 VoiceOver (⌘+F5) 进行测试时，它将元素读作按钮。如前所述，始终包括 `tabindex` 属性。

但如果你想使用 `div` 而不是按钮，仍然需要按照[键盘无障碍性][62]部分所述添加 JavaScript 功能。

另一个例子是如果你正在编写自定义链接。你可以使用以下角色，使屏幕阅读器将其解释为链接：

```
<div role="link">访问我们的网站</div>
```

除了交互元素之外，`role` 属性也可用于将元素定义为导航菜单、侧边栏、横幅等。如果你用于这些目的的是非语义元素，始终包括一个角色，例如：
```

在这种情况下，屏幕阅读器会将其宣布为导航区域。

此外，如果您有一个元素作为用户的提醒，包含以下角色会使屏幕阅读器在它显示在屏幕上时立即宣布，即使它没有焦点：

```
<div role="alert">
  请回应此提醒
</div>
```

您可以在 [MDN 文档：WAI-ARIA 角色][63] 中找到可用角色的完整列表。

### aria-\* 属性

除了 `role`，ARIA（可访问富互联网应用）定义了额外的属性以增强 Web 应用程序的可访问性。这些属性为屏幕阅读器提供了关于元素的更多信息，帮助残障人士更好地理解它们。

如果本地语义元素或仅 `role` 属性不够，aria-\* 属性可以提供额外的上下文。您可以在 [MDN Docs-ARIA][64] 中找到这些属性的完整列表。

在接下来的部分中，我们将看到角色和 aria-\* 属性如何改善可访问性。我们不会在此涵盖所有属性，但会专注于最常用的属性。

### 动态内容更新

当网页首次加载时，其内容会被屏幕阅读器读出。但屏幕阅读器无法捕获动态内容，也就是那些被添加或删除的内容。

例如，当网页显示实时体育更新时，几乎每分钟都会更新一次。屏幕阅读器只会读出页面首次渲染时显示的内容，但不会显示动态更新。

虽然这对许多用户来说不是问题，但对于视力障碍者来说，屏幕阅读器可能无法读取页面上的更改。大多数现代网站本质上是动态的，因此考虑动态内容更新的可访问性很重要。

查看 MDN 文档中的 [aria-no-live][65] 示例。它每 10 秒加载一个新引用，您可以清楚地看到作为视力正常的用户。但屏幕阅读器只读取初始页面内容，不会宣布更新。这对可访问性不利。

为了解决这个问题，WAI-ARIA 提供了 [`aria-live`][66] 属性，使屏幕阅读器读出已更新的内容。您可以将此属性添加到包含动态内容的元素中。

它有以下三个值：

- `aria-live="off"`：默认值，表示内容不被读出
- `aria-live="polite"`：仅在用户空闲时宣布更新
- `aria-live="assertive"`：内容一更新便立即读出

根据更新的重要性，您可以决定使用哪个值。

```
<div aria-live="polite">
    <!-- 动态内容在此 -->
</div>
```

在这种情况下，屏幕阅读器会等待用户完成当前任务后再宣布更新。

您可以在此添加更多详细信息。使用上述属性时，仅读出更新的文本。但屏幕阅读器用户可能会对页面中哪个部分正在被读出感到困惑。因此，如果整个元素被读出会很有帮助。

```
<div aria-live="assertive" aria-atomic="true">
    <!-- 动态内容在此 -->
</div>
```

[`aria-atomic`][67] 属性告诉屏幕阅读器将整个元素作为一个原子单位读出。这避免了视障用户的混淆。查看 Mac 的 VoiceOver (⌘+F5) 中的 [aria-live][68] 示例。当内容更新时，它会读出整个元素。

### 表单验证和错误

假设您已通过 JavaScript 添加了一些表单验证。当验证失败时，屏幕上会出现错误消息。例如，如果您遗漏了一个字段，则会显示必填消息。

错误处理的实现涉及创建一个包含错误消息或错误列表的元素，该元素会根据 JavaScript 代码在某些条件下呈现。正如我们在上一节中讨论的，屏幕阅读器不会读出新的内容更新。

因此，我们应该确保屏幕阅读器在错误消息显示时立即读出，以便让视障用户知道已经抛出错误。为此我们可以使用以下属性：

```
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

[`alert`][69] 角色有两个作用。首先，它在语义上将此元素标识为一条重要信息。其次，此角色将元素转变为一个 [live][70] 区域，这意味着屏幕阅读器在有任何更改时会立即得到通知。

[`aria-relevant`][71] 属性描述了在 live 区域中需要宣布的更改。该属性接受以下值的空格分隔列表：

- `additions`：宣布添加到 live 区域的新内容
- `removals`：读出从 live 区域删除的内容
- `text`：宣布对现有内容的任何修改

它还接受一个值 `all`，这是 `additions removals text` 的简写，意味着读出所有三种类型的内容。

您可以查看 MDN 文档中的 [Form Validation Example][72]。

```
<p>带星号（*）的字段为必填项。</p>
```

这对于普通用户是有帮助的，但视障用户可能不清楚哪些字段是必填的。为了方便他们，我们可以使用 [`aria-required`][73] 属性。

```
<input type="text" name="name" id="name" aria-required="true" />
```

通过该属性，屏幕阅读器在阅读时会将此字段标记为“必填”。

在创建输入字段时，包含标签是很重要的，因为某些屏幕阅读器不会读出占位符文本。如果您不想包含标签字段，可以使用以下替代方案：

您可以使用 `aria-label` 属性为没有关联标签的输入字段添加标签。

```
<input type="email" name="email" aria-label="输入邮箱" />
```

该属性提供了一些文本，由屏幕阅读器读出来以描述输入字段。

您还可以进一步使用 `aria-labelledby` 属性，它使用另一个元素作为输入字段的标签。例如：

```
<div>
  <span id="emailLabel">输入您的邮箱</span>
  <input type="email" name="email" aria-labelledby="emailLabel" />
</div>
```

屏幕阅读器会读出 `<span>` 元素中的文本来描述输入元素。这类似于 `<label>` 与 `for` 属性的使用。您也可以用这个属性来引用其他没有标签字段的交互元素如 `<button>` 或 `<a>`。

请注意，`aria-labelledby` 属性仅为元素定义了一个可访问的名称——它不提供其他功能，如点击标签聚焦到输入元素。最好使用带 `for` 属性的 `<label>`。

我们已在[交互元素][74]部分讨论过表单标签。

您现在已经看到了 WAI-ARIA 提供的一些不同属性以及它们如何增强可访问性。您可以访问 [MDN Docs: WAI-ARIA][75] 查看我可能遗漏的其他细节。

在我们继续之前，请记住一件事：_仅在必要时使用 WAI-ARIA_。通常，语义元素能够实现大多数可访问性目标。不要过度使用 WAI-ARIA，因为它们可能会使您的代码复杂化。

## 多媒体可访问性

网站内容不仅限于文本。它通常还包括图像、音频和视频等多媒体内容。在许多情况下，多媒体内容比文本内容更容易理解。虽然对许多用户来说是这样，但这对有残疾的用户来说是一个挑战。

视力障碍者看不见图像，聋哑人士或听力障碍者不容易理解音频内容。因此，作为开发人员，我们的任务是使这类内容对所有人可访问。让我们来了解如何实现这一点：

### 图像

由于视力障碍者无法看见图像，他们依赖屏幕阅读器来描述图像。仅仅写一个带有 `src` 属性的 `img` 标签并没有帮助。

```
<img src="temple.jpg" />
```

默认情况下，屏幕阅读器会读出图像的文件路径或 URL。文件名可能对图像有一些提示，但仍然无法描述它。

因此，添加一个 `alt` 属性到 `img` 是有帮助的。`alt` 属性为图像提供了替代文本，其目的是描述图像。

```
<img
  src="temple.jpg"
  alt="Madurai 的 Meenakshi 神庙是一座奉献给女神 Meenakshi（即 Parvati 的化身）的神庙"
/>
```

在这里，屏幕阅读器不会读出文件路径，而是读出替代文本——即 `alt` 属性的值。替代文本应提供图像的描述，以帮助用户理解图像所传达的内容。所以，比起仅仅说“寺庙”，用户能知道图像中描绘的是哪个寺庙。

您还可以使用 `title` 属性为图像添加额外的上下文。

```
<img
  src="temple.jpg"
  alt="Madurai 的 Meenakshi 神庙是一座奉献给女神 Meenakshi（即 Parvati 的化身）的神庙"
  title="Meenakshi 神庙"
/>
```

聚焦在图像上时，屏幕阅读器会读出 `alt` 文本和标题。

让我们看另一个使用 `alt` 属性的替代方案的例子：

```
<img src="temple.jpg" aria-labelledby="temple-label" />
<p id="temple-label">
  Madurai 的 Meenakshi 神庙是一座奉献给女神 Meenakshi（即 Parvati 的化身）的神庙
</p>
```

在这里，我们没有使用 `alt` 属性，而是使用了 `aria-labelledby` 属性将段落元素链接到图像。`p` 内的文本作为图像的替代文本。如果您需要为不同图像使用相同的文本作为替代文本，这很有用。

有时，我们将图像用作页眉和导航菜单的图标，仅作装饰。这些图像通常与理解页面内容无关。在这些情况下，您添加一个空的 `alt` 属性。

```
<h3>
  <img src="page-icon.png" alt="" />
  Meenakshi 神庙的历史 
</h3>
```

如果您跳过 `alt` 属性，屏幕阅读器会读出整张图片的 URL。为了避免这个问题，使用一个空的 `alt` 属性，这样屏幕阅读器只会宣布这是一个图像然后继续，不会对用户造成不必要的干扰。
```

### 音频和视频

使用 [<audio>][76] 和 [<video>][77] 元素时，请记得包含多个来源，即以不同格式提供音频和视频。对于不支持所提及格式的浏览器，包含一个回退下载链接，以便他们可以访问资源。

```
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  <source src="audio.ogg" type="audio/ogg" />
  <p>
    您的浏览器不支持 HTML 视频。这里是一个
    <a href="video.mp3">视频链接</a>。
  </p>
</audio>
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <p>
    您的浏览器不支持 HTML5 视频。这里是一个
    <a href="video.mp4">视频链接</a>。
  </p>
</video>
```

接下来，我们来了解使用原生 HTML 控件播放音频和视频的不足之处。

-   无法用 CSS 进行样式化，因此可能无法与您网站的主题一致。
    
-   播放/暂停按钮无法通过键盘访问。
    
-   没有快进或倒带视频的功能。
    

为了克服这些限制，我们将在接下来的步骤中创建自定义视频播放器。首先，让我们为视频内容创建一个容器：

```
<div class="controls">
  <button class="play-pause">播放</button>
  <button class="stop">重置视频</button>
</div>
```

这些按钮将作为播放/暂停和重置按钮使用。然后，让我们从 `<video>` 中删除 `controls` 属性，用我们自定义的控件来替换它们。

```
const videoPlayer = document.querySelector("video");
videoPlayer.removeAttribute("controls");
```

为什么我们要在运行时移除它？假设 JavaScript 由于某些问题没有加载。在这种情况下，用户仍然可以使用原生控件。接下来，让我们为按钮添加一些功能：

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

-   视频播放器对象是类型为 [`HTMLMediaElement`][78]，它包含了多个可用于控制视频的方法。
    
-   对于播放/暂停按钮，我们添加了一个切换功能，使用了 `play()` 和 `pause()` 方法。
    
-   为了重置视频，我们暂停视频并将当前时间设置为0。
    

现在，我们的自定义视频播放器是可通过键盘访问的，并且可以通过 CSS 进行样式化。您还可以添加其他功能，例如快进/倒带、计时器和进度条。对于自定义音频播放器，步骤类似。

查看 [MDN 文档][79] 以获取有关此功能的更多详细信息。

#### 音频文字记录

听觉障碍人士无法轻易访问音频内容。因此，为了使其可访问，您需要在音频或视频内容下添加文字记录。

如果您经营一家公司，可以支付专业人员来做文字记录。查看 [文档][80] 获取选项。要在 UI 上显示文字记录，您可以使用显示/隐藏面板。参考文档，查看 [音频文字记录 UI][81]（[源代码][82]）以获取示例。

如果音频是某个演示的录音，您应该附加任何文档或演示文稿的链接。此外，还应包括对任何被引用视觉内容的描述。

#### 视频隐藏字幕和字幕

首先，让我们了解字幕和隐藏字幕之间的区别。它们以相似的方式实现，在视觉上看起来相同，但目的不同。

字幕标示谁在讲话并描述视频中的其他声音效果。它们主要是为听觉障碍人士添加的。字幕帮助不了解视频中所讲语言的人，通过把语言翻译成他们选择的语言的文本来理解内容。

让我们看看如何为视频添加字幕。我们用 WebVTT 编写字幕，这是一种文本格式，其中包含指示您希望在视频的每个部分中显示的文本的时间戳范围。以下是一个字幕文件的示例：

```
WEBVTT

1
00:00:01.230 --> 00:00:02.606
这是第一个字幕。

2
00:00:04.739 --> 00:00:06.074
这是第二个字幕。
```

保存此文件并以 `.vtt` 扩展名命名。要将此文件链接到您的视频中，包含在 [`<track>`][83] 元素中：

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

您应该在 `<video>` 元素中包含 `<track>` 元素，并放在所有来源之后。它有以下属性：

-   `kind` 表示所引用的文件类型。
    
-   `srclang` 表示字幕所在的语言。
    
-   `label` 表示用户在选择语言时显示的文本。
    
-   `src` 是字幕文件的路径或 URL，即我们之前创建的 `.vtt` 文件。
    

为了帮助视力障碍人士，你还可以在视频的某些部分加入描述特定视觉效果的文本。这些文本将由屏幕阅读器读出。

你也可以为字幕菜单和字幕文本添加自定义样式。请查看 [MDN Docs - 向 HTML 视频添加字幕和副标题][84] 以了解实现。

## 移动可访问性

到目前为止，我们已经介绍了许多关键的可访问性实践，它们在移动设备上也应该能很好地发挥作用。但对于移动用户，你还可以考虑一些额外的措施。

首先，让我们讨论一下特定于鼠标的事件。在 [JavaScript 实践][85] 部分，我们已经介绍了如何使特定于鼠标的事件可访问。像 [mousedown][86] 或 [mouseup][87] 这样的事件通常用于拖放功能。

但这些对于触屏用户来说并不可访问，因此你应该在触摸事件如 [touchstart][88] 和 [touchend][89] 上添加相同的功能。以下示例是在拖放的上下文中：

```
source.ontouchstart = (e) => {
  // 初始化拖动
};

dest.ontouchend = (e) => {
   // 放下
};
```

接下来，你必须确保在设计网页时遵循响应式设计。响应式设计确保网站在桌面和移动设备上都能很好地展示。我已经写了一份关于[响应式设计][90]的详细指南，如果你感兴趣，请查看。

一些其他关于移动可访问性的实用做法：

- 不要在网站上禁用缩放。无论是视力正常的用户还是有视力障碍的人，可能都需要放大以阅读在较小屏幕上的网站内容。
  
- 在编写导航菜单时，通常你会隐藏菜单并提供一个汉堡图标以打开它，因为手机屏幕更短/更小。在这些情况下，汉堡菜单应该易于访问。请查看文档中关于[优秀汉堡菜单][91]的示例，切换到移动视图。
  
- 在创建表单时，尽量减少用户需要输入的内容，因为这可能会对移动用户造成困扰。如果你的网站主要为移动用户设计，这一点尤其重要。查看[文档][92]中的示例。
  
访问 [MDN Docs-Mobile Accessibility][93] 了解更多信息。

## 使用工具测试可访问性

有几种工具可以用来测试页面的可访问性。Chrome 开发者工具中的 [Lighthouse][94] 是一个开源工具，可以分析网页的性能、可访问性、SEO 等。它会生成一个关于页面在这些方面表现的报告。

让我们看看它如何帮助分析页面的可访问性：

打开 Chrome 开发者工具，导航到 Lighthouse 标签。点击“分析页面加载”，等待几秒钟。它会显示一个报告，包含关于你的网页在可访问性及其他指标上的评分信息。报告中会列出网页中可能存在的任何可访问性问题。

举个例子：

```
<h1>欢迎</h1>
<img src="image.jpg" />
<button tabindex="2">点击这里</button>
<div onclick="alert('Clicked!')" class="button">点击我</div>
<form>
  <input type="text" />
</form>
```

使用 Lighthouse 审核测试后，得到以下结果：

![带有可访问性问题的 Lighthouse 审核](https://cdn.hashnode.com/res/hashnode/image/upload/v1739631885589/c886f304-aba2-44ac-8d75-88fac2f60c55.png)

如你所见，其在可访问性上得分 74，说明有改进空间。它还显示了 HTML 代码中的可访问性问题，通过查看代码你可能已经猜到了：

- 图片元素没有 `alt` 属性
  
- 表单输入没有标签
  
- `tabindex` 值大于 0。
  
让我们改正这些问题并再次运行测试：

![良好可访问性的 Lighthouse 审核](https://cdn.hashnode.com/res/hashnode/image/upload/v1739632090527/2db4798a-53d3-4010-9756-83de8b0f208a.png)

这次，由于遵循了所有基本实践，它在可访问性上得分 100。

如你所见，这是一个非常简单的 HTML 页面，对于大型网站来说，要获得满分 100 要困难得多。但你应该争取尽可能高的评分。如果将可访问性作为开发过程的一部分，这不应太具挑战性。

可访问性评分本身并不意味着你的网站完全可访问。你还需要测试以下内容：

- 使用屏幕阅读器进行手动测试（Mac 的 Voiceover 或 Windows 的 Narrator）。
  
- 键盘可访问性 —— 测试网站的每个部分是否可通过键盘访问
  
- 模拟网站在不同视觉障碍下的颜色对比度。
  
为了模拟，Chrome 开发者工具提供了一个渲染工具，可以在不同的偏好下模拟网站，比如浅/深色模式、高/低颜色对比度、减少运动和各种视觉障碍。

要访问它，请打开开发者工具，按下 ⌘+shift+P（Windows 上为 Ctrl+Shift+P），然后输入“Rendering”。它将打开以下窗口：

![渲染工具](https://cdn.hashnode.com/res/hashnode/image/upload/v1741959781294/36f6c233-9326-4acb-a551-e95a56a87d8a.png)

```
@media (prefers-reduced-motion) {
    * {
        animation: none;
    }
}
```

因此，当你选择 `prefers-reduced-motion` 时，你可以测试所有动画是否已被禁用，并了解你的网站功能如何。

除了开发者工具，还有一个名为 [eslint-plugin-jsx-a11y][95] 的 NPM 插件可以评估 React JSX 代码的可访问性问题。

你可以在 [GitHub][96] 找到所有代码片段。

## 结论

可访问性不仅仅是添加到代码上的一个特性——它应该是开发过程的一部分。当你让一个网站对每个人都可访问时，它不仅增加了你的用户群，还促进了包容性。

尽管可访问性的主要受益者是残障人士，但它通过使网站更易于使用，也使其他用户受益。本文中提到的许多实践，如使用语义元素、添加正确的属性等，都很容易遵循，并在确保可访问性方面发挥重要作用。

如果你是初学者，恭喜你已经在学习可访问性方面做得很好。开始在你的项目中加入简单的可访问性实践。随着时间的推移，包含这些实践将成为一种自然的习惯。

我希望这本手册成为你关于可访问性相关内容的首选资源。如果你认为我遗漏了什么或对某些概念需要澄清，请随时在 Twitter 上联系我。有关 Web 开发的更多内容，请查看我的个人资料。

### 参考资料

-   [MDN 文档-可访问性][97]
    
-   [Web Dev Simplified-可访问性指南][98]
    

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



