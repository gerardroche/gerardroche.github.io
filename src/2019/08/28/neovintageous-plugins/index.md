---
post: true
sidebar: false
tags: vim sublime-text neovintageous
title: NeoVintageous Plugins
lastUpdated: 2023-06-16T10:46:00+01:00
---

# NeoVintageous Plugins

NeoVintageous includes a number of bundled plugins by default. Each plugin offers additional functionality beyond the features of Vim. Let's take a look at some the features.

## Abolish

Abolish is a port of [vim-abolish](https://github.com/tpope/vim-abolish), Tim Pope, the author, describes it as

> Three superficially unrelated plugins in one that share a common theme: working with variants of a word.

The NeoVintageous port currently only supports the **"case mutating algorithms"**. Each algorithm can be applied to a word under the cursor using the **cr** mapping **(mnemonic: CoeRce)** followed by one of the following characters:

character | algorithm
--------- | ---------
`c` | camelCase
`m` | MixedCase
`_` | snake_case
`s` | snake_case
`u` | SNAKE_UPPERCASE
`U` | SNAKE_UPPERCASE
`-` | dash-case (not usually reversible)
`k` | kebab-case (not usually reversible)
`.` | dot.case (not usually reversible)
`<space>` | space case (not usually reversible)
`t` | Title Case (not usually reversible)

For example:

```
cru
```

On a lowercase word to make it uppercase is slightly easier to type than the equivalent:

```
gUiw
```

### Coercion reversibility

Some algorithms, such as `cr-` (dash-case) and `cr.` (dot.case), are listed as "not usually reversible". The reason is because `-` (dash) and `.` (dot) are not "keyword characters", so they are treated as breaking a word. For example, "key_word" is a single keyword, whereas the dash-case version, "key-word", is treated as two keywords, "key" and "word".

## Commentary

Commentary is a port of [vim-commentary](https://github.com/tpope/vim-commentary), it adds several commands that make it easier to comment, uncomment, and toggle comments.

Use **gcc** to comment out a line (takes a count), **gc** to comment out the target of a motion (for example, **gcap** to comment out a paragraph, **gcG** to comment to the end of file), and **gc** in visual mode to comment out the selection. All of the commands toggle the comment.

command | description
------- | ------------
`gcc` | Comment or uncomment \[count\] lines.
`gc{motion}` | Comment or uncomment lines that \{motion\} moves over.
`{Visual}gc` | Comment or uncomment the highlighted lines.

## Highlighted Yank

Highlighted Yank is a port of [vim-highlightedyank](https://github.com/machakann/vim-highlightedyank).

> Make the yanked region apparent!

This plugin highlights a yanked region immediately after being yanked. The **duration** and **style** is configurable, see the [1.7.0 Release Notes](/2018/09/02/neovintageous-1.7.0/) for a detailed guide.

## Multiple Cursors

Multiple Cursors is a port of [vim-multiple-cursors](https://github.com/terryma/vim-multiple-cursors).

command | description
------- | -----------
`<C-n>` or `gh` | Start multiple cursor.
`<C-n>` or `j` | Add next match.
`<C-x>` or `l` | Skip next match.
`<C-p>` or `k` | Remove current match and go back on previous.
`<Esc>` or `J` | Quit and enter normal mode.

Once you've started a multiple cursor you can use visual mode commands, for instance, `I`, `c`, `d`, `s`, `x`, `y`.

You can go to normal mode by pressing `v`. Once in normal mode you can use normal mode commands, for instance, `i`, `ciw`, `d$`, `p`, `yiw`.

At any time, you can press `<Esc>` or `J` to exit back to normal mode. This behaviour can be configured to work similar to pressing `v`. This is useful if you want to go back to normal mode and still be able to operate on all the cursors.

**Menu → Preferences → Settings**

```json
{
    "vintageous_multi_cursor_exit_from_visual_mode": false,
}
```

The control keys, such as `<C-n>`, `<C-x>`, `<C-p>`, are disabled by default. You can enable them via the Command Palette:

```console
NeoVintageous: Toggle CTRL keys
```

## Surround

Surround is a port of [vim-surround](https://github.com/tpope/vim-surround).

> Surround.vim is all about "surroundings": parentheses, brackets, quotes, XML tags, and more. The plugin provides mappings to easily delete, change and add such surroundings in pairs.

It's easiest to explain with examples. Press `cs"'` inside

```html
[Hello] world!
```

to change it to

```html
'Hello world!'
```

Now press `cs'<q>` to change it to

```html
<q>Hello world!</q>
```

To go full circle, press `cst"` to get

```html
"Hello world!"
```

To remove the delimiters entirely, press `ds"`

```html
Hello world!
```

Now with the cursor on "Hello", press `ysiw]` (`iw` is a text object).

```html
[Hello] world!
```

Consider the following examples (an asterisk denotes the cursor position).

old text | command | new text
-------- | ------- | --------
`"Hello *world!"` | `ds"` | `Hello world!`
`[123+4*56]/2` | `cs])` | `(123+456)/2`
`"Look ma, I'm *HTML!"` | `cs"<q>` | `<q>Look ma, I'm HTML!</q>`
`if *x>3 {` | `ysW(` | `if ( x>3 ) {`
`my $str = *whee!;` | `vllllS'` | `my $str = 'whee!';`

The Surround plugin is very powerful and has many more features than shown above, see the [surround documentation](https://github.com/NeoVintageous/NeoVintageous/blob/master/res/doc/surround.txt) for more examples. You can also access documentation via the ex command `:help surround`.

## Unimpaired

Unimpaired is a port of [vim-unimpaired](https://github.com/tpope/vim-unimpaired).

> Much of unimpaired.vim was extracted from my vimrc when I noticed a pattern: complementary pairs of mappings.

**Next and previous**

command | description
------- | -----------
`[b` | `:bprevious`
`]b` | `:bnext`
`[B` | `:bfirst`
`]B` | `:blast`
`[t` | `:tprevious`
`]t` | `:tnext`
`[T` | `:tfirst`
`]T` | `:tlast`
`[l` | Jump to the \[count\] previous error (requires SublimeLinter).
`]l` | Jump to the \[count\] next error (requires SublimeLinter).

**Line operations**

command | description
------- | -----------
`[<Space>` | Add \[count\] blank lines above the cursor.
`]<Space>` | Add \[count\] blank lines below the cursor.
`[e` | Exchange the current line with \[count\] lines above it.
`]e` | Exchange the current line with \[count\] lines below it.

**Option toggling**

The mnemonic for y is that if you tilt it a bit it looks like a switch.

On | Off | Toggle | Option
-- | --- | ------ | ------
`[oa` | `]oa` | `yoa` | `'menu'`
`[oc` | `]oc` | `yoc` | `'cursorline'`
`[oe` | `]oe` | `yoe` | `'statusbar'`
`[oh` | `]oh` | `yoh` | `'hlsearch'`
`[oi` | `]oi` | `yoi` | `'ignorecase'`
`[ol` | `]ol` | `yol` | `'list'`
`[om` | `]om` | `yom` | `'minimap'`
`[on` | `]on` | `yon` | `'number'`
`[os` | `]os` | `yos` | `'spell'`
`[ot` | `]ot` | `yot` | `'sidebar'`
`[ow` | `]ow` | `yow` | `'wrap'`

## Indent Object

Indent Object is a port of [vim-indent-object](https://github.com/michaeljsmith/vim-indent-object). It defines a new text object, based on indentation levels. This is very useful in languages such as Python, in which the syntax defines scope in terms of indentation. Using the objects defined in this plugin, an entire if structure can be quickly selected.

Just like regular text objects, these mappings can be used either with operators expecting a motion, such as `d` or `c`, as well as in visual mode.

command | description
------- | -----------
`ai` | An Indentation level and line above.
`ii` | Inner Indentation level (no line above).
`aI` | An Indentation level and lines above/below.
`iI` | Inner Indentation level (no lines above/below).

The `iI` mapping is mostly included for completeness, it's effectively a synonym for `ii`.

## Further reading

* `:help nv`
