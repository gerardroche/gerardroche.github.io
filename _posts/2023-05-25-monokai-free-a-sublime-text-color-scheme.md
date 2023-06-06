---
tags: sublime-text
title: MonokaiFree - A Sublime Text color scheme
---

[MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) is an enhanced version of the Monokai color scheme.

> PHP

![Monokai PHP](/assets/monokai-php.webp)

> CSS

![Monokai CSS](/assets/monokai-css.webp)

> Javascript

![Monokai Javascript](/assets/monokai-javascript.webp)

## Adaptive theme

Try it with the Adaptive theme for a more immersive experience.

Menu → Preferences → Select Theme → Adaptive

## Making it your own

> Color schemes based on the .sublime-color-scheme format are specified by filename only, not a package-based file path. This allows users to customize a color scheme by overriding variables or globals, and adding rules.
> &mdash; [Color Schemes Customizations](https://www.sublimetext.com/docs/color_schemes.html#customization)

For example, the following settings make:

- make the carets yellow
- the block caret and selections style square
- make line highlight blue

Menu → Preferences → Customize Color Scheme

```json
{
    "variables": {},
    "globals": {
        "caret": "yellow",
        "block_caret": "yellow",
        "block_caret_corner_style": "square",
        "line_highlight": "#66d9ef44",
        "selection_border_width": "1",
        "selection_corner_style": "square"
    },
    "rules": []
}
```

![Robert Llewellyn in Red Dwarf (1988)](/assets/red-dwarf-kryten.webp)
