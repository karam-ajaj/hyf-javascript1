'use strict';

//1.1
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log('The value of myString is: ' + myString);
//1.2
let length = 0;
length = myString.length;
console.log('The length of myString is: ' + length);
//1.3
myString = myString.replace(/,/gi , ' ');
myString = myString.replace('a difficult' , 'an easy');
//1.4
console.log('The new value of myString is: ' + myString);
