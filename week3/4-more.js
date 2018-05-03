'use strict';

function vehicleType(color, code) {
  switch (code) {
    case 1:
      console.log('a ' + color + ' car.');
      break;
    case 2:
      console.log('a ' + color + ' car.');
      break;
    default:
      console.log('unknown vehicle.');
  }
}

vehicleType('blue', 1);
vehicleType('green', 2);
vehicleType('red', 3);
