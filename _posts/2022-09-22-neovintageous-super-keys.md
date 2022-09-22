---
tags: neovintageous sublime-text vim
title: NeoVintageous Super keys
---

All "super"[^1] keys in NeoVintageous are disabled by default. You can toggle them on and off via the Command Palette, press <kbd>Ctrl+Shift+P</kbd> and select:

```
NeoVintageous: Toggle SUPER keys
```

The key notation for super keys is `<D-...>`.

## Case sensitivity

In Vim, the case of `{char}` in `<D-{char}>` does not matter; thus `<D-A>` and `<D-a>` are equivalent.  But in Sublime the case of `{char}` is case-sensitive, using the <kbd>SHIFT</kbd> key will produce a different key event. The advantage is that you can have mappings for both `<D-A>` and `<D-a>` and not just one or the other.

## Configuration

You can configure the key handler to ignore selected keys. The selected keys will fallback to Sublime. Read the [key handling](/2022/09/22/neovintageous-key-handler/) post for details.

## Troubleshooting

Operating systems make extensive use of the super-keys. If you find a super-key is not working, the key might be bound to a desktop command. Sublime won't receive the key event if the key is bound to a desktop command.

You can debug Sublime key events by running `sublime.log_input(True)` in the console: **Menu > View > Show Console**. If Sublime is not receiving the key event, then you will need to clear whatever desktop command the key is bound to. If you use Ubuntu the post [Ubuntu keymaps](/2018/02/17/ubuntu-keymaps) may help.

---

[^1]: Super keys are sometimes referred to as command-keys on OSX and window-keys on Windows.
