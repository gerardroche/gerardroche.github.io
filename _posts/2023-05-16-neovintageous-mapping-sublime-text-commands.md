---
tags: neovintageous sublime-text vim
title: NeoVintageous - Mapping Sublime Text commands
---

![The Goonies (1985)](/assets/2023-05-16-the-goonies-map.webp)

NeoVintageous's mapping features are very powerful. Did you know that you can map to any Sublime Text command? You can even map to plugins and your own custom commands.

To map to a Sublime Text command, you need to map the command as PascalCase. For example, to map the key **m** to **Goto Symbol in Project**, the command in Sublime Text is `goto_symbol_in_project`, [create a mapping and reload your rc file](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
nnoremap m :GotoSymbolInProject<CR>
```

Now you can press **m** and the **Goto Symbol in Project** overlay will open. This is a quick way to search for any symbol across an entire project. It's available via *Menu &gt; Goto &gt; Goto Symbol in Project*.

**But where do I find the underlying commands?**

Open the Sublime Text Console via Menu &gt; View &gt; Show Console and enable command logging via `sublime.log_commands(True)`:

![Sublime Text Console logging](/assets/2023-05-16-enable-console-logging-1.webp)

Now Sublime Text will log all commands to the console:

![Sublime Text Console logging](/assets/2023-05-16-enable-console-logging-2.webp)


Sublime Text will log the command and all necessary parameters to create a mapping. For example, when you run **Menu &gt; Goto &gt; Goto Symbol**, Sublime Text will print:

```
command: show_overlay {"overlay": "goto", "text": "@"}
```

Create a mapping and reload your rc file:

```vim
nnoremap m :ShowOverlay overlay=goto text=@<CR>
```

## Wrapping it up

Mapping to Sublime Text commands opens up a world of possibilities. Up your NeoVintageous game. Map your most common operations and build from there.
