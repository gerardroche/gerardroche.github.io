---
tags: neovintageous sublime-text vim
---
[NeoVintageous 1.5.0](https://github.com/NeoVintageous/NeoVintageous) has been released and includes support for super-keys, command-line search history, command-line editing commands, and a toggle side bar command.

## Support for super-keys

You can now map super-keys (`<D-...>`), also known as command-keys on OSX, and window-keys on Windows. Super-keys are disabled by default.

`Menu > Preferences > Settings`

```json
{
    "vintageous_use_super_keys": true
}
```

Suppose, for example, you want to map `<D-i>` to the *Goto Symbol in Project* command, which is available out-of-the-box in Sublime Text via the `goto_symbol_in_project` command. You can map to any command by **camel casing** it, **upper-casing the first letter**, and **appending `<CR>`** (create the mapping in your vintageousrc file, you can open it via the Command Palette "NeoVintageous: Open My vintageousrc File"):

```viml
nnoremap <D-i> :GotoSymbolInProject<CR>
```

You need to reload the mappings, you can do that via the Command Palette "NeoVintageous: Reload My vintageousrc File".

Another example, is mapping `<D-n>` to run the nearest test (requires the [Test](https://github.com/gerardroche/sublime-test) plugin):

```viml
nnoremap <D-n> :TestNearest<CR>
```

Note: Currently only `a-zA-Z` super keys are implemented e.g. `<D-i>`, `<D-I>`, `<D-o>`, etc.

Note: Operating systems make extensive use of the super-keys for desktop commands. If you find a super-key is not working in Sublime Text, then it's probably bound to a desktop command, and if that's the case then ST won't receive the key event. You can check if ST is receiving the event by running `sublime.log_input(True)` in the console (`Menu > View > Show Console`). If it's not receiving the event, then you need to clear whatever desktop command the key is bound to. If you use Ubuntu see [Ubuntu keymaps](/2018/02/17/ubuntu-keymaps).

See `:h vintageousrc` for the full documentation.

## Command-line editing and search history

Search history for `/` and `?` has been added (supports current session only). Use the arrow keys `<Up>` and `<Down>` to recall recent and older history.

The Command-line editing commands have been added: `<C-b>`, `<C-e>`, `<C-h>`, `<C-n>`, `<C-p>`, `<C-u>`, and `<C-w>`.

Also, a popular request, `CTRL-C` and `CTRL-[` now exit Command-line mode.

## Toggle Side Bar

A toggle side bar command is now provided out-of-the-box. When you want to use a toggle side bar mapping it's recommended to use this command, because it will receive fixes and functionality tuned specially for Neovintageous.

Suppose, for example, you want to map `,d` to toggle the sidebar when you are in normal mode (create the mapping in your vintageousrc file, you can open it via the Command Palette "NeoVintageous: Open My vintageousrc File"):

```viml
let mapleader=,
nnoremap <leader>d :NeovintageousToggleSideBar<CR>
```

You need to reload the mappings, you can do that via the Command Palette "NeoVintageous: Reload My vintageousrc File".

Next, you need to create a keybinding to enable the ability to toggle the side bar when the *side bar* has focus:

`Menu > Preferences > Key Bindings`

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

See `:h vintageousrc` for the full documentation.

## Misc. Additions

* Support for SublimeLinter goto to error `]l` and `[l` (see `:h unimpaired`)
* Support for GitGutter goto change `]c` and `[c` (see `:h unimpaired`)
* Toggle status bar `coe` (see `:h unimpaired`)
* Toggle menu toggle `coa` (see `:h unimpaired`)
* Added `:edit {file}`
* Added `:sp[lit] [file]` (requires Origami plugin, see `:h neovintageous`)

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

There are many more details in the [release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.5.0).
