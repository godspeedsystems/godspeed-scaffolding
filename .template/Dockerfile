FROM node:18.19.0-alpine
RUN apk add --no-cache rsync
USER node
WORKDIR /workspace/development/app
COPY --chown=node:node . .
RUN npm i && npm run build && npm run prisma-generate 
CMD  npm run preview