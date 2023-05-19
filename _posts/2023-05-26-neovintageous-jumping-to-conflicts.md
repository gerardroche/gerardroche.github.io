---
tags: neovintageous vim sublime-text git
title: NeoVintageous - Jumping to conflicts
---

![Quantum Leap (1989)](/assets/quantum-leap.webp)

NeoVintageous has two commands for jumping to SCM conflicts. These are part of the Unimpaired plugin bundled with NeoVintageous:

Command | Description
:------ | :----------
<kbd>[n</kbd> | Jump backward to previous SCM conflict marker or diff/patch.
<kbd>]n</kbd> | Jump forward to next SCM conflict marker or diff/patch.

**What are SCM conflict markers?**

SCM conflict markers are those pesky sections that you have to resolve when you get a merge conflict:

```diff
Here are lines that are either unchanged from the common
ancestor, or cleanly resolved because only one side changed,
or cleanly resolved because both sides changed the same way.
<<<<<<< yours:sample.txt
Conflict resolution is hard;
let's go shopping.
=======
Git makes conflict resolution easy.
>>>>>>> theirs:sample.txt
And here is another line that is cleanly resolved or unmodified
```

The area where a pair of conflicting changes happened is marked with markers <`<<<<<<`, `=======`, and `>>>>>>>`. The part before the `=======` is typically your side, and the part afterwards is typically their side.

Have you ever had to go through a file resolving conflicts like this? I know you have. Now you can jump from one to the next.
