---
title: How to redirect HTTP to HTTPS Using .htaccess
date: 2024-08-23T18:09:51.754Z
author: Bolaji Ayodeji
authorURL: https://www.freecodecamp.org/news/author/bolajiayodeji/
originalURL: https://www.freecodecamp.org/news/how-to-redirect-http-to-https-using-htaccess/
posteditor: ""
proofreader: ""
---

Chrome and Firefox have started showing insecure warnings on sites without [SSL certificates][1]. Without SSL, your website will show insecure to the visitors. Therefore, using an SSL-encrypted connection for safety, accessibility or PCI compliance reasons is necessary. It becomes very important to redirect from HTTP to HTTPS.

<!-- more -->

![0*wUTFJrRSM2vh1H7v](https://cdn-media-1.freecodecamp.org/images/0*wUTFJrRSM2vh1H7v.jpg)

### What is SSL?

SSL (Secure Sockets Layer) is a standard security protocol for establishing encrypted links between a web server and a browser in an online communication.

The usage of SSL technology ensures that all data transmitted between the web server and browser remains encrypted.

An **SSL certificate** is necessary to create SSL connection. You would need to give all details about the identity of your website and your company as and when you choose to activate SSL on your web server. Following this, two cryptographic keys are created — a Private Key and a Public Key.

[_Learn More: Why SSL is Critical?_][2]

In order to force your web traffic to use HTTPS, edit the codes in the **.htaccess file.**

Before we move onto redirecting HTTP to HTTPS, here’s how you can edit .htaccess file. If you already know skip to Redirection steps.

### Editing .htaccess File

There are instructions/directives in the .htaccess file that tell the server how to act in certain scenarios and directly affects how your website functions. Common directives in .htaccess file:

-   Redirects
-   Rewriting URLs

**Ways to edit an .htaccess file:**

1.  Edit the file on your computer and upload it to the server using FTP.
2.  Use “Edit” mode in FTP program that allows you to edit a file remotely.
3.  Use a text editor and SSH to edit the file.
4.  Use the File Manager in **cPanel** to edit the file.

### Editing .htaccess in cPanel File Manager

**Note:** Backup your website in case something goes wrong.

1.  Login to cPanel
2.  Files > File Manager > Document Root for:
3.  Now select the domain name you want to access
4.  Check “Show Hidden Files (dotfiles)”
5.  Click “Go”
6.  After a new tab or window opens, look for the .htaccess file.
7.  Right click on the .htaccess file and click on “Code Edit” on the menu.
8.  A dialogue box may pop up asking about encoding. Click “Edit” button to continue.
9.  Edit the file
10.  “Save Changes” when done.
11.  Test your website to make sure it is done correctly. In case, there is an error, restore to the previous version and try again.
12.  Once you are done, click “Close” to close the window.

### Redirecting HTTP to HTTPS

#### 1\. Redirect All Web Traffic

If you have existing code in your .htaccess, add the following:

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

#### 2\. Redirect Only a Specific Domain

For redirecting a specific domain to use HTTPS, add the following:

```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain\.com [NC]
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.com/$1 [R,L]
```

#### 3\. Redirect Only a Specific Folder

Redirecting to HTTPS on a specific folder, add the following:

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteCond %{REQUEST_URI} folder
RewriteRule ^(.*)$ https://www.yourdomain.com/folder/$1 [R,L]
```

Note: Replace _`“yourdomain”`_ with your actual domain name wherever required. Also, in case of the folder, replace _`/folder`_ with the actual folder name.

Think it was helpful? Share this article to help others come on HTTPS.

![0*P6EKtlMMzyIXNRMw](https://cdn-media-1.freecodecamp.org/images/0*P6EKtlMMzyIXNRMw.png)

[1]: https://www.instantssl.com/ssl.html
[2]: https://www.sslrenewals.com/blog/why-is-ssl-important-benefits-of-using-ssl-certificate