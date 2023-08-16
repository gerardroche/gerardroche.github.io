---
tags: sublime-text
title: Working on Sublime Text packages
---

Re: Hacking on packages.

I use cloned repositories directly into the Packages directory.

I also have my configs in a repository, so many of the packages I maintain, I have as submodules. My entire Packages directory is essentially a super project. You can see it here: https://github.com/gerardroche/sublimefiles

One thing though, is I have Package Control configured to ignore git repositories. Otherwise it will try to update you repositories. How to configure Package Control along with an example can be found here: https://github.com/NeoVintageous/NeoVintageous/blob/master/.github/CONTRIBUTING.md#installation

When I want to hack temporarily on  a package I clone it directly, instead of adding it as a submodule, and add a local gitignore rule:

```
echo "/TempPackage/" >> .git/info/exclude
```

You can also symlink it too.

The submodules are essentially for persistent repositories I maintain or work on from time to time.
