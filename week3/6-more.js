'use strict';

function vehicleType(color, code, age) {
  let result = 0;
  if (age <= 1) {
    switch (code) {
      case 1:
        result = 'a ' + color + ' new car.';
        break;
      case 2:
        result = 'a ' + color + ' new car.';
        break;
      default:
        result = 'unknown vehicle.';
    }
  }
  else {
    switch (code) {
      case 1:
        result = 'a ' + color + ' used car.';
        break;
      case 2:
        result = 'a ' + color + ' used car.';
        break;
      default:
        result = 'unknown vehicle.';
    }
  }
  return result;
}

console.log(vehicleType('blue', 1, 5));
console.log(vehicleType('green', 1, 1));
console.log(vehicleType('red', 2, 5));
console.log(vehicleType('yellow', 2, 1));
console.log(vehicleType('black', 3, 5));
