## Signup-forms

### Setup
To download dependencies, run the following in the project root:

### `yarn`

### Start database
To start the database, run the following in the project root:

### `npm run server`

You can find the database entries in the file db.json in the project root. 
One user is saved for every Submit done.

### Run
To start the application, run the following in the project root:

### `npm run start`



## Disclaimer

This is a work in progress and is not yet complete.

### Major functionality remaining
Fix validation of input fields and the checkbox, preventing button clicks unless input fields.trim().length > 1 and isChecked === true.
Write unit tests.
Replace the mock database json-server with a proper MongoDB setup.

### Minor functionality remaining
Style the application according to design, especially move buttons to correct places and track the current active stage in the header by changing the border-bottom to another color for the active view.

