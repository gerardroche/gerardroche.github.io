---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.13.0
lastUpdated: 2023-06-16T10:33:00+01:00
---

# NeoVintageous 1.13.0

NeoVintageous 1.13.0 has just been released. The highlights of this release are [more multiple cursor enhancements](/2019/05/09/neovintageous-1.12.0/), indentation commands enhancements, and new search motions.

## Multiple cursors

There are two new keys and one new setting:

* `<C-n>` start multiple cursor
* `d` delete selection and enter normal mode
* `'vintageous_multi_cursor_exit_from_visual_mode'` (default true)

If `'vintageous_multi_cursor_exit_from_visual_mode'` is set to false, then pressing the quit key (`<Esc>` or `J`) in visual mode will not quit and delete all existing cursors. Useful if you want to go back to normal mode, and still be able to operate on all the cursors. When false both `<Esc>` and `J` behave the same as the `v` command.

command | description
------- | -----------
`<C-n>` or `gh` | Start multiple cursor.
`<C-n>` or `j` | Add next match.
`<C-x>` or `l` | Skip next match.
`<C-p>` or `k` | Remove current match and go back on previous.
`<Esc>` or `J` | Quit and enter normal mode.
`v` | Enter normal mode.
`A` | Select all matches.
`c` | Delete selection and enter insert mode.
`d` | Delete selection and enter normal mode.
`s` | Delete selection and enter insert mode.
`i` | Enter insert mode at end of selections.
`I` | Enter insert mode at start of selections.

## Indentation commands

All shift and indent commands now support multiple cursors, visual blocks, and always finish with the cursor on the first non-blank. The commands include:

command | description
------- | -----------
`>{motion}` | shift `{motion}` lines rightwards
`>>` | shift `[count]` lines rightwards
`<{motion}` | shift `{motion}` lines leftwards
`<<` | shift `[count]` lines leftwards
`={motion}` | re-indent `{motion}` lines
`==` | re-indent `[count]` lines

For example, to indent the current paragraph press `>}` and to re-indent it press `=}`. You can use any motion e.g. `>G` to indent from here to the end of the file.

Instead of using a motion you can visually select the text and press `>`, `<`, or `=` to shift rightwards, shift leftwards, or re-indent.

Here's a great [five minute Vimcast](http://vimcasts.org/episodes/indentation-commands/) that covers indentation command basics. Note that the vimscript features mentioned in the Vimcast are not supported, and the suggested mappings need to be formatted as follows:

```vim
nnoremap <D-[> <lt><lt>
nnoremap <D-]> >>
vnoremap <D-[> <lt>gv
vnoremap <D-]> >gv
```

The `<D-..>` key is the **super-key**, also known as command-key on OSX, and window-key on Windows.

The super-keys are disabled by default, use the Command Palette to enable them:

**Command Palette → NeoVintageous: Toggle SUPER keys**

Also note that super-keys are sometimes shadowed by OS specific key bindings, this would mean that Sublime won't receive those key events, in which case you'll need remove the OS specific key binding so that Sublime receives the key event for that key binding.

## New motions

* `gn` search forward for the last used search pattern.
* `gN` like `gn` but searches backward, like with `N`.

Supported searches include:

* `/` search forward
* `?` search backward
* `*` search occurrence forward
* `#` search occurrence backward

Both `gn` and `gN`, like all motions, support operators like `c` and `d` too: `cgn`, `dgn`.

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.13.0)
