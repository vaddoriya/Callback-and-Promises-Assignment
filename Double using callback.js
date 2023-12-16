function doubleWithCallback(arr, callback) {
  if (!Array.isArray(arr) || typeof callback !== 'function') {
    throw new Error('Invalid input. The first argument must be an array, and the second argument must be a callback function.');
  }

  const doubledArray = arr.map(callback);
  return doubledArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4];
const doubleCallback = (num) => num * 2;
const resultArray = doubleWithCallback(inputArray, doubleCallback);
console.log(resultArray); // Output: [2, 4, 6, 8]
