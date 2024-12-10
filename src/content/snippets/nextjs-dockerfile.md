---
title: Next.js Dockerfile
description: Multistage Dockerfile for smaller image sizes in Next.js apps.
date: 2024-04-11T00:00:00.000Z
published: true
---

First, change the output method in the `next.config.js` file to use the `standalone` mode. This will reduce the size of the image by removing unnecessary files/dependencies.

```diff
const nextConfig = {
+  output: "standalone",
  ...
};
```

Next, create a custom `Dockerfile` to build the image. Go over the steps to make sure it matches your use case.

```Dockerfile
FROM node:21-alpine AS builder
WORKDIR /app

# Copy only the files needed to install dependencies
COPY package.json pnpm-lock.yaml* ./

# Install dependencies with the preferred package manager
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

# Copy the rest of the files
COPY . .

# Consume ENV variables and build the project
ARG NEXT_PUBLIC_API_URL

RUN pnpm run build



FROM node:21-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Copy public assets
COPY --from=builder /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE $PORT

CMD ["node", "server.js"]
```
