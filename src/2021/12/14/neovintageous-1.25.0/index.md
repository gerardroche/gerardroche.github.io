---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.25.0
lastUpdated: false
---

# NeoVintageous 1.25.0

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

* [NeoVintageous documentation](https://neovintageous.github.io/)
* [NeoVintageous 1.25.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.25.0)
