---
tags: git
title: git open - A shell script
unpublished: true
---

![Ghost in the Shell (1995)](/assets/ghost-in-the-shell.webp)

[`git open`](https://github.com/paulirish/git-open/) is a fantastic tool. I use it so much it has valuable bash real-estate:

```sh
alias o='git open'
```

Type `git open` to open a repo website in your browser.

```sh
git open
```

You can open a commit:

```sh
git open --commit
```

An issue, if your branches use a naming convention of issues/#123:

```sh
git open --issue
```

And even a specific remote branch:

```sh
git open upstream master
```

It's a surprisingly useful simple tool. Check it out. I think you'll like it.
