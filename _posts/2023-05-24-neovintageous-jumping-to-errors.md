---
tags: vim sublime-text neovintageous
title: NeoVintageous - Jumping to Errors
---

![Red Dwarf - Terrorform (1992)](/assets/red-dwarf.webp)

[SublimeLinter](https://packagecontrol.io/search/SublimeLinter) is a code linting framework for Sublime Text. NeoVintageous has two vim commands for jumping to SublimeLinter lint errors:

Command | Description
:------ | :----------
<kbd>[l</kbd> | Jump backward to the previous error.
<kbd>]l</kbd> | Jump forward to the next error.

With a count, it means jump that many times e.g. `3]l` jumps to the third error. If a count is greater than the number of errors it will jump to the last error. A status message is displayed if there are no more errors.
