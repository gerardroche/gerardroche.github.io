---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.4.0
redirect_from:
  - /2017/11/01/neovintageous-1.4.0-released/
---

NeoVintageous 1.4.0 has just been released. The highlights are a new help system (including full Vim documentation) and the ability to map to built-in Sublime Text commands or user commands.

## Help and Vim documentation

In NeoVintageous 1.4.0, you can access Vim's documentation thanks to the new `:help {subject}` command-line command. Vim's full documentation system is accessible via the command, and is an extensive cross-referenced and hyperlinked reference. It's kept up-to-date with the software and can answer almost any question about Vim's functionality. An up-to-date version of Vim help, with hyperlinks, can be found on [appspot](https://vimhelp.appspot.com).

NeoVintageous is an emulation of Vim so feature-parity is an ongoing effort, some features are not implemented or implemented fully, and differences are not fully documented. See [`:help nv`](https://github.com/NeoVintageous/NeoVintageous/blob/master/res/doc/neovintageous.txt) to learn about some of the differences. Please open issues to request missing features.

```vim
:help nv
```

Documentation for plugins is available too:

```vim
:help abolish
```

```vim
:help commentary
```

```vim
:help surround
```

```vim
:help unimpaired
```

### Jumping to subject

To jump to a subject, position the cursor on a tag (e.g. `|bars|`, `'option'`) and hit `Ctrl-]`. You can then jump forwards and backwards by pressing `Ctrl-I` and `Ctrl-O` (in/out).

It is possible to go directly to whatever you want help on, by giving an argument to the `:help` command. Prepend something to specify the context:

WHAT | PREPEND | EXAMPLE
last_modified_at: 2023-06-16T03:46:00+01:00
---- | ------- | -------
Normal mode command | | `:help x`
Visual mode command | `v_` | `:help v_x`
Insert mode command | `i_` | `:help i_x`
Command-line command | `:` | `:help :x`
Command-line editing | `c_` | `:help c_x`
Vim command argument | `-` | `:help -x`
Option | `'` | `:help 'textwidth'`
Regular expression | `/` | `:help /[`

## Mapping commands

The other big feature for this release is the ability to map to Sublime Text commands and custom commands as well as the Command-line commands. The functionality is currently limited to basic, no-argument, commands **(commands can actually map arguments from [1.6.0](/2018/05/21/neovintageous-1.6.0/)) and advanced mapping from [1.11.0](/2019/03/26/neovintageous-1.11.0/) and [1.16.0](/2019/06/05/neovintageous-1.16.0/))**, but you can create custom command wrappers to map to those too.

For example, if you wanted to map `,m` to the **Goto Symbol in Project** command (`goto_symbol_in_project`), which is a built-in Sublime Text command, you can map to to by camel casing it, upper-casing the first letter, and appending `<CR>`.

```vim
nnoremap <leader>m :GotoSymbolInProject<CR>
```

You can open your vintageousrc file through the Command Palette:

```
NeoVintageous: Open My vintageousrc File
```

And you'll need to reload it for changes to take effect:

```
NeoVintageous: Reload My vintageousrc File
```

### Mapping to user commands

For example, you could map `,f` and `,ep` to the following two user commands respectively:

```vim
let mapleader=,
nnoremap <leader>f :GotoSymbolInFile<CR>
nnoremap <leader>ep :OpenPreferences<CR>
```

```python
import os
import sublime
import sublime_plugin

class GotoSymbolInFileCommand(sublime_plugin.WindowCommand):
    def run(self):
        self.window.run_command('show_overlay', {
            'overlay': 'goto',
            'text': '@'
        })

class OpenPreferencesCommand(sublime_plugin.WindowCommand):
    def run(self):
        self.window.run_command('open_file', {
            'file': os.path.join(
                sublime.packages_path(),
                'User',
                'Preferences.sublime-settings'
            )
        })
```

### Tip: Mapping Window Commands to `mapleader`

If you prefer not to enable the ctrl-keys (via the `'vintageous_use_ctrl_keys'` setting), you can map window commands to your *mapleader* key. Then, instead of using the `CTRL` key, you can use your *mapleader*. *Note: the bar character (`|`) needs to be escaped in mappings.*

```vim
let mapleader=,

" Window resize mapleader aliases.
nnoremap <leader>_ <C-w>_
nnoremap <leader>\| <C-w>\|
nnoremap <leader>= <C-w>=
nnoremap <leader>. <C-w>_<C-w>\|
```

The mappings above mean you can resize groups equally (`,=`), vertically (`,|`), horizontally (`,_`), and as wide and high as possible (`,.`).

### Mapping to Plugin Commands

You can map pretty much any Sublime Text command, including commands provided by third party plugins. For example, the [Test](https://github.com/gerardroche/sublime-test) plugin provides commands for running your tests:

```vim
nnoremap <leader>t :TestNearest<CR>
nnoremap <leader>T :TestFile<CR>
nnoremap <leader>a :TestSuite<CR>
nnoremap <leader>l :TestLast<CR>
nnoremap <leader>gg :TestVisit<CR>
```

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.4.0)
