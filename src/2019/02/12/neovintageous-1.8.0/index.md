---
post: true
prev: false
next: false
editLink: false
sidebar: false
aside: false
tags: vim sublime-text neovintageous release
title: NeoVintageous 1.8.0
lastUpdated: false
---

# NeoVintageous 1.8.0

The main highlight of the 1.8.0 release is the change to how scrolling with `CTRL-D` and `CTRL-U` works. This has been a long standing issue and it's nice to finally deliver a [fix](https://github.com/NeoVintageous/NeoVintageous/commit/eb4608631bc0d19b6c784e476ffa19151e0f2e56?ref=blog.gerardroche.com).

command |   action
------- | --------
`ctrl-d` | scroll window downwards in the buffer
`ctrl-u` | scroll window upwards in the buffer

Note that the `ctrl` keys are ~~disabled by default (this will change in [v2.0.0](https://github.com/NeoVintageous/NeoVintageous/issues/404?ref=blog.gerardroche.com))~~ (now enabled by default) [^1], to enable the keys update your settings.

**Menu → Preferences → Settings**

```json
{
    "vintageous_use_ctrl_keys": true
}
```

## Further reading

* [NeoVintageous documentation](https://neovintageous.github.io/?ref=blog.gerardroche.com?ref=blog.gerardroche.com)
* [NeoVintageous 1.8.0 release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.8.0?ref=blog.gerardroche.com)

---

[^1]:
    [NeoVintageous Ctrl keys](/2022/09/22/neovintageous-ctrl-keys/)
