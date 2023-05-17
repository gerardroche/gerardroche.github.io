---
tags: neovintageous sublime-text vim
title: NeoVintageous - Edit neovintageousrc
---

![Wonder Boys (2000)](/assets/2023-05-17-wonder-boys.webp)

You can use the Command Palette **NeoVintageous: Open RC File** to edit the neovintageousrc file. A mapping is quicker. And why not. I recommend `<leader>en`. A mnumonic is "edit neovintageous". [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/) and reload your rc file:

```vim
nnoremap <leader>en :Neovintageous action=open_rc_file<CR>
```
