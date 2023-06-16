---
tags: sublime-text
title: My Sublime Text setup
last_modified_at: 2023-06-16T03:44:00+01:00
---

![The Usual Suspects (1995)](/assets/the-usual-suspects.webp)

## Package Control

Package Control is the package manager bundled with Sublime Text.

**Menu → Install Package Control**

Once installed you can install any package from [packagecontrol.io](https://packagecontrol.io).

**Command Palette → Package Control: Install Package**

## Look and Feel

- [MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) - An enhanced Monokai color scheme.
- [FileIcons](https://packagecontrol.io/packages/FileIcons) - Colored icons for the sidebar.

I use the **Adaptive** theme.

Menu → Preferences → Select Theme → Adaptive

And I have the following [customizations](/2023/05/25/monokai-free-a-sublime-text-color-scheme/):

- make the carets yellow
- make the block caret and selections style square
- make line highlight blue

Menu → Preferences → Customize Color Scheme

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

- [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous) - An advanced vim engine.
- [NeoVintageousFiles](https://packagecontrol.io/packages/NeoVintageousFiles) - Side bar and overlay file commands.
- [NeoVintageousHighlightLine](https://packagecontrol.io/packages/NeoVintageousHighlightLine) - Auto disable highlight line in insert and visual mode.
- [NeoVintageousLineNumbers](https://packagecontrol.io/packages/NeoVintageousLineNumbers) - Auto disable relative line numbers in insert mode.
- [NeoVintageousToggle](https://packagecontrol.io/packages/NeoVintageousToggle) - Toggle NeoVintageous on and off.

## Goto project

- [Sesame](https://packagecontrol.io/packages/Sesame) - A quick way to open, add, switch, and remove projects.

This is by far my favourite plugin.  Read [sesame - a sublime text plugin](/2023/05/19/sesame-a-sublime-text-plugin/) for a quick guide on how it works.

## Linting

- [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter) - A code linting framework.
- [SublimeLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint)
- [SublimeLinter-flake8](https://packagecontrol.io/packages/SublimeLinter-flake8)
- [SublimeLinter-mypy](https://packagecontrol.io/packages/SublimeLinter-mypy)
- [SublimeLinter-php-cs-fixer](https://packagecontrol.io/packages/SublimeLinter-contrib-php-cs-fixer) - Pending [v3.0](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/16) support and [ST4](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/15) support.
- [SublimeLinter-php](https://packagecontrol.io/packages/SublimeLinter-php)

Here are some of my SublimeLinter settings.

Command Palette → Preferences: SublimeLinter Settings


```json
{
    "debug": false,
    "highlights.demote_while_editing": "all",
    "lint_mode": "save",
    "delay": 3,
    "no_column_highlights_line": false,
    "show_hover_line_report": false,
    "show_hover_region_report": false,
    "show_marks_in_minimap": false,
    "styles": [
        {
            "icon": "x",
            "mark_style": "fill",
        },
        {
            "icon": "x",
            "mark_style": "fill",
        }
    ],
}
```

## Documentation

- [GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation)

I use `f1` for my help keymap.

Menu → Preferences → Key Bindings

*The context selector is to support GotoPHPManual.*

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

## Side Bar

- [SideBarTools](https://packagecontrol.io/packages/SideBarTools) - Some useful tools to add to your sidebar context menu.

## Markdown

- [MarkdownPreview](https://packagecontrol.io/packages/MarkdownPreview) - Preview your markdown files in your browser.

## Git

- [GitOpen](https://packagecontrol.io/packages/GitOpen) - `git-open` integration

## PHP

- [GotoPhpManual](https://packagecontrol.io/packages/GotoPhpManual) - Jump to manual for symbol under cursor.
- [PHPCompletionsKit](https://packagecontrol.io/packages/PHP%20Completions%20Kit) - PHP completions.
- [PHPGrammar](https://packagecontrol.io/packages/PHPGrammar) - PHP smart macros and enhancements.
- [PHPSnippets](https://packagecontrol.io/packages/PHPSnippets) - PHP snippets.
- [PHPUnitCompletions](https://packagecontrol.io/packages/PHPUnit%20Completions) - PHPUnit completions.
- [PHPUnitKit](https://packagecontrol.io/packages/PHPUnitKit) and [Test](https://packagecontrol.io/packages/Test) - Read [running tests from within Sublime](/2023/05/05/running-phpunit-tests-within-sublime-text/).
- [LaravelTestingCompletions](https://packagecontrol.io/packages/LaravelTestingCompletions) - Laravel testing completions.
- [TailwindCSSCompletions](https://github.com/gerardroche/sublime-tailwind-css-completions) - Tailwind CSS completions. Not available in package control.

## Window splitting

- [Origami](https://packagecontrol.io/packages/Origami)
- [GotoDefinitionSplit](https://packagecontrol.io/packages/GotoDefinitionSplit)

NeoVintageous has support for window splitting when Origami is installed. For example, `CTRL-W s` split horizontally, `CTRL-W v` split vertically, and `CTRL-W n` split new view.

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

Here are some of my settings. These will not suit everybody, but they might help you discover some that you didn't know about.

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

Some of these settings might seem weird. For example, no line numbers, really? Yes.  I use NeoVintageous and the command `yon` or `con` to toggle line numbers on when I need them.  I don't like inline errors or show definitions because they get in the way, but I use NeoVintageous [jump-to-error](/2023/05/24/neovintageous-jumping-to-errors/) commands.

I hope this has been helpful. What are your questions? Please open issues about problems installing or using any of the packages. Or even to just let me know about the packages I've missed. Take it easy my friends.
