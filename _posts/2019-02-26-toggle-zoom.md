---
tags: neovintageous sublime-text vim
---

If you're anything like me, then you probably open a zillion windows in all kinds of layouts, all at the same time. But sometimes you just need to focus on one window to get in **[the zone](https://www.brainpickings.org/2014/12/05/peter-turchi-a-muse-a-maze-book-flow/)**.

This is where "[origami](https://packagecontrol.io/packages/Origami)" saves the day. An aptly named plugin that gives you a variety of commands to split, organise, and otherwise manage windows in sublime. One such command is **toggle zoom**.

I map it to `<leader>.` in NeoVintageous, but you're obviously free to choose your own adventure.

## \<leader\>.

I like `,` as my "mapleader", because it's just so easy to type. Mapping to `<leader>.` lets me toggle zoom very fast.

```viml
let mapleader=,
nnoremap <leader>. :ToggleZoomPane<CR>
```

## Further reading

* `:h mapleader`
* `:h neovintageous`
* [Follow my leader](http://vimcasts.org/blog/2014/02/follow-my-leader/)
* [Working with windows](http://vimcasts.org/episodes/working-with-windows/)
