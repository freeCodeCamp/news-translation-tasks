---
title: PHP Array Handbook – How to Create, Work with, and Loop Through Arrays
date: 2024-09-04T15:40:24.407Z
author: Kolade Chris
authorURL: https://www.freecodecamp.org/news/author/koladechris/
originalURL: https://www.freecodecamp.org/news/php-array-handbook/
posteditor: ""
proofreader: ""
---

In every programming language, arrays provide a flexible option to store more than one data type in a single variable. They are one of the most versatile data structures in the programming world, which is one reason a lot of external data and many APIs come as arrays.

<!-- more -->

When you create an array in PHP, you'll want to be able to use it. To do so, you have to manipulate or loop through it. PHP provides several built-in functions for manipulating arrays and several ways to loop through arrays.

Understanding and utilizing those built-in functions and loops is essential for efficient array manipulation. With them, you'll save time, write cleaner code, and become a more efficient PHP developer.

Note that this is the first part of a two-article series. The second part will focus on how to use MongoDB in PHP by rebuilding the Football Team Cards project. The footballers will come from a MongoDB Atlas database. We will then fetch them as arrays and display them on the page.

## What We'll Cover

-   [How to Create Arrays in PHP][1]
    -   [How to Create Arrays with the Array Function][2]
    -   [How to Create Arrays with the Square Bracket Syntax][3]
-   [How to Print Arrays in PHP][4]
    -   [How to Print an Array with the `print_r()` Function][5]
    -   [How to Print an Array with the var\_dump() Function][6]
-   [PHP Array Functions][7]
    -   [The `count()` Array Function][8]
    -   [The `array_push()` Array Function][9]
    -   [The `array_pop()` Function][10]
    -   [The `array_shift()` Function][11]
    -   [The `array_unshift()` Function][12]
    -   [The `array_splice()` Function][13]
    -   [The `array_keys()` Function][14]
    -   [The `array_values()` Function][15]
    -   [The `array_reduce()` Function][16]
    -   [The `sort()` Function][17]
    -   [The `rsort()` Function][18]
    -   [The `array_replace()` Function][19]
    -   [The `array_reverse()` Function][20]
    -   [The `array_slice()` Function][21]
    -   [The `array_sum()` Function][22]
    -   [The `array_merge()` Function][23]
    -   [The `array_filter()` Function][24]
    -   [The `array_map()` Function][25]
    -   [The `array_search()` Function][26]
    -   [The `array_column()` Function][27]
    -   [The `in_array()` Function][28]
-   [How to Loop Through Arrays in PHP][29]
    -   [How to Loop through an Indexed Array][30]
    -   [How to Loop through an Associative Array][31]
    -   [How to Loop through an Array Inside the HTML Template][32]
-   [Conclusion][33]

## How to Create Arrays in PHP

In PHP, arrays exist in 3 forms:

-   **indexed** – a regular array with predefined indexes
-   **multidimensional** – an array with arrays within it
-   **associative** – an array with string indexes

There are two ways you can create any of those 3 forms of arrays in PHP. You can either use the `Array()` function or the square brackets syntax (`[ ]`).

### How to Create Arrays with the Array Function

To create a PHP array with the `array()` function, just pass the elements into the function.

Here's the catch:

-   a **regular array** is created with the `array()` function by passing the elements directly into the function
-   a **multidimensional array** is created with the `array()` function by nesting one or more `array()` functions inside one `array()` function
-   an **associative array** is created with the `array()` function by separating the key and values with a fat arrow (`=>`) and separating each entry with a comma

Here's examples of all of them in code:

```
// regular array with the array function
$myFruitsArr1 = array("Apple", "Banana", "Cashew", "Mango");


// multidimensional array with the array function
$myFruitsArr2 = array(
 array("Apple", "Avocado", "Apricot"),
 array("Banana", "Blackeberry", "Babaco"),
 array("Cashew", "Cherry", "Canary melon"),
 array("Mango", "Melon", "Miracle fruit"),
);


// associative array with the array function
$myFruitsArr3 = array(
 "fruit 1" => "Apple",
 "fruit 2" => "Banana",
 "fruit 3" => "Cashew",
 "fruit 4" => "Mango",
);
```

### How to Create Arrays with the Square Bracket Syntax

The square bracket syntax is the most common way to create an array in PHP (and JavaScript as well).

To create an array with the square bracket syntax, replace every occurrence of `array()` with opening and closing square brackets:

```
// regular array with the square bracket syntax
$myFruitsArr1 = ["Apple", "Banana", "Cashew", "Mango"];


// multidimensional array with the square bracket syntax
$myFruitsArr2 = [
 ["Apple", "Avocado", "Apricot"],
 ["Banana", "Blackeberry", "Babaco"],
 ["Cashew", "Cherry", "Canary melon"],
 ["Mango", "Melon", "Miracle fruit"],
];


// associative array with the square bracket syntax
$myFruitsArr3 = [
 "fruit 1" => "Apple",
 "fruit 2" => "Banana",
 "fruit 3" => "Cashew",
 "fruit 4" => "Mango",
];
```

## How to Print Arrays in PHP

Most times, you might need to print an array for debugging or visual purposes. PHP provides the `echo` statement, `print_r()`, and `var_dump()` functions for printing data.

`echo` does not print an array as it should because it is meant for printing strings, integers, and floats. You should use `print_r()` and `var_dump()` to print arrays instead.

### How to Print an Array with the `print_r()` Function

The `print_r()` function displays structured information about a variable in a human-readable format.

`print_r()` is particularly useful for displaying and inspecting the contents of complex data structures like arrays and objects. You use it by passing the array identifier into it:

```
print_r($myFruitsArr1);
print_r($myFruitsArr2);
print_r($myFruitsArr3);
```

Even if the array or object has nested elements, `print_r()` will traverse the entire array or object and display the content without missing any elements.

Here's what each of the 3 types of arrays looks like when you print them with the `print_r()` function:

![Image](https://www.freecodecamp.org/news/content/images/2024/05/image6-1.png) _Regular, multidimensional, and associative array examples._

### How to Print an Array with the `var_dump()` Function

The `var_dump()` function lets you print an array or variable like the `print_r()` function. What it does differently is that it displays the data type of what you're printing, including each element of the array.

Here's how to use the `var_dump()` function:

```
var_dump($myFruitsArr1);
var_dump($myFruitsArr2);
var_dump($myFruitsArr3);
```

And here's what each of the 3 types of array looks like when you print them with the `var_dump()` function:

![Image](https://www.freecodecamp.org/news/content/images/2024/05/image3.png) \_Regular, multidimensional, and associative arrays printed with var_dump()_

## PHP Array Functions

PHP provides a rich variety of array functions. They allow you to perform a wide range of operations on arrays, from basic manipulation to advanced data processing.

There are more than 70 array functions you can use in PHP, so we won't be able to cover all of them in this handbook.

Here are the ones we’ll cover:

-   `count()`
-   `array_push()`
-   `array_pop()`
-   `array_shift()`
-   `array_unshift()`
-   `array_splice()`
-   `array_keys()`
-   `array_values()`
-   `array_reduce()`
-   `sort()`
-   `rsort()`
-   `array_replace()`
-   `array_reverse()`
-   `array_slice()`
-   `array_sum()`
-   `array_merge()`
-   `array_filter()`
-   `array_map()`
-   `array_search()`
-   `array_column()`
-   `in_array()`

### The `count()` Array Function

The `count()` function does what its name implies — it goes through an array, counts the items, and returns an integer representing the array's length.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
echo count($myFruitsArr); // 4
```

`count()` can be helpful if you want to do something based on the length of a particular array:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


if (count($myFruitsArr) === 4) {
 echo "The fruits are enough";
} else {
 echo "The fruits are not enough";
}


// The fruits are enough
```

Because `count()` gets the length of an array, its commonly used in loops:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


for ($i = 0; $i < count($myFruitsArr); $i++) {
 echo $myFruitsArr[$i] . "<br>";
}


/*
Output:


Apple
Banana
Cashew
Mango
*/
```

### The `array_push()` Array Function

`array_push()` “pushes” an element to the end of the array. That is, it adds a specified item after the last item in the array. This means it modifies the original array.

`array_push` takes a compulsory `array` argument and the element you want to push into the existing array:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


array_push($myFruitsArr, "Avocado");
print_r($myFruitsArr); // Array ( [0] => Apple [1] => Banana [2] => Cashew [3] => Mango [4] => Avocado )
```

You can echo out the `<pre>` tag to format the resulting array better:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


array_push($myFruitsArr, "Avocado");
echo "<pre>";
var_dump($myFruitsArr);
echo "<pre>";


/*
Output:


array(5) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(6) "Banana"
 [2]=>
 string(6) "Cashew"
 [3]=>
 string(5) "Mango"
 [4]=>
 string(7) "Avocado"
}
*/
```

You can also push two or more items:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


array_push($myFruitsArr, "Avocado", "Pineapple");
echo "<pre>";
var_dump($myFruitsArr);
echo "<pre>";


/*
Output:


array(6) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(6) "Banana"
 [2]=>
 string(6) "Cashew"
 [3]=>
 string(5) "Mango"
 [4]=>
 string(7) "Avocado"
 [5]=>
 string(9) "Pineapple"
}
*/
```

### The `array_pop()` Function

`array_pop()` does the opposite of what `array_push()` does – **it removes an element from the end of the array**. That means it can be useful in stack-based data structures.

To use the `array_pop()` function, you only need to pass in the array you want to remove from:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_pop($myFruitsArr);


echo "<pre>";
var_dump($myFruitsArr);
echo "<pre>";


/*
Mango is gone:


array(3) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(6) "Banana"
 [2]=>
 string(6) "Cashew"
}
*/
```

You can echo out the popped element because `array_pop()` modifies the original array:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$poppedElem = array_pop($myFruitsArr);


echo $poppedElem; // Mango
```

### The `array_shift()` Function

`array_shift()` is like `array_pop`, but it removes the first element of an array and not the last. So, it's helpful in queue-based data structures.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_shift($myFruitsArr);
var_dump($myFruitsArr);


/*
Apple is gone:


array(3) {
 [0]=>
 string(6) "Banana"
 [1]=>
 string(6) "Cashew"
 [2]=>
 string(5) "Mango"
}
*/
```

Because the `array_shift()` function modifies the original array, it reorders the indices:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];


echo "before shift: ";
var_dump($myFruitsArr);


echo "<br>";


echo "after shift: ";
array_shift($myFruitsArr);
var_dump($myFruitsArr);
```

![Image](https://www.freecodecamp.org/news/content/images/2024/05/image5.png) _Before and after using the shift() function_

`array_shift()` also returns the removed array because it modifies the original array:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$shiftedElem = array_shift($myFruitsArr);

echo $shiftedElem; // Apple
```

### The `array_unshift()` Function

The `array_unshift()` function adds one or more elements to the beginning of an array. It modifies the original array by inserting the new elements at the start and re-indexing the existing elements.

It takes the array you want to add to and the element you want to add as the arguments. You can use it without providing the element to add to the beginning of the array, but it is advised not to do so.

Here’s an example:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
array_unshift($myFruitsArr, "Avocado");

var_dump($myFruitsArr);

/*
array(5) {
 [0]=>
 string(7) "Avocado"
 [1]=>
 string(5) "Apple"
 [2]=>
 string(6) "Banana"
 [3]=>
 string(6) "Cashew"
 [4]=>
 string(5) "Mango"
}
*/
```

### The `array_splice()` Function

The `array_splice()` method removes an item from an array and replaces it with the specified replacement. `array_splice()` modifies the original array, so it returns that removed item.

`array_splice()` takes up to 4 arguments, as you can see in its basic syntax below:

```
array_splice(array, startingIndex, length, replacement)
```

-   `array` is the array you’re using the `array_splice()` function on
-   `startingIndex` is the position where you want to start removing the item(s) in the array. That means if you specify `0`, it will remove the first element in the array.
-   `length` is how far you want the splicing to go. For instance, if you specify `2`, two items will be removed starting from the specified `startingIndex`
-   `replacement` is the item that will replace the item to be removed. This could be a single item or another array.

Here’s an example with an array and a string replacement:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$splicedItem = array_splice($myFruitsArr, 1, 1, "Avocado");

var_dump($myFruitsArr);

/*
Output:

array(4) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(7) "Avocado"
 [2]=>
 string(6) "Cashew"
 [3]=>
 string(5) "Mango"
}
*/
echo "<br>";

var_dump($splicedItem);

/*
Output:
array(1) {
 [0]=>
 string(6) "Banana"
}
*/
```

Here’s another example with an array as the replacement:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$splicedItem = array_splice($myFruitsArr, 1, 1, array("Avocado", "Apricot", "Abiu"));

var_dump($myFruitsArr);
/*
Output:

array(6) {
 [0]=>
 string(5) "Apple"
 [1]=>
 string(7) "Avocado"
 [2]=>
 string(7) "Apricot"
 [3]=>
 string(4) "Abiu"
 [4]=>
 string(6) "Cashew"
 [5]=>
 string(5) "Mango"
}
*/

var_dump($splicedItem);
/*
Output:

array(1) {
 [0]=>
 string(6) "Banana"
}
*/
```

### The `array_keys()` Function

There are two components in every array – the keys and the values. For a regular array, the keys are the indexes. For an associative array, the keys are the indices specified for each array item.

The `array_keys` function extracts the keys of the items in an array.

If the array is a regular array, it lists the indices of the array as the keys:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$myFruitsArrKeys = array_keys($myFruitsArr);

print_r($myFruitsArrKeys);
/*
Output:

Array
(
   [0] => 0
   [1] => 1
   [2] => 2
   [3] => 3
)
*/
```

If the array is an associative array, it lists out the keys you specified for each item in the array:

```
$myFruitsWithColors = [
 "apple" => "red",
 "banana" => "yellow",
 "orange" => "orange",
 "grape" => "purple",
 "watermelon" => "green",
];

$myFruitsWithColorsKeys = array_keys($myFruitsWithColors);

print_r($myFruitsWithColorsKeys);
/*
Output:

Array
(
   [0] => apple
   [1] => banana
   [2] => orange
   [3] => grape
   [4] => watermelon
)
*/
```

`array_keys()` can accept a second argument. This is usually an item in the array.

If you specify an item as that second argument, `array_keys()` will return the key for that item only:

```
$myFruitsWithColors = [
 "apple" => "red",
 "banana" => "yellow",
 "orange" => "orange",
 "grape" => "purple",
 "watermelon" => "green",
];

$myFruitsWithColorsKeys = array_keys($myFruitsWithColors, "orange");

print_r($myFruitsWithColorsKeys);
/*
Output:

Array
(
   [0] => orange
)
*/
```

### The `array_values()` Function

The `array_values()` function extracts the other part of an array – the values.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$myFruitsArrValues = array_values($myFruitsArr);

print_r($myFruitsArrValues);

/*
Output:
Array
(
   [0] => Apple
   [1] => Banana
   [2] => Cashew
   [3] => Mango
)
*/
```

The output of `array_values()` looks like what happens when you print a regular array with the `print_r()` function, but it’s not. What happens is it also assigns indices to those printed values.

An example with an associative array would make that clearer:

```
$myFruitsWithColors = [
 "apple" => "red",
 "banana" => "yellow",
 "orange" => "orange",
 "grape" => "purple",
 "watermelon" => "green",
];

$myFruitsWithColorsValues = array_values($myFruitsWithColors);
print_r($myFruitsWithColorsValues);

/*
Output:

Array
(
   [0] => red
   [1] => yellow
   [2] => orange
   [3] => purple
   [4] => green
)
*/
```

### The `array_reduce()` Function

The `array_reduce()` function is used to "reduce" an array to a single value by applying a callback function to each element of the array. It works like the `reduce()` array method of JavaScript.

`array_reduce()` iterates through the array and performs the callback function on each element, accumulating a single result.

That means you can use it for data aggregation and computation, like calculating the total value of items in a shopping cart.

`array_reduce()` takes 2 required arguments and 1 optional argument. Here’s the syntax:

```
array_reduce(arraytoReduce, callbackFunction, initialValue)
```

-   `arrayToReduce` is the array you’re using `reduce` on
-   `callbackFunction` is the function that will “reduce” the items of the array into a single value
-   `initialValue` is optional. It specifies the initial value of the accumulator. If provided, it will be used as the initial value for the first call to the callback function. If not provided, the first element of the array will be used as the initial accumulator value.

`array_reduce()` is usually used with numbers:

```
$myNumbers = [5, 89, 19, 10, 49];

$total = array_reduce($myNumbers, function ($carry, $item) {
 return $carry + $item;
}, 0);

echo $total; // 172
```

You can extract that callback function into a separate function and pass it in as one of the arguments of the `array_reduce()` function:

```
$myNumbers = [5, 89, 19, 10, 49];


function addNums($carry, $item)
{
 return $carry + $item;
}

$total = array_reduce($myNumbers, 'addNums', 0);

echo $total; // 172
```

`array_reduce()` also works with strings:

```
$words = ["Hello", "camper!", "How", "are", "you", "today?"];

// Use array_reduce to concatenate all the strings
$result = array_reduce($words, function ($carry, $item) {
 return $carry . " " . $item;
}, "");

echo $result; //  Hello camper! How are you today?
```

### The `sort()` Function

The `sort()` function takes an array and sorts it in ascending order based on the values of its items. It modifies the original array by rearranging its elements in ascending order.

If you have some data in an array that you want to organize in ascending order, the `sort()` function is perfect for that.

```
$myNums = [4, 2, 1, 3, 5];
sort($myNums);

print_r($myNums);

/*
Output:

Array
(
   [0] => 1
   [1] => 2
   [2] => 3
   [3] => 4
   [4] => 5
)
*/
```

### The `rsort()` Function

The `rsort()` function is similar to `sort()`, but it sorts the array in descending order instead of ascending order.

```
$myNums = array(4, 2, 1, 3, 5);
rsort($myNums);

/*
Output:

Array
(
   [0] => 5
   [1] => 4
   [2] => 3
   [3] => 2
   [4] => 1
)
*/

print_r($myNums);
```

### The `array_replace()` Function

The `array_replace()` function is used to replace the values of the first array with the values of a provided array. It's perfect for updating data.

`array_replace()` takes two arguments – the array you want to replace, and the new array.

```
$myNamesArr1 = ["Zen", "Kay", "Luger"];
$myNamesArr2 = ["Yuan", "Jay", "John"];

$replaceRes = array_replace($myNamesArr1, $myNamesArr2);

print_r($replaceRes);

/*
Output:
Array
(
   [0] => Yuan
   [1] => Jay
   [2] => John
)
*/
```

If you don’t provide a second value, it returns the only argument you provide:

```
$myNamesArr1 = ["Zen", "Kay", "Luger"];
$myNamesArr2 = ["Yuan", "Jay", "John"];

$replaceRes = array_replace($myNamesArr1);

print_r($replaceRes);

/*
Output:
Array
(
   [0] => Zen
   [1] => Kay
   [2] => Luger
)
*/
```

If you pass in three or more arrays as the arguments, the last argument will be the replacement for the first one, not the second:

```
$myNamesArr1 = ["Zen", "Kay", "Luger"];
$myNamesArr2 = ["Yuan", "Jay", "John"];
$myNamesArr3 = ["Eddy", "White", "Jane"];


$replaceRes = array_replace($myNamesArr1, $myNamesArr2, $myNamesArr3);

print_r($replaceRes);

/*
Output:
Array
(
   [0] => Eddy
   [1] => White
   [2] => Jane
)
*/
```

You can selectively replace an item in a particular index too:

```
$myFruitsArr1 = ["a" => "apple", "b" => "banana", "c" => "cherry"];
$myFruitsArr2 = array("b" => "blueberry", "c" => "cranberry");
$replaceRes = array_replace($myFruitsArr1, $myFruitsArr2);

print_r($replaceRes);

/*
Output:
Array
(
   [a] => apple
   [b] => blueberry
   [c] => cranberry
)
*/
```

### The `array_reverse()` Function

The `array_reverse()` function is used to reverse the order of elements in an array. It creates a new array with the elements in reverse order.

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango"];
$reversedArr = array_reverse($myFruitsArr);

print_r($reversedArr);

/*
Output:

Array
(
   [0] => Mango
   [1] => Cashew
   [2] => Banana
   [3] => Apple
)
*/
```

If you remember how the `rsort()` function works, it’s very similar to how `array_reverse()` works. The only difference is that `rsort()` modifies the original array, but `array_reverse()` does not.

### The `array_slice()` Function

If you want to extract a particular part of an array and return it as a separate array, `array_slice()` is the ideal function for you to use.

`array_slice()` allows you to specify the start index, the length of the slice, and whether to preserve the keys of the original array. Here’s the basic syntax:

```
array_slice(arrayToSlice, startIndex, length, preserve)
```

-   `arrayToSlice` is the array you want to use `array_slice()` on
-   `startIndex` is the index you want to start the slicing from
-   `length` is how far you want the slicing to go in the `arrayToSlice`. It is optional.
-   `preserve` specifies whether you want the index(es) of the array to change or not. It’s a boolean.

The example below starts the slicing from the second element in the array, which means it’ll leave the first element out and return the others:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$slicedArr = array_slice($myFruitsArr, 1);

print_r($slicedArr);

/*
Output:

Array
(
   [0] => Banana
   [1] => Cashew
   [2] => Mango
   [3] => Avocado
   [4] => Pineapple
)
*/
```

Don’t forget you can specify the number of items you want from the slicing by specifying a third optional argument:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$slicedArr = array_slice($myFruitsArr, 1, 3);

print_r($slicedArr);

/*
Output:

Array
(
   [0] => Banana
   [1] => Cashew
   [2] => Mango
)
*/
```

If you want to preserve the indexes, you can specify a fourth optional boolean argument of `true`:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$slicedArr = array_slice($myFruitsArr, 1, 3, true);

print_r($slicedArr);

/*
Output:

Array
(
   [1] => Banana
   [2] => Cashew
   [3] => Mango
)
*/
```

### The `array_sum()` Function

`array_sum()` adds all the numeric values in an array together and returns the result. The only parameter it takes is the array containing the numeric values.

```
$myNums = [5, 6, 9, 20, 1];

$total = array_sum($myNums);
echo $total; // 41
```

If used on an array containing strings, `array_sum()` throws the error `Warning: array_sum(): Addition is not supported on type string in /location/index.php on line #`:

```
$myFruitsArr = ["Apple", "Banana", "Cashew", "Mango", "Avocado", "Pineapple"];
$total = array_sum($myFruitsArr);
```

![Image](https://www.freecodecamp.org/news/content/images/2024/05/image2.png) _sum() function error_

### The `array_merge()` Function

`array_merge()` merges two or more arrays. That means it's ideal for combining multiple arrays into one giant array.

```
$array1 = [1, 2, 3];
$array2 = [4, 5, 6, 7, 8];

$result = array_merge($array1, $array2);

print_r($result);
/*
Output:


Array
(
   [0] => 1
   [1] => 2
   [2] => 3
   [3] => 4
   [4] => 5
   [5] => 6
   [6] => 7
   [7] => 8
)
*/
```

You can also use `array_merge()` on associative arrays:

```
$array1 = [
 'fname' => 'John',
 'sex' => 'male',
];


$array2 = [
 'lname' => 'Doe',
 'favColor' => 'red',
];

$result = array_merge($array1, $array2);
print_r($result);

/*
Output:

Array
(
   [fname] => John
   [sex] => male
   [lname] => Doe
   [favColor] => red
)
*/
```

If the arrays contain similar keys, the last one overrides the previous one(s) in the result:

```
$array1 = [
 'fname' => 'John',
 'sex' => 'male',
];


$array2 = [
 'fname' => 'Jane',
 'favColor' => 'red',
];

$result = array_merge($array1, $array2);
print_r($result);

/*
Output:

Array
(
   [fname] => Jane
   [sex] => male
   [favColor] => red
)
*/
```

If a single array is passed into `array_merge()` and the keys are not sequential integers starting from 0, but rather a sequence like `3`, `7`, `8`, the resulting array will have its keys reindexed starting from `0`:

```
$myArray = [3 => 'Barn', 7 => 'Silo', 8 => 'Tank'];
$res = array_merge($myArray);

print_r($res);

/*
Array
(
   [0] => Barn
   [1] => Silo
   [2] => Tank
)
*/
```

### The `array_filter()` Function

The `array_filter()` function “filters” the items of an array based on a callback function you pass into it. You can use it to remove unnecessary items from an array.

If the callback function returns `true` for an element in the array, that element is included in the resulting array, otherwise, it is excluded.

`array_filter()` takes up to 3 arguments. The basic syntax looks like this:

```
array_filter(arrayToFilter, callbackFunction, flag)
```

-   `arrayToFilter` is the array you want to filter. It’s a compulsory argument.
-   `callbackFunction` is the callback function you want to apply to each element of the array. If not provided, all elements evaluated to `true` will be included in the result.
-   `flag` specifies whether the array keys will be preserved or reindexed. Possible values are `ARRAY_FILTER_USE_KEY`, `ARRAY_FILTER_USE_BOTH`, and `ARRAY_FILTER_USE_BOTH`.

Here’s an example that gets the even numbers from an array of numbers:

```
$array = [76, 11, 12, 22, 13, 43, 54];
$getEvenNums = array_filter($array, function ($value) {
 return $value % 2 == 0;
});


print_r($getEvenNums);


/*
Array
(
   [0] => 76
   [2] => 12
   [3] => 22
   [6] => 54
)
*/
```

Here’s a more complex example of getting everyone with the first name “John” in a multidimensional associative array:

```
$persons = [
 ['first' => 'John', 'last' => 'Doe'],
 ['first' => 'Janet', 'last' => 'Jackson'],
 ['first' => 'John', 'last' => 'Smith'],
 ['first' => 'Jane', 'last' => 'Doe'],
 ['first' => 'David', 'last' => 'Lee'],
 ['first' => 'John', 'last' => 'Olga']
];


$personsWithJohnFirstnames = array_filter($persons, function ($person) {
 return $person['first'] === "John";
});

print_r($personsWithJohnFirstnames);

/*
Output:

Array
(
   [0] => Array
       (
           [first] => John
           [last] => Doe
       )

   [2] => Array
       (
           [first] => John
           [last] => Smith
       )

   [5] => Array
       (
           [first] => John
           [last] => Olga
       )

)
*/
```

Remember that if you pass in the array as the only argument, the resulting array will contain every item that evaluates to `true`:

```
$array = [9, 4, 10, 0, 3];
$result = array_filter($array);


print_r($result);


/*
Output:


Array
(
   [0] => 9
   [1] => 4
   [2] => 10
   [4] => 3
)
*/
```

### The `array_map()` Function

The `array_map()` function transforms all the elements of an array based on a callback function passed into it. It then returns a new array containing the transformed elements.

You can think about `array_map()` as a more convenient way to "loop" through an array, even though it's technically not a loop.

`array_map()` takes two compulsory parameters – the callback function and the array you want to transform.

Here's an example in which all the numbers of an array are squared:

```
$numbers = [5, 8, 3, 4];

$squaredNumbers = array_map(function ($num) {
 return $num * $num;
}, $numbers);

print_r($squaredNumbers);

/*
Output:

Array
(
   [0] => 25
   [1] => 64
   [2] => 9
   [3] => 16
)
*/
```

You can also extract the callback function into a separate function and pass it in:

```
function squareNums($num)
{
 return $num * $num;
}

$numbers = [5, 8, 3, 4];
$squaredNumbers = array_map('squareNums', $numbers);

print_r($squaredNumbers);

/*
Output:

Array
(
   [0] => 25
   [1] => 64
   [2] => 9
   [3] => 16
)
*/
```

You can also use the `array_map()` function on an array of strings. The example below converts all the fruits in the `$fruitsArr` array to uppercase:

```
$fruitsArr = ['mango', 'apple', 'orange', 'strawberry'];

function toUpperCase($str)
{
 return strtoupper($str);
}

$uppercasedFruits = array_map('toUpperCase', $fruitsArr);

print_r($uppercasedFruits);

/*
Output:

Array
(
   [0] => MANGO
   [1] => APPLE
   [2] => ORANGE
   [3] => STRAWBERRY
)
*/
```

Here's an example using an associative array where all the values are prefixed with `prefix_`:

```
$fruitsArr = [
 'fruit1' => 'mango',
 'fruit2' => 'banana',
 'fruit3' => 'orange',
];


function addPrefixToFruits($fruit)
{
 return 'prefix_' . $fruit;
}

$prefixedFruits = array_map('addPrefixToFruits', $fruitsArr);

print_r($prefixedFruits);

/*
Output:

Array
(
   [fruit1] => prefix_mango
   [fruit2] => prefix_banana
   [fruit3] => prefix_orange
)
*/
```

> **Note**: If you're wondering what the difference between `array_map()` and `array_filter()` is, the catch is that **`array_map()` transforms all the elements of the array based on a callback function**. In contrast, **`array_filter()` returns any element of the array that matches the callback function passed into it**.

### The `array_search()` Function

The `array_search()` function is used to search for a given value within an array. If the value is found, it returns the key of the value, otherwise, it returns nothing.

`array_search()` takes up to 3 arguments. Here's the syntax:

```
array_search(valueToSearch, arrayToSearch, strict)
```

-   `valueToSearch` is the value you're looking for
-   `arrayToSearch` is the array in which you want to search for the value
-   `strict` is an optional boolean argument that determines whether a strict comparison operator should be used in the search. It's `false` by default. But if set to `true`, it will search for identical elements in the array and return them. For example, `"1"` and `1`.

Here's an example checking for the item `Cashew` in an array of fruits:

```
$myFruitsArr = [
 "fruit1" => "Apple",
 "fruit2" => "Banana",
 "fruit3" => "Cashew",
 "fruit4" => "Mango",
 "fruit5" => "Avocado",
 "fruit6" => "Pineapple"
];

$checkForCashew = array_search('Cashew', $myFruitsArr);

echo $checkForCashew; // fruit3
```

And if you use it on a regular array, it will still return the index of the array, which is the key under the hood:

```
$myFruitsArr = [
 "Apple",
 "Banana",
 "Cashew",
 "Mango",
 "Avocado",
 "Pineapple"
];


$CheckForCashew = array_search('Cashew', $myFruitsArr);


echo $CheckForCashew; // 2
```

### The `array_column()` Function

The `array_column()` extracts a single column of values from a multi-dimensional array. It returns an array containing the values of a specified column from the input array.

That means `array_column` is useful when you want to make an array out of the column of an existing array.

`array_column()` takes up to 3 arguments. Here's the syntax:

```
array_column(parentArray, columKey, indexKey)
```

-   `parentArray`: usually a multidimensional array, it's the array to extract the column of values from
-   `columnKey`: the key or index of the column to extract values from. This can be an integer index or a string key representing the column name.
-   `indexKey` (optional): the column to use as the index for the returned array. If omitted or set to null, numerical indexes are used.

The example below uses the name key of the array to create a new array:

```
$pupils = [
 ["id" => 1, "name" => "John", "score" => 90],
 ["id" => 2, "name" => "Jane", "score" => 79],
 ["id" => 3, "name" => "Will", "score" => 83],
 ["id" => 4, "name" => "Jill", "score" => 92],
 ["id" => 5, "name" => "steven", "score" => 100],
];

$arrayFromNameColumn = array_column($pupils, 'name');

print_r($arrayFromNameColumn);

/*
Output:

Array
(
   [0] => John
   [1] => Jane
   [2] => Will
   [3] => Jill
   [4] => steven
)
*/
```

Remember you can pass in another key in the array to make its values the indexes of the resulting array. I'll use the `"id"` for that:

```
$pupils = [
 ["id" => 1, "name" => "John", "score" => 90],
 ["id" => 2, "name" => "Jane", "score" => 79],
 ["id" => 3, "name" => "Will", "score" => 83],
 ["id" => 4, "name" => "Jill", "score" => 92],
 ["id" => 5, "name" => "steven", "score" => 100],
];

$arrayFromNameColumn = array_column($pupils, "name", "id");

print_r($arrayFromNameColumn);

/*
Output:



Array
(
   [1] => John
   [2] => Jane
   [3] => Will
   [4] => Jill
   [5] => steven
)
*/
```

### The `in_array()` Function

`in_array()` is used to check if a particular element is in an array. It takes two compulsory parameters and one optional parameter.

Here's the syntax:

```
in_array(itemToSearch, arrayToSearchThrough, strict)
```

-   `itemToSearch` is the element you're looking for. It's compulsory.
-   `arrayToSearchThrough` is the array in which you want to search for `itemToSearch`. It's also compulsory.
-   `strict` is a boolean value that lets you specify whether you want the search to be done with loose comparison (`==`) or strict comparison (`===`). It defaults to `false`.

Here's the `in_array()` function in action:

```
$myFruitsArr1 = ["Apple", "Banana", "Cashew", "Mango"];
var_dump(in_array("Banana", $myFruitsArr1)); // bool(true)
var_dump(in_array("banana", $myFruitsArr1)); // bool(false)
```

Because the result of `in_array()` is a boolean, it's commonly used in conditionals:

```
$myFruitsArr1 = ["Apple", "Banana", "Cashew", "Mango"];


if (in_array("Banana", $myFruitsArr1)) {
 echo "Banana is in the array"; // Banana is in the array
} else {
 echo "Banana is not in the array";
}
```

## How to Loop Through Arrays in PHP

PHP provides the traditional `for` loop for iterating through both indexed and associative arrays. You can also use a cleaner `forEach()` function for the same purpose.

### How to Loop through an Indexed Array

Here's the basic syntax for looping through an array with a `for` loop:

```
for ($i=0; $i < count($arr); $i++) {
 # do something with $arr ...
}
```

And here's that of `foreach()`:

```
foreach ($arrs as $arr) {
 # do something with $arr
}
```

Here's an example using the `for` loop to loop through an array of strings:

```
$retiredBallers = ["Pele", "Maradona", "Zidane", "Lampard", "Okocha"];

for ($i = 0; $i < count($retiredBallers); $i++) {
 echo $retiredBallers[$i] . "<br>";
}

/*
Output:

Pele
Maradona
Zidane
Lampard
Okocha
*/
```

You can loop through numbers the same way:

```
for ($i = 0; $i < count($myNums); $i++) {
 echo $myNums[$i] . "<br>";
}

/*
Output:

45
8
90
2
5
*/
```

You can also print the index for each element of the array:

```
for ($i = 0; $i < count($myNums); $i++) {
 echo $myNums[$i] . " is at index " . $i . "<br>";
}

/*
Output:

45 is at index 0
8 is at index 1
90 is at index 2
2 is at index 3
5 is at index 4
*/
```

Don't forget you can use `foreach` to loop through any array too:

```
foreach ($retiredBallers as $retiredBaller) {
 echo $retiredBaller . "<br>";
}


/*
Pele
Maradona
Zidane
Lampard
Okocha
*/
```

You can get the index this way as well:

```
foreach ($retiredBallers as $key => $retiredBaller) {
 echo $retiredBaller . " is at index " . $key . "<br>";
}


/*
Pele is at index 0
Maradona is at index 1
Zidane is at index 2
Lampard is at index 3
Okocha is at index 4
*/
```

### How to Loop through an Associative Array

An associative array can be complex with items nested deep into it. So, you have to get what you want from it instead of displaying everything in it.

Here's how I got the name and country of some retired footballers from a `$retiredFootballers` array:

```
$retiredFootballers = [
 [
   "name" => "Pele",
   "position" => "Forward",
   "country" => "Brazil",
   "club" => "Santos"
 ],


 [
   "name" => "Diego Maradona",
   "position" => "Attacking Midfielder",
   "country" => "Argentina",
   "club" => "Napoli"
 ],


 [
   "name" => "Zinedine Zidane",
   "position" => "Midfielder",
   "country" => "France",
   "club" => "Real Madrid"
 ],


 [
   "name" => "Ronaldinho",
   "position" => "Attacking Midfielder",
   "country" => "Brazil",
   "club" => "Barcelona"
 ],


 [
   "name" => "David Beckham",
   "position" => "Midfielder",
   "country" => "England",
   "club" => "Manchester United"
 ],
 [
   "name" => "Jay-Jay Okocha",
   "position" => "Midfielder",
   "country" => "Nigeria",
   "club" => "Bolton Wanderers"
 ]
];


for ($i = 0; $i < count($retiredFootballers); $i++) {
 echo $retiredFootballers[$i]["name"] . " is from " . $retiredFootballers[$i]["country"] . "<br>";
 echo "<hr>";
}
```

Doing the same with `foreach()` is cleaner because you don't need an `$i` variable:

```
foreach ($retiredFootballers as $retiredFootballer) {
 echo $retiredFootballer["name"] . " is from " . $retiredFootballer["country"] . "<br>";
 echo "<hr>";
}
```

### How to Loop through an Array Inside the HTML Template

Any HTML in your PHP file is the template for that PHP file. This means you can do the looping inside the HTML, because you can write PHP inside that HTML.

Here's how you can do that:

```
<?php
$retiredBallers = ["Pele", "Maradona", "Zidane", "Lampard", "Okocha"];
?>

<h1 class="text-center mt-3 bd-highlight">Looping Through Arrays in PHP</h1>

 <h2 class="mx-5 mt-5">Some Retired Footballers</h2>

 <ul class="list-group mx-5" style="width: 25%;">
   <!-- The loop -->
   <?php for ($i = 0; $i < count($retiredBallers); $i++) : ?>
     <li class="list-group-item"> <?= $retiredBallers[$i] ?> </li>
   <?php endfor; ?>
 </ul>
```

You can do the same with `foreach()`:

```
<?php
$retiredBallers = ["Pele", "Maradona", "Zidane", "Lampard", "Okocha"];
?>

<h1 class="text-center mt-3 bd-highlight">Looping Through Arrays in PHP</h1>

 <h2 class="mx-5 mt-5">Some Retired Footballers</h2>


 <ul class="list-group mx-5" style="width: 25%;">
   <!-- The loop -->
   <?php foreach ($retiredBallers as $retiredBaller) : ?>
     <li class="list-group-item"> <?= $retiredBaller ?> </li>
   <?php endforeach; ?>
 </ul>
```

Here's what that looks like in the browser:

![Image](https://www.freecodecamp.org/news/content/images/2024/05/image4.png) _Looping through arrays using PHP for loop inside HTML_

Let's use `foreach()` to display the `$retiredFootballers` associative array too:

```
<h1 class="text-center mt-3 bd-highlight">Looping Through Arrays in PHP</h1>


 <h2 class="mx-5 mt-5">Some Retired Footballers</h2>


 <ul class="list-group mx-5" style="width: 25%;">
   <!-- The loop -->
   <?php foreach ($retiredFootballers as $retiredFootballer) : ?>
     <li class="list-group-item"> <?= $retiredFootballer["name"] . " is from " . $retiredFootballer["country"] ?> </li>
   <?php endforeach; ?>
 </ul>
```

![Image](https://www.freecodecamp.org/news/content/images/2024/05/image1.png) _Looping through arrays using PHP foreach function inside HTML_

## Conclusion

Learning how to work with arrays is a foundational step toward proficiency in PHP and web development. That's why this handbook walked you through the various capabilities of PHP arrays, from creation to manipulation and looping.

You should now be confident using arrays to effectively manage data in PHP, whether for simple lists with indexed arrays, or complex structures with associative and multidimensional arrays.

Moving forward, I encourage you to experiment with various array functions to improve your code and tackle different programming challenges. Also, consider exploring multidimensional and associative arrays for more complex data scenarios.

As you grow more proficient with PHP arrays, integrating them with database operations can further enhance your web applications, so look out for the second article of this series.

Keep coding!

[1]: #heading-how-to-create-arrays-in-php
[2]: #heading-how-to-create-arrays-with-the-array-function
[3]: #heading-how-to-create-arrays-with-the-square-bracket-syntax
[4]: #heading-how-to-print-arrays-in-php
[5]: #howtoprintanarraywiththeprintrfunction
[6]: #howtoprintanarraywiththevardumpfunction
[7]: #heading-php-array-functions
[8]: #heading-the-count-array-function
[9]: #thearraypush_arrayfunction
[10]: #heading-the-arraypop-function
[11]: #heading-the-arrayshift-function
[12]: #heading-the-arrayunshift-function
[13]: #heading-the-arraysplice-function
[14]: #heading-the-arraykeys-function
[15]: #heading-the-arrayvalues-function
[16]: #heading-the-arrayreduce-function
[17]: #heading-the-sort-function
[18]: #heading-the-rsort-function
[19]: #heading-the-arrayreplace-function
[20]: #heading-the-arrayreverse-function
[21]: #heading-the-arrayslice-function
[22]: #heading-the-arraysum-function
[23]: #heading-the-arraymerge-function
[24]: #heading-the-arrayfilter-function
[25]: #thearraymap_function
[26]: #heading-the-arraysearch-function
[27]: #thearraycolumnfunction
[28]: #heading-the-inarray-function
[29]: #heading-how-to-loop-through-arrays-in-php
[30]: #heading-how-to-loop-through-an-indexed-array
[31]: #heading-how-to-loop-through-an-associative-array
[32]: #heading-how-to-loop-through-an-array-inside-the-html-template
[33]: #heading-conclusion