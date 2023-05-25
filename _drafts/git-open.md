---
tags: git
title: git-open - A shell script
---

[`git open`](https://github.com/paulirish/git-open/) is a fantastic git tool. I use it so much that I have assigned it valuable bash alias real-estate:

```sh
alias o='git-open'
```

Without arguments it will open the git repo/branch in your browser, but you also have a few additional options:

```sh
$ git-open --help
usage: git open [options]
   or: git open [remote] [branch]

Available options are
    -c, --commit          open current commit
    -i, --issue           open issues page
    -s, --suffix ...      append this suffix
    -p, --print           just print the url
```

`git-open` integrates with git so you can type `git open` without the dash.
