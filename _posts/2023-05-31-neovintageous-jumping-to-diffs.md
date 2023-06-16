---
tags: vim sublime-text neovintageous git
title: NeoVintageous - Jumping to Diffs
---

![Back to the Future Part II (1989)](/assets/back-to-the-future-part-ii.webp)

NeoVintageous has two vim commands for jumping to diff hunks:

Command | Description
:------ | :----------
<kbd>[c</kbd> | Jump backward to the previous start of a change.
<kbd>]c</kbd> | Jump forwards to the next start of a change.

Both of those take a preceding count.

With a count, it means jump that many times: `3]c` jumps to the third change.

`'wrapscan'` applies, which means searches wrap around the end of the file. `'wrapscan'` is enabled by default.

## `'wrapscan'`

`'wrapscan'` applies to search commands like <kbd>/</kbd> (search), <kbd>?</kbd> (reverse search), <kbd>*</kbd> (search word under cursor), <kbd>#</kbd> (search word under cursor reverse), <kbd>[s</kbd> (next misspelled word), <kbd>]s</kbd> (previous misspelled word).

You can turn it off:

```vim
:set nowrapscan
```

You can turn it on:

```vim
:set wrapscan
```

You can toggle it:

```vim
:set wrapscan!
```

And display the current value in the status bar:

```vim
:set wrapscan?
```
