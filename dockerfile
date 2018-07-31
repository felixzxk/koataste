FROM node

RUN mkdir -p /home/www/node-app
WORKDIR /home/www/node-app

COPY . /home/www/node-app
RUN npm i

EXPOSE 3232
CMD [ "npm", "run", "go" ]