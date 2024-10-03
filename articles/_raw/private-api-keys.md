---
title: Demo
date: 2024-10-03T00:27:10.546Z
authorURL: ""
originalURL: https://www.freecodecamp.org/news/private-api-keys/
posteditor: ""
proofreader: ""
---

By Jackson Bates

<!-- more -->

## The Problem

All you want to do is fetch some JSON from an API endpoint for the weather, some book reviews, or something similarly simple.

The fetch query in your front-end is easy enough, but you have to paste your secret API key right there in the front-end code for anybody to find with a trivial amount of digging!

Also, pushing your API keys to your GitHub repository is a major problem: [Dev put AWS keys on Github. Then BAD THINGS happened][1].

> "Why is this so hard?!" – You, probably 15 minutes ago

## The Solution

You should use a back-end server as a relay to fetch the API results for you and then pass them on to your front-end

## The New Problem

You're just trying to do a front-end demo for your portfolio! You haven't learned anything about back-end technologies yet! Why is this so hard?!

# Demo

I've encountered this problem often enough that I've decided to stop coming up with silly hacks and implement a solution that works with minimal back-end code.

In this demo I set up a back-end that listens for POST requests and sends them to the [GoodReads API][2]. To use this you need to implement **your own** front-end that can send the appropriate POST request to this back-end. Your front-end won't communicate with GoodReads directly, so no API key is exposed.

## You will need

-   [Node][3] (this has been tested with v10.16.0, later versions will be fine, earlier ones may encounter problems)
-   [git][4]
-   This repo: https://github.com/JacksonBates/example-goodreads-api-relay

### Get started

`git clone https://github.com/JacksonBates/example-goodreads-api-relay.git`

The README.md contains everything you should need to know, including installation and set up.

I've included the key points here for convenience:

### README.md

Install dependancies:

`npm i`

You need to create your own `.env` file for your key:

`cp .env.example .env`

Then open the new `.env` file and paste your keys in the correct spot.

Example:

```
GOODREADS_API_KEY=AABBCCDDEEFF00112233445566778899
```

Now run the server:

`node app.js`

In the browser, navigate to localhost:3000 to confirm the server is running. You should see a simple `Hello World!`

### What next?

Now read the `app.js` file thoroughly.

I've commented the code heavily to help you understand what is going on if you haven't seen node / express much before.

```
// app.js

// These import necessary modules and set some initial variables
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const convert = require("xml-js");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;

// Rate limiting - Goodreads limits to 1/sec, so we should too

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 1000, // 1 second
    max: 1, // limit each IP to 1 requests per windowMs
})

//  apply to all requests
app.use(limiter)

// Routes

// Test route, visit localhost:3000 to confirm it's working
// should show 'Hello World!' in the browser
app.get("/", (req, res) => res.send("Hello World!"));

// Our Goodreads relay route!
app.get("/api/search", async (req, res) => {
    try {
        // This uses string interpolation to make our search query string
        // it pulls the posted query param and reformats it for goodreads
        const searchString = `q=${req.query.q}`;

        // It uses node-fetch to call the goodreads api, and reads the key from .env
        const response = await fetch(`https://www.goodreads.com/search/index.xml?key=${process.env.GOODREADS_API_KEY}&${searchString}`);
        //more info here https://www.goodreads.com/api/index#search.books
        const xml = await response.text();

        // Goodreads API returns XML, so to use it easily on the front end, we can
        // convert that to JSON:
        const json = convert.xml2json(xml, { compact: true, spaces: 2 });

        // The API returns stuff we don't care about, so we may as well strip out
        // everything except the results:
        const results = JSON.parse(json).GoodreadsResponse.search.results;

        return res.json({
            success: true,
            results
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
})

// This spins up our sever and generates logs for us to use.
// Any console.log statements you use in node for debugging will show up in your
// terminal, not in the browser console!
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
```

**Update**: Huge thanks to Gouri Shankar Kumawat for contributing a PR that improved this code! You can follow him on Twitter at [@dev\_gskumawat][5], or on GitHub: [gskumawat0][6]

### Test the API relay

Use [Postman][7] to test the API.

Set Postman to GET and paste this in the url: `localhost:3000/api/search?q=hobbit`

Postman will show you the JSON response below.

![Image](https://www.freecodecamp.org/news/content/images/2019/10/get_request.png) _Screenshot of Postman showing the returned JSON from our new back-end_

### How do you use this in your front end?

This simple app is listening for post requests at `/api/search`, so interact with it in your front end app the way you have been previously with the original api.

This is only configured to handle search queries - if you want to use other Goodreads API endpoints / methods, you'll need to think about how you implement them yourself!

### Hosting

You can't deploy your front-end and still have this on localhost - obviously you need to deploy this, too.

I recommend [Heroku][8].

## Extra Credit

If you wanted to extend this, you could consider how you might only make this accessible from a restricted range of IP addresses to increase the security - which was outside of the scope of this tutorial / demo.

---

This was hastily put together in response to a discussion on the [forum][9]. If you spot any issues in this post or the example code, please don't hesitate to reply to the [forum thread][10] that started it all. I'll keep the article and repo up-to-date with improvements.

Feel free to submit PRs if you have valuable contributions to make :)

You can also reach out to me via Twitter: [@JacksonBates][11].

[1]: https://www.theregister.co.uk/2015/01/06/dev_blunder_shows_github_crawling_with_keyslurping_bots/
[2]: https://www.goodreads.com/api
[3]: https://nodejs.org/en/download/
[4]: https://git-scm.com/downloads
[5]: https://https://twitter.com/dev_gskumawat
[6]: https://github.com/gskumawat0
[7]: https://www.getpostman.com/
[8]: https://devcenter.heroku.com/articles/deploying-nodejs
[9]: https://www.freecodecamp.org/forum
[10]: https://www.freecodecamp.org/forum/t/trying-to-fetch-response-from-goodreads-api/323312?u=jacksonbates
[11]: https://twitter.com/jacksonbates