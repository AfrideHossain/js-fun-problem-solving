// function for string reverse without built-in reverse() method

function stringReverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// test function
let reverseStr = stringReverse("hello world");
console.log(reverseStr);
