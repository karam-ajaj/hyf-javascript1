'use strict';

// 8.1 declaration
let integerVariable = 3;
const stringVariable = 'my string';
const constantVariable = undefined;
let boolVariable = true;
const arrayVariable = ['1' , '2' , '3'];
let nullVariable = null;

// 8.2 log value
console.log('The value of my variable integerVariable is: ' + integerVariable);
console.log('The value of my variable stringVariable is: ' + stringVariable);
console.log('The value of my variable constantVariable is: ' + constantVariable);
console.log('The value of my variable boolVariable is: ' + boolVariable);
console.log('The value of my variable arrayVariable is: ' + arrayVariable);
console.log('The value of my variable nullVariable is: ' + nullVariable);

// 8.3 & 8.4
console.log('The type of my integerVariable is: number');
console.log('The actual type of my integerVariable is: ' + typeof integerVariable);

console.log('The type of my stringVariable is: string');
console.log('The actual type of my stringVariable is: ' + typeof stringVariable);

console.log('The type of my constantVariable is: undefined');
console.log('The actual type of my constantVariable is: ' + typeof constantVariable);

console.log('The type of my boolVariable is: boolean');
console.log('The actual type of my boolVariable is: ' + typeof boolVariable);

console.log('The type of my arrayVariable is: object');
console.log('The actual type of my arrayVariable is: ' + typeof arrayVariable);

console.log('The type of my nullVariable is: object');
console.log('The actual type of my nullVariable is: ' + typeof nullVariable);

// 8.5 & 8.6
console.log('compare FALSE');
if (typeof integerVariable === typeof stringVariable) {
    console.log('SAME TYPE');
}
else {
    console.log('DIFFERENT TYPE')
}

console.log('compare TRUE');
if (typeof arrayVariable === typeof nullVariable) {
    console.log('SAME TYPE');
}
else {
    console.log('DIFFERENT TYPE')
}
