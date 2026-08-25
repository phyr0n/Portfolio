FROM node:20-alpine AS build

LABEL name="Portfolio"
LABEL maintainer="Adam Tait me@adamtait.net"

WORKDIR /app
# Copy package.json into root of container.
COPY package.json ./
# Make sure we don't install any additional dependencies and build.
RUN yarn install --frozen-lockfile
# Copy all files from /app into container.
COPY . .
RUN yarn build

FROM nginx:alpine
# Serve the built website (underneath /dist) into the preconfigured location (/usr/share/nginx/html).
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80