# Smart Brains

[Smart Brain](https://smart-brains-0.herokuapp.com/) is full stack app with Client side created using `ReactJs` and Server side is powered using `NodeJs` which you can find [here](https://github.com/shehroze-1122/smart-brains-backend) and I used `PostgreSql` serving as a database. This application
is fully optimized with security being handled carefully.

The app has a **Sign In** and **Register** form as you open the link to it, where you can register if you haven't already and then it welcomes the user with a cool UI and takes care of the UX too. Users can enter the url of any image containing any number of humans. 
Then the magic happens and the SMART BRAIN will **create red boxes around every face** in the image. It also displays the number of entries.

The app hits clarifai api with your entered image URL and then responds with the coordinates for the bounding boxes which we then tackle to create the actual boxes on the image.

This repository is dedicated to the **client side**.

Feel free to point to any issues or contribute to it.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
