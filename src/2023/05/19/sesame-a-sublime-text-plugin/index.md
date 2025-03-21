---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: sublime-text
title: Sesame - A Sublime Text plugin
redirect_from:
    - /2023/05/19/neovintageous-open-sesame/
description: "Sesame is my favourite Sublime Text plugin. It's a quick way to open, add, switch, and remove projects and folders."
lastUpdated: false
---

# Sesame - A Sublime Text plugin

[Sesame](https://github.com/gerardroche/sublime-sesame?ref=blog.gerardroche.com) is my favourite Sublime Text plugin. It's a quick way to open, add, switch, and remove projects and folders.

The name "Sesame" is a play on the phrase "[Open Sesame](https://en.wikipedia.org/wiki/Open_sesame?ref=blog.gerardroche.com)". A magical phrase in the story of "[Ali Baba and the Forty Thieves](https://en.wikipedia.org/wiki/Ali_Baba_and_the_Forty_Thieves?ref=blog.gerardroche.com)" from Antoine Galland's version of [One Thousand and One Nights](https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights?ref=blog.gerardroche.com). It opens the mouth of a cave in which forty thieves have hidden a treasure.

## Installation

You can install Sesame via [Package Control](https://packagecontrol.io/packages/Sesame?ref=blog.gerardroche.com).

## Setup

Set the location of your projects and add your preferred key bindings.

Menu → Preferences → Settings

```js
"sesame.path": "~/projects",
```

Menu → Preferences → Key Bindings

```js
{ "keys": ["ctrl+alt+o"], "command": "sesame_open" },
{ "keys": ["ctrl+alt+a"], "command": "sesame_add" },
{ "keys": ["ctrl+alt+r"], "command": "sesame_remove" },
{ "keys": ["ctrl+alt+s"], "command": "sesame_switch" },
```

## Projects Depth

The default depth is 2, which means Sesame will look for projects two levels deep. For example, consider the following structure:

```bash
$ cd ~/projects && tree -L 2
.
├── laravel
│   ├── framework
│   ├── lumen
│   └── tinker
├── sebastianbergmann
│   └── phpunit
└── symfony
    └── symfony

8 directories, 0 files
```

With a projects depth set to 2 it yields 8 projects:

```
laravel/framework
laravel/lumen
laravel/tinker
sebastianbergmann/phpunit
symfony/symfony
```

With a projects depth set to 1 it yields 3 projects:

```
laravel
sebastianbergmann
symfony
```

Here is what Sesame looks like in Sublime Text:

![Open Sesame command](/assets/images/2023-05-19-open-sesame-command.webp)

## Projects and Folders

In Sesame, projects and folders mean the same thing. The only difference is that Sesame will use a Sublime Text [project file](https://www.sublimetext.com/docs/projects.html?ref=blog.gerardroche.com) to open the project/folder if it finds one at the base of the folder.

## Multiple Projects Paths

You can set multiple paths by setting a list:

```js
"sesame.path": ["~/projects", "~/work"]
```

If you need to set different depths for each path you use a dict:

```js
"sesame.path": [
    {
        "path": "~/projects",
        "depth": 2
    },
    {
        "path": "~/work",
        "depth": 1
    }
],
```

## Filters

By default, Sesame will include all projects. You can filter the list to show only version controlled projects or exclude version controlled projects.

```js
"sesame.vcs": null, // default
```

Will include versioned and non-versioned. This is the default.

```js
"sesame.vcs": true,
```

Will include versioned.

```js
"sesame.vcs": false,
```

Will exclude versioned.

## Wrapping up

I can't tell you how much I use this little plugin. Opening, adding, removing, switching... I do it countless times a day. I would be lost without it. Give it a go. It's magical.
