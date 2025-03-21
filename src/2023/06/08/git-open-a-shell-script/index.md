---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: git sh
title: git open - A shell script
description: "git-open is a fantastic tool. It allows you to open a repo website in your browser. It supports Linux, Mac, and Windows, and supports GitHub, GitLab, and Bitbucket."
lastUpdated: false
---

# git-open - a shell script

[`git-open`](https://github.com/paulirish/git-open/?ref=blog.gerardroche.com) is a fantastic tool. It allows you to open a repo website in your browser. It supports Linux, Mac, and Windows, and supports GitHub, GitLab, and Bitbucket.

Type `git open` to open a repo website in your browser.

```bash
git open
```

You can open a commit:

```bash
git open --commit
```

Or an issue, if your branches use a naming convention of issues/#123:

```bash
git open --issue
```

## An alias

I find this tool to be so useful, I've aliased it to one key:

```bash
alias o='git open'
```

## Installation

See the [readme installation guide](https://github.com/paulirish/git-open/?tab=readme-ov-file&ref=blog.gerardroche.com#installation) for setup instructions.

## Sublime Text integration

Check out the [Git Open](/2023/06/09/sublime-text-git-open/) package, which adds `git-open` commands to the Command Palette.
