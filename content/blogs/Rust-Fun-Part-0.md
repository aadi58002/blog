---
title: Rust Fun (Part 0)
description: Some fun activities to try out with rust
production: false 
tags: ['Rust', 'Projects', 'Fun']
---


[[toc]]

# What to do?
When ever trying to learn a language it is hard to come up with things to do and find motivation to complete big/long-term projects for me.
It would be fun to try some fun stuff which is not too complex. While also getting familiar to the tooling related to that language.
For example below is a list of things which don't take much time to implement and can be fun to achieve and learn with.

- [-] Write a rust proc macro which takes away or adds some fields to a struct.
    - [X] Remove all fields from a struct/enum. (Derive Macro)
    - [X] Remove all String type fields from a struct. (Derive Macro)
    - [ ] Wrap all the type wrapped in Option if there is a `#[option]` attribute on the field. (Derive attribute macro) 
    - [ ] Might as well write some tests for the macros :smile:.
- [ ] Calling a c/c++ function with FFI from rust and vice-versa.
- [ ] Try to write hello world from bios in a virtual machine -> [Demystifying UEFI](https://animeshz.github.io/site/blogs/demystifying-uefi.html)
- [ ] Making a live server like the `python -m http.server -d .`.
- [ ] Write a compress utility which compresses your data(Directory) into a protobuf file.
- [ ] Setup a local rust crate registery and publishing a crate to that registery.

# What should you know?
- You should be familiar with basic concepts of rust like ownership and basic types (struct,enums etc).
- You should know some terms like macros, lifetimes and crates.
- Just be curious about things (There are a lot of bread crumbs which will be there in the series follow them to your heart content until your curiocity is satified)

# Other Great resources
If you have the time and dedication i would highly recommend that you try to complete one of the projects under the following repo they are a slighly longer time investment but the projects are great.


- Great repo to get idea for next big project -> [Build Your own X](https://github.com/codecrafters-io/build-your-own-x)
