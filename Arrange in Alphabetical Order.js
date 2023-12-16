function arrangeInAlphabeticalOrder(books, logTitlesCallback) {
  if (!Array.isArray(books) || typeof logTitlesCallback !== 'function') {
    throw new Error('Invalid input. Please provide a valid array of books and a callback function.');
  }

  const titles = books.map(book => book.title);
  const sortedTitles = titles.sort();

  logTitlesCallback(sortedTitles);
}

// Example usage:
const booksList = [
  { title: 'Harry Potter', author: 'J.K. Rowling', year: 1997 },
  { title: 'Lord of the Rings', author: 'J.R.R. Tolkien', year: 1954 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
];

const logTitlesCallback = (titles) => console.log('Titles in alphabetical order:', titles);
arrangeInAlphabeticalOrder(booksList, logTitlesCallback);
// Output: Titles in alphabetical order: [ 'Harry Potter', 'Lord of the Rings', 'To Kill a Mockingbird' ]
