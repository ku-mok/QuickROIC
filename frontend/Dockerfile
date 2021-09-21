FROM node:12-buster-slim
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package.json yarn.lock /app/
RUN apt-get update && apt-get install -y git && yarn install
COPY . .
CMD yarn start
