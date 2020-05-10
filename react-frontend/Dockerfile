FROM node:10.16.0
WORKDIR /app
COPY ./package.json ./yarn.lock /app/
RUN yarn
COPY . ./
CMD yarn start
