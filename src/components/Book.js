import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <div className="book-container">
    <div className="left-center">
      <div id="left">
        <div className="book-props">
          <h5>{book.category}</h5>
          <h2>{book.title}</h2>
          <h4 className="author">James Joyce</h4>
        </div>
        <div className="button-actions">
          <button type="button" disabled>Comments</button>
          <button
            type="button"
            className="delete"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button type="button" disabled>Edit</button>
        </div>
      </div>
      <div id="center">
        <div className="pie-graph" />
        <div className="percent">
          <h1 className="percentage">64%</h1>
          <h4 className="completed">Completed</h4>
        </div>
      </div>
    </div>
    <div id="right">
      <div className="current all-caps">Current Chapter</div>
      <div className="chapter">Chapter 17</div>
      <button type="button">Update Progress</button>
    </div>
  </div>
);

Book.propTypes = {
  handleRemoveBook: PropTypes.instanceOf(Function).isRequired,
  book: PropTypes.instanceOf(Object).isRequired,
};

export default Book;
