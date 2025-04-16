FROM node:22.14

WORKDIR /frontend

COPY package*.json ./

RUN npm install

# install TypeScript as dev dependency
RUN npm install --save-dev typescript

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]