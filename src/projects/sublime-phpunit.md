---
aside: false
editLink: false
lastUpdated: false
next: false
outline: false
prev: false
sidebar: false
description: PHPUnit integration for Sublime Text. Run tests from within Sublime Text. Supports running tests in output panel, terminal, and tmux.
---

# PHPUnit Kit

[PHPUnit](https://github.com/gerardroche/sublime-phpunit?ref=blog.gerardroche.com) integration.

## Features

* Run a test
* Run a test file
* Run the test suite
* Run the nearest test
* Run the last test
* Run tests via SSH
* Run tests via Docker
* Run tests via sidebar and context menus
* Run multiple tests (multiple cursor)
* Auto-run tests on save
* Jump to next and previous failures
* File and test switcher
* Toggle options
* Fully customizable
* Zero configuration required
* Support for:
    - [Artisan] - Artisan is the command-line interface included with Laravel.
    - [Composer] - Composer is a Dependency Manager for PHP.
    - [iTerm2] - iTerm2 brings the terminal into the modern age.
    - [Kitty] - Kitty is a fast, feature-rich, cross-platform, GPU-based terminal.
    - [ParaTest] - ParaTest adds parallel testing support in PHPUnit.
    - [Pest] - Pest is a testing framework with a focus on simplicity.
    - [xterm] - A terminal emulator for the X Window System.
    - [cmd] - A command-line interpreter for Windows.
    - [PowerShell] - A cross-platform command-line shell.
    - [Tmux] - A terminal multiplexer.

## Installation

### Prerequisites

- [Sublime Text](https://www.sublimetext.com/?ref=blog.gerardroche.com) version 3 or higher.
- [Package Control](https://packagecontrol.io/installation?ref=blog.gerardroche.com) for Package Control installation.
- [Git](https://git-scm.com/?ref=blog.gerardroche.com) for Manual Git installation.

::: details Package Control installation

1. Open the Command Palette: `Ctrl+Shift+P` (Win/Linux) or `Cmd+Shift+P` (Mac).
1. Type "Package Control: Install Package" and press Enter.
1. In the input field, type "PHPUnitKit" and select it from the list of available packages.

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
   git clone https://github.com/gerardroche/sublime-phpunit.git PHPUnitKit
   ```
::: info NOTE
You may need to restart Sublime Text.
:::

## Command Palette

| Command                           | Description
| :-------------------------------- | :----------
| PHPUnit:&nbsp;Test&nbsp;Nearest   | Executes the test closest to the cursor. If the current file isn't a designated test file, it runs tests for the current file.
| PHPUnit:&nbsp;Test&nbsp;File      | Runs tests for the currently open file. If it's not a test file, it runs tests for the current file.
| PHPUnit:&nbsp;Test&nbsp;Suite     | Runs the test suite associated with the current file.
| PHPUnit:&nbsp;Test&nbsp;Last      | Runs the most recently executed test.
| PHPUnit:&nbsp;Test&nbsp;Switch    | In a test file, opens the file under test; otherwise, opens the corresponding test file.
| PHPUnit:&nbsp;Test&nbsp;Visit     | Quickly accesses the last run test.
| PHPUnit:&nbsp;Test&nbsp;Results   | Opens the test output panel (applies to "sublime" strategy).
| PHPUnit:&nbsp;Test&nbsp;Cancel    | Halts any ongoing test executions.
| PHPUnit:&nbsp;Test&nbsp;Coverage  | Views code coverage using your default browser.
| PHPUnit:&nbsp;Toggle...           | Various toggle commands.

## Key Bindings

| Key        | Description
| :--------- | :----------
| `F4`       | Jump to the next failure
| `Shift+F4` | Jump to the previous failure

::: details Create your preferred key bindings
Command Palette → Preferences: Key Bindings
::: code-group
```jsonl [Linux / Win]
{ "keys": ["ctrl+shift+a"], "command": "phpunit_test_suite" },
{ "keys": ["ctrl+shift+c"], "command": "phpunit_test_cancel" },
{ "keys": ["ctrl+shift+f"], "command": "phpunit_test_file" },
{ "keys": ["ctrl+shift+l"], "command": "phpunit_test_last" },
{ "keys": ["ctrl+shift+n"], "command": "phpunit_test_nearest" },
{ "keys": ["ctrl+shift+r"], "command": "phpunit_test_results" },
{ "keys": ["ctrl+shift+s"], "command": "phpunit_test_switch" },
{ "keys": ["ctrl+shift+v"], "command": "phpunit_test_visit" }
```
```jsonl [Mac]
{ "keys": ["super+shift+a"], "command": "phpunit_test_suite" },
{ "keys": ["super+shift+c"], "command": "phpunit_test_cancel" },
{ "keys": ["super+shift+f"], "command": "phpunit_test_file" },
{ "keys": ["super+shift+l"], "command": "phpunit_test_last" },
{ "keys": ["super+shift+n"], "command": "phpunit_test_nearest" },
{ "keys": ["super+shift+r"], "command": "phpunit_test_results" },
{ "keys": ["super+shift+s"], "command": "phpunit_test_switch" },
{ "keys": ["super+shift+v"], "command": "phpunit_test_visit" }
```
:::

## Strategies

You can run tests using different execution environments known as "strategies".

| Strategy              | Identifier    | Description
| :---------------------| :-------------| :----------
| Sublime<br>(default)  | `sublime`     | Sends test commands to Sublime Text's exec output panel.
| iTerm2.app            | `iterm`       | Sends test commands to `iTerm2 >= 2.9`.
| [Kitty]               | `kitty`       | Sends test commands to the Kitty terminal.
| [xterm]               | `xterm`       | Sends test commands to the xterm terminal.
| [cmd]                 | `cmd`         | Sends test commands to the cmd.exe terminal.
| [PowerShell]          | `powershell`  | Sends test commands to the PowerShell command shell.
| [Tmux]                | `tmux`        | Sends test commands to the Tmux terminal multiplexer.

::: details **Example:** Use the Tmux strategy
Command Palette → Preferences: PHPUnit Settings
```jsonl
"phpunit.strategy": "tmux"
```
:::

## Settings

Command Palette → Preferences: PHPUnit Settings

### phpunit.options

- Type: `dict`
- Default: `{}`

Default command-line options to pass to PHPUnit.

::: details Examples
If you want some CLI options to stick around, you can configure them in your settings.

Command Palette → Preferences: PHPUnit Settings

```jsonl
"phpunit.options": {
    "no-coverage": true,
    "no-progress": true,
    "colors=never": true,
    "order-by=": "defects",
    "coverage-html": "build/coverage",
    "d": ["display_errors=1", "xdebug.scream=0"],
}
```

The above options will be passed to PHPUnit as CLI options:

```shell
-d "display_errors=1" \
-d "xdebug.scream=0" \
--no-coverage \
--no-progress \
--colors=never \
--order-by=defects \
--coverage-html build/coverage
```

**Example:** Ignore code coverage reporting configured in the XML configuration file

This can help keep your tests fast. You can toggle no-coverage from the command palette when you need it.

Command Palette → Preferences: PHPUnit Settings

```jsonl
"phpunit.options": {
    "no-coverage": true,
}
```

**Example:** Stop after first error, failure, warning, or risky test

Command Palette → Preferences: PHPUnit Settings

```jsonl
"phpunit.options": {
    "stop-on-defect": true
}
```

**Example:** Disable progress and output

This is useful if you are migrating from PHPUnit to Pest and want to hide superfluous output.

Command Palette → Preferences: PHPUnit Settings

```jsonl
"phpunit.options": {
    "no-progress": true,
    "no-output": true,
}
```
:::

### phpunit.executable

- Type: `string | list`
- Default: Auto-discovery

The path to the PHPUnit executable to use when running tests.

Environment variables and user home directory `~` placeholders are expanded.

:::details Examples
Command Palette → Preferences: PHPUnit Settings

As a string.

```jsonl
"phpunit.executable": "vendor/bin/phpunit",
```

With placeholder

```jsonl
"phpunit.executable": "~/path/to/phpunit",
```

With arguments.

```jsonl [with arguments]
"phpunit.executable": ["artisan", "test"]
```
:::

### phpunit.php_executable

- Type: `string`
- Default: Auto-discovery

The path to the PHP executable to use when running tests.

Environment variables and user home directory `~` placeholders are expanded.

:::details Example
Command Palette → Preferences: PHPUnit Settings
```jsonl
"phpunit.php_executable": "~/.phpenv/versions/8.2/bin/php"
```
:::

### phpunit.save_all_on_run

- Type: `boolean`
- Default: `true`

Automatically save all unsaved views before running tests.

### phpunit.on_post_save

- Type: `list`
- Default: `[]`

Auto commands to execute when views are saved.

::: info NOTE
Currently supports running the test file command.
:::

::: details Example
```jsonl
"phpunit.on_post_save": [
    "phpunit_test_file"
]
```
:::

### phpunit.debug

- Type: `boolean`
- Default: `false`

Enable debug logging when running tests.

### phpunit.prepend_cmd

- Type: `list`
- Default: `[]`

Prepends custom commands to the test runner.

### phpunit.strategy

- Type: `string`
- Default: `sublime`

The execution environment used for running tests.

### phpunit.font_size

- Type: `integer`
- Default: Editor default

Font size of PHPUnit's output.

### phpunit.composer

- Type: `boolean`
- Default: `true`

Discover and use Composer executables.

### phpunit.artisan

- Type: `boolean`
- Default: `false`

Discover and use Artisan to run tests.

### phpunit.paratest

- Type: `boolean`
- Default: `false`

Discover and use ParaTest to run tests.

### phpunit.pest

- Type: `boolean`
- Default: `false`

Discover and use Pest to run tests.

### phpunit.ssh

- Type: `boolean`
- Default: `false`

Enable SSH for remote testing.

::: details Example
Run tests via SSH using [Laravel Homestead](https://laravel.com/docs/homestead?ref=blog.gerardroche.com)

```jsonl
"phpunit.ssh": true,
"phpunit.ssh_options": {
    "-p": "22",
    "-tt": true
},
"phpunit.ssh_user": "vagrant",
"phpunit.ssh_host": "homestead.test",
"phpunit.ssh_paths": {
    "~/code/project1": "~/project1",
    "/home/code/project2": "/home/vagrant/project2",
}
```
:::

### phpunit.ssh_options

- Type: `dict`
- Default: `{}`

Options for running tests via SSH.

::: details Example
```jsonl
"phpunit.ssh_options": {
    "-p": "22",
    "-tt": true
}
```
:::

### phpunit.ssh_user

- Type: `string`
- Default: `null`

User for running tests via SSH.

::: details Example
```jsonl
"phpunit.ssh_user": "vagrant"
```
:::

### phpunit.ssh_host

- Type: `string`
- Default: `null`

Host for running tests via SSH.

::: details Example
```jsonl
"phpunit.ssh_host": "homestead.test"
```
:::

### phpunit.ssh_paths

- Type: `dict`
- Default: `{}`

Path mapping for SSH.

Environment variables and user home directory `~` placeholders are expanded.

::: details Example
```jsonl
"phpunit.ssh_paths": {
    "~/code/project1": "~/project1"
}
```
:::

### phpunit.docker

- Type: `boolean`
- Default: `false`

Enable Docker for testing.

::: details Example
Run tests via [Docker](https://www.docker.com?ref=blog.gerardroche.com)

```jsonl
"phpunit.docker": true,
"phpunit.docker_command": ["docker", "exec", "-it", "my-container"],
"phpunit.docker_paths": {
    "~/code/project1": "~/project1",
    "/home/code/project2": "/home/vagrant/project2",
}
```
:::

### phpunit.docker_command

- Type: `list`
- Default: `[]`

Command to use when running tests via Docker.

::: details Example
```jsonl
"phpunit.docker_command": [
    "docker",
    "exec",
    "-it",
    "my-container"
]
```
:::

### phpunit.docker_paths

- Type: `dict`
- Default: `{}`

Path mapping for Docker.

Environment variables and user home directory `~` placeholders are expanded.

:::details Example
```jsonl
"phpunit.docker_paths": {
    "~/code/project1": "~/project1"
}
```
:::

### phpunit.tmux_clear

- Type: `bool`
- Default: `true`

Clear the terminal screen before running tests.

### phpunit.tmux_clear_scrollback

- Type: `bool`
- Default: `true`

Clear the terminal's scrollback buffer or do not attempt to clear it using the extended "E3" capability.

### phpunit.tmux_target

- Type: `string`
- Default: `:.` (current pane)

Set the session, window, and pane, to be used to run tests. The format is `{session}:{window}.{pane}`, see [Tmux documentation](http://man.openbsd.org/OpenBSD-current/man1/tmux.1?ref=blog.gerardroche.com#COMMANDS) for details.

::: details Example current session, lowest-numbered window, top pane
```
:{start}.{top}
```
:::

::: details TIP Use --no-coverage by details
Use the `no-coverage` option by default, and then use the Command Palette Toggle no-coverage command, to toggle code coverage on and off when you need it. This can make your tests run faster by default.
```jsonl
"phpunit.strategy": "tmux",
"phpunit.tmux_target": ":{start}.{top}",
"phpunit.options": {
    "colors": true,
    "no-coverage": true
}
```
:::

## Auto run

You can automatically run a test file on save.

::: details Example
Command Palette → Preferences: PHPUnit Settings

```jsonl
"phpunit.on_post_save": [
    "phpunit_test_file"
]
```
:::

[Artisan]: https://laravel.com/docs/artisan?ref=blog.gerardroche.com
[Composer]: https://getcomposer.org?ref=blog.gerardroche.com
[Kitty]: https://github.com/kovidgoyal/kitty?ref=blog.gerardroche.com
[ParaTest]: https://github.com/paratestphp/paratest?ref=blog.gerardroche.com
[Pest]: https://pestphp.com?ref=blog.gerardroche.com
[PowerShell]: https://learn.microsoft.com/en-us/powershell/?ref=blog.gerardroche.com
[Tmux]: https://github.com/tmux/tmux/wiki?ref=blog.gerardroche.com
[cmd]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/cmd?ref=blog.gerardroche.com
[iTerm2]: https://iterm2.com?ref=blog.gerardroche.com
[xterm]: https://invisible-island.net/xterm/?ref=blog.gerardroche.com
