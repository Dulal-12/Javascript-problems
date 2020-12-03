/*let arr = [ 1,2,3,4,5];

let max = arr[0];                           //Assume as a max number

for (let i in arr){

    let element = arr[i];

    if(element> max){                    //then we check here
        max = element;
    }
}
console.log(max);*/

let arr = [ 1,2,3,4,5]
console.log(Math.max(...arr));                     //Here use math mehod and spread operator