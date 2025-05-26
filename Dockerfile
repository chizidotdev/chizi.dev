FROM node:21-alpine AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

ARG PUBLIC_SANITY_PROJECT_ID
ARG PUBLIC_SANITY_DATASET

COPY . .
RUN pnpm run build

# Adapter node
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist dist/
COPY --from=builder /app/node_modules node_modules/
COPY package.json .
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "dist/server/entry.mjs" ]

