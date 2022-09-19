// const bank = owner =>{
//     balance = 0;
//     return amount =>{
//         balance +=amount
//         return balance
//     }
// }
// const nayanBank = bank('Nayan')

// console.log(nayanBank(100))
// console.log(nayanBank(120))
// console.log(nayanBank(140))
// console.log(nayanBank(160))
// console.log(nayanBank(180))
// console.log(nayanBank(200))



const bank = owner =>{
    balance = 0;
   
        return{
            deposite:amount =>{
                        balance +=amount
                        return balance
                    },
            withdraw:amount =>{
                        balance -=amount
                        return balance
                    }
        }
}

const nayanBank = bank('Nayan')

console.log(nayanBank.deposite(100))
console.log(nayanBank.deposite(120))
console.log(nayanBank.deposite(140))
console.log(nayanBank.deposite(160))
console.log(nayanBank.deposite(180))
console.log(nayanBank.deposite(200))
console.log(nayanBank.withdraw(200))