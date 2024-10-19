---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Toggle Zoom
lastUpdated: false
---

# NeoVintageous - Toggle Zoom

If you're like me, you probably open a lot of windows and things get messy, but sometimes you just want to focus on one window. This is where the [Origami](https://packagecontrol.io/packages/Origami?ref=blog.gerardroche.com) package can help.

Origami provides a commands to split, organize, and manage windows. One such command is Zoom/Unzoom Current Pane (Toggle Zoom).

I map it to `<C-w>z` i.e. CTRL-w followed by z, but you're obviously free to choose your own adventure.

```vim
nnoremap <C-w>z :ToggleZoomPane fraction=0.98<CR>
```

Alternatively, you can map to your leader key.

::: info
The "fraction" argument specifies how small the minimised panes should be, in this case 0.02. I like them as small as possible without disappearing. You will need to restart Sublime for the fraction amount take effect.
:::

## The `<Leader>` key

I like `,` as my mapleader, because I find it easy to press.

```vim
let mapleader=,
```

Suppose you want to map toggle zoom to `<Leader>.` i.e. your `<Leader>` key, in this case `,` (comma), followed by `.` (stop).

```vim
nnoremap <Leader>. :ToggleZoomPane fraction=0.98<CR>
```

## Further reading

* [Follow my leader](http://vimcasts.org/blog/2014/02/follow-my-leader/?ref=blog.gerardroche.com)
* [Working with windows](http://vimcasts.org/episodes/working-with-windows/?ref=blog.gerardroche.com)
* `:help mapleader`
* `:help nv`
