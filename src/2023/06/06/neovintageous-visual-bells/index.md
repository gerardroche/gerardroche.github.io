---
post: true
sidebar: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Visual Bells
lastUpdated: 2023-07-01T00:31:52+01:00
---

# NeoVintageous - Visual Bells

NeoVintageous supports three types of vim visual bell.

![Vanilla Sky (2001)](/assets/images/vanilla-sky.webp)

## Settings

The setting [`vintageous_bell`](https://neovintageous.github.io/reference/settings#vintageous-bell) allows you to choose the style for the visual bell. The available options are:

- "blink" (default)

  This makes the highlighted-line flash.

- "view"

  This makes the active view flash.

- "views"

  This makes all visible views flash.

::: details Example
Command Palette → Preferences: Settings

```jsonl
"vintageous_bell": "blink"
```
:::

## Disable

To disable visual bells, set the `'belloff'` option to "all".

Command Palette → NeoVintageous: Open neovintageous file

```vim
set belloff=all
```

Command Palette → NeoVintageous: Reload neovintageous file

## Colors

There are two colour schemes available: "dark" (default) and "light"

```jsonl
"vintageous_bell_color_scheme": "dark"
```
