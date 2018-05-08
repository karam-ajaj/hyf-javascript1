'use strict';

const vehicle = ['car', 'motorbike', 'caravan', 'bike'];

function vehicleType(color, code, age) {
  let result = 0;
  const condition = age <= 1 ? 'new' : 'used';
  if (code >= 1 && code <= vehicle.length) {
    for (let i = 0; i < vehicle.length; i++) {
      result = 'a ' + color + ' ' + condition + ' ' + vehicle[code - 1]; // the index is modified to match the required output
    }
  }
  else {
    result = 'unknown vehicle.';
  }

  return result;
}

console.log(vehicleType('green', 3, 1));

console.log(vehicleType('green', 2, 1));
console.log(vehicleType('green', 1, 1));
console.log(vehicleType('green', 4, 1));
console.log(vehicleType('green', 0, 3));
console.log(vehicleType('green', 7, 3));
