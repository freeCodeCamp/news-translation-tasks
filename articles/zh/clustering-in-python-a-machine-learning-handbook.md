---
title: Python 中的聚类——机器学习工程手册
date: 2025-02-06T13:24:57.231Z
author: Tatev Aslanyan
authorURL: https://www.freecodecamp.org/news/author/tatevaslanyan/
originalURL: https://www.freecodecamp.org/news/clustering-in-python-a-machine-learning-handbook/
posteditor: ""
proofreader: ""
---

想要学习如何发现和分析数据中的隐藏模式吗？聚类是无监督机器学习中的一项基本技术，它能够揭示重要的洞察力，从而彻底改变您对复杂数据集的理解。

<!-- more -->

在这本全面的手册中，我们将深入探讨必知的聚类算法和技术，并辅以一些理论作为支持。然后，您将通过大量示例、Python 实现和可视化来了解其工作原理。

无论您是初学者还是经验丰富的数据科学家，这本手册都是掌握聚类技术的宝贵资源。您还可以[在这里下载这本手册][1]。

如果您也喜欢通过听来学习，可以收听这段15分钟的播客，我们在其中更详细地讨论了聚类。在这期节目中，我们探讨了聚类的基本概念，提供了对这些技术如何应用于现实数据的更深入理解。

<iframe width="100%" height="152" src="https://open.spotify.com/embed/episode/2O3KSW25GbqCJXl6LfUmyw" title="Spotify embed" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>

### 我们将涵盖以下内容：

1.  [无监督学习简介][2]
    
2.  [监督学习 vs. 无监督学习][3]
    
3.  [重要术语][4]
    
4.  [如何为无监督学习准备数据][5]
    
5.  [聚类详解][6]
    
6.  [K-均值聚类][7]
    
    -   [K-均值聚类：Python 实现][8]
        
    -   [K-均值聚类：可视化][9]
        
7.  [寻找最优簇数 (K) 的肘部法则][10]
    
8.  [层次聚类][11]
    
    -   [层次聚类：Python 实现][12]
        
    -   [层次聚类：可视化][13]
        
9.  [DBSCAN 聚类][14]
    
    -   [DBSCAN 聚类：Python 实现][15]
        
    -   [DBSCAN 聚类：可视化][16]
        
10.  [如何使用 t-SNE 在 Python 中可视化簇][17]
    
11.  [更多无监督学习技术][18]
    

### **在本书结束时，您将能够：**

1.  **理解无监督学习的基础知识** – 您将掌握监督学习与无监督学习的关键区别，以及聚类如何融入机器学习的更广泛领域。
    
2.  **掌握重要的聚类术语** – 您将熟悉关键概念，如数据点、质心、距离度量和聚类评估方法。
    
3.  **为聚类准备数据** – 您将学习如何处理缺失值、规范化数据集、去除异常值，并应用降维技术，如 PCA 和 t-SNE。
    
4.  **深入理解聚类技术** – 您将探索各种聚类方法，包括 K-均值、层次聚类和 DBSCAN，并了解何时使用每种方法。
    
5.  **在 Python 中实现 K-均值聚类** – 您将学习使用 Python 应用 K-均值算法，通过肘部法则优化簇的数量，并有效可视化聚类结果。
    
6.  **应用层次聚类** – 您将了解凝聚和分裂聚类，学习如何构建树状图，并使用 Python 实现层次聚类。
    
7.  **使用 DBSCAN 进行基于密度的聚类** – 您将掌握 DBSCAN 的聚类方法，包括识别噪声点和任意形状簇的能力。
    
8.  **可视化聚类结果** – 您将能够使用 Matplotlib、Seaborn 和 t-SNE 生成聚类结果的有意义可视化，以有效地分析和解释数据。
    
9.  **评估聚类性能** – 您将学习如何使用诸如轮廓系数、戴维斯-博尔丁指数和卡林斯基-哈拉巴兹指数的方法来评估聚类质量。
    
10.  **处理真实世界的数据集** – 您将获得应用聚类技术于真实世界数据集的实践经验，包括客户细分、异常检测和模式识别。
    
11.  **扩展您对聚类以外技术的了解** – 您将了解到其他无监督学习技术，如混合模型和主题建模，拓宽您在机器学习方面的专业知识。
    

在本手册结束时，您将拥有聚类和无监督学习的坚实基础，使您能够自信地分析复杂数据集并发现隐藏模式！

### **先决条件**

在深入学习这本关于聚类和无监督学习的手册之前，您应对机器学习概念、数据预处理技术以及基础 Python 编程技能有扎实的理解。这些先决条件将帮助您掌握书中涵盖的理论基础和实际实现方案。

概念如数据点、特征、距离度量（欧几里得距离，曼哈顿距离）和相似性度量在聚类算法中发挥着重要作用。对概率、统计和线性代数的基本理解也将有助于掌握这些数学概念，因为它们构成了许多机器学习模型的基础。

接下来，**数据预处理技术**对于处理现实世界的数据集是必不可少的。由于聚类算法高度依赖于结构良好的数据，你需要知道如何处理缺失值，怎样对数值特征进行归一化或标准化，以及去除可能会扭曲聚类结果的异常值。

像特征缩放（最小-最大归一化，标准化）和降维（PCA, t-SNE）这样的技术可以提高聚类的精度和效率，使你更容易解释结果。

最后，**熟练掌握Python编程和数据科学库**是跟随本手册进行实践操作的前提。你应该能熟练使用像NumPy和Pandas这样的库进行数据操作，用Matplotlib和Seaborn进行可视化，以及用Scikit-learn实现机器学习算法。

因为你将应用到如K-Means、层次聚类和DBSCAN等聚类技术，熟悉使用Jupyter Notebooks编写和执行Python脚本，并能解释聚类输出，将会增强你的学习体验。

通过在这些领域建立坚实的基础，你将准备好释放聚类的力量，从数据中获取更深入的见解。

## **无监督学习简介**

无监督学习是机器学习中的一种强大技术。它允许我们在没有任何预定义标签或目标变量的情况下，揭示数据中隐藏的模式和结构。与依赖标签数据进行训练的监督学习不同，无监督学习让我们得以探索和理解未标记数据集的内在结构。

无监督学习的一个关键应用是聚类。聚类是根据数据点的内在特征和相似性将相似的数据点聚集在一起的过程。通过识别数据集中的模式和关系，聚类帮助我们获得有价值的见解，并理解复杂数据。

聚类在多个领域具有重要意义，包括客户细分、异常检测、图像识别和推荐系统。它使我们能够识别数据中的不同组别，将数据分类为具有意义的类别，并理解驱动数据集的潜在趋势。

在接下来的部分中，我们将深入探讨不同的聚类算法，如K-Means、层次聚类和DBSCAN，探索它们的理论、实现和可视化。到本手册结束时，你将对无监督学习有全面的了解，并具备将各种聚类技术应用于自己的数据分析任务的知识和技能。

请记住，聚类只是无监督学习的一个方面，它还提供了一系列其他的技术和应用。所以，让我们深入探索无监督学习这个令人兴奋的领域，以及它在从未标记数据中提取见解方面的强大能力。

[![监督学习和无监督学习的区别](https://dataexpertise.in/wp-content/uploads/2023/12/Supervised-vs.-Unsupervised-Learning-1.jpg)][19]

## 监督学习 vs. 无监督学习

在机器学习领域，主要有两种方法：监督学习和无监督学习。理解这两种方法之间的差异对于选择正确的数据分析技术至关重要。

如其名，监督学习涉及在标记数据上训练机器学习模型。在这种方法中，输入数据由特征（也称为属性或变量）以及相应的目标值或标签组成。模型通过这些标记数据进行学习，并根据新的、未见过的数据进行预测或分类。

另一方面，无监督学习完全是关于探索未标记的数据。在无监督学习中，数据不附带预定义的标签或目标值。相反，算法自行搜索数据中的模式、结构和关系。目标是发现隐藏的见解，并对数据的内在结构有更深的理解。

无监督学习的一个关键优势是其能够发现先前未知的模式和关系。没有标记数据的限制，无监督算法可以揭示通过其他分析方法可能无法显现的有价值的见解。这使得无监督学习在探索性数据分析、异常检测和聚类中特别有用。

在监督学习中，目标变量作为学习过程的指导力量，使模型能够做出准确的预测或分类。但这种对标签数据的依赖也可能限制模型的能力，因为它可能会在处理训练数据中不存在的未表示或新模式时遇到困难。

总而言之，监督学习适用于有标记数据且目标是进行精确预测或分类的任务。另一方面，当需要探索数据中的隐藏模式和关系，尤其是在标记数据稀缺或不存在的情况下，无监督学习则非常有价值。

通过了解这两种方法之间的差异，您可以有效选择正确的技术来充分发挥数据分析工作的潜力。

## **重要术语**

要完全理解无监督学习和聚类，熟悉与这些概念相关的关键术语很重要。以下是一些您应该了解的重要术语：

**1\. 数据点**

数据点是指数据集中一个个体观察或实例。每个数据点包含描述特定对象或事件的各种特征或属性。

**2\. 聚类数量**

聚类数量代表在聚类过程中，数据将被划分为不同组的期望或估计数量。这是决定最终聚类结构的重要参数。

**3\. 无监督算法**

无监督算法是一种数学程序，用于在不需要标签或预分类示例的情况下识别数据模式或关系。这些算法探索数据集的固有结构和复杂性以发现隐藏的见解。

理解并运用这些术语将为您进入无监督学习和聚类领域的旅程奠定坚实基础。在接下来的部分中，我们将深入讨论在 Python 中聚类技术的实践和实现。

[![展示从数据收集到清洗、转换、缩减和拆分的数据准备过程的图像。从机器学习的数据准备：终极指南 | Pecan AI](https://cdn.letterdrop.co/pictures/fe3db832-862f-4a35-be7c-37231ad814bb.png)][20]

## **如何为无监督学习准备数据**

在实现无监督学习算法之前，确保数据经过适当准备是至关重要的。这涉及采取某些步骤来优化输入数据，使其适合使用聚类技术进行分析。在为无监督学习准备数据时，以下是一些重要的考虑因素：

### **数据归一化**

数据准备的一个关键方面是归一化，其中所有特征被缩放到一个一致的范围。这是必要的，因为数据集中的变量可能具有不同的单位或尺度。

归一化有助于在聚类过程中避免对任何特定特征的偏向。常见的归一化方法包括最小-最大缩放和标准化。

### **处理缺失值**

处理缺失值是另一个关键步骤。重要的是在应用聚类算法之前识别和解决数据集中的任何缺失值。

处理缺失值的方法多种多样，如插补法，其中缺失值被基于统计方法或算法的估计值替换。

### **离群值检测与处理**

离群值可能会显著影响聚类结果，因为它们可能会影响聚类边界的确定。因此，适当地检测和处理离群值至关重要。这可能涉及使用 Z 分数或四分位距（IQR）分析等技术来识别和处理离群值。

### **降维**

在某些情况下，数据集可能具有高维性，意味着它包含大量特征。高维数据可能难以有效地可视化和分析。可以采用降维技术，如主成分分析（PCA），在保留数据最具信息性的方面的同时减少特征数量。

通过仔细准备数据、规范化变量、处理缺失值、处理离群值并在必要时减少维度，可以优化无监督学习算法的输入数据质量。这确保了准确且有意义的聚类结果，从而从数据中获得有价值的见解和模式。

请记住，数据准备是在无监督学习过程中至关重要的一步，为成功的聚类分析奠定基础。

[![展示 K 均值（K-Means）聚类的可视化，彩色数据点在坐标平面上排列成不同的簇，周围是描述聚类分配和质心的图表和数学公式。- Analytics Vidhya](https://cdn.analyticsvidhya.com/wp-content/uploads/2019/08/An-Introduction-to-K-Means-Clustering-.webp)][21]

## **聚类详解**

聚类是无监督学习中的基本技术，在揭示数据中的隐藏模式方面发挥着关键作用。它涉及根据相似性对数据点进行分组，使我们能够识别数据集中的不同子集或簇。通过分析这些簇的结构，我们可以获得宝贵的见解并做出基于数据的决策。

在其核心，聚类的目的是在没有任何预定义标签或目标变量的情况下寻找数据点之间的相似性或关系。目标是在每个聚类内最大化相似性，同时在不同聚类之间最大化差异性。这个过程使我们能够识别数据中的模式和内在结构。

聚类可以通过各种因素定义，例如距离、连通性或密度。聚类中的每个数据点与同一聚类中的其他点比与其他聚类中的点有更多的相似之处。这种分组允许我们对数据进行分段，这在客户细分、异常检测和图像识别等各个领域中都非常有用。

### **聚类算法的类型**

有几种可用的聚类算法，每种都有其将数据划分为聚类的独特方法。一些流行的包括 K 均值聚类、层次聚类和 DBSCAN（带有噪声的基于密度的应用程序空间聚类）。

#### **1\. K 均值聚类**

K 均值聚类是一种广泛使用的算法，旨在将数据划分为 K 个不同的聚类。它通过迭代的方式将每个数据点分配到最近的聚类中心，然后重新计算中心。这一过程持续进行直到收敛，从而产生明确的聚类。

#### **2\. 层次聚类**

层次聚类通过基于某些标准递归地划分或合并聚类来创建聚类的层次结构。这种方法可以用树状图表示，提供关于聚类之间层次和关系的有价值的见解。

#### **3\. DBSCAN 聚类**

DBSCAN 是一种基于密度的算法，根据数据点的密度和连通性对其进行分组。它在识别任意形状的聚类和处理噪声数据方面尤为有效。

这些只是一些聚类算法的例子，每种算法都有其优点和特定场景的适用性。根据数据特性和问题领域选择最合适的算法是很重要的。

在接下来的章节中，我们将更深入地探讨这些聚类算法的理论、实现和可视化，为您提供如何使用它们的全面理解。

请记住，聚类是一种强大的技术，使我们能够解锁数据中的隐藏结构，从而带来有价值的见解和知识渊博的决策。让我们深入探索聚类的世界，发现其潜在的可能。

[![K-Means Clustering — The Science of Machine Learning & AI](https://images.squarespace-cdn.com/content/v1/5acbdd3a25bf024c12f4c8b4/1608407348392-22767PJ7RQ85BD5RLSLZ/k-means-clustering.png)][22]

## **K 均值聚类**

K 均值聚类是一种流行的无监督学习算法，用于根据相似性将数据点划分为不同的组。在本节中，我们将深入探讨 K 均值聚类背后的理论，并使用 scikit-learn 库在 Python 中探索其实现。

在数据科学和数据分析中，我们通常希望根据不同的目的将观察值分类为一组**片段**或**聚类**。例如，公司可能希望根据客户的交易历史或购买频率将其客户分为 3-5 组。这通常是一种**无监督学习**方法，其中标签（组/片段/聚类）未知。

最流行的用于将观察值聚类为组的聚类方法之一是无监督聚类算法 **K 均值**。以下是 K 均值聚类的条件：

-   需要事先指定聚类的数量：K
    
-   每个观察值需要至少属于一个类别
    
-   每个观察值需要仅属于一个类别（类别需要是不重叠的）
    
-   没有一个观察值应该属于多个类别
    

K 均值的思想是**最小化聚类内的变化并最大化聚类间的变化。**因此，K 均值将观察值划分为 K 个聚类，使得所有 K 个聚类的聚类内总变异尽可能小。

其动机在于对观察值进行聚类，使得聚类在同一组中的观察值尽可能相似，而来自不同组的观察值尽可能不同。

数学上，聚类内的变化是基于您可以自行选择的距离度量来定义的。例如，作为距离度量，可以使用欧几里得距离、曼哈顿距离等。

当聚类内的变化最小时，K 均值聚类是最优的。C\_k 聚类的聚类内变化是一个量度 W(C\_k)，用于衡量聚类中的观察值相互之间的差异。因此，应解决以下优化问题：

$$\\min\_{C\_1, \\dots, C\_K} \\sum\_{k=1}^{K} W(C\_k)$$

其中使用欧几里得距离的聚类内变化可以表示为：

$$W(C\_k) = \\frac{1}{|C\_k|} \\sum\_{i,i' \\in C\_k} \\sum\_{j=1}^{p} (x\_{ij} - x\_{i'j})^2$$

$$\\min\_{C\_1, \\dots, C\_K} \\left\\{ \\sum\_{k=1}^{K} \\frac{1}{|C\_k|} \\sum\_{i,i' \\in C\_k} \\sum\_{j=1}^{p} (x\_{ij} - x\_{i'j})^2 \\right\\}$$

### **K-Means 算法**

K-means 算法的伪代码可以描述如下：

[![替代文字：该图像显示了 K-means 算法的伪代码，包含两个主要步骤。步骤 1：以初始条件将每个数据点随机分配到一个簇。步骤 2：在簇变更时，更新簇中心并重新分配点，直至收敛。](https://miro.medium.com/v2/resize:fit:1400/1*0DjFFWY4tY74Z8EMXggEMA.png)][23]

K-Means 是一种非确定性方法，其随机性在于步骤 1，在此步骤中，所有观测值被随机分配到 K 个类别中的一个。

在第二步中，对于每个簇，通过计算簇中所有数据点的平均值来计算簇的中心。_K_ 类簇的中心是一个长度为 _p_ 的向量，包含 _k_ 类簇中所有变量的平均值，其中 _p_ 是变量的数量。

接下来，在进一步的步骤中，更新观测值的簇，使每个观测值被分配到与其中心最近的簇中，通过反复最小化**组内平方和总量**。也就是说，我们反复执行步骤 2 和 3，直到簇中心不再变化或者达到最大迭代次数。

### **K-Means 聚类：Python 实现**

让我们来看一个示例，我们的目标是将观测值分类为 4 类。原始数据如下所示：

[![散点图标题为“原始数据可视化”，显示沿 X 值从 0 到 3 排列的小绿点列，Y 值从 0 到 10。](https://miro.medium.com/v2/resize:fit:1200/1*QRRqHu4MATa7piwcPHmsSA.png)][24]

```python
# 导入必要的库
# KMeans 是来自 scikit-learn 的聚类算法
from sklearn.cluster import KMeans  
# 度量模块用于评估聚类性能
from sklearn import metrics  
# NumPy 用于数值计算和数组运算
import numpy as np  
# Pandas 用于以结构化 DataFrame 格式处理数据
import pandas as pd  

# 为 K-Means 聚类生成合成数据
# 创建一个含有随机整数的 100x2 数组，范围从 0 到 9
df = np.random.randint(0, 10, size=[100, 2])  
# 生成一个 300x1 的数组，其中包含从 0 到 3 的随机整数
X1 = np.random.randint(0, 4, size=[300, 1])  
# 生成一个 300x1 的数组，其中包含从 0 到 10 的随机浮点数
X2 = np.random.uniform(0, 10, size=[300, 1])  
# 将 X1 和 X2 在第二个轴上组合形成一个含有两个特征的数据集
df = np.append(X1, X2, axis=1)  

# 在生成的数据集上应用 K-Means 聚类算法
# 调用 KMeans_Algorithm 函数，使用 K=4 个簇
Clustered_df = KMeans_Algorithm(df=df, K=4)  
# 将聚类后的数据转换为 Pandas DataFrame 格式
df = pd.DataFrame(Clustered_df)  


# 执行 K-Means 聚类的函数
def KMeans_Algorithm(df, K):
    """
    对给定的数据集执行 K-Means 聚类。

    参数：
    df (array-like): 要聚类的输入数据集。
    K (int): 聚类的数量。

    返回：
    df (DataFrame): 包含一个附加列的原始数据集用于存储聚类标签。
    """

    # 使用指定参数初始化 K-Means 模型
    # 设置聚类数量为 K
    # 使用 k-means++ 初始化以改进收敛性
    # 将最大迭代次数设为 300
    # 设定固定的随机种子以实现可重复性
    KMeans_model = KMeans(
        n_clusters=K,  
        init='k-means++',  
        max_iter=300,  
        random_state=2021  
    )

    # 在数据集上拟合 K-Means 模型
    KMeans_model.fit(df)

    # 提取簇中心（每个簇的中心点）
    centroids = KMeans_model.cluster_centers_

    # 将簇中心转换为 DataFrame，列名为“X”和“Y”
    centroids_df = pd.DataFrame(centroids, columns=["X", "Y"])

    # 获取分配给每个数据点的簇标签
    labels = KMeans_model.labels_

    # 将输入数据转换为 Pandas DataFrame （如果尚未转换）
    df = pd.DataFrame(df)

    # 添加新列以存储分配的簇标签
    df["labels"] = labels

    # 返回带有聚类标签的更新后的 DataFrame
    return d
```

[![K-Means 聚类的 Python 代码截图。它包括导入库如 scikit-learn、numpy 和 pandas，生成合成数据，并定义一个具有参数和 K-Means 模型初始化的聚类函数。该代码处理数据集并返回带有聚类标签的 DataFrame。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738528849086/9891484a-a8b0-45eb-a8e3-f1a76c038b73.png)][25]

此脚本旨在生成合成数据，应用 K-Means 聚类，并将聚类标签分配给每个数据点。K-Means 聚类算法是一种无监督机器学习方法，它基于特征空间中的接近度将相似的数据点分组到簇中。以下是该脚本工作过程的逐步细分。

接下来，脚本生成合成的数值数据。一个 NumPy 数组 `df` 被创建，其维度为 100x2，包含了 0 到 9 之间的随机整数。还分别生成了两个额外的数组，`X1` 和 `X2`。`X1` 包含 300x1 取值范围在 0 到 3 的随机整数，而 `X2` 则包含 300x1 在 0 到 10 之间的随机浮点数。这些数组随后沿第二轴进行组合，形成具有两个特征的数据集，使其准备好进行聚类。

一旦合成数据准备好，脚本就会应用 K-Means 聚类算法。调用 `KMeans_Algorithm` 函数，并设置 `K=4`，意味着算法将尝试把数据分成四个簇。函数返回聚类后的数据集，并将其转换为 Pandas 数据框。

`KMeans_Algorithm` 函数接收两个参数：数据集 `df` 和聚类数 `K`。在这个函数中，使用 `KMeans()` 初始化 K-Means 模型。聚类数设置为 `K`，参数 `init='k-means++'` 确保了更好的初始化以加快收敛速度。`max_iter=300` 参数为迭代次数设定了上限，以防止过长的计算时间。`random_state=2021` 确保结果是可重复的。

初始化之后，K-Means 模型使用 `KMeans_model.fit(df)` 对数据集进行拟合。这个步骤处理数据集，识别簇中心点并相应地对数据点进行分组。训练完成后，使用 `KMeans_model.cluster_centers_` 提取簇质心，并将其存储在一个 Pandas 数据框中，列名为 "X" 和 "Y"，以便于解释。

每个数据点被赋予一个簇标签，可以通过 `KMeans_model.labels_` 来获取。脚本随后确保数据集存储为一个 Pandas 数据框（如果尚未格式化为 Pandas），并添加一个新的列 `"labels"` 来存储分配的簇标签。最后，更新后的数据集现在包含了原始特征以及簇分配信息，并被返回。

这个脚本的输出是一个包含三列的 Pandas 数据框：两个数值特征列表示生成的数据点，另有一列 `"labels"` 表示每个数据点的簇分配。例如，一个简化的输出视图可能显示一个数据点 `[2.0, 7.4]` 被分配到簇 `0`，而另一个 `[1.0, 3.2]` 则属于簇 `1`。

该脚本成功创建了一个结构化的数据集，将数据分成了四个不同的组，并为每个点分配了有意义的簇标签。可以通过如散点图等可视化技术进一步分析结果以了解聚类分布。未来的改进可能包括使用轮廓系数等指标来评估聚类质量，或者尝试不同数量的簇以找到最优的分组。

### **K-Means 聚类：可视化**

K-Means 的主要优点之一是其处理大型数据集的简单性和高效性。它是一种在客户分群、图像压缩、异常检测和模式识别等各领域被广泛使用的聚类算法。

尽管其简单性，K-Means 在发现数据内在的群体结构方面非常有效，是无监督学习中不可或缺的工具。但和任何算法一样，它也有其局限性，例如对初始质心选择的敏感性以及检测非球形簇的困难。了解这些优缺点有助于在将 K-Means 应用于实际数据集时做出明智的决策。

在本节中，我们将探讨如何在 Python 中实现 K-Means 聚类并可视化结果。通过逐步代码实现，你将看到数据点是如何被分组到簇中的，以及算法如何迭代地细化其簇分配。我们还将讨论选择最佳簇数的最佳实践以及如何评估聚类质量。

### 理解 K-Means 算法

在深入实现之前，我们先简单了解 K-Means 算法的工作原理。算法遵循以下步骤：

1.  **步骤 1：初始化** – 随机选择 K 个质心，其中 K 代表期望的簇数。
    
2.  **步骤 2：分配** – 根据欧式距离将每个数据点分配到最近的质心。
    
3.  **步骤 3：更新** – 通过计算分配给每个簇的所有数据点的均值来重新计算质心。
    
4.  **步骤 4：重复** – 重复步骤 2 和 3，直到达到收敛标准（如质心移动最小化）。

```python
fig, ax = plt.subplots(figsize=(6, 6))

# for observations with each type of labels from column 1 and 2
plt.scatter(df[df["labels"] == 0][0], df[df["labels"] == 0][1],
c='black', label='cluster 1')
plt.scatter(df[df["labels"] == 1][0], df[df["labels"] == 1][1],
c='green', label='cluster 2')
plt.scatter(df[df["labels"] == 2][0], df[df["labels"] == 2][1],
c='red', label='cluster 3')
plt.scatter(df[df["labels"] == 3][0], df[df["labels"] == 3][1],
c='y', label='cluster 4')
plt.scatter(centroids[:, 0], centroids[:, 1], marker='*', s=300, c='black', label='centroid')
plt.legend()
plt.xlim([-2, 6])
plt.ylim([0, 10])
plt.xlabel('X')
plt.ylabel('Y')
plt.title('Visualization of clustered data')
ax.set_aspect('equal')
plt.show()
```

[![标题为“聚类数据的可视化”的散点图，四个簇用不同颜色表示：簇1为黑色、簇2为绿色、簇3为红色、簇4为黄色。网格上用黑色星号标记中心点，X轴和Y轴分别标记为-2至6和0至10。图例包含其中。](https://miro.medium.com/v2/resize:fit:1400/1*Isl-76ShvTNwa35Xu50yHA.png)][28]

在上图中，K-means已将这些观测值分成了4组。如图所示，观察值通过图表聚类的方式看起来很自然，这非常合理。

### **用于确定最佳簇数（K）的肘部法**

在使用K-means时，最大的挑战之一是选择簇数。有时这由业务决策决定，但大多数时间我们希望选择一个最佳且合理的K。确定此K的最佳值或者说簇数的最流行方法之一是**肘部法**。

要使用这种方法，你需要知道什么是**惯性**。惯性是样本到其最近簇中心的平方距离之和。因此，惯性或**簇内平方和**值指示了不同簇的内聚程度或纯度。惯性可以描述如下：

$$\\sum\_{i=1}^{N} (x\_i - C\_k)^2$$

其中N是数据集中的样本数量，C是簇的中心，k是簇的索引。因此，惯性简单地计算了群集中每个样本到其簇中心的平方距离并将其加和。

然后我们可以计算不同簇数K的惯性。我们可以将其绘制成如下图所示，在此我们考虑K = 1,2,….,10。然后从图中我们可以选择惯性出现“肘部”的K。在这种情况下，肘部出现的位置是K = 3。

[![折线图展示了K-Means肘部法，x轴表示簇数从1到9，y轴表示惯性。图表指出在第3簇处惯性有明显下降。](https://miro.medium.com/v2/resize:fit:1400/1*S9wmsHzA4nVnZ7zSi9WfLA.png)][29]

```
def Elbow_Method(df):
    inertia = []
    # 考虑K = 1,2,...,10作为K
    K = range(1, 10)
    for k in K:
        KMeans_Model = KMeans(n_clusters=k, random_state = 2022)
        KMeans_Model.fit(df)
        inertia.append(KMeans_Model.inertia_)
    return(inertia)

K = range(1, 10)
inertia = Elbow_Method(df)
plt.figure(figsize = (17,8))
plt.plot(K, inertia, 'bx-')
plt.xlabel("K: 簇数")
plt.ylabel("惯性")
plt.title("K-Means: 肘部法")
plt.show()
```

[![代码片段展示了K-Means聚类的肘部法使用Python实现。函数计算了簇数从1到10的惯性，并使用Matplotlib绘制以识别最佳簇数。- lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529158688/f8c4892b-962b-416d-9795-c442b149deee.png)][30]

K-Means是一种非确定性方法，其随机性出现在第1步，其中所有观测被随机分配到K类中的一个。

因此，如你所见，K-Means聚类提供了一种基于相似性对数据点进行分组的高效和有效的方法。通过在Python中实现K-Means算法，你可以轻松地将此技术应用于自己的数据集并获得有价值的数据洞察。

Python提供了强大的工具来实现和可视化K-Means聚类。通过scikit-learn库和matplotlib，你可以轻松地将K-Means应用到你的数据集并从得到的簇中学习很多。

[![图示展示了层次聚类中的距离矩阵比较。展示了四种方法：最小、最大、组平均和Ward法。每种方法使用圆圈和编号点表示数据簇。](https://media.geeksforgeeks.org/wp-content/uploads/20230427165259/Distance-Matrix-in-Hierarchical--Clustering.webp)][31]

## **层次聚类理论**

另一种流行的聚类技术是层次聚类。这也是一种无监督学习技术，帮助我们将观测分段。但与K-means不同，层次聚类从将每个观测视为一个独立的簇开始。

### **聚合与分裂聚类**

层次聚类主要有两种类型：聚合的和分裂的。

聚合聚类从将每个数据点分配到其自身的簇开始。然后，它通过选择的距离度量反复合并最相似的簇，直到形成一个包含所有数据点的簇。

这种自下而上的方法创建了一个类似于二叉树的结构，也被称为树状图，其中每个节点的高度代表合并簇之间的相异性。

另一方面，分裂聚类从包含所有数据点的单个簇开始。然后，它递归地将簇分割成更小的子簇，直到每个数据点位于自己的簇中。这种自上而下的方法生成了一个树状图，提供了簇的层次结构方面的见解。

要判断聚类或数据点之间的相似性，可以使用多种距离度量方法。常用的距离度量包括欧氏距离、曼哈顿距离和余弦相似度。这些度量方法可以量化数据点对之间的不相似性或相似性，并指导聚类过程。

在这种技术中，最初每个数据点被视为一个独立的簇。在每次迭代中，最相似或最不相似的簇合并为一个簇，此过程持续进行，直到只剩下一个簇。因此，算法反复执行以下步骤：

- 1: 识别距离最近的两个簇

- 2: 合并这两个最相似的簇。

- 然后继续这个迭代过程，直到所有簇合并在一起。

两个簇的不相似性或相似性的计算取决于我们假设的连接类型。以下是5种流行的连接选项：

- **完全连接（Complete Linkage）：** 最大簇间不相似性，您需要计算簇K1和簇K2中观测值之间的所有成对不相似性。然后选择这些相似性中最大的。

- **单一连接（Single Linkage）：** 最小簇间不相似性，您需要计算簇K1和簇K2中观测值之间的所有成对不相似性。然后选择这些相似性中最小的。

- **平均连接（Average Linkage）：** 平均簇间不相似性，您需要计算簇K1和簇K2中观测值之间的所有成对不相似性。然后计算这些相似性的平均值。

- **质心连接（Centroid Linkage）：** 簇K1的质心和簇K2的质心之间的不相似性（通常这是较不理想的连接选择，因为它可能导致大量重叠）。

- **沃德方法（Ward’s method）：** 基于减少每个观测值与簇中平均观测值平方距离之和来计算聚类。

### **层次聚类的 Python 实现**

层次聚类是一种强大的无监督学习技术，它可以根据相似性将数据点分组成簇。在本节中，我们将探讨如何使用 Python 实现层次聚类。

以下是如何使用 Python 实现层次聚类的示例：

```python
import scipy.cluster.hierarchy as HieraarchicalClustering
from sklearn.cluster import AgglomerativeClustering
import numpy as np
import pandas as pd

# 创建层次聚类的数据
df = np.random.randint(0,10,size = [100,2])
X1 = np.random.randint(0,4,size = [300,1])
X2 = np.random.uniform(0,10,size = [300,1])
df = np.append(X1,X2,axis = 1)
hierCl = HieraarchicalClustering.linkage(df, method='ward')

Hcl= AgglomerativeClustering(n_clusters = 7, affinity = 'euclidean', linkage ='ward')
Hcl_fitted = Hcl.fit_predict(df)
df = pd.DataFrame(df)
df["labels"] = Hcl_fitted
```

![Screenshot of Python code for hierarchical clustering using libraries such as scipy, sklearn, numpy, and pandas. The code generates random data, performs clustering with the  function, and outputs a labeled DataFrame. - lunartech.ai ](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529216677/9b71d1c5-4847-4cc3-b847-0620409119d6.png)

此代码实现了使用 Scipy 的层次聚类模块和 Scikit-learn 的聚合聚类算法的层次聚类。脚本的目的是生成一个合成数据集，应用层次聚类，并为数据点分配簇标签。

脚本的第一部分导入了必要的库。Scipy 的层次聚类模块 (`scipy.cluster.hierarchy`) 被导入为 `HieraarchicalClustering`，用于执行基于连接的聚类。Sklearn 的 `AgglomerativeClustering` 类也被导入用于实现一种特定类型的层次聚类。同时，NumPy 用于数值运算和生成随机数据，而 Pandas 用于将数据组织成一个 DataFrame。

接下来，脚本生成合成数值数据。通过创建一个100×2的矩阵 (`df`)，其中包含0到9之间的随机整数。然后，分别创建两个额外的数据集，`X1` 和 `X2`。`X1` 包含300个0到3之间的随机整数，而 `X2` 则包含300个0到10之间的随机浮点值。然后使用 `np.append()` 将这两个数据集沿第二个轴合并，形成具有两个特征的数据集，用于聚类。

一旦数据集准备好，就使用 Ward 连接法应用层次聚类，该方法最小化合并簇之间的方差。链接矩阵 `hierCl` 是通过 `HieraarchicalClustering.linkage(df, method='ward')` 创建的，它计算了层次聚类的解决方案。

在生成层次聚类链接矩阵后，应用聚合聚类将数据分为七个簇 (`n_clusters=7`)。`affinity='euclidean'` 参数指定使用欧氏距离作为度量点之间相似性的距离度量。`linkage='ward'` 参数确保使用 Ward 法，根据最小化方差合并簇。然后使用 `Hcl.fit_predict(df)` 将模型拟合到数据集中，从而为每个数据点分配一个簇标签。

总结来说，这个脚本生成随机数据，使用 Scipy 的链接方法和 Scikit-learn 的凝聚聚类进行层次聚类，并将聚类标签分配给每个数据点。最终的数据集可以用于分析聚类结构、可视化结果或验证聚类的有效性。

### **层次聚类：可视化**

层次聚类的一个关键优势是能够创建聚类的层次结构，这可以提供关于数据点之间关系的宝贵见解。

为了在 Python 中可视化层次聚类，我们可以使用各种库，如 Scikit-learn、SciPy 和 Matplotlib。这些库提供了易于使用的功能和工具，简化了可视化过程。

因此，在执行层次聚类后，通常有必要可视化聚类。我们可以使用各种技术进行可视化，如树状图或热图。

正如我们在上面讨论的一样，树状图是一种树状图表，用于显示聚类之间的层次关系。它可以使用 Python 中的 Scipy 库生成。

这是在 Python 中可视化树状图和聚类点的示例：

```
# 生成树状图以帮助确定最佳聚类数量
# 树状图可视化层次聚类如何一步一步地合并点
dendrogram = HieraarchicalClustering.dendrogram(hierCl)

# 设置树状图的标题
plt.title('Dendrogram')

# 标记 x 轴以指示观察值（数据点）
plt.xlabel("Observations")

# 标记 y 轴以显示聚类之间的欧式距离
plt.ylabel('Euclidean distances')

# 显示树状图
plt.show()


# 使用散点图可视化聚类数据
# 每种颜色代表一个不同的聚类

# 用黑色绘制属于簇 1 的所有点
plt.scatter(df[df["labels"] == 0][0], df[df["labels"] == 0][1], 
            c='black', label='cluster 1')

# 用绿色绘制属于簇 2 的所有点
plt.scatter(df[df["labels"] == 1][0], df[df["labels"] == 1][1], 
            c='green', label='cluster 2')

# 用红色绘制属于簇 3 的所有点
plt.scatter(df[df["labels"] == 2][0], df[df["labels"] == 2][1], 
            c='red', label='cluster 3')

# 用品红色绘制属于簇 4 的所有点
plt.scatter(df[df["labels"] == 3][0], df[df["labels"] == 3][1], 
            c='magenta', label='cluster 4')

# 用紫色绘制属于簇 5 的所有点
plt.scatter(df[df["labels"] == 4][0], df[df["labels"] == 4][1], 
            c='purple', label='cluster 5')

# 用黄色绘制属于簇 6 的所有点
plt.scatter(df[df["labels"] == 5][0], df[df["labels"] == 5][1], 
            c='y', label='cluster 6')

# 用黑色绘制属于簇 7 的所有点
plt.scatter(df[df["labels"] == 6][0], df[df["labels"] == 6][1], 
            c='black', label='cluster 7')

# 显示图例以标记图中的每个聚类
plt.legend()

# 标记代表特征 1（第一维度）的 x 轴
plt.xlabel('X')

# 标记代表特征 2（第二维度）的 y 轴
plt.ylabel('Y')

# 设置散点图的标题
plt.title('Hierarchical Clustering')

# 显示聚类散点图
plt.show()
```

[![用于在 Python 中可视化层次聚类的代码片段。它包括生成树状图和创建散点图以表示聚类，每个聚类用不同的颜色表示。X 和 Y 轴都进行了标记，并设置了图表标题以提高清晰度。代码使用 Matplotlib 函数如 、 , 、 和 。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529338003/d04605b0-8c9e-46d9-8aac-0f62dc0a67d3.png)][34]

以下是如何在 Python 中逐步可视化层次聚类的指南：

**步骤 1：预处理数据**

在可视化层次聚类之前，重要的是通过缩放或归一化预处理数据。这可以确保所有特征具有相似的范围，并防止对特定特征的偏见。

**步骤 2：执行层次聚类**

接下来，我们使用选定的算法执行层次聚类，例如 Scikit-learn 中的 AgglomerativeClustering。该算法计算数据点之间的相似性，并根据特定的链接标准将它们合并为聚类。

**步骤 3：创建树状图**

我们可以使用 SciPy 库中的树状图函数创建这种可视化效果。树状图允许我们可视化聚类之间的距离和关系。

**步骤 4：绘制聚类**

最后，我们可以使用散点图或其他合适的可视化技术绘制聚类。这有助于我们可视化每个聚类中的数据点，并深入了解每个聚类的特征。

[![树状图显示了具有欧氏距离的观察值的分层聚类。图表标有聚类编号和蓝色、绿色和橙色的分支。 - lunartech.ai](https://miro.medium.com/v2/resize:fit:1400/1*wIrFoLxUBv-8Y_cuskgukQ.png)][35]

此树状图可以帮助我们决定更好地使用的聚类数。如您所见，在这种情况下，我们应使用 7 个聚类。

通过在 Python 中可视化层次聚类，我们可以更好地理解数据的结构和关系。这种可视化技术在处理复杂数据集时特别有用，有助于决策过程和模式发现。

请记得根据您的数据集和目标调整特定参数和设置。尝试不同的可视化和技术可以更深入地洞察您的数据。

## **DBSCAN 聚类理论**

DBSCAN（基于密度的空间聚类应用于噪声）是一种用于聚类分析的无监督学习算法。它在识别任意形状的聚类和处理噪声数据方面特别有效。

与 K-Means 或层次聚类不同，DBSCAN 不需要预先指定聚类的数量。它基于数据中的密度和连通性定义聚类。

### **DBSCAN 的工作原理：**

**基于密度的聚类**：DBSCAN 将彼此相邻并有足够数量的邻居的数据点分组在一起。它将数据点的密集区域识别为聚类，并将稀疏区域分隔为噪声。

**核心点、边界点和噪声点**：DBSCAN 将数据点分为三种类型：核心点、边界点和噪声点。

- 核心点：在指定距离（由 `eps` 参数定义）内具有最小数量邻近点（由 `min_samples` 参数定义）的数据点。

- 边界点：在 `eps` 距离内靠近核心点但邻居不够多的数据点。

- 噪声点：既不是核心点也不是边界点的数据点。

**可达性和连通性**：DBSCAN 利用可达性和连通性的概念来定义聚类。如果有一个核心点路径连接两个数据点，则认为一个数据点可以从另一个数据点到达。如果两个数据点是可达的，它们属于同一聚类。

**聚类增长**：DBSCAN 从任意一个数据点开始，通过检查其邻居及其邻居的邻居来扩展聚类，形成一个相连接的数据点组。

### **DBSCAN 聚类的优点：**

- **检测复杂结构的能力**：DBSCAN 可以发现不同形状和大小的聚类，使其非常适合具有非线性关系或不规则模式的数据集。

- **对噪声的鲁棒性**：DBSCAN 通过将噪声点与聚类分开处理，有效地处理噪声数据。

- **自动确定聚类数量**：DBSCAN 不需要预先指定聚类的数量，使其更具便利性并适应不同的数据集。

- **扩展到大数据集**：相比于其他一些聚类算法，DBSCAN 的时间复杂度相对较低，使其能够很好地扩展到大数据集。

在下一节中，我们将深入介绍如何使用 Python 实现 DBSCAN 算法，提供逐步指导和示例。

### **DBSCAN 聚类：Python 实现**

在本节中，我将指导您如何使用 Python 实现 DBSCAN。

#### DBSCAN 聚类的关键步骤

1. **准备数据**：在应用 DBSCAN 之前，预处理您的数据是很重要的。这包括处理缺失值，标准化特征，并选择合适的距离度量。

2. **定义参数**：DBSCAN 需要两个主要参数：epsilon (ε) 和最小点数 (MinPts)。epsilon 确定将两个点视为邻居的最大距离，而 MinPts 指定形成密集区域所需的最小点数。

3. **执行基于密度的聚类**：DBSCAN 从随机选择一个数据点并识别指定 epsilon 距离内的邻居开始。如果邻居数量超过 MinPts 阈值，则形成一个新的聚类。算法通过迭代地添加新点扩展此聚类，直到无法再达到新的点。

4. **执行噪声检测**：不属于任何聚类的点被视为噪声或离群点。这些点不分配给任何聚类，并有助于识别数据中的异常现象。

要在 Python 中执行 DBSCAN 聚类，我们可以使用 scikit-learn 库。第一步是导入必要的库并加载我们要聚类的数据集。然后，我们可以创建一个 DBSCAN 类的实例，并设置 epsilon（eps）和最小样本数（min_samples）参数。

以下是一个示例代码片段，供您入门：

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_moons
from sklearn.cluster import DBSCAN

# 生成一些示例数据
X, _ = make_moons(n_samples=500, noise=0.05, random_state=0)

# 应用 DBSCAN
db = DBSCAN(eps=0.3, min_samples=5, metric='euclidean')
y_db = db.fit_predict(X)
```

[![在紫色背景下显示使用 DBSCAN 聚类算法的过程的代码片段。它导入了 like numpy 和 matplotlib 这样的库，生成了示例数据，并应用了指定参数的 DBSCAN。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529451227/4b01ac7c-a9f9-4666-8fe5-e457a18ad160.png)][37]

DBSCAN 相对于其他聚类算法具有多种优势，例如不需要预先定义簇的数量。这使得它适用于具有未知簇数量的数据集。DBSCAN 还能够识别不同形状和大小的簇，使其在捕获复杂结构时更为灵活。

但是，DBSCAN 在处理数据集中的变密度时可能会遇到困难，并且对 epsilon 和最小点数参数的选择很敏感。为了获得最佳的聚类结果，精确调整这些参数至关重要。

通过在 Python 中实现 DBSCAN，您可以利用这一强大的聚类算法来发现数据中的有意义的模式和结构。

在我们探索 DBSCAN 与其他聚类技术之间的差异之前，让我们仔细了解一下影响 DBSCAN 性能和结果的关键参数。

### 理解 DBSCAN 的关键参数

**eps** (epsilon) 参数定义了两个点之间的最大距离，以使其中一个被视为另一个的邻居。这意味着在核心点的这个半径内的点属于同一个簇。选择合适的 eps 值至关重要，因为非常小的 eps 值可能导致簇过多过小，而非常大的 eps 值可能会将不同的簇合并为一个。

**min\_samples** 参数决定了形成一个密集区域所需的最小数据点数。如果一个点在 eps 半径内至少有 min\_samples 个邻居，它被归类为一个 **核心点**。如果一个点位于一个核心点的 eps 半径内，但本身不满足 min\_samples 阈值，则该点被归类为 **边界点**。任何既不是核心点也不是边界点的点都被标记为噪声或异常值。

### DBSCAN 如何对数据点进行分组

DBSCAN 通过识别核心点并围绕它们扩展簇来运行。它根据密度将紧密聚集的点（或簇）组合在一起，并将低密度点标记为异常值（或噪声）。过程如下：

1.  **选择一个未访问的点**，检查其在 `eps` 半径内是否有至少 `min_samples` 个邻居。
    
2.  如果有，则此点成为 **核心点**，并在其周围形成一个新簇。
    
3.  **扩展簇**，将 `eps` 范围内所有直接可达的点加入簇中。如果这些点中有核心点，则也加入其邻居。
    
4.  **继续扩展**，直到没有更多点满足密度标准。
    
5.  **移动到下一个未访问的点**，并重复该过程。
    
6.  **将剩余的点分类为边界点**（属于簇但不是核心点）或噪声（不属于任何簇的异常值）。
    

### DBSCAN 的示例实现

在此实现中：

-   `eps=0.3`：定义点之间的邻近程度。
    
-   `min_samples=5`：设置形成密集区域所需的最少点数。
    
-   `fit_predict(X)`：为每个数据点分配一个簇标签。
    

在应用 DBSCAN 后，数据点被分配标签。如果两个点属于同一个簇，那么它们在 `y_db` 中将具有相同的标签。被识别为异常值的点将被标记为 `-1`，并保持未聚类状态。

最终的散点图将直观地展示 DBSCAN 如何识别出两个月牙形簇。与假设球形簇的 K-Means 不同，DBSCAN 能够有效地检测任意形状的簇。

```python
plt.scatter(X[y_db == 0, 0], X[y_db == 0, 1],
            c='lightblue', marker='o', s=40,
            edgecolor='black', 
            label='cluster 1')
plt.scatter(X[y_db == 1, 0], X[y_db == 1, 1],
            c='red', marker='s', s=40,
            edgecolor='black', 
            label='cluster 2')
plt.legend()
plt.show()
```

![Python 代码截图，显示如何使用 Matplotlib 绘制带有散点的图表。代码定义了两种不同颜色和标记的簇，增加了图例并展示了图表。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529515628/a5c2861e-1263-4cad-84f2-9e026261942f.png)

![散点图显示两个簇：簇 1 用绿色圆圈形成上方的弧线，簇 2 用红色方块形成下方的弧线。图片来源：作者](https://miro.medium.com/v2/resize:fit:1400/1*ymoTCnR3H-WBs8ShoTrYNg.png)

最终的图表将显示两个绿色和红色的月牙形簇，展示 DBSCAN 成功识别并分离了两个交错的半圆。

![插图展示了一幅图表，未标记的数据点被聚类为两个不同的分组在不同的图上。一个火柴人问：“如何在没有标签的情况下评估这些？” - lunartech.ai](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9a97d1f6-3c00-4493-b430-1d8e3cb8d270_3327x1350.png)

## **如何评估聚类算法的性能**

评估聚类模型的性能可能很具挑战性，因为在无监督学习中没有可用的真值标签。但是，有几个评估指标可以提供有关聚类结果质量的洞见。

我建议您结合评估指标和视觉评估来全面评估聚类模型的性能。

## **K-Means、层次聚类和 DBSCAN 之间的区别**

K-Means、层次聚类和 DBSCAN 是三种广泛使用的聚类算法，它们各自采用不同的方法对数据点进行分组。了解它们的区别对于根据数据特征和分析目标选择最合适的方法至关重要。

### **K-Means 聚类**

K-Means 聚类是一种基于质心的算法，它根据相似性将数据分为 K 个簇。算法首先通过随机初始化 K 个质心开始，然后迭代地将每个数据点分配到最近的质心中。一旦所有数据点都被分配，质心将根据每个簇内点的平均值重新计算。这个过程会持续，直到达到收敛。

#### **K-Means 聚类的优点：**

-   对大数据集高效且可扩展。
  
-   在簇为球形并且均匀分布时效果很好。
  
-   与层次聚类相比，计算速度更快。
  
-   易于实现和解释。
  
#### **K-Means 聚类的缺点：**

-   需要提前指定簇的数量 (K)。
  
-   对初始质心位置敏感，结果可能不同。
  
-   假设簇大小相等且呈球形，而这并不总是如此。
  
-   对离群点和非线性形状的簇处理不佳。
  
### **层次聚类**

层次聚类创建一个嵌套的簇层次结构，而无需预定义簇的数量。它从将每个数据点视为单独的簇开始，根据相似性逐步合并或拆分簇。结果通常使用树状图进行可视化，帮助确定最佳簇数量。

#### **层次聚类的优点：**

-   **不**需要提前指定簇的数量。
  
-   捕捉到簇之间的层次关系。
  
-   能处理包括数值和类别在内的不同类型数据。
  
-   适合探索性分析，树状图提供了更好的可解释性。
  
#### **层次聚类的缺点：**

-   对大数据集计算开销大 (O(n²) 复杂度)。
  
-   由于内存限制而难以扩展，尤其是在处理大量数据点时。
  
-   选择树状图的正确截断点可能很困难。
  
-   对噪声和离群点敏感，这可能会扭曲层次结构。
  
### **DBSCAN（基于密度的具有噪声的应用聚类）**

DBSCAN 是一种基于密度的聚类算法，通过数据点的接近度和密度来分组，而不是预定义的簇。与 K-Means 和层次聚类不同，DBSCAN 不需要指定簇的数量。它使用两个关键参数：eps（两个点之间的最大距离，以便被视为邻居）和 min_samples（形成密集簇所需的最小点数）。不符合这些标准的点被归类为噪声。

#### **DBSCAN 的优点：**

-   不需要提前指定簇的数量。
  
-   可以检测任意形状的簇，而 K-Means 假设簇为球形。
  
-   有效处理离群点，这些点被标记为噪声，而不是强制将其纳入簇中。
  
-   适用于具有不同密度和非线性结构的数据集。
  
#### **DBSCAN 的缺点：**

-   对于变密度的簇效果不佳，因为单一的 eps 值可能不适合所有簇。
  
-   对参数调节敏感（eps 和 min_samples），这会影响聚类性能。
  
-   不适合高维数据，因为在高维空间中欧几里得距离失去意义。
  
-   可能在非常大的数据集上表现不佳，但比层次聚类可扩展性更好。
  
### **选择合适的聚类算法**

| 特征 | K-Means | 层次聚类 | DBSCAN |
| --- | --- | --- | --- |
| **簇形状** | 假设为球形簇 | 适用于层次结构 | 处理任意形状的簇 |
| **可扩展性** | 非常可扩展（适合大型数据集） | 不可扩展（O(n²) 复杂度） | 中等可扩展（可能在非常大的数据集上表现不佳） |
| **簇数量** | 必须预定义 | 无需指定 | 无需指定 |
| **处理离群点** | 较差 | 对噪声敏感 | 良好，将离群点检测为噪声 |
| **计算复杂度** | O(n) 到 O(n log n) | O(n²) | O(n log n) |
| **可解释性** | 结果易于解释 | 树状图提供良好的洞察 | 直观性较差，需要参数调优 |

每种聚类算法都有其优缺点。**K-Means** 在处理大数据集并且簇为球形和良好分隔时表现理想。**层次聚类** 在存在层次关系或簇数量未知时很有用。**DBSCAN** 在检测任意形状簇和处理噪声方面表现出色，但需要谨慎调整参数。

[![t-SNE 可视化，复杂度为 50，展示数据点的聚类。标记的聚类突出显示了不同的年份、评分和电影类型，如浪漫、惊悚、动作和冒险。- lunartech.ai](https://miro.medium.com/v2/resize:fit:1400/1*HpMauXQZe0ByFFSHs4wNLw.png)][41]

## **如何使用 Python 的 t-SNE 进行聚类可视化**

在应用 K-Means、层次聚类和 DBSCAN 等聚类算法后，您通常希望可视化生成的聚类，以更好地理解基础数据结构。

虽然散点图对于二维或三维数据集效果很好，但现实世界的数据集通常包含高维特征，难以直观解释。

为了解决这个挑战，您可以使用降维技术，如 **t-SNE**（t-分布随机邻域嵌入），将高维数据投影到低维空间，同时保留其结构。这使您能够更有效地可视化聚类，并识别原始数据中可能无法立即显现的隐藏模式。

在本节中，我们将探讨 t-SNE 的理论及其在 Python 中的实现。

### **理解 t-SNE**

t-SNE 由 Laurens van der Maaten 和 Geoffrey Hinton 于 2008 年提出，是一种可视化复杂数据结构的方法。其目标是将高维数据点表示在较低维的空间中，同时保留数据点之间的局部结构和成对相似性。

t-SNE 通过建模高维空间和低维空间中数据点之间的相似性来实现这一点。

### **t-SNE 算法**

t-SNE 算法按照以下步骤进行：

1.  计算高维空间中数据点之间的成对相似性。这通常使用高斯核来测量基于欧几里得距离的数据点之间的相似性。
    
2.  随机初始化低维嵌入。
    
3.  定义一个代价函数，表示高维空间和低维空间中数据点之间的相似性。
    
4.  使用梯度下降优化代价函数，以最小化高维和低维相似性之间的差异。
    
5.  迭代步骤 3 和 4，直到代价函数收敛。
    

借助 scikit-learn 等库，在 Python 中实现 t-SNE 相对简单。scikit-learn 库为应用 t-SNE 提供了一个用户友好的 API。按照 scikit-learn 的文档和示例，您可以轻松地将 t-SNE 合并到您的机器学习流程中。

### **二维 t-SNE 可视化**

```python
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.manifold import TSNE

# 加载数据集
digits = datasets.load_digits()
X, y = digits.data, digits.target

# 应用 t-SNE
tsne = TSNE(n_components=2, random_state=0)
X_tsne = tsne.fit_transform(X)

# 在二维平面上可视化结果
plt.figure(figsize=(10, 6))
scatter = plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=y, edgecolor='none', alpha=0.7, cmap=plt.cm.get_cmap('jet', 10))
plt.colorbar(scatter)
plt.title("t-SNE of Digits Dataset")
plt.show()
```

[![使用 Matplotlib 和 scikit-learn 进行可视化 t-SNE 转换的 Python 代码片段。代码加载数据集，应用 t-SNE，并将结果绘制在二维平面上。- lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529609503/e4a5dac2-0c31-4e9c-b8cd-9d243736ee67.png)][42]

[![散点图显示了数字数据集的 t-SNE 可视化。彩色点的聚类代表不同的数字，颜色从深红到浅蓝，分别对应数字 0 到 9。右侧的颜色条显示了每种颜色所代表的数字。- lunartech.ai](https://miro.medium.com/v2/resize:fit:1400/1*vFccfsJFgXl3rulHs93MKA.png)][43]

在此示例中：

1.  我们加载 `digits` 数据集。
    
2.  我们应用 t-SNE 将数据从 64 维（因为每个图像是 8x8）减少到 2 维。
    
3.  然后我们绘制转化后的数据，根据其真实数字标签为每个点着色。
    

生成的可视化将显示聚类，每个聚类对应一个数字（0 到 9）。这有助于理解不同数字在原始高维空间中的区分程度。

### **可视化高维数据**

t-SNE 的主要优点之一是能够在低维空间中可视化高维数据。通过减少数据的维度，t-SNE 使我们能够识别在原始高维空间中可能并不明显的聚类和模式。生成的可视化可以提供对数据结构的宝贵见解，并在决策过程中提供有力支持。

```python
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.manifold import TSNE
from mpl_toolkits.mplot3d import Axes3D

# 加载数据集
digits = datasets.load_digits()
X, y = digits.data, digits.target

# 应用 t-SNE
tsne = TSNE(n_components=3, random_state=0)
X_tsne = tsne.fit_transform(X)

# 在三维平面上可视化结果
fig = plt.figure(figsize=(10, 8))
ax = fig.add_subplot(111, projection='3d')
scatter = ax.scatter(X_tsne[:, 0], X_tsne[:, 1], X_tsne[:, 2], c=y, edgecolor='none', alpha=0.7, cmap=plt.cm.get_cmap('jet', 10))
plt.colorbar(scatter)
plt.title("3D t-SNE of Digits Dataset")
plt.show()
```

[![使用 matplotlib、sklearn 和 mpl_toolkits.mplot3d 等库的 Python 代码片段。它加载数字数据集，应用 t-SNE 进行降维，并在三维平面上可视化结果。- lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529676545/772f6b94-655b-4ae3-bdb5-a5334442c970.png)][44]

在修改后的代码中：

1.  我们设置 `n_components=3` 以获取 t-SNE 的三维转换。
    
2.  我们使用 `mpl_toolkits.mplot3d.Axes3D` 创建三维散点图。
    

执行此代码后，您将看到一个三维散点图，其中点基于其 t-SNE 坐标定位，并根据其真实数字标签着色。

旋转三维可视化可以帮助我们更好地理解数据点的空间分布。

[![数字数据集的 t-SNE 投影的 3D 散点图。数据点以不同颜色代表不同的数字聚类。右侧的颜色条显示了从 0 到 9 的数值。](https://miro.medium.com/v2/resize:fit:1400/1*aw8wAIvC2CXwXO7Ixjy1JQ.png)][45]

t-SNE 是强大的降维和高维数据可视化工具。通过利用其功能，您可以更深入地了解复杂的数据集，发现可能不会立即显现的隐藏模式。借助其 Python 实现和易用性，t-SNE 是任何数据科学家或机器学习从业者的宝贵资产。

[![散点矩阵图显示了鸢尾花品种：setosa（蓝色）、versicolor（红色）和 virginica（绿色）的萼片宽度、萼片长度、花瓣宽度和花瓣长度之间的关系。- lunartech.ai](https://cdn-images-1.medium.com/max/1600/1*sNHaMTQBe3plUhk3k2dnYg.gif)][46]

## **更多无监督学习技术**

除了我们在这里讨论的聚类技术，还有一些其他值得探索的重要无监督学习技术。虽然我们不会在此详细讲解它们，但让我们简要提一下这两种技术：混合模型和主题建模。

### **混合模型**

混合模型是一种用于建模复杂数据分布的概率模型。它们假设整体数据集可以描述为多个底层子群体或成分的组合，每个成分由其自己的概率分布描述。

在数据点没有明显属于不同聚类而可能展示重叠特征的情况下，混合模型可能特别有用。

### **主题建模**

主题建模是一种用于从文档集合中提取底层主题或话题的技术。它使您能够探索和发现文本数据中的潜在语义模式。

通过分析跨文档的单词共现并识别常见主题，主题建模能够自动对大型文本数据集进行分类和总结。该技术在自然语言处理、信息检索和内容推荐系统等领域有应用。

虽然这些技术超出了本手册的讨论范围，它们确是发掘隐藏模式并从数据中获得见解的宝贵工具。

请记住，掌握无监督学习需持续学习和实践。通过熟悉上述不同技术，您将能够很好地应对各领域广泛的数据分析问题。

## **常见问题**

### **问：监督学习和无监督学习有什么区别？**

监督学习涉及在标记数据上训练模型，其中输入与相应的输出配对。目标是预测新的、未见过的输入的输出。

相反，无监督学习处理未标记的数据，目标是在没有预定义输出的情况下发现数据中的模式、结构或聚类。

基本上，监督学习旨在学习映射函数，而无监督学习则专注于揭示数据中隐藏的关系或分组。

### **问：哪个聚类算法最适合我的数据？**

聚类算法的适用性取决于多种因素，例如数据的性质、所需的聚类数量以及您要解决的具体问题。

在本手册中，我们讨论了三种常用的聚类算法：

-   **K-means** 是一种流行的算法，旨在将数据划分为 K 个聚类，每个数据点分配到最近的质心。它适用于均匀分布的球形聚类，并要求提前指定聚类数量。
    
-   **层次聚类** 通过迭代地合并或分割聚类来构建聚类的层次结构。它提供了一个树状图来可视化聚类过程，并可以处理不同形状和大小的聚类。
    
-   **DBSCAN** 是一种基于密度的算法，它将相互靠近的数据点聚集在一起，并分离孤立点。它可以发现任意形状的聚类，并且不需要事先了解聚类的数量。
    

为了确定适用于您用例的最佳算法，我建议您尝试不同的技术，并根据聚类质量、计算效率和可解释性等指标评估其性能。

### **问：无监督学习可以用于预测分析吗？**

虽然无监督学习主要集中在没有具体输出标签的情况下探索数据中的模式和关系，但它可以间接支持预测分析。通过识别数据中的隐藏结构和聚类，无监督学习可以提供洞见，从而实现更好的特征工程、异常检测或分段，从而提高预测模型的性能。

诸如聚类之类的无监督学习技术可以帮助识别数据中的独特分组或模式，这些可以用作预测模型的输入特征，或者用作生成新预测变量的基础。因此，无监督学习通过促进更深入的数据理解并提高预测模型的准确性和有效性，在预测分析中发挥着重要作用。

## **数据科学与 AI 资源**

想了解有关数据科学、机器学习和 AI 职业的信息，并学习如何获得数据科学工作吗？您可以下载这本[免费的数据科学和 AI 职业手册][47]。

想从头开始学习机器学习，或刷新您的记忆吗？下载此[免费机器学习基础手册][48]，将所有机器学习基础与 Python 示例合并到一起。

## **关于作者**

[**Tatev Aslanyan**][49] 是一位高级机器学习和 AI 工程师、CEO 和 [**LunarTech**][50] 的联合创始人，这是一家致力于全球普及数据科学和 AI 的深度科技创新公司。凭借在 AI 工程和数据科学领域超过 6 年的经验，Tatev 曾在美国、英国、加拿大和荷兰工作，将其专业知识应用于推进各行业的 AI 解决方案。

Tatev 拥有荷兰顶级大学的经济计量学和运筹学 [MSc 和 BSc 学位][51]，并在自然语言处理 (NLP)、机器学习和推荐系统方面撰写了多篇科学论文，发表在美国受人尊敬的科学期刊上。

作为顶级开源贡献者，Tatev 合著了包括 **freeCodeCamp for 2024** 的课程和书籍，并在通过 [**LunarTech** 的项目][53]教育全球 144 个国家超过 **30,000 名学习者方面发挥了关键作用。

[lunartech][54] 是一家深度科技创新公司，致力于构建 AI 驱动的产品并提供教育工具，帮助企业和个人实现创新，减少运营成本，提高盈利能力。

## **与我们联系**

-   [在 LinkedIn 上与我联系][55]
    
-   [查看 YouTube 频道][56]
    
-   订阅 [**LunarTech 新闻简报**][57] 或 [**LENS**][58] - 我们的新闻频道
    

想了解有关数据科学、机器学习和 AI 职业生涯的一切，并学习如何获得数据科学工作吗？下载这本免费的数据科学和 AI 职业手册。

感谢您选择这本指南作为您的学习伙伴。随着您继续探索广阔的人工智能领域，我希望您能够充满信心、精准和创新精神。

## **LunarTech 的 AI 工程训练营**

如果您有志成为 AI 工程师，并希望获得结合深度理论和实践操作的全方位训练营，请查看[**LunarTech AI 工程训练营**][59]，专注于生成式 AI。这是一个全面和先进的 AI 工程计划，旨在为您提供在最具竞争力的 AI 角色和行业中蓬勃发展的所有必要技能。

<iframe width="560" height="315" src="https://www.youtube.com/embed/g6KQHEeZVQY" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube 视频播放器" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

在仅需 3 到 6 个月的自定进度或基于小组的课程中，您将学习生成式 AI 和基础模型，如 VAEs、GANs、transformers 和 LLMs。深入探讨数学、统计学、架构以及使用 PyTorch 和 TensorFlow 等行业标准框架训练这些模型的技术细节。

课程内容包括大模型的预训练、微调、提示工程、量化和优化，以及检索增强生成（RAGs）等尖端技术。

这个培训营将使您能够弥合研究与现实应用之间的差距，让您在构建高级项目的同时设计有影响力的解决方案，创建耀眼的作品集。

该项目还强调 AI 伦理，帮助您创建符合负责任 AI 原则的可持续和道德的模型。这不仅仅是另一门课程，而是一个全面的旅程，旨在让您在 AI 革命中成为领导者。[查看课程大纲][60]

名额有限，对于技能 AI 工程师的需求比以往任何时候都高。不要等待—您在 AI 工程方面的未来从现在开始。您可以[在这里申请][61]。

> _“让我们一起构建未来！” - Tatev Aslanyan，LunarTech 的 CEO 和联合创始人_

## [**数据科学和 AI 新闻简报 | Tatev Karen | Substack**][62]

想从头开始学习机器学习，或刷新您的记忆吗？下载此 [**免费机器学习基础手册**][63]

想了解有关数据科学、机器学习和 AI 职业生涯的一切，并学习如何获得数据科学工作吗？下载这本 [**免费数据科学和 AI 职业手册**][64]。

感谢您选择这本指南作为您的学习伙伴。随着您继续探索广阔的机器学习领域，我希望您能够充满信心、精准和创新精神。祝愿您在未来的所有努力中取得成功！

[1]: https://join.lunartech.ai/clustering-in-python
[2]: #heading-introduction-to-unsupervised-learning
[3]: #heading-supervised-vs-unsupervised-learning
[4]: #heading-important-terminology
[5]: #heading-how-to-prepare-data-for-unsupervised-learning
[6]: #heading-clustering-explained
[7]: #heading-k-means-clustering
[8]: #heading-k-means-clustering-python-implementation
[9]: #heading-k-means-clustering-visualization
[10]: #heading-elbow-method-for-optimal-number-of-clusters-k
[11]: #heading-hierarchical-clustering
[12]: #heading-hierarchical-clustering-python-implementation
[13]: #heading-hierarchical-clustering-visualization
[14]: #heading-dbscan-clustering
[15]: #heading-dbscan-clustering-python-implementation
[16]: #heading-dbscan-clustering-visualization
[17]: #heading-how-to-use-t-sne-for-visualizing-clusters-with-python
[18]: #heading-more-unsupervised-learning-techniques
[19]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[20]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[21]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[22]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[23]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[24]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[25]: https://lunartech.ai
[26]: http://model.fit
[27]: https://lunartech.ai
[28]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[29]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[30]: https://lunartech.ai
[31]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[32]: https://lunartech.ai
[33]: http://Hcl.fit
[34]: https://lunartech.ai
[35]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[36]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[37]: https://lunartech.ai
[38]: https://lunartech.ai
[39]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[40]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[41]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[42]: https://lunartech.ai
[43]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[44]: https://lunartech.ai
[45]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[46]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[47]: https://downloads.tatevaslanyan.com/six-figure-data-science-ebook
[48]: https://www.freecodecamp.org/news/machine-learning-handbook/
[49]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[50]: https://www.lunartech.ai/
[51]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[52]: https://www.lunartech.ai/
[53]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[54]: https://www.lunartech.ai/
[55]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[56]: https://www.youtube.com/@LunarTech_ai
[57]: https://substack.com/@lunartech
[58]: https://lens.lunartech.ai/
[59]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[60]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[61]: https://forms.fillout.com/t/frSHf9HUZCus
[62]: https://tatevaslanyan.substack.com/?source=post_page-----f9fb36a94a05--------------------------------
[63]: https://join.lunartech.ai/machine-learning-fundamentals--3f64f
[64]: https://downloads.tatevaslanyan.com/six-figure-data-science-ebook

