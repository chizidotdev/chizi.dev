---
title: Git worktrees
description: Workflow for using git worktrees
date: 2023-12-05T16:34:08Z
published: true
featured: true
---

In order to get the worktrees feature on git, the repo needs to be a bare repository.

```sh
# creating a new repository
git init bare .

# cloning an existing repository
git clone --bare <remote:url>
```

Worktree commands

```sh
# Add a new worktree for an existing branch
git worktree add path/to/dir <existing-branch-name>

# Create worktree for a new branch
# from an existing branch
git worktree add -b <new-branch-name> path/to/dir <existing-branch-name>

# Remove worktree
git worktree remove path/to/dir

# List all worktrees
git worktree list
```

<br/>
I can never remember this shit…🥲
