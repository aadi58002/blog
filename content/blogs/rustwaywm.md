---
title: Writing a wayland compositor
description: Understanding how linux, rendering and wayland works with writing a wayland compositor in rust
production: true
tags: ['wayland', 'Rust']
---

# Linux


## Rendering abstractions
|----------|--------|--------|------------------------------------------------|---------------|
| Hardware | Kernal | libdrm | Mesa ( Opengl and Vulkan )                     | Cairo library |
|          |        |        | libgbm (Generic buffer manager for gpu buffer) |               |
|----------|--------|--------|------------------------------------------------|---------------|
## User input
|----------|--------|-------|----------|----------------------------------------------------------------------------|
| Hardware | Kernal | eudev | libinput | xkbcommon ( Was original part of X but later made into a seperate project) |
|----------|--------|-------|----------|----------------------------------------------------------------------------|


# Resources
[https://wayland-book.com/introduction.html](Wayland Book)
[https://hdante.wordpress.com/2014/07/08/the-hello-wayland-tutorial/](Hello on Wayland)

[https://wayland.freedesktop.org/docs/html/ch01.html](Offical wayland docs)

[https://www.youtube.com/watch?v=KbryyNrMYl4](Understanding wayland sturcture)
[https://www.youtube.com/watch?v=BkETJWMz0f0](Rust smithey example implmentation)
