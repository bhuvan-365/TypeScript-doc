// When we use typeof 1 ans> number , typeof "sd" ans> string , but when we type of [ array ] => object
function detectType(val) {
    // return val.toLowerCase()    cant do this 
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
