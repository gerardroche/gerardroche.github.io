---
tags: neovintageous sublime-text vim
title: The Neovintageous vimrc file
---

In Neovintageous a vimrc file is called a *neovintageousrc* file. This file contains initialisation commands and it is loaded every time Sublime Text starts.

You can edit the neovintageousrc file using the Command Palette:

**NeoVintageous: Open RC File**

And to reload it:

**NeoVintageous: Reload RC File**

## Options

At the time of writing, all of the following options are supported:

`autoindent`, `belloff`, `expandtabs`, `hlsearch`, `ignorecase`, `incsearch`, `list`, `magic`, `menu`, `minimap`, `modeline`, `modelines`, `number`, `relativenumber,`, `shell`, `sidebar`, `smartcase`, `spell`, `statusbar`, `tabstop`, `textwidth`, `winaltkeys`, `wrap`, `wrapscan`

You can set options in your neovintageousrc file with the `set` command. Here are two that I can't live without:

    set ignorecase
    set smartcase

Run `:help '{option}'` for help on individual options.

## Key mapping

The following key mapping commands are supported (nested and recursive mappings are not currently supported):

- `:noremap {lhs} {rhs}`
- `:nnoremap {lhs} {rhs}`
- `:onoremap {lhs} {rhs}`
- `:snoremap {lhs} {rhs}`
- `:vnoremap {lhs} {rhs}`


For example, to map `<C-l>` to the ex command `:nohlsearch`:

    noremap <C-l> :nohlsearch<CR>

Mapping directly to Sublime Text commands is supported too. Convert the command to mix-case. For example to map `<D-i>` to the `goto_symbol_in_project` command:

    noremap <D-i> :GotoSymbolInProject<CR>

Note that you may need to enable [super keys](/2022/09/22/neovintageous-super-keys/) for `<D-i>` super-key to work in this example.

### Key mapping command arguments

You can pass arguments to commands as space separated parameters in the format `argument=value`.

Map `<C-f>` to the `show_overlay` command:

    nnoremap <C-f> :ShowOverlay overlay=goto text=@<CR>

### Key mapping to shell commands

You can map to shell commands with the ex command `!`.

Map `<leader>gs` to `git status`:

    nnoremap <leader>gs :!git status<CR>

To ignore output, use the `:silent` command:

Map `<leader>ga` to `git add {current view file}` and ignore any output:

    nnoremap <leader>ga :silent !git add %<CR>

## Leader key

The `<leader>` is supported. The default is `\` but I prefer to use `,` instead:

    let mapleader=,

## Further reading

* [My neovintageousrc](https://raw.githubusercontent.com/gerardroche/sublimefiles/master/User/.neovintageousrc)
* `:help mapping`
* `:help neovintageous`
* `:help neovintageousrc`
* `:help nv-options`
* `:help nv-settings`
