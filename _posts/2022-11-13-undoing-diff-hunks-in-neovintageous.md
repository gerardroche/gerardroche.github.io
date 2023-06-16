---
tags: vim sublime-text neovintageous git
title: Undoing diff hunks in NeoVintageous
last_modified_at: 2023-06-16T03:46:00+01:00
---

The ability to revert a diff hunk was added in Sublime Text 4.  You can access it through the Command Palette and the Context Menu i.e. right mouse click.

**Command Palette → History: Revert Hunk**

**Context Menu → Revert Diff Hunk**

For quicker access, create a vim NeoVintageous mapping.  I like to map it as `<leader>hu`.  This is the same mapping used by the popular vim plugin [vim-gitgutter](https://github.com/airblade/vim-gitgutter#hunks).

Command Palette → NeoVintageous: Open RC File

```vim
nnoremap <leader>hu :RevertHunk<CR>
```

Command Palette → NeoVintageous: Reload RC File

## Jumping to diffs

You can jump between diff hunks with `]c` and `[c`.  See [jumping to diffs](/2023/05/31/neovintageous-jumping-to-diffs/).

*Support for jumping to diffs was added in Sublime build 3189. In previous versions you need [GitGutter](https://github.com/jisaacks/GitGutter).*

## Further reading

* `:help neovintageous`
* `:help [c`
* `:help ]c`
