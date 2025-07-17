import { NamedTupleMember } from "typescript"

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number { //either num or boolean
    return val
}

function identityTwo(val: any): any { // anything
    return val
}

function identityThree<Type>(val: Type): Type { // almost like any  , once you type any value the value type is locked 

    return val
}
// identityThree("name")
// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle {
    brand: string
    type: number
}

// identityFour<Bootle>({})

function getSearchProduct<T>(products: T[]): T {

    //do some data base operation
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearcProduct = <T>(products: T[]): T => {
    //do some data base operation
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username:string,
    password:string
}


function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo

    }
}
// anotherFunction(3,{})

// ClassType

interface Quiz{
    name:string,
    type:string,

}
interface Course{
    name:string,
    author:string,
    subject:string
}
class Sellable<T>{
    public cart : T[] = []

    addToCart(product:T){
        this.cart.push(product)
        
    }
}


export { }