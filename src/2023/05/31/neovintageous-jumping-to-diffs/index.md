---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous git
title: NeoVintageous - Jumping to Diffs
excerpt: "NeoVintageous has two vim commands for jumping to diff hunks. [c Jump backward to the previous start of a change. ]c Jump forwards to the next start of a change."
lastUpdated: false
---

# NeoVintageous - Jumping to Diffs

NeoVintageous has two vim commands for jumping to diff hunks:

Command | Description
:------ | :----------
<kbd>[c</kbd> | Jump backward to the previous start of a change.
<kbd>]c</kbd> | Jump forwards to the next start of a change.

Both of those take a preceding count.

With a count, it means jump that many times: `3]c` jump to the third change.

The `'wrapscan'` option applies.

The `'wrapscan'` option is enabled by default and means searches wrap around the end of the file.

## `'wrapscan'`

`'wrapscan'` applies to search commands like:

Command | Description
:------ | :----------
`/` | Search.
`?` | Reverse search.
`*` | Search word under cursor.
`#` | In reverse.
`[s` | Next misspelled word.
`]s` | Previous misspelled word.

You can turn it off:

```vim
:set nowrapscan
```

You can turn it on:

```vim
:set wrapscan
```

Toggle it:

```vim
:set wrapscan!
```

And display the current value in the status bar:

```vim
:set wrapscan?
```

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/)
