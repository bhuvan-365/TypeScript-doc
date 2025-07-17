// When we use typeof 1 ans> number , typeof "sd" ans> string , but when we type of [ array ] => object

function detectType(val: number | string) {
    // return val.toLowerCase()    cant do this 
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}
function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide id")
        return
    }
    id.toLowerCase()
}



// In operator narrowing
interface User{
name:string,
email:string,
}
interface Admin{
name:string,
email:string,
isAdmin:boolean
}
function isAdmin(account:User|Admin){
    if("isAdmin" in account){
        return account.isAdmin
    }
}

function logValue (x:Date| string){
    if(x instanceof Date){
        console.log(x.toUTCString());

    }else{
        console.log(x.toUpperCase());
    }
}

type Fish = {swim:()=> void}
type Bird = {fly: ()=> void}

export{}