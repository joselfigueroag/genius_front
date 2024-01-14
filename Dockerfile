FROM node:21.5

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .