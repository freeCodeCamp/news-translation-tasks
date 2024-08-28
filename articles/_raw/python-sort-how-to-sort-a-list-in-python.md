---
title: Python .sort() – How to Sort a List in Python
date: 2024-08-28T14:50:49.415Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/python-sort-how-to-sort-a-list-in-python/
posteditor: ""
proofreader: ""
---

In this article, you will learn how to use Python's `sort()` list method.

<!-- more -->

You will also learn a different way of performing sorting in Python by using the `sorted()` function so you can see how it differs from `sort()`.

By the end, you will know the basics of sorting a list in Python and know how to customize the sorting to fit your needs.

Here is what we will cover:

1.  [Syntax of the `sort` method][1]
2.  [Sort list items in ascending order][2]
3.  [Sort list items in descending order][3]
4.  [Sort list items using the `key` argument][4]
5.  [The differences between `sort()` and `sorted()`][5]
    1.  [When to use `sort()` and `sorted()`][6]

## The `sort()` Method - A Syntax Overview

The `sort()` method is one of the ways you can sort a list in Python.

When using `sort()`, you sort a list _in-place_. This means that the original list is directly modified. Specifially, the original order of elements is altered.

The general syntax for the `sort()` method looks like this:

```
list_name.sort(reverse=..., key=... )
```

Let's break it down:

-   `list_name` is the name of the list you're working with.
-   `sort()` is one of Python's list methods for sorting and changing a list. It sorts list elements in either _ascending_ or _descending_ order.
-   `sort()` accepts two **optional** parameters.
-   `reverse` is the first optional parameter. It specifies whether the list will be sorted in ascending or descending order. It takes a Boolean value, meaning the value is either True or False. The default value is **False**, meaning the list is sorted in ascending order. Setting it to True sorts the list backwards, in desceding order.
-   `key` is the second optional parameter. It takes a function or method which is used to specify any detailed sorting criteria you may have.

The `sort()` method returns `None`, which means there is no return value since it just modifies the original list. It does **not** return a new list.

## How to Sort List Items in Ascending Order Using the `sort()` Method

As mentioned earlier, by default, `sort()` sorts list items in ascending order.

Ascending (or increasing) order means that items are arranged from lowest to highest value.

The lowest value is on the left hand side and the highest value is on the right.

The general syntax to do this would look something similar to the following:

```
list_name.sort()
```

Let's take a look at the following example which shows how to sort a list of whole numbers:

```
# a list of numbers
my_numbers = [10, 8, 3, 22, 33, 7, 11, 100, 54]

#sort list in-place in ascending order
my_numbers.sort()

#print modified list
print(my_numbers)

#output

#[3, 7, 8, 10, 11, 22, 33, 54, 100]
```

In the example above, numbers are sorted from smallest to largest.

You can also achieve the same when working with a list of strings:

```
# a list of strings
programming_languages = ["Python", "Swift","Java", "C++", "Go", "Rust"]

#sort list in-place in alphabetical order
programming_languages.sort()

#print modified list
print(programming_languages)

#output

#['C++', 'Go', 'Java', 'Python', 'Rust', 'Swift']
```

In this case, each string contained in the list was sorted in aplhabetical order.

As you saw in both examples, the original lists were directly changed.

## How to Sort List Items in Descending Order Using the `sort()` Method

Descending (or decreasing) order is the opposite of ascending order - elements are arranged from highest to lowest value.

To sort list items in descending order, you need to use the optional `reverse` parameter with the `sort()` method, and set its value to `True`.

The general syntax to do this would look something like this:

```
list_name.sort(reverse=True)
```

Let's reuse the same example from the previous section, but this time make it so the numbers are sorted in reverse order:

```
# a list of numbers
my_numbers = [10, 8, 3, 22, 33, 7, 11, 100, 54]

#sort list in-place in descending order
my_numbers.sort(reverse=True)

#print modified list
print(my_numbers)

#output

#[100, 54, 33, 22, 11, 10, 8, 7, 3]
```

Now all the numbers are arranged in reverse, with the largest value being on the left hand side and the smallest on the right.

You can also achieve the same when working with a list of strings.

```
# a list of strings
programming_languages = ["Python", "Swift","Java", "C++", "Go", "Rust"]

#sort list in-place in  reverse alphabetical order
programming_languages.sort(reverse=True)

#print modified list
print(programming_languages)

#output

#['Swift', 'Rust', 'Python', 'Java', 'Go', 'C++']
```

List items are now arranged in reverse alphabetical order.

## How to Sort List Items Using the `key` parameter with the `sort()` Method

You can use the `key` parameter to perform more customized sorting operations.

The value assigned to the `key` parameter needs to be something callable.

Callable is something that can be called, which means it can be invoked and referenced.

Some examples of callable objects are methods and functions.

This method or function assigned to `key` will be applied to all the elements in the list before any sorting occurs and will specify the logic for the sorting criteria.

Say you want to sort a list of strings based on their length.

For that, you assign the built-in `len()` function to the `key` parameter.

The `len()` function will count the length of each element stored in the list by counting the characters contained in that element.

```
programming_languages = ["Python", "Swift","Java", "C++", "Go", "Rust"]

programming_languages.sort(key=len)

print(programming_languages)

#output

#['Go', 'C++', 'Java', 'Rust', 'Swift', 'Python']
```

In the example above, strings are sorted in the default ascending order, but this time the sorting occurs based on their length.

The shortest string is on the left hand side and the longest on the right.

The `key` and `reverse` parameters can also be combined.

For example, you could sort the list items based on their length but in descending order.

```
programming_languages = ["Python", "Swift","Java", "C++", "Go", "Rust"]

programming_languages.sort(key=len, reverse=True)

print(programming_languages)

#output

#['Python', 'Swift', 'Java', 'Rust', 'C++', 'Go']
```

In the example above, strings go from longest to shortest.

Another thing to note is that you can create a custom sorting function of your own, to create more explicit sorting criteria.

For example, you can create a specific function and then sort the list according to the return value of that function.

Say you have a list of dictionaries with programming languages and the year each programming language was created.

```
programming_languages = [{'language':'Python','year':1991},
{'language':'Swift','year':2014},
{'language':'Java', 'year':1995},
{'language':'C++','year':1985},
{'language':'Go','year':2007},
{'language':'Rust','year':2010},
]
```

You can define a custom function that gets the value of a specific key from the dictionary.

💡 Keep in mind that a dictionary key and the `key` parameter that `sort()` accepts are two different things!

Specifically, the function will get and return the value of the `year` key in the list of dictionaries, which specifies the year when every language in the dictionary was created.

The return value will then apply as the sorting criteria for the list.

```
programming_languages = [{'language':'Python','year':1991},
{'language':'Swift','year':2014},
{'language':'Java', 'year':1995},
{'language':'C++','year':1985},
{'language':'Go','year':2007},
{'language':'Rust','year':2010},
]

def get_year(element):
    return element['year']
```

You can then sort according to the return value of the function you created earlier by assigning it to the `key` parameter and sort by the default ascending chronological order:

```
programming_languages = [{'language':'Python','year':1991},
{'language':'Swift','year':2014},
{'language':'Java', 'year':1995},
{'language':'C++','year':1985},
{'language':'Go','year':2007},
{'language':'Rust','year':2010},
]

def get_year(element):
    return element['year']

programming_languages.sort(key=get_year)

print(programming_languages)
```

Output:

```
[{'language': 'C++', 'year': 1985}, {'language': 'Python', 'year': 1991}, {'language': 'Java', 'year': 1995}, {'language': 'Go', 'year': 2007}, {'language': 'Rust', 'year': 2010}, {'language': 'Swift', 'year': 2014}]
```

If you want to sort from the most recently created language to the oldest, or otherwise in descending order, you then use the `reverse=True` parameter:

```
programming_languages = [{'language':'Python','year':1991},
{'language':'Swift','year':2014},
{'language':'Java', 'year':1995},
{'language':'C++','year':1985},
{'language':'Go','year':2007},
{'language':'Rust','year':2010},
]

def get_year(element):
    return element['year']

programming_languages.sort(key=get_year, reverse=True)

print(programming_languages)
```

Output:

```
[{'language': 'Swift', 'year': 2014}, {'language': 'Rust', 'year': 2010}, {'language': 'Go', 'year': 2007}, {'language': 'Java', 'year': 1995}, {'language': 'Python', 'year': 1991}, {'language': 'C++', 'year': 1985}]
```

To achieve exactly the same result you can create a lambda function.

Instead of using the regular custom function you defined using the `def` keyword, you can:

-   create a concise one line expression,
-   and not define a function name like you did with the `def` function. Lambda functions are also called _anonymous_ functions.

```
programming_languages = [{'language':'Python','year':1991},
{'language':'Swift','year':2014},
{'language':'Java', 'year':1995},
{'language':'C++','year':1985},
{'language':'Go','year':2007},
{'language':'Rust','year':2010},
]

programming_languages.sort(key=lambda element: element['year'])

print(programming_languages)
```

The lambda function which is specified with the line `key=lambda element: element['year']` sorts these programming languages from oldest to most recent.

## The Differences between `sort()` and `sorted()`

The `sort()` method works in a similar way to the `sorted()` function.

The general syntax of the `sorted()` function looks like this:

```
sorted(list_name,reverse=...,key=...)
```

Let's break it down:

-   `sorted()` is a built-in function that accepts an iterable. It then sorts it in either ascending or descending order.
-   `sorted()` accepts three parameters. One parameter is required and the other two are optional.
-   `list_name` is the **required** parameter. In this case the parameter is list, but `sorted()` accepts any other iterable object.
-   `sorted()` also accepts the optional parameters `reverse` and `key`, which are the same optional parameters that the `sort()` method accepts.

The main difference between `sort()` and `sorted()` is that the `sorted()` function takes a list and **returns a new sorted copy** of it.

The new copy contains the elements of the original list in a sorted order.

The elements in the original list are not affected and remain unchanged.

So, to summarize the differences:

-   The `sort()` method has no return value and directly modifies the original list, changing the order of the elements contained in it.
-   On the other hand, the `sorted()` function has a return value, which is a sorted copy of the original list. That copy contains the list items of the original list in sorted order. Lastly, the original list remains intact.

Let's take a look at the following example to see how it works:

```
#original list of numbers
my_numbers = [10, 8, 3, 22, 33, 7, 11, 100, 54]

#sort original list in default ascending order
my_numbers_sorted = sorted(my_numbers)

#print original list
print(my_numbers)

#print the copy of the original list that was created
print(my_numbers_sorted)

#output

#[10, 8, 3, 22, 33, 7, 11, 100, 54]
#[3, 7, 8, 10, 11, 22, 33, 54, 100]
```

Since no additional arguments were provided to `sorted()`, it ordered the copy of the original list in the default ascending order, from the smallest value to the largest.

And when printing the original list you see that it has remained the same and the items have their original order.

As you saw in the example above, the copy of the list was assigned to a new variable, `my_numbers_sorted`.

Something like that could not be done with `sort()`.

Check out the following example to see what would happen if that was attemped with the `sort()` method.

```
my_numbers = [10, 8, 3, 22, 33, 7, 11, 100, 54]

my_numbers_sorted = my_numbers.sort()

print(my_numbers)
print(my_numbers_sorted)

#output

#[3, 7, 8, 10, 11, 22, 33, 54, 100]
#None
```

You see that the return value of `sort()`is `None`.

Lastly, another thing to note is that the `reverse` and `key` parameters that the `sorted()` function accepts work the exact same way they do with the `sort()` method you saw in the previous sections.

### When to Use `sort()` and `sorted()`

Listed below are a few things you might want to consider when deciding whether you should use `sort()` vs `sorted()`.

First, consider the type of data you're working with:

-   If you are working strictly with a list from the get go, then you will need to use the `sort()` method since `sort()` is only called on lists.
-   On the other hand, if you want more flexibility and are not working with a list just yet, then you can use `sorted()`. The `sorted()` function accepts and sorts any iterable (like dictionaries, tuples and sets) and not just lists.

Next, another thing to consider is whether it is important that you retain the original order of the list you're working with:

-   When calling `sort()`, the original list will be altered and the original order will be lost. You will not be able to retrive the original positions of the list elements. Use `sort()` when you are sure you want to change the list you're working with and are certain that you don't want to retain the order it had.
-   On the other hand, `sorted()` is useful for when you want to create a new list but you still want to keep the list you're working with. The `sorted()` function will create a new sorted list with list elements sorted in the desired order.

Lastly, another thing you might want to consider when working with larger data sets, is time and memory efficiency:

-   The `sort()` method takes up and consumes less memory since it just sorts the list in-place and creates no unncessary new list that you don't need. For the same reason, it is also slightly faster since it doesn't create a copy. This can be helpful when you are working with larger lists that contain more elements.

## Conclusion

And there you have it! You now know how to sort a list in Python using the `sort()` method.

You also took a look at the key differences between sorting a list using `sort()` and `sorted()`.

I hope you found this article useful.

To learn more about the Python programming language, check out freeCodeCamp's [Scientific Computing with Python Certification][7].

You'll start from the basics and learn in an interacitve and beginner-friendly way. You'll also build five projects at the end to put into practice and help reinforce what you've learned.

Thanks for reading and happy coding!

[1]: #syntax
[2]: #ascending
[3]: #descending
[4]: #key
[5]: #differences
[6]: #usage
[7]: https://www.freecodecamp.org/learn/scientific-computing-with-python/