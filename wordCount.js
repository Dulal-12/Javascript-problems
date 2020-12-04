/*let string = 'I am good boy';
console.log(string.split(" ").length);*/


let string = ' I am very dedicated for my work';
let count = 0 ;
string = string.trim();
for(let i in string){
    if(string[i] == ' ' &&  string[i-1] !== ' ' ){
        count++;
    }
}
count++;

console.log(count);