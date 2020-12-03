let a = 5 ; 
let b = 7;
console.log('Brfore Swap a = ',a ,'b = ',b);
 [a , b] = [b, a];
console.log('After Swap a = ',a ,'b = ',b);

//use another way

let temp = a;
a = b;
b = temp
console.log('After Swap a = ',a ,'b = ',b);