---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.19.0
last_modified_at: 2023-06-16T03:46:00+01:00
---

NeoVintageous 1.19.0 has just been released. The highlights are the new vim modeline feature, improved marks, new shell commands, new options, new keys, and new aliases.

## Ch-ch-ch-ch-Changes

There are two notable changes:

1. The `'ignorecase'` option is now **false** by default.
2. The `'winaltkeys'` option is now "**menu**" by default.

To change the options back to the previous defaults open your RC file and add:

```vim
set ignorecase
set winaltkeys=yes
```

## Vim modeline

The new vim modeline feature allows you to automatically set options with the `:set` command.

It's easiest to illustrate with an example. For example, if you add the following modeline to the top or bottom of your file:

```py
# vim: tw=30 ts=2 nu
```

It will ensure the file is always loaded with `textwidth=30`, `tabstop=2` (tab size) and the `number` option (gutter line numbers) enabled.

A modeline can be prefixed by any text, usually a comment.

```php
// vim: tw=30 ts=2 nu
```

The following options are supported:

```vim
'autoindent'
'belloff'
'hlsearch'
'ignorecase'
'incsearch'
'list'
'magic'
'menu'
'minimap'
'modeline'
'modelines'
'number'
'sidebar'
'spell'
'statusbar'
'winaltkeys'
'wrap'
'wrapscan'
```

Modeline is enabled by default and replaces sublime-specific modelines.

See `:help modeline` for detailed documentation.

## Marks

The most significant improvement to marks is how they now adjust their position with edits. To set a mark at the current cursor position (does not move the cursor, this is not a motion command):

```
m{a-z}
```

Jumping to a mark can be done in two ways:

1. With \` (backtick): The cursor is positioned at the specified location and the motion is exclusive.
2. With ' (single quote): The cursor is positioned on the first non-blank character in the line of the specified location and the motion is linewise.

For example, set mark "t":

```
mt
```

And then you can jump to the mark with

```
`t
```

or

```
't
```

## New shell commands


### :read

```vim
:[range]r[ead] !{cmd}
```

Execute `{cmd}` and insert its standard output below the cursor or the specified line. `{cmd}` is executed like with `:!{cmd}`. For example to insert the output from `:!ls` below the current line:

```vim
:read !ls
```

And to put it below line 9:

```vim
:9read !ls
```

The shell that is used in the command part (`:!{cmd}`) can be configured, the default is `$SHELL` or "sh" and on Windows it's "cmd.exe":

```vim
set shell=/bin/bash
```

To start a new shell use the `:shell` command, the program used to start the shell can be configured with the `vintageous_terminal` setting e.g. to use GNOME Terminal update your settings with:

```json
{
    "vintageous_terminal": "gnome-terminal"
}
```

## New options

Several new options are available:

option | default
------ | -------
`'textwidth'` `'tw'` | `wrap_width` sublime setting
`'tabstop'` `'ts'` | `tab_size` sublime setting
`'expandtabs'` `'et'` | `translate_tabs_to_spaces` sublime setting

**`'expandtabs'` has since been renamed `'expandtab'`**

## New keys

All of the new keys can be mapped!

* `<C-bs>` alias to `h`
* `<C-home>` alias to `gg`
* `<C-left>` alias to `B`
* `<C-pagedown>` alias to `gt`
* `<C-pageup>` alias to `gT`
* `<C-right>` alias to `W`
* `<C-space>`
* `<D-.>`
* `<D-S-.>`
* `<D-bs>`
* `<D-cr>`
* `<D-del>`
* `<D-down>`
* `<D-home>`
* `<D-left>`
* `<D-pagedown>`
* `<D-pageup>`
* `<D-right>`
* `<D-space>`
* `<D-up>`
* `<Enter>` alias to `<CR>`
* `<M-left>` alias to `h`
* `<M-right>` alias to `l`
* `<Return>` alias to `<CR>`
* `<S-down>` alias to `CTRL-f`
* `<S-left>` alias to `b`
* `<S-right>` alias to `w`
* `<S-up>` alias to `CTRL-b`
* `<insert>` alias to `i`

## Further reading

* `:help nv`
* `:help modeline`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.19.0)
