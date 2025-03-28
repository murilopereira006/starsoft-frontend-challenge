FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000 6006

CMD ["sh", "-c", "npm run dev & npm run storybook"]