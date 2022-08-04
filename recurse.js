// program to find the factorial of a number
function factorial(x) {

    if (x === 0) {
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
}

const num = 7;

if (num > 0) {
    let result = factorial(num);
    console.log(`The factorial of ${num} is ${result}`);
}