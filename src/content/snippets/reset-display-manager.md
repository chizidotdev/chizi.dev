---
title: Reset Display Manager
description: Reset/Restart the display manager on Linux
date: 2024-06-19T06:00:00Z
published: true
featured: true
---

I often find myself needing to restart the display manager on my Linux machine.
This usually happens when I run xrandr commands to change the display settings and the display manager doesn't pick up the changes.
My screen goes black and I can't see anything.

First, switch to a terminal tty (virtual TeleTYpe). Use this as a tty cheat sheet:

- `Ctrl + Alt + F1` --> Lockscreen
- `Ctrl + Alt + F2` --> Desktop
- `Ctrl + Alt + F3` --> Terminal

At least, that's how it is on my machine.

Then, restart the display manager using one of the following commands:

```sh
sudo service gdm restart
# or
sudo service gdm3 restart
# or
sudo service lightdm restart
```

This should restart the display manager and restore your desktop environment.
For me, it sends me back to the lockscreen and I can jump back into i3wm.
