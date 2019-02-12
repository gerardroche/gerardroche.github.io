---
tags: neovintageous sublime-text vim
title: NeoVintageous 1.8.0
---

The main highlight of the [1.8.0](https://github.com/NeoVintageous/NeoVintageous/releases/tag/1.8.0) release is the change to how scrolling with `CTRL-D` and `CTRL-U` works. This has been a long standing issue and it's nice to finally deliver a [fix](https://github.com/NeoVintageous/NeoVintageous/commit/eb4608631bc0d19b6c784e476ffa19151e0f2e56).

command |   action
------- | --------
ctrl-d | scroll window downwards in the buffer
ctrl-u | scroll window upwards in the buffer

Note that the ctrl keys are disabled by default (this will change in [v2.0.0](https://github.com/NeoVintageous/NeoVintageous/issues/404)), to enable the keys update your settings:

**Menu > Preferences > Settings**:

```json
{
    "vintageous_use_ctrl_keys": true
}
```

## Further reading

* `:h ctrl-d`
* `:h ctrl-u`
* `:h nv-options`
