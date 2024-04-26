interface User {
    firstName: string,
    LastName: string,
    age: number
};

function isLegal(user: User) {
    if(user.age > 18) {
        return true;
    }else {
        return false;
    }
}

function greet(user: User) {
    console.log(`Hi there ${user.firstName}`);
}

isLegal ({
    firstName: "Ajay",
    LastName: "Mandal",
    age: 24
})
