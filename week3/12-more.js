'use strict';

const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz'; // making a change to o1 does not affect o3 because they are not related!
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf'; // making a changes o2 does affect o3 because o3 takes its values from o2 (line 5)
console.log('o1', o1, 'o2', o2, 'o3', o3);

// Using a metaphor: x and y are like twin brothers, they look the same but are separate entities. However, z is just another name for x.
