FROM node:18-alpine
RUN npm i -g pnpm@7
USER node
WORKDIR /home/node/app
COPY --chown=node:node package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY --chown=node:node . .
RUN pnpm build
CMD ["pnpm", "start:prod"]