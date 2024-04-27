---
post: true
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous Super keys
lastUpdated: 2023-08-16T01:37:22+01:00
---

# NeoVintageous Super keys

![Superman (1978)](/assets/images/superman.webp)

["Super" keys](https://en.wikipedia.org/wiki/Super_key_(keyboard_button)) are disabled by default in NeoVintageous. You can enable them via the Command Palette **NeoVintageous: Toggle SUPER keys**. Super keys are more commonly labelled as a Windows key, or Command key (⌘) on Mac.

> \[!NOTE\]
> Since [v1.32](/2023/08/12/neovintageous-1.32.0/) super-keys are enabled by default.

The key notation in Vim is `<D-...>`. For example, [create a mapping](/2023/05/16/neovintageous-mapping-sublime-text-commands/):

```vim
noremap <D-i> :GotoSymbolInProject<CR>
```

## Case Sensitivity

In Vim, `<D-A>` and `<D-a>` are equal i.e. the case of `{char}` in `<D-{char}>` doesn't matter. But in Sublime Text all the keys are case-sensitive, using the <kbd>shift</kbd> key produces different key events. The advantage is that, unlike Vim, in Sublime Text you can create mappings for both `<D-A>` and `<D-a>`.

## Key Handler

You can configure the key handler to ignore selected keys. Read the [NeoVintageous Key Handler](/2022/09/22/neovintageous-key-handler/).

## Troubleshooting

Operating systems make extensive use of super keys. When you find a super key is not working, the might be "shadowed" by a desktop key binding. In that case, Sublime Text won't be receiving the key event.

Debug the event by running `sublime.log_input(True)` in the console. Open the Sublime Text Console via Menu → View → Show Console. If Sublime Text is not receiving the key event, you will need to clear the desktop key binding. If you use Ubuntu reading [Ubuntu Keymaps](/2018/02/17/ubuntu-keymaps/) may help.
