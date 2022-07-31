var myFriendsAge = [21,20,22,23,24,27,25,21,22,24,26]
var myFriendsName = ['A','B','C','D','E','F','G','H','I']

console.log(myFriendsAge)
console.log(myFriendsName.length)
console.log(myFriendsName[6])

console.log(myFriendsName.indexOf('H'))
console.log(myFriendsAge.indexOf(22))
console.log(myFriendsAge.indexOf(100))

myFriendsAge[0] = 101
console.log(myFriendsAge)

var numbers = [1,2,3,4,5,6,7,8,9,10]
numbers.push(11,12,13,14,15)
console.log(numbers)

var prices = [21,40,69,81,100]
prices.pop()
// lastItem = prices.pop()
console.log(prices)

// remove from the 1st
var fruits = ["Banana","Apple"]
fruits.shift()
console.log(fruits)

// adding at 1st
fruits.unshift("Mango")
console.log(fruits)
