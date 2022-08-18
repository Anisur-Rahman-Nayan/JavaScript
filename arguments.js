// function addNumbers(x,y){
//     let sum = 0;
//     for(const num of arguments){
//         sum = sum + num;
//     }
   
//     return sum
// }

// const ans = addNumbers(23,13,21,44,55,21)
// console.log(ans)


function getfullName(x,y){
    let fullname = '';
    for(const part of arguments){
        fullname = fullname + part + ' ' ;
    }
   
    return fullname
}

const ans = getfullName("Anisur","Rahman","Nayan")
console.log(ans)