---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.35.0
lastUpdated: 2024-02-24T10:41:23+00:00
---

# NeoVintageous 1.35.0

Introducing NeoVintageous 1.35.0! The highlight is a new documentation site.

## Documentation

The documentation has been vastly improved.

To check it out, visit [neovintageous.github.io](https://neovintageous.github.io/).

## Alternate buffer register

The alternate buffer register is now supported in the `:buffer` command. You can use it to edit the alternate buffer:

```vim
:b#
```

The edit alternate buffer command is the same as `CTRL-^` command (`CTRL-6` on some keyboards).

You can list the buffers with the `:ls` command.

You can also display the type and contents of all the numbered and named registers with the `:registers` command. The type can be one of:
- "c" for characterwise text
- "l" for linewise text
- "b" for blockwise-visual text

```vim
:registers
```

## Added

- Add alternate buffer indicator (`#`) for `:ls`

## Fixed

-  z scroll commands do not accept count
- `gx` doesn't work for localhost with ports
