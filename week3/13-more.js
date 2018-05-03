'use strict';

const bar = 42;
const result = typeof typeof bar;

/*
After debugging I noticed that the value of (result) will always be a string even if (bar) was not a number.
The definition of typeof in mdn is: The typeof operator returns a string indicating the type of the unevaluated operand.
So the typeof a string will always be a string and that is my explanation.
*/
