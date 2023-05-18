---
tags: neovintageous sublime-text vim
title: NeoVintageous - Goto Symbol
---

![Blade Runner (1982)](/assets/blade-runner.webp)

You can go to any symbol in a project via *Menu &gt; Goto &gt; Goto Symbol in Project* but why work so hard. [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
noremap <D-i> :GotoSymbolInProject<CR>
```

Unlike many of my mappings, Here I use `noremap` instead of `nnoremap`. `noremap` applies to Normal, Visual, and Operator modes. `nnoremap` only applies to Normal mode. See `:help map-commands`.

You can go to any symbol in a current file via *Menu &gt; Goto &gt; Goto Symbol*:

```vim
noremap <D-I> :ShowOverlay overlay=goto text=@<CR>
```

For this mapping I use the uppercase `<D-I>` key. Keys are case-sensitive in Sublime Text i.e. using the <kbd>shift</kbd> key produces different key events.

Read [NeoVintageous Super Keys](/2022/09/22/neovintageous-super-keys/#case-sensitivity) for help on super key usage.
