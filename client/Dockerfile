FROM node:16.20.1-alpine3.17

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm rebuild node-sass

COPY . .

EXPOSE 3000


CMD [ "npm", "start" ]