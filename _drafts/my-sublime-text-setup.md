---
tags: sublime-text
title: My Sublime Text Setup
---

## Package Control

Package Control is the Sublime Text package manager.  It's bundled with Sublime Text, but you need to explicitly install it:

```
Menu → Install Package Control
```

Once installed you can install any package from the [default channel](https://packagecontrol.io).

```
Command Palette → Package Control: Install Package
```

## Look and Feel

- [MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) - An enhanced version of the Monokai color scheme.
- [FileIcons](https://packagecontrol.io/packages/FileIcons) - Adds specific, colored icons for most file types for the sidebar.

I use the Adaptive theme bundled with Sublime.

```
Menu → Preferences → Select Theme → Adaptive
```

And have the following color scheme [customizations](/2023/05/25/monokai-free-a-sublime-text-color-scheme/):

- make cursor color a vibrant yellow
- make the block caret style square
- make selections style square
- make line highlight a tint of blue

```
Menu → Preferences → Customize Color Scheme
```

```json
{
    "variables": {},
    "globals": {
        "caret": "yellow",
        "block_caret": "yellow",
        "line_highlight": "#66d9ef44",
        "block_caret_corner_style": "square",
        "selection_corner_style": "square"
    },
    "rules": []
}
```

![Robert Llewellyn in Red Dwarf (1988)](/assets/red-dwarf-kryten.webp)

## Vim

- [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous)
- [NeoVintageousHighlightLine](https://packagecontrol.io/packages/NeoVintageousHighlightLine)
- [NeoVintageousLineNumbers](https://packagecontrol.io/packages/NeoVintageousLineNumbers)
- [NeoVintageousToggle](https://packagecontrol.io/packages/NeoVintageousToggle)

## Goto project

- [Sesame](https://packagecontrol.io/packages/Sesame)

Sesame is a quick way to open, add, switch, and remove projects and folders.  It's by far my favourite plugin.  Read [sesame - a sublime text plugin](/2023/05/19/sesame-a-sublime-text-plugin/) for a short introduction on how to use it.

## Linting

- [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter)
- [SublimeLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint)
- [SublimeLinter-flake8](https://packagecontrol.io/packages/SublimeLinter-flake8)
- [SublimeLinter-mypy](https://packagecontrol.io/packages/SublimeLinter-mypy)
- [SublimeLinter-php-cs-fixer](https://packagecontrol.io/packages/SublimeLinter-contrib-php-cs-fixer) - Pending [v3.0](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/16) and [ST4](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/15) support.
- [SublimeLinter-php](https://packagecontrol.io/packages/SublimeLinter-php)

## Documentation

- [GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation)

I use `f1` as my help keymap.

```
Menu → Preferences → Key Bindings
```

*The context selector exclusion is for GotoPHPManual, see the PHP section.*

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

## Side Bar Tools

- [SideBarTools](https://packagecontrol.io/packages/SideBarTools)

## Markdown

- [MarkdownPreview](https://packagecontrol.io/packages/SideBarTools)

## Git

- [GitOpen](https://packagecontrol.io/packages/GitOpen)
- [GitSavvy](https://packagecontrol.io/packages/GitSavvy)

## PHP

- [GotoPhpManual](https://packagecontrol.io/packages/GotoPhpManual)
- [PHPCompletionsKit](https://packagecontrol.io/packages/PHP%20Completions%20Kit)
- [PHPGrammar](https://packagecontrol.io/packages/PHPGrammar)
- [PHPSnippets](https://packagecontrol.io/packages/PHPSnippets)
- [PHPUnitCompletions](https://packagecontrol.io/packages/PHPUnit%20Completions)
- [PHPUnitKit](https://packagecontrol.io/packages/PHPUnitKit) and [Test](https://packagecontrol.io/packages/Test)
- [LaravelTestingCompletions](https://packagecontrol.io/packages/LaravelTestingCompletions)
- [TailwindCSSCompletions](https://github.com/gerardroche/sublime-tailwind-css-completions) - Not available in pc.

## Window splitting

- [Origami](https://packagecontrol.io/packages/Origami)
- [GotoDefinitionSplit](https://packagecontrol.io/packages/GotoDefinitionSplit)

## Syntaxes

- [ApacheConf](https://packagecontrol.io/packages/ApacheConf)
- [Sass](https://packagecontrol.io/packages/Sass)
- [Terraform](https://packagecontrol.io/packages/Terraform)
- [Tmux](https://github.com/gerardroche/sublime-tmux) - Not available in pc.
- [Vue Syntax Highlight](https://packagecontrol.io/packages/Vue%20Syntax%20Highlight)

## Package development

- [AutomaticPackageReloader](https://packagecontrol.io/packages/AutomaticPackageReloader)
- [ColorSchemeUnit](https://packagecontrol.io/packages/ColorSchemeUnit)
- [GenerateSyntaxTestAssertions](https://packagecontrol.io/packages/GenerateSyntaxTestAssertions)
- [SublimeTextAPICompletions](https://packagecontrol.io/packages/SublimeTextAPICompletions)
- [ToggleDebugMode](https://packagecontrol.io/packages/ToggleDebugMode)
- [UnitTesting](https://packagecontrol.io/packages/UnitTesting) and [Test](https://packagecontrol.io/packages/Test)

## Settings

Here are some of settings. These will not suit everybody, but they might help you discover some settings that you didn't know about.

Menu → Preferences → Settings

```js
    "draw_white_space": [
        "leading_mixed",
        "selection",
        "trailing",
        "isolated"
    ],
    "ensure_newline_at_eof_on_save": true,
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_automatic_white_space": true,
    "trim_trailing_white_space_on_save": true,
    "wrap_width": 80,

    "animation_enabled": false,
    "caret_extra_bottom": 0,
    "caret_extra_top": 0,
    "caret_style": "solid",
    "enable_tab_scrolling": false,
    "fold_buttons": false,
    "highlight_line": true,
    "highlight_modified_tabs": true,
    "line_numbers": false,
    "overlay_scroll_bars": "enabled",
    "relative_line_numbers": true,
    "remember_full_screen": true,
    "save_on_focus_lost": true,
    "scroll_context_lines": 8,
    "tree_animation_enabled": false,

    "auto_complete_commit_on_tab": true,
    "auto_complete_cycle": true,
    "auto_complete_trailing_symbols": true,
    "auto_complete_use_history": true,
    "auto_complete_with_fields": true,

    "show_definitions": false,
    "show_errors_inline": false,
    "show_git_status_in_status_bar": false,
    "show_legacy_color_schemes": false,
    "show_tab_close_buttons": false,

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
```
