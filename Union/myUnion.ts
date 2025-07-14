let score: number | string = 56;

score = 44;
score = "45";


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let utshav: User | Admin = { name: "utshav", id: 3334 }

utshav = { username: "hc", id: 334 }

// function getDbId (id:number | string ){

//     console.log(`Db id is : ${id}`)
// }
getDbId(34)
getDbId("no")

function getDbId(id: number | string) {

    if (typeof id === "string") {
        id.toLowerCase()
    }

}

const data1 : number[]=[1,2,3]
const data2 : string[]=["1","2","3"]
const data3 : number[] | string[] = [1,2,3]
const data4 : (number | string | boolean )[] = [1,2,3]

export{}