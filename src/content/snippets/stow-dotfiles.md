---
title: Stow .dotfiles
description: Backup dotfiles using gnu stow
date: 2024-01-11T15:23:31Z
published: true
featured: true
---

Ensure stow is installed. Using apt, it can be installed with...

```sh
sudo apt install -y stow
```

### Basic Workflow

```sh
# In the root dir of the .dotfiles repo
# to see changes before applying the symlinks, run
stow --adopt -nvt ~ *
```

Remove the -n flag to apply the symlinks
```sh
stow --adopt -vt ~ *

# To remove the symlinks, add the -D flag
stow --adopt -vDt ~ *
```

Optionally, you can increase verbose level to see more info about the process.

```sh
stow --adopt --verbose=2 -t ~ *
```
