# Stage 1: Build Next.js static export
FROM node:22-alpine AS builder

# Set workdir
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build Next.js (auto export ke /app/out karena ada output: 'export')
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy static files from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx config
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
