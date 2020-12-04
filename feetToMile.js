function feetToMile (feet){
    const mile = (feet > -1) ? feet*0.000189394 : 'Enter valid number';
    return mile;
}

const result = feetToMile(909990);
console.log(result);