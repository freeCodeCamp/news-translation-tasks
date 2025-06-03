---
title: 为什么 “Vibe Coding” 不会摧毁软件工程
date: 2025-06-03T03:38:40.544Z
author: Ben
authorURL: https://www.freecodecamp.org/news/author/justanothertechlead/
originalURL: https://www.freecodecamp.org/news/why-vibe-coding-wont-destroy-software-engineering/
posteditor: ""
proofreader: ""
---

人工智能正在以史无前例的速度颠覆所有行业。

<!-- more -->

曾经由一两家公司主导或非常“以人为中心”的技术和行业正在受到威胁。

[谷歌在 AI 搜索上失去优势][1]，[卡车司机][2] 可能很快会成为历史，而低技能的文职[工作每天都在流失][3]。

这种颠覆会摧毁软件工程行业吗？我不这么认为，我会告诉你原因。

### 我们将讨论以下内容：

1.  ["Vibe Coding" 现象][4]
    
2.  [AI 如何改变软件开发][5]
    
3.  [生产力悖论][6]
    
4.  [人类工程师为何仍然至关重要][7]
    
5.  [AI 作为“能力倍增器”][8]
    
6.  [AI 时代的关键技能][9]
    
7.  [前进的道路][10]
    

## **"Vibe Coding" 现象**

如果你关注 X 上关于技术的讨论，你可能已经看到过 "vibe coding" 这个词 —— 通过试错、直觉和 AI 生成的代码片段来构建软件，而无需深入的技术知识。

现代 AI 助手，如 GitHub Copilot 和 ChatGPT，可以根据简单的描述生成完整的功能、修复错误和创建组件。“Vibe 编码师”声称人类编码员很快将变得多余。

在我看来，这些 AI 工具更像是技能的倍增器而非替代品。

它们帮助有才华的开发者更快地工作，同时暴露出技术能力较弱的程序员的知识缺口。缺乏技术基础的人会面临他们无法解决的问题，但那些将 AI 辅助与坚实的专业知识相结合的工程师将会非常高效。

## **AI 如何改变软件开发**

软件行业已经迅速采用了基于大型语言模型的 AI 编码工具，这些工具可以分析代码库以预测和建议下一步。

这些工具通过以下方式改变了日常编程工作：

-   在你输入时建议完整的功能
    
-   从普通语言描述中创建 API 端点
    
-   节省数小时在标准代码模式上
    
-   自动化文档任务
    
-   快速处理重复逻辑
    

这种向“vibe coding”的转变加速了功能交付。程序员现在可以在不掌握每个技术细节的情况下构建 —— 他们描述他们想要的，获得 AI 的建议，然后调整直到代码有效。

风险在于：开发人员经常推送他们无法解释的代码。他们在构建时移动得很快，但当系统出现故障或需要更改时却难以应对。

还有一个令人担忧的趋势是非程序员销售 AI 构建的应用程序。最近，一位完全没有编程背景的人通过 AI 提示创建了一个付费服务，但几天后在基本安全漏洞被黑客利用时面临数据泄露。这是危险的。这浪费了人们的钱，并暴露了他们的数据。想象一下，如果这由于“Vibe 编码师”的崛起而成为常态？

对于任何考虑构建软件但不是软件工程师的人，有一些基本的安全级别需要考虑：

-   为 API 端点添加身份验证：人们可以扫描互联网以查找开放端口和端点。如果他们在未经身份验证的情况下调用你的 API 端点，这可能会引发各种问题。
    
-   不要以纯文本存储密码。这是大忌。如果这样做，并且你的数据库被暴露，那么密码就会暴露给所有人。而且如果我们说实话，人们会重复使用密码，因此这些密码也将是他们其他网站的密码。
    
-   SSL：确保你的网站是安全的，并拥有最新的 SSL 证书。以纯文本方式传输数据是危险的。
    
-   锁定未使用的端口：如果你托管一个后端服务，确保所有不使用的端口被锁定，以防止他人连接。
    
-   如果你有允许人们上传文件的地方，请限制上传到特定的文件类型。
    

这些只是关于你的网站或产品的安全的一些考虑，但还有许多其他方面。

## **生产力悖论**

AI 辅助大幅提高了代码输出量 —— 但在软件工程中，数量不等于价值。

这些工具在语法方面表现出色，但对系统架构、可扩展性问题和维护要求一无所知。就像打字速度不会创造出更好的小说一样，代码生成速度也不会产生更好的软件系统。

AI 在单一功能上有效，但在架构决策、安全规划和长期支持需求上却表现不佳。没有适当的审查和理解，AI 生成的代码常常会成为未来的技术债务和维护负担。

考虑这样一种情况：开发人员实施了一个 AI 创建的身份验证系统，该系统在孤立环境下有效，但在用户注册时导致一些微妙的故障。找到并解决这些集成问题可能需要有经验的员工数天时间 —— 抵消了任何初始的时间节省。这是一条快速失去金钱和信任的道路。

虽然 AI 工具在语法处理上表现出色，但它们无法做到：

1.  规划能随着用户需求增长的系统
    
2.  创建可靠的部署和测试流水线
    
3.  预见不寻常但关键的失败情况
    
4.  在性能和成本之间进行明智的权衡
    
5.  发现不明显的安全漏洞
    

优秀的工程师不仅仅关注代码。他们开发能帮助整个团队的模式，选择正确的技术，并为成功和失败场景制定计划。

软件创建涉及复杂的权衡：我们优先考虑速度还是稳定性？灵活性还是简单性？这些决策需要兼具技术专长和商业知识。

与我共事的最有价值的工程师花更多时间思考而不是打字。他们会考虑：需求将如何演变？可能出现哪些压力点？系统将如何从失败中恢复？

随着基本代码生成变得广泛可用，您的价值在于理解系统交互。竞争优势将属于那些了解某些方法为何成功、可能在哪里失败以及如何构建弹性解决方案的人。

根据以上内容，有些事情是没有适当监督的 AI 无法做到的。

例如，AI 在传递简单的提示以解决已知问题时表现出色。如果您使用此提示，例如：

![Prompt: "创建一个 Python 模块，告诉你某个输入 JSON 是否有效"](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771377197/8aae1332-f852-435a-a724-a1770a4163bf.png)

您可能会得到以下代码：

```
import json

def is_valid_json(input_string: str) -> bool:
    """
    检查输入字符串是否为有效 JSON。

    参数:
        input_string (str): 要验证的 JSON 字符串。

    返回:
        bool: 如果有效，则为 True，否则为 False。
    """
    try:
        json.loads(input_string)
        return True
    except json.JSONDecodeError:
        return False

def main():
    user_input = input("输入一个 JSON 字符串进行验证: ")
    if is_valid_json(user_input):
        print("✅ 输入是有效的 JSON。")
    else:
        print("❌ 输入不是有效的 JSON。")

if __name__ == "__main__":
    main()
```

相当基础。

但我不会让 AI 为我构建一个复杂的外汇交易平台。

![d212d814-7785-4391-8e01-79e80c05da44](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771546630/d212d814-7785-4391-8e01-79e80c05da44.png)

我会节省你的阅读时间，但可以说它无法为我做到这一点。

我想我会将其分解为金融交易平台的一个稍微小一点的子集：

![Prompt: "为 FX 金融证券创建一个 FIX 消息的端点。使用 Python 编写，我希望能接受 J 消息。安全是关键，因此我需要尽可能安全。"](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771773603/b65e1a13-97aa-4276-81c7-55303e5a04c6.png)

现在，我承认，这比较接近。结果如下：

```
from fastapi import FastAPI, Request, HTTPException, Header
from pydantic import BaseModel, Field
from typing import Optional
import hmac
import hashlib
import logging

app = FastAPI()

# === 配置 ===
SHARED_SECRET = b"super_secure_shared_secret"  # 保持此秘密

# === 日志设置 ===
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("ems.fix")

# === 执行报告的 Pydantic 模型（简化版） ===
class ExecutionReport(BaseModel):
    msg_type: str = Field(default="J", const=True)
    cl_ord_id: str  # 标签 11
    order_id: str   # 标签 37
    exec_id: str    # 标签 17
    exec_type: str  # 标签 150
    ord_status: str # 标签 39
    symbol: str     # 标签 55（例如 EUR/USD）
    side: str       # 标签 54 (1=买入, 2=卖出)
    leaves_qty: float  # 标签 151
    cum_qty: float     # 标签 14
    avg_px: float      # 标签 6
    transact_time: str # 标签 60 (ISO8601 字符串)

# === 辅助工具: HMAC 验证器 ===
def verify_signature(payload: bytes, signature: str) -> bool:
    computed = hmac.new(SHARED_SECRET, payload, hashlib.sha256).hexdigest()
    return hmac.compare_digest(computed, signature)

# === 端点 ===
@app.post("/fix/execution-report")
async def receive_execution_report(
    request: Request,
    x_signature: Optional[str] = Header(None)
):
    body = await request.body()

    if not x_signature or not verify_signature(body, x_signature):
        logger.warning("无效或缺失的签名。")
        raise HTTPException(status_code=403, detail="未经授权")

    try:
        report_data = ExecutionReport.parse_raw(body)
        logger.info(f"接收到执行报告: {report_data.dict()}")
        # ✅ 在这里，您可以处理订单更新、确认等。
        return {"status": "ok", "message": "执行报告已接收"}
    except Exception as e:
        logger.exception("无效的负载格式。")
        raise HTTPException(status_code=400, detail=f"无效的 FIX 消息格式: {str(e)}")
```

但这还远未达到最终版本。即使您可以将此代码用作交易系统的一部分，如果您不知道如何构建和架构整个软件系统，接下来该怎么办？您可以告诉客户他们可以向您发送“ExecutionReport”，但然后呢？

我还没有在任何地方看到过任何证据证明有人在没有人类监督的情况下构建了如此复杂的系统，而且我并不相信在不久的将来我们会看到这种情况。

## **AI作为“能力倍增器”**

这些AI工具有助于放大现有的能力，而不是替代它们。熟练的开发人员能够变得更加高效，而技能较低的开发人员则更快地产生问题。

有效的工程师利用AI来：

- 处理基本的实现任务
    
- 创建初始项目框架
    
- 比较不同的解决方案方法
    
- 解决棘手的问题
    

与此同时，能力较弱的开发人员使用AI来掩盖技能差距，实现他们既不理解也不能修改的解决方案。当这些实现失败时，他们缺乏独立解决的知识。

这加大了技能差距。顶尖工程师利用AI进行机械任务同时专注于更高价值的思考。那些把AI当作学习替代的用户在工作超出AI知识范围时面临局限。

一个AI非常适合的例子就是翻译逻辑：

假设我有一个代表“InternalUser”的Python Dataclass。我也有一个同一实体的Django ORM表示。如果我想将一个转换为另一个，我可以将两个表示粘贴到ChatGPT中，让它为我创建一个转换函数。注意转换函数也考虑到了字段名称并不完全匹配：

```
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

```
class InternalUser(models.Model):
    id = models.CharField(primary_key=True, max_length=100)  # Prefer UUIDField if preferred
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

```
from typing import Optional
from myapp.models import InternalUser as ORMInternalUser, Address as ORMAddress, Preferences as ORMPreferences, LoginActivity as ORMLoginActivity
from mydataclasses import InternalUser as DCInternalUser  # assuming your dataclass lives here


def convert_internal_user_to_model(dc_user: DCInternalUser) -> ORMInternalUser:
    # If Address is provided, create or update Address
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

这是一个基本的例子，但如果将其推展到整个内部数据模型，你就能节省大量的编码时间。

你甚至可以让它为你的测试创建函数存根：

```
import pytest
from datetime import datetime
from yourmodule.dataclasses import InternalUser, Address, Preferences, LoginActivity, UserRole, AccountStatus
from yourmodule.conversion import dataclass_to_django_internal_user
```

```markdown
@pytest.mark.django_db
def test_internal_user_conversion_with_address():
    # 测试地址字段是否正确映射到 ORM 模型
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_preferences():
    # 测试偏好设置，如黑暗模式、新闻订阅和语言
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_login_activity():
    # 测试登录尝试、最后访问的IP和最后登录时间
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_tags_and_notes():
    # 测试标签列表和可选备注字段
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_missing_optional_fields():
    # 确保地址或 lastLogin 等 None 字段不会破坏转换
    pass


@pytest.mark.django_db
def test_internal_user_conversion_saves_correctly():
    # 保存所有相关模型和主要的 InternalUser 模型并检查数据库
    pass
```

现在，我并不是建议你就这样直接使用这些测试并不添加自己对于每个可能的测试场景的思考，但这是一个很好的开始。

这些“繁重工作”的部分从来不是我们支付给顶尖工程师的理由。这些只不过是他们完成任务所必需做的事情。人们并不享受这些任务，也不觉得它们有意义。

## **AI 时代的关键技能**

随着 AI 掌握越来越多的编码任务，成功的工程师必须在需要人类判断的领域发展自己的优势：

系统思维成为主要技能——理解组件交互、识别潜在故障以及设计未来的增长方案。这种能力来自经验，而不是提示。

你应该在基础设施和部署流程方面建立专业知识。在开发中能工作的软件如果在生产中失败，是没有价值的。因此，学习[持续集成][11]、[监控][12]系统和[云平台能力][13]。

你还应该掌握[API设计][14]——系统之间的接口。[设计良好的API][15]能够实现团队的独立性。糟糕的接口会造成影响每个人的瓶颈。

另一个关键技能是能够在开发过程中整合安全性。一个小的疏忽就可能导致漏洞，从而损害客户信任和企业信誉。

确保你发展面向技术和非技术受众的沟通技巧。你需要在不同的利益相关者群体中清晰地解释复杂的决策。

并且研究 AI 工具的运作方式，以了解它们的局限性和优势，从而让你能够最有效地使用它们。

对于高级开发人员来说，指导将变得越来越重要。新工程师需要关于负责任地使用AI的指导——知道何时接受建议和何时质疑它们。

## **前进的道路**

软件领域正进入一个重要的过渡阶段。AI将更快地产生更多代码，从而改造开发实践。这一转变带来了机遇和挑战。

最有价值的职位将由那些擅长机器无法处理任务的人获得。这些工程师将决定建立什么，如何设计它，以及如何平衡技术约束与业务目标。

"Vibe coding" 作为一种针对特定需求的有用技术——例如快速构建标准组件。但它在复杂系统开发的全面策略中却表现不佳。

熟练的工程师将通过将例行工作委托给AI来解决更具挑战性的问题。缺乏技能的工程师将因基础知识的缺陷而苦苦挣扎。

有关如何有效使用AI的学习，请在遵循网络上的人提供的建议时保持谨慎和判断。这个领域仍然相对较新并不断变化。

网上有人正在免费提供用于生成代码的“提示”。这些提示可能很棒也可能存在问题。当他们使用这些提示时可能有效，但AI模型可能已经更改，而现在可能会产生不同的结果。请保持谨慎并使用你的最佳判断力。

未来属于那些将AI视为协作工具而非替代品的人。软件开发依然是以人为驱动，现已得到日益强大的辅助支持。

_在闲暇时间，Ben 撰写了他的科技博客_[_Just Another Tech Lead_][16]_，并经营一个 SEO 网站，_[_SmoothSEO_][17]_。_

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
```

