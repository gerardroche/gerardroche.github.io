---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.7.0
lastUpdated: 2023-08-16T01:37:22+01:00
---

# NeoVintageous 1.7.0

NeoVintageous 1.7.0 has been released and includes configurable search highlighting, and an highlighted yank implementation inspired by [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank).

> \[!NOTE\]
> This post has been updated to reflect changes to settings in [v1.32](/2023/08/12/neovintageous-1.32.0/).

## Highlighted Yank

![Highlightedyank demo](/assets/images/2018-09-02-highlightedyank.gif)

The duration in milliseconds of the highlighted yank is configurable.

Menu → Preferences → Settings

```json
{
    "vintageous_highlighted_yank_duration": 1000
}
```

Specify the style for highlighted yank indicator.

Available options:

- "fill"
- "outline"
- "underline"
- "squiggly_underline"
- "stippled_underline"

```json
{
    "vintageous_highlighted_yank_style": "fill"
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
    "vintageous_highlighted_yank": false
}
```

## Search Highlighting

Searches that support highlighting include `/`, `?`, `*`, and `#`.

There are three search states: **current**, **incremental** (the match as you type the search), and **occurrences**. Each state can be configured individually. They can be set to **fill**, **outline**, **underline**, **squiggly_underline**, and **stippled_underline**.

```json
{
    "vintageous_search_cur_style": "fill",
    "vintageous_search_inc_style": "fill",
    "vintageous_search_occ_style": "outline"
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

**Update 2023-08-09**

This post was updated to reflect changes in v1.32. The the following settings were renamed:

- Renamed `neovintageous_search_cur_style` to `vintageous_search_cur_style`
- Renamed `neovintageous_search_inc_style` to `vintageous_search_inc_style`
- Renamed `neovintageous_search_occ_style` to `vintageous_search_occ_style`
- Renamed `highlightedyank` to `vintageous_highlighted_yank`
- Renamed `highlightedyank_duration` to `vintageous_highlighted_yank_duration`
- Renamed `highlightedyank_style` to `vintageous_highlighted_yank_style`

## Further reading

* `:help nv`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.7.0)
