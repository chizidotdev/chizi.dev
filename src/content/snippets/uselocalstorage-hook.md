---
title: useLocalStorage hook
description: Manage localStorage data realtime in React.
date: 2024-04-24T20:03:25Z
published: true
featured: true
---

Hook to use local storage as a realtime data store in React. Utilizes the `storage` event to listen for changes in local storage and update the react state accordingly.

```tsx
import { Dispatch, SetStateAction, useState } from "react";

/**
 * synchronize reactive state with local storage listener.
 * @template T The type of the state value.
 * @param {string} key The key under which the state will be stored in local storage.
 * @param {T} initialValue The initial value of the state.
 * @returns {[T, Dispatch<SetStateAction<T>>]} An array containing the current state value and a function to update that value.
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Initialize the state
    try {
      const value = window.localStorage.getItem(key);
      // Check if the local storage already has any values,
      // otherwise initialize it with the passed initialValue
      const valueToStore = value ? JSON.parse(value) : initialValue;
      setState(valueToStore);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("storage", () => {
      try {
        const value = window.localStorage.getItem(key);
        // Check if the local storage already has any values,
        // otherwise initialize it with the passed initialValue
        const valueToStore = value ? JSON.parse(value) : initialValue;
        setState(valueToStore);
      } catch (error) {
        console.error(error);
      }
    });
  }, []);

  /**
   * Function to set a new value for the state, updating both the state and local storage.
   * @param {T | SetStateAction<T>} value The new value for the state, or a function that returns the new value.
   */
  const setValue = (value: T | SetStateAction<T>) => {
    try {
      // If the passed value is a callback function,
      //  then call it with the existing state.
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      window.dispatchEvent(new Event("storage"));
      setState(value);
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setValue];
}
```

Some advanced caching utilities for a cleaner cache interface.

```tsx
const FILTER_KEY = "__FILTER_CACHE";
function getStore() {
  const filters = window.localStorage.getItem(FILTER_KEY);
  if (!filters) return null;
  return JSON.parse(filters);
}
function getItem(key: string) {
  const s = getStore();
  return s?.[key];
}
function setItem<T>(key: string, value: T) {
  const s = getStore() ?? {};
  const filters = { ...s, [key]: value };
  window.localStorage.setItem(FILTER_KEY, JSON.stringify(filters));
}
```
