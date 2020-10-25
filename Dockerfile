FROM node:12.17.0 as build

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

RUN apt-get update && apt-get install -y dos2unix
RUN dos2unix ./run.sh

FROM nginx:1.19.3-alpine

COPY ./configs/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./configs/config.js /configs/config.js
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/run.sh /run.sh

EXPOSE 80
ENTRYPOINT ["/run.sh"]
CMD ["nginx", "-g", "daemon off;"]