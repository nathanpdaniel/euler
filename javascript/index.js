const {
  performance,
} = require('perf_hooks');

const multiples = require("./problem1");
const evensum = require("./problem2");

console.log(multiples(1000));
console.log(evensum(100));
