---
title: useDebounce hook
description: utiltity hook to add debounce behavior to an existing function
date: 2023-08-29T08:05:32Z
published: true
---

```typescript
import { useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type FnConstraint = (...args: any[]) => void;

/**
 *
 * @param fn The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */
export function useDebounce<T extends FnConstraint>(fn: T, delay = 1000) {
    const timer = useRef<Timer>();

    useEffect(() => {
        return () => {
            if (!timer.current) return;
            clearTimeout(timer.current);
        };
    }, []);

    const debouncedFunction = ((...args) => {
        const newTimer = setTimeout(() => {
            fn(...args);
        }, delay);

        clearTimeout(timer.current);
        timer.current = newTimer;
    }) as T;

    return debouncedFunction;
}

```