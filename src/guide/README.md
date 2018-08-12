---
cname: guide
title: Guide
vocab:
  - one / 一
  - two / 二
  - three / 三
---

# Guide

How to add material

## Building

edit node/tools.js and pick the method:

```
// Tools.parseYaml()
Tools.renderPages()
```

### parseYaml
Will take `tools/lessonDataInput.yaml` and make sure all answers have some '...'
and output to `lessonDataOutput.yaml`

### renderPages
Will output markdown pages based on `tools/lessonDataOutput.yaml`

Then run that from inside the tools dir:

```
cd tools
node tools.js
```


## More

Check out [parts](parts.html) page for design parts