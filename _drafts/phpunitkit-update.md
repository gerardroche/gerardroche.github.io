---
tags: sublime-text phpunit
title: Introducing Exciting New Features in PHPUnitKit
---

[PHPUnitKit](https://github.com/gerardroche/sublime-phpunit) is a PHPUnit test runner designed for Sublime Text, seamlessly enabling you to execute tests within the Sublime Text environment at the speed of thought.

The most convenient method to install PHPUnitKit is via Package Control:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to open the Command Palette.
2. Type "Package Control: Install Package" and hit `Enter`.
3. In the input field, type "PHPUnitKit" and select it from the list of available packages.

For alternative installation methods, refer to the [readme](https://github.com/gerardroche/sublime-phpunit).

## Opening Settings Editor Side by Side

Effortlessly open the Settings editor in a side-by-side view by following these straightforward steps:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (macOS) to access the Command Palette.
2. Type "Preferences: PHPUnit Settings" and press `Enter`.

## Streamlined Testing from Side Bar Menu

Unveiling the sidebar menu feature for Sublime Text. Right-click on the side bar and select "PHPUnit: Test File" to effortlessly run tests. Even if the file isn't a designated test file, the feature intelligently executes tests for the current file, making testing seamless and efficient.

## Effortless Context Menu Test Execution

Elevate your workflow with context menu test execution. Right-click on your code, choose "PHPUnit: Test File," and instantly validate code segments. Integration simplifies testing without disrupting your focus. Verify specific function behaviour directly from the context menu.

## New: "Toggle Run Test On Save" Command

Boost your testing workflow with our latest feature. Easily control automatic test execution upon saving files. To access, follow these steps:

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac) to open the command palette.
2. Choose "PHPUnit: Toggle Run Test On Save" from the options.

## Introducing the "Kitty" Terminal Strategy

Explore a novel approach to executing tests with the "Kitty" terminal strategy in the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Seamlessly integrate it into your workflow with these steps:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Select "Preferences: PHPUnit Settings" from the options.
3. Add the following configuration to enable the "Kitty" strategy:
   ```json
   {
       "phpunit.strategy": "kitty"
   }
   ```

Effortlessly optimize your testing workflow by harnessing the power of the "Kitty" terminal strategy, enriching your testing experience within the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin.

## Introducing the "xterm" Strategy

Upgrade your testing process with the **xterm** strategy within the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Streamline your testing workflow with these steps:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Choose "Preferences: PHPUnit Settings" from the options.
3. Implement the **xterm** strategy by adding the following configuration:
   ```json
   {
       "phpunit.strategy": "xterm"
   }
   ```

Elevate your test execution experience by seamlessly connecting the plugin to the xterm terminal, boosting efficiency and productivity.

## Introducing the "powershell" Strategy

Enhance your testing environment with the **powershell** strategy in the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Elevate your testing process using these steps:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Choose "Preferences: PHPUnit Settings" from the options.
3. Activate the **powershell** strategy by adding the following configuration:
   ```json
   {
       "phpunit.strategy": "powershell"
   }
   ```

Optimize your test execution on Windows systems by seamlessly integrating PowerShell into your workflow, enhancing your testing efficiency.

## Introducing the "cmd" Strategy

Revamp your testing methodology with the **cmd** strategy offered by the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Follow these steps for a seamless integration:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Opt for "Preferences: PHPUnit Settings" from the options.
3. Enable the **cmd** strategy by adding the following configuration:
   ```json
   {
       "phpunit.strategy": "cmd"
   }
   ```

Enhance your testing on Windows systems by leveraging the cmd.exe command-line, providing a straightforward and efficient testing environment.

## Introducing Pest Support

Unlock the potential of Pest testing seamlessly within the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Enhance your testing capabilities with ease:

1. Open the Command Palette by pressing `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Select "Preferences: PHPUnit Settings" from the options.
3. Activate Pest support with this configuration:
   ```json
   {
       "phpunit.pest": true
   }
   ```

Embrace Pest's power directly within the plugin, expanding your testing horizons. This integration enables smoother Pest execution, enriching your testing process and offering an intuitive approach to test management. Elevate your testing potential today!

## Introducing Laravel Artisan Support

Embrace comprehensive test execution with effortless integration of Artisan's `artisan test` command within the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Elevate your testing toolkit with these steps:

1. Open the Command Palette using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Opt for "Preferences: PHPUnit Settings."
3. Enable Artisan support with this configuration:
   ```json
   {
       "phpunit.artisan": true
   }
   ```

Effortlessly streamline your testing workflow by incorporating the `artisan test` command. This integration enhances your testing toolkit, ensuring thorough test execution and optimal coverage. Elevate your testing experience within the plugin and maximize your testing capabilities today!

## Introducing ParaTest Integration

Expand your testing horizons with the integration of [ParaTest](https://github.com/paratestphp/paratest) in the [PHPUnit Kit](https://github.com/gerardroche/sublime-phpunit) plugin. Infuse versatility into your testing process with these steps:

1. Access the Command Palette by using `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac).
2. Opt for "Preferences: PHPUnit Settings."
3. Enable ParaTest integration with this configuration:
   ```json
   {
       "phpunit.paratest": true
   }
   ```

Elevate your testing capabilities by incorporating ParaTest, introducing diverse testing strategies for optimal test execution. This integration enriches your testing experience, offering flexibility within the plugin and boosting your testing prowess. Elevate your testing process today!

## Dockerized Testing

Revolutionize your testing approach with an innovative Docker integration, offering a dynamic and isolated testing environment for enhanced accuracy and reliability.

**Docker Settings**

| Setting               | Type          | Default   | Description
| :-------------------- | :------------ | :-------- | :----------
| `phpunit.docker`         | `boolean`  | `false`   | Enable Docker.
| `phpunit.docker_command` | `list`     | `[]`      | Command to use when running tests via Docker. Example: `["docker", "exec", "-it", "my-container"]`
| `phpunit.docker_paths`   | `dict`     | `{}`      | Path map for running tests via Docker. Keys: local paths, Values: replacement remote paths. Environment variables and user home directory ~ placeholder are expanded. Example: `{"~/code/project1": "~/project1"}`

**Example:** Run tests using [Docker](https://www.docker.com)

```json
{
    "phpunit.docker": true,
    "phpunit.docker_command": ["docker", "exec", "-it", "my-container"],
    "phpunit.docker_paths": {
        "~/code/project1": "~/project1",
        "/home/code/project2": "/home/vagrant/project2",
    }
}
```

Experience a dynamic testing environment with Docker, ensuring precision and dependability in your testing process.

## Remote Server SSH Testing

Expand your testing horizons by enabling test execution on remote servers via SSH. This versatile feature enhances collaboration and supports seamless remote development.

**SSH Settings**

| Setting               | Type          | Default   | Description
| :-------------------- | :------------ | :-------- | :----------
| `phpunit.ssh`         | `boolean`     | `false`   | Enable SSH.
| `phpunit.ssh_options` | `dict`        | `{}`      | Options for running tests via SSH. <br>Example: `{"-p": "22", "-tt": true}`.
| `phpunit.ssh_user`    | `string`      | `null`    | User for running tests via SSH. <br>Example: vagrant
| `phpunit.ssh_host`    | `string`      | `null`    | Host for running tests via SSH. <br>Example: homestead.test
| `phpunit.ssh_paths`   | `dict`        | `{}`      | Path map for running tests via SSH. Keys: local paths, Values: replacement remote paths. Environment variables and user home directory ~ placeholder are expanded. Example: `{"~/code/project1": "~/project1"}`

**Example:** Run tests via SSH using [Laravel Homestead](https://laravel.com/docs/homestead)

```json
{
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
}
```

Unlock the potential of remote server testing via SSH, enhancing your testing workflow with flexibility and collaborative capabilities.
