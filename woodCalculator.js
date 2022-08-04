function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perbedWood = 50;

    chairWoodQuantity = chairQuantity * perChairWood;
    tableWoodQuantity = tableQuantity * perTableWood;
    bedWoodQuantity = bedQuantity * perbedWood;

    const totalWood = chairWoodQuantity+ tableWoodQuantity+bedWoodQuantity;
    return totalWood;

}

const total = woodCalculator(1,1,1);
console.log(total)