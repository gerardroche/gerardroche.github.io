---
tags: neovintageous sublime-text vim
title: NeoVintageous - Options
---

![Rounders (1998)](/assets/rounders.webp)

NeoVintageous supports a number of Vim options. These options come in three forms:

Type | Description
:--- | :----------
Boolean | Can only be on or off.
Number | Has a numeric value.
String | Has a string value.

Besides changing options with the ":set" command for the current view, you can also set options when Sublime Text starts via a neovintageousrc file. See the [NeoVintageous vimrc file](/2022/11/21/vimrc-and-neovintageousrc/).

## Setting options

Show current value of option:

```vim
:set number?
```

The value is shown in the status bar.

Turn option on:

```vim
:set number
```

Turn option off:

```vim
:set nonumber
```

Toggle option:

```vim
:set number!
:set invnumber
```

Set option:

```vim
:set winaltkeys=menu
```

## NeoVintageous Options

### 'autoindent' option

Proxies to the Sublime Text setting `auto_indent`.

Boolean.

```vim
:set autoindent
:set ai
:set noautoindent
:set noai
```

### 'belloff' option

Default is "".

String ("" and "all").

Specifies for which events the visual bell will not be rung. Useful if you don't like the visual bell.

```vim
:set belloff=
:set belloff=all
:set bo=
:set bo=all
```

### 'expandtab' option

Proxies to the Sublime Text setting `translate_tabs_to_spaces`.

Boolean.

```vim
:set expandtab
:set et
:set noexpandtab
:set noet
```

### 'hlsearch' option

Default is on.

Boolean.

```vim
:set hlsearch
:set hls
:set nohlsearch
:set nohls
```

### 'ignorecase' option

Default is off.

Boolean.

```vim
:set ignorecase
:set ic
:set noignorecase
:set noic
```

### 'incsearch' option

Default is on.

Boolean.

```vim
:set incsearch
:set is
:set noincsearch
:set nois
```

### 'list' option

Proxies to the Sublime Text setting `draw_white_space` where **on** is equal to `["all"]` and **off** is equal to `["selection", "none"]`.

Boolean.

```vim
:set list
:set nolist
```

### 'magic' option

Default is on.

Boolean.

```vim
:set magic
:set nomagic
```

### 'menu' option

Default is on.

Boolean.

Not in Vim.

```vim
:set menu
:set nomenu
```

### 'minimap' option

Default is on.

Boolean.

Not in Vim.

```vim
:set minimap
:set nominimap
```

### 'modeline' option

Default is on.

Boolean.

```vim
set modeline
set ml
set nomodeline
set noml
```

### 'modelines' option

Default is 5.

Number.

```vim
:set modelines=5
:set mls=5
```

### 'number' option

Proxies to the Sublime Text setting `line_numbers`.

Boolean.

```vim
:set number
:set nu
:set nonu
:set nonumber
```

### 'relativenumber' option

Proxies to the Sublime Text setting `relative_line_numbers`.

Boolean.

```vim
:set relativenumber
:set rnu
:set norelativenumber
:set nornu
```

### 'scrolloff' option

Proxies to the Sublime Text setting `scroll_context_lines`.

Number.

```vim
:set scrolloff=8
:set so=8
```

### 'shell' option

Default is `$SHELL` or "sh", Win32: "cmd.exe".

String.

```vim
:set shell=/bin/bash
```

### 'sidebar' option

Default is on.

Boolean.

Not in Vim.

```vim
:set sidebar
:set nosidebar
```

### 'sidescrolloff' option

Default is 5.

Number.

```vim
:set sidescrolloff=5
:set siso=5
```

### 'smartcase' option

Default is off.

Boolean.

```vim
set smartcase
set scs
set nosmartcase
set noscs
```

### 'spell' option

Proxies to the Sublime Text setting `spell_check`.

Boolean.

```vim
set spell
set nospell
```

### 'statusbar' option

Default is on.

Boolean.

Not in Vim.

```vim
:set statusbar
:set nostatusbar
```

### 'tabstop' option

Proxies to the Sublime Text setting `tab_size`.

Number.

```vim
:set tabstop=4
:set ts=4
```

### 'textwidth' option

Proxies to the Sublime Text setting `wrap_width`.

Number.

```vim
:set textwidth=80
:set ts=80
```

### 'winaltkeys' option

Default is "menu".

String ("no", "yes", "menu").

```vim
:set winaltkeys=menu
:set winaltkeys=no
:set winaltkeys=yes
:set wak=menu
:set wak=no
:set wak=yes
```

### 'wrap' option

Proxies to the Sublime Text setting `word_wrap`.

Boolean.

```vim
set wrap
set nowrap
```

### 'wrapscan' option

Default is on.

Boolean.

```vim
set wrapscan
set nowrapscan
```

## Wrapping up

NeoVintageous's defaults are usually good. I have the following set in my neovintageousrc file:

```vim
set ignorecase
set nominimap
set smartcase
```

I also set the following Sublime Text settings proxies:

`'expandtab'`:

```js
"translate_tabs_to_spaces": true,
```

`'textwidth'`:

```js
"wrap_width": 80,
```

`'scrolloff'`:

```js
"scroll_context_lines": 8,
````

Set the defaults for option proxies in Sublime Text via Menu → Preferences → Settings.
