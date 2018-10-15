//"Переворачивает" входную строку
const reverse = (str) => {

  let stringLength = str.length-1;
  let result = '';

  while(stringLength >= 0){
    result = result + str[stringLength]
    stringLength--;
  }
  
  return result;
}

console.log(reverse('Hello'));