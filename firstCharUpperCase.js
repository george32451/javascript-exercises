//Возводит в верхний регистр каждую первую букву в слове
const solution = (str) => {
  let counter = 0;
  let newString = '';

  while(counter<str.length) {

    if (counter === 0 && str[counter].toUpperCase() || str[counter - 1] === ' ' && str[counter + 1].toUpperCase()) {
      newString += str[counter].toUpperCase();
    } else newString += str[counter];

    counter+=1;
  }
  return newString;
}

console.log(solution(' many different words inside sentence'));