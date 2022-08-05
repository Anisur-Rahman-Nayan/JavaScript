
function biggerFriend(friends) {
    var max = friends[0].length;
    var largeName;
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > max) {
            max = friends[i].length;
            largeName = friends[i];
        }

    }
    return largeName;
}


var friends = ["akash","batash","rahim","karim","messi","anisur rahman nayan"]
var nameResult = biggerFriend(friends);
console.log(nameResult);