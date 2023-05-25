---
tags: neovintageous sublime-text vim
title: NeoVintageous - Visual Bells
---

![Vanilla Sky (2001)](/assets/vanilla-sky.webp)

NeoVintageous supports three types of visual bell: a highlighted line "blink", an active "view" flash, and a visible "views" flash. The default is blink.

Setting | Description
:------ | :----------
`blink` | Highlighted link blink.
`view`  | Active view flash.
`views` | Visible views flash.

You can set the visual bell via the setting `vintageous_bell`.

**Menu → Preferences → Settings**

```js
"vintageous_bell": "view",
````

There are two visual bell color schemes, "dark" and "light". They can set via the setting `vintageous_bell_color_scheme`.

```js
"vintageous_bell_color_scheme": "dark",
````

If you don't like visual bells, you can disable them.

**Command Palette → NeoVintageous: Open RC File**

```vim
:set belloff=all
```

Read [NeoVintageous - Options](/2023/06/01/neovintageous-options/).

## Wrapping up

I personally prefer the active "view" flash. The full view single flash is more comfortable. I use the [MonokaiFree](/2023/05/25/neovintageous-monokai-free/) which is enhanced to support NeoVintageous better than the Monokai color scheme bundled with Sublime Text. Check it out if you use Monokai. I think you'll like it.
