It's useful to customise your command-line prompt to show information about the current directory's Git repository. This can be as simple or complex as you want, but there are generally a few key pieces of information that most people want, like the current branch, and the status of the working directory. What most people *don't know*, is that Git provides a function out-of-the-box for generating most of the information you'll ever need.

## TL;DR

Put this in your `~/.bashrc`:

```
GIT_PS1_DESCRIBE_STYLE="contains"
GIT_PS1_SHOWCOLORHINTS="y"
GIT_PS1_SHOWDIRTYSTATE="y"
GIT_PS1_SHOWSTASHSTATE="y"
GIT_PS1_SHOWUNTRACKEDFILES="y"
GIT_PS1_SHOWUPSTREAM="verbose name git"

PROMPT_COMMAND='__git_ps1 "\u@\h:\w" " \$ "'
```

Now when you’re anywhere inside a git-controlled project your prompt will look similar to this:

![A command prompt with all the bells and whistles](/assets/2018-07-22-tldr.png)

## The Command Prompt

There are a number of bash environment variables that relate to the command prompt ("PS" stands for "Prompt Statement"):

* `PS0` - The value of this variable is expanded and displayed by interactive shells after reading a command and before the command is executed.

* `PS1` - The value of this variable is expanded and used as the primary prompt string (this is generally the prompt you see when you open your terminal). The default is `$`, unless you are the superuser, in which case it is `#`.

* `PS2` - The value of this variable is expanded and used as the secondary prompt string. The default is `>`.

* `PS3` - The value of this variable is used as the prompt for the select command.

* `PS4` - The value of this variable is expanded and the value is printed before each command bash displays during an execution trace (`set -x`). The first character is replicated multiple times, as necessary, to indicate multiple levels of indirection. The default is `+`.

* `PROMPT_COMMAND` - If set, the value is executed as a command prior to issuing each primary prompt.

* `PROMPT_DIRTRIM` - If set to a number greater than zero, the value is used as the number of trailing directory components to retain when expanding the `\w` and  `\W`  prompt string escapes. Characters removed are replaced with an ellipsis.

## Modifying the Primary Prompt

The primary prompt can be modified directly from your terminal. To make the change permanent, set the prompt variable in your `~/.bashrc` and restart your terminal. Let's take a look at some examples.

Change the prompt to the current working directory, followed by a dollar character, and then a space:

```
$ PS1='\w \$ '
```


Use `\n` to create multi-line prompts:

```
$ PS1='\w\n\$ '
```

See [backslash-escaped special characters](http://man7.org/linux/man-pages/man1/bash.1.html#PROMPTING) for a list of all special backslash-escaped characters.

### If-else

If-else statements can be used, for example to indicate the exit status of the most recently executed command. The following prints "(error)" if the most recently executed command fails:

```
$ PS1='\w $(if test $? = 0;then echo "\$";else echo "(error) \$";fi) '
```

Displaying an error message is not particularly useful, especially if you have a color prompt, so how about displaying a red dollar character as the prompt:

```
$ PS1='\w $(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) '
```

Color codes are surrounded with `\[` and `\]` [escape sequences](https://unix.stackexchange.com/questions/124407/what-color-codes-can-i-use-in-my-ps1-prompt/124409#124409). Using `\[` and `\]` around color codes is necessary to prevent issues with command line editing, browsing, and completion.

## The Git Prompt

Git provides a shell function out-of-the-box for generating repository status. It's a plain ol' shell function, and available when you install Git. For example, cd into a git controlled project and run:

```sh
$ echo "$(__git_ps1)"
 (master)
```

The `__git_ps1` function accepts one argument. The argument is the format string. When no arguments are given the format string defaults to `(%s)`. Git will automatically replace `%s` with the repository status information:

```sh
$ echo "$(__git_ps1)"
 (master)

$ echo "$(__git_ps1 "x %s y")"
x master y
```

The function can be used directly as command-substitution in `PS1`:

```sh
$ PS1='\u@\h:\w$(__git_ps1) \$ '
```

![A basic git command prompt](/assets/2018-07-22-git-prompt.png)

### Using PROMPT_COMMAND for a slightly faster prompt

For a slightly faster prompt use the `PROMPT_COMMAND` variable. When the git prompt function is used with `PROMPT_COMMAND`, it accepts *three* arguments: pre, post, and format. The format defaults to `(%s)`:

```sh
$ PROMPT_COMMAND="__git_ps1 'x' ' y '"
x (master) y

$ PROMPT_COMMAND="__git_ps1 'x' ' y ' ' a %s b'"
x a (master) b y
```

And you can use if-else statements and color codes:

```
$ PROMPT_COMMAND='__git_ps1 "\u@\h:\w" " $(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) "'
```

![A git command prompt with error status](/assets/2018-07-22-prompt-command.png)

## Git Prompt Configuration

They go up to eleven:

```
GIT_PS1_DESCRIBE_STYLE="contains"
GIT_PS1_SHOWCOLORHINTS="y"
GIT_PS1_SHOWDIRTYSTATE="y"
GIT_PS1_SHOWSTASHSTATE="y"
GIT_PS1_SHOWUNTRACKEDFILES="y"
GIT_PS1_SHOWUPSTREAM="verbose name git"

PROMPT_COMMAND='__git_ps1 "\u@\h:\w" " $(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) "'
```

![A fully configured git command prompt](/assets/2018-07-22-prompt-config.png)

See [git prompt](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh) for details on each variable.

## My Prompt

Here's [my current configuration](https://github.com/gerardroche/dotfiles). I like a multi-line prompt and plenty of status information:

```
GIT_PS1_DESCRIBE_STYLE="contains"
GIT_PS1_SHOWCOLORHINTS="y"
GIT_PS1_SHOWDIRTYSTATE="y"
GIT_PS1_SHOWSTASHSTATE="y"
GIT_PS1_SHOWUNTRACKEDFILES="y"
GIT_PS1_SHOWUPSTREAM="verbose name git"

PROMPT_COMMAND='__git_ps1 "╭─ \w" "\n╰$(if test $? = 0;then echo "\$";else echo "\[\e[31m\]\$\[\e[0m\]";fi) " " ⎇  %s"'
```

![My command prompt](/assets/2018-07-22-my-prompt.png)

## A Final Word

You've learned how to harness Git's prompt power. Go forth and create awesome.

## Further reading

* [Git in Bash](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Bash)
* [Git in Zsh](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Zsh)
* [Git in Powershell](https://git-scm.com/book/en/v2/Appendix-A%3A-Git-in-Other-Environments-Git-in-Powershell)

[^1]: http://man7.org/linux/man-pages/man1/bash.1.html#PARAMETERS
[^2]: http://man7.org/linux/man-pages/man1/bash.1.html#PROMPTING
