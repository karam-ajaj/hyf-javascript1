'use strict';

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log('The original array is: ' + favoriteAnimals);
//2.1
favoriteAnimals = favoriteAnimals.concat('turtle');
//2.2
console.log('The array after adding Mauro\'s favorite animal is: ' + favoriteAnimals);
//2.3
favoriteAnimals.splice(1, 0, 'meerkat');
//2.4
console.log('The expected value for the array will be: [blowfish,meekat,capricorn,giraffe,turtle]');
//2.5
console.log('The array after adding Jim\'s favorite animal is: ' + favoriteAnimals);
//2.6
console.log('The array has a length of: ' + favoriteAnimals.length);
//2.7
favoriteAnimals.splice(3, 1);
//2.8
console.log('The array after deleting giraffe is: ' + favoriteAnimals);
//2.9
function findIndexInArray(array,element){
    let i = 0;
    let index = 0;
    for(i = 0; i < array.length; i++){
        if (array[i] === element){
            index = i;
            return index;
        }
    }
}
const index = findIndexInArray(favoriteAnimals,'meerkat');
//2.10
console.log('The item you are looking for is at index: ' + index);
