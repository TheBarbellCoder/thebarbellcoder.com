---
layout: "../../layouts/blog-style.astro"

kicker: A Deep Dive
title: How To Build a Minimal Unit Testing Framework in C++
description: 5 macros are all you need to build a no-bloat unit testing framework that gets the job done. Read more to learn how you can isolate test cases and prevent your program from crashing.
banner: "/assets/unittest/unittest-blog-cover.png"
accentLight: "#8bc7d2"
accentDark: "#374e52"

---
Creating a Test framework isn't just for the big players.
In fact, the underlying software principles are so simple that you can 
build your own framework with just a little effort.

Frameworks like GTest, Catch, and others use macros to hide all the magic.
This way, you can focus on writing tests without having to deal all the 
boilerplate code.

With a bit of OOP, C++ templates, a design pattern and just five 
macros, we can build a unit testing framework that is minimal yet robust 
against segfaults or unexpected aborts.

<hr>

Our framework needs to do five basic things in order to successfully run
tests, namely: `declare`, `define`, `register`, `run`, and `compare`. And
we'll need five macros to do the same.

Let's define them one by one.

## Declare And Define Tests

#### Macros
* `DeclareTest`
* `DefineTest`

The `DeclareTest` macro creates a [singleton](https://refactoring.guru/design-patterns/singleton)
that inherits methods from its parent, the `UnitTest` (more on this later).

The `DefineTest` macro allows us to define the actual test that is run 
when we lauch the program.

<script src="https://gist.github.com/TheBarbellCoder/354b2f89063428bfd548a20ef049ca46.js"></script>

The `##` operator, also known as the token pasting operator, allows us 
to create a unique class name for each testcase.

To generate a unique class name, either the `Module` or the `TestName`
argument in the `DeclareTest` macro must be unique.

Here's how you'd use it in your project.

<script src="https://gist.github.com/TheBarbellCoder/8f1e665faea9ba9e07406aec695b4361.js"></script>

## The `UnitTest` Class

The `UnitTest` class is also a singleton and a central part of the 
framework. Its primary objective is to manage and run all tests that
are registered with it.

<script src="https://gist.github.com/TheBarbellCoder/f7bc37055330e7119b9f2fa0654f5f53.js"></script>

With a protected constructor, test cases can construct their own 
copies of the `UnitTest` class, and access or inherit its members. But,
there is only one instance of the class that is publicly available. And,
we access it via the `getInstance()` method.

The static `testList` is used to store pointers to test cases that are 
registered with the _singleton_. This way, we can access the `runFunc()`
method _overriden_ in test definitions.

The `expectEQ()` method compares the actual value returned from the test
to its expected value. And finally, the `runTests()` method runs all 
registered test cases in a `for` loop.

<script src="https://gist.github.com/TheBarbellCoder/ff2062a03676b608dcefdde1cab83fd8.js"></script>

## Register, Run, and Evaluate Tests

Now, all that's remaining is to register, run, and evaluate test cases.

We'll do this with three simple macros: `RegisterTest`, `RunTests`, and
the `ExpectEQ` macro to make comparisions easy.

<script src="https://gist.github.com/TheBarbellCoder/852110ce80f86c4839bea0aa35d02f81.js"></script>

## Putting It Together: A Sample Test Program

Let's write a demo test program to see how it all fits together.

Like any other program in C/C++, you have a header file to declare, a source
file to define, and another source file with a `main()` function to generate an 
executable. Simple. Right?

<script src="https://gist.github.com/TheBarbellCoder/27a84599efa11d660fcf4366b772d0c2.js"></script>

<hr>

## 🔖 &ensp;How To Stop Tests From Crashing Your Program

Running tests in separate processes saves your program from crashing when
one of them throws an exception or aborts. Since each test case runs in its
own isolated process, the damage doesn't spread.

The code below converts the `runTests()` method into a multi-process function
with [`vfork()`](https://man7.org/linux/man-pages/man2/vfork.2.html) (UNIX)
system calls.

<script src="https://gist.github.com/TheBarbellCoder/4cb6f48930c81bdf926c94fcd6b5bf60.js"></script>

In lines 5 and 6, we have defined `passed` and `failed` as _static_ variables.
This is due to the fact that child processes have their own copies of these
variables. Incrementing them in each child process does not reflect
the total number of tests unless they are defined static.

Now, you can debate whether to use `fork()` or `vfork()` to create child processes.
I chose `vfork()` due to its blocking nature, i.e., the main process waits until
its child process returns, before executing the next instruction. This prints console
logs in the right order.

<hr>

This is as simple as it can get. A functional yet minimal unit testing framework in C++.

Checkout the complete project on [**GitHub**](https://github.com/TheBarbellCoder/unittest)!
