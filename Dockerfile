FROM node:21-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

COPY . .
RUN pnpm run build
RUN pnpm prune --production

# # Adapter static with Caddy
# FROM caddy:alpine AS runner
# WORKDIR /app

# COPY --from=builder /app/build /usr/share/caddy
# COPY ./Caddyfile /etc/caddy/Caddyfile

# Adapter node
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "build" ]
