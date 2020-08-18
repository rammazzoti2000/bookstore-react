const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = bookIndex => ({
  type: 'REMOVE_BOOK',
  bookIndex,
});

export { createBook, removeBook };
