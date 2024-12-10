---
title: bind. address already in use
description: Shorten the time it takes to kill a background process.
date: 2024-11-30T06:00:00Z
published: true
featured: true
---

If you've been developing with Postgres locally, you've probably run into this annoying error:

```sh
failed to bind port 0.0.0.0:5432/tcp: bind: address already in use
```

How I've been solving this problem in the past is by using `lsof` to find the PID of the process that's using the port.
Then, I can kill the process using the PID. You might need to run this command as root.

```sh
lsof -i tcp:5432
```

This will show you the PID of the process that's using the port.

```sh
kill -9 <PID>
```

Now, you can run your Postgres server again.

<br/>
It works, but I recently learned you could shorten it to one command:

```sh
lsof -ti :5432 | xargs kill -9
```

### What's happening here?

- You don't need to specify the tcp protocol, because it's the default.
- The additional `-t` option makes `lsof` return just the PID.
- The `| xargs` part uses the pipe operator to pass the output of `lsof` to `xargs`.
- `xargs kill -9` reads the PIDs and builds a single command to terminate the processes.

PS. This’ll nuke any process on whatever port you provide without asking questions, so double-check what’s running before you pull the trigger.
