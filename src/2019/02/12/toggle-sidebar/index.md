---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: Toggle Side Bar
lastUpdated: false
---

# Toggle Side Bar

I will show you how to create a sidebar toggle mapping in NeoVintagous.

::: info
The NeoVintageous toggle sidebar command has been updated, see [article](/2023/05/15/neovintageous-toggle-sidebar/) for more details.
:::

## \<leader\>d

In my example below I'm going to map to `<leader>d`, where my "`mapleader`" is a comma character. All together it means I use `,d` to toggle the side bar. You can map to whatever key sequence is good for you.

## Mapping it

In your vintageousrc file:

```vim
let mapleader=,
nnoremap <leader>d :Neovintageous action=toggle_side_bar<CR>
```

In your key bindings:

```json
[
    {
        "keys": [",", "d"],
        "command": "neovintageous",
        "args": { "action": "toggle_side_bar" },
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
`ctrl-k` `ctrl-b` | toggle side bar
`ctrl-0` | give the focus to the side bar
`Esc` | return the focus to the view
`h`, `j`, `k`, `l`, and arrow keys | navigate side bar

## Further reading

* `:help nv`
* `:help mapping`
* [Command Palette](http://docs.sublimetext.info/en/latest/extensibility/command_palette.html#command-palette)
* [Follow my leader](http://vimcasts.org/blog/2014/02/follow-my-leader/)
* [Key Bindings](https://www.sublimetext.com/docs/3/key_bindings.html)
