---
title: Python Multiline Comment – How to Comment Out Multiple Lines in Python
date: 2024-08-27T07:35:05.247Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-multiline-comment-how-to-comment-out-multiple-lines-in-python/
posteditor: ""
proofreader: ""
---

Commenting is an integral part of every programming language. With comments, you get a better understanding of your own code, make it more readable, and can help team members understand how it works.

<!-- more -->

Comments are ignored by compilers and interpreters, so they don’t run.

Apart from making your code more readable, comments can also help while you're debugging – if you have two lines of code, you can comment out one to prevent it from running.

Just like other programming languages, Python supports comments.

The problem is that Python doesn't have a built-in mechanism for multi-line comments.

So in this article, I won't just show you how to make single-line comments in Python – I'll also show you the workaround for making multi-line comments.

## How to Make Single Line Comments in Python

To make single-line comments in Python, prepend each line with a hash (`#`).

```
# print("Hello world")

print("Hello campers")
```

Output:

```
Hello campers
```

As you can see, the commented line wasn't printed in the output.

## How to Make Multi-line Comments in Python

Unlike other programming languages such as JavaScript, Java, and C++ which use `/*...*/` for multi-line comments, there's no built-in mechanism for multi-line comments in Python.

To comment out multiple lines in Python, you can prepend each line with a hash (`#`).

```
# print("Hello world")
# print("Hello universe")
# print("Hello everyone")

print("Hello campers")
```

Output:

```
Hello campers
```

With this approach, you're technically making multiple single-line comments.

The real workaround for making multi-line comments in Python is by using **docstrings**.

If you use a docstring to comment out multiple line of code in Python, that block of code will be ignored, and only the lines outside the docstring will run.

```
"""
This is a multi-line comment with docstrings

print("Hello world")
print("Hello universe")
print("Hello everyone")
"""

print("Hello campers")
```

Output:

```
Hello campers
```

**NB:** One thing to note is that while using doctsrings for commenting, indentation still matters. If you use 4 spaces (or a tab) for indentation, you will get an indentation error.

For example, this will work:

```
def addNumbers(num1, num2, num3):
    """
    A function that returns the sum of
    3 numbers
    """
    return num1 + num2 + num3
print(addNumbers(2, 3, 4))

# Output: 9
```

But this won't work:

```
def addNumbers(num1, num2, num3):
"""
A function that returns the sum of
3 numbers
"""
    return num1 + num2 + num3
print(addNumbers(2, 3, 4))
```

So your IDE will throw the error "`IndentationError: expected an indented block`".

## Conclusion

Since there's no built-in support for multi-line comments in Python, this article demonstrates how you can use docstrings as a workaround.

Still, you should generally stick to using regular Python comments using a hash (`#`), even if you have to use it for multiple lines. This is because docstrings are meant for documentation, and not for commenting out code.

If you found this article helpful, consider sharing it with your friends and family.

Thank you for reading.