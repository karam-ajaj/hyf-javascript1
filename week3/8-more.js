'use strict';

function advertisement(vehicleNames) {
  // 1- Adding s
  const pluralVehicleNames = [];
  vehicleNames.forEach(function (element) {
    element = element + 's';
    pluralVehicleNames.push(element);
  });
  // 2- Adding (and) before the last element
  pluralVehicleNames[pluralVehicleNames.length - 1] = 'and ' + pluralVehicleNames[pluralVehicleNames.length - 1];
  // 3- Adding spaces and commas, and convert to string
  const convertedString = pluralVehicleNames.join(', ');
  // 4- Remove the last comma
  const finalString = convertedString.replace(/, and/, ' and');
  const motto = 'Welcome to amazing Joe\'s Garage, we service ' + finalString;
  return motto;
}

const vehicles1 = ['car', 'motorbike', 'caravan', 'bike'];
const vehicles2 = ['car', 'motorbike', 'caravan', 'bike', 'boat'];

const text1 = advertisement(vehicles1);
const text2 = advertisement(vehicles2);
console.log(text1);
console.log(text2);


/* other solutions:
'use strict';

function advertisement1(vehicles) {
  let text = '';
  for (let i = 0; i < vehicles.length; i++) {
    if (i > 0) {
      text += (i < vehicles.length - 1) ? ', ' : ' and ';
    }
    text += vehicles[i] + 's';
  }
  return 'Welcome to Amazing Joe\'s Garage, we service ' + text + '.';
}

function advertisement2(vehicles) {
  let text = '';
  const lastVehicle = vehicles[vehicles.length - 1];
  for (const vehicle of vehicles) {
    if (text !== '') {
      text += (vehicle !== lastVehicle) ? ', ' : ' and ';
    }
    text += vehicle + 's';
  }
  return 'Welcome to Amazing Joe\'s Garage, we service ' + text + '.';
}

function advertisement3(vehicles) {
  const vehiclePlurals = vehicles.map(vehicle => vehicle + 's');
  const lastVehiclePlural = vehiclePlurals.pop();
  return 'Welcome to Amazing Joe\'s Garage, we service ' +
    vehiclePlurals.join(', ') +
    ' and ' +
    lastVehiclePlural + '.';
}

function advertisement4(vehicles) {
  const text = vehicles
    .map(vehicle => vehicle + 's')
    .reduce((prev, vehicle, i) => {
      if (i > 0) {
        prev += (i < vehicles.length - 1) ? ', ' : ' and ';
      }
      return prev + vehicle;
    });
  return 'Welcome to Amazing Joe\'s Garage, we service ' + text + '.';
}

const vehicleList = ['car', 'motorbike', 'caravan', 'bike'];
console.log(advertisement1(vehicleList));
console.log(advertisement2(vehicleList));
console.log(advertisement3(vehicleList));
console.log(advertisement4(vehicleList));
*/
