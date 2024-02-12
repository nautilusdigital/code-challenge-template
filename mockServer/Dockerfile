FROM node:18
WORKDIR /usr/src/

COPY . .
RUN npm run restore:deps
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]
