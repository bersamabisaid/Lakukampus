FROM node:14.15-alpine

WORKDIR /Lakukampus-TS

COPY . .

RUN npm i -g @quasar/cli

RUN npm i

RUN quasar build -m pwa

CMD ["quasar", "serve", "dist/pwa", "-p", "8000"]
