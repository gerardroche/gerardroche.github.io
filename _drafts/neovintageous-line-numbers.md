---
tags: vim sublime-text neovintageous
title: NeoVintageous Line Numbers - A Sublime Text plugin
---

NeoVintageous is a vim emulation engine for Sublime Text.  NeoVintageous Highlight Line is a plugin that auto disables relative line numbers in Insert mode.  But why are relative line numbers useful in Vim?

## Normal mode jumps

Relative numbers are most useful in determining the count in jumps.

For example, suppose you want to yank a bunch of lines. You can see the target line you want to yank to. Instead of counting the lines you need, use the relative line number to determine the count. If the line is 5 lines from the cursor, then `y5j` will yank 5 lines from the cursor.

Relative line numbers are less useful in insert mode.  You could use the unimpaired plugin toggle command `yor` to quickly toggle relative line numbers when you need them. But I prefer to keep relative numbers enabled by default and auto disable them in insert mode.

I keep line numbers disabled by default too and toggle them on with `yon` when I need them. I find this setup to be very versatile. I have a clean window by default. I can enable line numbers quickly `yon` and instead of disabling relative numbers to see linear numbers, I can enter insert mode where relative line numbers are auto disabled.

One last tip is `yow` toggle wrapping. I use this a lot, particularly in markdown and find in files views.
