---
title: 如何在 Next.js 应用中使用服务端渲染提升 SEO
date: 2024-11-26T13:14:43.283Z
author: Joan Ayebola
authorURL: https://www.freecodecamp.org/news/author/joanayebola/
originalURL: https://www.freecodecamp.org/news/server-side-rendering-in-next-js-for-improved-seo/
posteditor: "wendy chen"
proofreader: ""
---

服务端渲染（SSR）是一种可以帮助提升网站 SEO 的网页开发技术。它通过在服务器端生成 HTML 内容来响应用户的请求。

<!-- more -->

这种方法与客户端渲染（CSR）形成对比，在客户端渲染中，内容作为基本的 HTML 框架传递，JavaScript 在浏览器中获取和显示数据。

SSR 提供了显著的 SEO 优势，使其非常适合使用 Next.js 这样流行的 React 框架。让我们来讨论一下在 Next.js 中使用 SSR 如何提升网站的搜索引擎可见性。

### 内容目录

1.  [什么是服务端渲染][1]？
2.  [如何开始使用 Next.js 和 SSR][2]
3.  [Next.js 如何实现服务端渲染][3]
4.  [使用 getStaticProps 和 getServerSideProps 获取数据][4]
5.  [SSR 为 Next.js 带来的 SEO 优势及优化方法][5]
6.  [结论][6]

## 什么是服务端渲染？

服务端渲染（SSR）是一种网页开发技术，网页服务器在将完整的 HTML 内容发送到用户的浏览器之前生成该内容。

这与客户端渲染（CSR）不同，客户端渲染是在浏览器下载基本 HTML 结构后再使用 JavaScript 获取和显示内容。

## 如何开始使用 Next.js 和 SSR

开始使用 Next.js 和服务端渲染（SSR）需要几个步骤。以下是一个帮助你设置 Next.js 项目并实现 SSR 的分步骤指南。

### 第一步：安装 Next.js

首先，你需要安装 Next.js。你可以使用 `create-next-app` 来设置一个具有默认配置的新项目。在终端运行如下命令：

```
npx create-next-app my-next-app
cd my-next-app
npm run dev
```

此命令会在名为 `my-next-app` 的文件夹中创建一个新的 Next.js 应用程序，并启动开发服务器。

### 第二步：了解项目结构

Next.js 通过一些默认的文件夹和文件组织项目：

-   **`pages/`**：该文件夹包含应用程序的所有页面。每个文件代表应用中的一个路由。
-   **`public/`**：可以放置图像等静态资源。
-   **`styles/`**：包含用于应用程序样式的 CSS 文件。

### 第三步：创建一个使用 SSR 的简单页面

现在，让我们创建一个使用 SSR 的简单页面。

新建文件 `pages/index.js`：

```javascript
// pages/index.js
import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      <h1>欢迎使用 Next.js 和 SSR</h1>
      <p>从服务器获取的数据：{data.message}</p>
    </div>
  );
};

export async function getServerSideProps() {
  // 从 API 或其他来源获取数据
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  // 将数据作为 props 返回给 Home 组件
  return {
    props: {
      data,
    },
  };
}

export default Home;
```

让我们详细讨论一下这段代码。对于 `Home` 组件：

- `Home` 组件是一个接收 `props` 的函数式组件。
- `data` prop 包含从服务器获取的数据。
- 在组件内部，我们渲染欢迎消息和获取的数据。

`getServerSideProps` 函数：

- 这个函数从 `pages/index.js` 文件中导出。
- 对于每个请求，这个函数在服务器上执行。
- 在此函数中可以执行异步操作，如从外部 API 获取数据。
- 获取的数据作为一个带有 `props` 属性的对象返回，该对象会作为 props 传给 `Home` 组件。

你可以为 `getServerSideProps` 函数添加错误处理，以应对数据获取过程中可能发生的问题。以下是一个例子：

```javascript
export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    if (!res.ok) {
      throw new Error('数据获取失败');
    }
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: { message: '数据获取时出错' },
      },
    };
  }
}
```

#### 第四步：运行应用程序

如果开发服务器还未启动，请启动它：

```
npm run dev
```

打开浏览器并访问 `http://localhost:3000`。你应该看到页面上显示了从 API 获取的信息。

## Next.js 如何实现服务端渲染

Next.js 提供了一种无缝的方式来启用 SSR 和静态站点生成（SSG）。默认情况下，它会预渲染每个页面。根据用例的不同，你可以在 SSR 和 SSG 之间进行选择：

-   **服务端渲染（SSR）**：页面在每次请求时渲染。
-   **静态站点生成（SSG）**：页面在构建时生成。

Next.js 根据你在页面组件中实现的函数（`getStaticProps` 和 `getServerSideProps`）来确定使用哪种渲染方式。

Next.js 使用 `pages/` 目录来定义路由。在这个目录中的每个文件都对应你应用中的一个路由。

-   `pages/index.js` → `/`
-   `pages/about.js` → `/about`
-   `pages/posts/[id].js` → `/posts/:id`

以下是一个页面组件的基础示例：

```javascript
// pages/index.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>欢迎来到 Next.js</h1>
      <p>这是首页。</p>
    </div>
  );
};

export default Home;
```

### 使用 `getStaticProps` 和 `getServerSideProps` 进行数据获取

`getStaticProps` 用于静态生成。它在构建时运行，并允许你获取数据并将其作为 props 传递给页面。对于不经常更改的数据，使用它。

示例：

```javascript
// pages/index.js
import React from 'react';

const Home = ({ posts }) => {
  return (
    <div>
      <h1>博客文章</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

// 该函数在构建时运行
export async function getStaticProps() {
  // 从 API 获取数据
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;
```

`getServerSideProps` 用于服务器端渲染。它在每个请求时运行，并允许你在请求时获取数据。

示例：

```javascript
// pages/index.js
import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      <h1>使用 Next.js 进行服务器端渲染</h1>
      <p>从服务器获取的数据: {data.message}</p>
    </div>
  );
};

// 该函数在每个请求时运行
export async function getServerSideProps() {
  // 从外部 API 获取数据
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
```

## 使用 SSR 进行 SEO 的优势及优化方式

在本节中，我们将了解使用 SSR 进行 SEO 的主要优势，并提供易于遵循的提示，告诉你如何在 Next.js 应用中充分利用这些优势。

### 1\. 提高搜索引擎索引

客户端渲染 (CSR) 可能导致搜索引擎难以正确索引内容，因为内容是在用户的浏览器中通过 JavaScript 渲染的。

然而，SSR 会在将内容发送到用户的浏览器之前在服务器上渲染，确保 HTML 是完整的，搜索引擎可以轻松抓取和索引。

**对重要页面使用 SSR：** 确保关键页面如着陆页、博客文章和产品页面在服务器上渲染，以便更好地进行索引。

示例 – 使用 SSR 进行博客文章页面：

```javascript
// pages/blog/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const BlogPost = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>加载中...</div>;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.example.com/posts/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}

export default BlogPost
```

-   **BlogPost 组件：** 此组件显示一篇博文。它使用 `next/head` 来管理元标签，这对 SEO 很重要。
-   **getServerSideProps 函数：** 此函数从 API 获取博文数据。它在每次请求此页面时在服务器上运行，确保内容在搜索引擎抓取页面时已准备好进行索引。

### 2\. 加快加载时间

搜索引擎如 Google 使用页面加载速度作为排名因素。SSR 可以改善首次加载时间，因为服务器会向浏览器发送一个完全渲染的页面，增强感知性能和用户体验。

**优化服务器响应时间：** 确保你的服务器优化以实现快速响应。使用缓存策略以减轻服务器负载。

示例 – SSR 的 cache-control header：

```javascript
export async function getServerSideProps({ res }) {
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  const resData = await fetch('https://api.example.com/data');
  const data = await resData.json();

  return {
    props: {
      data,
    },
  };
}
```

-   **`getServerSideProps` 函数：** 此函数设置 cache-control 头以将响应缓存 10 秒，并在重新验证的 59 秒内提供陈旧内容。这样可以提高服务器响应时间和页面加载速度，从而改善 SEO。

### 3\. 改善社交媒体分享

在社交媒体上分享链接时，像 Facebook 和 Twitter 这样的平台会抓取 URL 内容以生成预览。SSR 确保必要的元数据在初始 HTML 中可用，从而生成更好的预览并提高点击率。

示例 – 向页面添加元标签：

```javascript
import Head from 'next/head';

const Page = ({ data }) => (
  <div>
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <h1>{data.title}</h1>
    <p>{data.content}</p>
  </div>
);
```

-   **`Page`组件：** 该组件使用`next/head`添加SEO元标签，包括用于社交媒体预览的Open Graph标签。这确保了当页面被分享时，社交媒体平台可以使用所提供的元数据生成丰富的预览。

### 4\. 增强用户体验

更快、更响应的网站提升了整体用户体验，导致更长的访问时长和更低的跳出率。这两个因素都积极影响您的SEO排名。

**使用静态生成（SSG）预渲染较不动态的内容页面：** 对不经常变化的页面使用SSG，以减少服务器负载并提高性能。

示例 – 使用SSG为静态页面：

```javascript
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/static-data');
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10, // 至多每10秒重新验证一次
  };
}

const StaticPage = ({ data }) => (
  <div>
    <h1>{data.title}</h1>
    <p>{data.content}</p>
  </div>
);

export default StaticPage;
```

-   **`StaticPage`组件：** 该组件显示从API获取的静态内容。
-   **`getStaticProps`函数：** 此函数在构建时获取数据，并每十秒重新验证一次，确保内容始终新鲜，同时减少服务器负担。

## 结论

结合使用服务端渲染和Next.js就像为您的网站在搜索引擎中提供了额外的推动力。利用预构建的内容以及流畅的用户体验，您的网站可以更自然地被更多人看到。

这对任何类型的网站都非常有效，从在线商店到博客。使用Next.js与SSR能够轻松构建一个搜索引擎友好且用户喜欢的网站。

这就是本篇文章的全部内容！如果您想继续交流或者有问题、建议或反馈，欢迎随时联系我的[LinkedIn][7]。如果您喜欢这篇内容，可以考虑[请我喝杯咖啡][8]，以支持更多面向开发人员的内容创作。

[1]: #heading-what-is-server-side-rendering
[2]: #heading-how-to-get-started-with-nextjs-and-ssr
[3]: #heading-how-nextjs-enables-server-side-rendering
[4]: #heading-data-fetching-with-getstaticprops-and-getserversideprops
[5]: #heading-benefits-of-ssr-for-seo-with-nextjs-and-how-to-optimize
[6]: #heading-conclusion
[7]: https://ng.linkedin.com/in/joan-ayebola
[8]: https://www.buymeacoffee.com/joanayebola

