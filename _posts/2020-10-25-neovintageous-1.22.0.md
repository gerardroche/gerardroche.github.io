---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.22.0
---

NeoVintageous 1.22.0 has been released. The highlights are some minor enhancements and support for ST4.

## 'scrolloff' 'so' option

Sublime Text build 4075 a new setting `scroll_context_lines` allows setting a number of context lines to show when scrolling to reveal. This affects all selection changes, like selection dragging, page-up/page-do and moving the caret.

```vim
:set scrolloff=8
```

## 'relativenumber' 'rnu' option

Sublime Text build 4075 a new setting `relative_line_numbers` will draw each line number as the distance from the current line.

The new options `'relativenumber'` `'rnu'` `'norelativenumber'` `'nornu'` allow turning relative line numbers on and off.

```vim
:set relativenumber
```

Three Unimpaired commands have been added to enable, disable, and toggle relative numbers: `[or`, `]or`, `yor`.

## ST4 support

NeoVintageous now fully supports ST4 and is backwards compatible with ST3.

One change that might impact some users is that all NeoVintageous commands that started with an underscore have been prefixed with "nv_". You won't need to do anything unless you've made customisations that use these commands. The reason for this change is commands starting with an underscore are now ignored in ST4.

Here are some some examples of changed commands:

Old | New
last_modified_at: 2023-06-16T03:46:00+01:00
--- | ---
`_enter_normal_mode` | `nv_enter_normal_mode`
`_enter_insert_mode` | `nv_enter_insert_mode`
`_nv_feed_key` | `nv_feed_key`
`_vi_w` | `nv_vi_w`
`_vi_w` | `nv_vi_w`

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.22.0)
