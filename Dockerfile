FROM node:21-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

COPY . .
RUN pnpm run build
RUN pnpm prune --production

# Production Stage
FROM caddy:alpine AS runner
WORKDIR /app

COPY --from=builder /app/build /usr/share/caddy
COPY ./Caddyfile /etc/caddy/Caddyfile
