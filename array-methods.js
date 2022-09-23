const products = [
    {name:'Laptop',price: 1200000, brand:'Dell',color:"black"},
    {name:'Phone',price: 920000, brand:'Apple',color:"red"},
    {name:'Watch',price: 72000, brand:'Apple',color:"silver"},
    {name:'Laptop',price: 902000, brand:'HP',color:"yellow"},
    {name:'Laptop',price: 112000, brand:'Lenovo',color:"white"},
    {name:'Phone',price: 122000, brand:'Samsung',color:"black"},
    {name:'Airbud',price: 12000, brand:'Samsung',color:"green"},
]

// array will be returned
// const brands = products.map(pd => pd.brand)
// console.log(brands)
// const prices =products.map(pd => pd.price )
// console.log(prices)

// if you don't expect return
// products.forEach(pd=> console.log(pd))
// products.forEach(pd=> console.log(pd.color))
// products.forEach(pd=> {
//     console.log(pd)
// })


// filter will give only these elements which will fulfill the condition
// array will be return
// const cheapProducts= products.filter(pd => pd.price <=100000)
// console.log(cheapProducts)

// const specificPd = products.filter(pd=>pd.name.includes('n'))
// console.log(specificPd)

// find and filter is same but find will give only the 1st matched item
// Object will be returned
const specificPd = products.find(pd=>pd.name.includes('n'))
console.log(specificPd)


