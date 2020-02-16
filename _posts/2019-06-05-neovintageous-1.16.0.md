---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.16.0
---

NeoVintageous [1.16.0](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.16.0) is out. The highlights of this release are enhanced mapping support, new pasting commands, and side bar navigation.

## Enhancement mappings

Mappings now support leading and trailing sequences when mapping to commands, for example all of the following mappings are now valid:

```
nnoremap <leader>sp vip:sort u<CR>
nnoremap <leader>sy vi]:sort u<CR>vi]y<Esc>
vnoremap <leader>s :sort u<CR>
```

## Pasting enhancements

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
* [changelog](https://github.com/NeoVintageous/NeoVintageous/blob/master/CHANGELOG.md#1160---2019-06-05).