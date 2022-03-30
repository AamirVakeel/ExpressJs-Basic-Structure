FROM node:16.14-alpine
EXPOSE 4000

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["nodemon", "index.js"]
# CMD ["npm", "run", "dev"]