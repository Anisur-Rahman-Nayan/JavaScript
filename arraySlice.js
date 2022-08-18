const numbers = [3,1,2,4,5,2,7,8,12,22,41,55]
const numberSlice = numbers.slice(4,8)
// console.log(numberSlice)


const numberSplice = numbers.splice(4,2)
// console.log(numberSplice)

const numberSplice2 = numbers.splice(4,3,99,111,888,777)
console.log(numberSplice2)
console.log(numbers)