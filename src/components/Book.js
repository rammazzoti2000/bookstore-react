import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td>
      <button
        type="button"
        className="delete"
        onClick={handleRemoveBook}
      >
        Remove
      </button>
    </td>
  </tr>
);

Book.propTypes = {
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
