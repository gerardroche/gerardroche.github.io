---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.7.0
last_modified_at: 2023-06-16T10:30:00+01:00
---

NeoVintageous 1.7.0 has been released and includes configurable search highlighting, and an highlighted yank implementation inspired by [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank).

## Highlighted Yank

![Highlightedyank demo](/assets/2018-09-02-highlightedyank.gif)

The duration of the highlighted region is configurable.

Menu → Preferences → Settings

```json
{
    "highlightedyank_duration": 1000
}
```

Supported styles:

- `fill`
- `outline`
- `squiggly_underline`
- `stippled_underline`
- `underline`

```json
{
    "highlightedyank_style": "fill"
}
```

You can customize the color.

Menu → Preferences → Customize Color Scheme

```json
{
    "variables": {},
    "globals": {},
    "rules": [
        {
            "scope": "highlightedyank",
            "background": "#e6db74",
            "foreground": "#272822"
        }
    ]
}
```

It can be disabled.

```json
{
    "highlightedyank": false
}
```

## Search Highlighting

Searches that support highlighting include `/`, `?`, `*`, and `#`.

There are three search states: **current**, **incremental** (the match as you type the search), and **occurrences**. Each state can be configured individually. They can be set to **fill**, **outline**, **underline**, **squiggly_underline**, and **stippled_underline**.

```json
{
    "neovintageous_search_cur_style": "fill",
    "neovintageous_search_inc_style": "fill",
    "neovintageous_search_occ_style": "outline"
}

```

To customise the colors of each state, create a color scheme override, for example:

Menu → Preferences → Customize Color Scheme

```json
{
    "rules":
    [
        {
            "scope": "neovintageous_search_inc",
            "background": "#a1efe4",
            "foreground": "#272822"
        },
        {
            "scope": "neovintageous_search_cur",
            "background": "#a1efe4",
            "foreground": "#272822"
        },
        {
            "scope": "neovintageous_search_occ",
            "background": "#e6db74",
            "foreground": "#272822"
        }
    ]
}
```

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.7.0)
