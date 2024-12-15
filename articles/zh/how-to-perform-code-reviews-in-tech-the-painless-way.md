--- 
title: 如何在技术领域进行代码审查
date: 2024-12-12T14:09:30.751Z 
author: Ankur Tyagi 
authorURL: https://www.freecodecamp.org/news/author/TheAnkurTyagi/ 
originalURL: https://www.freecodecamp.org/news/how-to-perform-code-reviews-in-tech-the-painless-way/ 
posteditor: "" 
proofreader: "66" 
--- 
 
好的，我知道你可能会怀疑：其他指南曾承诺过无痛的 `代码审查`，但结果却发现他们的解决方案需要某些超具体的技术栈或付费的开发者工具。我不会那样对待你。 
 
<!-- more --> 
 
本指南提供了一个简单灵活的 `代码审查` 模板，你可以将其应用到你的工程团队中。唯一的要求是你的应用程序代码是 `开源` 的。 
 
你可以尝试 TypeScript 工作流、Java 工作流、Python 工作流、PHP、Ruby 甚至你发明的一些令人称奇的 web 栈。而且不管你是在 Windows、Linux 还是 Mac 上开发，这都无关紧要。最棒的是，除了一个 `yaml` 文件，你不需要进行复杂的配置或安装软件。 
 
在过去的 15 年里，我一直从事工程工作，而 `代码审查` 的声誉不太好。我们都见过或经历过一些可怕的经历，有时感觉每一行代码都被撕得粉碎。 
 
那么，你可以做些什么不同的事情呢？你如何让代码审查变得无痛，以至于团队中最大的吹毛求疵者也无从挑剔？ 
 
在参与代码审查的十年间，少把代码审查看作个人的问题是你能提升代码的**最重要的事情**。为什么？因为所有软件都是迭代的。即使是“完美”的代码最终也会变得过时。与其将其视为一个评分的作业，不如将其视为流程的一部分。 
 
## **目录:** 
 
-   [先决条件][1] 
     
-   [什么是代码审查？][2] 
     
-   [代码审查的目的是什么？][3] 
     
-   [为什么进行代码审查很难？][4] 
     
-   [人工智能可以取代代码审查吗？][5] 
     
-   [代码审查期间关注的重点][6] 
     
-   [代码审查的最佳实践和流程][7] 
     
-   [什么是 CodeRabbit？][8] 
     
    -   [CodeRabbit 如何提供帮助？][9] 
         
    -   [要测试的 GitHub 仓库][10] 
         
    -   [更多示例][11] 
         
-   [结论][12] 
     
 
## **先决条件** 
 
本教程使用免费开源的工具。你需要有一个 [GitHub 账号][13]帮助你使代码审查更愉快和有价值。 
 
## **什么是代码审查？** 
 
“[代码审查][14]”这个术语可以指代各种活动，从简单地在你的队友肩膀上查看代码，到十人会议中逐行拆解代码。我使用这个术语来指代正式的书面流程，但没有一系列面对面的代码检查会议那么繁重。 
 
在一个你和其他开发人员在同一个代码仓库上协作的项目中，当你完成自己的工作后，你提交、推送并在版本控制系统上创建一个拉取请求，最可能使用 Git 命令。然后，每个人都会审查这个拉取请求，以确定是否可以使用。如果可以，他们就批准它，并且那段代码就会被用于项目中。 
 
## **代码审查的目的是什么？** 
 
代码审查是一个_知识转移_的工具。它们帮助开发者在维护他们没有编写的系统部分时更高效。 
 
当你审查一个拉取请求时，这是一个在问题成为技术债务之前解决问题的机会。 
 
代码审查也可以是指导初级开发人员的好场所。 
 
现在，让我们讨论一下代码审查**不**是为了什么： 
 
-   查找漏洞。这是测试（单元、集成、端到端、API 等等……）的职责。 
 
对风格问题的吹毛求疵 —— 定下一种风格，使用格式化工具或人工智能工具来执行。只需记住，有很多事情是人工智能工具无法检查的。代码审查是确保代码文档充分或自我记录的绝佳地方。 
 
想知道你如何检查这个吗？回到你 6-12 个月前写的代码，试图理解它的用途。 
 
如果你能快速理解，那意味着它是可读的，并且代码审查做得适当且有帮助。 
 
## 为何做**代码审查**很难？ 
 
尽管很重要，许多开发者并不喜欢进行代码审查 —— 部分原因是它们可能具有挑战性，尤其是在你没有遵循最佳实践的情况下。 
 
这些是在我参与代码审查的几年中观察到的一些痛点： 
 
-   当人们谈论代码审查时，他们往往关注审查者。但编写代码的开发者与阅读代码的人对审查一样重要。 
     
-   进行代码审查不是开发人员的一种自动化例行工作。 
     
-   审查者有时可能只进行部分审查，并在每次通过时添加新评论，即使是在先前审查中未触及的代码上。 
     
-   有时，代码审查者可能未能清楚表达他们的期望。 
     
-   多个代码审查者的意见可能经常产生分歧，导致讨论时间过长。 
     
-   开发者不理解审查者的评论，需要进行反复讨论。 
     
-   开发者在解决代码审查意见时，与审查过程中达成的共识不同。 
     
``` 
 
 
让我们探讨一下 AI 驱动的工具如何结合最佳实践，解决这些审查挑战并优化您的开发工作流程。 
 
## **AI 能否取代代码审查？** 
 
尽管 AI 并没有取代人工代码审查，但它在审查过程中是一个强大的倍增器。 
 
方法如下：AI 代码审查作为初步筛选工具非常出色，在人类审查员看到代码之前就能发现常见问题。这在维护者可用带宽有限的开源项目中尤为有价值。 
 
我最近开始依据具体情况，在自己的项目中使用 AI 代码审查。 
 
AI 工具改善了我现有的工作流程，通过及早检测逻辑错误来降低失败率，并提高了生产力。因此，我将它添加到了我的 CI/CD 流水线中。它不必在检测逻辑错误上完美无瑕，只要误报率非常低（理想情况下尽可能接近 0）即可。 
 
最重要的是，AI 审查遵循“珍惜审查者的时间”这一黄金法则，处理例行检查。这使得人类审查员可以专注于架构、业务逻辑和复杂的边缘案例。 
 
这种方法将 AI 定位为一种补充工具，增强而非取代人类在代码审查过程中的专长。 
 
## 代码审查中应关注的重点 
 
在审查代码时，请尝试利用代码审查金字塔来优先考虑最重要的内容。这是一个帮助您将注意力集中在最有价值部分的框架。 
 
将其想象为建造房屋——先从地基开始，再去考虑油漆颜色。 
 
金字塔有五层，从最关键（底部）到最不重要（顶部）： 
 
1.  **API 语义**：影响用户的核心设计决策 
     
2.  **实现语义**：代码的功能、安全性和性能 
     
3.  **文档**：清晰说明如何使用代码 
     
4.  **测试**：验证所有功能是否按预期工作 
     
5.  **代码风格**：格式和命名约定 
     
 
来源：[Gunnar Morling 的代码审查金字塔][15] 
 
> [][16] 
 
请记住：如果您想捕捉问题/漏洞，有更合适的流程。这就是为什么我们有自动化测试、金丝雀发布、测试环境等等。 
 
在我个人看来，将代码审查作为错误捕捉工具有点像是一个反模式，您是在弥补可能缺乏某些关键步骤/流程的开发过程。 
 
对我来说，一个 `代码审查` 更多的是关于管理技术 `债务` 并确保质量的生成，同时交付更多功能。 
 
在进行代码审查时，您应确保： 
 
-   代码可读 
     
-   拥有适当的单元测试 
     
-   开发者为所有内容使用了清晰的名称 
     
-   代码设计良好，并且不比所需的更复杂 
     
-   测试用例合理且覆盖面广 
     
-   是团队可以长期维护的东西 
     
-   无会阻碍团队的架构问题 
     
-   代码符合团队的质量理念 
     
-   您在思考从 PR 中能学到什么 
     
-   您在分享开发者可以在他们的 PR 中使用的任何知识 
     
-   您在思考通过正面反馈如何赋能开发者 
     
-   PR 有清晰的变更列表说明 
     
 
## **代码审查最佳实践与流程** 
 
工程中没有代码审查的一般规则，因为您需要关注的内容取决于许多因素。您可以并且应该根据公司的标准和团队的工作方式设置流程。 
 
在设置代码审查流程之前，您需要考虑以下因素： 
 
-   您所在公司的规模和类型（例如创业公司 vs 大型企业） 
     
-   您团队中的开发人数 
     
-   您的预算 
     
-   您的时间框架 
     
-   您和您的团队的工作负载 
     
-   代码的复杂性 
     
-   审查员的能力和技能 
     
-   审查员的可用性 
     
 
举个例子，在我的工作中，我们有一个非常简单的规则：**所有** **代码** **更改在合并或提交到主干之前必须由至少一位开发人员审查**。 
 
代码审查需要系统的方法，但在每个 PR 上保持一致性是具有挑战性的。让计算机处理重复性检查（样式、格式）是有用的，而人类则专注于最重要的：架构和逻辑。这种平衡的方法使审查既全面又可持续。 
 
**看看这个例子**。它展示了如何通过智能地在人工和自动化工具之间分配任务来优化我们的 `代码审查` 流程。下图说明了一个典型的代码样式审查工作流程，将人工审查步骤与自动化工具进行了比较。 
 
![人工与自动化代码样式审查过程——显示为什么格式检查应该自动化](https://cdn.hashnode.com/res/hashnode/image/upload/v1731490662335/8b0e9e27-c31b-409f-9c9e-fd1a33195d9b.png) 
 
该图展示了我们在代码审查中面临的常见问题。看到左边了吗？那是我们人类在做手动格式检查：找出怪异的空格、修正缩进、写评论……相当乏味的事情。但看看右侧：那是像 `Prettier` 这样的工具自动修复这些格式问题的地方。 
 
## **CodeRabbit 是什么？** 
 
CodeRabbit 文档对这个工具做了相当有效的描述，所以我就把它放在这里： 
 
> [**CodeRabbit**][17] 是一个由 AI 驱动的代码审查工具，可以在几分钟内为拉取请求提供上下文相关的反馈，从而减少人工代码审查所需的时间和精力。它提供了一个全新的视角，发现常常被忽视的问题，提高整体审查质量。 ——摘自 CodeRabbit 文档 
 
![what is CodeRabbit - home page](https://cdn.hashnode.com/res/hashnode/image/upload/v1731326629130/933c46f2-a24c-4e08-a470-8449e96387aa.png) 
 
### CodeRabbit 如何帮助开发者？ 
 
让我通过一个真实的例子来给你解释。当你提交一个 PR 时，CodeRabbit 会： 
 
1.  实时进行 PR 摘要： 
 
-   首先，它会给你一个快速概览介绍改动内容。 
     
-   它还会用简单易懂的语言解释影响（对于团队中的非技术人员非常有用）。 
     
-   然后，它包括文件更改的详细解析。 
     
 
![Pull Request Summary](https://cdn.hashnode.com/res/hashnode/image/upload/v1732879970322/c671b932-25b1-474c-8cae-c393cb1706b8.png) 
 
2.  进行“智能代码审查”： 
 
-   它直接在需要关注的具体行上添加评论。 
     
-   还会在差异格式中建议修复，你可以一键应用它们。 
     
-   并显示所检查的提交和文件（这有助于跟踪审查覆盖率）。 
     
 
![Smart Code Reviews](https://cdn.hashnode.com/res/hashnode/image/upload/v1732880687958/8d0e1ce5-cb23-4c62-b9ba-823f3a59845e.png) 
 
3.  给出互动反馈： 
 
-   你可以直接在 PR 评论中与它聊天。 
     
-   可以询问有关特定代码更改的问题以获取更多详情。 
     
-   并且它会记住你团队的模式和偏好，这对于保持一致性非常有帮助（正如我上面讨论的那样）。 
     
 
![chat with coderabbit](https://cdn.hashnode.com/res/hashnode/image/upload/v1732880617364/9e246445-1d43-45f1-b4af-62d9f013d76a.png) 
 
4.  额外的实用功能： 
 
-   CodeRabbit 会验证与链接的 GitHub/GitLab 问题的更改。 
     
-   它会创建顺序图以可视化更改。 
     
-   并且可以在应用程序上对简单的问题执行一键修复。 
     
 
![sequence diagrams by coderabbit](https://cdn.hashnode.com/res/hashnode/image/upload/v1732880539024/412d6c15-d691-4b65-b335-2e04b04a55e1.png) 
 
![Code reviews done by CodeRabbit](https://cdn.hashnode.com/res/hashnode/image/upload/v1731322941721/9e7c5e9a-ac02-458b-9de3-4cf92232786d.png) 
 
上个月我第一次在 GitHub 上搜索其他东西时偶然发现 `CodeRabbit` ，令我惊讶的是已经有那么多人在使用它。 
 
![how many projects are already using coderabbit](https://cdn.hashnode.com/res/hashnode/image/upload/v1731323088015/12db3391-bad0-45a7-908d-2c34391a7803.png) 
 
我立刻注册了，因为我正在寻找这样一个解决方案，可以帮助我和我的团队进行审查。 
 
我阅读了 [CodeRabbit 文档][18] ，并感到非常印象深刻。 
 
开始使用它几乎是即插即用的过程。 
 
在下一节中，我们将通过一个示例仓库快速了解启用 CodeRabbit 的步骤。 
 
-   使用你的 GitHub 账户在 [coderabbit.ai][19] 注册。 
     
-   前往添加你的仓库。 
     
-   就这样。CodeRabbit 开始自动审查你的 PR。 
     
 
### **一个用于测试的 GitHub 仓库** 
 
作为一个用于测试的 **GitHub** **repo** ，我们将使用 [devtoolsacademy][20]：我关于所有优秀开发者工具的博客。 
 
首先，访问 [CodeRabbit 登录页面][21] 并通过 GitHub 登录。 
 
![login - coderabbit](https://cdn.hashnode.com/res/hashnode/image/upload/v1732880133507/959c0521-eddf-4026-bf33-64b415f4d9b3.png) 
 
接下来，将 CodeRabbit 添加到你的一些公共 GitHub 仓库。 
 
![how-to-add-a-public-repo-to-use-coderabbit](https://cdn.hashnode.com/res/hashnode/image/upload/v1731327118318/7329afd5-af9c-4e54-9aba-6720cd00b8ca.png) 
 
现在，CodeRabbit 已完全集成并准备在你选择的仓库上进行代码审查。 
 
是的：就是这么简单和快速。在我看来，它是这个工具非常有用的主要原因之一。 
 
以下是一些供你查看的 PR 示例： 
 
-   [https://github.com/tyaga001/devtoolsacademy/pull/10][22] 
     
-   [https://github.com/tyaga001/devtoolsacademy/pull/13][23] 
     
-   [sartography/spiff-arena#1233 (comment)][24] 
     
-   [kmesiab/equilibria#1 (comment][25][)][26] 
     
-   [kamiazya/web-csv-toolbox#60][27] [(comment)][28] 
     
-   [openreplay/openreplay#1858 (comme][29][nt)][30] 
     
-   [ls1intum/Artemis#8037 (comm][31][ent)][32] 
     
 
### **其他示例** 
 
💡 
 
查看由 [CodeRabbit][33] 完成的所有开源代码审查示例。 
 
## **结论** 
 
每个人的代码都需要审查。仅仅因为某人是团队中最资深的人，并不意味着他们的代码不需要被审查。 
 
在本文中，我谈到了代码审查以及一些常见的痛点。然后，我向你展示了如何利用 CodeRabbit 来快速迭代代码审查，并更加专注于业务。 
 
### **进一步阅读** 
 
如需更高级的功能，请查看 CodeRabbit 的官方[文档][35]或阅读他们的[博客][36]。 
 
### **在我结束之前** 
 
我希望你觉得学习使用 AI 工具进行代码审查很有帮助。 
 
如果你喜欢我的文章，这是我其他一些最新的文章。 
 
-   [**Neon Postgres vs Supabase**][37] 
     
-   [**MongoDB vs. PostgreSQL**][38] 
     
-   [Supabase vs Clerk][39] 
     
-   [我如何用 Stream 和 Next.js 构建视频会议应用][40] 
     
-   [如何在 Java 中实现细粒度授权][41] 
     
 
关注我的[推特][42]，以便随时了解我的开源项目动态。 
 
[1]: #heading-prerequisites 
[2]: #heading-what-is-a-code-review 
[3]: #heading-what-is-the-purpose-of-a-code-review 
[4]: #heading-why-is-doing-code-reviews-hard 
[5]: #heading-can-ai-replace-code-reviews 
[6]: #heading-what-to-focus-on-during-a-code-review 
[7]: #heading-code-review-best-practices-and-process 
[8]: #heading-what-is-coderabbit 
[9]: #heading-how-does-coderabbit-help 
[10]: #heading-a-github-repo-to-test 
[11]: #heading-additional-examples 
[12]: #heading-conclusion 
[13]: https://github.com/tyaga001 
[14]: https://en.wikipedia.org/wiki/Code_review 
[15]: https://www.morling.dev/blog/the-code-review-pyramid/ 
[16]: https://twitter.com/gunnarmorling/status/1501645187407388679 
[17]: https://www.coderabbit.ai/ 
[18]: https://docs.coderabbit.ai/ 
[19]: http://coderabbit.ai 
[20]: https://www.devtoolsacademy.com/ 
[21]: https://app.coderabbit.ai/login 
[22]: https://github.com/tyaga001/devtoolsacademy/pull/10 
[23]: https://github.com/tyaga001/devtoolsacademy/pull/13 
[24]: https://github.com/sartography/spiff-arena/pull/1233#discussion_r1529013218 
[25]: https://github.com/sartography/spiff-arena/pull/1233#discussion_r1529013218 
[26]: https://github.com/kmesiab/equilibria/pull/1#discussion_r1505474270 
[27]: https://github.com/kmesiab/equilibria/pull/1#discussion_r1505474270 
[28]: https://github.com/kamiazya/web-csv-toolbox/pull/60#discussion_r1453463448 
[29]: https://github.com/kamiazya/web-csv-toolbox/pull/60#discussion_r1453463448 
[30]: https://github.com/openreplay/openreplay/pull/1858#discussion_r1467629285 
[31]: https://github.com/openreplay/openreplay/pull/1858#discussion_r1467629285 
[32]: https://github.com/ls1intum/Artemis/pull/8037#discussion_r1494109998 
[33]: https://github.com/search?q=coderabbitai&type=pullrequests 
[34]: https://www.devtoolsacademy.com/ 
[35]: https://docs.coderabbit.ai/ 
[36]: https://www.coderabbit.ai/blog 
[37]: https://www.devtoolsacademy.com/blog/neon-vs-supabase 
[38]: https://www.devtoolsacademy.com/blog/mongoDB-vs-postgreSQL 
[39]: https://www.devtoolsacademy.com/blog/supabase-vs-clerk 
[40]: https://www.freecodecamp.org/news/how-i-built-a-custom-video-conferencing-app-with-stream-and-nextjs/#heading-next-steps 
[41]: https://www.freecodecamp.org/news/fine-grained-authorization-in-java-and-springboot/ 
[42]: https://x.com/theankurtyagi 
 
 
