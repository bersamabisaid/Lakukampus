FROM node:14.15-alpine

WORKDIR /Lakukampus-TS

COPY . .

RUN npm i -g @quasar/cli

RUN npm i

RUN quasar build

CMD ["quasar", "serve", "dist/spa", "-p", "8000"]
