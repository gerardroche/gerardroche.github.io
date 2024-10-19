---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.24.0
lastUpdated: false
---

# NeoVintageous 1.24.0

NeoVintageous 1.24.0 has been released. This was a small release. The highlights are support for window splitting in the latest version of Origami and support for the `:inoremap` command.

## Window splitting

Splitting windows in NeoVintageous requires the the additional package [Origami](https://packagecontrol.io/packages/Origami?ref=blog.gerardroche.com).

> Origami is a new way of thinking about panes in Sublime Text: you tell Sublime
  Text where you want a new pane, and it makes one for you. It works seamlessly
  alongside the built-in layout commands.

This enhances NeoVintageous with support for window splitting commands such as:

```
CTRL-W CTRL-S
CTRL-W s
CTRL-W S
:sp[lit] [file]
```

Split current window in two. The result is two views on the same file. See `help CTRL-W_s` for more details.

```
CTRL-W CTRL-V
CTRL-W v
CTRL-W V
:vs[plit] [file]
```

Like `:split` but split vertically. See `:help CTRL-W_v` for more details.

## `:inoremap {lhs} {rhs}`

Map the key sequence `{lhs}` to `{rhs}` for the modes where the map command applies.  Disallow mapping of `{rhs}`, to avoid nested and recursive mappings.  Often used to redefine a command.

A few keys are currently mappable in insert mode: `<Esc>`, `<C-[>`, `<C-l>`, `<C-c>`, `<C-w>`, `<C-x>`, `<C-u>`

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
* [NeoVintageous 1.24.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.24.0?ref=blog.gerardroche.com)
