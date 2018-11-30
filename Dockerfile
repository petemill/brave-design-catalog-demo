FROM node:8

RUN mkdir -p /app
WORKDIR /app
ADD package.json /app
RUN npm install
COPY . /app
RUN npm run catalog-build

FROM kyma/docker-nginx
EXPOSE 80
COPY --from=0 /app/catalog/build /var/www
CMD ["nginx"]