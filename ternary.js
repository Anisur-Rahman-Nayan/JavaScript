const money = 100
let food = money > 200 ? "Biryani" : "Cha-biscuit"
console.log(food)

const numStr = money + ''
console.log(numStr)

const x = '100'
const y = + x
const z = parseInt(x)
console.log(y)
console.log(z)

let isActive = true
// const isActive = true

const showUser = () => console.log('Display User')
const hideUser = () => console.log('Hide User')
// isActive ? showUser() : hideUser()
// isActive && showUser()
isActive || hideUser()

// toggle
// isActive = !isActive