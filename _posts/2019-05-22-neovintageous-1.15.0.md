---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.15.0
---

NeoVintageous 1.15.0 has just been released. The highlights for this release is ability to have insert mode by default, pasting and yanking enhancements, and some polish with new aliases.

## Insert mode by default

Insert mode by default means that NeoVintageous will enter insert mode when opening or switching views or when the window receives focus and is **not** in visual mode. The reason for that last qualification is so that visual mode selections are retained when the window loses focus.

**Menu → Preferences → Settings:**

```json
{
    "vintageous_default_mode": "insert"
}
```

## Pasting enhancements

You can now put a count when pasting before the cursor:

```
[count]P
```


Pasting before the cursor now also works in multiple cursor mode, as does yank!

## New aliases

new alias | key | description
--------- | --- | -----------
`<C-h>` | `h` | \[count\] characters to the left
`<PageDown>` | `<C-f>` | scroll window \[count\] pages Forwards (downwards)
`<PageUp>` | `<C-b>` | scroll window \[count\] pages Backwards (upwards)
`<S-Tab>` | `<C-p>` | in ex mode go to previous match (auto-complete)
`<tab>` | `<C-i>` | go to newer cursor position in jump list
`g<down>` | `gj` | display lines downward
`g<up>` | `gk` | display lines upward

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.15.0)
