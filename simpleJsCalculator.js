//function for simple calculator
/**
 * @param {number} num1 - first number
 * @param {string} operator - operator
 * @param {number} num2 - last number
 */
function simpleCalculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      throw new Error("Division by ZERO is not allowed");
    } else {
      return num1 / num2;
    }
  } else {
    throw new Error("Invalid operator");
  }
}

// testing function
let calculate = simpleCalculator(10, "/", 2);
console.log(calculate);
