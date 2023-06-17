---
tags: vim sublime-text neovintageous
title: NeoVintageous - Jumping to Misspelled Words
last_modified_at: 2023-06-17T02:34:52+01:00
---

![Young Frankenstein (1974)](/assets/young-frankenstein.webp)

NeoVintageous has two vim commands for jumping to misspelled words:

Command | Description
:------ | :----------
<kbd>[s</kbd> | Jump backward to the previous misspelled word.
<kbd>]s</kbd> | Jump forward to the next misspelled word.

Both of those take a preceding count.

With a count, it means jump that many times: `3]s` jumps to the third misspelled word.

The `'wrapscan'` option applies.

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
