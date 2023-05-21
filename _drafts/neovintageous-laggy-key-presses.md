---
tags: neovintageous sublime-text vim
title: NeoVintageous - Fix laggy key presses
---

On OSX, if holding down a key like "j" does not repeat the command (a feature of
OSX), you make a key repeat by running this once at the terminal:

```sh
defaults write com.sublimetext.3 ApplePressAndHoldEnabled -bool false
```

If key presses are slow or laggy first check the system configuration, for
example on Ubuntu you can configure keyboard repeat interval and delay:

```sh
gsettings set org.gnome.desktop.peripherals.keyboard repeat-interval 15
gsettings set org.gnome.desktop.peripherals.keyboard delay 180
```

and for KDE:

```sh
systemsettings5 kcm_keyboard
```

brings up a window where you can change 'Delay' and 'Rate' as required.

In general if you are on X11 type systems you could directly use:

```sh
xset r rate <milliseconds_before_repeating> <repetitions_per_second>
```
