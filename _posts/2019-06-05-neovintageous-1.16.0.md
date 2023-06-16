---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.16.0
last_modified_at: 2023-06-16T10:41:00+01:00
---

NeoVintageous 1.16.0 has just been released. The highlights of this release are enhanced mapping support, new pasting commands, and side bar navigation.

## Mapping enhancements

Mappings now support leading and trailing sequences when mapping to commands, for example all of the following mappings are now valid:

```vim
nnoremap <leader>sp vip:sort u<CR>
nnoremap <leader>sy vi]:sort u<CR>vi]y<Esc>
vnoremap <leader>s :sort u<CR>
```

## Paste enhancements

command | description
------- | -----------
`gp` | just like `p`, but leave the cursor just after the new text
`gP` | just like `P`, but leave the cursor just after the new text
`[p` | and `[P` like `P`, but adjust the indent to current line
`]p` | and `]P` like `p`, but adjust the indent to current line

## Sidebar navigation

command | description
------- | -----------
`J` | go to last child
`p` | go to parent
`p` | go to root
`q` | close

## New aliases

new alias | key | description
--------- | --- | -----------
`<C-Down>` | `j` | \[count\] lines downward
`<C-Up>` | `k` | \[count\] lines upward

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.16.0)
