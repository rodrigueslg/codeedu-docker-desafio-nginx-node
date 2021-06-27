FROM node:lts-alpine3.13

WORKDIR /usr/src/app

RUN apk add --no-cache openssl

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]