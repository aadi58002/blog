---
title: "Terminal for Children"
slug: "Terminal"
---

<h1>{{ $frontmatter.title }}</h1>

::: info <p style="text-align: center">Lets kill the monster called terminal</p>
<span style="color: var(--vp-c-brand)">*Terminal is a different way to do stuff on your computer.*</span>
:::

# Terminal and it parts

::: box
<img src="./Terminal/terminal-parts.png" style="margin: auto;height: 300px;border-radius: 10px"/>
:::

**Terminal** -> The window that contains everything in the image is the terminal (under the purple border).
::: tip Terminal
1. It decides the fonts, color-schemes & all the other visual aspects which you see when running the terminal
2. Good recommendation for general terminals on linux : <br />
[Alacritty](https://github.com/alacritty/alacritty) -> Minimal, small size <br />
[Kitty](https://github.com/kovidgoyal/kitty) -> Featureful, Extensible with plugins ( named: kittens 🐱 )
:::

**Prompt** -> The "~/Desktop" you see before the cursor is called the prompt. (It can get pretty fancy with a lot of useful infomation in it)
::: tip Prompt
1. Gives useful infomation like time, path of the current directory, git infomation and language version.
2. Good recommendation for general prompts on linux : <br />
[starship](https://starship.rs/guide/#%F0%9F%9A%80-installation) -> Featureful, Provide information about git and all the language version.
:::

**Shell** -> It is the place where you type your command. It is also the layer between user and system.<br />
Press `<TAB>` to get autosuggestions.<br />
You can check the shell you are running with `echo $SHELL`. Your terminal should be either one of the following - bash,zsh or dash.
::: tip Shell
1. Provides helpful suggestion about command and there flags
2. Good recommendation for general prompts on linux : <br />
[fish](https://fishshell.com/docs/current/tutorial.html) -> Featureful, Provide information about git and all the language version.
:::

::: details Good resources
Kitty -> [Mastering Kitty](https://paul-nameless.com/mastering-kitty.html)
:::
