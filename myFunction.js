"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hero"
}
// => input number and expected output is also number
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, ispaid) {
    var upperName = name.toUpperCase();
    // const isEmailValid = email.endsWith(".com")
    var paymentStatus = ispaid.valueOf();
    console.log("Name:", upperName);
    // console.log("Email ends with .com:", isEmailValid);
    console.log("Payment status:", paymentStatus);
    return;
}
// arrow function , setup for default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("bhuvan");
signUpUser("Bhuvan", "bhuvan@gmail.com", true);
loginUser("h", "h");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "69 OK";
}
