---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Reveal in Side Bar
excerpt: "You can reveal a file in the sidebar via a right mouse click and selecting Reveal in Side Bar, but why work so hard."
lastUpdated: false
---

# NeoVintageous - Reveal in Side Bar

![The Prestige (2006)](/assets/images/2023-05-18-the-prestige.webp)

You can reveal a file in the sidebar via a right mouse click and selecting Reveal in Side Bar, but why work so hard. [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
let mapleader=,
nnoremap <leader><leader> :RevealInSideBar<CR>
```

A new advanced reveal in side bar command was added in [v1.31.0](/2023/07/13/neovintageous-1.31.0/).  Let's take a look at how to use it.

## Advanced reveal side bar

The [new](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.31.0) reveal in side bar command does a number of things that the built-in Sublime Text command does not.

1. Makes the side bar visible if it's not already visible
2. Puts focus on the side bar

Here is an example using it in a mapping.

```vim
let mapleader=,
nnoremap <leader><leader> :Neovintageous action=reveal_side_bar<CR>
```

To use the same mapping to put the focus back on the view, when the side bar has focus.

Menu → Preferences → Key Bindings

```js
{
    "keys": [",", ","],
    "command": "focus_group",
    "args": {"group": 0},
    "context": [
        {"key": "control", "operand": "sidebar_tree"}
    ]
},
```

The reason the key binding is required is because NeoVintageous does not handle keys when the side bar has focus.

Pair it with a [toggle side bar mapping](/2023/05/15/neovintageous-toggle-sidebar/) to up your power user game.

I hope this has been helpful.  Take it easy, my friends.
