---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: sublime-text vim neovintageous php git
title: My Sublime Text setup
lastUpdated: false
---

# My Sublime Text setup

Everyone wants to know the secret sauce.

![The Usual Suspects (1995)](/assets/images/the-usual-suspects.webp)

## Package Manager

[Package Control](https://packagecontrol.io) is a great package manager. See the [installation guide](https://packagecontrol.io/installation) on how to install it.

## Look and Feel

### Color scheme

I use an enhanced Monokai color scheme called [MonokaiFree](https://github.com/gerardroche/sublime-monokai-free).

### Sidebar File Icons

I use [A File Icon](https://packagecontrol.io/packages/A%20File%20Icon). Another good option is [FileIcons](https://packagecontrol.io/packages/FileIcons).

### Color scheme tweaks

::: details Menu → Preferences → Customize Color Scheme
```json
{
    "variables": {},
    "globals": {
        "selection_corner_style": "square",
    },
    "rules": []
}
```
:::

I like blocky selections!

![Robert Llewellyn in Red Dwarf (1988)](/assets/images/red-dwarf-kryten.webp)

### Theme tweaks

I like things a little more compact.

::: details Menu → Preferences → Customize Theme
```jsonc
{
    "variables": {
        "bg0": "#272822",
    },
    "rules": [
        // Sidebar alignment
        // Top margin off-by-one with top of view on hover
        {
            "class": "sidebar_container",
            "content_margin": [-11, 1, 0, 0]
        },
        // Tab alignment
        {
            "class": "tabset_control",
            "content_margin": [-5, 0, 0, 0]
        },
        // Tab spacing
        {
            "class": "tab_control",
            "content_margin": [14, 4, 9, 4]
        },
        // Tabset alignment
        {
            "class": "tabset_control",
            "connector_height": 1
        },
        // Sidebar row bg
        {
            "class": "tree_row",
            "attributes": ["highlighted"],
            "layer0.tint": "var(bg0)",
        }
    ]
}
```
:::

## Vim Engine

I love [Vim](https://www.vim.org/). It is my [Weapon of Choice](https://www.youtube.com/watch?v=wCDIYvFmgW8). The fastest, most reliable Vim engine for Sublime Text is [NeoVintageous](https://github.com/NeoVintageous/NeoVintageous).

I also use these NeoVintageous plugins:

- [NeoVintageous Files](https://github.com/gerardroche/NeoVintageousFiles) - File commands.
- [NeoVintageous Highlight Line](https://github.com/gerardroche/NeoVintageousHighlightLine) - Auto disable highlight line.
- [NeoVintageous Line Numbers](https://github.com/gerardroche/NeoVintageousLineNumbers) - Auto disable line numbers.

I also add [Origami](https://packagecontrol.io/packages/Origami) for additional window commands.

::: details Settings
Menu → Preferences → Settings
```json
{
    "scroll_context_lines": 8,
    "vintageous_handle_keys": {
        "<C-f12>": false,
        "<S-f1>": false,
        "<S-tab>": false,
        "<f1>": false,
        "i_<C-d>": false,
        "i_<C-u>": false,
    },
    "vintageous_bell": "view",
    "vintageous_enable_sneak": true,
    "vintageous_highlighted_yank_duration": 200,
    "vintageous_search_occ_style": "outline",
    "vintageous_sneak_use_ic_scs": 1,
    "vintageous_terminal": "kitty",
}
```
:::


::: details neovintageousrc
This is a snapshot of my neovintageousrc, see it [in full in my sublimefiles](https://github.com/gerardroche/sublimefiles/blob/master/User/.neovintageousrc).

```vim
set ignorecase
set nominimap
set smartcase

let mapleader=,

nnoremap <Leader><Leader> :Neovintageous action=reveal_side_bar<CR>
nnoremap <Leader>d :Neovintageous action=toggle_side_bar<CR>
nnoremap <Leader>en :Neovintageous action=open_rc_file<CR>
nnoremap <Leader>hu :RevertHunk<CR>

" Yank and paste using system clipboard
noremap <Leader>y "+y
noremap <Leader>Y "+Y
noremap <Leader>p "+p
noremap <Leader>P "+P

 " Sort
nnoremap <Leader>si vii:sort u<CR>
nnoremap <Leader>ss vip:sort u<CR>

 " Goto
noremap gS :GotoSymbolInProject<CR>
noremap gs :ShowOverlay overlay=goto text=@<CR>

" See https://github.com/gerardroche/sublime-test
nnoremap <D-n> :TestNearest<CR>
nnoremap <D-w> :TestFile<CR>

" See https://github.com/sublimelsp/LSP
nnoremap [d :LspPrevDiagnostic<CR>
nnoremap ]d :LspNextDiagnostic<CR>
noremap <Leader>K :LspHover only_diagnostics=true<CR>
noremap FileType css,go,html,js,php,vue <C-w>gd :LspSymbolDefinitionSplit<CR>
noremap FileType css,go,html,js,php,vue <Leader>cs :LspSymbolRename<CR>
noremap FileType css,go,html,js,php,vue gA :LspSymbolReferences<CR>
noremap FileType css,go,html,js,php,vue gD :LspSymbolTypeDefinition<CR>
noremap FileType css,go,html,js,php,vue ga :LspCodeActions<CR>
noremap FileType css,go,html,js,php,vue gd :LspSymbolDefinition<CR>

" See https://packagecontrol.io/packages/Origami
nnoremap <C-w>z :ToggleZoomPane fraction=0.98<CR>
nnoremap <Leader>wh :CarryFileToPane direction=left<CR>
nnoremap <Leader>wj :CarryFileToPane direction=down<CR>
nnoremap <Leader>wk :CarryFileToPane direction=up<CR>
nnoremap <Leader>wl :CarryFileToPane direction=right<CR>
```
:::

## Projects Command Palette

I use [Sesame](/projects/sublime-sesame). It provides commands to open, add, remove, and switch folders. This is by far my favourite plugin. For example, suppose you organise your projects like this:

```
❯ ~/projects
├── laravel
│   ├── fortify
│   ├── framework
│   ├── jetstream
│   ├── passport
│   └── vite-plugin
├── sublimelsp
│   └── LSP
└── wbond
    ├── package_control
    └── packagecontrol.io
```

Sesame will prompt you with this:

```
laravel/fortify
laravel/framework
laravel/jetstream
laravel/passport
laravel/vite-plugin
sublimelsp/LSP
wbond/package_control
wbond/packagecontrol.io
```

## Linting

I use [Sublime Linter](https://packagecontrol.io/packages/SublimeLinter) for linting. Here are some of the linters I use:

- [Sublime Linter eslint](https://packagecontrol.io/packages/SublimeLinter-eslint)
- [Sublime Linter flake8](https://packagecontrol.io/packages/SublimeLinter-flake8)
- [Sublime Linter mypy](https://packagecontrol.io/packages/SublimeLinter-mypy)
- [Sublime Linter php-cs-fixer](https://packagecontrol.io/packages/SublimeLinter-contrib-php-cs-fixer) (pull requests for [v3.0](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/16) and [ST4](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/15) support)
- [Sublime Linter php](https://packagecontrol.io/packages/SublimeLinter-php)

::: info NOTE
I'm currently using LSP instead.
:::

## LSP

I use [LSP](https://github.com/sublimelsp/LSP) ([LSP-volar](https://github.com/sublimelsp/LSP-volar), [LSP-eslint](https://github.com/sublimelsp/LSP-eslint), [phpactor](https://github.com/phpactor/phpactor), [LSP-tailwindcss](https://github.com/sublimelsp/LSP-tailwindcss)).

## Documentation

I use [GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation) for opening documentation for the keyword under the cursor. I map it to F1.

::: details Create a key binding
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

::: info
The context selector exclusion is to allow support for Goto PHP Manual, see [below](/2023/06/12/my-sublime-text-setup/#php).
:::

## Sidebar

[Side Bar Tools](https://packagecontrol.io/packages/SideBarTools) adds useful tools to the sidebar.

## Markdown

[Markdown Preview](https://packagecontrol.io/packages/MarkdownPreview) opens rendered markdown files in your browser.

## Git

- [Git Open](https://github.com/gerardroche/sublime-git-open) `git-open` integration.

- [Gitk](https://github.com/gerardroche/sublime-gitk) `gitk` integration.

- [Git Open Modified](https://github.com/gerardroche/sublime-git-open-modified) Open modified files.

## PHP

- [Goto PHP Manual](https://github.com/gerardroche/sublime-goto-php-manual) Open PHP documentation.

- [PHP Completions Kit](https://github.com/gerardroche/sublime-phpck) PHP completions.

- [PHP Grammar](https://github.com/gerardroche/sublime-php-grammar) PHP macros.

- [PHP Snippets](https://github.com/gerardroche/sublime-php-snippets) PHP snippets.

- [PHPUnit Completions](https://github.com/gerardroche/sublime-phpunit-completions) PHPUnit completions.

- [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) PHPUnit integration.

- [Laravel Testing Completions](https://github.com/gerardroche/sublime-laravel-testing-completions) Laravel testing completions.

## Windows

- [Origami](https://packagecontrol.io/packages/Origami) - Window commands.

- [Goto Definition Split](https://github.com/gerardroche/sublime-goto-definition-split) - Split definition.

## Syntaxes

- [Apache Conf](https://packagecontrol.io/packages/ApacheConf)

- [Sass](https://packagecontrol.io/packages/Sass)

- [Terraform](https://packagecontrol.io/packages/Terraform)

- [Tmux](https://github.com/gerardroche/sublime-tmux)

- [Vue Syntax Highlight](https://packagecontrol.io/packages/Vue%20Syntax%20Highlight)

## Settings

Here is a snapshot of my settings. These are not everyone's taste, but they might help you discover some settingss that you didn't know about.

::: details
Menu → Preferences → Settings
```json
{
    "animation_enabled": false,
    "block_caret": false,
    "caret_extra_bottom": 0,
    "caret_extra_top": 0,
    "caret_style": "blink",
    "debug": false,
    "detect_indentation": false,
    "enable_tab_scrolling": false,
    "fade_fold_buttons": false,
    "file_tab_style": "square",
    "fold_buttons": false,
    "font_size": 8,
    "gutter": true,
    "hide_new_tab_button": true,
    "hide_tab_scrolling_buttons": true,
    "highlight_modified_tabs": true,
    "inactive_sheet_dimming": false,
    "line_numbers": false,
    "line_padding_bottom": 0,
    "line_padding_top": 0,
    "margin": 0,
    "mouse_wheel_switches_tabs": false,
    "preview_on_click": true,
    "relative_line_numbers": true,
    "ruler_style": "stippled",
    "save_on_focus_lost": true,
    "scroll_context_lines": 8,
    "show_build": false,
    "show_definitions": false,
    "show_errors_inline": false,
    "show_file": true,
    "show_file_name": true,
    "show_git_status_in_status_bar": false,
    "show_indentation": true,
    "show_legacy_color_schemes": false,
    "show_line_column": "compact",
    "show_point": false,
    "show_rel_path": false,
    "show_sidebar_button": true,
    "show_spell": false,
    "show_syntax": true,
    "show_tab_close_buttons": false,
    "spell_check": false,
    "word_wrap": false,
    "auto_complete": true,
    "auto_complete_cycle": true,
    "auto_complete_delayx": 1000,
    "auto_complete_trailing_symbols": true,
    "auto_complete_use_history": true,
    "auto_complete_with_fields": true,
    "color_scheme": "MonokaiFree.sublime-color-scheme",
    "monokaifree.vcs_status_badges": false,
    "theme": "Adaptive.sublime-theme",
    "font_face": "Cascadia Code",
    "font_options": [
        "dlig",
        "no_italic",
        "ss01", "ss02", "ss03", "ss04", "ss05",
        "ss06", "ss07", "ss08", "ss09", "ss10",
        "ss11", "ss12", "ss13", "ss14", "ss15",
        "ss16", "ss17", "ss18", "ss19", "ss20",
    ],
    "rulers": [],
    "draw_white_space": ["selection"],
    "draw_white_space_on_clear": ["selection"],
    "draw_white_space_on_reset": ["leading_mixed", "selection", "trailing", "isolated"],
    "draw_white_space_toggle_off": ["leading_mixed", "selection", "trailing", "isolated"],
    "draw_white_space_toggle_on": ["selection"],
    "indent_guide_options": [],
    "indent_guide_options_toggle_on": ["draw_normal", "solid", "draw_active"],
    "ignored_snippets": ["PHP/*"],
    "index_exclude_gitignore": false,
    "goto_php_manual.path": "${PROJECTS_PATH}/.man",
    "phpunit.options": { "colors": true, "no-progress": true, "no-coverage": true, },
    "phpunit.paratest": true,
    "phpunit.strategy": "tmux",
    "phpunit.tmux_clear_scrollback": false,
    "phpunit.tmux_target": ":.{top}",
    "sesame.path": [{"path": "~/projects"}],
    "scroll_context_lines": 8,
    "vintageous_handle_keys": {
        "<C-f12>": false,
        "<S-f1>": false,
        "<S-tab>": false,
        "<f1>": false,
        "i_<C-d>": false,
        "i_<C-u>": false,
    },
    "vintageous_bell": "view",
    "vintageous_enable_sneak": true,
    "vintageous_highlighted_yank_duration": 200,
    "vintageous_search_occ_style": "outline",
    "vintageous_sneak_use_ic_scs": 1,
    "vintageous_terminal": "kitty",
}
```
:::

## Sublime Text Development

- [Automatic Package Reloader](https://packagecontrol.io/packages/AutomaticPackageReloader)

- [Color Scheme Unit](https://packagecontrol.io/packages/ColorSchemeUnit)

- [Sublime Text API Completions](https://github.com/gerardroche/sublime-api-completions)

- [Toggle Debug Mode](https://github.com/gerardroche/sublime-toggle-debug-mode)

- [Unit Testing](https://packagecontrol.io/packages/UnitTesting)
