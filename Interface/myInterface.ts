interface User {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string,
    // startTrail: ()=> string
    startTrail(): string,
    getCoupon(couponname: string, off: number): number
}
interface User {
    githubTokens: string
}
interface Adim extends User {
    role: "admin" | "ta" | "learner"
}


const bhuvan: Adim = {
    dbId: 777,
    role: "admin",
    email: "utshv@gmail.com",
    userId: 2213,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "Bhuvan", off: 10) => {
        return 10
    },
    githubTokens: "bhuvan/github"
}
bhuvan.email = "h@h.com"
// bhuvan.dbId = 45678;


//CLass 2

interface TakePhoto {
    cameraMode: string,
    filter: string,
    brust: number,

}
interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
    ) { }

}
class Youtube implements TakePhoto, Story {
    constructor(

        public cameraMode: string,
        public filter: string,
        public brust: number,
        public shorts: string // you can add more but not less than TakePhoto 

    ) { }
    createStory(): void {
        console.log("Story is created")
    }

}





export { }
