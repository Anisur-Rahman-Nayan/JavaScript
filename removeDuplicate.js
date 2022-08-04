function removeDuplicate(names){
    const unique = [];
    for (var i=0; i< names.length;i++){
        var element = names[i]
            if (unique.indexOf(element) == -1 ){
                unique.push(element)
        }
    }
    return unique;
}

var names = ["A","B","C","D","A","F","B","X","Y","X","Z"]
const uniqueName = removeDuplicate(names);
console.log(uniqueName)