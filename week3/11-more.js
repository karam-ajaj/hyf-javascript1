'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

console.log(x == y); // I think this case should be true if they have the same values

console.log(x === y); // I think this case should be true if they have the same types and values

console.log(z === y); // true because z and y are indicating to the same bites in the memory

console.log(z === x);
