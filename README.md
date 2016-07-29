# Admin panel framework based on Angular 2, Bootstrap 4 and Webpack

Admin template made with :heart:

## Based on
Angular 2, Bootstrap 4, Webpack and lots of awesome modules and plugins

## Installation guide
Install tools
If you don’t have any of these tools installed already, you will need to:

Download and install git
Download and install nodejs https://nodejs.org
Note: Make sure you have Node version >= 4.0 and NPM >= 3

Once you have those, you should install these globals with npm install --global:

###webpack

npm install --global webpack
###webpack-dev-server

npm install --global webpack-dev-server
###typescript

npm install --global typescript@beta
###bower

npm install --global bower

##Clone repository and install dependencies
You will need to clone the source code of ng2-admin GitHub repository:

git clone https://github.com/akveo/ng2-admin.git
After repository is cloned, go inside of the repository directory and install dependencies:

cd ng2-admin

npm install

This will setup a working copy of ng2-admin on your local machine.

Note: If you have any issues after the installation, additionally run the following:

bower install

Running local copy

To run a local copy in development mode, execute:

npm start

Go to http://0.0.0.0:3000 or http://localhost:3000 in your browser.

To run the local copy in production mode and build the sources, execute:

npm run prebuild:prod && npm run build:prod && npm run server:prod

##License
[MIT](LICENSE.txt) license.

