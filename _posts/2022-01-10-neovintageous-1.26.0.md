---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.26.0
---

NeoVintageous 1.26.0 has been released.  The highlights are new text objects via a port of the vim-targets plugin, multiple cursor improvements, bug fixes, and more.

## New text objects

A basic port of the [vim-targets](https://github.com/NeoVintageous/NeoVintageous/issues/781) plugin has been included which defines additional text objects:

- `i,` `i.` `i;` `i:` `i+` `i-` `i=` `i~` `i_` `i*` `i#` `i/` `i|` `i\` `i&` `i$`
- `a,` `a.` `a;` `a:` `a+` `a-` `a=` `a~` `a_` `a*` `a#` `a/` `a|` `a\` `a&` `a$`


**MarkDown**: `ci*` to change an emphasized phrase when the cursor `|` is located as in this is `*a t|est*`;

**LaTeX**: `ci$` to change an inline equation when the cursor `|` is located as in this is `$a^{te|st}$`;

**Python**: `ci,` to change a list element or function argument in the examples `def f(a, |b=c, d) and [12, 3|4, 56]`.

## Multiple cursor operations

Operations like paste are now more flexible in multiple cursor modes.

Here are some examples using the following text where `|` is current cursor position.

```
test |copy text
fizz buzz
fizz buzz
fizz buzz
```

The following will yank the word "copy" and paste into the multiple cursor:

`yiwj<C-n><C-n><C-n><Esc>Pi<Space><Esc><Esc>`

```
test copy text
fizz copy buzz
fizz copy buzz
fizz copy buzz
```

When a multiple cursor is started you can enter normal mode by pressing `<Esc>` or `J` at which point you can use operations and motions on the multiple selection. For example `y`, `c`, `d`, `p`, motions, text-objects, plugins, etc. will work on the multiple selection.

The following will cut the word "buzz" insert the text "change " and then paste on the end the text that was cut.

`j<C-n><C-n><C-n><Esc>ciwchange<Space>p<Esc>`

```
test copy text
fizz change buzz
fizz change buzz
fizz change buzz
```

You do some fancy time-saving operations on a multiple cursor.

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.26.0)
