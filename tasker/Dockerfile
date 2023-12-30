FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG PORT=4001
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD ["npm", "run", "start"]
