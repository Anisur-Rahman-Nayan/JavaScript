var phones =[
    {name:"A", price: 50000, camera: 10, stroge:16},
    {name:"B", price: 70000, camera: 40, stroge:20},
    {name:"C", price: 90000, camera: 70, stroge:64},
    {name:"D", price: 40000, camera: 20, stroge:8},
    {name:"E", price: 30000, camera: 10, stroge:6}
];

let cheapest = phones[0];

for(const phone of phones){
    if (phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest)

