---
tags: sublime-text phpunit php
title: Running PHPUnit tests within Sublime Text
---

!["Don't Panic" printed in large friendly letters](/assets/2023-05-05-dont-panic.webp)

Being able to run your PHPUnit tests from within Sublime Text is a productivity win. This is especially true if you like Test Driven Development. PHPUnit Kit has all the features you will ever need to run PHPUnit tests from within Sublime Text.

## What can PHPUnit Kit do?

* Run test case
* Run test suite
* Run test method
* Run last test
* Switch between test and file under test
* Jump to next and previous failure

I'll show you how to install, setup, and run the test commands.

## Installation

Install [PHPUnitKit](https://packagecontrol.io/packages/PHPUnitKit) via Package Control.

## Setup

Add your preferred key bindings. Menu → Preferences → Key Bindings:

```js
{"keys":["ctrl+shift+a"],"command":"phpunit_test_suite"},
{"keys":["ctrl+shift+c"],"command":"phpunit_test_cancel"},
{"keys":["ctrl+shift+f"],"command":"phpunit_test_file"},
{"keys":["ctrl+shift+l"],"command":"phpunit_test_last"},
{"keys":["ctrl+shift+n"],"command":"phpunit_test_nearest"},
{"keys":["ctrl+shift+r"],"command":"phpunit_test_results"},
{"keys":["ctrl+shift+s"],"command":"phpunit_test_switch"},
{"keys":["ctrl+shift+v"],"command":"phpunit_test_visit"},
```

## Running tests

In most cases PHPUnit Kit will work out-of-the-box. For example, PHPUnit will be auto-discovered if you are using Composer. If you can run tests via the command-line the tests will run in Sublime Text.

There are four test commands. You can run them via the Command Palette or your preferred key bindings.

Command                 | Description
:---------------------- | :----------
**PHPUnit:&nbsp;Test&nbsp;Nearest**   | In a test file runs the test nearest to the cursor, otherwise runs the test for the current file.
**PHPUnit:&nbsp;Test&nbsp;File**      | In a test file runs all tests in the current file, otherwise runs test for the current file.
**PHPUnit:&nbsp;Test&nbsp;Suite**     | Runs the whole test suite.
**PHPUnit:&nbsp;Test&nbsp;Last**      | Runs the last test.

Go ahead and open a PHP file and run the **Test Suite** command. This will run the entire test suite and output the results in a Sublime Text panel.

![Test Suite](/assets/2023-05-05-test-suite.webp)

You can run the entire test suite from any PHP file, but what about running a single test case? PHPUnitKit has you covered. Go ahead and open a test case and run **Test File**. This will a single test case:

![Test File](/assets/2023-05-05-test-file.webp)

You can actually run the test case from the class under test, you don't even need the test case open. Go ahead and switch to the Class Under Test: **Test Switch**. Now run **Test File** again.

![Test File](/assets/2023-05-05-test-file-again.webp)

Neat isn't it.

How about running a single test method? Open a test case. Put your cursor on a test method and run **Test Nearest**. The cursor only needs to be *near* the test method and you can use a multiple-cursor.

![Test Nearest](/assets/2023-05-05-test-nearest.webp)

## Jumping to failures

When a test fails, PHPUnit tries its best to provide as much context to help identify the problem. You can jump forward and backward through failure stack traces with <kbd>F4</kbd> and <kbd>SHIFT+F4</kbd>.

![Test Failures](/assets/2023-05-05-test-failures.webp)

## Support for ParaTest

> The objective of ParaTest is to support parallel testing in PHPUnit.
> &mdash; [ParaTest](https://github.com/paratestphp/paratest)

To enable support for PHPUnit parallel tests using ParaTest, open your Settings and set `phpunit.paratest` to `true`:

Menu → Preferences → Settings

```js
    "phpunit.paratest": true,
```

This tells PHPUnit Kit to run PHPunit parallel tests using the ParaTest test runner, but only if it exists, for example at `vendor/bin/paratest` i.e. has been installed via Composer.

This means you can enable it and when you're inside a project that uses ParaTest, PHPUnit Kit will use it to run your tests, otherwise it will fallback to an alternate test runner or the default test runner.

## Useful default options

Running your tests with Code Coverage enabled can be slow which is why I always disable it by default in Sublime Text and use the "no-coverage" toggle command to turn it on when I need it. This helps keep my tests speedy. Open your Settings and add:

```js
    "phpunit.options": {
        "no-coverage": true
    },
```

Toggle it with the **Toggle Option --no-coverage** command. Now you can run your tests at high speed and generate coverage when you need it.

## Wrapping up

PHPUnit Kit is a great way to streamline your sublime test game. I hope this short introduction has convinced you to give it a go.
