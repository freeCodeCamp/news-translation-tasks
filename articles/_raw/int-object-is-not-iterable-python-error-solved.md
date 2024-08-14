---
title: Int Object is Not Iterable – Python Error [Solved]
date: 2024-08-14T09:26:27.222Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/int-object-is-not-iterable-python-error-solved/
translator: ""
reviewer: ""
---

If you are running your Python code and you see the error “TypeError: 'int' object is not iterable”, it means you are trying to loop through an integer or other data type that loops cannot work on.

<!-- more -->

In Python, iterable data are lists, tuples, sets, dictionaries, and so on.

In addition, this error being a “TypeError” means you’re trying to perform an operation on an inappropriate data type. For example, adding a string with an integer.

Today is the last day you should get this error while running your Python code. Because in this article, I will not just show you how to fix it, I will also show you how to check for the `__iter__` magic methods so you can see if an object is iterable.

## How to Fix Int Object is Not Iterable

If you are trying to loop through an integer, you will get this error:

```
count = 14

for i in count:
    print(i)
# Output: TypeError: 'int' object is not iterable
```

One way to fix it is to pass the variable into the `range()` function.

In Python, the range function checks the variable passed into it and returns a series of numbers starting from 0 and stopping right before the specified number.

The loop will now run:

```
count = 14

for i in range(count):
    print(i)

# Output: 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
```

Another example that uses this solution is in the snippet below:

```
age = int(input("Enter your age: "))

for num in range(age):
    print(num)

# Output: 
# Enter your age: 6
# 0
# 1
# 2
# 3
# 4
# 5
```

## How to Check if Data or an Object is Iterable

To check if some particular data are iterable, you can use the `dir()` method. If you can see the magic method `__iter__`, then the data are iterable. If not, then the data are not iterable and you shouldn’t bother looping through them.

```
perfectNum = 7

print(dir(perfectNum))

# Output:['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', 
# '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```

The `__iter__` magic method is not found in the output, so the variable `perfectNum` is not iterable.

```
jerseyNums = [43, 10, 7, 6, 8]

print(dir(jerseyNums))

# Output: ['__add__', '__class__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

The magic method `__iter__` was found, so the list `jerseyNums` is iterable.

## Conclusion

In this article, you learned about the “Int Object is Not Iterable” error and how to fix it.

You were also able to see that it is possible to check whether an object or some data are iterable or not.

If you check for the `__iter__` magic method in some data and you don’t find it, it’s better to not attempt to loop through the data at all since they're not iterable.

Thank you for reading.

---

![Kolade Chris](https://cdn.hashnode.com/res/hashnode/image/upload/v1720467520534/YTa5HE3R0.jpg)

I'm a software developer and tech writer focusing on frontend technologies

---

If you read this far, thank the author to show them you care. Say Thanks

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started][1]

[1]: https://www.freecodecamp.org/learn/