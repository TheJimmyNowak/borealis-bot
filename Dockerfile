FROM node:latest

# Create the directory!
RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

# Our precious bot
COPY . /usr/src/bot

# Start me!
CMD ["npm", "run", "start"]