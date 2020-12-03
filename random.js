let num = 2.5 ;
// console.log(Math.floor(num)); //Going to the under using floor
// console.log(Math.ceil(num));  //Going to the top site using ceil
// console.log(Math.round(num));  //(if .1 -.49)Down (.5<)top

for(let i = 1 ; i<= 10 ;i++){
    let random = Math.random()*6;
    console.log(Math.ceil(random));
}