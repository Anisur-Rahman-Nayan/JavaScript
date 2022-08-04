var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]
var sum = 0;

function arrayTotal(numbers){
    for (var i=0; i< numbers.length;i++){
        sum = sum + numbers[i];
    }
        return sum;
}

var ans = arrayTotal(numbers);
console.log(ans)
