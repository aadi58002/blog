---
title: Vim Tricks
description: A set of vim command which can be useful but are not commonly found
production: true
tags: ['Text Editor', 'Vim']
---

# {{ $frontmatter.title }}
## Learning vim
There are many ways to get familiar with vim
1. If you have vim installed then there is a cli command called `vimtutor` which you can use to learn vim.
   For begineers i would recommend that you complete it till 2nd chapter.
2. Similarly foe neovim you can use the command from inside neovim with entering command mode with `:` and then `tutor`.
3. [Evil Tutor](/guide/Emacs/GettingStarted.md) ( Vim tutor for emacs users )

## Move by word
Word is anything seperated by punctuation or space.
```sh
normal Mode:
w,W     : Go forward by one word

b,B     : Go back by one word
```

## Fast move to char in line
Cursor goes from `|` to `^`
```sh
normal Mode:
f     : Goto the char
# Press fw on this line will go here
#          |            ^

F     : Goto the char ( Backward )
# Press Fw on this line will go here
#                       ^       |

t     : Goto just before the char
# Press tw on this line will go here
#          |           ^

T     : Goto just after the char ( Backward )
# Press tw on this line will go here
#                        ^         |
```

## Case Changes in vim
```sh
visual Mode:
u    : Change the selected area to lower case

U    : Change the selected area to upper case

normal Mode:

~    : Changes the case of current character
```

## Neovim builtin Completions
You can press the below key combination to get a completion popup.  
For more info checkout neovim help page on ins-completion. `:h ins-completion`  
`<C-{key}>` -> Means to hold CTRL and then press {key}
```sh
Insert Mode:
# Really useful and frequently used
<C-x><C-f> : file names

# Rarely used
<C-x><C-l> : Whole lines (Only works when the cursor is at start of line)
<C-x><C-n> : keywords in the current file
<C-x><C-i> : keywords in the current and included files
<C-x><C-v> : Vim command-line

# Very good to know and study more about
<C-x><C-u> : User defined completion
<C-x><C-o> : omni completion
```

