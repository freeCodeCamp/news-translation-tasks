```markdown
---
title: 学习 HTTP 方法，如 GET、POST 和 DELETE ——含代码示例的手册
date: 2025-02-07T13:51:40.664Z
author: Joan Ayebola
authorURL: https://www.freecodecamp.org/news/author/joanayebola/
originalURL: https://www.freecodecamp.org/news/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/
posteditor: ""
proofreader: ""
---

当你与网站或应用互动时，幕后的过程非常复杂。其核心之一就是浏览器或应用如何与服务器通信。HTTPS 方法定义了需要执行的操作——它可能是获取数据、发送信息或更改现有内容。

<!-- more -->

每种方法都有特定的用途，以保持网络通信的清晰、安全和有序。

在本文中，我们将分解最常见的 HTTPS 方法，并解释它们如何运行以实现顺畅的在线互动。

### 目录

1.  [GET 方法][1]
    
2.  [POST 方法][2]
    
3.  [PUT 方法][3]
    
4.  [PATCH 方法][4]
    
5.  [DELETE 方法][5]
    
6.  [HEAD 方法][6]
    
7.  [OPTIONS 方法][7]
    
8.  [TRACE 方法][8]
    
9.  [CONNECT 方法][9]
    
10.  [总结][10]

## GET 方法

GET 方法是最常见的 HTTP 方法之一，用于从服务器请求数据。可以把它看作是索取信息而不做任何改变。

当你访问网页时，浏览器发送一个 GET 请求给服务器，要求页面的内容。然后服务器响应数据（如 HTML、图像或其他文件），浏览器进行显示。

关于 GET 的一个重要点是它不会对数据进行任何更改。它只是“读取”或检索信息。例如，当你浏览社交媒体或在线搜索产品时，应用或网站使用 GET 来显示数据而不更改它。

另一个关键点是 GET 请求将参数发送在 URL 中。这意味着任何请求的数据在浏览器的地址栏中都是可见的。例如，如果你在网店搜索产品，搜索词会包含在 URL 中。

### GET 请求示例

以下是使用 Fetch API 的 JavaScript 中一个简单的 GET 请求示例：

```javascript
fetch('https://api.example.com/products?category=shoes')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

在这个例子中，GET 请求被发送到 URL [`https://api.example.com/products`][11] ，带有查询参数 `category=shoes`，请求服务器返回鞋子类别的产品。

### GET 方法的使用场景

GET 主要用于获取信息，以下是一些常见的应用场景：

1.  **加载网页**：每当你在浏览器中输入 URL 或点击链接时，就是在进行 GET 请求。浏览器向服务器请求网页，服务器返回显示内容。
    
    -   示例：`GET /index.html HTTP/1.1`
    
2.  **从 API 获取数据**：开发者常使用 API（应用程序接口）从外部服务器获取数据。例如，天气应用使用 GET 请求从天气 API 获取当前温度。
    
    -   示例：

    ```javascript
    fetch('https://api.weather.com/current?city=Lagos')
       .then(response => response.json())
       .then(data => console.log(data));
    ```

3.  **搜索查询**：当你在 Google 或其他搜索引擎中进行搜索时会发出 GET 请求。你输入的搜索词包含在 URL 中，服务器返回匹配结果的列表。
    
    -   示例：`GET /search?q=JavaScript`
    
4.  **检索文件**：无论你是下载图片、查看 PDF 或播放视频，GET 都用于从服务器获取这些文件。
    
    -   示例：`GET /files/image.jpg`

### GET 请求的最佳实践

要有效地使用 GET 请求，遵循一些良好的实践以确保数据处理的顺畅和安全是很重要的：

1.  **仅用 GET 来检索数据**：GET 请求用于获取数据，而不是发送如密码或个人数据等敏感信息。因为 GET 请求中的参数包含在 URL 中，任何人都可以看到它们。例如，如果你网站登录时，不应该使用 GET 发送密码，因为它会出现在 URL 中。
    
    -   不该做的示例：

    ```javascript
    fetch('https://example.com/login?username=john&password=secret');
    ```

2.  **保持 URL 简洁**：由于 GET 请求的数据包含在 URL 中，过长的 URL 会造成问题。浏览器和服务器对于 GET 请求 URL 的数据量也有限制，所以避免放入太多信息。如果需要发送大量数据，考虑改用 POST 请求。
    
3.  **为性能启用缓存**：GET 请求通常会被浏览器缓存，即浏览器可以存储响应并无需再次联系服务器就重复使用。这提高了性能，尤其是对于不经常更改的静态内容，如图像或样式表。为此，确保服务器发送适当的 cache-control 头，以便可频繁请求的数据可以更快加载。
    
    -   设置缓存头的示例：
```

这份翻译保留了原文的 markdown 排版布局，同时翻译为中文。

4.  **避免使用 GET 请求来执行更改数据的操作**：由于 GET 是一种“安全”的方法，它仅应用于不会修改数据的操作。如果你想创建、更新或删除数据，应使用像 POST、PUT 或 DELETE 这样的方法。例如，如果你不小心使用 GET 来删除资源，可能会有人通过点击链接或刷新页面来删除它，这样做是不安全的。
    
    -   **不要**使用 GET 来进行删除操作的示例：

```
    GET /delete/user/123
```

5.  **慎用敏感数据**：由于 GET 请求是 URL 的一部分，它们可能被记录或者保存在浏览器的历史记录中。避免在 GET 请求中发送敏感信息，如密码、信用卡详细信息或隐私数据。处理此类信息时应始终使用 POST 方法，以确保信息保持隐藏。

## POST 方法

POST 方法用于向服务器发送数据。与仅用于获取数据的 GET 方法不同，POST 使你可以提交服务器可以处理或存储的信息。POST 通常用于用户输入数据的表单，如用户名、密码或联系信息。

当发出 POST 请求时，数据是在请求体中发送的，而不是在 URL 中。这样 POST 就成为发送更大或更敏感的信息（如密码）的理想选择，因为数据是隐藏的，不会出现在浏览器的地址栏中。

例如，当你注册一个网站或在博客上提交评论时，使用 POST 方法将你的信息发送到服务器，后者处理并将其存储在数据库中。

### POST 请求示例

以下是使用 Fetch API 将表单数据发送到服务器的 POST 请求示例：

```
const formData = {
  username: 'john_doe',
  password: 'mypassword123'
};

fetch('https://example.com/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch(error => console.error('Error:', error));
```

在这个例子中，POST 请求以 JSON 数据的形式在请求体中发送 `username` 和 `password`，这是一种安全地处理像密码这样的敏感信息的方法。

### GET 和 POST 的差异

虽然 GET 和 POST 都用于与服务器通信，但它们的目的不同，处理数据的方式也不同：

#### 数据传输：

-   **GET**：数据包含在 URL 中，使其在地址栏中可见。这限制了可发送的数据量。
    
-   **POST**：数据是在请求体中发送的，允许发送更多的信息。这也使得敏感信息不在 URL 中暴露。
    

#### 目的：

-   **GET**：用于获取数据。不会在服务器上改变或修改任何内容。
    
-   **POST**：用于发送可能会改变或增加服务器资源的数据，比如向数据库添加新用户或提交表单。
    

#### 缓存：

-   **GET**：GET 请求可以缓存。因此浏览器可能会保存响应，从而加快后续请求。
    
-   **POST**：POST 请求不会被缓存，因为它们通常涉及新的或更新的数据，这些数据不应重复使用。
    

#### 幂等性：

-   **GET**：多次发送相同的 GET 请求不会改变结果。每次都会返回相同的数据。
    
-   **POST**：多次发送相同的 POST 请求可能会导致不同的结果。例如，提交表单两次可能会创建重复的条目。
    

### POST 的常见使用场景

POST 是在需要向服务器发送数据时的理想选择，通常用于处理或存储。以下是一些常见的使用案例：

1.  **提交表单**：每当你在线填写并提交表单时，如注册新闻简讯或在注册表单中输入你的详细信息，POST 方法用于将该信息发送到服务器。服务器会处理数据，将其存储或根据需要执行其他操作。
    
    -   示例：

```
    <form action="https://example.com/register" method="POST">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Sign Up</button>
    </form>
```

2.  **用户身份验证**：当你使用用户名和密码登录网站时，通常使用 POST 将你的凭据安全地发送到服务器。服务器检查信息，如果凭据匹配，则授权访问你的账户。
    
3.  **上传文件**：POST 也用于上传文件，如图像、文档或视频。由于 POST 方法允许发送大量数据，它非常适合上传需要被处理或存储在服务器上的文件。
    
    -   使用表单上传文件的示例：

```
    <form action="https://example.com/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload File</button>
    </form>
```

4.  **创建新资源**：POST 经常在 API 中用于创建新资源。例如，当你向在线商店添加新产品时，POST 方法会被用来将产品详细信息发送到服务器，后者会将产品添加到商店的数据库中。
    
    -   发送产品数据的示例：

```
    const product = {
      name: 'New Sneakers',
      price: 59.99,
      category: 'Footwear'
    };
```

5.  **向 API 发送数据**：当需要发送将被处理或存储的数据时，POST 在 API 中被广泛使用。例如，一个记录你的健身进度的应用可能会使用 POST 将你的锻炼细节发送到服务器，在那里它会被存储和分析。
    
6.  **在线购物**：当你进行在线购物时，POST 用于将支付详情发送到服务器进行处理。服务器处理交易并用你的订单信息更新系统。
    

## PUT 方法

**PUT** 方法用于更新或替换服务器上的现有资源。它将数据发送到服务器，并指示创建一个新的资源（如果不存在）或替换当前的资源。PUT 的关键思想是你告诉服务器资源应该是什么样的。

例如，想象一个网站上的用户资料。如果你使用 PUT 更新你的资料，服务器将用你提供的新数据替换整个资料。资料的每个部分都会完全匹配你发送的内容，因此如果某些信息缺失，它们将被新数据覆盖。

### PUT 请求示例

下面是一个使用 Fetch API 更新用户数据的 PUT 请求示例：

```
const updatedProfile = {
  username: 'john_doe_updated',
  email: 'john_updated@example.com',
  age: 30
};

fetch('https://example.com/users/123', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedProfile)
})
.then(response => response.json())
.then(data => console.log('Updated:', data))
.catch(error => console.error('Error:', error));
```

在此示例中，PUT 请求使用新数据更新用户资料。资料将被 `username`、`email` 和 `age` 的值替换。如果某些数据缺失，例如 `phoneNumber`，它将从资料中删除。

### 何时使用 PUT

PUT 主要用于当你希望使用特定的完整数据更新或替换资源时。以下是一些使用 PUT 的常见情形：

1.  **更新资源**：当你需要对现有资源进行更改时，PUT 用于发送整个资源的新版本。例如，更新博客文章、产品详情或用户信息需要使用 PUT 完整替换资源。
    
    -   示例：

```
    const updatedPost = {
      title: 'New Title for My Blog',
      content: 'Updated blog content here...',
      author: 'John Doe'
    };

    fetch('https://example.com/blog/45', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedPost)
    });
```

2.  **创建资源（如果不存在）**：如果你发送一个 PUT 请求到一个尚无资源的特定 URL，服务器将使用你提供的数据创建一个。这在需要预先完全定义的资源时非常有用。
    
    -   如果产品不存在，创建产品的示例：

```
    const newProduct = {
      id: 101,
      name: 'New Sneakers',
      price: 59.99,
      category: 'Footwear'
    };

    fetch('https://example.com/products/101', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    });
```

3.  **与 API 协作**：在与 API 交互时，当你需要更新资源如用户资料、产品详情或任何其他结构化数据时，通常使用 PUT。例如，一个待办事项应用可能允许你使用 PUT 更新现有任务的新信息。
    
    -   更新任务的示例：

```
    const updatedTask = {
      title: 'Updated Task Title',
      completed: true
    };

    fetch('https://example.com/tasks/67', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });
```

### PUT vs. POST：关键区别

虽然 PUT 和 POST 都可以向服务器发送数据，但它们有不同的目的和行为：

#### 目的：

-   **PUT**：主要用于更新或替换现有资源。如果资源不存在，PUT 也可以创建它。
    
-   **POST**：主要用于创建新资源或提交需要处理的数据。POST 不替换现有资源，而是添加新的。
    

#### 数据处理：

-   **PUT**：用新数据替换整个资源。如果请求中缺少部分资源，该部分将被删除或替换。
    
-   **POST**：添加或更新资源而不替换整个资源。例如，提交表单时，POST 向服务器添加新数据而不删除已有内容。
    

#### 幂等性：

-   **PUT**：是幂等的，因此多次发送相同的 PUT 请求将始终产生相同的结果。无论你使用 PUT 更新资源多少次，结果都是一样的。
    
-   **POST**：不是幂等的，因此多次提交相同的 POST 请求可能会创建重复的资源或产生不同的结果。
    

-   **PUT**: 最适用于资源的更新和完全替换。例如，如果您要更新在线商店中的产品详情，PUT 确保您发送的所有细节都被新的替换。
    
-   **POST**: 用于创建新条目或发送需要处理的数据。例如，提交在线订单或填写联系表单时使用 POST。
    

## PATCH 方法

**PATCH** 方法用于对服务器上的资源进行部分更新。与完全替换整个资源的 PUT 方法不同，PATCH 允许您在不再发送完整数据的情况下更新资源的特定部分。这使得 PATCH 非常适合于只需调整某些细节而不影响资源的其他部分的场景。

例如，如果您有一个用户资料，只想更新电话号码，PATCH 使您可以仅发送新的电话号码，而其他部分资料保持不变。这种方式更高效，并减少了意外数据丢失的风险。

### 使用 PATCH 进行部分更新

PATCH 旨在对资源进行有针对性的更改。其工作原理如下：

-   **有针对性的更改**：当您使用 PATCH 时，您只需指定要更新的字段。例如，如果用户更新他们的邮箱地址，您仅需发送一个包含新邮箱的 PATCH 请求，服务器上的所有其他信息将保持不变。
    
-   **效率**：PATCH 比 PUT 更高效，因为它允许您仅发送正在更改的数据。对于只需修改一小部分的大型资源而言，这可以减少带宽使用。
    
-   **不覆盖**：与 PUT 不同，PATCH 不会替换整个资源。它只更新请求中提供的字段，保证其他字段不受影响。
    

### PATCH 请求示例

以下是一个使用 PATCH 方法更新特定字段的基本示例，例如更改用户的邮箱地址：

```
const updatedEmail = {
  email: 'new_email@example.com'
};

fetch('https://example.com/users/123', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedEmail)
})
.then(response => response.json())
.then(data => console.log('Email updated:', data))
.catch(error => console.error('Error:', error));
```

在这个例子中，只有 `email` 字段被更新。用户资料的其他部分，比如用户名或地址则保持不变。

### 何时使用 PATCH 而非 PUT

在特定情况下，使用 PATCH 比 PUT 更合适：

1.  **更新特定字段**：如果您只需要更新资源的一部分，比如更改用户的邮箱地址、为博客文章添加标签或修改单个属性，使用 PATCH 更好。它允许您仅发送需要更新的字段，使请求更高效。
    
    -   示例：更新用户的电话号码。

```
    const updatedPhone = { phoneNumber: '123-456-7890' };

    fetch('https://example.com/users/123', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPhone)
    });
```

2.  **避免意外的数据丢失**：使用 PUT 时，若遗漏任何字段，可能导致服务器删除或覆盖这些字段。PATCH 通过仅更新提供的特定字段，避免了此风险，确保没有意外的数据丢失。
    
    -   示例：如果您只想更新用户的用户名，而不想覆盖其他字段（如地址或偏好），PATCH 可以确保仅更新用户名。
3.  **性能考量**：PATCH 对于大型资源更为高效。例如，如果您管理一个拥有大量记录的数据库，并且需要更改其中的一小部分内容，PATCH 会减少发送到服务器的数据量，提高性能并加速过程。
    
    -   示例：更新大型订单的状态而不修改整个订单详情。

```
    const updatedStatus = { status: 'shipped' };

    fetch('https://example.com/orders/987', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStatus)
    });
```

4.  **频繁更新**：在数据经常变化的应用程序中，PATCH 使得仅更新资源的特定部分更加容易，而不影响整个结构。例如，在电子商务平台中，用户可能会经常更新他们的送货地址或支付方式，PATCH 能够处理这些频繁的变化，而无需重新发送整个用户资料。
    
    -   示例：更新订单的送货地址。

```
    const updatedAddress = {
      shippingAddress: '123 New Street, New City, Country'
    };

    fetch('https://example.com/orders/987', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedAddress)
    });
```

### PUT 和 PATCH 的关键区别

以下是 PATCH 和 PUT 的快速对比，以明确何时使用哪种方法：

**PATCH** 方法在您希望进行部分更新、避免覆盖其他数据并提高请求效率时特别有用。

## DELETE 方法

DELETE 方法用于从服务器中移除资源。当发出 DELETE 请求时，服务器会删除指定的资源，这意味着该资源将不再可访问或可用。此方法常用于删除用户账号、从在线商店移除产品或清除数据库中过期的数据等任务。

与 GET 或 POST 不同，DELETE 不需要在请求中发送 body——只需提供要删除资源的 URL 就足够了。例如，要删除一个特定的博客文章，可以向该文章的 URL 发送 DELETE 请求，服务器将负责将其删除。

### DELETE 的工作原理

要删除某个资源，通常只需提供要移除资源的 URL。不同于 POST 或 PUT 请求，DELETE 请求通常不需要 body。

#### 示例：

如果您想删除特定的一篇博客文章，可以向其 URL 发送 DELETE 请求：

```
fetch('https://example.com/posts/123', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log('Resource deleted:', data))
.catch(error => console.error('Error:', error));
```

这将告诉服务器移除 ID 为 `123` 的博客文章。

### 安全使用 DELETE

DELETE 请求可能带来显著影响，因此需要谨慎使用以避免意外删除有价值的数据。以下是安全处理 DELETE 请求的一些关键考虑：

-   **永久性操作**：一旦 DELETE 请求被处理，资源通常就消失了。在某些情况下，系统可能实现“软删除”功能，其中资源被隐藏但并未完全移除。然而，大多数情况下使用的是“硬删除”，即完全擦除资源。软删除对恢复很有帮助，允许在需要时恢复数据。
    
-   **认证**：DELETE 请求应仅限于授权用户。执行 DELETE 操作前，服务器应验证用户有权限删除资源。例如，只有用户账号的所有者才能删除账号，而不是其他用户。
    
-   **确认**：许多应用程序在处理 DELETE 操作前会提示用户确认意图。此额外步骤可确保用户不会意外删除重要数据，尤其是诸如账户删除等不可逆的操作。
    

#### 确认步骤示例：

```
if (confirm("Are you sure you want to delete this post?")) {
  fetch('https://example.com/posts/123', {
    method: 'DELETE'
  })
  .then(response => console.log('Post deleted'))
  .catch(error => console.error('Error:', error));
}
```

-   **可逆性（软删除）**：对于重要数据，通常实现**软删除**是有用的，它不会完全移除数据，而是在数据库中标记为已删除。这使得在需要时数据可以恢复。例如，许多电子邮件系统会将已删除的邮件保留在“垃圾箱”文件夹中，直到它们被永久删除。

### 处理 DELETE 请求的最佳实践

1.  **需要认证**：只有经过认证的用户才能执行 DELETE 操作。这能防止未经授权的用户删除他们不拥有的资源。例如，用户只能删除他们自己的数据，而不能删除他人的数据。
    
    -   **示例**：在内容管理系统（CMS）中，确保只有文章的作者或管理员才能删除它。
2.  **使用确认步骤**：对于关键操作，确认用户的意图后再继续。这对于无法撤销的操作尤为重要，比如删除账户或永久移除文件。
    
    -   **示例**：显示一个提示，如“您确定要删除您的账户吗？此操作无法撤销。”
3.  **记录删除操作**：保留 DELETE 请求的记录，包括谁发起了请求以及何时发生。记录对责任、故障排除和在意外删除时的数据恢复非常重要。
    
    -   **示例**：在电商系统中，当产品从目录中移除时，记录发起请求的用户及删除时间等详细信息。
4.  **对关键数据使用软删除**：为可能需要恢复的数据实现软删除机制。这在诸如用户账户等场景中特别有用，因为用户可能在删除后希望恢复他们的数据。
    
    -   **示例**：当用户“删除”他们的账户时，将其标记为不活跃或隐藏，而不是完全擦除，允许用户在后续恢复。
5.  **优雅地处理错误**：如果 DELETE 请求失败，服务器应返回适当的错误信息。例如，如果资源不存在或用户无权删除它，服务器应响应“资源未找到”或“未授权操作”等信息。
    
    -   **示例**：对不存在用户的 DELETE 请求可能返回 `404 Not Found` 响应。
6.  **仔细检查 URL 目标**：在发送 DELETE 请求之前，确保 URL 指向正确的资源。错误地指向错误的资源可能导致意外的数据丢失。
    
    -   **示例**：如果您正在管理一个待办事项列表并想删除单个任务，确保 URL 特别指向该任务而不是整个列表。
7.  **将结果告知用户**：在成功的 DELETE 请求之后，通知用户资源已被删除。可以通过消息或通知确认操作。
    
    -   **示例**：在产品或文章从系统中移除后，显示“项目成功删除”之类的消息。

通常，一个成功的 DELETE 请求会返回以下状态代码之一：

-   **200 OK**: 表示删除成功，并包含响应主体（例如，确认删除的消息）。
    
-   **204 No Content**: 请求成功，但响应主体中没有返回内容。这在资源删除后非常常见，因为没有内容需要返回。
    
-   **404 Not Found**: 表示要删除的资源不存在。
    

### DELETE 请求响应示例

如果 DELETE 请求成功且资源已移除，服务器可能会返回一个 `204 No Content` 状态：

```
HTTP/1.1 204 No Content
```

这个响应告诉客户端资源已成功删除，但不会返回任何额外数据。

## HEAD 方法

HEAD 方法与 GET 方法类似，但有一个关键区别：它仅检索资源的头信息，而不是实际内容。

当你发送一个 HEAD 请求时，服务器会回应与 GET 请求相同的头信息，但不发送资源主体（如文本、图片或文件）。这使得 HEAD 很适合在不下载整个内容的情况下检查资源的信息，例如其大小或最后修改日期。

例如，如果你正在管理一个大文件并想在下载前检查其大小，可以使用 HEAD 请求从服务器获取此信息，而无需实际获取文件。

### HEAD 与 GET 的比较

-   **相同的头信息，无内容**: HEAD 请求提供与 GET 请求相同的头信息，如 `Content-Type`、`Content-Length`、`Last-Modified` 等。然而，响应不包含主体——仅包含元数据。
    
-   **请求更快**: 由于不包含主体，HEAD 请求比 GET 请求更快并且消耗的带宽更少。这在你只对资源的细节而非内容感兴趣时特别有用。
    

### HEAD 的使用场景

1.  **检查资源可用性**: 你可以使用 HEAD 请求检查资源（如网页或文件）是否存在而不获取内容。例如，如果 URL 返回状态代码为 `200 OK`，你就知道资源存在。`404 Not Found` 状态代码则表示它不可用。
    
2.  **测试链接**: 如果你管理的网站有大量外部链接，可以用 HEAD 请求测试这些链接是否仍然有效，而无需加载整个页面。如果 HEAD 请求返回错误代码，你就知道链接已断开。
    
3.  **获取文件元数据**: 如果你在处理大文件，可能需要在下载前检查它们的大小。HEAD 请求允许你收集元数据，如文件大小 (`Content-Length`) 和类型 (`Content-Type`)，而不提取整个文件。
    
4.  **优化缓存**: 浏览器和应用程序可以使用 HEAD 请求检查资源自缓存以来是否已更新。服务器返回如 `Last-Modified` 或 `ETag` 这类头信息，如果这些值未改变，则可以使用缓存版本，从而节省带宽和时间。
    
5.  **API 效率**: 当客户端需要验证数据是否存在而不下载整个响应时，HEAD 请求在 API 中很有用。例如，请求可以检查数据库中是否存在记录而无需获取完整细节。
    
6.  **服务器健康监控**: HEAD 请求可以用来测量服务器性能。通过测试响应速度而不下载内容，开发者可以监控服务器响应时间、检查问题或确定服务器是否正常运行。
    

### 使用 HEAD 的最佳实践

-   **高效测试**: HEAD 非常适合验证资源或测试 API 端点，而不下载不必要的数据。
    
-   **缓存验证**: HEAD 请求有助于缓存验证，确保资源是最新的，而不消耗带宽。
    
-   **无副作用**: 像 GET 一样，HEAD 应该是安全且幂等的，即不应改变资源的状态。它纯粹用于检索信息。
    

## OPTIONS 方法

OPTIONS 方法用于查明对特定资源允许哪些操作。它允许客户端（如浏览器或 API）向服务器询问，“我可以对这个资源执行什么操作？” 服务器则会列出它对该资源支持的 HTTP 方法，如 GET、POST、PUT、DELETE 等。

OPTIONS 不会对资源本身执行任何操作。相反，它提供有关客户端可以执行什么操作的信息。这在你想检查允许哪些操作而不实际提出改变或检索数据的请求时很有用。

例如，如果你正在使用 API 并想查看它是否在特定端点支持 DELETE 方法，可以发送 OPTIONS 请求以获取该信息，而不影响资源。

### 检索支持的方法

1.  **发送 OPTIONS 请求**: 客户端向服务器发送 OPTIONS 请求，通常针对特定 URL。该请求用作关于允许对该端点上的资源执行什么操作的查询。
    
2.  **服务器的响应**: 服务器回应一个 `Allow` 头，列出资源可用的 HTTP 方法。例如，可能返回 `Allow: GET, POST, DELETE`，表示可以使用这些方法。
    
3.  **测试方法**: 如果不确定服务器是否支持特定方法（如 PATCH 或 DELETE），可以先发送 OPTIONS 请求进行检查。这可以避免尝试服务器不支持的方法，从而避免错误。

```
OPTIONS /api/resource HTTP/1.1
Host: example.com
```

服务器响应：

```
HTTP/1.1 200 OK
Allow: GET, POST, DELETE
```

### OPTIONS 方法在跨域资源共享（CORS）中的使用

OPTIONS 方法最常见的用途之一是在处理**跨域资源共享（CORS）**时。CORS 是一种安全特性，保证一个域名上的资源不会被另一个域名的网页不当访问。

#### CORS 和预检请求

当浏览器需要进行跨域请求（例如，从[`domainA.com`][12]请求到[`api.domainB.com`][13]），浏览器首先会向目标服务器发送一个被称为**预检请求**的**OPTIONS 请求**。预检请求用于检查实际请求是否符合服务器的 CORS 策略。

1.  **预检请求**：浏览器在实际请求（如 POST 或 PUT）前发送一个 OPTIONS 请求。该请求询问服务器允许哪些方法、哪些域名可以访问资源，以及是否允许特定的头信息或凭据。
    
2.  **服务器响应**：服务器用 CORS 头信息回应，例如 `Access-Control-Allow-Methods`、`Access-Control-Allow-Origin` 和 `Access-Control-Allow-Headers`。这些信息告知浏览器该请求是否可以继续、允许哪些方法或域名。
    
    示例响应：
    
    ```
    HTTP/1.1 204 No Content
    Access-Control-Allow-Origin: https://domainA.com
    Access-Control-Allow-Methods: GET, POST
    Access-Control-Allow-Headers: Content-Type
    ```
    
3.  **确保安全性**：CORS 和预检 OPTIONS 请求确保只有在服务器许可的情况下才允许跨域请求。如果没有此安全步骤，网站可能会对其他域名进行未经授权的请求。
    
4.  **处理复杂请求**：如果请求包含自定义头信息、使用非简单 HTTP 方法（如 GET 或 POST）或发送诸如 cookies 的凭据，浏览器会自动发送 OPTIONS 预检请求。如果服务器拒绝请求（即返回头信息不允许该操作），浏览器会拦截请求。
    

#### 简化的工作流程：

-   **浏览器**： "我可以向[`api.domainB.com`]请求吗？"
    
-   **服务器**： "可以，你可以使用 `GET` 和 `POST`，但只能从[`domainA.com`]并且使用这些头信息。"
    
-   **浏览器**： 如果响应允许，则继续实际请求。
    

### OPTIONS 方法的使用场景

-   **发现可用方法**：对于开发者来说有用，可以在进行操作之前检查一个资源支持哪些 HTTP 方法。
    
-   **CORS 预检**：在网络安全中至关重要，确保跨域请求是经过适当授权的。
    
-   **提高 API 效率**：API 可以通过 OPTIONS 公开一个资源支持的方法，使客户端更容易理解可以执行哪些操作。
    

因此，OPTIONS 方法在管理请求权限和提高安全性方面对网络应用程序是必不可少的，特别是在跨域场景中。

## TRACE 方法

TRACE 方法用于调试网络应用程序和测试请求如何通过网络。当你发送一个 TRACE 请求时，会触发一个环回，服务器将原样返回它接收到的请求。这有助于开发者查看请求在通过不同系统（如防火墙或代理）到达服务器前是否被修改。

简单来说，TRACE 允许你追踪请求从客户端（如浏览器或 API 工具）到服务器再返回的路径。这种方法对于识别请求传输过程中的问题很有用。

### 理解环回诊断

环回诊断指的是通过 TRACE 查看请求在跨网络时如何处理，以检查原始请求是否保持完整。具体如下：

1.  **发送 TRACE 请求**：你向服务器发送一个 TRACE 请求。这个请求通常较小，包含基本信息如方法、URL 和头信息。它不像 POST 或 PUT 方法那样携带额外数据或负载。
    
2.  **服务器响应**：服务器不是以资源作为响应，而是逐字返回它接收到的请求。这包括 HTTP 方法、URL、头信息和原始请求中的其他内容。服务器不修改或处理请求，只是原样返回。
    
3.  **追踪路径**：当 TRACE 响应返回时，你可以看到请求经过的完整路径，包括请求头信息或内容中的任何变化。对以下问题的诊断特别有用：
    
    -   **代理服务器**：如果你的请求在到达目的地之前经过一个或多个代理服务器，TRACE 可以显示这些代理是否更改了请求头信息或内容。
        
    -   **网络防火墙**：某些网络防火墙可能在请求经过时添加或修改头信息。TRACE 可以揭示这些修改。
        
    -   **错误跟踪**：如果请求未按预期运行，TRACE 可以帮助追踪传输过程中出现问题的地方。
        
4.  **有效调试**：TRACE 在调试网络应用程序或 API 特别有帮助。如果你的应用程序因路由、代理或服务器配置引发错误，TRACE 让你看到未修改的请求，从而更容易定位问题。
```


虽然 TRACE 在调试中很有用，但通常被视为安全风险，并且由于多个原因在大多数服务器上经常被禁用：

1.  **跨站脚本攻击 (XSS)**：TRACE 可以在头信息中暴露敏感信息，如 Cookie 或认证令牌。恶意行为者可能利用 TRACE 来捕获这些详细信息，导致安全漏洞，特别是在存在跨站脚本攻击 (XSS) 等漏洞时。这使 TRACE 成为攻击者试图窃取用户数据的潜在目标。
    
2.  **请求修改暴露**：由于 TRACE 显示了对请求所做的所有修改，它还可以揭示内部代理和防火墙如何处理请求。这可能让攻击者深入了解网络内部运作，为他们策划进一步攻击提供便利。
    
3.  **出于安全目的禁用 TRACE**：基于这些原因，TRACE 通常在大多数网络服务器上被禁用以防滥用。在许多现代 Web 应用程序中，存在更为安全的方法用于调试请求和追踪网络路径，因此在日常使用中 TRACE 很少必要。
    
4.  **更安全的替代方案**：开发人员可以使用现代 Web 框架和 API 内置的更安全的诊断工具和日志功能。这些替代方案能提供类似的见解而不会带来 TRACE 相关的安全风险。
    

## CONNECT 方法

CONNECT 方法主要用于通过中介（通常是代理服务器）在客户端和服务器之间建立隧道。当客户端发送 CONNECT 请求时，服务器创建一个隧道，允许加密数据在客户端和目标服务器之间流动。这种方法对于保障连接安全至关重要，特别是当涉及 HTTPS 时。

CONNECT 本身并不处理任何实际数据。它的作用是建立一个安全通信路径，允许加密信息通过代理而不被修改或检查。

### CONNECT 的工作原理

1.  **发送 CONNECT 请求**：客户端（如网络浏览器）向代理服务器发送 CONNECT 请求。该请求包含目标服务器的主机名和端口，通常是标准的 HTTPS 端口 (443)。例如，当访问 [`https://example.com`][16] 时，浏览器向代理服务器发送 CONNECT 请求，请求其连接到该域的端口 443。
    
2.  **建立隧道**：代理服务器在收到 CONNECT 请求后，建立一条到目标服务器的隧道。该隧道允许加密通信无干扰地通过。代理仅在客户端和目标之间转发流量，充当中继的角色。
    
3.  **加密通信**：隧道建立后，客户端和目标服务器可以使用安全加密协议（如 TLS，用于 HTTPS）直接通信。由于数据在客户端和服务器之间是加密的，代理无法解密或修改它。
    
4.  **安全数据传输**：通过 CONNECT 方法，敏感数据（如登录凭证、个人信息或金融交易）可以在客户端和服务器之间安全传输，即使是通过代理。加密隧道确保数据保持机密和完整。
    

### CONNECT 请求和响应示例

-   **CONNECT 请求**：
    
    ```
      CONNECT example.com:443 HTTP/1.1
      Host: example.com
    ```
    
-   **代理响应**（若隧道成功建立）：
    
    ```
      HTTP/1.1 200 Connection Established
    ```
    

### CONNECT 隧道

在此环境中，**隧道**一词指的是通过代理在客户端和目标服务器之间创建直接、安全的链接。代理作为中间人存在，但不会干涉或访问通过隧道传输的加密数据。

#### 隧道过程的步骤：

-   **发送 CONNECT 请求**：客户端向代理发送 CONNECT 请求，指定目标服务器和端口（例如，HTTPS 的 443 端口）。
    
-   **代理设置隧道**：代理服务器在客户端和目标服务器之间建立安全隧道，在两个端点之间转发流量。
    
-   **开始加密通信**：客户端和目标服务器通过加密隧道直接通信，使用 HTTPS 或其他加密协议。代理转发加密流量但无法访问或修改。
    

### CONNECT 方法的典型使用案例

1.  **通过代理的 HTTPS**：CONNECT 方法最常见的用途之一是启用**通过代理的 HTTPS 流量**。在许多公司或网络环境中，互联网流量必须通过代理服务器。对于使用 HTTPS 的安全网站，CONNECT 方法允许代理服务器建立隧道，在不检查数据的情况下将加密流量从客户端转发到目标服务器。
    
    -   **示例**：当您从公司网络访问一个安全的银行网站时，您的浏览器可能需要通过公司代理。CONNECT 方法用于在您的浏览器和银行网站之间建立加密隧道，确保敏感数据（如登录凭证）安全地通过代理。
2.  **VPN 和安全通道**：**VPN（虚拟专用网络）**服务也依赖类似的隧道技术来安全地加密和路由互联网流量。一些 VPN 服务使用 CONNECT 创建安全隧道，确保用户与互联网之间传输的数据加密且不被窃听。
    
3.  **访问被封锁的内容**：在某些网站被封锁的环境中（例如，学校或办公室），CONNECT 有时可以用于通过代理建立隧道来绕过限制。虽然这种做法可能违反网络政策，但它说明了 CONNECT 如何用于建立安全、不受监控的访问。
    
4.  **自定义代理**：开发人员可能会设置**自定义代理**来为应用程序路由流量以提高性能或安全性。在这种情况下，CONNECT 允许 HTTPS 或其他安全流量通过代理传输，同时保持隐私和安全，因为代理服务器无法访问隧道内的加密数据。

虽然 CONNECT 对于安全通信是必不可少的，但它也带来了一些安全挑战：

-   **绕过内容过滤器**：由于 CONNECT 创建了代理无法检查的加密隧道，它可以被用来绕过内容过滤系统。这使用户能够访问受限的网站或服务，可能违反组织政策。
    
-   **隧道传输恶意流量**：恶意行为者可以利用 CONNECT 通过代理隧道传输有害或未经授权的流量。由于流量是加密的，防火墙和安全系统可能无法检测到恶意活动。
    
-   **缓解措施**：许多组织通过密切监控和限制 CONNECT 方法的使用来解决这些风险。一些代理执行 **SSL 截取** 来解密和检查 HTTPS 流量，尽管这会引发隐私问题并可能影响用户安全。
    

## 结论

HTTP 方法对于实现 web 应用程序和服务器之间的通信至关重要。从 GET 到 CONNECT，每个方法都为特定任务设计，如发送数据、检索信息、更新资源或建立安全连接。为任务选择正确的方法可以提高应用程序的效率和安全性。

GET 适合检索数据，POST 和 PUT 帮助创建和更新，PATCH 处理部分更新，而 DELETE 用于移除资源。HEAD 检查响应头而不检索内容，OPTIONS 显示支持的方法，TRACE 和 CONNECT 有助于调试和安全通信。

使用适当的 HTTP 方法确保您的应用程序高效、安全地运行，为用户提供流畅的体验。

如果您有任何问题或建议，请随时在 [LinkedIn][17] 上联系。如果您喜欢这篇内容，请考虑 [buy me a coffee][18] 来支持创作更多对开发者友好的内容。

[1]: #heading-get-method
[2]: #heading-post-method
[3]: #heading-put-method
[4]: #heading-patch-method
[5]: #heading-delete-method
[6]: #heading-head-method
[7]: #heading-options-method
[8]: #heading-trace-method
[9]: #heading-connect-method
[10]: #heading-conclusion
[11]: https://api.example.com/products
[12]: http://domainA.com
[13]: http://api.domainB.com
[14]: http://api.domainB.com
[15]: http://domainA.com
[16]: https://example.com
[17]: https://ng.linkedin.com/in/joan-ayebola
[18]: https://www.buymeacoffee.com/joanayebola

