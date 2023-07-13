---
tags: sublime-text
title: My Sublime Text setup
last_modified_at: 2023-07-13T16:53:43+01:00
---

![The Usual Suspects (1995)](/assets/the-usual-suspects.webp)

We all want to the secret sauce, but it's the usual suspects.

## Package Control

Package Control is the package manager bundled with Sublime Text.  Once installed you can install any package from [packagecontrol.io](https://packagecontrol.io).

**Menu → Install Package Control**


**Command Palette → Package Control: Install Package**

## Look and Feel

- [MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) - An enhanced Monokai color scheme.
- [FileIcons](https://packagecontrol.io/packages/FileIcons) - File icons for the sidebar.

I use the **Adaptive** theme.

Menu → Preferences → Select Theme → Adaptive

And I have the following [color scheme customizations](/2023/05/25/monokai-free-a-sublime-text-color-scheme/):

- make the caret yellow
- make the block caret and selections style square
- make line highlight blue

Menu → Preferences → Customize Color Scheme

```json
{
    "variables": {},
    "globals": {
        "caret": "yellow",
        "block_caret": "yellow",
        "line_highlight": "#66d9ef22",
        "block_caret_corner_style": "square",
        "selection_corner_style": "square"
    },
    "rules": []
}
```

![Robert Llewellyn in Red Dwarf (1988)](/assets/red-dwarf-kryten.webp)

## Vim

- [NeoVintageous](https://packagecontrol.io/packages/NeoVintageous) - An advanced vim engine for sublime.
- [NeoVintageousFiles](https://packagecontrol.io/packages/NeoVintageousFiles) - Single key side bar and overlay file commands.
- [NeoVintageousHighlightLine](https://packagecontrol.io/packages/NeoVintageousHighlightLine) - Auto disable highlight line in insert and visual mode.
- [NeoVintageousLineNumbers](https://packagecontrol.io/packages/NeoVintageousLineNumbers) - Auto disable relative line numbers in insert mode.
- [NeoVintageousToggle](https://packagecontrol.io/packages/NeoVintageousToggle) - Toggle NeoVintageous on and off.

## Goto project

- [Sesame](https://packagecontrol.io/packages/Sesame) - A quick way to open, add, switch, and remove projects.

This is by far my favourite plugin.  Read [sesame - a sublime text plugin](/2023/05/19/sesame-a-sublime-text-plugin/) for a quick guide on how it works.

## Linting

- [SublimeLinter](https://packagecontrol.io/packages/SublimeLinter) - A code linting framework.
- [SublimeLinter-eslint](https://packagecontrol.io/packages/SublimeLinter-eslint) - [ESLint](https://github.com/eslint/eslint) linter.
- [SublimeLinter-flake8](https://packagecontrol.io/packages/SublimeLinter-flake8) - [Flake8](https://flake8.pycqa.org/en/latest/) linter.
- [SublimeLinter-mypy](https://packagecontrol.io/packages/SublimeLinter-mypy) - [MyPy](https://mypy-lang.org/) linter.
- [SublimeLinter-php-cs-fixer](https://packagecontrol.io/packages/SublimeLinter-contrib-php-cs-fixer) - [PHP-CS-Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) linter.  *Pending [v3.0](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/16) support and [ST4](https://github.com/jhoff/SublimeLinter-contrib-php-cs-fixer/pull/15) support.*
- [SublimeLinter-php](https://packagecontrol.io/packages/SublimeLinter-php) - [PHP](https://www.php.net/) linter.

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

- [GotoDocumentation](https://packagecontrol.io/packages/GotoDocumentation) - Jump to documentation for the current keyword.

I use <kbd>F1</kbd> as my jump key because the <kbd>F1</kbd> key has become universally associated with help.[^1]

Menu → Preferences → Key Bindings

*The context selector is for GotoPHPManual support.*

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

- [Origami](https://packagecontrol.io/packages/Origami) - Layout management.
- [GotoDefinitionSplit](https://packagecontrol.io/packages/GotoDefinitionSplit) - Split definition in group.

NeoVintageous has support for window splitting when Origami is installed.  For example, `CTRL-W s` split horizontally, `CTRL-W v` split vertically, and `CTRL-W n` split new view.

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

Here are some of my settings.  These will not suit everybody, but they might help you discover some that you didn't know about.

Menu → Preferences → Settings

```json
{
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
}
```

Some of these settings might seem weird.  For example, no line numbers, really? Yes.  I use NeoVintageous and the command `yon` or `con` to toggle line numbers on when I need them.  I don't like inline errors or show definitions because they get in the way, but I use NeoVintageous [jump-to-error](/2023/05/24/neovintageous-jumping-to-errors/) commands.

Settings apply to all syntaxes, for example find in files, so I make sure it defaults to not draw white space.  You may want to add other defaults like no wrapping.

Menu → Preferences → Settings - Syntax Specific (when find in files is open)

```json
{
    "word_wrap": false,
    "draw_white_space": [],
}
```

You can do the same with other syntaxes, like Markdown.

```json
{
    "draw_centered": false,
    "spell_check": true,
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "word_wrap": false
}
```

CSS.


```json
{
    "tab_size": 2
}
```

I hope this has been helpful.  What are your questions? Please open issues about problems installing or using any of the packages.  Or even to just let me know about the packages I've missed.  Take it easy my friends.

[^1]:
    https://en.wikipedia.org/wiki/Function_key
