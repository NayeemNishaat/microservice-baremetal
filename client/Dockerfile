FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./
# Note: When copying multiple file the directory should end with "/"
RUN npm ci
COPY . .

CMD ["npm", "start"]

# docker run => docker create && docker start # With default logging.
# docker logs <containerId>
# docker run -it <containerId> <CMD> # For overriding default command
# docker start -a <containerId> # For showing logs.
# Remark: When changing the docker file try to make the changes as further down as possible.
# docker commit -c 'CMD ["my command"]' <conyainerId> # Important: Create an image from a running container