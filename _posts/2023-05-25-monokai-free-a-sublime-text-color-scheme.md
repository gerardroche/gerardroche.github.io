---
tags: sublime-text
title: MonokaiFree - A Sublime Text color scheme
---

[MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) is an enhanced version of the Monokai color scheme bundled with Sublime Text.

> PHP

![Monokai PHP](/assets/monokai-php.webp)

> CSS

![Monokai CSS](/assets/monokai-css.webp)

> Javascript

![Monokai Javascript](/assets/monokai-javascript.webp)

## Making it your own

> Color schemes based on the .sublime-color-scheme format are specified by filename only, not a package-based file path. This allows users to customize a color scheme by overriding variables or globals, and adding rules.
> &mdash; [Sublime Text Color Schemes Customizations](https://www.sublimetext.com/docs/color_schemes.html#customization)

For example, the following settings make:

- the cursor color a bright yellow
- the caret style square
- the selections style square
- the line highlight a tint of blue

**Menu → Preferences → Customize Color Scheme**.

```json
{
    "variables": {},
    "globals": {
        "block_caret": "yellow",
        "block_caret_corner_radius": "cut",
        "block_caret_corner_style": "square",
        "caret": "yellow",
        "line_highlight": "#66d9ef44",
        "selection_border_width": "1",
        "selection_corner_style": "square"
    },
    "rules": []
}
```

![Robert Llewellyn in Red Dwarf (1988)](/assets/red-dwarf-kryten.webp)
