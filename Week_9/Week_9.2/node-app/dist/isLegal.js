"use strict";
;
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log(`Hi there ${user.firstName}`);
}
isLegal({
    firstName: "Ajay",
    LastName: "Mandal",
    age: 24
});
