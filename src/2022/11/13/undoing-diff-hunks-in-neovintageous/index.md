---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous git
title: Undoing diff hunks in NeoVintageous
lastUpdated: false
---

# Undoing diff hunks in NeoVintageous

The ability to revert a diff hunk was added in Sublime Text 4.  You can access it through the Command Palette and the Context Menu i.e. right mouse click.

**Command Palette → History: Revert Hunk**

**Context Menu → Revert Diff Hunk**

For quicker access, create a vim NeoVintageous mapping.  I like to map it as `<leader>hu`.  This is the same mapping used by the popular vim plugin [vim-gitgutter](https://github.com/airblade/vim-gitgutter?ref=blog.gerardroche.com#hunks).

Command Palette → NeoVintageous: Open RC File

```vim
nnoremap <leader>hu :RevertHunk<CR>
```

Command Palette → NeoVintageous: Reload RC File

## Jumping to diffs

You can jump between diff hunks with `]c` and `[c`.  See [jumping to diffs](/2023/05/31/neovintageous-jumping-to-diffs/).

::: info Support for jumping to diffs was added in Sublime Text 3 build 3189. Support for older versions require [GitGutter](https://github.com/jisaacks/GitGutter?ref=blog.gerardroche.com).
:::

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
