"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "bhuvan",
    email: "bhuvan@gmail.com",
    isActive: true
};
//Not good behaviour of object
// function createUser({name: string, isPaid: boolean}){
//     let newUser = {name:"bhuvan", isPaid: true, email:"bhuvan@gmail"}
// }
// createUser(newUser)
function createCourse() {
    return { name: "TypeScript", price: 3999 };
}
