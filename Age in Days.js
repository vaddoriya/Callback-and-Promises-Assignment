function ageInDays(person, logResult) {
  if (
    !person ||
    typeof person !== 'object' ||
    typeof person.firstName !== 'string' ||
    typeof person.lastName !== 'string' ||
    typeof person.age !== 'number'
  ) {
    throw new Error('Invalid input. Please provide a valid person object.');
  }

  const fullName = `${person.firstName} ${person.lastName}`;
  const ageInDays = person.age * 365; // Assuming a year has 365 days

  return function () {
    const message = `The person's full name is ${fullName} and their age in days is ${ageInDays}.`;
    logResult(message);
  };
}

// Example usage:
const personInfo = {
  firstName: 'Mithun',
  lastName: 'S',
  age: 20,
};

const logResultCallback = (message) => console.log(message);
const logAgeInDays = ageInDays(personInfo, logResultCallback);
logAgeInDays();
// Output: The person's full name is Mithun S and their age in days is 7300.
