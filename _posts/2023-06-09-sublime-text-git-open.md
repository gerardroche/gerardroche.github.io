---
tags: sublime-text git
title: GitOpen - A Sublime Text plugin
---

![Ghost in the Shell (1995)](/assets/ghost-in-the-shell-2.webp)

[Git Open](https://packagecontrol.io/packages/GitOpen) is a Sublime Text plugin that provides integration for [git-open](https://github.com/paulirish/git-open/).

There are three commands:

Command                 | Description
:---------------------- | :----------
GitOpen                 | Open the page for this branch on the repo website.
GitOpen:&nbsp;Commit    | Open the current commit in the repo website.
GitOpen:&nbsp;Issue     | Open the current issue in the repo website.

If you use [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous) (Vim for Sublime Text) set some mappings:

```vim
nnoremap <leader>oo :GitOpen<CR>
nnoremap <leader>oc :GitOpen commit=true<CR>
nnoremap <leader>oi :GitOpen issue=true<CR>
```

A incredibly useful simple tool.
