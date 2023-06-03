---
tags: vim sublime-text neovintageous
title: NeoVintageous - Adding and Subtracting
---

**CTRL-A**

Add \[count\] to the number or alphabetic character at or after the cursor.

**CTRL-X**

Subtract \[count\] from the number or alphabetic character at or after the cursor.

The CTRL-A and CTRL-X commands can work for - signed and unsigned decimal numbers.

The CTRL-A command is very useful in a macro.  Example: Use the following steps to make a numbered list.

1. Create the first list entry, make sure it starts with a number.
2. qa           - start recording into register 'a'
3. Y            - yank the entry
4. p            - put a copy of the entry below the first one
5. CTRL-A       - increment the number
6. q            - stop recording
7. \<count\>@a  - repeat the yank, put and increment \<count\> times
