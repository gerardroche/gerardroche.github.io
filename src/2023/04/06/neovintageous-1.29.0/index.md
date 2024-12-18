---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.29.0
lastUpdated: false
---

# NeoVintageous 1.29.0

NeoVintageous 1.29.0 has been released.  The highlights are file type specific mappings, other minor enhancements, fixes, and performance improvements.

## FileType mappings

File type specific mappings are now supported. This is not a standard Vim feature but is a much requested feature.

The following will only activate for `*.go` files:

    nnoremap FileType go gd :LspSymbolDefinition<CR>

The file type is based on the file extension and not the syntax.

Multiple file types can be specified as a comma-delimited string:

    nnoremap FileType html,js,go gd :LspSymbolDefinition<CR>

A future improvement may be to add a syntax argument that would bind to a specific syntax instead of file type.

## Asynchronous file saving

Asynchronous file saving has been disabled by default. This was due to a regression. The boolean setting `vintageous_save_async` has been added if you wish to re-enable it.

## Notable mentions

* The commands `C`, `D`, and `S` are now countable.
* The `<k0>` key is now aliased to `0`.
* The Abolish plugin `crp` PascalCase coercion is now aliased to `crm`.

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com)
* [NeoVintageous 1.29.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.29.0?ref=blog.gerardroche.com)
