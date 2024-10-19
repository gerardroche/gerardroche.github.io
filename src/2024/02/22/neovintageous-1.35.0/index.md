---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: "NeoVintageous 1.35.0 is now available with a new documentation website and alternate buffer register"
excerpt: "In this version, a new documentation website has been created from scratch and with the new alternate buffer register you can easily toggle between two Vim buffers."
lastUpdated: false
---

# NeoVintageous 1.35.0 is now available with a new documentation website and alternate buffer register

In this version, a new documentation website has been created from scratch and with the new alternate buffer register you can easily toggle between two Vim buffers.

## NeoVintageous documentation website

Check out the new documentation website at [neovintageous.github.io](https://neovintageous.github.io/?ref=blog.gerardroche.com).

## Alternate buffer register

The `:buffer` command now supports the alternate buffer register (`#`).

To edit the Alternate Buffer `:b#` or `CTRL-^`.

::: info `CTRL-^` is `CTRL-6` on some keyboards.
:::

List Vim buffers with `:ls` and display Vim registers with `:registers`. The type of register is displayed as

- "c" for characterwise text
- "l" for linewise text
- "b" for blockwise-visual text

## Fixed

- `z*` scroll commands do not accept count
- `gx` now works for localhost with ports

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
* [NeoVintageous 1.35.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.35.0?ref=blog.gerardroche.com)
