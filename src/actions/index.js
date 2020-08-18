export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  book,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export { createBook, removeBook, changeFilter };
