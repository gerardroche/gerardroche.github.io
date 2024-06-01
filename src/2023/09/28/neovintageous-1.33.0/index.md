---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.33.0
lastUpdated: false
---

# NeoVintageous 1.33.0

Introducing NeoVintageous 1.33.0! While this release may seem somewhat understated, it brings many subtle enhancements, fixes, and an overall refinement of existing features. Here are some noteworthy highlights:

- **[Effortless Reverse Sorting](#effortless-reverse-sorting):** Now you can effortlessly sort in reverse with the `:sort` command.

- **[Explore ASCII Values](#explore-ascii-values):** Dive into the world of ASCII values.

- **[Custom Sneak Key Bindings](#custom-sneak-key-bindings):** Tailor your sneak key bindings to your liking.

- **[Enhanced Navigation](#improved-ui-navigation):** Enjoy improved navigation for overlays, tabs, buffers, and groups.

- **[:ls and :registers Enhancements](#ls-now-displays-line-numbers):** Experience enhanced output for `:ls` and `:registers`.

## Effortless Reverse Sorting

Sorting your text in reverse order has never been easier, thanks to `!`.

```vim
:[range]sort[!] [i][u]
```

Here's how you can use it:

- When no `[range]` is given, all lines are sorted.
- When `!` is used, the order is reversed.
- When `i` is used, case is ignored.
- When `u` is used, a unique sort is applied, only the first of a sequence of identical lines is retained.

Let's break it down with some examples.

**Example 1: Sort**

To perform a case-sensitive sort, simply use the `:sort` command:

```vim
:sort
```

**Example 2: Reverse Sort**

For a reverse sort, all you need to do is add the `!` symbol:

```vim
:sort!
```

**Example 3: Case-Insensitive, Unique, Reverse Sort**

To achieve a case-insensitive, unique, and reverse sort, you can combine options like `i` (for case insensitivity) and `u` (for uniqueness) with the `!` symbol:

```vim
:sort! iu
```

**Example 4: Reverse Sort a Visual Selection**

Representing a visual selection range is as simple as using `'<,'>`. You can create a visual selection, for example, by typing `vip`, and then press `:`. This action will automatically populate the ex command with `'<,'>`:

```vim
:'<,'>
```

Next, append `sort!` to this command to sort the visually selected text in reverse order:

```vim
:'<,'>sort!
```

With these straightforward examples, you'll be able to sort your text effortlessly in any way you need, making your Vim experience more efficient and productive.

## Explore ASCII Values

Have you ever been curious about the ASCII value of the character under your cursor? This release introduces `:ascii`, which is the same as `ga`, which displays the ASCII value of the character under the cursor in decimal, hexadecimal, and octal formats, in the status bar.

For instance, when the cursor is positioned over an 'R,' the status bar will display the following information:

```
<R>  82,  Hex 0x52,  Octal 0o122
```

## Custom Sneak Key Bindings

By default, Sneak is disabled to avoid conflicts with certain Vim commands such as `s`, `S`, `z`, and `Z`. To enable Sneak, follow these steps:

1. Open the Command Palette by selecting `Preferences: NeoVintageous Settings`.
2. Add the following configuration to enable Sneak:

   ```json
   {
       "vintageous_enable_sneak": true
   }
   ```

You can now customize the default Sneak key bindings by setting environment variables.

The need to configure Sneak key bindings via environment variables, rather than conventional settings, arises from an implementation detail: plugins are loaded during startup, and access to settings is not available at this stage. Resolving this issue would require significant design adjustments. In the meantime, you can use environment variables to customize the mappings.

Here are the environment variables to set:

```bash
NEOVINTAGEOUS_SNEAK_MAP_S=s
NEOVINTAGEOUS_SNEAK_MAP_BIG_S=S
NEOVINTAGEOUS_SNEAK_MAP_Z=z
NEOVINTAGEOUS_SNEAK_MAP_BIG_Z=Z
```

**Example for Linux users:** Consider adding the following lines to your `~/.profile` or `~/.bashrc` file:

```bash
export NEOVINTAGEOUS_SNEAK_MAP_S=s
export NEOVINTAGEOUS_SNEAK_MAP_BIG_S=S
export NEOVINTAGEOUS_SNEAK_MAP_Z=z
export NEOVINTAGEOUS_SNEAK_MAP_BIG_Z=Z
```

Please note that to activate these changes, you will need to restart Sublime Text and, in some cases, reboot your system.

**Example for Windows users:**

You can set environment variables for each user separately through the System Properties dialog box. Follow these steps:

1. Press the Windows Key + R to open the "Run" dialog box.
2. Enter "sysdm.cpl" and press the "OK" button. The "System Properties" dialog box will open.
3. Select the "Advanced" tab and click the "Environment Variables..." button. The "Environment Variables" dialog box will open.
4. Select an existing variable in the "User variables" list and click the "Edit..." button to edit it. Alternatively, click the "New..." button to add a new variable.
5. After editing variables, click the "OK" button to save the changes.

Again, please keep in mind that to activate these changes, you will need to restart Sublime Text and, in some cases, reboot your system.

## Improved UI Navigation

Efficiently navigate through UI elements such as the Command Palette, Goto File overlay, Goto Symbol, and Goto Symbol in Project.

| Command   | Description          |
| :-------- | :-------------------- |
| `CTRL-j` or `CTRL-n` | Move to the next item. |
| `CTRL-k` or `CTRL-p` | Move to the previous item. |

## Improved Tab Commands

The tab commands `tabnext` and `tabprevious` now accept a count. Both commands wrap around from the first one to the last one.

```vim
:tabnext [count]
```

Move forward to the `[count]`th tab.

```vim
:tabprevious [count]
```

Move back `[count]` tabs.

## Improved Buffer Commands

Buffer commands like `:bnext` and `:bprevious` now cycle through all views instead of just cycling through views within a group. They also accept a count. Both commands wrap around the end of the buffer list.

```vim
:bnext [count]
```

Go to the `[count]`th next buffer in the buffer list. `[count]` defaults to one.

```vim
:bprevious [count]
```

Go to the `[N]`th previous buffer in the buffer list. `[N]` defaults to one.

## Enhanced Group Navigation

Navigating between cursor groups is now easier than ever with the introduction of `CTRL-w w` (for moving forward) and `CTRL-w W` (for moving in reverse).

These shortcuts enable seamless transitions between neighbouring cursor groups, significantly enhancing your workflow efficiency.

## :ls now displays line numbers

The `:ls` command has been enhanced to include the line number of the cursor position. In cases of multiple cursors, they are presented as a comma-delimited list.

**Example:** Display All Buffers

```vim
:ls
```

```vim
12 %a   "/test/text.txt"   line 3
31  h   "file.txt"         line 1
32  h   "test.txt"         lines 5, 7, 11
```

Here is a description of the indicators:

| Indicator | Description
| :-------- | :----------
| % | The buffer in the current window.
| + | A modified buffer.
| = | A readonly buffer.
| a | An active buffer: it is loaded and visible.
| h | A hidden buffer: It is loaded but currently not visible.

## :registers now includes a type column

The "show registers" command, `:registers`, has been enhanced to include a new "Type" column, indicating whether the content is in characterwise or linewise format. The types are represented as follows:

| Type | Description
| :--- | :----------
| "c"  | Characterwise text.
| "l"  | Linewise text.

## Multiple Cursor Enhancements

Several multiple cursor aliases have been introduced to enhance your editing experience:

- `\\A` (equivalent to `<M-A>`) Select All
- `N` (equivalent to `Q`, `k`, and `CTRL-p`) Remove Cursor
- `TAB` (equivalent to `Esc` or `J`) Quit Multiple Cursors.

## Other Notable Additions

- Add support for `<Left>` and `<Right>` in insert mode, allowing you to move the cursor one character to the left and right.
- Add `[count]` support for `CTRL-i` and `CTRL-o`: navigate to newer and older cursor positions in the jump list. [#981](https://github.com/NeoVintageous/NeoVintageous/issues/981) [#980](https://github.com/NeoVintageous/NeoVintageous/issues/980)
- Add `O` in visual mode: Go to Other end of highlighted text.  This is like "o", but in Visual block mode the cursor moves to the other corner in the same line. [#976](https://github.com/NeoVintageous/NeoVintageous/issues/976)
- Add `CTRL-n` in insert mode to open auto-complete. [#965](https://github.com/NeoVintageous/NeoVintageous/issues/965)

## Notable Fixes

- Bracket text object, e.g., `vi{`, `vi}`, `viB`, should not include trailing whitespace on last line
- Special keys like `<Esc>` don't work in complex mappings in some cases e.g., `<Esc>li`
- Session history is not saved in some cases
- `v_o` should update the cursor x position. [#974](https://github.com/NeoVintageous/NeoVintageous/issues/974)
- Don't populate small delete when a register is specified. [#963](https://github.com/NeoVintageous/NeoVintageous/issues/963)
- `zt`, `zb`, and `zz` should maintain cursor column. [#962](https://github.com/NeoVintageous/NeoVintageous/issues/962)
- `z<CR>`, `z-`, and `z.` should position the cursor on the first non-blank. [#962](https://github.com/NeoVintageous/NeoVintageous/issues/962)
- `zt`, `zb`, `zz`, `z<CR>`, `z-`, and `z.` scroll command inconsistencies. [#962](https://github.com/NeoVintageous/NeoVintageous/issues/962)
- Commands like `:tabfirst`, `:tabonly`, `:tabnext`, should not be forceable. [#966](https://github.com/NeoVintageous/NeoVintageous/issues/966)
- Disable line highlighting in Cmdline output. [#960](https://github.com/NeoVintageous/NeoVintageous/issues/960)

## Resources

* The [changelog](https://github.com/NeoVintageous/NeoVintageous/blob/master/CHANGELOG.md) details updates between releases.
* Access Vim's full documentation with `:help {subject}` or [online](https://vimhelp.org).
* Refer to our [roadmap](https://github.com/NeoVintageous/NeoVintageous/blob/master/ROADMAP.md) for supported Vim features.
* Report features/bugs on [GitHub](https://github.com/NeoVintageous/NeoVintageous/issues).
* [NeoVintageous 1.33.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.33.0)
