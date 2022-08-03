function simpleInterestCalculation(amount,time,rate){
    let si = (amount*time*rate) / 100;
    return si;
}

let result = simpleInterestCalculation(1000,2,10);
console.log(result)