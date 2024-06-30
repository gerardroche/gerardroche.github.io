---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: ubuntu sh
title: On which, type, and readlink commands
excerpt: "The `which` command identifies the location of a command. It does this by searching the `PATH` for executable files. The `-a` option prints all matching locations. To inspect the `PATH`, use `tr` to split it into separate lines for improved readability."
lastUpdated: false
---

# On which, type, and readlink commands

The `which` command identifies the location of a command. It does this by searching the `PATH` for executable files.

```sh
$ which ls
/usr/bin/ls
```

The `-a` option prints all matching locations.

```sh
$ which ls -a
/usr/bin/ls
/bin/ls
```

To inspect the `PATH`, use `tr` to split it into separate lines for improved readability.

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

Here are the fundamentals of navigating manual pages:

- Press `q` to exit.
- Press `h` for help.
- Press `/pattern` to search forward.
- Press `n` to repeat search forward.
- Press `N` to repeat search backward.
- Use arrow keys, Space, Home, End, PgUp, PgDn, etc.
- Many Vim motions are supported.

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

The `readlink` command outputs a trailing newline by default, which can be an issue in a scripting environment. Use the `-n` option to omit the newline.

```sh
RESOLVED_PATH="$(readlink -nf /usr/bin/x-terminal-emulator)"
```

You may want to use `--`, the standard end-of-options signal, to prevent the path argument from being interpreted as an option. For example, without `--`, the argument `-version` would be interpreted as an option, not a path.

```sh
RESOLVED_PATH="$(readlink -nf -- "$1")"
```

As an aside, use `update-alternatives` to change alternatives.

```
$ sudo update-alternatives --config x-terminal-emulator
```
