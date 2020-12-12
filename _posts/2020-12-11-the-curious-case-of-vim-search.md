---
tags: neovintageous sublime-text vim search
title: The curious case of Vim search
---


In Vim, search commands can be case-sensitive, case-insensitive, and well... they can be a little more complicated. Luckily there are only two options we need to understand: `'ignorecase'` and `'smartcase'`.

## The 'ignorecase' option


```vim
'ignorecase' 'ic' 'noignorecase' 'noic'
```

To ignore case in searches, turn on the `'ignorecase'` option:

```vim
:set ignorecase
```

```vim
/fizz
```

```
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
```

To make searches case-sensitive turn the `'ignorecase'` option off:

```vim
:set noignorecase
```

```vim
/fizz
```

```
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
```

### Typed search flags can overrule options

When the `\c` flag is used in a search pattern, the whole pattern is handled as though `'ignorecase'` is on and the actual value of `'ignorecase'` is ignored. In other words the `\c` flag means ignore case in search patterns.

```vim
/fizz\c
```

```
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
```

When the `\C` flag (uppercase) is used in a search pattern, the whole pattern is handled as though `'ignorecase'` is off and the actual value of `'ignorecase'` is ignored. In other words make search patterns case-sensitive.

```vim
/fizz\C
```

```
|fizz| FIZZ fIzZ FiZZ
|fizz| FIZZ fIzZ FiZZ
```

### Typed substitution flags can overrule options

```vim
:[range]s[ubstitute]/{pattern}/{string}/[flags]
```

When the `i` flag is used in a substitution command, the search pattern is handled as though `'ignorecase'` is on and the actual value of `'ignorecase'` is ignored. In other words the `i` flag means ignore case in search patterns.

```vim
:%s/foo/bar/gi
```

```
foo FOO fOO    ->    bar bar bar
foo FOO fOO    ->    bar bar bar
```

When the `I` flag (uppercase) is used in a substitution command, the search pattern is handled as though `'ignorecase'` is off and the actual value of `'ignorecase'` is ignored. In other words make search patterns case-sensitive.

```vim
:%s/foo/bar/gI
```

```
foo FOO fOO    ->    bar FOO fOO
foo FOO fOO    ->    bar FOO fOO
```

{% include tip.html content="The `g` flag in substitution commands tells the command to replace all occurrences in the line. Without this argument, replacement occurs only for the first occurrence in each line." %}

## The 'smartcase' option

```vim
'smartcase' 'scs' 'nosmartcase' 'noscs'
```

The `'smartcase'` option overrules the `'ignorecase'` option if the search pattern contains upper case characters. It's only used when the search pattern is typed and `'ignorecase'` option is on.  For example, it's used for the commands "/", "?", "n", "N", ":g" and ":s". It's not used for "\*", "#".

When `'ignorecase'` and `'smartcase'` are both on, lower case search patterns are handled as though `'ignorecase'` is on. In other words ignore case in the search pattern.

```vim
:set ignorecase
:set smartcase
```

```vim
/fizz
```

```
|fizz| |FIZZ| |fIzZ| |FiZZ|
|fizz| |FIZZ| |fIzZ| |FiZZ|
```

When `'ignorecase'` and `'smartcase'` are both on, search patterns that contain upper case characters are handled as though `'ignorecase'` is off. In other words the search pattern is case-sensitive.

```vim
/fIzZ
```

```
fizz FIZZ |fIzZ| FiZZ
fizz FIZZ |fIzZ| FiZZ
```

## Summary

Turning on `'ignorecase'` and `'smartcase'` makes case-sensitive and case-insensitive searches a cinch. To ignore case, use lower case, otherwise use at least one upper case character. And if you really need to do a case-sensitive lower case search use the appropriate flags: `/fizz\C`, `:%s/foo/bar/gI`.
