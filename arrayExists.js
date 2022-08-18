function megaFriends(friends){

if(Array.isArray(friends)== false){
    return 'please provide an array '
}


    let mega= friends[0]
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend
        }
    }
    return mega;
}

const friends = ['messi','ronaldo','naymer','anisur','rahman','nayan']
const myBigBuddy = megaFriends(friends)

// console.log(myBigBuddy)

if (friends.indexOf('messi') != -1){
    // console.log('friend exists')
}

if (friends.includes('messi')==true){
    // console.log('friend exists')
}

const x = [1,2,3]
const y = [4,5,6,7]
const combined = x.concat(y)
console.log(combined)