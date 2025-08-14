// Discriminated Union And Exhaustiveness Checking with Never 
// Discriminated unions allow you to define a type (Shape) that can be one of several interfaces, each with a unique kind property. This makes it easy to safely handle different shapes in functions by checking the kind property, ensuring type safety and clear logic for each case.
function getTureShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    if (shape.kind === "square") {
        return shape.side * shape.side;
    }
    if (shape.kind === "rectangle") {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}
