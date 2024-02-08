---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.17.0
lastUpdated: 2023-06-16T10:42:00+01:00
---

# NeoVintageous 1.17.0

NeoVintageous 1.17.0 has just been released. The highlights of this release are indent object enhancements, unimpaired enhancements, new spell checking commands, new options, and support for `:set {option}` in the neovintageousrc file.

## :set

`:set {option}` is now supported in the neovintageousrc file.

command | description
------- | -----------
`:set {option}` | set option
`:set {option}!` | toggle option
`:set {option}?` | show option
`:set no{option}` | switch option off

option | description
------ | -----------
`'belloff'` | specifies for which events the bell will not be rung ("all" or "")
`'incsearch'` | highlight the pattern matches as it was typed so far
`'menu'` | show the menu
`'minimap'` | show the mini map
`'number'` | show line numbering
`'sidebar'` | show the side bar
`'spell'` | enable spell checking
`'statusbar'` | show the status bar
`'winaltkeys'` | enable alt key mapping ("yes", "no", or "menu")
`'wrap'` | enable text wrapping
`'wrapscan'` | searches wrap around the end of the file e.g. applies to `*`, `#`, `n`, `N` (searches), and `]c` and `[c` (jump to diffs)

## Indent object enhancements

command | description
------- | -----------
`vai` | (text-object) an indentation level and line above
`vii` | (text-object) inner indentation level (no line above)
`vaI` | (text-object) an indentation level and lines above/below
`viI` | (text-object) inner indentation level (no lines above/below)

## Unimpaired enhancements

command | description
------- | -----------
`yoh`, `[oh`, and `]oh` | toggle, switch on, and switch off `'hlsearch'`
`yoi`, `[oi`, and `]oi` | toggle, switch on, and switch off `'ignorecase'`
`yo[acehilmnstw]` | toggle option

## Spell checking commands

command | description
------- | -----------
`[s` | move to prev misspelled word after the cursor
`]s` | move to next misspelled word after the cursor
`z=` | for the word under/after the cursor suggest correctly spelled words
`zg` | add word under the cursor as a good word to spell checking dictionary
`zug` | undo `zg`, remove the word from the entry in spell checking dictionary
`:spellgood {word}` | add `{word}` as a good word to spell checking
`:spellundo {word}` | remove `{word}` from good word spell checking

## New aliases

alias | command | description
----- | ------- | -----------
`<A-...>` | `<M-...>` | ALT keys
`<Del>` | `x` | delete \[count\] characters under and after the cursor
`[count]gqgq` | `gqq` | format the current line with a count format that many lines

## Other enhancements

* All occurrences are now highlighted on incremental searches
* Allow plugins to be fully disabled by boolean setting `enable_{plugin_name}`
* Support for function keys 13-20 in mappings e.g. `<f13>`, `<C-f16>`, `<C-S-f20>`
* `[count]gqq` format the current line with a count format that many lines

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.17.0)
