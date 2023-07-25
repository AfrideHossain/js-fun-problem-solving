// function for adding positive numbers
function addPositiveNumbers(nums) {
  let sum = 0;
  nums.forEach((num) => {
    if (num > 0) {
      sum += num;
    }
  });
  return sum;
}

// testing function
let numArr = [2, -5, 10, -3, 7];
let sum = addPositiveNumbers(numArr);
console.log(sum);
