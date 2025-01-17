---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: ubuntu sh
title: Remapping CapsLock to Escape
description: "Do you use your CapsLock? Perhaps you like shouting at people. If you're a vim user, I suggest remapping it to Escape or at least something more useful."
lastUpdated: false
---

# Remapping CapsLock to Escape

Do you use your CapsLock? Perhaps you like shouting at people. If you're a vim user, I suggest remapping it to Escape or at least something more useful.

 On Ubuntu it's so easy to remap escape:

```bash
gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"
```

If you decide you don't like it, reset it:

```bash
gsettings reset org.gnome.desktop.input-sources xkb-options
```

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
