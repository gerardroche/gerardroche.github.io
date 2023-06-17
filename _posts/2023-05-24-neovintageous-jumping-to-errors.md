---
tags: vim sublime-text neovintageous
title: NeoVintageous - Jumping to Errors
last_modified_at: 2023-06-17T02:28:07+01:00
---

![Red Dwarf - Terrorform (1992)](/assets/red-dwarf.webp)

[SublimeLinter](https://packagecontrol.io/search/SublimeLinter) is a code linting framework for Sublime Text.  NeoVintageous has two commands for jumping to lint errors.

Command | Description
:------ | :----------
<kbd>[l</kbd> | Jump backward to the previous error.
<kbd>]l</kbd> | Jump forward to the next error.

Both of those take a preceding count.

With a count, it means jump that many times: `3]l` jumps to the third error.

If a count is greater than the number of errors it will jump to the last error.

A status message is displayed if there are no more errors.
