
function BellBoy (name,age,hasWorkPermit,language){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.language = language;
    this.moveSuitcase = function(){
        alert("May I take your suitcase ?")
        pickUpSuitcase();
        move();
    }
}

var BBoy1 = new BellBoy('A',21,true,["French","English"])
var BBoy2 = new BellBoy('B',23,true,["Bangla","English"])

console.log(BBoy1.language)