---
post: true
sidebar: false
aside: false
tags: ubuntu sh
title: Remapping CapsLock to Escape
lastUpdated: 2023-06-16T03:46:00+01:00
---

# Remapping CapsLock to Escape

Do you use your CapsLock? Perhaps you like shouting at people. If you're a vim user, I suggest remapping it to Escape or at least something more useful.

![Office Space (1999)](/assets/images/office-space.webp)

 On Ubuntu it's so easy to remap escape:

```bash
gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"
```

If you decide you don't like it, reset it:

```bash
gsettings reset org.gnome.desktop.input-sources xkb-options
```
