---
title: Custom React Typescript Component
description: Create an <Element> that takes all the normal props of <element> and does extra stuff.
date: 2022-12-01T20:51:50Z
published: true
---

An example use case is a custom button element



> Create a ButtonProps type that infers the types from the props of the jsx button element.

```tsx
type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

/*======== NOTE =========*/
/*
    This also works:
    `type ButtonProps = React.ComponentProps<'button'>`

    but best practice is:
    ComponentPropsWithRef, if a ref is forwarded,
    or ComponentPropsWithoutRef when refs are not supported.
*/
```

```tsx
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export default Button;
```

> If you want to add custom `classNames`, you can destructure the className as well...

```tsx
const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
```