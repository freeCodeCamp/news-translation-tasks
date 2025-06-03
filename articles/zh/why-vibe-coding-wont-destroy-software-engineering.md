---
title: Why Vibe Coding Won't Destroy Software Engineering
date: 2025-06-03T03:38:40.544Z
author: Ben
authorURL: https://www.freecodecamp.org/news/author/justanothertechlead/
originalURL: https://www.freecodecamp.org/news/why-vibe-coding-wont-destroy-software-engineering/
posteditor: ""
proofreader: ""
---

AI is disrupting all industries at a pace not seen at any time in history.

<!-- more -->

Technologies and industries that were once dominated by one or two companies or were very much “human-focused” are coming under threat.

[Google is losing ground to AI search][1], [truck drivers][2] may soon be a thing of the past, and low-skilled clerical [jobs are being lost every day][3].

Will this disruption destroy the Software Engineering industry? I don’t think so, and I’ll tell you why.

### Here’s what we’ll discuss:

1.  [The Phenomenon of "Vibe Coding"][4]
    
2.  [How AI Has Changed Software Development][5]
    
3.  [The Productivity Paradox][6]
    
4.  [Why Human Engineers Are Still Critical][7]
    
5.  [AI as a “Capability Multiplier”][8]
    
6.  [Critical Skills for the AI Era][9]
    
7.  [The Path Forward][10]
    

## **The Phenomenon of "Vibe Coding"**

If you follow tech discussions on X, you've likely seen the term "vibe coding" – the practice of building software through trial and error, intuition, and AI-generated code snippets without deep technical knowledge.

Modern AI assistants such as GitHub Copilot and ChatGPT can generate full functions, fix bugs, and create components based on simple descriptions. “Vibe Coders” are claiming that human coders will soon become obsolete.

From my perspective, these AI tools function more as skill multipliers than replacements.

They help talented developers work faster while exposing gaps in knowledge for less skilled programmers. Those lacking technical foundations will face problems they can't solve, but engineers who blend AI assistance with solid expertise will be able to be incredibly productive.

## **How AI Has Changed Software Development**

The software industry has seen rapid adoption of AI coding tools based on Large Language Models that analyze code repositories to predict and suggest next steps.

These tools have transformed daily programming work by:

-   Suggesting complete functions as you type
    
-   Creating API endpoints from plain language descriptions
    
-   Eliminating hours spent on standard code patterns
    
-   Automating documentation tasks
    
-   Handling repetitive logic quickly
    

This shift toward "vibe coding" speeds up feature delivery. Programmers can now build without mastering every technical detail – they describe what they want, get AI suggestions, and adjust until the code works.

The risk? Developers often push code they can't explain. They move quickly during building but struggle when systems break or need changing.

There's also a concerning trend of non-programmers selling AI-built applications. Recently, someone with zero coding background launched a paid service created entirely through AI prompts, only to face a data breach days later when hackers exploited basic security flaws. This is dangerous. It has wasted people's money and exposed their data. Imagine if this became common place due to the rise of “vibe coders”?

For anyone considering building software who isn’t a software engineer, there are a few basic levels of security that you need to consider:

-   Adding authentication to your API endpoints: People can scan for open ports and endpoints across the internet. If they can then call your API endpoints without being authenticated, it can cause all sorts of problems
    
-   Do not store passwords in plain text. This is a big no no. If you do this and your database gets exposed, those passwords are there for all to see. And if we’re being real, people re-use passwords, so those passwords will be their passwords for other sites too.
    
-   SSL: Make sure your website is secure and has an up to date SSL certificate. Transmitting data in plain text is dangerous.
    
-   Lock down unused ports: If you are hosting a backend service, make sure that any ports that you don’t use are locked down and people aren’t able to connect to them.
    
-   If you have areas where people can upload files, limit the uploads to specific file types.
    

Those are just a few considerations around security for your site or product, but there are many more.

## **The Productivity Paradox**

AI assistance dramatically increases code output – but volume doesn't equal value in software engineering.

These tools excel at syntax but have no understanding about system architecture, scalability concerns, and maintenance requirements. Just as typing speed doesn't create a better novel, code generation speed doesn't produce better software systems.

AI works for individual functions but struggles with architectural decisions, security planning, and long-term support needs. Without proper review and understanding, AI-generated code often becomes tomorrow's tech-debt and maintenance burden.

Consider this scenario: A developer implements an AI-created authentication system that works in isolation but causes subtle failures in users signing up to the product. Finding and fixing these integration issues might take experienced staff several days – negating any initial time savings. This is a quick path to losing money and trust.

## **Why Human Engineers Are Still Critical**

While AI tools handle syntax well, they cannot:

1.  Plan systems that grow with user demand
    
2.  Create reliable deployment and testing pipelines
    
3.  Anticipate unusual but critical failure cases
    
4.  Make smart tradeoffs between performance and cost
    
5.  Find non-obvious security weaknesses
    

Great engineers think beyond code. They develop patterns that help entire teams, select the right technologies, and plan both for success and failure scenarios.

Software creation involves complex tradeoffs: Do we prioritize speed or stability? Flexibility or simplicity? These decisions require both technical expertise and business knowledge.

The highest value engineers I work with spend more time thinking than typing. They consider: How will requirements evolve? What stress points might emerge? How will the system recover from failures?

As basic code generation becomes widely accessible, your value comes from understanding system interactions. The competitive edge will be with those who know why certain approaches succeed, where they might fail, and how to build resilient solutions.

Per the above, there are some things that AI without proper oversight can not do.

AI can, for instance, be great at passing simple prompts to create solutions to well known problems. If you use this prompt, for example:

![Prompt: "Create a Python module that will tell you if some input JSON is valid"](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771377197/8aae1332-f852-435a-a724-a1770a4163bf.png)

Here’s the code you might get:

```
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

Pretty basic.

I would not, though, ask an AI to build me a complex Forex Trading platform.

![d212d814-7785-4391-8e01-79e80c05da44](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771546630/d212d814-7785-4391-8e01-79e80c05da44.png)

I’ll save you reading through all of the response, but suffice it to say that it was not able to do this for me.

I thought I’d break that down to a slightly smaller subset of a financial trading platform:

![Prompt: "Create me an endpoint for a FIX message for an FX Financial security. Make it in Python and I want to be able to accept J messages. Security is key here, so I need this to be as secure as possible."](https://cdn.hashnode.com/res/hashnode/image/upload/v1747771773603/b65e1a13-97aa-4276-81c7-55303e5a04c6.png)

Now, I will admit, this got closer. Here was the result:

```
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

But this does not come close to the final version. Even if you could use this code as a part of your trading system, unless you know how to build and architect and entire software system, where do you go from here? You can tell your clients that they can send you an “ExecutionReport”, but then what?

I’ve read and heard the arguments that you “just need to be better at prompting to build bigger systems”. But where does the benefit come from then? The complexity of financial trading systems is beyond comprehension. Prompting a system well enough, with enough information to make it fully featured, scalable, secure, and extensible (not to mention able to be debugged) would itself be a mammoth task. So where is the time being saved? Is it even possible?

I’m yet to see any proof anywhere that anyone has build such a complex system without the oversight of a human, and I’m not convinced we will see it at any point in the near future.

## **AI as a “Capability Multiplier”**

These AI tools help magnify existing capabilities rather than replacing them. Skilled developers become far more productive, while less skilled ones generate problems more quickly.

Effective engineers use AI to:

-   Handle basic implementation tasks
    
-   Create initial project frameworks
    
-   Compare different solution approaches
    
-   Move past challenging problems
    

Meanwhile, less capable developers use AI to mask skill gaps, implementing solutions they neither understand nor can modify. When these implementations fail, they lack the knowledge to fix them independently.

This widens the skill gap. Top engineers leverage AI for mechanical tasks while focusing on higher-value thinking. Those using AI as a substitute for learning face limitations when working beyond the AI's knowledge boundaries.

A good example of something that AI is perfect for is translation logic:

Let’s say I have Python Dataclass representing an" “InternalUser”. I also have a Django ORM representation of the same entity. If I wanted to convert one to the other, I can just paste both representations in to ChatGPT and get it create me a conversion function. Notice that the conversion function also takes into account that the field names aren’t exact matches:

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

```
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

This is a basic example, but extrapolate this out to an entire internal data model and you’ve saved hours and hours of code.

You can even then ask it to create you the function stubs of the tests:

```
import pytest
from datetime import datetime
from yourmodule.dataclasses import InternalUser, Address, Preferences, LoginActivity, UserRole, AccountStatus
from yourmodule.conversion import dataclass_to_django_internal_user


@pytest.mark.django_db
def test_internal_user_conversion_basic_fields():
    # Test that basic fields (email, name, etc.) are correctly copied
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_address():
    # Test that address fields are properly mapped to the ORM model
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_preferences():
    # Test preferences like dark mode, newsletter opt-in, and language
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_login_activity():
    # Test login attempts, last IP, and last login datetime
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_tags_and_notes():
    # Test tags list and optional notes field
    pass


@pytest.mark.django_db
def test_internal_user_conversion_with_missing_optional_fields():
    # Ensure None fields like address or lastLogin don’t break conversion
    pass


@pytest.mark.django_db
def test_internal_user_conversion_saves_correctly():
    # Save all related models and main InternalUser model and check database
    pass
```

Now, I’m not suggesting that you take these as is and don’t add your own thought in to each possible test scenario, but it’s a great start.

These pieces of “grunt work” were never what we paid the top engineers for. These were just the things that they had to do to get the job done. People didn’t enjoy these tasks. They weren’t fulfilling.

## **Critical Skills for the AI Era**

As AI handles more coding tasks, successful engineers must develop strengths in areas where human judgment remains essential:

Systems thinking becomes the primary skill – understanding component interactions, identifying potential failures, and designing for future growth. This capability comes from experience, not prompting.

You should build expertise in infrastructure and deployment processes. Software that works in development but fails in production creates no value. So, learn about [continuous integration][11], [monitoring][12] systems, and [cloud platform capabilities][13].

You should also master [API design][14] – the interfaces between systems. [Well-designed APIs][15] enable team independence. Poor interfaces create bottlenecks affecting everyone.

Another key skill is being able to integrate security throughout the development process. A single oversight can result in breaches, damaging both customer trust and business standing.

Make sure you develop communication skills for both technical and non-technical audiences. You’ll need to explain complex decisions clearly across different stakeholder groups.

And study how AI tools function to understand their limitations and strengths, allowing you to use them most effectively.

For senior developers, mentoring becomes increasingly important. New engineers need guidance on responsible AI usage – knowing when to accept suggestions and when to question them.

## **The Path Forward**

The software field is entering a significant transition. AI will generate more code more quickly, transforming development practices. This shift presents both opportunities and challenges.

The most valuable positions will go to those good at tasks machines cannot handle. These engineers will determine what to build, how to design it, and how to balance technical constraints with business objectives.

"Vibe coding" serves as a useful technique for specific needs – like quickly building standard components. But it fails as a comprehensive strategy for complex system development.

Skilled engineers will advance by delegating routine work to AI while addressing more challenging problems. Less skilled engineers will struggle as fundamental knowledge gaps become apparent.

With regards to learning how to use AI effectively, also use caution and judgement when following advice from people online. It’s still a fairly new field and changes constantly.

People online are giving away “free prompts” to generate code. These prompts may be great or may have problems. The prompts may have worked when they used them, but the AI models may have changed and maybe they’ll produce different results now. Be cautious and use your best judgement.

The future belongs to those who view AI as a collaborative tool rather than a replacement. Software development remains fundamentally human-driven, now supported by increasingly powerful assistance.

_In his spare time, Ben writes his tech blog_ [_Just Another Tech Lead_][16] _and runs a site on SEO,_ [_SmoothSEO_][17]_._

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