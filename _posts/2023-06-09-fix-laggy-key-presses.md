---
tags: ubuntu
title: Fix laggy key presses
---

![Halt and Catch Fire (2014 - 2017)](/assets/halt-and-catch-fire.webp)

If key presses are slow or laggy, check the system configuration, for example on Ubuntu you can configure keyboard repeat interval and delay:

```sh
gsettings set org.gnome.desktop.peripherals.keyboard repeat-interval 3
gsettings set org.gnome.desktop.peripherals.keyboard delay 150
```

On KDE you can open a window to change the 'Delay' and 'Rate':

```sh
systemsettings5 kcm_keyboard
```

On OSX, if holding down a key does not repeat the command (a feature of OSX), you make a key repeat by running this once at the terminal:

```sh
defaults write com.sublimetext.3 ApplePressAndHoldEnabled -bool false
```

In general if you are on X11 type systems you could directly use:

```sh
xset r rate <milliseconds_before_repeating> <repetitions_per_second>
```

## Ubuntu

You can adjust the delay and repeat interval via the Settings GUI.

**Settings → Universal Access → Typing → Repeat Keys**

![Ubuntu Univeral Access Typing](/assets/ubuntu-universal-access-typing-1.webp)

Adjust the delay and speed to taste.

![Ubuntu Univeral Access Typing](/assets/ubuntu-universal-access-typing-2.webp)

To script it use **gsettings**.

```sh
gsettings set org.gnome.desktop.peripherals.keyboard delay 150
gsettings set org.gnome.desktop.peripherals.keyboard repeat-interval 3
```
