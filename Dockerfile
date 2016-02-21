FROM node:4.0

WORKDIR /src

RUN npm install -g ember-cli
RUN npm install -g bower
RUN npm install -g phantomjs

ADD package.json /src/package.json
ADD bower.json /src/bower.json

RUN npm install
RUN bower --allow-root install

EXPOSE 4200
