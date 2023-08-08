---
tags: vim sublime-text neovintageous
title: NeoVintageous key handler
last_modified_at: 2023-08-08T23:28:12+01:00
---

By default NeoVintageous handles all input keys.  You can tell NeoVintageous to ignore selected keys, in which case those keys will fallback to Sublime.  Let's look at some examples.

If you want NeoVintageous to ignore `CTRL-F12`.

Menu → Preferences → Settings

```js
"vintageous_handle_keys": {
    "<C-f12>": false,
},
```

If you want to ignore keys for specific modes, use a mode prefix.

Prefix | Mode
:----- | :---
n_ | Normal
i_ | Insert
v_ | Visual
V_ | Visual line
b_ | Visual block
s_ | Select/Multiple-Cursor

No prefix implies all modes.

For example, consider the following setting

```js
"vintageous_handle_keys": {
    "<C-f12>": false,
    "i_<C-u>": false,
    "v_<C-f>": false,
},
```

The `<C-F12>` key is ignored for all modes, `<C-u>` is ignored only in insert mode and `<C-f>` is ignored in visual mode.

## Troubleshooting

You can debug Sublime key events by running `sublime.log_input(True)` in the console: Menu → View → Show Console. If Sublime is not receiving a key event, you may need to unbind an existing shortcut. For example, your OS might have a shortcut bound to that key so sublime isn't receiving the input.

## Further reading

* `:help nv`
