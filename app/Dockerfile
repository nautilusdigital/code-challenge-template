# Step 1: Build the React application
FROM node:18 AS build
WORKDIR /app
COPY package.json package-lock.json ./

ENV REACT_APP_BASE_URL=http://localhost:8080
ENV REACT_APP_SESSION_COOKIE_NAME=userSession

RUN npm install
COPY . ./
RUN npm run build

# Step 2: Serve the app with Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]