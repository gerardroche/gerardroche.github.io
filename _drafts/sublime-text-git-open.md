---
tags: sublime-text git
title: GitOpen - A Sublime Text plugin
---

[GitOpen](https://packagecontrol.io/packages/GitOpen) is a Sublime Text plugin that provides integration for [git-open](https://github.com/paulirish/git-open/).

Command                         | Description
:------------------------------ | :----------
**Git&nbsp;Open&nbsp;**         | Open the page for this branch on the repo website
**Git&nbsp;Open:&nbsp;Commit**  | Open the current commit in the repo website
**Git&nbsp;Open:&nbsp;Issue**   | If this branch is named like issue/\#123, this will open the corresponding issue in the repo website

## Setup

1. Install [`git-open`](https://github.com/paulirish/git-open).
2. Install [GitOpen](https://packagecontrol.io/packages/GitOpen) via Package Control.

Add your preferred key bindings.

**Menu → Preferences → Key Bindings**

```js
{
    "keys": ["ctrl+o"],
    "command": "git_open"
},
{
    "keys": ["ctrl+shift+o"],
    "command": "git_open",
    "args": {
        "commit": true
    }
},
{
    "keys": ["alt+shift+o"],
    "command": "git_open",
    "args": {
        "issue": true
    }
},
```

Add your preferred [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous) mappings.

**Command Palette → NeoVintageous: Open RC File**

```vim
nnoremap <leader>oo :GitOpen<CR>
nnoremap <leader>oc :GitOpen commit=true<CR>
nnoremap <leader>oi :GitOpen issue=true<CR>
```
