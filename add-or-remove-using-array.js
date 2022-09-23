const products = [
    {name:'Laptop',price: 1200000, brand:'Dell',color:"black"},
    {name:'Phone',price: 920000, brand:'Apple',color:"red"},
    {name:'Watch',price: 72000, brand:'Apple',color:"silver"},
    {name:'Laptop',price: 902000, brand:'HP',color:"yellow"},
    {name:'Laptop',price: 112000, brand:'Lenovo',color:"white"},
    {name:'Phone',price: 122000, brand:'Samsung',color:"black"},
    {name:'Airbud',price: 12000, brand:'Samsung',color:"green"},
]

const newProduct = {
    name:'webcam',
    price: 2000,
    brand: "hp"
}

// copy products array and then add newProduct
const newProducts = [...products,newProduct];

// create a new array without one specific item

const remaining = products.filter(pd=> pd.name !=='Phone');
