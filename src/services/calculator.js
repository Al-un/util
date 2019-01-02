/**
 * Business logic of the calculator
 */

/**
 * Do the calculation:
 *
 * 1. Proceed to multiplication and division
 * 2. Proceed to addition and substraction
 *
 * @param {Array} inputArray alternance of Number and operator defining the
 * requested calculation
 */
export const calculate = inputArray => {
  let calc1 = multiplyAndDivide(inputArray);
  let calc2 = addAndSubstract(calc1);
  return calc2;
};

/**
 * Proceed to all multiplications and division
 * @param {Array} inputArray
 */
const multiplyAndDivide = inputArray => {
  while (inputArray.includes('*') || inputArray.includes('/')) {
    let multIndex = inputArray.indexOf('*');
    let divIndex = inputArray.indexOf('/');
    let operand1, operand2, result;
    if (multIndex > 0) {
      operand1 = inputArray[multIndex - 1];
      operand2 = inputArray[multIndex + 1];
      result = operand1 * operand2;
      inputArray.splice(multIndex - 1, 3, result);
    } else if (divIndex > 0) {
      operand1 = inputArray[divIndex - 1];
      operand2 = inputArray[divIndex + 1];
      result = operand1 / operand2;
      inputArray.splice(divIndex - 1, 3, result);
    }
    console.log(inputArray);
  }
  return inputArray;
};

/**
 * Proceed to all additions and substractions
 * @param {Array} inputArray
 */
const addAndSubstract = inputArray => {
  while (inputArray.length > 1) {
    let operand1 = inputArray.shift();
    let operator = inputArray.shift();
    let operand2 = inputArray.shift();
    let opeResult;
    switch (operator) {
      case '+':
        opeResult = operand1 + operand2;
        break;
      case '-':
        opeResult = operand1 - operand2;
        break;
    }
    inputArray.unshift(opeResult);
  }

  return inputArray;
};
