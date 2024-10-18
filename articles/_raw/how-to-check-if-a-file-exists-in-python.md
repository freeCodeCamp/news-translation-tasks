---
title: How to Check if a File Exists in Python with isFile() and exists()
date: 2024-10-18T11:39:02.240Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/how-to-check-if-a-file-exists-in-python/
posteditor: ""
proofreader: ""
---

When working with files in Python, there may be times when you need to check whether a file exists or not.

<!-- more -->

But why should you check if a file exists in the first place?

Confirming the existence of a specific file comes in handy when you want to perform particular operations, such as [opening, reading from, or writing to that file][1].

If you attempt to perform any of the operations mentioned above and the file doesn't exist, you will come across bugs and your program will end up crashing.

So, to perform operations and prevent your program from crashing, it is a helpful first step to check if a file exists on a given path.

Thankfully, Python has multiple built-in ways of checking whether a file exists, like the built-in `os.path` and `pathlib` modules.

Specifically, when using the `os.path` module, you have access to:

-   the `os.path.isfile(path)` method that returns `True` if the `path` is a file or a symlink to a file.
-   the `os.path.exists(path)` method that returns `True` if the `path` is a file, directory, or a symlink to a file.

And when using the `pathlib` module, you have access to the `pathlib.Path(path).is_file()` function, which returns `True` if `path` is a file and it exists.

In this article, you will learn how to use Python to check if a file exists using the `os.path` and `pathlib` modules.

Let's dive in!

## How to Check if a File Exists Using the `os.path` Module

The `os` module is part of the standard library (also known as `stdlib`) in Python and provides a way of accessing and interacting with the operating system.

With the `os` module, you can use functionalities that depend on the underlying operating system, such as creating and deleting files and folders, as well as copying and moving contents of folders, to name a few.

Since it is part of the standard library, the `os` module comes pre-packaged when you install Python on your local system. You only need to import it at the top of your Python file using the `import` statement:

```
import os
```

The `os.path` is a submodule of the `os` module.

It provides two methods for manipulating files - specifically the `isfile()` and `exists()` methods that output either `True` or `False`, depending on whether a file exists or not.

Since you will be using the `os.path` submodule, you will instead need to import that at the top of your file, like so:

```
import os.path
```

### How to Check if a File Exists Using the `os.path.isfile()` Method in Python

The general syntax for the `isfile()` method looks like this:

```
os.path.isfile(path)
```

The method accepts only one argument, `path`, which represents the defined path to the file whose existence you want to confirm.

The `path` argument is a string enclosed in quotation marks.

The return value of the `isfile()` method is either a Boolean value - either `True` or `False` depending on whether that file exists.

Keep in mind that if the path ends in a directory name and not a file, it will return `False`.

Let's see an example of the method in action.

I want to check whether an `example.txt` file exists in my current working directory, `python_project`.

The `example.txt` is on the same level as my Python file `main.py`, so I am using a relative file path.

I store the path to `example.txt` in a variable named `path`.

Then I use the `isfile()` method and pass `path` as an argument to check whether `example.txt` exists in that path.

Since the file does exist, the return value is `True`:

```
import os.path

path = './example.txt'

check_file = os.path.isfile(path)

print(check_file)

# output

# True
```

Ok, but what about absolute paths?

Here is the equivalent code when using an absolute path. The `example.txt` file is inside a `python_project` directory, which is inside my home directory, `/Users/dionysialemonaki/`:

```
import os.path

path = '/Users/dionysialemonaki/python_project/example.txt'

print(os.path.isfile(file_path))

# Output

# True
```

And as mentioned earlier, the `isfile()` method only works for files and _not_ directories:

```
import os.path

path = '/Users/dionysialemonaki/python_project'

check_file = os.path.isfile(path)

print(check_file)

# output

# False
```

If your path ends in a directory, the return value is `False`.

### How to Check if a File Exists Using the `os.path.exists()` Method in Python

The general syntax for the `exists()` method looks like this:

```
os.path.exists(path)
```

As you can see from the syntax above, the `exists()` method looks similar to the `isfile()` method.

The `os.path.exists()` method checks to see whether the specified path exists.

The main difference between `exists()` and `isfile()` is that `exists()` will return `True` if the given path to a folder or a file exists, whereas `isfile()` returns `True` only if the given path is a path to a file and not a folder.

Keep in mind that if you don't have access and permissions to the directory, `exists()` will return `False` even if the path exists.

Let's go back to the example from the previous section and check whether the `example.txt` file exists in the current working directory using the `exists()` method:

```
import os.path

path = './example.txt'

check_file = os.path.exists(path)

print(check_file)

# output

# True
```

Since the path to `example.txt` exists, the output is `True`.

As mentioned earlier, the `exists()` method checks to see if the path to a directory is valid.

In the previous section, when I used the `isfile()` method and the path pointed to a directory, the output was `False` even though that directory existed.

When using the `exists()` method, if the path to a directory exists, the output will be `True`:

```
import os.path

path = '/Users/dionysialemonaki/python_project'

check_file = os.path.exists(path)

print(check_file)

# output

# True
```

The `exists()` method comes in handy when you want to check whether a file _or_ directory exists.

## How to Check if a File Exists Using the `pathlib` Module

Python 3.4 version introduced the `pathlib` module.

Using the `pathlib` module to check whether a file exists or not is an [object-oriented][2] approach to working with filesystem paths.

Like the `os.path` module from earlier on, you need to import the `pathlib` module.

Specifically, you need to import the `Path` class from the `pathlib` module like so:

```
from pathlib import Path
```

Then, create a new instance of the `Path` class and initialize it with the file path you want to check:

```
from pathlib import Path

# create a Path object with the path to the file
path = Path('./example.txt')
```

You can use the `type()` function to check the data type:

```
from pathlib import Path

path = Path('./example.txt')

print(type(path))

# output is a pathlib object
# <class 'pathlib.PosixPath'>
```

This confirms that you created a `Path` object.

Let’s see how to use the `pathlib` module to check if a file exists using the `is_file()` method, one of the built-in methods available with the `pathlib` module.

### How to Check if a File Exists Using the `Path.is_file()` Method in Python

The `is_file()` method checks if a file exists.

It returns `True` if the `Path` object points to a file and `False` if the file doesn't exist.

Let's see an example of how it works:

```
from pathlib import Path

# create a Path object with the path to the file
path = Path('./example.txt')

print(path.is_file())

# output

# True
```

Since the `example.txt` file exists in the specified path, the `is_file()` method returns `True`.

## Conclusion

In this article, you learned how to check if a file exists in Python using the `os.path` and `pathlib` modules and their associated methods.

Hopefully, you have understood the differences between the modules and when to use each one.

Thank you for reading, and happy coding!

[1]: https://www.freecodecamp.org/news/how-to-read-files-in-python/
[2]: https://www.freecodecamp.org/news/crash-course-object-oriented-programming-in-python/