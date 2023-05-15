---
tags: neovintageous sublime-text vim
title: The NeoVintageous toggle sidebar
---

![Fender guitar toggle switch](/assets/2023-05-15-fender-toggle-switch.webp)

Did you know that NeoVintageous has a side bar toggle command that you can map to? It's a great way to free up screen real estate when you need it. Let me show you a few examples.

If you want to toggle the side bar with the key **m**, [create a mapping and reload your rc file](/2022/11/21/vimrc-and-neovintageousrc/):

```vim
nnoremap m :Neovintageous action=toggle_side_bar<CR>
```

Then add a key binding via **Menu > Preferences > Key Bindings** (this is for when the side bar has focus):

```js
{
    "keys": ["m"],
    "command": "neovintageous",
    "args": {"action": "toggle_side_bar"},
    "context": [{"key": "control", "operand": "sidebar_tree"}]
},
```

Now you can toggle the side bar with **m**, but suppose instead you want to toggle with <kbd>CTRL-d</kbd>.

{% include note.html content="You will need [ctrl keys](/2022/09/22/neovintageous-ctrl-keys/) enabled." %}

Create a mapping and reload your rc file:

```vim
nnoremap <C-d> :Neovintageous action=toggle_side_bar<CR>
```

Then add a key binding via **Menu > Preferences > Key Bindings**:

```js
{
    "keys": ["ctrl+d"],
    "command": "neovintageous",
    "args": {"action": "toggle_side_bar"},
    "context": [{"key": "control", "operand": "sidebar_tree"}]
},
```

Now you can toggle with <kbd>CTRL-d</kbd>, but suppose you prefer to use your leader key e.g. `<leader>d`. This is the mapping I use. My leader is always set to **,** (comma) because it's my right hand and **d** is my left hand so it's a quick one-two key sequence. Create a mapping and reload your rc file:

```vim
let mapleader=,
nnoremap <leader>d :Neovintageous action=toggle_side_bar<CR>
```

{% include note.html content="The default mapleader is **/** (slash)." %}

Then add a key binding via **Menu > Preferences > Key Bindings**:

```js
{
    "keys": [",", "d"],
    "command": "neovintageous",
    "args": {"action": "toggle_side_bar"},
    "context": [{"key": "control", "operand": "sidebar_tree"}]
},
```

## Why a mapping AND key binding?

The reason you need both a mapping *and* a key binding is because the key binding is for when the *side bar* has focus. This is a special context that you don't need to worry about for regular mappings.

## Wrapping it up

A side bar toggle is a great way to free up screen real estate. Pair it with an [Origami Toggle Zoom](/2019/02/26/toggle-zoom/) mapping for a great way to focus on immediate coding problems.

## Further reading

* `:help toggle-sidebar`
