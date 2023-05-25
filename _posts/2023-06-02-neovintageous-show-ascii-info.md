---
tags: neovintageous sublime-text vim
title: ShowAsciiInfo - A Sublime Text plugin
---

![The Martian (2015)](/assets/the-martian.webp)

[ShowAsciiInfo](https://packagecontrol.io/packages/ShowAsciiValue) is a Sublime Text plugin to show the [ascii](https://en.wikipedia.org/wiki/ASCII) value of the character under the cursor in decimal, hexadecimal and octal, on the status bar.

For example, when the cursor is on a 'R':

```
<R>  82,  Hex 52,  Octal 122
```

The following special characters are shown as notation:

Character | Notation
:-------- | :-------
`\0` | <kbd>&lt;Nul&gt;</kbd>
`" "` | <kbd>&lt;Space&gt;</kbd>
`\t` | <kbd>&lt;Tab&gt;</kbd>
`\n` | <kbd>&lt;NL&gt;</kbd>

## Vim and NeoVintageous

In Vim and NeoVintageous you can print the ascii value of the character under the cursor by pressing **ga**. Mnemonic: Get Ascii value.

## Wrapping up

The ShowAsciiInfo plugin is useful, but I use NeoVintageous so I have ShowAsciiInfo disabled for most of the time. I use **ga** when I need one-off character ascii info, and enable ShowAsciiInfo when I need continuous info.
