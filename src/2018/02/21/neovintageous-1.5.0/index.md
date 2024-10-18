---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.5.0
redirect_from:
  - /2018/02/21/neovintageous-1.5.0-released/
lastUpdated: false
---

# NeoVintageous 1.5.0

NeoVintageous 1.5.0 has been released and includes support for super-keys, command-line search history, command-line editing commands, and a toggle side bar command.

## Support for vim super-keys

You can now map super-keys (`<D-...>`), also known as command-keys on OSX, or window-keys on Windows. Super-keys are disabled by default.

Menu → Preferences → Settings

```json
{
    "vintageous_use_super_keys": true
}
```

::: info

In newer versions the super keys can be toggled via Command Palette → NeoVintageous: Toggle Super Keys.

:::

<!-- {% include note.html content="In newer versions the super keys can be toggled via Command Palette → NeoVintageous: Toggle Super Keys." %} -->

For example, to map `<D-i>` to the Goto Symbol in Project command, which is available out-of-the-box in Sublime (the `goto_symbol_in_project` command).

```vim
nnoremap <D-i> :GotoSymbolInProject<CR>
```

You can map to any command by PascalCasing it.

Append `<CR>` to indicate pressing the enter key.

Another example, is mapping `<D-n>` to run the nearest test (requires the [Test](https://github.com/gerardroche/sublime-test) package):

```vim
nnoremap <D-n> :TestNearest<CR>
```

Currently only `a-zA-Z` super keys are implemented e.g. `<D-i>`, `<D-I>`, `<D-o>`, etc.

**Troubleshooting**

Operating systems make extensive use of the super-keys for desktop commands. If you find a super-key is not working in Sublime Text, then it's probably bound to a desktop command, and if that's the case then ST won't receive the key event. You can check if ST is receiving the event by running `sublime.log_input(True)` in the console (Menu → View → Show Console). If it's not receiving the event, then you need to clear whatever desktop command the key is bound to. If you use Ubuntu see [Ubuntu keymaps](/2018/02/17/ubuntu-keymaps/).

## Command-line editing and search history

Search history for `/` and `?` has been added (supports current session only). Use the arrow keys `<Up>` and `<Down>` to recall recent and older history.

The Command-line editing commands have been added: `<C-b>`, `<C-e>`, `<C-h>`, `<C-n>`, `<C-p>`, `<C-u>`, and `<C-w>`.

Also, a popular request, `CTRL-C` and `CTRL-[` now exit Command-line mode.

## Toggle Side Bar

::: info
The NeoVintageous toggle sidebar feature has been updated, see [Toggle SideBar enhancements](/2023/05/15/neovintageous-toggle-sidebar/) for more details.
:::

A toggle side bar command is now provided out-of-the-box. When you want to use a toggle side bar mapping it's recommended to use this command, because it will receive fixes and functionality tuned specially for Neovintageous.

Suppose, for example, you want to map `,d` to toggle the sidebar when you are in normal mode (create the mapping in your vintageousrc file, you can open it via the Command Palette:


```console
NeoVintageous: Open My vintageousrc File
```

```vim
let mapleader=,
nnoremap <leader>d :NeovintageousToggleSideBar<CR>
```

You need to reload the mappings:

```console
NeoVintageous: Reload My vintageousrc File
```

Next, you need to create a keybinding to enable the ability to toggle the side bar when the side bar has focus.

**Menu → Preferences → Key Bindings**

```json
{
    {
        "keys": [",", "d"],
        "command": "neovintageous_toggle_side_bar",
        "context": [
            { "key": "control", "operand": "sidebar_tree" }
        ]
    }
}
```

## Misc. Additions

* Support for SublimeLinter goto to error `]l` and `[l` (see `:help unimpaired`)
* Support for GitGutter goto change `]c` and `[c` (see `:help unimpaired`)
* Toggle status bar `coe` (see `:help unimpaired`)
* Toggle menu toggle `coa` (see `:help unimpaired`)
* Added `:edit {file}`
* Added `:sp[lit] [file]` (requires Origami plugin, see `:help neovintageous`)

## Recursive Mappings Removed

The recursive mapping commands `:map`, `:nmap`, `:omap`, `:smap`, and `:vmap`, have been removed, and will emit warnings when used. Use the non-recursive mapping commands instead. Here is a table of the old and new non-recursive mapping commands:

Recursive command  (removed) | Non-recursive command
---------------------------- | ---------------------
`map` | `noremap`
`nmap` | `nnoremap`
`omap` | `onoremap`
`smap` | `snoremap`
`vmap` | `vnoremap`

The recursive mappings were removed, because they were not implemented as recursive mappings, and removing them now in preference of the non-recursive mappings may prevent some potential problems in the future if the recursive mapping commands are ever implemented.

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/)
* [NeoVintageous 1.5.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.5.0)
