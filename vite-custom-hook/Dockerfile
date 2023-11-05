
FROM node:alpine 
ENV REACT_APP_ENV=$REACT_APP_ENV
WORKDIR /app
COPY package.json .
COPY yarn.lock .
COPY . .
RUN yarn 
CMD ["sh", "-c", "yarn run serve"]