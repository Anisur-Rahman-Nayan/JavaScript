var output = [];
var count = 1;

function FizzBuzz(){
    
while(count <=100){
        if(count % 3 == 0 && count % 5 == 0){
            output.push("FizzBuzz")
        }
       else if (count % 3 == 0){
            output.push("FIZZ")
        }
        else if (output % 5 == 0){
            output.push("BUZZ")
        }
        else{
            output.push(count)
        }
        count++;
    }
        console.log(output)
}

FizzBuzz()