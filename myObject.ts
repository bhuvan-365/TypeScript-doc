
const User = {
    name:"bhuvan",
    email:"bhuvan@gmail.com",
    isActive :true

}

//Not good behaviour of object

// function createUser({name: string, isPaid: boolean}){

//     let newUser = {name:"bhuvan", isPaid: true, email:"bhuvan@gmail"}

// }
// createUser(newUser)


function createCourse():{name: string, price:number}{
    return{name:"TypeScript" , price:3999}

}



export{}