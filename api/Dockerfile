FROM node:14

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE $PORT

CMD yarn start
