---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.9.0
lastUpdated: false
---

# NeoVintageous 1.9.0

NeoVintageous [1.9.0](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.9.0?ref=blog.gerardroche.com) has landed. This release brings built-in support for jumping to diffs, opening and closing folds, countable newlines, and surround enhancements.

## Jumping to diffs

This is the first release to ship with built-in support for jumping to diffs (added in Sublime [build 3189](https://www.sublimetext.com/3dev?ref=blog.gerardroche.com)). For previous builds you'll need the [Git Gutter](https://github.com/jisaacks/GitGutter?ref=blog.gerardroche.com) plugin.

command | action
------- | --------
`]c` | jump forwards to the next start of a change. When a count is used, do it that many times.
`[c` | jump backwards to the previous start of a change. When a count is used, do it that many times.

## Fold commands

You can now open and close all or individual folds:

command | action
------- | ------
`zo` | open one fold under the cursor
`zc` | close one fold under the cursor
`zM` | Close all folds
`zR` | Open all folds

## Countable newlines

Using a count when beginning newlines now enters a multiple cursor:

command | action
------- | ------
`o` | Begin a new line below the cursor and insert text, repeat \[count\] times.
`O` | Begin a new line above the cursor and insert text, repeat \[count\] times.

## Surround enhancements

A new surround line command, `yss{target}`, allows you to operate on the current line, ignoring leading white-space.

The targets **b**, **B**, **r**, and **a** are now aliases for **)**, **}**, **]**, and **>**.

Old text | Command | New text
-------- | ------- | --------
`Hello w*orld!` | `yss}` | `{Hello world!}`
`Hello w*orld!` | `yssB` | `{Hello world!}`
`'Hello w*orld!'` | `cs')` | `"Hello w*orld!"`
`(Hello w*orld!)` | `cs'b` | `(Hello w*orld!)`
`Hello w*orld!` | `ysiw)` | `Hello (world)!`
`Hello w*orld!` | `ysiwb` | `Hello (world)!`

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
* [NeoVintageous 1.9.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.9.0?ref=blog.gerardroche.com)
