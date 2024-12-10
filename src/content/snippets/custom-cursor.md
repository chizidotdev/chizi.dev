---
title: Custom Cursor
description: React custom cursor component
date: 2022-09-23T02:51:46Z
published: true
---

```tsx
import React, { useEffect, useRef } from 'react';
import parser from 'ua-parser-js';

const CustomCursor = () => {
  const mainCursor = useRef<HTMLDivElement | null>(null);
  const secondaryCursor = useRef<HTMLDivElement | null>(null);

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    if (parser().device.type === 'mobile') {
      document.getElementById('custom-cursor')!.style.display = 'none';
    }

    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;
      if (secondaryCursor.current && mainCursor.current) {
        positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

        mainCursor.current.style.transform = `translate3d(${
          mouseX - mainCursor.current.clientWidth / 2
        }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    });

    return () => {};
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
        positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current)
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };

    followMouse();
  }, []);

  return (
    <div id='custom-cursor'>
      <div className='main-cursor' ref={mainCursor} />
      <div className='secondary-cursor' ref={secondaryCursor} />
    </div>
  );
};

export default CustomCursor;

```

```scss
html,
body {
  *,
  *::after,
  *::before {
    cursor: none;
  }
}

.secondary-cursor {
  z-index: 1000;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  border: 1px solid black;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
}

.secondary-cursor {
  mix-blend-mode: difference;
  z-index: 1000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  // background-color: white;
  border: 1px solid $clr-sec;
  pointer-events: none;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
  transition: width 0.3s ease-in-out;
}

```