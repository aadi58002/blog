---
title: Rust Fun (Part 1)(Macros)
description: The first part of fun tasks planned for the Rust fun series
production: true 
tags: ['Rust', 'Projects', 'Fun']
---

[[toc]]

--- 
# What we are doing?
<!--@include: ./Rust-Fun-Part-0.md{14,19}-->

--- 
# Setting up a basic setup
We create a library crate with `cargo new --lib break_macro`. To tell rust tooling that we are making a 
proc macro we have to add the below line to `Cargo.toml`
```yaml
[lib]
proc-macro = true
```

Oh and if you tried to write tests in the same file as the proc macro ( `src/lib.rs` in our case )
you might have already gotten a error saying that you can't use the macro. Macro **can't** be used in the same crate they are defined in.  
So test it we will have to use the `tests` folder in rust.

I would recommend that you read the below chapter from rust lang docs. 
[Procedural Macros - The Rust Reference](https://doc.rust-lang.org/reference/procedural-macros.html)

--- 
# Clear macro
You can check out the clear macro code at [Rust Fun Series part 1 Macros Clear Macro](https://github.com/aadi58002/rust-fun-series/blob/c03290f2262a19620de61509ebd7ed3776c90dcf/break_macro/src/lib.rs#L7-L17)

Looking at the input (DeriveInput struct struture) we can see that its `input.data` field contains all the fields.
```rust
pub struct DeriveInput {
    pub attrs: Vec<Attribute>,
    pub vis: Visibility,
    pub ident: Ident,
    pub generics: Generics,
    pub data: Data,
}
```

Looking at the `Data` type of the struct it is a enum with 3 possible values.
```rust
pub enum Data {
    Struct(DataStruct),
    Enum(DataEnum),
    Union(DataUnion),
}
```

Looking at DataStruct we can easily see that all the fields are contained in the fields property so we just have to make the fields empty.
Similarly it can be done for the enum but you will have to look which field to make empty yourself.

--- 

# Clear String macro
You can check out the clear String macro code at [Rust Fun Series part 1 Macros Clear String Macro](https://github.com/aadi58002/rust-fun-series/blob/f43a67b03e0f9aa8d723cac0305645c5655db304/break_macro/src/lib.rs#L20-L99)



--- 
# Extra
--- 
Proc macros are a really fun and interesting topic related to rust.

Did you know there that (looking at the options from `rustc --crate-type` flag) there are *6* 
different type of compilation modes in which the rust compiler can output a file in.  


`bin, dylib, lib, proc-macro, rlib, staticlib` 


Each of the above binary types are a huge topic on there own but you should explore them on there own.  
There is also a hint here (looking at you `rlib`) from which you can figure out some of the working of cargo and how it manages your project.

- [Tsoding daily - Forbidden rust stream around 50 min mark](https://youtu.be/LQ2rX5B0DUA?t=2996)
- [Proc macro workshop by dtolnay](https://github.com/dtolnay/proc-macro-workshop)
- [Proc macro workshop youtube stream by Jon Gjengset](https://youtu.be/geovSK3wMB8)
