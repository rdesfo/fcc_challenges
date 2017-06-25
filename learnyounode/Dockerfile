
FROM node:alpine
LABEL maintainer "Ryan Desfosses <ryan@desfo.org>"

RUN apk --no-cache add git \
    && npm install -g doctest nodemon learnyounode

WORKDIR /home/node/app
