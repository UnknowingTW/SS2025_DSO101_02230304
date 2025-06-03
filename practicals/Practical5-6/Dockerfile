# Stage 1: Build the Node.js app
FROM node:20-alpine AS build-stage

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy only package files first to leverage Docker cache
COPY package*.json ./

# Install production dependencies
RUN npm install --frozen-lockfile

# Copy the full source code
COPY . .

# Build the application (e.g., for React or Next.js apps)
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:stable-alpine AS production-stage

# Copy the compiled app from the build stage
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Optional: add a custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the host
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
