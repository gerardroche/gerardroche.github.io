---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.31.0
last_modified_at: 2023-07-13T09:02:59+01:00
---

NeoVintageous 1.31.0 has been released.  Highlights include new and improved window commands, marks, goto file commands, and an advanced reveal in side bar command.

## Sublime Text Vim window commands

Most window commands require [origami](https://packagecontrol.io/packages/Origami) to work properly.  Origami is a great a plugin for managing windows.  [I highly recommend it](/2023/06/12/my-sublime-text-setup/).

**Vim window splitting**

```
CTRL-W s
CTRL-W S
CTRL-W CTRL-S
:sp[lit] [file]
```

Split current window in two.  The result is two views on the same view.  If `[file]` is given it will be edited in the new view.

```
CTRL-W CTRL-V
CTRL-W v
:vs[plit] [file]
```

Like `:split`, but split vertically.

```
CTRL-W n
CTRL-W CTRL_N
:new [file]
```

Create a new split and start editing an empty view.  If `[file]` is given it will be edited in the new view.

```
:vne[w]
```

Like `:new`, but split vertically.

```
CTRL-W CTRL-^
CTRL-W ^
```

Like `CTRL-^`, edit alternate file, except the alternate file is opened in a split view.

> Mostly the `^` character is positioned on the 6 key, pressing `CTRL` and 6 then gets you what we call `CTRL-^`.  But on some non-US keyboards `CTRL-^` is produced in another way.

## Sublime Text vim marks

To view all marks: `:marks`

    mark line  col file/text
     a     11    0 /home/code/fizz.txt
     b     15    3 /home/code/fizz.txt
     c     17    5 /home/code/fizz.txt
     C     21    7 /home/code/fizz.txt
     D     19   11 /home/code/buzz.txt

    Press ENTER to continue

To create a mark.

```
m{a-zA-Z}
```

To jump to a mark.

```
'{a-z}
`{a-z}
```

The difference between quote and backtick is using the quote puts the cursor on the first non-bank character.  Using the backtick puts the cursor on the exact column of the mark.

**Vim global marks**

Global marks are set using uppercase letters.

```
m{A-Z}
```

To jump to a global mark.

```
'{A-Z}
`{A-Z}
```

The next version of NeoVintageous will support [showing marks in the gutter](https://github.com/NeoVintageous/NeoVintageous/issues/915).

## Sublime Text Vim goto file commands

The `gf` goto file under cursor command now supports:

- Visual mode
- Environment variables, and
- The `~` character expands to the user home directory

For example all of the following now work.

    file.txt
    /path/to/file.txt
    ../file.txt
    ~/path/to/file.txt
    $HOME/path/to/file.txt

The current working directory is resolved as follows:

1. User session current working directory e.g. `:cd {path}`.
2. First project folder or opened folder.
3. The dirname of the currently active view file.
4. Sublime's current working directory, which is the install directory.

To change the current directory.

```vim
:cd {path}
```

To change the current directory to the home directory.

```vim
:cd!
:cd ~
```

To change to the directory of the current file.

```vim
:cd %:h
```

To inspect the current working directory. The value is displayed on the status bar.

```vim
:pwd
```

The new `gF` command is the same as `gf`, except if a number follows the file name, then the cursor is positioned on that line and column in the file.

    file.txt:42
    file.txt:4:2
    file.txt@20
    file.txt(30)

## Advanced reveal in side bar

The new reveal in side bar command does a number of things that the built-in Sublime Text command does not.

1. Makes the side bar visible if it's not already visible
2. Puts focus on the side bar

Here is an example using it in a mapping.

```vim
let mapleader=,
nnoremap <leader><leader> :Neovintageous action=reveal_side_bar<CR>
```

To use the same mapping to put the focus back on the view, when the side bar has focus.

Menu → Preferences → Key Bindings

```js
{
    "keys": [",", ","],
    "command": "focus_group",
    "args": {"group": 0},
    "context": [
        {"key": "control", "operand": "sidebar_tree"}
    ]
},
```

The reason the key binding is required is because NeoVintageous does not handle keys when the side bar has focus.

See also [how to create a toggle side bar mapping](/2023/05/15/neovintageous-toggle-sidebar/) and [how to create a reveal side bar mapping](/2023/05/18/neovintageous-reveal-in-side-bar/).

## Resources

* [Create a reveal side bar mapping](/2023/05/18/neovintageous-reveal-in-side-bar/)
* [Create a toggle side bar mapping](/2023/05/15/neovintageous-toggle-sidebar/)
* [NeoVintageous 1.31.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.31.0)
* `:help neovintageous`
* `:help windows`
