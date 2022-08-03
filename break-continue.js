// var i = 0;
// while(i<15){
//     console.log(i);
//     if(i==8){
//         break;
//     }
//     i++;
// }

var array = [22,13,66,88,35,34,88,98,100]

for (var i = 0; i<array.length; i++){
    var number = array[i];
    if(number > 50 ){
        continue;
    }
    console.log(number);
}