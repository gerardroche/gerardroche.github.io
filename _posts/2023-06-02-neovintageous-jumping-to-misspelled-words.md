---
tags: neovintageous sublime-text vim
title: NeoVintageous - Jumping to Misspelled Words
---

![Young Frankenstein (1974)](/assets/young-frankenstein.webp)

NeoVintageous has two commands to jump to misspelled words:

Command | Description
:------ | :----------
<kbd>[s</kbd> | Jump backward to the previous misspelled word.
<kbd>]s</kbd> | Jump forward to the next misspelled word.

With a count, it means jump that many times e.g. `3]s` jumps to the third misspelled word. `'wrapscan'` applies.

## `'wrapscan'`

`'wrapscan'` applies to search commands like <kbd>/</kbd> (search), <kbd>?</kbd> (reverse search), <kbd>*</kbd> (search word under cursor), <kbd>#</kbd> (and reverse), <kbd>[s</kbd> (next misspelled word), <kbd>]s</kbd> (and previous).

You can turn off:

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

Display the current value in the status bar:

```vim
:set wrapscan?
```
