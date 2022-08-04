var phones =[
    {name:"A", price: 50000, camera: 10, stroge:16, quantity: 2},
    {name:"B", price: 70000, camera: 40, stroge:20, quantity: 3},
    {name:"C", price: 90000, camera: 70, stroge:64, quantity: 1},
    {name:"D", price: 40000, camera: 20, stroge:8, quantity: 5},
    {name:"E", price: 30000, camera: 10, stroge:6, quantity: 7}
];

let sum = 0;


for(const phone of phones){
    sum = sum + (phone.price* phone.quantity)
}
console.log(sum)

