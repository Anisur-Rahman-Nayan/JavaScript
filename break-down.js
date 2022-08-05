const products =[
    {name:"A mobile",price: 150000},
    {name:"B",price: 100000},
    {name:"C laptop",price: 110000},
    {name:"D laptop",price: 10000},
    {name:"E",price: 90000},
    {name:"F laptop",price: 50000},
    {name:"G",price: 80000},
    {name:"H mobile",price: 70000},
];

function searchProducts(products,searchText){
    for(const product of products){
       if(product.price < 60000){
    //    break;
            continue;
    }
    console.log(product)
    }
    
}

searchProducts(products)
