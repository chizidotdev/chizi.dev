# FROM node:23-alpine AS base
# WORKDIR /app
# RUN npm i -g pnpm
#
# COPY ./client/package.json ./client/pnpm-lock.yaml ./
# RUN pnpm install
#
# COPY ./client ./
# RUN pnpm run build

FROM golang:1.24.5-alpine AS builder
WORKDIR /app
COPY . .
# COPY --from=base /app/build/client ./client/build/client

ARG REDIS_URL

RUN go build -o ./app ./main.go


FROM alpine:3.20
WORKDIR /app
COPY --from=builder /app/app /app/app

EXPOSE 8090

CMD [ "./app", "serve", "--http=0.0.0.0:8090", "--dir=/pb_data" ]
