---
tags: git
---

The `git add --patch` command *interactively* add hunks to the index. It effectively runs `git add --interactive`, but bypasses the initial command menu and directly jumps to the patch subcommand.

If you know that you want to commit after adding a patch, run `git commit --patch`. This effectively runs `git add --patch` first, immediately followed by `git commit`.

You can also interactively *reset* an index (`git reset --patch`). This is useful command to know, especially if you've ever painstakingly setup a patch only to press `y` by mistake and add a hunk that you didn't want, and then had to reset the index and start again. I have several of those t-shirts.

## `git add --patch`

The patch prompt can be intimidating, but everything is easy when you know how.

When you run `git add --patch` (`git add -p` for short), you get prompted with the first hunk (if any), and git waits for response to a question:

```terminal
$ Stage this hunk [y,n,q,a,d,/,s,e,?]?
```

Do you want to add this hunk to the index? Our options are the comma-delimited list in the square brackets: `[y,n,q,a,d,/,s,e,?]`.

What do they mean? You can press `?` (which is one of the options) for help. Git will display something like this:

```terminal
$ Stage this hunk [y,n,q,a,d,/,s,e,?]?
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help
```

The ones you will mostly use are `y`, `n`, `q`, `s`, and `a`. If you're new to this command then learn these commands, because this is 80% of the value in using the command. I'll blog about the `e` option, which can useful in some situations, another day.

To test the command out, use a test git repository. Trying out a new command on a real repository with real changes can make us nervous about using the command. Go create a `gitdemo` directory somewhere and get familiar with patching.

## Making `--patch` respond to single keystrokes

By default, `--patch` commands wait for you to press `Enter` at each prompt i.e. after you've answered the question: `Stage this hunk [y,n,q,a,d,/,s,e,?]?`. To skip the need to press enter, enable [`interactive.singlekey`](https://git-scm.com/docs/git-config#git-config-interactivesingleKey):

```terminal
$ git config --global interactive.singlekey true
```

[On Ubuntu](https://superuser.com/a/817688) you'll need to install `libterm-readkey-perl`:

```terminal
$ sudo apt-get install libterm-readkey-perl
```

## Further reading

* [Interactive Staging](https://git-scm.com/book/en/v2/Git-Tools-Interactive-Staging)
