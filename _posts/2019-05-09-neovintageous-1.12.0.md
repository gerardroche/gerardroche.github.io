---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.12.0
---

NeoVintageous 1.12.0 has just been released. The highlights of this release are new visual bell styles, multiple cursor enhancements, visual block enhancements, new ex mode commands, new motions, and lots of bug fixes.

## Visual Bells

There are three bell styles: **view**, **views**, **blink** (default), and two color schemes: **light** and **dark** (default).

You can configure settings via Menu → Preferences → Settings or by the Command Palette. To use the command palette:

1. Press `Ctrl+Shift+P`
2. Select the "Preferences: Settings" command
3. Press `Enter`

Example:

```json
{
    "vintageous_bell": "view",
    "vintageous_bell_color_scheme": "dark"
}
```

## Multiple cursors

The new multiple cursor commands include `c`, `s`, and `I`. There are also several new aliases including `<C-n>`, `<C-p>`, `<C-x>`, and `v`:

* `gh` Start multiple cursor.
* `<C-n>` or `j` Add next match.
* `<C-p>` or `k` Remove current match and go to previous match.
* `<C-x>` or `l` Skip next match
* `<Esc>` or `v` Enter Normal mode.
* `c` Delete the highlighted text and start insert.
* `I` Insert text before the highlighted text.
* `s` Delete the highlighted text and start insert.
* `J` Exit multiple cursor mode.

## Visual blocks

The biggest change to visual blocks is that they now behave closer to Vim's visual block mode. For example, visual blocks now span empty lines by changing the horizontal direction of the selection.

New commands include `v` (translate to visual), `V` (translate to visual line), and lots of new motions including `$`, `0`, `^`, `_`, `b`, `B`, `e`, `E`, `g_`, `ge`, `gE`, `w`, `W`, `|`.

## Ex mode

There are four new ex mode commands:

### :nohlsearch

```vim
:noh[lsearch]
```

Stop the highlighting for the `'hlsearch'` option. It's automatically turned back on when using a search command and like all ex mode commands is mappable:

```vim
nnoremap <C-l> :nohlsearch<CR>
```

Note that Ctrl keys are disabled by default, you can use the Command Palette to toggle them on and off:

```console
NeoVintageous: Toggle CTRL keys
```

### :global

```vim
:[range]g[lobal]/{pattern}/d[elete]
```

Execute the Ex command `:delete` on the lines within `[range]` where `{pattern}` matches. For example, to delete all lines that start with a digit:

```vim
:g/^[0-9]/d
```

### :silent

```vim
:sil[ent] {command}
```

Execute commands silently. For example, use it to map commands that have output you want to ignore (support for `%` in shell commands is new in this release too):

```vim
nnoremap <leader>gs :!git status<CR>
nnoremap <leader>ga :silent !git add %<CR>
```

### :history

```vim
:his[tory]
```

Print the history of last entered commands.

## Other notable changes

* Changed: `q{0-9a-zA-Z}` now records macros per window
* Changed: Search occurrences default style is now set to "fill"
* Changed: Shell commands now support `%` (current file name)
* Added: `[count]g_`
* Added: `cge`
* Added: `cgE`
* Added: `dge`
* Added: `dgE`

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.12.0)
