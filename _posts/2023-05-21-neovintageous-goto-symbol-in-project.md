---
tags: neovintageous sublime-text vim
title: NeoVintageous - Goto Symbol In Project
---

![Blade Runner (1982)](/assets/blade-runner.webp)

You can go to any symbol in a project via *Menu &gt; Goto &gt; Goto Symbol in Project* but why work so hard. [Create a mapping](/2022/11/21/vimrc-and-neovintageousrc/):

```
noremap <D-i> :GotoSymbolInProject<CR>
```

{% include note.html content="Unlike many of my mappings, Here I use `noremap` instead of `nnoremap`. `noremap` applies to Normal, Visual, and Operator modes. `nnoremap` only applies to Normal mode. See `:help map-commands`." %}
