---
post: true
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.34.0
lastUpdated: 2024-02-24T10:41:23+00:00
---

# NeoVintageous 1.34.0

Introducing NeoVintageous 1.34.0! This is a small release, it adds more support for the Targets plugin and some minor enhancements and fixes.

## Targets

Support for "In Pair" and "A Pair" targets has ben added. These pair text objects function similarly to the built-in ones like `i)`.

- `(` `)` `b` (targets parentheses)
- `{` `}` `B` (targets curly braces)
- `[` `]` (targets square brackets)
- `<` `>` (targets angle brackets)
- `t` (targets tags)

Other targets like `"`, `'`, `_`, etc. are also supported.

The "In Pair" target selects inside a pair of targets.

The "A Pair" target selects including the targets.

Some targets operate on a single line, like quote targets, and some targets operator on multiple lines, like parentheses targets.

These text objects override default text object behaviours to allow seeking for the next pair in the current line to the right when the cursor is not inside a pair. If you prefer the default behaviours, you can disable the Targets plugin.

::: details
Command Palette → Preferences: NeoVintageous Settings
```jsonl
"vintageous_enable_targets": false
```
:::

### Example

Place your cursor anywhere before, on, or inside a target.

```
# Try vi", yi", ci", di"
xxxxxxx "yyyyyyyyyyyy"
         └─── vi" ──┘

# Try va", ya", ca", da"
xxxxxxx "yyyyyyyyyyyy"
        └──── va" ───┘
```

## Added

- Support for `[count]` in `ai` and `aI` commands (Indent Object)
- Support for `block_caret` in insert mode
- Add `zO`, alias of `zo`, open fold
- Add `zC`, alias of `zC`, close fold

## Fixed

- Package Control 4 fix for updating orphaned conflicting packages
- `CTRL-n` / `CTRL-p` and `CTRL-j` / `CTRL-k` don't work for some overlays in some cases
- Closing folds, e.g., `zc`, when the fold is at the EOL doesn't work
- Status indicators show a visible file as hidden when multiple tabs are visible
- `f9` / `f12` keys do not work in normal mode
