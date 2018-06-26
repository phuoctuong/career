FROM node:6.11.5

RUN mkdir -p /usr/app/sample-project
WORKDIR /usr/app/sample-project

COPY . /usr/app/sample-project

RUN npm install

EXPOSE 8080