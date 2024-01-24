FROM node:18-slim

EXPOSE 8000

WORKDIR /app

COPY package*.json ./

RUN npm install \
    && npm cache clean --force

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

CMD ["node", "server.js"]