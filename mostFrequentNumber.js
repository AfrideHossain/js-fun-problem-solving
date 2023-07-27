// Function for finding most frequent number from an array
const mostFrequentNumber = (arr = []) => {
  let frequency = {};
  for (const nums of arr) {
    if (frequency[nums]) {
      frequency[nums]++;
    } else {
      frequency[nums] = 1;
    }
  }
  //finding max count from frequency object
  let mostFrequentNumber = arr[0];

  for (const num of arr) {
    if (frequency[mostFrequentNumber] < frequency[num]) {
      mostFrequentNumber = num;
    }
  }
  return mostFrequentNumber;
};

//testing function
let numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let frequentNumber = mostFrequentNumber(numbers);
console.log(frequentNumber);
