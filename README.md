# JavaScript — Unit Testing using Mocha and Chai

## About Unit Testing
When you test your codebase, you take a piece of code — typically a function — and verify it behaves correctly in a specific situation. Unit testing is a structured and automated way of doing this. As a result, the more tests you write, the bigger the benefit you receive. You will also have a greater level of confidence in your codebase as you continue to develop it.

## Setting up the Tools
Your Machine should have node and npm installed.
Install the node.js LTS version from [Node website](https://nodejs.org/en/). npm gets installed along with node automatically.

Run below in command line to check the successful installation of node and npm.

`npm -v     // will return installed npm version`

`node -v    // will return installed node version`


## Mocha

* Mocha is a JavaScript Test Framework.
* Runs on Node.js and Browser
* Installation: (Run the below commands in terminal or cmd)

`npm install --global mocha`

`npm install --save-dev mocha`

Note: To run Mocha, we need Node.js v4 or newer.

`—- global` helps to install the Mocha on computer at global level which helps to run mocha test through command line.

`—- save-dev` helps to add the mocha as dependency in package.json file for that particular project.

## Mocha Basic Spec

* _**assert**_ helps to determine the status of the test, it determines failure of the test.
* _**describe**_ is a function which holds the collection of tests. It takes two parameters, first one is the meaningful name to functionality under test and second one is the function which contains one or multiple tests. We can have nested _describe_ as well.
* _**it**_ is a function again which is actually a test itself and takes two parameters, first parameter is name to the test and second parameter is function which holds the body of the test.

## Steps to Run the test

* Download or clone the [Github Repo](https://github.com/guram21/Unit_testing), navigate to the repo in command line
* Run `npm install` to install all dependencies from _package.json_
* Run `npm test` to run all test sepcs.
* `npm test` works because of below test script in _package.json_ file.

```javascript
"scripts": {
    "test": "mocha"
  }
```

## Test Assertion

* _**Assertion**_ is an expression which helps system (Mocha in this case) to know code under test failed.
* _**Assert**_’s job is to just throw an error when things are not correct or right.
* _**Assert**_ tests the expression and it does nothing when expression passes but throws exception in case of failure to tell the test framework about it.
* We can just throw an exception to fail the test as well.

## Chai

* Chai is BDD/TDD assertion library.
* Can be paired with any javascript testing framework.
* Assertion with Chai provides natural language assertions, expressive and readable style.
* Installation: (Run the below commands in terminal or cmd)

`npm install --save-dev chai`

## Assertion interfaces and styles

* There are two popular way of assertion in Chai, _**expect**_ and _**should**_
* The _**expect**_ interface provides function for assertion.
* The _**should**_ interface extends each object with a should property for assertion.
* _**should**_ property gets added to the _Object.Prototype_, so that all object can access it through prototype chain.

## Project JavaScript Files

You can navigate the files using the following directory:
* [Functions](index.js)
* [Tests](test)

## Useful Links and Documentation

* Mocha: https://mochajs.org/
* Node.js: https://nodejs.org/en/
* Chai: https://www.chaijs.com/
