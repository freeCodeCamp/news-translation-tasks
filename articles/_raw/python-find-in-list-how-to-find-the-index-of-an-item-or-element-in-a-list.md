---
title: Python Find in List – How to Find the Index of an Item or Element in a List
date: 2024-08-21T09:09:13.236Z
author: Dionysia Lemonaki
authorURL: https://www.freecodecamp.org/news/author/dionysialemonaki/
originalURL: https://www.freecodecamp.org/news/python-find-in-list-how-to-find-the-index-of-an-item-or-element-in-a-list/
posteditor: ""
proofreader: ""
---

In this article you will learn how to find the index of an element contained in a list in the Python programming language.

<!-- more -->

There are a few ways to achieve this, and in this article you will learn three of the different techniques used to find the index of a list element in Python.

The three techniques used are:

-   finding the index using the `index()` list method,
-   using a `for-loop`,
-   and finally, using list comprehension and the `enumerate()` function.

Specifically, here is what we will cover in depth:

1.  [An overview of lists in Python][1]
    1.  [How indexing works][2]
2.  [Use the `index()` method to find the index of an item][3] 1.[Use optional parameters with the `index()` method][4]
3.  [Get the indices of all occurrences of an item in a list][5]
    1.  [Use a `for-loop` to get indices of all occurrences of an item in a list][6]
    2.  [Use list comprehension and the `enumerate()` function to get indices of all occurrences of an item in a list][7]

## What are Lists in Python?

Lists are a built-in data type in Python, and one of the most powerful data structures.

They act as containers and store multiple, typically related, items under the same variable name.

Items are placed and enclosed inside square brackets, `[]`. Each item inside the square brackets is separated by a comma, `,`.

```
# a list called 'my_information' that contains strings and numbers
my_information = ["John Doe", 34, "London", 1.76]
```

From the example above, you can see that lists can contain items that are of any data type, meaning list elements can be heterogeneous.

Unlike arrays that only store items that are of the same type, lists allow for more flexibility.

Lists are also _mutable_, which means they are changeable and dynamic. List items can be updated, new items can be added to the list, and any item can be removed at any time throughout the life of the program.

### An Overview of Indexing in Python

As mentioned, lists are a collection of items. Specifically, they are an ordered collection of items and they preserve that set and defined order for the most part.

Each element inside a list will have a unique position that identifies it.

That position is called the element's _index_.

Indices in Python, and in all programming languages, start at `0` and **not** `1`.

Let's take a look at the list that was used in the previous section:

```
my_information = ["John Doe", 34, "London", 1.76]
```

The list is zero-indexed and counting starts at `0`.

The first list element, `"John Doe"`, has an index of `0`. The second list element, `34`, has an index of `1`. The third list element, `"London"`, has an index of `2`. The forth list element, `1.76`, has an index of `3`.

Indices come in useful for accessing specific list items whose position (index) you know.

So, you can grab any list element you want by using its index.

To access an item, first include the name of the list and then in square brackets include the integer that corresponds to the index for the item you want to access.

Here is how you would access each item using its index:

```
my_information = ["John Doe", 34, "London", 1.76]

print(my_information[0])
print(my_information[1])
print(my_information[2])
print(my_information[3])

#output

#John Doe
#34
#London
#1.76
```

But what about _finding_ the index of a list item in Python?

In the sections that follow you will see some of the ways you can find the index of list elements.

## Find the Index of an Item using the List `index()` Method in Python

So far you've seen how to access a value by referencing its index number.

What happens though when you don't know the index number and you're working with a large list?

You can give a value and find its index and in that way check the position it has within the list.

For that, Python's built-in `index()` method is used as a search tool.

The syntax of the `index()` method looks like this:

```
my_list.index(item, start, end)
```

Let's break it down:

-   `my_list` is the name of the list you are searching through.
-   `.index()` is the search method which takes three parameters. One parameter is required and the other two are optional.
-   `item` is the required parameter. It's the element whose index you are searching for.
-   `start` is the first optional parameter. It's the index where you will start your search from.
-   `end` the second optional parameter. It's the index where you will end your search.

Let's see an example using only the required parameter:

```
programming_languages = ["JavaScript","Python","Java","C++"]

print(programming_languages.index("Python"))

#output
#1
```

In the example above, the `index()` method only takes one argument which is the element whose index you are looking for.

Keep in mind that the argument you pass is _case-sensitive_. This means that if you had passed "python", and not "Python", you would have received an error as "python" with a lowercase "p" is not part of the list.

The return value is an integer, which is the index number of the list item that was passed as an argument to the method.

Let's look at another example:

```
programming_languages = ["JavaScript","Python","Java","C++"]

print(programming_languages.index("React"))

#output
#line 3, in <module>
#    print(programming_languages.index("React"))
#ValueError: 'React' is not in list
```

If you try and search for an item but there is no match in the list you're searching through, Python will throw an error as the return value - specifically it will return a `ValueError`.

This means that the item you're searching for doesn't exist in the list.

A way to prevent this from happening, is to wrap the call to the `index()` method in a `try/except` block.

If the value does not exist, there will be a message to the console saying it is not stored in the list and therefore doesn't exist.

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

try:
    print(programming_languages.index("React"))
except ValueError:
    print("That item does not exist")

#output
#That item does not exist
```

Another way would be to check to see if the item is inside the list in the first place, before looking for its index number. The output will be a Boolean value - it will be either True or False.

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print("React" in programming_languages)

#output
#False
```

### How to Use the Optional Parameters with the `index()` Method

Let's take a look at the following example:

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print(programming_languages.index("Python"))

#output
#1
```

In the list `programming_languages` there are three instances of the "Python" string that is being searched.

As a way to test, you could work backwards as in this case the list is small.

You could count and figure out their index numbers and then reference them like you've seen in previous sections:

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print(programming_languages[1])
print(programming_languages[3])
print(programming_languages[5])

#output
#Python
#Python
#Python
```

There is one at position `1`, another one at position `3` and the last one is at position `5`.

Why aren't they showing in the output when the `index()` method is used?

When the `index()` method is used, the return value is only the **first occurence** of the item in the list. The rest of the occurrences are not returned.

The `index()` method returns only the index of the position where the item appears the **first** time.

You could try passing the optional `start` and `end` parameters to the `index()` method.

You already know that the first occurence starts at index `1`, so that could be the value of the `start` parameter.

For the `end` parameter you could first find the length of the list.

To find the length, use the `len()` function:

```
print(len(programming_languages)) 

#output is 6
```

The value for `end` parameter would then be the length of the list minus 1. The index of the last item in a list is always one less than the length of the list.

So, putting all that together, here is how you could try to get all three instances of the item:

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

print(programming_languages.index("Python",1,5))

#output
#1
```

The output still returns only the first instance!

Although the `start` and `end` parameters provide a range of positions for your search, the return value when using the `index()` method is still only the first occurence of the item in the list.

## How to Get the Indices of All Occurrences of an Item in A List

### Use a `for-loop` to Get the Indices of All Occurrences of an Item in A List

Let's take the same example that we've used so far.

That list has three occurrences of the string "Python".

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]
```

First, create a new, empty list.

This will be the list where all indices of "Python" will be stored.

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

python_indices = []
```

Next, use a `for-loop`. This is a way to iterate (or loop) through the list, and get each item in the original list. Specifically, we loop over each item's index number.

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

python_indices = []

for programming_language in range(len(programming_languages)):
```

You first use the `for` keyword.

Then create a variable, in this case `programming_language`, which will act as a placeholder for the position of each item in the original list, during the iterating process.

Next, you need to specify the set amount of iterations the `for-loop` should perform.

In this case, the loop will iterate through the full length of the list, from start to finish. The syntax `range(len(programming_languages))` is a way to access all items in the list `programming_languages`.

The `range()` function takes a sequence of numbers that specify the number it should start counting from and the number it should end the counting with.

The `len()` function calculates the length of the list, so in this case counting would start at `0` and end at - but not include - `6`, which is the end of the list.

Lastly, you need to set a logical condition.

Essentially, you want to say: "If during the iteration, the value at the given position is equal to 'Python', add that position to the new list I created earlier".

You use the `append()` method for adding an element to a list.

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

python_indices = []

for programming_language in range(len(programming_languages)):
    if programming_languages[programming_language] == "Python":
      python_indices.append(programming_language)

print(python_indices)

#output

#[1, 3, 5]
```

### Use List Comprehension and the `enumerate()` Function to Get the Indices of All Occurrences of an Item in A List

Another way to find the indices of all the occurrences of a particular item is to use list comprehension.

List comprehension is a way to create a new list based on an existing list.

Here is how you would get all indices of each occurrence of the string "Python", using list comprehension:

```
programming_languages = ["JavaScript","Python","Java","Python","C++","Python"]

python_indices  = [index for (index, item) in enumerate(programming_languages) if item == "Python"]

print(python_indices)

#[1, 3, 5]
```

With the `enumerate()` function you can store the indices of the items that meet the condition you set.

It first provides a pair (`index, item`) for each element in the list (`programming_languages`) that is passed as the argument to the function.

`index` is for the index number of the list item and `item` is for the list item itself.

Then, it acts as a counter which starts counting from `0` and increments each time the condition you set is met, selecting and moving the indices of the items that meet your criteria.

Paired with the list comprehension, a new list is created with all indices of the string "Python".

## Conclusion

And there you have it! You now know some of the ways to find the index of an item, and ways to find the indices of multiple occurrences of an item, in a list in Python.

I hope you found this article useful.

To learn more about the Python programming language, check out freeCodeCamp's [Scientific Computing with Python Certification][8].

You'll start from the basics and learn in an interacitve and beginner-friendly way. You'll also build five projects at the end to put into practice and help reinforce what you've learned.

Thanks for reading and happy coding!

[1]: #intro
[2]: #index-intro
[3]: #index
[4]: #params
[5]: #all
[6]: #for
[7]: #enumerate
[8]: https://www.freecodecamp.org/learn/scientific-computing-with-python/