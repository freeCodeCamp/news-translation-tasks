---
title: Python List Length – How to Get the Size of a List in Python
date: 2024-10-18T11:17:30.856Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-list-length-how-to-get-the-size-of-a-list-in-python/
posteditor: ""
proofreader: ""
---

In Python, you use a list to store various types of data such as strings and numbers.

<!-- more -->

A list is identifiable by the square brackets that surround it, and individual values are separated by a comma.

To get the length of a list in Python, you can use the built-in `len()` function.

Apart from the `len()` function, you can also use a for loop and the `length_hint()` function to get the length of a list.

In this article, I will show you how to get the length of a list in 3 different ways.

## How to Get the Length of a List in Python with a For Loop

You can use the native for loop of Python to get the length of a list because just like a tuple and dictionary, a list is iterable.

This method is commonly called the naïve method.

The example below shows you how to use the naïve method to get the length of a list in Python

```
demoList = ["Python", 1, "JavaScript", True, "HTML", "CSS", 22]

# Initializing counter variable
counter = 0

for item in demoList:
    # Incrementing counter variable to get each item in the list
    counter = counter + 1

    # Printing the result to the console by converting counter to string in order to get the number
print("The length of the list using the naive method is: " + str(counter))
# Output: The length of the list using the naive method is: 7
```

## How to Get the Length of a List with the `len()` Function

Using the `len()` function is the most common way to get the length of an iterable.

This is more straightforward than using a for loop.

The syntax for using the `len()` method is `len(listName)`.

The code snippet below shows how to use the `len()` function to get the length of a list:

```
demoList = ["Python", 1, "JavaScript", True, "HTML", "CSS", 22]

sizeOfDemoList = len(demoList)

print("The length of the list using the len() method is: " + str(sizeOfDemoList))
# Output: The length of the list using the len() method is: 7
```

## How to Get the Length of a List with the `length_hint()` Function

The `length_hint()` method is a less known way of getting the length of a list and other iterables.

`length_hint()` is defined in the operator module, so you need to import it from there before you can use it.

The syntax for using the `length_hint()` method is `length_hint(listName)`.

The example below shows you how to use the `length_hint()` method to get the length of a list:

```
from operator import length_hint:
demoList = ["Python", 1, "JavaScript", True, "HTML", "CSS", 22]

sizeOfDemoList = length_hint(demoList)
print("The length of the list using the length_hint() method is: " + str(sizeOfDemoList))
# The length of the list using the length_hint() method is: 7
```

## Final Thoughts

This article showed you how to get the size of a list with 3 different methods: a for loop, the `len()` function, and the `length_hint()` function from the operator module.

You might be wondering which to use between these 3 methods.

I would advise that you use `len()` because you don't need to do much to use it compared to for loop and `length_hint()`.

In addition, `len()` seems to be faster than both the for loop and `length_hint()`.

If you find this article helpful, share it so it can reach others who need it.