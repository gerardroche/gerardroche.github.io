---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: ubuntu sh
title: Fix laggy key presses
description: "If key presses are slow or laggy, check the system configuration. On Ubuntu you can configure keyboard repeat interval and delay."
lastUpdated: false
---

# Fix laggy key presses

If key presses are slow or laggy, check the system configuration.

## Ubuntu

On **Ubuntu** you can configure keyboard repeat interval and delay:

```bash
gsettings set org.gnome.desktop.peripherals.keyboard repeat-interval 3
gsettings set org.gnome.desktop.peripherals.keyboard delay 150
```

### GUI

Settings → Universal Access → Typing → Repeat Keys

![Ubuntu Univeral Access Typing](/assets/images/ubuntu-universal-access-typing-1.webp)

Adjust the delay and speed.

![Ubuntu Univeral Access Typing](/assets/images/ubuntu-universal-access-typing-2.webp)

## KDE

On **KDE** you can open a window to change the 'Delay' and 'Rate':

```bash
systemsettings5 kcm_keyboard
```

## Mac

On **Mac**, if holding down a key does not repeat the command (a feature of Mac), you make a key repeat by running this once at the terminal:

```bash
defaults write com.sublimetext.3 ApplePressAndHoldEnabled -bool false
```

## X11

On **X11 based systems** you can directly use `xset`:

```bash
xset r rate <milliseconds_before_repeating> <repetitions_per_second>
```
