// Modules - Encapsulated Code (only share minimum - only share what we want)
// Node use CommonJS library, so every file in Node is module (by default)

//always start with ./ for your own modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
