---
title: Next Page Transition
description: Loader component for page transitions in NextJS
date: 2022-09-26T00:44:23Z
published: true
---

```tsx
import { useEffect, useState } from 'react';
import { InfinitySpin, ColorRing } from 'react-loader-spinner';

function Loader() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    router.events.on('routeChangeStart', () => setLoading(true));
    router.events.on('routeChangeComplete', () => setLoading(false));
    router.events.on('routeChangeError', () => setLoading(false));
  }, [loading, router.asPath, router.events]);

  return (
    <>
      {loading && (
        <div className='spinner-wrapper'>
          {/* <InfinitySpin width='200' color='#24311f' /> */}
          <ColorRing
            visible={true}
            height='80'
            width='80'
            ariaLabel='blocks-loading'
            wrapperStyle={{}}
            wrapperClass='blocks-wrapper'
            colors={['#fff', '#0f172a', '#000', '#9b9b9b', '#e5e7eb']}
          />
        </div>
      )}
    </>
  );
}
```



CSS for overlay...

```css
.spinner-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  z-index: 9999;
}
```