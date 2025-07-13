"use strict";
// WRONG WAY
// class User {
//     constructor(email:string,name:string){
//         this.email:string = email;
//         this.name:string  = name
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// CORRECT WAY
var User = /** @class */ (function () {
    function User(email, name) {
        this.class = ""; //no need to worry for call it or not 
        this.city = " Kathmandu";
        this.email = email;
        this.name = name;
    }
    return User;
}());
var Bhuvan = new User("bhuvan@.com", "bhuvan"); // because of constructor(email:string,name:string)
