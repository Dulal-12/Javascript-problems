const array = [ 1,2,3,1,2,3,4,4,6,6];
let newArray = [ ];
for(let i in array){
    if(newArray.indexOf(array[i]) === -1){
        newArray.push(array[i]);
    }
}
console.log(newArray);