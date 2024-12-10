---
title: useBlur hook
description: Detect a click event outside a DOM element in react.
date: 2022-10-11T12:33:25Z
published: true
---

```ts
const useBlur = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleBlur = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleBlur, true);

    return () => {
      document.removeEventListener("click", handleBlur, true);
    };
  }, [callback]);

  return ref;
};
```
