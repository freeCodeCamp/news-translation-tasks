---
title: "GridFS Guide: How to Upload Files and Images to MongoDB Easily Using Node"
date: 2024-09-15T02:06:39.176Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/gridfs-making-file-uploading-to-mongodb/
posteditor: ""
proofreader: ""
---

By Tarique Ejaz

<!-- more -->

File storage is an important feature required in multiple processes across various types of applications. The existence of processes like `Content Delivery Networks (CDNs)`, set up through third-party cloud options like Amazon Web Services, and local file storage options have always made it easier to build such a feature.

However, the concept of storing files directly into a database through a single API call had intrigued me for quite some time. That is where GridFS came into the picture for me.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/gridfs.png) _Probably not the best way to go about implementing a file storage system_

## GridFS - A Layman's Understanding

MongoDB has a driver specification to upload and retrieve files from it called [GridFS][1]. GridFS allows you to store and retrieve files, which includes ones exceeding the BSON-document size limit of **16 MB**.

GridFS basically takes a file and breaks it up into multiple chunks which are stored as individual documents in two collections:

-   _the `chunk` collection_ (stores the document parts), and
-   _the `file` collection_ (stores the consequent additional metadata).

Each chunk is limited to 255 KB in size. This means that the last chunk is normally either equal to or less than 255 KB. Sounds rather neat.

When you read from GridFS, the driver reassembles all the chunks as needed. This means that you can read sections of a file as per your query range. Such as listening to a segment of an audio file or fetching a section of a video file.

**Note:** It is preferred to use GridFS for storing files normally exceeding the 16 MB size limit. For smaller files, it is recommended to use the BinData format to store the files in single documents.

This summarizes how GridFS works in general. Time to dip our feet into some working code and see how to implement a system as such.

## Enough Talk, Show Me the Code

We are using Node.js with access to a cloud instance of MongoDB for our setup. You can find the code repository for the sample application here.

[https://github.com/tarique93102/gridfs-file-storage][2]

We will completely focus on segments of the code that relate to the functionalities of GridFS. We'll learn how to set it up and use it to store files, retrieve files or a particular file, and delete a particular file. Let's start then.

### Initialize the Storage Engine

The packages needed to initialize the engine are [`multer-gridfs-storage`][3] and [`multer`][4]. We also use `method-override` middleware to enable the delete operation for files. The npm module `crypto` is used to encrypt the filenames on being stored and read from the database.

Once the storage engine using GridFS is initialized, you have to just call it using the multer middleware. It is then passed to the respective route executing the various file storage operations.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-1.png)

### Initialize GridFS Stream

We initialize a GridFS stream as seen in the code below. The stream is needed to read the files from the database and also to help render an image to a browser when needed.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-2.png)

### Upload a Single File or Image

We reuse the upload middleware we had created earlier.

**Note:** The name `file` is used as a parameter in `upload.single()` since we have the key with a similar name carrying the file being sent from the client.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-4.png)

### Upload Multiple Files or Images

We can also upload multiple files at once. Instead of `upload.single()`, we have to simply use `upload.multiple(<number of files>)`.

**Note:** The number of files uploaded can be less than the defined number of files.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-5.png)

### Fetch all Files From Database

Using the stream initialized we can fetch all the files in the particular database using `gfs.find().toArray(...)`. Once the files are obtained we map it to an array and ship the response.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-6.png)

### Fetch a Single File By Filename

It is super simple to query GridFS for a single file based on a specific attribute like `filename`. Using the GridFS stream, you can query the database through the function `gfs.find({<add query here>})`.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-7.png)

### Render a Fetched Image to Browser

This is a slightly trickier part since you have to not only fetch a file from the database but also to render it as an image on the respective browser. We fetch the file normally. No change in that process.

Then with the help of the method `openDownloadStreamByName()` on gfs stream, we can easily render an image as it returns a readable stream. Having done that, we can use JavaScript's `pipe()` to stream the response.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-8.png)

### Delete a Particular File by Id

Deleting a file is equally straight-forward. We use the stream method `delete()` with `_id` parameter to query and delete the concerned file.

![Image](https://www.freecodecamp.org/news/content/images/2020/05/server-app-9.png)

Those are the major functionalities offered by the storage engine design. I had leveraged the GridFS features discussed to create a simple image uploading application. You can delve deeper into the code in the [respository][5].

## Conclusion

It took me some time and a decent amount of struggle to understand how to make use of GridFS for a personal project. Because of this, I wanted to make sure that at least one other person didn't have to invest the same amount of time.

Having said that, I would recommend using GridFS with caution. It is not a _silver bullet_ to all your file storage concerns. Still, it is a nifty specification to know and be aware of.

If you have any queries or concerns, you can comment in the post or reach out to me on [`LinkedIn`][6].

In the mean time, keep coding.

[1]: https://docs.mongodb.com/manual/core/gridfs/
[2]: https://github.com/tarique93102/gridfs-file-storage
[3]: https://www.npmjs.com/package/multer-gridfs-storage
[4]: https://www.npmjs.com/package/multer
[5]: https://github.com/tarique93102/gridfs-file-storage
[6]: https://www.linkedin.com/in/tarique-ejaz/