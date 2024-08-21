---
title: JavaScript Date Now – How to Get the Current Date in JavaScript
date: 2024-08-21T09:05:27.390Z
author: Vijit Ail
authorURL: https://www.freecodecamp.org/news/author/vijit/
originalURL: https://www.freecodecamp.org/news/javascript-date-now-how-to-get-the-current-date-in-javascript/
posteditor: ""
proofreader: ""
---

Many applications you build will have some sort of a date component, whether it's the creation date of a resource, or the timestamp of an activity.

<!-- more -->

Dealing with date and timestamp formatting can be exhausting. In this guide, you will learn how to get the current date in various formats in JavaScript.

## JavaScript's Date Object

JavaScript has a built-in `Date` object that stores the date and time and provides methods for handling them.

To create a new instance of the `Date` object, use the `new` keyword:

```js
const date = new Date();
```

The `Date` object contains a `Number` that represents milliseconds passed since the Epoch, that is 1 January 1970.

You can pass a date string to the `Date` constructor to create an object for the specified date:

```js
const date = new Date('Jul 12 2011');
```

To get the current year, use the `getFullYear()` instance method of the `Date` object. The `getFullYear()` method returns the year of the specified date in the `Date` constructor:

```js
const currentYear = date.getFullYear();
console.log(currentYear); //2020
```

Similarly, there are methods for getting the current day of the month and the current month:

```js
const today = date.getDate();
const currentMonth = date.getMonth() + 1; 
```

The `getDate()` method returns the current day of the month (1-31).

The `getMonth()` method returns the month of the specified date. One point to note about the `getMonth()` method is that it returns 0-indexed values (0-11) where 0 is for January and 11 for December. Hence the addition of 1 to normalize the month's value.

## Date now

`now()` is a static method of the `Date` object. It returns the value in milliseconds that represents the time elapsed since the Epoch. You can pass in the milliseconds returned from the `now()` method into the `Date` constructor to instantiate a new `Date` object:

```js
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
```

## Formatting The Date

You can format the date into multiple formats (GMT, ISO, and so on) using the methods of the `Date` object.

The `toDateString()` method returns the date in a human readable format:

```js
today.toDateString(); // "Sun Jun 14 2020"
```

The `toISOString()` method returns the date which follows the ISO 8601 Extended Format:

```js
today.toISOString(); // "2020-06-13T18:30:00.000Z"
```

The `toUTCString()` method returns the date in UTC timezone format:

```js
today.toUTCString(); // "Sat, 13 Jun 2020 18:30:00 GMT"
```

The `toLocaleDateString()` method returns the date in a locality-sensitive format:

```js
today.toLocaleDateString(); // "6/14/2020"
```

You can find the complete reference for the `Date` methods in the [MDN documentation][1].

## Custom Date Formatter Function

Apart from the formats mentioned in the above section, your application might have a different format for data. It could be in `yy/dd/mm` or `yyyy-dd-mm` format, or something similar.

To tackle this problem, it would be better to create a reusable function so that it can be used across multiple projects.

So in this section, let's create a utility function that will return the date in the format specified in the function argument:

```js
const today = new Date();

function formatDate(date, format) {
	//
}

formatDate(today, 'mm/dd/yy');
```

You need to replace the strings "mm", "dd", "yy" with the respective month, day and year values from the format string passed in the argument.

To do that you can use the `replace()` method like shown below:

```js
format.replace('mm', date.getMonth() + 1);
```

But this will lead to a lot of method chaining and make it difficult to maintain as you try to make the function more flexible:

```js
format.replace('mm', date.getMonth() + 1)
    .replace('yy', date.getFullYear())
	.replace('dd', date.getDate());
```

Instead of chaining methods, you can make use of regular expression with the `replace()` method.

First create an object that will represent a key-value pair of the substring and its respective value:

```js
const formatMap = {
	mm: date.getMonth() + 1,
    dd: date.getDate(),
    yy: date.getFullYear().toString().slice(-2),
    yyyy: date.getFullYear()
};
```

Next, use regular expression to match and replace the strings:

```js
formattedDate = format.replace(/mm|dd|yy|yyy/gi, matched => map[matched]);
```

The complete function looks like this:

```js
function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}
```

You can also add the ability to format timestamps in the function.

## Conclusion

I hope you now have a better understanding of the `Date` object in JavaScript. You can also use other third-party libraries like `datesj` and `moment` to handle dates in your application.

Until next time, stay safe and keep hustling.

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date