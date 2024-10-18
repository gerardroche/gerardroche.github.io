---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: sh
title: bash or sh
excerpt: "I prefer sh over bash. I begin almost every script with the same four lines. A POSIX-compliant shell, exit immediately on error, unset CDPATH, and unset IFS."
lastUpdated: false
---

# bash vs sh

I prefer `sh` over `bash`. I begin almost every script with the same four lines.

```sh
#!/bin/sh
set -e
unset CDPATH
unset IFS
```

1. Use a POSIX-compliant shell.

1. Exit immediately if any command returns a non-zero status (indicating an error).

1. Unset the CDPATH variable, which is used to define a search path for the cd command. If CDPATH is set, the cd command will first look in the directories listed in CDPATH before the current directory. Unsetting CDPATH ensures that the cd command will only look in the current directory.

1. Unset the IFS (Internal Field Separator) variable. IFS is used to split strings into tokens, and it defaults to the whitespace characters (space, tab, and newline). Unsetting IFS will revert it to its default value, which is equivalent to IFS=$' \t\n'.

When I want to ignore an error status returned a command, I usually append `|| true` to suppress the error.

I've never needed the functionality of CDPATH in a script and resetting IFS just means no surprises.
