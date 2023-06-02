---
title: Getting Started with Doom Emacs
---

# {{ $frontmatter.title }}
::: warning
All the Blogs after Getting started assume that you are using the default config provided by this blog. -> <a href="/Linux-Blog/config.zip" download>here</a>
:::

## How to start Emacs
If you lanuch emacs like a normal application it is quite slow to say the least.  
What is the solution -> Always keep emacs open :laughing:.  
Well keeping a app always open seem weird but emacs follows a client and server relationship to mitigate the start time cost to just one time.  
You can start a emacs server with `emacsclient -a '' -e '(server-start)'`  
But now if you call the `emacs` command it will still open a emacs which does not connect to the server which was started 😱.  
You will need to call `emacsclient -c -a '' & disown` which will create a graphical instance of emacs which connect to the emacs server.  

::: tip
You can copy the command alias which i use to start or restart emacs use [here](./Installation#personal-way)  
Then you can start emacs with `ess && e`
:::

## Keybinding Convention
Some conventions for emacs keybinding are given below  
`M-x` -> It means the `alt key with x`  
`C-x`-> It means to press the `ctrl key with x`  
`X` -> It is just press `Shift with x`  
`C-e C-c` -> It means to first press `ctrl with e` and then press `ctrl with c`  
::: tip
The keys which are seperated by a space you can press them one by one you `don't` need to press all of them at the same time.
:::

## Evil ( Or vim for emacs )
Doom emacs by default uses Vim keybinding.  
To learn about vim.
paste this in your `~/.doom.d/package.el` and paste this line at the end of it.
`(use-package evil-tutor)`
After that close emacs and if you have the server running kill it.
With the `ke` command or htop.
Then after restarting emacs you should press `M-x` and then type `evil-tutor-start` command.  
  * [ ] I Would recommend that you complete this until chapter 4 (including chapter 4).  
That would cover 70% of what you will do in terms of text editing in emacs.  

