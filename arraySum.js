/*let arr = [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for(let i in arr){
    sum += arr[i];
}

console.log(sum);*/
let arr = [1,2,3,4,5,6];
console.log(arr.reduce((acc,curr)=>acc+curr));            //use reduce() to solve it