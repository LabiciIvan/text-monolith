FROM node:22.14

WORKDIR /backend

COPY package*.json ./

RUN npm install

# install TypeScript as dev dependency
RUN npm install --save-dev typescript ts-node @types/node @types/express nodemon

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]