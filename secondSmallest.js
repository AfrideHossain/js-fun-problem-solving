// function to find second smallest number from an array
/**
 * function to find second smallest number from an array
 * @param {array} nums - Numbers array
 */
function secondSmallest(nums) {
  nums.forEach((num) => {
    if (typeof num === "string") {
      throw new Error("String not allowed");
    }
  });
  let sortedNums = nums.sort((a, b) => a - b);
  console.log(sortedNums);
  return sortedNums[1];
}

// testing function
let numbers = [42, 17, "98", 55, 23];
let num = secondSmallest(numbers);
console.log(num);
