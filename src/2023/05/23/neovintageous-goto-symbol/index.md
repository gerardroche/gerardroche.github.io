---
post: true
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Goto Symbol
lastUpdated: 2023-06-17T02:43:57+01:00
---

# NeoVintageous - Goto Symbol

![Blade Runner (1982)](/assets/images/blade-runner.webp)

You can go to any symbol in a project via Menu → Goto → Goto Symbol in Project, but why work so hard. [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
noremap <D-i> :GotoSymbolInProject<CR>
```

Unlike many of my sublime vim mappings, here I use `noremap` instead of `nnoremap`.  `noremap` applies to Normal, Visual, and Operator modes.  `nnoremap` only applies to Normal mode. See `:help map-commands`.

You can go  to any symbol in a current file via Menu → Goto → Goto Symbol:

```vim
noremap <D-I> :ShowOverlay overlay=goto text=@<CR>
```

For this mapping I use the uppercase `<D-I>` key.  Keys are case-sensitive in Sublime Text i.e. using the <kbd>shift</kbd> key produces different key events.

Read [NeoVintageous Super Keys](/2022/09/22/neovintageous-super-keys/) for help on super key usage.
