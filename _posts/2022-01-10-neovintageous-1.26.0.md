---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.26.0
last_modified_at: 2023-08-08T23:28:12+01:00
---

NeoVintageous 1.26.0 has been released.  The highlights are new text objects and multiple cursor improvements.

## New vim text objects

New text objects inspired by [vim-targets](https://github.com/NeoVintageous/NeoVintageous/issues/781):

```
i,
i.
i;
i:
i+
i-
i=
i~
i_
i*
i#
i/
i|
i\
i&
i$
```

and

```
a,
a.
a;
a:
a+
a-
a=
a~
a_
a*
a#
a/
a|
a\
a&
a$`
```

**Examples**

MarkDown: `ci*` to change an emphasized phrase when the cursor `|` is located as in this is `*a t|est*`;

LaTeX: `ci$` to change an inline equation when the cursor `|` is located as in this is `$a^{te|st}$`;

Python: `ci,` to change a list element or function argument in the examples `def f(a, |b=c, d) and [12, 3|4, 56]`.

## Vim multiple cursor operations

Operations like paste are now more flexible in multiple cursor modes.  Here are some examples (pipe character is the current cursor position).

```
test |copy text
fizz buzz
fizz buzz
fizz buzz
```

Yank text "copy ".

```vim
yaw
```

Move down one line and make a 3 multiple cursors.

```vim
j<C-n><C-n><C-n>
```

```
test copy text
fizz |buzz|
fizz |buzz|
fizz |buzz|
```

Now escape to normal mode, paste yanked text.

```vim
<Esc>P
```

And lastly, exit the multiple cursors.

```vim
<Esc><Esc>
```

```
test copy text
fizz copy| buzz
fizz copy buzz
fizz copy buzz
```

When a multiple cursor is started, enter normal mode by pressing `<Esc>` or `J`.  From normal mode you can use vim commands normally.  For example operations, motions, text-objects, etc. all work fine with a multiple selection.

The following will cut the word "buzz" insert the text "change " and then paste on the end the text that was cut.

`j<C-n><C-n><C-n><Esc>ciwchange<Space>p<Esc>`

```
test copy text
fizz change buzz
fizz change buzz
fizz change buzz
```

You do some very fancy time-saving operations on a multiple cursor.

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.26.0)
