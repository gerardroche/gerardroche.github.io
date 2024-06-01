---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: sublime-text
title: MonokaiFree - A Sublime Text color scheme
lastUpdated: false
---

# MonokaiFree - A Sublime Text color scheme

[MonokaiFree](https://packagecontrol.io/packages/MonokaiFree) is an enhanced version of the Monokai colour scheme.

> PHP

![Monokai PHP](/assets/images/monokai-php.webp)

> CSS

![Monokai CSS](/assets/images/monokai-css.webp)

> Javascript

![Monokai Javascript](/assets/images/monokai-javascript.webp)

And many more.

## Adaptive Theme

Try the Adaptive theme.

Menu → Preferences → Select Theme → Adaptive

## Font options

Menu → Preferences → Settings

```js
"font_options": [
    "no_bold",
    "no_italic"
],
```

## Alternative font

Try an alternative font like [Fira Code](https://github.com/tonsky/FiraCode).

```bash
sudo apt-get install fonts-firacode
```

Menu → Preferences → Settings

```js
"font_face": "Fira Code",
"font_options": [
    "subpixel_antialias"
],
```

If you want enable antialias instead, add in font_options: `"gray_antialias"`. [^1]

## Custom settings

Menu → Preferences → Customize Color Scheme

```json
{
    "variables": {},
    "globals": {
        "caret": "yellow",
        "block_caret": "yellow",
        "block_caret_corner_style": "square",
        "selection_corner_style": "square"
    },
    "rules": []
}
```

![Robert Llewellyn in Red Dwarf (1988)](/assets/images/red-dwarf-kryten.webp)

I hope this has been helpful.  Take it easy, my friends.

## Resources

* [Monokai Color Scheme](https://packagecontrol.io/packages/MonokaiFree)
* [Sublime Text Color Scheme Documentation](https://www.sublimetext.com/docs/color_schemes.html)

[^1]:
    https://github.com/tonsky/FiraCode/wiki/Sublime-Text-Instructions
