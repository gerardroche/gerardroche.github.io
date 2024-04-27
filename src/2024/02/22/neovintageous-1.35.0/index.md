---
post: true
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.35.0
lastUpdated: 2024-03-04T19:33:26+00:00
---

# NeoVintageous 1.35.0

Introducing NeoVintageous 1.35.0! The highlight is a new documentation website.

## Documentation

To check out the new documentation site, visit [neovintageous.github.io](https://neovintageous.github.io/).

## Alternate buffer register

The `:buffer` command now supports the *alternate buffer register*. For example, to edit the alternate buffer:

```vim
:b#
```

::: info
This the same as `CTRL-^` command (`CTRL-6` on some keyboards).
:::

You can list the buffers with `:ls` and you can display the type and contents of all the numbered and named registers with the `:registers`. The type can be one of "c" for characterwise text, "l" for linewise text, "b" for blockwise-visual text.

## Added

- Add alternate buffer indicator (`#`) for `:ls`

## Fixed

-  z scroll commands do not accept count
- `gx` doesn't work for localhost with ports
