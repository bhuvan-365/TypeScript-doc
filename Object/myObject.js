"use strict";
// const User = {
//     name:"bhuvan",
//     email:"bhuvan@gmail.com",
//     isActive :true
Object.defineProperty(exports, "__esModule", { value: true });
// }
function createUser69(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser69({ name: "bhuvan", isPaid: true });
//Not good behaviour of object
// function createUser({name: string, isPaid: boolean}){
//     let newUser = {name:"bhuvan", isPaid: true, email:"bhuvan@gmail"}
// }
// createUser(newUser)
function createCourse() {
    return { name: "TypeScript", price: 3999 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
var myUser1 = {
    _id: "12345",
    name: "utshav",
    email: "uts@gmail",
    isActive: false
};
myUser1.email = "h@gamil";
