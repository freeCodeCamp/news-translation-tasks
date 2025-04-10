```markdown
---
title: 在 Python 中学习聚类——机器学习工程手册
date: 2025-04-10T13:33:56.435Z
author: Tatev Aslanyan
authorURL: https://www.freecodecamp.org/news/author/tatevaslanyan/
originalURL: https://www.freecodecamp.org/news/clustering-in-python-a-machine-learning-handbook/
posteditor: ""
proofreader: ""
---

想要学习如何发现和分析数据中的隐藏模式吗？聚类作为无监督机器学习中的关键技术，能够揭示出可以革新您对复杂数据集理解的宝贵洞见。

<!-- more -->

在这本全面的手册中，我们将深入探讨必须了解的聚类算法和技术，以及一些理论为其提供支撑。然后，您将通过大量示例、Python 实现和可视化来了解它们的实际运作方式。

无论您是初学者还是经验丰富的数据科学家，这本手册都是掌握聚类技术的宝贵资源。您也可以[在此下载手册。][1]

如果您也喜欢通过聆听来学习，这里有一期15分钟的播客，我们会更详细地讨论聚类。在这一集里，我们探索了聚类的基本概念，深入了解这些技术如何应用于现实数据。

<iframe width="100%" height="152" src="https://open.spotify.com/embed/episode/2O3KSW25GbqCJXl6LfUmyw" title="Spotify embed" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" loading="lazy"></iframe>

### 我们将涵盖以下内容：

1.  [无监督学习简介][2]
    
2.  [监督学习与无监督学习][3]
    
3.  [重要术语][4]
    
4.  [如何准备数据以进行无监督学习][5]
    
5.  [聚类解释][6]
    
6.  [K-均值聚类][7]
    
    -   [K-均值聚类：Python 实现][8]
        
    -   [K-均值聚类：可视化][9]
        
7.  [确定最佳聚类数的肘部法则（K）][10]
    
8.  [层次聚类][11]
    
    -   [层次聚类：Python 实现][12]
        
    -   [层次聚类：可视化][13]
        
9.  [DBSCAN 聚类][14]
    
    -   [DBSCAN 聚类：Python 实现][15]
        
    -   [DBSCAN 聚类：可视化][16]
        
10.  [如何使用 t-SNE 可视化 Python 中的聚类][17]
    
11.  [更多无监督学习技术][18]
    

### **到本书结尾，您将能够：**

1.  **理解无监督学习的基本原理**——您将掌握监督学习与无监督学习之间的关键差异，以及聚类在机器学习领域中的位置。
    
2.  **掌握重要的聚类术语**——您将熟悉基本概念如数据点、质心、距离度量和聚类评估方法。
    
3.  **为聚类准备数据**——您将学会如何处理缺失值、规范化数据集、去除异常值，并应用降维技术如 PCA 和 t-SNE。
    
4.  **深入了解聚类技术**——您将探索各种聚类方法，包括 K-均值、层次聚类和 DBSCAN，并了解何时使用每种方法。
    
5.  **在 Python 中实现 K-均值聚类**——您将学习使用 Python 应用 K-均值算法，通过肘部法则优化聚类数，并有效地可视化聚类结果。
    
6.  **应用层次聚类**——您将了解聚合和分裂聚类，学习如何构建树状图，并使用 Python 实现层次聚类。
    
7.  **使用 DBSCAN 进行基于密度的聚类**——您将掌握 DBSCAN 的聚类方法，包括其识别噪声点和任意形状簇的能力。
    
8.  **可视化聚类结果**——您将能够使用 Matplotlib、Seaborn 和 t-SNE 生成有意义的聚类结果可视化，以有效地分析和解释数据。
    
9.  **评估聚类性能**——您将学习如何使用轮廓系数、戴维森堡丁指数和卡林斯基-哈拉巴斯指数等技术评估聚类质量。
    
10.  **处理真实世界数据集**——您将获得动手经验，将聚类技术应用于真实世界数据集，包括客户细分、异常检测和模式识别。
    
11.  **扩展您在聚类之外的知识**——您将被介绍到其他无监督学习技术，如混合模型和主题建模，拓宽您在机器学习方面的专业知识。
    

通过本手册的学习，您将拥有坚实的聚类和无监督学习基础，使您能够自信地分析复杂数据集并揭示隐藏模式！

### **入门须知**

在深入学习这本关于聚类和无监督学习的手册之前，您应当对机器学习概念、数据预处理技术和基础 Python 编程技能有扎实的了解。这些先决条件将帮助您理解书中涵盖的理论基础和实际应用。
```

概念如数据点、特征、距离度量（欧几里得距离、曼哈顿距离）和相似性测量在聚类算法中发挥着重要作用。对概率、统计和线性代数的基本理解也将有所裨益，因为这些数学概念构成了许多机器学习模型的基础。

接下来，**数据预处理技术**对于处理现实世界的数据集是必不可少的。由于聚类算法在很大程度上依赖于结构良好的数据，你需要知道如何处理缺失值、对数值特征进行归一化或标准化，并去除可能扭曲聚类结果的异常值。

特征缩放技术（如最小-最大归一化、标准化）和降维方法（如PCA、t-SNE）可以提高聚类的准确性和效率，使你更容易解释结果。

最后，要跟随本手册中的实践操作，**熟练掌握Python编程和数据科学库**是必需的。你应该能够熟练使用NumPy和Pandas进行数据操作，使用Matplotlib和Seaborn进行可视化，以及使用Scikit-learn实现机器学习算法。

由于你将在应用K-均值、层次聚类和DBSCAN等聚类技术，熟悉使用Jupyter Notebooks编写和执行Python脚本，以及解释聚类输出，将提升你的学习体验。

通过在这些领域建立坚实的基础，你将做好准备释放聚类的力量，并从数据中获得更深入的见解。

## **无监督学习简介**

无监督学习是机器学习中的一种强大技术。它使我们能够在没有任何预定义标签或目标变量的情况下揭示数据中的隐藏模式和结构。与依赖于标记数据进行训练的监督学习不同，无监督学习使我们能够探索和了解无标签数据集中的固有结构。

无监督学习的一个关键应用是聚类。聚类是基于数据点的内在特征和相似性将相似的数据点分组的过程。通过识别数据集中的模式和关系，聚类帮助我们获得有价值的见解，理解复杂数据。

聚类在各种领域中意义重大，包括客户细分、异常检测、图像识别和推荐系统。它使我们能够识别数据中的不同组别，将数据分类为有意义的类别，并理解推动数据集的潜在趋势。

在接下来的章节中，我们将深入研究不同的聚类算法，如K-均值、层次聚类和DBSCAN，探索其理论、实现和可视化。到本手册结束时，你将对无监督学习有一个全面的理解，并具备将各种聚类技术应用于自己的数据分析任务的知识和技能。

请记住，聚类只是无监督学习的一个方面，它还提供了一系列其他技术和应用。那么，让我们深入探索无监督学习的激动人心的世界及其在从无标签数据中提取见解方面的强大功能。

[![监督学习与无监督学习的区别 ](https://dataexpertise.in/wp-content/uploads/2023/12/Supervised-vs.-Unsupervised-Learning-1.jpg)][19]

## 监督学习 vs. 无监督学习

在机器学习中，有两种主要的方法：监督学习和无监督学习。了解这两种方法之间的区别对于选择适合你数据分析需求的技术至关重要。

正如名字所示，监督学习涉及在标记数据上训练机器学习模型。在这种方法中，输入数据由特征（也称为属性或变量）和相应的目标值或标签组成。模型从这些标记数据中学习，并基于新的、未见过的数据进行预测或分类。

另一方面，无监督学习则完全是关于探索无标签的数据。通过无监督学习，数据没有预定义的标签或目标值。相反，算法通过自身在数据中寻找模式、结构和关系。目标是发现隐藏的见解，并更深入地理解数据的基础结构。

无监督学习的一个主要优势是其能够揭示先前未知的模式和关系。没有标记数据的限制，无监督算法可以揭示其他分析方法可能无法显现的宝贵见解。这使得无监督学习在探索性数据分析、异常检测和聚类中特别有用。

在监督学习中，目标变量为学习过程提供指导力，使模型能够做出准确的预测或分类。但这种对标记数据的依赖也可能限制模型的能力，因为它可能难以处理训练数据中不存在的未表示或新颖模式。

总之，监督学习适合用于有标签数据的任务，其目标是进行精确预测或分类。另一方面，无监督学习在探索数据中的隐藏模式和关系时非常有用，特别是在标签数据稀缺或不存在的情况下。

了解这两种方法的区别，可以有效地选择正确的技术来充分发挥数据分析工作的潜力。

## **重要术语**

要完全理解无监督学习和聚类，熟悉与这些概念相关的关键术语是至关重要的。以下是一些你应该了解的重要术语：

**1\. 数据点**

数据点是指数据集中的一个单独观察或实例。每个数据点包含描述特定对象或事件的各种特征或属性。

**2\. 聚类数量**

聚类数量表示在聚类过程中所需或估计的不同组的数量。这是一个决定所产生聚类结构的重要参数。

**3\. 无监督算法**

无监督算法是一种数学程序，用于在不需要标签或预先分类的示例的情况下识别数据中的模式或关系。这些算法探索数据集的内在结构和复杂性，以揭示隐藏的见解。

理解并使用这些术语将为你深入无监督学习和聚类奠定坚实的基础。在接下来的部分中，我们将更深入地讨论在 Python 中聚类技术的实际应用和实现。

[![图像说明了数据准备过程，从收集到清洗、转换、降维和拆分。来自《数据准备为机器学习：终极指南》| Pecan AI](https://cdn.letterdrop.co/pictures/fe3db832-862f-4a35-be7c-37231ad814bb.png)][20]

## **如何为无监督学习准备数据**

在实现无监督学习算法之前，确保数据已被合理准备是至关重要的。这涉及优化输入数据，使其适合使用聚类技术进行分析。以下是在为无监督学习准备数据时需要考虑的重要事项：

### **数据归一化**

数据准备的一个关键方面是归一化，即将所有特征缩放到一致的范围。这是必要的，因为数据集中的变量可能具有不同的单位或尺度。

归一化有助于在聚类过程中避免偏向任何特定特征。常见的归一化方法包括最小-最大缩放和标准化。

### **处理缺失值**

处理缺失值是另一个关键步骤。在应用聚类算法之前，重要的是识别并解决数据集中的任何缺失值。

处理缺失值的技术多种多样，如插补法，用基于统计方法或算法估算的值替换缺失值。

### **异常值检测和处理**

异常值可能对聚类结果产生重大影响，因为它们可以影响聚类边界的确定。因此，适当地检测和处理异常值是至关重要的。这可能涉及使用 Z 分数或四分位距（IQR）分析等技术来识别和处理异常值。

### **降维**

在某些情况下，数据集可能维度过高，意味着它包含大量特征。高维数据可能难以有效地可视化和分析。降维技术，如主成分分析（PCA），可以用于减少特征数量，同时保留数据最具信息性的方面。

通过仔细准备数据，对变量进行归一化，处理缺失值，解决异常值以及在必要时减少维度，你可以优化无监督学习算法的输入数据质量。这确保了准确且有意义的聚类结果，进而从数据中获得有价值的见解和模式。

请记住，数据准备是无监督学习过程中的一个关键步骤，为成功的聚类分析奠定基础。

[![K-均值聚类的可视化，图中的彩色数据点按照集群排列在坐标平面上。周围是说明聚类分配和质心的图示和数学公式。—— Analytics Vidhya](https://cdn.analyticsvidhya.com/wp-content/uploads/2019/08/An-Introduction-to-K-Means-Clustering-.webp)][21]

## **聚类解释**

聚类是无监督学习中的一项基本技术，对于揭示数据中的隐藏模式起着至关重要的作用。它涉及根据相似性对数据点进行分组，从而可以识别数据集中的不同子集或聚类。通过分析这些聚类的结构，我们可以获得宝贵的见解并做出数据驱动的决策。

在其核心，聚类的目标是找到数据点之间的相似性或关系，而无需任何预定义的标签或目标变量。其目标是最大化每个聚类内的相似性，同时最大化不同聚类之间的差异性。这个过程使我们能够识别数据中的模式和内在结构。

聚类可以根据距离、连接性或密度等各种因素进行定义。聚类内的每个数据点与同一聚类中的其他点，比与其他聚类中的点有更多的相似性。这种分组允许我们对数据进行分段，这在客户细分、异常检测和图像识别等各个领域中都非常有用。

### **聚类算法的类型**

有几种可用的聚类算法，每种算法都有其自身将数据划分为聚类的方法。一些流行的包括 K 均值聚类、层次聚类和 DBSCAN（基于密度的聚类噪声应用程序检测）。

#### **1\. K 均值聚类**

K 均值聚类是一种广泛使用的算法，旨在将数据划分为 K 个不同的聚类。它迭代地将每个数据点分配到最近的聚类质心，然后重新计算质心。这个过程持续到收敛，从而形成定义明确的聚类。

#### **2\. 层次聚类**

层次聚类通过根据某些标准递归地划分或合并聚类来创建聚类的层次结构。这种方法可以通过树状图表示，这对于理解聚类之间的层次结构和关系非常有帮助。

#### **3\. DBSCAN 聚类**

DBSCAN 是一种基于密度的算法，它基于数据点的密度和连接性进行分组。它特别擅长识别任意形状的聚类和处理噪声数据。

以上展示了仅仅是一些聚类算法的示例，每种算法在特定场景下都有其各自的优势和适用性。根据数据的特性和问题的领域，选择最合适的算法是很重要的。

在接下来的章节中，我们将深入探讨这些聚类算法的理论、实现和可视化，以为您提供对其工作原理及使用时机的全面理解。

记住，聚类是一种强大的技术，可以让我们解锁数据中的隐藏结构，从而导致有价值的见解和明智的决策。让我们深入探索聚类的世界，发现其潜力。

[![K 均值聚类 - 机器学习和人工智能科学](https://images.squarespace-cdn.com/content/v1/5acbdd3a25bf024c12f4c8b4/1608407348392-22767PJ7RQ85BD5RLSLZ/k-means-clustering.png)][22]

## **K 均值聚类**

K 均值聚类是一种流行的无监督学习算法，用于根据相似性将数据点划分成不同的组。在本节中，我们将深入探讨 K 均值聚类的理论，并探索使用 scikit-learn 库在 Python 中的实现。

在数据科学和数据分析中，我们通常希望为了不同的目的将观测值分类为一组**段**或**聚类**。例如，一家公司可能希望根据交易历史或购买频率将其客户群分为 3 到 5 组。这通常是一种**无监督** **学习**方法，其中标签（组/段/聚类）是未知的。

对于将观测值聚类成组来说，最流行的聚类方法之一是无监督聚类算法**K 均值**。以下是 K 均值聚类的条件：

- 需要提前指定聚类的数量：K

- 每个观测值需要属于至少一个类别

- 每个观测值只需要属于一个类别（类别之间需要是非重叠的）

- 没有一个观测值应该属于多个类别

K 均值的思想是**最小化聚类内变差和最大化聚类间变差**。因此，对于 K 均值，通过分割观测值为 K 个聚类，使得所有 K 个聚类的总聚类内变差尽可能小。

其动机是聚类观测值，使得同一组的观测值尽可能相似，而不同组的观测值尽可能不同。

在数学上，聚类内变差是基于您所选择的距离度量来定义的。例如，您可以使用欧几里得距离、曼哈顿距离等作为距离度量。

当聚类内变差最小时，K 均值聚类是最优的。C\_k 聚类的聚类内变差是一个度量 W(C\_k)，表示聚类内观测值之间的差异程度。因此，需要解决以下优化问题：

$$\\min\_{C\_1, \\dots, C\_K} \\sum\_{k=1}^{K} W(C\_k)$$

其中，使用欧几里得距离的聚类内变差可以被表达为：

$$W(C\_k) = \\frac{1}{|C\_k|} \\sum\_{i,i' \\in C\_k} \\sum\_{j=1}^{p} (x\_{ij} - x\_{i'j})^2$$

$$\\min\_{C\_1, \\dots, C\_K} \\left\\{ \\sum\_{k=1}^{K} \\frac{1}{|C\_k|} \\sum\_{i,i' \\in C\_k} \\sum\_{j=1}^{p} (x\_{ij} - x\_{i'j})^2 \\right\\}$$

### **K-Means 算法**

K-means 算法的伪代码可以描述如下：

[![Alt 文本：该图显示了 K-means 算法的伪代码，包括两个主要步骤。步骤 1：在初始条件下将每个数据点随机分配到一个聚类中。步骤 2：当聚类改变时，更新聚类的质心，并重新分配数据点，直到收敛。](https://miro.medium.com/v2/resize:fit:1400/1*0DjFFWY4tY74Z8EMXggEMA.png)][23]

K-means 是一种非确定性方法，其随机性体现在步骤 1 中，在该步骤中所有观测值被随机分配到 K 个类中的一个。

在第二步中，对于每个聚类，通过计算聚类中所有数据点的平均值来计算聚类的质心。第 _K_ 个聚类的质心是一个长度为 _p_ 的向量，包含了 _k_ 聚类中所有观测变量的均值，其中 _p_ 为变量数量。

然后，在下一步中，更新观测值的聚类，使得每个观测值被分配到最近质心的聚类中，通过迭代地最小化**总组内平方和**。也就是说，我们重复步骤 2 和 3，直到聚类的质心不再变化或达到最大迭代次数。

### **K-Means 聚类：Python 实现**

让我们来看一个例子，我们试图将观测值划分为 4 个类。原始数据看起来是这样的：

[![散点图标题为“原始数据的可视化”，显示在 X 值从 0 到 3、Y 值从 0 到 10 之间排列的绿色点](https://miro.medium.com/v2/resize:fit:1200/1*QRRqHu4MATa7piwcPHmsSA.png)][24]

```python
# 导入必要的库
# KMeans 是来自 scikit-learn 的聚类算法
from sklearn.cluster import KMeans  
# Metrics 模块用于评估聚类性能
from sklearn import metrics  
# NumPy 用于数值计算和数组操作
import numpy as np  
# Pandas 用于以结构化 DataFrame 格式处理数据
import pandas as pd  

# 为 K-Means 聚类生成合成数据
# 创建一个 100x2 的数组，包含 0 到 9 的随机整数
df = np.random.randint(0, 10, size=[100, 2])  
# 生成一个 300x1 的数组，包含 0 到 3 的随机整数
X1 = np.random.randint(0, 4, size=[300, 1])  
# 生成一个 300x1 的数组，包含 0 到 10 的随机浮点数
X2 = np.random.uniform(0, 10, size=[300, 1])  
# 将 X1 和 X2 沿第二轴组合，形成一个具有两个特征的数据集
df = np.append(X1, X2, axis=1)  

# 在生成的数据集上应用 K-Means 聚类算法
# 通过调用 KMeans_Algorithm 函数，将 K 设置为 4 个聚类
Clustered_df = KMeans_Algorithm(df=df, K=4)  
# 将聚类的数据转换为 Pandas DataFrame 格式
df = pd.DataFrame(Clustered_df)  


# 执行 K-Means 聚类的函数
def KMeans_Algorithm(df, K):
    """
    在给定数据集上执行 K-Means 聚类。

    参数：
    df (array-like): 输入的数据集进行聚类。
    K (int): 聚类的数量。

    返回：
    df (DataFrame): 原始数据集并增加一列用于表示聚类标签。
    """

    # 使用指定参数初始化 K-Means 模型
    # 将聚类数量设置为 K
    # 使用 k-means++ 初始化以改善收敛
    # 将最大迭代次数设置为 300
    # 设置固定的随机种子以确保结果可重现
    KMeans_model = KMeans(
        n_clusters=K,  
        init='k-means++',  
        max_iter=300,  
        random_state=2021  
    )

    # 在数据集上拟合 K-Means 模型
    KMeans_model.fit(df)

    # 提取聚类质心（每个聚类的中心点）
    centroids = KMeans_model.cluster_centers_

    # 将质心转换为包含列名 "X" 和 "Y" 的 DataFrame 格式
    centroids_df = pd.DataFrame(centroids, columns=["X", "Y"])

    # 获取分配给每个数据点的聚类标签
    labels = KMeans_model.labels_

    # 将输入数据转换为 Pandas DataFrame 格式（如果尚未转换）
    df = pd.DataFrame(df)

    # 添加新列以存储分配的聚类标签
    df["labels"] = labels

    # 返回包含聚类标签的更新后的 DataFrame
    return df
```

[![K-Means 聚类的 Python 代码截图。它包括导入库如 scikit-learn, numpy 和 pandas，生成合成数据，并定义一个函数以带参数和 K-Means 模型初始化执行聚类。代码处理数据集并返回带聚类标签的 DataFrame。- lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738528849086/9891484a-a8b0-45eb-a8e3-f1a76c038b73.png)][25]

这个脚本旨在生成合成数据，应用 K-Means 聚类算法，并为每个数据点分配聚类标签。K-Means 聚类算法是一种无监督机器学习方法，它根据特征空间中的接近度将相似的数据点分成聚类。下面是该脚本如何工作的逐步分解。

接下来，脚本生成合成的数值数据。一个 NumPy 数组 `df` 被创建，尺寸为 100x2，包含 0 到 9 之间的随机整数。两个额外的数组 `X1` 和 `X2` 被单独生成。`X1` 包含 300x1 的 0 到 3 的随机整数，`X2` 包含 300x1 的 0 到 10 之间的随机浮点数。这些数组然后沿第二个轴组合形成一个具有两个特征的数据集，使其就绪以进行聚类。

一旦合成数据准备完毕，脚本应用 K 均值聚类算法。`KMeans_Algorithm` 函数被调用，`K=4`，意味着算法将尝试将数据分为四个聚类。该函数返回聚类后的数据集，随后被转换为一个 Pandas DataFrame。

`KMeans_Algorithm` 函数接收两个参数：数据集 `df` 和聚类数 `K`。在此函数内部，K 均值模型通过 `KMeans()` 初始化。聚类数量被设置为 `K`，`init='k-means++'` 参数确保更好的初始化，以加速收敛。`max_iter=300` 参数限制迭代次数，防止过度计算时间。`random_state=2021` 确保结果可重复。

初始化后，K 均值模型适用于数据集，使用 `KMeans_model.fit(df)` 进行拟合。这一步处理数据集，识别聚类中心并相应地对数据点进行分组。训练完成后，聚类中心通过 `KMeans_model.cluster_centers_` 提取，然后用 "X" 和 "Y" 作为列名存储在 Pandas DataFrame 中，以便于解释。

每个数据点被分配一个聚类标签，可以通过 `KMeans_model.labels_` 获取。脚本随后确保数据集被存储为一个 Pandas DataFrame，如果还没有格式化为此形式，新列 `"labels"` 被添加以存储分配的聚类标签。最终，更新后的数据集现在包含原始特征以及聚类分配，并被返回。

此脚本的输出是一个包含三列的 Pandas DataFrame：两个代表生成数据点的数值特征列和一个指示每个数据点的聚类分配的 `"labels"` 列。例如，输出的简化视图可能显示一行，其中一个值为 `[2.0, 7.4]` 的点被分配到聚类 `0`，而另一个值为 `[1.0, 3.2]` 的点属于聚类 `1`。

此脚本成功创建了一个有结构的数据集，将数据聚类为四个不同的组，并为每个点分配了有意义的聚类标签。结果可以通过例如散点图这样的可视化技术进行进一步分析以理解聚类分布。未来的改进可能包括使用轮廓系数之类的指标评估聚类质量，或尝试不同数量的聚类以找到最优的分组。

### **K 均值聚类：可视化**

K 均值算法的一个主要优点是其在处理大型数据集时的简单性和效率。它在各种领域中被广泛使用的聚类算法，包括客户分群、图像压缩、异常检测和模式识别。

尽管其简单性，K 均值在发现数据中的内在群组结构方面非常有效，使其成为无监督学习中的重要工具。但如同任何算法，它存在一些局限性——例如对初始质心选择的敏感性以及难以检测非球形的聚类。在将 K 均值应用于真实数据集时，了解这些优缺点将有助于明智的决策。

在本节中，我们将探讨如何在 Python 中实现 K 均值聚类并可视化结果。通过逐步的代码实现，您将看到数据点如何被分组为聚类以及算法如何迭代地优化聚类分配。我们还将讨论选择最佳聚类数量的最佳实践以及如何评估聚类质量。

### 理解 K 均值算法

在深入实现之前，让我们简要理解 K 均值算法的工作原理。算法遵循以下步骤：

1.  **步骤 1：初始化** – 随机选择 K 个质心，其中 K 代表所需的聚类数量。
    
2.  **步骤 2：分配** – 根据欧几里得距离将每个数据点分配给最近的质心。
    
3.  **步骤 3：更新** – 通过取分配给每个聚类的所有数据点的均值来重新计算质心。
    
4.  **步骤 4：重复** – 重复步骤 2 和 3，直到达到收敛标准（例如，质心移动最小）。
    

```
fig, ax = plt.subplots(figsize=(6, 6))

# 对于每种标签类型的观测值从列 1 和 2 开始
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
plt.title('聚类数据的可视化')
ax.set_aspect('equal')
plt.show()
```

[![题为“聚类数据可视化”的散点图，其中四个簇用不同颜色表示：黑色表示簇1，绿色表示簇2，红色表示簇3，黄色表示簇4。黑色星星标记了网格上的质心，X轴和Y轴分别标记为-2到6和0到10。包含图例。](https://miro.medium.com/v2/resize:fit:1400/1*Isl-76ShvTNwa35Xu50yHA.png)][28]

在上图中，K-means 已将这些观测值聚类到4个组中。从可视化中可以看出，甚至图形也自然地将观测值进行聚类，这符合直觉。

### **确定最佳聚类数 (K) 的肘部法**

使用 K-means 面临的最大挑战之一就是选择聚类数。有时候这是一个业务决策，但大多数时候我们希望选择一个最佳且合理的 K 值。确定 K 的最佳值或簇数的最流行方法之一是 **肘部法**。

要使用这种方法，你需要知道什么是 **Inertia（惯性）**。惯性是样本到其最近簇中心的平方距离之和。因此，惯性或 **簇内平方和** 值指示了不同簇的凝聚程度或纯度。惯性可以描述为：

$$\\sum\\_{i=1}^{N} (x\\_i - C\\_k)^2$$

其中 N 是数据集内的样本数，C 是簇中心，k 是簇的索引。因此，惯性就是计算簇中每个样本到其簇中心的平方距离并将它们相加。

然后我们可以计算不同簇数 K 的惯性。我们可以像下图这样绘制图表，其中考虑 K = 1,2,….,10。然后从图中选择肘部发生时惯性对应的 K。在这种情况下，肘部发生在 K = 3。

[![图示 K-Means 肘部法的折线图，横轴为 1 到 9 的簇，纵轴为惯性。图中显示惯性在簇数接近 3 时急剧下降。](https://miro.medium.com/v2/resize:fit:1400/1*S9wmsHzA4nVnZ7zSi9WfLA.png)][29]

```
def Elbow_Method(df):
    inertia = []
    # 考虑 K = 1,2,...,10 作为 K
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
plt.xlabel("K: 簇的数量")
plt.ylabel("惯性")
plt.title("K-Means：肘部法")
plt.show()
```

[![显示 K-Means 聚类肘部法的代码片段。该函数计算 1 到 10 的簇数的惯性，并使用 Matplotlib 绘制结果，以识别最佳簇数。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529158688/f8c4892b-962b-416d-9795-c442b149deee.png)][30]

K-Means 是一种非确定性方法，其随机性来自步骤1，在该步骤中所有观测值被随机分配到 K 个类之一。

如你所见，K-Means 聚类提供了一种基于相似性高效且有效地对数据点进行分组的方法。通过在 Python 中实现 K-Means 算法，你可以轻松地将此技术应用于自己的数据集，并获得对数据的有价值的见解。

Python 提供了强大的工具来实现和可视化 K-Means 聚类。利用 scikit-learn 库和 matplotlib 进行可视化，你可以轻松地将 K-Means 应用于你的数据集，并从生成的簇中学到很多东西。

[![显示层次聚类中距离矩阵比较的图示。图中展示了四种方法：最小值、最大值、组均值和 Ward 方法，每个方法都用圆圈和编号点表示数据簇。](https://media.geeksforgeeks.org/wp-content/uploads/20230427165259/Distance-Matrix-in-Hierarchical--Clustering.webp)][31]

## **层次聚类理论**

另一种流行的聚类技术是层次聚类。这是另一种无监督学习技术，帮助我们将观测值聚类到不同的段中。但与 K-means 不同的是，层次聚类开始时将每个观测值视为一个独立的簇。

### **凝聚式聚类 vs. 分裂式聚类**

层次聚类主要有两种类型：凝聚式聚类和分裂式聚类。

凝聚式聚类从为每个数据点分配自己的簇开始。然后，它会根据选定的距离度量方法反复合并最相似的簇，直到形成一个包含所有数据点的簇。

这种自底向上的方法创建了一个二叉树结构，也称为树状图，其中每个节点的高度表示合并簇之间的差异度。

而分裂式聚类从包含所有数据点的单一簇开始。然后反复将簇分成更小的子簇，直到每个数据点都在自己的簇中。这个自上而下的方法生成了一个树状图，可以提供关于簇层次结构的见解。

要确定聚类或数据点之间的相似性，可以使用多种距离度量。常用的距离度量包括欧几里得距离、曼哈顿距离和余弦相似性。这些度量量化了数据点对之间的不相似性或相似性，并指导聚类过程。

在这种技术中，最初将每个数据点视为一个单独的簇。在每次迭代中，最相似或最不相似的簇合并为一个簇，这一过程持续进行，直到只剩下一个簇。因此，算法重复执行以下步骤：

- 1：识别最接近的两个簇
    
- 2：合并最相似的两个簇。
    
- 然后继续这个迭代过程，直到所有的簇都合并在一起。
    

两个簇的不相似性或相似性计算取决于我们假设的链接类型。以下是5种流行的链接选项：

- **完全链接法（Complete Linkage）：** 计算簇 K1 中的观测值与簇 K2 中的观测值之间的所有成对不相似性，然后选择其中最大的不相似性。
    
- **单一链接法（Single Linkage）：** 计算簇 K1 中的观测值与簇 K2 中的观测值之间的所有成对不相似性，然后选择其中最小的不相似性。
    
- **平均链接法（Average Linkage）：** 计算簇 K1 中的观测值与簇 K2 中的观测值之间的所有成对不相似性，然后计算这些不相似性的平均值。
    
- **质心链接法（Centroid Linkage）：** 计算簇 K1 的质心与簇 K2 的质心之间的不相似性（这通常是较不理想的链接选择，因为它可能导致大量重叠）。
    
- **Ward 法:** 通过减少每个观测值与簇中平均观测值的平方距离之和来决定聚类哪些观测值。
    

### **层次聚类的 Python 实现**

层次聚类是一种强大的无监督学习技术，可以根据数据点之间的相似性将它们分组成簇。在本节中，我们将探讨使用 Python 实现层次聚类。

以下是如何使用 Python 实现层次聚类的一个示例：

```python
import scipy.cluster.hierarchy as HieraarchicalClustering
from sklearn.cluster import AgglomerativeClustering
import numpy as np
import pandas as pd

# 为层次聚类创建数据
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

![使用库如 scipy、sklearn、numpy 和 pandas 进行层次聚类的 Python 代码截图。该代码生成随机数据，使用函数进行聚类，并输出标记的数据框。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529216677/9b71d1c5-4847-4cc3-b847-0620409119d6.png)

这段代码同时使用 Scipy 的层次聚类模块和 Scikit-learn 的凝聚聚类算法实现了层次聚类。脚本的目的是生成一个合成数据集，应用层次聚类，并将簇标签分配给数据点。

脚本的第一部分导入了必要的库。Scipy 的层次聚类模块（`scipy.cluster.hierarchy`）被导入为 `HieraarchicalClustering`，用于执行基于链接的聚类。Scikit-learn 的 `AgglomerativeClustering` 类也被导入用于实现特定类型的层次聚类。此外，NumPy 被用于数值运算和生成随机数据，而 Pandas 被用于将数据结构化为 DataFrame。

接下来，脚本生成合成的数值数据。创建了一个 100×2 的矩阵（`df`），其中包含 0 到 9 的随机整数。然后，分别创建了两个附加数据集 `X1` 和 `X2`。`X1` 包含 300 个 0 到 3 的随机整数，而 `X2` 包括 300 个 0 到 10 的随机浮点值。然后使用 `np.append()` 沿第二个轴将这两个数据集组合在一起，形成一个具有两个特征的数据集，将用于聚类。

一旦数据集准备好后，就使用 Ward 链接方法应用层次聚类，该方法最小化合并簇之间的方差。使用 `HieraarchicalClustering.linkage(df, method='ward')` 创建链接矩阵 `hierCl`，此方法用于计算层次聚类解决方案。

在生成层次聚类链接矩阵后，应用凝聚聚类将数据分组为七个簇（`n_clusters=7`）。参数 `affinity='euclidean'` 指定使用欧几里得距离作为距离度量来衡量点之间的相似性。参数 `linkage='ward'` 确保使用 Ward 法来基于最小化方差合并簇。然后使用 `Hcl.fit_predict(df)` 将模型拟合到数据集中，并为每个数据点分配一个簇标签。

总结来说，这个脚本生成了随机数据，使用 Scipy 的 linkage 方法和 Scikit-learn 的 Agglomerative Clustering 进行层次聚类，并为每个数据点分配簇标签。最终的数据集可以用于分析簇结构、可视化结果或验证聚类的有效性。

### **层次聚类：可视化**

层次聚类的一个关键优势是它能够创建一个簇的层次结构，这可以为数据点之间的关系提供宝贵的见解。

要在 Python 中可视化层次聚类，我们可以使用 Scikit-learn、SciPy 和 Matplotlib 等各种库。这些库提供了易于使用的功能和工具，方便可视化过程。

因此，在执行层次聚类之后，通常帮助可视化簇。我们可以使用各种技术进行可视化，如树状图或热图。

如上所述，树状图是一种类似树的图表，显示簇之间的层次关系。可以使用 Python 中的 Scipy 库生成。

下面是一个在 Python 中可视化树状图和聚类点的示例：

```
# 生成一个树状图以帮助确定最佳的簇数量
# 树状图可视化了层次聚类如何一步步地合并点
dendrogram = HieraarchicalClustering.dendrogram(hierCl)

# 设置树状图的标题
plt.title('Dendrogram')

# 标注 x 轴以指示观测值（数据点）
plt.xlabel("Observations")

# 标注 y 轴以显示簇之间的欧几里得距离
plt.ylabel('Euclidean distances')

# 显示树状图
plt.show()


# 使用散点图可视化聚类数据
# 每种颜色代表不同的簇

# 将属于簇 1 的所有点标绘为黑色
plt.scatter(df[df["labels"] == 0][0], df[df["labels"] == 0][1], 
            c='black', label='cluster 1')

# 将属于簇 2 的所有点标绘为绿色
plt.scatter(df[df["labels"] == 1][0], df[df["labels"] == 1][1], 
            c='green', label='cluster 2')

# 将属于簇 3 的所有点标绘为红色
plt.scatter(df[df["labels"] == 2][0], df[df["labels"] == 2][1], 
            c='red', label='cluster 3')

# 将属于簇 4 的所有点标绘为品红色
plt.scatter(df[df["labels"] == 3][0], df[df["labels"] == 3][1], 
            c='magenta', label='cluster 4')

# 将属于簇 5 的所有点标绘为紫色
plt.scatter(df[df["labels"] == 4][0], df[df["labels"] == 4][1], 
            c='purple', label='cluster 5')

# 将属于簇 6 的所有点标绘为黄色
plt.scatter(df[df["labels"] == 5][0], df[df["labels"] == 5][1], 
            c='y', label='cluster 6')

# 将属于簇 7 的所有点标绘为黑色
plt.scatter(df[df["labels"] == 6][0], df[df["labels"] == 6][1], 
            c='black', label='cluster 7')

# 显示用于标示每个簇的图例
plt.legend()

# 标注表示特征 1（第一维）的 x 轴
plt.xlabel('X')

# 标注表示特征 2（第二维）的 y 轴
plt.ylabel('Y')

# 设置散点图的标题
plt.title('Hierarchical Clustering')

# 显示聚类散点图
plt.show()
```

![一个用于在 Python 中可视化层次聚类的代码片段。它包括生成树状图和创建散点图用于表示簇，每个簇用不同颜色表示。 X 和 Y 轴有标签，并设置了图表标题以使之清晰。代码使用了 Matplotlib 的功能。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529338003/d04605b0-8c9e-46d9-8aac-0f62dc0a67d3.png)

以下是一个在 Python 中可视化层次聚类的分步指南：

**步骤 1：预处理数据**

在可视化层次聚类之前，非常重要的是通过缩放或标准化来预处理数据。这确保了所有特征有相似的范围，并防止偏向特定特征。

**步骤 2：执行层次聚类**

接下来，我们使用选择的算法执行层次聚类，如 Scikit-learn 的 AgglomerativeClustering。该算法计算数据点之间的相似性，并根据特定的链接标准将它们合并成簇。

**步骤 3：创建树状图**

我们可以使用 SciPy 库的树状图函数来创建此可视化。树状图允许我们可视化簇之间的距离和关系。

**步骤 4：绘制簇**

最后，我们可以使用散点图或其他合适的可视化技术绘制簇。这有助于我们可视化每个簇内的数据点，并深入了解每个簇的特征。

![一个树状图显示了观察值的层次聚类与欧几里得距离。图表标有簇编号，分支使用蓝色、绿色和橙色显示。 - lunartech.ai](https://miro.medium.com/v2/resize:fit:1400/1*wIrFoLxUBv-8Y_cuskgukQ.png)

此树状图可帮助我们决定可以更好使用的簇的数量。如您所见，在这种情况下，我们似乎应该使用 7 个簇。

通过在 Python 中可视化分层聚类，我们可以更好地理解数据的结构和关系。这种可视化技术在处理复杂数据集时特别有用，可辅助决策过程和模式发现。

请记住，根据您的数据集和目标调整特定参数和设置。尝试不同的可视化和技术可能会进一步深入了解您的数据。

## **DBSCAN 聚类理论**

DBSCAN（基于密度的应用噪声的聚类）是一种用于聚类分析的无监督学习算法。它在识别任意形状的簇和处理噪声数据方面特别有效。

与 K-Means 或分层聚类不同，DBSCAN 不需要预先指定簇的数量。相反，它基于数据的密度和连通性来定义簇。

### **DBSCAN 的工作原理:**

**基于密度的聚类**：DBSCAN 将彼此靠近并具有足够数量的邻居的数据点分组在一起。它将数据点的密集区域识别为簇，并将稀疏区域分割为噪声。

**核心点、边界点和噪声点**：DBSCAN 将数据点分类为三种类型：核心点、边界点和噪声点。

-   核心点：在指定距离（由 `eps` 参数定义）内具有最少数量邻居点（由 `min_samples` 参数定义）的数据点。
    
-   边界点：位于核心点的 `eps` 距离内但没有足够邻居点的核心点的数据点。
    
-   噪声点：既不是核心点也不是边界点的数据点。
    

**可达性和连通性**：DBSCAN 使用可达性和连通性的概念来定义簇。如果一个数据点可以通过核心点路径到达另一个数据点，则认为它是可达的。如果两个数据点是可达的，它们属于同一簇。

**簇的扩展**：DBSCAN 从任意数据点开始，通过检查其邻居及其邻居来扩展簇，形成数据点的连通组。

### **DBSCAN 聚类的优点:**

-   **检测复杂结构的能力**：DBSCAN 可以发现各种形状和大小的簇，使其非常适合具有非线性关系或不规则模式的数据集。
    
-   **对噪声的鲁棒性**：DBSCAN 有效地处理噪声数据，通过将噪声点与簇分开。
    
-   **自动确定簇的数量**：DBSCAN 不需要预先指定簇数，使其更加方便和适应不同的数据集。
    
-   **适应大型数据集**：与某些其他聚类算法相比，DBSCAN 的时间复杂度相对较低，因此可以很好地扩展到大型数据集。
    

在下一节中，我们将深入研究如何在 Python 中实现 DBSCAN 算法，并提供分步指导和示例。

### **DBSCAN 聚类: Python 实现**

在本节中，我将指导您如何使用 Python 实现 DBSCAN。

#### DBSCAN 聚类的关键步骤

1.  **准备数据**：在应用 DBSCAN 之前，重要的是对数据进行预处理。这包括处理缺失值、规范化特征和选择合适的距离度量。
    
2.  **定义参数**：DBSCAN 需要两个主要参数：epsilon (ε) 和最小点数 (MinPts)。epsilon 决定将两个点视为邻居的最大距离，MinPts 指定形成一个密集区域所需的最小点数。
    
3.  **执行基于密度的聚类**：DBSCAN 从随机选择一个数据点开始，并识别其在指定 epsilon 距离内的邻居。如果邻居数量超过 MinPts 阈值，则形成一个新簇。算法通过迭代添加新点来扩展簇，直到无法再到达更多点。
    
4.  **进行噪声检测**：不属于任何簇的点被视为噪声或异常。这些点不分配给任何簇，可能在识别数据异常时起到关键作用。
    

为了在 Python 中执行 DBSCAN 聚类，我们可以使用 scikit-learn 库。第一步是导入必要的库并加载我们要聚类的数据集。然后，我们可以创建一个 DBSCAN 类的实例，并设置 epsilon (eps) 和最小样本数 (min_samples) 参数。

以下是入门的示例代码片段：

```
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

[![紫色背景上的代码片段说明了如何使用 DBSCAN 聚类算法。它导入了 numpy 和 matplotlib 等库，生成了一些示例数据，并应用了设置的参数进行DBSCAN操作。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529451227/4b01ac7c-a9f9-4666-8fe5-e457a18ad160.png)][37]

DBSCAN 相较于其他聚类算法有着多种优势，比如它不需要事先定义簇的数量。这使得它适用于簇数量未知的数据集。DBSCAN 还能够识别出不同形状和大小的簇，使其在捕捉复杂结构时更具柔性。

但 DBSCAN 可能在处理具有不同密度的数据集时表现不佳，并且对选择 epsilon 和最小点数参数较为敏感。对这些参数进行精细调整以获得最佳聚类结果是非常重要的。

通过在 Python 中实现 DBSCAN，你可以利用这一强大的聚类算法揭示数据中的有意义的模式和结构。

在我们探讨 DBSCAN 与其他聚类技术的区别之前，让我们仔细看看影响 DBSCAN 性能和结果的关键参数。

### 理解 DBSCAN 的关键参数

**eps**（epsilon）参数定义了两点之间的最大距离，以便将其中一个点视为另一个点的邻居。这意味着处于核心点该半径内的点属于同一簇。选择适当的 eps 值至关重要，因为过小的 eps 可能会导致过多的小簇，而过大的 eps 则可能将不同的聚合合并为一体。

**min\_samples** 参数决定了形成稠密区域所需的最小数据点数。如果某点在 eps 半径内至少有 min\_samples 个邻居，则它被分类为 **核心点**。如果某点在 eps 半径内属于一个核心点但自身不满足 min\_samples 阈值，则它被分类为 **边界点**。任何既不是核心点也不是边界点的点都被标记为噪声或离群点。

### DBSCAN 如何对数据点进行分组

DBSCAN 通过识别核心点并围绕它们扩展聚类来操作。它根据密度将紧密包装的点（或簇）聚在一起，并将低密度点标记为离群点（或噪声）。其过程遵循以下步骤：

1.  **选择一个未访问的点**并检查其在 `eps` 半径内是否有至少 `min_samples` 个邻居。
    
2.  如果是，该点成为一个 **核心点**，并在其周围形成一个新的簇。
    
3.  **扩展簇**，添加所有在 `eps` 范围内直接可达的点。如果这些点中也有核心点，则其邻居也加入。
    
4.  **继续扩展**，直到没有更多满足密度条件的点。
    
5.  **转到下一个未访问的点**并重复此过程。
    
6.  **将剩余的点分类**为边界点（簇的一部分但不是核心点）或噪声（不属于任何簇的离群点）。
    

### DBSCAN 实现示例

在这个实现中：

-   `eps=0.3`：定义点应该多接近才被认为是邻居。
    
-   `min_samples=5`：设置形成稠密区域所需的最小点数。
    
-   `fit_predict(X)`：为每个数据点分配一个簇标签。
    

应用 DBSCAN 后，数据点被分配标签。如果两个点属于同一簇，它们在 `y_db` 中将具有相同的标签。被识别为离群点的点将被标记为 `-1` 并保持未聚类状态。

生成的散点图形象地展示了 DBSCAN 如何识别出两个新月形簇。与假设簇为球形的 K-Means 不同，DBSCAN 能够有效地检测任意形状的簇。

```
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

![Python 代码截图，用于用 Matplotlib 绘制散点图。该代码定义了两个不同颜色和标记的簇、添加图例并显示图像。- lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529515628/a5c2861e-1263-4cad-84f2-9e026261942f.png)

![散点图显示两个簇：簇 1 为绿色圆形成的上方曲线，簇 2 为红色方块形成的下方曲线。图片来源：作者](https://miro.medium.com/v2/resize:fit:1400/1*ymoTCnR3H-WBs8ShoTrYNg.png)

结果图将展示两个绿色和红色的新月形簇，显示 DBSCAN 成功识别并分隔了两个交错的半圆。

![插图展示了未标记数据点被聚类为两个不同分组在不同图表上。一个火柴人询问，“如何在没有标签的情况下评估这些？” - lunartech.ai](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9a97d1f6-3c00-4493-b430-1d8e3cb8d270_3327x1350.png)

## **如何评估聚类算法的表现**

评估聚类模型的表现可能会有挑战，因为在无监督学习中没有可用的真实标签。但有几种评估指标可以提供关于聚类结果质量的见解。

我建议您结合使用评估指标和可视化评估来全面评估聚类模型的性能。

## **K-Means、层次聚类和 DBSCAN 之间的区别**

K-Means、层次聚类和 DBSCAN 是三种广泛使用的聚类算法，它们在分组数据点方面各有不同的方法。理解它们的差异在根据数据特征和分析目标选择最合适的方法时至关重要。

### **K-Means 聚类**

K-Means 聚类是一种基于质心的算法，根据相似性将数据划分为 K 个簇。该算法开始时通过随机初始化 K 个质心，然后迭代地将每个数据点分配给最近的质心。当所有数据点都被分配后，质心根据每个簇内的点的均值重新计算。这个过程会持续进行直到达到收敛。

#### **K-Means 聚类的优点：**

-   对于大型数据集，效率高且具有可扩展性。
    
-   在簇是球形并均匀分布时表现良好。
    
-   与层次聚类相比，计算速度更快。
    
-   实现和解释都比较容易。
    

#### **K-Means 聚类的缺点：**

-   需要提前指定簇的数量（K）。
    
-   对初始质心位置敏感，导致结果可能不同。
    
-   假设簇大小相等且为球形，这并不总是正确的。
    
-   难以处理异常值和非线性形状的簇。
    

### **层次聚类**

层次聚类创建一个嵌套的簇层次结构，而不需要预定义簇的数量。它开始时将每个数据点视为一个单独的簇，然后根据相似性逐渐合并或分裂簇。结果通常使用树状图进行可视化，这有助于确定最佳簇数。

#### **层次聚类的优点：**

-   **不**需要预先指定簇的数量。
    
-   捕捉簇之间的层次关系。
    
-   可以处理不同类型的数据，包括数值和类别数据。
    
-   对于探索性分析有用，通过树状图提高可解释性。
    

#### **层次聚类的缺点：**

-   对于大型数据集来说计算成本高（复杂度为 O(n²)）。
    
-   由于内存限制，处理大量数据时难以扩展。
    
-   选择树状图的正确切割点可能具有挑战性。
    
-   对噪声和异常值敏感，会扭曲层次结构。
    

### **DBSCAN（基于密度的空间聚类算法，具有噪声）**

DBSCAN 是一种基于密度的聚类算法，它根据数据点的接近性和密度进行分组，而不是预定义簇。与 K-Means 和层次聚类不同，DBSCAN 不需要指定簇的数量。相反，它使用两个关键参数：eps（两个点之间被认为是邻居的最大距离）和 min_samples（形成高密度簇所需的最小点数）。不满足这些标准的点被分类为噪声。

#### **DBSCAN 的优点：**

-   不需要提前指定簇的数量。
    
-   可以检测任意形状的簇，而 K-Means 假设是球形簇。
    
-   有效处理异常值，将其标记为噪声而不是强行分入某个簇。
    
-   适用于具有不同密度和非线性结构的数据集。
    

#### **DBSCAN 的缺点：**

-   难以处理不同密度的簇，因为单个 eps 值可能不适合所有簇。
    
-   对参数调优（eps 和 min_samples）较为敏感，可能影响聚类性能。
    
-   对高维数据不理想，因为欧氏距离在高维空间中失去意义。
    
-   对非常大的数据集可能有困难，尽管相比层次聚类有更好的扩展性。
    

### **选择合适的聚类算法**

| 特征 | K-Means | 层次聚类 | DBSCAN |
| --- | --- | --- | --- |
| **簇形状** | 假设为球形簇 | 适用于层次结构 | 可处理任意形状簇 |
| **可扩展性** | 非常可扩展（大型数据集速度快） | 不可扩展（复杂度为 O(n²)） | 中等可扩展（对非常大数据集可能有困难） |
| **簇的数量** | 必须预定义 | 无需指定 | 无需指定 |
| **异常值处理** | 糟糕 | 对噪声敏感 | 良好，将异常值检测为噪声 |
| **计算复杂度** | O(n) 到 O(n log n) | O(n²) | O(n log n) |
| **可解释性** | 结果易于解释 | 树状图提供良好洞察 | 较不直观，需参数调优 |

每种聚类算法都有其优缺点。**K-Means** 在处理大型数据集且簇为球形且分离良好时表现出色。**层次聚类** 在存在层次关系或簇的数量未知时很有用。**DBSCAN** 在检测任意形状的簇和处理噪声方面表现出色，但需要仔细调优参数。

[![t-SNE 可视化，困惑度为 50，显示数据点的聚类。标记的聚类点显示了不同年份、评分和电影类型，如浪漫、惊悚、动作和冒险。 - lunartech.ai](https://miro.medium.com/v2/resize:fit:1400/1*HpMauXQZe0ByFFSHs4wNLw.png)][41]

## **如何使用 t-SNE 和 Python 可视化聚类**

在应用 K-Means、层次聚类和 DBSCAN 之类的聚类算法之后，您通常希望将结果的聚类进行可视化，以便更好地理解底层数据结构。

虽然散点图对于二维或三维数据集效果不错，但现实世界的数据集通常包含高维特征，难以进行视觉解释。

为了解决这个问题，您可以使用降维技术，例如 **t-SNE** （t-分布随机邻域嵌入），将高维数据投射到低维空间，同时保留其结构。这使您能够更有效地可视化聚类并识别在原始数据中不易察觉的隐藏模式。

在本节中，我们将探索 t-SNE 的理论及其在 Python 中的实现。

### **理解 t-SNE**

t-SNE 由 Laurens van der Maaten 和 Geoffrey Hinton 于 2008 年提出，作为一种可视化复杂数据结构的方法。它旨在在低维空间中表示高维数据点，同时保留数据点之间的局部结构和成对相似性。

t-SNE 通过模拟高维空间和低维空间中数据点之间的相似性来实现这一目标。

### **t-SNE 算法**

t-SNE 算法按以下步骤进行：

1.  计算高维空间中数据点之间的成对相似性。通常使用高斯核基于数据点之间的欧几里得距离来衡量相似性。
    
2.  随机初始化低维嵌入。
    
3.  定义一个代价函数，表示高维空间和低维空间中数据点之间的相似性。
    
4.  使用梯度下降优化代价函数，以最小化高维和低维相似性之间的差异。
    
5.  重复步骤 3 和 4，直到代价函数收敛。
    

借助 scikit-learn 等库，在 Python 中实现 t-SNE 相对简单。scikit-learn 库为应用 t-SNE 到您的数据提供了用户友好的 API。通过遵循 scikit-learn 文档和示例，您可以轻松地将 t-SNE 集成到您的机器学习流程中。

### **二维 t-SNE 可视化**

```
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.manifold import TSNE

# 导入数据集
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

[![Python 代码片段，使用 Matplotlib 和 scikit-learn 可视化数字数据集的 t-SNE 转换。代码加载数据集，应用 t-SNE，并在二维平面上绘制结果。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529609503/e4a5dac2-0c31-4e9c-b8cd-9d243736ee67.png)][42]

[![散点图，显示数字数据集的 t-SNE 可视化。彩色点的集群表示不同的数字，颜色从深红到浅蓝，与数字 0 到 9 对应。右侧的颜色条指示每种颜色代表的数字。 - lunartech.ai](https://miro.medium.com/v2/resize:fit:1400/1*vFccfsJFgXl3rulHs93MKA.png)][43]

在这个例子中：

1.  我们加载 `digits` 数据集。
    
2.  我们应用 t-SNE 将数据从 64 维（因为每张图像是 8x8）减少到 2 维。
    
3.  然后我们绘制变换后的数据，按其实际数字标签为每个点着色。
    

结果可视化将显示出集群，每个集群对应于其中一个数字（0 到 9）。这有助于理解不同的数字在原始高维空间中的分离程度。

### **可视化高维数据**

t-SNE 的主要优势之一是能够将高维数据可视化为低维空间。通过降低数据的维度，t-SNE 使我们能够识别在原始高维空间中可能看不出的聚类和模式。由此产生的可视化可以提供有关数据结构的宝贵见解，并有助于决策过程。

```
import matplotlib.pyplot as plt
from sklearn import datasets
from sklearn.manifold import TSNE
from mpl_toolkits.mplot3d import Axes3D

# 导入数据集
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

[![一个使用 Python 的代码片段，使用 matplotlib、sklearn 和 mpl_toolkits.mplot3d 等库。它加载数字数据集，应用 t-SNE 进行降维，并在三维平面上可视化结果。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1738529676545/772f6b94-655b-4ae3-bdb5-a5334442c970.png)][44]

在这个修订的代码中：

1.  我们为 t-SNE 设置 `n_components=3` 以获得三维变换。
    
2.  我们使用 `mpl_toolkits.mplot3d.Axes3D` 创建一个三维散点图。
    

执行此代码后，您将看到一个三维散点图，其中的点是基于其 t-SNE 坐标的位置，并根据其实际数字标签着色。

旋转三维可视化可以帮助我们更好地理解数据点的空间分布。

[![数字数据集的 t-SNE 投影的三维散点图。数据点是各种颜色的集群，代表不同的数字。右侧的颜色条显示从 0 到 9 的数值。](https://miro.medium.com/v2/resize:fit:1400/1*aw8wAIvC2CXwXO7Ixjy1JQ.png)][45]

t-SNE 是一个强大的工具，用于降维和高维数据的可视化。通过利用其能力，您可以深入理解复杂数据集，并发现一些在原数据中不明显的隐藏模式。借助其 Python 实现和易用性，t-SNE 是任何数据科学家或机器学习从业者的宝贵资源。

![显示 iris 物种中花萼宽度、花萼长度、花瓣宽度和花瓣长度之间关系的散点矩阵图：setosa（蓝色），versicolor（红色）和 virginica（绿色）。 - lunartech.ai](https://cdn.hashnode.com/res/hashnode/image/upload/v1741790800643/da4e7d4f-4030-4b8a-9dc1-d8cb669a4bbb.gif)

## **更多无监督学习技术**

除了我们在这里讨论的聚类技术外，还有其他一些重要的无监督学习技术值得探索。虽然我们不会在这里详细讨论它们，但让我们简单提到其中的两种技术：混合模型和主题建模。

### **混合模型**

混合模型是用于建模复杂数据分布的概率模型。它们假定整个数据集可以描述为多个底层子群体或成分的组合，每个子群体或成分由其自己的概率分布描述。

在数据点不清楚地属于不同聚类并可能表现出重叠特征的情况下，混合模型特别有用。

### **主题建模**

主题建模是一种用于从文档集合中提取底层主题或话题的技术。它使您能够探索和发现文本数据中的潜在语义模式。

通过分析单词在文档中的共现并识别常见主题，主题建模能够自动进行大型文本数据集的分类和总结。此技术在自然语言处理、信息检索和内容推荐系统等领域中有应用。

虽然这些技术超出了本手册的讨论范围，但它们是揭示隐藏模式和从数据中获得洞察的有价值的工具。

记住，掌握无监督学习需要不断学习和实践。通过熟悉上述不同技术，您将能够应付各种领域的数据分析问题。

## **常见问题解答**

### **问：监督学习和无监督学习之间的区别是什么？**

监督学习涉及在带标签的数据上训练模型，其中输入与相应的输出配对。目标是为新的、未见过的输入预测输出。

相比之下，无监督学习处理无标签的数据，目标是在没有任何预定义输出的情况下发现数据中的模式、结构或聚类。

本质上，监督学习旨在学习映射函数，而无监督学习专注于发现数据中的隐藏关系或分组。

### **问：哪个聚类算法最适合我的数据？**

聚类算法的适用性取决于各种因素，例如数据的性质、所需的聚类数量以及您试图解决的特定问题。

在本手册中，我们讨论了三种常用的聚类算法：

-   **K-means** 是一种流行的算法，旨在将数据分成 K 个聚类，每个数据点被分配到最近的质心。它对均匀分布的球形聚类效果很好，需要提前指定聚类的数量。
    
-   **层次聚类** 通过迭代地合并或拆分聚类来构建一个聚类层次。它提供一个树状图来可视化聚类过程，并且可以处理不同形状和大小的聚类。
    
-   **DBSCAN** 是一种基于密度的算法，将彼此接近的数据点分组并分离离群值。它可以发现任意形状的聚类，并且事先不需要知道聚类的数量。
    

要确定最适合您使用案例的算法，我建议您尝试不同的技术，并根据聚类质量、计算效率和可解释性等指标评估它们的性能。

### **问：无监督学习可以用于预测分析吗？**

虽然无监督学习主要关注在没有特定输出标签的情况下发现数据中的模式和关系，但它可以间接支持预测分析。通过揭示数据中的隐藏结构和聚类，无监督学习可以提供启发，从而提高特征工程、异常检测或分段，进而增强预测模型的性能。

无监督学习技术如聚类可以帮助识别数据中的不同组或模式，可作为预测模型的输入特征或生成新预测变量的基础。因此，无监督学习通过加深对数据的理解并提高预测模型的准确性和有效性，在预测分析中扮演着重要角色。

## **数据科学和AI资源**

想了解更多关于数据科学、机器学习和人工智能（AI）事业以及如何获得数据科学职位的知识吗？您可以下载[免费的数据科学和AI职业手册][46]。

想从头学习机器学习或刷新记忆吗？下载[免费的机器学习基础手册][47]，在一个地方将所有机器学习基础和 Python 示例结合在一起。

## **关于作者**

[**Tatev Aslanyan**][48] 是一位资深机器学习和人工智能工程师，CEO 及 [**LunarTech**][49] 的联合创始人，该公司致力于在全球范围内普及数据科学和 AI。Tatev 在 AI 工程和数据科学领域拥有超过 6 年的经验，她曾在美国、英国、加拿大和荷兰工作，运用她的专业知识推动各个行业的 AI 解决方案发展。

Tatev 拥有荷兰顶级大学的[经济计量学和运筹学的硕士和学士学位][50]，并在自然语言处理、机器学习和推荐系统方面发表多篇科学论文，刊登在美国备受尊敬的科学期刊中。

作为顶级开源贡献者，Tatev 合著了包括**freeCodeCamp for 2024** 在内的课程和书籍，并在教育 **144 个国家的 30,000 多名学习者**方面发挥了关键作用，通过 [**LunarTech** 的课程][52]。

[LunarTech][53] 是一家深度科技创新公司，致力于构建 AI 驱动的产品并提供教育工具，以帮助企业和个人实现创新、降低运营成本并提高盈利能力。

## **与我们联系**

-   [在 LinkedIn 上与我联系][54]
    
-   [查看 YouTube 频道][55]
    
-   订阅 [**LunarTech 新闻通讯**][56] 或 [**LENS**][57] - 我们的新闻频道
    

想探索数据科学、机器学习和 AI 事业的一切，并学习如何获得数据科学职位？下载这本免费的数据科学和 AI 职业手册。

感谢您选择本指南作为您的学习伴侣。希望您在继续探索广阔的人工智能领域时满怀信心、精确和创新精神。

## **LunarTech 的 AI 工程训练营**

如果您决心成为一名 AI 工程师，并希望通过一个结合深度理论和实践操作的全方位训练营来实现目标，那么请查看[**以生成式 AI 为重点的 LunarTech AI 工程训练营**][58]。这是一个全面而高级的 AI 工程课程，旨在为您在最具竞争力的 AI 角色和行业中取得成功提供必要的知识。

<iframe width="560" height="315" src="https://www.youtube.com/embed/g6KQHEeZVQY" style="aspect-ratio: 16 / 9; width: 100%; height: auto;" title="YouTube 视频播放器" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="" loading="lazy"></iframe>

只需 3 到 6 个月的自行步调或基于小组的学习，您将学习生成式 AI 和基础模型，如 VAEs、GANs、transformers 和 LLMs。深入了解数学、统计学、架构以及使用 PyTorch 和 TensorFlow 等行业标准框架训练这些模型的技术细节。

课程内容包括大模型的预训练、微调、提示工程、量化和优化，以及检索增强生成等尖端技术。

此训练营帮助您弥合研究与实际应用之间的差距，使您能够设计出有影响力的解决方案，同时建立一个充满高级项目的卓越作品集。

该项目还优先考虑 AI 伦理，帮助您创建与负责 AI 原则一致的可持续、合乎道德的模型。这不仅仅是一个课程，而是一个全面的旅程，旨在让您成为AI革命的领导者。[在此查看课程内容][59]

名额有限，对高技术 AI 工程师的需求比以往更高。不要等待，您的 AI 工程未来现在开始。您可以[在此申请][60]。

> _“让我们一起构建未来！” - Tatev Aslanyan，LunarTech 的 CEO 和联合创始人_

## [**数据科学和 AI 通讯 | Tatev Karen | Substack**][61]

想从头学习机器学习或刷新记忆？下载此[**免费的机器学习基础手册**][62]

想探索数据科学、机器学习和 AI 事业的一切，并学习如何获得数据科学职位？下载此[**免费的数据科学和 AI 职业手册**][63]。

感谢您选择本指南作为您的学习伴侣。希望您在继续探索机器学习的广阔领域时满怀信心、精确和创新精神。祝愿您在未来的所有努力中取得成功！

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
[46]: https://downloads.tatevaslanyan.com/six-figure-data-science-ebook
[47]: https://www.freecodecamp.org/news/machine-learning-handbook/
[48]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[49]: https://www.lunartech.ai/
[50]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[51]: https://www.lunartech.ai/
[52]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[53]: https://www.lunartech.ai/
[54]: https://www.linkedin.com/in/tatev-karen-aslanyan/
[55]: https://www.youtube.com/@LunarTech_ai
[56]: https://substack.com/@lunartech
[57]: https://lens.lunartech.ai/
[58]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[59]: https://www.lunartech.ai/bootcamp/ai-engineering-bootcamp
[60]: https://forms.fillout.com/t/frSHf9HUZCus
[61]: https://tatevaslanyan.substack.com/?source=post_page-----f9fb36a94a05--------------------------------
[62]: https://join.lunartech.ai/machine-learning-fundamentals--3f64f
[63]: https://downloads.tatevaslanyan.com/six-figure-data-science-ebook

