---
tags: vim git
title: Vim - Add a file to the staging area
---

This is a mapping that adds the current file to the git staging area.

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

This won't work if the file is **not** located within your current working directory.

How can you determine the current working directory (cwd)?

```vim
:pwd
```

To change to the directory of the current file:

```vim
:cd %:h
```

Change to the parent directory.

```vim
:cd ../
```

Change to the home directory.

```vim
:cd ~
```

Or simply.

```vim
:cd
```

But let's get back to the mapping.

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

How does it work?

## The shell command - `!{cmd}`

The shell command lets you execute a `{cmd}` with the shell.

The shell is defined by the `'shell'` option. The default is `$SHELL` or `"sh"` and on Windows it's `"cmd.exe"`.

**Example:** List directory contents

```vim
:!ls
```

If `{cmd}` contains "%" it is expanded to the current file name.

**Example:** Add current file contents to git index

```vim
:!git add %
```

The last is part to understand is `:sil[ent] {cmd}`.

## The silent command - `:sil[ent] {cmd}`

The silent command lets you execute a `{cmd}` silently.

**Example:** Show the working tree git status

```vim
:!git status
```

**Example:** Show the working tree git status, silently

```vim
:silent !git status
```

This is useful for commands that have output we don't care about.

Let's go back to the mapping again.

```vim
nnoremap <leader>ga :silent !git add %<CR>
```

We don't care about the output of this command.

I hope this has been helpful. Take it easy my friends.
