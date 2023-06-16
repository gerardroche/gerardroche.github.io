---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.25.0
last_modified_at: 2023-06-16T03:46:00+01:00
---

NeoVintageous 1.25.0 has been released. This was a small release that aded support for inverse global-commands.

## Global commands

```
:[range]g[lobal]/{pattern}/[cmd]
```

Execute the Ex command `[cmd]` (default ":p") on the lines within `[range]` where {pattern} matches.

```
:[range]g[lobal]!/{pattern}/[cmd]
```

Execute the Ex command `[cmd]` (default ":p") on the lines within `[range]` where {pattern} does NOT match.

### Examples

Print lines that contain the word "fizz":

```
:g/fizz/p
```

Delete lines that start with a digit:

```
:g/^\d/d
```

To invert the search append `!`.

Print lines that don't contain the word "fizz":

```
:g!/fizz/p
```

Delete lines that don't start with a digit:

```
:g!/^\d/d
```

## Further reading

* `:help nv`
* `:help :g`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.25.0)
