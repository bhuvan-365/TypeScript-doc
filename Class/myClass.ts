
// WRONG WAY
// class User {
//     constructor(email:string,name:string){
//         this.email:string = email;
//         this.name:string  = name
//     }
// }


// CORRECT WAY

class User {
    public email: string;
    name: string;
    class: string = "" //no need to worry for call it or not 
    private readonly city: string = " Kathmandu"

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const Bhuvan = new User("bhuvan@.com", "bhuvan")// because of constructor(email:string,name:string)
// Bhuvan.city = "harion-8 " // error because it s private only acceble with in class




class User2 {

    // private _courseCount = 1
    protected _courseCount = 1

    readonly city: string = "kayhmandu"
    constructor(
        public email: string,
        public name: string,
    ) {}

    //getter and setter

    get getAppleEmail(): string {
        return `apple ${this.email}`
    }
    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) { // :number,:string,:boolean not allowed no return type
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum

    }

}
     class SubUser extends User2 {
          isFamily: boolean = true
           changeCourseCount() {
               this._courseCount = 4
    }

}






export {}

