---
title: Installtion of Doom emacs
slug: Installtion
---

# {{ $frontmatter.title }}
## Installing Emacs
- Ubuntu / Linux Mint / Zorin
  ``` sh
  sudo apt update && sudo apt install emacs fd-find ripgrep
  ```
- Pacman / Endevour / Manjaro
  ``` sh
  sudo pacman -Sy emacs-nativecomp ripgrep fd
  ```
- Fedora 
  ``` sh
  sudo dnf update && sudo dnf install emacs ripgrep fd-find
  ```
- Void Linux
  ``` sh
  sudo xbps-install -S emacs ripgrep fd
  ```
- Software required to get the most out of doom emacs  
  Install emacs -> https://www.gnu.org/software/emacs/  
  Install ripgrep -> https://github.com/BurntSushi/ripgrep  
  Install fd-find -> https://github.com/sharkdp/fd  
## Points to learn Before installing
Emacs looks for `~/.emacs.d` folder which contains the file to configure it. It by default look for the `init.el` file in that folder.
::: tip el file extension
.el is the file extension of elisp files the language of emacs
:::
## Doom emacs
Doom emacs takes over the `~/.emacs.d` and it is recommened to not change files inside `~/.doom.d` instead a `~/.emacs.d` directory is used to configure the doom emacs framework.
## Installation
This is the offical way of install doom emacs.
:::warning
Make sure that there is no `~/.emacs.d` folder
:::
```sh
git clone --depth 1 https://github.com/doomemacs/doomemacs ~/.emacs.d
~/.emacs.d/bin/doom install
```
## Personal Way
``` sh
export PATH="$PATH:~/.emacs.d/bin"

alias ke="killall -w emacs"
alias e="emacsclient -c -a 'emacs' -q . & disown"
alias ess="emacsclient -a '' -e '(server-start)'"
alias doominstall="doom install"
alias doomclone="git clone --depth 1 https://github.com/hlissner/doom-emacs ~/.emacs.d"
alias esr="killall -w emacs &&  doom sync && emacsclient -a '' -e '(server-start)'"
```

After pasting the above in your `~/.bashrc` or `~/.zshrc` or `~/.config/fish/config.fish`
``` sh
doomclone && doominstall
```
## Personal Recommended Config
Download Recommended Doom Config -> [Here](./Installtion/example.zip)
> The above are good default for doom emacs which are in `my opinion` better to start with.

::: warning
If you already have a `~/.doom.d` either rename to something else or remove the directory
:::

