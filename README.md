This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Interest Libraries

In the project, you going able to find some interest libraries:

### React Bootstrap

A widely bootstrap library for React, used for knowns layouts components, and additional tools related to UI.

### Styled Components

Awesome for react, forget it create multiples classes for change only one component, you can do it with props.

### Redux - Reselect

State management and clean data update using immutability.

### React Fontawesome

Famous svg icons library adapted to React.

## Server Side

You can find a server side into a folder called `server`, just right there is available the next commands:

### `npm start`

Runs the express in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) in the browser to view if is running.

Right now it-s only available `users` routes, included signup and login endpoints. They aren't on use by front-end yet.

  - GET `/users/` Get all users
  - GET `/users/:id`  Get one user
  - POST `/users/signup`  Signup user
  - POST `/users/login` Login user
  - PUT `/users/:id`  Edit user
  - DELETE `/users/:id` Delete user

## Important

I'm running a MongoDB instance locally (`mongodb://localhost:27017/zemoga_test`), so:<br />
 - You can change the connect url in `server/db/connection.js - line 3`.<br />
 or<br />
 - If you are also running a MongoDB instance locally, verify the port `27017` (if not the same, change it in `server/db/connection.js - line 3`) then create a new db `zemoga_test` as name.