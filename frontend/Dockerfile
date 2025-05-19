# Base image
FROM nginx:alpine

# Copy hasil build
COPY out/ /usr/share/nginx/html

# Ganti default config NGINX
COPY default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 3002

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]