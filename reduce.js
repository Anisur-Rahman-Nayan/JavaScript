const numbers= [1,4,12,56,78,98,12,23]
const sumReducer = (previous, current)=> previous+ current;
const total = numbers.reduce(sumReducer,0)
console.log(total)




const items = [
    {id:1, name:'A', price: 100},
    {id:2, name:'B', price: 300},
    {id:3, name:'C', price: 200},
    {id:4, name:'D', price: 500},
    {id:5, name:'E', price: 400},
]
const itemSumReducer = (previous, current) => previous + current.price;
const itemTotal = items.reduce(itemSumReducer,0)
console.log(itemTotal)

// const getTotalPrice = products =>{
//     const reducer = (previous, current) => previous + current.price;
//     const total = products.reduce(reducer, 0);
//     return total;
// }