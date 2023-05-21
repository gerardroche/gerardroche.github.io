---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.8.0
---

The main highlight of the 1.8.0 release is the change to how scrolling with `CTRL-D` and `CTRL-U` works. This has been a long standing issue and it's nice to finally deliver a [fix](https://github.com/NeoVintageous/NeoVintageous/commit/eb4608631bc0d19b6c784e476ffa19151e0f2e56).

command |   action
------- | --------
`ctrl-d` | scroll window downwards in the buffer
`ctrl-u` | scroll window upwards in the buffer

Note that the `ctrl` keys are ~~disabled by default (this will change in [v2.0.0](https://github.com/NeoVintageous/NeoVintageous/issues/404))~~ (now enabled by default) [^1], to enable the keys update your settings.

**Menu → Preferences → Settings**

```json
{
    "vintageous_use_ctrl_keys": true
}
```

## Further reading

* `:help nv`
* `:help ctrl-d`
* `:help ctrl-u`
* `:help nv-options`
* [Release notes](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.8.0)

---

[^1]:
    [NeoVintageous Ctrl keys](/2022/09/22/neovintageous-ctrl-keys/)
