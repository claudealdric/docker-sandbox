FROM node:18-alpine
RUN npm i -g pnpm
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./ 
RUN pnpm install
COPY . .
CMD [ "pnpm", "start" ]
