function brickCalculator (size){
   if(size>0){
    if (size > 20){
        let brick = (size - 20)*10 + (10 * 12) + (10*15) ;
        return brick;
    }
    else if ( size > 10 &&  size <=20){
        let brick = (size - 10)*12 + (10*15);
        return brick;
    }
    else {
        return size*15;
    }
   }
   else{
       return 'Enter valid size'
   }
}
console.log(brickCalculator(-8));