// instanceof narrowing: Checks if an object is an instance of a class, narrowing its type.
// Example: if (obj instanceof MyClass) { /* obj is MyClass */ }
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
