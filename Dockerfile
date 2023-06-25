FROM node:18-slim

RUN npm install -g npm@9 && npm i -g @nestjs/cli

WORKDIR /home/node/jw-excommunicated-backend

USER node

CMD [ "tail -f /dev/null" ]
