---
title: useDebounce hook
description: utiltity hook to add debounce behavior to an existing function
date: 2025-01-03T08:05:32Z
published: true
---

```typescript
import { useEffect, useRef } from "react";

type Timer = ReturnType<typeof setTimeout>;
type FnConstraint = (...args: any[]) => void;
type DebouncedFunction<T extends FnConstraint> = T & { cancel: () => void };

/**
 *
 * @param fn The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */
export function useDebounce<T extends FnConstraint>(fn: T, delay = 2000): DebouncedFunction<T> {
    const timer = useRef<Timer>(null);

    useEffect(() => {
        return () => {
            if (!timer.current) return;
            clearTimeout(timer.current);
        };
    }, []);

    const debouncedFunction = ((...args: Parameters<T>) => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            fn(...args);
        }, delay);
    }) as DebouncedFunction<T>;

    debouncedFunction.cancel = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = null;
    };

    return debouncedFunction;
}
```
