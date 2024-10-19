---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: php
title: PHP-CS-Fixer Pre-Commit Hook
lastUpdated: false
---

# PHP-CS-Fixer Pre-Commit Hook

Automatically executing a code style check before commits can save you time. You can use a git hook to automatically run scripts before a commit.

In this post I'll show you how to setup [PHP Coding Standards Fixer](https://github.com/FriendsOfPhp/PHP-CS-Fixer?ref=blog.gerardroche.com) to automatically run before a commit. If the check fails, the commit will abort. You can bypass checks with `git commit --no-verify`.

## Setup the Git hooks location

Hooks can installed local for a current repository or globally for all repositories. The hooks are all stored in the `hooks` subdirectory of the Git directory. In most projects that's `.git/hooks`. You can set a custom location by setting [`core.hooksPath`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-corehooksPath?ref=blog.gerardroche.com).


Set hooks path globally for all repositories:

```bash
git config --global core.hooksPath ~/.githooks
```


Set hooks path for local repository:

```bash
git config core.hooksPath ~/.githooks
```

## A simple example hook

Create a pre-commit script that prints "Hello world".

```bash
echo 'echo "Hello world"' > ~/.githooks/pre-commit
```

Make sure the script is executable.

    chmod 744 ~/.githooks/pre-commit

Now when you commit "Hello world" will be printed.

```bash
$ git commit -m "commit message"
Hello world
```

## Hook exit status

When a hook script exits with a non-zero status from this script causes the `git commit` command to abort before creating a commit. The Git documentation provides a list of possible hooks you can use: [Git Hooks documentation](https://git-scm.com/docs/githooks#_hooks?ref=blog.gerardroche.com).

## Setup PHP-CS-Fixer

Printing Hello world is not particularly exciting or useful. Let's take a look at something more useful: running a php-cs-fixer check before committing.

> The [PHP Coding Standards Fixer](https://github.com/FriendsOfPhp/PHP-CS-Fixer?ref=blog.gerardroche.com) (PHP CS Fixer) tool fixes your code to follow standards; whether you want to follow PHP coding standards as defined in the PSR-1, PSR-2, etc., or other community driven ones like the Symfony one.

Here is an out-of-the-box example of PHP-CS-FIXER pre commit hook:

[PHP Coding Standards Fixer pre commit hook](https://github.com/gerardroche/php-cs-fixer-pre-commit-hook?ref=blog.gerardroche.com).

This may be overkill for your needs so copy and modify. It will run php-cs-fixer in quiet mode before commits and if there is violation it will re-run it with details such as diff of the issue. It's easy enough to install:

Create a Git hooks directory:

```bash
mkdir ~/.githooks
```

Configure Git to use the hooks:

```
git config --global core.hooksPath ~/.githooks
```

Download or copy the [`pre-commit` hook](https://github.com/gerardroche/php-cs-fixer-pre-commit-hook/blob/master/pre-commit?ref=blog.gerardroche.com) to your Git hooks location:

Make sure the file is executable:

```
chmod 744 ~/.githooks/pre-commit
```

Enjoy!

## Further reading

- [Git Hooks](https://git-scm.com/docs/githooks?ref=blog.gerardroche.com)
- [Customizing Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks?ref=blog.gerardroche.com)
- [Git hooksPath configuration](https://git-scm.com/docs/git-config#Documentation/git-config.txt-corehooksPath?ref=blog.gerardroche.com)
