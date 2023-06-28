---
tags: vim sublime-text neovintageous
title: NeoVintageous - Mapping Sublime Text commands
last_modified_at: 2023-06-28T22:38:07+01:00
---

![The Goonies (1985)](/assets/2023-05-16-the-goonies-map.webp)

NeoVintageous's mapping features are powerful. Did you know that you can map to any Sublime Text command? Run commands in ex mode? You can even map to your own or third party package commands.

To run or map a Sublime Text command, convert it to PascalCase.

Command | Ex mode
:------ | :------
`goto_symbol_in_project` | `:GotoSymbolInProject`

For example to map the key `m` to `goto_symbol_in_project`, [create a mapping and reload your rc file](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
nnoremap m :GotoSymbolInProject<CR>
```

**But where do I find the command names?**

Open the Sublime Text Console via Menu → View → Show Console and enable command logging via `sublime.log_commands(True)`.

![Sublime Text Console logging](/assets/2023-05-16-enable-console-logging-1.webp)

Sublime Text logs commands to the console.

![Sublime Text Console logging](/assets/2023-05-16-enable-console-logging-2.webp)

Sublime Text logs the command and all necessary parameters to create a mapping.

For example, run **Menu → Goto → Goto Symbol**.

Sublime Text prints:

```
command: show_overlay {"overlay": "goto", "text": "@"}
```

Create a mapping and reload your rc file:

```vim
nnoremap m :ShowOverlay overlay=goto text=@<CR>
```

Mapping to Sublime Text commands opens up worlds of possibilities.  Up your NeoVintageous game.  Map your most common operations and build from there.  Take it easy my friends.
