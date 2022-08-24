const numbers = [5,13,7,41,29,79,30,5,2,19]

const bigNumbers = numbers.filter(num => num > 20);
const smallNumbers = numbers.filter(num => num < 10);

// console.log(bigNumbers)
// console.log(smallNumbers)


const products = [
    {id: 1, name: 'laptop', price: 45000, color:'yellow'},
    {id: 2, name: 'mobile', price: 80000, color:'black'},
    {id: 3, name: 'watch', price: 35000 , color:'green'},
    {id: 4, name: 'tablet', price: 23000, color:'black' },
];

const FindProductsExpensive = products.filter(pro => pro.price > 40000 );
// console.log(FindProductsExpensive)

const FindProductsBlacks = products.filter(pro => pro.color == 'black')
// console.log(FindProductsBlacks)

const greenItem = products.find(pro=> pro.color == 'black');
console.log(greenItem)