---
tags: git
title: git open - A shell script
---

[`git open`](https://github.com/paulirish/git-open/) is a fantastic tool. I use it so much I assign it valuable bash alias real-estate:

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

A specific remote branch:

```sh
git open upstream master
```

It's a surprisingly useful tool. Check it out.
