---
title: 为什么 “Vibe Coding” 不会摧毁软件工程
date: 2025-06-03T03:38:40.544Z
author: Ben
authorURL: https://www.freecodecamp.org/news/author/justanothertechlead/
originalURL: https://www.freecodecamp.org/news/why-vibe-coding-wont-destroy-software-engineering/
posteditor: "yiwei"
proofreader: ""
---

AI 正在以史无前例的速度颠覆所有行业。

<!-- more -->

曾经由一两家公司主导或非常"以人为本"的技术和行业正面临威胁。

[Google 正在被 AI 搜索抢占市场][1]，[卡车司机][2]可能很快就会成为历史，低技能文书[工作每天都在流失][3]。

这种颠覆会摧毁软件工程行业吗？我认为不会，我来告诉你为什么。

### 我们将讨论的内容

1. ["Vibe Coding" 现象][4]

2. [AI 如何改变软件开发][5]

3. [生产力悖论][6]

4. [为什么人类工程师仍然至关重要][7]

5. [AI 作为"能力倍增器"][8]

6. [AI 时代的关键技能][9]

7. [前进之路][10]

## **"Vibe Coding" 现象**

如果你关注技术讨论，你可能已经看到过 “Vibe Coding” 这个术语——通过试验和错误、直觉和 AI 生成的代码片段来构建软件，而不需要深入的技术知识。

现代 AI 助手，如 GitHub Copilot 和 ChatGPT，可以根据简单的描述生成完整的函数、修复 bug 和创建组件。“Vibe Coders”声称人类程序员很快就会变得过时。

从我的角度来看，这些 AI 工具更像是技能倍增器，而不是替代品。

它们帮助有才华的开发者工作得更快，同时暴露了技能不足的程序员的知识缺口。那些缺乏技术基础的程序员会遇到他们无法解决的问题，但将 AI 助手与实用的专业知识相结合的工程师将能够非常高效地工作。

## **AI 如何改变软件开发**

软件行业已经经历了基于大型语言模型的 AI 编码工具的快速采用，这些工具分析代码仓库以预测和建议下一步行动。

这些工具通过以下方式改变了日常编程工作：

- 根据你输入的内容建议完整的函数

- 根据普通语言描述创建 API 端点

- 消除了花在标准代码模式上的时间

- 自动化文档任务

- 快速处理重复逻辑

这种转变加速了功能交付。程序员现在可以在不掌握每个技术细节的情况下构建软件——他们描述他们想要的内容，获取 AI 建议，并在代码工作时进行调整。

**风险在于，开发者经常推送他们无法解释的代码**。他们在构建过程中移动得很快，但在系统崩溃或需要更改时却会遇到困难。

还有一种令人担忧的趋势是非程序员在销售完全通过 AI 构建的应用程序。最近，一位没有编程背景的人通过 AI 提示推出了一个付费服务，只是在几天后就面临了数据泄露，因为黑客利用了基本的安全漏洞。这很危险。它浪费了人们的钱，并暴露了他们的数据。想象一下，如果这种情况由于 “Vibe Coders” 的崛起而变得普遍？

对于任何考虑构建软件但不是软件工程师的人来说，有一些基本的安全级别需要考虑：

- 向 API 端点添加身份验证：人们可以扫描整个互联网上的开放端口和端点。如果他们可以在没有身份验证的情况下调用你的 API 端点，那么这可能会导致各种问题

- 不要以明文存储密码。这是一个大禁忌。如果你这样做并且你的数据库被泄露，那么这些密码将被所有人看到。而且，如果我们要现实一点，人们会重复使用密码，所以这些密码将是他们在其他网站上的密码。

- SSL：确保你的网站安全并且具有最新的 SSL 证书。在明文中传输数据很危险。

- 锁定未使用的端口：如果你托管后端服务，请确保未使用的端口被锁定，人们无法连接到它们。

- 如果你有允许上传文件的区域，请限制上传的文件类型。

这些只是你网站或产品安全性的几个考虑因素，但还有很多。

## **生产力悖论**

AI 助手显著提高了代码输出量——但数量并不等于软件工程中的价值。

这些工具在语法方面表现良好，但对系统架构、可扩展性问题和维护需求没有任何了解。就像打字速度不会创造出更好的小说一样，代码生成速度也不会产生更好的软件系统。

AI 适用于单个函数，但在架构决策、安全规划和长期支持需求方面却很难。没有适当的审查和理解，AI 生成的代码通常会成为明天的技术债务和维护负担。

想象一下这样的场景：开发者实现了一个 AI 创建的身份验证系统，它在隔离环境中有效，但在用户注册产品时会导致微妙的故障。找到并修复这些集成问题可能需要经验丰富的员工几天的时间——这抵消了最初的时间节省。这是一条快速失去钱和信任的道路。

## **为什么人类工程师仍然至关重要**

虽然 AI 工具在语法方面表现良好，但它们无法：

1. 规划随着用户需求而增长的系统

2. 创建可靠的部署和测试管道

3. 预测不寻常但至关重要的故障情况

4. 在性能和成本之间做出明智的权衡

5. 找到不明显的安全漏洞

伟大的工程师不仅仅是编写代码。他们开发有助于整个团队的模式，选择合适的技术，并为成功和失败场景做计划。

软件创建涉及复杂的权衡：我们是否优先考虑速度或稳定性？灵活性或简单性？这些决策需要技术专业知识和商业知识。

我合作的最有价值的工程师花更多的时间思考而不是输入代码。他们考虑：需求如何演变？哪些压力点可能出现？系统如何从故障中恢复？

随着基础代码生成变得广泛可用，你的价值来自于理解系统交互。竞争优势将属于那些知道为什么某些方法会成功、它们可能在哪里失败以及如何构建弹性解决方案的人。

正如上所述，有一些事情 AI 无法做到。

AI 可以在简单的提示中创建解决方案来解决众所周知的问题。如果你使用此提示，例如：

![Prompt: "Create a Python module that will tell you if some input JSON is valid"](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771377197/8aae1332-f852-435a-a724-a1770a4163bf.png)

这里是你可能得到的代码：

```plain
import json

def is_valid_json(input_string: str) -> bool:
    """
    Checks if the input string is valid JSON.

    Args:
        input_string (str): The JSON string to validate.

    Returns:
        bool: True if valid, False otherwise.
    """
    try:
        json.loads(input_string)
        return True
    except json.JSONDecodeError:
        return False

def main():
    user_input = input("Enter a JSON string to validate: ")
    if is_valid_json(user_input):
        print("✅ The input is valid JSON.")
    else:
        print("❌ The input is NOT valid JSON.")

if __name__ == "__main__":
    main()
```

非常基本。

我不会要求 AI 为我构建一个复杂的外汇交易平台。

![d212d814-7785-4391-8e01-79e80c05da44](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771546630/d212d814-7785-4391-8e01-79e80c05da44.png)

我不会让你阅读整个响应，但足以说它无法为我做到这一点。

我想将其分解为一个稍微较小的金融交易平台子集：

![Prompt: "Create me an endpoint for a FIX message for an FX Financial security. Make it in Python and I want to be able to accept J messages. Security is key here, so I need this to be as secure as possible."](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771773603/b65e1a13-97aa-4276-81c7-55303e5a04c6.png)

现在，我会承认，这更接近了。这里是结果：

```plain
from fastapi import FastAPI, Request, HTTPException, Header
from pydantic import BaseModel, Field
from typing import Optional
import hmac
import hashlib
import logging

app = FastAPI()

# === CONFIGURATION ===
SHARED_SECRET = b"super_secure_shared_secret"  # Keep this secure

# === LOGGING SETUP ===
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ems.fix")

# === Pydantic Model for Execution Report (simplified) ===
class ExecutionReport(BaseModel):
    msg_type: str = Field(default="J", const=True)
    cl_ord_id: str  # Tag 11
    order_id: str   # Tag 37
    exec_id: str    # Tag 17
    exec_type: str  # Tag 150
    ord_status: str # Tag 39
    symbol: str     # Tag 55 (e.g., EUR/USD)
    side: str       # Tag 54 (1=Buy, 2=Sell)
    leaves_qty: float  # Tag 151
    cum_qty: float     # Tag 14
    avg_px: float      # Tag 6
    transact_time: str # Tag 60 (ISO8601 string)

# === Helper: HMAC Validator ===
def verify_signature(payload: bytes, signature: str) -> bool:
    computed = hmac.new(SHARED_SECRET, payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(computed, signature)

# === Endpoint ===
@app.post("/fix/execution-report")
async def receive_execution_report(
    request: Request,
    x_signature: Optional[str] = Header(None)
):
    body = await request.body()

    if not x_signature or not verify_signature(body, x_signature):
        logger.warning("Invalid or missing signature.")
        raise HTTPException(status_code=403, detail="Unauthorized")

    try:
        report_data = ExecutionReport.parse_raw(body)
        logger.info(f"Execution Report received: {report_data.dict()}")
        # ✅ Here, you'd handle order updates, booking, etc.
        return {"status": "ok", "message": "Execution Report received"}
    except Exception as e:
        logger.exception("Invalid payload format.")
        raise HTTPException(status_code=400, detail=f"Invalid FIX message format: {str(e)}")
```

但这仍然无法接近最终版本。即使你可以使用此代码作为交易系统的一部分，但除非你知道如何构建和架构整个软件系统，否则你将从哪里开始？你可以告诉客户他们可以发送“ExecutionReport”，但接下来呢？

我已经阅读并听取了关于“你只需要更好地提示才能构建更大的系统”的论点。但是，从哪里获得好处呢？金融交易系统的复杂性超出了想象。提示一个系统足够好，以便构建一个功能齐全、可扩展、安全且可扩展的系统（不仅仅是可以调试）本身就是一项巨大的任务。那么时间节省在哪里？这是否可能？

我还没有看到任何证据表明有人在没有人类监督的情况下构建了这样一个复杂的系统，我不相信我们会在近期看到。

## **AI 作为"能力倍增器"**

这些 AI 工具帮助放大现有的能力，而不是取代它们。有才华的开发者变得更加高效，而技能较弱的开发者则更快地生成问题。

有效的工程师使用 AI 来：

- 处理基本的实现任务

- 创建初始项目框架

- 比较不同的解决方案方法

- 超越具有挑战性的问题

同时，能力较弱的开发者使用 AI 来掩盖技能差距，实现他们不理解也不知道如何修改的解决方案。当这些实现失败时，他们缺乏独立修复它们的知识。

这扩大了技能差距。顶级工程师利用 AI 处理机械任务，同时专注于更高价值的思考。那些将 AI 用作学习替代品的人会在超出 AI 知识边界时遇到限制。

一个很好的例子是 AI 完美适合的东西是翻译逻辑：

假设我有一个 Python Dataclass 表示一个“内部用户”。我还有一个 Django ORM 表示相同的实体。如果我想将一个转换为另一个，我可以简单地将两个表示形式粘贴到 ChatGPT 中，并让它为我创建一个转换函数。请注意，转换函数还考虑到字段名称不完全匹配：

```plain
@dataclass
class InternalUser:
    id: str
    email: str
    hashed_password: str
    full_name: str
    role: UserRole
    status: AccountStatus
    created_at: datetime
    updated_at: datetime
    address: Optional[Address] = None
    preferences: Preferences = field(default_factory=Preferences)
    login_activity: LoginActivity = field(default_factory=LoginActivity)
    tags: List[str] = field(default_factory=list)
    notes: Optional[str] = None
```

```plain
class InternalUser(models.Model):
    id = models.CharField(primary_key=True, max_length=100)  # Use UUIDField if preferred
    email = models.EmailField(unique=True)
    hashedPassword = models.CharField(max_length=256)
    fullName = models.CharField(max_length=255)
    role = models.CharField(max_length=20, choices=UserRole.choices, default=UserRole.USER)
    status = models.CharField(max_length=20, choices=AccountStatus.choices, default=AccountStatus.PENDING)
    createdAt = models.DateTimeField(default=timezone.now)
    updatedAt = models.DateTimeField(auto_now=True)

    address = models.OneToOneField(Address, null=True, blank=True, on_delete=models.SET_NULL)
    preferences = models.OneToOneField(Preferences, on_delete=models.CASCADE)
    loginActivity = models.OneToOneField(LoginActivity, on_delete=models.CASCADE)

    tags = models.JSONField(default=list, blank=True)  # List of strings
    notes = models.TextField(null=True, blank=True)

    def __str__(self):
        return f"{self.fullName} ({self.email})"
```

```plain
from typing import Optional
from myapp.models import InternalUser as ORMInternalUser, Address as ORMAddress, Preferences as ORMPreferences, LoginActivity as ORMLoginActivity
from mydataclasses import InternalUser as DCInternalUser  # assuming your dataclass lives here


def convert_internal_user_to_model(dc_user: DCInternalUser) -> ORMInternalUser:
    # Create or update Address if provided
    orm_address: Optional[ORMAddress] = None
    if dc_user.address:
        orm_address = ORMAddress.objects.create(
            street=dc_user.address.street,
            city=dc_user.address.city,
            state=dc_user.address.state,
            postalCode=dc_user.address.postal_code,
            country=dc_user.address.country
        )

    # Create Preferences
    orm_preferences = ORMPreferences.objects.create(
        newsletterOptIn=dc_user.preferences.newsletter_opt_in,
        darkModeEnabled=dc_user.preferences.dark_mode_enabled,
        language=dc_user.preferences.language
    )

    # Create LoginActivity
    orm_login_activity = ORMLoginActivity.objects.create(
        lastLogin=dc_user.login_activity.last_login,
        loginAttempts=dc_user.login_activity.login_attempts,
        lastIpAddress=dc_user.login_activity.last_ip_address
    )

    # Create InternalUser
    orm_user = ORMInternalUser.objects.create(
        id=dc_user.id,
        email=dc_user.email,
        hashedPassword=dc_user.hashed_password,
        fullName=dc_user.full_name,
        role=dc_user.role.value,
        status=dc_user.status.value,
        createdAt=dc_user.created_at,
        updatedAt=dc_user.updated_at,
        address=orm_address,
        preferences=orm_preferences,
        loginActivity=orm_login_activity,
        tags=dc_user.tags,
        notes=dc_user.notes
    )

    return orm_user
```

这是一个基本的例子，但如果你将其扩展到整个内部数据模型，那么你将节省数小时的代码。

你甚至可以要求它为你创建测试函数的存根：

```plain
import pytest
from datetime import datetime
from yourmodule.dataclasses import InternalUser, Address, Preferences, LoginActivity, UserRole, AccountStatus
from yourmodule.conversion import dataclass_to_django_internal_user


@pytest.mark.django_db
def test_internal_user_conversion_basic_fields():
    # 测试基本字段（电子邮件、姓名等）是否正确复制
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_address():
    # 测试地址字段是否正确映射到 ORM 模型
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_preferences():
    # 测试偏好设置，如暗黑模式、新闻通讯订阅和语言
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_login_activity():
    # 测试登录尝试、最后一次登录和最后一次 IP 地址
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_tags_and_notes():
    # 测试标签列表和可选备注字段
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_missing_optional_fields():
    # 确保缺失的可选字段（如地址或最后一次登录）不会破坏转换
    pass


@pytest.mark.django_db
def test_internal_user_conversion_saves_correctly():
    # 保存所有相关模型和主 InternalUser 模型，并检查数据库
    pass
```

现在，我不会建议你将它们作为是，并且不在每个可能的测试场景中添加自己的想法，但这是一个很好的开始。

这些“苦差事”从来不是我们为顶级工程师付钱做的事情。这些只是他们必须做的事情来完成工作。人们不喜欢这些任务。它们没有成就感。

## **AI 时代的关键技能**

随着 AI 处理更多的编码任务，成功的工程师必须在人类判断仍然至关重要的领域发展自己的优势：

系统思维成为主要技能——了解组件交互，识别潜在故障，并为未来的增长设计。这项能力来自经验，而不是提示。

你应该在基础设施和部署流程方面建立专业知识。开发环境中有效但生产环境中失败的软件不会创造任何价值。因此，学习[持续集成][11]、[监控][12]系统和[云平台功能][13]。

你还应该掌握[API 设计][14]——系统之间的接口。[良好设计的 API][15]使团队独立。糟糕的接口会造成瓶颈，影响每个人。

另一个关键技能是将安全性集成到整个开发过程中。单一疏忽可能会导致泄露，损害客户信任和商业声誉。

确保你发展与技术和非技术受众交流的能力。你将需要清晰地解释复杂的决策，跨越不同的利益相关者群体。

并研究 AI 工具的工作原理，以了解它们的局限性和优势，使你能够更有效地使用它们。

对于高级开发人员，指导变得越来越重要。新工程师需要指导如何负责任地使用 AI——知道何时接受建议、何时质疑它们。

## **前进之路**

软件领域正在经历一次重大的转变。AI 将生成更多代码，改变开发实践。这一转变带来了机遇和挑战。

最有价值的职位将属于擅长机器无法处理的任务的工程师。这些工程师将决定什么要构建，如何设计，以及如何平衡技术约束与商业目标。

“Vibe Coding”是一种有用的技术，适用于特定的需求——例如快速构建标准组件。但是，它作为复杂系统开发的全面策略却失败了。

有才华的工程师将通过将常规工作委派给 AI，同时解决更具挑战性的问题来推进。技能较弱的工程师将在基本知识缺口变得明显时遇到困难。

在学习如何有效使用 AI 的同时，也要谨慎和判断地遵循在线的人们的建议。这仍然是一个相对较新的领域，并且不断变化。

人们在线提供“免费提示”来生成代码。这些提示可能很好，也可能有问题。提示可能在他们使用时很好，但 AI 模型可能已经改变，也可能会产生不同的结果。要谨慎并使用你的最佳判断。

未来属于那些将 AI 视为协作工具而不是替代品的人。软件开发仍然是人类驱动的，现在得到了越来越强大的支持。

在他的空闲时间里，Ben 写他的技术博客 [_Just Another Tech Lead_][16] 和运营一个关于 SEO 的网站 [_SmoothSEO_][17]。

[1]: https://www.smoothseo.co/blog/misc/what-the-numbers-say-about-ais-growing-role-in-search/
[2]: https://www.axios.com/2022/03/28/automation-long-haul-truckers-jobs
[3]: https://news.sky.com/story/ai-risks-up-to-eight-million-uk-job-losses-with-low-skilled-worst-hit-report-warns-13102214
[4]: #heading-the-phenomenon-of-vibe-coding
[5]: #heading-how-ai-has-changed-software-development
[6]: #heading-the-productivity-paradox
[7]: #heading-why-human-engineers-are-still-critical
[8]: #heading-ai-as-a-capability-multiplier
[9]: #heading-critical-skills-for-the-ai-era
[10]: #heading-the-path-forward
[11]: https://www.freecodecamp.org/news/learn-continuous-integration-delivery-and-deployment/
[12]: https://www.freecodecamp.org/news/how-to-set-up-monitoring-for-nodejs-applications-using-elastic/
[13]: https://www.freecodecamp.org/news/beginners-guide-to-cloud-computing-with-aws/
[14]: https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/
[15]: https://www.freecodecamp.org/news/design-an-api-application-program-interface/
[16]: https://justanothertechlead.com/
[17]: https://www.smoothseo.co
