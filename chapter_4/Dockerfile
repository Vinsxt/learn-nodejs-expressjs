# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

# Copy the package.json and package-lock.json files to the container
COPY package*.json .

# install the dependencies
RUN npm install

# Copy prisma schema first
COPY prisma ./prisma

# Regenerate Prisma client for Linux
RUN npx prisma generate

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 5001

# Define the command to run the application
CMD ["node", "./src/server.js"]