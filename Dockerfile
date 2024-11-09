# step 1: Build step with typescript
FROM node:16 AS build

# working directory in container
WORKDIR /usr/src/app

# install dependencies
COPY package*.json ./
RUN npm install

# copy the source files to container
COPY src/ ./src
COPY tsconfig.json ./

# build typescript code
RUN npm run build  # Assumes "build" script is defined in package.json to run "tsc"

# step 2: Production step
FROM node:16 AS production

# set working directory
WORKDIR /usr/src/app

# copy only necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/dist/ ./dist

# install production dependencies
RUN npm install --only=production

# expose the port
EXPOSE 3000

# run the app with the compiled JS
CMD ["node", "dist/app.js"]
