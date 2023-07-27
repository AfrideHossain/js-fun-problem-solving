// function to find second smallest number from an array
function secondSmallest(nums = []) {
  nums.forEach((num) => {
    if (typeof num === "string") {
      throw new Error("String not allowed");
    }
  });

  let smallest = nums[0];
  let secondSmallest = nums[0];

  for (let num of nums) {
    if (num <= smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest) {
      secondSmallest = num;
    }
  }
  return secondSmallest;
}

// testing function
let numbers = [42, 17, 98, 55, "23"];
let secondSmallestNum = secondSmallest(numbers);
console.log(secondSmallestNum);
