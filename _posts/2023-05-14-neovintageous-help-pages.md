---
tags: vim sublime-text neovintageous
title: The NeoVintageous help pages
---

![Chris O'Dowd in the IT Crowd (2006)](/assets/2023-05-14-chris-o-dowd-in-the-it-crowd.webp)

Vim's [help pages](https://vimhelp.org) are distributed with NeoVintageous and are accessible in the same way you would access them in Vim:

```vim
:help
```

The help pages are provided unmodified so it's important to remember when referencing them that NeoVintageous is an emulation of Vim and may not yet implement that particular feature. Some features and differences specific to Sublime Text are in their own help page:

```vim
:help nv
```

It's possible to go to whatever you want help on, by giving an argument to the `:help` command. Here are a few examples:

```vim
:help operator
:help c
:help text-objects
:help iw
```

Help pages for ported plugins are also provided unmodified:

```vim
:help abolish
:help commentary
:help sneak
:help surround
:help unimpaired
```

NeoVintageous specific plugin help pages are also available:

```vim
:help highlightedyank
:help multiple-cursors
```
