---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.10.0
lastUpdated: false
---

# NeoVintageous 1.10.0

NeoVintageous 1.10.0 has just been released. The highlights in this release include scrolling horizontally, sorting text, and opening files under the cursor.

## Scrolling horizontally

Four new scrolling commands have been added. All horizontal scrolling commands only work when `'word_wrap'` is off. You can toggle word wrapping with the **Unimpaired** command `cow` ([mnemonic](https://www.brainpickings.org/2011/03/03/joshua-foer-moonwalking-with-einstein/): "change option wrap").

command | action
------- | --------
`zl` or `z<Right>` | Move the view on the text \[count\] characters to the right.
`zh` or `z<Left>` | Move the view on the text \[count\] characters to the left.
`zL` | Move the view on the text half a screen width to the right.
`zH` | Move the view on the text half a screen width to the left.

## Sorting text

```vim
:sor[t] [i][u]
```

With **\[i\]** case is ignored, and with **\[u\]** only the first sequence of identical lines is kept. Note that leading and trailing white space may cause lines to be different.

You can visually select text to sort it, otherwise the entire file will be sorted. For example, useful visual selections commands you might try using are:

```vim
vii
```

```vim
vi]
```

```vim
vi)
```

Ex commands can be mapped too. Try creating a visual mode unique sort, which makes it easier to uniquely sort blocks:

```vim
vii,s
```

```vim
vi],s
```

```vim
vi),s
```

```vim
let mapleader=,
vnoremap <leader>s :sort u<CR>
```

## Opening files under the cursor

The new command **gf** edits the file whose name is under or after the cursor. (Mnemonic: "go to file"). There is also the **gx** command, which will open a URL in a new tab of the default browser.

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/)
* [NeoVintageous 1.10.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.10.0)
