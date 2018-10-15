//возвращает наименьший делитель переданного числа
const smallestDivisor = (num) => {
  const iter = (accumulator) => {
    if(num===1) return 1;
    if(num%2===0) return 2;
    if(num%accumulator===0) return accumulator;
    return iter(accumulator+1);
  }
  return iter(2);
};

console.log(smallestDivisor(15));