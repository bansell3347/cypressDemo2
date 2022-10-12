# pull official Cypress image
FROM cypress/included:8.7.0

# set working directory
RUN mkdir /integration
WORKDIR /integration

# copy our test application
COPY package.json ./
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

# install NPM dependencies and Cypress binary
RUN npm install



ENTRYPOINT ["npx", "cypress", "run"]