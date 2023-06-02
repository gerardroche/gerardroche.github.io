---
tags: vim sublime-text neovintageous
title: NeoVintageous - Reveal in Side Bar
---

![The Prestige (2006)](/assets/2023-05-18-the-prestige.webp)

You can reveal a file in the sidebar via a right mouse click and selecting **Reveal in Side Bar** but why work so hard. [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
nnoremap <leader><leader> :RevealInSideBar<CR>
```

Pair it with a [Side Bar Toggle](/2023/05/15/neovintageous-toggle-sidebar/) mapping to up your power user game.

