import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    const { removeBook } = this.props;
    const s = this.props;
    const bookIndex = (s.books).findIndex(x => x === book);
    removeBook(bookIndex);
  }

  render() {
    const { books } = this.props;
    return (
      <div className="book-container">
        <table>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Remove Book</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                handleRemoveBook={() => this.handleRemoveBook(book)}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.instanceOf(Function).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
