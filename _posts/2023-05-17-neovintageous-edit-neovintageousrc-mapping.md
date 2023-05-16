---
tags: neovintageous sublime-text vim
title: NeoVintageous - Edit neovintageousrc mapping
---

![Wonder Boys (2000)](/assets/2023-05-17-wonder-boys.webp)

To edit the NeoVintageous configuration file you can use the Command Palette **NeoVintageous: Open RC File**. A mapping is quicker. And why not. I recommend `<leader>en`. A mnumonic is "edit neovintageous". [Create the mapping and reload your rc file](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
nnoremap <leader>en :Neovintageous action=open_rc_file<CR>
```
