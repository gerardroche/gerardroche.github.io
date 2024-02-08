# Sesame

[Sesame](https://github.com/gerardroche/sublime-sesame) is a Projects Command Palette. It provides commands to open, add, remove, and switch projects. For example, when you organise your projects like this:

```
❯ ~/projects
├── laravel
│   ├── fortify
│   ├── framework
│   ├── jetstream
│   ├── passport
│   └── vite-plugin
├── sublimelsp
│   └── LSP
└── wbond
    ├── package_control
    └── packagecontrol.io
```

Sesame will prompt you with this:

```
laravel/fortify
laravel/framework
laravel/jetstream
laravel/passport
laravel/vite-plugin
sublimelsp/LSP
wbond/package_control
wbond/packagecontrol.io
```

If there is sublime project file in the root of the directory, it will be used by Sesame, otherwise the folder is the project.

:rocket: Highly configurable.

::: details TL;DR Setup

Set the path where you want Sesame to find projects.

Command Palette → Preferences: Settings

```jsonl
"sesame.path": "~/projects"
```

You can now run Sesame commands from the Command Palette.

::: info
One key binding is defined by default, Open, `Ctrl+Alt+O` (Win/Linux), `Super+Alt+O` (Mac). You can create your preferred key bindings for other commands, see [below](#key-bindings).
:::

## Installation

### Prerequisites

- [Sublime Text](https://www.sublimetext.com/) version 3 or higher.
- [Package Control](https://packagecontrol.io/installation) for Package Control installation.
- [Git](https://git-scm.com/) for Manual Git installation.

::: details Package Control installation

1. Open the Command Palette: `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac).
1. Type "Package Control: Install Package" and press Enter.
1. In the input field, type "Sesame" and select it from the list of available packages.

::: info NOTE
You may need to restart Sublime Text.
:::

::: details Manual Git installation

1. Navigate to the Sublime Text Packages directory:
   ::: code-group
   ``` [Linux]
   ~/.config/sublime-text/Packages
   ```
   ``` [Mac]
   ~/Library/Application Support/Sublime Text/Packages
   ```
   ``` [Windows]
   %APPDATA%\Sublime Text\Packages
   ```
1. Clone directly into the Packages directory:
   ```bash
   git clone https://github.com/gerardroche/sublime-sesame.git Sesame
   ```
::: info NOTE
You may need to restart Sublime Text.
:::

## Command Palette

- **Sesame: Open**
- **Sesame: Add**
- **Sesame: Remove**
- **Sesame: Switch**

## Key Bindings

Only one key binding is defined by default, Open, `Ctrl+Alt+O` (Win/Linux), `Super+Alt+O` (Mac).

::: details Create your preferred key bindings
Command Palette → Preferences: Key Bindings
::: code-group
```jsonl [Linux / Win]
{ "keys": ["ctrl+alt+o"], "command": "sesame_open" },
{ "keys": ["ctrl+alt+a"], "command": "sesame_add" },
{ "keys": ["ctrl+alt+r"], "command": "sesame_remove" },
{ "keys": ["ctrl+alt+s"], "command": "sesame_switch" },
```
```jsonl [Mac]
{ "keys": ["super+alt+o"], "command": "sesame_open" },
{ "keys": ["super+alt+a"], "command": "sesame_add" },
{ "keys": ["super+alt+r"], "command": "sesame_remove" },
{ "keys": ["super+alt+s"], "command": "sesame_switch" },
```
:::

## Settings

### sesame.path

- Type: `string|list`
- <Badge type="warning">Required</Badge>

The location of projects.

Placeholders like `~` and environment variables are expanded.

```jsonl
"sesame.path": "~/projects"
```

::: details Multiple paths

A simple list:

```jsonl
"sesame.path": ["~/projects", "~/vendor", "~/other"]
```

A list of paths with specific settings for each path.

```jsonl
"sesame.path": [
    {
        "path": "~/projects",
        "depth": 1
    },
    {
        "path": "~/vendor",
        "vcs": true
    }
]
```
:::

### sesame.depth

- Type: `integer (1 | 2)`
- Default: `2`

By default, Sesame looks two levels deep inside the path. This maps nicely to `vendor/name`, which is typical on services like GitHub. For example, when you organise your projects like this:

```
❯ ~/projects
├── laravel
│   ├── fortify
│   ├── framework
│   ├── jetstream
│   ├── passport
│   └── vite-plugin
├── sublimelsp
│   └── LSP
└── wbond
    ├── package_control
    └── packagecontrol.io
```

Sesame will prompt you with this:

```
laravel/fortify
laravel/framework
laravel/jetstream
laravel/passport
laravel/vite-plugin
sublimelsp/LSP
wbond/package_control
wbond/packagecontrol.io
```

When setting the depth to 1, Sesame will prompt you with this:

```
laravel
sublimelsp
wbond
```

### sesame.keymaps

- Type: `boolean`
- Default: `true`

Enable default key bindings.

### sesame.vcs

- Type: `null|boolean`
- Default: `null`

The `sesame.vcs` setting allows you to control the inclusion of version control system projects. Here are the available options:

- `null`: This setting includes both version-controlled and non-version-controlled projects. Projects with and without vcs integration will be considered.

- `true`: With this setting, only version-controlled projects will be included. Projects without vcs integration will be excluded.

- `false`: This setting excludes version-controlled projects. Only projects without vcs integration will be considered.

## Custom

Sesame commands accept `path`, `depth`, and `vcs` arguments.

::: details Example
To create custom Command Palette items, create or edit your commands file:

`Packages/User/Default.sublime-commands`

```json
[
    {
        "caption": "Sesame: Add Vendor",
        "command": "sesame_add",
        "args": { "path": "~/vendor" }
    },
    {
        "caption": "Sesame: Open Vendor",
        "command": "sesame_open",
        "args": { "path": "~/vendor" }
    },
    {
        "caption": "Sesame: Switch Vendor",
        "command": "sesame_switch",
        "args": { "path": "~/vendor" }
    },
]
```

You can find your Packages directory: Menu → Preferences → Browse Packages

::: info NOTE
You don't create one for the Sesame: Remove command, because that command prompts you with currently opened folders to remove, so the path is not relevant for that command.
:::
