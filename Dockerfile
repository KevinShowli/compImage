FROM node:latest

RUN mkdir -p /compImg/service
WORKDIR /compImg/service
COPY . /compImg/service

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 3000

CMD [ "pm2-docker", "start", "pm2.json" ]

