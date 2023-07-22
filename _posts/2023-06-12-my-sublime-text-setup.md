---
tags: sublime-text
title: My Sublime Text setup
last_modified_at: 2023-07-22T22:23:27+01:00
---

![The Usual Suspects (1995)](/assets/the-usual-suspects.webp)

We all want to know what's in the secret sauce.

## Package Control

Package Control is the Sublime Text package manager, but it needs to be installed.

**Menu → Install Package Control**

Once installed you can install any package from [packagecontrol.io](https://packagecontrol.io).

To install a package open open command palette.

Command Palette → Package Control: Install Package

## Look and Feel

I use an enhanced Monokai color scheme, [MonokaiFree](https://packagecontrol.io/packages/MonokaiFree), and [FileIcons](https://packagecontrol.io/packages/FileIcons) for nicer sidebar icons. MonokaiFree offers a more consistent, polished version of the bundled Monokai color scheme, and plugin package support.

I use the built-in Adaptive theme.

Menu → Preferences → Select Theme → Adaptive

I like a yellow block cursor and square selections.

Menu → Preferences → Customize Color Scheme

```json
{
    "variables": {},
    "globals": {
        "caret": "yellow",
        "block_caret": "yellow",
        "block_caret_border": "yellow",
        "block_caret_corner_style": "square",
        "selection_corner_style": "square",
    },
    "rules": []
}
```

![Robert Llewellyn in Red Dwarf (1988)](/assets/red-dwarf-kryten.webp)

## Vim

I love Vim, but I've never been able to switch to it fully. Enter [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous), the advanced vim emulation layer for Sublime. NeoVintageous is my [weapon of choice](https://www.youtube.com/watch?v=wCDIYvFmgW8).

- [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous) - An advanced vim engine for sublime.

I also use a number of optional NeoVintageous plugins.

- [NeoVintageousFiles](https://packagecontrol.io/packages/NeoVintageousFiles) - Single key side bar and overlay commands.
- [NeoVintageousHighlightLine](https://packagecontrol.io/packages/NeoVintageousHighlightLine) - Auto disable highlight line in insert and visual mode.
- [NeoVintageousLineNumbers](https://packagecontrol.io/packages/NeoVintageousLineNumbers) - Auto disable relative line numbers in insert mode.
- [NeoVintageousToggle](https://packagecontrol.io/packages/NeoVintageousToggle) - Toggle NeoVintageous on and off.

Some features in NeoVintageous require third party plugins. For instance, various window splitting commands require [Origami](https://packagecontrol.io/packages/Origami) and the [jump to error](/2023/05/24/neovintageous-jumping-to-errors/) commands require [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter).

Here are my settings.

Menu → Preferences → Settings

```js
"vintageous_bell": "view",
"vintageous_enable_sneak": true,
"vintageous_handle_keys": {
    "<C-f12>": false,
    "<S-f1>": false,
    "<S-tab>": false,
    "<f1>": false,
    "i_<C-u>": false
},
"vintageous_sneak_use_ic_scs": 1,
"vintageous_terminal": "gnome-terminal",
"vintageous_use_ctrl_keys": true,
"vintageous_use_super_keys": true,
"scroll_context_lines": 8,
```

Here is a snippet of some useful mappings from my [neovintageousrc file](/2022/11/21/vimrc-and-neovintageousrc/):

```viml
set ignorecase
set nominimap
set smartcase

let mapleader=,

nnoremap <leader><leader> :Neovintageous action=reveal_side_bar<CR>
nnoremap <leader>d :Neovintageous action=toggle_side_bar<CR>
nnoremap <leader>en :Neovintageous action=open_rc_file<CR>
nnoremap <leader>ga :silent !git add %<CR>
nnoremap <leader>gd :ToggleInlineDiff<CR>
nnoremap <leader>hu :RevertHunk<CR>
nnoremap <leader>oo :GitOpen<CR>
nnoremap <leader>r :reg<CR>
nnoremap <leader>sr :SublimeLinterLineReport<CR>
nnoremap <leader>st :SublimeLinterPanelToggle<CR>
noremap <C-l> :nohlsearch<CR>
noremap <C-s> :w<CR>
noremap <D-I> :ShowOverlay overlay=goto text=@<CR>
noremap <D-i> :GotoSymbolInProject<CR>

" Easy insertion of a trailing ;
nnoremap ;; <Esc>A;<Esc>;

" Yank and paste using system clipboard.
noremap <leader>y "+y
noremap <leader>Y "+Y
noremap <leader>p "+p
noremap <leader>P "+P

" Sorting.
nnoremap <leader>s) vi):sort u<CR>
nnoremap <leader>s] vi]:sort u<CR>
nnoremap <leader>si vii:sort u<CR>
nnoremap <leader>sp vip:sort u<CR>
nnoremap <leader>ss vip:sort u<CR>
vnoremap <leader>s :sort u<CR>

" Origami: https://packagecontrol.io/packages/Origami
nnoremap <leader>. :ToggleZoomPane fraction=0.98<CR>
```

## Goto project

I use [Sesame](https://packagecontrol.io/packages/Sesame) to quickly open, add, switch, and remove projects and folders. This is by far my favourite plugin.  Read [Sesame - A Sublime Text Plugin](/2023/05/19/sesame-a-sublime-text-plugin/) for a short guide on how it works.

## Linting

I use [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter) for linting. SublimeLinter is a comprehensive code linting framework. Here are some of the linters I use:

- [SublimeLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint) - [ESLint](https://github.com/eslint/eslint) linter.
- [SublimeLinter-flake8](https://packagecontrol.io/packages/SublimeLinter-flake8) - [Flake8](https://flake8.pycqa.org/en/latest/) linter.
- [SublimeLinter-mypy](https://packagecontrol.io/packages/SublimeLinter-mypy) - [MyPy](https://mypy-lang.org/) linter.
- [SublimeLinter-php-cs-fixer](https://packagecontrol.io/packages/SublimeLinter-contrib-php-cs-fixer) - [PHP-CS-Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) linter.  *Pending [v3.0](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/16) support and [ST4](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/15) support.*
- [SublimeLinter-php](https://packagecontrol.io/packages/SublimeLinter-php) - [PHP](https://www.php.net/) linter.

## Documentation

I use [GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation) for jumping to documentation for the current keyword. I like <kbd>F1</kbd> as my jump key. The <kbd>F1</kbd> key has become universally associated with help.[^1]

Menu → Preferences → Key Bindings

```js
{
    "keys": ["f1"],
    "command": "goto_documentation",
    "context": [
        {
            "key": "selector",
            "operator": "equal",
            "operand": "-embedding.php",
            "match_all": true
        }
    ]
},
```

*The context selector exclusion is to support GotoPHPManual.*

## Side Bar

- [SideBarTools](https://packagecontrol.io/packages/SideBarTools) - Some useful tools for the sidebar context menu.

## Markdown

- [MarkdownPreview](https://packagecontrol.io/packages/MarkdownPreview) - Preview markdown files in your browser.

## Git

- [GitOpen](https://packagecontrol.io/packages/GitOpen) - `git-open` integration.

## PHP

- [GotoPhpManual](https://packagecontrol.io/packages/GotoPhpManual) - Jump to php manual for symbol under cursor.
- [PHPCompletionsKit](https://packagecontrol.io/packages/PHP%20Completions%20Kit) - PHP completions.
- [PHPGrammar](https://packagecontrol.io/packages/PHPGrammar) - PHP smart macros.
- [PHPSnippets](https://packagecontrol.io/packages/PHPSnippets) - PHP snippets.
- [PHPUnitCompletions](https://packagecontrol.io/packages/PHPUnit%20Completions) - PHPUnit completions.
- [PHPUnitKit](https://packagecontrol.io/packages/PHPUnitKit) and [Test](https://packagecontrol.io/packages/Test) - PHPUnit support.  Read [running tests from within Sublime](/2023/05/05/running-phpunit-tests-within-sublime-text/).
- [LaravelTestingCompletions](https://packagecontrol.io/packages/LaravelTestingCompletions) - Laravel testing completions.
- [TailwindCSSCompletions](https://github.com/gerardroche/sublime-tailwind-css-completions) - Tailwind CSS completions.  Not available in package control.

## Window splitting

- [Origami](https://packagecontrol.io/packages/Origami) - Window layout management.
- [GotoDefinitionSplit](https://packagecontrol.io/packages/GotoDefinitionSplit) - Split definition in a side-by-side group.

## Syntaxes

- [ApacheConf](https://packagecontrol.io/packages/ApacheConf)
- [Sass](https://packagecontrol.io/packages/Sass)
- [Terraform](https://packagecontrol.io/packages/Terraform)
- [Tmux](https://github.com/gerardroche/sublime-tmux) - Not available in package control.
- [Vue Syntax Highlight](https://packagecontrol.io/packages/Vue%20Syntax%20Highlight)

## Package development

- [AutomaticPackageReloader](https://packagecontrol.io/packages/AutomaticPackageReloader)
- [ColorSchemeUnit](https://packagecontrol.io/packages/ColorSchemeUnit)
- [GenerateSyntaxTestAssertions](https://packagecontrol.io/packages/GenerateSyntaxTestAssertions)
- [SublimeTextAPICompletions](https://packagecontrol.io/packages/SublimeTextAPICompletions)
- [ToggleDebugMode](https://packagecontrol.io/packages/ToggleDebugMode)
- [UnitTesting](https://packagecontrol.io/packages/UnitTesting) and [Test](https://packagecontrol.io/packages/Test)

## Settings

Here are my settings.  These will not suit everybody, but they might help you discover some that you didn't know about.

Menu → Preferences → Settings

```json
{

    "animation_enabled": false,
    "caret_extra_bottom": 0,
    "caret_extra_top": 0,
    "fade_fold_buttons": false,
    "file_tab_style": "square",
    "fold_buttons": false,
    "inactive_sheet_dimming": false,
    "mouse_wheel_switches_tabs": false,
    "relative_line_numbers": true,
    "save_on_focus_lost": true,
    "scroll_context_lines": 8,
    "show_build": true,
    "show_git_status_in_status_bar": false,
    "show_indentation": false,
    "show_line_column": "compact",
    "show_rel_path": true,
    "show_sidebar_button": false,
    "show_syntax": false,
    "show_tab_close_buttons": false,

    "color_scheme": "MonokaiFree.sublime-color-scheme",
    "theme": "Adaptive.sublime-theme",

    "font_face": "Cascadia Code",
    "font_options": ["gray_antialias", "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "ss07", "ss08", "ss09", "ss10", "ss19", "ss20"],

    "draw_white_space": [
        "leading_mixed",
        "selection",
        "trailing",
        "isolated"
    ],

    "indent_guide_options":
    [
    ],

    "rulers":
    [
    ],

    "auto_complete_cycle": true,
    "auto_complete_trailing_symbols": true,
    "auto_complete_use_history": true,
    "auto_complete_with_fields": true,

    "phpunit.options":
    {
        "no-coverage": true,
    },

    "vintage_ctrl_keys": true,
    "vintage_start_in_command_mode": true,
    "vintageous_bell": "view",
    "vintageous_enable_sneak": true,
    "vintageous_handle_keys": {
        "<C-f12>": false,
        "<S-f1>": false,
        "<S-tab>": false,
        "<f1>": false,
        "i_<C-u>": false
    },
    "vintageous_sneak_use_ic_scs": 1,
    "vintageous_terminal": "gnome-terminal",
    "vintageous_use_ctrl_keys": true,
    "vintageous_use_super_keys": true,
}
```

Some of these settings might seem weird. For example, no line numbers, no animations, hardly anything in the status bar, really? Yes. I very much like a clear screen.

I use NeoVintageous commands like `yon` to toggle line numbers on and off when I need them. NeoVintageous has other toggle commands like `yow` to toggle wrapping, `yos` spelling, `yom` minimap. So I need them on all the time.

I hope this has been helpful. Take it easy my friends.

[^1]:
    https://en.wikipedia.org/wiki/Function_key
