# Stage 1: Build Next.js
FROM node:18 AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build & export static files
RUN npm run build && npm run export

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
