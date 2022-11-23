const addingNumbers = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
    return currentResult + currentValue;
  }, 0);
};

const numbersToAdd = addingNumbers(5, 10, 2, 3.7);
console.log(numbersToAdd);
