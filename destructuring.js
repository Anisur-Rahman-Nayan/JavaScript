// const numbers = [5,4]
// const x = numbers[0]
// const y = numbers[1]

// const [x , y] = [5,4]
// console.log(x,y)

// const [x , y] = numbers

// function boxify (num1,num2){
//     const nums = [num1,num2]
//     return nums
// }
// console.log(boxify(90,34))

// const products = {
//     name:'Laptop',price: 1200000, brand:'Dell',color:"black"
// }
// const [first, second] = products.name
// console.log(first,second)


// const {name, age} = {name: 'nayan', age:22};
// const {name, age} = {id:21 , name: 'nayan', age:22};
// console.log(name,age)

const employee ={
    ide: 'VS Code',
    designation: 'developer',
    machine: 'windows',
    language: ['html','css','js'],
    specifation: {
        height: 158,
        weight: 68,
    },
}

const {machine,ide} = employee
console.log(machine,ide)
const {height,weight} = employee.specifation
console.log(weight,height)
const [first,second] = employee.language
console.log(first,second)


const x = 50;
const y = 100;
const obj = {
    x: x,
    y: y
};
// shortchut
const obj1 = { x, y }

const name = 'Nayan';
const area = 'Dhaka';

const xyz = {
    name: name,
    area: area
}
const xyz1 = { name, area };