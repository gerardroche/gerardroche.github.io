---
tags: ubuntu
title: Remapping CapsLock to Escape
---

![Office Space (1999)](/assets/office-space.webp)

Do you use your CapsLock? Perhaps you like shouting at people. If you're a Vim user, remap it to Escape, if not, remap it to something useful. On Ubuntu it's as easy as apple pie:

```sh
gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"
```

If you decide you don't like it, reset it:

```sh
gsettings reset org.gnome.desktop.input-sources xkb-options
```
