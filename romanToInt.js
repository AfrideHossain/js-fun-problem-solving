//Function for converting roman number to integer number
function romanToInt(roman = "") {
  let romanMap = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    d: 500,
    m: 1000,
  };
  // transform to lowercase and reverse the string
  let romanStr = roman.toLowerCase().split("").reverse().join("");
  let decimal = 0; //decimal number;
  for (let char of romanStr) {
    let romanVal = romanMap[char];
    console.log(romanVal);
    if (decimal >= romanVal) {
      decimal = decimal - romanVal;
    } else {
      decimal += romanVal;
    }
  }
  console.log(decimal);
}

//testing function
romanToInt("iii");
