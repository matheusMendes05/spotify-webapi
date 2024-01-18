FROM node:14.20.1 as build

WORKDIR /usr

COPY package.json tsconfig.json ./

COPY src ./src


RUN npm install\
  && npm install typescript -g

RUN tsc

FROM node:alpine as main

WORKDIR /app

COPY package.json .
COPY --from=build /usr/dist dist

RUN npm install --production



CMD ["node","dist/server.js"]
