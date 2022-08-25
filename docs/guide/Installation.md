---
title: "Installtion of Linux"
slug: "Installation"
date: "2022-08-04T08:06:17+05:30"
---

<h1>{{ $frontmatter.title }}</h1>

[[toc]]


::: info <p style="text-align: center">Power of linuxing</p>
<span style="color: var(--vp-c-brand)">****The ways by which one can access the power of linux may vary in form as well as the feautres and power they provide.****</span>
:::
# Installation
## WSL ( Windows sub system for Linux )
It is by far the easiest to get access to power of linux and it is without any risk.
Microsoft offical documentation provides a great resource to get started with wsl<br />
<Blog title="Wsl Install instructions" blogurl="https://docs.microsoft.com/en-us/windows/wsl/install" />
<videoEb src="https://www.yourtube.com/watch?v=wjbbl0TTMeo" />

## Virtual Machine
It is more featureful implementation of linux. It also has no risk but you might need a more powerful
computer to run virtual machines.
Minimul resources to run a virtual machine for your computer should be a 4 or more cores and 8 GB of RAM.
Recommeneded resources to run a virtual machine for your computer should be a 6 or more cores and 16 GB of RAM.
<Blog title="Installing ubuntu on virtual Machine" blogurl="https://brb.nci.nih.gov/seqtools/installUbuntu.html" />
<videoEb src="https://www.yourtube.com/watch?v=wX75Z-4MEoM" />


## Dual Booting 
::: danger Caution
Might cause dataloss based on your actions. So don't proceeed before proper knowlegde or guideance
:::
It is the last as well as being the most difficult of the ways of installation of linux. Here you
will install two operating system on the same storage device but only one of them will run at a time so it
does not affect the performace of your device.
[Reasons to Dual boot and Reasons not to as well](https://www.makeuseof.com/tag/reasons-dual-boot-linux/)
Instructions for dual booting
<Blog blogurl="https://www.geeksforgeeks.org/creating-a-dual-boot-system-with-linux-and-windows/" title="Dual Boot Guide"/>
<videoEb src="https://www.yourtube.com/watch?v=yIh37HQDF-w" />

:::warning
Advance stuff ahead
:::
### Partitioning Notes (Manual Partitioning)

At one of the last step in the installation, you'll be prompted to allocate disk space where you're going to install the linux distro. Make sure you make the following partitions in case you choose the manual partitioning .

* 1 EFI partition *[vfat]* mounted on `/boot/efi` (>=500M preferred, shared)
* 1 swap partition *[swap]* mounted as `swap` (>=RAM)
* 1 root partition *[ext4]* mounted on `/` (rest of the size)

*Linux Mint install with manual paritioning [How to Install Linux Mint 20.2 Manual Partition | Installing Linux Mint 20.2 Uma on UEFI based PC](https://www.yourtube.com/watch?v=fOHjqllzTy0)*

*Note: Detailed Explaination for paritioning and what each parition is required for <br />
[Arch Wiki: Partitioning](https://wiki.archlinux.org/title/Partitioning) & [Gentoo Wiki: Installation](https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Installation#Partitioning_the_disk_with_GPT_for_UEFI)* 

*Note: Multiple distro install should use seperate swap space, as they are used in hibernation and if reused by another may cause data-loss.*


