# Stage 1: Build (optional - for React app if needed)
# For static portfolio, we serve directly from nginx

# Stage 2: Nginx Static Server
FROM nginx:alpine

# Copy static portfolio HTML
COPY frontend/index.html /usr/share/nginx/html/index.html

# Nginx configuration for SPA fallback and performance
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]