function operate (a,b , callback){
    return callback(a,b);
}

function add(a,b){
    return (a+b)
}

function substract(a,b){
    return (a-b)
}

function multiply (a,b){
    return (a*b)
}

function divide (a,b){
    return (a/b)
}

console.log("Addition:",operate(10,5, add));
console.log("Substruction:",operate(300,50,substract));
console.log("Multiply:",operate(30,5,multiply));
console.log("Divide:",operate(500,10,divide));
