---
tags: sublime-text
title: MonokaiFree - A Sublime Text color scheme
---

[MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) is an enhanced version of the Monokai color scheme bundled with Sublime Text. It's similar but better.

> PHP

![Monokai PHP](/assets/monokai-php.webp)

> CSS

![Monokai CSS](/assets/monokai-css.webp)

> Javascript

![Monokai Javascript](/assets/monokai-javascript.webp)

## Making it your own

Did you know that you can customize your color scheme? For example, to customize the MonokaiFree color scheme, create a file named `Packages/User/MonokaiFree.sublime-color-scheme`. The following settings will change the cursor color to bright yellow, square the cursor and selections, and make the line highlight a blue tint:

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

## Further reading

- [Sublime Text Color Schemes Customization](https://www.sublimetext.com/docs/color_schemes.html#customization)
