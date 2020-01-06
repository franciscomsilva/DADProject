FROM node:slim

LABEL "com.github.vcarreira.yo-generated"=""

RUN mkdir -p /opt/app

RUN npm install pm2 -g

ADD ./nodejs-apps/notifications/package.json /tmp/package.json

RUN cd /tmp && npm install

RUN  cp -a /tmp/node_modules /opt/app

COPY .env /opt/app/.env

COPY ./nodejs-apps/notifications /opt/app

WORKDIR /opt/app

CMD ["pm2-docker", "redis-pusher.js"]
