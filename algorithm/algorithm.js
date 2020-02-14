for(i=0;i<100;i++){
      if (i%3==0 && i%5==0){
        console.log(i+"FizzBuzz");
      }else if (i%3==0){
        console.log(i+"Fizz");
      }else if (i%5==0){
        console.log(i+"Buzz");
      } else{
        console.log(i);
      }
    }

for (i = 1; i< 11; i++){
    for( j = 1; j < 11; j++){
         mult = i * j;
         console.log(`${i} * ${j} : ${mult}`);
    }
    
}
