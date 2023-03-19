FROM node:18-alpine as build
RUN npm i -g pnpm@7
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY --chown=node:node . .
RUN pnpm build

FROM node:18-alpine as dist
RUN npm i -g pnpm@7
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node --from=build  /home/node/app/node_modules ./node_modules
COPY --chown=node:node --from=build  /home/node/app/dist ./dist
COPY --chown=node:node --from=build  /home/node/app/package.json .
CMD ["pnpm", "start:prod"]