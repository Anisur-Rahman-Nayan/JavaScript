function picnicBudget(personNumber){
    var cost;
    if(personNumber <= 100){
        cost = personNumber * 5000;
        return cost;
    }
    else if ( personNumber <=200 && personNumber > 100){
        var cost1 = 5000 * 100;
        var cost2 = (personNumber - 100) * 4000;
        var total = cost1 + cost2;
        return total; 
    }
    else{
        var cost1 = 5000*100;
        var cost2 = 4000*200;
        var cost3 = (personNumber - 200)*3000;
        var totalCost = cost1 + cost2+cost3;
        return totalCost;
    }
}
const totalTaka = picnicBudget(200);
console.log(totalTaka)