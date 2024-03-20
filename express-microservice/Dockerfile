# Use Node.js version 14 as the base image
FROM node:20

# Set the working directory within the Docker container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Expose port 3000 (assuming your Express.js app listens on port 3000)
EXPOSE 3000

# Command to start the Express.js application
ENTRYPOINT ["node", "index.js"]
