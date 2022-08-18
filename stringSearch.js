const products = [
    'Dell Hardcore 129 200GB laptop',
    'iphone 1TB camera flashlight phone',
    'yellow laptop with black camera Dell',
    '1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop',
    'HTC low price phone',
    'purple color phone with Laptop'
]


// indexOf
const searching = 'laptop'
const output = [];


for (const product of products){
    if (product.toLowerCase().indexOf(searching.toLowerCase()) !=-1){
        // output.push(product)
    }
}
// console.log(output)


// includes
for (const product of products){
    if (product.toLowerCase().includes(searching.toLowerCase()) !=-1){
        // output.push(product)
    }
}
// console.log(output)


const finding = 'Dell'
for (const product of products){
    if (product.toLowerCase().startsWith(finding.toLowerCase())){
        // output.push(product)
    }
}
// console.log(output)

for (const product of products){
    if (product.toLowerCase().endsWith(finding.toLowerCase())){
        output.push(product)
    }
}
console.log(output)