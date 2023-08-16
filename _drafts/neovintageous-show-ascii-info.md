---
tags: vim sublime-text neovintageous
title: ShowAsciiInfo - A Sublime Text plugin
---

![The Martian (2015)](/assets/the-martian.webp)

[ShowAsciiInfo](https://github.com/gerardroche/sublime-show-ascii-value) is a Sublime Text plugin that displays the ASCII value of the character under the cursor in decimal, hexadecimal, and octal formats, on the status bar.

For instance, when the cursor is positioned on an 'R':

```
<R>  82,  Hex 52,  Octal 122
```

The following special character notations are used for non-printable characters:

Character | Notation
:-------- | :-------
`\0` | <kbd>&lt;Nul&gt;</kbd>
`" "` | <kbd>&lt;Space&gt;</kbd>
`\t` | <kbd>&lt;Tab&gt;</kbd>
`\n` | <kbd>&lt;NL&gt;</kbd>

I don't use this plugin a lot so I keep it disabled, but it's a useful plugin to have in your toolbox.

**Installing**

1. Open a terminal or command prompt.
2. Navigate to the Sublime Text Packages directory:
    - On Windows: `%APPDATA%\Sublime Text\Packages`
    - On macOS: `~/Library/Application Support/Sublime Text/Packages`
    - On Linux: `~/.config/sublime-text/Packages`
3. Clone the plugin repository directly into the Packages directory using Git:
   `git clone https://github.com/gerardroche/sublime-show-ascii-value.git ShowAsciiValue`

**Disabling:**

1. Open the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Type "Package Control: Disable Package" and press Enter.
3. Select "ShowAsciiInfo" from the list.

**Enabling:**

1. Open the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Type "Package Control: Enable Package" and press Enter.
3. Choose "ShowAsciiInfo" from the list.

## Vim

In Vim you can print the ASCII value by the command **ga**.

Mnemonic: Get Ascii value.

The difference with the Vim command **ga**, is that it is a one-shot command, ShowAsciiInfo continually displays the ASCII values of characters under the cursor as you navigate.
