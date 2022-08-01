var name = ["A","B","C","D","E"]

function whosPaying(names){
    var numberOfPeople = name.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = name[randomPersonPosition];

    return randomPerson + " is going to buy lunch today !"
}

var result = whosPaying(name)
console.log(result)