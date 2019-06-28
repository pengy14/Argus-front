FROM node:10.7.0
RUN mkdir -p /home/app
WORKDIR /app
COPY . /app
RUN yarn install
EXPOSE 3000
CMD ["yarn","start"]
