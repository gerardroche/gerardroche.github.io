---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.21.0
---

NeoVintageous 1.21.0 has just been released.



* Remove `neovintageous_open_my_rc_file`
* Remove `neovintageous_reload_my_rc_file`
* Remove `neovintageous_toggle_side_bar`

old command | new command | new command args
----------- | ----------- | ----------------
`neovintageous_open_my_rc_file` | `neovintageous` | `{'action': 'open_rc_file'}`
`neovintageous_reload_my_rc_file` | `neovintageous` | `{'action': 'reload_rc_file'}`
`neovintageous_toggle_side_bar` | `neovintageous` | `{'action': 'toggle_side_bar'}`


Tip: Example map!

```vim
nnoremap <leader>en :Neovintageous action=open_rc_file<CR>
```
Re also: #711

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.21.0)
