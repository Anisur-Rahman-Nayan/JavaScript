function BMICalculator(height,weight){
    var bmi = (weight / (Math.pow(height,2)))
     
    if (bmi < 18.5){
       return "UNDERWEIGHT !";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        return "NORMAL !";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        return "OVERWEIGHT !";
    }
    else if (bmi >= 30 && bmi <= 34.9){
        return "OBESE !";
    }
    else if (bmi > 35){
        return "EXTREMELY OBESE !";
    }
    else{
        return "Enter a correct Value !";
    }
}

var BMIResult = BMICalculator(60, 2);
console.log(BMIResult)