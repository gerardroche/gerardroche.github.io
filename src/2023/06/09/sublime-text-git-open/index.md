---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: sublime-text git vim neovintageous
title: GitOpen - A Sublime Text plugin
lastUpdated: false
---

# Git Open - Sublime Text

[Git Open](https://github.com/gerardroche/sublime-git-open) is a Sublime Text plugin that provides integration for [git-open](/2023/06/08/git-open-a-shell-script/), a script that allows you to open a repo website in your browser. It supports Linux, Mac, and Windows, and supports GitHub, GitLab, and Bitbucket.

![Ghost in the Shell (1995)](/assets/images/ghost-in-the-shell-2.webp)

## Command Palette

The package adds three commands to the Command Palette to run `git-open`. The commands can be run from any file within your project.

### Command Palette → Git Open

Open the page for this branch on the repo website.

### Command Palette → Git Open: Commit

Open the current commit in the repo website.

### Command Palette → Git Open: Issue

Open the current issue in the repo website.

## NeoVintageous integration

If you use [NeoVintageous](https://github.com/NeoVintageous/NeoVintageous) (Vim Engine), I can suggest the following mapping:

```vim
nnoremap <Leader>oo :GitOpen<CR>
```

You can also map the other commands too:

```vim
nnoremap <Leader>oc :GitOpen commit=true<CR>
nnoremap <Leader>oi :GitOpen issue=true<CR>
```

::: tip
In NeoVintageous, `gx` opens the url under your cursor in your browser.
:::
