---
title: Emacs Introduction ( Doom emacs )
---

# {{ $frontmatter.title }}
## What is Emacs

Short Answer :  
It is a __really really__ old text editor (Almost 4 decades old).  
- Read [this](https://opensource.com/resources/what-emacs) if you want to be scared of emacs.

Long Answer :  
It is a really really flexible text editor which has its own programming language `(elisp)` which is used to configure it.  
It has a lot of really really powerful plugins like [Org Mode](https://orgmode.org/) , [Org Roam](https://www.orgroam.com/) , [Magit](https://magit.vc/)

::: tip Interesting Fact
Emacs was made by the same people which made base Utils like cd, find, grep, sed etc.
:::

## Is Emacs the text editor for you ? :thinking:
Well if like to tinker with things as well as if you want the most configurable software out there then yes it is for you.

If you don't like tinkering with things or want a `just work out of the box` editor then emacs is not for you (Then use [VSCode](https://code.visualstudio.com/) instead).

## What can Emacs do
Basically there is no limitation on what emacs can do (if you can think and write it in code emacs will do if for you).
- You can edit files on remote server with your editor.
- A editor does not have to installed on the remote server for emacs to work.
- You can have a personal database ( with sql ) with [Org Roam](https://www.orgroam.com/).
- Emacs also has the most powerful textual user interface (TUI) for git called [Magit](https://magit.vc/).
- the list does not stop so i can't list them all here [Taste of Emacs power](https://www.redhat.com/sysadmin/5-emacs-features-to-love) Here is a teaser.

## Why is Emacs not popular
It is because out the box emacs is very unusable.
- It has horrible keybinding
- It is hard to navigate
- It can be overwhelming to take the whole of emacs at once
- To even start using it you have to learn too many things ( ex -> elisp , keybinding , terms commonly used in emacs etc )

## Solution to Emacs problem
- [Doom Emacs](https://github.com/doomemacs/doomemacs) is a have good defaults configuration framework for emacs.  
  It also gives you the most powerful interface with emacs while it does not gets in the way when you try to customize it.
> Personal Opinion -> Best point for begineers to start with emacs.
- [Spacemacs](https://www.spacemacs.org/) is a do it all solution . It has everything and it does everything.  
> Personal Opinion -> It does too much and is too slow for me.

::: danger Emacs is not VSCode
No matter how much you try things will break sometimes and the community support for things like code autocompletions it might need some tinking for some languages <br/>( like vue )  
:::
