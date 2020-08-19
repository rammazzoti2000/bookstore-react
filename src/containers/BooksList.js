import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div className="book-container">
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        { books.map(book => (<Book key={book.id} book={book} />)) }
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(BooksList);
