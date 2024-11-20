# Stage 1: Build React app
FROM node:16-alpine AS build

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Copy local node_modules instead of npm install
COPY node_modules ./node_modules

# Copy source files
COPY . .

# Build the app
RUN npm run build:css && npm run build

# Stage 2: Production
FROM node:16-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY node_modules ./node_modules

# Copy build output from previous stage
COPY --from=build /app/build ./build

# Copy server files
COPY server.mjs ./
COPY routes ./routes

# Expose port
EXPOSE 3000

# Start command
CMD ["node", "server.mjs"]