# With Help of ChatGPT.
# Stage 1: Build the React app with Tailwind CSS
FROM node:alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies for React app
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy all files and build the React app with Tailwind CSS
COPY . .

# Run the build process, including Tailwind CSS purge for production
RUN npm run build:css && npm run build

# Stage 2: Setup the Express server
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --only=production 

# Copy the build files from the previous stage
COPY --from=build /app/build ./build

# Copy the rest of the server files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the Express server
CMD ["node", "server.mjs"]