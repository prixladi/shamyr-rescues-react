# Shamyr Rescues React

Frontend for [Shamyr Rescues](https://github.com/prixladi/shamyr-rescues) project,<br />
For everything to function properly should be run together with [Backend](https://github.com/prixladi/shamyr-rescues-server).

## Yarn

When using **Yarn** keep in mind that you need to run additional services for the worker to function properly. You can use docker as described below. If you decide to use another method you will probably need to change the default configuration.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
The App is ready to be deployed!

## Docker

### `docker build .`

Builds a production-ready image.

### `docker-compose up`

Runs the app container and builds an image if does not exist.