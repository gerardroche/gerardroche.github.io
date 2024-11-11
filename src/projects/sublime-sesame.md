---
aside: false
editLink: false
lastUpdated: false
next: false
outline: false
prev: false
sidebar: false
description: Sublime Text commands to open, add, remove, and switch projects or folders.
---

# Sesame

Sublime Text commands to open, add, remove, and switch projects or folders.

For example when you organise your projects:

```sh
$ /path/to/projects
├── laravel
│   ├── fortify
│   ├── framework
│   └── passport
├── sublimelsp
│   └── LSP
└── wbond
    ├── package_control
    └── packagecontrol.io
```

Sesame commands will prompt you:

```
laravel/fortify
laravel/framework
laravel/passport
sublimelsp/LSP
wbond/package_control
wbond/packagecontrol.io
```

If the project contains a `.sublime-project` file, it is used to open the project.

## Commands

| Name              | Description |
| ----------------- | ----------- |
| Sesame: Open      | Open project or open folder. |
| Sesame: Add       | Add project or add folder. |
| Sesame: Remove    | Remove folder from window. |
| Sesame: Switch    | Switch to project or folder. |

## Setup

Set the path of your projects.

> Command Palette → Preferences: Settings

```jsonl
"sesame.path": "~/projects"
```

You can now run Sesame commands.

> Command Palette → Sesame: Open

## Key bindings

One key binding is defined by default.

| Command      | Linux / Win  | Mac           |
| ------------ | ------------ | ------------- |
| Sesame: Open | `ctrl + alt + o` | `super + alt + o` |

Create your preferred key bindings.

> Command Palette → Preferences: Key Bindings

::: code-group
```jsonl [Linux / Win]
[
    { "keys": ["ctrl+alt+o"], "command": "sesame_open" },
    { "keys": ["ctrl+alt+a"], "command": "sesame_add" },
    { "keys": ["ctrl+alt+r"], "command": "sesame_remove" },
    { "keys": ["ctrl+alt+s"], "command": "sesame_switch" }
]
```
```jsonl [Mac]
[
    { "keys": ["super+alt+o"], "command": "sesame_open" },
    { "keys": ["super+alt+a"], "command": "sesame_add" },
    { "keys": ["super+alt+r"], "command": "sesame_remove" },
    { "keys": ["super+alt+s"], "command": "sesame_switch" }
]
```

## Installation

::: details Package Control installation

1. Open the Command Palette: `Ctrl+Shift+P` (Linux / Win) or `Cmd+Shift+P` (Mac).
1. Type "Package Control: Install Package" and press Enter.
1. In the input field, type "Sesame" and select it from the list of available packages.

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
│   └── passport
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
laravel/passport
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

## Custom commands

Sesame commands accept `path`, `depth`, and `vcs` arguments.

**Example**

> Packages/User/Default.sublime-commands

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

::: info NOTE
There is no need to create a custom command for `Sesame: Remove` because that command prompts with the currently open projects and folders.
:::
