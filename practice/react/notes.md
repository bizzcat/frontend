#Notes on workflow

Four use in production mode:
Go to webpack configuration and set the module.exports entry item to the folder name of the app you would like to run

module.exports = {
  entry: [
    './apps/**FOLDER_NAME**/index.js'
  ],
...
}


### Setup


##### initialized npm into application root

##### installed jQuery into npm

##### installed Ava to npm
from: https://github.com/avajs/ava
Recommended by: http://courses.reactjsprogram.com/courses/reactjsfundamentals/lectures/762526
This populated my node_modules with a plethora of modules such as babel and Lodash.
It updated my package.json file with Ava as a devDependency.

##### foregoing use of Ava as tester, but keeping in devDependencies

##### configuring webpack
Webpack, at its core, is a code bundler. It takes your code, transforms and bundles it, then returns a brand new version of your code.

##### installed depencies: react and react-DOM
npm install --save react react-dom

##### installed devDependencies:
npm install --save-dev html-webpack-plugin webpack webpack-dev-server babel-{core,loader} babel-preset-react

##### created folder 'app' and added index.html file in 'app'

##### ......some more things.......
and now I have a functioning React page saying Hello World!

##### Created a page with fake cascading profiles under apps/fake-profiles

##### Set up my first React Router framework

##### 

#####

#####

#####

#####



General notes on React:
It is best practice to separate container components and presentational components (those that optionally take in some data and render a view).

If a class only requires a render function without any data manipulation, it would be best to use a stateless functional component (a general JS function that passes in props as an argument).
