import { NamedTupleMember } from "typescript"

const  score : Array<number> = []
const names : Array<string> =[]

function identityOne(val:boolean | number): boolean | number { //either num or boolean
return val
}

function identityTwo (val:any):any{ // anything
    return val
}

function identityThree <Type>(val:Type):Type{ // almost like any  , once you type any value the value type is locked 
    
    return val
}
// identityThree("name")
// identityThree(true)

function identityFour<T>(val:T):T{
    return val
}

interface Bootle {
    brand:string
    type: number
}

identityFour<Bootle>({})

export{}