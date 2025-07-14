
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) {}

    abstract getSepian(): void
    getReelTime(): number{
        return 8
    }
}
// const bhuvan = new TakePhoto("test","test") // Not allowed 

class Instagram extends TakePhoto {

    constructor(
        public cameraMode: string,
        public filter: string,
        public brust : number
    ) { 
        super(cameraMode, filter)
    }
    getSepian(): void {
        console.log("sepian")
    }

}
const bhuvan = new Instagram("test", "Test",3)

export{}


