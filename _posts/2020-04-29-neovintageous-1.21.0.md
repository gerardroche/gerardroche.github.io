---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.21.0
---

NeoVintageous 1.21.0 has been released. The highlights are a port of [vim-sneak](https://github.com/justinmk/vim-sneak), ability to enable `jj` and `jk` map to escape, and other minor enhancements and fixes.

## vim-sneak

Sneak is a port of [vim-sneak](https://github.com/justinmk/vim-sneak) and is disabled by default (you can configure settings via **Menu > Preferences > Settings**):

```json
{
    "vintageous_enable_sneak": true
}
```

When enabled Sneak provides a way to move quickly and precisely to locations that would be awkward to reach with built-in Vim motions.

To use Sneak, type "s" followed by exactly two characters:

    s{char}{char}

To go to the next match press `;` and to go to the previous match press `\`.

Here's an overview of what has been implemented so far.

**NORMAL-MODE**

Key Sequence               | Description
---------------------------|----------------------------------------------
`s{char}{char}`            | Go to the next occurrence of `{char}{char}`
`S{char}{char}`            | Go to the previous occurrence of `{char}{char}`
`s{char}<Enter>`           | Go to the next occurrence of `{char}`
`S{char}<Enter>`           | Go to the previous occurrence of `{char}`
`s<Enter>`                 | Repeat the last Sneak.
`S<Enter>`                 | Repeat the last Sneak, in reverse direction.
`;`                        | Go to the \[count\]th next match
`,` or `\`                   | Go to the \[count\]th previous match
`{operator}z{char}{char}`  | Perform {operator} from the cursor to the next occurrence of `{char}{char}`
`{operator}Z{char}{char}`  | Perform {operator} from the cursor to the previous occurrence of `{char}{char}`

**VISUAL-MODE**

Key Sequence             | Description
--------------------------|----------------------------------------------
`s{char}{char}`            | Go to the next occurrence of `{char}{char}`
`Z{char}{char}`            | Go to the previous occurrence of `{char}{char}`
`s{char}<Enter>`           | Go to the next occurrence of `{char}`
`Z{char}<Enter>`           | Go to the previous occurrence of `{char}`
`s<Enter>`                 | Repeat the last Sneak.
`Z<Enter>`                 | Repeat the last Sneak, in reverse direction.
`;`                        | Go to the \[count\]th next match
`,` or `\`                 | Go to the \[count\]th previous match

## Mapping jj and jk to escape

There are two new settings that simplify mapping `jj` and `jk` to escape (you can configure settings via **Menu > Preferences > Settings**):

```json
{
    "vintageous_i_escape_jj": true,
    "vintageous_i_escape_jk": true
}
```

## Removed commands

Old | New
--- | ---
`neovintageous_open_my_rc_file` | `neovintageous` `{'action': 'open_rc_file'}`
`neovintageous_reload_my_rc_file` | `neovintageous` `{'action': 'reload_rc_file'}`
`neovintageous_toggle_side_bar` | `neovintageous`  `{'action': 'toggle_side_bar'}`

Tip: maping for editing the rc file!

```vim
nnoremap <leader>en :Neovintageous action=open_rc_file<CR>
```

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.21.0)
