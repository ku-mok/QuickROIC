FROM node:12-buster As Dev
WORKDIR /app
ENV CHOKIDAR_USEPOLLING=true
COPY package.json yarn.lock /app/
RUN yarn install
COPY . .
CMD yarn start
