---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.20.0
lastUpdated: 2023-06-16T10:52:00+01:00
---

# NeoVintageous 1.20.0

NeoVintageous 1.20.0 has just been released. The highlights are search enhancements including a new `'smartcase'` option and `'ignorecase'` flags, new text objects, and command-line output improvements.

## Search

The new `'smartcase'` option brings a powerful feature to the search commands, but before we look at it we need to understand the `'ignorecase'` option.

```vim
'ignorecase' 'ic' 'noignorecase' 'noic'
```

By default, all search commands are *case-sensitive,* this includes the commands **`/`**, **`?`**, **`n`**, **`N`**, **`:s`**, **`*`**, and **`#`**.

For example, by default a search is case-sensitive:

```vim
/fizz
```

```
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
```

If the `'ignorecase'` option is on, a search is *case-insensitive.*

```vim
:set ignorecase
```

```vim
/fizz
```

```
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
```

{% include tip.html content="You can toggle a boolean option by shouting!

```vim
:set {option}!
```

and

```vim
:set {option}!
```" %}

{% include tip.html content="You can disable a boolean option by prefixing \"no\".

```vim
:set no{option}
```" %}

{% include tip.html content="You can read an option with a mark of interrogation (the value will be shown in the window status bar).

```vim
:set {option}?
```" %}

{% include tip.html content="If you want the option to stick around after restarts, set it in your \"neovintageousrc\" file, you can open it from the Command Palette.

```console
NeoVintageous: Open RC File
```" %}

### 'smartcase'

The `'smartcase'` option overrides `'ignorecase'` if the search pattern contains uppercase characters. It's only used when the search pattern is typed and the `'ignorecase'` option is on, this includes the commands **`/`**, **`?`**, **`n`**, **`N`**, and **`:s`**, but not **`*`**, and **`#`**.

```vim
'smartcase' 'scs' 'nosmartcase' 'noscs'
```

If both options are enabled, an all lowercase search pattern is *case-insensitive,* but if the pattern contains an uppercase character it becomes *case-sensitive*.

```vim
:set ignorecase
:set smartcase
```

```vim
/fizz
```

```
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
```

```vim
/fIzZ
```

```
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
```

### 'ignorecase' search flags

When **`\c`** appears anywhere in a search pattern, the whole pattern is handled like `'ignorecase'` is on.  The actual value of `'ignorecase'` and `'smartcase'` is ignored. **`\C`** does the opposite: Force matching case for the whole pattern.

```vim
/fizz\c
```

```
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
```

```vim
/fizz\C
```

```
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
```

## New text objects

There are two new text-objects: **`/`** and **`_`**. They work similar to the quote text-object: They select from the previous to the next and only work within lines.

```
a/
```

"A slash delimited string". Selects the text from the previous slash until the next slash ("an" object). Only works within the line.

```
i/
```

Like **`a/`** but excludes the slashes ("inner" object).

{% include tip.html content="Text objects are a series of commands that can be used in Visual mode or after an operator.

```
Hello /wo|rld/!
```

```
va/
```

```
Hello |/world/|!
```

```
ci/
```

```
Hello /|/!
```" %}

## Command-line output

Commands that generate output now reuse the same output panel, can be closed by pressing `Enter`, and have improved syntax highlighting.

### Buffers

```vim
:ls
```

Show all buffers.

indicator | description
--------- | -----------
**`%`** | the buffer in the current window
**`a`** | active buffer indicator
**`=`** | readonly buffer indicator
**`+`** | modified buffer indicator

Each buffer has a unique number.  That number will not change, thus you can always go to a specific buffer with ":buffer N", where N is the buffer number.

```vim
:b[uffer] [N]
```

### Registers

```vim
:reg[isters]
```

Display the contents of all numbered and named registers.


{% include tip.html content="Map it!


```vim
nnoremap <leader>r :reg<CR>
```" %}

### History

```vim
:his[tory]
```

Print the history of entered commands.

## New keys

All of the new keys can be mapped!

* `<k0>`, `<k1>`, `<k2>`, `<k3>`, `<k4>`, `<k5>`, `<k6>`, `<k7>`, `<k8>`, `<k9>`, `<kdivide>`, `<kenter>`, `<kminus>`, `<kmultiply>`, `<kperiod>`, `<kplus>`

## Further reading

* `:help nv`
* `:help 'smartcase'`
* `:help text-objects`
* `:help :ls`
* `:help :history`
* `:help :registers`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.20.0)
