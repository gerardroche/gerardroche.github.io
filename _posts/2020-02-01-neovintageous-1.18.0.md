---
tags: vim sublime-text neovintageous
title: NeoVintageous 1.18.0
---

NeoVintageous 1.18.0 has just been released. The highlights of this release are sessions, unimpaired enhancements, visual block enhancements, search enhancements, and :substitute enhancements.

## Sessions

Command-line and search-string history are now persisted between sessions. To cycle through history items press the <kbd>up</kbd> and <kbd>down</kbd> arrows keys or the previous and next keys `CTRL-p` /`CTRL-n`.

## Unimpaired enhancements

command | description
------- | -----------
`[n` | Go to the previous SCM conflict marker.  Try `[n` inside a conflict.
`]n` | Go to the next SCM conflict marker. Try `]n` inside a conflict.

{% include tip.html content="Try jump-to-diff commands `[c` and `]c`" %}

## Visual block enhancements

You can now paste visual blocks in normal mode. For example press `CTRL-v` to enter visual block mode, make a selection `jll`, yank it `y`, and now you can paste it after the cursor `p` or before `P`.

You can enter multiple cursor mode from visual block mode by pressing `CTRL-n` (requires <kbd>ctrl</kbd> keys to be enabled) or `gh`. You can use normal motions and operators in multiple cursor mode!

## Substitute enhancements

The substitute command now accepts a case sensitive flag `I`. For example to replace all patterns matching "foo" (case sensitive) with "bar":

```vim
:%s/foo/bar/gI
```

To do the same replacement case insensitive:

```vim
:%s/foo/bar/gi
```

{% include tip.html content="The `g` flag in substitution commands tells the command to replace all occurrences in the line. Without this argument, replacement occurs only for the first occurrence in each line." %}

The substitute command is case sensitive by default. This is controlled by the `'ignorecase'` option. To change the default open your runtime configuration file and add:

```vim
set ignorecase
```

or (default):

```vim
set noignorecase
```

## Search modifiers

Some basic support for search modifiers is now supported. Modifiers allow search patterns to be prefixed with "modes" to override the `'magic'` option.

modifier | description
-------- | -----------
`\m` | `'magic'` on for the following chars in the pattern.
`\M` | `'magic'` off for the following chars in the pattern.
`\v` | the following chars in the pattern are "very magic".
`\V` | the following chars in the pattern are "very nomagic".

For example, when magic mode is enabled the pattern `[0-9]` is interpreted as a regular expression. When you want it to be interpreted literally prefix the "very nomagic" modifier:

```vim
/\V[0-9]
```

To make pattern be interpreted as regular expression use the magic `\m` modifier:

```vim
/\m[0-9]
```

Magic mode is enabled by default. To change the default open your runtime configuration file and add:

```vim
set nomagic
```

or (default):

```vim
set magic
```

Note that currently `\m` and `\v` are functionally equivalent, as are `\M` and `V`.

## Further reading

* `:help nv`
* `:help nv-rc`
* `:help :s`
* `:help /`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.18.0)
