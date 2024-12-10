---
title: SvelteKit Static Config
description: Config files for deploying SvelteKit apps with the adapter-static.
date: 2024-12-05T00:00:00.000Z
published: true
---

Although this should work with any hosting provider, I use [Railway](https://railway.app) to deploy my applications, so this setup directly mirrors a configuration I use with Railway.

I prefer using [Caddy](https://caddyserver.com/) over nginx because it's <s>got better performance</s> the only server I know how to use.

```Dockerfile
# Caddyfile

:{$PORT}

# serve from the 'usr/share/caddy' folder (matches the docker build output)
root * /usr/share/caddy

# serve the files in the output folder
file_server

# if path doesn't exist, redirect it to 'index.html' for client side routing
try_files {path} /index.html
```

<br/>

[Docker](https://www.docker.com) makes it easy to build and deploy to any platform.

```Dockerfile
# Dockerfile

FROM node:21-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

# Optionally, pass environment variables to the build
# ARG <env-var>

COPY . .
RUN pnpm run build
RUN pnpm prune --production

# Production Stage
FROM caddy:alpine AS runner
WORKDIR /app

COPY --from=builder /app/build /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile
```

<br/>

Here's a basic implementation of the `adapter-static` from sveltekit. Refer to [SvelteKit's documentation](https://kit.svelte.dev/docs/adapters#static) for more information.

```js
// svelte.config.js

import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ...

  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
  },
  },
};
```
