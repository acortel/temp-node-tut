// npm - global command, comes with node
// npm --version or npm --v

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties, etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// we need package.json because whatever package you install
// will be stored as a dependency in the package.json file

// so for example you push the project to github without the 
// node modules folder, even without the node modules files,
// all you have to do is npm install and the node will install
// the needed modules because of the package.json file

// you normally do not share the node modules folder because of
// the size, so you just need the package.json

// install npm package first before importing
const _ = require('lodash');

// lodash.flattenDeep() method - turns array of arrays into a simple array
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
