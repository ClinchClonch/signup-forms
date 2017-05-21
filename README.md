## Signup-forms

### Setup
To download dependencies, run the following in the project root:

### `yarn`

### Database configurations
The application uses MongoDB together with NodeJS, ExpressJS and Mongoose to store and retrieve users through fetch requests. 

The database is currently configured to listen to requests at localhost:8080/users with mongoose connecting towards "mongodb://localhost/simple".

Provided you have MongoDB installed and the Mongo Client & Server up and running; to copy over the database from data.js and to save it in the default location, run the following in the project root:

### `npm run server`

To have NodeJS start listening for requests, run the following in the project root:

### `node server.js`

One user is saved to the database for every Submit done.

### Start the application
To start the application, run the following in the project root:

### `npm run start`

### Run unit tests
To run the unit tests, run the following in the project root:

### `npm run test`
