//Function for converting roman number to integer number
function romanToInt(roman = "") {
  let romanMap = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };
  // transform to lowercase and reverse the string
  let romanStr = roman.toLowerCase().split("").reverse().join("");
  let decimal = 0; //decimal number;
  for (let i = 0; i < romanStr.length; i++) {
    let previousRomanChar = romanStr[i - 1];
    let currentRomanChar = romanStr[i];
    if (romanMap[currentRomanChar] < romanMap[previousRomanChar]) {
      decimal -= romanMap[currentRomanChar];
    } else {
      decimal += romanMap[currentRomanChar];
    }
  }
  return decimal;
}

//testing function
let romanString = "mcmxciv";
let result = romanToInt(romanString);
console.log(result);
