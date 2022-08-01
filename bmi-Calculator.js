function bmiCalculator(weight,height){
    var bmi = ((weight)/ Math.pow(height,2));
    return Math.round(bmi);
}

var bmiResult = bmiCalculator(65, 1.8)
console.log(bmiResult)

// Math.round
// Math.floor
// Math.ceil
// Math.random