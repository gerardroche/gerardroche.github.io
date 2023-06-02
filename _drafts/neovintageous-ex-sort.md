---
tags: vim sublime-text neovintageous
title: NeoVintageous - :sort
---

NeoVintageous [1.10.0](/NeoVintageous-1.10.0.md) shipped with the **:sort** command, and while the command is long overdue, where it really shines is .

## Sorting text

```vim
:[range]sor[t] [i][u]
```

With **\[i\]** case is ignored, and with **\[u\]** only the first sequence of identical lines is kept. Note that leading and trailing white space may cause lines to be different.

When you want to sort a block of text there are some very useful commands such as **vii** (inner indentation), **vi]** (inner \[\] block), **vi)** (inner () block). There are plenty more, but these are good to start with and usually you want to sort inner blocks of text.

For example, to sort and make an inner block of text (text between matching brackets \[\] excluding the '\[' and '\]'), and make it unique:

```viml
vi]:sort u<CR>
```

That's nice, but it's a little verbose, create a VISUAL mode mapping:

```viml
let mapleader=,
vnoremap <leader>s :sort u<CR>
```

Now the command looks like this:


```viml
vi],s<CR>
```

Sadly NeoVintageous doesn't yet support complex ex command mappings so this won't work:

Complex ex command mappings are [currently not support](https://github.com/NeoVintageous/NeoVintageous/issues/454).

```viml
nnoremap <leader>s] vi]:sort u<CR>
```

However, there is a partial workaround to sort (without unique)

```viml
nnoremap <leader>s) vi)<F9>o<Esc>$^
nnoremap <leader>s] vi]<F9>o<Esc>$^
nnoremap <leader>si vii<F9>o<Esc>$^
```

With the above commands you can now sort various blocks from normal mode: **,si** will sort the inner indentation block.

```viml
let mapleader=,
nnoremap <leader>s) vi)<F9>o<Esc>$^
nnoremap <leader>s] vi]<F9>o<Esc>$^
nnoremap <leader>si vii<F9>o<Esc>$^
vnoremap <leader>s :sort iu<CR>
```

## Further reading

* `:h :sort`
* `:h neovintageousrc`
* `:h text-objects`
