---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Jumping to Misspelled Words
excerpt: "NeoVintageous has two vim commands for jumping to misspelled words. [s Jump backward to the previous misspelled word. ]s Jump forward to the next misspelled word."
lastUpdated: false
---

# NeoVintageous - Jumping to Misspelled Words

NeoVintageous has two vim commands for jumping to misspelled words:

Command | Description
:------ | :----------
<kbd>[s</kbd> | Jump backward to the previous misspelled word.
<kbd>]s</kbd> | Jump forward to the next misspelled word.

Both of those take a preceding count.

With a count, it means jump that many times: `3]s` jump to the third misspelled word.

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
