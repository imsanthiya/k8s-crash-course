FROM debian:bullseye
RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && apt-get install -y nodejs
RUN mkdir /learnings
WORKDIR /learnings
COPY ./package*.json .
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "node","dist/main.js" ]