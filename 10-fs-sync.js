// file system built-in module SYNCHRONOUS
// different way of accessing methods of module //same as const fs = require('fs')
const {readFileSync, writeFileSync} = require('fs');
console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`,
    // append 
    {flag: 'a'}
)
console.log('done with this task');
console.log('starting with the next one');

