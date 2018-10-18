//Проверяет, является ли строка палиндромом (читается одинаково как слева направо, так и наоборот), 
//возвращает true or false
const isPalindrome = (str) => {
  if (str.length < 2) return true;

  const firstSymbol = str[0];
  const lastSymbol = str[str.length - 1];

  if (firstSymbol !== lastSymbol) return false;

  const stringWithotFirstAndLastSymbols = str.substr(1, str.length - 2);

  if (firstSymbol === lastSymbol) {
    return isPalindrome(stringWithotFirstAndLastSymbols);
  }

  return false;

};

console.log(isPalindrome('aibohphobia')); //true