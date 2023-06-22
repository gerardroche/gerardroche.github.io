---
tags: vim sublime-text neovintageous
title: NeoVintageous - Mapping Sublime Text commands
last_modified_at: 2023-06-22T20:07:54+01:00
---

![The Goonies (1985)](/assets/2023-05-16-the-goonies-map.webp)

NeoVintageous's mapping features are powerful. Did you know that you can map to any Sublime Text command? You can even map to plugins and custom commands.

To map to a Sublime Text command, you need to map the command as PascalCase. For example, to map the key **m** to **Goto Symbol in Project**, the command in Sublime Text is `goto_symbol_in_project`, [create a mapping and reload your rc file](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
nnoremap m :GotoSymbolInProject<CR>
```

Now you can press **m** and the **Goto Symbol in Project** overlay will open. It is a quick way to search for any symbol in an entire project. It is available via *Menu → Goto → Goto Symbol in Project*.

**But where do I find the underlying commands?**

Open the Sublime Text Console via Menu → View → Show Console and enable command logging via `sublime.log_commands(True)`:

![Sublime Text Console logging](/assets/2023-05-16-enable-console-logging-1.webp)

Now Sublime Text will log all commands to the console:

![Sublime Text Console logging](/assets/2023-05-16-enable-console-logging-2.webp)


Sublime Text will log the command and all necessary parameters to create a mapping. For example, when you run **Menu → Goto → Goto Symbol**, Sublime Text will print:

```
command: show_overlay {"overlay": "goto", "text": "@"}
```

Create a mapping and reload your rc file:

```vim
nnoremap m :ShowOverlay overlay=goto text=@<CR>
```

Mapping to Sublime Text commands opens up a world of possibilities.  Up your NeoVintageous game.  Map your most common operations and build from there.  Take it easy my friends.
