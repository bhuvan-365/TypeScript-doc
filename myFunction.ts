
function addTwo(num: number):number {
    return num + 2;
    // return "hero"

}
// => input number and expected output is also number



function getUpper(val: string) {
    return val.toUpperCase()

}

function signUpUser(name: string, email: string, ispaid: boolean) {
    const upperName = name.toUpperCase()
    // const isEmailValid = email.endsWith(".com")
    const paymentStatus = ispaid.valueOf()

    console.log("Name:", upperName);
    // console.log("Email ends with .com:", isEmailValid);
    console.log("Payment status:", paymentStatus);
    return;
}

// arrow function , setup for default value
let loginUser= (name:string, email:string,isPaid:boolean=false) => {

}



addTwo(5);
getUpper("bhuvan")
signUpUser("Bhuvan", "bhuvan@gmail.com", true)
loginUser("h","h")


function getValue(myVal:number){
    
    if(myVal >5){
        return true
    }
    return "69 OK"
}
// default output type is boolean


export { }