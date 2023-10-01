---
tags: vim sublime-text neovintageous
title: NeoVintageous key handler
last_modified_at: 2023-10-01T01:25:41+01:00
---

NeoVintageous is a powerful tool that can make your Sublime Text experience feel more like the good old days of Vim. One of its handy features is its ability to handle key inputs. However, there might be instances where you want NeoVintageous to take a step back and let Sublime Text handle certain keys. In this guide, I'll show you how to make NeoVintageous ignore specific keys and even do it selectively for different modes. Let’s dive in and explore these possibilities.

## Ignoring Keys Globally

Sometimes, you just want NeoVintageous to ignore a specific key across all modes. For example, let's say you want to give Sublime Text control over `CTRL-F12`. Here's how you can do it:

1. Open the Command Palette with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Choose `Preferences: NeoVintageous Settings`.

3. Apply the following JSON configuration:



   ```js
   "vintageous_handle_keys": {
       "<C-f12>": false
   }
   ```

Now, NeoVintageous will gracefully step aside when you press `CTRL-F12`, allowing Sublime Text to take control.

## Ignoring Keys in Specific Modes

NeoVintageous is flexible enough to let you decide which modes should have certain keys ignored. To achieve this, you can use a mode prefix to specify when NeoVintageous should be hands-off with specific keys. Here are the mode prefixes at your disposal:

- `n_` for Normal mode
- `i_` for Insert mode
- `v_` for Visual mode
- `V_` for Visual line mode
- `b_` for Visual block mode
- `s_` for Select/Multiple-Cursor mode

If you want NeoVintageous to ignore different keys for different modes, you can create a tailored configuration like this:

```js
"vintageous_handle_keys": {
    "<C-f12>": false,   // Ignored in all modes
    "i_<C-u>": false,   // Ignored only in Insert mode
    "v_<C-f>": false,   // Ignored only in Visual mode
}
```

With this setup, NeoVintageous will respect your mode-specific preferences. For example, `<C-F12>` will be ignored in all modes, `<C-u>` will only be ignored in Insert mode, and `<C-f>` will only be ignored in Visual mode.

## Special Keys

In Vim, certain keys hold special significance. You can find a useful list of these special keys, along with their notations and codes, in the Vim documentation's [key-notation and key-codes section](https://vimhelp.org/intro.txt.html#key-notation).

## Troubleshooting Tips

If you ever find that Sublime Text isn't receiving a key event as expected, here are some troubleshooting tips:

1. **Enable Input Logging**: You can enable input logging in Sublime Text by running `sublime.log_input(True)` in the console. To access the console, go to Menu > View > Show Console. This will help you see what Sublime Text is receiving when you press a key.

2. **Unbind Existing Shortcuts**: Sometimes, your operating system or other Sublime Text packages may have shortcuts bound to specific keys. This can interfere with NeoVintageous. Make sure to unbind any conflicting shortcuts if necessary to ensure Sublime Text gets the input it needs.

By following these guidelines, you can tailor NeoVintageous to your liking and ensure that Sublime Text behaves just the way you want it to. Happy coding!

## Further reading

* `:help nv`
