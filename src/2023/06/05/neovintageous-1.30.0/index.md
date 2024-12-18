---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.30.0
description: "NeoVintageous 1.30.0 has been released. This is more of a polishing release than big feature release. Highlights include improvements to the neovintageousrc file format, multiple cursors improvements, and session persistence improvements."
lastUpdated: false
---

# NeoVintageous 1.30.0

NeoVintageous 1.30.0 has been released.  This is more of a polishing release than big feature release.

Highlights include improvements to the neovintageousrc file format, multiple cursors improvements, and session persistence improvements.

## Vim neovintageousrc format improvements

The neovintageousrc file now allows leading white-space in ex commands.

```vim
" Yank and paste using system clipboard.
    noremap <leader>y "+y
    noremap <leader>Y "+Y
    noremap <leader>p "+p
    noremap <leader>P "+P
```

## Vim unmap ex commands

The neovintageousrc now supports unmapping commands.

```vim
:unm[ap]  {lhs}
:nun[map] {lhs}
:vu[nmap] {lhs}
:sunm[ap] {lhs}
:ou[nmap] {lhs}
```

## Vim `xnoremap` and `xunmap` ex commands

Some commands work both in Visual and Select mode, some in only one.  Select mode in sublime neovintageous is the same mode used by multiple cursor mode.

The `vnoremap` commands maps both Visual mode and Select mode.  The `xnoremap` command, on the other hand, only maps Visual mode.

```vim
:xn[oremap] {lhs} {rhs}
:xu[nmap]   {lhs}
```

## Toggle highlight line improvements

The unimpaired plugin `'cursorline'` toggle now toggles the gutter highlighting.

On  | Off | Toggle | Option
:---|:----|:-------|:------
`[oc` | `]oc` | `yoc` | `'cursorline'`

## Session persistence improvements

The last search pattern is now persisted on restarts.

## Multiple cursors improvements

Three new keys have been add `n` (next), `q` (skip), and `Q` (remove).  These compliment the existing keys `CTRL-n`, `CTRL-x`, `CTRL-p`, or `j`, `l`, and `k`.

## Resources

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
* [NeoVintageous 1.30.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.30.0?ref=blog.gerardroche.com)
