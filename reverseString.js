const myString = "Hello! My Friends !"

// myString.length
// myString[0]

let reverse = '';
for(const letter of myString){
    reverse = letter + reverse;   
}
console.log(reverse) 
