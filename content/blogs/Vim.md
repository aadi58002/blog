---
title: Vim Tricks
description: A set of vim command which can be useful but are not commonly found
tags: ['Text Editor', 'Vim']
---

# {{ $frontmatter.title }}
## Learning vim
There are many ways to get familiar with vim
1. If you have vim installed (not neovim) then there is a command called `vimtutor` which you can use to learn vim.
   For begineers i would recommend that you complete it till 2nd chapter.
2. [Evil Tutor](/guide/Emacs/GettingStarted.md) ( Vim tutor for emacs users )

## Case Changes in vim
```sh
 visual Mode:
 u    : Change the selected area to lower case
 
 U    : Change the selected area to upper case
 
 normal Mode:

 ~    : Changes the case of current character

 guu  : Change current line from upper to lower.

 gUU  : Change current LINE from lower to upper.

 guw  : Change to end of current WORD from upper to lower.

 guaw : Change all of current WORD to lower.

 gUw  : Change to end of current WORD from lower to upper.

 gUaw : Change all of current WORD to upper.

 g~~  : Invert case to entire line

 g~w  : Invert case to current WORD

 guG  : Change to lowercase until the end of document.

 gU)  : Change until end of sentence to upper case

 gu}  : Change to end of paragraph to lower case

 gU5j : Change 5 lines below to upper case

 gu3k : Change 3 lines above to lower case
```
