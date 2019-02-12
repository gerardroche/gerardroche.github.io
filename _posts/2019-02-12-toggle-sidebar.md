---
tags: neovintageous sublime-text vim
title: Toggle Side Bar
---

Since NeoVintageous 1.5.0 you've been able to toggle the sidebar using a mapping of your choice. I'm going to show you how to do that.

## \<leader\>d

In my example below I'm going to map to `<leader>d`, where my "`mapleader`" is a comma character. All together it means I use `,d` to toggle the side bar. You can map to whatever key sequence is good for you.

## Mapping it

In your vintageousrc file:

```viml
let mapleader=,
nnoremap <leader>d :NeovintageousToggleSideBar<CR>
```

In your key bindings:

```json
[
    {
        "keys": [",", "d"],
        "command": "neovintageous_toggle_side_bar",
        "context": [
            { "key": "control", "operand": "sidebar_tree" }
        ]
    }
]
```

It's as simple as that.

## Related key bindings

command | description
---------- | -----------
ctrl-k ctrl-b | toggle side bar
ctrl-0 | give the focus to the side bar
Esc | return the focus to the view
Arrow keys | navigate side bar
h, j, k, and l | navigate side bar

## Further reading

* `:h nv`
* `:h vintageousrc`
* `:h mapping`
* [Command Palette](http://docs.sublimetext.info/en/latest/extensibility/command_palette.html#command-palette)
* [Follow my leader](http://vimcasts.org/blog/2014/02/follow-my-leader/)
* [Key Bindings](https://www.sublimetext.com/docs/3/key_bindings.html)
