---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.27.0
lastUpdated: false
---

# NeoVintageous 1.27.0

NeoVintageous 1.27.0 has been released.  The highlights are surround function, surround tag, surround `S{char}` now works in visual line mode, `%` improvements, and jumps like `*`, `#` now accept a count.

## Vim surround plugin enhancements

Vim surround is a tool for dealing with pairs of "surroundings."  Examples
of surroundings include parentheses, quotes, and HTML tags.  They are
closely related to what Vim refers to as `text-objects`.

### Vim surround functions

If f, F, or `<C-F>` is used, NeoVintageous waits for a function name to insert.  The target text will be wrapped in a function call. If f is used, the text is wrapped with () parentheses; F adds additional spaces inside the parentheses. `<C-F>` inserts the function name inside the parentheses.

Old text | Command | New text ~
-------- | ------- | ----------
"hello" | `ysiWfprint<cr>` | `print("hello")`
"hello" | `ysiWFprint<cr>` | `print( "hello" )`
"hello" | `ysiW<C-f>print<cr>` | `(print "hello")`

### Vim surround tags

A `t` is a pair of HTML or XML tags.

Old text | Command | New text ~
-------- | ------- | ----------
`<div>he\|llo</div>` | `cit` | `<div>\|</div>` (insert mode)
`<div>he\|llo</div>` | `cat` | `\|` (insert mode)
`<div>he\|llo</div>` | `dit` | `<div>\|</div>` (normal mode)
`<div>he\|llo</div>` | `dit` | `\|` (normal mode)
`<div>he\|llo</div>` | `yit` | `<div>\|hello</div>` (inner content yanked)
`<div>he\|llo</div>` | `yat` | `<div>\|hello</div>` (outer content yanked)

In surround, if `t` or `<` is used, NeoVintageous waits for an HTML/XML tag to insert.

Old text | Command | New text ~
-------- | ------- | ----------
`<div>he\|llo</div>` | `cst<li>` | `\|<li>hello</li>`
`<div>he\|llo</div>` | `csttli>` | `\|<li>hello</li>`
`'he\|llo'` | `cs'<div>` | `\|<div>hello</div>`
`he\|llo` | `ysiw<div>` | `\|<div>hello</div>`
`<div>he\|llo</div>` | `dst` | `\|hello`

You may specify attributes here and they will be stripped from the closing tag. If replacing a tag, its attributes are kept in the new tag. End your input with `>` to discard the those attributes.

Old text | Command | New text ~
-------- | ------- | ----------
`<div class="x">he\|llo</div>` | `cst<li<CR>` | `\|<li class="x">hello</li>`
`<div class="x">he\|llo</div>` | `cst<li>` | `\|<li>hello</li>`

If `<C-T>` is used, the tags will appear on lines by themselves.

Old text | Command | New text ~
-------- | ------- | ----------
`<div>he\|llo</div>` | `cst<C-t>li>` | `|<li>\nhello\n</li>`
`<div class="x">he\|llo</div>` | `cst<C-t>li>` | `\|<li>\nhello\n</li>`
`<div class="x">he\|llo</div>` | `cst<C-t>li<CR>` | `\|<li class="x">\nhello\n</li>`

### Vim next item jump command improvements

Finding the next item in this line after or under the cursor and jump to its match now works in comments and works correctly for HTML tags.

Old text | Command | New text ~
-------- | ------- | ----------
`<d\|iv>hello</div>` | `%` | `<div>hello<\|/div>`
`<div>hello<\|/div>` | `%` | `<\|div>hello</div>`

## Further reading

* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.27.0)
* `:help nv`
* `:help surround`
* `:help text-objects`
* `:help various-motions`
