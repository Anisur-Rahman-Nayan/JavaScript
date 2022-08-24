const numbers = [2,23,65,23,89,23,21]
// console.log(...numbers);

const max = Math.max(9,2,1,32,88,24,212,45,12,8)
console.log(max)

const max1 = Math.max(...numbers)
console.log(max1)

const min = Math.min(...numbers)
console.log(min)


const numbers2 = [...numbers,88]
console.log(numbers2)