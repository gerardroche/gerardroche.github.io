---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: git
title: Renaming Git Submodules
lastUpdated: false
---

# Renaming Git Submodules

Renaming a Git submodules since Git 1.8.5 is one command:

```
$ git mv <source> <destination>
```

That's all there is to it!

Note: Git 2.9 [fixed an issue](https://stackoverflow.com/a/18712756) renaming *nested* submodules.

```bash
$ git --version
git version 2.14.1
$ lsb_release -ds
Ubuntu 17.10
```

## Example

```bash
$ git mv submodule_a submodule_b
$ git status
On branch master
Changes to be committed:
    modified:   .gitmodules
    renamed:    submodule_a -> submodule_b
$ git diff --staged
diff --git a/.gitmodules b/.gitmodules
index 4a62538..798a2cc 100644
--- a/.gitmodules
+++ b/.gitmodules
@@ -1,3 +1,3 @@
 [submodule "submodule_a"]
-       path = submodule_a
+       path = submodule_b
        url = ../submoduleproject
diff --git a/submodule_a b/submodule_b
similarity index 100%
rename from submodule_a
rename to submodule_b
$ git commit -m "Moved submodule"
[master 8d3b1a8] Moved submodule
 2 files changed, 1 insertion(+), 1 deletion(-)
 rename submodule_a => submodule_b (100%)
```
