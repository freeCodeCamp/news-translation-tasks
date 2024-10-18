---
title: Python JSON – How to Convert a String to JSON
date: 2024-10-18T11:26:11.948Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/python-json-how-to-convert-a-string-to-json/
posteditor: ""
proofreader: ""
---

In this tutorial you'll learn the basics of JSON – what it is, where it is most commonly used, and its syntax.

<!-- more -->

You'll also see how to convert a string to JSON in Python.

Let's get started!

## What is JSON?

JSON stands for JavaScript Object Notation.

It is a data format that's used for storing and transferring information for web applications.

JSON was inspired by the JavaScript programming language, but it's not tied to only one language.

Most modern programming languages have libraries for parsing and generating JSON data.

### Where is JSON used?

JSON is mostly used for sending and receiving data between a server and a client, where the client is a webpage or web application.

It's a much more solid format to use during the request-response cycle web applications use when connecting over a network. This is compared to the complicated and less compact XML, which was the format of choice years ago.

### Basic JSON syntax

In JSON, data is written in key-value pairs, like so:

```
"first_name": "Katie"
```

Data is enclosed in double quotation marks and the key-value pair is separated by a colon.

There can be more than one key-value pair and each one is separated by a comma:

```
"first_name": "Katie", "last_name": "Rodgers"
```

The example above showed an _object_, a collection of multiple key-value pairs.

Objects are inside curly braces:

```
{
    "first_name": "Katie",  
    "last_name": "Rodgers"
}
```

You can also create arrays, an ordered list of values, with JSON. In that case, arrays are contained inside square brackets:

```
[
  { 

    "first_name": "Katie",  
    "last_name": "Rodgers"
  },

  { 

    "first_name": "Naomi",  
    "last_name": "Green"
  },
]

// or:


{
 "employee": [
     { 
    "first_name": "Katie",  
    "last_name": "Rodgers"
  },

  { 
    "first_name": "Naomi",  
    "last_name": "Green"
  },
 ]
}

//this created an 'employee' object that has 2 records.
// It defines the first name and last name of an employee
```

## How to work with JSON data in Python

### Include the JSON module for Python

To use JSON with Python, you'll first need to include the JSON module at the top of your Python file. This comes built-in to Python and is part of the standard library.

So, say you have a file named `demo.py`. At the top you would add the following line:

```
import json
```

### Use the `json.loads()` function

If you have JSON string data in your program like so:

```
#include json library
import json

#json string data
employee_string = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'

#check data type with type() method
print(type(employee_string))

#output
#<class 'str'>
```

you can turn it into JSON in Python using the `json.loads()` function.

The `json.loads()` function accepts as input a valid string and converts it to a Python dictionary.

This process is called _deserialization_ – the act of converting a string to an object.

```
#include json library
import json

#json string data
employee_string = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'

#check data type with type() method
print(type(employee_string))

#convert string to  object
json_object = json.loads(employee_string)

#check new data type
print(type(json_object))

#output
#<class 'dict'>
```

You can then access each individual item, like you would when using a Python dictionary:

```
#include json library
import json

#json string data
employee_string = '{"first_name": "Michael", "last_name": "Rodgers", "department": "Marketing"}'

#check data type with type() method
print(type(employee_string))

#convert string to  object
json_object = json.loads(employee_string)

#check new data type
print(type(json_object))

#output
#<class 'dict'>

#access first_name in dictionary
print(json_object["first_name"])

#output
#Michael
```

Let's take another example:

1) Take some JSON string data:

```
import json

#json string
employees_string = '''
{
    "employees": [
       {
           "first_name": "Michael", 
           "last_name": "Rodgers", 
           "department": "Marketing"
        },
       {
           "first_name": "Michelle", 
           "last_name": "Williams", 
           "department": "Engineering"
        }
    ]
}
'''

#check data type using the type() method
print(type(employees_string))

#output
#<class 'str'>
```

2) Use the `json.loads()` function to convert a string to an object:

```
import json

emoloyees_string = '''
{
    "employees" : [
       {
           "first_name": "Michael", 
           "last_name": "Rodgers", 
           "department": "Marketing"
        },
       {
           "first_name": "Michelle", 
           "last_name": "Williams", 
           "department": "Engineering"
        }
    ]
}
'''

data = json.loads(employees_string)

print(type(data))
#output
#<class 'dict'>
```

3) Access the data:

```
import json

employees_string = '''
{
    "employees" : [
       {
           "first_name": "Michael", 
           "last_name": "Rodgers", 
           "department": "Marketing"

        },
       {
           "first_name": "Michelle", 
           "last_name": "Williams", 
           "department": "Engineering"
        }
    ]
}
'''

data = json.loads(employees_string)

print(type(data))
#output
#<class 'dict'>

#access first_name
for employee in data["employees"]: 
    print(employee["first_name"])

#output
#Michael
#Michelle
```

## Conclusion

And there you have it – you now know the basics of using JSON in Python.

If you want to learn more about Python, freeCodeCamp has a [Python Certification][1] which takes you from the fundamentals such as variables, loops, and functions to more advanced concepts such as data structures. In the end you'll also build 5 projects.

Thanks for reading and happy learning!

[1]: https://www.freecodecamp.org/learn/scientific-computing-with-python/