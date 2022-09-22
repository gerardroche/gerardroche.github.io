---
tags: neovintageous sublime-text vim
title: NeoVintageous key handler
---

By default NeoVintageous handles all keys. You can tell NeoVintageous to ignore selected keys, in which case the handling of those keys will be delegated back to Sublime.

You can configure key handling via the `vintageous_handle_keys` setting. Settings are accessed via the **Preferences > Settings** menu item. Let's look at some examples.

If you want NeoVintageous to ignore `<C-f>`:

```json
{
    "vintageous_handle_keys": {
        "<C-f>": false
    }
}
```

If you want to ignore keys for specific modes, use one of the available mode prefixes. No prefix implies all modes.

```
n_ - Normal
i_ - Insert
v_ - Visual
V_ - Visual line
b_ - Visual block
s_ - Select
```

For example to disable `<C-u>` in insert mode and `<C-f>` in visual mode:

```json
{
    "vintageous_handle_keys": {
        "i_<C-u>": false,
        "v_<C-f>": false,
    }
}
```

---

And that's all there is to it.
