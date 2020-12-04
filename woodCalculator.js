function woodCalculator ( chair , table , bed){

            if ( chair < 0 || table < 0 || bed < 0){
                return 'Please enter valid input';
            }
            else{
                return chair*1 + table*3 + bed*5;
            }
}

const result = woodCalculator(2,3,4);
console.log(result);