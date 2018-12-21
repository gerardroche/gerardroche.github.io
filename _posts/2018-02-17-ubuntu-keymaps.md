---
tags: ubuntu
---
There are several ways to configure keymaps in Ubuntu. You can use the out-of-the-box GUI, you can install `dconf-editor` (`sudo apt-get install dconf-tools`) to be able to view and edit them, or use the `gsettings` command line tool. The `gsettings` command opens up the possibility of keeping your keymaps under source control via custom shell scripts.

## gsettings

`gsettings` is a straight forward command line tool. You can list keymaps, get keymaps, and set keymaps, as well as other commands that you'll probably never use or need.

List keymaps.

```sh
$ gsettings list-recursively | grep toggle-fullscreen
org.gnome.desktop.wm.keybindings toggle-fullscreen @as []
```

Let's use `<Super>u` to toggle full screen.

```sh
$ gsettings set org.gnome.desktop.wm.keybindings  toggle-fullscreen "['<Super>u']"
```

The value is generally expected to be an array, which means we can bind multiple keymaps to the same command. The benefits of this is that you may want to add a keymap to a command and keep the defaults too.

```sh
$ gsettings list-recursively | grep unmaximize
org.gnome.desktop.wm.keybindings unmaximize ['<Super>Down', '<Alt>F5']
$ gsettings set org.gnome.desktop.wm.keybindings unmaximize "['<Super>Down', '<Alt>F5', '<Super>j']"
$ gsettings list-recursively | grep unmaximize
org.gnome.desktop.wm.keybindings unmaximize ['<Super>Down', '<Alt>F5', '<Super>j']
```

Sometimes a keymap that you want to use is bound to another command. You'll need to clear the old keymap for the new keymap to work e.g. suppose we want to map `<Super>`, but it's currently mapped to toggle an active notification, then we need to clear it before setting out new keymap.

```
gsettings set org.gnome.shell.keybindings focus-active-notification "[]"
```

You can do interesting things like mapping the `Capslock` to `Esc` (if you like that sort of thing).

```
gsettings set org.gnome.desktop.input-sources xkb-options "['caps:escape']"
```

## A shell script

Keeping your keymaps reusable across systems can be as straight forward as a shell script, perhaps [keep it under source control alongside your dotfiles](https://github.com/gerardroche/dotfiles/blob/master/src/bin/configure-ubuntu-keybindings). Here's an sample of some keymaps I use in a reusable script.

```sh
#!/bin/sh
set -e
echo -n "configuring keybindings... "

# Window management: Resizing.
gsettings set org.gnome.desktop.wm.keybindings  unmaximize                  "['<Super>j']"
gsettings set org.gnome.desktop.wm.keybindings  maximize                    "['<Super>k']"
gsettings set org.gnome.desktop.wm.keybindings  toggle-fullscreen           "['<Super>u']"
gsettings set org.gnome.desktop.wm.keybindings  maximize-horizontally       "['<Super>minus']"
gsettings set org.gnome.desktop.wm.keybindings  maximize-vertically         "['<Super>backslash']"

# Window management: Moving.
gsettings set org.gnome.mutter.keybindings      toggle-tiled-left           "['<Super>h']"
gsettings set org.gnome.mutter.keybindings      toggle-tiled-right          "['<Super>l']"
gsettings set org.gnome.desktop.wm.keybindings  move-to-center              "['<Super>c']"
gsettings set org.gnome.desktop.wm.keybindings  move-to-side-w              "['<Shift><Super>h', '<Super>1']"
gsettings set org.gnome.desktop.wm.keybindings  switch-to-workspace-down    "['<Shift><Super>j']"
gsettings set org.gnome.desktop.wm.keybindings  switch-to-workspace-up      "['<Shift><Super>k']"
gsettings set org.gnome.desktop.wm.keybindings  move-to-side-e              "['<Shift><Super>l', '<Super>2']"
gsettings set org.gnome.desktop.wm.keybindings  move-to-workspace-down      "['<Ctrl><Super>j']"
gsettings set org.gnome.desktop.wm.keybindings  move-to-workspace-up        "['<Ctrl><Super>k']"

echo "done."
```
