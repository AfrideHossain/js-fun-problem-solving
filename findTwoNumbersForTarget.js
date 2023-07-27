// function for finding two numbers sum for given target value
function findTwoNumbersSum(arr = [], target = 0) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === target) {
      return [i, j];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return [];
}

//testing function
let twoNums = findTwoNumbersSum([1, 3, 6, 8, 11, 15], 9);
console.log(twoNums);
