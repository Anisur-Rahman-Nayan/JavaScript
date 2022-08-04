var numbers = [12,44,55,13,27,76,90,76,122,15,150,4,8,3,8,130]
var guessTaken = numbers[0];

function largeNumber(numbers){
    for (var i = 0; i<numbers.length;i++){
        if (guessTaken < numbers[i]){
            guessTaken = numbers[i]
        }
    }
    return guessTaken;
}

var output = largeNumber(numbers);
console.log(output)