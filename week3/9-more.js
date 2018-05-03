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
  const motto = 'Amazing Joe\'s Garage, we service ' + finalString;
  return motto;
}

const vehicles = ['car', 'motorbike', 'caravan', 'bike'];
vehicles.push('boat');

const text = advertisement(vehicles);
console.log(text);
