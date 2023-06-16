---
tags: vim sublime-text neovintageous
title: Toggle Side Bar
last_modified_at: 2023-06-16T10:10:00+01:00
---

**The NeoVintageous toggle sidebar feature has been updated, see [](/2023/05/14/neovintageous-toggle-sidebar/) for more details.**

I'm going to show you how to create a sidebar toggle mapping in NeoVintagous.

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
* `:help nv-rc`
* `:help mapping`
* [Command Palette](http://docs.sublimetext.info/en/latest/extensibility/command_palette.html#command-palette)
* [Follow my leader](http://vimcasts.org/blog/2014/02/follow-my-leader/)
* [Key Bindings](https://www.sublimetext.com/docs/3/key_bindings.html)
