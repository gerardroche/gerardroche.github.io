---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.14.0
---

NeoVintageous [1.14.0](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.14.0) is out.

This release added support for mapping `super+[` (`<D-[>`) and `super+]` (`<D-]`).

You could for example use them to indent and unindent, and retain visual mode when operation is executed in visual mode:

```viml
nnoremap <D-[> <lt><lt>
nnoremap <D-]> >>
vnoremap <D-[> <lt>gv
vnoremap <D-]> >gv
```

The super-keys are disabled by default, you can enable them by editing your settings via `Menu > Preferences > Settings` or by the Command Palette. To use the command palette:

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
* [changelog](https://github.com/NeoVintageous/NeoVintageous/blob/master/CHANGELOG.md#1140---2019-05-14).
