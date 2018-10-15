//Вычисляет, простое ли num число
const isPrime = (num) => {
  if (num<=1) return false;
  let isPrimeCounter = 0;
  for(let counter = 1; ; counter++){
    if(num%counter===0) {
      isPrimeCounter+=1;
      }
    if(counter>num) break;
  }
  switch(isPrimeCounter){
    case 2:
      return true;
    default:
      return false;
  }
}
console.log(isPrime(7)); //return true