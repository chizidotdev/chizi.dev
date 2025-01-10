---
title: Cron Expressions
description: Cron expressions crash course, cos no way you memorising this.
date: 2025-01-10T14:00:32Z
published: true
---

Cron expressions allow you to schedule tasks at specific intervals. Here's a quick reference cos you're not supposed to remember all of it.

```lua
* * * * *
| | | | |
| | | | +---- Day of the week (0 - 7, where both 0 and 7 represent Sunday)
| | | +------ Month (1 - 12)
| | +-------- Day of the month (1 - 31)
| +---------- Hour (0 - 23)
+------------ Minute (0 - 59)
```

## Common Patterns

- `*`: Every value
- `*/X`: Every X units (e.g., `*/5` = every 5 minutes)
- `X-Y`: Range (e.g., `9-17` = 9 AM to 5 PM)
- `X,Y`: Specific values (e.g., `1,15,30` = 1st, 15th, 30th)
- `L`: Last (e.g., `L` = last day of the month)

## Examples

| Expression    | Meaning                  |
| ------------- | ------------------------ |
| `* * * * *`   | Every minute             |
| `*/5 * * * *` | Every 5 minutes          |
| `0 12 * * *`  | Every day at noon        |
| `0 6 1 * *`   | 1st of the month at 6 AM |
| `0 0 * * 1`   | Every Monday at midnight |
