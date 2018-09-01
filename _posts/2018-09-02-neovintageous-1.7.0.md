---
tags: neovintageous sublime-text vim
---
[NeoVintageous 1.7.0](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.7.0) has been released and includes configurable search highlighting, and a port of vim highlightedyank.

## HighlightedYank

The highlightedyank plugin is a port of [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank). It makes your yanked regions apparent. It's enabled by default and is highly configurable.

![Highlightedyank demo](/assets/2018-09-02-highlightedyank.gif)


The plugin can be disabled:

```
{
    "highlightedyank": false
}
```

The default style is **fill**. It can be set to **outline**, **underline**, **squiggly_underline**, and **stippled_underline**.

```
{
    "highlightedyank_style": "fill"
}
```

The duration is configurable:

```
{
    "highlightedyank_duration": 1000
}
```

To customise the colors, create a color scheme override: for example if you have the default Monokai color scheme enabled - create a file named **Monokai.sublime-color-scheme** in the Sublime Text User directory (**Menu > Preferences > Browse Packages...**), and create the styles using the "highlightedyank" scope:

```
{
    "rules":
    [
        {
            "scope": "highlightedyank",
            "background": "#e6db74",
            "foreground": "#272822"
        }
    ]
}
```

## Search Highlighting

Searches that support highlighting include `/`, `?`, `*`, and `#`.

There are three search states: **current**, **incremental** (the match as you type the search), and **occurrences**. Each state can be configured individually. They can be set to **fill**, **outline**, **underline**, **squiggly_underline**, and **stippled_underline**.

```
{
    "neovintageous_search_cur_style": "fill",
    "neovintageous_search_inc_style": "fill",
    "neovintageous_search_occ_style": "outline"
}

```

To customise the colors of each state, create a color scheme override: for example if you have the default Monokai color scheme enabled - create a file named **Monokai.sublime-color-scheme** in the Sublime Text User directory (**Menu > Preferences > Browse Packages...**), and create the styles using the "neovintageous_search_*" scopes:

```
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
