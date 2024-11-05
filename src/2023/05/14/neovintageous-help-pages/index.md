---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: The NeoVintageous help pages
description: "Vim's help pages are distributed unmodified in NeoVintageous and are accessed in the same way as Vim. The help pages are provided unmodified so it's important to remember when using them that NeoVintageous may not yet implement that particular feature. Some differences are documented own help page."
lastUpdated: false
---

# The NeoVintageous Vim help system

Vim's [help pages](https://vimhelp.org?ref=blog.gerardroche.com) are distributed unmodified in NeoVintageous and are accessed in the same way as Vim.

```vim
:help
```

The help pages are provided unmodified so it's important to remember when using them that NeoVintageous may not yet implement that particular feature. Some differences are documented own help page.

```vim
:help neovintageous
```

Additionally, it's possible to jump to a specific help tag.

```vim
:help {subject}
```

Here are some examples:

```vim
:help c
:help w
:help ^
:help $
:help aw
:help ctrl-w_s
:help operator
:help word-motions
:help text-objects
```

Vim help pages for some of the ported plugins are also provided unmodified.

```vim
:help abolish
:help commentary
:help sneak
:help surround
:help unimpaired
```

The most valuable command inside the help pages is the jump to tag command. Position the cursor on a tag (e.g. `|bars|`) and hit `CTRL-]`.

The other two useful commands are jump back and jump forward, `CTRL-O` and `CTRL-I` respectively.

Lastly, the shorthand for `:help` is `:h`. In Vim this is usually written as `:h[elp]`. The square brackets indicate the optional part of the ex command.

I hope this has been helpful. Take it easy, my friends.

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
