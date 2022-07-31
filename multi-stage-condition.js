// var number = 101

// if (number > 150){
//     console.log("Bigger than 150 ")
// }
// else if(number > 100){
//     console.log("Bigger than 100")
// }
// else if(number > 50){
//     console.log("Bigger than 50")
// }
// else if(number > 0){
//     console.log("Bigger than 0")
// }
// else{
//     console.log("Enter a valid Number! ")
// }

let sum = 35;
if (sum % 10 == 0){
    console.log("a");
} else if (sum % 2 == 1){
    if (sum % 5 == 0 && sum % 2 == 0){
        console.log("b");
    } else if (sum % 5 == 0){
        console.log("c")
    } else {
        console.log("d")
    }
} else {
    console.log("e")
}