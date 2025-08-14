// Discriminated Union And Exhaustiveness Checking with Never 
// Discriminated unions allow you to define a type (Shape) that can be one of several interfaces, each with a unique kind property. This makes it easy to safely handle different shapes in functions by checking the kind property, ensuring type safety and clear logic for each case.

// Example:

// You can pass a Circle, Square, or Rectangle to getArea or getTureShape, and the function will correctly calculate the area based on the shape type.
// This pattern is usef



interface Circle{
    kind:"circle"
    radius: number
}

interface Square {
    kind:"square"
    side: number
}

interface Rectangle{
    kind:"rectangle",
    length: number,
    width: number
}

type Shape = Circle| Square | Rectangle

function getTureShape(shape:Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius **2
    }
    if(shape.kind === "square"){
        return shape.side * shape.side;
    }
    if(shape.kind === "rectangle"){
        return shape.length * shape.width;
    }
}

function getArea(shape:Shape){
    switch(shape.kind){
        case "circle":
              return Math.PI * shape.radius **2
        case 'square':
             return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape;
    }
}