---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous Ctrl keys
lastUpdated: false
---

# NeoVintageous Ctrl keys

Ctrl keys in NeoVintageous are enabled by default. You can toggle them via the Command Palette **NeoVintageous: Toggle CTRL keys**.

The key notation in Vim in `<C-...>` e.g. `<C-l>`.

## Case Sensitivity

In Vim, `<D-A>` and `<D-a>` are equal i.e. the case of `{char}` in `<D-{char}>` doesn't matter. But in Sublime Text all the keys are case-sensitive, using the <kbd>shift</kbd> key produces different key events. The advantage is that, unlike Vim, in Sublime Text you can create mappings for both `<D-A>` and `<D-a>`.

## Key Handler

You can configure the key handler to ignore selected keys. Read the [NeoVintageous Key Handler](/2022/09/22/neovintageous-key-handler/).

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/)
