---
title: Github Actions
description: Explaining how i understand github actions
production: true
tags: ['Github', 'Automation', 'Build systems']
---

# {{ $frontmatter.title }}
![Banner Image](/public/github-actions-void.png)
## Goal
I wanted to automate the building of package build with `xbps-src` to a remote automated job and then make it into a [repository](https://docs.voidlinux.org/xbps/repositories/custom.html) and host it (for free).
  
For summary [xbps-src](https://github.com/void-linux/void-packages) is a build system to build packages for void.

Solution which i found -> Github Actions

## What is Github Actions ?
Github actions are a service provided by github to do blah blah blah... [Read offical wording here](https://docs.github.com/actions).  
For our use case it is just a computer ( Virutal machine ) which run commands ( mostly bash ) declared in files under the `.github/workflows` folder.

If you don't want to read the complete thing and just want the source of automated build -> [here](https://github.com/aadi58002/void-packages/blob/master/.github/workflows/custom.yaml) you go.

## Why i am doing this ?
I have some package which i bundled myself for using on void but they won't be accepted in the main repo because of strict [guideline](https://github.com/void-linux/void-packages/blob/master/CONTRIBUTING.md#package-requirements).

Hence to install them i had to compile them myself with `xbps-src` which is fine and all but i wanted my packages to do just installable with `xbps-install` from a repository. 

## Steps to achieve the goal
1. I want to check which custom package were bundled.
2. Build those packages in a CI environment.
3. Publish them with github pages as a repository host.

### Step 1
So in this step I want to identify which packages i bundled myself so that i don't have to build the entire [void-packages](https://github.com/void-linux/void-packages/tree/master/srcpkgs).

Conveniently there are a lot of scripts inside `common/travis/` folder to make working in ci with void-packages very easy.

Let search through and find something which might help us. -> [Changed Templates](https://github.com/void-linux/void-packages/blob/master/common/travis/changed_templates.sh)

Let see if we can find intersting thing in this script and make it fit our usecase.

#### Lets see what it does.
- This part seems to get the last commit in git which is not a merge commit and then save it to the tip variable.
```sh
#!/bin/sh
#
# changed_templates.sh

tip="$(git rev-list -1 --parents HEAD)"
case "$tip" in
	# This is a merge commit, pick last parent
	*" "*" "*) tip="${tip##* }" ;;
	# This is a non-merge commit, pick itself
	*)         tip="${tip%% *}" ;;
esac
```
<br/>

- This seems to get the last commit where you merged the main `void-linux/void-packages` repo into your personal branch.  
  ::: details
  I didn't knew about [merge-base](https://linux.die.net/man/1/git-merge-base) command before this so we learn something new this time around  
  :::
```sh
# You can run `man git-merge-base` to get a good idea of what it does ( it also has some diagrams )
base="$(git merge-base origin/HEAD "$tip")"

[ $(git rev-list --count "$tip" "^$base") -lt 200 ] || {
	echo "::error title=Branch out of date::Your branch is too out of date. Please rebase on upstream and force-push."
	exit 1
}
```
<br/>

- Finally at the last part of the script it print outs all the name of the changed template in `srcpkgs` folder between the merge_base and the last non merge commit.  
  ::: details
  - It uses cut to get the package name specifically from the path name like `srcpkgs/emacs/template` to `emacs`.
  - Note it uses tee to output both to the terminal screen (stdout) and to a file `/tmp/templates`.
  :::

```sh
echo "$base $tip" >/tmp/revisions

/bin/echo -e '\x1b[32mChanged packages:\x1b[0m'
git diff-tree -r --no-renames --name-only --diff-filter=AM \
	"$base" "$tip" \
	-- 'srcpkgs/*/template' |
	cut -d/ -f 2 |
	tee /tmp/templates |
	sed "s/^/  /" >&2
```
<br/>

- What changes did i make to the script
  Lets see i don't usually merge the main repo into my personal one.  
  I just rebase my commit from the latest commit from the [upstream](https://github.com/void-linux/void-packages) with command `git pull --rebase upstream master`.
  ::: tip
  Rebase advantage over merge:-
  - No seperate commit for the merge.
  - Make it easier to identify which file you have changed.
  :::

Add the script assumes that the origin remote is the [main repo](https://github.com/void-linux/void-packages) but i have it under upstream.
So just a little change of name and it is done.
```diff
- base="$(git merge-base origin/HEAD $tip)"
+ base="$(git merge-base upstream/master $tip)"
```

### Step 2
This part was the part which i though would be the hardest but looking in the folder for workflow in the [main repo](https://github.com/void-linux/void-packages).  
I found the a build workflow for the package and there environment setup -> [build.yaml](https://github.com/void-linux/void-packages/blob/master/.github/workflows/build.yaml)
So we copy paste the part we want a understand whats going on.
```yaml
name: Build Custom package

on:
  workflow_dispatch:
  push:
    paths:
      - 'srcpkgs/**'
```
