FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

ENV PORT=3030

CMD [ "npm", "start" ]

