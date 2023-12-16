function manipulateString(inputString) {
  if (typeof inputString !== 'string') {
    throw new Error('Invalid input. The argument must be a string.');
  }

  const manipulatedString = inputString.toUpperCase();

  function logString(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Invalid callback. The argument must be a function.');
    }

    const message = `The manipulated string is: ${manipulatedString}`;
    callback(message);
  }

  return logString;
}

// Example usage:
const originalString = "hello, world!";
const logStringCallback = (message) => console.log(message);
const logManipulatedString = manipulateString(originalString);
logManipulatedString(logStringCallback);
// Output: The manipulated string is: HELLO, WORLD!
