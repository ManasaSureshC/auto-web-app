# mmc-qa-automation

WebdriverIO with Mocha framework

What is WebdriverIO? controls a browser or a mobile app with few lines of code. It is an open source utility for node.js. WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world.
It handles selenium commands synchronously and support a variety of hooks.

We are using Mocha framework to handle the test. In this framework we are using TDD approach of writing the test where the tests are ordered as suite and test.

To access this suite, first clone the suite and make sure that node & npm is install in your machine. Run ```npm install``` in the projet folder

In order to run any test suite loally, run ```npm test -- --spec="test suite path"```
In order to run the whole suite run ```npm test```

To run test in sauce labs,, ```npm test-sauce```

If the user has to run only one file from a spec file, append ```.only``` to the test so that it will read as: test.only("Spec file...").

Similarly, if the user wants to skip any test from a list of tests, append ```.skip``` to the test