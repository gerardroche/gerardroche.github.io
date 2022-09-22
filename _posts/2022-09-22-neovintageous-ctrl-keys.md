---
tags: neovintageous sublime-text vim
title: NeoVintageous Ctrl keys
---

All control keys in NeoVintageous are enabled by default. You can toggle them on and off via the Command Palette, press <kbd>Ctrl+Shift+P</kbd> and select:

```console
NeoVintageous: Toggle CTRL keys
```

The key notation for control keys is `<C-...>`.

In Vim, the case of `{char}` in `<C-{char}>` does not matter; thus `<C-A>` and `<C-a>` are equivalent.  But in Sublime the case of `{char}` is case-sensitive, using the <kbd>SHIFT</kbd> key will produce a different key event. The advantage is that you can have mappings for both `<C-A>` and `<C-a>` and not just one.

You can tell NeoVintageous to ignore selected keys. Those keys will be delegated back to Sublime. See the [key handler](/2022/09/22/neovintageous-key-handler/) post for details configuring key handling.
