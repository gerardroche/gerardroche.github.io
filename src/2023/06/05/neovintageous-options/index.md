---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Options
excerpt: "NeoVintageous supports a number of vim options. Besides changing options with the :set command in an active view, you can set options at startup via a neovintageousrc file, NeoVintageous's answer to the vimrc file."
lastUpdated: false
---

# NeoVintageous - Options

NeoVintageous supports a number of vim options.

These options come in three forms:

Type | Description
:--- | :----------
Boolean | Can only be on or off.
Number | Has a numeric value.
String | Has a string value.

Besides changing options with the ":set" command in an active view, you can set options at startup via a neovintageousrc file, NeoVintageous's answer to the vimrc file.

## Setting options

Turn an option on:

```vim
:set number
```

Turn an option off:

```vim
:set nonumber
```

Toggle it:

```vim
:set number!
```

Set an option:

```vim
:set winaltkeys=menu
```

Show the current value in the status bar:

```vim
:set number?
```

Now that you know how to set options.  Let's take a look at what vim options are supported by NeoVintageous.  The premier vim engine for Sublime!

## NeoVintageous Vim Options

### Help

To lookup help for an option:

```vim
:help 'option'
```

Or the shorthand:

```vim
:h 'option'
```

For example to see the help page for the `'smartcase'` option:

```vim
:h 'smartcase'
```

Read [how to use neovintageous vim help pages](/2023/05/14/neovintageous-help-pages/) for a short introduction to vim help pages.

### Defaults

Some options are aliased to Sublime Text settings.  To set the defaults for aliased options you must set the setting in Sublime Text.  All other options can be initialized in your neovintageousrc file.

### Supported options

Option | Type
:----- | :---
`'autoindent'` | `boolean`
`'belloff'` | `string`
`'expandtab'` | `boolean`
`'hlsearch'` | `boolean`
`'ignorecase'` | `boolean`
`'incsearch'` | `boolean`
`'list'` | `boolean`
`'magic'` | `boolean`
`'menu'` | `boolean`
`'minimap'` | `boolean`
`'modeline'` | `boolean`
`'modelines'` | `number`
`'number'` | `boolean`
`'relativenumber'` | `boolean`
`'scrolloff'` | `number`
`'shell'` | `string`
`'sidebar'` | `boolean`
`'sidescrolloff'` | `number`
`'smartcase'` | `boolean`
`'spell'` | `boolean`
`'statusbar'` | `boolean`
`'tabstop'` | `number`
`'textwidth'` | `number`
`'winaltkeys'` | `string`
`'wrap'` | `boolean`
`'wrapscan'` | `boolean`

#### 'autoindent' boolean option

Calculates indentation automatically when pressing enter.  Alias of `auto_indent` setting.

```vim
:set autoindent
:set ai
:set noautoindent
:set noai
```

#### 'belloff' string option

Specifies for which events the visual bell will not be rung.  Useful if you don't like the visual bell. Default is "". Valid values are "" or "all".

```vim
:set belloff=
:set belloff=all
:set bo=
:set bo=all
```

#### 'expandtab' boolean option

Set to true to insert spaces when tab is pressed.  Alias of `translate_tabs_to_spaces` setting.

```vim
:set expandtab
:set et
:set noexpandtab
:set noet
```

#### 'hlsearch' boolean option

When there is a previous search pattern, highlight all its matches. Default is on.

```vim
:set hlsearch
:set hls
:set nohlsearch
:set nohls
```

Use the vim command `:nohlsearch` to clear search highlighting.  Try mapping it to `<C-l>` for quick access:

```vim
nnoremap <C-l> :nohlsearch<CR>
```

It's also possible customize the colors and styles for search highlighting. Read the [NeoVintageous 1.7.0](/2018/09/02/neovintageous-1.7.0/) release notes for a short guide.

#### 'ignorecase' boolean option

Ignore case in search patterns.  Default is off.

Also see `'smartcase'`.

Can be overruled by using "\c" or "\C" in the pattern.

Read [the curious case of sublime vim search](/2020/12/11/the-curious-case-of-vim-search/) for a short introduction on understanding `'ignorecase'` and `'smartcase'`.

```vim
:set ignorecase
:set ic
:set noignorecase
:set noic
```

#### 'incsearch' boolean option

While typing a search command, show where the pattern, as it was typed so far, matches.  The matched string is highlighted.  If the pattern is invalid or not found, nothing is shown.  Default is on.

Note that the match will be shown, but the cursor will return to its original position when no match is found and when pressing `<Esc>`.  You still need to finish the search command with `<Enter>` to move the cursor to the match.

```vim
:set incsearch
:set is
:set noincsearch
:set nois
```

#### 'list' boolean option

Controls when white space is drawn.  Alias of `draw_white_space` setting.

State | Description
:---- | :----------
**On**  | Equal to `["all"]` in `draw_white_space` setting
**Off** | Equal to `["selection", "none"]` in `draw_white_space` setting

```vim
:set list
:set nolist
```

To quickly toggle `'list'` use the unimpaired plugin option toggle `yol`.

#### 'magic' boolean option

Changes the special characters that can be used in search patterns. Default is on.

```vim
:set magic
:set nomagic
```

#### 'menu' boolean option

Toggle visibility of the menu.  This is specific to Sublime.

```vim
:set menu
:set nomenu
```

#### 'minimap' boolean option

Toggle visibility of the minimap.  This is specific to Sublime.

```vim
:set minimap
:set nominimap
```

#### 'modeline' boolean option

Modelines are a way to automatically set options. When a view is loaded a number of lines at the beginning and end of the file are checked for "set" commands.

If `'modeline'` is on `'modelines'` gives the number of lines that is checked for set commands.  If `'modeline'` is off or `'modelines'` is zero no lines are checked.  Default is on.  See `modeline`.

1st form example:

```vim
vim:noai:list ts=4 tw=77
```

2nd form example:

```vim
vim: set noai list ts=4 tw=75:
```

```vim
set modeline
set ml
set nomodeline
set noml
```

#### 'modelines' number option

If `'modeline'` is on `'modelines'` gives the number of lines that is checked for set commands.  If `'modeline'` is off or `'modelines'` is zero no lines are checked.  Default is 5.  See `modeline`.


```vim
:set modelines=5
:set mls=5
```

#### 'number' boolean option

Draw line numbers in the gutter.  Alias of `line_numbers` setting.

```vim
:set number
:set nu
:set nonu
:set nonumber
```

To quickly toggle `'number'` use the unimpaired plugin option toggle `yon`.

#### 'relativenumber' boolean option

Draw each line number as the distance from the current line.  Alias of `relative_line_numbers` setting.

```vim
:set relativenumber
:set rnu
:set norelativenumber
:set nornu
```

To quickly toggle `'relativenumber'` use the unimpaired plugin option toggle `yor`.

To auto disable relative numbers in Insert mode, install the [NeoVintageous Line Number](https://packagecontrol.io/packages/NeoVintageousLineNumbers?ref=blog.gerardroche.com) plugin.

#### 'scrolloff' number option

Minimal number of screen lines to keep above and below the cursor.  This affects all selection changes, like selection dragging, page-up/page-down and moving the caret.  Alias of `scroll_context_lines` setting.

```vim
:set scrolloff=8
:set so=8
```

#### 'shell' string option

Name of the shell to use for `!` and `:!` commands.  This option cannot be set from a modeline.  Default is `$SHELL` or "sh", Win32: "cmd.exe".

```vim
:set shell=/bin/bash
```

#### 'sidebar' boolean option

Toggle visibility of the sidebar.  This is specific to Sublime.  Default is on.

```vim
:set sidebar
:set nosidebar
```

#### 'sidescrolloff' number option

The minimal number of screen columns to keep to the left and to the right of the cursor if `'nowrap'` is set.  Default is 5.

```vim
:set sidescrolloff=5
:set siso=5
```

#### 'smartcase' boolean option

Override the `'ignorecase'` option if the search pattern contains upper case characters.  Only used when the search pattern is typed and `'ignorecase'` option is on.  Used for the commands `/`, `?`, `n`, `N`, `:g` and `:s`.  Default is off.

Read [the curious case of vim search](/2020/12/11/the-curious-case-of-vim-search/) for a short introduction on understanding `'ignorecase'` and `'smartcase'`.

```vim
set smartcase
set scs
set nosmartcase
set noscs
```

#### 'spell' boolean option

When on spell checking will be done.  Alias of `spell_check` setting.

```vim
set spell
set nospell
```

#### 'statusbar' boolean option

Toggle visibility of the status bar.  This is specific to Sublime.

```vim
:set statusbar
:set nostatusbar
```

#### 'tabstop' number option

The number of spaces a tab is considered equal to.  Alias of `tab_size` setting.

```vim
:set tabstop=4
:set ts=4
```

#### 'textwidth' number option

Set to a value other than 0 to force wrapping at that column rather than the window width.  Alias of `wrap_width` setting.

```vim
:set textwidth=80
:set ts=80
```

#### 'winaltkeys' option

Some GUI versions allow the access to menu entries by using the ALT key in combination with a character that appears underlined in the menu.  This conflicts with the use of the ALT key for mappings and entering special characters.  This option tells what to do:

Setting | Description
:------ | :----------
no | Don't use ALT keys for menus.  ALT key combinations can be mapped, but there is no automatic handling.
yes | ALT key handling is done by the windowing system.  ALT key combinations cannot be mapped.
menu | Using ALT in combination with a character that is a menu shortcut key, will be handled by the windowing system.  Other keys can be mapped.

Default is menu.

```vim
:set winaltkeys=menu
:set winaltkeys=no
:set winaltkeys=yes
:set wak=menu
:set wak=no
:set wak=yes
```

#### 'wrap' boolean option

Disables horizontal scrolling if enabled.  This option changes how text is displayed.  It doesn't change the text in the buffer, see `'textwidth'` for that.  Alias of `word_wrap` setting.

```vim
set wrap
set nowrap
```

To quickly toggle `'wrap'` use the unimpaired plugin option toggle `yow`.

#### 'wrapscan' boolean option

Searches wrap around the end of the file.  Default is on.

```vim
set wrapscan
set nowrapscan
```

## My sublime setup

I have the following vim options set in my neovintageousrc file:

```vim
set ignorecase
set nominimap
set smartcase
```

And the following settings:

```js
"translate_tabs_to_spaces": true,
"wrap_width": 80,
"scroll_context_lines": 8,
```

I hope this enhances your sublime vim experience. Take it easy, my friends.

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
