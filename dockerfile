FROM node:8.11.3

RUN mkdir -p /usr/app/sample-project
WORKDIR /usr/app/sample-project

COPY . /usr/app/sample-project

RUN npm install

ARG APP_ENV

ENV NODE_ENV=$APP_ENV

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

EXPOSE 8080