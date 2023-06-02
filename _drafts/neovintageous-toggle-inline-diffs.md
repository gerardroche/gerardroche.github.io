---
tags: vim sublime-text neovintageous git
title: NeoVintageous - Toggle Inline Diffs
---

You can toggle an [inline diff](https://www.sublimetext.com/docs/incremental_diff.html) by right clicking on a modified region of a file and selecting **Show/Hide Diff Hunk**. [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
noremap <leader>/ :ToggleInlineDiff<CR>
```
