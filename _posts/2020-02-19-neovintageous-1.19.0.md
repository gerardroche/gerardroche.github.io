---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.19.0
---

NeoVintageous 1.19.0 is now [released](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.19.0). The highlights are **vim modeline**, better **marks**, new **shell commands**, more **options**, **keys**, and new **aliases**.

There are two notable changes in this release:

* `'winaltkeys'` option is now "**menu**" by default.
* `'ignorecase'` option is now **false** by default.

To change the options back to the previous default open your RC file and add:

```
set winaltkeys=yes
set ignorecase
```

## Vim modeline

The new vim modeline feature allows you to automatically set options with the `:set` command when you start editing a file. It is enabled by default and replaces the now removed sublime-specific modelines feature.

A contrived example is to add the following to the top of a file which will ensure the file always loads with **textwidth=30**, **tabstop=2** (**tab size**) and the **number** option enabled *(gutter line numbers)*:

```
# vim: tw=30 ts=2 nu
```

A modeline can be prefixed by any text: `// vim: ...`

All of the following options are supported: *'autoindent'*, *'belloff'*, *'hlsearch'*, *'ignorecase'*, *'incsearch'*, *'list'*, *'magic'*, *'menu'*, *'minimap'*, *'modeline'*, *'modelines'*, *'number'*, *'sidebar'*, *'spell'*, *'statusbar'*, *'winaltkeys'*, *'wrap'*, *'wrapscan'*.

See `:help modeline` for detailed documentation.

## Marks

The most significant improvement to marks is how they now adjust their position with edits. To set a mark at the current cursor position (does not move the cursor, this is not a motion command): **m{a-z}**.

Jumping to a mark can be done in two ways:

1. With \` (backtick): The cursor is positioned at the specified location and the motion is exclusive.
2. With ' (single quote): The cursor is positioned on the first non-blank character in the line of the specified location and the motion is linewise.

For example, set mark "t" (**mt**), and then you can jump to the mark with **\`t** or **'t**.

## New shell commands

**`:[range]r[ead] !{cmd}`**

Execute `{cmd}` and insert its standard output below the cursor or the specified line. `{cmd}` is executed like with `:!{cmd}`. For example to insert the output from `:!ls` below the current line:

```
:read !ls
```

And to put it below line 9:

```
:9read !ls
```

The shell command `:!{cmd}` can be configured, the default is `$SHELL` or "sh", and on Windows "cmd.exe":

```
set shell=/bin/bash
```

To ***start*** a *new* shell run `:shell`. The program used to start the shell can be configured by the setting `vintageous_terminal` (note that this is a setting, not an option, settings are normal ST settings **Menu > Preferences > Settings**), to use **gnome-terminal**:

```
{
    "vintageous_terminal": "gnome-terminal"
}
```

## Options

Several new options are available:

option | default
------ | -------
`'textwidth'` `'tw'` | `wrap_width` sublime setting
`'tabstop'` `'ts'` | `tab_size` sublime setting
`'expandtabs'` `'et'` | `translate_tabs_to_spaces` sublime setting

## Keys

All of the new keys can now be mapped!

New keys:

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

* [Changelog](https://github.com/NeoVintageous/NeoVintageous/blob/master/CHANGELOG.md#1190---2020-02-19).
* `:help nv`
* `:help modeline`
