---
title: Foreign Function Interface are hard
description: A fun learning project to learn about ffi between languages and tooling around them
production: true 
tags: ['Programming', 'Fun', 'FFI']
---


# {{ $frontmatter.title }}
![Banner Image](/blogs/ffi-banner.png)
<!-- Credit for banner Image: https://iximiuz.com/en/posts/my-choice-of-programming-languages -->

[[toc]]

## What?
So what are we trying to do today?  
Let's spice up the process of calling a function by passing it between different programming languages, and then back to the original one, while we are at it lets learn about Foreign Function Interface (ffi).  

## Code
I have tried to keep the commit message as descriptive as possible with each containing the problem and the solution. I recommend you go through the repo commit by commit and try to run the code yourself as well.  

Linux has great tools to poke around in [ELF Files](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format) (Executable and Linkable Format).  

Some common Tools we will be using readelf, nm, ldd, objdump.

Github Repo -> [ffi-circle](https://github.com/aadi58002/ffi-circle)

## Calling Functions
### Within Same languages
Usually calling a function in a languages is a trivial task. You just have to tell the languages where the function is and it will call that for you.  
Function call alone is a very large subject and this entire blog can be about this topic but it is better left to those who understand it [better](https://fasterthanli.me/series/reading-files-the-hard-way/part-2).
\
\
In hindsight we don't need all the details just the below topics will be enough.
1. Static libraries vs dynamic libraries
2. Compiler steps (Primarily Linking step)

::: tip Resources
- [Fasterthanlime: Making Our Own Executable Packer (Part 5): The simplest shared library](https://fasterthanli.me/series/making-our-own-executable-packer/part-5)
- [How To Write Shared Libraries by Ulrich Drepper](https://www.akkadia.org/drepper/dsohowto.pdf)
:::


### Different languages
Calling functions from another languages this is where the fun begins.

#### rpath
Since none of the libraries are statically linked they look for function at runtime with LD_LIBRARY_PATH env variable which is different for c++(../c) -> at c library LD_LIBRARY_PATH should be ../rust but is ../c when calling from c++
#### C++ name-mangling and extern vs extern "C"
C++ features bites back again. Since there can be
multiple function with same name in c++.c++ compiler does something call
name-mangling because change name to uniq indentifier by adding some
uniq identifier to it but this breaks the name by which you call a
function from at the time of ma

### DSO Error
- [stackoverflow: Understanding Linker Error: DSO missing from command line](https://stackoverflow.com/questions/65269574/understanding-linker-error-dso-missing-from-command-line)
