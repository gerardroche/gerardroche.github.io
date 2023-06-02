---
tags: neovintageous sublime-text vim
title: NeoVintageous - Visual Bells
---

![Vanilla Sky (2001)](/assets/vanilla-sky.webp)

NeoVintageous supports three types of visual bell: a highlighted line *blink*, an active *view* flash, and a visible *views* flash. The default is blink.

Setting | Description
:------ | :----------
`blink` | Highlighted link blink.
`view`  | Active view flash.
`views` | Visible views flash.

You can set it via the setting `vintageous_bell`.

**Menu → Preferences → Settings**

```js
"vintageous_bell": "view",
````

There are two color schemes, "dark" and "light".

```js
"vintageous_bell_color_scheme": "dark",
````

If you don't like visual bells, you can disable them.

**Command Palette → NeoVintageous: Open RC File**

```vim
:set belloff=all
```