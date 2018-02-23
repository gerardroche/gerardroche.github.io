---
tags: git
---
Renaming a Git submodules since Git >= 1.8.5 is one command.

```sh
$ git mv <source> <destination>
```

That's all there is to it!

Git version 2.9 fixed an issue[^1] renaming **nested** submodules.

```sh
$ git --version
git version 2.14.1
$ lsb_release -ds
Ubuntu 17.10
```

Example

```sh
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

[^1]: https://stackoverflow.com/a/18712756
