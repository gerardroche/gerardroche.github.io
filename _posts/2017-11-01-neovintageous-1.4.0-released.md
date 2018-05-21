---
tags: neovintageous sublime-text vim
---
[NeoVintageous 1.4.0](https://github.com/NeoVintageous/NeoVintageous) has been released and includes mapping commands, and a help system with full Vim documentation.

## Vim Documentation Out-of-the-Box

You can now lookup help with the `:help {subject}` command (see `:help nv` for NeoVintageous help). Documentation for all of the out-of-the-box plugins is available too:

* `:help abolish`
* `:help commentary`
* `:help surround`
* `:help unimpaired`

To jump to a subject, position the cursor on a tag (e.g. `|bars|`, `'option'`) and hit `CTRL-]`. Jump backwards and forwards by pressing `CTRL-O` and `CTRL-I`.

It's possible to go directly to whatever you want, by giving a *subject* to the `:help` command. A prefix can specify the context:

WHAT | PREPEND | EXAMPLE
---- | ------- | -------
Normal mode command | | `:help x`
Visual mode command | `v_` | `:help v_u`
Insert mode command | `i_` | `:help i_<Esc>`
Command-line command | `:` | `:help :quit`
Command-line editing | `c_` | `:help c_<Del>`
Vim command argument | `-` | `:help -r`
Option | `'` | `:help 'textwidth'`
Regular expression | `/` | `:help /[`

Keep in mind that feature-parity with Vim is an ongoing effort. The Vim docs are provided in full without modifications (see `:help nv` for Neovintageous specific differences).

## Mapping Commands

The other big feature for this release is the ability to map to Sublime Text commands and custom commands as well as the Command-line commands. The functionality is currently limited to basic, no-argument, commands, but you can create custom command wrappers to map to those too.

Suppose, for example, you want to map `,m` to the *Goto Symbol in Project* command, which is available out-of-the-box in Sublime Text via the `goto_symbol_in_project` command. You can map to any command by **camel casing** it, **upper-casing the first letter**, and **appending `<CR>`** (create the mapping in your vintageousrc file, you can open it via the Command Palette "NeoVintageous: Open My vintageousrc File"):

```viml
let mapleader=,
nnoremap <leader>m :GotoSymbolInProject<CR>
```

You need to reload the mappings, you can do that via the Command Palette "NeoVintageous: Reload My vintageousrc File".

You can also creating mappings for custom commands. Suppose, for example, you want to map `,f` to *Goto Symbol in File*, and `,ep` to *Open Preferences*:

```viml
let mapleader=,
nnoremap <leader>f :GotoSymbolInFile<CR>
nnoremap <leader>ep :OpenPreferences<CR>
```

The mappings above use two commands that are not available in Sublime Text out-of-the-box. Create custom commands e.g. create a file named `plugin.py` with the following commands (place the plugin in your user directory, find it via `Menu > Preferences > Browse Packages...`):

```python
import os

import sublime
import sublime_plugin

class OpenPreferencesCommand(sublime_plugin.WindowCommand):
    def run(self):
        self.window.run_command('open_file', {
            'file': os.path.join(
                sublime.packages_path(),
                'User',
                'Preferences.sublime-settings'
            )
        })

class GotoSymbolInFileCommand(sublime_plugin.WindowCommand):
    def run(self):
        self.window.run_command('show_overlay', {
            'overlay': 'goto',
            'text': '@'
        })
```

See `:h vintageousrc` for the full documentation.

### Tip: Mapping Window Commands to `mapleader`

If you prefer not to enable the ctrl-keys (via the `'vintageous_use_ctrl_keys'` setting), you can map window commands to your *mapleader* key. Then, instead of using the `CTRL` key, you can use your *mapleader*. *Note: the bar character (`|`) needs to be escaped in mappings.*

```viml
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

```viml
nnoremap <leader>t :TestNearest<CR>
nnoremap <leader>T :TestFile<CR>
nnoremap <leader>a :TestSuite<CR>
nnoremap <leader>l :TestLast<CR>
nnoremap <leader>gg :TestVisit<CR>
```

There are many more details in the [release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.4.0).
