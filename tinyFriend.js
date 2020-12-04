function tinyFriend(friendList){
    let smallFriend = friendList[0];
    for(let i in friendList){
        if(friendList[i].length < smallFriend.length){
            smallFriend = friendList[i];
        }
    }
    return smallFriend;
}

console.log(tinyFriend(['Dulal' , 'AK']));