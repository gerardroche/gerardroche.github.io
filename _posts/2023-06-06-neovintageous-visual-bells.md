---
tags: vim sublime-text neovintageous
title: NeoVintageous - Visual Bells
last_modified_at: 2023-06-16T03:46:00+01:00
---

![Vanilla Sky (2001)](/assets/vanilla-sky.webp)

NeoVintageous supports three types of visual bell: a highlighted line *blink*, an active *view* flash, and a visible *views* flash. The default is blink.

Setting | Description
:------ | :----------
`blink` | Highlighted line blink.
`view`  | Active view flash.
`views` | Visible views flash.

Menu → Preferences → Settings

```js
"vintageous_bell": "view",
````

There are two color schemes, "dark" and "light".

```js
"vintageous_bell_color_scheme": "dark",
````

If you don't like visual bells, you can disable them.

Command Palette → NeoVintageous: Open RC File

```vim
set belloff=all
```

Command Palette → NeoVintageous: Reload RC File
