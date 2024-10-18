---
title: Python Print Type of Variable – How to Get Var Type
date: 2024-10-18T11:20:41.093Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/python-print-type-of-variable-how-to-get-var-type/
posteditor: ""
proofreader: ""
---

If you're a Python beginner, becoming familiar with all its various data types can be confusing at first. After all, there are a lot of them available to you in the language.

<!-- more -->

In this article, I'm going to show you how to get the type of various data structures in Python by assigning them to a variable, and then printing the type to the console with the `print()` function.

## How to Print the Type of a Variable in Python

To get the type of a variable in Python, you can use the built-in `type()` function.

The basic syntax looks like this:

```
type(variableName)
```

In Python, everything is an object. So, when you use the `type()` function to print the type of the value stored in a variable to the console, it returns the class type of the object.

For instance, if the type is a string and you use the `type()` on it, you'd get `<class ‘string‘>` as the result.

To show you the `type()` function in action, I'm going to declare some variables and assign to them the various data types in Python.

```
name = "freeCodeCamp"

score = 99.99

lessons =  ["RWD", "JavaScript", "Databases", "Python"]

person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 28
}

langs = ("Python", "JavaScript", "Golang")

basics = {"HTML", "CSS", "JavaScript"}
```

I will then print the types to the console by wrapping `print()` around some strings and the `type()` function.

```
print("The variable, name is of type:", type(name))
print("The variable, score is of type:", type(score))
print("The variable, lessons is of type:", type(lessons))
print("The variable, person is of type:", type(person))
print("The variable, langs is of type:", type(langs))
print("The variable, basics is of type:", type(basics))
```

**Here are the outputs:**

```
# Outputs:
# The variable, name is of type:  <class 'str'>
# The variable, score is of type: <class 'float'>  
# The variable, lessons is of type:  <class 'list'>
# The variable, person is of type:  <class 'dict'> 
# The variable, langs is of type:  <class 'tuple'> 
# The variable, basics is of type:  <class 'set'>
```

## Final Thoughts

The `type()` function is a valuable built-in function of Python with which you can get the data type of a variable.

If you're a beginner, you should save yourself the hassle of cramming data types by using the `type()` function to print the type of a variable to the console. This will save you some time.

You can also use the `type()` function for debugging because in Python, variables are not declared with data types. So, the `type()` function was built into the language for you to check for data types of variables.

Thank you for reading.