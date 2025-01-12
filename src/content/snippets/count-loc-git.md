---
title: Count Lines of Code with git
description: Get the lines of code (LOC) count in a git repository using the cli
date: 2025-01-12T06:00:00Z
published: true
featured: true
---

`xargs` will let you cat all the files together before passing them to `wc`. The `wc` (word count) command displays the number of lines.

```sh
git ls-files | xargs cat | wc -l
```

Skipping the intermediate `cat` gives you more information and might be more useful sometimes:

```sh
git ls-files | xargs wc -l

```
