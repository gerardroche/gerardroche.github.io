---
tags: neovintageous sublime-text vim git
title: Undoing diff hunks in NeoVintageous
---

The ability to revert a diff hunk was added in Sublime Text 4. You can access it through the Command Palette command "History: Revert Hunk." For quicker access, you can use a custom NeoVintageous mapping.

I like to map undoing hunks as `<leader>hu`. This is the mapping used by [vim-gitgutter](https://github.com/airblade/vim-gitgutter#hunks), the popular vim plugin.

```viml
let mapleader=,
nnoremap <leader>hu :RevertHunk<CR>
```

To edit your RC file, open it via the Command Palette command.

```
NeoVintageous: Open RC File
```

To reload your RC file, use the Command Palette command.

```
NeoVintageous: Reload RC File
```

## Jumping to diffs

You can jump to the next and previous diff with the commands `]c` and `[c`.[^1] A count can also be used, e.g., `2]c`.

---

[^1]: Support for jumping to diffs was added in Sublime build 3189. In previous builds, you'll need the [Git Gutter](https://github.com/jisaacks/GitGutter) plugin.
