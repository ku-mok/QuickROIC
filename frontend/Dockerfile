FROM node:12-buster As Dev
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package.json yarn.lock /app/
RUN apt-get update && apt-get install -y git && yarn install
COPY . .
CMD yarn start
