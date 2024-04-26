// type User = {
// 	firstName: string;
// 	lastName: string;
// 	age: number
// }

type StringorNumber = string | number;

function printId(id: StringorNumber) {
    console.log(`ID: ${id}`);
}

printId(123);
printId("Ajay");
