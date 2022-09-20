function doSomething(){
    console.log("I am coding JS")
}
console.log("First")
console.log("Second")
setTimeout(doSomething, 5000)

setTimeout(function(){
    console.log('Function Calling !')
},4000)

setTimeout( () =>{
    console.log("arrow function")
},3000)

console.log("Third")
console.log("Forth")