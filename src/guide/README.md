---
cname: guide
title: Guide
---

# Guide

Adding new lesson material

Edit the file `tools/data/lessonDataInput.yaml`

A minimal lesson looks like this:

```yaml
- topic: Name
  cname: name
  pairs:
    - q: Who gave you your name?
      a: 'My parents gave me my name, my father to be exact.'
    - q: Does your name have any particular (or special) meaning?
      a: 'Zhi means knowledge, and Lei means accumulation. So I guess my parents wanted to tell me that being knowledgeable depends on accumulation. You see they put a lot of pressure on my shoulders with this name.'
    - q: Do you like your name?
      a: 'I quite like my name, and I won''t change it for the world, because it is unique. I don''t think that anyone else in China has the same name. It''s part of my identity, and it is meaningful to me.'
    - q: 'In your country, do people feel that their name is very important?'
      a: People in my country pay great attention to their names because they believe that suitable names will bring them good fortune. Sometimes they even change their names for their business and family purpose.
    - q: Would you like to change your name?
      a: 'In China, I believe that fathers are in the position of naming their children. Sometimes they will look through some Chinese classical literatures to seek the meaningful words for their children.'
```

After that's prepared

## Process the lessonData

```bash
cd tools
bin/cleanYaml.js
```

This will extract long words from the sentences and use them as vocab, eg adding a block like this
Creates file `tools/data/lessonOutput.yaml`

```yaml
  words:
    - identity
    - Sometimes
    - shoulders
    - pressure
    - particular
    - literatures
    - classical
    - knowledge
  vocab:
    - en: identity
      stem: ident
      pos: 'n'
      syns:
        - personal identity
        - individuality
      def: the distinct personality of an individual regarded as a persisting entity
    # etc
```

### render Pages
Will output markdown pages based on `lessonDataOutput.yaml` to the `src/.vuepress/speaking/..` section.

### Run the local vuepress server
From top level run `yarn docs:dev`

Access [http://localhost:8080/course/speaking/newspapers.html#questions](http://localhost:8080/course/speaking/newspapers.html#questions) on your local machine.

### screenshot the pages

```
cd tools
bin/shotter.js
```

renders multiple screenshots to `src/.vuepress/public/assets/$page/...`

### Deploy

```sh
bin/deploy-github.sh
```

Puts the images eg here
[https://tutorweb.rikai-bots.com/course/assets/shots/holidays/summary.jpg](https://tutorweb.rikai-bots.com/course/assets/shots/holidays/summary.jpg)

### More

Check out [parts](parts.html) page for design parts