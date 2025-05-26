FROM node:lts AS base
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

FROM base AS prod-deps
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

FROM base AS build-deps
RUN npm i -g pnpm && pnpm i --frozen-lockfile;

FROM build-deps AS build
COPY . .

ARG PUBLIC_SANITY_PROJECT_ID
ARG PUBLIC_SANITY_DATASET
ENV HOST=0.0.0.0
ENV PORT=4321

RUN npm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
