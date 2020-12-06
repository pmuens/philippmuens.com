---
title: Generics
description: Easily abstract and reuse existing code.
coverImage: /assets/blog/generics/cover.jpg
date: '2019-10-01T18:49:00.000Z'
author:
  name: Philipp Muens
  website: https://philippmuens.com
  picture: /assets/blog/authors/philipp.jpg
ogImage:
  url: /assets/blog/generics/cover.jpg
---

Generic programming makes it possible to describe an implementation in an abstract way with the intention to reuse it with different data types.

While generic programming is a really powerful tool as it prevents the programmer from repeating herself it can be hard to grasp for newcomers. This is especially true if you're not too familiar with typed programming languages.

This blog post aims to shed some light into the topic of generic programming. We'll discover why Generics are useful and which thought process can be applied to easily derive generic function signatures. At the end of post you'll be able to author and understand functions like the this:

```ts
function foo<A, B>(xs: A[], func: (x: A) => B): B[] {
  /* ... */
}
```

**Note:** Throughout this post we'll use [TypeScript](http://www.typescriptlang.org/) as our language of choice. Feel free to [code along](http://www.typescriptlang.org/play/) while reading through it.

Of course you can "just use JavaScript" (or another dynamically typed language) to not deal with concepts such as typing or Generics. But that's not the point. The point of this post is to introduce the concepts of Generics in a playful way. TypeScript is just a replaceable tool to express our thoughts.

## Motivation

Before we jump right into the application of generic programming it might be useful to understand what problem Generics are solving. We'll re-implement one of JavaScripts built-in Array methods called `filter` to get first-hand experience as to why Generics were invented.

Let's start with an example to understand what `filter` actually does. The [JavaScript documentation for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)[`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) states that:

> The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

Let's take a look at a concrete example to see how we would use `filter` in our programs. First off we have to define an array. Let's call our array `numbers` as it contains some numbers:

```ts
const numbers = [1, 2, 3, 4, 5, 6]
```

Next up we ned to come up with a function our `filter` method applies to each element of such array. This function determines whether the element-under-test should be included in the resulting / filtered array. Based on the quote above and the description we just wrote down we can derive that our function which is used by the `filter` method should return a boolean value. The function should return `true` if the element passes the test and `false` otherwise.

To keep things simple we pretend that we want to filter our `numbers` array such that only even numbers will be included in our resulting array. Here's the `isEven`function which implements that logic:

```ts
const isEven = (num: number): boolean => num % 2 === 0
```

Our `isEven` function takes in a `num` argument of type `number` and returns a `boolean`. We use the [modulo operation](https://en.wikipedia.org/wiki/Modulo_operation) to determine whether the number-under-test is even.

Next up we can use this function as an argument for the `filter` method on our array to get a resulting array which only includes even numbers:

```ts
const res = numbers.filter(isEven)

console.log(res)
// --> [2, 4, 6]
```

As we've stated earlier our goal is to implement the `filter` function on our own. Now that we've used `filter` with an example we should be familiar with it's API and usage.

To keep things simple we won't implement `filter` on arrays but rather define a standalone function which accepts an `array` and a `function` as its arguments.

What we do know is that `filter` loops through every element of the array and applies the custom function to it in order to see if it should be included in the resulting array. We can translate this into the following code:

```ts
function filter(xs: number[], func: (x: number) => boolean): number[] {
  cons res: number = []
  for (const x of xs) {
    if (func(x)) {
      res.push(x)
    }
  }
  return res
}
```

Now there's definitely a lot happening here and it might look intimidating but bear with me. It's simpler than it might look.

In the first line we define our function called `filter` which takes an array called `xs` (you can imagine pronouncing this "exes") and a function called `func` as its arguments. The array `xs` is of type `number` as we're dealing with numbers and the function `func` takes an `x` of type `number`, runs some code and returns a `boolean`. Once done our `filter` function returns an array of type `number`.

The function body simply defines an intermediary array of type `number` which is used to store the resulting numbers. Other than that we're looping over every element of our array and apply the function `func` to it. If the function returns `true` we push the element into our `res` array. Once done looping over all elements we return the `res` array which includes all the numbers for which our `func` function returned the value `true`.

Alright. Let's see if our homebrew `filter` function works the same way the built-in JavaScript `filter` function does:

```ts
const res = filter(numbers, isEven)

console.log(res)
// --> [2, 4, 6]
```

Great! Looks like it's working!

If we think about filtering in the abstract we can imagine that there's more than just the filtering of numbers.

Let's imagine we're building a Rolodex-like application. Here's an array with some names from our Rolodex:

```ts
const names = ['Alice', 'Bob', 'John', 'Alex', 'Pete', 'Anthony']
```

Now one of our application requirements is to only display names that start with a certain letter.

That sounds like a perfect fit for our `filter` function as we basically filter all the names based on their first character!

Let's start by writing our custom function we'll use to filter out names that start with an `a`:

```ts
const startsWithA = (name: string): boolean => name.toLowerCase().charAt(0) === 'a'
```

As we can see our function takes one argument called `name` of type `string` and it returns a `boolean` which our function computes by checking if the first character of the name is an `a`.

Now let's use our `filter` function to filter the names:

```ts
const res = filter(names, startsWithA)

console.log(res)
// --> Type Error
```

Hmm. Something seems to be off here.

Let's revisit the signature of our `filter` function:

```ts
function filter(xs: number[], func: (x: number) => boolean): number[] {
  /* ... */
}
```

Here we can see that the `xs` parameter is an array of type `number`. Furthermore the `func` parameter takes an `x` of type `number` and returns a `boolean`.

However in our new Rolodex application we're dealing with names which are `strings` and the `startsWithA` function we've defined takes a `string` as an argument, not a `number`.

One way to fix this problem would be to create a copy of `filter` called e.g. `filter2` which arguments can handle `strings` rather than `numbers`. But we programmers know that we [shouldn't repeat ourselves](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) to keep things maintainable. In addition to that we're lazy, so using one function to deal with different data types would be ideal.

## Entering Generics

And that's exactly the problem Generics tackle. As the introduction of this blog post stated, Generics can be used to describe an implementation in an abstract way in order to reuse it with different data types.

Let's use Generics to solve our problem and write a function that can deal with any data type, not just `numbers` or `strings`.

Before we jump into the implementation we should articulate what we're about to implement. Talking in the abstract we're basically attempting to filter an array of type `T` (`T` is our "placeholder" for some valid type here) with the help of our custom function. Given that our array has elements of type `T` our function should take each element of such type and produce a `boolean` as a result (like we did before).

Alright. let's translate that into code:

```ts
function filter<T>(xs: T[], func: (x: T) => boolean): T[] {
  const res: T[] = []
  for (const x of xs) {
    if (func(x)) {
      res.push(x)
    }
  }
  return res
}
```

At a first glance this might look confusing since we've sprinkled in our `T` type here and there. However overall it should look quite familiar. Let's take a closer look into how this implementation works.

In the first line we define our `filter` function as a function which takes an array named `xs` of type `T` and a function called `func` which takes a parameter `x` of type `T` and returns a `boolean`. Our function `filter` then returns a resulting array which is also of type `T`, since it's basically a subset of elements of our original array `xs`.

The code inside the function body is pretty much the same as before with the exception that our intermediary `res` array also needs to be of type `T`.

There's one little detail we haven't talked about yet. There's this `<T>` at the beginning of the function. What does that actually do?

Well our compiler doesn't really know what the type `T` might be at the end of the day. And it doesn't really care that much whether it's a `string`, a `number` or an `object`. It only needs to know that it's "some placeholder" type. We programmers have to tell the compiler that we're abstracting the type away via Generics here. So in TypeScript for example we use the syntax `<TheTypePlaceHolder>` right after the function names to signal the compiler that we want our function to be able to deal with lots of different types (to be generic). Using `T` is just a convention. You could use any name you want as your "placeholder type". If your functions deals with more than one generic type you'd just list them comma-separated inside the `<>` like this: `<A, B>`.

That's pretty much all we have to do to turn our limited, `number`-focused `filter`function into a generic function which can deal with all kinds of types. Let's see if it works with our `numbers` and `names` arrays:

```ts
let res

// using `filter` with numbers and our `isEven` function
res = filter(numbers, isEven)
console.log(res)
// --> [2, 4, 6]

// using `filter` with strings and our `startsWithA` function
res - filter(names, startsWithA)

console.log(res)
// --> ['Alice', 'Alex', 'Anthony']
```

Awesome! It works!

## Function signatures as documentation

One of the many benefits of using a type system is that you can get a good sense of what the function will be doing based solely on its signature.

Let's take the function signature from the beginning of the post and see if we can figure out what it'll be doing:

```ts
function foo<A, B>(xs: A[], func: (x: A) => B): B[] {
  /* ... */
}
```

The first thing we notice is that it's a generic function as we're dealing with 2 "type placeholders" `A` and `B` here. Next up we can see that this function takes in an array called `xs` of type `A` and a function `func` which takes an `A` and turns it into a `B`. At the end the `foo` function returns an array of type `B`,

Take a couple of minutes to parse the function signature in order to understand what it's doing.

Do you know how this function is called? Here's a tip: It's also one of those functions from the realm of functional programming used on e.g. arrays.

Here's the solution: The function we called `foo` here is usually called `map` as it iterates over the elements of the array and uses the provided function to map every element from one type to the other (note that it can also map to the same type, i.e. from type `A` to type `A`).

I have to admit that this was a rather challenging question. Here's how `map` is used in the wild:

```ts
const number = [1, 2, 3, 4, 5, 6]
const numToString = (num: number): string => num.toString()

const res = map(numbers, numToString)

console.log(res)
// --> ['1', '2', '3', '4', '5', '6']
```

## Conclusion

In this blog post we've looked into Generics as a way to write code in an abstract and reusable way.

We've implemented our own `filter` function to understand why generic programming is useful and how it helps us to allow the filtering of lists of `numbers`, `strings` or more broadly speaking `T`s.

Once we understood how to read and write Generic functions we've discovered how typing and Generics can help us to get a sense of what a function might be doing just by looking at its signature.

I hope that you've enjoyed this journey and feel equipped to read and write highly generic code.
