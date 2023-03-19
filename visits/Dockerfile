FROM node:18-alpine
RUN npm i -g pnpm@7
WORKDIR /home/node/app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
CMD [ "pnpm", "start" ]