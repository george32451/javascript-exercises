// Сложение всех входящих в num цифр до тех пор, пока
// не останется одна цифра
// Пример: число 38:
// 1)3 + 8 = 11
// 2)1 + 1 = 2
// Ответ: 2
const addDigits = (num) => {
  let result = 0;
  if(String(num).length > 1){
    result = addition(String(num));
  } else return num;
  return addDigits(result);
}

const addition = (str) => {
  let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += Number(str[i]); 
    }
  return result;
}

export default addDigits;

console.log(addDigits(1259));