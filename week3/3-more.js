'use strict';

function printObject(obj) {
  for (const key of Object.keys(obj)) {
    console.log(key + ' = ' + obj[key]);
  }
}

/* Another solution:
function printObject(obj) {
  let i = 0;
  while (Object.getOwnPropertyNames(obj)[i] !== undefined) {
    console.log(Object.getOwnPropertyNames(obj)[i] + ' = ' + Object.values(obj)[i]);
    i++;
  }
}
*/

const person = {
  firstName: 'Maartje',
  lastName: 'Kruijt',
  city: 'Amsterdam',
};

printObject(person);
