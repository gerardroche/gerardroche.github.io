---
post: true
sidebar: false
aside: false
tags: vim sublime-text neovintageous
title: NeoVintageous - Revert Hunk
lastUpdated: 2023-06-16T03:46:00+01:00
---

# NeoVintageous - Revert Hunk

![Back to the Future (1985)](/assets/images/back-to-the-future.webp)

You can revert a hunk via a right mouse click and selecting Revert Diff Hunk, but if my calculations are correct, when this baby is mapped, and we reload our rc file... you're gonna see some serious shit:

```vim
nnoremap <leader>hu :RevertHunk<CR>
```
