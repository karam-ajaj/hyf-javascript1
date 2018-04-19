'use strict'

let myArray = ['1' , '2'];
console.log('The value of myArray is: ' + myArray);
myArray = myArray.concat('string');
console.log('The new value of myArray is: ' + myArray);
console.log('We can store multiple types in an array');

let x = 6/0;
let y = 10/0;
console.log('The value of the variable x is: ' + x);
console.log('The value of the variable y is: ' + y);
if(x == y){
    console.log('We can compare infinities');
}
else{
    console.log('We can not compare infinities');
}