---
tags: vim sublime-text neovintageous
title: NeoVintageous - Visual Bells
last_modified_at: 2023-07-01T00:31:52+01:00
---

![Vanilla Sky (2001)](/assets/vanilla-sky.webp)

NeoVintageous supports three types of vim visual bell.

Type | Description
:------ | :----------
blink | Highlighted line blink (default).
view  | Active view flash.
views | Visible views flash.

Menu → Preferences → Settings

```js
"vintageous_bell": "blink",
```

There are two colour schemes, a "dark" (default) and "light".

```js
"vintageous_bell_color_scheme": "dark",
```

To disable visual bells, set the `'belloff'` option to "all".

Command Palette → NeoVintageous: Open RC File

```vim
set belloff=all
```

Command Palette → NeoVintageous: Reload RC File
