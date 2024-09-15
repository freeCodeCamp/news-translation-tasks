---
title: "10 to the Power of 0: the Zero Exponent Rule and the Power of Zero Explained"
date: 2024-09-15T13:47:17.843Z
author: Eric Leung
authorURL: https://www.freecodecamp.org/news/author/erictleung/
originalURL: https://www.freecodecamp.org/news/10-to-the-power-of-0-the-zero-exponent-rule-and-the-power-of-zero-explained/
posteditor: ""
proofreader: ""
---

Exponents are important in the financial world, in scientific notation, and in the fields of epidemiology and public health. So what are they, and how do they work?

<!-- more -->

Exponents are written like (3^2) or (10^3).

But what happens when you raise a number to the (0) power like this?

$$10^0 = \\text{?}$$

This article will go over

-   the basics of exponents,
    
-   what they mean, and
    
-   it will show that (10^0) equals (1) using negative exponents
    

All I'm assuming is that you have an understanding of multiplication and division.

## Exponents are made up of a base and exponent (or power)

First, let's start with the parts of an exponent.

There are two parts to an exponent:

1.  the base
    
2.  the exponent or power
    

At the beginning, we had an exponent (3^2). The "3" here is the **base**, while the "2" is **the exponent or power**.

We read this as

> Three is raised to the power of two.

or

> Three to the power of two.

More generally, exponents are written as (a^b), where (a) and (b) can be any pair of numbers.

## Exponents are multiplication for the "lazy"

Now that we have some understanding of how to talk about exponents, how do we find what number it equals?

Using our example from above, we can write out and expand "three to the power of two" as

$$3^2 = 3 \\times 3 = 9$$

The left-most number in the exponent is the number we are multiplying over and over again. That is why you are seeing multiple 3's. The right-most number in the exponent is the number of multiplications we do. So for our example, the number 3 (the base) is multiplied two times (the exponent).

Some more examples of exponents are:

$$10^3 = 10 \\times 10 \\times 10 = 1000$$

$$2^{10} = 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 1024$$

More generally, we can write these exponents as

$$\\textcolor{orange}{b}^\\textcolor{blue}{n} = \\underbrace{\\textcolor{orange}{b} \\times \\dots \\times \\textcolor{orange}{b}}\_{\\textcolor{blue}{n} \\textrm{ times}}$$

where, the (\\textcolor{orange}{\\text{letter `b'' is the base}}\) we are multiplying over and over again and the \(\textcolor{blue}{\text{letter` n'' is power}}) or (\\textcolor{blue}{\\text{exponent}}), which is the number of times we are multiplying the base by itself.

For these examples above, the exponent values are relatively small. But you can imagine if the powers are very large, it becomes redundant to keep writing the numbers over and over again using multiplication signs.

**In sum, exponents help make writing these long multiplications more efficient.**

## Numbers to the power of zero are equal to one

The previous examples show powers of greater than one, but what happens when it is zero?

The quick answer is that any number, (b), to the power of zero is equal to one.

$$b^0 = 1$$

Based on our previous definitions, we just need zero of the base value. Here, let's have our base number be 10.

$$10^0 = ? = 1$$

But what does a "zero" number of base numbers mean? Why does this happen?

**We can figure this out by dividing multiple times to decrease the power value until we get to zero.**

Let's start with

$$10^3 = 10 \\times 10 \\times 10 = 1000$$

To decrease the powers, we need to briefly understand the concepts of

-   combining exponents
    
-   powers of one
    

In our quest to decrease the exponent from (10^3) ("ten to the third power") to (10^0) ("ten to the zeroth power"), we will keep on doing the opposite of multiplying, which is dividing.

$$\\frac{10^3}{10} = \\frac{10 \\times 10 \\times 10}{10} = \\frac{1000}{10} = 100$$

The right-most parts of this will probably make sense. But how do we write exponents when we have (10^3) divided by (10)?

### How powers of one work

First, any (\\textcolor{orange}{\\text{exponents with powers of one}}) are equal to just (\\textcolor{blue}{\\text{the base number}}).

$$\\textcolor{orange}{b^1} = \\textcolor{blue}{b}$$

There is only one value being "multiplied" so we are getting the value itself.

We need this "power of one" definition so we can rewrite the fraction with exponents.

$$\\frac{10^3}{10} = \\frac{10^3}{10^1}$$

### How to decrease exponents to zero

As a reminder, one way to figure out how (10^0) is equal to 1 is to keep on dividing by 10 until we get to an exponent of zero.

We know from the right side of the equation above we should get 100 from (\\frac{10^3}{10^1}).

$$\\frac{10^3}{10} = \\frac{10^3}{10^1} = \\frac{10 \\times 10 \\times 10}{10^1}$$

Before we finish dividing by one 10, we can multiply the top and bottom by 1 as placeholders when we cancel numbers out.

$$\\frac{10 \\times 10 \\times 10}{10^1} = \\frac{10 \\times 10 \\times 10 \\times 1}{10^1 \\times 1} = \\frac{10 \\times 10 \\times \\cancel{10} \\times 1}{\\cancel{10^1} \\times 1} = \\frac{10 \\times 10 \\times 1}{1}$$

From this, we can see we get 100 again.

$$\\frac{10 \\times 10 \\times 1}{1} = \\frac{10 \\times 10}{1} = \\frac{10^2}{1} = \\frac{100}{1}$$

We can divide by 10 two more times to finally get to (10^0).

$$\\frac{10^2 \\times 1}{10 \\times 10 \\times 1} = \\frac{\\cancel{10} \\times \\cancel{10} \\times 1}{\\cancel{10} \\times \\cancel{10} \\times 1} = \\frac{10^0 \\times 1}{1} = \\frac{1}{1} = 1$$

Because we divided by two 10's when we only had two 10's in the top of the fraction, we have zero tens in the top. Having zero tens pretty much means we get (10^0).

### How negative exponents work

Now, the (10^0) kind of comes out of nowhere, so let's explore this some more using "negative exponents".

More generally, this repetitive dividing by the same base is the same as multiplying by "negative exponents".

A negative exponent is a way to rewrite division.

$$\\frac{1}{\\textcolor{purple}{b^n}}= \\textcolor{green}{b^{-n}}$$

A (\\textcolor{green}{\\text{negative exponent}}) can be re-written as a fraction with the denominator (or the bottom of a fraction) with the (\\textcolor{purple}{\\text{same exponent but with a positive power}}) (the left side of this equation).

Now, using negative exponents, we can show the previous division in another way.

$$\\frac{10^2 \\times 1}{10 \\times 10 \\times 1} = \\frac{10^2}{10^2} = 10^2 \\times \\frac{1}{10^2} = 10^2 \\times 10^{-2}$$

**Note**, one rule of exponents is that when you multiply exponents with the same base number (remember, our base number here is 10), you can add the exponents.

$$10^2 \\times 10^{-2} = 10^{2 + (-2)} = 10^{2 - 2} = 10^{0}$$

### Putting it together

Knowing this, we can combine each of these equations above to summarize our result.

$$\\textcolor{purple}{\\frac{10^2}{10^2}} = 10^2 \\times 10^{-2} = 10^{2 + (-2)} = 10^{2 - 2} = \\textcolor{blue}{10^{0}} \\textcolor{orange}{= 1}$$

We know that (\\textcolor{purple}{\\text{dividing a number by itself}}) will (\\textcolor{orange}{\\text{equal to one}}). And we've shown that (\\textcolor{purple}{\\text{dividing a number by itself}}) also equals (\\textcolor{blue}{\\text{ten to the zero power}}). Math says that things that are equal to the same thing are also equal to each other.

Thus, (\\textcolor{blue}{\\text{ten to the zero power}}) is (\\textcolor{orange}{\\text{equal to one}}). This exercise above generalizes to any base number, **so any number to the power of zero is equal to one.**

## In summary

Exponents are convenient ways to do repetitive multiplication.

Generally, exponents follow this pattern below, with some (\\textcolor{orange}{\\text{base number}}) being multiplied over and over again (\\textcolor{blue}{\\text{\`\`n'' number of times}}).

$$\\textcolor{orange}{b}^\\textcolor{blue}{n} = \\underbrace{\\textcolor{orange}{b} \\times \\dots \\times \\textcolor{orange}{b}}\_{\\textcolor{blue}{n} \\textrm{ times}}$$

Using negative exponents, we can take what we know from multiplication and division (like for the fraction 10 over 10,(\\frac{10}{10})) to show that (b^0) is equal to one for any number (b) (like (10^0 = 1)).

Follow me on [Twitter][1] and check out my [personal blog][2] where I share some other insights and helpful resources for programming, statistics, and machine learning.

Thanks for reading!

[1]: https://twitter.com/erictleung
[2]: https://erictleung.com