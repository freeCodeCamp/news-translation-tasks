---
title: Learn HTTP Methods like GET, POST, and DELETE – a Handbook with Code Examples
date: 2025-02-07T13:51:40.664Z
author: Joan Ayebola
authorURL: https://www.freecodecamp.org/news/author/joanayebola/
originalURL: https://www.freecodecamp.org/news/learn-http-methods-like-get-post-and-delete-a-handbook-with-code-examples/
posteditor: ""
proofreader: ""
---

When you interact with websites or apps, a lot happens behind the scenes. A key part of this process is how your browser or app talks to a server. HTTPS methods define what action needs to happen – it could be fetching data, sending information, or making changes to existing content.

<!-- more -->

Each method serves a specific purpose to keep web communication clear, secure, and organized.

In this article, we will break down the most common HTTPS methods and explain how they function to make online interactions work smoothly.

### Table of Contents

1.  [GET Method][1]
    
2.  [POST Method][2]
    
3.  [PUT Method][3]
    
4.  [PATCH Method][4]
    
5.  [DELETE Method][5]
    
6.  [HEAD Method][6]
    
7.  [OPTIONS Method][7]
    
8.  [TRACE Method][8]
    
9.  [CONNECT Method][9]
    
10.  [Conclusion][10]
    

## GET Method

The GET method is one of the most common HTTP methods and is used to request data from a server. Think of it as asking for information without changing anything.

When you visit a webpage, your browser sends a GET request to the server asking for the content of the page. The server then responds with the data (such as HTML, images, or other files) that the browser displays.

One important thing about GET is that it doesn't make any changes to the data. It simply "reads" or retrieves the information. For example, when you browse through social media or search for products online, the app or website uses GET to display data without altering it.

Another key point is that GET requests send parameters in the URL itself. This means any data you're asking for is visible in the browser's address bar. For example, if you're searching for a product on an online store, the search term is included in the URL.

### Example of a GET Request

Here’s a simple example of a GET request in JavaScript using the Fetch API:

```
fetch('https://api.example.com/products?category=shoes')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, the GET request is made to the URL [`https://api.example.com/products`][11] with a query parameter `category=shoes`, asking the server to return products in the shoes category.

### Use Cases of the GET Method

GET is mainly used to fetch information, and there are many common scenarios where it's applied:

1.  **Loading a Webpage**: Every time you type a URL into your browser or click a link, you're making a GET request. The browser asks the server for the webpage, and the server sends back the content to display.
    
    -   Example: `GET /index.html HTTP/1.1`
2.  **Fetching Data from APIs**: When developers build applications, they often use APIs (Application Programming Interfaces) to get data from external servers. For instance, a weather app uses a GET request to fetch the current temperature from a weather API.
    
    -   Example:

```
    fetch('https://api.weather.com/current?city=Lagos')
       .then(response => response.json())
       .then(data => console.log(data));
```

3.  **Search Queries**: When you search for something on Google or other search engines, a GET request is made. The search term you entered is included in the URL, and the server returns a list of matching results.
    
    -   Example: `GET /search?q=JavaScript`
4.  **Retrieving Files**: Whether you're downloading an image, viewing a PDF, or playing a video, GET is used to fetch those files from a server.
    
    -   Example: `GET /files/image.jpg`

### Best Practices for GET Requests

To use GET requests effectively, it's important to follow some good practices to ensure smooth and secure data handling:

1.  **Use GET Only for Retrieving Data**: GET requests are meant to fetch data, not to send sensitive information like passwords or personal data. Since the parameters in a GET request are included in the URL, anyone can see them. For example, if you're logging into a website, you shouldn't use GET to send your password, because it would show up in the URL.
    
    -   Example of what **not** to do:

```
    fetch('https://example.com/login?username=john&password=secret');
```

2.  **Keep URLs Short and Clean**: Since GET requests include data in the URL, long URLs can become problematic. There is also a limit to how much data can be included in a GET request URL (depending on the browser and server), so avoid putting too much information there. If you need to send a lot of data, consider using a POST request instead.
    
3.  **Enable Caching for Performance**: GET requests are often cached by browsers, meaning the browser can store the response and reuse it without contacting the server again. This improves performance, especially for static content that doesn’t change often, like images or style sheets. To take advantage of this, ensure your server sends proper cache-control headers, so frequently requested data can be loaded faster.
    
    -   Example of setting cache headers:

```
    Cache-Control: max-age=3600
```

4.  **Avoid Making GET Requests for Actions That Change Data**: Since GET is a "safe" method, it should only be used for actions that don't modify data. If you want to create, update, or delete data, use methods like POST, PUT, or DELETE. For instance, if you accidentally use GET to delete a resource, someone could remove it just by clicking a link or refreshing the page, which is not safe.
    
    -   Example of **not** using GET for deletion:

```
    GET /delete/user/123
```

5.  **Be Cautious with Sensitive Data**: Since GET requests are part of the URL, they can be logged or saved in a browser’s history. Avoid sending sensitive information like passwords, credit card details, or private data in a GET request. Always use methods like POST for handling such information, which keeps it hidden.

## POST Method

The POST method is used to send data to a server. Unlike the GET method, which only retrieves data, POST allows you to submit information that the server can use to process or store. POST is commonly used in forms, where users input data such as usernames, passwords, or contact details.

When a POST request is made, the data is sent in the body of the request rather than in the URL. This makes POST ideal for sending larger or more sensitive information, such as passwords, because the data is hidden and doesn’t appear in the browser's address bar.

For example, when you sign up for a website or submit a comment on a blog, the POST method is used to send your information to the server, which processes it and stores it in a database.

### Example of a POST Request

Here’s an example of a POST request using the Fetch API to send form data to a server:

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

In this example, the POST request sends `username` and `password` as JSON data in the body of the request, making it a secure way to handle sensitive information like passwords.

### Differences Between GET and POST

Although GET and POST are used to communicate with a server, they serve different purposes and handle data in different ways:

#### Data Transmission:

-   **GET**: Data is included in the URL, making it visible in the address bar. This limits how much data can be sent.
    
-   **POST**: Data is sent in the body of the request, which allows for sending larger amounts of information. This also keeps sensitive information hidden from the URL.
    

#### Purpose:

-   **GET**: Used for retrieving data. It doesn’t change or modify anything on the server.
    
-   **POST**: Used to send data that may change or add to the server's resources, such as adding a new user to a database or submitting a form.
    

#### Caching:

-   **GET**: GET requests can be cached. This means that the browser may save the response, making future requests faster.
    
-   **POST**: POST requests are not cached, as they often involve new or updated data that shouldn't be reused.
    

#### Idempotence:

-   **GET**: Sending the same GET request multiple times doesn’t change the result. It will return the same data every time.
    
-   **POST**: Sending the same POST request multiple times may result in different outcomes. For example, submitting a form twice could create duplicate entries.
    

### Common Scenarios for Using POST

POST is ideal in situations where you need to send data to the server, often for processing or storage. Here are some common use cases:

1.  **Submitting Forms**: Whenever you fill out and submit a form online, such as signing up for a newsletter or entering your details in a registration form, the POST method is used to send that information to the server. The server then processes the data, stores it, or performs another action based on it.
    
    -   Example:

```
    <form action="https://example.com/register" method="POST">
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Sign Up</button>
    </form>
```

2.  **User Authentication**: When you log in to a website using a username and password, POST is often used to send your credentials securely to the server. The server checks the information and grants access to your account if the credentials match.
    
3.  **Uploading Files**: POST is also used for uploading files, such as images, documents, or videos. Since the POST method allows sending large amounts of data, it’s perfect for uploading files that need to be processed or stored on the server.
    
    -   Example using a form for file uploads:

```
    <form action="https://example.com/upload" method="POST" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload File</button>
    </form>
```

4.  **Creating New Resources**: POST is often used in APIs to create new resources. For example, when you add a new product to an online store, the POST method is used to send the product details to the server, which adds the product to the store's database.
    
    -   Example of sending product data:

```
    const product = {
      name: 'New Sneakers',
      price: 59.99,
      category: 'Footwear'
    };

    fetch('https://example.com/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then(data => console.log('Product added:', data));
```

5.  **Sending Data to an API**: POST is widely used in APIs when you need to send data that will be processed or stored. For example, an app that tracks your fitness progress may use POST to send your workout details to a server, where it’s stored and analyzed.
    
6.  **Making Purchases Online**: When you make an online purchase, POST is used to send the payment details to the server for processing. The server processes the transaction and updates the system with your order information.
    

## PUT Method

The **PUT** method is used to update or replace an existing resource on the server. It sends data to the server and tells it to create a new resource if none exists or replace the current one if it does. The key idea with PUT is that you are telling the server exactly what the resource should look like.

For example, imagine a user profile on a website. If you use PUT to update your profile, the server will replace the entire profile with the new data you provide. Every part of the profile will match exactly what you send, so if some details are missing, they will be overwritten with the new data.

### Example of a PUT Request

Here’s an example of a PUT request using the Fetch API to update user data:

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

In this example, the PUT request updates the user profile with new data. The profile will be replaced with `username`, `email`, and `age` values. If any data is missing, such as `phoneNumber`, it will be removed from the profile.

### When to Use PUT

PUT is mainly used when you want to update or replace a resource with specific, complete data. Here are some common situations where PUT is appropriate:

1.  **Updating a Resource**: When you need to make changes to an existing resource, PUT is used to send a new version of the entire resource. For example, updating a blog post, product details, or user information would require sending a complete replacement of the resource using PUT.
    
    -   Example:

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

2.  **Creating a Resource if None Exists**: If you send a PUT request to a specific URL that doesn't have a resource yet, the server will create one using the data you provide. This is useful when you're working with resources that need to be fully defined upfront.
    
    -   Example of creating a product if it doesn’t exist:

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

3.  **Working with APIs**: When interacting with APIs, PUT is often used when you need to make updates to a resource like a user profile, product details, or any other structured data. For example, a to-do list app might allow you to use PUT to update an existing task with new information.
    
    -   Example of updating a task:

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

### PUT vs. POST: Key Differences

Though both PUT and POST can send data to a server, they have different purposes and behaviors:

#### Purpose:

-   **PUT**: Primarily used for updating or replacing an existing resource. If the resource doesn’t exist, PUT can also create it.
    
-   **POST**: Mainly used to create new resources or submit data that needs to be processed. POST doesn’t replace existing resources but adds new ones.
    

#### Data Handling:

-   **PUT**: Replaces the entire resource with the new data. If a part of the resource is missing in the request, that part gets removed or replaced.
    
-   **POST**: Adds or updates resources without replacing the entire thing. For example, when submitting a form, POST adds new data to the server without deleting what’s already there.
    

#### Idempotence:

-   **PUT**: Is idempotent, so sending the same PUT request multiple times will always result in the same outcome. No matter how many times you update a resource using PUT, the result will be the same.
    
-   **POST**: Is not idempotent, so submitting the same POST request multiple times could create duplicate resources or have different results.
    

#### Use Cases:

-   **PUT**: Best used for updates and full replacements of resources. For instance, if you’re updating product details in an online store, PUT ensures that all the details are replaced with the new ones you send.
    
-   **POST**: Suited for creating new entries or sending data that requires processing. For example, submitting an online order or filling out a contact form uses POST.
    

## PATCH Method

The **PATCH** method is used to make partial updates to a resource on the server. Unlike the PUT method, which replaces the entire resource, PATCH allows you to update specific parts of a resource without sending the complete data again. This makes PATCH ideal for scenarios where you only want to tweak certain details without affecting other parts of the resource.

For example, if you have a user profile and want to update only the phone number, PATCH enables you to send just the new phone number while leaving the rest of the profile unchanged. This approach is more efficient and reduces the risk of unintended data loss.

### Partial Updates with PATCH

PATCH is designed for making targeted changes to a resource. Here’s how it works:

-   **Targeted Changes**: When you use PATCH, you specify only the fields you want to update. For instance, if a user updates their email address, you send a PATCH request containing just the new email, and everything else stays the same on the server.
    
-   **Efficiency**: PATCH is more efficient than PUT because it allows you to send only the data that’s being changed. This can reduce bandwidth usage, especially when updating large resources where only a small part needs modification.
    
-   **Does Not Overwrite**: Unlike PUT, PATCH does not replace the entire resource. It only updates the fields that are provided in the request, ensuring that other fields remain intact.
    

### Example of a PATCH Request

Here’s a basic example of how you might use the PATCH method to update a specific field, such as changing a user's email address:

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

In this example, only the `email` field is being updated. The rest of the user profile, such as the username or address, remains unchanged.

### When to Use PATCH Instead of PUT

There are specific scenarios where PATCH is more appropriate than PUT:

1.  **Updating Specific Fields**: If you need to update only a part of a resource, like changing a user’s email, adding a tag to a blog post, or modifying a single attribute, PATCH is a better choice. It allows you to send only the fields that need updating, making the request more efficient.
    
    -   Example: Updating a user's phone number.

```
    const updatedPhone = { phoneNumber: '123-456-7890' };

    fetch('https://example.com/users/123', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedPhone)
    });
```

2.  **Avoiding Unintended Data Loss**: When using PUT, leaving out any fields could result in the server removing or overwriting those fields. PATCH avoids this risk by only updating the specific fields provided, ensuring no accidental data loss.
    
    -   Example: If you only want to update a user’s username but don’t want to overwrite other fields like their address or preferences, PATCH ensures only the username is updated.
3.  **Performance Considerations**: PATCH is more efficient for large resources. For instance, if you're managing a database with extensive records and need to change a small portion, PATCH reduces the data sent to the server, improving performance and speeding up the process.
    
    -   Example: Updating the status of a large order without modifying the entire order details.

```
    const updatedStatus = { status: 'shipped' };

    fetch('https://example.com/orders/987', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedStatus)
    });
```

4.  **Frequent Updates**: In applications where data changes frequently, PATCH makes it easier to update specific parts of a resource without affecting the entire structure. For instance, in an e-commerce platform, users might regularly update their shipping address or payment method, and PATCH can handle those frequent changes without requiring the entire user profile to be re-sent.
    
    -   Example: Updating the delivery address for an order.

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

### Key Differences Between PUT and PATCH

Here’s a quick comparison of PATCH and PUT to clarify when each method is more appropriate:

| Feature | PUT | PATCH |
| --- | --- | --- |
| **Purpose** | Replaces the entire resource. | Partially updates a resource. |
| **Data Handling** | Requires the entire resource to be sent. | Sends only the fields that need to be updated. |
| **Efficiency** | Less efficient for large resources. | More efficient for small, specific updates. |
| **Idempotence** | Idempotent (same result if repeated). | Not necessarily idempotent (depends on the request). |
| **Risk of Data Loss** | Can overwrite fields if data is missing. | Does not overwrite existing fields unless specified. |

**PATCH** is particularly valuable when you want to make partial updates, avoid overwriting other data, and improve the efficiency of your requests.

## DELETE Method

The DELETE method is used to remove a resource from the server. When a DELETE request is made, the server deletes the specified resource, meaning it’s no longer accessible or available. This method is used for tasks like deleting a user account, removing a product from an online store, or clearing old data from a database.

Unlike GET or POST, DELETE doesn’t require sending a body in the request—just the URL of the resource you want to remove is enough. For example, to delete a specific blog post, a DELETE request is sent to the URL of that post, and the server takes care of removing it.

### How DELETE Works

To delete a resource, you typically only need to provide the URL of the resource you want to remove. Unlike POST or PUT requests, DELETE requests generally don’t require a body.

#### Example:

If you want to delete a specific blog post, you can send a DELETE request to its URL:

```
fetch('https://example.com/posts/123', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log('Resource deleted:', data))
.catch(error => console.error('Error:', error));
```

This tells the server to remove the blog post with ID `123`.

### Safely Using DELETE

DELETE requests can have a significant impact, so it’s important to use them carefully to avoid accidentally removing valuable data. Below are some key considerations for safely handling DELETE requests:

-   **Permanent Action**: Once a DELETE request is processed, the resource is typically gone. In some cases, systems might implement "soft delete" functionality, where the resource is hidden but not completely removed. However, most use a "hard delete," where the resource is fully erased. Soft deletes can be useful for recovery purposes, allowing data to be restored if needed.
    
-   **Authentication**: DELETE requests should be restricted to authorized users. Before performing a DELETE action, the server should validate that the user has permission to delete the resource. For example, only the owner of a user account should be able to delete it, not another user.
    
-   **Confirmation**: Many applications prompt users to confirm their intention before processing a DELETE action. This extra step ensures users don't accidentally delete important data, especially for irreversible actions like account deletion.
    

#### Example of a Confirmation Step:

```
if (confirm("Are you sure you want to delete this post?")) {
  fetch('https://example.com/posts/123', {
    method: 'DELETE'
  })
  .then(response => console.log('Post deleted'))
  .catch(error => console.error('Error:', error));
}
```

-   **Reversibility (Soft Delete)**: For important data, it’s often useful to implement a **soft delete**, which doesn’t completely remove the data but marks it as deleted in the database. This allows the data to be restored later if needed. For example, many email systems keep deleted messages in a "Trash" folder until they are permanently removed.

### Best Practices for Handling DELETE Requests

1.  **Require Authentication**: Only authenticated users should be able to perform DELETE actions. This prevents unauthorized users from deleting resources they don't own. For example, users should only be allowed to delete their own data, not that of others.
    
    -   **Example**: In a content management system (CMS), ensure that only the author of a post or an admin can delete it.
2.  **Use Confirmation Steps**: For critical actions, confirm the user’s intent before proceeding. This is especially important for actions that cannot be undone, such as deleting an account or permanently removing a file.
    
    -   **Example**: Show a prompt that says, "Are you sure you want to delete your account? This action cannot be undone."
3.  **Log Deletions**: Keep a record of DELETE requests, including who initiated the request and when it occurred. Logging is important for accountability, troubleshooting, and data recovery in case of accidental deletions.
    
    -   **Example**: In an e-commerce system, log details when a product is removed from the catalog, such as the user who initiated the request and the time of deletion.
4.  **Soft Delete for Critical Data**: Implement a soft delete mechanism for data that may need to be restored later. This is particularly useful in scenarios like user accounts, where a user might want to recover their data after deletion.
    
    -   **Example**: When a user "deletes" their account, it’s marked as inactive or hidden, rather than fully erased, allowing the user to recover it later.
5.  **Handle Errors Gracefully**: If a DELETE request fails, the server should return an appropriate error message. For example, if the resource doesn’t exist or the user isn’t authorized to delete it, the server should respond with a message like "Resource not found" or "Unauthorized action."
    
    -   **Example**: A DELETE request for a non-existent user could return a `404 Not Found` response.
6.  **Double-Check URL Targeting**: Before sending a DELETE request, ensure the URL points to the correct resource. Accidentally targeting the wrong resource could result in unintended data loss.
    
    -   **Example**: If you are managing a to-do list and want to delete a single task, ensure the URL points specifically to that task and not to the entire list.
7.  **Communicate Results to the User**: After a successful DELETE request, inform the user that the resource has been deleted. This can be done through a message or notification confirming the action.
    
    -   **Example**: Show a message like "Item successfully deleted" after a product or post has been removed from the system.

### DELETE Response

Typically, a successful DELETE request returns one of the following status codes:

-   **200 OK**: Indicates that the deletion was successful and includes a response body (for example, a message confirming the deletion).
    
-   **204 No Content**: The request was successful, but no content is returned in the response body. This is common when the resource is deleted, and there’s nothing to send back.
    
-   **404 Not Found**: Indicates that the resource to be deleted does not exist.
    

### Example of a DELETE Request Response

If the DELETE request is successful and the resource is removed, a server might respond with a `204 No Content` status:

```
HTTP/1.1 204 No Content
```

This response tells the client that the resource was successfully deleted but doesn’t return any additional data.

## HEAD Method

The HEAD method is similar to the GET method but with a key difference: it only retrieves the headers of a resource, not the actual content.

When you send a HEAD request, the server responds with the same headers as a GET request, but without sending the body of the resource (like text, images, or files). This makes HEAD useful for checking information about a resource, such as its size or last modified date, without downloading the entire content.

For example, if you're managing a large file and want to check its size before downloading, you can use a HEAD request to get this information from the server without actually fetching the file itself.

### How HEAD Compares to GET

-   **Same Headers, No Content**: The HEAD request provides the same headers you’d receive with a GET request, such as `Content-Type`, `Content-Length`, `Last-Modified`, and so on. However, the response contains no body—just the metadata.
    
-   **Faster Requests**: Because no body is included, HEAD requests are faster and consume less bandwidth than GET requests. This is helpful when you're only interested in details about the resource, not the content itself.
    

### Use Cases for HEAD

1.  **Checking Resource Availability**: You can use a HEAD request to check whether a resource (such as a webpage or file) exists without fetching the content. For example, if a URL returns a status code like `200 OK`, you know the resource is there. A `404 Not Found` status code would indicate that it’s not available.
    
2.  **Testing Links**: If you manage a website with numerous external links, a HEAD request can test whether those links are still valid, saving you from loading the entire page. If a HEAD request returns an error code, you know the link is broken.
    
3.  **Fetching File Metadata**: If you’re dealing with large files, you might want to check their size before downloading. A HEAD request allows you to gather metadata like the file size (`Content-Length`) and type (`Content-Type`) without retrieving the entire file.
    
4.  **Optimizing Caching**: Browsers and applications can use HEAD requests to check if a resource has been updated since it was cached. The server returns headers like `Last-Modified` or `ETag`, and if these values haven’t changed, the cached version can be used, saving bandwidth and time.
    
5.  **API Efficiency**: HEAD requests can be useful in APIs when a client needs to verify that data exists without downloading the entire response. For example, a request could check whether a record exists in a database without fetching the full details.
    
6.  **Server Health Monitoring**: HEAD requests can be used to measure server performance. By testing the speed of a response without downloading content, developers can monitor server response times, check for issues, or determine if the server is up.
    

### Best Practices for Using HEAD

-   **Efficient Testing**: HEAD is ideal for validating resources or testing API endpoints without downloading unnecessary data.
    
-   **Caching**: HEAD requests help with cache validation, ensuring that a resource is up-to-date without consuming bandwidth.
    
-   **No Side Effects**: Like GET, HEAD should be safe and idempotent, meaning it should not alter the state of the resource. It’s used purely for retrieving information.
    

## OPTIONS Method

The OPTIONS method is used to find out what actions are allowed on a specific resource. It allows a client (like a browser or an API) to ask the server, "What operations can I perform on this resource?" In response, the server lists the HTTP methods it supports for that resource, such as GET, POST, PUT, DELETE, and so on.

OPTIONS doesn’t perform any operation on the resource itself. Instead, it provides information about what the client can do. This makes it useful when you want to check what actions are allowed before actually making a request that changes or retrieves data.

For example, if you’re working with an API and want to see if it supports a DELETE method on a particular endpoint, you can send an OPTIONS request to get that information without affecting the resource.

### Retrieving Supported Methods

1.  **Sending an OPTIONS Request**: The client sends an OPTIONS request to a server, typically targeting a specific URL. This request serves as an inquiry about what actions are permitted on the resource at that endpoint.
    
2.  **Server’s Response**: The server responds with an `Allow` header that lists the available HTTP methods for the resource. For example, it might return `Allow: GET, POST, DELETE`, meaning those methods can be used.
    
3.  **Testing for Methods**: If you're unsure whether a particular method (like PATCH or DELETE) is supported by a server, you can send an OPTIONS request first to check. This avoids attempting methods that the server doesn’t support, which could result in errors.
    

#### Example:

```
OPTIONS /api/resource HTTP/1.1
Host: example.com
```

Server Response:

```
HTTP/1.1 200 OK
Allow: GET, POST, DELETE
```

### How OPTIONS is Used in Cross-Origin Resource Sharing (CORS)

One of the most common uses of the OPTIONS method is in handling **Cross-Origin Resource Sharing (CORS)**. CORS is a security feature that ensures resources on one domain aren’t accessed improperly by web pages from another domain.

#### CORS and Preflight Requests

When a browser needs to make a cross-origin request (for example, a request from [`domainA.com`][12] to [`api.domainB.com`][13]), the browser first sends an **OPTIONS request**, known as a **preflight request**, to the target server. The preflight request checks whether the actual request is allowed under the server’s CORS policy.

1.  **Preflight Request**: The browser sends an OPTIONS request before the actual request (such as a POST or PUT). This request asks the server which methods are allowed, which domains can access the resource, and whether specific headers or credentials are permitted.
    
2.  **Server’s Response**: The server responds with CORS headers, such as `Access-Control-Allow-Methods`, `Access-Control-Allow-Origin`, and `Access-Control-Allow-Headers`. This tells the browser whether the request can proceed and what methods or domains are allowed.
    
    Example Response:
    
    ```
     HTTP/1.1 204 No Content
     Access-Control-Allow-Origin: https://domainA.com
     Access-Control-Allow-Methods: GET, POST
     Access-Control-Allow-Headers: Content-Type
    ```
    
3.  **Ensuring Security**: CORS and the preflight OPTIONS request ensure that cross-origin requests are only allowed when the server permits it. Without this security step, websites could make unauthorized requests to other domains.
    
4.  **Handling Complex Requests**: If a request includes custom headers, uses HTTP methods other than simple ones like GET or POST, or sends credentials like cookies, the browser automatically sends an OPTIONS preflight request. If the server denies the request (that is, returns headers disallowing the action), the browser blocks the request.
    

#### Simplified Workflow:

-   **Browser**: "Can I make this request to [`api.domainB.com`][14]?"
    
-   **Server**: "Yes, you can use `GET` and `POST`, but only from [`domainA.com`][15] and with these headers."
    
-   **Browser**: Proceeds with the actual request if the response permits.
    

### Use Cases for the OPTIONS Method

-   **Discovering Available Methods**: Useful for developers to check which HTTP methods a resource supports before performing an operation.
    
-   **CORS Preflight**: Critical in web security to ensure that cross-origin requests are properly authorized.
    
-   **Improving API Efficiency**: APIs can expose the supported methods for a resource via OPTIONS, making it easier for clients to understand what operations can be performed.
    

The OPTIONS method is thus essential in web applications for managing request permissions and improving security, particularly in cross-domain scenarios.

## TRACE Method

The TRACE method is used to debug web applications and test how requests pass through networks. When you send a TRACE request, it triggers a loopback, where the server sends back the exact request it received, without any changes. This helps developers see if anything is modified as the request travels through different systems, like firewalls or proxies, before reaching the server.

In simple terms, TRACE allows you to trace the path your request takes from your client (like a browser or API tool) to the server and back. This method can be useful for identifying issues during the transmission of a request.

### Understanding Loopback Diagnostics

Loopback diagnostics refers to the process of seeing how data is handled as it moves across networks, using TRACE to check if the original request remains intact. Here’s how it works:

1.  **Sending a TRACE Request**: You send a TRACE request to a server. This request is usually small, containing basic information like the method, URL, and headers. It doesn't carry any extra data or payload like POST or PUT methods.
    
2.  **Server’s Response**: Instead of responding with a resource, the server sends back the exact request it received. This includes the HTTP method, the URL, headers, and anything else in the original request. The server doesn’t modify or process the request—it just returns it exactly as it was received.
    
3.  **Tracing the Path**: When the TRACE response comes back, it allows you to see the entire path the request took, including any changes made to the request headers or content. This is useful for diagnosing issues such as:
    
    -   **Proxy Servers**: If your request passes through one or more proxy servers before reaching the destination, TRACE can show if those proxies have altered the request headers or content.
        
    -   **Network Firewalls**: Some network firewalls might add or modify headers as your request passes through them. TRACE helps reveal these modifications.
        
    -   **Error Tracking**: If a request fails to behave as expected, TRACE can help track where something went wrong in the transmission.
        
4.  **Effective Debugging**: TRACE is especially helpful when debugging web applications or APIs. If your application is experiencing errors due to routing, proxies, or server configurations, TRACE lets you see the unaltered request, making it easier to pinpoint the issue.
    

### Security Concerns with TRACE

Although TRACE can be useful for debugging, it is generally considered a security risk and is often disabled on most servers for several reasons:

1.  **XSS Attacks (Cross-Site Scripting)**: TRACE can expose sensitive information such as cookies or authentication tokens in the headers. Malicious actors could exploit TRACE to capture these details, leading to security breaches, especially if a vulnerability like cross-site scripting (XSS) is present. This makes TRACE a potential target for attackers trying to steal user data.
    
2.  **Request Modification Exposure**: Since TRACE shows all modifications made to a request, it can also reveal how internal proxies and firewalls handle requests. This could give attackers insight into the internal workings of a network, making it easier for them to plan further attacks.
    
3.  **Disabling TRACE for Safety**: For these reasons, TRACE is often disabled on most web servers to prevent abuse. In many modern web applications, more secure methods exist for debugging requests and tracing network paths, so TRACE is rarely necessary in everyday use.
    
4.  **Safer Alternatives**: Developers can use safer diagnostic tools and logging features built into modern web frameworks and APIs. These alternatives provide similar insights without exposing security risks associated with TRACE.
    

## CONNECT Method

The CONNECT method is mainly used to establish a tunnel between a client and a server through an intermediary, usually a proxy server. When the client sends a CONNECT request, the server creates a tunnel that allows encrypted data to flow between the client and the destination server. This method is crucial for securing connections, especially when dealing with HTTPS.

CONNECT does not handle any actual data on its own. Instead, it sets up a path for secure communication, allowing encrypted information to pass through proxies without being modified or inspected.

### How CONNECT Works

1.  **Sending a CONNECT Request**: A client, such as a web browser, sends a CONNECT request to the proxy server. This request includes the target server's hostname and port, typically the standard HTTPS port (443). For example, when accessing [`https://example.com`][16], the browser sends a CONNECT request to the proxy server asking it to connect to that domain on port 443.
    
2.  **Establishing the Tunnel**: The proxy server, upon receiving the CONNECT request, establishes a tunnel to the destination server. This tunnel allows encrypted communication to pass through without interference. The proxy simply forwards traffic between the client and the destination, acting as a relay.
    
3.  **Encrypted Communication**: Once the tunnel is set up, the client and the destination server can communicate directly using a secure encryption protocol, such as TLS (used by HTTPS). The proxy cannot decrypt or modify the data passing through because it’s encrypted between the client and the server.
    
4.  **Secure Data Transfer**: With the CONNECT method, sensitive data—such as login credentials, personal information, or financial transactions—can be transmitted securely between the client and the server, even when passing through proxies. The encrypted tunnel ensures that the data remains confidential and intact.
    

### Example of a CONNECT Request and Response

-   **CONNECT Request**:
    
    ```
      CONNECT example.com:443 HTTP/1.1
      Host: example.com
    ```
    
-   **Proxy Response** (if the tunnel is successfully established):
    
    ```
      HTTP/1.1 200 Connection Established
    ```
    

### Tunneling with CONNECT

The term **tunneling** in this context refers to creating a direct, secure link between the client and the destination server via a proxy. The proxy acts as a middleman but does not interfere with or access the encrypted data being transmitted through the tunnel.

#### Steps of the Tunneling Process:

-   **Sending the CONNECT Request**: The client sends a CONNECT request to the proxy, specifying the destination server and port (for example, port 443 for HTTPS).
    
-   **Proxy Sets Up the Tunnel**: The proxy server establishes a secure tunnel between the client and the destination server, forwarding traffic between the two endpoints.
    
-   **Encrypted Communication Begins**: The client and the destination server communicate directly through the encrypted tunnel using HTTPS or another encryption protocol. The proxy forwards the encrypted traffic but cannot access or modify it.
    

### Typical Use Cases of the CONNECT Method

1.  **HTTPS Through Proxies**: One of the most common uses of the CONNECT method is enabling **HTTPS traffic through proxies**. In many corporate or network environments, internet traffic must pass through a proxy server. For secure websites using HTTPS, the CONNECT method allows the proxy server to establish a tunnel, forwarding encrypted traffic between the client and the destination server without inspecting the data.
    
    -   **Example**: When you visit a secure banking website from a corporate network, your browser may need to pass through a corporate proxy. The CONNECT method is used to establish an encrypted tunnel between your browser and the bank's website, allowing sensitive data (such as login credentials) to pass through the proxy securely.
2.  **VPNs and Secure Channels**: **VPN (Virtual Private Network)** services also rely on similar tunneling techniques to encrypt and route internet traffic securely. Some VPN services use CONNECT to create secure tunnels, ensuring that all data transmitted between the user and the internet is encrypted and safe from eavesdropping.
    
3.  **Accessing Blocked Content**: In environments where certain websites are blocked (for example, schools or offices), CONNECT can sometimes be used to bypass restrictions by establishing a tunnel through a proxy. Although this practice may violate network policies, it illustrates how CONNECT can be used to establish secure, unmonitored access to otherwise blocked resources.
    
4.  **Custom Proxies**: Developers may set up **custom proxies** to route application traffic for performance or security reasons. In these cases, CONNECT allows HTTPS or other secure traffic to pass through the proxy while maintaining privacy and security, as the proxy server cannot access the encrypted data inside the tunnel.
    

### Security Considerations

While CONNECT is essential for secure communications, it also presents some security challenges:

-   **Bypassing Content Filters**: Since CONNECT creates an encrypted tunnel that proxies cannot inspect, it can be used to bypass content filtering systems. This allows users to access restricted websites or services, which may violate organizational policies.
    
-   **Tunneling Malicious Traffic**: CONNECT can be exploited by malicious actors to tunnel harmful or unauthorized traffic through a proxy. Because the traffic is encrypted, firewalls and security systems may not detect malicious activity.
    
-   **Mitigation**: Many organizations address these risks by closely monitoring and restricting the use of the CONNECT method. Some proxies perform **SSL interception** to decrypt and inspect HTTPS traffic, though this introduces privacy concerns and may compromise user security.
    

## Conclusion

HTTP methods are essential in enabling communication between web applications and servers. Each method, from GET to CONNECT, is designed for a specific task, such as sending data, retrieving information, updating resources, or setting up secure connections. Choosing the correct method for the job improves the efficiency and security of your application.

GET is ideal for retrieving data, POST and PUT help with creating and updating, PATCH handles partial updates, and DELETE removes resources. HEAD checks response headers without retrieving content, OPTIONS shows supported methods, and TRACE and CONNECT assist with debugging and secure communication.

Using the appropriate HTTP methods ensures your application runs efficiently and securely, offering a smooth experience for users.

If you have any questions or suggestions, feel free to reach out on [LinkedIn][17]. If you enjoyed this content, consider [buying me a coffee][18] to support the creation of more developer-friendly contents.

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