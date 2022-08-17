FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./
# Note: When copying multiple file the directory should end with "/" 
RUN npm ci
COPY . .

CMD ["npm", "start"]