function add(x,y){
    return  x+y;
}

function multiply(x,y){
    return x * y;
}

function calculation (x,y,operator){
    return operator(x,y)
}

console.log(calculation(4,5,add))