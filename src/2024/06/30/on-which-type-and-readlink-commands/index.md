---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: ubuntu sh
title: The which, type, and readlink Linux commands
description: "The which command identifies the location of commands. It searches the system PATH for executables. The -a option prints all matching locations. To inspect the PATH, use tr to split it into separate lines for improved readability."
lastUpdated: false
---

# The `which`, `type`, and `readlink` Linux commands

The `which` command locates executable files by searching the system `PATH`.

```sh
$ which ls
/usr/bin/ls
```

Use the `-a` option to display all matching locations.

```sh
$ which -a ls
/usr/bin/ls
/bin/ls
```

To examine the `PATH` variable, use `tr` to split it into separate lines for better readability:

```sh
$ echo $PATH
/usr/local/bin:/usr/bin:/bin

$ echo $PATH | tr ':' '\n'
/usr/local/bin
/usr/bin
/bin
```

Built-in commands, such as `cd`, have no location; they are built into the shell. The `which` command prints nothing for built-in commands and there is no manual page. The shell's manual page contains information about the built-in commands.

```sh
$ which cd

$ man cd
No manual entry for cd

$ echo $SHELL
/bin/bash

$ man bash
```

## Navigating Manual Pages

- `q`: Exit
- `h`: Display help
- `/pattern`: Search forward
- `n`: Repeat search forward
- `N`: Repeat search backward
- Use arrow keys, Space, Home, End, PgUp, PgDn
- Supports Vim motions

## The `type` Command

The `type` command can determine if a command is a built-in, its location, the alias expansion for aliases, and the complete function for functions.

```sh
$ type cd
cd is a shell built-in

$ type which
which is /usr/bin/which

$ type ls
ls is aliased to 'ls --color=auto'

$ type greet
greet is a function
greet ()
{
    echo "Hello, world."
}
```

## The `readlink` Command

The `which` and `type` commands don't resolve symbolic links.

Use the `readlink` command to resolve symbolic links, and use the `-f` option to resolve them recursively. Since the `readlink` command expects a path, use the `which` command to locate the path first.

```sh
$ which x-terminal-emulator
/usr/bin/x-terminal-emulator

$ readlink `which x-terminal-emulator`
/etc/alternatives/x-terminal-emulator

$ readlink -f `which x-terminal-emulator`
/usr/bin/snap
```

## Handling Newlines and Options

The `readlink` command outputs a trailing newline by default, which can be an issue in a scripting environment. Use the `-n` option to omit the newline.

```sh
RESOLVED_PATH="$(readlink -nf /usr/bin/x-terminal-emulator)"
```

You may want to use `--`, the standard end-of-options signal, to prevent the path argument from being interpreted as an option. For example, without `--`, the argument `-version` would be interpreted as an option, not a path.

```sh
RESOLVED_PATH="$(readlink -nf -- "$1")"
```

## Managing Alternatives

To modify symbolic link alternatives, use `update-alternatives`:

```
$ sudo update-alternatives --config x-terminal-emulator
```
