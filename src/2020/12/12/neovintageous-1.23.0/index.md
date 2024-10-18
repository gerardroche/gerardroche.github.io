---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.23.0
lastUpdated: false
---

# NeoVintageous 1.23.0

NeoVintageous 1.23.0 has been released. The highlights are granular control of keys, ctrl keys are on by default, new split view and jump to definition command, and other minor enhancements.

## CTRL keys on by default

To toggle control keys on and off use the Command Palette command:

```console
NeoVintageous: Toggle CTRL keys
```

Or you can use the new granular control of keys feature, see below.

## Granular control of keys

By default NeoVintageous handles all keys, but you can delegate the handling of most keys back to Sublime Text by specifying which keys should be ignored. 

For example to use `ctrl+f` for find (native ST behaviour):

```json
"vintageous_handle_keys": {
    "<C-f>": false
}
```

Keys can be delegated by mode e.g. `i_<C-w>`, `v_<C-w>`. The following
will only delegate `<C-w>` back to ST from insert mode and visual mode:

```json
"vintageous_handle_keys": {
    "i_<C-w>": false,
    "v_<C-w>": false
}
```

The valid mode prefixes are:

    n_ - Normal
    i_ - Insert
    v_ - Visual
    V_ - Visual line
    b_ - Visual block
    s_ - Select

No prefix implies all modes.

Any keybinding defined in [Defaut.sublime-keymap](https://github.com/NeoVintageous/NeoVintageous/blob/master/Default.sublime-keymap) that has a "nv_handle_key" context can be configured to delegate back to ST.

## Sneak case-sensitivity

A new setting has been added for Sneak plugin to support control of case sensitivity.

```json
{
    "vintageous_sneak_use_ic_scs": 0
}
```

Value | Description
----- | -----------
`0` | Always case-sensitive
`1` | Case sensitivity is determined by `'ignorecase'` and `'smartcase'`.

Read [the curious case of Vim search](/2020/12/11/the-curious-case-of-vim-search/) which explains the `'ignorecase'` and `'smartcase'` options and how to use them.

## Split view and jump to definition

The new command `<C-w><C-]>` splits a view and jumps to the definition under the cursor. This is a compliment to the existing `ctrl-]` jump to the definition command.

## Delete all characters before cursor

The new command `<C-u>` (insert mode) deletes all entered characters before the cursor in the current line.

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/)
* [NeoVintageous 1.23.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.23.0)
