# Auto Focus Garage: Your car spotting database

A React app built by Luke Esworthy for Nashville Software School's C40 front-end capstone.

## Overview

Auto Focus Garage was conceived and built by a car enthusiast for car enthusiasts. AFG was designed to be a place where enthusiasts and photogs can go to keep track of cars they have seen. After registering/logging in, each user is able to create a personal bio and then car cards, displaying a photo, make & model names, and any additional info the user wishes to add.

## Setup

Get this app running on your local machine:

1. Clone this repo to your machine
   `git clone https://github.com/LukeEsworthy/Auto-Focus-Garage.git`
2. `cd` into "autofocusgarage"
3. You will need an API key from [Unsplash](https://unsplash.com/). Click the link and follow the directions on the website to create an account to get your own API key.
4. In the `src` folder, create a file called `APIKeys.js`
   `cd src`
   `touch APIKeys.js`
5. Create and export a variable `UnsplashAPIKey` and give it the value of your unique API key from Unsplash.
   `const UnsplashAPIKey = "YOUR-API-KEY-HERE";`
   `export default UnsplashAPIKey;`
6. Make sure you have Node.js and npm installed on your machine by typing `node -v` in your terminal. If not, click [here](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) to install it.
7. Once installed, type `npm start` in your terminal to run the server. It will start running and open a window in your browser with the app.
8. In another terminal tab, navigate into the API folder to run the json server.
   `cd api`
   `json-server -p 5002 -w database.json`

And you should be up and running!





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
