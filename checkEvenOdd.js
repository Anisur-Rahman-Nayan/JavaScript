function even(number){
    if (number % 2 == 0 ){
        return "The Number Is Even !"
    }
    else if (number % 2 != 0){
        return "The Number Is Odd !"
    }
    else{
        return "Enter a valid Number !"
    }
}

let ans = even(89);
console.log(ans)