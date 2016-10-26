# Odds-on

##Getting Started

1. `npm i` - Install dependencies. This might take a while.
2. `npm start` - Run (webpack) development build. If it doesn't start, make sure you aren't running anything else in the same port. The default port is 8080.
3. Enter "localhost:'port number'" in the browser to see your build.
4. Start modifying the code. The browser should pick up the changes.

##Firebase commands

Before using the firebase commands `firebase serve` or `firebase deploy`, you must run `npm run build` which will generate a production build, and put the bundle.js file in the public folder (if one doesn't exist, it will create a public folder for the bundle.js). This can be configured in the webpack.config.js file. Then the folowing firebase commands can be used:

Then either of the following commands can be used:

1. `firebase serve` - Serves up the public folder (specified in firebase.json). The default port is 5000.  
2. `firebase deploy` - Deploys the public folder.  

##Other commands

* `npm test` - Runs `test/` through Karma/Mocha once.
