const name = 'Anisur Rahman Nayan'
const words = name.split(' ');
// console.log(words)
const withoutA = name.split('a')
// console.log(withoutA)


const smallSlice = name.slice(14,19)
// console.log(smallSlice)

const anotherPart = name.substr(14,3)
// console.log(anotherPart)

const x =name.substring(7,19)
// console.log(x)

const first = 'Anisur Rahman'
const second = 'Nayan'
const fullName = first.concat(second)
// console.log(fullName)

const wordsJoin =  ['a','b','c','d']
// const allJoin = wordsJoin.join('')
const allJoin = wordsJoin.join(',')
console.log(allJoin)