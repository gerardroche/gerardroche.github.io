---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Edit neovintageousrc
description: "You can use the Command Palette NeoVintageous: Open RC File to edit the neovintageousrc file. A mapping is quicker. And why not. I recommend `<leader>en`. A mnemonic is edit neovintageous."
lastUpdated: false
---

# NeoVintageous - Edit neovintageousrc

You can use the Command Palette **NeoVintageous: Open RC File** to edit the neovintageousrc file. A mapping is quicker. And why not. I recommend `<leader>en`. A mnemonic is "edit neovintageous". [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/) and reload your rc file:

```vim
nnoremap <leader>en :Neovintageous action=open_rc_file<CR>
```

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
