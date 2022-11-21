---
tags: neovintageous sublime-text vim
title: NeoVintageous Ctrl keys
---

All control keys in NeoVintageous are enabled by default. You can toggle them on and off via the Command Palette, press <kbd>Ctrl+Shift+P</kbd> and select:

```
NeoVintageous: Toggle CTRL keys
```

The key notation for control keys is `<C-...>`.

## Case sensitivity

In Vim, the case of `{char}` in `<C-{char}>` does not matter; thus `<C-A>` and `<C-a>` are equivalent.  But in Sublime the case of `{char}` is case-sensitive, using the <kbd>SHIFT</kbd> key will produce a different key event. The advantage is that you can have mappings for both `<C-A>` and `<C-a>` and not just one or the other.

## Configuration

You can configure the key handler to ignore selected keys. The selected keys will fallback to Sublime. Read the [key handling](/2022/09/22/neovintageous-key-handler/) post for details.

## Further reading

* `:help neovintageous`
* `:help <C-`
