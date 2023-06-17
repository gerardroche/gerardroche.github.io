---
tags: vim sublime-text neovintageous
title: NeoVintageous - Visual Bells
last_modified_at: 2023-06-17T02:40:58+01:00
---

![Vanilla Sky (2001)](/assets/vanilla-sky.webp)

NeoVintageous supports three types of visual bell.

Type | Description
:------ | :----------
blink (default) | Highlighted line blink.
view  | Active view flash.
views | Visible views flash.

There are two color schemes, "dark" and "light".

Menu → Preferences → Settings

```js
"vintageous_bell": "view",
"vintageous_bell_color_scheme": "dark",
````

And if you don't like visual bells, you can disable them.

Command Palette → NeoVintageous: Open RC File

```vim
set belloff=all
```

Command Palette → NeoVintageous: Reload RC File
