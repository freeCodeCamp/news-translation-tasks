---
title: How to Build Scalable Access Control for Your Web App [Full Handbook]
date: 2025-02-06T14:07:36.706Z
author: Samhitha Rama Prasad
authorURL: https://www.freecodecamp.org/news/author/samhitharamaprasad/
originalURL: https://www.freecodecamp.org/news/how-to-build-scalable-access-control-for-your-web-app/
posteditor: ""
proofreader: ""
---

Access control is crucial for preventing unauthorized access and ensuring that only the right people can access sensitive data in your application. As your app grows in complexity, so does the challenge of enforcing permissions in a clean and efficient way.

<!-- more -->

In this handbook, we’ll explore various access control mechanisms and walk through two approaches for building a scalable Attribute-Based Access Control solution in React.

First, we'll examine CASL, a popular open-source authorization library. Then, we’ll build a custom solution from scratch to deepen your understanding of how to design a flexible permissions validation system.

This guide includes detailed code walkthroughs for both approaches, covering key concepts such as state management, custom hooks, and caching/conditional queries using Redux Toolkit.

If you plan to implement the code, you should have a basic understanding of how a web app using state management works. But even if you're not coding along, you’ll still gain valuable insights into the design patterns and best practices behind creating a robust permissions validation system.

Let’s dive in!

## Table of Contents

-   [What is access control? How is it different from AuthZ, AuthN and permissions?][1]
    
-   [Multi-layered Access Control][2]
    
    -   [Hogwarts in Harmony: A Unified Defense][3]
-   [Access Control Models][4]
    
-   [Why ABAC?][5]
    
-   [Attribute-Based Access Control In Depth][6]
    
    -   [Core Components][7]
        
    -   [How does ABAC work?][8]
        
    -   [Who defines ABAC policies?][9]
        
    -   [Where should you enforce it — back-end or front-end?][10]
        
    -   [Where are policies defined?][11]
        
-   [1: Implementing Permissions with CASL][12]
    
-   [2: Build Your Custom Permissions Validation Framework][13]
    
    -   [Policy Definition using Policy as Code][14]
        
    -   [Workflow Overview][15]
        
    -   [Policy Validation][16]
        
    -   [Policy Enforcement][17]
        
-   [Let’s Summarize][18]
    
    -   [Further Scaling Considerations][19]
-   [Conclusion][20]
    

## What is Access Control? How is it Different from AuthZ, AuthN, and Permissions?

Let me break down these terms using the example of an airport.

When you arrive at the check-in counter, you present your passport to verify your identity. **Authentication** (Who are you?) is the process of confirming that you are who you say you are.

Once your identity is confirmed, the airline checks if you are authorized to board the flight by verifying your ticket, or if you are authorized to access the lounge by reviewing your membership status, class of travel, or loyalty program tier. **Authorization** (What are you allowed to do?) is about determining what specific resources you are permitted to access.

**Permissions** (What specific actions can you take?) are the granular details of what you're allowed to do within the scope of your authorization. If you’re authorized to board the flight and access the lounge, your permissions might include: sitting at the boarding gate, relaxing in the lounge, shopping in duty-free, or if you’re staff, accessing restricted areas.

**Access control** refers to the measures in place to enforce authorization policies. These are the rules the airport follows to validate boarding passes or lounge access, and to guide you to the correct gate.

## Multi-layered Access Control

To ensure comprehensive protection, access control should be enforced at multiple layers, depending on your application architecture.

To understand this, here’s a little something for my fellow Potter-heads:

### Hogwarts in Harmony: A Unified Defense

At the very edge of Hogwarts, you’ve got your Perimeter—the outer defenses that keep dark forces at bay. Think of these as the high, _enchanted stone walls_ that surround the castle—acting like a firewall, with winged boar statues perched on the parapets, keeping watch. Only those with proper clearance are allowed through the gates, ensuring that no unwanted guests, like dark wizards, can enter.

When students arrive at Hogwarts, they come by _boats or Thestral-pulled carriages_, which are the only trusted means of transport. This is like **Endpoint Detection and Response (EDR)**, ensuring that only the right devices (or carriages) are allowed entry.

If a student tries to use a non-compliant device (like a _cursed broomstick or Apparition_), they won’t be allowed inside. **Mobile Device Management (MDM)** acts like the magical inspection process—only devices that meet Hogwarts' standards can pass through the gate and connect to the school’s systems.

At Hogwarts, _owls_ are the trusted messengers that carry messages between the school and the outside world. These owls, like API keys and JWTs, carry the seal of approval and only deliver messages to the right recipients. Dark creatures like _Dementors_ are forbidden from delivering messages, ensuring that only the right communications make it through.

The _Acceptance Letter from Hogwarts_ is like an **OAuth token**. It proves you belong to the magical world and grants you access to the school without needing to show your face or reveal your blood status.

Inside the castle, access to different areas is controlled by who you are and your role at Hogwarts. For example, **Role-Based Access Control (RBAC)** ensures that only _Gryffindors_ can access their common room, while _Slytherins_ have their own. _Prefects_ get additional privileges, like access to the Prefect's bathroom or other special rooms. These roles define where you can go and what you can do within the castle.

But things get more nuanced with **Attribute-Based Access Control (ABAC)**. For instance, only students enrolled in _Care of Magical Creatures_ have access to the Forbidden Forest, but they’re only allowed in during daylight hours, when it's safer. The forest is too dangerous at night, and only those with the right attributes (like a specific timetable) can enter at the right time.

Within Hogwarts is the _Philosopher’s Stone_, hidden away in a vault guarded by powerful enchantments. This is your Data Layer – the most precious resources, secured by powerful protections. Just like database permissions, the vault is protected by Fluffy, the three-headed dog, a series of enchantments, and traps. Similarly, row-level and column-level security ensure that only Harry Potter can retrieve the Stone because he is the only one worthy (you can only access what’s meant for you).

To summarize,

1.  **Network Layer (Infrastructure-level):** Firewalls and virtual private networks (VPNs) to control incoming and outgoing network traffic.
    
2.  **Endpoint Layer (Device-level):** Endpoint Detection and Response (EDR) and Mobile Device Management (MDM) to ensure only compliant device can access your application.
    
3.  **API Layer (Service-level):** API keys, JSON Web Tokens (JWTs), and API gateways to authenticate and authorize the caller and enforce policies such as rate limiting, IP whitelisting, and so on.
    
4.  **Application Layer:** Where the core business logic for authorization typically resides (which this guide is all about).
    
5.  **Data Layer (Database-level):** Database permissions, row/column-level security.
    

## Access Control Models

At the application layer, three primary models of access control are commonly used in software engineering: Role-Based Access Control (RBAC), Attribute-Based Access Control (ABAC), and the more recent Relationship-Based Access Control (ReBAC).

**RBAC** **(Role-Based Access Control)** is a model where access is granted or denied based on the roles assigned to a user.

A role is a collection of permissions or privileges that define what actions a user can perform within a system. Roles simplify access control by assigning users to predefined roles, rather than managing individual permissions for each user.

When a user is assigned a role, they automatically inherit all the permissions associated with that role. Each permission also has a scope, which defines the boundaries or contexts within which the role's permissions apply. Scopes are typically used to restrict access to specific resources or data.

Let me illustrate this (and all concepts throughout this guide) using a blogging application as an example. This app allows users to create, manage, and publish blog posts in multiple categories. It supports a variety of user roles, each with different levels of access to the content and functionality within the platform.

-   **Admin**: Can view, edit, delete, and manage all blog posts and user roles. (Scope: All posts and users)
    
-   **Editor**: Can edit and approve posts within their assigned categories (for example, Tech, Lifestyle). (Scope: Assigned categories)
    
-   **Author**: Can create and edit only their own blog posts. (Scope: Own posts)
    
-   **Guest User**: Can view public, published blog posts but cannot access private posts. (Scope: Public published posts only)
    

The relationship between users and roles is often many-to-many, and roles may also be hierarchical, allowing for complex permission structures.

![Role-based Access Control diagram](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780482515/e30316f8-58a9-4595-81ba-8eb08b2d5a3d.jpeg)

**ABAC** **(Attribute-Based Access Control)** is a model where access decisions are made based on the attributes of the subject (user), object (resource), and the environment. It dynamically evaluates whether a subject can perform an action on an object based on these attributes and policies that govern them.

**ReBAC** **(Relationship-Based Access Control)** is an emerging model that grants access based on the relationships between users and resources. For example, it might allow only the user who created a post to edit it. This model is particularly useful in social networking applications, where access depends on user relationships (such as friends, followers, or content ownership).

## Why ABAC?

RBAC provides several benefits, including ease of implementation, reduced administrative overhead by enabling quick onboarding of new users, and simplified auditing, as it makes it easy to review which roles have access to sensitive data.

But, as the platform grows, you introduce more nuanced requirements for access control. These new requirements lead to the creation of new roles to meet specific access needs:

1.  **Publisher**: Can view, edit, approve, publish, and delete posts across all categories, but cannot manage user roles or settings.
    
2.  **Junior Author**: Can create and edit their own posts within assigned categories.
    
3.  **Senior Author**: Can create and edit their own posts in any category.
    
4.  **User (Subscriber)**: Can view and comment on private posts in addition to public posts.
    
5.  **Premium Subscriber**: Has all the permissions of a regular subscriber and access to exclusive posts.
    

Before long, you may find yourself managing an ever-growing list of roles such as Senior Publisher, Publishing Supervisor, Guest User, Subscriber, Premium Subscriber, Graphic Designer, UX Designer, Photographer, Social Media Manager, US Marketing Specialist, UK Marketing Specialist, Web Developer, Data Analyst, Membership Manager, Ad Manager, Legal Advisor, and Sponsor Manager.

Introducing additional requirements—such as blog category, seniority, and jurisdiction—can quickly lead to role explosion. Just imagine how this would scale in data-intensive enterprise applications like finance or healthcare.

While scopes work well when boundaries are clear and static (for example, department, blog types), they require custom checks for more granular attributes such as seniority, length of service, blog creation time, or publication status. Scopes also struggle to account for attributes that change over time, like the location or timing of access.

Because RBAC relies on roles and fixed scopes to make access decisions, it becomes limited in handling complex and dynamic access needs. That is why, [**OWASP** (Open Worldwide Application Security Project) recommends using **ABAC** or **ReBAC** over RBAC][21], as they are more effective in implementing the principle of least privilege.

## Attribute-Based Access Control In Depth

### Core Components

The core components of ABAC are:

**Attributes**: Attributes are key-value pairs used to define the access context. Examples include:

-   **User attributes**: These describe the characteristics of the person requesting access, like role, department, age, clearance level, and so on. 💡 As you can see, role can be one of the attributes based on which access control decision is based. So, ABAC is essentially an extension of RBAC.
    
-   **Resource attributes**: These describe the characteristics of the resources (such as files, databases, or services) being accessed. For example, owner, category, status, and so on.
    
-   **Action attributes**: These define what actions are being requested by the user on the resource. For example, `read` access like view/open, `write` access like create/modify/delete, `execute` access like process/run, and so on.
    
-   **Environment attributes**: These include contextual elements such as `time` or `location` that influence the decision-making process.
    

**Policies**: Policies are logical rules or statements that define which combinations of attributes allow or deny access. For instance, A publisher can _publish_ approved posts in assigned categories during business hours.

### How does ABAC work?

Let’s take Sam, a publisher for our blog, as an example. Sam is authorized to publish posts that have been approved by the editor, but only within the categories she’s been assigned, such as ‘Tech,’ ‘Lifestyle,’ and ‘Health.’ She’s allowed to publish these posts only during specific hours, say from 9 AM to 6 PM.

Sam’s role as a publisher and her assigned categories were set when she joined the team. The resource here is the Post, which is given a category when it’s created. The action she can perform is to publish, and the environmental condition is that it needs to be during business hours.

Since the access control rule is based on Sam’s attributes—her role as a publisher and the categories she’s assigned to—she can publish posts within those categories. If any of her attributes change, like if she moves to a different department, such as Membership Management, or if her assigned categories change to ‘Fashion’ or ‘Travel,’ her access is automatically revoked.

> _ABAC allows administrators to set access controls without needing to know who specifically will need access. As new members join an organization, there's no need to modify existing rules or object attributes; as long as they have the necessary attributes, they can access the required resources. This ability to automatically accommodate new and unanticipated users without additional adjustments is a key advantage of using ABAC_. ([Source][22])

### Who defines ABAC policies?

1.  **Identity and Access Management administrators**:
    
    In many organizations, security administrators or access control administrators define ABAC policies. Their responsibilities include analyzing business needs, risk management, regulatory compliance, and ensuring that users have the right level of access to resources. They translate security requirements into policies based on the different attributes and conditions specific to the organization.
    
2.  **Business and resource managers**:
    
    In certain cases, business units or department managers may also have input into defining policies. They understand the operational needs and are best positioned to indicate how data should be accessed by their teams.
    
    For example, a Membership Manager might define policies governing who can access premium blog posts based on subscription status, user role, or membership level (e.g., Subscriber, Premium Subscriber).
    

### **Where should you enforce it — back-end or front-end?**

Access control policies should be enforced in **both** the front-end and the back-end. Here's why:

**1.** **Front-end enforcement**

-   **Instant feedback**: When you enforce ABAC policies on the front-end, you can immediately show or hide elements (like buttons, links, or menus) based on the user’s attributes. This makes the interface cleaner and helps users understand what they can or can’t do right away.
    
-   **Smarter UI**: You can prevent showing options to users that they shouldn’t see. For example, hiding features if the user doesn’t have the correct role or permissions. This makes the UI feel more intuitive and responsive.
    
-   **Reduced server load**: By enforcing certain access restrictions in the front-end, you reduce unnecessary requests to the back-end, improving app performance and reducing load on your servers.
    
-   **Security layer**: While the front-end isn’t where sensitive data should live, you can still add an extra layer of security by using it to filter out invalid actions or content **before** a request is made to the back-end. For instance, you can hide sensitive UI elements (like admin controls) or disable buttons based on user attributes, making it harder for unauthorized users to even attempt to trigger certain actions.
    

**2.** **Back-end enforcement**

-   **Bypass risk**: The downside of relying only on the front-end is that users can easily **bypass** it. With the right tools, they can manipulate the front-end code or network requests (using browser dev tools or API proxies). This is why back-end enforcement is essential—it ensures that access rules are applied **server-side**, where they can’t be tampered with.
    
-   **Protecting sensitive data**: The back-end is where your sensitive data is stored and processed. By enforcing ABAC policies on the server, you ensure that unauthorized users can’t access, modify, or even view sensitive information. To avoid data leaks, you should always filter-out sensitive content based on user permissions and send only relevant content to the client.
    

Now that you know ABAC policies need to be enforced both in the front-end and the back-end, the next question is: **Where do you define these policies?**

As a developer, you might think: "_If I know the policies defined by the security team, I can just translate them into code for both the front-end and back-end._"

For example, if the policy is that only senior authors can approve blogs in specific categories, you might write something like this:

**Front-end example (simplified):**

```
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  showApprovalDashboard();
} else {
  hideApprovalDashboard();
}
```

**Back-end example (simplified):**

```
if (user.role === 'author' && user.seniority === 'senior' && user.categories.includes('Tech')) {
  return res.send(approvalDashboardData);
} else {
  return res.status(403).send('Forbidden: You do not have approval access for this category.');
}
```

But how do you ensure policy consistency across both layers of your application without duplicating logic?

What happens when you need to introduce additional conditions to this policy, like factoring in other user attributes or combining permissions with feature flags to conditionally enable certain features for specific users?

And, what if your requirement varies for each user like:

-   Display certain UI elements only for users with a premium subscription,
    
-   Block an API call for a social media manager based on specific attributes,
    
-   Or hide an entire route for users who are not admins?
    

Without a structured approach, your app becomes a tangled mess of if-else statements scattered across the codebase.

Read on to find the answers to these questions!

### Where are policies defined?

Before we dive into the implementation details, let me briefly revisit the question from the previous section: Where should you _define_ the policies?

When there are multiple ways to access a service – whether through a mobile app, web app, or other platforms – the back-end should serve as the source of truth for policy definitions. Defining ABAC policies in the back-end keeps things consistent and secure across all platforms. This means that all clients interact with the same set of rules, reducing the chances of policy discrepancies.

So, the back-end is where all the policy definitions live, and it makes them available to the front-end when needed. The front-end then enforces these decisions on the user interface. But don't forget, the back-end should always enforce these policies as well.

In the upcoming sections, you will learn two approaches to implementing the ABAC access control model.

## 1: Implementing Permissions with CASL

[CASL][23] is an open-source, isomorphic JavaScript library that makes managing permissions in your app much easier with its simple, declarative API.

What this means is that you can use CASL on both the client-side (front-end) and server-side (back-end). This is especially great for full-stack applications, as it ensures consistency in access control. The same permission logic can be applied across your entire app, no matter where the request is coming from.

With CASL, you get **declarative access control**, which means you define _what_ is allowed, rather than worrying about _how_ to check permissions. This makes your code cleaner, more readable, and easier to maintain. Whether you're hiding UI elements in the front-end or making sure an API call is authorized in the back-end, CASL helps you enforce permissions consistently across your app.

The best part? You can define permissions using a clear, expressive syntax. This makes it easy to manage even complex permission rules. For example, you can control what a user can (or cannot) do based on their role, the resources they own, and other factors.

And it’s not just for React/React Native – they provide supporting packages for [Angular][24], [Vue][25] and [Aurelia][26] too.

### Step 1: Install CASL

First, install CASL using a package manager. I have used v6 for the code examples.

```
npm install @casl/react @casl/ability
# or
yarn add @casl/react @casl/ability
# or
pnpm add @casl/react @casl/ability
```

### Step 2: Define the abilities

In CASL, think of "abilities" as a set of rules that define what actions a user can or cannot perform on specific subjects (like "Posts" or "Users"). Let’s use our earlier examples from the blogging application. For simplicity, we’ll consider two types of users: **Admins** and **Authors**.

-   An Admin can manage everything.
    
-   An Author can create and edit their own posts within assigned categories, but they cannot delete published posts.
    

Now, create a `defineAbilities.ts` file to define the abilities in a high-level, declarative manner using DSL.

Start by defining the `Actions` that a user can perform (for example, `create`, `read`, `update`, `delete`, `manage`) and the `Subjects` (the entities that actions are performed on, such as `‘User’`, `‘Post‘`, or objects like `User` or `Post`).

```
//defineAbilities.ts

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | User | Post
```

Then, create a type representing the structure of your abilities. It combines the `Actions` and `Subjects` to create a clear and type-safe ability system.

The `PureAbility<[Actions, Subjects]>` means that the ability system will know what actions are allowed on which subjects. The `createAppAbility` function is used to create an ability instance based on your defined actions and subjects. You can use this function to create abilities specific to a user’s role or permissions.

```
//defineAbilities.ts

import { CreateAbility, PureAbility, AbilityBuilder, createMongoAbility } from '@casl/ability';
// other imports

type Actions = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subjects = 'User' | 'Post' | 'all' | Post | User

export type AppAbility = PureAbility<[Actions, Subjects]>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>
```

Note that `createMongoAbility` is only used to support simple operators from [MongoDB Query Language][27], like $in, $lte, $eq that are used to specify conditions for your rules. Don't worry – this doesn't mean your app has to use MongoDB, nor do you need to be familiar with the query language. You can also skip these entirely and create custom operators.

Next, define a function called `defineAbilityFor`, which takes a `user` object as its argument and returns an ability instance. The `user` object is expected to have a `role` property (such as 'admin' or 'author') that determines the user's permissions.

The `userPermissions` object maps each user to a function that defines their permissions using the `can` and `cannot` methods provided by `AbilityBuilder`. This approach scales better than a switch case as you add more roles.

```
//defineAbilities.ts

export default function defineAbilityFor(user: User) {
  const { can, cannot, build } = new AbilityBuilder(createAppAbility);
   const userPermissions = {
    admin: () => {
      // Admin user can manage everything
      can('manage', 'all');
    },
    author: () => {
      // Author can create Posts but cannot delete them
      can('create', 'Post');
      cannot('delete', 'Post');
    },
    // Add more roles
  };

  // Call the permissions associated with the user, or default to no permissions.
  const permissions = userPermissions[user.role] || (() => {});
  permissions(); 

  return build();
}
```

Note: `manage` and `all` are keywords in CASL where manage means any action and all means any subject.

To specify conditions that prevent users from updating posts they haven't created, deleting published posts, and to restrict access to certain fields, you can use **conditions** and **fields**. CASL allows you to set specific conditions on permissions via the `subject` property, which represents the object, and the `fields` property, which represents the object’s properties that the user is interacting with.

Add conditional rules to the above file.

```

   author: () => {
      // Author can create posts in the 'Tech' and 'Lifestyle' categories
      can('create', 'Post', { category: { $in: ['Tech', 'Lifestyle'] } });

      // Author can update the title and description of posts authored by the user
      can('update', 'Post', ['title', 'description'], { ownerId: user.id, status: 'draft' });

      // Author cannot delete posts that have a 'Published' status
      cannot('delete', 'Post', { status: 'published' });
    },
```

In CASL, direct rules (like `can`) are combined using `OR` and inverted rules (like `cannot`) and conditions are combined using `AND`. The author:

-   can create Posts in their assigned categories `OR`
    
-   can update title/description of the Posts that they own `AND` are in Draft state
    
-   `AND` cannot delete published Posts
    

Remember, for the same action/subject pair, you should define `cannot` rules _after_ `can` rules, else they will be overridden.

When dealing with a `Post` object that has a nested `details` field (for example, `details.author.name`, `details.metadata.tags`), you can use the `*` and `**` wildcards to control access based on the level of nesting.

-   The `*` wildcard matches only the **top-level fields** within a given object.
    
    This means it will grant access to fields that are directly inside the `details` object, but not any **nested fields**.
    
-   The `**` wildcard allows access to **all fields**, including deeply nested ones, within the object.
    
    This means it will grant access to every field inside `details`, regardless of how deep the nesting goes.
    

```
// gives access to all nested fields under Post.details, no matter how deep they are
can('read', 'Post', ['details.**']) 

// give access to only the top level fields (such as details.body, details.author)
can('read', 'Post', ['details.*'])
```

Note that `*` matches all symbols except dot (.)

The ability instance in `defineAbilities.ts` can be used to enforce permissions across your app. This file can act as a shared library, so both the front-end (for example: React) and back-end (for example: Node.js) can access and use the same permission logic.

While the `AbilityBuilder` works for permissions defined inside the system, if your application receives externally defined permissions as a JSON object, like:

```
[
  {
    action: 'read',
    subject: 'Post'
  },
  {
    inverted: true, // indicates cannot rules
    action: 'delete',
    subject: 'Post',
    conditions: { published: true }
  }
]
```

you can pass it directly into the `Ability` constructor as follows:

```
  const defineAbilityFor = (permissions: (SubjectRawRule<any, any, MongoQuery<AnyObject>>)[]) => {
    return createMongoAbility<[Actions, Subjects]>(permissions);
  }

  export default defineAbilityFor;
```

Using JSON to define rules also has the added advantage of **reducing your app's bundle size** since you don't need to include heavy dependencies like `AbilityBuilder`!

### **Step 3: Create ability instance for the user**

After successful authentication by your Login or Authentication service, you’ll fetch the user data or associated permissions (depending on the approach you choose in step 2) to your app and create an ability instance in your login component (or similar) as follows:

```
// login.tsx

import defineAbiltyFor from './config/defineAbilities.js'

const LoginComponent = () => {
    // Get user data from API. Then,
    const ability = defineAbilityFor(user)
}
```

### **Step 4: Provide ability instance to the entire app**

[Contexts][28] are used in React to share data across components without having to pass props through the component tree. Add the below code in a `can.ts` file:

```
// can.ts

import {createContext} from 'react'
import {createContextualCan} from '@casl/react'

export const AbilityContext = createContext()
export const Can = createContextualCan(AbilityContext.Consumer)
```

This creates a `Can` component, which you will use in the next step to determine if a user has permissions to perform an action, based on the abilities passed through `AbilityContext`.

Next, use the above `AbilityContext` to wrap your `App` component and set the `ability` instance created in step 3 as the `value`, so that the abilities are available to all the components in the application.

```
ReactDOM.render(
<AbilityContext.Provider value={ability}>
  <App />
</AbilityContext.Provider>,
  document.getElementById('root')
)
```

### **Step 5: Check user permission using abilities**

There are two ways to determine if a user has permission to perform an action: using `ability.can` for programmatic checks and using the `Can` component for conditional rendering.

Assume this is your post object:

```
// post.ts

export interface Post {
    ownerId: string;
    category: string;
    title: string;
    description: string;
    status: string;
}
const post: Post = {
    ownerId: 'yourUserName',
    category: 'Lifestyle',
    title: 'My First Post',
    description: 'This is the description for the first post.',
    status: 'published'
};
```

Both `ability.can` and the `Can` component take action, subject, and an optional field and check these parameters against the defined abilities.

```
// user-profile.tsx

import { useAbility } from '@casl/react';
import { subject } from '@casl/ability';
import { AbilityContext, Can } from '../config/can';
// other imports

export default const UserProfile = () => {
  const ability = useAbility(AbilityContext);

  const canCreatePost = ability.can('create', 'Post'); //==== Example (1) ====
  const canDeletePost = ability.can('delete', post); //==== Example (2) ====

  return (
    <div>
      <h1>User Profile</h1>

      {/* ==== Example (3) ==== */}
      <Can I="delete" a="Post">
        <p>You can delete a Post.</p>
      </Can>

      {/* ==== Example (4) ==== */}
      <Can I="delete" this={subject('Post', post)}>
        {(allowed) =>
          allowed ? <button disabled={!allowed}>Delete Post</button> 
          : <p>Cannot delete post.</p>
        }
      </Can>
    </div>
  );
}
```

See how readable the permission check is?

Now look at the four examples.

Example `(1)` returns true because user can create posts.

Example `(2)` should return true because you can delete your published posts, **but it returns** **false**. Why? Because even though `post` is an instance of `Post`, CASL cannot detect its subject type (type of `post` object) as CASL uses `object.constructor.modelName` or `object.constructor.name` for subject type detection.

You have two ways to fix this.

-   Use a `subject` helper to specify the type of `post` instance as shown in example `(4)` (it returns true)
    
-   Use a custom subject type detection algorithm to state which property CASL needs to use to discern the type. This can be done using `detectSubjectType` like this:
    
    ```
      // defineAbilities.ts
    
      export default function defineAbilityFor(user: User) {
        const { can, cannot, build } = new AbilityBuilder(createAppAbility);
        // rules defined as explained above
    
        return build({
          detectSubjectType: object => object.__typename
        });
      }
    
       // post.ts
    
       const post: Post = {
          ownerId: 'yourUserName',
          category: 'Lifestyle',
          title: 'My First Post',
          description: 'This is the description for the first post.',
          status: 'published',
          __typename: 'Post'
      };
    ```
    

Now, example `(2)` should return true.

Next, look at example `(3)`. It also returns true because the check is on subject _type_ and not on the subject. Remember, when you check on a

> -   subject, you ask "can I delete THIS post?"
>     
> -   subject type, you ask "can I delete SOME article?" (that is, at least one post) ([Source][29])
>     

While CASL offers a powerful approach to granular access control, it doesn’t directly address our requirement to apply conditions based on user attributes.

Although third-party libraries can provide convenience, their documentation is sometimes unclear, outdated, or inaccurate, and there may be vulnerabilities within the components themselves. For complete control over your security processes, implementing custom authorization logic may be necessary.

## 2: Build Your Custom Permissions Validation Framework

To build a custom validation framework, let’s look into how the policies are defined, validated, and enforced and see how all these pieces come together.

### **Policy Definition using Policy as Code**

You have already learned that your access control policies should reside in the back-end. For the custom implementation, you will be using **Policy as Code** or PaC. This refers to the practice of defining and managing policies using code or configuration files (like YAML, JSON or DSL) rather than manual processes or documentation. This allows policies to be version-controlled, automatically enforced, and more reliable in dynamic environments. These policies are authored by the security admin and are managed by a Policy Service.

In YAML, your policy may look like this, where the `policies` list is represented by a sequence (`-`).

```
policies:
  - policyId: P001
    resource: Post
    action: view
    effect: allow
    conditions: '(resource.tag != "exclusive") || (resource.tag == "exclusive" && user.role == "premium user")'
  - policyId: P002
    resource: Post
    action: edit
    effect: allow
    conditions: 'resource.ownerId == user.id'
  # other policies
```

The **policyId** is a unique identifier for the policy. The **resource** specifies the type of resource the policy applies to, such as "Post." The **action** defines what operation is allowed or denied on the resource, like "edit." The **effect** determines whether the action is allowed or denied, with values like "allow" or "deny." The **conditions** represent the logical expression that must be satisfied for the policy to apply, such as checking if the resource's owner ID matches the user's ID.

As you can see, the conditions in the policies are in a TypeScript-like, human-readable format. This is because they are written using Google's **Common Expression Language (CEL)**.

CEL is an open-source, platform-independent language that is fast and safe for executing user-defined expressions ([unlike `eval()`][30], especially on the server-side). Its performance is enhanced because CEL is compiled once into an abstract syntax tree, which is then used to evaluate against multiple inputs in nanoseconds or microseconds.

Let’s redefine the structure as follows:

```
policies:
  Post:
    view:
      policyId: P001
      resource: Post
      action: view
      effect: allow
      conditions: '(resource.tag != "exclusive") || (resource.tag == "exclusive" && user.role == "premium user")'
    edit:
      policyId: P002
      resource: Post
      action: edit
      effect: allow
      conditions: 'resource.ownerId == user.id'
    publish:
      policyId: P003
      resource: Post
      action: publish
      effect: allow
      conditions: 'user.role == "publisher" && resource.category in ["Tech", "Lifestyle"] && resource.status == "approved" && system.time >= "09:00:00" && system.time <= "18:00:00"'

  Comment:
    create:
      policyId: C001
      resource: Comment
      action: create
      effect: deny
      conditions: 'user.role == "guest"'
    edit:
      policyId: C002
      resource: Comment
      action: edit
      effect: allow
      conditions: 'resource.authorId == user.id'
    delete:
      policyId: C003
      resource: Comment
      action: delete
      effect: allow
      conditions: 'resource.authorId == user.id || user.role in ["moderator", "admin"]'
  # other policies
```

Here’s why:

1.  **Improved Structure**: By grouping policies by resource and action, you make it much easier to navigate. Adding new policies or actions becomes a breeze, without disrupting the overall setup. For example, if you need to add an `archive` action for the `Post` resource, you simply add it under the `Post` object. This modular approach makes maintaining and extending policies much simpler.
    
2.  **Efficient Lookup**: When these policies are accessed in your app as JavaScript objects, lookups are efficient and constant in time (O(1)). This is because policies are stored using direct key lookups, where each policy can be accessed instantly by its unique key. This significantly boosts performance compared to searching through a list (which would take O(n) time). As the number of policies grows, your lookup time stays the same, so performance doesn't slow down.
    
3.  **Easier Auditing & Version Control**: This structure also makes auditing and version control much smoother. You can easily track changes to policies and manage updates without the risk of accidentally disrupting other policies.
    

💡

To understand how string literals work in CEL for the above conditions, check out some examples [here][31].

### Workflow Overview

When the application starts, you fetch policies from the Policy Service using RTK Queries, which automatically caches them in your RTK cache. Once the user is authenticated, their data—like role and department—will also be stored in the cache.

To persist this data for the duration of the session, you'll need to store it in session storage, but be mindful to avoid storing sensitive information. For the purposes of our permission validator, we'll read user data directly from the cache.

At points where policy enforcement is needed, such as in components or routes (let’s call these _policy enforcement points_), the application will call our custom permission hook. This hook then validates permissions based on the policies, the user, the resource, and the environment attributes to either grant or deny access to the requested action.

![Attribute-based Access Control Workflow](https://cdn.hashnode.com/res/hashnode/image/upload/v1737780571125/1dba1568-ee54-4bea-8d25-5c058fa6da68.jpeg)

### Policy Validation

#### Step 1: Create a permission validator

Begin by defining the types for `Action`, `Resource`, and `Policy` in your code:

```
// validator.type.ts

export type Action = "view" | "edit" | "create" | "approve" | "publish" | "delete";
export type Resource = Partial<Post> | Partial<User> | Partial<Comment>;

export type PolicyEffect = "allow" | "deny"

export interface Policy {
  policyId: string;
  resource: string;
  action: string;
  effect: PolicyEffect;
  conditions: string;
}
```

You might be wondering why you need to use `Partial` here. By using `Partial`, we’re saying that each field on `Post`, `User`, or `Comment` is not required when performing certain actions. This is particularly useful when you validate create actions, where the object may not be fully formed yet – some fields might still be missing. For example, when creating a new `Post`, you might only have a title and content, but not the full list of comments or tags.

Then, install `cel-js`, a CEL evaluator for JavaScript to be used in your validator.

```
npm i cel-js
```

Create a `validatePermission` function to pull the action rules for the given resource from the provided `policies` object and build a context that includes the `user`, `resource`, and `system` information. Note that you may have to use `__typename` (or similar) for resource type detection, similar to what you did in CASL.

Using the `cel-js` library, evaluate the `conditions` specified in the action rules, which will check if the user meets the required criteria for the action. If the conditions are satisfied, the policy "takes effect," meaning the specified action is enforced according to the defined effect – whether allowing or denying the action. If there are no rules defined or an error occurred during evaluation, deny by default.

```
// validator.ts

import * as cel from 'cel-js';
// other imports

export const validatePermission = (
  action: Action,  
  resource: Resource,  
  system: System, 
  user: User,
  policies: { [resourceKey: string]: { [actionKey: string]: Policy } }
): boolean => {

  const actionRules = policies[resource.__typename]?.[action];
  if (!actionRules) return false; 

  try {
    const context = {
      user: user,  
      resource: resource,  
      system: system,  
    };

    return cel.evaluate(actionRules.conditions, context) && actionRules.effect === "allow";

  } catch (error) {
    console.error('Error evaluating permission condition:', error);
    return false;
  }
};
```

Any component that needs to validate a user’s permission for an action requires fetching policies from the cache and retrieving the user from the global state, while also managing loading and error states.

To avoid this code duplication and encapsulate the logic for the above operations, you can create a custom hook that provides a consistent interface for permission validation across components.

#### Step 2: Create a custom hook to encapsulate reusable logic

Since the policies were already fetched from the policy management service during app startup, the same RTK Query will now retrieve them directly from the cache. Follow the below reference to create a `usePermission` custom hook.

Notice how the `skip: !userId` condition is used to ensure that the policies are only fetched if a valid `userId` is present, preventing unnecessary network requests.

```
// usePermission.ts

import { useSelector } from 'react-redux';
import { useGetPoliciesQuery } from './services/api'; 
import { validatePermission } from './validator';
// other imports

export const usePermission = (action: Action, resource: Resource, system: System): boolean => {

  const user = useSelector((state: any) => state.user); 

  const { data: policies, isLoading: isPoliciesLoading, isError: isPoliciesError } = useGetPoliciesQuery({
    skip: !userId,
  });

  if (isPoliciesError || !policies) {
    console.error('Failed to fetch policies');
    return false;
  }

  const hasPermission = validatePermission(action, resource, system, user, policies);

  return hasPermission;
};
```

#### Step 3: Add contextual action validation

More often than not, even if a user has the required permission to perform an action, they still might not be allowed to do so because of contextual business logic. For example:

-   **Post approval**: An editor may have permission to approve a post, but if they’re in the middle of editing it and there are unsaved changes, the approve button should be hidden.
    
-   **Commenting**: The comment button should be disabled if a user hasn’t typed anything, even if they have permission to comment.
    
-   **Category creation**: A user with permission might still be blocked from creating a category if the name is empty or already exists.
    

These rules depend on the current state of the application and need to be handled dynamically. To handle these contextual actions, the validation rules should be defined based on the current state of the application (for example, the post being edited, content being typed, category name availability).

Before delving into how custom hooks can handle these validations, let’s first lay out the rules for these contextual actions:

```
// contextualRules.ts

import _ from 'lodash';
// other imports

const contextualActionRules = {
  Post: {
    approve: (state: PostState, resource: Resource) => {
      // Prevent approval if the post is currently being edited
      const postId = resource?.id;
      return postId && !state[postId]?.isEditing;
    },
  },
  Comment: {
    create: (state: CommentState, resource: Resource) => {
      // Prevent creating a comment if the comment content is empty
      return !_.isEmpty(resource?.content);
    },
  },
  Category: {
    create: (state: CategoryState[], resource: Resource) => {
      // Prevent creating a category if the name is empty or already exists
      const categoryName = resource.name?.trim();
      return (
        !_.isEmpty(categoryName) &&
        !state.some(category => category.name === categoryName)
      );
    },
  },
};
```

Now, update the `usePermission` hook to incorporate checks for `contextualActionRules`. If a contextual rule is defined for the specified `resource` and `action`, it will be evaluated alongside the policy-based permission using the current application `state`. If no contextual rule is found, the hook will return the result based solely on the policy-based permission.

```
// usePermission.ts

export const usePermission = (action: Action, resource: Resource, system: System): boolean => {

  const state = useSelector((state: RootState) => state);

  /**
    This part of the code is same as above
  **/ 

  const hasPermission = validatePermission(action, resource, system, user, policies);
  const validateContextualRule = contextualActionRules[resource?.__typename]?.[action];

  if (validateContextualRule) {
    const contextualActionAllowed = validateContextualRule(state, resource);
    return hasPermission && contextualActionAllowed;
  }

  return hasPermission;
};
```

There is one thing that most **definitely** needs to be changed in the above code. Take a guess?

**How is** `usePermission` **beneficial for contextual validations based on the app state?** Because the hook is subscribed to the application state! So, when something changes – like typing into a comment box – the hook re-renders. Since the Comment component relies on this hook to control the comment button’s state, any update in the hook also triggers a re-render of the component. This means that as you type, the button becomes visible, and if the content is cleared, the button gets disabled.

But, we don’t want the `usePermission` hook to re-render _every_ time the app state changes. Let’s fix that.

Define `resourceToStateMap` outside the `usePermission` hook to avoid redundant re-creation for every call. `useSelector` subscribes only to the relevant slice of state based on the resource type and ID.

```
// Bad practice: Instead of this,
const state = useSelector((state: RootState) => state);

// Good practice: Do this
const resourceToStateMap: Record<string, (state: RootState, id: string | number) => any> = {
  Post:     (state, id) => state.posts[id],
  Comment:  (state, id) => state.comments[id],
  User:     (state, id) => state.user,
  // Add more 
};

const resourceType = resource?.__typename;
const resourceId = resource?.id;
const stateSlice = useSelector((state: RootState) => {
  if (resourceType && resourceId && resourceToStateMap[resourceType]) {
    return resourceToStateMap[resourceType](state, resourceId);
  }

  return null;
});
```

This is why it’s important to make selectors as granular as possible.

-   **Avoid over-fetching**: You’re not selecting the entire state anymore, just the piece of it that’s necessary for evaluating the permission and contextual rules. This is much more efficient, especially in large applications.
    
-   **Optimized re-renders**: With granular state selection, only the relevant state slice will trigger a re-render, improving the performance of the application, especially when many components are using the `usePermission` hook.
    

Now that you’ve completed the bulk of the permission validation logic, let’s make it prettier to use.

#### Step 4: Create a wrapper for conditional rendering

Create a `Can` component that checks if the user has permission to perform a specific action on a resource using the `usePermission` hook. If permission is granted, it renders the `children` or calls it as a function with the permission status (this will be used to disable buttons). If not, it displays a fallback element.

```
// Can.tsx

import { usePermission } from '../hooks/usePermission';

export interface CanProps {
  I: Action;
  a: Resource;
  context: System;
  fallback?: React.ReactNode; 
  children: React.ReactNode | ((allowed: boolean) => React.ReactNode); 
}

const Can: React.FC<CanProps> = ({
  I,
  a,
  context,
  fallback = null,
  children,
}) => {
  const hasPermission = usePermission(I, a, context);

  // If `children` is a function, call it with `hasPermission`
  if (typeof children === 'function') {
    return <>{children(hasPermission)}</>;
  }

  // Otherwise, render children or fallback
  if (hasPermission) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

export default Can;
```

### Policy Enforcement

You can use the `usePermission` hook for programmatic checks and the `Can` component for conditional rendering.

**1\. Using** `Can` **to hide/show components**

```
<Can
  I="approve"
  a={post}
  context={system}
  fallback={<p>You do not have access to delete a comment.</p>}
>
  <YourComponent />
</Can>
```

**2\. Using** `Can` **to disable components**

```
<Can
  I="delete"
  a={comment}
  context={system}
>
  {(allowed) => (
     <button onClick={deleteComment} disabled={!allowed}>
       Delete Comment
     </button>
   )}
</Can>
```

**3\. Using** `usePermission` **to create protected routes**

```
// ProtectedRoute.tsx

import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute() {
  const hasPermission = usePermission("view", user, context);

  return hasPermission ? <Outlet /> : <Navigate to='/login' />
}

// Route set-up
<Route element={<ProtectedRoute />}>
  <Route path='/' element={<Admin />} />
</Route>
```

**4\. Using** `usePermission` **to skip API calls**

```
const hasPermission = usePermission("view", user, context);

const { data: user, isLoading: isUserLoading, isError: isUserError } = useUserQuery({
    skip: !hasPermission,
});
```

That's it! Now, let's wrap up with a quick summary.

## Let’s Summarize

In this handbook, you learned how to implement scalable access control using both CASL and a custom solution. We started by diving into different access control models, focusing on ABAC, and explored two ways to enforce ABAC-based rules.

With CASL, you saw how easy it is to define user abilities, whether you’re using a shared library or external permissions. We walked through how to set up access control for various user actions, all with clean, readable code. You also learned how to add advanced features like dynamic conditions and field-level access for even more granular control.

On the other hand, you also learned how to build a custom permission framework tailored to your app’s specific needs. You combined contextual state-based checks with policy-based rules, creating a flexible and scalable access control system. Along the way, you explored concepts like Policy as Code, CEL (Common Expression Language), custom hooks, caching, and conditional fetching using RTK queries. You also saw how to enforce access control on components, protected routes, and more.

Both approaches share some key benefits:

-   **Dynamic and scalable**: Adding new actions or entities is as simple as updating a single file – no code rewrites required.
    
-   **Separation of concerns**: Keeps validation logic separate from UI components, which makes your code easier to maintain.
    
-   **Readable**: You can define permissions using simple, conversational language like "_Can I read this post?_" or "_Can I create a comment?_"
    
-   **Reusable components**: You can reuse wrapper components and hooks across your app to reduce duplication.
    
-   **State reactivity**: Works seamlessly with React state, ensuring that your access control rules are reflected dynamically in your UI.
    

### **Further Scaling Considerations**

If your policy payload is cumbersome or validation logic is computationally expensive, consider the following optimizations:

-   **Memoize the output**: Use `useMemo` to cache the result of expensive computations, but be mindful that `useMemo` itself can be costly if overused.
    
-   **Modularize policies**: Break down your policies into separate files based on their domain. Fetch only the essential policies at startup and lazy load non-essential ones on demand.
    
-   **Offload validation to the backend**: Move policy validation logic to the backend and consider server-side rendering. But, keep in mind that some dynamic checks still need to occur on the frontend.
    

Don’t forget to implement access control on the back-end too and make sure to filter-out sensitive data before sending it to the client!

## Conclusion

Whether you choose CASL for its simplicity and power or implement your own custom solution for more flexibility, you now have the tools and knowledge to integrate access control into your React applications, ensuring your users can only access what they’re authorized to.

If you enjoyed reading this (or even if you didn’t ;)), drop me a message on [LinkedIn][32] with your feedback.

Happy coding, and may your app's permissions be as scalable as your user base!

[1]: #heading-what-is-access-control-how-is-it-different-from-authz-authn-and-permissions
[2]: #heading-multi-layered-access-control
[3]: #heading-hogwarts-in-harmony-a-unified-defense
[4]: #heading-access-control-models
[5]: #heading-why-abac
[6]: #heading-attribute-based-access-control-in-depth
[7]: #heading-core-components
[8]: #heading-how-does-abac-work
[9]: #heading-who-defines-abac-policies
[10]: #heading-where-should-you-enforce-it-back-end-or-front-end
[11]: #heading-where-are-policies-defined
[12]: #heading-1-implementing-permissions-with-casl
[13]: #heading-2-build-your-custom-permissions-validation-framework
[14]: #heading-policy-definition-using-policy-as-code
[15]: #heading-workflow-overview
[16]: #heading-policy-validation
[17]: #heading-policy-enforcement
[18]: #heading-lets-summarize
[19]: #heading-further-scaling-considerations
[20]: #heading-conclusion
[21]: https://en.wikipedia.org/wiki/OWASP
[22]: https://www.optiq.ai/blog-post/what-is-attribute-based-access-control-explained
[23]: https://casl.js.org/v6/en
[24]: https://casl.js.org/v6/en/package/casl-angular
[25]: https://casl.js.org/v6/en/package/casl-vue
[26]: https://casl.js.org/v6/en/package/casl-aurelia
[27]: https://www.mongodb.com/docs/manual/reference/operator/query/
[28]: https://react.dev/reference/react/createContext
[29]: https://casl.js.org/v6/en/guide/intro
[30]: https://owasp.org/www-community/attacks/Direct_Dynamic_Code_Evaluation_Eval%20Injection
[31]: https://stackblitz.com/edit/github-b9k23yjf-kbho9jtj?file=demo.ts
[32]: https://www.linkedin.com/in/samhitharamaprasad/