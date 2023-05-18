---
tags: sublime-text
title: Sesame - A Sublime Text plugin
---

![Ali Baba overhearing one of the thieves saying "Open Sesame"](/assets/2023-05-19-open-sesame.webp)

Of all [my Sublime Text plugins](https://packagecontrol.io/browse/authors/gerardroche), [Sesame](https://packagecontrol.io/packages/Sesame) is my favourite. But only a few people use it. At the time of writing it only has [500 downloads](https://packagecontrol.io/packages/Sesame).

"Sesame" is play on the phrase "[Open Sesame](https://en.wikipedia.org/wiki/Open_sesame)". A magical phrase in the story of "[Ali Baba and the Forty Thieves](https://en.wikipedia.org/wiki/Ali_Baba_and_the_Forty_Thieves)" from Antoine Galland's version of [One Thousand and One Nights](https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights). It opens the mouth of a cave in which forty thieves have hidden a treasure.

So what does Sesame do? Sesame is quick way to open, add, switch, and remove projects or folders.

## Installation

You can install Sesame via [Package Control](https://packagecontrol.io/packages/Sesame).

## Setup

Set the location of your projects and add your preferred key bindings.

**Menu &gt; Preferences &gt; Settings**

```js
"sesame.path": "~/projects",
```

**Menu &gt; Preferences &gt; Key Bindings**

```js
{ "keys": ["ctrl+alt+o"], "command": "sesame_open" },
{ "keys": ["ctrl+alt+a"], "command": "sesame_add" },
{ "keys": ["ctrl+alt+r"], "command": "sesame_remove" },
{ "keys": ["ctrl+alt+s"], "command": "sesame_switch" },
```

## Projects Depth

The default depth is 2 which means Sesame will look for projects two levels deep. For example, consider the following structure:

```terminal
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

With a projects depth is set to 2 it will yield 8 projects:

```
laravel/framework
laravel/lumen
laravel/tinker
sebastianbergmann/phpunit
symfony/symfony
```

With a projects depth of 1 it will yield 3 projects:

```
laravel
sebastianbergmann
symfony
```

Here is what Sesame will look like in Sublime Text:

![Open Sesame command](/assets/2023-05-19-open-sesame-command.webp)

## Projects and Folders

In Sesame, projects and folders are pretty much the same thing. The only difference is Sesame will use a Sublime Text [project](https://www.sublimetext.com/docs/projects.html) file to open the project if it finds one in the folder.

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

## Wrapping it up

I can't tell how much I use this little plugin. Opening, adding, removing, switching... I do it countless times a day. I would be lost without Sesame. Give it a go. It's magical.
