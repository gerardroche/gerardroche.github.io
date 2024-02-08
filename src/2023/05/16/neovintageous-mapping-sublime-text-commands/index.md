---
post: true
sidebar: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Mapping Sublime Text commands
lastUpdated: 2023-10-01T17:21:54+01:00
---

# NeoVintageous - Mapping Sublime Text commands

![The Goonies (1985)](/assets/images/2023-05-16-the-goonies-map.webp)

NeoVintageous's mapping features are exceptionally potent. Did you know that you can map to virtually any Sublime Text command, execute commands in ex mode, and even map to commands within your own or third-party packages?

To map a Sublime Text command, simply convert it to PascalCase. For example, let's say you want to map the key `m` to the `goto_symbol_in_project` command.

```vim
nnoremap m :GotoSymbolInProject<CR>
```

To edit the [neovintageousrc](/2022/11/21/vimrc-and-neovintageousrc/) file, follow these steps:

1. Open the Command Palette: `Command Palette → NeoVintageous: Open neovintageousrc file`.

2. Make the necessary changes to the file.

3. To apply the changes, reload the neovintageousrc from the Command Palette: `Command Palette → NeoVintageous: Reload neovintageousrc file`.

Now, you might be wondering, "Where can I find the names of these commands?" Well, it's quite simple. When you run a command in Sublime Text, inspect the console log to see the command and its arguments.

1. **Console Logging**: View console logging by navigating to `Menu → View → Show Console`.

2. **Command and Input Logging**: Enable command and input logging by running the following commands in the console:

   ```
   sublime.log_commands(True)
   sublime.log_input(True)
   ```

![Sublime Text Console logging](/assets/images/2023-05-16-enable-console-logging-1.webp)

![Sublime Text Console logging](/assets/images/2023-05-16-enable-console-logging-2.webp)

For example, let's say you want to map "Goto Symbol" command. Run the command, e.g., "Menu → Goto → Goto Symbol" command. Sublime Text will print the following in the console:

```
command: show_overlay {"overlay": "goto", "text": "@"}
```

To map this command, Pascal-case it, and format the arguments as follows:

```vim
nnoremap m :ShowOverlay overlay=goto text=@<CR>
```

Note: Sublime Text commands are PascalCased for the purpose of distinguishing them from Ex commands, which always start with a lowercase letter. This choice is due to an implementation detail.

The "Goto Symbol in Project" command can be run via "Menu → Goto → Goto Symbol in Project" and will print the following in the console:

```
command: goto_symbol_in_project
```

To map it:

```vim
noremap <D-i> :GotoSymbolInProject<CR>
```

Mapping to Sublime Text commands unlocks a world of possibilities. Elevate your NeoVintageous experience by mapping your most frequently used operations and build upon that foundation. Have fun, my friends!
