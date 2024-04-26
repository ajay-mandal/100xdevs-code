function identity<T>(arg: T): T {
    return arg;
}

// Generic enable function reusability
let output1 = identity<string>("Ajay").toUpperCase();
let output2 = identity<number>(1234);

console.log(output1);
console.log(output2);


//----------------------------------------------//
function getElement<T>(arr: T[]):T {
    return arr[0];
}

let en1 = getElement<string>(['Ajay', 'Mandal']);
let en2 = getElement([1,2,3,4]);
let en3 = getElement([true, false,1,2,3,"Ajay","Mandal"]);

console.log(en1);
console.log(en2);
console.log(en3);
