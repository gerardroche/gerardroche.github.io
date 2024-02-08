---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.14.0
lastUpdated: 2023-06-16T10:36:00+01:00
---

# NeoVintageous 1.14.0

NeoVintageous 1.14.0 has just been released. This release adds support for mapping `super+[` (`<D-[>`) and `super+]` (`<D-]`).

You can, for example, use them to indent, de-indent, and retain visual mode when an operation is executed in visual mode:

```vim
nnoremap <D-[> <lt><lt>
nnoremap <D-]> >>
vnoremap <D-[> <lt>gv
vnoremap <D-]> >gv
```

The super-keys are disabled by default, you can enable them by editing your settings via Menu → Preferences → Settings or by the Command Palette. To use the command palette:

1. Press `Ctrl+Shift+P`
2. Select the "Preferences: Settings" command
3. Press `Enter`

```json
{
    "vintageous_use_super_keys": true
}
```

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.14.0)
