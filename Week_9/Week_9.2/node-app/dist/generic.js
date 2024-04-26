"use strict";
function identity(arg) {
    return arg;
}
let output1 = identity("Ajay").toUpperCase();
let output2 = identity(1234);
console.log(output1);
console.log(output2);
function getElement(arr) {
    return arr[0];
}
let en1 = getElement(['Ajay', 'Mandal']);
let en2 = getElement([1, 2, 3, 4]);
let en3 = getElement([true, false]);
console.log(en1);
console.log(en2);
console.log(en3);
