# Use the official Node.js image as a base
FROM alpine:3.18

ENV NODE_VERSION 20.11.0

# Set the working directory inside the container
WORKDIR /

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app using node
CMD ["node", "index.js"]
