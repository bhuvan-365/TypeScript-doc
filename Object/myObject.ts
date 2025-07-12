
// const User = {
//     name:"bhuvan",
//     email:"bhuvan@gmail.com",
//     isActive :true

// }

function createUser69({name: string, isPaid: boolean}){

}
createUser69({name:"bhuvan", isPaid: true})

//Not good behaviour of object

// function createUser({name: string, isPaid: boolean}){

//     let newUser = {name:"bhuvan", isPaid: true, email:"bhuvan@gmail"}

// }
// createUser(newUser)



function createCourse():{name: string, price:number}{
    return{name:"TypeScript" , price:3999}

}

//Type Aliases

type User ={
    name:string;
    email:string;
    isActive:boolean
}



function createUser(user:User): User{
    return{name:"", email:"", isActive:true}

}
createUser({name:"", email:"", isActive:true})


//READONLY and optional

type User1 = {
    readonly _id:string    //readonly viewer can manuplate
    name:string
    email:string
    isActive:boolean
    creditcardDetails? : number  // optional  "  ?  "
}

let myUser1:User1 ={
    _id:"12345",
    name:"utshav",
    email:"uts@gmail",
    isActive:false
}
myUser1.email = "h@gamil"
// myUser1._id="asas" // read underline cause read only


export{}