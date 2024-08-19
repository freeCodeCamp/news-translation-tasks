---
title: SVG 教程 – 如何用 12 个示例编写图像
date: 2024-08-19T12:49:19.047Z
author: Hunor Márton Borbély
authorURL: https://www.freecodecamp.org/news/author/hunor/
originalURL: https://www.freecodecamp.org/news/svg-tutorial-learn-to-code-images/
posteditor: ""
proofreader: ""
---

你是否曾经需要为你的网站找一个图标，但却找不到合适的？或者你想要一个简单的图表，但不想为此学习一个全新的库？

<!-- more -->

好消息是 – 你可以在你最喜欢的代码编辑器中完成所有这些工作，而不需要使用任何第三方工具或库。

自从 HTML5 推出以来，我们可以在 HTML 文档中包含 SVG 图像的代码。我们甚至不需要使用引用单独文件的 image 标签。我们可以将图像代码直接内联在 HTML 里面。这是因为 SVG 的语法与 HTML 非常相似。

这为我们打开了许多酷炫的选项。突然间，我们可以从 JavaScript 访问图像的部分，或从 CSS 设置样式。我们可以用 JavaScript 动画化图像的部分或使其具有交互性。或者我们可以反过来，从代码生成图形。

对于更复杂的图像，您仍然会使用设计工具。但下次当你需要一个简单的图标、图表或动画时，也许你可以自己编写代码。

那么 SVG 在内部看起来是怎样的？在本教程中，我们将通过几个 SVG 的源代码来介绍基础知识。

以下示例来自 [svg-tutorial.com][1]。你也可以 [观看这篇文章的视频版][2]，里面有更多有趣的示例。

## **SVG 标签**

首先，我们必须讨论一下 `svg` 标签本身。这个标签包含图像元素并定义我们的图像框架。它设置图像的内尺寸和外尺寸。

`width` 和 `height` 属性定义了图像在浏览器中占用的空间。通常还有一个 `viewBox` 属性。它为图像内的元素定义了一个坐标系。这两个属性可能会让人混淆，因为它们都定义了大小。

你可以把 SVG 的 `width` 和 `height` 看作外部尺寸，而 `viewBox` 则是内部尺寸。

`width` 和 `height` 定义的尺寸是 HTML 其他部分如何看待图像以及图像在浏览器中显示的大小。而 `viewBox` 定义的尺寸是图像元素在其中定位时对图像的看法。

在下一个示例中，我们有三个内容完全相同的 SVG。它们都有一个中心坐标和半径相同的 `circle` 元素。但是，它们看起来却非常不同。

![Learn-SVG.001-1](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.001-1.jpeg)

相同的圆可以因图像的大小和 `viewBox` 属性而显得不同

在中间的示例中，`width` 和 `height` 定义的尺寸与 `viewbox` 定义的尺寸相匹配。在第一个示例中，我们看到如果 `width` 和 `height` 较小会发生什么。图像只是缩小了，因为图像内定义的所有坐标和大小仍然对齐到 `viewbox`。

在最后一个示例中，我们看到如果 `viewbox` 只关注图像的一部分会发生什么。在这种情况下，物体显得更大了，但图像的实际尺寸仍由 `width` 和 `height` 属性定义。

`viewBox` 还定义了图像项自己的坐标系中心。

前两个数字定义了哪个坐标应该位于图像的左上角。坐标向右和向下增长。在本文中，我们将坐标系置于中心。0,0 坐标将始终在图像的中心。

在我们开始之前需要注意的一点是：虽然我们可以在 HTML 文件中内联 SVG 图像，但这并不意味着我们可以自由地将任何 SVG 标签与任何 HTML 标签组合。

SVG 标签代表图像的框架，每个 SVG 元素必须在一个 SVG 标签内。同样地，HTML 标签不能在 SVG 标签内，所以我们不能在 SVG 中使用 div 或 header 标签。但不要担心，有类似的标签可用。

## **如何用 SVG 制作圣诞装饰品**

让我们从一个简单的圣诞树装饰品开始。在这里我们只使用简单的形状：一个矩形和两个圆。

我们将使用属性来定位和设置这些元素的样式。对于圆，我们定义中心位置；对于矩形，我们定义左上角。这些位置总是相对于由 viewBox 定义的坐标系。

![Learn-SVG.002-1](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.002-1.jpeg)

用圆和矩形构成的圣诞装饰品。在右边你可以看到我们在这个示例中使用的坐标。

```html
<html>
  <svg width="200" height="200" viewBox="-100 -100 200 200”>
    <circle cx="0" cy="20" r="70" fill="#D1495B" />

    <circle
      cx="0"
      cy="-75"
      r="12"
      fill="none"
      stroke="#F79257"
      stroke-width="2"
    />

    <rect x="-17.5" y="-65" width="35" height="20" fill="#F79257" />
  </svg>
</html>
```

记住，我们将坐标系的中心移动到图像的中间，X 轴向右增长，Y 轴向下增长。

为了给图形设置边框，我们使用 `stroke` 和 `stroke-width`。请注意，我们如何使用 circle 元素通过不同的属性同时绘制一个环和一个球。

## **如何用 SVG 制作圣诞树**

让我们继续做一个圣诞树。我们不能总是使用基本形状来组合我们的图像。绘制自由形状最简单的方法是使用多边形。在这里我们设置一个点列表，这些点用直线连接。

![Learn-SVG.003](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.003.jpeg)

由多边形和矩形组成的圣诞树

```html
<html>
  <svg width="200" height="200" viewBox="-100 -100 200 200">
    <polygon points="0,0 80,120 -80,120" fill="#234236" />
    <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
    <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
    <rect x="-20" y="120" width="40" height="30" fill="brown" />
  </svg>
</html>
```

你可能会想在开始编码之前如何知道我们的坐标应该在哪里。

说实话，这需要一点想象力。你可以从笔和纸开始，先画个草图来估算一下。或者你可以先猜测，然后调整值直到看起来不错为止。

## **如何用 SVG 制作姜饼人**

让我们继续制作姜饼人。因为我们的 SVG 现在位于 HTML 文件中，所以我们可以为每个标签分配 CSS 类，并将一些属性移到 CSS 中。

不过我们只能移动展示属性。定位属性和定义形状的属性仍然必须保留在 HTML 中。但我们可以将颜色、边框和字体属性移动到 CSS 中。

![Learn-SVG.004](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.004.jpeg)

姜饼人示例。右侧显示了 `stroke-width` 设为一时的视觉效果

```html
<svg class="gingerbread" width="200" height="200" viewBox="-100 -100 200 200">
  <circle class="body" cx="0" cy="-50" r="30" />

  <circle class="eye" cx="-12" cy="-55" r="3" />
  <circle class="eye" cx="12" cy="-55" r="3" />
  <rect class="mouth" x="-10" y="-40" width="20" height="5" rx="2" />

  <line class="limb" x1="-40" y1="-10" x2="40" y2="-10" />
  <line class="limb" x1="-25" y1="50" x2="0" y2="-15" />
  <line class="limb" x1="25" y1="50" x2="0" y2="-15" />

  <circle class="button" cx="0" cy="-10" r="5" />
  <circle class="button" cx="0" cy="10" r="5" />
</svg>
```

```css
.gingerbread .body {
  fill: #cd803d;
}

.gingerbread .eye {
  fill: white;
}

.gingerbread .mouth {
  fill: none;
  stroke: white;
  stroke-width: 2px;
}

.gingerbread .limb {
  stroke: #cd803d;
  stroke-width: 35px;
  stroke-linecap: round;
}
```

我们已经见过填充属性和一些描边属性，但这里还有一个新的属性 – `stroke-linecap`。它可以使我们的线条端点变圆。

注意这里的腿和手臂是简单的线条。如果我们移除线条端点并设置一个较小的 `stroke-width`，我们可以看到这些是简单的线条。但是通过设置厚的描边宽度和圆形的线条端点，我们可以为我们的图形塑造腿和手臂。

另请注意定义嘴巴的矩形上的 `rx` 属性。这会使边缘变圆。你可以把它想象成 `border-radius`。

## **如何用 SVG 制作星星**

让我们继续制作一个星星。星星是一个简单的形状，所以我们可以将其定义为一组多边形，每个点都单独设置。但这样我们需要知道每个坐标。

相反，我们可以只定义一只翼作为一个组，然后用旋转重复五次以获得星星的形状。我们使用 `transform` 属性来设置旋转。

![Learn-SVG.005](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.005.jpeg)

由变换多边形组成的星星形状。右侧展示了星星一只臂的坐标

```html
<svg width="200" height="200" viewBox="-100 -100 200 200">      
  <g transform="translate(0 5)">
    <g>
      <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </g>
    <g transform="rotate(72)">
      <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </g>
    <g transform="rotate(-72)">
      <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </g>
    <g transform="rotate(144)">
      <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </g>
    <g transform="rotate(-144)">
      <polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </g>
  </g>
</svg>
```

在这个示例中，每只翼由两个多边形组成。它们需要以相同的方式旋转，所以我们可以用 `g` 标签将它们组合在一起并一起旋转。

你可以将 `g` 标签视为 HTML 中的 `div` 标签。单独使用它并不代表任何东西。但它可以包含其他元素，并且在组标签上定义的属性适用于其子元素。

组可以嵌套。通过外部组我们可以将整个星形向下平移 5 个单位。

分组元素是一个很好的技巧，但我们不得不为每个翅膀重复相同的代码五次。

与其一遍又一遍地重复相同的代码，我们还可以为形状创建一个定义，并通过 `id` 重用它。这里我们定义一个雪花的分支，然后用不同的旋转使用它六次。

![Learn-SVG.006](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.006.jpeg)

由重复使用的图像元素组成的雪花。在右侧我们可以看到一个臂的坐标

```html
<svg width="200" height="200" viewBox="-100 -100 200 200">
  <defs>
    <path
      id="branch"
      d="
        M 0 0 L 0 -90
        M 0 -20 L 20 -34
        M 0 -20 L -20 -34
        M 0 -40 L 20 -54
        M 0 -40 L -20 -54
        M 0 -60 L 20 -74
        M 0 -60 L -20 -74"
      stroke="#E5C39C"
      stroke-width="5"
    />
  </defs>

  <use href="#branch" />
  <use href="#branch" transform="rotate(60)" />
  <use href="#branch" transform="rotate(120)" />
  <use href="#branch" transform="rotate(180)" />
  <use href="#branch" transform="rotate(240)" />
  <use href="#branch" transform="rotate(300)" />
</svg>
```

分支被定义为一个 `path`。`path` 是最强大的 SVG 标签。我们几乎可以用路径定义任何东西，如果你打开任何 SVG 文件，你会看到大多数是路径。

路径的形状由 `d` 属性定义。这里我们定义了几个绘图命令。命令总是以定义命令类型的字母开头，以坐标结束。

这里我们只有两个最简单的命令，移动到 (`M`) 和直线到 (`L`)。`move to` 命令将光标移动到一个点而不绘制线，`line to` 命令从前一个点绘制一条直线。

一个命令总是继续前一个命令，因此当我们绘制一条直线时，我们只定义端点。起点将是前一个命令的终点。

这个路径有点不寻常，因为其中有几个 `move to` 命令用相同的路径绘制主分支和每个侧分支。

## 如何使用 SVG 绘制森林

旋转并不是我们可以用简单形状生成图像的唯一方法。在这个例子中，我们定义一个树的形状，然后在不同的位置以不同的大小放置它来绘制一片森林。

![Screenshot-2023-11-30-at-21.21.23](https://www.freecodecamp.org/news/content/images/2023/11/Screenshot-2023-11-30-at-21.21.23.png)

由重复使用的图像元素组成的森林

首先，我们用一个矩形和一个圆创建背景。然后我们从一个简单的多边形和一条直线定义一个树的形状。

然后我们可以像在雪花示例中一样重用它。我们将它移动到 `defs` 部分，将其包装到一个组元素中，为其设置一个 ID，然后使用 `use` 元素重用它。

这里我们还通过设置 `x` 和 `y` 坐标来定位重复使用的元素，并且为了增加图像的透视效果，我们使用 `scale` 变换。

```HTML
<svg width="200" height="200" viewBox="-100 -100 200 200">
  <defs>
    <g id="tree">
      <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
      <line x1="0" y1="0" x2="0" y2="10" stroke="#778074" stroke-width="2" />
    </g>
  </defs>

  <rect x="-100" y="-100" width="200" height="200" fill="#F1DBC3" />
  <circle cx="0" cy="380" r="350" fill="#F8F4E8" />

  <use href="#tree" x="-30" y="25" transform="scale(2)" />
  <use href="#tree" x="-20" y="40" transform="scale(1.2)" />
  <use href="#tree" x="40" y="40" />
  <use href="#tree" x="50" y="30" transform="scale(1.5)" />
</svg>
```

## **如何使用 SVG 制作弯曲的树**

当我们开始使用曲线时，路径元素变得非常强大。其中之一是二次贝塞尔曲线，它不仅定义了段的终点，还有一个控制点。控制点是一个不可见的坐标，线段向它弯曲，但不接触它。

![Learn-SVG.007](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.007.jpeg)

用二次贝塞尔曲线制作的圣诞树

```html
<svg width="200" height="400" viewBox="-100 -200 200 400">
  <path
    d="
      M 0 -80
      Q 5 -75 0 -70
      Q -10 -65 0 -60
      Q 15 -55 0 -50
      Q -20 -45 0 -40
      Q 25 -35 0 -30
      Q -30 -25 0 -20
      Q 35 -15 0 -10
      Q -40 -5 0 0
      Q 45 5 0 10
      Q -50 15 0 20
      Q 55 25 0 30
      Q -60 35 0 40
      Q 65 45 0 50
      Q -70 55 0 60
      Q 75 65 0 70
      Q -80 75 0 80
      Q 85 85 0 90
      Q -90 95 0 100
      Q 95 105 0 110
      Q -100 115 0 120
      L 0 140
      L 20 140
      L -20 140"
    fill="none"
    stroke="#0C5C4C"
    stroke-width="5"
  />
</svg>
```

这里我们有一系列二次贝塞尔曲线 (`Q`)，其中控制点随着路径向下延伸而越来越远离树的中心。

## **如何使用 SVG 制作铃铛**

虽然二次贝塞尔曲线 (`Q`) 在我们想弯曲一条线时非常棒，但它往往不够灵活。

使用三次贝塞尔曲线 (`C`)，我们不仅有一个控制点，还有两个。第一个控制点设置曲线的初始方向，第二个定义曲线应该从哪个方向到达其终点。

![Learn-SVG.008](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.008.jpeg)

使用三次贝塞尔曲线，我们可以设置两个控制点

下一个例子同时使用了二次贝塞尔曲线和三次贝塞尔曲线来形成一个铃铛。这里，这个铃铛的底部用直线来定义。然后，一个二次贝塞尔曲线开始形成铃铛的外套。接着，三次贝塞尔曲线顺滑地继续二次贝塞尔曲线，形成铃铛的顶部。然后我们用另一条二次贝塞尔曲线到达底部。

![Learn-SVG.001-2](https://www.freecodecamp.org/news/content/images/2021/12/Learn-SVG.001-2.jpeg)

由不同曲线和直线组成的铃铛示例

```html
<svg width="200" height="200" viewBox="-100 -100 200 200">
  <g stroke="black" stroke-width="2">
    <circle cx="0" cy="-45" r="7" fill="#4F6D7A" />
    <circle cx="0" cy="50" r="10" fill="#F79257" />
    <path
      d="
        M -50 40
        L -50 50
        L 50 50
        L 50 40
        Q 40 40 40 10
        C 40 -60 -40 -60 -40 10   
        Q -40 40 -50 40"
      fill="#FDEA96"
    />
 </g>
</svg>
```

## 如何沿路径写文本

绘制形状并不是路径的唯一用例。我们还可以用它们在不可见的路径上渲染文本。我们可以在定义部分定义一个路径，并在 `textPath` 元素中使用它，使文本绕圈排列。这里我们再次使用了弧线，但你可以使用任何其他路径，文本都会沿着路径的笔画排列。

![Screenshot-2023-11-30-at-21.21.27](https://www.freecodecamp.org/news/content/images/2023/11/Screenshot-2023-11-30-at-21.21.27.png)

使用 `text-path` 属性可以使文本沿路径排列

```html
<svg width="200" height="200" viewBox="-100 -100 200 200">
  <defs>
    <path id="text-arc" d="M 0, 50 A 50 50 0 1 1 1,50" />
  </defs>

  <text
    fill="#0c5c4c"
    font-family="Tahoma"
    font-size="0.77em"
    font-weight="bold"
  >
    <textPath href="#text-arc">
      Happy Holidays! Happy Holidays! Happy Holidays!
    </textPath>
  </text>
</svg>
```

## 如何使用 CSS 动画 SVG

为了继续我们的森林示例，我们可以通过类似的动画效果添加降雪效果。我们可以使用 CSS 动画 `transform` 属性。

![Learn-SVG](https://www.freecodecamp.org/news/content/images/2023/11/Learn-SVG.gif)

使用 SVG 和 CSS 制作的动画效果

我们通过简单的可复用雪花扩展我们的森林示例，并通过各种 CSS 类为场景添加大量雪花，以设置速度和外观的某些变化。然后我们在 CSS 中添加动画，使它们看起来像降雪。这有点小问题，并不是最复杂的动画，但你能明白这个意思。

```html
<svg width="200" height="200" viewBox="-100 -100 200 200">
  <defs>
    <g id="tree">
      <polygon points="-10,0 10,0 0 -50" fill="#38755b" />
      <line x2="0" y2="10" stroke="#778074" stroke-width="2" />
    </g>
    <circle id="big" cx="0" cy="0" r="5" fill="white" />
    <circle id="small" cx="0" cy="0" r="3" fill="white" />
  </defs>

  <rect x="-100" y="-100" width="200" height="200" fill="#F1DBC3" />
  <circle cx="0" cy="380" r="350" fill="#F8F4E8" />

  <use href="#tree" x="-30" y="25" transform="scale(2)" />
  <use href="#tree" x="-20" y="40" transform="scale(1.2)" />
  <use href="#tree" x="40" y="40" />
  <use href="#tree" x="50" y="30" transform="scale(1.5)" />

  <use href="#big" x="0" y="0" class="flake fast" />
  <use href="#big" x="-50" y="-20" class="flake fast opaque" />
  <use href="#big" x="30" y="-40" class="flake fast" />
  <use href="#big" x="50" y="-20" class="flake fast opaque" />
  <use href="#big" x="30" y="50" class="flake slow" />
  <use href="#big" x="-70" y="-80" class="flake slow opaque" />
  <use href="#big" x="30" y="50" class="flake slow" />
  <use href="#big" x="90" y="-80" class="flake slow opaque" />
  <use href="#small" x="10" y="-50" class="flake slow" />
  <use href="#small" x="-50" y="-60" class="flake slow opaque" />
  <use href="#small" x="30" y="70" class="flake slow" />
  <use href="#small" x="10" y="-80" class="flake slow opaque" />
</svg>
```

```CSS
.flake {
  animation-duration: inherit;
  animation-name: snowing;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.flake.opaque {
  opacity: 0.7;
}

.flake.slow {
  animation-duration: 5s;
}

.flake.fast {
  animation-duration: 3s;
}

@keyframes snowing {
  from {
    transform: translate(0, -100px);
  }
  to {
    transform: translate(0, 100px);
  }
}
```

## 如何制作显示实际时间的时钟

SVG 元素可以像操作其他 HTML 标签一样从 JavaScript 中进行操作。

![Screenshot-2023-11-30-at-21.21.16](https://www.freecodecamp.org/news/content/images/2023/11/Screenshot-2023-11-30-at-21.21.16.png)

使用 SVG 和 JavaScript 制作的时钟示例

在这个示例中，我们使用一段简短的代码片段在时钟上显示实际时间。我们在 JavaScript 中使用 `getElementById` 访问时针和分针，并设置它们的 `transform` 属性，使其反映当前时间。下面是显示当前时间的实际 SVG。

有关如何使用 SVG 和 JavaScript 制作时钟的更详细教程，请查看[如何编码一个动画手表][3]。

```html
<svg width="200" height="200" viewBox="-100 -100 200 200">
  <rect x="-100" y="-100" width="200" height="200" fill="#CD803D" />

  <circle r="55" stroke="#FCCE7B" stroke-width="10" fill="white" />

  <circle
    r="45"
    stroke="#B6705F"
    stroke-width="6"
    stroke-dasharray="6 17.56194490192345"
    stroke-dashoffset="3"
    fill="none"
  />
```

```javascript
window.addEventListener("DOMContentLoaded", () => {
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");

  const hour = new Date().getHours() % 12;
  const minute = new Date().getMinutes();

  hoursElement.setAttribute("transform", `rotate(${(360 / 12) * hour})`);
  minutesElement.setAttribute("transform", `rotate(${(360 / 60) * minute})`);
});
```

## 如何使用 SVG 和 React 制作数据驱动图表

SVG 也能与前端库很好地结合使用。以下是一个用 React 组件生成数据驱动图表的示例。

在这个例子中，我们有两件事。我们生成了一个矩形列表，以根据某些任意数据创建一个柱状图。同时我们也为折线生成了一系列坐标。

![Screenshot-2023-11-30-at-21.21.32](https://www.freecodecamp.org/news/content/images/2023/11/Screenshot-2023-11-30-at-21.21.32.png)

我们可以使用 JavaScript 生成一个数据驱动的图表

对于简单的使用场景，你可以编写自己的图表代码像这样。但是如果你需要更复杂的图表，可以看看 [D3 库][4]。D3 库使用 SVG 在引擎下创建各种图表。

```JavaScript
function Diagram() {
  const dataPoints = [3, 4, 7, 5, 3, 6];
  const sineWave = Array.from({ length: 115 })
    .map((item, index) => `${index - 55},${Math.sin(index / 20) * 20 + 10}`)
    .join(" ");

  return (
    <svg width="200" height="200" viewBox="-100 -100 200 200">
      {dataPoints.map((dataPoint, index) => (
        <rect
          key={index}
          x={index * 20 - 55}
          y={50 - dataPoint * 10}
          width="15"
          height={dataPoint * 10}
          fill="#CD803D"
        />
      ))}

      <polyline points={sineWave} fill="none" stroke="black" stroke-width="5" />
    </svg>
  );
}
```

## **下一步 – 使用 JavaScript 使 SVG 交互**

在引擎下，SVG 刚开始可能会比较让人困惑。许多坐标、字母和奇怪的参数。但一旦你理解了它们的基础，你就可以利用它们，并开始编写图像代码。

而我们才刚刚开始。添加 JavaScript 将引入一个全新的层次。

获取更多示例，请查看 [svg-tutorial.com][5] 或我的 [YouTube 教程][6]，里面有 12 个关于如何在下一个项目中使用 SVG 的更多示例！

[

SVG 教程：学习如何创建 SVG 图像、形状、动画和更多内容

探索可缩放矢量图形 (SVG) 的基础知识。学习如何使用 JavaScript 创建和操作 SVG 图像，使用 CSS 进行动画。或颠覆传统，从代码生成图形。

![favicon](http://svg-tutorial.com/favicon.ico)SVG 教程

![image](https://svg-tutorial.com/image.png)

][7]

<iframe width="356" height="200" src="https://www.youtube.com/embed/kBT90nwUb_o?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" title="Learn SVG through 24 examples" name="fitvid0"></iframe>

### **************订阅以获取更多 Web 开发教程：**************

[

Hunor Márton Borbély

用 JavaScript 进行游戏开发，创意编码教程，HTML 画布，SVG，Three.js，以及一些 React 和 Vue 的内容 https://twitter.com/HunorBorbelyhttps://codepen.io/HunorMarton…

![favicon_144x144](https://www.youtube.com/s/desktop/2ebf064d/img/favicon_144x144.png)YouTube

![APkrFKaQ34YAITK6J0qgy6Iv6pms35dPhF68Hyy7BoYoLA=s900-c-k-c0x00ffffff-no-rj](https://yt3.googleusercontent.com/ytc/APkrFKaQ34YAITK6J0qgy6Iv6pms35dPhF68Hyy7BoYoLA=s900-c-k-c0x00ffffff-no-rj)

][8]

[1]: https://svg-tutorial.com
[2]: https://youtu.be/kBT90nwUb_o
[3]: https://www.freecodecamp.org/news/svg-javascript-tutorial/
[4]: https://d3js.org/
[5]: https://svg-tutorial.com
[6]: https://www.youtube.com/watch?v=kBT90nwUb_o
[7]: http://svg-tutorial.com
[8]: https://www.youtube.com/channel/UCxhgW0Q5XLvIoXHAfQXg9oQ
```

