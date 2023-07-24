---
tags: vim git
title: Vim - Add a file to the staging area
---

A mapping for add the current file to the staging area.

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

This won't work if your file is not in your current working directory. How do you know what the cwd is?

```
:pwd
```

To change it to the current file directory.

```
:cd %:h
```

Set back one directory.

```
:cd ../
```

Set to home.

```
:cd ~
```

Or simply.

```
:cd
```

But let's get back to git.

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

What does this mapping do?

The shell command `!{cmd}` provides a way to execute `{cmd}` with the shell.

The shell is defined by the `'shell'` option. The default is `$SHELL` or `"sh"`, Win32: `"cmd.exe"`.

Example: List directory contents

```vim
:!ls
```

If `{cmd}` contains "%" it is expanded to the current file name,

Example: Add current file contents to git index

```vim
:!git add %
```

The last is part is `:sil[ent] {command}`. This executes the `{command}` silently.

Example: Show the working tree git status

```vim
:!git status
```

Example: Show the working tree git status, silently

```vim
:silent !git status
```

Not very useful for git status, but can be useful for output like git add.

Let's go back to the mapping.

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

I hope this has been helpful. Take it easy my friends.
