---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.6.0
---
NeoVintageous 1.6.0 has been released and includes mapping command arguments, enhanced search highlighting, buffer commands, more Unimpaired commands, and lots of bug fixes.

## Mapping to Sublime Text commands

NeoVintageous [1.4.0](/2017/11/01/neovintageous-1.4.0/) introduced mapping commands:

```vim
nnoremap <C-s> :w<CR>
nnoremap <leader>m :GotoSymbolInProject<CR>
```

The first mapping maps `Ctrl+s` to the Ex command `:w` (write file), and the second one maps to the Sublime Text command `goto_symbol_in_project`.

Sublime Text commands start with an uppercase letter to avoid confusion with the built-in Ex commands, and are converted to snake_case.

When you have a mapping that contains an Ex or Sublime Text command, you need to put a line terminator after it to have it executed. Here we use a carriage-return `<CR>`.

When a mapping doesn't end in a carriage-return the Command-line is invoked with the initial text set to the mapping.

NeoVintageous 1.6.0 improves on mapping commands by supporting arguments **(advanced mapping is available from [1.11.0](/2019/03/26/neovintageous-1.11.0/) and [1.16.0](/2019/06/05/neovintageous-1.16.0/))**.

```vim
noremap <leader>gr :PermuteLines operation=reverse<CR>
```

This maps to the Sublime Text command *Permute Lines: Reverse*, which can be run via the menu: `Edit → Permute Lines → Reverse`.

To discover commands and their arguments, enable the Sublime Text command logger. Run the following command in the console.

**Menu → View → Show Console**

```console
sublime.log_commands(True)
```

Now you when you run a command, it will print information about it in the console. For example when you run the *Permute Lines: Reverse* command, it will print:

```console
command: permute_lines {"operation": "reverse"}
```

Or the *Goto Anything...* command, which can be run via the menu: `Goto → Goto Anything`, will print:

```console
command: show_overlay {"overlay": "goto", "show_files": true}
```

Too convert it to a mapping:

```vim
noremap <leader>p :ShowOverlay overlay=goto show_files=true<CR>
```

## Color scheme support for search highlighting

Search highlighting has been improved with incremental match, current match, and occurrences, all syntax highlighted. Here's what the current match and occurrences look like in the default Monokai color scheme:

![Search highlighting](/assets/2018-05-21-search-highlighting.webp)

Searches supporting the new highlighting include `/`, `?`, `*`, and `#`.

Use a color scheme override to customise them. For example if you want to customise the the default Monokai color scheme, then create a file named `Monokai.sublime-color-scheme` in your User directory (find it via the Menu → Preferences → Browse Packages), then create the custom rules:

```json
{
    "rules":
    [
        {
            "scope": "neovintageous_search_inc",
            "background": "#a1efe4",
            "foreground": "#272822"
        },
        {
            "scope": "neovintageous_search_cur",
            "background": "#a1efe4",
            "foreground": "#272822"
        },
        {
            "scope": "neovintageous_search_occ",
            "background": "#e6db74",
            "foreground": "#272822"
        }
    ]
}
```

More search highlighting enhancements are available in [1.7.0](/2018/09/02/neovintageous-1.7.0/).

## Unimpaired commands

The Unimpaired plugin has been enhanced with additions of `[b`, `]b`, `[B`, `]B`. These are mapped to Ex commands:

* `[b` - `:bprevious`
* `]b` - `:bnext`
* `[B` - `:bfirst`
* `]B` - `:blast`

At first they may not seem useful until you think about how much you use key bindings like `Ctrl+Tab`, and especially `Ctrl+Shift+Tab`, to cycle through views. A better alternative is to use `]b` and `[b`. Try it!

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.6.0)
