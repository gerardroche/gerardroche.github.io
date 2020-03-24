It's useful to customise your command-line prompt to show information about the current directory's Git repository. This can be as simple or complex as you want, but there are generally a few key pieces of information that most people want, like the current branch and the status of the working directory. Let's take a look at how to get started.

## TL;DR

Put the following in your `~/.bashrc` file and when you’re inside a git-controlled project your prompt will show git information like this:

![A screenshot of a command prompt with git information](/assets/2018-07-22-tldr.png)

```sh
GIT_PS1_DESCRIBE_STYLE="describe"
GIT_PS1_SHOWCOLORHINTS="y"
GIT_PS1_SHOWDIRTYSTATE="y"
GIT_PS1_SHOWSTASHSTATE="y"
GIT_PS1_SHOWUNTRACKEDFILES="y"
GIT_PS1_SHOWUPSTREAM="verbose name git"
PROMPT_COMMAND='__git_ps1 "\u@\h:\w" " \$ "'
```

## The Command Prompt

There are a number of bash environment variables that relate to the command prompt *("PS" stands for "Prompt Statement")*:

variable | description
-------- | -----------
`PS0` | The value of this variable is expanded and displayed by interactive shells after reading a command and before the command is executed.
`PS1` | The value of this variable is expanded and used as the **primary prompt** string (this is generally the prompt you see when you open your terminal). The default is `$`, unless you are the superuser, in which case it is `#`.
`PS2` | The value of this variable is expanded and used as the secondary prompt string. The default is `>`.
`PS3` | The value of this variable is used as the prompt for the select command.
`PS4` | The value of this variable is expanded and the value is printed before each command bash displays during an execution trace (`set -x`). The first character is replicated multiple times, as necessary, to indicate multiple levels of indirection. The default is `+`.
`PROMPT_COMMAND` | If set, the value is executed as a command prior to issuing each primary prompt.
`PROMPT_DIRTRIM` | If set to a number greater than zero, the value is used as the number of trailing directory components to retain when expanding the `\w` and  `\W`  prompt string escapes. Characters removed are replaced with an ellipsis.

### Primary Prompt (PS1)

The primary prompt is the main variable we're interested in because it controls the prompt you see when you open your terminal. It can be modified directly in your terminal, but remember that to make a change permanent you'll need to set the variable in your `~/.bashrc` file and restart your terminal.

To change PS1 to the current working directory (`\w`) followed by a dollar symbol:

```terminal
$ PS1='\w \$ '
```

Newlines can used to create multi-line prompts:

```terminal
$ PS1='\w\n\$ '
```

Bash allows prompt strings to be customized by inserting backslash-escaped special characters that are decoded.  See [backslash-escaped special characters](http://man7.org/linux/man-pages/man1/bash.1.html#PROMPTING) for a complete list of all of special backslash-escaped characters.

### if-else statements

If-else statements can be used. A good example is to indicate the exit status of the most recently executed command (red to indicate an error).

The following prints "ERROR" when a recently executed command fails:

```terminal
$ PS1='\w $(if test $? = 0;then echo "\$";else echo "ERROR \$";fi) '
```

Instead of printing "ERROR" let's use color codes to show a prompt in red.

Color codes are surrounded with [escape sequences](https://unix.stackexchange.com/questions/124407/what-color-codes-can-i-use-in-my-ps1-prompt/124409#124409) (`\[` / `\]`). Using `\[` and `\]` around color codes is necessary to prevent issues with command line editing, browsing, and completion.

```terminal
$ PS1='\w $(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) '
```

![A git command prompt with error status](/assets/2018-07-22-prompt-command.png)


## The Git Prompt

Git provides a shell function out-of-the-box for generating repository status. It's a plain ol' shell function, and available when you install Git. For example, cd into a git controlled project and run:

```terminal
$ echo "$(__git_ps1)"
 (master)
```

The `__git_ps1` function accepts one argument. The argument is the format string. When no arguments are given the format string defaults to `(%s)`. Git will automatically replace `%s` with the repository status information:

```terminal
$ echo "$(__git_ps1)"
 (master)
$ echo "$(__git_ps1 "x %s y")"
x master y
```

The function can be used directly as command-substitution in `PS1`:

```terminal
$ PS1='\u@\h:\w$(__git_ps1) \$ '
```

![A basic git command prompt](/assets/2018-07-22-git-prompt.png)

### Using PROMPT_COMMAND for a slightly faster prompt

For a slightly faster prompt use the `PROMPT_COMMAND` variable. When the git prompt function is used with `PROMPT_COMMAND`, it accepts *three* arguments: pre, post, and format. The format defaults to `(%s)`:

```terminal
$ PROMPT_COMMAND="__git_ps1 'x' ' y '"
x (master) y
$ PROMPT_COMMAND="__git_ps1 'x' ' y ' ' a %s b'"
x a (master) b y
```

And you can use if-else statements and color codes:

```terminal
$ PROMPT_COMMAND='__git_ps1 "\u@\h:\w" " $(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) "'
```

![A git command prompt with error status](/assets/2018-07-22-prompt-command.png)

## A complete example

```sh
GIT_PS1_DESCRIBE_STYLE="contains"
GIT_PS1_SHOWCOLORHINTS="y"
GIT_PS1_SHOWDIRTYSTATE="y"
GIT_PS1_SHOWSTASHSTATE="y"
GIT_PS1_SHOWUNTRACKEDFILES="y"
GIT_PS1_SHOWUPSTREAM="verbose name git"
PROMPT_COMMAND='__git_ps1 "\u@\h:\w" " $(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) "'
```

![A fully configured git command prompt](/assets/2018-07-22-prompt-config.png)

## My own prompt

I'm a big fan of multi-line prompts. It's not for everybody but I like the space it offers:

```sh
GIT_PS1_DESCRIBE_STYLE="describe"
GIT_PS1_SHOWCOLORHINTS="y"
GIT_PS1_SHOWDIRTYSTATE="y"
GIT_PS1_SHOWSTASHSTATE="y"
GIT_PS1_SHOWUNTRACKEDFILES="y"
GIT_PS1_SHOWUPSTREAM="verbose name git"
PROMPT_COMMAND='__git_ps1 "╭─ \w" "\n╰$(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) " " ⎇  %s"'
```

![My command prompt](/assets/2018-07-22-my-prompt.png)


## Further reading

* [git-prompt.sh](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh)
* [Git in Bash](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash)
* [Git in Zsh](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh)
* [Git in Powershell](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Powershell)
* [Bash PARAMETERS](http://man7.org/linux/man-pages/man1/bash.1.html#PARAMETERS)
* [Bash PROMPTING](http://man7.org/linux/man-pages/man1/bash.1.html#PROMPTING)
