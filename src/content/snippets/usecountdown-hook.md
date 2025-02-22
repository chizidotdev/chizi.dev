---
title: useCountdown hook
description: Manage countdown state with configurable start/end times.
date: 2025-02-22T10:03:25Z
published: true
featured: true
---

A React hook that creates a customizable countdown timer which counts down from an initial value to a target value at a specified interval, providing the current count and a reset function.

```ts
import { useEffect, useRef, useState } from "react";

interface CountdownOptions {
  initialSeconds?: number;
  interval?: number;

  /** @throws if targetSeconds >= initialSeconds */
  targetSeconds?: number;
}

/**
 * Custom hook for creating a countdown timer.
 *
 * @param initialSeconds - The number of seconds to count down from (defaults to 60)
 * @param interval - The interval in milliseconds between each countdown tick (defaults to 100ms)
 * @param targetSeconds - The number of seconds to count down to (defaults to 0)
 *
 * @returns An object containing:
 *  - count: The current count in seconds (as a number)
 *  - reset: A function to reset the countdown to the initial value
 */
export function useCountdown({
  initialSeconds = 60,
  interval = 100,
  targetSeconds = 0,
}: CountdownOptions = {}) {
  const intervalRef = useRef<NodeJS.Timeout>(undefined);

  const MS = 1000;
  const initialCount = initialSeconds * MS;
  const target = targetSeconds * MS;

  const [count, setCount] = useState(initialCount);

  const formattedCount = (count / MS).toFixed();

  useEffect(() => {
    intervalRef.current = createTimeout();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [intervalRef.current]);

  function createTimeout() {
    return setInterval(() => {
      setCount((prev) => {
        if (prev <= target) {
          clearInterval(intervalRef.current);
          return prev;
        }

        return prev - 100;
      });
    }, interval);
  }

  function reset() {
    setCount(initialCount);
    intervalRef.current = createTimeout();
  }

  return { count: Number(formattedCount), reset };
}
```

Basic usage with default values (60 seconds countdown)

```ts
const { count, reset } = useCountdown();
```

Custom configuration example

```ts
const { count, reset } = useCountdown({
  initialSeconds: 30, // Start from 30 seconds
  interval: 500, // Update every 500ms
  targetSeconds: 5, // Stop at 5 seconds
});
```
