---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.11.0
lastUpdated: false
---

# NeoVintageous 1.11.0

NeoVintageous 1.11.0 has just been released. A good milestone of 80% test code coverage, yay! The highlights of this release are enhanced mapping support, marks in ranges, and toggle Super and Ctrl key commands.

## Advanced mappings

Mappings now accept ex commands with leading key sequences. For example, consider the following mappings:

```vim
nnoremap <leader>s) vi):sort iu<CR>
nnoremap <leader>s] vi]:sort iu<CR>
nnoremap <leader>si vii:sort iu<CR>
nnoremap <leader>sp vip:sort iu<CR>
vnoremap <leader>s :sort iu<CR>
```

Special keys in mappings are now case-insensitive: `<space>`, `<Space>`, and `<SPACE>` are equivalent, as are `<CR>`, `<cr>`, etc.

You can also map digits:

```vim
nnoremap <leader>0 :Neovintageous action=toggle_side_bar<CR>
```

## Marks in ranges

You can mark positions in a file by pressing `m{a-z}` and then jump to that position by pressing `'{a-z}`.

The marked positions can be used as line ranges in ex mode.

For example, suppose you want to substitute the pattern "this" with "that" between two marks. If the first mark is `ma`, and the second mark is `mb`, then they can be used as an ex mode range:

```vim
:'a,'bs/this/that/
```

## Toggle super and control keys

Two commands to toggle both **Ctrl** and **Super** keys on or off are now available via the Command Palette:

```console
NeoVintageous: Toggle CTRL keys
```

```console
NeoVintageous: Toggle SUPER keys
```

## Other notable additions

* Added `z.` redraw line at center of window and put cursor at first non-blank.
* Added `[{`, `]}`, `[(`, and `])` in VISUAL mode.
* Added `:split [file]` completions (split commands require the [Origami](https://packagecontrol.io/packages/Origami?ref=blog.gerardroche.com) package. tip: checkout the windowing split commands `CTRL-w s` aka `:split` and `CTRL-w v` aka `:vsplit`).
* Added support for the `Shift+Space` special key (`<S-Space>`) in mappings.

## Further reading

* [Toggle sidebar](/2019/02/12/toggle-sidebar/)
* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
* [NeoVintageous 1.11.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.11.0?ref=blog.gerardroche.com)
