---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: The Neovintageous vimrc file
lastUpdated: false
---

# The Neovintageous vimrc file

In NeoVintageous, the equivalent of a vimrc file is called a "neovintageousrc" file. This file contains initialization commands and is loaded every time Sublime Text starts.

To edit the neovintageousrc file, follow these steps:

1. Open the Command Palette: `Command Palette → NeoVintageous: Open neovintageousrc file`.

2. Make the necessary changes to the file.

3. To apply the changes, reload the neovintageousrc from the Command Palette: `Command Palette → NeoVintageous: Reload neovintageousrc file`.

## Options

Here are some of the options supported in the NeoVintageous: `autoindent`, `belloff`, `expandtab`, `hlsearch`, `ignorecase`, `incsearch`, `list`, `magic`, `menu`, `minimap`, `modeline`, `modelines`, `number`, `relativenumber`, `shell`, `sidebar`, `smartcase`, `spell`, `statusbar`, `tabstop`, `textwidth`, `winaltkeys`, `wrap`, `wrapscan`.

For a full list of supported options, please refer to our [roadmap](https://github.com/NeoVintageous/NeoVintageous/blob/master/ROADMAP.md).

You can set these options using the `:set {option}` command. Here are two examples that you might find useful:

```vim
set ignorecase
set smartcase
```

If you need help with individual options, you can run `:help '{option}'` and read [more about each individual option](/2023/06/05/neovintageous-options/).

## Leader Key

To define a mapping which uses the "mapleader" variable, the special string
"`<Leader>`" can be used.  It is replaced with the string value of
"mapleader".  If "mapleader" is not set or empty, a backslash is used
instead. Example:

```vim
noremap <Leader>A  oanother line<Esc>
```

Works like:

```vim
noremap \A  oanother line<Esc>
```

But after:

```vim
let mapleader=,
```

It works like:

```vim
noremap ,A  oanother line<Esc>
```

Note that the value of "mapleader" is used at the moment the mapping is
defined.  Changing "mapleader" after that has no effect for already defined
mappings.

## Key Mapping

NeoVintageous supports various key mapping commands, including `:noremap`, `:nnoremap`, `:onoremap`, `:snoremap`, and `:vnoremap`.

For instance, if you want to map `<C-l>` to the ex command `:nohlsearch`, you can do it like this:

```vim
noremap <C-l> :nohlsearch<CR>
```

You can also map directly to Sublime Text commands by converting the command name to mixed case. For example, to map `<D-i>` to the `goto_symbol_in_project` command:

```vim
noremap <D-i> :GotoSymbolInProject<CR>
```

Note that you might need to [enable super keys](/2022/09/22/neovintageous-super-keys/) for the `<D-i>` super key to work in this example.

**Where do these commands come from?**

When you run a command in Sublime Text, you can inspect the console log to discover the command and arguments needed to map it.

1. Console Logging: View console logging by navigating to `Menu → View → Show Console`.

2. Command and Input Logging: Enable command and input logging by running the following commands in the console:

   ```
   sublime.log_commands(True)
   sublime.log_input(True)
   ```

For example, let's say you want to map "Goto Symbol" command above. Run the command, e.g., "Menu → Goto → Goto Symbol" command and Sublime Text will print the following in the console:

```
command: show_overlay {"overlay": "goto", "text": "@"}
```

### Key Mapping Command Arguments

NeoVintageous allows you to pass arguments to commands as space-separated parameters in the format `arg=value`. For instance, to map `<C-f>` to the `show_overlay` command with the arguments `overlay=goto` and `text=@`:

```vim
nnoremap <C-f> :ShowOverlay overlay=goto text=@<CR>
```

### Key Mapping Shell Commands

You can also map to shell commands using the ex command `:!`. For example, to map `<leader>gs` to execute `git status`:

```vim
nnoremap <leader>gs :!git status<CR>
```

If you want to ignore any output from the command, you can prefix the right-hand side (rhs) with `:silent`. For example, to map `<leader>ga` to `git add {current-file}` and ignore any output:

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

It's quite versatile and can be very powerful.

## Further Reading

* [NeoVintageous documentation](https://neovintageous.github.io/)
