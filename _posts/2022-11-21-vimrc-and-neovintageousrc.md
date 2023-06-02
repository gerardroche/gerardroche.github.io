---
tags: vim sublime-text neovintageous
title: The Neovintageous vimrc file
---

In Neovintageous a vimrc file is called a neovintageousrc file. The file contains initialisation commands and is loaded every time Sublime Text starts. To edit the neovintageousrc file use the Command Palette **NeoVintageous: Open RC File** and reload it with **NeoVintageous: Reload RC File**.

## Options

The following options are supported: `autoindent`, `belloff`, `expandtab`, `hlsearch`, `ignorecase`, `incsearch`, `list`, `magic`, `menu`, `minimap`, `modeline`, `modelines`, `number`, `relativenumber,`, `shell`, `sidebar`, `smartcase`, `spell`, `statusbar`, `tabstop`, `textwidth`, `winaltkeys`, `wrap`, `wrapscan`.

You can set options with the `:set {option}` command. Here are two examples that I can't live without:

    set ignorecase
    set smartcase

Run `:help '{option}'` for help on individual options.

## Leader key

The `<leader>` key is supported. The default is backslash, but I like a comma:

    let mapleader=,

## Key mapping

The following key mapping commands are supported: `:noremap`, `:nnoremap`, `:onoremap`, `:snoremap`, `:vnoremap`


For example, to map `<C-l>` to the ex command `:nohlsearch`:

    noremap <C-l> :nohlsearch<CR>

Mapping directly to Sublime Text commands is supported too. Convert the command to mix-case. For example to map `<D-i>` to the `goto_symbol_in_project` command:

    noremap <D-i> :GotoSymbolInProject<CR>

Note that you may need to [enable super keys](/2022/09/22/neovintageous-super-keys/) for the `<D-i>` super-key to work in this example.

### Key mapping command arguments

You can pass arguments to commands as space separated parameters in the format `arg=value`. For example to map `<C-f>` to the `show_overlay` command with the arguments `overlay=goto` and `text=@`:

    nnoremap <C-f> :ShowOverlay overlay=goto text=@<CR>

### Key mapping shell commands

You can map to shell commands through the ex command `:!`. For example, to map `<leader>gs` to `git status`:

    nnoremap <leader>gs :!git status<CR>

To ignore any output, prefix the `rhs` with `:silent`. For example, to map `<leader>ga` to `git add {current-file}` **and ignore any output**:

    nnoremap <leader>ga :silent !git add %<CR>

Neat and quiet powerful isn't it.

## Further reading

* `:help nv`
