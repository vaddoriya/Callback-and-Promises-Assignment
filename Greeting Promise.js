function greetingPromise(name) {
  return new Promise((resolve, reject) => {
    if (typeof name !== 'string') {
      reject(new Error('Invalid input. Please provide a valid name.'));
    } else {
      const greetingMessage = `Hello, ${name}!`;
      resolve(greetingMessage);
    }
  });
}

// Example usage:
const nameToGreet = 'Mithun';

greetingPromise(nameToGreet)
  .then((greeting) => {
    console.log(greeting); // Output: Hello, Mithun!
  })
  .catch((error) => {
    console.error(error.message);
  });
