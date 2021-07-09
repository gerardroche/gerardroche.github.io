---
tags: php
title: PHP-CS-Fixer Pre-Commit Hook
---

Running coding standard checks before committing code can save you a lot of time triaging CI failures. This is a good use-case for using Git pre-commit hooks. Let's take a look at how to implement checks in a Git pre-commit hook.

## Installing a Hook

Hooks can installed locally or globally. The hooks are all stored in the hooks subdirectory of the Git directory. In most projects, that's `.git/hooks`, but you can set a custom location by setting [`core.hooksPath`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-corehooksPath):

```sh
mkdir ~/.githooks
git config core.hooksPath ~/.githooks
```

To set a global hooks path:

```sh
git config --global core.hooksPath ~/.githooks
```

Let's create a hook that print "Hello world" before commits:

Create the hook script:

```sh
echo "Hello world" > ~/.githooks/pre-commit
```

Make sure the file is executable:

    chmod 744 ~/.githooks/pre-commit

The hook is invoked by `git-commit` and  will print "Hello world":

```sh
$ git commit -m ":zap: KAPOW"
Hello world
```

Hooks can be bypassed with the `--no-verify` option:

```sh
git commit --no-verify
```

When a hook script exits with a non-zero status from this script causes the `git commit` command to abort before creating a commit. The Git documentation provides a list of possible hooks you can use: [Git Hooks documentation](https://git-scm.com/docs/githooks#_hooks).

Printing Hello world is not particularly exciting or useful. Let's take a look at something more useful: running a php-cs-fixer check before committing.

## PHP Coding Standards Fixer

> The [PHP Coding Standards Fixer](https://github.com/FriendsOfPhp/PHP-CS-Fixer) (PHP CS Fixer) tool fixes your code to follow standards; whether you want to follow PHP coding standards as defined in the PSR-1, PSR-2, etc., or other community driven ones like the Symfony one.

Here is an out-of-the-box example of PHP-CS-FIXER pre commit hook:

[PHP Coding Standards Fixer pre commit hook](https://github.com/gerardroche/php-cs-fixer-pre-commit-hook).

This may be overkill for your needs so copy and modify. It will run php-cs-fixer in quiet mode before commits and if there is violation it will re-run it with details such as diff of the issue. It's easy enough to install:

Create a Git hooks directory:

```sh
mkdir ~/.githooks
```

Configure Git to use the hooks:

```
git config --global core.hooksPath ~/.githooks
```

Download or copy the [`pre-commit` hook](https://github.com/gerardroche/php-cs-fixer-pre-commit-hook/blob/master/pre-commit) to your Git hooks location:

Make sure the file is executable:

```
chmod 744 ~/.githooks/pre-commit
```

Enjoy!

## Further reading

- [Git Hooks](https://git-scm.com/docs/githooks)
- [Customizing Git Hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks)
- [Git hooksPath configuration](https://git-scm.com/docs/git-config#Documentation/git-config.txt-corehooksPath)
