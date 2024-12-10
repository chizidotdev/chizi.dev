---
title: Toggle Nav on scroll
description: Hide Nav on scroll down and show on scroll up
date: 2022-10-01T16:53:24Z
published: true
---

Declare a state variable to store the last scroll position of the page.

```jsx
const [lastScrollY, setLastScrollY] = useState(0);
```

Then declare a reference to the nav header element with `useRef`.

```jsx
const navRef = useRef<HTMLElement | null>(null);

return (
  <header ref={navRef} className='nav'>
    ...
  </header>
)
```

The `controlNavbar` function contains the logic to toggle the `nav--hidden` class on the navbar element. Then wire it up on component mount using useEffect.

```jsx
const controlNavbar = useCallback(() => {
  const navbar = navRef.current;

  if (typeof window !== 'undefined') {
    if (window.scrollY > lastScrollY) {
      // on scroll down, hide the navbar
      navbar?.classList.add('nav--hidden');
    } else {
      // on scroll up, show the navbar
      navbar?.classList.remove('nav--hidden');
    }

    // persist current page location to use in the next move
    setLastScrollY(window.scrollY);
  }
}, [lastScrollY]);

useEffect(() => {
  if (typeof window === 'undefined') {
    return;
  }

  window.addEventListener('scroll', controlNavbar);

  return () => {
    window.removeEventListener('scroll', controlNavbar);
  };
}, [controlNavbar]);
  
```



SCSS for the `.nav-hidden` class

```scss
.nav {
  ...
  transition: transform 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.nav--hidden {
    transform: translateY(-100%);
    transition-delay: 0.5s;
  }
}
```