---
title: Rust Tutorial – Learn Advanced Iterators & Pattern Matching by Building a
  JSON Parser
date: 2024-10-21T03:43:46.843Z
author: Anshul Sanghi
authorURL: https://www.freecodecamp.org/news/author/anshulsanghi/
originalURL: https://www.freecodecamp.org/news/rust-tutorial-build-a-json-parser/
posteditor: ""
proofreader: ""
---

Iterators and match patterns are two of the most used language features in Rust. If you have written any real world application, big or small, chances are that you've already used these, whether knowingly or unknowingly.

<!-- more -->

In this tutorial, I aim to help you understand how they actually work, the many ways they're usually used, and how powerful they are by writing a JSON parser that heavily uses these features.

## Disclaimer

The goal of this tutorial is to create a real-world library that extensively uses match patterns and iterators. The goal is not to write a performant or fully-compliant JSON parser.

If you're very familiar with JSON, you will notice many things that are missing in this code, the biggest one being error handling when invalid tokens are encountered, and giving feedback to the user or helpful suggestions on what's wrong with the JSON.

This program also doesn't handle escape characters and sequences within string literals, for example. The code, for the most part, assumes that you have a valid JSON.

## Prerequisites

Although this tutorial can be consumed by Rust programmers of any experience, previous experience or understanding of basic iterators and match patterns in Rust is helpful.

It is also assumed that you're familiar with the most basic Rust concepts such as `traits`, `structs`, `enums`, `for` loops, `impl` blocks, and so on. The tutorial does introduce you to `iterator` and `match`, so you don't need to be familiar with those to benefit from this tutorial.

## Table Of Contents

1.  [What are Iterators in Rust?][1]
    1.  [How to implement iterators in Rust][2]
    2.  [What are peekable iterators in Rust?][3]
2.  [What is The Match Statement in Rust?][4]
    1.  [How to use iterators in match statements in Rust][5]
    2.  [What are match guards in Rust?][6]
    3.  [What is binding in Rust?][7]
3.  [How to Build a JSON Parser – Stage 1: Reader][8]
    1.  [What is the UTF-8 byte encoding?][9]
    2.  [How to read the data][10]
    3.  [How to implement the iterator for JsonReader][11]
4.  [How to Build a JSON Parser – Stage 2: Prepare Intermediate Data Types][12]
    1.  [The value type][13]
    2.  [How to add helpful conversion methods][14]
5.  [How to Build a JSON Parser – Stage 3: Tokenization][15]
    1.  [How to define expected valid tokens][16]
    2.  [How to implement the tokenizer struct][17]
    3.  [How to tokenize an iterator of characters][18]
    4.  [How to parse string tokens][19]
    5.  [How to parse number tokens][20]
    6.  [How to parse boolean tokens][21]
    7.  [How to parse Null Literal][22]
    8.  [How to parse delimiters][23]
    9.  [How to parse a terminating character][24]
6.  [How to Build a JSON Parser – Stage 4: From Tokens To Value][25]
    1.  [How to parse primitives][26]
    2.  [How to parse arrays][27]
    3.  [How to parse objects][28]
7.  [How to Use the JSON parser][29]
8.  [Wrapping Up][30]

## What are Iterators in Rust?

Iterators are not a new concept, neither are they specific to Rust. It's both a pattern that is also implemented as an object in most programming languages for working with lists (such as arrays or vectors) or collections (such as HashMaps) that allows you to traverse through these data types and act on individual entries in them.

In Rust, iterators are a very powerful feature. The official Rust book describes it as:

> The iterator pattern allows you to perform some task on a sequence of items in turn. An iterator is responsible for the logic of iterating over each item and determining when the sequence has finished. When you use iterators, you don’t have to reimplement that logic yourself.
> 
> In Rust, iterators are _lazy_, meaning they have no effect until you call methods that consume the iterator to use it up.

An iterator is an object that facilitates sequential access to the elements of a collection, like an array or a vector, without exposing the implementation details.

### How to implement iterators in Rust

Iterators are implemented in Rust using a collection of traits, the most basic of which is the `Iterator` trait. It is implemented for all collections in the standard library, and can be implemented for custom types as well.

> It requires the implementation of a single method: `next()`. This method returns an `Option<T>`, where `T` is the type of element the iterator is for. When `next()` is called (the call is implicit in most cases and you generally use higher level methods), the iterator produces `Some(value)` for the next element in the sequence or `None` when the iteration is complete. In most cases, whether the value is `Some` or `None` is also implicit.

For example, anything that implements the `Iterator` trait, can be used with a for loop directly, which implicitly handles both calling the `next` method as well as handling whether the value is `Some` or `None`. A `None` value triggers the loop to end. This is true for the built-in types such as arrays, slices, vectors, and hash-maps as well.

For example, let's implement the iterator trait on a simple custom type. You need to store the current state of the iterator in the type. You can also store any additional information you need. Here, we just need to know the max number after which the iteration should end:

```
use std::iter::Iterator;

struct CustomType {
    current: usize,
    max: usize,
}

impl CustomType {
    fn new(max: usize) -> Self {
        Self {
            current: 0,
            max,
        }
    }
}

impl Iterator for CustomType {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        if self.current >= self.max {
            None
        } else {
            self.current += 1;
            Some(self.current)
        }
    }
}

fn main() {
    let custom = CustomType::new(10);

    for item in custom {
        println!("Item is {item}");
    }
}
```

```
# Output

Item is 1
Item is 2
Item is 3
Item is 4
Item is 5
Item is 6
Item is 7
Item is 8
Item is 9
Item is 10
```

Rust iterators are also lazily evaluated, meaning they do not do anything unless they're used. This means that until you actually want to get the next value and do something with it, it won't even compute what the next value is.

This also means that if you have a chain of operations, such as a map and a filter, each item will go through the entire pipeline first, before the code processes the next item. This is unlike many other languages which support `map` and `filter` as methods, where first the entire map will be processed for all operations, and then the filter will be performed.

If you think about it carefully, iterators allow us to write parallel processing pipelines in a much easier way than the counterpart.

Since `Iterator` is just a trait, it allows for iterators to be chain-able and transformable to other iterators using various adapter methods (either the ones in standard library, or the ones that you can implement yourself).

### What are peekable iterators in Rust?

Many times, you need the ability to know what the next element will be for deciding what to do, without actually modifying the iterator state for it to move to the next element. This is especially necessary when working with an iterator of tokens for parsing, as we'll do later in this tutorial.

This is where the `Peekable` struct comes in. You can convert any iterator into a peekable iterator by calling the `peekable` method on it.

Let's take the previous example and see how peekable works in action:

```
use std::iter::Iterator;

struct CustomType {
    current: usize,
    max: usize,
}

impl CustomType {
    fn new(max: usize) -> Self {
        Self {
            current: 0,
            max,
        }
    }
}

impl Iterator for CustomType {
    type Item = usize;

    fn next(&mut self) -> Option<Self::Item> {
        if self.current >= self.max {
            None
        } else {
            self.current += 1;
            Some(self.current)
        }
    }
}

fn main() {
    let mut custom = CustomType::new(2).peekable();

    let first = custom.peek();
    println!("{first:?}");

    let second = custom.next();
    println!("{second:?}");

    let third = custom.next();
    println!("{third:?}");

    let fourth = custom.next();
    println!("{fourth:?}");
}
```

```
# Output

Some(1)
Some(1)
Some(2)
None
```

I also wanted to show you how you can use iterators manually without a for loop, which is why you see all the calls to `next` method, and also that it returns `Option` instead of the value directly.

Also notice that the `first` and `second` variables are both `Some(1)`. This is because we called `peek` the first time which returned the first element but without modifying the state of the iterator.

## What is The Match Statement in Rust?

The match statement is a pattern-matching syntax in Rust that allows you to conditionally run code based on complex conditions in a concise syntax. You can think of it as a `switch` statement from other languages, but on steroids.

A very simple example of a match statement is:

```
let value = true;

match value {
    true => {
        println!("Value is true")
    },
    false => {
        println!("Value is false")
    }
}
```

The various conditions defined above, namely `true` and `false`, are known as branches. Each branch can have a single match, multiple matches separated by the pipe `|` operator, and ranges. They also can have `guards` and `binding` for each arm. Let's see what each of these mean:

```
// Multiple conditions per branch

let value = "some_string";

match value {
    "some_string1" | "some_string2" | "some_string3" => {
        println!("Bad match");
    }
    "some_string" => {
        println!("Good match");
    }
    _ => {
        println!("No match");
    }
}
```

Notice the `_` branch in the above example. Match statements require you to cover all possible cases. In the first example, since the value was a boolean, there were only two possible values, `true` and `false`. This is why in the first case, we already covered all possible values.

In the 2nd example however, the value we're matching against is a string ( `&str` to be more precise). A string can be any value. It's impossible to write a match statement that can ever cover all possible cases for this example. Good thing is, Rust has a special matcher `_` that matches any value.

If you're experienced with JavaScript or C (or many other languages that have the traditional `switch` syntax), `_` is equivalent to the `default` case in `switch`, but you don't need to use `_`, you can also bind it to a variable and handle it differently. We'll see how to do this shortly.

### How to use iterators in match statements in Rust

A match statement allows you to use iterators as branches. A successful match occurs if the value being matched is one of the values in the iterator. For example, say you are matching if a `char` type is a digit or not. You can write a simple iterator of characters that contains all the digit characters and use that as a branch:

```
let value: char = '5';

match value {
    '0'..='9' => {
        println!("Character is a digit");
    }
    _ => {
        println!("Character is not a digit");
    }
}
```

The above example will print "Character is a digit". If you're not familiar with the `..=` syntax, it's a shorthand to create iterators over a range. In the example above, the iterator starts at `'0'` character and ends at `'9'` character, including all of the characters in between.

You can also use `1..5` to create a iterator over the range between 1 and 5 but excluding 5, so that the iterator will contain `1, 2, 3, 4`.

You can also use a variable that holds the iterator as the value, meaning that the iterators do not need to be created inline:

```
let list = vec!["1, 2", "3, 4"].iter();
    let value = "3, 4";

    match value {
        list => {
            println!("Matched");
        }
        _ => {
            println!("No matches");
        }
    }
```

Note that the example calls `.iter()` on the vec to store the iterator in `list` variable and not the vector. Match arms cannot have method calls, so it's important to convert the value to an iterator outside of the match statement.

### What are match guards in Rust?

Guards in match statements are additional conditions for a particular branch that the branch must satisfy to consider a successful match. For example, if you want to match over a range of numbers, but also match on whether they're odd or even, match guards can come in handy.

The syntax is also pretty intuitive. It is of the form `<pattern> if <condition> => {}`.

```
let value: u8 = 5;

match value {
    0..=9 if value % 2 == 0 => {
        println!("Value is even");
    }
    0..=9 if value % 2 == 1 => {
        println!("Value is odd");
    }
    _ => {
        println!("Unexpected value");
    }
}
```

The above code will print "Value is odd".

### What is binding in Rust?

Binding allows you to store values in variables that can be used within the branch where the binding is present. It's basically assigning variables to certain parts of the pattern.

#### Pattern Binding

A very simple example is binding the catch-all pattern to a variable instead of ignoring its value using `_`.

```
let value: u8 = 5;

match value {
    0..=9 if value % 2 == 0 => {
        println!("Value is even");
    }
    0..=9 if value % 2 == 1 => {
        println!("Value is odd");
    }
    other_value => {
        println!("Unexpected value: {other_value}");
    }
}
```

Notice that in this example, we used the variable `other_value` to bind the value of `value` in the last pattern, which is a catch-all if it doesn't match any of the previous patterns. We can then use the variable in logic for that arm. Here we just print it the console.

Some other examples of binding are:

```
let value: Option<i32> = Some(43);

match value {
    Some(matched_value) => println!("The value is {matched_value}"),
    None => println!("There is no value")
}
```

In this example, we bound the value within the `Some` pattern for storing the inner value of the option, and use it in our logic.

```
pub struct Person {
    name: String,
    age: u32,
}

let value: Option<Person> = Some(Person {
    name: "Name".to_string(),
    age: 23,
});

match value {
    Some(Person { name: person_name, age }) => {
        println!("{person_name} is {age} years old");
    },
    None => {
        println!("The value is empty");
    }
}
```

We see two different types of binding in this example. The first is assigning a different name to a struct field by destructuring it ( `name` field), and the other is using the same name as the name of the field ( `age` field).

#### The `@` Binding

The official Rust book describes it as:

> The at operator @ lets us create a variable that holds a value at the same time as we’re testing that value for a pattern match.

In our example of pattern matching against a range of values, or against an iterator, we can bind the matched value to a variable using this syntax to use it within that branch:

```
let value: u8 = 5;

match value {
    digit @ 0..=9 => {
        println!("The matched value is {digit}");
    }
    _ => {
        println!("Unexpected value");
    }
}
```

Here we are binding the matched value from the iterator to the `digit` variable, that we then use within the branch to read the actual value.

## How to Build a JSON Parser – Stage 1: Reader

Before we can parse incoming JSON data, we need to be able to read it in a way which facilitates parsing it. To be able to tokenize the incoming JSON, we need to analyse each character as they come in, and based on whether they represent a literal value, or a delimiter, (or an invalid value), decide what to do with them as well as subsequent characters.

This is a really good use case for using a combination of iterators and Rust's match syntax.

Our reader needs to hold two pieces of data. A buffered reader using which we can iterate over the input, and a `character_buffer`, which will hold the current character being decoded.

At this point, you may ask why we need to hold the character buffer in the reader and the reason is that JSON is UTF-8 encoded.

### What is the UTF-8 byte encoding?

A UTF-8 character can be anywhere between 1 byte to 4 bytes long. We need to be able to parse all of the valid characters because the JSON spec supports these characters. This means that JSON characters can be either of 1-byte, 2-bytes, 3-bytes or 4-bytes long.

For each iteration, we need to read 4 bytes at a time, decide how many characters the 4 bytes contain (for example, these 4 bytes can contain 4 1-byte characters), finish iterating over them and then move on to the reading next 4 bytes and repeating the process. To store this intermediary piece of information, we need the character buffer.

It is also possible that we only have part of the character in the current 4 byte. For example, if you consider 2 1-byte characters followed by 1 3-byte character like `23€`, the first 4 bytes will contain 2 valid characters and only part of the next valid character. You also need to be able to handle this, which will involve rewinding the iterator.

It's possible to handle this in a way where we do not need allocations, and for performance reasons it's in fact better to do so. But I will leave that to you as a reader to think about how to implement it in this case, as it is not the focus of this article.

I hope that it's now clear why we iterators are the best tool for the job here.

### How to read the data

We are going to support two different readers. One is directly from a buffered reader (which is most commonly created from a file), and the other is from a iterator over bytes.

These are going to be pretty straightforward. For reading from a file, you need to create a buffered cursor over the underlying file data:

```
let file = File::create("dummy.json").unwrap();
let reader = BufReader::new(file);
```

Let's start by implementing the JSON Reader struct and these methods on it:

```
// src/reader.rs

use std::collections::VecDeque;
use std::io::{BufReader, Cursor, Read, Seek};
use std::str::from_utf8;

/// A struct that handles reading input data to be parsed and
/// provides an iterator over said data character-by-character.
pub struct JsonReader<T>
where
    T: Read + Seek,
{
    /// A reference to the input data, which can be anything
    /// that implements [`Read`]
    reader: BufReader<T>,

    /// A character buffer that holds queue of characters to
    /// be used by the iterator.
    ///
    /// This is necessary because UTF-8 can be 1-4 bytes long.
    /// Because of this, the reader always reads 4 bytes at a 
    /// time. We then iterate over "characters", irrespective of 
    /// whether they are 1 byte long, or 4.
    ///
    /// A [`VecDeque`] is used instead of a normal vector 
    /// because characters need to be read out from the start 
    /// of the buffer.
    character_buffer: VecDeque<char>,
}

impl<T> JsonReader<T>
where
    T: Read + Seek,
{
    /// Create a new [`JsonReader`] that reads from a file
    ///
    /// # Examples
    ///
    ///
```

/// use std::fs::File; /// use std::io::BufReader; /// use json\_parser::reader::JsonReader; /// /// let file = File::create("dummy.json").unwrap(); /// let reader = BufReader::new(file); /// /// let json\_reader = JsonReader::new(reader); /// \`\`\` pub fn new(reader: BufReader) -> Self { JsonReader { reader, character\_buffer: VecDeque::with\_capacity(4), } }

/// Create a new \[`JsonReader`\] that reads from a given byte stream /// /// # Examples /// /// `/// use std::io::{BufReader, Cursor}; /// use json_parser::reader::JsonReader; /// /// let input_json_string = r#"{"key1":"value1","key2":"value2"}"#; /// /// let json_reader = JsonReader::<Cursor<&'static [u8]>>::from_bytes(input_json_string.as_bytes()); ///`

#\[must\_use\] pub fn from\_bytes(bytes: &\[u8\]) -> JsonReader> { JsonReader { reader: BufReader::new(Cursor::new(bytes)), character\_buffer: VecDeque::with\_capacity(4), } } }

````

### How to implement the iterator for `JsonReader`

Next, you are going to need to implement the `Iterator` trait on this `JSONReader` which will facilitate parsing.

First, if the character buffer isn't empty already, you can return the first character in buffer from iterator:

```rust
if !self.character_buffer.is_empty() {
    return self.character_buffer.pop_front();
}
````

If it is empty, you need to create a new buffer and read into that buffer from the reader:

```
let mut utf8_buffer = [0, 0, 0, 0];
let _ = self.reader.read(&mut utf8_buffer);
```

Here, you are creating a new array of size 4, and you'll be reading 4 bytes into it from the reader.

Next, you need to parse it as UTF-8. Rust provides you with a `from_utf8` function that will try to parse the given bytes as UTF-8. It returns a string containing parsed characters if it was valid.

It returns an error with number of invalid bytes as part of the error information, which you can use to backtrack the reader to only retain the valid characters, and try the next 4 characters from the point of failure.

If that didn't make too much sense, looking at the code will make things clear:

```
match from_utf8(&utf8_buffer) {
    Ok(string) => {
        self.character_buffer = string.chars().collect();
        self.character_buffer.pop_front()
    }
    Err(error) => {
        // Read valid bytes, and rewind the buffered reader for 
        // the remaining bytes so that they can be read again in the
        // next iteration.

        let valid_bytes = error.valid_up_to();
        let string = from_utf8(&utf8_buffer[..valid_bytes]).unwrap();

        let remaining_bytes = 4 - valid_bytes;

        let _ = self.reader.seek_relative(-(remaining_bytes as i64));

        // Collect the valid characters into character_buffer
        self.character_buffer = string.chars().collect();

        // Return the first character from character_buffer
        self.character_buffer.pop_front()
    }
}
```

Here's the complete implementation of the `Iterator` trait:

```
// src/reader.rs

impl<T> Iterator for JsonReader<T>
where
    T: Read + Seek,
{
    type Item = char;

    #[allow(clippy::cast_possible_wrap)]
    fn next(&mut self) -> Option<Self::Item> {
        if !self.character_buffer.is_empty() {
            return self.character_buffer.pop_front();
        }

        let mut utf8_buffer = [0, 0, 0, 0];
        let _ = self.reader.read(&mut utf8_buffer);

        match from_utf8(&utf8_buffer) {
            Ok(string) => {
                self.character_buffer = string.chars().collect();
                self.character_buffer.pop_front()
            }
            Err(error) => {
                // Read valid bytes, and rewind the buffered reader for
                // the remaining bytes so that they can be read again in the
                // next iteration.

                let valid_bytes = error.valid_up_to();
                let string = from_utf8(&utf8_buffer[..valid_bytes]).unwrap();

                let remaining_bytes = 4 - valid_bytes;

                let _ = self.reader.seek_relative(-(remaining_bytes as i64));

                // Collect the valid characters into character_buffer
                self.character_buffer = string.chars().collect();

                // Return the first character from character_buffer
                self.character_buffer.pop_front()
            }
        }
    }
}
```

And that's all you need to do for reading the input data for parsing. It's time to move on to the next stage in the process.

## How to Build a JSON Parser – Stage 2: Prepare Intermediate Data Types

This isn't really a stage in the parsing pipeline, but it is a prerequisite for the next steps. We need to define Rust types that map to all of the possible types that JSON supports.

JSON supports the following data types:

-   String
-   Number
-   Boolean
-   Array
-   Object
-   Null

A number can further be either an integer, or a floating-point number. While you can use `f64` as the Rust type for all JSON numbers, practically it's not feasible without littering your code with type casts everywhere when you try to use it.

So in this tutorial, we're going to indeed make that distinction and record that fact.

### The value type

Enums are the ideal way to store state like this, where each variant needs to have some identifier as metadata (in this case the type of JSON value), and optionally some data attached to it. The data you're going to attach to these variants will be the actual value of that type in JSON.

```
// src/value.rs

use std::collections::HashMap;

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum Number {
    I64(i64),
    F64(f64),
}

#[derive(Debug, PartialEq, Clone)]
pub enum Value {
    String(String),
    Number(Number),
    Boolean(bool),
    Array(Vec<Value>),
    Object(HashMap<String, Value>),
    Null,
}
```

The first few variants are pretty straightforward, you define the variant and the data it holds is a corresponding Rust type. The last variant is even simpler, representing the `null` value which doesn't need further data to be stored.

The `Array` and `Object` variants though are a bit more interesting, since they are recursively storing the Enum itself. This makes sense, as arrays in JSON can have any value type that JSON spec supports. And objects in JSON always have string keys and any JSON supported value, including other objects.

### How to add helpful conversion methods

You will also need a way to convert the enum type into the underlying types, and throw an error if the underlying data isn't what you expected. This is mostly boilerplate code, so I'm just going to put it all together without further explanation:

```
// src/value.rs

impl TryFrom<&Value> for String {
    type Error = ();

    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::String(value) => Ok(value.clone()),
            _ => Err(()),
        }
    }
}

impl TryFrom<&Value> for i64 {
    type Error = ();

    #[allow(clippy::cast_possible_truncation)]
    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::Number(value) => match value {
                Number::I64(value) => Ok(*value),
                Number::F64(value) => Ok(*value as i64),
            },
            _ => Err(()),
        }
    }
}

impl TryFrom<&Value> for f64 {
    type Error = ();

    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::Number(value) => match value {
                Number::F64(value) => Ok(*value),
                Number::I64(value) => Ok(*value as f64),
            },
            _ => Err(()),
        }
    }
}

impl TryFrom<&Value> for bool {
    type Error = ();

    fn try_from(value: &Value) -> Result<Self, ()> {
        match value {
            Value::Boolean(value) => Ok(*value),
            _ => Err(()),
        }
    }
}

impl<'a> TryFrom<&'a Value> for &'a Vec<Value> {
    type Error = ();

    fn try_from(value: &'a Value) -> Result<Self, ()> {
        match value {
            Value::Array(value) => Ok(value),
            _ => Err(()),
        }
    }
}

#[allow(clippy::implicit_hasher)]
impl<'a> TryFrom<&'a Value> for &'a HashMap<String, Value> {
    type Error = ();

    fn try_from(value: &'a Value) -> Result<Self, ()> {
        match value {
            Value::Object(value) => Ok(value),
            _ => Err(()),
        }
    }
}
```

## How to Build a JSON Parser – Stage 3: Tokenization

The next step is to take the input data and tokenize it.

Tokenization is the process of splitting a large chunk of input into smaller, more digestible units that can then be analysed independently. This also allows you to work with them much more easily than just byte streams and they help represent the incoming data as a standard form, and allow for mapping tokens to output value types.

The parser can then recursively process all tokens until there's nothing to process, giving us the parsed data once it finishes.

### How to define expected valid tokens

There is going to be some duplication here compared to the value type you looked at previously, but that's to be expected, since the token representation of any literal value will be that value itself. There's no way to break it down to smaller units in that case.

Once again, Enum is the right data type for this since we need both metadata (as the token type), and optionally data associated with it.

The tokens representing literal values can be defined in this way:

```
// src/token.rs

use std::io::{Read, Seek};
use std::iter::Peekable;
use crate::reader::JsonReader;

#[derive(Debug, Copy, Clone, PartialEq)]
pub enum Number {
    I64(i64),
    F64(f64),
}

#[derive(Debug, Clone, PartialEq)]
pub enum Token {
    String(String),
    Number(Number),
    Boolean(bool),
    Null,
}
```

Apart from these, we also have a lot of other tokens in JSON that form the "grammar" of the JSON format. These are:

-   Curly braces (`{` or `}` ) that represent opening and closing of an object respectively.
-   Square brackets (`[` or `]`) that represent opening and closing of an array respectively.
-   Colon (`:`) for separating key-value pairs within the object.
-   Comma (`,`) for separating values.
-   Quotes (`"`) that represent opening/closing of the string literal values.

All of these do not need to have any data associated with them, so they're going to be unit variants in the enum. Adding these in, the complete enum will be:

```
// src/token.rs

use std::io::{Read, Seek};
use std::iter::Peekable;
use crate::reader::JsonReader;
use crate::value::Number;

#[derive(Debug, Clone, PartialEq)]
pub enum Token {
    CurlyOpen,
    CurlyClose,
    Quotes,
    Colon,
    String(String),
    Number(Number),
    ArrayOpen,
    ArrayClose,
    Comma,
    Boolean(bool),
    Null,
}
```

### How to implement the tokenizer struct

You are going to need a `JsonTokenizer` struct that can facilitate the process while also responsible for holding the state of the tokenizer process:

```
// src/token.rs

pub struct JsonTokenizer<T>
    where
        T: Read + Seek,
{
    tokens: Vec<Token>,
    iterator: Peekable<JsonReader<T>>,
}

impl<T> JsonTokenizer<T>
where
    T: Read + Seek,
{
    pub fn new(reader: File) -> JsonTokenizer<File> {
        let json_reader = JsonReader::<File>::new(BufReader::new(reader));

        JsonTokenizer {
            iterator: json_reader.peekable(),
            tokens: vec![],
        }
    }

    pub fn from_bytes<'a>(input: &'a [u8]) -> JsonTokenizer<Cursor<&'a [u8]>> {
        let json_reader = JsonReader::<Cursor<&'a [u8]>>::from_bytes(input);

        JsonTokenizer {
            iterator: json_reader.peekable(),
            tokens: Vec::with_capacity(input.len()),
        }
    }
}
```

In this case, we've made it generic over where the input comes from. The type T needs to implement `Read` & `Seek` traits, the reason for which is explained shortly.

The iterator also needs to be `Peekable`, which basically means we should be able to read the next item in the iterator without advancing the iterator itself.

### How to tokenize an iterator of characters

Once you've defined all of the expected tokens, you need to take your character iterator and convert it into a list of tokens, where each entry is a variant of the `Token` enum defined in the last section.

We'll start by writing a skeleton function that matches on the incoming character and panics if it encounters an invalid token:

```
// src/token.rs

impl<T> JsonTokenizer<T> where
    T: Read + Seek, {
    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // Parse all other tokens here
                // ...
                character => {
                    if character.is_ascii_whitespace() {
                        continue;
                    }

                    panic!("Unexpected character: ;{character};")
                }
            }
        }

        Ok(&self.tokens)
    }
}
```

There are two noteworthy things here, let's start with the easy one. If your match block doesn't encounter any known characters (you will implement this shortly), you need to have a "catch-all" condition that matches any character.

Here, we are going to ignore any whitespace characters and continue to the next iteration if it encounters one. If the character isn't a whitespace, then you need to panic (or return error) here.

The next noteworthy thing here is `self.iterator.peek()`. To facilitate parsing of different kinds of tokens from delimiters to literal values, it is important that the iterator is not advanced when reading out the next character. This needs to happen so that you can conditionally advance it based on what character is next.

You also need to delegate parsing of certain sets of tokens to different functions, which will have their own logic of advancing the iterator.

A good example is parsing the `null` literal value. If the match encounters a `n` character and is not within a string, object, number, and so on, then you need to ensure that the next three characters are `u`, `l`, `l` respectively to form the literal value `null` and then advance the iterator by four so that the next loop starts parsing after the `null` character and not in the middle of it.

### How to parse string tokens

We're going to start by parsing strings. Let's stop for a second and think what needs to happen step-by-step:

-   Check if match encounters a `"` character. If it does, push `Token::Quote` to your list of output tokens.
-   Advance the iterator by one so the next steps start from after the `"` character.
-   Parse all characters as part of the string until you encounter another `"` character which indicates closing of the string value.
-   Advance the iterator by however many characters are parsed as part of the string, and one addition to also jump over the closing `"` character.
-   Push `Token::String` with the parsed value to your list of output tokens.
-   Push `Token::Quote` to your list of output tokens.

Hopefully, that isn't too confusing. But the code should help you understand it better:

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                '"' => {
                    // Pushed opening quote to output tokens list.
                    self.tokens.push(Token::Quotes);

                    // Skip quote token since we already added it to the tokens list.
                    let _ = self.iterator.next();

                    // Delegate parsing string value to a separate function.
                    // The function should also take care of advancing the iterator properly.
                    let string = self.parse_string();

                    // Push parsed string to output tokens list.
                    self.tokens.push(Token::String(string));

                    // Pushed closing quote to output tokens list.
                    self.tokens.push(Token::Quotes);
                }
                // ...
            }
        }

        Ok(&self.tokens)
    }

    fn parse_string(&mut self) -> String {
        // Create new vector to hold parsed characters.
        let mut string_characters = Vec::<char>::new();

        // Take each character by reference so that they
        // aren't moved out of the iterator, which will
        // require you to move the iterator into this
        // function.
        for character in self.iterator.by_ref() {
            // If it encounters a closing `"`, break
            // out of the loop as the string has ended.
            if character == '"' {
                break;
            }

            // Continue pushing to the vector to build
            // the string.
            string_characters.push(character);
        }

        // Create a string out of character iterator and
        // return it.
        String::from_iter(string_characters)
    }
}
```

As I've previously mentioned, we're not going to look at handling escape characters in this tutorial, as they do not add much value towards learning the topic at hand, but if you're interested, it will be a good exercise for you to add that in on top of the implementation.

That takes care of parsing the string, we can move on to a more interesting value type next.

### How to parse number tokens

Numbers in JSON spec have a lot of variation. They can either be positive or negative, and integers or decimals. They can also be defined as scientific notation (for example negative exponential `3.7e-5` or positive exponential `3.7e5`). And we need to parse all of these variations.

As always, we'll start with the easy bit. If we encounter any character that can be a valid character in number, you need to delegate parsing to a `parse_number` function. But also, any valid number can only start with either a digit, or a negative sign. A number cannot begin with a decimal character or an epsilon character, so it makes things easier for us.

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                '-' | '0'..='9' => {
                    let number = self.parse_number()?;
                    self.tokens.push(Token::Number(number));
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }

    // ...
}
```

Next, we'll implement the `parse_number` method:

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    fn parse_number(&mut self) -> Result<Number, ()> {
        // Store parsed number characters.
        let mut number_characters = Vec::<char>::new();

        // Stores whether the digit being parsed is after a `.` character
        // making it a decimal.
        let mut is_decimal = false;

        // Stores the characters after an epsilon character `e` or `E`
        // to indicate the exponential value.
        let mut epsilon_characters = Vec::<char>::new();

        // Stores whether the digit being parsed is part of the epsilon
        // characters.
        let mut is_epsilon_characters = false;

        while let Some(character) = self.iterator.peek() {
            match character {
                // Match the negative sign character that indicates whether number is negative
                '-' => {
                    if is_epsilon_characters {
                        // If it's parsing epsilon characters, push it to the epsilon
                        // character set.
                        epsilon_characters.push('-');
                    } else {
                        // Otherwise, push it to normal character set.
                        number_characters.push('-');
                    }

                    // Advance the iterator by 1.
                    let _ = self.iterator.next();
                }
                // Match a positive sign, which can be treated as redundant and ignored since
                // positive is the default.
                '+' => {
                    // Advance the iterator by 1.
                    let _ = self.iterator.next();
                }
                // Match any digit between 0 and 9, and store it into the `digit`
                // variable.
                digit @ '0'..='9' => {
                    if is_epsilon_characters {
                        // If it's parsing epsilon characters, push it to the epsilon
                        // character set.
                        epsilon_characters.push(*digit);
                    } else {
                        // Otherwise, push it to normal character set.
                        number_characters.push(*digit);
                    }
                    // Advance the iterator by 1.
                    let _ = self.iterator.next();
                }
                // Match the period character which indicates start of the fractional
                // part of a decimal number.
                '.' => {
                    // Push the decimal character to numbers character set.
                    number_characters.push('.');

                    // Set the current state of number being decimal to true.
                    is_decimal = true;

                    // Advance the iterator by 1.
                    let _ = self.iterator.next();
                }
                // Match any of the characters that can signify end of the number
                // literal value. This can be a comma which separates key-value pair,
                // closing object character, closing array character, or a `:` which
                // separates a key from its value.
                '}' | ',' | ']' | ':' => {
                    break;
                }
                // Match the epsilon character which indicates that the number is in
                // scientific notation.
                'e' | 'E' => {
                    // Panic if it's already parsing an exponential number since this would
                    // mean there are 2 epsilon characters which is invalid.
                    if is_epsilon_characters {
                        panic!("Unexpected character while parsing number: {character}. Double epsilon characters encountered");
                    }

                    // Set the current state of number being in scientific notation to true.
                    is_epsilon_characters = true;

                    // Advance the iterator by 1.
                    let _ = self.iterator.next();
                }
                // Panic if any other character is encountered.
                other => {
                    if !other.is_ascii_whitespace() {
                        panic!("Unexpected character while parsing number: {character}")
                    } else {
                        self.iterator.next();
                    }
                },
            }
        }

        if is_epsilon_characters {
            // if the number is an exponential, perform the calculations to convert it
            // to a floating point number in rust.

            // Parse base as floating point number.
            let base: f64 = String::from_iter(number_characters).parse().unwrap();

            // Parse exponential as floating point number.
            let exponential: f64 = String::from_iter(epsilon_characters).parse().unwrap();

            // Return the final computed decimal number.
            Ok(Number::F64(base * 10_f64.powf(exponential)))
        } else if is_decimal {
            // if the number is a decimal, parse it as a floating point number in rust.
            Ok(Number::F64(
                String::from_iter(number_characters).parse::<f64>().unwrap(),
            ))
        } else {
            // Parse the number as an integer in rust.
            Ok(Number::I64(
                String::from_iter(number_characters).parse::<i64>().unwrap(),
            ))
        }
    }
}
```

It is advisable for you to go through the code and read the comments to understand this function. You shouldn't encounter any new syntax that is not either covered already or assumed to be known by the reader.

### How to parse boolean tokens

Parsing booleans is going to be the simplest one we look at so far. All we need to do is match `t` or `f` as the first character, and then check the next few characters to ensure they form the literal value `true` or `false`.

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                // Match `t` character which indicates beginning of a boolean literal.
                't' => {
                    // Advance iterator by 1.
                    let _ = self.iterator.next();

                    // Assert next character is `r` while advancing the iterator by 1.
                    assert_eq!(Some('r'), self.iterator.next());
                    // Assert next character is `u` while advancing the iterator by 1.
                    assert_eq!(Some('u'), self.iterator.next());
                    // Assert next character is `e` while advancing the iterator by 1.
                    assert_eq!(Some('e'), self.iterator.next());

                    // Push the literal value to token list.
                    self.tokens.push(Token::Boolean(true));
                }
                'f' => {
                    // Advance iterator by 1.
                    let _ = self.iterator.next();

                    // Assert next character is `a` while advancing the iterator by 1.
                    assert_eq!(Some('a'), self.iterator.next());
                    // Assert next character is `l` while advancing the iterator by 1.
                    assert_eq!(Some('l'), self.iterator.next());
                    // Assert next character is `s` while advancing the iterator by 1.
                    assert_eq!(Some('s'), self.iterator.next());
                    // Assert next character is `e` while advancing the iterator by 1.
                    assert_eq!(Some('e'), self.iterator.next());

                    // Push the literal value to token list.
                    self.tokens.push(Token::Boolean(false));
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

### How to parse Null Literal

This is very similar to how we parsed booleans in the previous step:

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                'n' => {
                    // Advance iterator by 1.
                    let _ = self.iterator.next();

                    // Assert next character is `u` while advancing the iterator by 1.
                    assert_eq!(Some('u'), self.iterator.next());
                    // Assert next character is `l` while advancing the iterator by 1.
                    assert_eq!(Some('l'), self.iterator.next());
                    // Assert next character is `l` while advancing the iterator by 1.
                    assert_eq!(Some('l'), self.iterator.next());

                    // Push null literal value to output tokens list.
                    self.tokens.push(Token::Null);
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

### How to parse delimiters

Parsing delimiters is very simple. All you need to do is to match on them, and push the respective token into the output token list:

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                '{' => {
                    self.tokens.push(Token::CurlyOpen);
                    let _ = self.iterator.next();
                }
                '}' => {
                    self.tokens.push(Token::CurlyClose);
                    let _ = self.iterator.next();
                }
                '[' => {
                    self.tokens.push(Token::ArrayOpen);
                    let _ = self.iterator.next();
                }
                ']' => {
                    self.tokens.push(Token::ArrayClose);
                    let _ = self.iterator.next();
                }
                ',' => {
                    self.tokens.push(Token::Comma);
                    let _ = self.iterator.next();
                }
                ':' => {
                    self.tokens.push(Token::Colon);
                    let _ = self.iterator.next();
                }

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

### How to parse a terminating character

The input can sometimes contain `\0` as the last character to indicate that the input has ended. This is more commonly known as EOF (End Of File) when dealing with files. It is also referred by other names like "escape sequence" or "null" character.

We need to handle it and break out of our parsing loop if we ever encounter this:

```
// src/token.rs

impl<T> JsonTokenizer<T>
    where
        T: Read + Seek,
{
    // ...

    pub fn tokenize_json(&mut self) -> Result<&[Token], ()> {
        while let Some(character) = self.iterator.peek() {
            match *character {
                // ...

                '\0' => break,
                other => {
                    if !other.is_ascii_whitespace() {
                        panic!("Unexpected token encountered: {other}")
                    } else {
                        self.iterator.next();
                    }
                },

                // ...
            }
        }

        Ok(&self.tokens)
    }
}
```

## How to Build a JSON Parser – Stage 4: From Tokens To Value

Now that you have all the tokens, it's time to move on to the final stage of the process, converting tokens to real values that you can work with in the Rust code.

Start by creating a unit struct, which can be used as the parser. At this stage, we don't need to hold any state for the entirety of the process:

```
// src/parser.rs

use std::collections::HashMap;
use std::fs::File;
use std::io::{BufReader, Cursor};
use std::iter::Peekable;
use std::slice::Iter;
use crate::token::{JsonTokenizer, Token};
use crate::value::Value;

/// Main parser which is the entrypoint for parsing JSON.
pub struct JsonParser;
```

We are also going to use this as the public interface for the parser. So let's start by implementing those methods first:

```
// src/parser.rs

impl JsonParser {
    /// Create a new [`JsonParser`] that parses JSON from bytes.
    pub fn parse_from_bytes<'a>(input: &'a [u8]) -> Result<Value, ()> {
        let mut json_tokenizer = JsonTokenizer::<BufReader<Cursor<&[u8]>>>::from_bytes(input);
        let tokens = json_tokenizer.tokenize_json()?;

        Ok(Self::tokens_to_value(tokens))
    }

    /// Create a new [`JsonParser`] that parses JSON from file.
    pub fn parse(reader: File) -> Result<Value, ()> {
        let mut json_tokenizer = JsonTokenizer::<BufReader<File>>::new(reader);
        let tokens = json_tokenizer.tokenize_json()?;

        Ok(Self::tokens_to_value(tokens))
    }
}
```

With that out of the way, you first need to implement the `tokens_to_value` method that these public methods are calling.

### How to parse primitives

This method will be responsible for taking an iterator of tokens as input and outputting the `Value` type you defined previously. This is also pretty straightforward, since the object/array parsing is delegated to separate methods, which we'll look at shortly.

```
// src/parser.rs

impl JsonParser {
    // ...

    fn tokens_to_value(tokens: &[Token]) -> Value {
        // Create a peekable iterator over tokens
        let mut iterator = tokens.iter().peekable();

        // Initialize final value to null.
        let mut value = Value::Null;

        // Loop while there are tokens in the iterator.
        // Note that you do not need to manually handle advancing the
        // iterator in this case which is why you can directly call
        // `iterator.next()`.
        while let Some(token) = iterator.next() {
            match token {
                Token::CurlyOpen => {
                    value = Value::Object(Self::process_object(&mut iterator));
                }
                Token::String(string) => {
                    value = Value::String(string.clone());
                }
                Token::Number(number) => {
                    value = Value::Number(*number);
                }
                Token::ArrayOpen => {
                    value = Value::Array(Self::process_array(&mut iterator));
                }
                Token::Boolean(boolean) => value = Value::Boolean(*boolean),
                Token::Null => value = Value::Null,
                // Ignore all delimiters as you don't need to explicitly do anything
                // when you encounter them.
                Token::Comma
                | Token::CurlyClose
                | Token::Quotes
                | Token::Colon
                | Token::ArrayClose => {}
            }
        }

        value
    }
}
```

### How to parse arrays

Parsing arrays is almost as straightforward as the parsing logic we looked at above. Since arrays are just collection of other JSON values, there's not much logic involved into parsing them, unlike objects.

```
// src/parser.rs

impl JsonParser {
    fn process_array(iterator: &mut Peekable<Iter<Token>>) -> Vec<Value> {
        // Initialise a vector of JSON Value type to hold the value of
        // array that's currently being parsed.
        let mut internal_value = Vec::<Value>::new();

        // Iterate over all tokens provided.
        while let Some(token) = iterator.next() {
            match token {
                Token::CurlyOpen => {
                    internal_value.push(Value::Object(Self::process_object(iterator)));
                }
                Token::String(string) => internal_value.push(Value::String(string.clone())),
                Token::Number(number) => internal_value.push(Value::Number(*number)),
                Token::ArrayOpen => {
                    internal_value.push(Value::Array(Self::process_array(iterator)));
                }
                // Break loop if array is closed. Due to recursive nature of process_array,
                // we don't need to explicitly check if the closing token matches the opening
                // one.
                Token::ArrayClose => {
                    break;
                }
                Token::Boolean(boolean) => internal_value.push(Value::Boolean(*boolean)),
                Token::Null => internal_value.push(Value::Null),
                // Ignore delimiters
                Token::Comma | Token::CurlyClose | Token::Quotes | Token::Colon => {}
            }
        }

        internal_value
    }
}
```

### How to parse objects

Parsing objects is a bit more tricky than the previous value types, since objects come with their own syntax. But there should be no surprises for you, which is why I encourage you to read through the code and the comments below to understand how it works.

```
// src/parser.rs

impl JsonParser {
    fn process_object(iterator: &mut Peekable<Iter<Token>>) -> HashMap<String, Value> {
        // Whether the item being parsed is a key or a value. The first element
        // should always be a key so this is initialised to true.
        let mut is_key = true;

        // The current key for which the value is being parsed.
        let mut current_key: Option<&str> = None;

        // The current state of parsed object.
        let mut value = HashMap::<String, Value>::new();

        while let Some(token) = iterator.next() {
            match token {
                // If it is a nested object, recursively parse it and store
                // in the hashmap with current key.
                Token::CurlyOpen => {
                    if let Some(current_key) = current_key {
                        value.insert(
                            current_key.to_string(),
                            Value::Object(Self::process_object(iterator)),
                        );
                    }
                }
                // If this token is encountered, break the loop since it
                // indicates end of an object being parsed.
                Token::CurlyClose => {
                    break;
                }
                Token::Quotes | Token::ArrayClose => {}
                // If the token is a colon, it is the separator between key
                // and value pair. So the item being parsed from this point
                // ahead will not be a key.
                Token::Colon => {
                    is_key = false;
                }
                Token::String(string) => {
                    if is_key {
                        // If the process is presently parsing key, set the value
                        // as current key.
                        current_key = Some(string);
                    } else if let Some(key) = current_key {
                        // If the process already has a key set for present item,
                        // parse string as value instead, and set the current_key to none
                        // once done to prepare for the next key-value pair.
                        value.insert(key.to_string(), Value::String(string.clone()));
                        // Set current_key to None to prepare for the next key-value pair.
                        current_key = None;
                    }
                }
                Token::Number(number) => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Number(*number));
                        // Set current_key to None to prepare for the next key-value pair.
                        current_key = None;
                    }
                }
                Token::ArrayOpen => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Array(Self::process_array(iterator)));
                        // Set current_key to None to prepare for the next key-value pair.
                        current_key = None;
                    }
                }
                // If the token is a comma, it is the separator between multiple key-value pairs
                // in JSON. So the item being parsed from this point ahead will be a key.
                Token::Comma => is_key = true,
                Token::Boolean(boolean) => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Boolean(*boolean));
                        // Set current_key to None to prepare for the next key-value pair.
                        current_key = None;
                    }
                }
                Token::Null => {
                    if let Some(key) = current_key {
                        value.insert(key.to_string(), Value::Null);
                        // Set current_key to None to prepare for the next key-value pair.
                        current_key = None;
                    }
                }
            }
        }

        value
    }
}
```

And that's it. You should now have everything to start using this to parse a valid JSON file into Rust.

## How to Use the JSON parser

Let's create a new example in the project to run our JSON parser:

```
mkdir examples; touch examples/json.rs
```

You also need to register it as an example in the `Cargo.toml` file:

```
[package]
name = "json-parser"
version = "0.1.0"
edition = "2021"

[dependencies]

[[example]]
path = "examples/json.rs"
name = "json"
```

Now let's write the code to run for this example. We start by copying over a sample JSON file to the root of the project, which you can find [here][31].

```
// examples/json.rs

use std::fs::File;
use json_parser::parser::JsonParser;

fn main() {
    let file = File::open("test.json").unwrap();
    let parser = JsonParser::parse(file).unwrap();

    dbg!(parser);
}
```

Running this code using the following command, you should see the same output as below:

```
cargo run --example json --release
```

```
[examples/json.rs:8:5] parser = Object(
    {
        "pairs": Array(
            [
                Object(
                    {
                        "x1": Number(
                            F64(
                                41.844453001935875,
                            ),
                        ),
                        "y0": Number(
                            F64(
                                -33.78221816487377,
                            ),
                        ),
                        "y1": Number(
                            F64(
                                -78.10213222087448,
                            ),
                        ),
                        "x0": Number(
                            F64(
                                95.26235434764715,
                            ),
                        ),
                    },
                ),
                Object(
                    {
                        "x0": Number(
                            F64(
                                115.42029308864215,
                            ),
                        ),
                        "y0": Number(
                            F64(
                                1.2002187300000001e-5,
                            ),
                        ),
                        "x1": Number(
                            F64(
                                83.39640643072113,
                            ),
                        ),
                        "y1": Number(
                            F64(
                                28.643090267505812,
                            ),
                        ),
                    },
                ),
                Object(
                    {
                        "isWorking": Boolean(
                            true,
                        ),
                        "sample": String(
                            "string sample",
                        ),
                        "nullable": Null,
                        "isNotWorking": Boolean(
                            false,
                        ),
                    },
                ),
            ],
        ),
        "utf8": Object(
            {
                "key2": String(
                    "value2",
                ),
                "key1": String(
                    "ࠄࠀࠆࠄࠀࠁࠃ",
                ),
            },
        ),
    },
)
```

Congratulations! You've now written your very own JSON parser, while learning some of the advanced use cases of match and iterators in Rust.

## **Wrapping Up**

I hope you can already see interesting ways you can make use of what you've learned today to optimize existing Rust code in your projects, and any future code you write that involves these.

You can find the complete code for everything we looked at in this article in [this repository][32].

Also, feel free to **[contact me][33]** if you have any questions or opinions on this topic.

### Enjoying my work?

Consider buying me a coffee to support my work!

[☕Buy me a coffee][34].

'Till next time, happy coding and wishing you clear skies!

[1]: #heading-what-are-iterators-in-rust
[2]: #heading-how-to-implement-iterators-in-rust
[3]: #heading-what-are-peekable-iterators-in-rust
[4]: #heading-what-is-the-match-statement-in-rust
[5]: #heading-how-to-use-iterators-in-match-statements-in-rust
[6]: #heading-what-are-match-guards-in-rust
[7]: #heading-what-is-binding-in-rust
[8]: #heading-how-to-build-a-json-parser-stage-1-reader
[9]: #heading-what-is-the-utf-8-byte-encoding
[10]: #heading-how-to-read-the-data
[11]: #heading-how-to-implement-the-iterator-for-jsonreader
[12]: #heading-how-to-build-a-json-parser-stage-2-prepare-intermediate-data-types
[13]: #heading-the-value-type
[14]: #heading-how-to-add-helpful-conversion-methods
[15]: #heading-how-to-build-a-json-parser-stage-3-tokenization
[16]: #heading-how-to-define-expected-valid-tokens
[17]: #heading-how-to-implement-the-tokenizer-struct
[18]: #heading-how-to-tokenize-an-iterator-of-characters
[19]: #heading-how-to-parse-string-tokens
[20]: #heading-how-to-parse-number-tokens
[21]: #heading-how-to-parse-boolean-tokens
[22]: #heading-how-to-parse-null-literal
[23]: #heading-how-to-parse-delimiters
[24]: #heading-how-to-parse-a-terminating-character
[25]: #heading-how-to-build-a-json-parser-stage-4-from-tokens-to-value
[26]: #heading-how-to-parse-primitives
[27]: #heading-how-to-parse-arrays
[28]: #heading-how-to-parse-objects
[29]: #heading-how-to-use-the-json-parser
[30]: #heading-wrapping-up
[31]: https://raw.githubusercontent.com/anshulsanghi-blog/json-parser/master/test.json
[32]: https://github.com/anshulsanghi-blog/json-parser
[33]: mailto:contact@anshulsanghi.tech
[34]: https://buymeacoffee.com/anshulsanghi