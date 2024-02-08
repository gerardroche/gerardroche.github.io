---
post: true
sidebar: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.32.0
lastUpdated: 2024-02-11T23:45:23+00:00
---

# NeoVintageous 1.32.0

Introducing NeoVintageous 1.32.0! This release comes packed with exciting features, some of the highlights include:

- **[Effortless Input Method Switching](#effortless-input-method-switching):** Seamlessly transition between input methods upon entering and exiting Insert Mode, with support for third-party programs.

- **[Colemak and Dvorak Mappings](#colemak-and-dvorak-mappings):** Unlock the potential of Colemak and Dvorak keyboard layouts through innovative mapping packages.

- **[Gutter Marks: Introducing "Markology"](#gutter-marks-introducing-markology):** Experience enhanced convenience with highlighted line marks displayed in the gutter. Customize mark colors for a personalized touch.

- **[Universal Character Mapping](#universal-character-mapping):** Enjoy the freedom to map virtually any character according to your preferences.

- **[Tailored Sublime Text Exit Behaviour](#tailored-sublime-text-exit-behaviour-sidebar-visibility-matters):** Customize Sublime Text's exit behaviour based on sidebar visibility, granting you enhanced workspace control.

- **[Comprehensive Documentation and Roadmap](#comprehensive-documentation-and-roadmap):** Extensive documentation and a new roadmap offer clear insights into features and configurations.

This release empowers you with enhanced editing functionality and customization, making your NeoVintageous experience more dynamic and efficient.

## Effortless Input Method Switching

Seamlessly transition between input methods when entering and exiting Insert Mode. This feature supports third-party programs for input method switching.

For a detailed guide on automatic input method switching, refer to the [readme](https://github.com/NeoVintageous/NeoVintageous), or consider the following example:

1. Open the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Add the following JSON configuration, replacing your im-select command and default:

   ```json
   {
       "vintageous_auto_switch_input_method": true,
       "vintageous_auto_switch_input_method_default": "en",
       "vintageous_auto_switch_input_method_get_cmd": "/path/to/im-select",
       "vintageous_auto_switch_input_method_set_cmd": "/path/to/im-select {im}"
   }
   ```

   The `{im}` argument in the configuration represents a command-line option passed to the input switcher command.

The [readme](https://github.com/NeoVintageous/NeoVintageous) offers comprehensive guides for various input switchers across different operating systems.

## Colemak and Dvorak Mappings

Enhance typing efficiency with innovative mapping packages for Colemak and Dvorak layouts.

- [NeoVintageous Dvorak](https://github.com/gerardroche/NeoVintageousDvorak): Explore Dvorak key mappings.
- [NeoVintageous Colemak](https://github.com/gerardroche/NeoVintageousColemak): Embrace the convenience of Colemak key mappings.

Both packages utilize the new `vintageous_source` setting, enabling third-party key mappings. This streamlined approach ensures tailored Vim experiences while accommodating customization.

## Gutter Marks: Introducing "Markology"

Experience newfound convenience with highlighted line marks displayed in the gutter.

<video src="/assets/images/gutter-marks.webm" autoplay loop controls muted title="Gutter marks"></video>

Manage this feature with the `vintageous_show_marks_in_gutter` configuration.

To adjust:

1. Open the Command Palette with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Choose `Preferences: NeoVintageous Settings`.

3. Apply the following JSON configuration:

   ```json
   {
       "vintageous_show_marks_in_gutter": false
   }
   ```

With this configuration, you have the flexibility to toggle the visibility of marks in the gutter for the active line, tailoring your editing experience according to your preferences.

### Tailoring Markology Mark Colors

Personalize marks by modifying their colors:

1. Invoke the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Enter: `UI: Customize Color Scheme`.

3. Add the following JSON configuration, adjusting the color to preference:

```json
{
    "rules": [
        {
            "scope": "neovintageous.mark",
            "foreground": "yellow"
        }
    ]
}
```

Through this color customization, marks become both functional and visually harmonious with your chosen color scheme.

## Simplified Mark Deletion

Effortlessly manage marks with two new deletion commands:

1. `:delm[arks]!` - Delete all marks in the current view, excluding uppercase marks A-Z.

2. `:delm[arks] {marks}` - Delete specific marks.

<video src="/assets/images/delmarks.webm" autoplay loop controls muted title="Delete marks"></video>

**1. `:delm[arks]!`**

Clear marks in the current view, retaining global marks (A-Z) for broader usage across files.

Example:

```vim
:delm!
```

**2. `:delm[arks] {marks}`**

Selective removal of specified marks. Delete marks from A to Z by specifying individually or within a range, denoted by a dash. Spaces are ignored.

Examples:

```vim
:delmarks a       - deletes mark a
:delmarks a b 1   - deletes marks a, b, and 1
:delmarks Aa      - deletes marks A and a
:delmarks p-z     - deletes marks within range p to z
```

Streamlined mark deletion enhances control and organization.

## Universal Character Mapping

Liberating character mapping allows virtually any character to be customized. Symbols like ¥, É, é, ø, Ċ, Œ, œ, and arrows like → are now mappable.

Customize character mappings easily:

1. Launch the Command Palette with `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Enter "NeoVintageous: Open neovintageousrc file" and press `Enter`.

3. As an example, you can add the following line:

   ```vim
   nnoremap ¥ :registers<CR>
   ```

4. Finalize changes by refreshing the `neovintageousrc` file via the Command Palette: `NeoVintageous: Reload neovintageous file`.

With this flexibility, redefine character mappings as you see fit.

## Tailored Sublime Text Exit Behaviour: Sidebar Visibility Matters

Enhance your Sublime Text workflow with refined exit behaviour using the `vintageous_exit_when_quitting_last_window` setting. This setting governs actions like ZZ, :quit, and :wq, determining whether Sublime Text exits upon closing the last view, akin to Vim's window closure.

When set to true, quitting the last view triggers Sublime Text's exit. Conversely, setting it to false keeps Sublime Text active after closing the last view using these commands.

In this release, a new dimension of control emerges with the "unless_sidebar_visible" option. This setting ensures Sublime Text exits only when the sidebar is hidden, aligning exit behaviour with your workspace preferences.

To tailor your Sublime Text exit behaviour:

1. Access the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Choose `Preferences: NeoVintageous Settings`.

3. Apply the following JSON configuration:

   ```json
   {
       "vintageous_exit_when_quitting_last_window": "unless_sidebar_visible"
   }
   ```

This configuration adapts Sublime Text's exit behaviour to your work environment, providing a seamless experience.

## Clearing of Search Highlighting with :nohlsearch

Control the behaviour of search highlighting clearance upon entering Normal mode with a new setting.

<video src="/assets/images/search-highlighting.webm" autoplay loop controls muted title="Search highlighting"></video>

Currently, when you enter Normal mode by pressing `<Esc>`, `CTRL-[`, or `CTRL-c`, active search highlighting is automatically cleared. This deviates from Vim's behaviour, where search highlighting is only cleared with the ex command `:nohlsearch` or `:noh`.

To preserve Vim-like behaviour and prevent automatic clearing of highlighting upon entering Normal mode:

1. Open the Command Palette with `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS).

2. Type "Preferences: NeoVintageous Settings" and confirm with `Enter`.

3. Add the following JSON configuration:

   ```json
   {
      "vintageous_auto_nohlsearch_on_normal_enter": false
   }
   ```

Apply this configuration to maintain search highlighting until explicitly cleared using `:nohlsearch`.

To clear search highlighting directly, use the command:

```vim
:noh[lsearch]
```

For instance, you can map a key combination to clear search highlighting:

1. Launch the Command Palette: `NeoVintageous: Open neovintageousrc file`.

2. Add the following (customize `<C-l>` as desired):

  ```vim
  noremap <C-l> :nohlsearch<CR>
  ```

3. Ensure changes take effect by reloading the `neovintageousrc` file: `NeoVintageous: Reload neovintageous file`.

## Open Settings Editor in Side-by-Side

Now, effortlessly open the Settings editor in a side-by-side view by following these straightforward steps:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to access the Command Palette.

2. Type "Preferences: NeoVintageous Settings" and press `Enter`.

## Introducing the `'equalalways'` Option

Introducing the `'equalalways'` option, ensuring all views are of equal size after splitting.

To disable:

1. Open the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS).

2. Enter "NeoVintageous: Open neovintageousrc file" and press `Enter`.

3. Add the following line:

   ```vim
   set noequalalways
   ```

4. Apply changes by reloading the `neovintageousrc` file via the Command Palette: `NeoVintageous: Reload neovintageous file`.

## Enhanced Default: Super Keys Now Enabled

As a default enhancement, super keys (Windows key or macOS Command key) are now enabled for new users, with no impact on existing users.

Control super keys easily:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to access the Command Palette.

2. Enter "NeoVintageous: Toggle SUPER keys" and press `Enter`.

Effortlessly manage super key activation according to preference.

## Comprehensive Documentation and Roadmap

The [readme](https://github.com/NeoVintageous/NeoVintageous) now offers thorough insights into features, configurations, and tips for customizing your setup.

Additionally, a meticulous [roadmap](https://github.com/NeoVintageous/NeoVintageous/blob/master/ROADMAP.md) has been prepared. This exhaustive resource indexes existing features, providing a wealth of information to explore.

## Notable Additions

* [#956](https://github.com/NeoVintageous/NeoVintageous/issues/956): Add `:exi[t]!` alias of `:wq!`
* [#956](https://github.com/NeoVintageous/NeoVintageous/issues/956): Add `:exit[!] [file]` alias of `:wq[!] [file]`
* [#956](https://github.com/NeoVintageous/NeoVintageous/issues/956): Add `:x[it]!` alias of `:wq!`
* [#956](https://github.com/NeoVintageous/NeoVintageous/issues/956): Add `:xit[!] [file]` alias of `:wq[!] [file]`
* [#942](https://github.com/NeoVintageous/NeoVintageous/issues/942): Add `CTRL-M` alias of `Enter`
* [#943](https://github.com/NeoVintageous/NeoVintageous/issues/943): Add `zuw` alias of `zug`

## Notable Changes

* [#955](https://github.com/NeoVintageous/NeoVintageous/issues/947): `ZZ` now same as `:wq`
* [#956](https://github.com/NeoVintageous/NeoVintageous/issues/947): `:exi[t]` now same as `:wq`
* [#956](https://github.com/NeoVintageous/NeoVintageous/issues/947): `:x[it]` now same as `:wq`
* [#947](https://github.com/NeoVintageous/NeoVintageous/issues/947): `:vnoremap` and `vunmap` now include Select mode
* [#946](https://github.com/NeoVintageous/NeoVintageous/issues/946): `:noremap` and `unmap` now include Select mode

### Notable Deprecations

* [#819](https://github.com/NeoVintageous/NeoVintageous/issues/819): The deprecated setting `vintageous_exit_when_quiting_last_window` should be replaced with `vintageous_exit_when_quitting_last_window`.
* [#952](https://github.com/NeoVintageous/NeoVintageous/issues/952): The deprecated setting `highlightedyank` should be replaced with `vintageous_highlighted_yank`
* [#952](https://github.com/NeoVintageous/NeoVintageous/issues/952): The deprecated setting `highlightedyank_style` should be replaced with `vintageous_highlighted_yank_style`
* [#952](https://github.com/NeoVintageous/NeoVintageous/issues/952): The deprecated setting `highlightedyank_duration` should be replaced with `vintageous_highlighted_yank_duration`
* [#952](https://github.com/NeoVintageous/NeoVintageous/issues/952): The deprecated setting `neovintageous_search_cur_style` should be replaced with `vintageous_search_cur_style`
* [#952](https://github.com/NeoVintageous/NeoVintageous/issues/952): The deprecated setting `neovintageous_search_inc_style` should be replaced with `vintageous_search_inc_style`
* [#952](https://github.com/NeoVintageous/NeoVintageous/issues/952): The deprecated setting `neovintageous_search_occ_style` should be replaced with `vintageous_search_occ_style`

## Notable Fixes

* [#929](https://github.com/NeoVintageous/NeoVintageous/issues/929): No syntax highlighting for `<LocalLeader>`
* [#879](https://github.com/NeoVintageous/NeoVintageous/issues/879): neovintageousrc options only set on active view at startup
* [#922](https://github.com/NeoVintageous/NeoVintageous/issues/922): neovintageousrc reloading does not refresh options

## Resources

* The [changelog](https://github.com/NeoVintageous/NeoVintageous/blob/master/CHANGELOG.md) details updates between releases.
* Access Vim's full documentation with `:help {subject}` or [online](https://vimhelp.org).
* Refer to our [roadmap](https://github.com/NeoVintageous/NeoVintageous/blob/master/ROADMAP.md) for supported Vim features.
* Report features/bugs on [GitHub](https://github.com/NeoVintageous/NeoVintageous/issues).
* [NeoVintageous 1.32.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.32.0)
